// Edge-safe session library — ONLY dependency is `jose`.
// No Node built-ins (no crypto, http, fs, etc.).
//
// jose v6 is ESM-only. This module is bundled into BOTH the Edge middleware
// (ESM runtime — fine) and the Node CJS api/auth functions (a require() of an
// ESM module throws ERR_REQUIRE_ESM). Load jose via dynamic import() so it
// works in both runtimes.
let josePromise: Promise<typeof import("jose")> | null = null;
function loadJose(): Promise<typeof import("jose")> {
  if (!josePromise) josePromise = import("jose");
  return josePromise;
}

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
  const { SignJWT } = await loadJose();
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
  const { jwtVerify } = await loadJose();
  const { payload } = await jwtVerify(token, getSecret(), {
    algorithms: ["HS256"],
  });

  return payload as unknown as SessionPayload;
}
