import { afterAll, beforeAll, describe, expect, it } from "vitest";

// `pnpm test-users:prod` (scripts/lib/test-users.ts) against a real database: roles land on the named
// school only, a second run changes nothing, the platform owner is refused, and an address with no
// account gets its role the moment the account is created (claimPendingRoleGrants, run by the auth
// hook). Two throwaway schools stand in for ElementaryMBA and "every other school". Skipped offline
// like the other .db suites; needs migration 0080.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("test users get a role on one school only", () => {
  const stamp = Date.now();
  const schoolSlug = `iso-tu-school-${stamp}`;
  const otherSlug = `iso-tu-other-${stamp}`;
  let schoolId = "";
  let otherId = "";
  const teacherId = `iso-tu-teacher-${stamp}`;
  const ownerId = `iso-tu-owner-${stamp}`;
  const teacherEmail = `iso-tu-teacher-${stamp}@isolation.test`;
  const adminEmail = `iso-tu-admin-${stamp}@isolation.test`; // no account yet: becomes a pending grant
  const ownerEmail = `iso-tu-owner-${stamp}@isolation.test`;
  const newUserIds: string[] = [];

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, tenantMemberships, userProfiles, users } = await import("@/db/schema");
    [{ id: schoolId }] = await db.insert(tenants).values({ slug: schoolSlug, name: "Iso TU School" }).returning({ id: tenants.id });
    [{ id: otherId }] = await db.insert(tenants).values({ slug: otherSlug, name: "Iso TU Other" }).returning({ id: tenants.id });
    await db.insert(users).values([
      { id: teacherId, email: teacherEmail, name: "Iso Teacher" },
      { id: ownerId, email: ownerEmail, name: "Iso Owner" },
    ]);
    await db.insert(userProfiles).values({ userId: ownerId, isPlatformOwner: true });
    // The teacher is a learner on the other school; that membership must survive untouched.
    await db.insert(tenantMemberships).values({ tenantId: otherId, userId: teacherId, role: "learner" });
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, users } = await import("@/db/schema");
    const { inArray } = await import("drizzle-orm");
    await db.delete(tenants).where(inArray(tenants.id, [schoolId, otherId].filter(Boolean)));
    await db.delete(users).where(inArray(users.id, [teacherId, ownerId, ...newUserIds]));
  });

  async function rolesOf(userId: string) {
    const { db } = await import("@/db/client");
    const { tenantMemberships } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    const rows = await db.select().from(tenantMemberships).where(eq(tenantMemberships.userId, userId));
    return Object.fromEntries(rows.map((r) => [r.tenantId, r.role]));
  }

  it("grants the teacher now and holds the admin's role until first sign-in, on the named school only", async () => {
    const { db } = await import("@/db/client");
    const { grantTestUsers, parseTestUsersArgs } = await import("../../scripts/lib/test-users");
    const input = parseTestUsersArgs(["--instructor", teacherEmail, "--admin", adminEmail, "--school", schoolSlug], {});

    const first = await grantTestUsers(db, input);
    expect(first.tenantId).toBe(schoolId);
    expect(await rolesOf(teacherId)).toEqual({ [schoolId]: "instructor", [otherId]: "learner" });
    expect(first.lines.join("\n")).toMatch(/no account yet; the role lands on first sign-in/);

    // Idempotent: nothing new on a second run.
    const second = await grantTestUsers(db, input);
    expect(second.lines.filter((l) => l.startsWith("+") || l.startsWith("~"))).toEqual([]);
    expect(await rolesOf(teacherId)).toEqual({ [schoolId]: "instructor", [otherId]: "learner" });
  });

  it("--check reads and writes nothing", async () => {
    const { db } = await import("@/db/client");
    const { grantTestUsers, parseTestUsersArgs } = await import("../../scripts/lib/test-users");
    const extra = `iso-tu-check-${stamp}@isolation.test`;
    const report = await grantTestUsers(db, parseTestUsersArgs(["--learner", extra, "--school", schoolSlug, "--check"], {}));
    expect(report.lines.join("\n")).toMatch(/no account and no grant yet/);
    const again = await grantTestUsers(db, parseTestUsersArgs(["--learner", extra, "--school", schoolSlug, "--check"], {}));
    expect(again.lines.join("\n")).toMatch(/no account and no grant yet/);
  });

  it("the admin's first sign-in creates the account and the hook's claim gives it the role there only", async () => {
    const { db } = await import("@/db/client");
    const { users } = await import("@/db/schema");
    const { claimPendingRoleGrants } = await import("@/db/queries/pending-role-grants");
    const adminId = `iso-tu-admin-${stamp}`;
    newUserIds.push(adminId);
    await db.insert(users).values({ id: adminId, email: adminEmail, name: "Iso Admin" });
    expect(await claimPendingRoleGrants(adminId, adminEmail.toUpperCase())).toBe(1);
    expect(await rolesOf(adminId)).toEqual({ [schoolId]: "brand_admin" });
    // Claimed once: a second claim finds nothing.
    expect(await claimPendingRoleGrants(adminId, adminEmail)).toBe(0);
  });

  it("refuses the platform owner, and a school that does not exist, writing nothing", async () => {
    const { db } = await import("@/db/client");
    const { grantTestUsers, parseTestUsersArgs } = await import("../../scripts/lib/test-users");
    await expect(grantTestUsers(db, parseTestUsersArgs(["--admin", ownerEmail, "--school", schoolSlug], {}))).rejects.toThrow(/platform owner/);
    expect(await rolesOf(ownerId)).toEqual({});
    await expect(
      grantTestUsers(db, parseTestUsersArgs(["--admin", `x-${stamp}@isolation.test`, "--school", `iso-tu-missing-${stamp}`], {})),
    ).rejects.toThrow(/No school/);
  });
});
