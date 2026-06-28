import { z } from "zod";
import { apiContext, canEditCourse, errorJson, json } from "@/lib/api";
import { getLessonById, listLessons } from "@/db/queries/authoring";
import { getCompletedLessonIds, upsertProgress } from "@/db/queries/progress";
import { lessonAccess } from "@/lib/gating";

const Schema = z.object({
  completed: z.boolean().optional(),
  watchSeconds: z.number().int().min(0).optional(),
});

type Params = { params: Promise<{ id: string; lessonId: string }> };

// POST /api/courses/[id]/lessons/[lessonId]/progress — record completion / watch
// time for the signed-in learner. Only for lessons they can actually access.
export async function POST(req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== id) return errorJson("Not found", 404);

  const isEditor = await canEditCourse(session, sdb.tenantId, course);
  const all = await listLessons(id);
  const ordered = (isEditor ? all : all.filter((l) => l.isPublished)).map((l) => l.id);
  const completed = new Set(await getCompletedLessonIds(session.user.id, id));
  const access = lessonAccess(course, lesson, {
    isEditor,
    completedLessonIds: completed,
    orderedLessonIds: ordered,
  });
  if (!access.open) return errorJson("Forbidden", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  await upsertProgress(session.user.id, lessonId, parsed.data);
  return json({ ok: true });
}
