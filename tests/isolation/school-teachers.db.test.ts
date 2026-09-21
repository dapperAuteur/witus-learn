import { afterAll, beforeAll, describe, expect, it } from "vitest";

// /admin/teachers writes tenant_memberships. Granting on one school must never touch another.
// Requires the seeded BVC + Acme tenants; skipped offline like the other .db suites.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("the teacher role is granted per school", () => {
  const stamp = Date.now();
  let bvcId = "";
  let acmeId = "";
  const person = `iso-st-${stamp}`;

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, users } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    bvcId = (await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1))[0]!.id;
    acmeId = (await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1))[0]!.id;
    await db.insert(users).values({ id: person, email: `${person}@isolation.test`, name: "Iso Teacher" });
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { users } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    await db.delete(users).where(eq(users.id, person));
  });

  it("grants on BVC only, lists them on BVC only, and removes back to learner", async () => {
    const { grantTeacherRole, getSchoolRole, listSchoolTeachers, removeTeacherRole } = await import("@/db/queries/school-teachers");
    await grantTeacherRole(bvcId, person);
    expect(await getSchoolRole(bvcId, person)).toBe("instructor");
    expect(await getSchoolRole(acmeId, person)).toBeNull();
    expect((await listSchoolTeachers(bvcId)).map((r) => r.userId)).toContain(person);
    expect((await listSchoolTeachers(acmeId)).map((r) => r.userId)).not.toContain(person);
    expect(await removeTeacherRole(bvcId, person)).toBe(true);
    expect(await getSchoolRole(bvcId, person)).toBe("learner");
  });
});
