import "server-only";
import { randomBytes } from "node:crypto";
import { and, desc, eq, isNotNull } from "drizzle-orm";
import { db } from "@/db/client";
import { courseAuditors, courses, type CourseAuditor } from "@/db/schema";
import { isAcceptedAuditor, type AuditorGrant, type AuditorViewer } from "@/lib/auditors";

// Invite-to-audit reads/writes (plans/52 §5). EVERY function here takes a tenantId and filters on
// it; the one that does not (acceptAuditorInvite) resolves the tenant FROM the invite row, which a
// token can only ever belong to one of. The identity match itself lives in the pure
// src/lib/auditors.ts so the isolation suite owns the definition of "is this person an auditor".

/** Auditors of one course, newest first. Tenant-scoped. */
export async function listCourseAuditors(
  tenantId: string,
  courseId: string,
): Promise<CourseAuditor[]> {
  return db
    .select()
    .from(courseAuditors)
    .where(and(eq(courseAuditors.tenantId, tenantId), eq(courseAuditors.courseId, courseId)))
    .orderBy(desc(courseAuditors.invitedAt));
}

/**
 * Invite (or re-invite) an email to audit a course. Idempotent on (tenant, course, email): a second
 * invite to the same address mints a FRESH token on the SAME row rather than a duplicate grant, so
 * "I lost the link" is one click and never leaves two live tokens behind. An already-accepted grant
 * keeps its acceptance (re-sending a link must not silently revoke access).
 */
export async function inviteCourseAuditor(input: {
  tenantId: string;
  courseId: string;
  email: string;
  invitedBy: string;
}): Promise<CourseAuditor> {
  const email = input.email.trim().toLowerCase();
  const token = randomBytes(16).toString("hex");
  const [row] = await db
    .insert(courseAuditors)
    .values({ ...input, email, token })
    .onConflictDoUpdate({
      target: [courseAuditors.tenantId, courseAuditors.courseId, courseAuditors.email],
      set: { token, invitedAt: new Date(), invitedBy: input.invitedBy },
    })
    .returning();
  return row;
}

/** Revoke a grant. Tenant + course scoped, so an id from another school deletes nothing. */
export async function revokeCourseAuditor(
  tenantId: string,
  courseId: string,
  auditorId: string,
): Promise<boolean> {
  const rows = await db
    .delete(courseAuditors)
    .where(
      and(
        eq(courseAuditors.tenantId, tenantId),
        eq(courseAuditors.courseId, courseId),
        eq(courseAuditors.id, auditorId),
      ),
    )
    .returning({ id: courseAuditors.id });
  return rows.length > 0;
}

export interface AcceptedAudit {
  auditor: CourseAuditor;
  courseSlug: string | null;
  courseTitle: string;
  instructorId: string;
}

/**
 * Redeem an audit invite. Sets `accepted_at` (idempotent: an already-accepted grant re-accepts to
 * the same state) and records `user_id` when the invitee is signed in, which is what lets them keep
 * access from a second address later. Returns null for an unknown token.
 */
export async function acceptAuditorInvite(
  token: string,
  userId: string | null,
): Promise<AcceptedAudit | null> {
  const rows = await db
    .select({
      auditor: courseAuditors,
      courseSlug: courses.slug,
      courseTitle: courses.title,
      instructorId: courses.instructorId,
    })
    .from(courseAuditors)
    .innerJoin(courses, eq(courses.id, courseAuditors.courseId))
    .where(eq(courseAuditors.token, token))
    .limit(1);
  const row = rows[0];
  if (!row) return null;

  const [updated] = await db
    .update(courseAuditors)
    .set({
      acceptedAt: row.auditor.acceptedAt ?? new Date(),
      userId: userId ?? row.auditor.userId,
    })
    .where(eq(courseAuditors.id, row.auditor.id))
    .returning();

  return { ...row, auditor: updated };
}

/**
 * Is this viewer an accepted auditor of this course? The SQL narrows to this tenant's accepted
 * grants for this one course (a course has a handful of auditors at most), and the pure matcher
 * decides identity, so there is exactly ONE definition of "is an auditor" and the isolation suite
 * exercises it directly.
 */
export async function isCourseAuditor(viewer: AuditorViewer): Promise<boolean> {
  if (!viewer.userId && !viewer.email) return false;
  const grants: AuditorGrant[] = await db
    .select({
      tenantId: courseAuditors.tenantId,
      courseId: courseAuditors.courseId,
      email: courseAuditors.email,
      userId: courseAuditors.userId,
      acceptedAt: courseAuditors.acceptedAt,
    })
    .from(courseAuditors)
    .where(
      and(
        eq(courseAuditors.tenantId, viewer.tenantId),
        eq(courseAuditors.courseId, viewer.courseId),
        isNotNull(courseAuditors.acceptedAt),
      ),
    );
  return isAcceptedAuditor(grants, viewer);
}
