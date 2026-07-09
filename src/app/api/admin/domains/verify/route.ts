import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getMembership, isPlatformOwner } from "@/lib/session";
import { getTenantIdForHost } from "@/db/queries/admin-domains";
import { isWildcardCovered } from "@/lib/domain-dns";
import { hasVercelDomains } from "@/lib/env";
import { getDomainStatus } from "@/lib/vercel-domains";

const Schema = z.object({ host: z.string().min(3).max(255) });

// POST /api/admin/domains/verify — poll Vercel for a custom domain's verification status.
// Same per-tenant gating as add/remove: the platform owner, or a brand_admin of the
// tenant that OWNS this host (resolved from tenant_domains, not from the caller's input),
// so a brand_admin can never probe another school's domain.
export async function POST(req: Request) {
  const { session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const { host } = parsed.data;

  const tenantId = await getTenantIdForHost(host);
  if (!tenantId) return errorJson("Domain not found", 404);

  const allowed =
    (await isPlatformOwner(session.user.id)) || (await getMembership(session.user.id, tenantId)) === "brand_admin";
  if (!allowed) return errorJson("Forbidden", 403);

  // A wildcard-covered subdomain is already live — nothing to verify with Vercel.
  if (isWildcardCovered(host)) return json({ verified: true, verification: [] });
  if (!hasVercelDomains) return json({ verified: false, verification: [] });

  const status = await getDomainStatus(host);
  return json(status);
}
