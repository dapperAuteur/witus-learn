import { describe, expect, it } from "vitest";
import {
  figureLine,
  unmatchedFigureKeys,
  withFigures,
  type CourseFigureMap,
} from "@/lib/course-figures";
import { extractFigures, checkFigures } from "@/lib/figures";

// The figure sidecar exists so that a course whose lesson bodies are NOT in this repository
// (the BVC episodes, seeded from gitignored content/bvc/*.csv) can still carry an image whose
// CREDIT lives in git and is reviewed in a diff. See src/lib/course-figures.ts and plans/63 §4c.
//
// The load-bearing property, and the reason for the first test below: what the sidecar emits must
// be parseable by the SAME parser the lesson renderer and the build guard use. If the two ever
// disagree, a sidecar figure ships as a stray line of literal text and nobody notices, which is
// exactly the invisible failure scripts/check-figures.ts was written to prevent.

const FIG = {
  url: "https://res.cloudinary.com/devdash54321/image/upload/v1/witus/courses/x/y/z.jpg",
  alt: "A hillside of coffee shrubs in rows, with pickers moving between them carrying baskets.",
  caption: "Look at the spacing: this is a plantation, not a forest, and the rows are the argument.",
  credit: "Someone. A photograph, 1910. Public domain. Via Wikimedia Commons. https://example.org/x",
};

const MAP: CourseFigureMap = { coffee: { "l3-the-plant": [FIG] } };

describe("course figure sidecar", () => {
  it("emits a directive the real figure parser accepts", () => {
    const parsed = extractFigures(figureLine(FIG));
    expect(parsed).toHaveLength(1);
    expect(parsed[0].url).toBe(FIG.url);
    expect(parsed[0].alt).toBe(FIG.alt);
    expect(parsed[0].caption).toBe(FIG.caption);
    expect(parsed[0].credit).toBe(FIG.credit);
  });

  it("emits a directive the build guard finds no problem with", () => {
    expect(checkFigures(figureLine(FIG))).toEqual([]);
  });

  it("inserts after the first paragraph, not before it", () => {
    const body = "First paragraph.\n\nSecond paragraph.";
    const out = withFigures("coffee", "l3-the-plant", body, MAP)!;
    const lines = out.split("\n\n");
    expect(lines[0]).toBe("First paragraph.");
    expect(lines[1]).toContain(":::figure ");
    expect(lines[2]).toBe("Second paragraph.");
  });

  it("appends when the body is a single paragraph", () => {
    const out = withFigures("coffee", "l3-the-plant", "Only one.", MAP)!;
    expect(out.startsWith("Only one.")).toBe(true);
    expect(extractFigures(out)).toHaveLength(1);
  });

  it("leaves a lesson with no declared figure completely untouched", () => {
    const body = "First.\n\nSecond.";
    expect(withFigures("coffee", "l9-other", body, MAP)).toBe(body);
    expect(withFigures("tea", "l3-the-plant", body, MAP)).toBe(body);
  });

  it("is safe on an undefined body (a quiz or map lesson has none)", () => {
    expect(withFigures("coffee", "l3-the-plant", undefined, MAP)).toBeUndefined();
  });

  it("reports a figure whose lesson no longer exists", () => {
    // The real-world cause: a CSV lesson TITLE is edited, so its derived slug changes, and the
    // figure silently stops applying. Renders as if the image was never added.
    expect(unmatchedFigureKeys("coffee", ["l1-intro", "l3-the-plant"], MAP)).toEqual([]);
    expect(unmatchedFigureKeys("coffee", ["l1-intro"], MAP)).toEqual(["coffee/l3-the-plant"]);
  });

  it("reports nothing for a course with no declared figures", () => {
    expect(unmatchedFigureKeys("tea", [], MAP)).toEqual([]);
  });
});
