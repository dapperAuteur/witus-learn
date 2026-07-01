import { describe, expect, it } from "vitest";
import { courseToRecordingScript, markdownToNarration } from "@/lib/narration";

describe("markdownToNarration", () => {
  it("strips the Sources block and markdown, keeping prose", () => {
    const md = `**Hoodoo** is a *folk* tradition — see \`rootwork\`.

- One point
- Two points

## Sources
- Chireau, Y. (2003). Black magic.`;
    const out = markdownToNarration(md);
    expect(out).toContain("Hoodoo is a folk tradition");
    expect(out).toContain("One point");
    expect(out).not.toContain("Sources");
    expect(out).not.toContain("Chireau");
    expect(out).not.toContain("**");
    expect(out).not.toContain("`");
  });

  it("turns the warning glyph into a spoken cue and flattens links/wikilinks/headings", () => {
    const md = `# 1 · The Constitution

⚠️ Confirm at [the site](https://x.gov) and [[us-states]].`;
    const out = markdownToNarration(md);
    expect(out).toContain("1 · The Constitution");
    expect(out).toContain("Note: Confirm at the site and us-states");
    expect(out).not.toContain("http");
    expect(out).not.toContain("[[");
  });

  it("can drop Check-yourself prompts when asked", () => {
    const md = `Body text.\n\n**Check yourself.** Name two things.`;
    expect(markdownToNarration(md)).toContain("Check yourself");
    expect(markdownToNarration(md, { keepCheckYourself: false })).not.toContain("Check yourself");
  });
});

describe("courseToRecordingScript", () => {
  it("assembles per-lesson headers, section markers, and pause cues", () => {
    const script = courseToRecordingScript("Test Course", [
      { title: "Intro", body: "Welcome.", section: "Start" },
      { title: "Quiz", body: null, section: "Start" },
    ]);
    expect(script).toContain("Recording script — Test Course");
    expect(script).toContain("----- SECTION: Start -----");
    expect(script).toContain("=== Lesson 1: Intro ===");
    expect(script).toContain("Welcome.");
    expect(script).toContain("=== Lesson 2: Quiz ===");
    expect(script).toContain("[No narration");
    expect(script).toContain("[PAUSE]");
  });
});
