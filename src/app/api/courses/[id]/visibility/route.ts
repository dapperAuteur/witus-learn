import { after } from "next/server";
import { z } from "zod";
import { reindexCourseEmbeddings } from "@/lib/ai/reindex";
import { apiContext, courseActor, errorJson, json } from "@/lib/api";
import { applyCourseVisibilityChange } from "@/db/queries/authoring";
import { readinessOf, reviewsByLesson, summarizeLessonReview } from "@/lib/lesson-review-summary";
import {
  decideVisibilityChange,
  ownerOnlyBlocks,
  publicReadiness,
  VISIBILITY_FORBIDDEN,
  visibilityActorRole,
} from "@/lib/course-visibility";

type Params = { params: Promise<{ id: string }> };

// POST /api/courses/[id]/visibility: the Make public / Make private switch
// (src/lib/course-visibility.ts; BAM 2026-10-28: every course is private and unpublished until it is
// vetted and opened).
//
// WHO (BAM 2026-10-29): the platform owner on every school, and a brand_admin of the school the
// request resolved to on that school's courses, with the same readiness check and override rules.
// The audit row records which role acted. An OWNER-ONLY course (courses.owner_only) stays the
// owner's: anyone but the owner and its own instructor gets the learner's 404. The instructor and
// any other teacher get 403. Another school's course does not resolve here at all (tenant-scoped
// read): 404.
//
// Readiness is RE-COMPUTED here from the stored rows, never taken from the screen that sent the
// click: vetted_at stamped, no publish hold, every reviewer marker cleared. Not ready → 409 unless
// the body carries `override: true` and a reason, which is stored. Every change that changes
// something writes a course_visibility_changes row in the same transaction as the course update.
const BodySchema = z.object({
  action: z.enum(["make-public", "make-private"]),
  override: z.boolean().optional(),
  reason: z.string().max(1000).nullable().optional(),
});

export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);

  const body = BodySchema.safeParse(await req.json().catch(() => null));
  if (!body.success) return errorJson("Invalid input", 400);

  const actor = await courseActor(session, sdb.tenantId, course);
  if (ownerOnlyBlocks(actor, course)) return errorJson("Not found", 404);
  const actorRole = visibilityActorRole(actor, course);
  if (!actorRole) return errorJson(VISIBILITY_FORBIDDEN, 403);

  const [lessons, reviews] = await Promise.all([
    sdb.listReviewableLessons([course.id]),
    sdb.listLessonReviews([course.id]),
  ]);
  const byLesson = reviewsByLesson(reviews);
  const markers = readinessOf(lessons.map((l) => summarizeLessonReview(l, byLesson.get(l.id) ?? [])));
  const readiness = publicReadiness(course, markers);

  const decision = decideVisibilityChange({ actorRole, course, readiness, request: body.data });
  if (!decision.ok) return json({ error: decision.error, readiness }, decision.status);
  if (!decision.changed) return json({ ok: true, changed: false, course, readiness });

  const updated = await applyCourseVisibilityChange(sdb.tenantId, course.id, session.user.id, decision.patch, {
    ...decision.audit,
    readiness,
  });
  if (!updated) return errorJson("Not found", 404);
  // Same as publishing through the settings PATCH: (re)index the embeddings after the response so
  // chat-with-sources and CYOA routing see the lessons. Best-effort; the manual button remains.
  if (decision.patch.isPublished && !course.isPublished) {
    after(async () => {
      try {
        await reindexCourseEmbeddings(course.id);
      } catch {
        // A failed auto-index leaves the old index in place.
      }
    });
  }
  return json({ ok: true, changed: true, course: updated, readiness });
}
