import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  accountLockReason,
  ACCOUNT_LOCKED_CHILD,
  ACCOUNT_LOCKED_DEMO,
  decideMemberEdit,
  EmailChangeInput,
  maskEmail,
  mayEditMember,
  MEMBER_EDIT_OTHER_SCHOOL,
  MEMBER_EDIT_OWN_EMAIL,
  MEMBER_EDIT_OWNER,
  MEMBER_EDIT_PEER_ADMIN,
  MemberEditInput,
  RESERVED_USERNAMES,
  validateUsername,
  type MemberEditFacts,
} from "@/lib/account-settings";
import { redactSecrets } from "@/lib/email-redact";

/**
 * Account settings as pure rules (BAM, 2026-11-10: "users should be able to manage their accounts").
 * The routes are tested in tests/account-settings-routes.test.ts; these pin the rules both paths
 * (self-service on /account, the admin edit on /admin/users) decide through.
 */

const ROOT = join(import.meta.dirname, "..");

describe("validateUsername", () => {
  it("lower-cases and trims, and accepts letters, numbers and single hyphens", () => {
    expect(validateUsername("  Ms-Rivera2 ")).toEqual({ ok: true, username: "ms-rivera2" });
    expect(validateUsername("bam")).toEqual({ ok: true, username: "bam" });
  });

  it("rejects too short, too long, leading or doubled hyphens, spaces and symbols", () => {
    for (const bad of ["ab", "a".repeat(31), "-lead", "trail-", "two--hyphens", "has space", "dot.name", "under_score", "émile"]) {
      expect(validateUsername(bad).ok, bad).toBe(false);
    }
  });

  it("rejects a reserved name with its own message", () => {
    const r = validateUsername("Teach");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toMatch(/reserved/);
  });

  it("reserves every top-level route, so no course URL /{username}/{slug} can be shadowed by a page", () => {
    const segments = new Set<string>();
    for (const dir of [join(ROOT, "src/app"), join(ROOT, "src/app/(tenant)")]) {
      for (const name of readdirSync(dir)) {
        if (!statSync(join(dir, name)).isDirectory()) continue;
        if (name.startsWith("(") || name.startsWith("[") || name.startsWith("_")) continue;
        if (name.includes(".")) continue; // manifest.webmanifest: no username can hold a dot.
        segments.add(name);
      }
    }
    expect(segments.size).toBeGreaterThan(20);
    const missing = [...segments].filter((s) => !RESERVED_USERNAMES.has(s));
    expect(missing, "add the new top-level route to RESERVED_USERNAMES in src/lib/account-settings.ts").toEqual([]);
  });
});

describe("email input", () => {
  it("normalizes to lower case and rejects a non-address with a plain message", () => {
    expect(EmailChangeInput.parse({ newEmail: "  New.Person@Example.COM " })).toEqual({ newEmail: "new.person@example.com" });
    const bad = EmailChangeInput.safeParse({ newEmail: "not an address" });
    expect(bad.success).toBe(false);
    if (!bad.success) expect(bad.error.issues[0]?.message).toMatch(/full email address/);
  });

  it("the admin edit needs at least one field", () => {
    expect(MemberEditInput.safeParse({}).success).toBe(false);
    expect(MemberEditInput.safeParse({ displayName: "A" }).success).toBe(true);
  });
});

describe("accountLockReason", () => {
  const none = { isManagedChild: false, isAvatarPinLogin: false, isDemoAccount: false };
  it("locks a child's profile, an avatar-PIN login and the demo account; nobody else", () => {
    expect(accountLockReason(none)).toBeNull();
    expect(accountLockReason({ ...none, isManagedChild: true })).toBe(ACCOUNT_LOCKED_CHILD);
    expect(accountLockReason({ ...none, isAvatarPinLogin: true })).toBe(ACCOUNT_LOCKED_CHILD);
    expect(accountLockReason({ ...none, isDemoAccount: true })).toBe(ACCOUNT_LOCKED_DEMO);
  });
});

describe("decideMemberEdit", () => {
  const base = (over: { actor?: Partial<MemberEditFacts["actor"]>; target?: Partial<MemberEditFacts["target"]>; changes?: Partial<MemberEditFacts["changes"]> } = {}): MemberEditFacts => ({
    actor: { userId: "admin-1", isOwner: false, isSchoolAdmin: true, ...over.actor },
    target: {
      userId: "teacher-1",
      role: "instructor",
      isPlatformOwner: false,
      otherSchoolRoles: 0,
      isManagedChild: false,
      isAvatarPinLogin: false,
      isDemoAccount: false,
      ...over.target,
    },
    changes: { email: true, username: true, ...over.changes },
  });

  it("lets a school's admin edit a teacher or learner of that school alone, as brand_admin", () => {
    expect(decideMemberEdit(base())).toEqual({ ok: true, actorRole: "brand_admin" });
    expect(decideMemberEdit(base({ target: { role: "learner" } }))).toEqual({ ok: true, actorRole: "brand_admin" });
  });

  it("refuses someone who is neither the owner nor this school's admin", () => {
    expect(decideMemberEdit(base({ actor: { isSchoolAdmin: false } }))).toMatchObject({ ok: false, status: 403 });
  });

  it("answers not-found for a person with no role on this school", () => {
    expect(decideMemberEdit(base({ target: { role: null } }))).toMatchObject({ ok: false, status: 404 });
  });

  it("keeps a school's admin off the platform owner, another admin, and anyone on another school", () => {
    expect(decideMemberEdit(base({ target: { isPlatformOwner: true } }))).toEqual({ ok: false, status: 403, error: MEMBER_EDIT_OWNER });
    expect(decideMemberEdit(base({ target: { role: "brand_admin" } }))).toEqual({ ok: false, status: 403, error: MEMBER_EDIT_PEER_ADMIN });
    expect(decideMemberEdit(base({ target: { otherSchoolRoles: 1 } }))).toEqual({ ok: false, status: 403, error: MEMBER_EDIT_OTHER_SCHOOL });
  });

  it("lets the owner edit all of those, as platform_owner", () => {
    const owner = { actor: { userId: "owner-1", isOwner: true } };
    for (const target of [{ role: "brand_admin" as const }, { otherSchoolRoles: 3 }, { role: "learner" as const }]) {
      expect(decideMemberEdit(base({ ...owner, target }))).toEqual({ ok: true, actorRole: "platform_owner" });
    }
  });

  it("never changes your own email here (that goes through the verified link), but your name and username yes", () => {
    const self = { actor: { userId: "teacher-1" }, target: { role: "brand_admin" as const } };
    expect(decideMemberEdit(base({ ...self }))).toEqual({ ok: false, status: 400, error: MEMBER_EDIT_OWN_EMAIL });
    expect(decideMemberEdit(base({ ...self, changes: { email: false } }))).toEqual({ ok: true, actorRole: "brand_admin" });
  });

  it("never changes a child's email or username, even for the owner; the display name may change", () => {
    const child = { target: { isManagedChild: true, role: "learner" as const }, actor: { isOwner: true } };
    expect(decideMemberEdit(base(child))).toEqual({ ok: false, status: 400, error: ACCOUNT_LOCKED_CHILD });
    expect(decideMemberEdit(base({ ...child, changes: { email: false, username: false } }))).toMatchObject({ ok: true });
  });

  it("mayEditMember offers the form on the same rows the rule admits", () => {
    const { changes: _c, ...facts } = base();
    expect(mayEditMember(facts)).toBe(true);
    expect(mayEditMember({ ...facts, target: { ...facts.target, role: "brand_admin" } })).toBe(false);
  });
});

describe("maskEmail and the mirror", () => {
  it("keeps the first letter and the domain only", () => {
    expect(maskEmail("new.person@example.com")).toBe("n***@example.com");
    expect(maskEmail("broken")).toBe("***");
  });

  it("the email-change link is stripped from the Inbox mirror: it is a bearer credential", () => {
    const body = "Open this link:\nhttps://school.test/account/email/confirm?token=abcdefghijklmnopqrstuvwxyz0123456789\n";
    const out = redactSecrets(body);
    expect(out.text).not.toContain("abcdefghijklmnopqrstuvwxyz0123456789");
    expect(out.redacted).toBe(true);
  });
});
