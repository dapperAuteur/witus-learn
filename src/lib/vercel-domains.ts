import "server-only";
import { env, hasVercelDomains } from "@/lib/env";

// Self-serve custom domains: register a tenant's own domain with the Vercel project via
// the Domains API, so a brand_admin never needs BAM to touch the Vercel dashboard.
// Wildcard *.learn.witus.online subdomains skip this entirely (see isWildcardCovered in
// src/lib/domain-dns.ts) — only genuinely custom domains call out to Vercel.
//
// SECURITY: VERCEL_API_TOKEN is read from env only, sent as a Bearer header, and never
// logged (not even on error — only Vercel's returned error *message* is surfaced, never
// the token or request headers).

const API_BASE = "https://api.vercel.com";

export interface VercelVerificationRecord {
  type: string;
  domain: string;
  value: string;
  reason?: string;
}

interface VercelDomainBody {
  name?: string;
  verified?: boolean;
  verification?: VercelVerificationRecord[];
  error?: { code?: string; message?: string };
}

function teamQuery(): string {
  return env.VERCEL_TEAM_ID ? `?teamId=${encodeURIComponent(env.VERCEL_TEAM_ID)}` : "";
}

async function vercelFetch(
  path: string,
  init?: RequestInit,
): Promise<{ status: number; body: VercelDomainBody }> {
  const res = await fetch(`${API_BASE}${path}${teamQuery()}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${env.VERCEL_API_TOKEN}`,
      "content-type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  const body = (await res.json().catch(() => ({}))) as VercelDomainBody;
  return { status: res.status, body };
}

export interface AttachResult {
  ok: boolean;
  verified?: boolean;
  verification?: VercelVerificationRecord[];
  error?: string;
}

/** Register a custom domain on the Vercel project. Idempotent: a domain already attached
 *  (to this project, under this account) is treated as success so retries are safe. */
export async function attachDomain(host: string): Promise<AttachResult> {
  if (!hasVercelDomains) return { ok: false, error: "Vercel domain automation is not configured." };

  const { status, body } = await vercelFetch(`/v10/projects/${env.VERCEL_PROJECT_ID}/domains`, {
    method: "POST",
    body: JSON.stringify({ name: host }),
  });

  if (status >= 200 && status < 300) {
    return { ok: true, verified: Boolean(body.verified), verification: body.verification };
  }

  const alreadyAttached =
    status === 409 || /already (exists|in use|assigned|added)/i.test(body.error?.message ?? "");
  if (alreadyAttached) {
    const current = await getDomainStatus(host);
    return { ok: true, verified: current.verified, verification: current.verification };
  }

  return { ok: false, error: body.error?.message ?? `Vercel error (${status})` };
}

export interface StatusResult {
  verified: boolean;
  verification?: VercelVerificationRecord[];
}

/** Ask Vercel to re-check DNS, then read back the domain's current verification state. */
export async function getDomainStatus(host: string): Promise<StatusResult> {
  if (!hasVercelDomains) return { verified: false };

  await vercelFetch(`/v9/projects/${env.VERCEL_PROJECT_ID}/domains/${encodeURIComponent(host)}/verify`, {
    method: "POST",
  }).catch(() => null);

  const { status, body } = await vercelFetch(
    `/v9/projects/${env.VERCEL_PROJECT_ID}/domains/${encodeURIComponent(host)}`,
  );
  if (status >= 200 && status < 300) {
    return { verified: Boolean(body.verified), verification: body.verification };
  }
  return { verified: false };
}

/** Best-effort removal from the Vercel project so the domain slot frees up. Never throws —
 *  a Vercel-side failure here shouldn't block un-mapping the tenant_domains row. */
export async function detachDomain(host: string): Promise<void> {
  if (!hasVercelDomains) return;
  try {
    await vercelFetch(`/v9/projects/${env.VERCEL_PROJECT_ID}/domains/${encodeURIComponent(host)}`, {
      method: "DELETE",
    });
  } catch {
    /* best-effort */
  }
}
