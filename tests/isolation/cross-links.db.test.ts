import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Cross-link isolation (DB-backed). The pure half is in cross-links.test.ts; this is the half that
// can only be proved against a real database, and it is the half BAM's requirement rests on:
//
//   1. An approval made on one school is INVISIBLE on another. The candidate registry is global and
//      compiles into every tenant, so the decision is the only thing keeping one brand's link out of
//      another brand's lessons.
//   2. A link approved for a course the OTHER school does not host resolves to nothing there, even
//      if that school somehow held the same approval. Two independent guards, because either one
//      failing alone still has to end in no link.
//   3. Approving clears a dismissal and dismissing clears an approval, so the two tables can never
//      both hold one candidate and no reader needs a precedence rule.
//
// Requires the seeded BVC + Acme tenants:  pnpm seed:tenants && pnpm seed:bvc, then
//   DATABASE_URL=... pnpm test
// Skipped offline so the pure suite still runs.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("cross-link decisions are tenant-scoped", () => {
  const stamp = Date.now();
  let bvcId = "";
  let acmeId = "";
  let bvcSlugs: string[] = [];
  let acmeSlugs: string[] = [];
  const triple = {
    sourceCourseSlug: `iso-xlink-source-${stamp}`,
    sourceLessonSlug: `iso-xlink-lesson-${stamp}`,
    targetCourseSlug: "",
  };

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { courses, tenants } = await import("@/db/schema");
    const { and, eq, isNotNull } = await import("drizzle-orm");

    const bvc = await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1);
    const acme = await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1);
    bvcId = bvc[0]!.id;
    acmeId = acme[0]!.id;

    const bc = await db
      .select({ slug: courses.slug })
      .from(courses)
      .where(and(eq(courses.tenantId, bvcId), isNotNull(courses.slug)));
    const ac = await db
      .select({ slug: courses.slug })
      .from(courses)
      .where(and(eq(courses.tenantId, acmeId), isNotNull(courses.slug)));
    bvcSlugs = bc.map((c) => c.slug!);
    acmeSlugs = ac.map((c) => c.slug!);
    // The target is a real BVC course, so the "other school cannot address it" assertion is about
    // tenancy rather than about a slug that exists nowhere.
    triple.targetCourseSlug = bvcSlugs.find((s) => !acmeSlugs.includes(s)) ?? bvcSlugs[0]!;
  });

  afterAll(async () => {
    const { resetCrossLink } = await import("@/db/queries/cross-links");
    await resetCrossLink(bvcId, triple);
    await resetCrossLink(acmeId, triple);
  });

  it("does not return one school's approval to another", async () => {
    const { approveCrossLink, listApprovedCrossLinkTargets, listCrossLinkDecisions } = await import(
      "@/db/queries/cross-links"
    );

    await approveCrossLink({
      tenantId: bvcId,
      triple,
      approvedBy: null,
      note: "isolation test approval",
    });

    expect(
      await listApprovedCrossLinkTargets(bvcId, triple.sourceCourseSlug, triple.sourceLessonSlug),
    ).toEqual([triple.targetCourseSlug]);
    // The same lesson, the same triple, the other school: nothing.
    expect(
      await listApprovedCrossLinkTargets(acmeId, triple.sourceCourseSlug, triple.sourceLessonSlug),
    ).toEqual([]);

    const { crossLinkKey } = await import("@/lib/cross-links");
    const key = crossLinkKey(triple);
    expect((await listCrossLinkDecisions(bvcId)).approvals.has(key)).toBe(true);
    expect((await listCrossLinkDecisions(acmeId)).approvals.has(key)).toBe(false);
  });

  it("renders nothing for an approved target the viewing school does not host", async () => {
    const { listCourseLocations } = await import("@/db/queries/lesson-locations");
    const { buildCrossLinkTargets, relatedCourseLinks } = await import("@/lib/cross-links");

    // The second guard, assuming the first had failed and Acme somehow held the approval.
    const acmeIndex = buildCrossLinkTargets(
      await listCourseLocations(acmeId, [triple.targetCourseSlug]),
    );
    if (!acmeSlugs.includes(triple.targetCourseSlug)) {
      expect(relatedCourseLinks([triple.targetCourseSlug], acmeIndex)).toEqual([]);
    }

    // The control: on the school that does host it, the lookup finds it. Whether a link is offered
    // still depends on it being published with an addressable instructor, which is the pure half.
    const bvcIndex = buildCrossLinkTargets(
      await listCourseLocations(bvcId, [triple.targetCourseSlug]),
    );
    expect(bvcIndex.has(triple.targetCourseSlug)).toBe(true);
  });

  it("returns only this tenant's courses, even when handed the other tenant's slugs", async () => {
    const { listCourseLocations } = await import("@/db/queries/lesson-locations");
    const rows = await listCourseLocations(bvcId, [...bvcSlugs, ...acmeSlugs]);
    expect(rows.length).toBeGreaterThan(0);
    for (const r of rows) expect(bvcSlugs).toContain(r.courseSlug);
    expect(await listCourseLocations(bvcId, [])).toEqual([]);
  });

  it("flips a decision instead of stacking two rows", async () => {
    const { approveCrossLink, dismissCrossLink, listApprovedCrossLinkTargets, listCrossLinkDecisions } =
      await import("@/db/queries/cross-links");
    const { crossLinkKey } = await import("@/lib/cross-links");
    const key = crossLinkKey(triple);

    await approveCrossLink({ tenantId: bvcId, triple, approvedBy: null, note: "yes" });
    await dismissCrossLink({ tenantId: bvcId, triple, dismissedBy: null, reason: "on reflection, no" });

    const after = await listCrossLinkDecisions(bvcId);
    expect(after.dismissals.has(key)).toBe(true);
    expect(after.approvals.has(key)).toBe(false);
    // The render path is the assertion that matters: a dismissed candidate renders nothing.
    expect(
      await listApprovedCrossLinkTargets(bvcId, triple.sourceCourseSlug, triple.sourceLessonSlug),
    ).toEqual([]);

    await approveCrossLink({ tenantId: bvcId, triple, approvedBy: null, note: "changed my mind" });
    const back = await listCrossLinkDecisions(bvcId);
    expect(back.approvals.has(key)).toBe(true);
    expect(back.dismissals.has(key)).toBe(false);
  });

  it("returns to unreviewed when a decision is undone", async () => {
    const { approveCrossLink, listCrossLinkDecisions, resetCrossLink } = await import(
      "@/db/queries/cross-links"
    );
    const { crossLinkKey } = await import("@/lib/cross-links");
    const key = crossLinkKey(triple);

    await approveCrossLink({ tenantId: bvcId, triple, approvedBy: null, note: "yes" });
    await resetCrossLink(bvcId, triple);
    const after = await listCrossLinkDecisions(bvcId);
    expect(after.approvals.has(key)).toBe(false);
    expect(after.dismissals.has(key)).toBe(false);
  });
});
