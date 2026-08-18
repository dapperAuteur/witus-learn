"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { LessonSearchResult } from "@/lib/course-search";

// In-course search box (plans/61 §5). Debounced input → GET /api/courses/[id]/search?q=, results
// link straight into the matching lesson.
//
// Phrasing discipline (decided in plans/61 §5): this searches lesson TEXT, self-checks, and the
// text attached to images (alt text, captions, credits). It is never described as "image search" —
// the app greps captions, not pixels, and the copy must not promise more than that. A figure match
// is labelled "Image:" so the learner knows what kind of thing matched.
export function CourseSearch({ courseId, basePath }: { courseId: string; basePath: string }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<LessonSearchResult[]>([]);
  const [state, setState] = useState<"idle" | "searching" | "done" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const seq = useRef(0);

  // Only a cleanup: the debounce itself lives in the change handler (an event is the right place
  // to start work; an effect body calling setState cascades renders).
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function run(q: string, mySeq: number) {
    try {
      const r = await fetch(`/api/courses/${courseId}/search?q=${encodeURIComponent(q)}`);
      if (mySeq !== seq.current) return; // a newer query is in flight
      if (!r.ok) {
        setState("error");
        setResults([]);
        return;
      }
      const data = (await r.json()) as { results: LessonSearchResult[] };
      if (mySeq !== seq.current) return;
      setResults(data.results);
      setState("done");
    } catch {
      if (mySeq === seq.current) {
        setState("error");
        setResults([]);
      }
    }
  }

  function onChange(value: string) {
    setQuery(value);
    if (timer.current) clearTimeout(timer.current);
    const q = value.trim();
    const mySeq = ++seq.current; // invalidate any in-flight response either way
    if (q.length < 2) {
      setResults([]);
      setState("idle");
      return;
    }
    setState("searching");
    timer.current = setTimeout(() => void run(q, mySeq), 300);
  }

  const kindPrefix = (kind: LessonSearchResult["kind"]) =>
    kind === "figure" ? "Image: " : kind === "reveal" ? "Self-check: " : "";

  return (
    <div>
      <label htmlFor="course-search-q" className="block text-sm font-medium">
        Find a word or phrase in this course
      </label>
      <input
        id="course-search-q"
        type="search"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        maxLength={200}
        placeholder="e.g. a term, a date, a name"
        autoComplete="off"
        className="mt-2 w-full min-h-11 rounded-md border border-neutral-300 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12"
      />
      <p className="mt-1 text-xs text-neutral-500">
        Searches lesson text, self-checks, and image descriptions (alt text, captions, credits).
      </p>

      <p role="status" aria-live="polite" className="mt-2 min-h-5 text-sm text-neutral-500">
        {state === "searching"
          ? "Searching…"
          : state === "error"
            ? "Search didn't work just now. Try again."
            : state === "done" && results.length === 0
              ? "No matches in this course. Search covers lesson text, self-checks, and image descriptions (alt text, captions, credits)."
              : state === "done"
                ? `${results.length} ${results.length === 1 ? "match" : "matches"}`
                : ""}
      </p>

      {results.length > 0 ? (
        <ul className="mt-1 space-y-2">
          {results.map((r, i) => (
            <li key={`${r.lessonId}-${i}`}>
              <Link
                href={r.slug ? `${basePath}/lesson/${r.slug}` : basePath}
                className="block min-h-11 rounded-lg border border-neutral-200 px-3 py-2 transition hover:border-neutral-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800 dark:hover:border-neutral-700"
              >
                <span className="block text-sm font-medium">{r.title}</span>
                {r.kind !== "title" ? (
                  <span className="mt-0.5 block text-xs text-neutral-500">
                    {kindPrefix(r.kind)}
                    {r.snippet}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
