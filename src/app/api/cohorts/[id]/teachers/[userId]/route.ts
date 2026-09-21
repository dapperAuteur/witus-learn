import { apiContext, errorJson, json } from "@/lib/api";
import { getCohort, removeCohortTeacher } from "@/db/queries/cohorts";
import { canAssignCohortTeachers } from "@/lib/cohort-access";

// DELETE /api/cohorts/[id]/teachers/[userId]: take a teacher off this class. Creator or tenant admin
// only. The creator may remove themselves (an admin who set a class up for someone else steps back
// so families reach the real teacher) and keeps managing the class as its creator. The last teacher
// can't be removed: a class needs someone its families can reach.
export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string; userId: string }> }) {
  const { id, userId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const cohort = await getCohort(sdb.tenantId, id);
  if (!cohort) return errorJson("Not found", 404);
  if (!(await canAssignCohortTeachers(session, sdb.tenantId, cohort))) {
    return errorJson("Only the class's creator or a school admin can change its teachers.", 403);
  }

  const removed = await removeCohortTeacher(sdb.tenantId, cohort.id, userId);
  if (!removed) return errorJson("A class needs at least one teacher. Add another teacher first.", 409);
  return json({ ok: true });
}
