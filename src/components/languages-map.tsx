"use client";

import { useMemo, useState } from "react";
import { geoCentroid, geoEqualEarth, geoInterpolate, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import worldData from "world-atlas/countries-110m.json";
import { MAP_LANGUAGES } from "@/lib/languages-map-data";

const WIDTH = 960;
const HEIGHT = 480;

// Languages map (mirrors the Commodity Map): per language, its speaker-region
// country fills (Equal Earth, mix-blend-mode:multiply so overlaps blend — e.g.
// Ewe + Twi in Ghana), a colonial/diaspora spread arc from the origin, and an
// origin pin. Click a language to focus it and start its course.
export function LanguagesMap({
  courseHrefs,
}: {
  courseHrefs?: Record<string, { href: string; title: string }>;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const { land, countryById, projection, path } = useMemo(() => {
    const topo = worldData as unknown as Topology;
    const land = feature(topo, topo.objects.countries as GeometryCollection) as FeatureCollection;
    const countryById = new Map<string, Feature<Geometry>>();
    for (const f of land.features) if (f.id != null) countryById.set(String(f.id), f);
    const projection = geoEqualEarth().fitSize([WIDTH, HEIGHT], land);
    return { land, countryById, projection, path: geoPath(projection) };
  }, []);

  // Great-circle arc origin → destination centroid, densified so it curves.
  function arc(origin: [number, number], dest: [number, number]): string {
    const interp = geoInterpolate(origin, dest);
    const pts: [number, number][] = [];
    for (let t = 0; t <= 1.0001; t += 0.04) pts.push(interp(t) as [number, number]);
    return path({ type: "LineString", coordinates: pts }) ?? "";
  }

  const sel = selected ? MAP_LANGUAGES.find((l) => l.slug === selected) ?? null : null;
  const emphasis = (slug: string) => (selected == null ? 1 : slug === selected ? 1 : 0.1);

  return (
    <div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full rounded-lg bg-sky-50"
        role="img"
        aria-label="Map of language origins and their spread"
      >
        {land.features.map((f, i) => (
          <path key={i} d={path(f) ?? undefined} fill="#eef2f7" stroke="#fff" strokeWidth={0.4} />
        ))}

        <g style={{ mixBlendMode: "multiply" }}>
          {MAP_LANGUAGES.map((lang) => (
            <g key={lang.slug} style={{ opacity: emphasis(lang.slug) }}>
              {lang.regionCodes.map((code) => {
                const f = countryById.get(String(code));
                if (!f) return null;
                return <path key={code} d={path(f) ?? undefined} fill={lang.color} fillOpacity={0.5} />;
              })}
            </g>
          ))}
        </g>

        {MAP_LANGUAGES.map((lang) => {
          const o = projection(lang.origin.coords);
          return (
            <g key={lang.slug} style={{ opacity: emphasis(lang.slug) }}>
              {lang.spreadCodes.map((code) => {
                const f = countryById.get(String(code));
                if (!f) return null;
                const c = geoCentroid(f) as [number, number];
                return (
                  <path
                    key={code}
                    d={arc(lang.origin.coords, c)}
                    fill="none"
                    stroke={lang.color}
                    strokeWidth={1.2}
                    strokeOpacity={0.7}
                    strokeDasharray="3 3"
                  />
                );
              })}
              {o ? (
                <circle
                  cx={o[0]}
                  cy={o[1]}
                  r={selected === lang.slug ? 6 : 4}
                  fill={lang.color}
                  stroke="#fff"
                  strokeWidth={1.5}
                />
              ) : null}
            </g>
          );
        })}
      </svg>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {MAP_LANGUAGES.map((lang) => {
          const on = selected === lang.slug;
          return (
            <button
              key={lang.slug}
              type="button"
              onClick={() => setSelected(on ? null : lang.slug)}
              aria-pressed={on}
              className={`flex items-center gap-1.5 rounded-full border px-2 py-1 ${
                on ? "border-current" : "border-neutral-300 dark:border-neutral-700"
              }`}
            >
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: lang.color }} />
              {lang.name}
            </button>
          );
        })}
      </div>

      {sel ? (
        <div className="mt-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: sel.color }} />
            <h3 className="font-semibold">{sel.name}</h3>
            <span className="text-sm text-neutral-500">· originates in {sel.origin.name}</span>
          </div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{sel.spread}</p>
          {courseHrefs?.[sel.slug] ? (
            <a
              href={courseHrefs[sel.slug].href}
              className="mt-3 inline-block min-h-9 rounded-md px-3 py-1.5 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Start the {sel.name} course →
            </a>
          ) : (
            <p className="mt-3 text-sm text-neutral-500">Course coming soon.</p>
          )}
        </div>
      ) : (
        <p className="mt-4 text-sm text-neutral-500">
          Select a language to see how it spread and to start its course.
        </p>
      )}
    </div>
  );
}
