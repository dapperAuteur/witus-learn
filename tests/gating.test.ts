import { describe, expect, it } from "vitest";
import { isFreeCourse, lessonAccess } from "@/lib/gating";

// vettedAt is set on both fixtures: an unvetted course locks every lesson (see the
// "unvetted course" cases below), which would otherwise mask what these tests measure.
const VETTED = new Date("2026-07-29T00:00:00Z");
const free = { isPublished: true, isSequential: false, priceType: "free", price: "0", vettedAt: VETTED };
const paid = { isPublished: true, isSequential: false, priceType: "one_time", price: "10", vettedAt: VETTED };
const lesson = (over: Partial<{ id: string; isPublished: boolean; isFreePreview: boolean }> = {}) => ({
  id: "L",
  isPublished: true,
  isFreePreview: false,
  ...over,
});
const ctx = (over: Partial<Parameters<typeof lessonAccess>[2]> = {}) => ({
  isEditor: false,
  isEnrolled: false,
  completedLessonIds: new Set<string>(),
  orderedLessonIds: ["L"],
  ...over,
});

describe("lessonAccess", () => {
  it("editor sees everything, even drafts", () => {
    expect(
      lessonAccess({ ...paid, isPublished: false }, lesson({ isPublished: false }), ctx({ isEditor: true })).open,
    ).toBe(true);
  });

  it("unpublished lesson is a draft for non-editors", () => {
    expect(lessonAccess(free, lesson({ isPublished: false }), ctx()).reason).toBe("draft");
  });

  it("free preview is open even on a paid course", () => {
    expect(lessonAccess(paid, lesson({ isFreePreview: true }), ctx()).open).toBe(true);
  });

  it("free course is open; paid course locks non-preview lessons", () => {
    expect(lessonAccess(free, lesson(), ctx()).open).toBe(true);
    expect(lessonAccess(paid, lesson(), ctx()).reason).toBe("locked");
  });

  it("enrollment unlocks a paid course", () => {
    expect(lessonAccess(paid, lesson(), ctx({ isEnrolled: true })).open).toBe(true);
  });

  it("sequential locks a lesson until prior lessons are complete", () => {
    const seq = { ...free, isSequential: true };
    const ordered = ["A", "B"];
    const b = lesson({ id: "B" });
    expect(lessonAccess(seq, b, ctx({ orderedLessonIds: ordered })).reason).toBe("sequential");
    expect(
      lessonAccess(seq, b, ctx({ orderedLessonIds: ordered, completedLessonIds: new Set(["A"]) })).open,
    ).toBe(true);
  });

  it("unvetted course locks lessons for a stranger, even a free preview", () => {
    const unvetted = { ...free, vettedAt: null };
    expect(lessonAccess(unvetted, lesson(), ctx()).reason).toBe("unvetted");
    expect(lessonAccess(unvetted, lesson({ isFreePreview: true }), ctx()).reason).toBe("unvetted");
  });

  it("unvetted course stays open to an existing enrollee and to an editor", () => {
    const unvetted = { ...free, vettedAt: null };
    expect(lessonAccess(unvetted, lesson(), ctx({ isEnrolled: true })).open).toBe(true);
    expect(lessonAccess(unvetted, lesson(), ctx({ isEditor: true })).open).toBe(true);
  });

  it("isFreeCourse", () => {
    expect(isFreeCourse(free)).toBe(true);
    expect(isFreeCourse(paid)).toBe(false);
  });
});
