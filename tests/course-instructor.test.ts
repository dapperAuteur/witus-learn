import { describe, expect, it } from "vitest";
import {
  INSTRUCTOR_FORBIDDEN,
  INSTRUCTOR_NOT_TEACHER,
  INSTRUCTOR_NO_PROFILE,
  INSTRUCTOR_SLUG_TAKEN,
  canTeachWithRole,
  decideInstructorAssignment,
  keepsCurrentInstructor,
  personLabel,
} from "@/lib/course-instructor";

// Handing a course to a teacher (BAM, 2026-11-10: "owner and teacher do not need to be same user";
// "admin should be able to assign teachers to courses"). The pure rule every assignment path shares.

const course = { instructorId: "owner-1", ownerOnly: false };
const teacher = { userId: "teacher-1", role: "instructor" as const, isPlatformOwner: false, hasUsername: true, slugTaken: false };

describe("decideInstructorAssignment", () => {
  it("lets this school's brand_admin hand a course to a teacher of the school", () => {
    const d = decideInstructorAssignment({ actor: { isOwner: false, isSchoolAdmin: true }, course, target: teacher });
    expect(d).toEqual({ ok: true, changed: true, actorRole: "brand_admin" });
  });

  it("lets the platform owner do the same, in the owner's role", () => {
    const d = decideInstructorAssignment({ actor: { isOwner: true, isSchoolAdmin: false }, course, target: teacher });
    expect(d).toEqual({ ok: true, changed: true, actorRole: "platform_owner" });
  });

  it("refuses a learner, a plain teacher, and another school's admin (no admin role on THIS school)", () => {
    const d = decideInstructorAssignment({ actor: { isOwner: false, isSchoolAdmin: false }, course, target: teacher });
    expect(d).toEqual({ ok: false, status: 403, error: INSTRUCTOR_FORBIDDEN });
  });

  it("answers a brand_admin with not-found on an owner-only course, and the owner with ok", () => {
    const oo = { ...course, ownerOnly: true };
    expect(decideInstructorAssignment({ actor: { isOwner: false, isSchoolAdmin: true }, course: oo, target: teacher })).toMatchObject({ ok: false, status: 404 });
    expect(decideInstructorAssignment({ actor: { isOwner: true, isSchoolAdmin: true }, course: oo, target: teacher })).toMatchObject({ ok: true, changed: true });
  });

  it("refuses a target who is not a teacher or admin of the school, unless they are a platform owner", () => {
    const learner = { ...teacher, role: "learner" as const };
    const stranger = { ...teacher, role: null };
    const admin = { ...teacher, role: "brand_admin" as const };
    const owner = { ...teacher, role: null, isPlatformOwner: true };
    expect(decideInstructorAssignment({ actor: { isOwner: true, isSchoolAdmin: false }, course, target: learner })).toEqual({ ok: false, status: 400, error: INSTRUCTOR_NOT_TEACHER });
    expect(decideInstructorAssignment({ actor: { isOwner: true, isSchoolAdmin: false }, course, target: stranger })).toMatchObject({ ok: false, status: 400 });
    expect(decideInstructorAssignment({ actor: { isOwner: false, isSchoolAdmin: true }, course, target: admin })).toMatchObject({ ok: true });
    expect(decideInstructorAssignment({ actor: { isOwner: false, isSchoolAdmin: true }, course, target: owner })).toMatchObject({ ok: true });
  });

  it("refuses a target with no username (the course URL needs one) and a slug collision", () => {
    expect(decideInstructorAssignment({ actor: { isOwner: true, isSchoolAdmin: false }, course, target: { ...teacher, hasUsername: false } })).toEqual({ ok: false, status: 400, error: INSTRUCTOR_NO_PROFILE });
    expect(decideInstructorAssignment({ actor: { isOwner: true, isSchoolAdmin: false }, course, target: { ...teacher, slugTaken: true } })).toEqual({ ok: false, status: 409, error: INSTRUCTOR_SLUG_TAKEN });
  });

  it("handing a course to its current instructor changes nothing, whatever else is true of them", () => {
    const same = { ...teacher, userId: "owner-1", role: null, hasUsername: false, slugTaken: true };
    expect(decideInstructorAssignment({ actor: { isOwner: false, isSchoolAdmin: true }, course, target: same })).toEqual({ ok: true, changed: false, actorRole: "brand_admin" });
  });

  it("the authorization check comes before any fact about the target", () => {
    // A forbidden actor learns nothing about whether the target teaches here or owns the slug.
    const d = decideInstructorAssignment({ actor: { isOwner: false, isSchoolAdmin: false }, course, target: { ...teacher, role: null, slugTaken: true } });
    expect(d).toMatchObject({ status: 403 });
  });
});

describe("keepsCurrentInstructor (what a re-seed does to the byline)", () => {
  it("keeps a teacher or admin of the school, and a platform owner, that the app assigned", () => {
    expect(keepsCurrentInstructor({ currentInstructorId: "t", seedInstructorId: "bam", currentRole: "instructor", currentIsPlatformOwner: false })).toBe(true);
    expect(keepsCurrentInstructor({ currentInstructorId: "a", seedInstructorId: "bam", currentRole: "brand_admin", currentIsPlatformOwner: false })).toBe(true);
    expect(keepsCurrentInstructor({ currentInstructorId: "o2", seedInstructorId: "bam", currentRole: null, currentIsPlatformOwner: true })).toBe(true);
  });

  it("replaces a stale seed account with no role on the school, and always keeps the seeding account", () => {
    expect(keepsCurrentInstructor({ currentInstructorId: "trade-faculty", seedInstructorId: "bam", currentRole: null, currentIsPlatformOwner: false })).toBe(false);
    expect(keepsCurrentInstructor({ currentInstructorId: "l", seedInstructorId: "bam", currentRole: "learner", currentIsPlatformOwner: false })).toBe(false);
    expect(keepsCurrentInstructor({ currentInstructorId: "bam", seedInstructorId: "bam", currentRole: null, currentIsPlatformOwner: false })).toBe(true);
  });
});

describe("canTeachWithRole and personLabel", () => {
  it("instructor and brand_admin teach; learner and none do not", () => {
    expect(canTeachWithRole("instructor")).toBe(true);
    expect(canTeachWithRole("brand_admin")).toBe(true);
    expect(canTeachWithRole("learner")).toBe(false);
    expect(canTeachWithRole(null)).toBe(false);
  });

  it("names a person by display name, then account name, then @username, then email, never a raw id", () => {
    expect(personLabel({ displayName: "Ms. Rivera", email: "t@school.test" })).toBe("Ms. Rivera (t@school.test)");
    expect(personLabel({ name: "T Rivera", username: "trivera", email: "t@school.test" })).toBe("T Rivera (t@school.test)");
    expect(personLabel({ username: "trivera", email: "t@school.test" })).toBe("@trivera (t@school.test)");
    expect(personLabel({ email: "t@school.test" })).toBe("t@school.test");
    expect(personLabel({})).toBe("Unnamed account");
  });
});
