import { describe, expect, it } from "vitest";
import { HELP_ARTICLES } from "@/lib/help-articles";
import {
  TUTORIAL_SCRIPTS,
  missingTutorialScripts,
  tutorialScriptFor,
} from "@/lib/tutorial-scripts";

// The tutorial library can be complete or explicitly unwritten, never silently missing: a help
// article with no script entry fails here, which is what keeps the placeholder list honest as
// articles are added.

describe("tutorial scripts cover every help article", () => {
  it("has an entry for each help article (add a placeholder() line when you add an article)", () => {
    expect(missingTutorialScripts(HELP_ARTICLES.map((a) => a.slug))).toEqual([]);
  });

  it("has no duplicate entries", () => {
    const slugs = TUTORIAL_SCRIPTS.map((s) => s.helpSlug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("script shape", () => {
  it("a ready script has steps, and each step has a screen and narration", () => {
    const ready = TUTORIAL_SCRIPTS.filter((s) => s.status === "ready");
    expect(ready.length).toBeGreaterThan(0);
    for (const script of ready) {
      expect(script.steps.length).toBeGreaterThan(0);
      for (const step of script.steps) {
        expect(step.screen.trim().length).toBeGreaterThan(0);
        expect(step.narration.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("a placeholder carries NO invented narration", () => {
    for (const script of TUTORIAL_SCRIPTS.filter((s) => s.status === "placeholder")) {
      expect(script.steps).toHaveLength(0);
    }
  });

  it("the vetting-approval script exists and walks both roles", () => {
    const script = tutorialScriptFor("vetting-and-coming-soon");
    expect(script?.status).toBe("ready");
    const text = script!.steps.map((s) => s.narration).join(" ");
    // Instructors cannot self-approve; the script must say so rather than implying they can.
    expect(text).toMatch(/cannot mark your own course vetted/i);
    expect(text).toMatch(/vetting queue|Mark vetted/i);
  });
});
