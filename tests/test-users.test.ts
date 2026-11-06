import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  DEFAULT_SCHOOL_SLUG,
  decideGrant,
  parseTestUsersArgs,
  personRefusal,
} from "../scripts/lib/test-users";

// `pnpm test-users:prod` (scripts/test-users.ts): roles for the owner's test addresses on ONE school.
// The pure half, offline. The database half (idempotent, never another tenant, the claim on first
// sign-in) is tests/isolation/test-users.db.test.ts.

describe("parseTestUsersArgs", () => {
  it("reads the addresses from the command line, lower-cased, and defaults to ElementaryMBA", () => {
    const input = parseTestUsersArgs(["--instructor", "Teacher@Example.test", "--admin", "admin@example.test"], {});
    expect(DEFAULT_SCHOOL_SLUG).toBe("elementary-mba");
    expect(input.school).toBe("elementary-mba");
    expect(input.check).toBe(false);
    expect(input.people).toEqual([
      { role: "instructor", email: "teacher@example.test" },
      { role: "brand_admin", email: "admin@example.test" },
    ]);
  });

  it("falls back to env, takes an optional learner, a school and --check", () => {
    const input = parseTestUsersArgs(["--learner", "l@example.test", "--school", "acme-academy", "--check"], {
      TEST_INSTRUCTOR_EMAIL: "t@example.test",
      TEST_ADMIN_EMAIL: "a@example.test",
    });
    expect(input.school).toBe("acme-academy");
    expect(input.check).toBe(true);
    expect(input.people.map((p) => p.role)).toEqual(["instructor", "brand_admin", "learner"]);
  });

  it("refuses no address, a malformed one, a shared one, and a bad slug", () => {
    expect(() => parseTestUsersArgs([], {})).toThrow(/at least one address/);
    expect(() => parseTestUsersArgs(["--admin", "not-an-email"], {})).toThrow(/Not an email/);
    expect(() => parseTestUsersArgs(["--instructor", "x@example.test", "--admin", "X@example.test"], {})).toThrow(/own address/);
    expect(() => parseTestUsersArgs(["--admin", "a@example.test", "--school", "Not A Slug!"], {})).toThrow(/school slug/);
  });

  it("does not take a flag as the value of the flag before it", () => {
    expect(() => parseTestUsersArgs(["--instructor", "--admin", "a@example.test"], {})).not.toThrow();
    expect(parseTestUsersArgs(["--instructor", "--admin", "a@example.test"], {}).people).toEqual([
      { role: "brand_admin", email: "a@example.test" },
    ]);
  });
});

describe("personRefusal: never the platform owner", () => {
  it("refuses the PLATFORM_OWNER_EMAIL address, in any case", () => {
    expect(personRefusal({ email: "owner@example.test" }, null, " Owner@Example.test ")).toMatch(/platform owner/);
  });
  it("refuses an account that is a platform owner", () => {
    expect(personRefusal({ email: "x@example.test" }, { isPlatformOwner: true }, undefined)).toMatch(/platform owner/);
  });
  it("allows anyone else", () => {
    expect(personRefusal({ email: "x@example.test" }, { isPlatformOwner: false }, "owner@example.test")).toBeNull();
    expect(personRefusal({ email: "x@example.test" }, null, undefined)).toBeNull();
  });
});

describe("decideGrant", () => {
  it("waits for first sign-in when there is no account", () => {
    expect(decideGrant(null, null, "instructor")).toBe("pending");
  });
  it("grants, changes, or leaves a membership on an existing account", () => {
    expect(decideGrant({ id: "u" }, null, "instructor")).toBe("membership-new");
    expect(decideGrant({ id: "u" }, "learner", "brand_admin")).toBe("membership-change");
    expect(decideGrant({ id: "u" }, "brand_admin", "brand_admin")).toBe("membership-same");
  });
});

describe("no address is written into the repo", () => {
  it("the script, its helpers and the package script carry no email address", () => {
    for (const f of ["scripts/test-users.ts", "scripts/lib/test-users.ts"]) {
      expect(readFileSync(f, "utf8")).not.toMatch(/[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}/);
    }
    const pkg = JSON.parse(readFileSync("package.json", "utf8")) as { scripts: Record<string, string> };
    expect(pkg.scripts["test-users:prod"]).toBe("tsx --env-file=.env.prod scripts/test-users.ts");
  });
});

describe("the auth hook claims a pending grant on account creation", () => {
  it("src/lib/auth.ts calls claimPendingRoleGrants inside user.create, guarded so a sign-up never fails", () => {
    const src = readFileSync("src/lib/auth.ts", "utf8");
    const hook = src.slice(src.indexOf("databaseHooks"));
    expect(hook).toMatch(/try \{\s*await claimPendingRoleGrants\(user\.id, user\.email\);\s*\} catch/);
  });
});
