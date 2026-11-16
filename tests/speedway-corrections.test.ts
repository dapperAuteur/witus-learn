import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { applyOne, applySpeedwayCorrections, SPEEDWAY_CORRECTIONS } from "../scripts/lib/speedway-corrections";
import type { AuthoredCourse } from "../scripts/data/authored-course";

// The generated course text is gitignored, so these tests run on a small stand-in course. When the
// generated module is present (BAM's machine), the last test also applies every correction to it.

const fixture = (): AuthoredCourse => ({
  title: "T",
  description: "D",
  lessons: [
    { slug: "a", title: "A", body: "One. Old claim. Two." },
    {
      slug: "q",
      title: "Q",
      quiz: {
        passingScore: 70,
        questions: [{ prompt: "P?", options: ["x", "y"], correctIndex: 0, explanation: "Old claim." }],
      },
    },
  ],
});

describe("speedway corrections", () => {
  it("replaces a body text that appears once and leaves the input untouched", () => {
    const course = fixture();
    const out = applySpeedwayCorrections(course, [
      { lesson: "a", target: { kind: "body" }, find: "Old claim.", replace: "New claim.", why: "" },
    ]);
    expect(out.lessons[0].body).toBe("One. New claim. Two.");
    expect(course.lessons[0].body).toBe("One. Old claim. Two.");
  });

  it("edits only the explanation of the named question, never its prompt", () => {
    const out = applySpeedwayCorrections(fixture(), [
      { lesson: "q", target: { kind: "explanation", prompt: "P?" }, find: "Old", replace: "New", why: "" },
    ]);
    const q = out.lessons[1].quiz!.questions[0];
    expect(q.explanation).toBe("New claim.");
    expect(q.prompt).toBe("P?");
  });

  it("is a no-op when the source text was already fixed", () => {
    expect(applyOne("Already New claim.", { find: "Old claim.", replace: "New claim." }, "x")).toBe("Already New claim.");
  });

  it("throws when the text to fix is missing, or appears more than once", () => {
    expect(() => applyOne("Nothing here.", { find: "Old", replace: "New" }, "x")).toThrow(/found it 0 time/);
    expect(() => applyOne("Old and Old.", { find: "Old", replace: "New" }, "x")).toThrow(/found it 2 time/);
  });

  it("carries no em or en dash in any corrected text", () => {
    for (const c of SPEEDWAY_CORRECTIONS) expect(c.replace).not.toMatch(/[–—]/);
  });

  it.runIf(existsSync("scripts/data/speedway-course.ts"))("applies every correction to the generated course", async () => {
    const { SPEEDWAY_COURSE } = await import("../scripts/data/speedway-course-corrected");
    const e1 = SPEEDWAY_COURSE.lessons.find((l) => l.slug === "e1-the-race-that-started-it-all-1911")!;
    expect(e1.body).toContain("Say it right: Harroun is pronounced");
    expect(e1.body).toContain("363 days a year");
    expect(e1.body).not.toContain("first rearview mirror ever mounted on an automobile");
  });
});
