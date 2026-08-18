import { apiContext, canAccessCourse, errorJson, json } from "@/lib/api";
import { isEnrolled } from "@/db/queries/enrollment";
import { getActiveLearner } from "@/lib/active-learner";
import { isUnvetted } from "@/lib/vetting";
import { searchLessons } from "@/lib/course-search";

type Params = { params: Promise<{ id: string }> };

// GET /api/courses/[id]/search?q= — in-course text search (plans/61 §5, build-order step 2).
//
// Searches the PUBLISHED lessons of ONE course: lesson titles, body prose, `:::reveal` self-checks
// (question + answer), and the text attached to `:::figure` images (alt, caption, credit — never
// the URL; this is deliberately NOT "image search", see src/lib/course-search.ts).
//
// Access mirrors what the course page grants (src/lib/course-access.ts): the caller must be signed
// in AND be enrolled (as the ACTIVE learner, so a parent studying as a child searches what that
// child may read), OR be able to edit the course (instructor / platform owner), OR hold an accepted
// audit grant on an unvetted course. Everyone else gets a 403 — an API returns a status, never a
// redirect. Tenant-scoped end to end: the course resolves through sdb.getCourseById (404 across
// tenants) and the lesson read goes through the scoped DAL.
export async function GET(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);

  if (!session) return errorJson("Sign in to search this course", 403);

  const q = new URL(req.url).searchParams.get("q")?.trim() ?? "";
  if (q.length < 2 || q.length > 200) {
    return errorJson("Search needs between 2 and 200 characters", 400);
  }

  const isEditor = await canAccessCourse(session, sdb.tenantId, course);
  // A draft course is invisible to everyone who can't edit it — same 404 the page gives.
  if (!course.isPublished && !isEditor) return errorJson("Not found", 404);

  const learner = await getActiveLearner(session);
  const enrolled =
    !isEditor && learner ? await isEnrolled(learner.id, course.id) : false;
  // The audit grant belongs to the SIGNED-IN account (not the active learner) and only reads an
  // UNVETTED course — the same shape loadCourseView computes. Checked last: it costs a query.
  const isAuditor =
    !isEditor && !enrolled && isUnvetted(course)
      ? await sdb.isCourseAuditor({
          courseId: course.id,
          userId: session.user.id,
          email: session.user.email ?? null,
        })
      : false;
  if (!isEditor && !enrolled && !isAuditor) {
    return errorJson("Enroll in this course to search its lessons", 403);
  }

  const rows = await sdb.listPublishedLessonSearchRows(course.id);
  return json({ results: searchLessons(rows, q) });
}
