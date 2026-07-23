import { describe, expect, it } from "vitest";
import {
  cleanLessonMarkdown,
  extractQaPairs,
  liftCarriedForward,
  splitOutro,
  splitQaRun,
} from "../scripts/lib/faa-lesson-markdown";

/**
 * THE RULE THIS SUITE PROTECTS.
 *
 * A module review is a rapid-fire quiz. Every question in it must reach the learner with its
 * answer HIDDEN, either as a `:::reveal` check or as a recall card, so the learner tries to
 * recall before they read. Shipping a review question as prose publishes the answer directly
 * under its own question, which is the one failure the whole conversion exists to prevent. This
 * is FAA test prep, so the other half of the rule is just as load-bearing: a question converts
 * only when a REAL answer is recoverable from the source. Never a placeholder, never a guess.
 *
 * Both regressions below shipped to /bam/faa-part-107/lesson/m2-review and were learner-reported.
 */

/** The shape every module review from 2 on ends with, minus the eight questions in between. */
const CARRIED_FORWARD_INLINE = `# Module 3 Review: Airport Operations

Goal: lock in the module.

[TEACH]
Question one. What is the Part 107 altitude limit?

[Beat]

400 feet above the ground.

## Sources
- 14 CFR 107.51

## Carried Forward (earlier modules)

Before we start Airport Operations, here are two facts from earlier modules the FAA loves to test.

What causes a wing to stall, and does adding weight change that point? [Beat] A stall happens at the critical angle of attack. That angle stays the same no matter how heavy the aircraft is. (Module 1)

After an accident, how fast must you report to the FAA? [Beat] Within 10 calendar days, not business days. (Module 2)
`;

/** Module 11's layout: the prompt, a bare [Beat], then the answer, each its own paragraph. */
const CARRIED_FORWARD_BLOCKS = `# Module 11 Review: Procedures and Maintenance

Goal: lock in the module.

## Carried Forward (earlier modules)

Quick recall before we dig into procedures and maintenance. Answer out loud, then check yourself.

How many days do you have to report a serious accident to the FAA?

[Beat]

Ten calendar days. That counts every day of the week, not just business days. (Module 2)

What is the altitude ceiling for a Part 107 flight?

[Beat]

400 feet above the ground. It follows the terrain. (Module 5)
`;

describe("liftCarriedForward", () => {
  it("turns the inline `<prompt> [Beat] <answer>` layout into recall cards", () => {
    const { pairs, unconverted } = liftCarriedForward(CARRIED_FORWARD_INLINE);
    expect(unconverted).toBe(0);
    expect(pairs).toEqual([
      {
        prompt: "What causes a wing to stall, and does adding weight change that point?",
        answer:
          "A stall happens at the critical angle of attack. That angle stays the same no matter how heavy the aircraft is. (Module 1)",
      },
      {
        prompt: "After an accident, how fast must you report to the FAA?",
        answer: "Within 10 calendar days, not business days. (Module 2)",
      },
    ]);
  });

  it("turns the paragraph layout (prompt / bare [Beat] / answer) into recall cards", () => {
    const { pairs, unconverted } = liftCarriedForward(CARRIED_FORWARD_BLOCKS);
    expect(unconverted).toBe(0);
    expect(pairs).toEqual([
      {
        prompt: "How many days do you have to report a serious accident to the FAA?",
        answer:
          "Ten calendar days. That counts every day of the week, not just business days. (Module 2)",
      },
      {
        prompt: "What is the altitude ceiling for a Part 107 flight?",
        answer: "400 feet above the ground. It follows the terrain. (Module 5)",
      },
    ]);
  });

  it("strips module 2's `Question one.` counting from the prompt", () => {
    const md = `# Module 2 Review

## Carried Forward (earlier modules)

A fast lap back through Module 1.

Question one. What causes a wing to stall? [Beat] Exceeding the critical angle of attack. (Module 1)
`;
    expect(liftCarriedForward(md).pairs).toEqual([
      { prompt: "What causes a wing to stall?", answer: "Exceeding the critical angle of attack. (Module 1)" },
    ]);
  });

  it("removes the whole section, heading and intro included, once every question converted", () => {
    const { body } = liftCarriedForward(CARRIED_FORWARD_INLINE);
    // RecallPlayer supplies its own heading and instructions, so leaving these behind would
    // publish an empty section at the end of the lesson.
    expect(body).not.toMatch(/Carried Forward/);
    expect(body).not.toMatch(/Before we start Airport Operations/);
    expect(body).not.toMatch(/critical angle of attack/);
    // Everything before the section is untouched.
    expect(body).toMatch(/## Sources/);
    expect(body).toMatch(/14 CFR 107\.51/);
  });

  it("leaves the section alone, and reports it, when an answer cannot be recovered", () => {
    // A question with a beat but nothing after it. Inventing an answer here would cost a learner
    // a real exam, so the block stays as prose and says so.
    const md = `# Module 4 Review

## Carried Forward (earlier modules)

Two from earlier.

What is the Part 107 altitude limit? [Beat] 400 feet above the ground. (Module 5)

What is MULTICOM's frequency? [Beat]
`;
    const { body, pairs, unconverted } = liftCarriedForward(md);
    expect(pairs).toEqual([]);
    expect(unconverted).toBe(1);
    expect(body).toBe(md);
  });

  it("is a no-op on markdown with no Carried Forward section", () => {
    const md = "# Module 1 Review\n\nGoal: lock it in.\n\n## Sources\n- 14 CFR 107.3\n";
    expect(liftCarriedForward(md)).toEqual({ body: md, pairs: [], unconverted: 0 });
  });
});

describe("splitQaRun: a run's FIRST prompt on the line under its beat tag", () => {
  // The `^` anchor in LEAD_IN_RE matched only index 0 of the searched string, and a beat segment
  // always begins with the newline that followed `[TEACH]`. So "Question one." never matched, the
  // run started at "Question two.", and question one plus its answer stayed in the head, published
  // as prose with the answer in plain sight. Every module review opens this way.
  const RUN = `
Question one. What is the weight cutoff for a small unmanned aircraft under Part 107?

[Beat]

Less than fifty-five pounds at takeoff, including everything on board.

Question two. How many days do you have to report an accident to the FAA?

[Beat]

Ten calendar days.
`;

  it("starts the run at question one, not question two", () => {
    const { head, pairs } = splitQaRun(RUN);
    expect(pairs.map((p) => p.prompt)).toEqual([
      "What is the weight cutoff for a small unmanned aircraft under Part 107?",
      "How many days do you have to report an accident to the FAA?",
    ]);
    expect(pairs[0].answer).toBe(
      "Less than fifty-five pounds at takeoff, including everything on board.",
    );
    // Nothing of question one is left behind to publish as prose.
    expect(head.trim()).toBe("");
  });

  it("still keeps genuine intro prose out of the first question", () => {
    const { head, pairs } = splitQaRun(`This is a rapid-fire review. Two questions.\n${RUN}`);
    expect(head.trim()).toBe("This is a rapid-fire review. Two questions.");
    expect(pairs).toHaveLength(2);
  });

  it("does not chop an answer that enumerates mid-sentence", () => {
    // "…the next question…" inside an answer must not start a new item.
    const pairs = extractQaPairs(
      "Question one. What do you check first? [Beat] The battery. If it looks fine, move to the next question without worrying.",
    );
    expect(pairs).toHaveLength(1);
    expect(pairs[0].answer).toBe(
      "The battery. If it looks fine, move to the next question without worrying.",
    );
  });
});

describe("splitOutro", () => {
  it("cuts a sign-off that names no module number", () => {
    // Module 2's review ends "That's the module." The old pattern demanded a digit after the
    // word, so the outro rode along on the end of the final, correct answer.
    const { qa, outro } = splitOutro(
      "Yes, and ten calendar days. That's a textbook test question. That's the module. The numbers are the whole game here.",
    );
    expect(qa.trim()).toBe("Yes, and ten calendar days. That's a textbook test question.");
    expect(outro).toBe("That's the module. The numbers are the whole game here.");
  });

  it("still cuts the numbered forms", () => {
    expect(splitOutro("Lift, weight, thrust, and drag. That's Module 1.").outro).toBe(
      "That's Module 1.",
    );
    expect(splitOutro("Ten calendar days. Next up is Module 3, Airport Operations.").outro).toBe(
      "Next up is Module 3, Airport Operations.",
    );
  });
});

describe("cleanLessonMarkdown", () => {
  it("publishes a review with no answer sitting in prose under its own question", () => {
    const cleaned = cleanLessonMarkdown(CARRIED_FORWARD_INLINE, { review: true });
    // The carried-forward questions became recall cards, hidden until the learner reveals.
    expect(cleaned.recall.map((c) => c.prompt)).toEqual([
      "What causes a wing to stall, and does adding weight change that point?",
      "After an accident, how fast must you report to the FAA?",
    ]);
    // The [TEACH] run's first question became a check, not prose.
    expect(cleaned.reveals).toBe(1);
    expect(cleaned.body).toMatch(/^:::reveal What is the Part 107 altitude limit\? \|\|\| 400 feet/m);
    expect(cleaned.unconvertedQa).toBe(0);
    // No answer text survives in the body, and no stage cue either (GUIDE-01).
    expect(cleaned.body).not.toMatch(/critical angle of attack/);
    expect(cleaned.body).not.toMatch(/\[Beat\]|\[TEACH\]/);
  });

  it("leaves an ordinary lesson's carried-forward-shaped prose alone", () => {
    // Only a review opts into the Q/A conversions; a normal lesson's prose is prose.
    const cleaned = cleanLessonMarkdown(CARRIED_FORWARD_INLINE);
    expect(cleaned.recall).toEqual([]);
    expect(cleaned.body).toMatch(/Carried Forward/);
  });

  it("keeps `:::reveal` lines to the one-line, one-delimiter shape the renderer needs", () => {
    // lesson-body.tsx matches REVEAL_RE per LINE, so a card that wraps or carries a second
    // delimiter renders as raw text with the answer showing.
    const cleaned = cleanLessonMarkdown(CARRIED_FORWARD_INLINE, { review: true });
    const lines = cleaned.body.split("\n").filter((l) => l.startsWith(":::reveal"));
    expect(lines.length).toBe(cleaned.reveals);
    for (const line of lines) {
      expect((line.match(/\|\|\|/g) ?? []).length).toBe(1);
      expect(line).toMatch(/^:::reveal\s+.+?\s*\|\|\|\s*.+$/);
    }
  });
});
