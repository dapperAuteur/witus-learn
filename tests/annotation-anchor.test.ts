import { describe, expect, it } from "vitest";
import { findQuoteMatch } from "@/lib/annotation-anchor";
import { blockIdForText, hastText } from "@/lib/block-id";

// The anchoring contract (plans/61 §2): a stored quote either re-finds its exact passage or
// honestly fails (→ the orphan state). These tests pin the matching semantics the highlight
// layer relies on, plus the content-derived block ids the renderer stamps.

describe("blockIdForText", () => {
  it("is stable across whitespace and wrapping changes", () => {
    const a = blockIdForText("The vocal folds blow apart and snap back.");
    const b = blockIdForText("The vocal folds\nblow apart   and snap back.");
    expect(a).toBe(b);
    expect(a).toMatch(/^b[0-9a-f]{8}$/);
  });

  it("changes when the text changes", () => {
    expect(blockIdForText("one sentence")).not.toBe(blockIdForText("another sentence"));
  });

  it("returns null for whitespace-only content", () => {
    expect(blockIdForText("  \n\t ")).toBeNull();
  });

  it("derives from content, not position: identical blocks share an id by construction", () => {
    expect(blockIdForText("repeated paragraph")).toBe(blockIdForText("repeated paragraph"));
  });
});

describe("hastText", () => {
  it("concatenates nested text values in document order", () => {
    const node = {
      type: "element",
      children: [
        { type: "text", value: "breath is " },
        { type: "element", children: [{ type: "text", value: "the power" }] },
        { type: "text", value: " source" },
      ],
    };
    expect(hastText(node)).toBe("breath is the power source");
  });
});

describe("findQuoteMatch", () => {
  const block =
    "Support is not pressure. Support is a steady, managed exhale from the torso, with the throat left out of the job.";

  it("finds an exact quote", () => {
    const m = findQuoteMatch(block, { quote: "steady, managed exhale" });
    expect(m).not.toBeNull();
    expect(block.slice(m!.start, m!.end)).toBe("steady, managed exhale");
  });

  it("survives reflowed whitespace in the block", () => {
    const reflowed = block.replace("managed exhale", "managed\n  exhale");
    const m = findQuoteMatch(reflowed, { quote: "steady, managed exhale" });
    expect(m).not.toBeNull();
  });

  it("returns null when the passage was rewritten (the orphan state)", () => {
    expect(findQuoteMatch(block, { quote: "a calm, supported breath" })).toBeNull();
  });

  it("uses context to pick between duplicate occurrences", () => {
    const dup = "Say it once. The word appears here. Then again: the word appears here, at the end.";
    const first = findQuoteMatch(dup, {
      quote: "word appears here",
      contextPrefix: "Say it once. The ",
      contextSuffix: ". Then again",
    });
    const second = findQuoteMatch(dup, {
      quote: "word appears here",
      contextPrefix: "Then again: the ",
      contextSuffix: ", at the end",
    });
    expect(first).not.toBeNull();
    expect(second).not.toBeNull();
    expect(first!.start).toBeLessThan(second!.start);
    expect(second!.start).toBeGreaterThan(dup.indexOf("Then again"));
  });

  it("escapes regex metacharacters in quotes", () => {
    const text = "The ratio (2:1) is what matters most.";
    const m = findQuoteMatch(text, { quote: "(2:1) is what" });
    expect(m).not.toBeNull();
    expect(text.slice(m!.start, m!.end)).toBe("(2:1) is what");
  });

  it("with a single occurrence, ignores stale context rather than failing", () => {
    const m = findQuoteMatch(block, {
      quote: "managed exhale",
      contextPrefix: "this context no longer exists",
      contextSuffix: "neither does this",
    });
    expect(m).not.toBeNull();
  });
});
