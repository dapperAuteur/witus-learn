import "server-only";
import { isTenantAdmin } from "@/lib/api";
import type { Session } from "@/lib/auth";
import { isPlatformOwner } from "@/lib/session";

/**
 * Who may hand out (or take back) a read-only review grant on one course: the platform owner, the
 * course's OWN instructor, or a tenant admin of the school that owns the course.
 *
 * Deliberately narrower than "any instructor", for the same reason a cohort's invites belong to its
 * own owner: an audit grant opens a CLOSED course (src/db/schema/auditors.ts).
 *
 * Extracted from the auditors route when self-nomination shipped, because approving a self-nominated
 * beta tester or subject matter expert mints exactly that grant. One gate, so the two paths into the
 * same privilege can never drift apart: widening this widens both, and the isolation suite asserts
 * both routes call it.
 */
export async function canManageCourseReviewers(
  session: Session | null,
  tenantId: string,
  instructorId: string,
): Promise<boolean> {
  if (!session) return false;
  if (session.user.id === instructorId) return true;
  if (await isPlatformOwner(session.user.id)) return true;
  return isTenantAdmin(session, tenantId);
}
