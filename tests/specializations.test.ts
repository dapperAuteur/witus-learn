import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  SPECIALIZATIONS,
  computeSpecializations,
  specializationCourseSlugs,
  type CompletionRef,
  type PublishedCourseRef,
  type SpecializationDef,
  legsOf,
} from "@/lib/specializations";

const DEF: SpecializationDef = {
  slug: "test-spec",
  title: "Test Specialization",
  description: "Core plus medium plus subject.",
  core: "core-course",
  medium: "medium-course",
  subject: "subject-course",
};

function published(...slugs: string[]): Map<string, PublishedCourseRef> {
  return new Map(slugs.map((s) => [s, { title: `Title of ${s}` }]));
}

function completions(entries: Record<string, string>): Map<string, CompletionRef> {
  return new Map(
    Object.entries(entries).map(([slug, iso]) => [
      slug,
      { completedAt: new Date(iso), verificationToken: `token-${slug}` },
    ]),
  );
}

const ALL_PUBLISHED = published("core-course", "medium-course", "subject-course");

describe("computeSpecializations award logic", () => {
  it("all three complete -> earned, earnedAt is the LAST completion date", () => {
    const [status] = computeSpecializations(
      [DEF],
      ALL_PUBLISHED,
      completions({
        "core-course": "2026-01-05T00:00:00Z",
        "medium-course": "2026-03-10T00:00:00Z",
        "subject-course": "2026-02-01T00:00:00Z",
      }),
    );
    expect(status.earned).toBe(true);
    expect(status.completedCount).toBe(3);
    expect(status.remaining).toEqual([]);
    // The credential dates from finishing the final course, never earlier.
    expect(status.earnedAt?.toISOString()).toBe("2026-03-10T00:00:00.000Z");
  });

  it("two of three -> in progress with exactly the missing leg remaining", () => {
    const [status] = computeSpecializations(
      [DEF],
      ALL_PUBLISHED,
      completions({
        "core-course": "2026-01-05T00:00:00Z",
        "subject-course": "2026-02-01T00:00:00Z",
      }),
    );
    expect(status.earned).toBe(false);
    expect(status.earnedAt).toBeNull();
    expect(status.completedCount).toBe(2);
    expect(status.remaining).toHaveLength(1);
    expect(status.remaining[0]).toMatchObject({
      role: "medium",
      courseSlug: "medium-course",
      completed: false,
      completedAt: null,
      verificationToken: null,
    });
  });

  it("zero of three -> in progress at 0 with all three remaining", () => {
    const [status] = computeSpecializations([DEF], ALL_PUBLISHED, new Map());
    expect(status.earned).toBe(false);
    expect(status.completedCount).toBe(0);
    expect(status.remaining).toHaveLength(3);
  });

  it("legs come back in core, medium, subject order with tenant titles and verify tokens", () => {
    const [status] = computeSpecializations(
      [DEF],
      ALL_PUBLISHED,
      completions({ "core-course": "2026-01-05T00:00:00Z" }),
    );
    expect(status.courses.map((c) => c.role)).toEqual(["core", "medium", "subject"]);
    expect(status.courses[0]).toMatchObject({
      title: "Title of core-course",
      completed: true,
      verificationToken: "token-core-course",
    });
  });
});

describe("tenant scoping", () => {
  it("a definition with any leg unpublished in this tenant is dropped entirely", () => {
    // The medium course belongs to another brand: on this host the specialization
    // must not exist, not render as "unavailable".
    const result = computeSpecializations(
      [DEF],
      published("core-course", "subject-course"),
      completions({
        "core-course": "2026-01-05T00:00:00Z",
        "medium-course": "2026-01-06T00:00:00Z",
        "subject-course": "2026-01-07T00:00:00Z",
      }),
    );
    expect(result).toEqual([]);
  });

  it("a foreign-tenant completion never counts: only tenant-scoped maps decide", () => {
    // The caller is contractually required to pass tenant-scoped maps; a completion of a
    // slug the tenant does not publish simply cannot advance anything, because the whole
    // definition resolves against the published set.
    const result = computeSpecializations(
      [DEF],
      published("core-course", "medium-course"), // subject not published here
      completions({ "subject-course": "2026-01-07T00:00:00Z" }),
    );
    expect(result).toEqual([]);
  });

  it("an empty published catalog yields no specializations at all", () => {
    expect(computeSpecializations([DEF], new Map(), new Map())).toEqual([]);
  });
});

describe("the committed definitions", () => {
  it("every definition has a distinct slug and distinct course legs (3 or more)", () => {
    const slugs = SPECIALIZATIONS.map((d) => d.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const d of SPECIALIZATIONS) {
      const legs = legsOf(d).map((l) => l.courseSlug);
      expect(legs.length).toBeGreaterThanOrEqual(3);
      expect(new Set(legs).size).toBe(legs.length);
    }
  });

  it("every course leg names a course registered in scripts/seed-courses.ts", () => {
    // Same text-scan approach as scripts/check-standards-coverage.ts: a triple that names a
    // slug no seed registers could never be earned anywhere, which is worse than not existing.
    const seed = readFileSync(join(process.cwd(), "scripts/seed-courses.ts"), "utf-8");
    for (const slug of specializationCourseSlugs(SPECIALIZATIONS)) {
      expect(seed, `specialization course slug "${slug}" is not registered in seed-courses.ts`).toContain(
        `slug: "${slug}"`,
      );
    }
  });

  it("specializationCourseSlugs dedupes the shared core across definitions", () => {
    const slugs = specializationCourseSlugs(SPECIALIZATIONS);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const d of SPECIALIZATIONS) {
      for (const leg of legsOf(d)) expect(slugs).toContain(leg.courseSlug);
    }
  });
});

describe("program specializations (N legs, plans/67)", () => {
  const program = {
    slug: "test-program",
    title: "Test Program",
    description: "An N-leg program for the widened engine.",
    legs: [
      { label: "Orientation", courseSlug: "p-0" },
      { label: "Craft", courseSlug: "p-1" },
      { label: "Sleep", courseSlug: "p-2" },
      { label: "Mind", courseSlug: "p-3" },
      { label: "Capstone", courseSlug: "p-4" },
    ],
  };
  const published = new Map(program.legs.map((l) => [l.courseSlug, { title: l.label }]));
  const done = (slugs: string[], at = new Date("2026-08-19T00:00:00Z")) =>
    new Map(slugs.map((s) => [s, { completedAt: at }]));

  it("earns only when EVERY leg is complete, with earnedAt = the last completion", () => {
    const later = new Date("2026-08-20T00:00:00Z");
    const completions = new Map([
      ...done(["p-0", "p-1", "p-2", "p-3"]),
      ["p-4", { completedAt: later }] as const,
    ]);
    const [st] = computeSpecializations([program], published, completions);
    expect(st.earned).toBe(true);
    expect(st.earnedAt?.getTime()).toBe(later.getTime());
    expect(st.completedCount).toBe(5);
    expect(st.courses.map((c) => c.role)).toEqual(["Orientation", "Craft", "Sleep", "Mind", "Capstone"]);
  });

  it("reports partial progress with exactly the remaining legs, in order", () => {
    const [st] = computeSpecializations([program], published, done(["p-0", "p-2"]));
    expect(st.earned).toBe(false);
    expect(st.completedCount).toBe(2);
    expect(st.remaining.map((c) => c.courseSlug)).toEqual(["p-1", "p-3", "p-4"]);
  });

  it("drops the program entirely when any leg is unpublished in the tenant", () => {
    const partial = new Map(published);
    partial.delete("p-3");
    expect(computeSpecializations([program], partial, done(["p-0"]))).toHaveLength(0);
  });

  it("mixes with legacy triples without touching their shape", () => {
    const triple: SpecializationDef = {
      slug: "t",
      title: "Triple",
      description: "legacy",
      core: "c",
      medium: "m",
      subject: "s",
    };
    const pub = new Map([
      ...published,
      ["c", { title: "C" }] as const,
      ["m", { title: "M" }] as const,
      ["s", { title: "S" }] as const,
    ]);
    const out = computeSpecializations([triple, program], pub, done(["c", "m", "s"]));
    expect(out).toHaveLength(2);
    expect(out[0].earned).toBe(true);
    expect(out[0].courses.map((c) => c.role)).toEqual(["core", "medium", "subject"]);
    expect(out[1].earned).toBe(false);
  });
});
