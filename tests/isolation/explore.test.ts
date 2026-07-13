import { describe, expect, it } from "vitest";
import { summarizeMap } from "@/db/queries/explore";
import type { MapBelt, MapCommodity } from "@/db/schema";

// The /explore landing page states figures ("N episodes", "N origins", "N countries") to
// parents and teachers. These are the guards that those figures describe the ROWS and
// nothing else — no rounding up, no borrowing, no inventing. summarizeMap is pure, so this
// runs in the offline suite.

function commodity(over: Partial<MapCommodity> = {}): MapCommodity {
  return {
    id: crypto.randomUUID(),
    tenantId: "11111111-1111-1111-1111-111111111111",
    courseId: null,
    seasonNumber: 1,
    episodeLabel: null,
    name: "Coffee",
    geo: "Ethiopian highlands",
    lat: 9,
    lon: 40,
    color: null,
    isHome: false,
    summary: null,
    sortOrder: 0,
    createdAt: new Date(0),
    updatedAt: new Date(0),
    ...over,
  };
}

function belt(over: Partial<MapBelt> = {}): MapBelt {
  return {
    id: crypto.randomUUID(),
    tenantId: "11111111-1111-1111-1111-111111111111",
    commodityId: null,
    name: "Coffee belt",
    seasonNumber: 1,
    color: null,
    latMin: -25,
    latMax: 25,
    description: null,
    producers: null,
    productionCountryCodes: [231, 404],
    fallbackBbox: null,
    sortOrder: 0,
    ...over,
  };
}

describe("summarizeMap — the numbers on /explore describe the rows, exactly", () => {
  it("counts one episode per pin", () => {
    const s = summarizeMap([commodity(), commodity({ name: "Tea" })], []);
    expect(s.commodities).toBe(2);
  });

  it("de-duplicates origins so two pins from the same place are one origin", () => {
    const s = summarizeMap(
      [
        commodity({ geo: "West Africa" }),
        commodity({ name: "Cocoa", geo: "west africa " }), // same place, different casing/space
        commodity({ name: "Kava", geo: "Vanuatu" }),
      ],
      [],
    );
    expect(s.origins).toBe(2);
  });

  it("never counts a missing origin", () => {
    const s = summarizeMap([commodity({ geo: null }), commodity({ name: "Tea", geo: "  " })], []);
    expect(s.origins).toBe(0);
    expect(s.commodities).toBe(2);
  });

  it("counts distinct seasons", () => {
    const s = summarizeMap(
      [commodity({ seasonNumber: 1 }), commodity({ seasonNumber: 1 }), commodity({ seasonNumber: 2 }), commodity({ seasonNumber: null })],
      [],
    );
    expect(s.seasons).toBe(2);
  });

  it("counts belt countries by distinct ISO code, not by belt", () => {
    const s = summarizeMap(
      [],
      [
        belt({ productionCountryCodes: [231, 404] }),
        belt({ productionCountryCodes: [404, 566] }), // 404 already counted
        belt({ productionCountryCodes: null }),
      ],
    );
    expect(s.belts).toBe(3);
    expect(s.beltCountries).toBe(3); // 231, 404, 566
  });

  it("an empty map reports zeroes — it never fakes a populated curriculum", () => {
    expect(summarizeMap([], [])).toEqual({
      commodities: 0,
      origins: 0,
      seasons: 0,
      belts: 0,
      beltCountries: 0,
    });
  });
});
