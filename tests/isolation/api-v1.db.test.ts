import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Content-isolation gate for the WanderLearn-embed read API (/api/v1) + its API-key auth
// (DB-backed). Requires the seeded BVC + Acme tenants + sample courses:
//   pnpm seed:tenants && pnpm seed:bvc, then DATABASE_URL=... pnpm test
// Skipped offline so the pure suite still runs. Mints its own throwaway keys + a throwaway
// published lesson per tenant, and cleans them all up in afterAll — never touches real
// admin-minted keys or real course content.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("api/v1 is tenant-scoped by API key, not host (content isolation)", () => {
  let bvcId = "";
  let acmeId = "";
  let bvcCourseId = "";
  let acmeCourseId = "";
  let bvcLessonId = "";
  let acmeLessonId = "";
  /** Fixture courses this run temporarily VETTED (restored to null in afterAll). */
  const tempVettedCourseIds: string[] = [];
  let bvcKeyId = "";
  let bvcRawKey = "";
  let acmeKeyId = "";
  let acmeRawKey = "";

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, courses, lessons } = await import("@/db/schema");
    const { eq, and } = await import("drizzle-orm");
    const { createApiKey } = await import("@/db/queries/api-keys");

    const bvc = await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1);
    const acme = await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1);
    bvcId = bvc[0]!.id;
    acmeId = acme[0]!.id;

    // A PUBLISHED, PUBLIC course from each tenant — the only kind /api/v1 should ever expose.
    const bc = await db
      .select()
      .from(courses)
      .where(and(eq(courses.tenantId, bvcId), eq(courses.isPublished, true), eq(courses.visibility, "public")))
      .limit(1);
    const ac = await db
      .select()
      .from(courses)
      .where(and(eq(courses.tenantId, acmeId), eq(courses.isPublished, true), eq(courses.visibility, "public")))
      .limit(1);
    bvcCourseId = bc[0]!.id;
    acmeCourseId = ac[0]!.id;

    // The api-v1 LESSON reads additionally require the course to be VETTED (plans/52), which
    // post-dates this test. The dev DB legitimately has zero vetted courses until BAM works
    // through the review queue, so rather than depend on that state, temporarily vet the two
    // fixture courses and restore vetted_at = null in afterAll — the same mint-and-clean-up
    // philosophy as the throwaway lessons and keys below.
    for (const picked of [bc[0]!, ac[0]!]) {
      if (picked.vettedAt == null) {
        await db.update(courses).set({ vettedAt: new Date() }).where(eq(courses.id, picked.id));
        tempVettedCourseIds.push(picked.id);
      }
    }

    // A PUBLISHED lesson within each of those courses. Rather than assume the seed data has
    // one (Acme's seed course has zero published lessons today), mint our own throwaway
    // published lesson per tenant — same "insert + clean up in afterAll" pattern as the API
    // keys below, so this test never depends on seed content shape.
    const bl = await db
      .insert(lessons)
      .values({
        courseId: bvcCourseId,
        tenantId: bvcId,
        title: "Isolation test lesson (BVC)",
        lessonType: "text",
        textContent: "Throwaway isolation-test content.",
        contentFormat: "markdown",
        isPublished: true,
      })
      .returning({ id: lessons.id });
    const al = await db
      .insert(lessons)
      .values({
        courseId: acmeCourseId,
        tenantId: acmeId,
        title: "Isolation test lesson (Acme)",
        lessonType: "text",
        textContent: "Throwaway isolation-test content.",
        contentFormat: "markdown",
        isPublished: true,
      })
      .returning({ id: lessons.id });
    bvcLessonId = bl[0]!.id;
    acmeLessonId = al[0]!.id;

    const bvcKey = await createApiKey(bvcId, "isolation-test-bvc", null);
    const acmeKey = await createApiKey(acmeId, "isolation-test-acme", null);
    bvcKeyId = bvcKey.key.id;
    bvcRawKey = bvcKey.raw;
    acmeKeyId = acmeKey.key.id;
    acmeRawKey = acmeKey.raw;
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { tenantApiKeys, lessons } = await import("@/db/schema");
    const { inArray } = await import("drizzle-orm");
    await db.delete(tenantApiKeys).where(inArray(tenantApiKeys.id, [bvcKeyId, acmeKeyId].filter(Boolean)));
    await db.delete(lessons).where(inArray(lessons.id, [bvcLessonId, acmeLessonId].filter(Boolean)));
    if (tempVettedCourseIds.length > 0) {
      const { courses } = await import("@/db/schema");
      await db.update(courses).set({ vettedAt: null }).where(inArray(courses.id, tempVettedCourseIds));
    }
  });

  it("a key resolves to its OWN tenant only", async () => {
    const { authenticateApiV1Request } = await import("@/lib/api-v1-auth");

    const bvcAuth = await authenticateApiV1Request(
      new Request("http://x", { headers: { authorization: `Bearer ${bvcRawKey}` } }),
    );
    expect(bvcAuth.ok).toBe(true);
    if (bvcAuth.ok) expect(bvcAuth.tenant.id).toBe(bvcId);

    const acmeAuth = await authenticateApiV1Request(
      new Request("http://x", { headers: { authorization: `Bearer ${acmeRawKey}` } }),
    );
    expect(acmeAuth.ok).toBe(true);
    if (acmeAuth.ok) expect(acmeAuth.tenant.id).toBe(acmeId);
  });

  it("listPublishedCourses never crosses tenants", async () => {
    const { listPublishedCourses } = await import("@/db/queries/api-v1");

    const bvc = await listPublishedCourses(bvcId);
    expect(bvc.items.length).toBeGreaterThan(0);
    expect(bvc.items.map((c) => c.id)).not.toContain(acmeCourseId);
    expect(bvc.pagination.total).toBeGreaterThanOrEqual(bvc.items.length);

    const acme = await listPublishedCourses(acmeId);
    expect(acme.items.length).toBeGreaterThan(0);
    expect(acme.items.map((c) => c.id)).not.toContain(bvcCourseId);
  });

  it("listPublishedCourses paginates and clamps caller-supplied limit/offset", async () => {
    const { listPublishedCourses } = await import("@/db/queries/api-v1");

    const page = await listPublishedCourses(bvcId, { limit: 1, offset: 0 });
    expect(page.items.length).toBe(1);
    expect(page.pagination).toMatchObject({ limit: 1, offset: 0 });

    // A huge/negative limit is clamped, not passed straight to the DB.
    const clamped = await listPublishedCourses(bvcId, { limit: 999999, offset: -5 });
    expect(clamped.pagination.limit).toBeLessThanOrEqual(100);
    expect(clamped.pagination.offset).toBe(0);
  });

  it("getPublishedCourseWithLessons 404s (returns null) for a foreign-tenant id — same as a bogus id", async () => {
    const { getPublishedCourseWithLessons } = await import("@/db/queries/api-v1");

    expect(await getPublishedCourseWithLessons(bvcId, bvcCourseId)).not.toBeNull();
    // BVC's key/tenantId can't read Acme's course, and vice versa.
    expect(await getPublishedCourseWithLessons(bvcId, acmeCourseId)).toBeNull();
    expect(await getPublishedCourseWithLessons(acmeId, bvcCourseId)).toBeNull();
  });

  it("getPublishedLesson never crosses tenants or courses — foreign key, foreign course, and wrong-course pairing all 404", async () => {
    const { getPublishedLesson } = await import("@/db/queries/api-v1");

    // Own tenant, own course, own lesson: resolves.
    const own = await getPublishedLesson(bvcId, bvcCourseId, bvcLessonId);
    expect(own).not.toBeNull();
    expect(own?.id).toBe(bvcLessonId);

    // A BVC key/tenantId can't read Acme's lesson, and vice versa — same for the course id.
    expect(await getPublishedLesson(bvcId, acmeCourseId, acmeLessonId)).toBeNull();
    expect(await getPublishedLesson(acmeId, bvcCourseId, bvcLessonId)).toBeNull();

    // Right tenant, but mismatched course/lesson pairing (lesson belongs to a different
    // course than the one named in the URL) — also 404s, not a cross-course leak.
    expect(await getPublishedLesson(bvcId, acmeCourseId, bvcLessonId)).toBeNull();
  });

  it("a missing, garbage, or revoked key is rejected — never returns data", async () => {
    const { authenticateApiV1Request } = await import("@/lib/api-v1-auth");
    const { revokeApiKey } = await import("@/db/queries/api-keys");

    const missing = await authenticateApiV1Request(new Request("http://x"));
    expect(missing.ok).toBe(false);

    const garbage = await authenticateApiV1Request(
      new Request("http://x", { headers: { authorization: "Bearer lwus_live_not-a-real-key" } }),
    );
    expect(garbage.ok).toBe(false);

    await revokeApiKey(bvcKeyId);
    const revoked = await authenticateApiV1Request(
      new Request("http://x", { headers: { authorization: `Bearer ${bvcRawKey}` } }),
    );
    expect(revoked.ok).toBe(false);
  });
});
