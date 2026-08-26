import { apiContext, errorJson, json } from "@/lib/api";
import { canManageCourseReviewers } from "@/lib/course-reviewers";
import { serializeForOwner } from "@/lib/course-interest";

type Params = { params: Promise<{ id: string }> };

// GET /api/courses/[id]/interest, the OWNER-ONLY read of who put their hand up on this course.
//
// This is the only API in the app that returns a request's phone number or credentials, and the
// only reason it may is that the caller has already been proved to be the platform owner, the
// course's OWN instructor, or a tenant admin of the school that owns it (canManageCourseReviewers,
// the same gate that guards handing out an audit grant, because approving one of these IS handing
// out an audit grant).
//
// Three layers stand between a stranger and that data, and each is independent of the others:
//   1. the tenant is resolved from the request HOST, never from the caller;
//   2. the course is read through the scoped DAL, so another school's course id 404s here exactly
//      as an invented one would (404, never a redirect: a redirect leaks that the row exists);
//   3. serializeForOwner re-checks the row's tenant_id and drops anything that is not ours, so one
//      forgotten WHERE in a future refactor cannot quietly widen this.
export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  if (!(await canManageCourseReviewers(session, sdb.tenantId, course.instructorId))) {
    return errorJson("Forbidden", 403);
  }

  const rows = await sdb.listCourseInterest(course.id);
  const requests = rows
    .map((r) => serializeForOwner(r, sdb.tenantId))
    .filter((r): r is NonNullable<typeof r> => r !== null);
  return json({ requests });
}
