import { z } from "zod";
import { apiContext, canEditCourse, errorJson, json } from "@/lib/api";
import { getLessonById, listLessons } from "@/db/queries/authoring";
import { getCompletedLessonIds } from "@/db/queries/progress";
import { isEnrolled } from "@/db/queries/enrollment";
import { lessonAccess } from "@/lib/gating";
import { upsertSubmission } from "@/db/queries/assignments";

const Schema = z.object({ body: z.string().min(1).max(20000) });

type Params = { params: Promise<{ id: string; lessonId: string }> };

// POST /api/courses/[id]/lessons/[lessonId]/submission — a learner submits (or
// re-submits) an assignment. Access-gated exactly like the lesson itself.
export async function POST(req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== id || lesson.lessonType !== "assignment") {
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

  await upsertSubmission({
    tenantId: sdb.tenantId,
    courseId: id,
    lessonId,
    userId: session.user.id,
    body: parsed.data.body,
  });
  return json({ ok: true });
}
