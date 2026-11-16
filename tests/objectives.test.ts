import { describe, expect, it } from "vitest";
import {
  briefDate,
  objectiveProblems,
  readLessonObjectives,
  toLessonObjectives,
} from "../src/lib/lesson-objectives";
import { evaluateObjectives } from "../scripts/lib/objectives-check";
import { OBJECTIVES_BASELINE } from "../scripts/lib/objectives-baseline";
import type { AuthoredCourse, AuthoredLesson } from "../scripts/data/authored-course";

/**
 * Rubric v1.7 gate D10 (2026-11-16): objectives and success criteria per lesson. These pin what the
 * seeder stores, what the lesson page reads back, and the check's scope: a course on the baseline is
 * excused until it is complete, every other course must carry them, and present fields are checked
 * everywhere.
 */

const good: AuthoredLesson = {
  slug: "pit-stop",
  title: "Pit stop",
  body: "text",
  objectives: [{ text: "Time a pit stop from video", standardCode: "6.DS.1" }],
  successCriteria: ["You can state the stop's length to the tenth of a second"],
};
const bare: AuthoredLesson = { slug: "bare", title: "Bare", body: "text" };
const course = (...lessons: AuthoredLesson[]): AuthoredCourse => ({ title: "T", description: "D", lessons });

describe("what the seeder stores", () => {
  it("null when a lesson names neither, so the earlier catalog stores nothing", () => {
    expect(toLessonObjectives(bare)).toBeNull();
    expect(toLessonObjectives({ objectives: [{ text: "  " }], successCriteria: [""] })).toBeNull();
  });

  it("trimmed objectives with their codes, and the criteria", () => {
    expect(toLessonObjectives({ objectives: [{ text: " Read a timing sheet ", standardCode: " " }], successCriteria: ["x"] })).toEqual({
      objectives: [{ text: "Read a timing sheet" }],
      successCriteria: ["x"],
    });
    expect(toLessonObjectives(good)?.objectives[0].standardCode).toBe("6.DS.1");
  });
});

describe("what the lesson page reads back", () => {
  it("ignores anything that is not the stored shape", () => {
    expect(readLessonObjectives(null)).toBeNull();
    expect(readLessonObjectives("text")).toBeNull();
    expect(readLessonObjectives({ objectives: [{ nope: 1 }], successCriteria: [3] })).toBeNull();
  });

  it("returns what the seeder wrote", () => {
    const stored = toLessonObjectives(good);
    expect(readLessonObjectives(JSON.parse(JSON.stringify(stored)))).toEqual(stored);
  });
});

describe("one lesson against the gate", () => {
  it("required: one to three objectives and at least one success criterion", () => {
    expect(objectiveProblems(good, true)).toEqual([]);
    expect(objectiveProblems(bare, true)).toEqual(["no objectives (one to three)", "no success criteria (at least one)"]);
    const four = { ...good, objectives: [1, 2, 3, 4].map((n) => ({ text: `o${n}` })) };
    expect(objectiveProblems(four, true)).toEqual(["4 objectives (at most 3)"]);
  });

  it("not required: absent is fine, malformed is not", () => {
    expect(objectiveProblems(bare, false)).toEqual([]);
    expect(objectiveProblems({ objectives: [{ text: "" }], successCriteria: [" "] }, false)).toEqual([
      "an objective has no text",
      "a success criterion is empty",
    ]);
  });
});

describe("the brief date in a course file's header", () => {
  it("the first date on a Brief: line, in either header style", () => {
    expect(briefDate("// Brief: plans/future-courses/history/2026-11-20-x-brief.md\nconst a = 1;")).toBe("2026-11-20");
    expect(briefDate("/**\n * BRIEF: cloud-briefs/crew-05/00-approved-brief.md (approved by BAM 2026-10-21)\n */")).toBe("2026-10-21");
    expect(briefDate("// Sources checked 2026-11-30\nexport const C = {};")).toBeNull();
  });
});

describe("the check's scope", () => {
  const base = { source: "", claimedCodes: new Set(["6.DS.1"]) };

  it("a course on the baseline is excused while incomplete, and complete when every lesson passes", () => {
    const partial = evaluateObjectives({ ...base, slug: "old", course: course(good, bare), excused: new Set(["old"]) });
    expect(partial).toMatchObject({ inScope: false, complete: false, problems: [], withObjectives: 1, lessons: 2 });
    const done = evaluateObjectives({ ...base, slug: "old", course: course(good), excused: new Set(["old"]) });
    expect(done.complete).toBe(true);
  });

  it("a course not on the baseline must carry them on every lesson", () => {
    const r = evaluateObjectives({ ...base, slug: "new", course: course(good, bare), excused: new Set() });
    expect(r.inScope).toBe(true);
    expect(r.problems).toEqual(["bare: no objectives (one to three)", "bare: no success criteria (at least one)"]);
  });

  it("a listed course whose brief is dated on or after 2026-11-16 is in scope anyway", () => {
    const source = "// Brief: plans/future-courses/x/2026-11-16-speedway-v2-brief.md\n";
    const r = evaluateObjectives({ ...base, source, slug: "old", course: course(bare), excused: new Set(["old"]) });
    expect(r.inScope).toBe(true);
    expect(r.problems.length).toBe(2);
  });

  it("an objective may only name a standard code the course claims", () => {
    const wrong = { ...good, objectives: [{ text: "Do it", standardCode: "9.ZZ.9" }] };
    const r = evaluateObjectives({ ...base, slug: "old", course: course(wrong), excused: new Set(["old"]) });
    expect(r.problems).toEqual([
      'pit-stop: objective names standard "9.ZZ.9", which this course does not claim (pnpm standards:for old)',
    ]);
  });
});

describe("the committed baseline", () => {
  it("is unique, sorted, and never grows past the 332 courses registered on 2026-11-16", () => {
    expect(new Set(OBJECTIVES_BASELINE).size).toBe(OBJECTIVES_BASELINE.length);
    expect([...OBJECTIVES_BASELINE]).toEqual([...OBJECTIVES_BASELINE].sort((a, b) => a.localeCompare(b)));
    expect(OBJECTIVES_BASELINE.length).toBeLessThanOrEqual(332);
  });
});
