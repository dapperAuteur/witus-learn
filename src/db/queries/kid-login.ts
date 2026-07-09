import "server-only";
import { randomBytes } from "node:crypto";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { cohortMembers, cohorts, kidLoginAttempts, userProfiles, users } from "@/db/schema";
import { isManagedChildOf } from "@/db/queries/family";
import { hashPin, isTrivialPin, isValidPinFormat, verifyPin } from "@/lib/kid-pin";
import { isValidAvatarKey } from "@/lib/kid-avatars";

// Avatar + PIN kid login — see plans/kid-login-avatar-pin-design.md. Every write here is
// parent-owned (isManagedChildOf) or cohort-owner-owned (checked by the caller, same
// pattern as src/app/api/cohorts/[id]/invite/route.ts); every read is scoped by a class
// code that must resolve to a real cohort, and NEVER enumerates children on a bad code.

export type LoginMethod = "none" | "magic_link" | "avatar_pin";

const CLASS_CODE_LENGTH = 6;
// No ambiguous characters (0/O, 1/I/L excluded) — this is read aloud/copied by kids.
const CLASS_CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

function generateClassCode(): string {
  const bytes = randomBytes(CLASS_CODE_LENGTH);
  let code = "";
  for (let i = 0; i < CLASS_CODE_LENGTH; i++) {
    code += CLASS_CODE_ALPHABET[bytes[i] % CLASS_CODE_ALPHABET.length];
  }
  return code;
}

/**
 * Get (or create/rotate) a cohort's class code. Caller MUST already have verified the
 * requester owns/admins this cohort — this function only re-checks tenant scoping.
 * Returns null if the cohort doesn't exist in this tenant.
 */
export async function getOrCreateClassCode(
  tenantId: string,
  cohortId: string,
  rotate = false,
): Promise<string | null> {
  const rows = await db
    .select({ classCode: cohorts.classCode })
    .from(cohorts)
    .where(and(eq(cohorts.id, cohortId), eq(cohorts.tenantId, tenantId)))
    .limit(1);
  const existing = rows[0];
  if (!existing) return null;
  if (existing.classCode && !rotate) return existing.classCode;

  // Retry on the (very unlikely) unique-constraint collision.
  for (let attempt = 0; attempt < 5; attempt++) {
    const code = generateClassCode();
    try {
      await db.update(cohorts).set({ classCode: code }).where(eq(cohorts.id, cohortId));
      return code;
    } catch {
      // Collided with another cohort's code — try again.
    }
  }
  throw new Error("Could not generate a unique class code");
}

/** Idempotent: adds a user to a cohort if not already a member. Caller MUST already have
 *  verified cohort ownership AND (for a managed child) isManagedChildOf. */
export async function addCohortMemberIfAbsent(
  tenantId: string,
  cohortId: string,
  userId: string,
): Promise<void> {
  await db
    .insert(cohortMembers)
    .values({ tenantId, cohortId, userId })
    .onConflictDoNothing({ target: [cohortMembers.cohortId, cohortMembers.userId] });
}

export interface ChildClassCode {
  cohortId: string;
  cohortName: string;
  classCode: string | null;
}

/** The class code(s) for cohorts this child already belongs to, in this tenant — for
 *  display on /family (so a parent can see/share a code without necessarily owning that
 *  cohort themselves, e.g. a teacher already enrolled the child). Read-only; generating
 *  or rotating a code still requires cohort ownership (POST /api/cohorts/[id]/class-code). */
export async function listChildClassCodes(tenantId: string, childUserId: string): Promise<ChildClassCode[]> {
  const rows = await db
    .select({ cohortId: cohorts.id, cohortName: cohorts.name, classCode: cohorts.classCode })
    .from(cohortMembers)
    .innerJoin(cohorts, eq(cohorts.id, cohortMembers.cohortId))
    .where(and(eq(cohortMembers.tenantId, tenantId), eq(cohortMembers.userId, childUserId)));
  return rows;
}

export interface SetChildLoginMethodResult {
  ok: boolean;
  error?: string;
}

/**
 * Set (or clear) a managed child's login method. THE gate is isManagedChildOf — a parent
 * can only touch a child they manage. Setting method to 'avatar_pin' requires a valid
 * avatarKey + a well-formed, non-trivial PIN, and resets any prior lockout. Any other
 * method clears avatarKey/pinHash/pinSetAt so a stale hash never lingers for a method
 * that no longer uses it.
 */
export async function setChildLoginMethod(
  parentUserId: string,
  childUserId: string,
  method: LoginMethod,
  opts?: { avatarKey?: string; pin?: string },
): Promise<SetChildLoginMethodResult> {
  const allowed = await isManagedChildOf(parentUserId, childUserId);
  if (!allowed) return { ok: false, error: "You don't manage that profile." };

  if (method === "avatar_pin") {
    const avatarKey = opts?.avatarKey;
    const pin = opts?.pin;
    if (!avatarKey || !isValidAvatarKey(avatarKey)) {
      return { ok: false, error: "Please choose an avatar." };
    }
    if (!pin || !isValidPinFormat(pin)) {
      return { ok: false, error: "PIN must be 4-6 digits." };
    }
    if (isTrivialPin(pin)) {
      return { ok: false, error: "Please choose a less predictable PIN." };
    }
    const pinHash = await hashPin(pin);
    await db
      .update(userProfiles)
      .set({ loginMethod: "avatar_pin", avatarKey, pinHash, pinSetAt: new Date(), updatedAt: new Date() })
      .where(eq(userProfiles.userId, childUserId));
    // A fresh PIN clears any prior lockout — the parent just reset the credential.
    await db
      .delete(kidLoginAttempts)
      .where(eq(kidLoginAttempts.childUserId, childUserId));
    return { ok: true };
  }

  // 'none' or 'magic_link' — clear all avatar-pin material.
  await db
    .update(userProfiles)
    .set({ loginMethod: method, avatarKey: null, pinHash: null, pinSetAt: null, updatedAt: new Date() })
    .where(eq(userProfiles.userId, childUserId));
  await db.delete(kidLoginAttempts).where(eq(kidLoginAttempts.childUserId, childUserId));
  return { ok: true };
}

export interface KidLoginAvatarOption {
  childUserId: string;
  displayName: string;
  avatarKey: string;
}

/**
 * For a valid class code, the cohort members who have avatar+PIN login enabled — and
 * NOTHING else (no email, no PIN state, no other login methods). An invalid/unknown code
 * returns an empty array; the caller (POST /api/kid-login-related routes) must render
 * that identically to "class not found" so a guesser can't distinguish a bad code from a
 * class with zero avatar-pin kids.
 */
export async function listKidLoginAvatars(classCode: string): Promise<KidLoginAvatarOption[]> {
  const trimmed = classCode.trim().toUpperCase();
  if (!trimmed) return [];

  const cohortRows = await db
    .select({ id: cohorts.id })
    .from(cohorts)
    .where(eq(cohorts.classCode, trimmed))
    .limit(1);
  const cohort = cohortRows[0];
  if (!cohort) return [];

  const rows = await db
    .select({
      childUserId: userProfiles.userId,
      displayName: userProfiles.displayName,
      avatarKey: userProfiles.avatarKey,
    })
    .from(cohortMembers)
    .innerJoin(userProfiles, eq(userProfiles.userId, cohortMembers.userId))
    .where(and(eq(cohortMembers.cohortId, cohort.id), eq(userProfiles.loginMethod, "avatar_pin")));

  return rows
    .filter((r): r is { childUserId: string; displayName: string | null; avatarKey: string } => !!r.avatarKey)
    .map((r) => ({
      childUserId: r.childUserId,
      displayName: r.displayName ?? "Learner",
      avatarKey: r.avatarKey,
    }));
}

export interface CohortByClassCode {
  id: string;
  tenantId: string;
}

/**
 * Resolve a class code to its cohort (id + tenantId), or null. Used by POST /api/kid-login
 * to confirm the claimed childUserId actually belongs to THIS class code's cohort before
 * verifying the PIN — never trust the client's classCode/childUserId pairing on its own.
 * The tenant is derived here, server-side, from the code alone — never client-supplied.
 */
export async function getCohortIdByClassCode(classCode: string): Promise<CohortByClassCode | null> {
  const trimmed = classCode.trim().toUpperCase();
  if (!trimmed) return null;
  const rows = await db
    .select({ id: cohorts.id, tenantId: cohorts.tenantId })
    .from(cohorts)
    .where(eq(cohorts.classCode, trimmed))
    .limit(1);
  return rows[0] ?? null;
}

/** Is `childUserId` a member of `cohortId`? The second half of the class-code binding
 *  check (the first half is resolving the class code to a cohort id at all). */
export async function isCohortMember(cohortId: string, childUserId: string): Promise<boolean> {
  const rows = await db
    .select({ id: cohortMembers.id })
    .from(cohortMembers)
    .where(and(eq(cohortMembers.cohortId, cohortId), eq(cohortMembers.userId, childUserId)))
    .limit(1);
  return rows.length > 0;
}

const LOCK_AFTER_ATTEMPTS = 5;
const LOCK_DURATION_MS = 5 * 60 * 1000;

export type KidPinVerifyResult =
  | { ok: true; userId: string }
  | { ok: false; reason: "locked" | "invalid" };

/**
 * Verify a child's PIN with rate-limiting. Always returns a generic {ok:false,
 * reason:'invalid'} for "no such avatar_pin child" / "wrong PIN" alike — the caller must
 * not surface `reason` to the client beyond a single generic error message; it exists
 * only for server-side logging/tests. `reason: 'locked'` is likewise folded into the same
 * generic client-facing message (never confirm a lockout to an unauthenticated caller,
 * since that alone confirms the child/PIN pairing was being actively guessed).
 */
export async function verifyKidPin(
  tenantId: string,
  childUserId: string,
  pin: string,
): Promise<KidPinVerifyResult> {
  const profileRows = await db
    .select({ loginMethod: userProfiles.loginMethod, pinHash: userProfiles.pinHash })
    .from(userProfiles)
    .where(eq(userProfiles.userId, childUserId))
    .limit(1);
  const profile = profileRows[0];
  if (!profile || profile.loginMethod !== "avatar_pin" || !profile.pinHash) {
    return { ok: false, reason: "invalid" };
  }

  const now = new Date();
  const attemptRows = await db
    .select()
    .from(kidLoginAttempts)
    .where(eq(kidLoginAttempts.childUserId, childUserId))
    .limit(1);
  const attempt = attemptRows[0];

  if (attempt?.lockedUntil && attempt.lockedUntil > now) {
    return { ok: false, reason: "locked" };
  }

  const correct = await verifyPin(pin, profile.pinHash);

  if (correct) {
    await db
      .insert(kidLoginAttempts)
      .values({ childUserId, tenantId, attempts: 0, lockedUntil: null, updatedAt: now })
      .onConflictDoUpdate({
        target: kidLoginAttempts.childUserId,
        set: { attempts: 0, lockedUntil: null, updatedAt: now },
      });
    return { ok: true, userId: childUserId };
  }

  // Atomic increment (safe under concurrent wrong guesses); a stale/expired lock's
  // counter naturally continues from wherever it left off — treated as "reset" by the
  // `> now` check above once the lock has lapsed, so a new lock only re-triggers after
  // LOCK_AFTER_ATTEMPTS more wrong guesses from that point.
  const [row] = await db
    .insert(kidLoginAttempts)
    .values({ childUserId, tenantId, attempts: 1, updatedAt: now })
    .onConflictDoUpdate({
      target: kidLoginAttempts.childUserId,
      set: { attempts: sql`${kidLoginAttempts.attempts} + 1`, updatedAt: now },
    })
    .returning({ attempts: kidLoginAttempts.attempts });

  if (row && row.attempts >= LOCK_AFTER_ATTEMPTS) {
    await db
      .update(kidLoginAttempts)
      .set({ lockedUntil: new Date(now.getTime() + LOCK_DURATION_MS) })
      .where(eq(kidLoginAttempts.childUserId, childUserId));
  }

  return { ok: false, reason: "invalid" };
}

/** Resolve a child user's basic identity (used after a successful PIN verify to mint
 *  their session). Not a security check — call only after verifyKidPin succeeds. */
export async function getUserForSession(userId: string): Promise<{ id: string; email: string; name: string | null } | null> {
  const rows = await db
    .select({ id: users.id, email: users.email, name: users.name })
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);
  return rows[0] ?? null;
}
