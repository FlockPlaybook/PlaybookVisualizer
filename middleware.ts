// Vercel Edge Middleware — WHATWG Request/Response only (no next/server)
// Gates every non-auth route behind a signed session cookie.
// FAIL-CLOSED: active by default; bypassed ONLY on Vercel Preview deployments.
import { verifySession } from "./lib/session-edge.js";

/**
 * Reads a named cookie from the Cookie header WITHOUT calling decodeURIComponent.
 * JWT characters are ASCII-safe; decoding a crafted "%zz" value would throw a
 * URIError and turn a malformed-cookie request into a 500.
 * Returns undefined if the cookie is absent.
 */
function getCookieValue(
  cookieHeader: string,
  name: string
): string | undefined {
  for (const part of cookieHeader.split(";")) {
    const eq = part.indexOf("=");
    if (eq < 0) continue;
    if (part.slice(0, eq).trim() === name) {
      return part.slice(eq + 1).trim();
    }
  }
  return undefined;
}

export default async function middleware(req: Request): Promise<Response> {
  // Fail-closed preview bypass — platform-injected only; never from a dev flag
  if (process.env.VERCEL_ENV === "preview") {
    return new Response(null, { status: 200, headers: { "x-middleware-next": "1" } });
  }

  const cookieHeader = req.headers.get("cookie") ?? "";
  const token = getCookieValue(cookieHeader, "__session");

  if (token) {
    try {
      await verifySession(token);
      // Valid session — pass through
      return new Response(null, { status: 200, headers: { "x-middleware-next": "1" } });
    } catch {
      // Invalid/expired/tampered — fall through to redirect
    }
  }

  // No valid session — redirect to login, preserving the original path
  const returnTo = new URL(req.url).pathname;
  const loginUrl = new URL("/api/auth/login", req.url);

  const response = new Response(null, {
    status: 302,
    headers: {
      Location: loginUrl.href,
      "Set-Cookie": `__return_to=${encodeURIComponent(returnTo)}; Path=/; Max-Age=600; HttpOnly; Secure; SameSite=Lax`,
    },
  });

  return response;
}

export const config = {
  matcher: ["/((?!api/auth).*)"],
};
