"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { geoAlbersUsa, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import usData from "us-atlas/states-10m.json";

export interface StateLink {
  href: string;
  title: string;
}

const WIDTH = 960;
const HEIGHT = 600;

// Clickable US map: a state with a civics course is filled with the tenant accent and links
// to it; states without are dimmed "coming soon." States keyed by NAME (us-atlas carries the
// state name in feature.properties.name). geoAlbersUsa insets Alaska + Hawaii.
export function UsStatesMap({ states }: { states: Record<string, StateLink> }) {
  const router = useRouter();
  const [hover, setHover] = useState<string | null>(null);

  const features = useMemo(() => {
    const topo = usData as unknown as Topology;
    const fc = feature(topo, topo.objects.states as GeometryCollection) as unknown as FeatureCollection;
    const projection = geoAlbersUsa().fitSize([WIDTH, HEIGHT], fc);
    const path = geoPath(projection);
    return fc.features.map((f) => ({
      name: String((f.properties as { name?: string } | null)?.name ?? ""),
      d: path(f) ?? "",
    }));
  }, []);

  const hovered = hover ? states[hover] : undefined;

  return (
    <div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full"
        role="img"
        aria-label="United States — choose a state to open its civics course"
      >
        {features.map(({ name, d }) => {
          const link = states[name];
          const active = !!link;
          return (
            <path
              key={name}
              d={d}
              tabIndex={active ? 0 : -1}
              role={active ? "button" : undefined}
              aria-label={active ? `${name}: ${link.title}` : `${name} — coming soon`}
              aria-disabled={active ? undefined : true}
              onClick={() => link && router.push(link.href)}
              onKeyDown={(e) => {
                if (link && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  router.push(link.href);
                }
              }}
              onMouseEnter={() => setHover(name)}
              onMouseLeave={() => setHover(null)}
              stroke="#fff"
              strokeWidth={0.5}
              className={
                active
                  ? "cursor-pointer fill-[var(--accent)] outline-none transition-opacity focus-visible:opacity-100 " +
                    (hover === name ? "opacity-100" : "opacity-80")
                  : "fill-neutral-200 dark:fill-neutral-700"
              }
            />
          );
        })}
      </svg>
      <p className="min-h-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
        {hover ? (hovered ? `${hover} — ${hovered.title}` : `${hover} — coming soon`) : "Hover or tab a highlighted state."}
      </p>
    </div>
  );
}
