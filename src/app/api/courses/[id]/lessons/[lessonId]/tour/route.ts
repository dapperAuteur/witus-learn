import { z } from "zod";
import { errorJson, json, loadEditableCourse } from "@/lib/api";
import { bumpCourseContentVersion, getLessonById } from "@/db/queries/authoring";

type Params = { params: Promise<{ id: string; lessonId: string }> };

const Uuid = z.string().uuid();

// DELETE /api/courses/[id]/lessons/[lessonId]/tour: take a field tour off a lesson (plans/93 section
// 2), which puts the slot back to empty and the lesson back to its "forthcoming" wording.
//
// Who: anyone who may edit the course (loadEditableCourse: its instructor, the platform owner, or a
// brand admin on a non-private course). Removing is the safe direction, so it is wider than
// publishing, which only the owner or the course's own instructor may do.
//
// Tenant: the course 404s across tenants, and the lesson 404s unless it belongs to THIS course.
export async function DELETE(_req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  // A malformed id is a 404 too, rather than a database error.
  if (!Uuid.safeParse(id).success || !Uuid.safeParse(lessonId).success) return errorJson("Not found", 404);
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;
  const { sdb, course } = ctx;

  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== course.id) return errorJson("Not found", 404);

  if (!(await sdb.deleteLessonTourEmbed(course.id, lesson.id))) return errorJson("Not found", 404);
  await bumpCourseContentVersion(course.id);
  return json({ ok: true });
}
