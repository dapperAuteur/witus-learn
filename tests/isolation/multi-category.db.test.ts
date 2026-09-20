import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Additional categories (src/lib/course-categories.ts, migration 0062) must not become a hole in
// tenant scoping. A category NAME is shared vocabulary ("Civics" can exist on every brand), so the
// catalog filter's new "OR name = ANY(additional_categories)" branch is exactly the kind of clause
// that could match another brand's course if it ever slipped outside the tenant condition.
//
// DB-backed, like the rest of this directory. Requires the seeded BVC + Acme tenants and a course
// on each; run with `pnpm test:db`. Skipped offline so the pure suite still runs. The test changes
// one course's extra categories and restores them in afterAll.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

// A name no real category uses, so the assertions cannot be satisfied by unrelated data.
const PROBE = "Isolation Probe Category";

describe.skipIf(!HAS_DB)("additional categories stay tenant-scoped", () => {
  let bvcId = "";
  let acmeId = "";
  let courseId = "";
  let before: string[] = [];

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, courses } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");

    const [bvc] = await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1);
    const [acme] = await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1);
    bvcId = bvc!.id;
    acmeId = acme!.id;

    const [c] = await db.select().from(courses).where(eq(courses.tenantId, bvcId)).limit(1);
    courseId = c!.id;
    before = c!.additionalCategories;
    await db.update(courses).set({ additionalCategories: [PROBE] }).where(eq(courses.id, courseId));
  });

  afterAll(async () => {
    if (!courseId) return;
    const { db } = await import("@/db/client");
    const { courses } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    await db.update(courses).set({ additionalCategories: before }).where(eq(courses.id, courseId));
  });

  it("lists a course under an additional category on its own brand", async () => {
    const { listCourses } = await import("@/db/queries/catalog");
    const hits = await listCourses(bvcId, { category: PROBE, includeUnpublished: true });
    expect(hits.map((c) => c.id)).toContain(courseId);
  });

  it("never lists it under that category on another brand", async () => {
    const { listCourses } = await import("@/db/queries/catalog");
    const hits = await listCourses(acmeId, { category: PROBE, includeUnpublished: true });
    expect(hits.map((c) => c.id)).not.toContain(courseId);
    expect(hits.every((c) => c.tenantId === acmeId)).toBe(true);
  });

  it("stays scoped under every sort order, not only the curriculum join", async () => {
    const { listCourses } = await import("@/db/queries/catalog");
    for (const sort of ["curriculum", "newest", "title", "featured"] as const) {
      const hits = await listCourses(acmeId, { category: PROBE, sort, includeUnpublished: true });
      expect(hits.map((c) => c.id), `sort=${sort}`).not.toContain(courseId);
    }
  });
});
