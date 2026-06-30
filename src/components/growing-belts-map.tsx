"use client";

import { useMemo, useState } from "react";
import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry, Polygon } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import worldData from "world-atlas/countries-110m.json";

export interface MapBelt {
  id: string;
  name: string;
  color: string | null;
  seasonNumber: number | null;
  latMin: number | null;
  latMax: number | null;
  productionCountryCodes: number[] | null;
  description: string | null;
}

const WIDTH = 960;
const HEIGHT = 480;

// A full-longitude latitude band as a densified GeoJSON polygon (so the parallels
// project as curves under Equal Earth, not straight chords).
function bandPolygon(latMin: number, latMax: number): Polygon {
  const ring: [number, number][] = [];
  for (let lon = -180; lon <= 180; lon += 6) ring.push([lon, latMax]);
  for (let lon = 180; lon >= -180; lon -= 6) ring.push([lon, latMin]);
  ring.push([-180, latMax]);
  return { type: "Polygon", coordinates: [ring] };
}

// Growing Belts: Equal Earth projection. Per commodity, its latitude band AND its
// production-region country polygons, layered with mix-blend-mode:multiply so
// overlaps blend (the equator shows coffee+cacao+tea blending).
const PREPOPULATE = 3;

export function GrowingBeltsMap({ belts }: { belts: MapBelt[] }) {
  // Start with only the first few commodities shown so the map reads cleanly; the
  // learner toggles the rest on from the legend below.
  const [hidden, setHidden] = useState<Set<string>>(() => new Set(belts.slice(PREPOPULATE).map((b) => b.id)));
  const [showBands, setShowBands] = useState(true);
  const [showRegions, setShowRegions] = useState(true);

  const { land, countryById, projection } = useMemo(() => {
    const topo = worldData as unknown as Topology;
    const land = feature(topo, topo.objects.countries as GeometryCollection) as FeatureCollection;
    const countryById = new Map<string, Feature<Geometry>>();
    for (const f of land.features) if (f.id != null) countryById.set(String(f.id), f);
    const projection = geoEqualEarth().fitSize([WIDTH, HEIGHT], land);
    return { land, countryById, projection };
  }, []);
  const path = useMemo(() => geoPath(projection), [projection]);

  const visible = belts.filter((b) => !hidden.has(b.id));

  function toggle(id: string) {
    setHidden((h) => {
      const n = new Set(h);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  }
  const showAll = () => setHidden(new Set());
  const resetToThree = () => setHidden(new Set(belts.slice(PREPOPULATE).map((b) => b.id)));
  const allShown = hidden.size === 0;

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-4 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={showBands} onChange={(e) => setShowBands(e.target.checked)} />
          Latitude bands
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={showRegions} onChange={(e) => setShowRegions(e.target.checked)} />
          Production regions
        </label>
      </div>

      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full rounded-lg bg-sky-50"
        role="img"
        aria-label="Growing belts map"
      >
        {land.features.map((f, i) => (
          <path key={i} d={path(f) ?? undefined} fill="#dbe3ec" stroke="#a9bacb" strokeWidth={0.5} />
        ))}
        <g style={{ mixBlendMode: "multiply" }}>
          {visible.map((b) => {
            const color = b.color ?? "#888";
            return (
              <g key={b.id}>
                {showBands && b.latMin != null && b.latMax != null ? (
                  <path d={path(bandPolygon(b.latMin, b.latMax)) ?? undefined} fill={color} fillOpacity={0.35} />
                ) : null}
                {showRegions
                  ? (b.productionCountryCodes ?? []).map((code) => {
                      const f = countryById.get(String(code));
                      if (!f) return null;
                      return <path key={code} d={path(f) ?? undefined} fill={color} fillOpacity={0.55} />;
                    })
                  : null}
              </g>
            );
          })}
        </g>
      </svg>

      {/* Overlap key — how blended colors read. */}
      <div className="mt-3 flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3 text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
        <span className="inline-flex shrink-0" aria-hidden>
          <span className="h-5 w-5 rounded-full" style={{ backgroundColor: "#6F4E37" }} />
          <span className="-ml-2 h-5 w-5 rounded-full" style={{ backgroundColor: "#4E7A3A", mixBlendMode: "multiply" }} />
        </span>
        <span>
          Where belts overlap, their colors <strong>blend</strong> — a darker zone means more commodities
          share that latitude. The map starts with {PREPOPULATE} commodities; toggle the rest below.
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Commodities</p>
        <button
          type="button"
          onClick={allShown ? resetToThree : showAll}
          className="text-xs font-medium underline"
          style={{ color: "var(--accent)" }}
        >
          {allShown ? `Show only ${PREPOPULATE}` : "Show all"}
        </button>
      </div>

      <div className="mt-2 space-y-3">
        {[1, 2, 3].map((season) => {
          const group = belts.filter((b) => (b.seasonNumber ?? 0) === season);
          if (group.length === 0) return null;
          return (
            <div key={season}>
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Season {season}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {group.map((b) => {
                  const on = !hidden.has(b.id);
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => toggle(b.id)}
                      aria-pressed={on}
                      title={b.description ?? undefined}
                      className={`flex items-center gap-1.5 rounded-full border px-2 py-1 ${
                        on ? "border-current" : "border-neutral-300 opacity-40 dark:border-neutral-700"
                      }`}
                    >
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: b.color ?? "#888" }} />
                      {b.name.replace(/ belt$/, "")}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
