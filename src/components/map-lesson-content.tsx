"use client";

import { useEffect, useMemo, useState } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
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
/** A choropleth fill (plans/49): fill a whole country AREA by category, because a comparative property
 *  (a form of government, where an entity type is recognised) is an area, not a point. Joined to the
 *  world topojson by ISO 3166-1 numeric id. Colours and the legend come from `MapContent.regionLegend`. */
interface RegionLayer {
  /** The topojson feature id to fill: the ISO 3166-1 numeric country code, matching the world atlas. */
  featureId: string;
  /** Category name; its colour comes from `MapContent.regionLegend`. */
  category: string;
  /** Optional tooltip label (defaults to the category). */
  label?: string;
  /** See Marker.year. */
  year?: number;
}
export interface MapContent {
  markers?: Marker[];
  lines?: Shape[];
  polygons?: Shape[];
  /** Choropleth fills joined to the world topojson by ISO 3166-1 numeric id (plans/49). */
  regions?: RegionLayer[];
  /** Ordered category -> colour for the `regions` choropleth; also renders the legend. A region whose
   *  category is absent here uses a neutral fill. */
  regionLegend?: { category: string; color: string; label?: string }[];
}

const WIDTH = 960;
const HEIGHT = 480;
const flip = (coords: [number, number][]): [number, number][] => coords.map(([lat, lng]) => [lng, lat]);
const hasYear = (e: { year?: number }): e is { year: number } => typeof e.year === "number";

// Renders a lesson's map_content (producer markers + trade-route lines + production
// polygons) on a Natural Earth world map. Click a marker for its detail. When any element carries a
// `year`, a time-slider appears and the map reveals elements as of the chosen year (an element with
// no year always shows). Backwards-compatible: a map with no years renders exactly as before.
export function MapLessonContent({ content }: { content: MapContent }) {
  const [active, setActive] = useState<Marker | null>(null);

  const { land, path, project, countriesById } = useMemo(() => {
    const topo = worldData as unknown as Topology;
    const land = feature(topo, topo.objects.countries as GeometryCollection) as FeatureCollection;
    const projection = geoNaturalEarth1().fitSize([WIDTH, HEIGHT], land);
    // For the choropleth: look up a country feature by its ISO 3166-1 numeric id, to fill by area.
    const countriesById = new Map(land.features.map((f) => [String(f.id), f] as const));
    return { land, path: geoPath(projection), project: projection, countriesById };
  }, []);

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

      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full rounded-lg bg-sky-50" role="img" aria-label="Lesson map">
        {land.features.map((f, i) => (
          <path key={i} d={path(f) ?? undefined} fill="#eef2f7" stroke="#fff" strokeWidth={0.4} />
        ))}

        {/* Choropleth fills (plans/49): whole-country areas coloured by category, on top of the
            neutral land. A comparative property is an area, not a point. */}
        {(content.regions ?? []).filter(visible).map((r) => {
          const f = countriesById.get(r.featureId);
          if (!f) return null;
          return (
            <path key={`region-${r.featureId}`} d={path(f) ?? undefined} fill={regionColor.get(r.category) ?? "#c7cdd6"} fillOpacity={0.85} stroke="#fff" strokeWidth={0.5}>
              <title>{r.label ?? r.category}</title>
            </path>
          );
        })}

        {(content.polygons ?? []).filter(visible).map((p) => {
          const poly: Polygon = { type: "Polygon", coordinates: [flip(p.coords)] };
          return <path key={p.id} d={path(poly) ?? undefined} fill={p.fillColor ?? p.color ?? "#99999933"} stroke={p.color ?? "#888"} strokeWidth={0.6} />;
        })}

        {(content.lines ?? []).filter(visible).map((l) => {
          const line: LineString = { type: "LineString", coordinates: flip(l.coords) };
          return <path key={l.id} d={path(line) ?? undefined} fill="none" stroke={l.color ?? "#8B4513"} strokeWidth={1.5} strokeDasharray="4 3" />;
        })}

        {(content.markers ?? []).filter(visible).map((m) => {
          const xy = project([m.lng, m.lat]);
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
