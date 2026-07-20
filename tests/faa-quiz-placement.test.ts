import { describe, expect, it } from "vitest";
import { sequenceModuleItems, type ModuleItemPlan } from "../scripts/lib/faa-quiz-placement";

// Render a plan into a compact, readable token stream so the ORDER is asserted directly:
//   L<n> = lesson n, R = review, Q<i>@<n|end> = quiz index i placed after lesson n (or module end).
function render(plan: ModuleItemPlan[]): string[] {
  return plan.map((p) =>
    p.kind === "lesson"
      ? `L${p.lessonNumber}`
      : p.kind === "review"
        ? "R"
        : `Q${p.quizIndex}@${p.afterLessonNumber ?? "end"}`,
  );
}

// No quiz may be dropped or duplicated, whatever the tags say.
function quizIndicesPlaced(plan: ModuleItemPlan[]): number[] {
  return plan.filter((p) => p.kind === "quiz").map((p) => (p as { quizIndex: number }).quizIndex);
}

describe("sequenceModuleItems", () => {
  it("with nothing tagged, keeps the legacy layout: lessons, review, then all quizzes at the end", () => {
    // Module 2's real shape today: 12 lessons + review + 3 untagged quizzes.
    const plan = sequenceModuleItems(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      [undefined, undefined, undefined],
      true,
    );
    expect(render(plan)).toEqual([
      "L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "L11", "L12",
      "R",
      "Q0@end", "Q1@end", "Q2@end",
    ]);
  });

  it("interleaves a tagged quiz right after its lesson (Module 2 worked example)", () => {
    // Worked example from plans/user-tasks/171: the two definitions/basics quizzes follow
    // lesson 8, the Operations-Over-People quiz follows lesson 12 — splitting the long module.
    const plan = sequenceModuleItems(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      [8, 8, 12], // Regulation Quiz, Regulation Quiz 1, Regulation Quiz 4
      true,
    );
    expect(render(plan)).toEqual([
      "L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8",
      "Q0@8", "Q1@8", // two quizzes after lesson 8 keep input order
      "L9", "L10", "L11", "L12",
      "Q2@12",
      "R", // review stays last
    ]);
    // Every quiz placed exactly once, none lost.
    expect(quizIndicesPlaced(plan).sort((a, b) => a - b)).toEqual([0, 1, 2]);
  });

  it("keeps a single mid-module quiz mid-module", () => {
    const plan = sequenceModuleItems([1, 2, 3, 4, 5, 6], [3], false);
    expect(render(plan)).toEqual(["L1", "L2", "L3", "Q0@3", "L4", "L5", "L6"]);
  });

  it("falls back to the module end when a tag names a lesson the module does not have", () => {
    // after=99 is not a lesson in this module -> unresolved -> end (never silently dropped).
    const plan = sequenceModuleItems([1, 2, 3], [99], true);
    expect(render(plan)).toEqual(["L1", "L2", "L3", "R", "Q0@end"]);
    expect(quizIndicesPlaced(plan)).toEqual([0]);
  });

  it("mixes interleaved and end-placed quizzes, preserving input order within each group", () => {
    const plan = sequenceModuleItems([1, 2, 3, 4], [2, undefined, 2, undefined], true);
    expect(render(plan)).toEqual([
      "L1", "L2",
      "Q0@2", "Q2@2", // both tagged to lesson 2, input order preserved
      "L3", "L4",
      "R",
      "Q1@end", "Q3@end", // untagged, input order preserved, at the end
    ]);
    expect(quizIndicesPlaced(plan).sort((a, b) => a - b)).toEqual([0, 1, 2, 3]);
  });

  it("never drops or duplicates a quiz for any tag combination", () => {
    const lessons = [1, 2, 3, 4, 5];
    const tagSets: (number | null | undefined)[][] = [
      [],
      [1, 2, 3, 4, 5],
      [5, 4, 3, 2, 1],
      [null, undefined, 3, 99, 1],
      [1, 1, 1],
    ];
    for (const tags of tagSets) {
      for (const hasReview of [true, false]) {
        const plan = sequenceModuleItems(lessons, tags, hasReview);
        expect(quizIndicesPlaced(plan).sort((a, b) => a - b)).toEqual(tags.map((_t, i) => i));
      }
    }
  });
});
