import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Bundle isolation (DB-backed). Requires the seeded BVC + Acme tenants with at least one PUBLISHED
// course each:  pnpm seed:tenants && pnpm seed:bvc, then DATABASE_URL=... pnpm test
// Skipped offline so the pure suite still runs. Creates a temporary bundle for BVC and cleans it up.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("bundles are tenant-scoped (a bundle never leaks across tenants)", () => {
  const slug = `iso-test-bundle-${Date.now()}`;
  let bvcId = "";
  let acmeId = "";
  let bvcCourseId = "";
  let bundleId = "";

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, courses, bundles, bundleCourses } = await import("@/db/schema");
    const { and, eq } = await import("drizzle-orm");

    const bvc = await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1);
    const acme = await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1);
    bvcId = bvc[0]!.id;
    acmeId = acme[0]!.id;

    const bc = await db
      .select()
      .from(courses)
      .where(and(eq(courses.tenantId, bvcId), eq(courses.isPublished, true)))
      .limit(1);
    bvcCourseId = bc[0]!.id;

    const ins = await db
      .insert(bundles)
      .values({ tenantId: bvcId, slug, title: "Isolation Test Bundle", price: "19", isPublished: true })
      .returning({ id: bundles.id });
    bundleId = ins[0].id;
    await db.insert(bundleCourses).values({ bundleId, courseId: bvcCourseId, sortOrder: 0 });
  });

  afterAll(async () => {
    if (!bundleId) return;
    const { db } = await import("@/db/client");
    const { bundles } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    await db.delete(bundles).where(eq(bundles.id, bundleId)); // cascade removes bundle_courses
  });

  it("returns the bundle for its own tenant, with its member courses", async () => {
    const { getBundleBySlug } = await import("@/db/queries/bundles");
    const found = await getBundleBySlug(bvcId, slug);
    expect(found).not.toBeNull();
    expect(found!.bundle.tenantId).toBe(bvcId);
    expect(found!.courses.map((c) => c.id)).toContain(bvcCourseId);
    expect(found!.courses.every((c) => c.tenantId === bvcId)).toBe(true);
  });

  it("returns null for a DIFFERENT tenant (404, never a redirect, so existence does not leak)", async () => {
    const { getBundleBySlug } = await import("@/db/queries/bundles");
    expect(await getBundleBySlug(acmeId, slug)).toBeNull();
  });

  it("never lists another tenant's bundle", async () => {
    const { listBundles } = await import("@/db/queries/bundles");
    const acme = await listBundles(acmeId, { includeUnpublished: true });
    expect(acme.some((b) => b.slug === slug)).toBe(false);
  });

  it("scopes member course ids to the querying tenant (the join is the boundary)", async () => {
    const { getBundleCourseIds } = await import("@/db/queries/bundles");
    // BVC sees the member; Acme, asking for the same bundle id, sees none (the course is BVC's).
    expect(await getBundleCourseIds(bvcId, bundleId)).toContain(bvcCourseId);
    expect(await getBundleCourseIds(acmeId, bundleId)).toHaveLength(0);
  });
});
