import { z } from "zod";
import { apiContext, auditorReadOnlyBlock, canEditCourse, errorJson, json } from "@/lib/api";
import { getLessonById } from "@/db/queries/authoring";
import { recordRecallAttempt } from "@/db/queries/recall";
import { isEnrolled } from "@/db/queries/enrollment";
import { isUnvetted } from "@/lib/vetting";
import { getActiveLearner } from "@/lib/active-learner";
import { matchReveal, revealPromptIndex } from "@/lib/reveals";

// Two shapes, one table (recall_attempts):
//  • a quick-recall CARD grade carries its position in the lesson's recall_content array
//    (promptIndex >= 0, unchanged from the original API);
//  • a `:::reveal` CHECK-YOURSELF grade carries the question TEXT — the server verifies it
//    against the lesson body and derives the stable, prompt-hashed identity itself
//    (promptIndex < 0, see src/lib/reveals.ts). The client never picks a reveal's index.
const CardSchema = z.object({
  promptIndex: z.number().int().min(0).max(200),
  gotIt: z.boolean(),
});
const RevealSchema = z.object({
  prompt: z.string().min(1).max(2000),
  gotIt: z.boolean(),
});
const Schema = z.union([CardSchema, RevealSchema]);

type Params = { params: Promise<{ id: string; lessonId: string }> };

// POST /api/courses/[id]/lessons/[lessonId]/recall — a signed-in learner records a self-grade on a
// recall card OR an inline check-yourself reveal ("I got it" / "Missed it"). Tenant-scoped; the
// lesson must belong to this course. Attributed to the ACTIVE learner (a managed child when a
// parent is studying as one) via getActiveLearner — never raw session.user.id.
export async function POST(req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Sign in first", 401);
  const learner = (await getActiveLearner(session))!;

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== id) return errorJson("Not found", 404);

  // An invited auditor (plans/52 section 5) reads this course read-only: their self-grades must
  // never reach recall_attempts, or the course's recall statistics measure a reviewer clicking
  // through rather than a learner remembering. Only an UNVETTED course can have auditors, so the
  // two extra reads below are skipped entirely on every ordinary course.
  if (isUnvetted(course)) {
    const blocked = await auditorReadOnlyBlock({
      session,
      tenantId: sdb.tenantId,
      course,
      isEditor: await canEditCourse(session, sdb.tenantId, course),
      isEnrolled: await isEnrolled(learner.id, id),
    });
    if (blocked) return blocked;
  }

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  let promptIndex: number;
  if ("promptIndex" in parsed.data) {
    promptIndex = parsed.data.promptIndex;
  } else {
    // Reveal grade: only record checks that actually exist in this lesson's body, so the
    // history can always be traced back to a real question (and junk can't be keyed in).
    const reveal = matchReveal(lesson.textContent, parsed.data.prompt);
    if (!reveal) return errorJson("That check isn't part of this lesson", 400);
    promptIndex = revealPromptIndex(reveal.question);
  }

  await recordRecallAttempt({
    tenantId: sdb.tenantId,
    userId: learner.id,
    courseId: id,
    lessonId,
    promptIndex,
    gotIt: parsed.data.gotIt,
  });
  return json({ ok: true });
}
