import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Content-isolation gate for the WanderLearn-embed read API (/api/v1) + its API-key auth
// (DB-backed). Requires the seeded BVC + Acme tenants + sample courses:
//   pnpm seed:tenants && pnpm seed:bvc, then DATABASE_URL=... pnpm test
// Skipped offline so the pure suite still runs. Mints its own throwaway keys and cleans
// them up — never touches real admin-minted keys.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("api/v1 is tenant-scoped by API key, not host (content isolation)", () => {
  let bvcId = "";
  let acmeId = "";
  let bvcCourseId = "";
  let acmeCourseId = "";
  let bvcKeyId = "";
  let bvcRawKey = "";
  let acmeKeyId = "";
  let acmeRawKey = "";

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, courses } = await import("@/db/schema");
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

    const bvcKey = await createApiKey(bvcId, "isolation-test-bvc", null);
    const acmeKey = await createApiKey(acmeId, "isolation-test-acme", null);
    bvcKeyId = bvcKey.key.id;
    bvcRawKey = bvcKey.raw;
    acmeKeyId = acmeKey.key.id;
    acmeRawKey = acmeKey.raw;
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { tenantApiKeys } = await import("@/db/schema");
    const { inArray } = await import("drizzle-orm");
    await db.delete(tenantApiKeys).where(inArray(tenantApiKeys.id, [bvcKeyId, acmeKeyId].filter(Boolean)));
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

    const bvcCourses = await listPublishedCourses(bvcId);
    expect(bvcCourses.length).toBeGreaterThan(0);
    expect(bvcCourses.map((c) => c.id)).not.toContain(acmeCourseId);

    const acmeCourses = await listPublishedCourses(acmeId);
    expect(acmeCourses.length).toBeGreaterThan(0);
    expect(acmeCourses.map((c) => c.id)).not.toContain(bvcCourseId);
  });

  it("getPublishedCourseWithLessons 404s (returns null) for a foreign-tenant id — same as a bogus id", async () => {
    const { getPublishedCourseWithLessons } = await import("@/db/queries/api-v1");

    expect(await getPublishedCourseWithLessons(bvcId, bvcCourseId)).not.toBeNull();
    // BVC's key/tenantId can't read Acme's course, and vice versa.
    expect(await getPublishedCourseWithLessons(bvcId, acmeCourseId)).toBeNull();
    expect(await getPublishedCourseWithLessons(acmeId, bvcCourseId)).toBeNull();
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
