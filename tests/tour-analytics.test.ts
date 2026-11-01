import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ANALYTICS_APP, EVENTS } from "@/lib/analytics/events";

// Tours from the field product events (plans/96 section 8, BAM 2026-11-01 Q5), held to the shared
// PostHog project's rules (witus lib/analytics/INTEGRATE.md): snake_case, object first, verb past
// tense, no app name in the event (the `app` super property carries it), sent through capture(), and
// ids and kinds only.

const TOUR_EVENTS = {
  lessonTourPublished: "lesson_tour_published",
  lessonTourRemoved: "lesson_tour_removed",
  lessonTourCreditEdited: "lesson_tour_credit_edited",
  tourViewerOpened: "tour_viewer_opened",
} as const;

const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

describe("tour events", () => {
  it("are registered with the names in the PRD", () => {
    for (const [key, name] of Object.entries(TOUR_EVENTS)) expect(EVENTS[key as keyof typeof EVENTS]).toBe(name);
  });

  it("follow the shared project's naming rules", () => {
    for (const name of Object.values(EVENTS)) {
      expect(name).toMatch(/^[a-z]+(_[a-z]+)+$/);
      expect(name.startsWith(`${ANALYTICS_APP}_`)).toBe(false);
      expect(name).not.toMatch(/witus|learn/);
    }
  });

  it("are sent through capture() with ids and kinds only, never a URL or a credit", () => {
    const sites: [string, string][] = [
      ["src/components/field-log/use-in-lesson.tsx", "EVENTS.lessonTourPublished"],
      ["src/components/remove-tour-button.tsx", "EVENTS.lessonTourRemoved"],
      ["src/components/teach-tour-actions.tsx", "EVENTS.lessonTourCreditEdited"],
      ["src/components/tour-panorama.tsx", "EVENTS.tourViewerOpened"],
    ];
    for (const [file, event] of sites) {
      const code = src(file);
      expect(code, file).not.toContain("posthog");
      const at = code.indexOf(`capture(${event}`);
      expect(at, `${file} sends ${event}`).toBeGreaterThan(-1);
      // The property object only (after the event name, which itself may say "credit").
      const call = code.slice(at + `capture(${event}`.length);
      const props = call.slice(0, call.indexOf("});") + 3);
      expect(props, file).not.toMatch(/url|src|credit|subject|note|title|email|name/i);
    }
  });
});
