import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Codeless-promotion isolation (DB-backed). Requires the seeded BVC + Acme tenants with at least one
// PUBLISHED course each:  pnpm seed:tenants && pnpm seed:bvc, then DATABASE_URL=... pnpm test
// Skipped offline so the pure suite still runs (the pure half is promotions.test.ts).
//
// The stake: a promotion is a PRICE, and checkout re-resolves it server-side. A row that leaked
// across tenants would not just look wrong, it would hand another school's courses away for free.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("promotions are tenant-scoped (a sale never crosses brands)", () => {
  let bvcId = "";
  let acmeId = "";
  let bvcCourseId = "";
  let acmeCourseId = "";
  const created: string[] = [];

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, courses, promotions } = await import("@/db/schema");
    const { and, eq } = await import("drizzle-orm");

    const bvc = await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1);
    const acme = await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1);
    bvcId = bvc[0]!.id;
    acmeId = acme[0]!.id;

    const pick = async (tenantId: string) =>
      (
        await db
          .select()
          .from(courses)
          .where(and(eq(courses.tenantId, tenantId), eq(courses.isPublished, true)))
          .limit(1)
      )[0]!.id;
    bvcCourseId = await pick(bvcId);
    acmeCourseId = await pick(acmeId);

    // BVC runs "everything free", the most destructive shape there is if it leaks.
    const wide = await db
      .insert(promotions)
      .values({ tenantId: bvcId, name: "ISO everything free", scope: "tenant", kind: "free" })
      .returning({ id: promotions.id });
    // …and a course-scoped one on its own course.
    const scoped = await db
      .insert(promotions)
      .values({
        tenantId: bvcId,
        name: "ISO half off one course",
        scope: "course",
        courseId: bvcCourseId,
        kind: "percent",
        value: "50",
      })
      .returning({ id: promotions.id });
    created.push(wide[0].id, scoped[0].id);
  });

  afterAll(async () => {
    if (created.length === 0) return;
    const { db } = await import("@/db/client");
    const { promotions } = await import("@/db/schema");
    const { inArray } = await import("drizzle-orm");
    await db.delete(promotions).where(inArray(promotions.id, created));
  });

  it("lists a tenant's own active promotions", async () => {
    const { listActivePromotions } = await import("@/db/queries/promotions");
    const rows = await listActivePromotions(bvcId);
    expect(rows.map((r) => r.id)).toEqual(expect.arrayContaining(created));
    expect(rows.every((r) => r.tenantId === bvcId)).toBe(true);
  });

  it("never lists them for another tenant", async () => {
    const { listActivePromotions, listPromotions } = await import("@/db/queries/promotions");
    const active = await listActivePromotions(acmeId);
    expect(active.some((r) => created.includes(r.id))).toBe(false);
    const all = await listPromotions(acmeId);
    expect(all.some((r) => created.includes(r.id))).toBe(false);
  });

  it("leaves the other tenant's course at its list price", async () => {
    const { listActivePromotions } = await import("@/db/queries/promotions");
    const { db } = await import("@/db/client");
    const { courses } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    const { coursePriceView } = await import("@/lib/sale-pricing");

    const acmeCourse = (await db.select().from(courses).where(eq(courses.id, acmeCourseId)))[0]!;
    // Acme's page loads ACME's promotions, which do not include BVC's rows.
    const v = coursePriceView(acmeCourse, acmeId, await listActivePromotions(acmeId));
    expect(v.discounted).toBe(false);
    expect(v.effectivePrice).toBe(Math.max(0, Number(acmeCourse.price)));
  });

  it("does not apply even if BVC's rows are handed to Acme's resolution by mistake", async () => {
    const { listActivePromotions } = await import("@/db/queries/promotions");
    const { coursePriceView } = await import("@/lib/sale-pricing");
    const bvcRows = await listActivePromotions(bvcId);
    // Belt and braces: the tenant check inside resolvePrice makes a plumbing mistake inert.
    const v = coursePriceView({ id: acmeCourseId, price: "19", priceType: "one_time" }, acmeId, bvcRows);
    expect(v.effectivePrice).toBe(19);
    expect(v.promotion).toBeNull();
  });

  it("refuses to end another tenant's promotion", async () => {
    const { endPromotionNow } = await import("@/db/queries/promotions");
    expect(await endPromotionNow(acmeId, created[0])).toBeUndefined();
    // …and the row is untouched, so BVC's sale is still running.
    const { listActivePromotions } = await import("@/db/queries/promotions");
    expect((await listActivePromotions(bvcId)).some((r) => r.id === created[0])).toBe(true);
  });

  it("ends its own promotion, and the price returns to list", async () => {
    const { endPromotionNow, listActivePromotions } = await import("@/db/queries/promotions");
    const { coursePriceView } = await import("@/lib/sale-pricing");
    const target = created[1];

    const before = coursePriceView(
      { id: bvcCourseId, price: "20", priceType: "one_time" },
      bvcId,
      await listActivePromotions(bvcId),
    );
    expect(before.isFree || before.effectivePrice < 20).toBe(true);

    expect(await endPromotionNow(bvcId, target)).toBeDefined();
    // Ending is idempotent: a second call finds nothing left to end.
    expect(await endPromotionNow(bvcId, target)).toBeUndefined();
    expect((await listActivePromotions(bvcId)).some((r) => r.id === target)).toBe(false);
  });

  it("rejects an illegal row at the database, not just in the form", async () => {
    const { db } = await import("@/db/client");
    const { promotions } = await import("@/db/schema");
    // A percent sale with no value, which would silently discount nothing.
    await expect(
      db.insert(promotions).values({ tenantId: bvcId, name: "ISO bad", scope: "tenant", kind: "percent" }),
    ).rejects.toThrow();
    // A brand-wide sale that also names a course.
    await expect(
      db.insert(promotions).values({
        tenantId: bvcId,
        name: "ISO bad target",
        scope: "tenant",
        courseId: bvcCourseId,
        kind: "free",
      }),
    ).rejects.toThrow();
    // An end date before the start.
    await expect(
      db.insert(promotions).values({
        tenantId: bvcId,
        name: "ISO bad window",
        scope: "tenant",
        kind: "free",
        startsAt: new Date("2026-08-10T00:00:00Z"),
        endsAt: new Date("2026-08-01T00:00:00Z"),
      }),
    ).rejects.toThrow();
  });
});
