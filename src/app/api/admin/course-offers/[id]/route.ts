import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { getCourseOffer, withdrawCourseOffer } from "@/db/queries/course-offers";


const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
// DELETE /api/admin/course-offers/[id]: the school's admin (or the platform owner) withdraws an open
// offer before the teacher answers. Tenant-scoped: another school's offer is a 404.
export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) return errorJson("Only the platform owner or this school's admin can withdraw an offer.", 403);
  const offer = UUID_RE.test(id) ? await getCourseOffer(sdb.tenantId, id) : null;
  if (!offer) return errorJson("Not found", 404);
  if (!(await withdrawCourseOffer(sdb.tenantId, id))) return errorJson("That offer was already answered, withdrawn or expired.", 409);
  return json({ ok: true });
}
