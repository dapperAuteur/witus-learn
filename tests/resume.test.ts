import { describe, expect, it } from "vitest";
import { selectResume } from "@/lib/resume";

// A 20-lesson course, in order: L1 … L20.
const course = Array.from({ length: 20 }, (_, i) => ({ id: `L${i + 1}`, title: `Lesson ${i + 1}` }));
const done = (...ids: string[]) => new Set(ids);

describe("selectResume", () => {
  it("THE SKIP-AROUND CASE: sends a learner back to the lesson they were on, not to their first gap", () => {
    // They skipped ahead to lesson 20 and left it unfinished; lesson 3 is still incomplete.
    // The old "first incomplete in course order" rule would drag them back to lesson 3.
    const { lesson } = selectResume(course, done("L1", "L2", "L4"), "L20");
    expect(lesson?.id).toBe("L20");
    expect(lesson?.id).not.toBe("L3");
  });

  it("starts a brand-new learner at lesson 1", () => {
    const { lesson } = selectResume(course, done(), null);
    expect(lesson?.id).toBe("L1");
  });

  it("falls back to the first incomplete lesson when nothing has ever been opened", () => {
    // No last_viewed_at (e.g. progress predates the column) → the old behaviour, which is
    // still the right answer when "where they left off" is genuinely unknown.
    const { lesson } = selectResume(course, done("L1", "L2"), null);
    expect(lesson?.id).toBe("L3");
  });

  it("rolls forward after the last-viewed lesson is completed, instead of bouncing to an earlier gap", () => {
    // Left lesson 3 unfinished, then went and FINISHED lesson 10 → continue at 11, not back at 3.
    const { lesson } = selectResume(course, done("L1", "L2", "L10"), "L10");
    expect(lesson?.id).toBe("L11");
  });

  it("returns to a part-way lesson even when every earlier lesson is done", () => {
    const { lesson } = selectResume(course, done("L1", "L2", "L3"), "L4");
    expect(lesson?.id).toBe("L4");
  });

  it("falls back to an earlier gap only when there is nothing left after the last-viewed lesson", () => {
    // Finished the final lesson; the only thing left is the lesson-3 gap.
    const everythingButL3 = done(...course.filter((l) => l.id !== "L3").map((l) => l.id));
    const { lesson } = selectResume(course, everythingButL3, "L20");
    expect(lesson?.id).toBe("L3");
  });

  it("ignores a last-viewed lesson that is no longer in the course (unpublished / deleted)", () => {
    const { lesson } = selectResume(course, done("L1"), "L-gone");
    expect(lesson?.id).toBe("L2");
  });

  it("has nothing to resume once the course is complete", () => {
    const all = done(...course.map((l) => l.id));
    expect(selectResume(course, all, "L20")).toEqual({ lesson: null, upNext: [] });
  });

  it("handles an empty course without throwing", () => {
    expect(selectResume([], done(), null)).toEqual({ lesson: null, upNext: [] });
  });

  it("VIEWED IS NOT COMPLETED: opening a lesson never makes it count as done", () => {
    // The learner has viewed L20 but completed nothing. It stays the resume target (they were
    // there) and stays unfinished — completion is decided ONLY by the completed set.
    const completed = done();
    const { lesson } = selectResume(course, completed, "L20");
    expect(lesson?.id).toBe("L20");
    expect(completed.has("L20")).toBe(false);
    // …and it is still listed as work remaining.
    expect(course.filter((l) => !completed.has(l.id))).toHaveLength(20);
  });
});

describe("selectResume — up next", () => {
  it("leads with the resume lesson, then the following unfinished lessons in course order", () => {
    const { upNext } = selectResume(course, done("L1", "L2", "L4"), "L3");
    expect(upNext.map((l) => l.id)).toEqual(["L3", "L5", "L6"]);
  });

  it("leads with the skipped-ahead lesson, so the dashboard's Continue button matches it", () => {
    // The dashboard uses upNext[0] as its Continue target — it must agree with `lesson`.
    const { lesson, upNext } = selectResume(course, done("L1", "L2", "L4"), "L20");
    expect(upNext[0]?.id).toBe("L20");
    expect(upNext[0]?.id).toBe(lesson?.id);
  });

  it("respects the limit and never pads past the end of the course", () => {
    const { upNext } = selectResume(course, done(...course.slice(0, 18).map((l) => l.id)), "L19");
    expect(upNext.map((l) => l.id)).toEqual(["L19", "L20"]);
  });
});
