---
id: setup-entra-auth
title: "Entra ID Authentication Setup"
sidebar_label: "Entra ID Auth Setup"
description: "Step-by-step guide for configuring Microsoft Entra ID authentication on PlaybookVisualizer."
---

# Entra ID Authentication Setup

This guide covers how to configure and activate the Microsoft Entra ID authentication gate for the PlaybookVisualizer Docusaurus site.

## How It Works

Every request to the site passes through a Vercel Edge Middleware (`middleware.ts`) that validates a signed session cookie (`__session`). If the cookie is absent, expired, or tampered, the user is redirected to Microsoft login. The auth gate is **fail-closed**: active in every environment by default and bypassed only on Vercel Preview deployments (see [Preview Limitation](#preview-limitation) below).

## Environment Variables

Configure the following variables in the Vercel project settings under **Settings → Environment Variables → Production**.

| Variable | Source | Purpose |
|----------|--------|---------|
| `ENTRA_CLIENT_ID` | IT App Registration | OAuth client ID; used as `aud` in id_token validation |
| `ENTRA_TENANT_ID` | IT App Registration | Single-tenant authority; used in authorize/token/JWKS URLs and explicit `tid` claim check |
| `ENTRA_CLIENT_SECRET` | IT App Registration | Confidential-client token exchange secret |
| `SESSION_SECRET` | You generate (see below) | HS256 sign/verify key for the `__session` JWT |

**Do NOT set `VERCEL_ENV` manually** — it is platform-injected by Vercel and controls the preview bypass.

### Generating SESSION_SECRET

The secret must be a 32+ byte random hex string:

```bash
openssl rand -hex 32
```

Copy the output and paste it as the `SESSION_SECRET` value in Vercel. Keep it secret — rotating it invalidates all active sessions.

## IT App Registration Steps

Ask IT to complete the following in the Azure Portal (Microsoft Entra ID):

1. **Create a new App Registration** (or use an existing one):
   - Name: `PlaybookVisualizer`
   - Supported account types: **Accounts in this organizational directory only (single tenant)**

2. **Add a Redirect URI**:
   - Platform: **Web**
   - URI: `https://playbook-visualizer.vercel.app/api/auth/callback`

3. **Generate a Client Secret**:
   - Go to **Certificates & Secrets → New client secret**
   - Copy the **Value** immediately (it is not shown again)

4. **Copy the following IDs** from the App Registration Overview:
   - **Application (client) ID** → `ENTRA_CLIENT_ID`
   - **Directory (tenant) ID** → `ENTRA_TENANT_ID`
   - Client Secret Value → `ENTRA_CLIENT_SECRET`

## Activation Steps

1. In Vercel, go to the project → **Settings → Environment Variables**
2. Add all four variables (`ENTRA_CLIENT_ID`, `ENTRA_TENANT_ID`, `ENTRA_CLIENT_SECRET`, `SESSION_SECRET`) scoped to **Production** only
3. Trigger a new Production deployment (Vercel picks up the new env vars)
4. Open an incognito browser window and visit the site URL
5. Expected: immediate 302 redirect to the Microsoft login page — no content is served to unauthenticated users

## Rollback Instructions

The auth implementation is **purely additive**. To disable authentication:

1. Revert the `feat/entra-id-auth` branch (or create a revert commit on `main`)
2. Redeploy the site to Vercel
3. `middleware.ts` and `api/auth/*` are removed from the deployed bundle
4. The site becomes fully public — no data migration needed

> **Note:** There is no instant-disable environment flag. The rollback path is branch revert + redeploy. This is intentional — a flag-based disable was fail-open (a lost/renamed env var would silently expose Production).

## Preview Limitation

Preview deployments are **not gated**. The middleware bypasses authentication when `VERCEL_ENV === 'preview'` (platform-injected by Vercel).

This is a **documented v1 constraint**: Vercel Preview deployments use dynamic URLs (e.g. `playbook-visualizer-git-feat-something.vercel.app`) that cannot be pre-registered as Entra redirect URIs. Attempting to authenticate from a preview deploy would result in `AADSTS50011` (redirect URI mismatch). Preview deploys are intentionally public.

## File Reference

| File | Purpose |
|------|---------|
| `middleware.ts` | Vercel Edge gate — validates `__session` on every request; fail-closed; preview bypass |
| `lib/session-edge.ts` | Edge-safe session helpers — `signSession`/`verifySession` using `jose` HS256 (8h TTL) |
| `lib/oauth-node.ts` | Node-only OAuth helpers — PKCE generation, Entra authorization URL, code exchange + id_token validation |
| `api/auth/login.ts` | Node function — initiates OAuth flow; sets transient PKCE/state cookies; 302 to Entra |
| `api/auth/callback.ts` | Node function — validates state, exchanges code, mints `__session`, redirects to original path |
| `api/auth/logout.ts` | Node function — clears `__session`; 302 to Microsoft end-session or `/api/auth/login` |
| `tsconfig.server.json` | TypeScript config scoped to the auth layer (ESNext/Bundler; doesn't touch Docusaurus tsconfig) |
| `vercel.json` | Vercel zero-config routing — `outputDirectory: build`, `framework: null`; no runtime block |
