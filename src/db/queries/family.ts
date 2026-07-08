import "server-only";
import { randomBytes } from "node:crypto";
import { and, asc, eq, isNull } from "drizzle-orm";
import { db } from "@/db/client";
import {
  cohortAttendance,
  cohorts,
  guardianInvites,
  guardians,
  userProfiles,
  type GuardianInvite,
} from "@/db/schema";

// Family (read-only parent view — Model A of the hybrid). All reads are tenant-scoped;
// `isGuardianOf` is THE gate — every route that shows a child's data must call it (or
// filter guardianUserId = the caller's own session id) before touching that child's
// progress/grades/attendance. Never trust a studentUserId from the client alone.

/** Create + return a guardian (parent) invite for a student, mirroring cohort invites. */
export async function createGuardianInvite(
  tenantId: string,
  studentUserId: string,
  email: string,
  cohortId?: string,
): Promise<GuardianInvite> {
  const token = randomBytes(16).toString("hex");
  const [row] = await db
    .insert(guardianInvites)
    .values({ tenantId, studentUserId, email, cohortId: cohortId ?? null, token })
    .returning();
  return row;
}

export interface AcceptedGuardianInvite {
  studentUserId: string;
  studentDisplayName: string;
}

/**
 * Redeem a not-yet-accepted guardian invite: links the guardian (idempotent) and marks
 * the invite accepted. Returns the linked child (id + display name), or null if the
 * token is invalid/already used. Tenant comes from the invite row itself, not the caller.
 */
export async function acceptGuardianInvite(
  token: string,
  guardianUserId: string,
): Promise<AcceptedGuardianInvite | null> {
  const rows = await db
    .select({
      invite: guardianInvites,
      displayName: userProfiles.displayName,
      username: userProfiles.username,
    })
    .from(guardianInvites)
    .leftJoin(userProfiles, eq(userProfiles.userId, guardianInvites.studentUserId))
    .where(and(eq(guardianInvites.token, token), isNull(guardianInvites.acceptedAt)))
    .limit(1);
  const row = rows[0];
  if (!row) return null;

  await db
    .insert(guardians)
    .values({
      tenantId: row.invite.tenantId,
      guardianUserId,
      studentUserId: row.invite.studentUserId,
    })
    .onConflictDoNothing({ target: [guardians.guardianUserId, guardians.studentUserId] });

  await db
    .update(guardianInvites)
    .set({ acceptedAt: new Date(), acceptedGuardianUserId: guardianUserId })
    .where(eq(guardianInvites.id, row.invite.id));

  return {
    studentUserId: row.invite.studentUserId,
    studentDisplayName: row.displayName ?? row.username ?? "your child",
  };
}

export interface ChildSummary {
  userId: string;
  displayName: string;
}

/** The students this guardian is linked to, in this tenant. Tenant-scoped. */
export async function listChildren(tenantId: string, guardianUserId: string): Promise<ChildSummary[]> {
  const rows = await db
    .select({
      userId: guardians.studentUserId,
      displayName: userProfiles.displayName,
      username: userProfiles.username,
    })
    .from(guardians)
    .leftJoin(userProfiles, eq(userProfiles.userId, guardians.studentUserId))
    .where(and(eq(guardians.tenantId, tenantId), eq(guardians.guardianUserId, guardianUserId)))
    .orderBy(asc(guardians.createdAt));
  return rows.map((r) => ({
    userId: r.userId,
    displayName: r.displayName ?? r.username ?? "Learner",
  }));
}

/** THE gate: is this guardian actually linked to this student, in this tenant? Every
 *  per-child data read must be preceded by (or filtered through) this check. */
export async function isGuardianOf(tenantId: string, guardianUserId: string, studentUserId: string): Promise<boolean> {
  const rows = await db
    .select({ id: guardians.id })
    .from(guardians)
    .where(
      and(
        eq(guardians.tenantId, tenantId),
        eq(guardians.guardianUserId, guardianUserId),
        eq(guardians.studentUserId, studentUserId),
      ),
    )
    .limit(1);
  return rows.length > 0;
}

/** Upsert one attendance day for a (cohort, user) — idempotent on the unique constraint.
 *  Called from the live-presence heartbeat, never from client input directly. */
export async function recordAttendance(
  tenantId: string,
  cohortId: string,
  userId: string,
  day: string,
): Promise<void> {
  await db
    .insert(cohortAttendance)
    .values({ tenantId, cohortId, userId, day })
    .onConflictDoNothing({ target: [cohortAttendance.cohortId, cohortAttendance.userId, cohortAttendance.day] });
}

export interface ChildAttendance {
  cohortId: string;
  cohortName: string;
  days: string[];
}

/** A child's attendance, grouped by cohort — only cohorts in this tenant. Caller MUST
 *  have already verified isGuardianOf before calling this for a given studentUserId. */
export async function listAttendanceForChild(tenantId: string, studentUserId: string): Promise<ChildAttendance[]> {
  const rows = await db
    .select({
      cohortId: cohortAttendance.cohortId,
      cohortName: cohorts.name,
      day: cohortAttendance.day,
    })
    .from(cohortAttendance)
    .innerJoin(cohorts, eq(cohorts.id, cohortAttendance.cohortId))
    .where(and(eq(cohortAttendance.tenantId, tenantId), eq(cohortAttendance.userId, studentUserId)))
    .orderBy(asc(cohortAttendance.day));

  const byCohort = new Map<string, ChildAttendance>();
  for (const r of rows) {
    const existing = byCohort.get(r.cohortId);
    if (existing) existing.days.push(r.day);
    else byCohort.set(r.cohortId, { cohortId: r.cohortId, cohortName: r.cohortName, days: [r.day] });
  }
  return [...byCohort.values()];
}
