// Invite-to-audit (plans/52 §5). PURE (no next/headers, no db) so the isolation suite can prove
// every branch offline, exactly like src/lib/vetting.ts which this plugs into.
//
// An AUDITOR is someone the owner (or the course's own instructor) invited by email to read ONE
// unvetted course before it opens. The grant is deliberately narrow in three directions at once:
//
//   ONE COURSE   a grant names a course_id. An auditor of course A is a stranger to course B, even
//                in the same tenant, even on the same day.
//   ONE TENANT   a grant names a tenant_id. A grant minted by school A can never open a course in
//                school B, which is the invariant the whole app is built around.
//   READ ONLY    an auditor is not a learner. No enrolling, no certificate, no progress, and
//                critically NO recorded quiz or recall attempts: a reviewer clicking through a
//                quiz to check it must not move the course's statistics or any dashboard average.
//                (Same reasoning as the repo's quiz-integrity rule: a number nobody can trust is
//                worse than no number.)
//
// A PENDING invite grants nothing at all. Only `accepted_at` turns an invitation into access, so an
// address typed by mistake, or one that never opened the email, never sees the course.

/** One `course_auditors` row, reduced to what the decision needs. */
export interface AuditorGrant {
  tenantId: string;
  courseId: string;
  /** Stored lowercased. Compared case-insensitively anyway, because email casing is not identity. */
  email: string;
  /** Set when the invitee accepted while signed in. Null when they accepted signed out. */
  userId: string | null;
  /** NULL = invited, not accepted. A pending invite grants NOTHING. */
  acceptedAt: Date | null;
}

/** Who is asking, relative to one course in one tenant. All three fields are resolved server-side. */
export interface AuditorViewer {
  tenantId: string;
  courseId: string;
  /** The SIGNED-IN account, never a managed child: a grant is issued to a person, not a profile. */
  userId: string | null;
  email: string | null;
}

/** Does this grant belong to this viewer, for this course, in this tenant, and is it accepted? */
function grantMatches(grant: AuditorGrant, viewer: AuditorViewer): boolean {
  if (grant.tenantId !== viewer.tenantId) return false;
  if (grant.courseId !== viewer.courseId) return false;
  if (grant.acceptedAt == null) return false;
  if (grant.userId && viewer.userId && grant.userId === viewer.userId) return true;
  if (!viewer.email) return false;
  return grant.email.trim().toLowerCase() === viewer.email.trim().toLowerCase();
}

/**
 * Is this viewer an ACCEPTED auditor of this course?
 *
 * The caller passes grants it has already read through the tenant-scoped DAL; this function
 * re-checks the tenant and course anyway, because a boundary that is only enforced in the query is
 * a boundary that one forgotten `WHERE` undoes silently.
 */
export function isAcceptedAuditor(grants: readonly AuditorGrant[], viewer: AuditorViewer): boolean {
  return grants.some((g) => grantMatches(g, viewer));
}

/**
 * Is this viewer here ONLY on an audit grant, and therefore forbidden from writing anything?
 *
 * An editor writes as an editor and an enrollee writes as a learner; the block is for the person
 * whose entire access to this course is the invitation. It is also scoped to an UNVETTED course:
 * once the course is vetted the grant confers nothing beyond what any visitor has, so an auditor
 * who later enrolls like anyone else is an ordinary learner with ordinary statistics.
 */
export function isReadOnlyAuditor(input: {
  isAuditor: boolean;
  isUnvetted: boolean;
  isEditor: boolean;
  isEnrolled: boolean;
}): boolean {
  return input.isAuditor && input.isUnvetted && !input.isEditor && !input.isEnrolled;
}

/** What a blocked write says. One string so every route answers identically. */
export const AUDITOR_READ_ONLY_MESSAGE =
  "You are auditing this course, so your answers and progress are not recorded.";
