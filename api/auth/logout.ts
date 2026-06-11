// Node runtime — Vercel Serverless Function
// Clears the session cookie and redirects to Microsoft end-session endpoint
import type { IncomingMessage, ServerResponse } from "http";

export default function handler(
  _req: IncomingMessage,
  res: ServerResponse
): void {
  const tenantId = process.env.ENTRA_TENANT_ID;

  const endSessionUrl = tenantId
    ? `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/logout`
    : "/api/auth/login";

  res.setHeader(
    "Set-Cookie",
    "__session=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax"
  );
  res.setHeader("Location", endSessionUrl);
  res.statusCode = 302;
  res.end();
}
