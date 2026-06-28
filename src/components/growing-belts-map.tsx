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
export function GrowingBeltsMap({ belts }: { belts: MapBelt[] }) {
  const [hidden, setHidden] = useState<Set<string>>(new Set());
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
          <path key={i} d={path(f) ?? undefined} fill="#eef2f7" stroke="#fff" strokeWidth={0.4} />
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

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {belts.map((b) => {
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
}
