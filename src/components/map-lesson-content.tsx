"use client";

import { useEffect, useMemo, useState } from "react";
import { geoAlbersUsa, geoNaturalEarth1, geoPath } from "d3-geo";
import type { GeoProjection } from "d3-geo";
import { feature, mesh } from "topojson-client";
import type { FeatureCollection, LineString, Polygon } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import worldData from "world-atlas/countries-110m.json";
import {
  aiannhTitle,
  atlasFeatureKey,
  legendColors,
  regionFill,
  usAtlasOf,
  type MapAtlasId,
  type UsAtlasId,
} from "@/lib/map-atlas";

// CentOS map_content (coords are [lat, lng]).
interface Marker {
  id: string;
  lat: number;
  lng: number;
  title?: string;
  description?: string;
  color?: string;
  /** Optional year this point APPEARS. Enables the time-slider (plans/44 Option B): scrub or play to
   *  watch pins light up over time (diffusion). An element with no year always shows. */
  year?: number;
}
interface Shape {
  id: string;
  coords: [number, number][];
  title?: string;
  description?: string;
  color?: string;
  fillColor?: string;
  /** See Marker.year. */
  year?: number;
}
/** A choropleth fill (plans/49): fill a whole AREA by category, because a comparative property
 *  (a form of government, a municipal-authority regime) is an area, not a point. Colours and the
 *  legend come from `MapContent.regionLegend`. */
interface RegionLayer {
  /** The topojson feature id to fill. Per atlas: "world" uses the ISO 3166-1 numeric country code
   *  (e.g. "840"); "us-states" the 2-digit state FIPS (e.g. "18" for Indiana); "us-counties" the
   *  5-digit county FIPS (e.g. "18097" for Marion County, IN); "us-aiannh" the 4-digit Census
   *  AIANNH area code (e.g. "2430" for the Navajo Nation Reservation). */
  featureId: string;
  /** Category name; its colour comes from `MapContent.regionLegend`. */
  category: string;
  /** Optional tooltip label (defaults to the category). */
  label?: string;
  /** See Marker.year. */
  year?: number;
  /** Which polygon atlas this region belongs to (plans/49). "world" fills a country on the Natural
   *  Earth world map (the default). The US atlases render on a geoAlbersUsa map: "us-states" fills
   *  a state (from `us-atlas/states-10m.json`, ~115 KB), "us-counties" a county (from
   *  `us-atlas/counties-10m.json`, ~840 KB, with state borders drawn for orientation), and
   *  "us-aiannh" an American Indian / Alaska Native / Native Hawaiian area (from the in-repo
   *  `src/data/us-aiannh-500k.topo.json`, ~380 KB, US Census cartographic boundary data) drawn as
   *  its OWN separately-styled layer over a neutral state base, never a shade of the state ladder.
   *  A lesson is ONE map: the first region's atlas picks the projection, and a US topology only
   *  loads (lazily) when a region targets it, so world-map lessons never pay for any of them.
   *  Provenance and key rules: `src/lib/map-atlas.ts`. */
  atlas?: MapAtlasId;
}
export interface MapContent {
  /** Explicit projection/base atlas for the whole lesson map. Needed when a map has MARKERS but
   *  no regions (nothing to infer from): the Green Book cities map sets "us-states" so US cities
   *  render on the US projection instead of a dot cluster on the world map. */
  atlas?: MapAtlasId;
  markers?: Marker[];
  lines?: Shape[];
  polygons?: Shape[];
  /** Choropleth fills joined to a polygon atlas by feature id (plans/49): the world atlas by ISO
   *  3166-1 numeric id, or the us-states atlas by 2-digit state FIPS. See `RegionLayer.atlas`. */
  regions?: RegionLayer[];
  /** Ordered category -> colour for the `regions` choropleth; also renders the legend. A region whose
   *  category is absent here uses a neutral fill. */
  regionLegend?: { category: string; color: string; label?: string }[];
}

// The world map is Natural Earth at 2:1; the US map is geoAlbersUsa at 8:5 (matching the standalone
// us-states map), which leaves room for the Alaska + Hawaii insets the projection composes in.
const WORLD_WIDTH = 960;
const WORLD_HEIGHT = 480;
const US_WIDTH = 960;
const US_HEIGHT = 600;
const flip = (coords: [number, number][]): [number, number][] => coords.map(([lat, lng]) => [lng, lat]);
const hasYear = (e: { year?: number }): e is { year: number } => typeof e.year === "number";

interface MapGeo {
  land: FeatureCollection;
  path: ReturnType<typeof geoPath>;
  project: GeoProjection;
  /** Features of the CHOROPLETH atlas, keyed for the join (see `atlasFeatureKey`). */
  featuresById: Map<string, FeatureCollection["features"][number]>;
  /** Border meshes drawn over the fills (the county grid + state lines on a us-counties map).
   *  Meshes instead of per-feature strokes because a counties base would otherwise be ~3,200 SVG
   *  paths; the merged land + two meshes draw the same picture in three. */
  borders: { d: string; width: number }[];
  width: number;
  height: number;
}

// Renders a lesson's map_content (producer markers + trade-route lines + production polygons + a
// choropleth `regions` layer) on either a Natural Earth WORLD map or, when any region targets a US
// atlas (us-states / us-counties / us-aiannh), a geoAlbersUsa map of the United States. Click a
// marker for its detail. When any element carries a `year`, a time-slider appears and the map
// reveals elements as of the chosen year (an element with no year always shows). Backwards-
// compatible: a map with no US regions and no years renders exactly as before, and never loads the
// heavy US topojson files.
export function MapLessonContent({ content }: { content: MapContent }) {
  const [active, setActive] = useState<Marker | null>(null);

  // A lesson is either a world map or a US map; the first region with a US atlas flips the whole
  // map (see `usAtlasOf`). World maps never touch the US topojson files, keeping their bundle tiny.
  const usAtlas = useMemo<UsAtlasId | undefined>(
    () => usAtlasOf(content.regions, content.atlas),
    [content.regions, content.atlas],
  );
  const isUsMap = usAtlas !== undefined;

  // The US topojson files are loaded lazily, ONLY for a US map, via dynamic import, so a
  // world-country lesson never pays for them. The base topology is states (~115 KB) for us-states
  // and us-aiannh maps, counties (~840 KB) for us-counties. Null until it resolves.
  const [usTopo, setUsTopo] = useState<Topology | null>(null);
  // The tribal-areas topology (~380 KB, in-repo; provenance in src/lib/map-atlas.ts), only for a
  // us-aiannh map. It joins the lesson's regions; the states base underneath stays neutral.
  const [aiannhTopo, setAiannhTopo] = useState<Topology | null>(null);
  useEffect(() => {
    if (!usAtlas) return;
    let cancelled = false;
    const asTopo = (m: unknown) => ((m as { default?: unknown }).default ?? m) as unknown as Topology;
    if (!usTopo) {
      const load = usAtlas === "us-counties"
        ? import("us-atlas/counties-10m.json")
        : import("us-atlas/states-10m.json");
      void load.then((m) => {
        if (!cancelled) setUsTopo(asTopo(m));
      });
    }
    if (usAtlas === "us-aiannh" && !aiannhTopo) {
      void import("@/data/us-aiannh-500k.topo.json").then((m) => {
        if (!cancelled) setAiannhTopo(asTopo(m));
      });
    }
    return () => {
      cancelled = true;
    };
  }, [usAtlas, usTopo, aiannhTopo]);

  // Projection, path, land polygons, and the id -> feature index for the choropleth join. Picks the
  // atlas from the lesson: world by default, a geoAlbersUsa US map when a US region is present.
  // Returns null while a US topology is still loading (the world atlas is bundled, never null).
  const geo = useMemo<MapGeo | null>(() => {
    if (usAtlas === "us-counties") {
      if (!usTopo) return null;
      const counties = feature(usTopo, usTopo.objects.counties as GeometryCollection) as unknown as FeatureCollection;
      const projection = geoAlbersUsa().fitSize([US_WIDTH, US_HEIGHT], counties);
      const path = geoPath(projection);
      // The neutral base is the single merged nation outline; the county grid and the heavier
      // state lines are drawn as two meshes over the fills (see MapGeo.borders).
      const land = feature(usTopo, usTopo.objects.nation as GeometryCollection) as unknown as FeatureCollection;
      const borders = [
        { d: path(mesh(usTopo, usTopo.objects.counties as GeometryCollection, (a, b) => a !== b)) ?? "", width: 0.25 },
        { d: path(mesh(usTopo, usTopo.objects.states as GeometryCollection, (a, b) => a !== b)) ?? "", width: 0.7 },
      ].filter((b) => b.d);
      const featuresById = new Map(counties.features.map((f) => [String(f.id), f] as const));
      return { land, path, project: projection, featuresById, borders, width: US_WIDTH, height: US_HEIGHT };
    }
    if (usAtlas === "us-states" || usAtlas === "us-aiannh") {
      if (!usTopo || (usAtlas === "us-aiannh" && !aiannhTopo)) return null;
      const land = feature(usTopo, usTopo.objects.states as GeometryCollection) as unknown as FeatureCollection;
      const projection = geoAlbersUsa().fitSize([US_WIDTH, US_HEIGHT], land);
      // us-states joins against the states themselves; us-aiannh joins against the tribal areas,
      // keyed by the Census GEOID each feature carries (the states underneath are only context).
      const joinFeatures =
        usAtlas === "us-aiannh" && aiannhTopo
          ? (feature(aiannhTopo, aiannhTopo.objects.aiannh as GeometryCollection) as unknown as FeatureCollection).features
          : land.features;
      const featuresById = new Map(
        joinFeatures.map((f) => {
          const props = f.properties as { GEOID?: string } | null;
          const id = usAtlas === "us-aiannh" ? props?.GEOID ?? f.id : f.id;
          return [atlasFeatureKey(usAtlas, String(id)), f] as const;
        }),
      );
      return { land, path: geoPath(projection), project: projection, featuresById, borders: [], width: US_WIDTH, height: US_HEIGHT };
    }
    const topo = worldData as unknown as Topology;
    const land = feature(topo, topo.objects.countries as GeometryCollection) as FeatureCollection;
    const projection = geoNaturalEarth1().fitSize([WORLD_WIDTH, WORLD_HEIGHT], land);
    // For the choropleth: look up a country feature by its ISO 3166-1 numeric id, to fill by area.
    const featuresById = new Map(land.features.map((f) => [String(f.id), f] as const));
    return { land, path: geoPath(projection), project: projection, featuresById, borders: [], width: WORLD_WIDTH, height: WORLD_HEIGHT };
  }, [usAtlas, usTopo, aiannhTopo]);

  // Category -> fill colour for the regions choropleth; also drives the legend.
  const regionColor = useMemo(() => legendColors(content.regionLegend), [content.regionLegend]);

  // Distinct event years across every element, sorted. Empty when nothing is dated (no slider then).
  const years = useMemo<number[]>(() => {
    const all = [...(content.markers ?? []), ...(content.lines ?? []), ...(content.polygons ?? []), ...(content.regions ?? [])];
    const set = new Set<number>();
    for (const e of all) if (hasYear(e)) set.add(e.year);
    return [...set].sort((a, b) => a - b);
  }, [content]);
  const timed = years.length > 0;
  const minYear = years[0] ?? 0;
  const maxYear = years[years.length - 1] ?? 0;

  // The year the map is showing "as of". Starts at the end so everything is visible; scrub back or
  // play forward. Kept in [minYear, maxYear]. A lesson's map content is static, so the initializer is
  // enough (no reset-on-prop-change effect needed).
  const [asOf, setAsOf] = useState<number>(maxYear);
  const [playing, setPlaying] = useState(false);

  // Play: step through the DISTINCT event years so each tick reveals a cohort, then stop at the end.
  useEffect(() => {
    if (!playing || !timed) return;
    const id = setInterval(() => {
      setAsOf((cur) => {
        const next = years.find((y) => y > cur);
        if (next === undefined) {
          setPlaying(false);
          return cur;
        }
        return next;
      });
    }, 900);
    return () => clearInterval(id);
  }, [playing, timed, years]);

  const visible = (e: { year?: number }) => !hasYear(e) || e.year <= asOf;

  return (
    <div>
      {timed ? (
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => {
              if (asOf >= maxYear) setAsOf(minYear); // replay from the start
              setPlaying((p) => !p);
            }}
            className="inline-flex min-h-9 items-center rounded-md px-3 py-1.5 text-sm font-medium text-white pointer-coarse:min-h-11"
            style={{ backgroundColor: "var(--accent)" }}
            aria-label={playing ? "Pause the timeline" : "Play the timeline"}
          >
            {playing ? "Pause" : "▶ Play"}
          </button>
          <input
            type="range"
            min={minYear}
            max={maxYear}
            step={1}
            value={asOf}
            onChange={(e) => {
              setPlaying(false);
              setAsOf(Number(e.target.value));
            }}
            className="h-2 flex-1 min-w-32 cursor-pointer accent-(--accent)"
            aria-label="Year"
            aria-valuetext={`As of ${asOf}`}
          />
          <span className="text-sm font-semibold tabular-nums" aria-live="polite">
            as of {asOf}
          </span>
        </div>
      ) : null}

      {geo ? (
      <svg viewBox={`0 0 ${geo.width} ${geo.height}`} className={`w-full rounded-lg ${isUsMap ? "bg-slate-50" : "bg-sky-50"}`} role="img" aria-label={isUsMap ? "Lesson map of the United States" : "Lesson map"}>
        {geo.land.features.map((f, i) => (
          <path key={i} d={geo.path(f) ?? undefined} fill="#e7ecf3" stroke="#94a3b8" strokeWidth={0.5} />
        ))}

        {/* Choropleth fills (plans/49): whole areas (a country, a US state, a county, or a tribal
            area) coloured by category, on top of the neutral land. A comparative property is an
            area, not a point. The us-aiannh layer is styled apart from the state/county ladder (its
            own dark outline over the neutral state base) because a tribal nation is a separate
            sovereign, not another rung: its tooltip leads with the area's official Census name, and
            everything else it says comes from the lesson's own legend and labels. */}
        {(content.regions ?? []).filter(visible).map((r) => {
          const f = geo.featuresById.get(atlasFeatureKey(usAtlas ?? "world", r.featureId));
          if (!f) return null;
          const tribal = usAtlas === "us-aiannh";
          const censusName = tribal ? (f.properties as { NAMELSAD?: string } | null)?.NAMELSAD : undefined;
          return (
            <path
              key={`region-${r.featureId}`}
              d={geo.path(f) ?? undefined}
              fill={regionFill(regionColor, r.category)}
              fillOpacity={tribal ? 0.9 : 0.85}
              stroke={tribal ? "#44403c" : "#fff"}
              strokeWidth={tribal ? 0.8 : 0.5}
            >
              <title>{tribal ? aiannhTitle(censusName, r.label ?? r.category) : r.label ?? r.category}</title>
            </path>
          );
        })}

        {/* Border meshes over the fills (us-counties: the county grid + heavier state lines). */}
        {geo.borders.map((b, i) => (
          <path key={`borders-${i}`} d={b.d} fill="none" stroke="#fff" strokeWidth={b.width} />
        ))}

        {(content.polygons ?? []).filter(visible).map((p) => {
          const poly: Polygon = { type: "Polygon", coordinates: [flip(p.coords)] };
          return <path key={p.id} d={geo.path(poly) ?? undefined} fill={p.fillColor ?? p.color ?? "#99999933"} stroke={p.color ?? "#888"} strokeWidth={0.6} />;
        })}

        {(content.lines ?? []).filter(visible).map((l) => {
          const line: LineString = { type: "LineString", coordinates: flip(l.coords) };
          return <path key={l.id} d={geo.path(line) ?? undefined} fill="none" stroke={l.color ?? "#8B4513"} strokeWidth={1.5} strokeDasharray="4 3" />;
        })}

        {(content.markers ?? []).filter(visible).map((m) => {
          const xy = geo.project([m.lng, m.lat]);
          if (!xy) return null;
          return (
            <circle
              key={m.id}
              cx={xy[0]}
              cy={xy[1]}
              r={active?.id === m.id ? 7 : 5}
              fill={m.color ?? "#b91c1c"}
              stroke="#fff"
              strokeWidth={1.5}
              className="cursor-pointer"
              onClick={() => setActive(m)}
            >
              <title>
                {m.title}
                {hasYear(m) ? ` (${m.year})` : ""}
              </title>
            </circle>
          );
        })}
      </svg>
      ) : (
        // US topology still loading (the world atlas is bundled, so this only shows for a US map).
        <div
          className="flex aspect-8/5 w-full items-center justify-center rounded-lg bg-slate-50 text-sm text-neutral-600"
          role="status"
        >
          Loading map...
        </div>
      )}

      {(content.regionLegend?.length ?? 0) > 0 ? (
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm" aria-label="Map legend">
          {content.regionLegend!.map((r) => (
            <li key={r.category} className="flex items-center gap-1.5">
              <span aria-hidden className="inline-block h-3 w-3 rounded-sm" style={{ backgroundColor: r.color }} />
              {r.label ?? r.category}
            </li>
          ))}
        </ul>
      ) : null}

      {active ? (
        <div className="mt-3 rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800">
          <p className="font-semibold">
            {active.title}
            {hasYear(active) ? <span className="ml-2 text-xs font-normal text-neutral-600">{active.year}</span> : null}
          </p>
          {active.description ? <p className="mt-1 text-neutral-600 dark:text-neutral-400">{active.description}</p> : null}
        </div>
      ) : (content.markers?.length ?? 0) > 0 ? (
        <p className="mt-2 text-sm text-neutral-600">
          Tap a point on the map for details.{timed ? " Scrub or play the year to watch them appear." : ""}
        </p>
      ) : null}
    </div>
  );
}
