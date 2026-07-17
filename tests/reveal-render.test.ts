import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { LessonBody } from "@/components/lesson-body";
import { Reveal, RevealAnswerPanel } from "@/components/reveal";

/**
 * WHAT A `:::reveal` ACTUALLY RENDERS — in a lesson, signed in, signed out, and in a preview.
 *
 * The component fix is what covers "check other courses too": every course's reveals render
 * through LessonBody → Reveal, so these tests render real reveals through that pipeline and pin
 * the three states that matter:
 *   • signed-in (canTrack): the answer is followed by the "I got it / Missed it" self-grade,
 *   • signed-out in a lesson: the reveal still works; grading is a sign-in nudge, never an error,
 *   • outside a lesson (no ids, e.g. a preview): no grading UI and no nudge at all.
 */

const BODY = [
  "Some prose.",
  ":::reveal What does METAR stand for? ||| Meteorological Aerodrome Report.",
  "Middle prose.",
  ":::reveal Who signs a Part 107 waiver? ||| The FAA.",
].join("\n");

describe("LessonBody renders reveals from course content", () => {
  it("renders a couple of reveals — question shown, answer hidden behind a button", () => {
    const html = renderToStaticMarkup(
      createElement(LessonBody, { text: BODY, courseId: "c1", lessonId: "l1", trackRecall: true }),
    );
    expect(html).toContain("What does METAR stand for?");
    expect(html).toContain("Who signs a Part 107 waiver?");
    expect(html.match(/Show answer/g)).toHaveLength(2);
    // Answers stay hidden until the learner tries.
    expect(html).not.toContain("Meteorological Aerodrome Report.");
    expect(html).not.toContain("The FAA.");
  });

  it("renders reveals even with no course context (previews) — the check itself never breaks", () => {
    const html = renderToStaticMarkup(createElement(LessonBody, { text: BODY }));
    expect(html.match(/Check yourself/g)).toHaveLength(2);
    expect(html.match(/Show answer/g)).toHaveLength(2);
  });
});

describe("the revealed state (RevealAnswerPanel)", () => {
  const base = { question: "What does METAR stand for?", answer: "Meteorological Aerodrome Report." };

  it("signed in, in a lesson: shows the answer AND the self-grade with accessible labels", () => {
    const html = renderToStaticMarkup(
      createElement(RevealAnswerPanel, { ...base, courseId: "c1", lessonId: "l1", canTrack: true }),
    );
    expect(html).toContain("Meteorological Aerodrome Report.");
    expect(html).toContain("Did you get it?");
    expect(html).toContain("I got it");
    expect(html).toContain("Missed it");
    expect(html).toContain(`aria-label="I got it: ${base.question}"`);
    expect(html).toContain(`aria-label="Missed it: ${base.question}"`);
  });

  it("signed out, in a lesson: the answer shows, grading is a sign-in nudge — never an error", () => {
    const html = renderToStaticMarkup(
      createElement(RevealAnswerPanel, { ...base, courseId: "c1", lessonId: "l1", canTrack: false }),
    );
    expect(html).toContain("Meteorological Aerodrome Report.");
    expect(html).not.toContain("Did you get it?");
    expect(html).not.toContain("I got it");
    expect(html).toContain("Sign in");
    expect(html).toContain("/login");
  });

  it("outside a lesson (no ids): just the answer — no grading, no nudge", () => {
    const html = renderToStaticMarkup(createElement(RevealAnswerPanel, { ...base, canTrack: true }));
    expect(html).toContain("Meteorological Aerodrome Report.");
    expect(html).not.toContain("Did you get it?");
    expect(html).not.toContain("Sign in");
  });
});

describe("the collapsed state (Reveal)", () => {
  it("keeps the original behaviour: question + Show answer, nothing tracked yet", () => {
    const html = renderToStaticMarkup(
      createElement(Reveal, {
        question: "What does METAR stand for?",
        answer: "Meteorological Aerodrome Report.",
        courseId: "c1",
        lessonId: "l1",
        canTrack: true,
      }),
    );
    expect(html).toContain("Check yourself");
    expect(html).toContain("Show answer");
    expect(html).not.toContain("Meteorological Aerodrome Report.");
  });
});
