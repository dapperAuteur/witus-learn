import { apiContext, errorJson, json } from "@/lib/api";
import { canManageCourseReviewers } from "@/lib/course-reviewers";

type Params = { params: Promise<{ id: string; auditorId: string }> };

// DELETE /api/courses/[id]/auditors/[auditorId] — revoke an audit grant. Takes effect on the next
// request: the gate reads the table every time, so there is no cached grant to expire.
export async function DELETE(_req: Request, { params }: Params) {
  const { id, auditorId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  // Same gate as minting a grant (src/lib/course-reviewers.ts): whoever may hand one out is
  // whoever may take it back, and there is one definition of that for both.
  if (!(await canManageCourseReviewers(session, sdb.tenantId, course.instructorId))) {
    return errorJson("Forbidden", 403);
  }

  // Scoped by tenant AND course, so an id from another school (or another course) deletes nothing
  // and reports the same "not found" a made-up id would.
  const removed = await sdb.revokeCourseAuditor(course.id, auditorId);
  if (!removed) return errorJson("Not found", 404);
  return json({ ok: true });
}
