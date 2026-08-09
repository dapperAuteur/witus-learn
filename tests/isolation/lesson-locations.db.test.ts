import { beforeAll, describe, expect, it } from "vitest";

// Content-isolation gate (DB-backed) for the review-context lookup.
//
// The pure half lives in review-context.test.ts. This is the half that can only be proved against a
// real database: that listLessonLocations and listLessonBodies, which the review boards use to turn
// a globally-committed citation or source check into a "read this lesson" link, cannot return a row
// belonging to another school even when they are handed that school's slug. They will be, routinely:
// the citation registry is one list rendered on every tenant.
//
// Requires the seeded BVC + Acme tenants:  pnpm seed:tenants && pnpm seed:bvc, then
//   DATABASE_URL=... pnpm test
// Skipped offline so the pure suite still runs.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("review-context lookups are tenant-scoped", () => {
  let bvcId = "";
  let acmeId = "";
  let bvcSlugs: string[] = [];
  let acmeSlugs: string[] = [];
  let bvcCourseIds = new Set<string>();
  let acmeCourseIds = new Set<string>();

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, courses } = await import("@/db/schema");
    const { eq, isNotNull, and } = await import("drizzle-orm");

    const bvc = await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1);
    const acme = await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1);
    bvcId = bvc[0]!.id;
    acmeId = acme[0]!.id;

    const bc = await db
      .select({ id: courses.id, slug: courses.slug })
      .from(courses)
      .where(and(eq(courses.tenantId, bvcId), isNotNull(courses.slug)));
    const ac = await db
      .select({ id: courses.id, slug: courses.slug })
      .from(courses)
      .where(and(eq(courses.tenantId, acmeId), isNotNull(courses.slug)));

    bvcSlugs = bc.map((c) => c.slug!);
    acmeSlugs = ac.map((c) => c.slug!);
    bvcCourseIds = new Set(bc.map((c) => c.id));
    acmeCourseIds = new Set(ac.map((c) => c.id));
  });

  it("returns only this tenant's lessons, even when handed the other tenant's slugs", async () => {
    const { listLessonLocations } = await import("@/db/queries/lesson-locations");

    // The realistic call: a board hands over every slug on screen, which on a global registry
    // includes courses this school has never heard of.
    const rows = await listLessonLocations(bvcId, [...bvcSlugs, ...acmeSlugs]);
    expect(rows.length).toBeGreaterThan(0);
    for (const r of rows) {
      expect(bvcCourseIds.has(r.courseId)).toBe(true);
      expect(acmeCourseIds.has(r.courseId)).toBe(false);
    }

    const other = await listLessonLocations(acmeId, [...bvcSlugs, ...acmeSlugs]);
    for (const r of other) expect(bvcCourseIds.has(r.courseId)).toBe(false);
  });

  it("returns nothing rather than the whole catalog for an empty slug list", async () => {
    const { listLessonLocations } = await import("@/db/queries/lesson-locations");
    expect(await listLessonLocations(bvcId, [])).toEqual([]);
  });

  it("never returns another tenant's lesson TEXT", async () => {
    // The media board quotes the prose around a figure, so this query returns lesson bodies. It is
    // the most sensitive of the three reads: unpublished lesson text for a course that has not
    // shipped.
    const { listLessonLocations, listLessonBodies } = await import(
      "@/db/queries/lesson-locations"
    );

    const acmeRows = await listLessonLocations(acmeId, acmeSlugs);
    if (acmeRows.length === 0) return; // nothing to attempt to steal on this seed
    const refs = acmeRows.map((r) => ({ courseSlug: r.courseSlug, lessonSlug: r.lessonSlug }));

    // Asking as BVC for Acme's exact (course, lesson) pairs must yield nothing at all.
    expect(await listLessonBodies(bvcId, refs)).toEqual([]);
    // The same request as Acme is the control: the pairs really do exist.
    expect((await listLessonBodies(acmeId, refs)).length).toBeGreaterThan(0);
  });

  it("builds no link for a course the tenant does not hold", async () => {
    const { listLessonLocations } = await import("@/db/queries/lesson-locations");
    const { buildLessonLinkIndex, reviewLocation } = await import("@/lib/lesson-links");

    const index = buildLessonLinkIndex(await listLessonLocations(bvcId, [...bvcSlugs, ...acmeSlugs]));
    for (const slug of acmeSlugs) {
      if (bvcSlugs.includes(slug)) continue; // a slug both schools legitimately hold
      const where = reviewLocation(index, slug, "any-lesson");
      expect(where.href).toBeNull();
      expect(where.note).toMatch(/does not host/i);
    }
  });
});
