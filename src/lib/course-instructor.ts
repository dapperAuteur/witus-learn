// Handing a course to a teacher, as pure rules (BAM, 2026-11-10: "owner and teacher do not need to be
// same user" and "admin should be able to assign teachers to courses"). The database half is
// src/db/queries/course-instructor.ts; the course settings picker (PATCH /api/courses/[id]), the
// Users page (POST /api/admin/courses/[id]/instructor) and the seeders all decide through this file,
// so the rule cannot drift between the three.
//
// A course's instructor is the account that edits, records and is bylined on it. It is any TEACHER of
// the course's school (tenant_memberships.role instructor or brand_admin on THAT school) or a platform
// owner. It was never meant to be the owner alone: that coupling came from the seeders, which wrote
// the owner back onto every course they refreshed (see keepsCurrentInstructor).

import type { TenantRole } from "@/db/schema";

/** The role an actor assigns an instructor in, as recorded in course_instructor_changes. */
export type InstructorActorRole = "platform_owner" | "brand_admin" | "seed";

/** Where an assignment was made, as recorded in course_instructor_changes. */
export type InstructorChangeSource = "course-settings" | "admin-users" | "course-request" | "course-offer" | "seed";

/** Everything the decision needs, resolved on the server (never from the client). */
export interface InstructorAssignmentFacts {
  /** The actor: the platform owner, or a brand_admin of the course's school. Anyone else may not assign. */
  actor: { isOwner: boolean; isSchoolAdmin: boolean };
  /** The course as it stands. */
  course: { instructorId: string; ownerOnly: boolean };
  /** The person the course is being handed to. */
  target: {
    userId: string;
    /** Their role on the course's school, or null when they are not a member of it. */
    role: TenantRole | null;
    isPlatformOwner: boolean;
    /** Whether a username exists or could be derived (ensureUsernameById returned one). */
    hasUsername: boolean;
    /** Whether they already own another course at this course's slug on this school. */
    slugTaken: boolean;
  };
}

export type InstructorAssignmentDecision =
  | { ok: true; changed: boolean; actorRole: Exclude<InstructorActorRole, "seed"> }
  | { ok: false; status: 400 | 403 | 404 | 409; error: string };

export const INSTRUCTOR_FORBIDDEN = "Only the platform owner or this school's admin can change who teaches a course.";
export const INSTRUCTOR_NOT_TEACHER = "That person isn't a teacher of this school. Make them a teacher on Admin → Teachers first.";
export const INSTRUCTOR_NO_PROFILE = "That teacher has no profile yet, so their course URL can't be built. Ask them to sign in once.";
export const INSTRUCTOR_SLUG_TAKEN = "That teacher already has a course at this URL. Rename this course's slug first.";

/** May this role teach on the school it is held on? Admins include teaching (Admin → Teachers says so). */
export function canTeachWithRole(role: TenantRole | null): boolean {
  return role === "instructor" || role === "brand_admin";
}

/**
 * Decide an assignment. The owner may hand any course to any teacher of its school or to a platform
 * owner; a brand_admin the same, except an OWNER-ONLY course, which is answered with the learner's
 * not-found so the response does not confirm it exists (src/lib/course-visibility.ts). Handing a
 * course to the person who already has it changes nothing and writes nothing.
 */
export function decideInstructorAssignment(f: InstructorAssignmentFacts): InstructorAssignmentDecision {
  if (!f.actor.isOwner) {
    if (!f.actor.isSchoolAdmin) return { ok: false, status: 403, error: INSTRUCTOR_FORBIDDEN };
    if (f.course.ownerOnly) return { ok: false, status: 404, error: "Not found" };
  }
  const actorRole = f.actor.isOwner ? "platform_owner" : "brand_admin";
  if (f.target.userId === f.course.instructorId) return { ok: true, changed: false, actorRole };
  if (!canTeachWithRole(f.target.role) && !f.target.isPlatformOwner) {
    return { ok: false, status: 400, error: INSTRUCTOR_NOT_TEACHER };
  }
  if (!f.target.hasUsername) return { ok: false, status: 400, error: INSTRUCTOR_NO_PROFILE };
  if (f.target.slugTaken) return { ok: false, status: 409, error: INSTRUCTOR_SLUG_TAKEN };
  return { ok: true, changed: true, actorRole };
}

/**
 * Should a re-seed LEAVE the course's current instructor in place? Yes when the current instructor is
 * a real teacher of the school (a member who can teach there) or a platform owner: an assignment made
 * in the app is a decision the seed must not undo. No when the current instructor is a stale seed
 * account with no role on the school (the old @trade-faculty / @witus-health bylines), which is the
 * repair the seeders exist to make. The seeding account itself is always kept.
 */
export function keepsCurrentInstructor(input: {
  currentInstructorId: string;
  seedInstructorId: string;
  currentRole: TenantRole | null;
  currentIsPlatformOwner: boolean;
}): boolean {
  if (input.currentInstructorId === input.seedInstructorId) return true;
  return canTeachWithRole(input.currentRole) || input.currentIsPlatformOwner;
}

/** How a person is named in an instructor picker or a member list: name, then username, then email. */
export function personLabel(p: { displayName?: string | null; name?: string | null; username?: string | null; email?: string | null }): string {
  const name = p.displayName?.trim() || p.name?.trim();
  if (name) return p.email ? `${name} (${p.email})` : name;
  if (p.username) return p.email ? `@${p.username} (${p.email})` : `@${p.username}`;
  return p.email ?? "Unnamed account";
}
