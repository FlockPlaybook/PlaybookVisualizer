// Edge-safe session library — ONLY import is `jose`.
// No Node built-ins (no crypto, http, fs, etc.).
import { SignJWT, jwtVerify } from "jose";

export interface SessionPayload {
  sub?: string;
  email?: string;
  name?: string;
  tid: string;
}

const SESSION_SECRET = process.env.SESSION_SECRET ?? "";

function getSecret(): Uint8Array {
  return new TextEncoder().encode(SESSION_SECRET);
}

/**
 * Signs a session payload as an HS256 JWT with an 8-hour expiry.
 */
export async function signSession(payload: SessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(getSecret());
}

/**
 * Verifies an HS256 JWT and returns the session payload.
 * Throws if the token is invalid, expired, or tampered.
 */
export async function verifySession(token: string): Promise<SessionPayload> {
  const { payload } = await jwtVerify(token, getSecret(), {
    algorithms: ["HS256"],
  });

  return payload as unknown as SessionPayload;
}
