"use client";

import { useId, useMemo, useState } from "react";
import { geoAlbersUsa, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import usData from "us-atlas/states-10m.json";

// The Great Migration map — a teaching visual, not tenant data (see CLAUDE.md's multi-tenancy
// rule: this component ships no DB query and is safe to reuse across tenants). Palette is
// deliberately DIFFERENT from the civics map (blue/red, a US theme): green states, BLACK
// outlines, and RED on hover/select — the Pan-African palette, matching the design doc
// (plans/future-courses/great-migration.md). Reuses the same d3-geo + us-atlas approach as
// <UsStatesMap> so both maps stay visually consistent in projection and interaction pattern.
//
// Shows the three migration streams (Southeast→Northeast, Mississippi Valley→Midwest,
// Texas/Louisiana→West) as arrows, plus four clickable destination features (Chicago/
// Bronzeville, Harlem, Detroit/Paradise Valley, and Vanport — the Second Great Migration's
// Pacific NW thread). Every factual tab is cited to the same sources as the course lessons
// (scripts/data/great-migration-course.ts); the "story" tab is a clearly labeled illustrative
// vignette (fiction grounded in real, cited conditions — never a documented individual),
// per the design doc's rule for the map's story cards.

const WIDTH = 960;
const HEIGHT = 600;

type TabKey = "story" | "event" | "figure" | "art";

interface FeatureTab {
  label: string;
  title: string;
  body: string;
  source?: string;
}

interface DestinationFeature {
  id: string;
  name: string;
  lon: number;
  lat: number;
  tabs: Record<TabKey, FeatureTab>;
}

interface Stream {
  id: string;
  label: string;
  origin: [number, number]; // [lon, lat]
  destination: [number, number];
}

const TAB_ORDER: TabKey[] = ["story", "event", "figure", "art"];

const STREAMS: Stream[] = [
  { id: "se-ne", label: "Southeast → Northeast (Carolinas/Georgia → NYC)", origin: [-81.0348, 34.0007], destination: [-73.9465, 40.8116] },
  { id: "msv-mw", label: "Mississippi Valley → Midwest (Delta → Chicago)", origin: [-90.5709, 34.2001], destination: [-87.6298, 41.8781] },
  { id: "tx-w", label: "Texas/Louisiana → West (→ Los Angeles)", origin: [-90.0715, 29.9511], destination: [-118.2437, 34.0522] },
];

const FEATURES: DestinationFeature[] = [
  {
    id: "chicago",
    name: "Chicago, Bronzeville",
    lon: -87.6298,
    lat: 41.8781,
    tabs: {
      story: {
        label: "Story",
        title: "A one-way ticket, 1917",
        body: "Illustrative vignette (a composite, not a documented individual): a young sharecropper's family sells what little they can carry, boards the Illinois Central at a Delta depot, and steps off two days later into the noise and cold of Chicago's 12th Street Station, the start of a new life in Bronzeville.",
      },
      event: {
        label: "Event",
        title: "The 1919 Chicago race riot",
        body: "Red Summer's deadliest single episode: five days of violence (July 27-August 3, 1919) left 38 people dead, 23 Black, 15 white, about 537 injured, and 1,000-2,000 people, mostly Black, homeless after arson destroyed their housing.",
        source: "Wikipedia, \"Chicago race riot of 1919\"",
      },
      figure: {
        label: "Figure",
        title: "Robert S. Abbott (1870-1940)",
        body: "Founded the Chicago Defender in May 1905; by 1917 it was the first Black newspaper with national circulation and 100,000 readers, smuggled South by Pullman porters and openly recruiting migrants north.",
        source: "BlackPast, \"Robert Sengstacke Abbott\"",
      },
      art: {
        label: "Art",
        title: "Gwendolyn Brooks, A Street in Bronzeville (1945)",
        body: "Brooks's first poetry collection, published when she was 28, draws directly on Bronzeville street life, including \"kitchenette building,\" inspired by her own subdivided Chicago apartment.",
        source: "Poetry Foundation, \"Gwendolyn Brooks\"",
      },
    },
  },
  {
    id: "harlem",
    name: "Harlem",
    lon: -73.9465,
    lat: 40.8116,
    tabs: {
      story: {
        label: "Story",
        title: "Arriving at Penn Station",
        body: "Illustrative vignette (a composite, not a documented individual): a family from the Carolinas steps off the train at Penn Station and rides the subway uptown for the first time, the last leg of the Southeast → Northeast stream, ending in a rented room in Harlem.",
      },
      event: {
        label: "Event",
        title: "The New Negro (1925)",
        body: "Philosopher Alain Locke's anthology gave the Harlem Renaissance its name and argument: that Black Americans were claiming a new, modern, urban self-image. The movement it named ran roughly 1918-1937, peaking in the 1920s.",
        source: "Wikipedia, \"The New Negro\"; Britannica, \"Harlem Renaissance\"",
      },
      figure: {
        label: "Figure",
        title: "Langston Hughes",
        body: "Poet at the center of the Harlem Renaissance, whose work repeatedly returned to migration, the North, and the search for a better life, themes drawn directly from the community the Migration built around him.",
      },
      art: {
        label: "Art",
        title: "Jacob Lawrence, The Migration Series (1940-41)",
        body: "60 tempera panels telling the Migration's story visually, begun in 1940 on a Rosenwald Foundation grant and completed in 1941. Lawrence grew up in a Migration-era Harlem household; the series is jointly held today by MoMA and the Phillips Collection.",
        source: "Wikipedia, \"The Migration Series\"",
      },
    },
  },
  {
    id: "detroit",
    name: "Detroit, Paradise Valley",
    lon: -83.0458,
    lat: 42.3314,
    tabs: {
      story: {
        label: "Story",
        title: "The auto-plant shift whistle",
        body: "Illustrative vignette (a composite, not a documented individual): a migrant from Alabama lines up before dawn outside an auto plant gate, one of thousands drawn by wages no Southern county could match.",
      },
      event: {
        label: "Event",
        title: "Detroit's fastest decade",
        body: "Detroit's Black population grew from 5,741 in 1910 to 40,838 in 1920, about +611% in a single decade, as the auto industry hired aggressively for war and postwar production.",
        source: "Wikipedia, \"Demographic history of Detroit\"",
      },
      figure: {
        label: "Figure",
        title: "Berry Gordy Jr.",
        body: "Founder of Motown (Tamla Records, January 1959), born and raised in the Migration-built Black Detroit his parents' generation helped create, Motown's sound is, in a direct sense, a product of the Migration.",
        source: "Wikipedia, \"Motown\"",
      },
      art: {
        label: "Art",
        title: "Paradise Valley's nightclubs",
        body: "Known as the \"Harlem of Detroit,\" Paradise Valley's Black-owned nightclubs, the Flame Show Bar among them, booked major performers including Duke Ellington and Billie Holiday for mixed audiences.",
        source: "Detroit Historical Society, \"Paradise Valley\"",
      },
    },
  },
  {
    id: "vanport",
    name: "Vanport, Oregon",
    lon: -122.68,
    lat: 45.6,
    tabs: {
      story: {
        label: "Story",
        title: "A welder's torch, 1943",
        body: "Illustrative vignette (a composite, not a documented individual): a Black woman from Louisiana, newly trained as a welder, joins the night shift at a Kaiser shipyard, part of the Second Great Migration's wartime westward push, and of the wartime opening of industrial jobs to women.",
      },
      event: {
        label: "Event",
        title: "The Vanport flood (May 30, 1948)",
        body: "A railroad-embankment levee never built to hold back floodwater collapsed on Memorial Day; the Columbia River submerged Oregon's second-largest city within hours. 15 people died, and sources commonly cite 17,000-18,000 left homeless.",
        source: "Wikipedia, \"1948 Columbia River flood\"",
      },
      figure: {
        label: "Figure",
        title: "Quintard Taylor (1948-2025)",
        body: "The foundational historian of Black life in the Pacific Northwest; founder of BlackPast.org and longtime University of Washington professor, whose scholarship recovered this Second Great Migration thread.",
        source: "BlackPast, \"Quintard Taylor, Jr.\"",
      },
      art: {
        label: "Art",
        title: "Good Work, Sister! (1982)",
        body: "An oral-history project by the Northwest Women's History Project (founded 1978), recording more than 30 interviews with Portland- and Vancouver-area shipyard women, including Black welders and riveters, and touring as a slideshow presentation.",
      },
    },
  },
];

function curvedPath(x1: number, y1: number, x2: number, y2: number): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  // Perpendicular offset for a gentle arc, proportional to segment length.
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const offset = Math.min(len * 0.18, 90);
  const cx = mx - (dy / len) * offset;
  const cy = my + (dx / len) * offset;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

export function GreatMigrationMap({ initialFocus }: { initialFocus?: string }) {
  const reactId = useId();
  const [hoverState, setHoverState] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(
    initialFocus && FEATURES.some((f) => f.id === initialFocus) ? initialFocus : null,
  );
  const [activeTab, setActiveTab] = useState<TabKey>("story");

  const { statePaths, project } = useMemo(() => {
    const topo = usData as unknown as Topology;
    const fc = feature(topo, topo.objects.states as GeometryCollection) as unknown as FeatureCollection;
    const projection = geoAlbersUsa().fitSize([WIDTH, HEIGHT], fc);
    const path = geoPath(projection);
    const paths = fc.features.map((f) => ({
      name: String((f.properties as { name?: string } | null)?.name ?? ""),
      d: path(f) ?? "",
    }));
    const proj = (lon: number, lat: number): [number, number] => projection([lon, lat]) ?? [0, 0];
    return { statePaths: paths, project: proj };
  }, []);

  const selected = selectedId ? FEATURES.find((f) => f.id === selectedId) : undefined;
  const arrowId = `${reactId}-arrow`;
  const tablistId = `${reactId}-tablist`;

  return (
    <div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full"
        role="img"
        aria-label="The Great Migration, a map of the three migration streams and four destination cities. Select a city marker below the map, or tab to it, to open its story."
      >
        <defs>
          <marker id={arrowId} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#b91c1c" />
          </marker>
        </defs>

        {/* States: green fill, black outline, red on hover — the Pan-African palette. */}
        {statePaths.map(({ name, d }) => (
          <path
            key={name}
            d={d}
            stroke="#000"
            strokeWidth={0.75}
            onMouseEnter={() => setHoverState(name)}
            onMouseLeave={() => setHoverState(null)}
            className={
              "transition-colors " + (hoverState === name ? "fill-red-600" : "fill-green-600 dark:fill-green-700")
            }
          />
        ))}

        {/* Migration streams: three arrows, red on green. Decorative (semantics live in the
            legend below), so hidden from the accessibility tree to avoid noise. */}
        <g aria-hidden="true">
          {STREAMS.map((s) => {
            const [x1, y1] = project(s.origin[0], s.origin[1]);
            const [x2, y2] = project(s.destination[0], s.destination[1]);
            return (
              <path
                key={s.id}
                d={curvedPath(x1, y1, x2, y2)}
                fill="none"
                stroke="#b91c1c"
                strokeWidth={3}
                strokeDasharray="8 6"
                markerEnd={`url(#${arrowId})`}
                className="gm-stream"
              />
            );
          })}
        </g>

        {/* Destination pins: clickable + keyboard-focusable, amber fill, red on hover/focus. */}
        {FEATURES.map((f) => {
          const [x, y] = project(f.lon, f.lat);
          const isSelected = selectedId === f.id;
          return (
            <g key={f.id}>
              <circle
                cx={x}
                cy={y}
                r={isSelected ? 10 : 8}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                aria-label={`${f.name}, open story, event, figure, and art`}
                onClick={() => {
                  setSelectedId(f.id);
                  setActiveTab("story");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedId(f.id);
                    setActiveTab("story");
                  }
                }}
                stroke="#000"
                strokeWidth={1.5}
                className={
                  "cursor-pointer outline-none transition-colors focus-visible:fill-red-600 " +
                  (isSelected ? "fill-red-600" : "fill-amber-400 hover:fill-red-600")
                }
              />
              <text x={x} y={y - 14} textAnchor="middle" className="pointer-events-none fill-current text-[11px] font-semibold">
                {f.name.split(", ")[0]}
              </text>
            </g>
          );
        })}
      </svg>

      {/* prefers-reduced-motion is handled globally (src/app/globals.css forces near-zero
          animation-duration), so this marching-ants effect is automatically disabled there. */}
      <style>{`
        .gm-stream { animation: gm-dash 1.2s linear infinite; }
        @keyframes gm-dash { to { stroke-dashoffset: -28; } }
      `}</style>

      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-neutral-600 dark:text-neutral-400">
        <span className="font-semibold text-neutral-700 dark:text-neutral-300">Migration streams:</span>
        {STREAMS.map((s) => (
          <span key={s.id} className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="inline-block h-0.5 w-4 bg-red-700" />
            {s.label}
          </span>
        ))}
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-4">
        {FEATURES.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => {
              setSelectedId(f.id);
              setActiveTab("story");
            }}
            aria-pressed={selectedId === f.id}
            className={
              "min-h-9 rounded-md border px-3 py-1.5 text-left text-sm transition-colors " +
              (selectedId === f.id
                ? "border-red-600 bg-red-50 text-red-800 dark:border-red-500 dark:bg-red-950 dark:text-red-200"
                : "border-neutral-200 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800")
            }
          >
            {f.name}
          </button>
        ))}
      </div>

      {selected ? (
        <div className="mt-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <h3 className="text-lg font-bold">{selected.name}</h3>
          <div role="tablist" id={tablistId} aria-label={`${selected.name} details`} className="mt-2 flex gap-1 border-b border-neutral-200 dark:border-neutral-800">
            {TAB_ORDER.map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                id={`${tablistId}-${key}`}
                aria-selected={activeTab === key}
                aria-controls={`${tablistId}-panel`}
                tabIndex={activeTab === key ? 0 : -1}
                onClick={() => setActiveTab(key)}
                className={
                  "min-h-9 rounded-t-md px-3 py-1.5 text-sm font-medium transition-colors " +
                  (activeTab === key
                    ? "border-b-2 border-red-600 text-red-700 dark:text-red-400"
                    : "text-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-200")
                }
              >
                {selected.tabs[key].label}
              </button>
            ))}
          </div>
          <div
            role="tabpanel"
            id={`${tablistId}-panel`}
            aria-labelledby={`${tablistId}-${activeTab}`}
            className="mt-3"
          >
            <p className="font-semibold">{selected.tabs[activeTab].title}</p>
            <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{selected.tabs[activeTab].body}</p>
            {selected.tabs[activeTab].source ? (
              <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-500">Source: {selected.tabs[activeTab].source}</p>
            ) : null}
          </div>
        </div>
      ) : (
        <p className="mt-4 text-sm text-neutral-600">
          Select a marker (Chicago, Harlem, Detroit, or Vanport) to open its story, event, figure, and art.
        </p>
      )}
    </div>
  );
}
