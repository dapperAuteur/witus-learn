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

  // Plan 97 G1/Q3: a reviewer need must be written as one. A decision is BAM's call and no verdict
  // clears it, so a reviewer's read written as "BAM's decision ... release only after a reviewer has
  // read it" can never be signed off by that reviewer and silently holds the course. Since 0075 a
  // second reviewer on a lesson is a tagged QR need ("(QR) [native-reviewer]: ..."), so no decision
  // has a reason to name a reviewer or a read.
  const REVIEWER_NEED_AS_DECISION = /\b(reviewer|has read|to read|to check|to review)\b/i;

  it("no decision marker is a reviewer need in disguise", async () => {
    const { courses } = await loadAllCourseFiles();
    const disguised: string[] = [];
    for (const { file, course } of courses) {
      for (const l of course.lessons) {
        const needs = l.reviewNeeds ?? parseReleaseMarkers(l.body).needs;
        for (const n of needs) {
          if (n.kind === "decision" && REVIEWER_NEED_AS_DECISION.test(n.who)) {
            disguised.push(`${file} · lesson "${l.slug}" · ${n.who}`);
          }
        }
      }
    }
    expect(
      disguised,
      `Write these as reviewer needs: "needs a qualified reviewer (QR) [reviewer-key]: ...", which that reviewer signs off`,
    ).toEqual([]);
  });

  it("the disguise guard catches the old Native-reviewer wording and passes a real decision", () => {
    const old = parseReleaseMarkers(
      "> **Before release:** needs BAM's decision (brief question 8): release only after a Native reviewer, to be named, has read the cessions.",
    ).needs[0];
    expect(old.kind).toBe("decision");
    expect(REVIEWER_NEED_AS_DECISION.test(old.who)).toBe(true);
    const real = parseReleaseMarkers(
      "> **Before release:** needs BAM's decision (brief question 5): whether set sound is taught here or in the planned Videography course.",
    ).needs[0];
    expect(REVIEWER_NEED_AS_DECISION.test(real.who)).toBe(false);
  });

  it("catches a misworded marker (the guard itself works)", () => {
    const needs = parseReleaseMarkers("> **Before release:** release only after a Native reviewer has read it.").needs;
    expect(needs).toEqual([{ kind: "decision", who: "release only after a Native reviewer has read it" }]);
    expect(needs[0].question).toBeUndefined();
  });
});
