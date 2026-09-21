// Making someone a teacher of a school (the instructor role), as pure rules. Decided 2026-09-20:
// "build a way for admins to make someone a teacher". Until then the role could only be set by seed
// scripts, so a homeschool parent had no in-app path to running their own classes.
//
// A teacher here is tenant_memberships.role = 'instructor': it lets them create classes (still behind
// the adult rule) and write courses on THIS school only. Admins (brand_admin) already have both and
// are not managed on this page. The same adult rule as assigning a class teacher applies, because the
// platform owner's switch says teachers must be adults.

import type { TenantRole } from "@/db/schema";
import type { AdultStatus } from "@/lib/teacher-age";

export function teacherGrantError(input: {
  currentRole: TenantRole | null;
  passesAgeRule: boolean;
  status: AdultStatus;
}): string | null {
  if (input.currentRole === "brand_admin") return "That person is already an admin of this school, which includes teaching.";
  if (input.currentRole === "instructor") return "That person is already a teacher here.";
  if (!input.passesAgeRule) {
    return input.status === "unattested"
      ? "That person hasn't confirmed they are 18 or older. Teachers must be adults: ask them to sign in and confirm it on the Cohorts page, then try again."
      : "That account belongs to a student, so it can't be made a teacher.";
  }
  return null;
}

export function teacherRemoveError(currentRole: TenantRole | null): string | null {
  if (currentRole === "brand_admin") return "Admins aren't managed here.";
  if (currentRole !== "instructor") return "That person isn't a teacher here.";
  return null;
}

export const SCHOOL_TEACHER_STATUS_LABELS: Record<AdultStatus | "exception", string> = {
  adult: "Confirmed 18 or older",
  unattested: "Hasn't confirmed 18 or older",
  minor_signal: "Student account",
  exception: "Teaching by the platform owner's exception",
};
