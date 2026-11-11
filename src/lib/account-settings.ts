// Account settings, as pure rules (BAM, 2026-11-10: "users should be able to manage their accounts").
// The person changes their own display name, username and email on /account (an email change waits for
// the link Learn mails to the NEW address); a school's admin or the platform owner edits a member's on
// /admin/users, where an email change takes effect at once. Both paths validate through this file, so
// the two cannot drift. The database half is src/db/queries/account-settings.ts.
//
// Accounts are GLOBAL: one users row serves every school. That is why a school's admin may edit only an
// account that belongs to their school alone (decideMemberEdit): an email set by one school's admin is
// the address every other school would mail a sign-in link to, so handing that power to one school
// over a person who also learns or teaches elsewhere would let that school take the account over.

import { z } from "zod";
import type { TenantRole } from "@/db/schema";

export const ACCOUNT_LIMITS = { displayName: 120, usernameMin: 3, usernameMax: 30, email: 254 } as const;

/** How long the link in an email-change message works. */
export const EMAIL_CHANGE_TTL_MINUTES = 60;
/** At most this many email-change requests per account per hour (durable: counted in the database). */
export const EMAIL_CHANGE_MAX_PER_HOUR = 5;

/**
 * Usernames that would collide with a route. Course URLs are /{username}/{slug} and the public
 * instructor page is /instructors/{username}; a username equal to a top-level route (`teach`, `admin`)
 * would make every course URL under it resolve to that route instead. tests/account-settings.test.ts
 * fails when a new top-level route is added without being listed here.
 */
export const RESERVED_USERNAMES: ReadonlySet<string> = new Set([
  // Top-level pages and route groups under src/app and src/app/(tenant).
  "account", "academic-standards", "admin", "api", "audit", "bundles", "civics", "cohorts", "course", "courses",
  "dashboard", "demo", "downloads", "e", "ebooks", "embed", "episode", "explore", "family", "field-log", "for",
  "globe", "great-migration-map", "help", "instructors", "join", "kids", "languages", "live", "login", "my-courses",
  "offline", "paths", "platform", "privacy", "roadmap", "safety", "sale", "schools", "series", "teach", "terms",
  "verify",
  // Names that read as the platform speaking, or that a route could take later.
  "settings", "profile", "users", "user", "me", "owner", "staff", "support", "security", "system", "root",
  "learn", "witus", "www", "mail", "null", "undefined", "new", "edit",
]);

const USERNAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const USERNAME_HELP = `${ACCOUNT_LIMITS.usernameMin} to ${ACCOUNT_LIMITS.usernameMax} characters: lowercase letters, numbers and single hyphens, starting and ending with a letter or number.`;

/** Normalize and check a username. Returns the value to store, or the reason it cannot be used. */
export function validateUsername(raw: string): { ok: true; username: string } | { ok: false; error: string } {
  const username = raw.trim().toLowerCase();
  if (username.length < ACCOUNT_LIMITS.usernameMin || username.length > ACCOUNT_LIMITS.usernameMax || !USERNAME_RE.test(username)) {
    return { ok: false, error: `That username can't be used. Use ${USERNAME_HELP}` };
  }
  if (RESERVED_USERNAMES.has(username)) {
    return { ok: false, error: "That username is reserved by the site. Pick another." };
  }
  return { ok: true, username };
}

/** Trim and lower-case an address, the form users.email is stored in (Better Auth signs in by it). */
export function normalizeEmail(raw: string): string {
  return raw.trim().toLowerCase();
}

export const EmailField = z
  .string()
  .trim()
  .max(ACCOUNT_LIMITS.email, "That address is too long.")
  .pipe(z.email("Enter a full email address, like name@example.com."))
  .transform(normalizeEmail);

export const DisplayNameField = z.string().trim().max(ACCOUNT_LIMITS.displayName, `Keep the name under ${ACCOUNT_LIMITS.displayName} characters.`);

/** What /account sends to change the name and username. A blank username is not allowed once set. */
export const OwnProfileInput = z.object({
  displayName: DisplayNameField.optional(),
  username: z.string().max(100).optional(),
});

/** What /account sends to start an email change. */
export const EmailChangeInput = z.object({ newEmail: EmailField });

/** What an admin sends from /admin/users. Every field optional; at least one must be present. */
export const MemberEditInput = z
  .object({
    displayName: DisplayNameField.optional(),
    username: z.string().max(100).optional(),
    email: EmailField.optional(),
  })
  .refine((v) => v.displayName !== undefined || v.username !== undefined || v.email !== undefined, "Change at least one field.");

export const ACCOUNT_LOCKED_CHILD = "A child's profile is managed by their parent, so its email and username can't be changed here.";
export const ACCOUNT_LOCKED_DEMO = "The demo account can't be changed.";
export const EMAIL_SAME = "That is already the address on this account.";
export const EMAIL_TAKEN = "That address belongs to another account. Use a different one, or sign in to that account instead.";
export const USERNAME_TAKEN = "That username is taken. Pick another.";
export const EMAIL_RATE_LIMITED = `You asked for ${EMAIL_CHANGE_MAX_PER_HOUR} email changes in the last hour. Wait an hour, then try again.`;

/** Facts about the account being changed, read on the server. */
export interface AccountLockFacts {
  /** user_profiles.managed_by_user_id is set: a login-less child profile with a synthetic address. */
  isManagedChild: boolean;
  /** user_profiles.login_method is avatar_pin: a child who signs in with a picture and a PIN. */
  isAvatarPinLogin: boolean;
  /** The shared "Try the demo" account. */
  isDemoAccount: boolean;
}

/** Why this account's email and username are fixed, or null when they may change. */
export function accountLockReason(f: AccountLockFacts): string | null {
  if (f.isManagedChild || f.isAvatarPinLogin) return ACCOUNT_LOCKED_CHILD;
  if (f.isDemoAccount) return ACCOUNT_LOCKED_DEMO;
  return null;
}

export const MEMBER_EDIT_FORBIDDEN = "Only the platform owner or this school's admin can edit a member's account.";
export const MEMBER_EDIT_OWNER = "Only the platform owner can edit the platform owner's account.";
export const MEMBER_EDIT_PEER_ADMIN = "Only the platform owner can edit another admin's account.";
export const MEMBER_EDIT_OTHER_SCHOOL = "This person also belongs to another school, so only the platform owner can edit their account.";
export const MEMBER_EDIT_OWN_EMAIL = "Change your own email from Account settings, which checks the new address first.";

/** Everything the admin-edit decision needs, resolved on the server (never from the client). */
export interface MemberEditFacts {
  actor: { userId: string; isOwner: boolean; isSchoolAdmin: boolean };
  target: {
    userId: string;
    /** Their role on THIS school, or null when they hold none here. */
    role: TenantRole | null;
    isPlatformOwner: boolean;
    /** How many OTHER schools they hold a role on. */
    otherSchoolRoles: number;
  } & AccountLockFacts;
  changes: { email: boolean; username: boolean };
}

export type MemberEditDecision =
  | { ok: true; actorRole: "platform_owner" | "brand_admin" }
  | { ok: false; status: 400 | 403 | 404; error: string };

/**
 * May this actor edit this member? The owner may edit anyone with a role on the school. A school's
 * admin may edit a learner or a teacher of their school who belongs to no other school, and their own
 * name and username; never the platform owner, never another admin. An email is never changed here
 * for yourself (that goes through the verified flow on /account), and never for a child's profile.
 */
export function decideMemberEdit(f: MemberEditFacts): MemberEditDecision {
  const { actor, target } = f;
  if (!actor.isOwner && !actor.isSchoolAdmin) return { ok: false, status: 403, error: MEMBER_EDIT_FORBIDDEN };
  if (target.role === null) return { ok: false, status: 404, error: "Not found" };
  const self = actor.userId === target.userId;
  if (!actor.isOwner && !self) {
    if (target.isPlatformOwner) return { ok: false, status: 403, error: MEMBER_EDIT_OWNER };
    if (target.role === "brand_admin") return { ok: false, status: 403, error: MEMBER_EDIT_PEER_ADMIN };
    if (target.otherSchoolRoles > 0) return { ok: false, status: 403, error: MEMBER_EDIT_OTHER_SCHOOL };
  }
  if (f.changes.email && self) return { ok: false, status: 400, error: MEMBER_EDIT_OWN_EMAIL };
  const lock = accountLockReason(target);
  if (lock && (f.changes.email || f.changes.username)) return { ok: false, status: 400, error: lock };
  return { ok: true, actorRole: actor.isOwner ? "platform_owner" : "brand_admin" };
}

/** Whether the admin page should offer an edit form on this member's row (the same rule, no changes). */
export function mayEditMember(f: Omit<MemberEditFacts, "changes">): boolean {
  return decideMemberEdit({ ...f, changes: { email: false, username: false } }).ok;
}

/** "n***@example.com": enough for the old address's owner to recognise the new one, not to harvest it. */
export function maskEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!domain) return "***";
  return `${local.slice(0, 1)}***@${domain}`;
}

/** The status shown on /account after the email link, from the ?email= query the confirm route sets. */
export const EMAIL_CONFIRM_MESSAGES = {
  changed: { ok: true, text: "Your email address is changed. Use the new address the next time you sign in." },
  expired: { ok: false, text: `That link expired (links work for ${EMAIL_CHANGE_TTL_MINUTES} minutes). Ask for a new one below.` },
  invalid: { ok: false, text: "That link isn't valid, or it was already used. Ask for a new one below." },
  taken: { ok: false, text: "Another account started using that address meanwhile, so it couldn't be moved to yours. Try a different address." },
} as const;
export type EmailConfirmOutcome = keyof typeof EMAIL_CONFIRM_MESSAGES;
