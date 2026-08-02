import { describe, expect, it } from "vitest";
import {
  ASSESSMENT_RULES,
  RULE_SUMMARY,
  isClosedSetNumericAnswer,
  positionalExplanationHit,
  positionalOptionHit,
  proseSelfCheckHit,
} from "@/lib/assessment-fit";

/**
 * THE RULES THAT GATE `pnpm lint` VIA scripts/check-assessment-fit.ts.
 *
 * A guard whose predicate silently stops matching is worse than no guard: it reports "0 violations"
 * forever and every reviewer believes the corpus is clean. That is the same false-green failure
 * class plans/app-improvements/feedback-triage.md caught in the health endpoints. So both halves
 * are pinned here: each rule must still FIRE on the shape it was written for, and must still stay
 * QUIET on the near-miss prose that would otherwise make it noise nobody reads.
 *
 * The negative cases are real strings from the catalog, not invented ones.
 */

describe("positional-explanation (options are re-shuffled on every attempt)", () => {
  it("fires on an explanation that names an option by position", () => {
    expect(positionalExplanationHit("The first option is wrong because it reverses the direction.")).toBe(
      "The first option",
    );
    expect(positionalExplanationHit("The last choice reverses the substitution.")).toBe("The last choice");
    expect(positionalExplanationHit("The second option is IMSAFE, a pilot fitness checklist.")).toBe(
      "The second option",
    );
    expect(positionalExplanationHit("Option B names the wrong chamber.")).toBe("Option B");
  });

  it("keeps the slot letter uppercase, so the indefinite article is not a slot", () => {
    // "option a tariff threat cannot touch" must not read as "option A".
    expect(positionalExplanationHit("An owner has a third choice a tariff cannot touch.")).toBeNull();
    expect(positionalExplanationHit("Pick the option a beginner would reach for.")).toBeNull();
  });

  it("stays quiet on prose that merely counts choices in the world", () => {
    // Real catalog line: an owner's third course of action, not a screen slot.
    expect(
      positionalExplanationHit("An owner always has a third option a tariff threat cannot touch: leave."),
    ).toBeNull();
    // "the first answer" means the model's first reply throughout the AI courses.
    expect(positionalExplanationHit("Treat the first answer as a draft and ask for changes.")).toBeNull();
    expect(positionalExplanationHit("Indiana adopted its current constitution in 1851.")).toBeNull();
    expect(positionalExplanationHit(null)).toBeNull();
  });
});

describe("positional-option (an option that points at the other options)", () => {
  it("fires on order-dependent option text", () => {
    expect(positionalOptionHit("All of the above")).toBe("All of the above");
    expect(positionalOptionHit("None of the above")).toBe("None of the above");
    expect(positionalOptionHit("Both A and C")).toBe("Both A and C");
  });

  it("stays quiet on ordinary options that happen to say 'above' or 'both'", () => {
    // Real catalog options: standalone statements, order-independent.
    expect(positionalOptionHit("Both of these institutions were founded in the early 1990s")).toBeNull();
    expect(positionalOptionHit("None of these soaps use any olive oil at all")).toBeNull();
    expect(positionalOptionHit("Vote for 'None of These Candidates' in statewide races")).toBeNull();
  });
});

describe("closed-set-fill-in (a typed drill graded by string equality)", () => {
  it("fires when every accepted answer is bare digits", () => {
    // The Indiana complaint, verbatim in shape.
    expect(isClosedSetNumericAnswer("1851")).toBe(true);
    expect(isClosedSetNumericAnswer("1936", ["36"])).toBe(true);
    expect(isClosedSetNumericAnswer("2,653", ["2653", "2,653"])).toBe(true);
    expect(isClosedSetNumericAnswer("54.0", ["54", "54.0"])).toBe(true);
  });

  it("stays quiet when any accepted answer is a word the learner must produce", () => {
    expect(isClosedSetNumericAnswer("hierarchy")).toBe(false);
    expect(isClosedSetNumericAnswer("few", ["few-shot", "fewshot", "multishot"])).toBe(false);
    // One spellable variant is enough: the drill is then testing production, not a number.
    expect(isClosedSetNumericAnswer("5000", ["five thousand"])).toBe(false);
    expect(isClosedSetNumericAnswer("A lontra é muito paciente.")).toBe(false);
  });
});

describe("prose-self-check (a question nobody grades)", () => {
  it("fires on an unconverted check-yourself beat", () => {
    expect(proseSelfCheckHit("**Check yourself.** Which chamber has 50 members?")).toBe(
      "Which chamber has 50 members?",
    );
    expect(proseSelfCheckHit("**Quick check** Why does the shuffle break a position hint?")).toBe(
      "Why does the shuffle break a position hint?",
    );
  });

  it("stays quiet on prose that only DESCRIBES the convention", () => {
    // Real catalog line: a course-overview paragraph, not a question.
    expect(
      proseSelfCheckHit(
        "Every content lesson ends with a **Check yourself** prompt and a cited **## Sources** list.",
      ),
    ).toBeNull();
    // An already-converted card is a directive, never this shape.
    expect(proseSelfCheckHit(":::reveal Which chamber has 50 members? ||| The Senate.")).toBeNull();
    expect(proseSelfCheckHit("**Try it.** Rewrite this so it sounds like a person.")).toBeNull();
  });
});

describe("rule metadata", () => {
  it("every rule carries a summary the failure output can print", () => {
    for (const rule of ASSESSMENT_RULES) {
      expect(RULE_SUMMARY[rule], rule).toBeTruthy();
    }
    expect(Object.keys(RULE_SUMMARY).sort()).toEqual([...ASSESSMENT_RULES].sort());
  });
});
