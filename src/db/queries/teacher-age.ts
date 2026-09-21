import "server-only";
import { and, desc, eq, isNull, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { guardians, platformSettings, teacherAgeExceptions, userProfiles, users } from "@/db/schema";
import {
  adultStatus,
  mayAttestAdult,
  passesTeacherAgeRule,
  type AdultFacts,
  type AdultStatus,
} from "@/lib/teacher-age";

// Data access for the "teachers must be adults" rule. The RULE itself is pure and lives in
// src/lib/teacher-age.ts; this file only gathers facts and records decisions.
//
// Two scopes on purpose. The owner's switch and the exceptions are GLOBAL (the platform owner's
// policy, not a school's). The adult facts are about the PERSON, so they are global too:
// `user_profiles` has no tenant, and a guardians row naming someone as a student on any school is
// a fact about that person. Nothing here returns another tenant's data to a caller, only a status.

const RULE_KEY = "teachers_must_be_adults";

/** The facts the adult test needs, for one user. A missing profile reads as "no facts": unattested
 *  and no minor signals, which is the conservative answer (it cannot teach while the rule is on). */
export async function getAdultFacts(userId: string): Promise<AdultFacts> {
  const [profile] = await db
    .select({
      attestedAt: userProfiles.adultAttestedAt,
      managedBy: userProfiles.managedByUserId,
      loginMethod: userProfiles.loginMethod,
    })
    .from(userProfiles)
    .where(eq(userProfiles.userId, userId))
    .limit(1);
  const [student] = await db
    .select({ id: guardians.id })
    .from(guardians)
    .where(eq(guardians.studentUserId, userId))
    .limit(1);
  return {
    attestedAt: profile?.attestedAt ?? null,
    isManagedChild: Boolean(profile?.managedBy),
    isAvatarPinLogin: profile?.loginMethod === "avatar_pin",
    isLinkedStudent: Boolean(student),
  };
}

export async function getAdultStatus(userId: string): Promise<AdultStatus> {
  return adultStatus(await getAdultFacts(userId));
}

/**
 * Record "I am 18 or older" for the signed-in user. Refused (false) for an account the platform
 * already knows is a child's, so an attestation can never paper over a structural signal. Keeps the
 * FIRST attestation time: re-attesting is a no-op, not a new timestamp.
 */
export async function attestAdult(userId: string): Promise<boolean> {
  const facts = await getAdultFacts(userId);
  if (!mayAttestAdult(facts)) return false;
  if (facts.attestedAt) return true;
  await db
    .insert(userProfiles)
    .values({ userId, adultAttestedAt: new Date() })
    .onConflictDoUpdate({
      target: userProfiles.userId,
      set: { adultAttestedAt: sql`coalesce(${userProfiles.adultAttestedAt}, now())` },
      // The check constraint already refuses a managed child; this keeps the write from even trying.
      setWhere: isNull(userProfiles.managedByUserId),
    });
  return true;
}

// ── The owner's switch ────────────────────────────────────────────────────────

/** Is the rule on? ON unless the owner has explicitly turned it off. A platform_settings row with a
 *  NULL tenant is a platform-wide setting; the (tenant_id, key) unique constraint does not cover
 *  NULLs, so reads take the newest row and writes replace every row for the key. */
export async function teachersMustBeAdults(): Promise<boolean> {
  const [row] = await db
    .select({ value: platformSettings.value })
    .from(platformSettings)
    .where(and(isNull(platformSettings.tenantId), eq(platformSettings.key, RULE_KEY)))
    .orderBy(desc(platformSettings.updatedAt))
    .limit(1);
  return row?.value !== "off";
}

export async function setTeachersMustBeAdults(on: boolean): Promise<void> {
  await db.transaction(async (tx) => {
    await tx
      .delete(platformSettings)
      .where(and(isNull(platformSettings.tenantId), eq(platformSettings.key, RULE_KEY)));
    await tx.insert(platformSettings).values({ tenantId: null, key: RULE_KEY, value: on ? "on" : "off" });
  });
}

// ── Exceptions ────────────────────────────────────────────────────────────────

export async function hasActiveTeacherAgeException(userId: string): Promise<boolean> {
  const [row] = await db
    .select({ id: teacherAgeExceptions.id })
    .from(teacherAgeExceptions)
    .where(and(eq(teacherAgeExceptions.userId, userId), isNull(teacherAgeExceptions.revokedAt)))
    .limit(1);
  return Boolean(row);
}

export interface TeachingEligibility {
  status: AdultStatus;
  ruleOn: boolean;
  hasException: boolean;
  passesAgeRule: boolean;
}

/** Everything a teaching gate needs, in one call. */
export async function getTeachingEligibility(userId: string): Promise<TeachingEligibility> {
  const [status, ruleOn, hasException] = await Promise.all([
    getAdultStatus(userId),
    teachersMustBeAdults(),
    hasActiveTeacherAgeException(userId),
  ]);
  return { status, ruleOn, hasException, passesAgeRule: passesTeacherAgeRule({ status, ruleOn, hasException }) };
}

export async function grantTeacherAgeException(input: {
  userId: string;
  grantedBy: string;
  reason: string;
}): Promise<void> {
  await db
    .insert(teacherAgeExceptions)
    .values(input)
    // One active exception per person (partial unique index). Granting twice is a no-op.
    .onConflictDoNothing();
}

/** Revoke keeps the row (with who and when) so the history survives. False when nothing was active. */
export async function revokeTeacherAgeException(userId: string, revokedBy: string): Promise<boolean> {
  const rows = await db
    .update(teacherAgeExceptions)
    .set({ revokedAt: new Date(), revokedBy })
    .where(and(eq(teacherAgeExceptions.userId, userId), isNull(teacherAgeExceptions.revokedAt)))
    .returning({ id: teacherAgeExceptions.id });
  return rows.length > 0;
}

export interface TeacherAgeExceptionRow {
  id: string;
  userId: string;
  email: string;
  name: string | null;
  reason: string;
  grantedByEmail: string | null;
  createdAt: Date;
  revokedAt: Date | null;
}

/** Every exception ever granted, newest first, active and revoked. Owner-only surface. */
export async function listTeacherAgeExceptions(): Promise<TeacherAgeExceptionRow[]> {
  const grantor = sql<string | null>`(select email from users g where g.id = ${teacherAgeExceptions.grantedBy})`;
  const rows = await db
    .select({
      id: teacherAgeExceptions.id,
      userId: teacherAgeExceptions.userId,
      email: users.email,
      name: users.name,
      reason: teacherAgeExceptions.reason,
      grantedByEmail: grantor,
      createdAt: teacherAgeExceptions.createdAt,
      revokedAt: teacherAgeExceptions.revokedAt,
    })
    .from(teacherAgeExceptions)
    .innerJoin(users, eq(users.id, teacherAgeExceptions.userId))
    .orderBy(desc(teacherAgeExceptions.createdAt))
    .limit(200);
  return rows;
}

/** Exact (case-insensitive) email lookup. Callers must be the platform owner or a cohort manager,
 *  and must not echo anything about the account beyond what their screen needs. */
export async function findUserByEmail(email: string): Promise<{ id: string; email: string; name: string | null } | null> {
  const [row] = await db
    .select({ id: users.id, email: users.email, name: users.name })
    .from(users)
    .where(sql`lower(${users.email}) = lower(${email.trim()})`)
    .limit(1);
  return row ?? null;
}
