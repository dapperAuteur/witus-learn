import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Isolation for the /admin landing's new count queries (DB-backed): a pending media asset, an
// upcoming live session, or an unvetted course inserted under BVC must move ONLY BVC's numbers.
// Tenant A never counts tenant B — the counts are headline numbers an operator acts on, so a
// cross-tenant bleed here would send an admin chasing another school's queue. Requires the seeded
// BVC + Acme tenants (pnpm seed:tenants); skipped offline like the other .db suites.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("admin landing counts are tenant-scoped", () => {
  const stamp = Date.now();
  let bvcId = "";
  let acmeId = "";
  const instructorId = `iso-admin-counts-${stamp}`;
  let liveId = "";
  let courseId = "";
  const mediaUrl = `https://res.cloudinary.com/test/iso-admin-counts-${stamp}.jpg`;

  // Acme's numbers before the BVC inserts — the "unchanged" baseline.
  let acmeBefore = { pendingMedia: 0, upcomingLive: 0, unvetted: 0 };
  let bvcBefore = { pendingMedia: 0, upcomingLive: 0, unvetted: 0 };

  async function snapshot(tenantId: string) {
    const { countPendingMediaAssets } = await import("@/db/queries/media-assets");
    const { countUpcomingLiveSessions } = await import("@/db/queries/live");
    const { getAdminStats } = await import("@/db/queries/admin-dashboard");
    const [pendingMedia, upcomingLive, stats] = await Promise.all([
      countPendingMediaAssets(tenantId),
      countUpcomingLiveSessions(tenantId),
      getAdminStats(tenantId),
    ]);
    return { pendingMedia, upcomingLive, unvetted: stats.unvettedCourses };
  }

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, users, courses } = await import("@/db/schema");
    const { liveSessions } = await import("@/db/schema/learning");
    const { eq } = await import("drizzle-orm");

    const bvc = await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1);
    const acme = await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1);
    bvcId = bvc[0]!.id;
    acmeId = acme[0]!.id;

    [bvcBefore, acmeBefore] = await Promise.all([snapshot(bvcId), snapshot(acmeId)]);

    await db
      .insert(users)
      .values({ id: instructorId, email: `${instructorId}@isolation.test`, name: "Iso Counts" });

    const [live] = await db
      .insert(liveSessions)
      .values({
        tenantId: bvcId,
        title: `iso admin-counts live ${stamp}`,
        scheduledAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      })
      .returning();
    liveId = live!.id;

    const { upsertMediaAsset } = await import("@/db/queries/media-assets");
    await upsertMediaAsset({
      tenantId: bvcId,
      courseSlug: null,
      lessonSlug: null,
      kind: "image",
      url: mediaUrl,
      publicId: null,
      alt: "isolation test asset",
      caption: "isolation test asset caption",
      credit: "Isolation test",
      rightsStatus: "public-domain",
      sourceUrl: "https://example.test/iso",
    });

    const [course] = await db
      .insert(courses)
      .values({
        tenantId: bvcId,
        instructorId,
        title: `Iso admin-counts course ${stamp}`,
        isPublished: false,
        // vettedAt left NULL on purpose: this is the "unvetted" the stat counts.
      })
      .returning();
    courseId = course!.id;
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { users, courses, mediaAssets } = await import("@/db/schema");
    const { liveSessions } = await import("@/db/schema/learning");
    const { eq } = await import("drizzle-orm");
    if (liveId) await db.delete(liveSessions).where(eq(liveSessions.id, liveId));
    await db.delete(mediaAssets).where(eq(mediaAssets.url, mediaUrl));
    if (courseId) await db.delete(courses).where(eq(courses.id, courseId));
    await db.delete(users).where(eq(users.id, instructorId));
  });

  it("BVC's own counts include the inserted rows", async () => {
    const after = await snapshot(bvcId);
    expect(after.pendingMedia).toBe(bvcBefore.pendingMedia + 1);
    expect(after.upcomingLive).toBe(bvcBefore.upcomingLive + 1);
    expect(after.unvetted).toBe(bvcBefore.unvetted + 1);
  });

  it("Acme's counts do not move when BVC gains rows", async () => {
    const after = await snapshot(acmeId);
    expect(after.pendingMedia).toBe(acmeBefore.pendingMedia);
    expect(after.upcomingLive).toBe(acmeBefore.upcomingLive);
    expect(after.unvetted).toBe(acmeBefore.unvetted);
  });
});
