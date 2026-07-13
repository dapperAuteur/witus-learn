"use client";

import { useRef, useState } from "react";
import { EpisodeDetail, type MapPin } from "./episode-detail";

// "What's on the map" — the named episode list.
//
// These used to be <Link>s straight into /episode/<id>: one click and a visitor who had read two
// paragraphs of the landing page was gone. Now each name is a disclosure button that reveals the
// episode IN PLACE (what it covers, what is in it, its sources), and opening the episode is an
// explicit second step inside that panel. Same component the map pins use, so the two never drift.
//
// Season is surfaced here as STRUCTURE (a heading per season, derived from the pins themselves)
// rather than as a filter bar over the map — which is what BAM asked to lose. Headings only appear
// when the tenant actually has more than one season; a single-season school sees a plain list.

function groupBySeason(pins: MapPin[]): { season: number | null; pins: MapPin[] }[] {
  const groups = new Map<number | null, MapPin[]>();
  for (const p of pins) {
    const key = p.seasonNumber ?? null;
    const existing = groups.get(key);
    if (existing) existing.push(p);
    else groups.set(key, [p]);
  }
  return [...groups.entries()]
    .map(([season, pins]) => ({ season, pins }))
    .sort((a, b) => {
      // Unseasoned pins last; otherwise ascending season number.
      if (a.season == null) return 1;
      if (b.season == null) return -1;
      return a.season - b.season;
    });
}

export function EpisodeExplorer({ pins }: { pins: MapPin[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const pillRefs = useRef(new Map<string, HTMLButtonElement | null>());

  const groups = groupBySeason(pins);
  const showHeadings = groups.filter((g) => g.season != null).length > 1;
  const selected = pins.find((p) => p.id === selectedId) ?? null;

  function close() {
    const id = selectedId;
    setSelectedId(null);
    if (id) pillRefs.current.get(id)?.focus();
  }

  return (
    <div className="mt-5 space-y-6">
      {groups.map((g) => {
        const selectedHere = selected && g.pins.some((p) => p.id === selected.id) ? selected : null;
        return (
          <div key={g.season ?? "none"}>
            {showHeadings && g.season != null ? (
              <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                Season {g.season}
              </h3>
            ) : null}

            <ul className="mt-3 flex flex-wrap gap-2">
              {g.pins.map((c) => {
                const isOpen = selectedId === c.id;
                return (
                  <li key={c.id}>
                    <button
                      type="button"
                      ref={(el) => {
                        pillRefs.current.set(c.id, el);
                      }}
                      onClick={() => setSelectedId(isOpen ? null : c.id)}
                      aria-expanded={isOpen}
                      aria-controls={isOpen ? `episode-detail-${c.id}` : undefined}
                      className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12 ${
                        isOpen
                          ? "border-current font-medium"
                          : "border-neutral-300 hover:border-current dark:border-neutral-700"
                      }`}
                      style={isOpen ? { color: c.color ?? "var(--accent)" } : undefined}
                    >
                      <span
                        aria-hidden
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: c.color ?? "var(--accent)" }}
                      />
                      <span className="font-medium">{c.name}</span>
                      {c.geo ? (
                        <span className="text-neutral-500 dark:text-neutral-400">· {c.geo}</span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* The panel opens directly under the group it belongs to, so on a phone the detail
                is next to the thing you tapped rather than at the bottom of a long list. */}
            {selectedHere ? (
              <EpisodeDetail
                key={selectedHere.id}
                id={`episode-detail-${selectedHere.id}`}
                pin={selectedHere}
                onClose={close}
                className="mt-4 bg-white dark:bg-neutral-900"
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
