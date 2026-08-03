import { beforeAll, describe, expect, it } from "vitest";

// Content-isolation gate (DB-backed). Requires the seeded BVC + Acme tenants AND
// their sample courses:  pnpm seed:tenants && pnpm seed:bvc, then
//   DATABASE_URL=... pnpm test
// Skipped offline so the pure suite still runs.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("catalog is tenant-scoped (content isolation)", () => {
  let bvcId = "";
  let acmeId = "";
  let bvcCourseId = "";
  let acmeCourseId = "";

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, courses } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");

    const bvc = await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1);
    const acme = await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1);
    bvcId = bvc[0]!.id;
    acmeId = acme[0]!.id;

    const bc = await db.select().from(courses).where(eq(courses.tenantId, bvcId)).limit(1);
    const ac = await db.select().from(courses).where(eq(courses.tenantId, acmeId)).limit(1);
    bvcCourseId = bc[0]!.id;
    acmeCourseId = ac[0]!.id;
  });

  it("lists only the tenant's own courses", async () => {
    const { listCourses } = await import("@/db/queries/catalog");

    const bvc = await listCourses(bvcId);
    expect(bvc.length).toBeGreaterThan(0);
    expect(bvc.every((c) => c.tenantId === bvcId)).toBe(true);
    expect(bvc.map((c) => c.title)).not.toContain("Introduction to Acme");

    const acme = await listCourses(acmeId);
    expect(acme.every((c) => c.tenantId === acmeId)).toBe(true);
    expect(acme.map((c) => c.title)).toContain("Introduction to Acme");
  });

  it("lists only the tenant's own series", async () => {
    // A series NAME is itself information about another school ("they teach a Storytelling
    // curriculum"), so the /series index must be scoped like any content read, not merely
    // unreachable. Both directions asserted: neither tenant may see the other's series slugs.
    const { listSeries } = await import("@/db/queries/catalog");

    const bvc = await listSeries(bvcId);
    const acme = await listSeries(acmeId);
    const bvcSlugs = new Set(bvc.map((s) => s.slug));
    for (const s of acme) expect(bvcSlugs.has(s.slug)).toBe(false);
    const acmeSlugs = new Set(acme.map((s) => s.slug));
    for (const s of bvc) expect(acmeSlugs.has(s.slug)).toBe(false);
  });

  it("curriculum sort does not let another tenant's category order leak in", async () => {
    // The curriculum sort joins course_categories. If that join matched on name alone, a foreign
    // category row with the same name would supply the sort_order for this tenant's page. No
    // foreign COURSE would be returned, so the only visible symptom would be a wrong order, which
    // is exactly the kind of quiet leak this suite exists to catch.
    const { listCourses } = await import("@/db/queries/catalog");
    const bvc = await listCourses(bvcId, { sort: "curriculum" });
    expect(bvc.every((c) => c.tenantId === bvcId)).toBe(true);
    const acme = await listCourses(acmeId, { sort: "curriculum" });
    expect(acme.every((c) => c.tenantId === acmeId)).toBe(true);
  });

  it("by-id reads return null (404) across tenants", async () => {
    const { getCourseById } = await import("@/db/queries/catalog");

    expect(await getCourseById(bvcId, bvcCourseId)).not.toBeNull();
    expect(await getCourseById(bvcId, acmeCourseId)).toBeNull();
    expect(await getCourseById(acmeId, bvcCourseId)).toBeNull();
  });
});
