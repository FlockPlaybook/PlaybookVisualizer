// NODE-ONLY — never import from middleware.ts
// This module uses openid-client v6 which pulls Node built-ins (crypto, http).
// The ESLint boundary guard in eslint.config.js enforces this at lint time.
import * as client from "openid-client";

const ENTRA_CLIENT_ID = process.env.ENTRA_CLIENT_ID ?? "";
const ENTRA_TENANT_ID = process.env.ENTRA_TENANT_ID ?? "";
const ENTRA_CLIENT_SECRET = process.env.ENTRA_CLIENT_SECRET ?? "";

let cachedConfig: client.Configuration | null = null;

async function getOAuthConfig(): Promise<client.Configuration> {
  if (cachedConfig) return cachedConfig;

  const issuer = new URL(
    `https://login.microsoftonline.com/${ENTRA_TENANT_ID}/v2.0`
  );

  cachedConfig = await client.discovery(issuer, ENTRA_CLIENT_ID, ENTRA_CLIENT_SECRET);
  return cachedConfig;
}

/**
 * Generates a PKCE code verifier and S256 challenge pair.
 */
export async function generatePkce(): Promise<{
  verifier: string;
  challenge: string;
}> {
  const verifier = client.randomPKCECodeVerifier();
  const challenge = await client.calculatePKCECodeChallenge(verifier);
  return { verifier, challenge };
}

/**
 * Generates a cryptographically random OAuth state string.
 */
export function generateState(): string {
  return client.randomState();
}

/**
 * Builds the Entra authorization URL.
 * The redirect_uri is derived from currentUrl so it matches the actual host
 * across preview/custom-domain deployments (avoids AADSTS50011).
 */
export async function buildAuthorizationUrl(
  state: string,
  codeChallenge: string,
  currentUrl: URL
): Promise<URL> {
  const config = await getOAuthConfig();

  const redirectUri = new URL("/api/auth/callback", currentUrl.origin).href;

  const authUrl = client.buildAuthorizationUrl(config, {
    redirect_uri: redirectUri,
    scope: "openid email profile",
    state,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
    response_type: "code",
  });

  return authUrl;
}

/**
 * Exchanges the authorization code for tokens, validates the id_token,
 * and returns the JWT claims.
 *
 * @param code - The authorization code from the callback query param
 * @param verifier - The PKCE code verifier stored in the transient cookie
 * @param currentUrl - The full callback URL (used to derive redirect_uri)
 * @param expectedState - The state value stored in the __oauth_state cookie;
 *   passed to openid-client so it validates the echoed state parameter.
 *   In oauth4webapi, `undefined` means "expect NO state" (throws if state IS
 *   present), so the caller MUST supply the stored value explicitly.
 */
export async function exchangeCodeAndValidate(
  code: string,
  verifier: string,
  currentUrl: URL,
  expectedState: string
): Promise<client.IDToken & Record<string, unknown>> {
  const config = await getOAuthConfig();

  const tokens = await client.authorizationCodeGrant(config, currentUrl, {
    pkceCodeVerifier: verifier,
    expectedState,
  });

  const claims = tokens.claims();
  if (!claims) {
    throw new Error("No claims returned from token exchange");
  }

  const tid = (claims as Record<string, unknown>)["tid"];
  if (tid !== ENTRA_TENANT_ID) {
    throw new Error(
      `Tenant mismatch: expected ${ENTRA_TENANT_ID}, got ${String(tid)}`
    );
  }

  return claims as client.IDToken & Record<string, unknown>;
}
