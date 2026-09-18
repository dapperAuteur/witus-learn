import { describe, expect, it } from "vitest";
import {
  MAX_ADDITIONAL_CATEGORIES,
  courseCategoryNames,
  isInCategory,
  normalizeAdditionalCategories,
  renameInAdditional,
} from "@/lib/course-categories";

describe("normalizeAdditionalCategories", () => {
  it("trims, drops blanks and keeps first-seen order", () => {
    expect(normalizeAdditionalCategories("Civics", ["  Culture & History ", "", "   ", "Careers & Media"])).toEqual([
      "Culture & History",
      "Careers & Media",
    ]);
  });

  it("drops the course's own primary category, which would double-count it", () => {
    expect(normalizeAdditionalCategories("Careers & Media", ["Careers & Media", "Culture & History"])).toEqual([
      "Culture & History",
    ]);
  });

  it("drops exact duplicates but NOT case variants, since category names match exactly everywhere", () => {
    expect(normalizeAdditionalCategories(null, ["Civics", "Civics", "civics"])).toEqual(["Civics", "civics"]);
  });

  it(`caps the list at ${MAX_ADDITIONAL_CATEGORIES}`, () => {
    const many = Array.from({ length: 9 }, (_, i) => `C${i}`);
    expect(normalizeAdditionalCategories(null, many)).toHaveLength(MAX_ADDITIONAL_CATEGORIES);
  });

  it("tolerates null and undefined input", () => {
    expect(normalizeAdditionalCategories(undefined, undefined)).toEqual([]);
    expect(normalizeAdditionalCategories(null, null)).toEqual([]);
  });
});

describe("courseCategoryNames and isInCategory", () => {
  const soulTrain = { category: "Careers & Media", additionalCategories: ["Culture & History"] };

  it("lists the primary first, then the extras", () => {
    expect(courseCategoryNames(soulTrain)).toEqual(["Careers & Media", "Culture & History"]);
  });

  it("finds a course under its primary AND under an additional category", () => {
    expect(isInCategory(soulTrain, "Careers & Media")).toBe(true);
    expect(isInCategory(soulTrain, "Culture & History")).toBe(true);
    expect(isInCategory(soulTrain, "Civics")).toBe(false);
  });

  it("handles an uncategorised course that still has extras", () => {
    expect(courseCategoryNames({ category: null, additionalCategories: ["Civics"] })).toEqual(["Civics"]);
  });

  it("handles a row from before the column existed", () => {
    expect(courseCategoryNames({ category: "Civics" })).toEqual(["Civics"]);
  });
});

describe("renameInAdditional", () => {
  it("returns null when the renamed category is not in the list, so the caller skips the write", () => {
    expect(renameInAdditional("A", ["B"], "Z", "Y")).toBeNull();
  });

  it("renames in place", () => {
    expect(renameInAdditional("A", ["B", "C"], "B", "D")).toEqual(["D", "C"]);
  });

  it("removes the entry when the rename collides with the primary", () => {
    expect(renameInAdditional("A", ["B"], "B", "A")).toEqual([]);
  });

  it("removes the duplicate when the rename collides with another extra", () => {
    expect(renameInAdditional("A", ["B", "C"], "B", "C")).toEqual(["C"]);
  });
});
