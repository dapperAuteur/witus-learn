import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Parent/teacher contact isolation (DB-backed, migration 0064). The relationship is the entire
// security surface (src/db/queries/contact.ts), so every direction is pinned: another tenant, an
// unrelated adult in the same tenant, a student in the sender or recipient slot, and the one that
// matters most, staleness: the moment the student leaves the class, the ping and the badge go too.
// Requires the seeded BVC + Acme tenants; skipped offline like the other .db suites.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("parent/teacher contact is tenant- and relationship-scoped", () => {
  const stamp = Date.now();
  let bvcId = "";
  let acmeId = "";
  let cohortId = "";
  const teacher = `iso-c-teacher-${stamp}`;
  const parent = `iso-c-parent-${stamp}`;
  const student = `iso-c-student-${stamp}`;
  const stranger = `iso-c-stranger-${stamp}`;

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, users, guardians, cohortMembers } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    bvcId = (await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1))[0]!.id;
    acmeId = (await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1))[0]!.id;
    await db.insert(users).values(
      [teacher, parent, student, stranger].map((id) => ({ id, email: `${id}@isolation.test`, name: id })),
    );
    const { createCohort } = await import("@/db/queries/cohorts");
    cohortId = (await createCohort(bvcId, teacher, `iso-c-${stamp}`)).id;
    await db.insert(cohortMembers).values({ tenantId: bvcId, cohortId, userId: student });
    await db.insert(guardians).values({ tenantId: bvcId, guardianUserId: parent, studentUserId: student });
    const { attestAdult } = await import("@/db/queries/teacher-age");
    await attestAdult(teacher);
    await attestAdult(parent);
    await attestAdult(stranger);
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { users } = await import("@/db/schema");
    const { inArray } = await import("drizzle-orm");
    await db.delete(users).where(inArray(users.id, [teacher, parent, student, stranger]));
  });

  it("proves the relationship in both directions, in this tenant only", async () => {
    const { relationshipRole } = await import("@/db/queries/contact");
    const triple = { studentUserId: student, cohortId };
    expect(await relationshipRole(bvcId, { fromUserId: parent, toUserId: teacher, ...triple })).toBe("parent");
    expect(await relationshipRole(bvcId, { fromUserId: teacher, toUserId: parent, ...triple })).toBe("teacher");
    expect(await relationshipRole(acmeId, { fromUserId: parent, toUserId: teacher, ...triple })).toBeNull();
  });

  it("gives an unrelated adult and a student the same null as a stranger", async () => {
    const { relationshipRole, areRelated } = await import("@/db/queries/contact");
    expect(await relationshipRole(bvcId, { fromUserId: stranger, toUserId: teacher, studentUserId: student, cohortId })).toBeNull();
    expect(await relationshipRole(bvcId, { fromUserId: student, toUserId: teacher, studentUserId: student, cohortId })).toBeNull();
    expect(await relationshipRole(bvcId, { fromUserId: teacher, toUserId: student, studentUserId: student, cohortId })).toBeNull();
    expect(await areRelated(bvcId, stranger, teacher)).toBe(false);
    expect(await areRelated(bvcId, parent, teacher)).toBe(true);
    expect(await areRelated(acmeId, parent, teacher)).toBe(false);
  });

  it("lists the child's teacher for the parent on this brand and nothing on another", async () => {
    const { listTeacherLinksForGuardian } = await import("@/db/queries/contact");
    expect((await listTeacherLinksForGuardian(bvcId, parent)).map((l) => l.teacherUserId)).toContain(teacher);
    expect(await listTeacherLinksForGuardian(acmeId, parent)).toHaveLength(0);
  });

  it("refuses a ping that names the student as a party, as a database fact", async () => {
    const { db } = await import("@/db/client");
    const { contactPings } = await import("@/db/schema");
    await expect(
      db.insert(contactPings).values({ tenantId: bvcId, cohortId, studentUserId: parent, fromUserId: parent, toUserId: teacher, fromRole: "parent" }),
    ).rejects.toThrow();
  });

  it("shows a live ping and its badge, then drops both the moment the student leaves the class", async () => {
    const { createPing, listActivePingsForUser, countIncomingPings } = await import("@/db/queries/contact");
    await createPing({ tenantId: bvcId, cohortId, studentUserId: student, fromUserId: parent, toUserId: teacher, fromRole: "parent" });
    expect(await listActivePingsForUser(bvcId, teacher)).toHaveLength(1);
    expect((await countIncomingPings(bvcId, teacher)).asTeacher).toBe(1);
    expect((await countIncomingPings(acmeId, teacher)).asTeacher).toBe(0);

    const { removeMember } = await import("@/db/queries/cohorts");
    await removeMember(bvcId, cohortId, student);
    expect(await listActivePingsForUser(bvcId, teacher)).toHaveLength(0);
    expect((await countIncomingPings(bvcId, teacher)).asTeacher).toBe(0);
  });
});
