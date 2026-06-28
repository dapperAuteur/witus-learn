import { apiContext, errorJson, json } from "@/lib/api";
import { getLessonById, getUsername } from "@/db/queries/authoring";
import { buildCrossroads } from "@/lib/crossroads";

// GET /api/courses/[id]/lessons/[lessonId]/crossroads — CYOA next options. The
// cross-course branch is tenant-scoped inside buildCrossroads (match_lessons_global).
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string; lessonId: string }> },
) {
  const { id, lessonId } = await params;
  const { sdb } = await apiContext();

  const course = await sdb.getCourseById(id);
  if (!course || !course.slug) return errorJson("Not found", 404);
  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== id) return errorJson("Not found", 404);

  const username = await getUsername(course.instructorId);
  if (!username) return json({ options: [] });

  const options = await buildCrossroads({
    tenantId: sdb.tenantId,
    course,
    lessonId,
    username,
    courseSlug: course.slug,
  });
  return json({ options });
}
