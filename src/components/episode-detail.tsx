"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

// One episode, explained IN PLACE.
//
// The landing page's job is to deepen interest, not to eject the visitor. Clicking a pin or an
// episode name therefore opens THIS panel — what the episode is, where it comes from, what is in
// it — and opening the actual episode/course is a deliberate SECOND step (the CTA at the bottom).
//
// Shared by <CommodityMap> (the pin panel) and <EpisodeExplorer> (the named list) so the two
// surfaces can never drift apart in what they promise about an episode.

export interface MapPin {
  id: string;
  name: string;
  geo: string | null;
  lat: number | null;
  lon: number | null;
  color: string | null;
  seasonNumber: number | null;
  isHome: boolean;
  courseId: string | null;
  episodeLabel: string | null;
  summary: string | null;
  /** Published lessons in this episode's course (0 when the course isn't written yet). */
  lessons?: number;
  /** Cited sources behind this episode's course. */
  sources?: number;
}

function plural(n: number, singular: string): string {
  return n === 1 ? singular : `${singular}s`;
}

export function EpisodeDetail({
  pin,
  onClose,
  /** Focus the panel when it opens — right for a click-to-reveal panel, so a keyboard or screen
   *  reader user lands on the content they just asked for instead of being left behind. */
  autoFocus = true,
  id,
  className,
}: {
  pin: MapPin;
  onClose: () => void;
  autoFocus?: boolean;
  /** Lets the control that opened the panel point at it with aria-controls. */
  id?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoFocus) ref.current?.focus();
  }, [autoFocus, pin.id]);

  // Escape closes — and the caller returns focus to the control that opened us.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const lessons = pin.lessons ?? 0;
  const sources = pin.sources ?? 0;
  // Only claim what this episode actually has. A course that isn't written yet says so, rather
  // than showing a confident "0 lessons".
  const facts = [
    lessons > 0 ? `${lessons} ${plural(lessons, "lesson")}` : null,
    sources > 0 ? `${sources} cited ${plural(sources, "source")}` : null,
  ].filter((f): f is string => f !== null);

  return (
    <div
      ref={ref}
      id={id}
      tabIndex={-1}
      role="group"
      aria-label={`${pin.name}, episode detail`}
      className={`rounded-xl border-2 p-4 focus-visible:outline-2 focus-visible:outline-offset-2 sm:p-5 ${className ?? ""}`}
      style={{ borderColor: pin.color ?? "var(--accent)" }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          {pin.episodeLabel ? (
            <p className="text-xs uppercase tracking-wide text-neutral-600">{pin.episodeLabel}</p>
          ) : null}
          <h3 className="text-lg font-semibold wrap-break-word">{pin.name}</h3>
          {pin.geo ? (
            <p className="text-sm text-neutral-600 wrap-break-word">{pin.geo}</p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={`Close ${pin.name}`}
          className="-m-2 flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded text-neutral-400 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:text-neutral-200 pointer-coarse:min-h-12 pointer-coarse:min-w-12"
        >
          ✕
        </button>
      </div>

      {pin.summary ? (
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          {pin.summary}
        </p>
      ) : null}

      {facts.length > 0 ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {facts.map((f) => (
            <li
              key={f}
              className="rounded-full border border-neutral-300 px-2.5 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
            >
              {f}
            </li>
          ))}
        </ul>
      ) : null}

      {/* Leaving the page is the SECOND step, and always an explicit one. */}
      <Link
        href={`/episode/${pin.id}`}
        className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
        style={{ backgroundColor: pin.color ?? "var(--accent)" }}
      >
        {lessons > 0 ? "Open the episode →" : "Read the episode →"}
      </Link>
    </div>
  );
}
