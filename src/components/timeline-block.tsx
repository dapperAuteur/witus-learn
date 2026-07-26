import { timelineLanes, type TimelineEvent } from "@/lib/timeline";

// Renders a `:::timeline` block: a vertical, dated list on one shared time axis. When events carry
// lanes (two tracks, e.g. "built" vs "done"), each lane gets a colour and a legend, so the
// co-occurrence reads at a glance without a fragile two-column layout on mobile. Pure static markup:
// no state, no client JS, works offline. Theme-aware via CSS variables and dark: pairs.

// A small, colour-blind-friendly palette. The first lane uses the tenant accent so the timeline sits
// in the brand; the rest are distinct hues.
const LANE_COLORS = ["var(--accent)", "#b45309", "#0f766e", "#7c3aed"];

export function TimelineBlock({ title, events }: { title?: string; events: TimelineEvent[] }) {
  if (events.length === 0) return null;
  const lanes = timelineLanes(events);
  const colorOf = (lane?: string) => (lane ? LANE_COLORS[lanes.indexOf(lane) % LANE_COLORS.length] : "var(--accent)");

  return (
    <figure className="my-6 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      {title ? <figcaption className="mb-3 text-sm font-semibold">{title}</figcaption> : null}

      {lanes.length > 0 ? (
        <ul className="mb-3 flex flex-wrap gap-3" aria-label="Timeline tracks">
          {lanes.map((lane) => (
            <li key={lane} className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400">
              <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colorOf(lane) }} />
              {lane}
            </li>
          ))}
        </ul>
      ) : null}

      <ol className="relative ml-3 border-l border-neutral-200 dark:border-neutral-700">
        {events.map((e, i) => (
          <li key={i} className="relative pb-4 pl-5 last:pb-0">
            <span
              aria-hidden
              className="absolute top-1 -left-[5px] h-2.5 w-2.5 rounded-full ring-2 ring-white dark:ring-neutral-950"
              style={{ backgroundColor: colorOf(e.lane) }}
            />
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-sm font-bold tabular-nums">{e.year}</span>
              {e.lane ? (
                <span
                  className="rounded-full px-2 py-0.5 text-[11px] font-medium"
                  style={{ backgroundColor: `color-mix(in srgb, ${colorOf(e.lane)} 15%, transparent)`, color: colorOf(e.lane) }}
                >
                  {e.lane}
                </span>
              ) : null}
            </div>
            <p className="mt-0.5 text-sm text-neutral-700 dark:text-neutral-300">{e.text}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
