import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getLessonById } from "@/db/queries/authoring";
import { recordLessonView, recordWatchSeconds } from "@/db/queries/progress";
import { getActiveLearner } from "@/lib/active-learner";

const Schema = z.object({
  /** Playback position in seconds. Omit for a plain "I opened this lesson" ping. */
  watchSeconds: z.number().int().min(0).max(24 * 60 * 60).optional(),
});

type Params = { params: Promise<{ id: string; lessonId: string }> };

// POST /api/courses/[id]/lessons/[lessonId]/view — the learner OPENED this lesson (and,
// optionally, is N seconds into its audio/video). This is the weak "where was I?" signal that
// makes "continue where you left off" mean what it says; it never marks anything complete.
//
// Deliberately LEANER than the sibling /progress route. That one runs the full gating pipeline
// (~6 queries: course, lesson, editor check, lesson list, completed ids, enrollment) because
// granting a completion has to be earned. A view ping fires on every lesson open — on a
// 118-lesson audio course that pipeline would be a real bill against a Neon data-transfer
// budget we have already blown once. So this route does the two checks that actually protect
// something (authenticated learner; lesson exists, is published, and is IN THIS TENANT's copy of
// this course) and then performs a single guarded upsert.
//
// What the trimmed gating can't do is stop a learner hand-POSTing a view for a lesson that is
// sequentially locked *to them*. The blast radius of that is: their own Continue button points
// at a lesson their own gating won't open. No other learner, tenant, or grade is affected, and
// no completion is granted — worth trading for the write path staying cheap.
export async function POST(req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);

  // Attribute to the ACTIVE learner — a parent "studying as" a managed child records the
  // view against the CHILD, exactly as /progress and /quiz do. Never `session.user.id`.
  const learner = (await getActiveLearner(session))!;

  // Tenant-scoped read: a lesson id from another tenant resolves to null → 404, never a
  // cross-tenant write (and never a redirect, which would leak that the lesson exists).
  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== id || !lesson.isPublished) return errorJson("Not found", 404);

  const parsed = Schema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const { watchSeconds } = parsed.data;
  if (watchSeconds !== undefined) await recordWatchSeconds(learner.id, lessonId, watchSeconds);
  else await recordLessonView(learner.id, lessonId);

  return json({ ok: true });
}
