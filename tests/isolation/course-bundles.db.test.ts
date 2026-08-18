import { afterAll, beforeAll, describe, expect, it } from "vitest";

// "Also available in a bundle" on the course page (BAM 2026-08-18). The link list is a public
// surface, so it is tenant-scoped like every catalog read AND withholds unpublished bundles: a
// link to a bundle nobody can buy is a dead end, and its price is not an offer we are making yet.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("listBundlesForCourse is tenant-scoped and published-only", () => {
  const stamp = Date.now();
  let bvcId = "";
  let acmeId = "";
  let courseId = "";
  const publishedSlug = `iso-bundle-pub-${stamp}`;
  const draftSlug = `iso-bundle-draft-${stamp}`;
  const bundleIds: string[] = [];

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { bundleCourses, bundles, courses, tenants } = await import("@/db/schema");
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

    for (const [slug, isPublished] of [
      [publishedSlug, true],
      [draftSlug, false],
    ] as const) {
      const [b] = await db
        .insert(bundles)
        .values({ tenantId: bvcId, slug, title: `Isolation ${slug}`, price: "29", isPublished })
        .returning({ id: bundles.id });
      bundleIds.push(b.id);
      await db.insert(bundleCourses).values({ bundleId: b.id, courseId, sortOrder: 0 });
    }
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { bundles } = await import("@/db/schema");
    const { inArray } = await import("drizzle-orm");
    if (bundleIds.length > 0) await db.delete(bundles).where(inArray(bundles.id, bundleIds));
  });

  it("returns the published bundle for its own tenant, with price fields", async () => {
    const { listBundlesForCourse } = await import("@/db/queries/bundles");
    const rows = await listBundlesForCourse(bvcId, courseId);
    const found = rows.find((r) => r.slug === publishedSlug);
    expect(found).toBeTruthy();
    expect(Number(found!.price)).toBe(29);
    expect(found!.priceType).toBe("one_time");
  });

  it("never returns an unpublished bundle", async () => {
    const { listBundlesForCourse } = await import("@/db/queries/bundles");
    const rows = await listBundlesForCourse(bvcId, courseId);
    expect(rows.map((r) => r.slug)).not.toContain(draftSlug);
  });

  it("returns nothing for the same course id under another tenant", async () => {
    const { listBundlesForCourse } = await import("@/db/queries/bundles");
    expect(await listBundlesForCourse(acmeId, courseId)).toHaveLength(0);
  });
});
