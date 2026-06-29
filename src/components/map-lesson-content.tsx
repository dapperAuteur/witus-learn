"use client";

import { useMemo, useState } from "react";
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
}
interface Shape {
  id: string;
  coords: [number, number][];
  title?: string;
  description?: string;
  color?: string;
  fillColor?: string;
}
export interface MapContent {
  markers?: Marker[];
  lines?: Shape[];
  polygons?: Shape[];
}

const WIDTH = 960;
const HEIGHT = 480;
const flip = (coords: [number, number][]): [number, number][] => coords.map(([lat, lng]) => [lng, lat]);

// Renders a lesson's map_content (producer markers + trade-route lines + production
// polygons) on a Natural Earth world map. Click a marker for its detail.
export function MapLessonContent({ content }: { content: MapContent }) {
  const [active, setActive] = useState<Marker | null>(null);

  const { land, path, project } = useMemo(() => {
    const topo = worldData as unknown as Topology;
    const land = feature(topo, topo.objects.countries as GeometryCollection) as FeatureCollection;
    const projection = geoNaturalEarth1().fitSize([WIDTH, HEIGHT], land);
    return { land, path: geoPath(projection), project: projection };
  }, []);

  return (
    <div>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full rounded-lg bg-sky-50" role="img" aria-label="Lesson map">
        {land.features.map((f, i) => (
          <path key={i} d={path(f) ?? undefined} fill="#eef2f7" stroke="#fff" strokeWidth={0.4} />
        ))}

        {(content.polygons ?? []).map((p) => {
          const poly: Polygon = { type: "Polygon", coordinates: [flip(p.coords)] };
          return <path key={p.id} d={path(poly) ?? undefined} fill={p.fillColor ?? p.color ?? "#99999933"} stroke={p.color ?? "#888"} strokeWidth={0.6} />;
        })}

        {(content.lines ?? []).map((l) => {
          const line: LineString = { type: "LineString", coordinates: flip(l.coords) };
          return <path key={l.id} d={path(line) ?? undefined} fill="none" stroke={l.color ?? "#8B4513"} strokeWidth={1.5} strokeDasharray="4 3" />;
        })}

        {(content.markers ?? []).map((m) => {
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
              <title>{m.title}</title>
            </circle>
          );
        })}
      </svg>

      {active ? (
        <div className="mt-3 rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800">
          <p className="font-semibold">{active.title}</p>
          {active.description ? <p className="mt-1 text-neutral-600 dark:text-neutral-400">{active.description}</p> : null}
        </div>
      ) : (content.markers?.length ?? 0) > 0 ? (
        <p className="mt-2 text-sm text-neutral-500">Tap a point on the map for details.</p>
      ) : null}
    </div>
  );
}
