import { describe, expect, it } from "vitest";
import {
  NEUTRAL_REGION_FILL,
  aiannhTitle,
  atlasFeatureKey,
  legendColors,
  regionFill,
  usAtlasOf,
} from "@/lib/map-atlas";

// The lesson-map choropleth join (plans/49). These pin the two rules the component leans on: which
// atlas a lesson's regions load (US topojson files are lazy, so a wrong answer here either bloats a
// world lesson or renders a blank US map), and how a lesson-authored feature id is normalised to
// the key the atlas actually uses (a silent join miss renders NOTHING for that region, invisibly).

describe("usAtlasOf", () => {
  it("returns undefined for no regions, so a marker-only lesson stays a world map", () => {
    expect(usAtlasOf(undefined)).toBeUndefined();
    expect(usAtlasOf([])).toBeUndefined();
  });

  it("returns undefined when every region is the world atlas (explicit or default)", () => {
    expect(usAtlasOf([{ featureId: "840" }, { featureId: "250", atlas: "world" }])).toBeUndefined();
  });

  it("picks the first US atlas a region declares", () => {
    expect(usAtlasOf([{ featureId: "18", atlas: "us-states" }])).toBe("us-states");
    expect(usAtlasOf([{ featureId: "18097", atlas: "us-counties" }])).toBe("us-counties");
    expect(usAtlasOf([{ featureId: "2430", atlas: "us-aiannh" }])).toBe("us-aiannh");
  });

  it("lets the FIRST US region decide when a lesson mixes atlases (one lesson, one map)", () => {
    expect(
      usAtlasOf([
        { featureId: "840", atlas: "world" },
        { featureId: "2430", atlas: "us-aiannh" },
        { featureId: "18", atlas: "us-states" },
      ]),
    ).toBe("us-aiannh");
  });
});

describe("atlasFeatureKey", () => {
  it("leaves world ids alone (the atlas ships zero-padded 3-digit strings already)", () => {
    expect(atlasFeatureKey("world", "840")).toBe("840");
    expect(atlasFeatureKey("world", "76")).toBe("76");
  });

  it("pads a state FIPS to 2 digits so '1' and '01' both find Alabama", () => {
    expect(atlasFeatureKey("us-states", "1")).toBe("01");
    expect(atlasFeatureKey("us-states", "18")).toBe("18");
  });

  it("pads a county FIPS to 5 digits (us-atlas keys counties as '04015', not '4015')", () => {
    expect(atlasFeatureKey("us-counties", "4015")).toBe("04015");
    expect(atlasFeatureKey("us-counties", "18097")).toBe("18097");
  });

  it("pads an AIANNH code to 4 digits (Census GEOIDs like '0955' keep their leading zero)", () => {
    expect(atlasFeatureKey("us-aiannh", "955")).toBe("0955");
    expect(atlasFeatureKey("us-aiannh", "2430")).toBe("2430");
  });

  it("never truncates an id that is already wider than the pad", () => {
    expect(atlasFeatureKey("us-states", "18097")).toBe("18097");
  });
});

describe("legendColors + regionFill", () => {
  const colors = legendColors([
    { category: "home rule", color: "#0ea5e9" },
    { category: "Dillon's Rule", color: "#f59e0b" },
  ]);

  it("maps a legend category to its colour", () => {
    expect(regionFill(colors, "home rule")).toBe("#0ea5e9");
    expect(regionFill(colors, "Dillon's Rule")).toBe("#f59e0b");
  });

  it("falls back to the neutral fill for a category the legend does not define", () => {
    expect(regionFill(colors, "unheard of")).toBe(NEUTRAL_REGION_FILL);
    expect(regionFill(legendColors(undefined), "anything")).toBe(NEUTRAL_REGION_FILL);
  });
});

describe("aiannhTitle", () => {
  it("leads with the official Census name, then the lesson's label", () => {
    expect(aiannhTitle("Pine Ridge Reservation", "Oglala Sioux Tribe")).toBe(
      "Pine Ridge Reservation: Oglala Sioux Tribe",
    );
  });

  it("stands on the Census name alone when the lesson adds nothing", () => {
    expect(aiannhTitle("Onondaga Nation Reservation", undefined)).toBe("Onondaga Nation Reservation");
  });

  it("falls back to the lesson label if a feature somehow has no name, and never renders 'undefined'", () => {
    expect(aiannhTitle(undefined, "a nation's own label")).toBe("a nation's own label");
    expect(aiannhTitle(undefined, undefined)).toBe("");
  });
});
