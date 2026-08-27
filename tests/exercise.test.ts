import { describe, expect, it } from "vitest";
import { checkExerciseAnswer, type ExerciseItem } from "@/lib/exercise";

// A tonal orthography opts in to strict grading: in Ewe, Twi and Igbo the tone mark is part of
// which word this is, so a wrong tone is a different word rather than a spelling slip. The
// permissive default stays right for the four shipped Romance-language courses.
describe("diacriticsAreMeaningful (tonal orthographies)", () => {
  const tonal: ExerciseItem = { prompt: "Write it", answer: "ɖù", diacriticsAreMeaningful: true };
  const spanish: ExerciseItem = { prompt: "Write it", answer: "está" };

  it("still marks an exact answer correct", () => {
    expect(checkExerciseAnswer(tonal, "ɖù")).toBe("correct");
  });

  it("marks a wrong tone incorrect, not close, because it is a different word", () => {
    expect(checkExerciseAnswer(tonal, "ɖu")).toBe("incorrect");
  });

  it("leaves the Romance default alone: an accent slip is still close", () => {
    expect(checkExerciseAnswer(spanish, "esta")).toBe("close");
    expect(checkExerciseAnswer(spanish, "está")).toBe("correct");
  });
});
