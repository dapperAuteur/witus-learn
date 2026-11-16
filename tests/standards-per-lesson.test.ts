import { describe, expect, it } from "vitest";
import { lessonSlugErrors, perLessonStatus } from "../scripts/lib/standards-per-lesson";
import { PER_LESSON_STANDARDS_BASELINE } from "../scripts/lib/per-lesson-standards-baseline";
import { ALIGNMENTS } from "../src/lib/standards/index";
import type { CourseClaim } from "../src/lib/standards/types";

/**
 * Rubric v1.7 gate D6 (2026-11-16): standards per lesson. A claim may name, per course, the lesson
 * slugs that teach it (`lessonSlugs`); scripts/check-standards-coverage.ts requires it of every aligned
 * course not on the 2026-11-16 baseline and checks every slug resolves. These pin the status, the data
 * errors, and that existing claims (none of which carry lessonSlugs yet) resolve exactly as before.
 */

const claim = (id: string, courseSlugs: string[], lessonSlugs?: Record<string, string[]>): CourseClaim => ({
  id,
  claim: "c",
  courseSlugs,
  lessons: ["prose evidence"],
  ...(lessonSlugs ? { lessonSlugs } : {}),
});

describe("per-lesson status", () => {
  it("course level when no claim names a lesson of the course, even with prose lessons", () => {
    expect(perLessonStatus("a", [claim("x", ["a"]), claim("y", ["a", "b"], { b: ["b1"] })])).toEqual({
      slug: "a",
      status: "course-level",
      claims: 2,
      claimsWithLessons: 0,
    });
  });

  it("partial when some claims name lessons, per lesson when all do", () => {
    const claims = [claim("x", ["a"], { a: ["a1"] }), claim("y", ["a"])];
    expect(perLessonStatus("a", claims).status).toBe("partial");
    expect(perLessonStatus("a", [claims[0], claim("y", ["a"], { a: ["a2"] })]).status).toBe("per-lesson");
  });

  it("an empty list does not count as naming a lesson", () => {
    expect(perLessonStatus("a", [claim("x", ["a"], { a: [] })]).status).toBe("course-level");
  });
});

describe("lessonSlugs data errors", () => {
  const lessonsOf = new Map([["a", new Set(["a1", "a2"])]]);

  it("a key that is not one of the claim's courses, and a slug the course does not have", () => {
    expect(lessonSlugErrors([claim("x", ["a"], { a: ["a1", "nope"], z: ["z1"] })], lessonsOf)).toEqual([
      'x: "a" has no lesson with slug "nope"',
      'x: lessonSlugs names "z", which is not in this claim\'s courseSlugs',
    ]);
  });

  it("a course not readable on this machine is not checked", () => {
    expect(lessonSlugErrors([claim("x", ["b"], { b: ["anything"] })], lessonsOf)).toEqual([]);
  });
});

describe("existing alignments", () => {
  it("carry lessonSlugs only for their own courses", () => {
    for (const a of ALIGNMENTS) {
      for (const course of Object.keys(a.lessonSlugs ?? {})) expect(a.courseSlugs).toContain(course);
    }
  });
});

describe("the committed baseline", () => {
  it("is unique, sorted, and never grows past the 332 courses registered on 2026-11-16", () => {
    expect(new Set(PER_LESSON_STANDARDS_BASELINE).size).toBe(PER_LESSON_STANDARDS_BASELINE.length);
    expect([...PER_LESSON_STANDARDS_BASELINE]).toEqual([...PER_LESSON_STANDARDS_BASELINE].sort((a, b) => a.localeCompare(b)));
    expect(PER_LESSON_STANDARDS_BASELINE.length).toBeLessThanOrEqual(332);
  });
});
