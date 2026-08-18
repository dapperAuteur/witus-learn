/**
 * Pure helpers for the lesson-map polygon atlases (plans/49). The component
 * (`src/components/map-lesson-content.tsx`) does the rendering; everything here is a pure function
 * so the join and legend rules are unit-testable without a DOM.
 *
 * The atlases and where their data comes from:
 *
 * - "world"       — `world-atlas/countries-110m.json` (npm, bundled statically; Natural Earth,
 *                   public domain). Features are keyed by ISO 3166-1 numeric country code ("840").
 * - "us-states"   — `us-atlas/states-10m.json` (npm, lazy-loaded; derived from the US Census
 *                   Bureau's cartographic boundary files, public domain). Keyed by 2-digit state
 *                   FIPS ("18" = Indiana).
 * - "us-counties" — `us-atlas/counties-10m.json` (npm, lazy-loaded, ~840 KB). Same Census
 *                   provenance. Keyed by 5-digit county FIPS ("18097" = Marion County, IN).
 * - "us-aiannh"   — `src/data/us-aiannh-500k.topo.json` (in-repo, lazy-loaded, ~380 KB). Converted
 *                   from the US Census Bureau 2024 cartographic boundary file for American Indian /
 *                   Alaska Native / Native Hawaiian areas (`cb_2024_us_aiannh_500k`, public domain
 *                   as a US government work), simplified with mapshaper (20%, shapes preserved) to
 *                   keep the lazy chunk small. 704 areas; each feature keeps `GEOID` (the 4-digit
 *                   Census AIANNH area code), `NAME`, and `NAMELSAD` (the official name with its
 *                   legal/statistical description, e.g. "Pine Ridge Reservation"). Keyed by GEOID.
 *
 * The tribal layer is deliberately its own atlas, never a shade of the state/county ladder: the
 * component styles it separately, and the layer itself only draws boundaries and official names
 * from the Census data. Any categorisation (legend colours, labels) must come from the lesson
 * content, which carries the citations for whatever it claims.
 */

export type MapAtlasId = "world" | "us-states" | "us-counties" | "us-aiannh";
export type UsAtlasId = Exclude<MapAtlasId, "world">;

/** The subset of a region entry the atlas helpers need. */
export interface AtlasRegionRef {
  featureId: string;
  atlas?: MapAtlasId;
}

/** How wide each US atlas's zero-padded feature key is. */
const KEY_WIDTH: Record<UsAtlasId, number> = {
  "us-states": 2, // state FIPS
  "us-counties": 5, // state FIPS + county FIPS
  "us-aiannh": 4, // Census AIANNH area code (AIANNHCE)
};

/**
 * Which US atlas a lesson's regions target, or undefined for a plain world map. A lesson is ONE
 * map: the first region carrying a non-world atlas decides, and regions targeting a different
 * atlas simply never join (their ids are not in the loaded topology). This is what keeps the
 * heavy US topojson files out of the bundle for every world-map lesson.
 */
export function usAtlasOf(
  regions: readonly AtlasRegionRef[] | undefined,
  explicit?: MapAtlasId,
): UsAtlasId | undefined {
  // A lesson may name its atlas directly (markers-only maps have no regions to scan: the Green
  // Book cities map rendered US cities on the world projection until 2026-08-18's report).
  if (explicit && explicit !== "world") return explicit;
  for (const r of regions ?? []) {
    if (r.atlas && r.atlas !== "world") return r.atlas;
  }
  return undefined;
}

/**
 * Normalise a lesson-authored feature id to the key the atlas actually uses, so "1" and "01" both
 * find Alabama. World ids are compared as-is: the world atlas ships zero-padded 3-digit strings
 * and lessons author them the same way.
 */
export function atlasFeatureKey(atlas: MapAtlasId, featureId: string): string {
  if (atlas === "world") return featureId;
  return featureId.padStart(KEY_WIDTH[atlas], "0");
}

/** Fill for a region whose category is missing from the lesson's legend: neutral, claims nothing. */
export const NEUTRAL_REGION_FILL = "#c7cdd6";

/** Category -> colour lookup from a lesson's `regionLegend`; also drives the rendered legend. */
export function legendColors(
  legend: readonly { category: string; color: string }[] | undefined,
): Map<string, string> {
  return new Map((legend ?? []).map((r) => [r.category, r.color] as const));
}

/** The fill for one region: its legend colour, or the neutral fill when the legend has no entry. */
export function regionFill(colors: Map<string, string>, category: string): string {
  return colors.get(category) ?? NEUTRAL_REGION_FILL;
}

/**
 * Tooltip for a tribal (us-aiannh) region: the area's OFFICIAL Census name first, then whatever
 * the lesson adds. The data names the area; the lesson makes the claims.
 */
export function aiannhTitle(censusName: string | undefined, lessonLabel: string | undefined): string {
  if (censusName && lessonLabel) return `${censusName}: ${lessonLabel}`;
  return censusName ?? lessonLabel ?? "";
}
