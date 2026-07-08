import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { getCohort, removeMember } from "@/db/queries/cohorts";

type Params = { params: Promise<{ id: string; userId: string }> };

// DELETE /api/cohorts/[id]/members/[userId] — remove a student from a cohort. Gated on
// ownership (the cohort's own creator) or a tenant admin — not just "any instructor".
export async function DELETE(_req: Request, { params }: Params) {
  const { id, userId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const cohort = await getCohort(sdb.tenantId, id);
  if (!cohort) return errorJson("Not found", 404);
  if (cohort.ownerId !== session.user.id && !(await isTenantAdmin(session, sdb.tenantId))) {
    return errorJson("Forbidden", 403);
  }

  await removeMember(sdb.tenantId, cohort.id, userId);
  return json({ ok: true });
}
