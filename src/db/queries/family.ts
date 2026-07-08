import "server-only";
import { randomBytes, randomUUID } from "node:crypto";
import { and, asc, eq, isNull } from "drizzle-orm";
import { db } from "@/db/client";
import {
  cohortAttendance,
  cohorts,
  guardianInvites,
  guardians,
  userProfiles,
  users,
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

// ── Family Model B: parent-managed child profiles (no login) ───────────────────
//
// A managed child is a REAL `users` row (so every existing learner code path —
// enrollment, progress, recall, quiz, submissions, live presence/chat — works
// unchanged, keyed on that row's id) that can never authenticate: its email is a
// synthetic, non-deliverable placeholder and it's never sent a magic link. The
// parent "studies as" it via the active-learner cookie (src/lib/active-learner.ts).
// It also gets a `user_profiles.managed_by_user_id` back-reference (the act-as gate)
// AND a `guardians` row (so it shows up in the same /family read-path as Model A).

export interface ManagedChild {
  userId: string;
  displayName: string;
}

/**
 * Create a login-less managed child profile for this parent, in this tenant.
 * Inserts a `users` row (synthetic unique email, unverified), a `user_profiles`
 * row (`managedByUserId = parentUserId`), and a `guardians` link — all in one
 * transaction. Safe to call repeatedly (each call mints a fresh uuid-based email,
 * so re-running never collides on the unique email constraint).
 */
export async function createManagedChild(
  tenantId: string,
  parentUserId: string,
  name: string,
): Promise<string> {
  const childId = randomUUID();
  const syntheticEmail = `managed-${randomUUID()}@no-login.invalid`;

  return db.transaction(async (tx) => {
    await tx.insert(users).values({
      id: childId,
      email: syntheticEmail,
      emailVerified: false,
      name,
    });
    await tx.insert(userProfiles).values({
      userId: childId,
      displayName: name,
      managedByUserId: parentUserId,
    });
    await tx
      .insert(guardians)
      .values({ tenantId, guardianUserId: parentUserId, studentUserId: childId })
      .onConflictDoNothing({ target: [guardians.guardianUserId, guardians.studentUserId] });
    return childId;
  });
}

/** The parent's managed child profiles (Model B), scoped to THIS tenant via the
 *  `guardians` link created alongside the child (every managed child gets one, tied to
 *  the tenant it was created in) — so a parent who's a member of more than one tenant
 *  never sees a sibling brand's managed children bleed into this one's UI. */
export async function listManagedChildren(
  tenantId: string,
  parentUserId: string,
): Promise<ManagedChild[]> {
  const rows = await db
    .select({ userId: userProfiles.userId, displayName: userProfiles.displayName })
    .from(userProfiles)
    .innerJoin(
      guardians,
      and(
        eq(guardians.studentUserId, userProfiles.userId),
        eq(guardians.guardianUserId, parentUserId),
        eq(guardians.tenantId, tenantId),
      ),
    )
    .where(eq(userProfiles.managedByUserId, parentUserId))
    .orderBy(asc(userProfiles.createdAt));
  return rows.map((r) => ({ userId: r.userId, displayName: r.displayName ?? "Learner" }));
}

/** THE act-as gate: is `childUserId` a profile this parent actually manages?
 *  Every act-as switch and active-learner resolution must call this — never
 *  trust a client-supplied learner id (or a cookie) without it. */
export async function isManagedChildOf(parentUserId: string, childUserId: string): Promise<boolean> {
  const rows = await db
    .select({ userId: userProfiles.userId })
    .from(userProfiles)
    .where(and(eq(userProfiles.userId, childUserId), eq(userProfiles.managedByUserId, parentUserId)))
    .limit(1);
  return rows.length > 0;
}

/** Display name for a managed child (used to render the cookie-selected learner's
 *  name without trusting the cookie for anything but the id). Returns null if the
 *  profile doesn't exist (should not happen once isManagedChildOf has passed). */
export async function getManagedChildName(childUserId: string): Promise<string | null> {
  const rows = await db
    .select({ displayName: userProfiles.displayName })
    .from(userProfiles)
    .where(eq(userProfiles.userId, childUserId))
    .limit(1);
  return rows[0]?.displayName ?? null;
}
