import { describe, expect, it } from "vitest";
import { buildMapSvg, mapSvgDataUri, type SvgPin } from "@/lib/map-svg";

// The /explore social card renders the tenant's REAL map. buildMapSvg interpolates DB-controlled
// values (map_commodities.color) straight into SVG markup, so these guard two things: the card
// only ever contains the pins it was handed (it cannot widen the tenant boundary on its own), and
// a hostile colour string cannot break out of its attribute.

function pin(over: Partial<SvgPin> = {}): SvgPin {
  return { lat: 9, lon: 40, color: "#ff0000", isHome: false, ...over };
}

describe("buildMapSvg", () => {
  it("renders one dot per pin it is given, and nothing else", () => {
    const svg = buildMapSvg([pin(), pin({ lat: -3, lon: -60 })]);
    expect(svg.match(/<circle/g)).toHaveLength(2);
    expect(svg).toContain('xmlns="http://www.w3.org/2000/svg"');
  });

  it("renders no dots for an empty pin list (an empty map never fakes a full one)", () => {
    const svg = buildMapSvg([]);
    expect(svg).not.toContain("<circle");
    // The landmass is still drawn — it is the world, not the tenant's data.
    expect(svg).toContain("<path");
  });

  it("skips pins with no coordinates rather than placing them at 0,0 in the Atlantic", () => {
    const svg = buildMapSvg([pin({ lat: null, lon: null }), pin()]);
    expect(svg.match(/<circle/g)).toHaveLength(1);
  });

  it("draws the home pin larger than the rest", () => {
    const home = buildMapSvg([pin({ isHome: true })]);
    const away = buildMapSvg([pin({ isHome: false })]);
    const r = (s: string) => Number(/<circle[^>]*r="(\d+)"/.exec(s)?.[1]);
    expect(r(home)).toBeGreaterThan(r(away));
  });

  it("refuses a colour that is not a plain CSS colour, so a DB value cannot inject markup", () => {
    const svg = buildMapSvg([pin({ color: '#000" onload="alert(1)' })]);
    expect(svg).not.toContain("onload");
    expect(svg).not.toContain("alert(1)");
  });

  it("accepts the colour formats the seed actually uses", () => {
    expect(buildMapSvg([pin({ color: "#8B5E3C" })])).toContain('fill="#8B5E3C"');
    expect(buildMapSvg([pin({ color: "tomato" })])).toContain('fill="tomato"');
  });

  it("falls back to the accent when a pin has no colour of its own", () => {
    expect(buildMapSvg([pin({ color: null })], { accent: "#123456" })).toContain('fill="#123456"');
  });

  it("emits a data URI next/og can rasterize", () => {
    const uri = mapSvgDataUri([pin()]);
    expect(uri.startsWith("data:image/svg+xml;base64,")).toBe(true);
    const decoded = Buffer.from(uri.split(",")[1], "base64").toString();
    expect(decoded).toContain("<svg");
  });
});
