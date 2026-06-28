import { z } from "zod";
import { apiContext, canEditCourse, errorJson, json } from "@/lib/api";
import { getLessonById, getUsername, listLessons } from "@/db/queries/authoring";
import { getCompletedLessonIds, upsertProgress } from "@/db/queries/progress";
import { isEnrolled } from "@/db/queries/enrollment";
import { lessonAccess } from "@/lib/gating";
import { scoreQuiz, type QuizContent, type QuizFeedbackItem } from "@/lib/quiz";

const Schema = z.object({ answers: z.array(z.number().int().min(0)) });

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

  const result = scoreQuiz(content, parsed.data.answers);
  await upsertProgress(session.user.id, lessonId, {
    completed: result.passed,
    quizScore: result.score,
    quizAnswers: parsed.data.answers,
  });

  // Per-question feedback (revealed only now, after submission): the correct answer,
  // the explanation, and a link to the lesson where the answer is taught.
  const username = await getUsername(course.instructorId);
  const bySlug = new Map(all.map((l) => [l.slug, l] as const));
  const feedback: QuizFeedbackItem[] = content.questions.map((q, i) => {
    const src = q.sourceLessonSlug ? bySlug.get(q.sourceLessonSlug) : undefined;
    return {
      correctIndex: q.correctIndex,
      correct: parsed.data.answers[i] === q.correctIndex,
      explanation: q.explanation ?? null,
      source:
        src?.slug && username && course.slug
          ? { title: src.title, href: `/${username}/${course.slug}/lesson/${src.slug}` }
          : null,
    };
  });

  return json({ ...result, feedback });
}
