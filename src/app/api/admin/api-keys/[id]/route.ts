import { NextResponse } from "next/server";
import { getScopedDb } from "@/db/scoped";
import { requireBrandAdmin } from "@/lib/session";
import { getApiKeyTenantId, revokeApiKey } from "@/db/queries/api-keys";

type Params = { params: Promise<{ id: string }> };

// DELETE /api/admin/api-keys/[id] — revoke a key. Confirms the key belongs to the
// CALLER's tenant before revoking, so a brand admin can never revoke (or even confirm
// the existence of) another school's key.
export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId);

  const ownerTenantId = await getApiKeyTenantId(id);
  if (!ownerTenantId || ownerTenantId !== sdb.tenantId) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }
  await revokeApiKey(id);
  return NextResponse.json({ ok: true });
}
