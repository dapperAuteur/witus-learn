import "server-only";
import { randomBytes } from "node:crypto";
import { and, eq, isNull, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  cohortInvites,
  cohortMembers,
  cohorts,
  userProfiles,
  type Cohort,
  type CohortInvite,
} from "@/db/schema";

// Cohorts (private classes) for live class management — home-school #1. All reads
// are tenant-scoped; a caller resolving by id must still run row.tenantId through
// sdb.ownOrNotFound (never trust an id alone).

export async function createCohort(tenantId: string, ownerId: string, name: string): Promise<Cohort> {
  const [row] = await db.insert(cohorts).values({ tenantId, ownerId, name }).returning();
  return row;
}

export interface CohortWithCount extends Cohort {
  memberCount: number;
}

/** Cohorts for the tenant, optionally filtered to one owner (an instructor's own classes). */
export async function listCohorts(tenantId: string, ownerId?: string): Promise<CohortWithCount[]> {
  const rows = await db
    .select({
      cohort: cohorts,
      memberCount: sql<number>`count(${cohortMembers.id})::int`,
    })
    .from(cohorts)
    .leftJoin(cohortMembers, eq(cohortMembers.cohortId, cohorts.id))
    .where(ownerId ? and(eq(cohorts.tenantId, tenantId), eq(cohorts.ownerId, ownerId)) : eq(cohorts.tenantId, tenantId))
    .groupBy(cohorts.id)
    .orderBy(cohorts.createdAt);
  return rows.map((r) => ({ ...r.cohort, memberCount: r.memberCount }));
}

/** A single cohort, scoped to the tenant (null if missing OR belongs to another tenant). */
export async function getCohort(tenantId: string, id: string): Promise<Cohort | null> {
  const rows = await db
    .select()
    .from(cohorts)
    .where(and(eq(cohorts.id, id), eq(cohorts.tenantId, tenantId)))
    .limit(1);
  return rows[0] ?? null;
}

/** Create + return an email invite (16-byte hex token, matching course_completions). */
export async function createInvite(tenantId: string, cohortId: string, email: string): Promise<CohortInvite> {
  const token = randomBytes(16).toString("hex");
  const [row] = await db.insert(cohortInvites).values({ tenantId, cohortId, email, token }).returning();
  return row;
}

/** Redeem a not-yet-accepted invite: enrolls the user (idempotent) and marks the
 *  invite accepted. Returns the cohort, or null if the token is invalid/already used. */
export async function acceptInvite(token: string, userId: string): Promise<Cohort | null> {
  const rows = await db
    .select({ invite: cohortInvites, cohort: cohorts })
    .from(cohortInvites)
    .innerJoin(cohorts, eq(cohorts.id, cohortInvites.cohortId))
    .where(and(eq(cohortInvites.token, token), isNull(cohortInvites.acceptedAt)))
    .limit(1);
  const row = rows[0];
  if (!row) return null;

  await db
    .insert(cohortMembers)
    .values({ tenantId: row.invite.tenantId, cohortId: row.invite.cohortId, userId })
    .onConflictDoNothing({ target: [cohortMembers.cohortId, cohortMembers.userId] });

  await db
    .update(cohortInvites)
    .set({ acceptedAt: new Date(), acceptedUserId: userId })
    .where(eq(cohortInvites.id, row.invite.id));

  return row.cohort;
}

export interface CohortMemberWithName {
  userId: string;
  displayName: string;
  joinedAt: Date;
}

/** Members of a cohort with a display name (falls back to "Learner"). Tenant-scoped. */
export async function listMembers(tenantId: string, cohortId: string): Promise<CohortMemberWithName[]> {
  const rows = await db
    .select({
      userId: cohortMembers.userId,
      joinedAt: cohortMembers.joinedAt,
      displayName: userProfiles.displayName,
      username: userProfiles.username,
    })
    .from(cohortMembers)
    .leftJoin(userProfiles, eq(userProfiles.userId, cohortMembers.userId))
    .where(and(eq(cohortMembers.tenantId, tenantId), eq(cohortMembers.cohortId, cohortId)))
    .orderBy(cohortMembers.joinedAt);
  return rows.map((r) => ({
    userId: r.userId,
    joinedAt: r.joinedAt,
    displayName: r.displayName ?? r.username ?? "Learner",
  }));
}

/** Cohort ids this user is a member of, in this tenant. Used to piggyback live-presence
 *  heartbeats onto attendance records (src/app/api/live/presence/route.ts). */
export async function listCohortIdsForMember(tenantId: string, userId: string): Promise<string[]> {
  const rows = await db
    .select({ cohortId: cohortMembers.cohortId })
    .from(cohortMembers)
    .where(and(eq(cohortMembers.tenantId, tenantId), eq(cohortMembers.userId, userId)));
  return rows.map((r) => r.cohortId);
}

export async function removeMember(tenantId: string, cohortId: string, userId: string): Promise<void> {
  await db
    .delete(cohortMembers)
    .where(
      and(
        eq(cohortMembers.tenantId, tenantId),
        eq(cohortMembers.cohortId, cohortId),
        eq(cohortMembers.userId, userId),
      ),
    );
}

/** Invites into a cohort that have not been accepted yet, oldest first. Tenant-scoped, so a
 *  roster never lists another brand's outstanding invites. */
export async function listPendingInvites(tenantId: string, cohortId: string): Promise<CohortInvite[]> {
  return db
    .select()
    .from(cohortInvites)
    .where(
      and(
        eq(cohortInvites.tenantId, tenantId),
        eq(cohortInvites.cohortId, cohortId),
        isNull(cohortInvites.acceptedAt),
      ),
    )
    .orderBy(cohortInvites.invitedAt);
}

/** Refresh a pending invite for re-sending: bumps `invitedAt` and KEEPS the token stable, so the
 *  link already sitting in the student's inbox keeps working — "resend" re-delivers, it never
 *  invalidates. Returns null when the invite is missing, already accepted, or belongs to another
 *  tenant/cohort (the caller 404s; never a redirect, which would leak existence). */
export async function refreshInvite(
  tenantId: string,
  cohortId: string,
  inviteId: string,
): Promise<CohortInvite | null> {
  const [row] = await db
    .update(cohortInvites)
    .set({ invitedAt: new Date() })
    .where(
      and(
        eq(cohortInvites.id, inviteId),
        eq(cohortInvites.tenantId, tenantId),
        eq(cohortInvites.cohortId, cohortId),
        isNull(cohortInvites.acceptedAt),
      ),
    )
    .returning();
  return row ?? null;
}
