import { z } from "zod";
import { apiContext, courseActor, errorJson, json } from "@/lib/api";
import { assignCourseInstructor } from "@/db/queries/course-instructor";

const Body = z.object({ instructorId: z.string().min(1).max(200) });

// POST /api/admin/courses/[id]/instructor: hand a course to a teacher of its school (BAM, 2026-11-10:
// "admin should be able to assign teachers to courses"), from the Users page. The platform owner, or a
// brand_admin of the school the request's host resolved to; the course is read through the
// tenant-scoped DAL, so another school's course is a 404. The target must be a teacher or admin of
// that school (or a platform owner). The rule is src/lib/course-instructor.ts, shared with the course
// settings picker; every change writes a course_instructor_changes row.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Pick a teacher.", 400);

  const actor = await courseActor(session, sdb.tenantId, course);
  const result = await assignCourseInstructor({
    tenantId: sdb.tenantId,
    course,
    newInstructorId: parsed.data.instructorId,
    actor: { userId: session.user.id, isOwner: actor.isOwner, isSchoolAdmin: actor.isSchoolAdmin },
    source: "admin-users",
  });
  if (!result.ok) return errorJson(result.error, result.status);
  return json({ ok: true, changed: result.changed, course: { id: result.course.id, instructorId: result.course.instructorId } });
}
