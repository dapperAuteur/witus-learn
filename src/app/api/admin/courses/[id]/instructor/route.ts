import { z } from "zod";
import { apiContext, courseActor, errorJson, json } from "@/lib/api";
import { assignCourseInstructor } from "@/db/queries/course-instructor";
import { assignmentIsOffer } from "@/lib/course-offers";
import { makeCourseOffer } from "@/lib/course-offer-flow";
import { requestOrigin } from "@/lib/request-origin";

const Body = z.object({ instructorId: z.string().min(1).max(200) });

// POST /api/admin/courses/[id]/instructor: hand a course to a teacher of its school from the Users page
// (BAM, 2026-11-10: "admin should be able to assign teachers to courses", then "approve assigned
// courses"). The platform owner, or a brand_admin of the school the request's host resolved to; the
// course is read through the tenant-scoped DAL, so another school's course is a 404. The target must be
// a teacher or admin of that school (or a platform owner); the rule is src/lib/course-instructor.ts.
//
// Handing it to someone else is an OFFER (src/lib/course-offers.ts): the instructor changes only when
// the teacher accepts on /teach, and the teacher is emailed. Handing it to yourself is immediate and
// writes a course_instructor_changes row, as before.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Pick a teacher.", 400);
  const target = parsed.data.instructorId;

  const actor = await courseActor(session, sdb.tenantId, course);
  if (assignmentIsOffer({ actorUserId: session.user.id, targetUserId: target, actorIsOwner: actor.isOwner, source: "admin-users" })) {
    const result = await makeCourseOffer({
      tenant: sdb.tenant,
      course,
      teacherUserId: target,
      actor: { userId: session.user.id, isOwner: actor.isOwner, isSchoolAdmin: actor.isSchoolAdmin, label: session.user.name?.trim() || "Your school's admin" },
      origin: requestOrigin(req.headers),
    });
    if (!result.ok) return errorJson(result.error, result.status);
    if (!result.changed) return json({ ok: true, changed: false, offered: false, course: { id: course.id, instructorId: course.instructorId } });
    return json({ ok: true, changed: false, offered: true, offer: result.offer, course: { id: course.id, instructorId: course.instructorId } }, 201);
  }

  const result = await assignCourseInstructor({
    tenantId: sdb.tenantId,
    course,
    newInstructorId: target,
    actor: { userId: session.user.id, isOwner: actor.isOwner, isSchoolAdmin: actor.isSchoolAdmin },
    source: "admin-users",
  });
  if (!result.ok) return errorJson(result.error, result.status);
  return json({ ok: true, changed: result.changed, offered: false, course: { id: result.course.id, instructorId: result.course.instructorId } });
}
