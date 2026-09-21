import "server-only";
import type { Cohort } from "@/db/schema";
import { isCohortTeacher } from "@/db/queries/cohorts";
import { getMembership, isPlatformOwner } from "@/lib/session";
import { isTenantAdmin } from "@/lib/api";
import type { Session } from "@/lib/auth";

// Who may do what with a cohort. ONE place, because the same "owner or admin" line used to be
// copied into a dozen routes, and adding assigned teachers to a dozen copies is how one gets missed.
//
//   manage   = run the class: roster, invites, class code, gradebook, grade adjustments, teacher
//              notes, parent invites. The creator, any assigned teacher, or a tenant admin.
//   assign   = add or remove the class's teachers. The creator or a tenant admin only, as decided
//              2026-09-20 ("creator of the class and admins may assign another user as teacher").
//
// The cohort row must already be tenant-resolved (getCohort(sdb.tenantId, id) + ownOrNotFound or a
// null check); these helpers answer "may THIS user", never "does it exist".

export async function canManageCohort(session: Session | null, tenantId: string, cohort: Cohort): Promise<boolean> {
  if (!session) return false;
  if (cohort.ownerId === session.user.id) return true;
  if (await isCohortTeacher(tenantId, cohort.id, session.user.id)) return true;
  return isTenantAdmin(session, tenantId);
}

export async function canAssignCohortTeachers(
  session: Session | null,
  tenantId: string,
  cohort: Cohort,
): Promise<boolean> {
  if (!session) return false;
  if (cohort.ownerId === session.user.id) return true;
  return isTenantAdmin(session, tenantId);
}

/** The ROLE half of "may create a class": instructor, brand admin, or the platform owner. The AGE
 *  half is getTeachingEligibility (src/db/queries/teacher-age.ts). */
export async function hasTeacherRole(session: Session | null, tenantId: string): Promise<boolean> {
  if (!session) return false;
  if (await isPlatformOwner(session.user.id)) return true;
  const role = await getMembership(session.user.id, tenantId);
  return role === "instructor" || role === "brand_admin";
}
