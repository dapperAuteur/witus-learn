import { describe, expect, it } from "vitest";
import { allSeedEntries } from "../scripts/lib/seed-registry";

// The registry is what the lint guards (series codes, standards, citations) and the course index
// (scripts/data/README.md, `pnpm gen:course-index`) read. Loop-registered courses used to come back
// with no category, because the loop's seedAuthoredCourse call holds it ("Civics" for all 48 state
// courses); the index would then have shown 73 courses as uncategorised.
describe("seed registry", () => {
  const entries = allSeedEntries();

  it("finds the whole catalog, once each", () => {
    expect(entries.length).toBeGreaterThan(300);
    expect(new Set(entries.map((e) => e.slug)).size).toBe(entries.length);
  });

  it("gives every registered course a category, including loop-registered ones", () => {
    expect(entries.filter((e) => !e.category).map((e) => `${e.file}:${e.slug}`)).toEqual([]);
    expect(entries.find((e) => e.slug === "state-civics-wy")?.category).toBe("Civics");
    expect(entries.find((e) => e.slug === "river-the-dead-zone")?.category).toBe("Rivers & Expeditions");
  });

  it("reads extra categories", () => {
    expect(entries.find((e) => e.slug === "who-were-the-computers")?.additionalCategories).toEqual([
      "AI & Technology",
      "Science & Math",
    ]);
  });
});
