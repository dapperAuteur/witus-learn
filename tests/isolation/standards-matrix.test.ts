import { describe, expect, it } from "vitest";
import {
  ALIGNMENTS,
  allAlignedCourseSlugs,
  flattenAlignments,
  isStateCode,
  mappedStates,
  scopeAlignments,
  type AlignedCourseLike,
  type MatrixRow,
} from "@/lib/standards";

// The cross-state standards explorer (/academic-standards/matrix) flattens EVERY
// (state x standard x course) alignment this tenant can back into one browsable table.
//
// flattenAlignments takes the OUTPUT of scopeAlignments, which is the tenant boundary: it has
// already dropped every standard no in-catalog course backs and rewritten each to name only this
// tenant's courses. So the defect this file guards against is a leak THROUGH the flatten: a row
// naming a course the tenant does not publish, or a standard surviving with no backing course.
// flattenAlignments is pure, so this runs in the offline suite with no DB.

function course(slug: string): AlignedCourseLike {
  return { id: `id-${slug}`, title: `BVC — ${slug}`, slug };
}
function catalog(...slugs: string[]): Map<string, AlignedCourseLike> {
  return new Map(slugs.map((s) => [s, course(s)]));
}
function rowsFor(...slugs: string[]): MatrixRow[] {
  return flattenAlignments(scopeAlignments(catalog(...slugs)));
}

// The seven Season 1 courses — the ONLY ones shared with Learn.WitUS + ElementaryMBA.
const SEASON_1 = ["coffee", "tea", "chocolate", "sugar", "forest-wisdom", "kava", "synthesis"];
const SEASON_2_3 = [
  "beer",
  "wine",
  "whiskey",
  "rum",
  "tequila-mezcal",
  "sake",
  "the-toast",
  "tobacco",
  "cannabis",
  "opioids",
  "coca",
  "psychedelics",
  "khat",
  "full-spectrum",
];

describe("standards matrix — flatten shape", () => {
  it("emits exactly one row per (scoped standard x course)", () => {
    const groups = scopeAlignments(catalog(...allAlignedCourseSlugs()));
    const expected = groups
      .flatMap((g) => g.alignments)
      .reduce((n, a) => n + a.courses.length, 0);
    expect(flattenAlignments(groups).length).toBe(expected);
  });

  it("every row carries its provenance and a real, mapped jurisdiction", () => {
    const rows = rowsFor(...allAlignedCourseSlugs());
    const mapped = new Set(mappedStates());
    for (const r of rows) {
      expect(isStateCode(r.state), r.state).toBe(true);
      expect(mapped.has(r.state), `${r.state} not in mappedStates()`).toBe(true);
      expect(r.stateName.length).toBeGreaterThan(0);
      expect(r.code.length).toBeGreaterThan(0);
      // A short "text" is the signature of a paraphrase; real standards are sentences. The two
      // exceptions are genuinely short Common Core mathematics standards, transcribed whole from
      // the publisher's PDF — padding them would break the verbatim rule. Kept in step with the
      // identical list in standards.test.ts.
      const VERBATIM_AND_SHORT = new Set([
        "CCSS.Math.Content.HSS-IC.B.6", // "Evaluate reports based on data."
        "CCSS.Math.Content.HSS-ID.C.9", // "Distinguish between correlation and causation."
      ]);
      if (!VERBATIM_AND_SHORT.has(r.code)) expect(r.text.length, r.code).toBeGreaterThan(40);
      expect(r.text.length, r.code).toBeGreaterThan(20);
      expect(r.sourceUrl, r.frameworkId).toMatch(/^https:\/\//);
      expect(r.fetchedOn, r.frameworkId).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(["full", "partial"]).toContain(r.coverage);
    }
  });

  it("row ids are unique (a stable key the client can render and diff on)", () => {
    const rows = rowsFor(...allAlignedCourseSlugs());
    const ids = new Set(rows.map((r) => r.id));
    expect(ids.size).toBe(rows.length);
  });

  it("is genuinely cross-state: the full catalog spans every mapped jurisdiction", () => {
    const rows = rowsFor(...allAlignedCourseSlugs());
    const statesInRows = new Set(rows.map((r) => r.state));
    // Every state that has any scoped alignment must appear in the flattened rows.
    const statesWithData = new Set(
      scopeAlignments(catalog(...allAlignedCourseSlugs())).map((g) => g.framework.state),
    );
    expect(statesInRows).toEqual(statesWithData);
    expect(statesInRows.size).toBeGreaterThan(1);
  });
});

describe("standards matrix — tenant scope holds through the flatten", () => {
  it("a Season-1-only tenant never surfaces a Season 2/3 course in ANY row", () => {
    const rows = rowsFor(...SEASON_1);
    expect(rows.length).toBeGreaterThan(0);
    for (const r of rows) {
      expect(SEASON_1, `leaked ${r.course.slug}`).toContain(r.course.slug);
      expect(SEASON_2_3, `leaked ${r.course.slug}`).not.toContain(r.course.slug);
    }
  });

  it("a course another tenant owns never appears (not in the catalog -> not a row)", () => {
    // A slug this tenant does not publish, plus a real Season-2 slug it also lacks.
    const rows = rowsFor(...SEASON_1, "rival-brand-course");
    const slugs = new Set(rows.map((r) => r.course.slug));
    expect(slugs.has("rival-brand-course")).toBe(false);
    expect(slugs.has("tobacco")).toBe(false); // a real standard-backing course, but not in catalog
    for (const s of slugs) expect(SEASON_1, `leaked ${s}`).toContain(s);
  });

  it("a multi-course standard is split into rows for ONLY the tenant's courses", () => {
    // WH.4.4 spans chocolate/sugar/rum/tequila-mezcal/tobacco; a Season-1 tenant has two of them.
    const rows = rowsFor(...SEASON_1).filter((r) => r.code === "WH.4.4");
    expect(rows.length).toBe(2);
    expect(rows.map((r) => r.course.slug).sort()).toEqual(["chocolate", "sugar"]);
  });

  it("each row shows the tenant's OWN course record, not a shared/global one", () => {
    const available = catalog(...SEASON_1);
    for (const r of flattenAlignments(scopeAlignments(available))) {
      const own = available.get(r.course.slug);
      expect(own, r.course.slug).toBeDefined();
      expect(r.course.id).toBe(own!.id);
      expect(r.course.title).toBe(own!.title);
    }
  });

  it("a tenant with none of this curriculum gets zero rows (page shows an honest empty state)", () => {
    expect(rowsFor()).toEqual([]);
    expect(rowsFor("some-other-tenants-course")).toEqual([]);
  });

  it("the flatten never invents a standard scopeAlignments dropped", () => {
    // Every (framework, code) in the rows must exist in the raw alignment table — no fabrication.
    const known = new Set(ALIGNMENTS.map((a) => `${a.frameworkId}::${a.code}`));
    for (const r of rowsFor(...allAlignedCourseSlugs())) {
      expect(known, `${r.frameworkId}::${r.code}`).toContain(`${r.frameworkId}::${r.code}`);
    }
  });
});
