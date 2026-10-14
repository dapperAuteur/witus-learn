import { apiContext, errorJson, json } from "@/lib/api";
import { updateCourse } from "@/db/queries/authoring";
import { isPlatformOwner } from "@/lib/session";
import { readinessOf, reviewsByLesson, summarizeLessonReview } from "@/lib/lesson-review-summary";

type Params = { params: Promise<{ id: string }> };

// POST /api/courses/[id]/release-review-hold — clear a course's publish hold once its review is
// done (reviewer sign-off, plans/93 section 1).
//
// PLATFORM OWNER ONLY. Whether a white-label school's brand_admin may release is an open question
// for BAM (plans/93); until he answers, the safe default is the narrower one.
//
// Readiness is RE-COMPUTED here from the stored verdicts and the lessons as they stand, never taken
// from the screen that sent the click: every QR need cleared against the current text, and no
// decision marker left (releaseReadiness in src/lib/lesson-review.ts). 409 otherwise.
//
// The seeder writes a hold on FIRST INSERT only, so a release survives every later re-seed. Vetting
// is a separate step and is not touched here (VetCourseCta sits beside the button).
export async function POST(_req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const [lessons, reviews] = await Promise.all([
    sdb.listReviewableLessons([course.id]),
    sdb.listLessonReviews([course.id]),
  ]);
  const byLesson = reviewsByLesson(reviews);
  const readiness = readinessOf(lessons.map((l) => summarizeLessonReview(l, byLesson.get(l.id) ?? [])));

  if (!readiness.ready) {
    const why =
      readiness.qrTotal + readiness.pTotal + readiness.openDecisions === 0
        ? "This course has no review markers, so its hold is cleared by hand in course settings."
        : readiness.openDecisions > 0
          ? `${readiness.openDecisions} decision ${readiness.openDecisions === 1 ? "marker is" : "markers are"} still open.`
          : `${readiness.qrCleared} of ${readiness.qrTotal} qualified-reviewer needs are cleared.`;
    return json({ error: `Not ready to release. ${why}`, readiness }, 409);
  }
  if (!course.publishHoldReason) return json({ ok: true, released: false, readiness });

  await updateCourse(sdb.tenantId, course.id, { publishHoldReason: null });
  return json({ ok: true, released: true, readiness });
}
