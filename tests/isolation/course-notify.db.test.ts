import { afterAll, beforeAll, describe, expect, it } from "vitest";

// "Notify me when this course opens" signups, DB-backed. Requires the seeded BVC + Acme tenants
// AND their sample courses:  pnpm seed:tenants && pnpm seed:bvc, then
//   DATABASE_URL=... pnpm test
// Skipped offline so the pure suite still runs.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

const EMAIL = "vetting-test@example.invalid";

describe.skipIf(!HAS_DB)("course notify-me signups", () => {
  let bvcId = "";
  let acmeId = "";
  let courseId = "";
  const otherCourseId = "00000000-0000-4000-8000-000000000123";

  async function clean() {
    const { db } = await import("@/db/client");
    const { leads } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    await db.delete(leads).where(eq(leads.email, EMAIL));
  }

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, courses } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");

    const bvc = await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1);
    const acme = await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1);
    bvcId = bvc[0]!.id;
    acmeId = acme[0]!.id;
    const bc = await db.select().from(courses).where(eq(courses.tenantId, bvcId)).limit(1);
    courseId = bc[0]!.id;
    await clean();
  });

  afterAll(clean);

  it("a double submit is idempotent: one row, one entry, one person waiting", async () => {
    const { addCourseNotifySignup, countCourseNotifySignups, listLeads } = await import(
      "@/db/queries/leads"
    );
    const signup = {
      tenantId: bvcId,
      courseId,
      courseTitle: "Test course",
      email: EMAIL,
    };
    await addCourseNotifySignup(signup);
    await addCourseNotifySignup(signup);

    expect(await countCourseNotifySignups(bvcId, courseId)).toBe(1);
    const rows = (await listLeads(bvcId)).filter((l) => l.email === EMAIL);
    expect(rows).toHaveLength(1);
    expect(rows[0]!.inquiries).toHaveLength(1);
    expect(rows[0]!.inquiries[0]!.courseId).toBe(courseId);
  });

  it("signing up for a SECOND course appends rather than being swallowed", async () => {
    const { addCourseNotifySignup, countCourseNotifySignups, listLeads } = await import(
      "@/db/queries/leads"
    );
    await addCourseNotifySignup({
      tenantId: bvcId,
      courseId: otherCourseId,
      courseTitle: "Another course",
      email: EMAIL,
    });

    const rows = (await listLeads(bvcId)).filter((l) => l.email === EMAIL);
    expect(rows).toHaveLength(1); // still one lead: unique on (tenant, email)
    expect(rows[0]!.inquiries).toHaveLength(2);
    expect(await countCourseNotifySignups(bvcId, courseId)).toBe(1);
    expect(await countCourseNotifySignups(bvcId, otherCourseId)).toBe(1);
  });

  it("is tenant-scoped: the signup never counts, or appears, under another brand", async () => {
    const { countCourseNotifySignups, listLeads } = await import("@/db/queries/leads");
    expect(await countCourseNotifySignups(acmeId, courseId)).toBe(0);
    expect((await listLeads(acmeId)).some((l) => l.email === EMAIL)).toBe(false);
  });
});
