// Node runtime — Vercel Serverless Function
// Handles OAuth 2.0 callback: validates state, exchanges code, issues session
import type { IncomingMessage, ServerResponse } from "http";
import { exchangeCodeAndValidate } from "../../lib/oauth-node.js";
import { signSession } from "../../lib/session-edge.js";

/**
 * Derives the request origin from forwarded headers.
 * Uses the same logic as login.ts so redirect_uri matches.
 */
function getRequestOrigin(req: IncomingMessage): string {
  const proto =
    (req.headers["x-forwarded-proto"] as string | undefined)?.split(",")[0].trim() ??
    "https";
  const host =
    (req.headers["x-forwarded-host"] as string | undefined) ??
    (req.headers["host"] as string | undefined) ??
    "localhost";
  return `${proto}://${host}`;
}

/**
 * Parses the Cookie header into a name→value map.
 * Wraps decodeURIComponent in try/catch so malformed percent-encoding
 * never throws — returns the raw value instead.
 */
function parseCookieHeader(cookieHeader: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const part of cookieHeader.split(";")) {
    const eq = part.indexOf("=");
    if (eq < 0) continue;
    const name = part.slice(0, eq).trim();
    const raw = part.slice(eq + 1).trim();
    let value = raw;
    try {
      value = decodeURIComponent(raw);
    } catch {
      value = raw;
    }
    result[name] = value;
  }
  return result;
}

/**
 * Validates a post-login return path to prevent open redirects.
 * Must start with "/" but NOT "//" and must NOT contain ":".
 */
function safeReturnTo(value: string | undefined): string {
  if (
    typeof value === "string" &&
    value.startsWith("/") &&
    !value.startsWith("//") &&
    !value.includes(":")
  ) {
    return value;
  }
  return "/";
}

function clearCookie(name: string, path = "/"): string {
  return `${name}=; Path=${path}; Max-Age=0; HttpOnly; Secure; SameSite=Lax`;
}

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> {
  const origin = getRequestOrigin(req);
  // Build the full callback URL — openid-client derives redirect_uri from this
  const currentUrl = new URL(req.url ?? "/api/auth/callback", origin);

  const cookieHeader = req.headers["cookie"] ?? "";
  const cookies = parseCookieHeader(cookieHeader);

  const storedState = cookies["__oauth_state"];
  const verifier = cookies["__pkce_verifier"];
  const returnTo = cookies["__return_to"];

  // CSRF check — validate state parameter
  const callbackState = currentUrl.searchParams.get("state");
  if (!callbackState || !storedState || callbackState !== storedState) {
    res.statusCode = 403;
    res.setHeader("Content-Type", "text/plain");
    res.end("State mismatch — possible CSRF attack.");
    return;
  }

  if (!verifier) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.end("Missing PKCE verifier.");
    return;
  }

  const code = currentUrl.searchParams.get("code");
  if (!code) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.end("Missing authorization code.");
    return;
  }

  let claims: Record<string, unknown>;
  try {
    claims = await exchangeCodeAndValidate(code, verifier, currentUrl);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    // Tenant mismatch is explicit 403; all other token errors are 400
    const status = message.startsWith("Tenant mismatch") ? 403 : 400;
    res.statusCode = status;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Token validation failed: ${message}`);
    return;
  }

  // Mint the session cookie
  const sessionToken = await signSession({
    sub: typeof claims["sub"] === "string" ? claims["sub"] : undefined,
    email: typeof claims["email"] === "string" ? claims["email"] : undefined,
    name: typeof claims["name"] === "string" ? claims["name"] : undefined,
    tid: typeof claims["tid"] === "string" ? claims["tid"] : "",
  });

  const setCookies: string[] = [
    `__session=${sessionToken}; Path=/; Max-Age=28800; HttpOnly; Secure; SameSite=Lax`,
    clearCookie("__pkce_verifier", "/api/auth"),
    clearCookie("__oauth_state", "/api/auth"),
    clearCookie("__return_to", "/"),
  ];

  res.setHeader("Set-Cookie", setCookies);
  res.setHeader("Location", safeReturnTo(returnTo));
  res.statusCode = 302;
  res.end();
}
