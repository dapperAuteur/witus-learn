import { apiContext, errorJson, isTenantInstructor, json } from "@/lib/api";
import { getCohort, removeMember } from "@/db/queries/cohorts";

type Params = { params: Promise<{ id: string; userId: string }> };

// DELETE /api/admin/cohorts/[id]/members/[userId] — remove a student from a cohort.
export async function DELETE(_req: Request, { params }: Params) {
  const { id, userId } = await params;
  const { sdb, session } = await apiContext();
  if (!(await isTenantInstructor(session, sdb.tenantId))) return errorJson("Forbidden", 403);

  const cohort = await getCohort(sdb.tenantId, id);
  if (!cohort) return errorJson("Not found", 404);

  await removeMember(sdb.tenantId, cohort.id, userId);
  return json({ ok: true });
}
