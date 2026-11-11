import "server-only";
import { env } from "@/lib/env";
import type { Course } from "@/db/schema";
import type { TenantRecord } from "@/lib/tenant";
import { createCourseOffer } from "@/db/queries/course-offers";
import { checkInstructorAssignment } from "@/db/queries/course-instructor";
import { getAccountFacts } from "@/db/queries/account-settings";
import { personLabel } from "@/lib/course-instructor";
import { sendCourseOfferEmail } from "@/lib/emails";

// Making an offer, shared by the two places a school's admin hands a course to a teacher: Admin → Users
// (POST /api/admin/courses/[id]/instructor) and a course's settings (PATCH /api/courses/[id]). The rule
// for WHETHER it is an offer is assignmentIsOffer in src/lib/course-offers.ts; this runs the assignment
// rule first (so "isn't a teacher of this school" is answered now, not at acceptance), writes the offer,
// and emails the teacher (best-effort: the offer is listed on their Teach page either way).

export type MakeOfferResult =
  | { ok: true; changed: false }
  | { ok: true; changed: true; offer: { id: string; expiresAt: Date; teacherLabel: string } }
  | { ok: false; status: 400 | 403 | 404 | 409; error: string };

export async function makeCourseOffer(input: {
  tenant: TenantRecord;
  course: Course;
  teacherUserId: string;
  actor: { userId: string; isOwner: boolean; isSchoolAdmin: boolean; label: string };
  origin: string | null;
}): Promise<MakeOfferResult> {
  const { tenant, course, teacherUserId, actor } = input;
  const decision = await checkInstructorAssignment({
    tenantId: tenant.id,
    course,
    newInstructorId: teacherUserId,
    actor: { userId: actor.userId, isOwner: actor.isOwner, isSchoolAdmin: actor.isSchoolAdmin },
  });
  if (!decision.ok) return decision;
  if (!decision.changed) return { ok: true, changed: false };

  const offer = await createCourseOffer({
    tenantId: tenant.id,
    course,
    teacherUserId,
    offeredBy: { userId: actor.userId, role: decision.actorRole },
  });
  const teacher = await getAccountFacts(teacherUserId);
  const teacherLabel = teacher ? personLabel({ displayName: teacher.displayName, name: teacher.name, username: teacher.username }) : "the teacher";
  if (teacher) {
    try {
      await sendCourseOfferEmail({
        tenant,
        to: teacher.email,
        courseTitle: course.title,
        offeredBy: actor.label,
        teachUrl: `${input.origin ?? env.NEXT_PUBLIC_APP_URL}/teach#course-offers`,
        expiresAt: offer.expiresAt,
      });
    } catch (err) {
      console.error(`[course-offers] offer ${offer.id} SAVED but the teacher's email FAILED for school ${tenant.slug}:`, err);
    }
  }
  return { ok: true, changed: true, offer: { id: offer.id, expiresAt: offer.expiresAt, teacherLabel } };
}
