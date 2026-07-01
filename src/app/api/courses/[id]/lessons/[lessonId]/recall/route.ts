import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getLessonById } from "@/db/queries/authoring";
import { recordRecallAttempt } from "@/db/queries/recall";

const Schema = z.object({
  promptIndex: z.number().int().min(0).max(200),
  gotIt: z.boolean(),
});

type Params = { params: Promise<{ id: string; lessonId: string }> };

// POST /api/courses/[id]/lessons/[lessonId]/recall — a signed-in learner records a self-grade on a
// recall card ("I got it" / "Missed it"). Tenant-scoped; the lesson must belong to this course.
export async function POST(req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Sign in first", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== id) return errorJson("Not found", 404);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  await recordRecallAttempt({
    tenantId: sdb.tenantId,
    userId: session.user.id,
    courseId: id,
    lessonId,
    promptIndex: parsed.data.promptIndex,
    gotIt: parsed.data.gotIt,
  });
  return json({ ok: true });
}
