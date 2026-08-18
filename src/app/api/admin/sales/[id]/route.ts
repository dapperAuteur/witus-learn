import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { toSaleView } from "@/lib/sale-pricing";

// POST /api/admin/sales/[id] — "End now" for a sale with no end date (BAM's manual stop). The row is
// kept and stamped with ended_at rather than deleted, so what was offered, and when, stays readable.
// An id belonging to another tenant 404s (never redirects, never says whether it exists elsewhere).
export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) return errorJson("Forbidden", 403);

  const row = await sdb.endPromotion(id);
  // Undefined = not this tenant's, or already ended. Both are "nothing to end here".
  if (!row) return errorJson("Not found", 404);
  return json({ sale: toSaleView(row) });
}
