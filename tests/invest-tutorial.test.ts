import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { buildInvestTutorialCourse, chapterLessons, slugify, splitChapter } from "../scripts/lib/invest-tutorial";
import { INVEST_TUTORIAL_TERMS } from "../scripts/lib/invest-tutorial-terms";
import { loadLocalPrivateCourse } from "../scripts/lib/course-export-input";

const CHAPTER = [
  "# Chapter 07: Sign in",
  "",
  "**Starts from:** tag `v06a`. **Ends at:** tag `v07`.",
  "",
  "## What you will learn",
  "",
  "- PKCE.",
  "",
  "## Steps",
  "",
  "### 07.1 Settings",
  "",
  "```toml",
  "# This comment is not a heading",
  "## Nor is this one",
  "key = 1",
  "```",
  "",
  "````md",
  "```",
  "## still inside the outer fence",
  "```",
  "````",
  "",
  "## If you get stuck",
  "",
  "- Browse: https://github.com/example/repo/tree/v07",
  "",
].join("\n");

const TERMS = [{ term: "PKCE", definition: "A hash on the way out and the secret on the way back." }];

describe("splitChapter", () => {
  it("splits at level-2 headings and never inside a fence", () => {
    const c = splitChapter(CHAPTER);
    expect(c.title).toBe("Chapter 07: Sign in");
    expect(c.preamble).toBe("**Starts from:** tag `v06a`. **Ends at:** tag `v07`.");
    expect(c.sections.map((s) => s.heading)).toEqual(["What you will learn", "Steps", "If you get stuck"]);
  });

  it("keeps fenced code and ### steps byte for byte in their section", () => {
    const steps = splitChapter(CHAPTER).sections[1].body;
    expect(steps).toContain("### 07.1 Settings");
    expect(steps).toContain("```toml\n# This comment is not a heading\n## Nor is this one\nkey = 1\n```");
    expect(steps).toContain("````md\n```\n## still inside the outer fence\n```\n````");
  });

  it("refuses an unclosed fence rather than swallowing the rest of the chapter", () => {
    expect(() => splitChapter("# T\n\n## A\n\n```py\nx = 1\n")).toThrow(/unclosed code fence/);
  });
});

describe("chapterLessons", () => {
  it("puts the preamble on the first lesson, keeps links, and ends with Key Terms", () => {
    const lessons = chapterLessons({ number: "07", markdown: CHAPTER }, TERMS);
    expect(lessons.map((l) => l.slug)).toEqual([
      "ch07-what-you-will-learn",
      "ch07-steps",
      "ch07-if-you-get-stuck",
      "ch07-key-terms",
    ]);
    expect(lessons.every((l) => l.section === "Chapter 07: Sign in")).toBe(true);
    expect(lessons[0].body?.startsWith("**Starts from:**")).toBe(true);
    expect(lessons[2].body).toContain("Browse: https://github.com/example/repo/tree/v07");
    expect(lessons[3].title).toBe("07 · Key terms");
    expect(lessons[3].body).toContain("- **PKCE**: A hash on the way out");
  });

  it("refuses a chapter with no key terms", () => {
    expect(() => chapterLessons({ number: "07", markdown: CHAPTER }, [])).toThrow(/no key terms/);
  });

  it("builds a course whose lesson slugs are unique across chapters", () => {
    const course = buildInvestTutorialCourse(
      { title: "T", description: "D" },
      [
        { number: "06", markdown: CHAPTER },
        { number: "07", markdown: CHAPTER },
      ],
      () => TERMS,
    );
    expect(new Set(course.lessons.map((l) => l.slug)).size).toBe(course.lessons.length);
    expect(new Set(course.lessons.map((l) => l.section)).size).toBe(1);
  });
});

describe("slugify", () => {
  it("makes a short ASCII slug", () => {
    expect(slugify("Before the code: what the vendors say")).toBe("before-the-code-what-the-vendors-say");
    expect(slugify("a ".repeat(80)).length).toBeLessThanOrEqual(60);
  });
});

describe("the Key Terms list", () => {
  it("gives every chapter one-sentence definitions with no em or en dashes", () => {
    for (const [chapter, terms] of Object.entries(INVEST_TUTORIAL_TERMS)) {
      expect(terms.length, chapter).toBeGreaterThanOrEqual(5);
      for (const t of terms) {
        expect(t.definition, `${chapter} ${t.term}`).toMatch(/\.$/);
        expect(t.definition.slice(0, -1), `${chapter} ${t.term}`).not.toMatch(/[.!?]\s+[A-Z]/);
        expect(`${t.term} ${t.definition}`).not.toMatch(/[–—]/);
      }
    }
  });
});

describe("loadLocalPrivateCourse", () => {
  it("finds a course by the slug inside the file and skips files that do not parse", () => {
    const dir = mkdtempSync(join(tmpdir(), "private-courses-"));
    writeFileSync(join(dir, "broken.json"), "{ not json");
    writeFileSync(
      join(dir, "any-file-name.json"),
      JSON.stringify({ slug: "wanted", course: { title: "W", description: "", lessons: [{ slug: "a", title: "A" }] } }),
    );
    expect(loadLocalPrivateCourse("wanted", dir)?.title).toBe("W");
    expect(loadLocalPrivateCourse("absent", dir)).toBeNull();
    expect(loadLocalPrivateCourse("wanted", join(dir, "nope"))).toBeNull();
  });
});
