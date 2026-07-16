import { describe, expect, it } from "vitest";
import {
  extractReveals,
  findRevealByPromptIndex,
  isRevealPromptIndex,
  matchReveal,
  normalizeRevealPrompt,
  revealKey,
  revealPromptIndex,
} from "@/lib/reveals";

/**
 * THE IDENTITY EVERY `:::reveal` SELF-GRADE IS STORED UNDER.
 *
 * Grades reuse recall_attempts with no migration by claiming the negative half of
 * prompt_index: sign = discriminator (card vs check), magnitude = prompt hash. If any of
 * these properties break, a learner's history silently splits or collides:
 *   • stable across sessions and whitespace edits (or history fragments),
 *   • distinct per question (or two checks share one history row),
 *   • always negative and inside int4 (or the insert throws / collides with cards),
 *   • reversible against today's lesson body (or the dashboard can't name the item).
 */

const BODY = [
  "# Weather",
  "Some prose about METARs.",
  ":::reveal What does METAR stand for? ||| Meteorological Aerodrome Report.",
  "More prose.",
  ":::reveal Class G ceiling below 1,200 ft AGL — day VFR visibility? ||| 1 statute mile.",
  ":::tool metrics-tracker | Try it",
].join("\n");

describe("extractReveals", () => {
  it("finds every reveal, in order, with question and answer split on |||", () => {
    const reveals = extractReveals(BODY);
    expect(reveals).toEqual([
      { question: "What does METAR stand for?", answer: "Meteorological Aerodrome Report." },
      { question: "Class G ceiling below 1,200 ft AGL — day VFR visibility?", answer: "1 statute mile." },
    ]);
  });

  it("ignores prose, other directives, and empty/missing bodies", () => {
    expect(extractReveals("plain text\n:::tool something")).toEqual([]);
    expect(extractReveals("")).toEqual([]);
    expect(extractReveals(null)).toEqual([]);
    expect(extractReveals(undefined)).toEqual([]);
  });
});

describe("reveal identity (promptIndex)", () => {
  it("is always negative — the discriminator that keeps reveals apart from recall cards", () => {
    for (const q of ["a", "What does METAR stand for?", "x".repeat(500)]) {
      expect(revealPromptIndex(q)).toBeLessThan(0);
      expect(isRevealPromptIndex(revealPromptIndex(q))).toBe(true);
    }
    // Recall cards live at >= 0 and must never be mistaken for reveals.
    expect(isRevealPromptIndex(0)).toBe(false);
    expect(isRevealPromptIndex(7)).toBe(false);
  });

  it("fits int4: within [-(2^28), -1]", () => {
    for (const q of ["", "short", "a much longer question with unicode — ✓ 中文 émojis 🚁", "x".repeat(2000)]) {
      const idx = revealPromptIndex(q);
      expect(idx).toBeGreaterThanOrEqual(-(2 ** 28));
      expect(idx).toBeLessThanOrEqual(-1);
      expect(Number.isInteger(idx)).toBe(true);
    }
  });

  it("is stable across sessions and whitespace-only edits — history must aggregate", () => {
    const a = revealPromptIndex("What does METAR stand for?");
    expect(revealPromptIndex("What does METAR stand for?")).toBe(a);
    expect(revealPromptIndex("  What  does METAR\tstand for?  ")).toBe(a);
  });

  it("differs for different questions — two checks must not share one history row", () => {
    const qs = extractReveals(BODY).map((r) => revealPromptIndex(r.question));
    expect(new Set(qs).size).toBe(qs.length);
    expect(revealPromptIndex("Question A?")).not.toBe(revealPromptIndex("Question B?"));
  });

  it("changes when the wording changes — an edited question is honestly a new item", () => {
    expect(revealPromptIndex("What is a METAR?")).not.toBe(revealPromptIndex("What is a TAF?"));
  });

  it("revealKey is the 28-bit magnitude behind it", () => {
    const q = "What does METAR stand for?";
    expect(revealPromptIndex(q)).toBe(-(revealKey(q) + 1));
    expect(revealKey(q)).toBeGreaterThanOrEqual(0);
    expect(revealKey(q)).toBeLessThan(2 ** 28);
  });
});

describe("round-trips the dashboard and API depend on", () => {
  it("findRevealByPromptIndex maps a stored index back to today's question text", () => {
    const [first, second] = extractReveals(BODY);
    expect(findRevealByPromptIndex(BODY, revealPromptIndex(first.question))).toEqual(first);
    expect(findRevealByPromptIndex(BODY, revealPromptIndex(second.question))).toEqual(second);
  });

  it("findRevealByPromptIndex is null for edited-away questions and for card indexes", () => {
    expect(findRevealByPromptIndex(BODY, revealPromptIndex("A question that was deleted?"))).toBeNull();
    expect(findRevealByPromptIndex(BODY, 0)).toBeNull(); // a card index is not a reveal
  });

  it("matchReveal verifies a learner-submitted prompt against the body, whitespace-insensitively", () => {
    expect(matchReveal(BODY, "What  does METAR stand for? ")?.answer).toBe("Meteorological Aerodrome Report.");
    expect(matchReveal(BODY, "Not in this lesson?")).toBeNull();
    expect(matchReveal(BODY, "   ")).toBeNull();
    expect(matchReveal(null, "What does METAR stand for?")).toBeNull();
  });

  it("normalizeRevealPrompt collapses whitespace and trims — nothing else", () => {
    expect(normalizeRevealPrompt("  a\t b\n c  ")).toBe("a b c");
    expect(normalizeRevealPrompt("Case Matters?")).toBe("Case Matters?");
  });
});
