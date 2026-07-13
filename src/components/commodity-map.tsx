"use client";

import { useMemo, useRef, useState } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import worldData from "world-atlas/countries-110m.json";
import { EpisodeDetail, type MapPin } from "./episode-detail";

export type { MapPin };

const WIDTH = 960;
const HEIGHT = 480;

// Episode Origins: D3 Natural Earth projection, a colored pin per commodity at its origin
// lat/lon. Clicking a pin does NOT navigate — it reveals the episode in place (<EpisodeDetail>),
// and opening the episode is an explicit second step. The map is the hook; a click should deepen
// interest, not eject the visitor.
//
// There is deliberately NO season filter here any more. It used to be a hardcoded
// `SEASONS = [..., "S2 · The Oldest Toast", ...]` array, which (a) was clutter on the landing
// page — a first-time visitor filtering a map they have not read yet — and (b) hardcoded ONE
// brand's season titles into a multi-tenant component, so a second school with map data would
// have been shown Better Vice Club's episode names. The map now always renders exactly the pins
// it is given, and choosing WHICH pins is the caller's job (a tenant-scoped query), which is the
// right layer for it. Season is still surfaced — as structure in <EpisodeExplorer>, not as a
// filter bar over the map.
export function CommodityMap({ commodities }: { commodities: MapPin[] }) {
  const [selected, setSelected] = useState<MapPin | null>(null);
  // Return focus to the pin that was clicked when the panel closes, so a keyboard user is not
  // dumped back at the top of the document.
  const pinRefs = useRef(new Map<string, SVGGElement | null>());

  const { land, projection } = useMemo(() => {
    const topo = worldData as unknown as Topology;
    const land = feature(topo, topo.objects.countries as GeometryCollection) as FeatureCollection;
    const projection = geoNaturalEarth1().fitSize([WIDTH, HEIGHT], land);
    return { land, projection };
  }, []);
  const path = useMemo(() => geoPath(projection), [projection]);

  function close() {
    const id = selected?.id;
    setSelected(null);
    if (id) pinRefs.current.get(id)?.focus();
  }

  return (
    <div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full rounded-lg bg-sky-50 dark:bg-neutral-900"
        role="group"
        aria-label="World map of commodity origins. Select a pin to read about that episode."
      >
        {land.features.map((f, i) => (
          <path
            key={i}
            d={path(f) ?? undefined}
            className="fill-neutral-200 stroke-white dark:fill-neutral-700 dark:stroke-neutral-800"
            strokeWidth={0.5}
          />
        ))}
        {commodities.map((c) => {
          if (c.lat == null || c.lon == null) return null;
          const xy = projection([c.lon, c.lat]);
          if (!xy) return null;
          const r = c.isHome ? 8 : 5;
          const isSel = selected?.id === c.id;
          return (
            <g
              key={c.id}
              ref={(el) => {
                pinRefs.current.set(c.id, el);
              }}
              transform={`translate(${xy[0]},${xy[1]})`}
              className="cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2"
              role="button"
              tabIndex={0}
              aria-expanded={isSel}
              aria-label={`${c.name}${c.geo ? ` — ${c.geo}` : ""}`}
              onClick={() => setSelected(c)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(c);
                }
              }}
            >
              <title>{`${c.name} — ${c.geo ?? ""}`}</title>
              {/* A generous transparent hit area: the visible dot is 5px, which is far below a
                  44px touch target on a phone. */}
              <circle r={22} fill="transparent" />
              <circle
                r={isSel ? r + 3 : r}
                fill={c.color ?? "#888"}
                stroke="#fff"
                strokeWidth={1.5}
              />
            </g>
          );
        })}
      </svg>

      {selected ? (
        <EpisodeDetail
          pin={selected}
          onClose={close}
          className="mt-4 bg-white dark:bg-neutral-900"
        />
      ) : (
        <p className="mt-3 text-sm text-neutral-500">
          Tap a pin to read what that episode is about.
        </p>
      )}
    </div>
  );
}
