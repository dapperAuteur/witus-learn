import "server-only";
import { createHash, randomBytes } from "node:crypto";
import { and, desc, eq, gt, isNull, ne, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  accountChanges,
  accountDeletionRequests,
  emailChangeRequests,
  tenantMemberships,
  tenants,
  userProfiles,
  users,
  verifications,
  type AccountChangeActorRole,
  type AccountChangeField,
  type AccountDeletionRequest,
} from "@/db/schema";
import { env } from "@/lib/env";
import { expireProfiles } from "@/lib/cache-tags";
import { EMAIL_CHANGE_TTL_MINUTES, type AccountLockFacts } from "@/lib/account-settings";

// Account settings: the database half of src/lib/account-settings.ts. Accounts are global (one users
// row for every school), so these reads key on the user; the tenant is recorded only as the school
// whose host a change was made on. Every change to an email, username or display name writes an
// account_changes row in the same transaction as the change itself.

export interface AccountFacts extends AccountLockFacts {
  userId: string;
  email: string;
  emailVerified: boolean;
  name: string | null;
  username: string | null;
  displayName: string | null;
  isPlatformOwner: boolean;
}

/** The account as /account and the admin edit need it. Null when there is no such user. */
export async function getAccountFacts(userId: string): Promise<AccountFacts | null> {
  const [r] = await db
    .select({
      userId: users.id,
      email: users.email,
      emailVerified: users.emailVerified,
      name: users.name,
      username: userProfiles.username,
      displayName: userProfiles.displayName,
      isPlatformOwner: userProfiles.isPlatformOwner,
      managedByUserId: userProfiles.managedByUserId,
      loginMethod: userProfiles.loginMethod,
    })
    .from(users)
    .leftJoin(userProfiles, eq(userProfiles.userId, users.id))
    .where(eq(users.id, userId))
    .limit(1);
  if (!r) return null;
  const demoEmail = env.DEMO_VISITOR_USER_EMAIL?.toLowerCase();
  return {
    userId: r.userId,
    email: r.email,
    emailVerified: r.emailVerified,
    name: r.name,
    username: r.username ?? null,
    displayName: r.displayName ?? null,
    isPlatformOwner: r.isPlatformOwner ?? false,
    isManagedChild: Boolean(r.managedByUserId),
    isAvatarPinLogin: r.loginMethod === "avatar_pin",
    isDemoAccount: Boolean(demoEmail && r.email.toLowerCase() === demoEmail),
  };
}

/** Is this address used by an account other than `exceptUserId`? Case-insensitive. */
export async function isEmailTaken(email: string, exceptUserId: string): Promise<boolean> {
  const rows = await db
    .select({ id: users.id })
    .from(users)
    .where(and(sql`lower(${users.email}) = ${email.toLowerCase()}`, ne(users.id, exceptUserId)))
    .limit(1);
  return Boolean(rows[0]);
}

/** Is this username used by an account other than `exceptUserId`? (citext: case-insensitive.) */
export async function isUsernameTaken(username: string, exceptUserId: string): Promise<boolean> {
  const rows = await db
    .select({ id: userProfiles.userId })
    .from(userProfiles)
    .where(and(eq(userProfiles.username, username), ne(userProfiles.userId, exceptUserId)))
    .limit(1);
  return Boolean(rows[0]);
}

/** How many OTHER schools this person holds a role on. */
export async function countOtherSchoolRoles(userId: string, tenantId: string): Promise<number> {
  const [row] = await db
    .select({ n: sql<number>`count(*)::int` })
    .from(tenantMemberships)
    .where(and(eq(tenantMemberships.userId, userId), ne(tenantMemberships.tenantId, tenantId)));
  return row?.n ?? 0;
}

/** A Postgres unique violation, through Drizzle's wrapper or not. */
export function isUniqueViolation(err: unknown): boolean {
  const e = err as { code?: string; cause?: { code?: string } } | null;
  return e?.code === "23505" || e?.cause?.code === "23505";
}

interface Actor {
  userId: string | null;
  role: AccountChangeActorRole;
  tenantId: string | null;
}

type Tx = Parameters<Parameters<typeof db.transaction>[0]>[0];

async function logChange(tx: Tx, userId: string, actor: Actor, field: AccountChangeField, fromValue: string | null, toValue: string | null) {
  await tx.insert(accountChanges).values({
    userId,
    tenantId: actor.tenantId,
    actorUserId: actor.userId,
    actorRole: actor.role,
    field,
    fromValue,
    toValue,
  });
}

/** Remove pending magic-link sign-ins addressed to `email`, so an old link cannot recreate an account at it. */
async function dropMagicLinksFor(tx: Tx, email: string) {
  const needle = `"email":${JSON.stringify(email)}`;
  await tx.delete(verifications).where(sql`strpos(${verifications.value}, ${needle}) > 0`);
}

export type ProfileChangeResult = { ok: true; changed: AccountChangeField[] } | { ok: false; reason: "username-taken" | "not-found" };

/**
 * Set a display name and/or username, logging each field that actually changed. `undefined` leaves a
 * field alone; an empty display name clears it. The username's uniqueness is enforced by the column;
 * a race that loses it answers username-taken rather than throwing.
 */
export async function applyProfileChanges(input: {
  userId: string;
  displayName?: string | null;
  username?: string;
  actor: Actor;
}): Promise<ProfileChangeResult> {
  try {
    const changed = await db.transaction(async (tx) => {
      const [before] = await tx
        .select({ username: userProfiles.username, displayName: userProfiles.displayName })
        .from(userProfiles)
        .where(eq(userProfiles.userId, input.userId))
        .limit(1);
      const [exists] = await tx.select({ id: users.id }).from(users).where(eq(users.id, input.userId)).limit(1);
      if (!exists) return null;
      const patch: { displayName?: string | null; username?: string } = {};
      const fields: AccountChangeField[] = [];
      if (input.displayName !== undefined && (input.displayName || null) !== (before?.displayName ?? null)) {
        patch.displayName = input.displayName || null;
        fields.push("display_name");
      }
      if (input.username !== undefined && input.username !== (before?.username ?? null)) {
        patch.username = input.username;
        fields.push("username");
      }
      if (fields.length === 0) return [];
      await tx
        .insert(userProfiles)
        .values({ userId: input.userId, ...patch })
        .onConflictDoUpdate({ target: userProfiles.userId, set: { ...patch, updatedAt: new Date() } });
      if (patch.displayName !== undefined) await logChange(tx, input.userId, input.actor, "display_name", before?.displayName ?? null, patch.displayName);
      if (patch.username !== undefined) await logChange(tx, input.userId, input.actor, "username", before?.username ?? null, patch.username);
      return fields;
    });
    if (changed === null) return { ok: false, reason: "not-found" };
    // A username is half of every course URL and the instructor page's address.
    if (changed.includes("username") || changed.includes("display_name")) expireProfiles();
    return { ok: true, changed };
  } catch (err) {
    if (isUniqueViolation(err)) return { ok: false, reason: "username-taken" };
    throw err;
  }
}

export function hashEmailChangeToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

/** Requests this account made in the last hour (used, cancelled or waiting), for the durable rate limit. */
export async function countRecentEmailChangeRequests(userId: string, now = new Date()): Promise<number> {
  const since = new Date(now.getTime() - 60 * 60 * 1000);
  const [row] = await db
    .select({ n: sql<number>`count(*)::int` })
    .from(emailChangeRequests)
    .where(and(eq(emailChangeRequests.userId, userId), gt(emailChangeRequests.createdAt, since)));
  return row?.n ?? 0;
}

/**
 * Start an email change: replace any waiting request with a new one and return the raw token for the
 * link. Only its SHA-256 is stored, so the database never holds a working link.
 */
export async function createEmailChangeRequest(input: { userId: string; tenantId: string | null; newEmail: string; now?: Date }): Promise<{ token: string; expiresAt: Date }> {
  const now = input.now ?? new Date();
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(now.getTime() + EMAIL_CHANGE_TTL_MINUTES * 60 * 1000);
  await db.transaction(async (tx) => {
    await tx
      .update(emailChangeRequests)
      .set({ cancelledAt: now })
      .where(and(eq(emailChangeRequests.userId, input.userId), isNull(emailChangeRequests.usedAt), isNull(emailChangeRequests.cancelledAt)));
    await tx.insert(emailChangeRequests).values({
      userId: input.userId,
      tenantId: input.tenantId,
      newEmail: input.newEmail,
      tokenHash: hashEmailChangeToken(token),
      expiresAt,
      createdAt: now,
    });
  });
  return { token, expiresAt };
}

/** The waiting email change, if any (not used, not cancelled, not expired). */
export async function getPendingEmailChange(userId: string, now = new Date()): Promise<{ newEmail: string; expiresAt: Date } | null> {
  const [row] = await db
    .select({ newEmail: emailChangeRequests.newEmail, expiresAt: emailChangeRequests.expiresAt })
    .from(emailChangeRequests)
    .where(
      and(
        eq(emailChangeRequests.userId, userId),
        isNull(emailChangeRequests.usedAt),
        isNull(emailChangeRequests.cancelledAt),
        gt(emailChangeRequests.expiresAt, now),
      ),
    )
    .orderBy(desc(emailChangeRequests.createdAt))
    .limit(1);
  return row ?? null;
}

export async function cancelEmailChange(userId: string): Promise<void> {
  await db
    .update(emailChangeRequests)
    .set({ cancelledAt: new Date() })
    .where(and(eq(emailChangeRequests.userId, userId), isNull(emailChangeRequests.usedAt), isNull(emailChangeRequests.cancelledAt)));
}

export type EmailConfirmResult =
  | { ok: true; userId: string; oldEmail: string; newEmail: string }
  | { ok: false; reason: "invalid" | "expired" | "taken" };

/**
 * Use an email-change link: in one transaction, check the token (unused, not cancelled, not expired),
 * check the new address is still free, move the account to it (verified, since the click proves the
 * inbox), mark the request used, log the change and drop magic links still addressed to the old one.
 */
export async function confirmEmailChange(token: string, tenantId: string | null, now = new Date()): Promise<EmailConfirmResult> {
  const hash = hashEmailChangeToken(token);
  try {
    return await db.transaction(async (tx) => {
      const [req] = await tx.select().from(emailChangeRequests).where(eq(emailChangeRequests.tokenHash, hash)).limit(1);
      if (!req || req.usedAt || req.cancelledAt) return { ok: false, reason: "invalid" } as const;
      if (req.expiresAt.getTime() <= now.getTime()) return { ok: false, reason: "expired" } as const;
      const [user] = await tx.select({ email: users.email }).from(users).where(eq(users.id, req.userId)).limit(1);
      if (!user) return { ok: false, reason: "invalid" } as const;
      const [other] = await tx
        .select({ id: users.id })
        .from(users)
        .where(and(sql`lower(${users.email}) = ${req.newEmail.toLowerCase()}`, ne(users.id, req.userId)))
        .limit(1);
      if (other) return { ok: false, reason: "taken" } as const;
      // Claim the request first, guarded, so two clicks at once cannot both apply it.
      const [claimed] = await tx
        .update(emailChangeRequests)
        .set({ usedAt: now })
        .where(and(eq(emailChangeRequests.id, req.id), isNull(emailChangeRequests.usedAt), isNull(emailChangeRequests.cancelledAt)))
        .returning({ id: emailChangeRequests.id });
      if (!claimed) return { ok: false, reason: "invalid" } as const;
      await tx.update(users).set({ email: req.newEmail, emailVerified: true, updatedAt: now }).where(eq(users.id, req.userId));
      await logChange(tx, req.userId, { userId: req.userId, role: "self", tenantId: tenantId ?? req.tenantId }, "email", user.email, req.newEmail);
      await dropMagicLinksFor(tx, user.email);
      return { ok: true, userId: req.userId, oldEmail: user.email, newEmail: req.newEmail } as const;
    });
  } catch (err) {
    if (isUniqueViolation(err)) return { ok: false, reason: "taken" };
    throw err;
  }
}

/**
 * An admin's email change: takes effect at once (no link), unverified until the person next signs in
 * with a magic link, logged with the admin as the actor. Any waiting self-service change is cancelled.
 */
export async function adminSetEmail(input: {
  userId: string;
  newEmail: string;
  actor: Actor;
}): Promise<{ ok: true; oldEmail: string; changed: boolean } | { ok: false; reason: "taken" | "not-found" }> {
  try {
    return await db.transaction(async (tx) => {
      const [user] = await tx.select({ email: users.email }).from(users).where(eq(users.id, input.userId)).limit(1);
      if (!user) return { ok: false, reason: "not-found" } as const;
      if (user.email === input.newEmail) return { ok: true, oldEmail: user.email, changed: false } as const;
      const [other] = await tx
        .select({ id: users.id })
        .from(users)
        .where(and(sql`lower(${users.email}) = ${input.newEmail.toLowerCase()}`, ne(users.id, input.userId)))
        .limit(1);
      if (other) return { ok: false, reason: "taken" } as const;
      const now = new Date();
      await tx.update(users).set({ email: input.newEmail, emailVerified: false, updatedAt: now }).where(eq(users.id, input.userId));
      await tx
        .update(emailChangeRequests)
        .set({ cancelledAt: now })
        .where(and(eq(emailChangeRequests.userId, input.userId), isNull(emailChangeRequests.usedAt), isNull(emailChangeRequests.cancelledAt)));
      await logChange(tx, input.userId, input.actor, "email", user.email, input.newEmail);
      await dropMagicLinksFor(tx, user.email);
      return { ok: true, oldEmail: user.email, changed: true } as const;
    });
  } catch (err) {
    if (isUniqueViolation(err)) return { ok: false, reason: "taken" };
    throw err;
  }
}

// ── "Ask to delete my account" ─────────────────────────────────────────────────────────────────────

export async function getOpenDeletionRequest(userId: string): Promise<AccountDeletionRequest | null> {
  const [row] = await db
    .select()
    .from(accountDeletionRequests)
    .where(and(eq(accountDeletionRequests.userId, userId), eq(accountDeletionRequests.status, "requested")))
    .limit(1);
  return row ?? null;
}

/** File the request. A second ask while one is open returns the open one (the partial unique index). */
export async function createDeletionRequest(userId: string, tenantId: string | null): Promise<{ request: AccountDeletionRequest; created: boolean }> {
  const [row] = await db.insert(accountDeletionRequests).values({ userId, tenantId }).onConflictDoNothing().returning();
  if (row) return { request: row, created: true };
  const open = await getOpenDeletionRequest(userId);
  if (!open) throw new Error("deletion request neither created nor found");
  return { request: open, created: false };
}

export async function withdrawDeletionRequest(userId: string): Promise<boolean> {
  const rows = await db
    .update(accountDeletionRequests)
    .set({ status: "withdrawn", resolvedAt: new Date(), resolvedByUserId: userId })
    .where(and(eq(accountDeletionRequests.userId, userId), eq(accountDeletionRequests.status, "requested")))
    .returning({ id: accountDeletionRequests.id });
  return rows.length > 0;
}

export interface OpenDeletionRequestRow {
  id: string;
  userId: string;
  displayName: string | null;
  name: string | null;
  username: string | null;
  email: string;
  /** The school whose host it was asked on. */
  schoolName: string | null;
  createdAt: Date;
}

/** Every open request on the platform, oldest first. The platform owner's view only: accounts are global. */
export async function listOpenDeletionRequests(): Promise<OpenDeletionRequestRow[]> {
  return db
    .select({
      id: accountDeletionRequests.id,
      userId: accountDeletionRequests.userId,
      displayName: userProfiles.displayName,
      name: users.name,
      username: userProfiles.username,
      email: users.email,
      schoolName: tenants.name,
      createdAt: accountDeletionRequests.createdAt,
    })
    .from(accountDeletionRequests)
    .innerJoin(users, eq(users.id, accountDeletionRequests.userId))
    .leftJoin(userProfiles, eq(userProfiles.userId, accountDeletionRequests.userId))
    .leftJoin(tenants, eq(tenants.id, accountDeletionRequests.tenantId))
    .where(eq(accountDeletionRequests.status, "requested"))
    .orderBy(accountDeletionRequests.createdAt);
}

/** The owner marks a request handled (the deletion itself is done by hand). False when it was not open. */
export async function resolveDeletionRequest(id: string, ownerUserId: string): Promise<boolean> {
  const rows = await db
    .update(accountDeletionRequests)
    .set({ status: "handled", resolvedAt: new Date(), resolvedByUserId: ownerUserId })
    .where(and(eq(accountDeletionRequests.id, id), eq(accountDeletionRequests.status, "requested")))
    .returning({ id: accountDeletionRequests.id });
  return rows.length > 0;
}
