"use client";

import { useEffect, useMemo, useState } from "react";
import { geoAlbersUsa, geoNaturalEarth1, geoPath } from "d3-geo";
import type { GeoProjection } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection, LineString, Polygon } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import worldData from "world-atlas/countries-110m.json";

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
  /** The topojson feature id to fill. For the world atlas: the ISO 3166-1 numeric country code
   *  (e.g. "840"). For the us-states atlas: the 2-digit state FIPS code (e.g. "18" for Indiana). */
  featureId: string;
  /** Category name; its colour comes from `MapContent.regionLegend`. */
  category: string;
  /** Optional tooltip label (defaults to the category). */
  label?: string;
  /** See Marker.year. */
  year?: number;
  /** Which polygon atlas this region belongs to (plans/49). "world" fills a country on the Natural
   *  Earth world map (the default). "us-states" fills a US state on a geoAlbersUsa map, loaded from
   *  `us-atlas/states-10m.json`. A lesson is either a world map or a US map, never both: the first
   *  region's atlas picks the projection and the ~2 MB states atlas loads only when one is present. */
  atlas?: "world" | "us-states";
}
export interface MapContent {
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
// A US region is keyed by 2-digit FIPS; pad so "1" and "01" both match. World ids are already the
// zero-padded 3-digit strings the atlas ships, so they are compared as-is.
const usKey = (id: string) => id.padStart(2, "0");

interface MapGeo {
  land: FeatureCollection;
  path: ReturnType<typeof geoPath>;
  project: GeoProjection;
  featuresById: Map<string, FeatureCollection["features"][number]>;
  width: number;
  height: number;
}

// Renders a lesson's map_content (producer markers + trade-route lines + production polygons + a
// choropleth `regions` layer) on either a Natural Earth WORLD map or, when any region targets the
// `us-states` atlas, a geoAlbersUsa map of the United States. Click a marker for its detail. When any
// element carries a `year`, a time-slider appears and the map reveals elements as of the chosen year
// (an element with no year always shows). Backwards-compatible: a map with no us-states regions and
// no years renders exactly as before, and never loads the heavy states atlas.
export function MapLessonContent({ content }: { content: MapContent }) {
  const [active, setActive] = useState<Marker | null>(null);

  // A lesson is either a world map or a US map; the first us-states region flips the whole map. World
  // maps never touch the ~2 MB states atlas, keeping their bundle tiny.
  const isUsMap = useMemo(
    () => (content.regions ?? []).some((r) => r.atlas === "us-states"),
    [content.regions],
  );

  // The US states topojson (~2 MB) is loaded lazily, ONLY for a US map, via dynamic import, so a
  // world-country lesson never pays for it. Null until it resolves.
  const [usTopo, setUsTopo] = useState<Topology | null>(null);
  useEffect(() => {
    if (!isUsMap || usTopo) return;
    let cancelled = false;
    void import("us-atlas/states-10m.json").then((m) => {
      if (!cancelled) setUsTopo(((m as { default?: unknown }).default ?? m) as unknown as Topology);
    });
    return () => {
      cancelled = true;
    };
  }, [isUsMap, usTopo]);

  // Projection, path, land polygons, and the id -> feature index for the choropleth join. Picks the
  // atlas from the lesson: world by default, us-states when a us-states region is present. Returns
  // null while the US atlas is still loading (the world atlas is bundled, so it is never null).
  const geo = useMemo<MapGeo | null>(() => {
    if (isUsMap) {
      if (!usTopo) return null;
      const land = feature(usTopo, usTopo.objects.states as GeometryCollection) as unknown as FeatureCollection;
      const projection = geoAlbersUsa().fitSize([US_WIDTH, US_HEIGHT], land);
      const featuresById = new Map(land.features.map((f) => [usKey(String(f.id)), f] as const));
      return { land, path: geoPath(projection), project: projection, featuresById, width: US_WIDTH, height: US_HEIGHT };
    }
    const topo = worldData as unknown as Topology;
    const land = feature(topo, topo.objects.countries as GeometryCollection) as FeatureCollection;
    const projection = geoNaturalEarth1().fitSize([WORLD_WIDTH, WORLD_HEIGHT], land);
    // For the choropleth: look up a country feature by its ISO 3166-1 numeric id, to fill by area.
    const featuresById = new Map(land.features.map((f) => [String(f.id), f] as const));
    return { land, path: geoPath(projection), project: projection, featuresById, width: WORLD_WIDTH, height: WORLD_HEIGHT };
  }, [isUsMap, usTopo]);

  // Category -> fill colour for the regions choropleth; also drives the legend.
  const regionColor = useMemo(
    () => new Map((content.regionLegend ?? []).map((r) => [r.category, r.color] as const)),
    [content.regionLegend],
  );

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
          <path key={i} d={geo.path(f) ?? undefined} fill="#eef2f7" stroke="#fff" strokeWidth={0.4} />
        ))}

        {/* Choropleth fills (plans/49): whole areas (a country, or a US state) coloured by category,
            on top of the neutral land. A comparative property is an area, not a point. */}
        {(content.regions ?? []).filter(visible).map((r) => {
          const f = geo.featuresById.get(isUsMap ? usKey(r.featureId) : r.featureId);
          if (!f) return null;
          return (
            <path key={`region-${r.featureId}`} d={geo.path(f) ?? undefined} fill={regionColor.get(r.category) ?? "#c7cdd6"} fillOpacity={0.85} stroke="#fff" strokeWidth={0.5}>
              <title>{r.label ?? r.category}</title>
            </path>
          );
        })}

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
        // US atlas still loading (world atlas is bundled, so this only shows for a us-states map).
        <div
          className="flex aspect-8/5 w-full items-center justify-center rounded-lg bg-slate-50 text-sm text-neutral-500"
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
            {hasYear(active) ? <span className="ml-2 text-xs font-normal text-neutral-500">{active.year}</span> : null}
          </p>
          {active.description ? <p className="mt-1 text-neutral-600 dark:text-neutral-400">{active.description}</p> : null}
        </div>
      ) : (content.markers?.length ?? 0) > 0 ? (
        <p className="mt-2 text-sm text-neutral-500">
          Tap a point on the map for details.{timed ? " Scrub or play the year to watch them appear." : ""}
        </p>
      ) : null}
    </div>
  );
}
