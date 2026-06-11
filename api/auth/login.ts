// Node runtime — Vercel Serverless Function
// Initiates OAuth 2.0 Authorization Code + PKCE flow
import type { IncomingMessage, ServerResponse } from "http";
import { generatePkce, generateState, buildAuthorizationUrl } from "../../lib/oauth-node.js";

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

function cookie(
  name: string,
  value: string,
  options: {
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: string;
    path?: string;
    maxAge?: number;
  } = {}
): string {
  const parts: string[] = [`${name}=${encodeURIComponent(value)}`];
  if (options.path !== undefined) parts.push(`Path=${options.path}`);
  if (options.maxAge !== undefined) parts.push(`Max-Age=${options.maxAge}`);
  if (options.httpOnly) parts.push("HttpOnly");
  if (options.secure) parts.push("Secure");
  if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);
  return parts.join("; ");
}

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> {
  const origin = getRequestOrigin(req);
  const currentUrl = new URL(req.url ?? "/api/auth/login", origin);

  const { verifier, challenge } = await generatePkce();
  const state = await generateState();

  // Capture the original destination for post-login redirect.
  // Apply the same open-redirect guard used in callback.ts/safeReturnTo:
  // reject any value that does not start with "/", starts with "//",
  // contains ":", "\" (browsers normalize "\"→"/" enabling protocol-relative
  // redirects via "/\evil.com"), or any control character (a newline would
  // make the later "Location" header throw at setHeader → 500).
  function isSafePath(value: string | undefined): value is string {
    return (
      typeof value === "string" &&
      value.startsWith("/") &&
      !value.startsWith("//") &&
      !value.includes(":") &&
      !value.includes("\\") &&
      !/[\x00-\x1f\x7f]/.test(value)
    );
  }

  const rawReturnTo =
    (new URL(currentUrl).searchParams.get("returnTo")) ??
    (req.headers["referer"] ? new URL(req.headers["referer"] as string).pathname : undefined);
  const returnTo = isSafePath(rawReturnTo) ? rawReturnTo : undefined;

  const authUrl = await buildAuthorizationUrl(state, challenge, currentUrl);

  const cookies: string[] = [
    cookie("__pkce_verifier", verifier, {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
      path: "/api/auth",
      maxAge: 600,
    }),
    cookie("__oauth_state", state, {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
      path: "/api/auth",
      maxAge: 600,
    }),
  ];

  if (returnTo) {
    cookies.push(
      cookie("__return_to", returnTo, {
        httpOnly: true,
        secure: true,
        sameSite: "Lax",
        path: "/",
        maxAge: 600,
      })
    );
  }

  res.setHeader("Set-Cookie", cookies);
  res.setHeader("Location", authUrl.href);
  res.statusCode = 302;
  res.end();
}
