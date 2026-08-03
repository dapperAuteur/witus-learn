import { describe, expect, it } from "vitest";
import {
  describePosition,
  formatCourseCode,
  groupSeries,
  isValidSeriesCode,
  parseSeriesPosition,
  type CoursePositioned,
} from "@/lib/series-code";

// The course code is a PROMISE to a learner ("start here", "these tracks are independent"), so the
// interesting tests are the ones about what the code refuses to say rather than what it renders. A
// half-configured course must show NO badge, and a half-coded series must degrade to a list rather
// than to a page silently missing courses.

const course = (over: Partial<CoursePositioned> & { title: string }): CoursePositioned => ({
  seriesCode: "STORY",
  seriesPosition: null,
  seriesTrack: null,
  seriesOrder: null,
  ...over,
});

describe("parseSeriesPosition", () => {
  it("recognises the four shapes", () => {
    expect(parseSeriesPosition("00")).toEqual({ kind: "start" });
    expect(parseSeriesPosition("07")).toEqual({ kind: "step", step: 7 });
    expect(parseSeriesPosition("T1")).toEqual({ kind: "track", letter: "T", step: 1 });
    expect(parseSeriesPosition("99")).toEqual({ kind: "capstone" });
  });

  it("is case and whitespace tolerant, because a seed script is hand-typed", () => {
    expect(parseSeriesPosition(" t2 ")).toEqual({ kind: "track", letter: "T", step: 2 });
  });

  it("rejects anything outside the grammar rather than guessing", () => {
    for (const bad of ["", "0", "1", "100", "T", "T0", "TT1", "-01", "0x", null, undefined]) {
      expect(parseSeriesPosition(bad)).toBeNull();
    }
  });
});

describe("isValidSeriesCode", () => {
  it("accepts 2-8 uppercase alphanumerics and nothing else", () => {
    expect(isValidSeriesCode("STORY")).toBe(true);
    expect(isValidSeriesCode("TASTE")).toBe(true);
    expect(isValidSeriesCode("S")).toBe(false);
    expect(isValidSeriesCode("story")).toBe(false);
    expect(isValidSeriesCode("STORYTELLING")).toBe(false);
    expect(isValidSeriesCode("STO RY")).toBe(false);
    expect(isValidSeriesCode(null)).toBe(false);
  });
});

describe("formatCourseCode", () => {
  it("renders both halves uppercased", () => {
    expect(formatCourseCode("STORY", "t3")).toBe("STORY-T3");
  });

  it("renders NOTHING when either half is missing or illegal", () => {
    // The point: a half-configured course shows no badge rather than a misleading one. A badge that
    // reads "STORY-" or "undefined-T1" is worse than absence, because it looks like information.
    expect(formatCourseCode("STORY", null)).toBeNull();
    expect(formatCourseCode(null, "T1")).toBeNull();
    expect(formatCourseCode("STORY", "banana")).toBeNull();
    expect(formatCourseCode("storytelling", "01")).toBeNull();
  });
});

describe("describePosition", () => {
  it("states the parallel-tracks promise in words, naming the track", () => {
    const s = describePosition("T2", "True");
    expect(s).toContain("True track");
    expect(s).toContain("parallel");
  });

  it("still says tracks are parallel when the track has no name", () => {
    expect(describePosition("P1")).toContain("parallel");
  });

  it("says nothing for an uncoded course", () => {
    expect(describePosition(null)).toBeNull();
    expect(describePosition("nonsense")).toBeNull();
  });
});

describe("groupSeries", () => {
  const storytelling = [
    course({ title: "How stories work", seriesPosition: "00", seriesOrder: 1 }),
    course({ title: "Monodrama I", seriesPosition: "P1", seriesTrack: "Performed", seriesOrder: 20 }),
    course({ title: "Civic documentation", seriesPosition: "T1", seriesTrack: "True", seriesOrder: 10 }),
    course({ title: "Documentary", seriesPosition: "T3", seriesTrack: "True", seriesOrder: 12 }),
    course({ title: "News storytelling", seriesPosition: "T2", seriesTrack: "True", seriesOrder: 11 }),
    course({ title: "Mockumentary", seriesPosition: "99", seriesOrder: 99 }),
  ];

  it("puts start first, capstone last, and tracks in curriculum order between", () => {
    const groups = groupSeries(storytelling);
    expect(groups.map((g) => g.kind)).toEqual(["start", "track", "track", "capstone"]);
    // True (min order 10) before Performed (20): tracks sort by the author's series_order, NOT by
    // letter, because the letter is a mnemonic for the track name and P < T alphabetically.
    expect(groups[1].label).toBe("True");
    expect(groups[2].label).toBe("Performed");
  });

  it("orders courses within a track by their step", () => {
    const trueTrack = groupSeries(storytelling).find((g) => g.label === "True");
    expect(trueTrack?.courses.map((c) => c.title)).toEqual([
      "Civic documentation",
      "News storytelling",
      "Documentary",
    ]);
  });

  it("never drops a course that has no code", () => {
    // Half-coding a series must degrade to a list, not to a page missing courses.
    const groups = groupSeries([...storytelling, course({ title: "Oral history" })]);
    const all = groups.flatMap((g) => g.courses.map((c) => c.title));
    expect(all).toContain("Oral history");
    expect(groups.at(-1)?.kind).toBe("unplaced");
  });

  it("renders an uncoded series as one plain group", () => {
    const groups = groupSeries([
      course({ title: "B", seriesCode: null, seriesOrder: 2 }),
      course({ title: "A", seriesCode: null, seriesOrder: 1 }),
    ]);
    expect(groups).toHaveLength(1);
    expect(groups[0].kind).toBe("unplaced");
    expect(groups[0].courses.map((c) => c.title)).toEqual(["A", "B"]);
  });

  it("groups a single-path series under one heading", () => {
    const groups = groupSeries([
      course({ title: "Chocolate", seriesCode: "TASTE", seriesPosition: "03", seriesOrder: 3 }),
      course({ title: "Wine", seriesCode: "TASTE", seriesPosition: "01", seriesOrder: 1 }),
      course({ title: "Coffee", seriesCode: "TASTE", seriesPosition: "02", seriesOrder: 2 }),
    ]);
    expect(groups.map((g) => g.kind)).toEqual(["path"]);
    expect(groups[0].courses.map((c) => c.title)).toEqual(["Wine", "Coffee", "Chocolate"]);
  });
});
