# Docs notes: county + tribal-area map layers (plans/49, remainder)

Notes for the docs pass. This branch deliberately does NOT touch `README.md` or
`src/lib/roadmap.ts`; the sentences below are ready to lift into them when BAM merges.

## What shipped on `feat/map-county-tribal-layers`

Two new polygon atlases for the lesson-map choropleth (`regions` on `mapContent`), completing the
data-heavy remainder of plans/49:

- **`atlas: "us-counties"`** fills US counties by 5-digit county FIPS (e.g. `"18097"` for Marion
  County, IN) on the geoAlbersUsa projection, with the county grid and heavier state borders drawn
  as meshes for orientation.
- **`atlas: "us-aiannh"`** fills American Indian / Alaska Native / Native Hawaiian areas by their
  4-digit Census AIANNH area code (e.g. `"2430"` for the Navajo Nation Reservation and
  Off-Reservation Trust Land) as a **separately styled layer** over a neutral state base: its own
  dark outline, never a shade of the state/county ladder, because a tribal nation is a separate
  sovereign, not another rung. The layer itself only draws boundaries and each area's official
  Census name (`NAMELSAD`, led first in the tooltip); every categorisation, colour, and label must
  come from the lesson's own `regionLegend` / `label`s, which carry the citations for whatever they
  claim. An area with no legend entry renders in the neutral fill and claims nothing.

Pure join/legend helpers moved to `src/lib/map-atlas.ts` (unit-tested in `tests/map-atlas.test.ts`).

## Bundle discipline (why lazy)

The world map stays exactly as it was: `world-atlas/countries-110m.json` statically bundled, no US
data in the base bundle. Each US topology loads via dynamic import ONLY when a lesson's regions
target it, matching the pattern the shipped `us-states` atlas established:

| Atlas | Source | Size (raw JSON) | Loaded |
|---|---|---|---|
| `us-states` | `us-atlas/states-10m.json` (npm, already installed) | ~115 KB | lazily, us-states + us-aiannh maps |
| `us-counties` | `us-atlas/counties-10m.json` (npm, already installed) | ~840 KB | lazily, us-counties maps only |
| `us-aiannh` | `src/data/us-aiannh-500k.topo.json` (in-repo) | ~380 KB | lazily, us-aiannh maps only |

No new npm dependency was added.

## Data provenance

- `us-atlas` (states + counties) is derived from the **US Census Bureau cartographic boundary
  files**, which are public domain as US government works.
- `src/data/us-aiannh-500k.topo.json` was converted for this repo from the Census Bureau's 2024
  cartographic boundary file for AIANNH areas
  (`cb_2024_us_aiannh_500k`, downloaded 2026-08-18 from
  `https://www2.census.gov/geo/tiger/GENZ2024/shp/cb_2024_us_aiannh_500k.zip`, public domain),
  simplified with mapshaper (`-simplify 20% keep-shapes`, topojson quantization 1e5) to keep the
  lazy chunk small. 704 features; each keeps `GEOID` (4-digit AIANNH area code), `NAME`, and
  `NAMELSAD`. The full provenance comment lives at the top of `src/lib/map-atlas.ts`.
- Note the Census file's own framing: these are **statistical/cartographic boundaries** (it
  includes reservations, off-reservation trust land, Oklahoma Tribal Statistical Areas, ANVSAs,
  SDTSAs, and Hawaiian home lands), not a legal statement of any nation's jurisdiction. Post-McGirt
  eastern Oklahoma appears as OTSAs (e.g. `"5620"` Creek OTSA). Lessons that use the layer should
  say which kind of area they are showing.

## README sentence (for the map/lesson-features section)

> Lesson maps can fill whole areas, not just plot points: world countries, US states, US counties,
> and, as its own separately styled layer, American Indian / Alaska Native / Native Hawaiian areas
> from US Census boundary data, with the heavy US geometry lazy-loaded only by lessons that use it.

## Roadmap line (`src/lib/roadmap.ts`)

> County and tribal-area (AIANNH) choropleth layers for lesson maps: shipped. Converting the Tribal
> Nations stopgap point map to the tribal layer: next content pass.

## Deferred, and why

- **Converting `tribal-nations-governance`'s stopgap map.** The course's Section 5 lesson is built
  AROUND the point map's limits ("the map's limits ARE the lesson"): the single-colour dots, the
  "a point stands in for an area" caveat, and the McGirt/ANCSA "what the map cannot show" passage
  are cited prose making a legal argument. Swapping the map without rewriting that prose would make
  the lesson contradict its own map, and an ANCSA region rendered as a governed-territory fill
  would assert exactly what the lesson (via *Venetie*) says is false. That conversion is a content
  pass with the tribal-content care rules (teach that/whose/why, lead with nations' own words, no
  restricted detail), done together with the lesson rewrite, per plans/49 "After it lands".
- **Wiring a first `us-counties` consumer.** The layer is live; no shipped lesson claims a
  county-level fact yet. plans/49 lists candidates.
- **Semantic zoom** (zoom level picks countries -> states -> counties). The component has no zoom
  plumbing at all (no zoom state, no pan), so this is not a trivial addition once counties exist;
  it stays the plans/45 "zoom controls density" interaction, a later pass.

## Docs NOT updated here (by design)

`README.md`, `src/lib/roadmap.ts`: sentences above are ready. No help-article change: `mapContent`
is authored in `scripts/data/*-course.ts` seed files by whoever ships a course, not by instructors
through a documented in-app syntax, so the authoring reference is the `RegionLayer` doc comment in
`src/components/map-lesson-content.tsx` plus `src/lib/map-atlas.ts`.
