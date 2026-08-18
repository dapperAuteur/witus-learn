import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Grade-override isolation (DB-backed, plans/66): overrides are tenant-scoped in every read, and
// the append-only contract holds at the schema level (reason required, value tied to kind).
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("grade overrides are tenant-scoped and append-only", () => {
  const stamp = Date.now();
  let bvcId = "";
  let acmeId = "";
  let courseId = "";
  let cohortId = "";
  const studentId = `iso-ovr-student-${stamp}`;
  const teacherId = `iso-ovr-teacher-${stamp}`;

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { cohorts, courses, tenants, users } = await import("@/db/schema");
    const { and, eq } = await import("drizzle-orm");
    const bvc = await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1);
    const acme = await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1);
    bvcId = bvc[0]!.id;
    acmeId = acme[0]!.id;
    const c = await db
      .select()
      .from(courses)
      .where(and(eq(courses.tenantId, bvcId), eq(courses.isPublished, true)))
      .limit(1);
    courseId = c[0]!.id;
    await db.insert(users).values([
      { id: studentId, email: `${studentId}@isolation.test`, name: "Iso Student" },
      { id: teacherId, email: `${teacherId}@isolation.test`, name: "Iso Teacher" },
    ]);
    const [cohort] = await db
      .insert(cohorts)
      .values({ tenantId: bvcId, ownerId: teacherId, name: `iso-ovr-${stamp}` })
      .returning();
    cohortId = cohort.id;
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { cohorts, users } = await import("@/db/schema");
    const { eq, inArray } = await import("drizzle-orm");
    await db.delete(cohorts).where(eq(cohorts.id, cohortId)); // cascades overrides
    await db.delete(users).where(inArray(users.id, [studentId, teacherId]));
  });

  it("creates, reads in-tenant, and never reads cross-tenant", async () => {
    const { createOverride, getStudentOverrideMap, listCohortOverrides, listStudentOverrides } =
      await import("@/db/queries/overrides");
    const o = await createOverride({
      tenantId: bvcId,
      cohortId,
      studentUserId: studentId,
      teacherUserId: teacherId,
      courseId,
      kind: "quiz_score",
      value: 88,
      reason: "isolation test adjustment",
    });
    expect(o.id).toBeTruthy();
    expect((await listStudentOverrides(bvcId, studentId)).map((r) => r.id)).toContain(o.id);
    expect(await listStudentOverrides(acmeId, studentId)).toHaveLength(0);
    expect((await listCohortOverrides(bvcId, cohortId)).map((r) => r.id)).toContain(o.id);
    expect(await listCohortOverrides(acmeId, cohortId)).toHaveLength(0);
    const map = await getStudentOverrideMap(bvcId, studentId);
    expect(Number(map.get(`${courseId}||quiz_score`)?.value)).toBe(88);
  });

  it("latest-wins: a newer row supersedes without touching the older one", async () => {
    const { createOverride, getStudentOverrideMap, listStudentOverrides } = await import(
      "@/db/queries/overrides"
    );
    await createOverride({
      tenantId: bvcId,
      cohortId,
      studentUserId: studentId,
      teacherUserId: teacherId,
      courseId,
      kind: "quiz_score",
      value: 92,
      reason: "correction of the earlier adjustment",
    });
    const all = await listStudentOverrides(bvcId, studentId);
    expect(all.length).toBeGreaterThanOrEqual(2); // both rows remain: append-only
    const map = await getStudentOverrideMap(bvcId, studentId);
    expect(Number(map.get(`${courseId}||quiz_score`)?.value)).toBe(92);
  });

  it("the schema refuses an empty reason and a valueless score", async () => {
    const { createOverride } = await import("@/db/queries/overrides");
    await expect(
      createOverride({
        tenantId: bvcId,
        cohortId,
        studentUserId: studentId,
        teacherUserId: teacherId,
        courseId,
        kind: "quiz_score",
        value: 50,
        reason: "   ",
      }),
    ).rejects.toThrow();
    await expect(
      createOverride({
        tenantId: bvcId,
        cohortId,
        studentUserId: studentId,
        teacherUserId: teacherId,
        courseId,
        kind: "quiz_score",
        value: null,
        reason: "missing value",
      }),
    ).rejects.toThrow();
  });
});
