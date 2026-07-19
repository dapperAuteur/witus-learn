import { describe, expect, it } from "vitest";
import {
  ALIGNMENTS,
  COURSE_CLAIMS,
  FRAMEWORKS,
  JURISDICTION_FILES,
  NEXT_UP,
  STANDARDS_FETCHED_ON,
  allAlignedCourseSlugs,
  coursesIn,
  filterGroups,
  isStateCode,
  mappedStates,
  scopeAlignments,
  subjectsIn,
  summarizeStandards,
  toPlainText,
  type AlignedCourseLike,
} from "@/lib/standards";

// /standards tells teachers — and homeschooling parents who may FILE IT WITH A STATE — which
// public education standards this curriculum satisfies. Two classes of defect matter here:
//
//   1. A cross-tenant leak: a tenant claiming a standard for a course it does not host. The
//      Season-1-only tenants (Learn.WitUS, ElementaryMBA) must never surface a Season 2/3
//      standard, and must never link a course they do not have.
//   2. A malformed claim: a standard with no verbatim text, no source, no evidence, or a
//      "partial" that doesn't say what's missing.
//
// scopeAlignments is pure, so this all runs in the offline suite.

function course(slug: string): AlignedCourseLike {
  return { id: `id-${slug}`, title: `BVC — ${slug}`, slug };
}

function catalog(...slugs: string[]): Map<string, AlignedCourseLike> {
  return new Map(slugs.map((s) => [s, course(s)]));
}

// The seven Season 1 courses — the ONLY ones shared with Learn.WitUS + ElementaryMBA
// (see scripts/seed-bvc-real.ts, which shares episodes 1–7 and nothing else).
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

// The wider-catalog courses the Indiana pass mapped (civics ladder, history, health, sports,
// media literacy). Every slug must match its registration in scripts/seed-*.ts exactly — the
// "unknown slug" test below is the guard against a typo making a standard unreachable.
const CATALOG = [
  "us-civics-101",
  "us-constitution-101",
  "voting-elections-101",
  "how-a-bill-becomes-law",
  "supreme-court-judicial-branch",
  "state-vs-federal",
  "us-state-local-government",
  "state-civics-in",
  "state-civics-az",
  "state-civics-ar",
  "state-civics-ca",
  "state-civics-ny",
  "state-civics-pa",
  "state-civics-tx",
  "state-civics-fl",
  "state-civics-oh",
  "state-civics-ga",
  "state-civics-il",
  "state-civics-mi",
  "state-civics-nc",
  "state-civics-va",
  "state-civics-wa",
  "state-civics-nj",
  "state-civics-ma",
  "state-civics-tn",
  "state-civics-mo",
  "state-civics-md",
  "state-civics-co",
  "state-civics-mn",
  "state-civics-wi",
  "state-civics-ct",
  "state-civics-sc",
  "state-civics-al",
  "state-civics-la",
  "state-civics-ky",
  "state-civics-or",
  "state-civics-ok",
  "state-civics-ut",
  "state-civics-ia",
  "state-civics-ms",
  "citizenship-naturalization",
  "jury-duty-courts",
  "know-your-rights",
  "help-a-campaign",
  "how-to-run-for-office",
  "spotting-misleading-marketing",
  "great-migration",
  "history-of-unions",
  "labor-mexico",
  "labor-poland",
  "dental-health-101",
  "read-your-bodys-data",
  "woop-science-of-doing-it",
  "golf-play-know-work",
  "tennis",
  "football",
  "pickleball",
  "lacrosse-creators-game",
  "croquet",
];

describe("standards data integrity — a wrong code could be filed with a state", () => {
  it("every alignment points at a framework that exists", () => {
    const ids = new Set(FRAMEWORKS.map((f) => f.id));
    for (const a of ALIGNMENTS) expect(ids, `${a.code}`).toContain(a.frameworkId);
  });

  it("every framework carries a publisher and a source URL a teacher can open", () => {
    for (const f of FRAMEWORKS) {
      expect(f.publisher.length, f.id).toBeGreaterThan(0);
      expect(f.sourceUrl, f.id).toMatch(/^https:\/\//);
      expect(f.adoption.length, f.id).toBeGreaterThan(0);
    }
  });

  it("every standard has a verbatim text, at least one course, and at least one lesson", () => {
    for (const a of ALIGNMENTS) {
      // A short "text" is the signature of a paraphrase. Real standards are sentences.
      expect(a.text.length, a.code).toBeGreaterThan(40);
      expect(a.courseSlugs.length, a.code).toBeGreaterThan(0);
      expect(a.lessons.length, a.code).toBeGreaterThan(0);
    }
  });

  it("every PARTIAL coverage explains what is missing — a partial is never a quiet full", () => {
    for (const a of ALIGNMENTS.filter((x) => x.coverage === "partial")) {
      expect(a.note, `${a.code} is partial but says nothing about the gap`).toBeTruthy();
      expect(a.note!.length, a.code).toBeGreaterThan(30);
    }
  });

  it("no duplicate code within a framework", () => {
    const seen = new Set<string>();
    for (const a of ALIGNMENTS) {
      const key = `${a.frameworkId}::${a.code}`;
      expect(seen.has(key), `duplicate ${key}`).toBe(false);
      seen.add(key);
    }
  });

  it("every fetch date is a real ISO date (it is rendered to teachers as provenance)", () => {
    expect(STANDARDS_FETCHED_ON).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(Number.isNaN(Date.parse(STANDARDS_FETCHED_ON))).toBe(false);
    for (const f of FRAMEWORKS) {
      expect(f.fetchedOn, f.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(Date.parse(f.fetchedOn)), f.id).toBe(false);
    }
  });

  it("every resolved framework carries the state of the file that declared it", () => {
    for (const j of JURISDICTION_FILES) {
      for (const f of j.frameworks) {
        const resolved = FRAMEWORKS.find((r) => r.id === f.id);
        expect(resolved, f.id).toBeDefined();
        expect(resolved!.state, f.id).toBe(j.state);
      }
      // Adopted shared frameworks expand under a state-prefixed id ("dc-ngss").
      for (const a of j.adoptions ?? []) {
        const id = `${j.state.toLowerCase()}-${a.framework.id}`;
        const resolved = FRAMEWORKS.find((r) => r.id === id);
        expect(resolved, id).toBeDefined();
        expect(resolved!.state, id).toBe(j.state);
        // Verbatim adoption keeps the shared framework's codes; aliases would rename them.
        for (const s of a.framework.standards) {
          const local = ALIGNMENTS.find(
            (x) => x.frameworkId === id && x.code === (a.aliases?.[s.code] ?? s.code),
          );
          expect(local, `${id}:${s.code}`).toBeDefined();
        }
      }
    }
  });

  it("the claims layer is fully wired: every claim is used, every claim has evidence", () => {
    const used = new Set(ALIGNMENTS.flatMap((a) => a.claimIds));
    for (const c of COURSE_CLAIMS) {
      // A claim nothing references is dead data — delete it or map it, don't let it rot.
      expect(used, `unused claim "${c.id}"`).toContain(c.id);
      expect(c.claim.length, c.id).toBeGreaterThan(10);
      expect(c.courseSlugs.length, c.id).toBeGreaterThan(0);
      expect(c.lessons.length, c.id).toBeGreaterThan(0);
    }
    // And every alignment's derived evidence actually came through the join.
    for (const a of ALIGNMENTS) {
      expect(a.claimIds.length, `${a.frameworkId}:${a.code} has no claims`).toBeGreaterThan(0);
      expect(a.courseSlugs.length, a.code).toBeGreaterThan(0);
      expect(a.lessons.length, a.code).toBeGreaterThan(0);
    }
  });

  it("mapped/next-up states are real jurisdiction codes and never overlap", () => {
    for (const s of mappedStates()) expect(isStateCode(s)).toBe(true);
    for (const s of NEXT_UP) {
      expect(isStateCode(s)).toBe(true);
      expect(mappedStates(), `${s} is both mapped and next-up`).not.toContain(s);
    }
  });
});

describe("standards are tenant-scoped — a school can only claim what it actually teaches", () => {
  it("a Season-1-only tenant never surfaces a Season 2/3 standard", () => {
    const groups = scopeAlignments(catalog(...SEASON_1));
    const slugs = groups.flatMap((g) => g.alignments.flatMap((a) => a.courses.map((c) => c.slug)));

    for (const s of slugs) expect(SEASON_1, `leaked ${s}`).toContain(s);
    for (const s of SEASON_2_3) expect(slugs, `leaked ${s}`).not.toContain(s);
  });

  it("a standard is rewritten to name ONLY the courses this tenant has", () => {
    // WH.4.4 spans chocolate/sugar/rum/tequila-mezcal/tobacco. A Season-1 tenant has two of them.
    const groups = scopeAlignments(catalog(...SEASON_1));
    const wh44 = groups.flatMap((g) => g.alignments).find((a) => a.code === "WH.4.4");
    expect(wh44).toBeDefined();
    expect(wh44!.courses.map((c) => c.slug).sort()).toEqual(["chocolate", "sugar"]);
  });

  it("a standard whose courses this tenant has none of is dropped entirely", () => {
    const groups = scopeAlignments(catalog(...SEASON_1));
    const codes = groups.flatMap((g) => g.alignments).map((a) => a.code);
    // The Opium Wars standard lives only in Ep 17 (Season 3).
    expect(codes).not.toContain("WH2.53");
    // Prohibition lives only in Ep 8 (Season 2).
    expect(codes).not.toContain("USH.4.2");
  });

  it("a tenant with none of this curriculum gets nothing at all (the page then 404s)", () => {
    expect(scopeAlignments(new Map())).toEqual([]);
    expect(scopeAlignments(catalog("some-other-tenants-course"))).toEqual([]);
  });

  it("the full catalog surfaces every standard, and every course slug resolves", () => {
    const all = allAlignedCourseSlugs();
    const groups = scopeAlignments(catalog(...all));
    expect(summarizeStandards(groups).total).toBe(ALIGNMENTS.length);

    // Guard against a typo'd slug in the data file quietly making a standard unreachable.
    for (const s of all)
      expect([...SEASON_1, ...SEASON_2_3, ...CATALOG], `unknown slug "${s}"`).toContain(s);
  });

  it("the per-state view is a strict subset: one jurisdiction's frameworks, same tenant scope", () => {
    const available = catalog(...allAlignedCourseSlugs());
    const indiana = scopeAlignments(available, "IN");
    expect(indiana.length).toBeGreaterThan(0);
    for (const g of indiana) expect(g.framework.state).toBe("IN");

    // Per-state never surfaces anything the unscoped view wouldn't.
    const allCodes = new Set(
      scopeAlignments(available).flatMap((g) => g.alignments.map((a) => `${g.framework.id}:${a.code}`)),
    );
    for (const g of indiana)
      for (const a of g.alignments) expect(allCodes).toContain(`${g.framework.id}:${a.code}`);

    // And the tenant boundary still holds inside a state view.
    const s1 = scopeAlignments(catalog(...SEASON_1), "IN");
    const slugs = s1.flatMap((g) => g.alignments.flatMap((a) => a.courses.map((c) => c.slug)));
    for (const s of slugs) expect(SEASON_1, `leaked ${s}`).toContain(s);
  });

  it("subject and course filters only narrow — they can never re-admit a dropped course", () => {
    const groups = scopeAlignments(catalog(...SEASON_1), "IN");
    const subjects = subjectsIn(groups);
    expect(subjects.length).toBeGreaterThan(0);

    for (const subject of subjects) {
      for (const g of filterGroups(groups, { subject })) expect(g.framework.subject).toBe(subject);
    }

    const courses = coursesIn(groups);
    expect(courses.map((c) => c.slug).every((s) => SEASON_1.includes(s))).toBe(true);
    const one = filterGroups(groups, { courseSlug: courses[0]!.slug });
    for (const g of one)
      for (const a of g.alignments)
        expect(a.courses.some((c) => c.slug === courses[0]!.slug)).toBe(true);

    // Filtering by a course the tenant does not have yields nothing, not a leak.
    expect(filterGroups(groups, { courseSlug: "state-civics-in" })).toEqual([]);
  });

  it("full coverage sorts above partial, so a teacher reads the strongest claims first", () => {
    for (const g of scopeAlignments(catalog(...allAlignedCourseSlugs()))) {
      const firstPartial = g.alignments.findIndex((a) => a.coverage === "partial");
      if (firstPartial === -1) continue;
      const after = g.alignments.slice(firstPartial);
      expect(after.every((a) => a.coverage === "partial"), g.framework.id).toBe(true);
    }
  });

  it("the copyable plain text carries the provenance and only this tenant's courses", () => {
    const groups = scopeAlignments(catalog(...SEASON_1));
    const text = toPlainText(groups, "ElementaryMBA");
    for (const g of groups) expect(text).toContain(`Retrieved: ${g.framework.fetchedOn}`);
    expect(text).toContain("confirm against your jurisdiction's current requirements");
    expect(text).not.toContain("tobacco");
    expect(text).not.toContain("opioids");
  });
});
