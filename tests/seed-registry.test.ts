import { describe, expect, it } from "vitest";
import {
  allSeedEntries,
  extractSeedEntries,
  schoolShareViolations,
  type SeedEntry,
} from "../scripts/lib/seed-registry";

// The registry is what the lint guards (series codes, standards, citations) and the course index
// (scripts/data/README.md, `pnpm gen:course-index`) read. Loop-registered courses used to come back
// with no category, because the loop's seedAuthoredCourse call holds it ("Civics" for all 48 state
// courses); the index would then have shown 73 courses as uncategorised.
describe("seed registry", () => {
  const entries = allSeedEntries();
  const bySlug = (slug: string) => entries.find((e) => e.slug === slug);

  it("finds the whole catalog", () => {
    expect(entries.length).toBeGreaterThan(300);
  });

  it("gives every registered course a category, including loop-registered ones", () => {
    expect(entries.filter((e) => !e.category).map((e) => `${e.file}:${e.slug}`)).toEqual([]);
    expect(bySlug("state-civics-wy")?.category).toBe("Civics");
    expect(bySlug("river-the-dead-zone")?.category).toBe("Rivers & Expeditions");
  });

  it("reads extra categories", () => {
    expect(bySlug("who-were-the-computers")?.additionalCategories).toEqual([
      "AI & Technology",
      "Science & Math",
    ]);
  });

  // One assertion per way a seeder spells its tenant today, so a refactor of the resolver that loses
  // one shape fails here by name rather than as a wall of "unknown school".
  it("knows which school every registered course is seeded on", () => {
    expect(entries.filter((e) => !e.school).map((e) => `${e.file}:${e.slug}`)).toEqual([]);
    // `const learnWitus = await tenantBySlug("learn-witus")`, used by a loop's call.
    expect(bySlug("state-civics-wy")?.school).toBe("learn-witus");
    // `tenants.slug, TARGET_SLUG` into `const t`, then `const tenantId = t[0]?.id` and the shorthand.
    expect(bySlug("speedway")?.school).toBe("elementary-mba");
    expect(bySlug("faa-part-107")?.school).toBe("learn-witus");
    // `const [tenant] = ...` and `tenantId: tenant.id`.
    expect(bySlug("well-sleep")?.school).toBe("learn-witus");
    expect(bySlug("computational-neuroscience-foundations")?.school).toBe("learn-witus");
    // `const bvc = await tenantBySlug("better-vice-club")`.
    expect(bySlug("bvc-taster-wine")?.school).toBe("better-vice-club");
  });

  // BAM's preview rule, split into its two halves so a failure names the half that broke.
  it("registers each slug at most once per school", () => {
    const broken = schoolShareViolations(entries).filter((v) => v.rule !== "preview-only");
    expect(broken.map((v) => v.detail)).toEqual([]);
  });

  it("puts a slug on a second school only when it is position 01 of its series", () => {
    const broken = schoolShareViolations(entries).filter((v) => v.rule === "preview-only");
    expect(broken.map((v) => v.detail)).toEqual([]);
  });
});

// The rule itself, on fabricated entries: today's catalog shares nothing, so the catalog tests above
// would pass with any rule at all. These prove each half fails when it should.
describe("preview rule (schoolShareViolations)", () => {
  type Reg = Pick<SeedEntry, "file" | "slug" | "school" | "seriesPosition">;
  const reg = (slug: string, school: string | null, seriesPosition: string | null = null): Reg => ({
    file: `scripts/seed-${school ?? "unknown"}.ts`,
    slug,
    school,
    seriesPosition,
  });
  const rules = (regs: Reg[]) => schoolShareViolations(regs).map((v) => `${v.rule}:${v.slug}`);

  it("passes distinct slugs, and a series' first course previewed on a second school", () => {
    expect(rules([reg("a", "learn-witus"), reg("b", "learn-witus"), reg("c", "elementary-mba")])).toEqual([]);
    expect(rules([reg("firm-01", "elementary-mba", "01"), reg("firm-01", "learn-witus", "01")])).toEqual([]);
    // The preview copy may carry no series fields: the series need not exist on the previewing school.
    expect(rules([reg("firm-01", "elementary-mba", "01"), reg("firm-01", "learn-witus")])).toEqual([]);
  });

  it("fails a slug registered twice on one school, even a series' first course", () => {
    expect(rules([reg("a", "learn-witus"), reg("a", "learn-witus")])).toEqual(["once-per-school:a"]);
    expect(rules([reg("firm-01", "learn-witus", "01"), reg("firm-01", "learn-witus", "01")])).toEqual([
      "once-per-school:firm-01",
    ]);
  });

  it("fails a course on two schools that is not position 01", () => {
    expect(rules([reg("firm-02", "elementary-mba", "02"), reg("firm-02", "learn-witus", "02")])).toEqual([
      "preview-only:firm-02",
    ]);
    expect(rules([reg("no-series", "elementary-mba"), reg("no-series", "learn-witus")])).toEqual([
      "preview-only:no-series",
    ]);
    // Two registrations that disagree on the position are two courses under one slug.
    expect(rules([reg("x", "elementary-mba", "01"), reg("x", "learn-witus", "03")])).toEqual(["preview-only:x"]);
    // The start ("00") and a track's first course ("A1") are not position 01.
    expect(rules([reg("y", "elementary-mba", "00"), reg("y", "learn-witus", "00")])).toEqual(["preview-only:y"]);
    expect(rules([reg("t", "elementary-mba", "A1"), reg("t", "learn-witus")])).toEqual(["preview-only:t"]);
  });

  it("fails a series' first course on three schools", () => {
    expect(
      rules([reg("z", "elementary-mba", "01"), reg("z", "learn-witus", "01"), reg("z", "better-vice-club", "01")]),
    ).toEqual(["preview-only:z"]);
  });

  it("fails a registration whose school is unknown instead of guessing one", () => {
    expect(rules([reg("a", "learn-witus"), reg("a", null)])).toEqual(["unknown-school:a"]);
  });
});

// How `school` is read, on fabricated seed scripts: the shapes today's seeders use, and the ones that
// must come back null rather than borrow a school from somewhere else in the file.
describe("school derivation", () => {
  const schools = (src: string) => extractSeedEntries("scripts/seed-fixture.ts", src).map((e) => `${e.slug}:${e.school}`);

  it("follows the call's tenantId to the lookup that named it", () => {
    const src = `
const TARGET_SLUG = "elementary-mba";
async function main() {
  const t = await db.select({ id: schema.tenants.id }).from(schema.tenants).where(eq(schema.tenants.slug, TARGET_SLUG)).limit(1);
  const tenantId = t[0]?.id;
  await seedAuthoredCourse(db, { tenantId, instructorId, slug: "one", course: ONE });
  const lw = await tenantBySlug("learn-witus");
  for (const { slug, course } of [{ slug: "two", course: TWO }]) {
    await seedAuthoredCourse(db, { tenantId: lw, instructorId, slug, course });
  }
}`;
    expect(schools(src)).toEqual(["one:elementary-mba", "two:learn-witus"]);
  });

  it("returns null for a lookup by a loop variable, as in the BVC Season 1 share loop", () => {
    const src = `
async function main() {
  const t = await db.select().from(schema.tenants).where(eq(schema.tenants.slug, "better-vice-club")).limit(1);
  const tenantId = t[0]?.id;
  await seedAuthoredCourse(db, { tenantId, instructorId, slug: "home", course: HOME });
  for (const share of shares) {
    const shareTenant = await tenantBySlug(share.slug);
    await seedAuthoredCourse(db, { tenantId: shareTenant, instructorId, slug: "shared", course: HOME });
  }
}`;
    expect(schools(src)).toEqual(["home:better-vice-club", "shared:null"]);
  });

  it("returns null for a parameter, and does not borrow another function's binding of the name", () => {
    const src = `
async function seedOne(tenantId: string) {
  await seedAuthoredCourse(db, { tenantId, instructorId, slug: "via-helper", course: A });
}
async function main() {
  const t = await db.select().from(schema.tenants).where(eq(schema.tenants.slug, "learn-witus")).limit(1);
  const tenantId = t[0]?.id;
  await seedOne(tenantId);
}`;
    expect(schools(src)).toEqual(["via-helper:null"]);
  });

  it("reads the same slug in two places as two registrations", () => {
    const src = `
async function main() {
  const lw = await tenantBySlug("learn-witus");
  const emba = await tenantBySlug("elementary-mba");
  await seedAuthoredCourse(db, { tenantId: emba, instructorId, slug: "firm-01", course: FIRM, seriesPosition: "01" });
  for (const { slug, course } of [{ slug: "firm-01", course: FIRM_PREVIEW }]) {
    await seedAuthoredCourse(db, { tenantId: lw, instructorId, slug, course });
  }
}`;
    expect(schools(src)).toEqual(["firm-01:elementary-mba", "firm-01:learn-witus"]);
  });
});
