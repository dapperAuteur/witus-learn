import { describe, expect, it } from "vitest";
import { RELEASE_MARKER, parseReleaseMarkers } from "@/lib/lesson-review";
import { loadAllCourseFiles } from "./course-files";

// Reviewer sign-off v2 (plans/97 G1): no marker in the catalog may misparse.
//
// The parser FAILS CLOSED: a "Before release" line it cannot read becomes a decision with no brief
// question number, which no verdict can clear, so the course silently cannot reach "ready". A real
// decision always names its brief question ("needs BAM's decision (brief question 8): ..."). So a
// decision WITHOUT a number is, by construction, a marker whose wording the parser did not
// recognize. This test walks every course file, not a hand-picked list, so a new course with a
// misworded marker fails here instead of shipping held forever.

// Importing all ~330 course modules takes about 30 seconds on a laptop, past the suite's default.
describe("every Before release marker in scripts/data parses as the need it means", { timeout: 180_000 }, () => {
  it("no marker falls back to a decision without a brief question number", async () => {
    const { courses } = await loadAllCourseFiles();
    expect(courses.length).toBeGreaterThan(100);
    const misparsed: string[] = [];
    for (const { file, course } of courses) {
      for (const l of course.lessons) {
        if (!l.body?.includes("Before release:")) continue;
        for (const line of l.body.split("\n")) {
          if (!line.trimStart().startsWith(RELEASE_MARKER)) continue;
          for (const n of parseReleaseMarkers(line).needs) {
            if (n.kind === "decision" && n.question == null) {
              misparsed.push(`${file} · lesson "${l.slug}" · ${line.trim()}`);
            }
          }
        }
      }
    }
    expect(misparsed, `Reword these to "needs a qualified reviewer (QR): ...", "needs a practitioner or BAM's demonstration: ...", or "needs BAM's decision (brief question N): ..."`).toEqual([]);
  });

  it("an explicit reviewNeeds override never carries an unnumbered decision either", async () => {
    const { courses } = await loadAllCourseFiles();
    const bad: string[] = [];
    for (const { file, course } of courses) {
      for (const l of course.lessons) {
        for (const n of l.reviewNeeds ?? []) {
          if (n.kind === "decision" && n.question == null) bad.push(`${file} · lesson "${l.slug}"`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it("catches a misworded marker (the guard itself works)", () => {
    const needs = parseReleaseMarkers("> **Before release:** release only after a Native reviewer has read it.").needs;
    expect(needs).toEqual([{ kind: "decision", who: "release only after a Native reviewer has read it" }]);
    expect(needs[0].question).toBeUndefined();
  });
});
