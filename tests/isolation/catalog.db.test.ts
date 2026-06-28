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

  it("by-id reads return null (404) across tenants", async () => {
    const { getCourseById } = await import("@/db/queries/catalog");

    expect(await getCourseById(bvcId, bvcCourseId)).not.toBeNull();
    expect(await getCourseById(bvcId, acmeCourseId)).toBeNull();
    expect(await getCourseById(acmeId, bvcCourseId)).toBeNull();
  });
});
