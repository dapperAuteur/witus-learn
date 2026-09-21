import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Cohort teachers + the adult attestation (DB-backed, migration 0063). Requires the seeded BVC + Acme
// tenants; skipped offline like the other .db suites.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("cohort teachers are tenant-scoped and never empty", () => {
  const stamp = Date.now();
  let bvcId = "";
  let acmeId = "";
  let cohortId = "";
  const ownerId = `iso-ct-owner-${stamp}`;
  const coTeacherId = `iso-ct-co-${stamp}`;
  const parentId = `iso-ct-parent-${stamp}`;
  let managedChildId = "";

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, users } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    bvcId = (await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1))[0]!.id;
    acmeId = (await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1))[0]!.id;
    await db.insert(users).values([
      { id: ownerId, email: `${ownerId}@isolation.test`, name: "Iso Owner" },
      { id: coTeacherId, email: `${coTeacherId}@isolation.test`, name: "Iso Co" },
      { id: parentId, email: `${parentId}@isolation.test`, name: "Iso Parent" },
    ]);
    const { createCohort } = await import("@/db/queries/cohorts");
    cohortId = (await createCohort(bvcId, ownerId, `iso-ct-${stamp}`)).id;
    const { createManagedChild } = await import("@/db/queries/family");
    managedChildId = await createManagedChild(bvcId, parentId, "Iso Kid");
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { users } = await import("@/db/schema");
    const { inArray } = await import("drizzle-orm");
    await db.delete(users).where(inArray(users.id, [ownerId, coTeacherId, parentId, managedChildId]));
  });

  it("makes the creator the first teacher, in this tenant only", async () => {
    const { isCohortTeacher } = await import("@/db/queries/cohorts");
    expect(await isCohortTeacher(bvcId, cohortId, ownerId)).toBe(true);
    expect(await isCohortTeacher(acmeId, cohortId, ownerId)).toBe(false);
  });

  it("lists an assigned teacher's class under 'my classes', and not on another brand", async () => {
    const { addCohortTeacher, listCohorts } = await import("@/db/queries/cohorts");
    await addCohortTeacher(bvcId, cohortId, coTeacherId, ownerId);
    expect((await listCohorts(bvcId, coTeacherId)).map((c) => c.id)).toContain(cohortId);
    expect((await listCohorts(acmeId, coTeacherId)).map((c) => c.id)).not.toContain(cohortId);
  });

  it("refuses to remove the last teacher", async () => {
    const { removeCohortTeacher } = await import("@/db/queries/cohorts");
    expect(await removeCohortTeacher(bvcId, cohortId, coTeacherId)).toBe(true);
    expect(await removeCohortTeacher(bvcId, cohortId, ownerId)).toBe(false);
  });

  it("never records an adult attestation for a managed child", async () => {
    const { attestAdult, getAdultStatus } = await import("@/db/queries/teacher-age");
    expect(await attestAdult(managedChildId)).toBe(false);
    expect(await getAdultStatus(managedChildId)).toBe("minor_signal");
    expect(await attestAdult(parentId)).toBe(true);
    expect(await getAdultStatus(parentId)).toBe("adult");
  });
});
