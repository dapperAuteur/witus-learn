"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { geoOrthographic, geoNaturalEarth1, geoPath, geoGraticule10, geoDistance } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import worldData from "world-atlas/countries-110m.json";

// The explore globe (plans/45): a rotating, draggable orthographic globe where zoom controls pin
// DENSITY (semantic zoom), not just dot size. Drag rotates, wheel/buttons/keys zoom, and a pin on the
// far hemisphere is hidden via geoDistance > PI/2. Everything is arithmetic on data already in the
// browser, so it works offline. The plan's non-negotiables are here: a flat-view toggle (same data,
// Natural Earth projection), keyboard rotate/zoom, and the pin list rendered as REAL TEXT beside the
// globe, which is both the accessibility affordance and the no-JS / offline fallback.

export interface GlobeMarker {
  id: string;
  lat: number;
  lng: number;
  title: string;
  href: string;
  tier: 1 | 2 | 3;
  /** Optional year this place enters the record. When present anywhere, the globe gains a year brush
   *  that reveals dated pins over time; a pin with no year always shows. */
  year?: number;
}

const W = 640;
const H = 560;
const BASE = 250; // orthographic radius at zoom 1
const MIN_Z = 0.75;
const MAX_Z = 4;

// Semantic zoom: how much detail the current zoom reveals. Zoomed out shows only tier-1 hubs.
function tierThreshold(zoom: number): 1 | 2 | 3 {
  if (zoom < 1.3) return 1;
  if (zoom < 2.2) return 2;
  return 3;
}

export function ExploreGlobe({ markers }: { markers: GlobeMarker[] }) {
  const [flat, setFlat] = useState(false);
  const [rot, setRot] = useState<[number, number]>([-20, -15]); // [lambda, phi]
  const [zoom, setZoom] = useState(1);
  const [spinning, setSpinning] = useState(true);
  const [active, setActive] = useState<GlobeMarker | null>(null);
  const drag = useRef<{ x: number; y: number } | null>(null);

  // The year brush (plans/45 Idea 1): distinct years across dated markers. When present, "as of"
  // reveals dated pins over time; undated pins always show. Starts at the end (all visible).
  const years = useMemo(() => {
    const set = new Set<number>();
    for (const m of markers) if (typeof m.year === "number") set.add(m.year);
    return [...set].sort((a, b) => a - b);
  }, [markers]);
  const timed = years.length > 0;
  const minYear = years[0] ?? 0;
  const maxYear = years[years.length - 1] ?? 0;
  const [asOf, setAsOf] = useState<number>(maxYear || 0);

  const land = useMemo(() => {
    const topo = worldData as unknown as Topology;
    return feature(topo, topo.objects.countries as GeometryCollection) as FeatureCollection;
  }, []);

  // Gentle auto-spin until the user drags (or pauses). Stops while dragging.
  useEffect(() => {
    if (!spinning || flat) return;
    const id = setInterval(() => {
      if (drag.current) return;
      setRot(([l, p]) => [(l + 0.3) % 360, p]);
    }, 60);
    return () => clearInterval(id);
  }, [spinning, flat]);

  const projection = useMemo(() => {
    if (flat) return geoNaturalEarth1().fitSize([W, H], land);
    return geoOrthographic()
      .translate([W / 2, H / 2])
      .scale(BASE * zoom)
      .rotate([rot[0], rot[1]]);
  }, [flat, zoom, rot, land]);

  const path = useMemo(() => geoPath(projection), [projection]);
  const threshold = tierThreshold(zoom);
  // The point facing the viewer, for far-hemisphere culling.
  const center: [number, number] = [-rot[0], -rot[1]];

  // Which markers render: within the density tier, within the year brush (undated always pass), and
  // (on the globe) on the near hemisphere.
  const shown = markers.filter((m) => {
    // A DATED pin bypasses the density tier while a year brush is on screen. Without this the
    // brush looks broken: the default zoom allows tier 1 only, and just one of the dated pins is
    // tier 1, so dragging the year changed nothing a viewer could see. The brush exists to reveal
    // dated pins over time, so the pins it governs have to be reachable at the zoom it ships at.
    if (m.tier > threshold && !(timed && typeof m.year === "number")) return false;
    if (typeof m.year === "number" && m.year > asOf) return false;
    if (flat) return true;
    return geoDistance([m.lng, m.lat], center) <= Math.PI / 2;
  });

  function onKeyDown(e: React.KeyboardEvent) {
    const step = 8;
    if (e.key === "ArrowLeft") setRot(([l, p]) => [l - step, p]);
    else if (e.key === "ArrowRight") setRot(([l, p]) => [l + step, p]);
    else if (e.key === "ArrowUp") setRot(([l, p]) => [l, Math.min(90, p + step)]);
    else if (e.key === "ArrowDown") setRot(([l, p]) => [l, Math.max(-90, p - step)]);
    else if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(MAX_Z, z * 1.2));
    else if (e.key === "-") setZoom((z) => Math.max(MIN_Z, z / 1.2));
    else return;
    e.preventDefault();
    setSpinning(false);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_18rem]">
      <div>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <button type="button" onClick={() => setFlat((f) => !f)} className="rounded-md border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700">
            {flat ? "Show globe" : "Flat map"}
          </button>
          {!flat ? (
            <button type="button" onClick={() => setSpinning((s) => !s)} className="rounded-md border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700">
              {spinning ? "Pause spin" : "Spin"}
            </button>
          ) : null}
          <button type="button" onClick={() => { setZoom((z) => Math.max(MIN_Z, z / 1.3)); setSpinning(false); }} aria-label="Zoom out" className="h-8 w-8 rounded-md border border-neutral-300 text-lg leading-none dark:border-neutral-700">
            −
          </button>
          <button type="button" onClick={() => { setZoom((z) => Math.min(MAX_Z, z * 1.3)); setSpinning(false); }} aria-label="Zoom in" className="h-8 w-8 rounded-md border border-neutral-300 text-lg leading-none dark:border-neutral-700">
            +
          </button>
          <span className="ml-1 text-xs text-neutral-500">
            {shown.length} of {markers.length} places · zoom in for more
          </span>
        </div>

        {timed ? (
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <input
              type="range"
              min={minYear}
              max={maxYear}
              step={1}
              value={asOf}
              onChange={(e) => setAsOf(Number(e.target.value))}
              className="h-2 flex-1 min-w-32 cursor-pointer accent-(--accent)"
              aria-label="Reveal places as of year"
              aria-valuetext={`As of ${asOf}`}
            />
            <span className="text-sm font-semibold tabular-nums" aria-live="polite">
              as of {asOf}
            </span>
            {asOf < maxYear ? (
              <button type="button" onClick={() => setAsOf(maxYear)} className="text-xs underline" style={{ color: "var(--accent)" }}>
                show all years
              </button>
            ) : null}
          </div>
        ) : null}

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full touch-none rounded-lg bg-sky-50 dark:bg-neutral-900"
          role="application"
          aria-label="Rotating globe of the places our courses are about. Drag to rotate, plus and minus to zoom, or use the list beside it."
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={(e) => { drag.current = { x: e.clientX, y: e.clientY }; setSpinning(false); (e.target as Element).setPointerCapture?.(e.pointerId); }}
          onPointerMove={(e) => {
            if (!drag.current || flat) return;
            const dx = e.clientX - drag.current.x;
            const dy = e.clientY - drag.current.y;
            drag.current = { x: e.clientX, y: e.clientY };
            const sens = 0.4 / zoom;
            setRot(([l, p]) => [l + dx * sens, Math.max(-90, Math.min(90, p - dy * sens))]);
          }}
          onPointerUp={() => { drag.current = null; }}
          onWheel={(e) => { setZoom((z) => Math.max(MIN_Z, Math.min(MAX_Z, z * (e.deltaY < 0 ? 1.1 : 0.9)))); setSpinning(false); }}
        >
          {!flat ? <path d={path({ type: "Sphere" }) ?? undefined} fill="#dbeafe" className="dark:fill-neutral-800" /> : null}
          {!flat ? <path d={path(geoGraticule10()) ?? undefined} fill="none" stroke="#93c5fd" strokeWidth={0.4} className="dark:stroke-neutral-700" /> : null}
          {land.features.map((f, i) => (
            <path key={i} d={path(f) ?? undefined} fill="#eef2f7" stroke="#fff" strokeWidth={0.4} className="dark:fill-neutral-700 dark:stroke-neutral-900" />
          ))}
          {shown.map((m) => {
            const xy = projection([m.lng, m.lat]);
            if (!xy) return null;
            return (
              <circle
                key={m.id}
                cx={xy[0]}
                cy={xy[1]}
                r={active?.id === m.id ? 7 : 5}
                fill={active?.id === m.id ? "#b91c1c" : "var(--accent)"}
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
            <Link href={active.href} className="mt-1 inline-block underline" style={{ color: "var(--accent)" }}>
              Open the course
            </Link>
          </div>
        ) : (
          <p className="mt-2 text-sm text-neutral-500">Drag to rotate, scroll or use + / − to zoom. Tap a point, or pick from the list.</p>
        )}
      </div>

      {/* Real text list: the accessibility affordance AND the no-JS / offline fallback. */}
      <nav aria-label="Places our courses are about" className="lg:border-l lg:border-neutral-200 lg:pl-6 lg:dark:border-neutral-800">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Every place</h2>
        <ul className="mt-2 space-y-1 text-sm">
          {markers.map((m) => (
            <li key={m.id}>
              <Link href={m.href} className="hover:underline">
                {m.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
