import { describe, expect, it } from "vitest";
import { effectiveCompletions, effectiveQuizScore, latestOverrides, type OverrideRow } from "@/lib/overrides";

// Grade overrides (plans/66): the append-only, latest-wins, display-only contract. The learner's
// real values pass through untouched unless an override applies, and every applied override
// carries the marker data a surface must render.

const row = (over: Partial<OverrideRow>): OverrideRow => ({
  id: over.id ?? "o1",
  courseId: "C1",
  lessonId: null,
  kind: "quiz_score",
  value: "85",
  reason: "fire drill retake",
  teacherUserId: "T",
  createdAt: new Date("2026-08-18T10:00:00Z"),
  ...over,
});

describe("latestOverrides", () => {
  it("keeps the newest row per (course, lesson, kind): corrections are new rows, not edits", () => {
    const map = latestOverrides([
      row({ id: "old", value: "70", createdAt: new Date("2026-08-17T10:00:00Z") }),
      row({ id: "new", value: "85", createdAt: new Date("2026-08-18T10:00:00Z") }),
    ]);
    expect(map.get("C1||quiz_score")?.id).toBe("new");
  });

  it("keys courses, lessons, and kinds independently", () => {
    const map = latestOverrides([
      row({ id: "a" }),
      row({ id: "b", courseId: "C2" }),
      row({ id: "c", kind: "course_complete", value: null }),
      row({ id: "d", kind: "lesson_complete", lessonId: "L1", value: null }),
    ]);
    expect(map.size).toBe(4);
  });
});

describe("effectiveQuizScore", () => {
  it("passes the real value through untouched with no override", () => {
    expect(effectiveQuizScore(72, new Map(), "C1")).toEqual({ effective: 72, original: 72 });
  });

  it("applies the override and carries the marker (reason, teacher, date)", () => {
    const map = latestOverrides([row({})]);
    const r = effectiveQuizScore(72, map, "C1");
    expect(r.effective).toBe(85);
    expect(r.original).toBe(72);
    expect(r.adjusted?.reason).toBe("fire drill retake");
  });

  it("never leaks an override across courses", () => {
    const map = latestOverrides([row({})]);
    expect(effectiveQuizScore(60, map, "C2").adjusted).toBeUndefined();
  });

  it("overrides a null original (no attempt yet) too", () => {
    const map = latestOverrides([row({})]);
    const r = effectiveQuizScore(null, map, "C1");
    expect(r.effective).toBe(85);
    expect(r.original).toBeNull();
  });
});

describe("effectiveCompletions", () => {
  it("adds overridden lessons without double-counting really-completed ones", () => {
    const map = latestOverrides([
      row({ id: "a", kind: "lesson_complete", lessonId: "L1", value: null }),
      row({ id: "b", kind: "lesson_complete", lessonId: "L2", value: null }),
    ]);
    const r = effectiveCompletions(new Set(["L1", "L3"]), map, "C1");
    expect(r.originalCount).toBe(2);
    expect(r.effectiveCount).toBe(3); // L2 added; L1 already real
    expect(r.adjustedLessons).toHaveLength(2);
  });

  it("reports course_complete as display metadata, never as a count change", () => {
    const map = latestOverrides([row({ kind: "course_complete", value: null })]);
    const r = effectiveCompletions(new Set(["L1"]), map, "C1");
    expect(r.effectiveCount).toBe(1);
    expect(r.courseMarkedComplete?.reason).toBe("fire drill retake");
  });
});
