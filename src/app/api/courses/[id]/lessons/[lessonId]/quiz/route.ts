import { z } from "zod";
import { apiContext, canEditCourse, errorJson, json } from "@/lib/api";
import { getLessonById, getUsername, listLessons } from "@/db/queries/authoring";
import { getCompletedLessonIds, upsertProgress } from "@/db/queries/progress";
import { isEnrolled } from "@/db/queries/enrollment";
import { lessonAccess } from "@/lib/gating";
import { scoreQuizResponses, type QuizContent, type QuizFeedbackItem, type QuizResponse } from "@/lib/quiz";

// The player submits `responses` (original question + chosen-option indices for the SERVED
// subset, safe under rotation + option shuffle). Legacy clients may still send `answers`
// (one option index per question, in order) — normalized to responses below.
const Schema = z
  .object({
    responses: z
      .array(z.object({ questionIndex: z.number().int().min(0), optionIndex: z.number().int().min(0) }))
      .optional(),
    answers: z.array(z.number().int().min(0)).optional(),
  })
  .refine((d) => d.responses?.length || d.answers?.length, "Provide responses or answers");

type Params = { params: Promise<{ id: string; lessonId: string }> };

// POST /api/courses/[id]/lessons/[lessonId]/quiz — score a quiz attempt
// server-side (the correct answers never reach the client), record progress.
export async function POST(req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== id || lesson.lessonType !== "quiz") {
    return errorJson("Not found", 404);
  }

  const isEditor = await canEditCourse(session, sdb.tenantId, course);
  const all = await listLessons(id);
  const ordered = (isEditor ? all : all.filter((l) => l.isPublished)).map((l) => l.id);
  const completed = new Set(await getCompletedLessonIds(session.user.id, id));
  const access = lessonAccess(course, lesson, {
    isEditor,
    isEnrolled: await isEnrolled(session.user.id, id),
    completedLessonIds: completed,
    orderedLessonIds: ordered,
  });
  if (!access.open) return errorJson("Forbidden", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const content = lesson.quizContent as QuizContent | null;
  if (!content?.questions?.length) return errorJson("This lesson has no quiz", 400);

  // Normalize legacy `answers` (all questions in order) to `responses` (served subset).
  const responses: QuizResponse[] =
    parsed.data.responses ??
    (parsed.data.answers ?? []).map((optionIndex, questionIndex) => ({ questionIndex, optionIndex }));
  // Ignore responses pointing outside the quiz (stale content / tampering).
  const valid = responses.filter((r) => r.questionIndex < content.questions.length);

  const result = scoreQuizResponses(content, valid);
  await upsertProgress(session.user.id, lessonId, {
    completed: result.passed,
    quizScore: result.score,
    quizAnswers: valid.map((r) => r.optionIndex),
  });

  // Per-question feedback (revealed only now, after submission), in the SAME order the learner
  // answered — so the player can line each one up with the question it showed.
  const username = await getUsername(course.instructorId);
  const bySlug = new Map(all.map((l) => [l.slug, l] as const));
  const feedback: QuizFeedbackItem[] = valid.map((r) => {
    const q = content.questions[r.questionIndex];
    const src = q.sourceLessonSlug ? bySlug.get(q.sourceLessonSlug) : undefined;
    return {
      correctIndex: q.correctIndex,
      correct: r.optionIndex === q.correctIndex,
      explanation: q.explanation ?? null,
      source:
        src?.slug && username && course.slug
          ? { title: src.title, href: `/${username}/${course.slug}/lesson/${src.slug}` }
          : null,
    };
  });

  return json({ ...result, feedback });
}
