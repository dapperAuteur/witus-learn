import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getMembership, isPlatformOwner } from "@/lib/session";
import { getDomainTenantId, removeDomain, setPrimaryDomain } from "@/db/queries/admin-domains";

type Params = { params: Promise<{ id: string }> };

// Allow the platform owner, or a brand admin of the tenant that OWNS this domain — so a
// brand admin can never edit another school's domain.
async function requireDomainAdmin(id: string) {
  const { session } = await apiContext();
  if (!session) return { error: errorJson("Unauthorized", 401) };
  if (await isPlatformOwner(session.user.id)) return { ok: true as const };
  const tenantId = await getDomainTenantId(id);
  if (!tenantId || (await getMembership(session.user.id, tenantId)) !== "brand_admin") {
    return { error: errorJson("Forbidden", 403) };
  }
  return { ok: true as const };
}

// DELETE /api/admin/domains/[id] — unmap a domain.
export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  const gate = await requireDomainAdmin(id);
  if ("error" in gate) return gate.error;
  await removeDomain(id);
  return json({ ok: true });
}

const PatchSchema = z.object({ primary: z.literal(true) });

// PATCH /api/admin/domains/[id] — make this the tenant's primary domain.
export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;
  const gate = await requireDomainAdmin(id);
  if ("error" in gate) return gate.error;
  const parsed = PatchSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  await setPrimaryDomain(id);
  return json({ ok: true });
}
