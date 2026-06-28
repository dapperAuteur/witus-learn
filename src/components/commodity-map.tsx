"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import worldData from "world-atlas/countries-110m.json";

export interface MapPin {
  id: string;
  name: string;
  geo: string | null;
  lat: number | null;
  lon: number | null;
  color: string | null;
  seasonNumber: number | null;
  isHome: boolean;
  courseId: string | null;
  episodeLabel: string | null;
  summary: string | null;
}

const WIDTH = 960;
const HEIGHT = 480;
const SEASONS = [
  { v: 0, label: "All" },
  { v: 1, label: "S1 · Daily Rituals" },
  { v: 2, label: "S2 · The Oldest Toast" },
  { v: 3, label: "S3 · The Forbidden Leaf" },
];

// Episode Origins: D3 Natural Earth projection, a colored pin per commodity at its
// origin lat/lon, click → the episode's course. Season filter; the home episode
// is enlarged.
export function CommodityMap({ commodities }: { commodities: MapPin[] }) {
  const router = useRouter();
  const [season, setSeason] = useState(0);
  const [selected, setSelected] = useState<MapPin | null>(null);

  const { land, projection } = useMemo(() => {
    const topo = worldData as unknown as Topology;
    const land = feature(topo, topo.objects.countries as GeometryCollection) as FeatureCollection;
    const projection = geoNaturalEarth1().fitSize([WIDTH, HEIGHT], land);
    return { land, projection };
  }, []);
  const path = useMemo(() => geoPath(projection), [projection]);

  const pins = commodities.filter((c) => season === 0 || c.seasonNumber === season);

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2 text-sm" role="tablist" aria-label="Season">
        {SEASONS.map((s) => (
          <button
            key={s.v}
            type="button"
            onClick={() => setSeason(s.v)}
            aria-pressed={season === s.v}
            className={`rounded-full border px-3 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 ${
              season === s.v
                ? "border-current font-medium"
                : "border-neutral-300 dark:border-neutral-700"
            }`}
            style={season === s.v ? { color: "var(--accent)" } : undefined}
          >
            {s.label}
          </button>
        ))}
      </div>

      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full rounded-lg bg-sky-50 dark:bg-neutral-900"
        role="img"
        aria-label="World map of commodity origins"
      >
        {land.features.map((f, i) => (
          <path
            key={i}
            d={path(f) ?? undefined}
            className="fill-neutral-200 stroke-white dark:fill-neutral-700 dark:stroke-neutral-800"
            strokeWidth={0.5}
          />
        ))}
        {pins.map((c) => {
          if (c.lat == null || c.lon == null) return null;
          const xy = projection([c.lon, c.lat]);
          if (!xy) return null;
          const r = c.isHome ? 8 : 5;
          const isSel = selected?.id === c.id;
          return (
            <g
              key={c.id}
              transform={`translate(${xy[0]},${xy[1]})`}
              className="cursor-pointer"
              onClick={() => setSelected(c)}
            >
              <title>{`${c.name} — ${c.geo ?? ""}`}</title>
              <circle r={isSel ? r + 3 : r} fill={c.color ?? "#888"} stroke="#fff" strokeWidth={1.5} />
            </g>
          );
        })}
      </svg>

      {selected ? (
        <aside className="mt-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <div className="flex items-start justify-between gap-4">
            <div>
              {selected.episodeLabel ? (
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  {selected.episodeLabel}
                </p>
              ) : null}
              <h3 className="text-lg font-semibold">{selected.name}</h3>
              {selected.geo ? <p className="text-sm text-neutral-500">{selected.geo}</p> : null}
            </div>
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="text-neutral-400 hover:text-neutral-600"
            >
              ✕
            </button>
          </div>
          {selected.summary ? (
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{selected.summary}</p>
          ) : null}
          {selected.courseId ? (
            <button
              type="button"
              onClick={() => router.push(`/course/${selected.courseId}`)}
              className="mt-3 min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: selected.color ?? "var(--accent)" }}
            >
              Open this episode →
            </button>
          ) : (
            <p className="mt-3 text-sm text-neutral-400">Episode coming soon.</p>
          )}
        </aside>
      ) : null}
    </div>
  );
}
