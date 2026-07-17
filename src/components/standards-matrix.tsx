"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Coverage, MatrixRow } from "@/lib/standards";
import { StandardsActions } from "./standards-actions";

// ─────────────────────────────────────────────────────────────────────────────
// The cross-state standards explorer — one browsable table flattening EVERY
// (state x standard x course) alignment THIS tenant can back into rows.
//
// This is a pure client view over server-fetched, ALREADY TENANT-SCOPED rows: the
// server called scopeAlignments()/flattenAlignments(), so every row here belongs to a
// course this tenant publishes. Search, filter, and sort only ever NARROW that set —
// none of them can conjure a row the server did not send, so the tenant boundary is
// preserved no matter what the teacher types.
//
// Fuzzy search is a compact, dependency-free subsequence+substring matcher (see fuzzy*
// below). A few hundred rows is well within reach of doing all of this in the browser.
// ─────────────────────────────────────────────────────────────────────────────

// ── Fuzzy matcher (no dependency) ────────────────────────────────────────────
// Per-token AND: every whitespace-separated term in the query must hit the row's
// haystack, as a substring (strong) or, failing that, an in-order subsequence
// (forgiving of dropped/typo'd characters, fzf-style). Score ranks best matches first.

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

/** Score one token against a normalized haystack. Returns -1 for no match. */
function scoreToken(token: string, hay: string): number {
  if (!token) return 0;
  const idx = hay.indexOf(token);
  if (idx >= 0) {
    // Substring hit: strong. Word-boundary starts rank above mid-word hits, earlier above later.
    const boundary = idx === 0 || /\s/.test(hay[idx - 1]!) ? 1 : 0;
    return 100 + boundary * 25 - Math.min(idx, 1000) * 0.01;
  }
  // Subsequence fallback: all of token's characters appear in order somewhere in hay.
  let h = 0;
  let firstIdx = -1;
  for (let t = 0; t < token.length; t++) {
    const c = token[t]!;
    let found = -1;
    while (h < hay.length) {
      if (hay[h] === c) {
        found = h;
        h++;
        break;
      }
      h++;
    }
    if (found === -1) return -1;
    if (firstIdx === -1) firstIdx = found;
  }
  return 40 - Math.min(firstIdx, 1000) * 0.01;
}

/** Whole-query score (sum over tokens, AND semantics). Returns -1 if any token misses. */
function fuzzyScore(query: string, hay: string): number {
  const q = normalize(query).trim();
  if (!q) return 0;
  let total = 0;
  for (const token of q.split(/\s+/)) {
    const s = scoreToken(token, hay);
    if (s < 0) return -1;
    total += s;
  }
  return total;
}

// ── Sorting ──────────────────────────────────────────────────────────────────

type SortKey = "relevance" | "state" | "code" | "subject" | "framework" | "course" | "coverage";
type SortDir = "asc" | "desc";
const coverageRank: Record<Coverage, number> = { full: 0, partial: 1 };

type Enriched = MatrixRow & { hay: string };

// ── Small style tokens (mirror the finder page's vocabulary) ─────────────────
const accent = { color: "var(--accent)" };
const chipBase =
  "inline-flex min-h-11 items-center rounded-full border px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12";
const chipIdle = `${chipBase} border-neutral-300 hover:border-current dark:border-neutral-700`;
const chipActive = `${chipBase} border-current font-semibold`;
const textLink = "font-medium underline focus-visible:outline-2 focus-visible:outline-offset-2";

function standardKey(r: MatrixRow): string {
  return `${r.frameworkId}::${r.code}`;
}

function coverageBadge(coverage: Coverage): string {
  return coverage === "full"
    ? "bg-green-100 text-green-900 dark:bg-green-950 dark:text-green-200"
    : "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200";
}

function toggle(set: Set<string>, value: string): Set<string> {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

/** A plain-text export of the currently-visible rows a homeschooler can paste into a filing. */
function matrixPlainText(rows: MatrixRow[], brand: string): string {
  const lines: string[] = [
    `Standards explorer, ${brand}`,
    `Mapped by ${brand} against the published standards; each source link shows the date its codes and text were retrieved.`,
    `Standards are revised; confirm against your jurisdiction's current requirements.`,
    `Showing ${rows.length} standard-to-course match${rows.length === 1 ? "" : "es"}.`,
    "",
  ];
  for (const r of rows) {
    lines.push(`[${r.stateName}] ${r.code} (${r.coverage.toUpperCase()}) : ${r.course.title}`);
    lines.push(`  ${r.subject} | ${r.frameworkName}`);
    lines.push(`  ${r.text}`);
    lines.push(`  Source: ${r.sourceUrl} (retrieved ${r.fetchedOn})`);
    if (r.note) lines.push(`  Note: ${r.note}`);
    lines.push("");
  }
  return lines.join("\n");
}

export function StandardsMatrix({ rows, brand }: { rows: MatrixRow[]; brand: string }) {
  const [query, setQuery] = useState("");
  const [states, setStates] = useState<Set<string>>(new Set());
  const [subjects, setSubjects] = useState<Set<string>>(new Set());
  const [coverages, setCoverages] = useState<Set<string>>(new Set());
  const [courseSlug, setCourseSlug] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("relevance");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  // Enrich once: attach the normalized search haystack. Derived from the server's rows only.
  const enriched = useMemo<Enriched[]>(
    () =>
      rows.map((r) => ({
        ...r,
        hay: normalize(
          [r.code, r.text, r.course.title, r.stateName, r.state, r.subject, r.frameworkName, r.coverage].join(
            "  ",
          ),
        ),
      })),
    [rows],
  );

  // Filter option lists, derived from the scoped rows (never a hardcoded state list — new
  // states appear here automatically as their data files land).
  const stateOptions = useMemo(() => {
    const m = new Map<string, string>();
    for (const r of rows) m.set(r.state, r.stateName);
    return [...m.entries()].map(([code, name]) => ({ code, name })).sort((a, b) => a.name.localeCompare(b.name));
  }, [rows]);
  const subjectOptions = useMemo(
    () => [...new Set(rows.map((r) => r.subject))].sort((a, b) => a.localeCompare(b)),
    [rows],
  );
  const courseOptions = useMemo(() => {
    const m = new Map<string, string>();
    for (const r of rows) m.set(r.course.slug, r.course.title);
    return [...m.entries()].map(([slug, title]) => ({ slug, title })).sort((a, b) => a.title.localeCompare(b.title));
  }, [rows]);

  // Facet filter, then fuzzy search, then sort. All narrowing — never widening.
  const visible = useMemo(() => {
    const faceted = enriched.filter(
      (r) =>
        (states.size === 0 || states.has(r.state)) &&
        (subjects.size === 0 || subjects.has(r.subject)) &&
        (coverages.size === 0 || coverages.has(r.coverage)) &&
        (courseSlug === "" || r.course.slug === courseSlug),
    );

    const scored = query.trim()
      ? faceted
          .map((r) => ({ r, score: fuzzyScore(query, r.hay) }))
          .filter((x) => x.score >= 0)
      : faceted.map((r) => ({ r, score: 0 }));

    const dir = sortDir === "asc" ? 1 : -1;
    const searching = query.trim().length > 0;
    scored.sort((a, b) => {
      if (sortKey === "relevance") {
        if (searching && b.score !== a.score) return b.score - a.score; // best match first
        // No query (or a tie): a stable, useful default — state, then code.
        const s = a.r.stateName.localeCompare(b.r.stateName);
        return s !== 0 ? s : a.r.code.localeCompare(b.r.code, undefined, { numeric: true });
      }
      let cmp = 0;
      switch (sortKey) {
        case "state":
          cmp = a.r.stateName.localeCompare(b.r.stateName);
          break;
        case "code":
          cmp = a.r.code.localeCompare(b.r.code, undefined, { numeric: true });
          break;
        case "subject":
          cmp = a.r.subject.localeCompare(b.r.subject);
          break;
        case "framework":
          cmp = a.r.frameworkName.localeCompare(b.r.frameworkName);
          break;
        case "course":
          cmp = a.r.course.title.localeCompare(b.r.course.title);
          break;
        case "coverage":
          cmp = coverageRank[a.r.coverage] - coverageRank[b.r.coverage];
          break;
      }
      if (cmp === 0) cmp = a.r.code.localeCompare(b.r.code, undefined, { numeric: true });
      return cmp * dir;
    });

    return scored.map((x) => x.r);
  }, [enriched, states, subjects, coverages, courseSlug, query, sortKey, sortDir]);

  // Rollups over the CURRENTLY VISIBLE rows, so the counts always match the table.
  const rollups = useMemo(() => {
    const stds = new Set<string>();
    const courseSet = new Set<string>();
    const stateSet = new Set<string>();
    const perCourse = new Map<string, { title: string; standards: Set<string>; states: Set<string> }>();
    const perState = new Map<string, { name: string; standards: Set<string>; courses: Set<string> }>();

    for (const r of visible) {
      const sk = standardKey(r);
      stds.add(sk);
      courseSet.add(r.course.slug);
      stateSet.add(r.state);

      const pc = perCourse.get(r.course.slug) ?? { title: r.course.title, standards: new Set(), states: new Set() };
      pc.standards.add(sk);
      pc.states.add(r.state);
      perCourse.set(r.course.slug, pc);

      const ps = perState.get(r.state) ?? { name: r.stateName, standards: new Set(), courses: new Set() };
      ps.standards.add(sk);
      ps.courses.add(r.course.slug);
      perState.set(r.state, ps);
    }

    const courses = [...perCourse.entries()]
      .map(([slug, v]) => ({ slug, title: v.title, standards: v.standards.size, states: v.states.size }))
      .sort((a, b) => b.standards - a.standards || a.title.localeCompare(b.title));
    const statesRoll = [...perState.entries()]
      .map(([code, v]) => ({ code, name: v.name, standards: v.standards.size, courses: v.courses.size }))
      .sort((a, b) => b.standards - a.standards || a.name.localeCompare(b.name));

    return {
      matches: visible.length,
      standards: stds.size,
      courses: courseSet.size,
      states: stateSet.size,
      perCourse: courses,
      perState: statesRoll,
    };
  }, [visible]);

  const anyFilter =
    query.trim() !== "" || states.size > 0 || subjects.size > 0 || coverages.size > 0 || courseSlug !== "";

  function clearAll() {
    setQuery("");
    setStates(new Set());
    setSubjects(new Set());
    setCoverages(new Set());
    setCourseSlug("");
  }

  function onSort(key: Exclude<SortKey, "relevance">) {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  const plainText = matrixPlainText(visible, brand);
  const card =
    "rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900";

  return (
    <div>
      {/* Honest-framing box — always visible, never in the footer. */}
      <section
        className="mt-6 rounded-2xl border-2 p-5 sm:p-6"
        style={{ borderColor: "var(--accent)" }}
        aria-labelledby="matrix-honesty"
      >
        <h2 id="matrix-honesty" className="text-lg font-bold">
          Read this before you rely on it
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          <strong>{brand} mapped this ourselves</strong>, against each state&apos;s published standards. It has
          not been reviewed or endorsed by any education authority. Every code and every quoted standard was
          fetched from its publisher and transcribed word for word; each source link opens the exact document,
          and shows the date it was retrieved. Standards get revised, so confirm anything you file against your
          own jurisdiction&apos;s current requirements. Where a course only partly covers a standard, the row
          says <em>partial</em> and (on the source page) says which part. Every row is a course this school
          actually publishes; nothing here claims a course you do not have.
        </p>
      </section>

      {/* Search + filters */}
      <section className="mt-8 print:hidden" aria-label="Search and filter the standards">
        <label htmlFor="matrix-search" className="block text-sm font-semibold">
          Search
        </label>
        <input
          id="matrix-search"
          type="search"
          inputMode="search"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Standard code, standard text, course, state, or subject…"
          className="mt-2 min-h-11 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-base focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12"
        />
        <p className="mt-1 text-xs text-neutral-500">
          Forgiving of typos and partial terms. Every word you type must match somewhere in the row.
        </p>

        {/* State (multi) */}
        <FilterGroup label="State">
          {stateOptions.map((s) => (
            <button
              key={s.code}
              type="button"
              onClick={() => setStates((prev) => toggle(prev, s.code))}
              aria-pressed={states.has(s.code)}
              className={states.has(s.code) ? chipActive : chipIdle}
            >
              {s.name}
            </button>
          ))}
        </FilterGroup>

        {/* Subject (multi) */}
        {subjectOptions.length > 1 ? (
          <FilterGroup label="Subject">
            {subjectOptions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSubjects((prev) => toggle(prev, s))}
                aria-pressed={subjects.has(s)}
                className={subjects.has(s) ? chipActive : chipIdle}
              >
                {s}
              </button>
            ))}
          </FilterGroup>
        ) : null}

        {/* Coverage (multi) */}
        <FilterGroup label="Coverage">
          {(["full", "partial"] as Coverage[]).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCoverages((prev) => toggle(prev, c))}
              aria-pressed={coverages.has(c)}
              className={coverages.has(c) ? chipActive : chipIdle}
            >
              {c === "full" ? "Fully covered" : "Partially covered"}
            </button>
          ))}
        </FilterGroup>

        {/* Course (single select — the list can be long) */}
        <div className="mt-4">
          <label htmlFor="matrix-course" className="block text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Course
          </label>
          <select
            id="matrix-course"
            value={courseSlug}
            onChange={(e) => setCourseSlug(e.target.value)}
            className="mt-2 min-h-11 w-full max-w-md rounded-md border border-neutral-300 bg-white px-3 py-2 text-base focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12"
          >
            <option value="">All courses</option>
            {courseOptions.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        {anyFilter ? (
          <p className="mt-4 text-sm">
            <button type="button" onClick={clearAll} className={`${textLink} min-h-11 pointer-coarse:min-h-12`} style={accent}>
              Clear search and filters
            </button>
          </p>
        ) : null}
      </section>

      {/* Headline rollup — answers "how much, across how many states" at a glance. */}
      <section className="mt-8" aria-label="Summary counts">
        <p className="text-lg" aria-live="polite">
          <strong style={accent}>{rollups.matches}</strong> standard-to-course match
          {rollups.matches === 1 ? "" : "es"} · <strong style={accent}>{rollups.standards}</strong> distinct
          standard{rollups.standards === 1 ? "" : "s"} · <strong style={accent}>{rollups.courses}</strong>{" "}
          course{rollups.courses === 1 ? "" : "s"} · <strong style={accent}>{rollups.states}</strong> state
          {rollups.states === 1 ? "" : "s"}
          {anyFilter ? <span className="text-neutral-500"> (of {rows.length} total)</span> : null}
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Per-course: BAM's exact question. */}
          <details className="rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800" open>
            <summary className="cursor-pointer text-sm font-semibold">
              By course: how many standards each course meets, across how many states
            </summary>
            <ul className="mt-3 max-h-72 space-y-1.5 overflow-y-auto pr-1 text-sm">
              {rollups.perCourse.map((c) => (
                <li key={c.slug}>
                  <button
                    type="button"
                    onClick={() => setCourseSlug((cur) => (cur === c.slug ? "" : c.slug))}
                    aria-pressed={courseSlug === c.slug}
                    className={`flex min-h-11 w-full items-center justify-between gap-3 rounded-md px-2 py-1.5 text-left hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-800 pointer-coarse:min-h-12 ${courseSlug === c.slug ? "font-semibold" : ""}`}
                  >
                    <span className="min-w-0 truncate">{c.title}</span>
                    <span className="shrink-0 text-neutral-600 dark:text-neutral-400">
                      <strong style={accent}>{c.standards}</strong> standard{c.standards === 1 ? "" : "s"} ·{" "}
                      {c.states} state{c.states === 1 ? "" : "s"}
                    </span>
                  </button>
                </li>
              ))}
              {rollups.perCourse.length === 0 ? <li className="px-2 text-neutral-500">No courses match.</li> : null}
            </ul>
          </details>

          {/* Per-state rollup. */}
          <details className="rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800" open>
            <summary className="cursor-pointer text-sm font-semibold">
              By state: standards mapped and courses that meet them
            </summary>
            <ul className="mt-3 max-h-72 space-y-1.5 overflow-y-auto pr-1 text-sm">
              {rollups.perState.map((s) => (
                <li key={s.code}>
                  <button
                    type="button"
                    onClick={() => setStates((prev) => toggle(prev, s.code))}
                    aria-pressed={states.has(s.code)}
                    className={`flex min-h-11 w-full items-center justify-between gap-3 rounded-md px-2 py-1.5 text-left hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-800 pointer-coarse:min-h-12 ${states.has(s.code) ? "font-semibold" : ""}`}
                  >
                    <span className="min-w-0 truncate">{s.name}</span>
                    <span className="shrink-0 text-neutral-600 dark:text-neutral-400">
                      <strong style={accent}>{s.standards}</strong> standard{s.standards === 1 ? "" : "s"} ·{" "}
                      {s.courses} course{s.courses === 1 ? "" : "s"}
                    </span>
                  </button>
                </li>
              ))}
              {rollups.perState.length === 0 ? <li className="px-2 text-neutral-500">No states match.</li> : null}
            </ul>
          </details>
        </div>

        <StandardsActions plainText={plainText} />
      </section>

      {/* The matrix itself */}
      {visible.length === 0 ? (
        <p className="mt-10 text-neutral-600 dark:text-neutral-400">
          No standards match that search and filter combination.{" "}
          {anyFilter ? (
            <button type="button" onClick={clearAll} className={textLink} style={accent}>
              Clear them
            </button>
          ) : null}
        </p>
      ) : (
        <>
          {/* Desktop / tablet: a real table that scrolls INSIDE its own container. */}
          <div className="mt-8 hidden overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 sm:block">
            <table className="w-full min-w-208 border-collapse text-sm">
              <caption className="sr-only">
                Standards by state and course. {rollups.matches} matches shown.
              </caption>
              <thead className="bg-neutral-50 text-left dark:bg-neutral-950">
                <tr>
                  <SortHeader label="State" col="state" sortKey={sortKey} sortDir={sortDir} onSort={onSort} />
                  <SortHeader label="Code" col="code" sortKey={sortKey} sortDir={sortDir} onSort={onSort} />
                  <th scope="col" className="px-3 py-2 font-semibold">
                    Standard
                  </th>
                  <SortHeader label="Subject" col="subject" sortKey={sortKey} sortDir={sortDir} onSort={onSort} />
                  <SortHeader label="Framework" col="framework" sortKey={sortKey} sortDir={sortDir} onSort={onSort} />
                  <SortHeader label="Course" col="course" sortKey={sortKey} sortDir={sortDir} onSort={onSort} />
                  <SortHeader label="Coverage" col="coverage" sortKey={sortKey} sortDir={sortDir} onSort={onSort} />
                  <th scope="col" className="px-3 py-2 font-semibold">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody>
                {visible.map((r) => {
                  const isOpen = expanded.has(r.id);
                  return (
                    <tr key={r.id} className="border-t border-neutral-200 align-top dark:border-neutral-800">
                      <td className="px-3 py-3 whitespace-nowrap">{r.stateName}</td>
                      <td className="px-3 py-3 font-mono font-semibold whitespace-nowrap">{r.code}</td>
                      <td className="px-3 py-3">
                        <div className="max-w-md">
                          <p className={isOpen ? "" : "line-clamp-2"}>{r.text}</p>
                          <button
                            type="button"
                            onClick={() => setExpanded((prev) => toggle(prev, r.id))}
                            aria-expanded={isOpen}
                            className={`${textLink} mt-1 inline-flex min-h-11 items-center text-xs print:hidden pointer-coarse:min-h-12`}
                            style={accent}
                          >
                            {isOpen ? "Show less" : "Show full text"}
                          </button>
                          {isOpen && r.note ? (
                            <p className="mt-2 rounded-lg bg-neutral-50 p-2 text-xs text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300">
                              <span className="font-semibold">
                                {r.coverage === "partial" ? "What we do and don't cover: " : "Note: "}
                              </span>
                              {r.note}
                            </p>
                          ) : null}
                        </div>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">{r.subject}</td>
                      <td className="px-3 py-3">
                        <span className="block max-w-56 wrap-break-word">{r.frameworkName}</span>
                      </td>
                      <td className="px-3 py-3">
                        <Link href={`/course/${r.course.id}`} className={`${textLink}`}>
                          {r.course.title}
                        </Link>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${coverageBadge(r.coverage)}`}>
                          {r.coverage === "full" ? "Full" : "Partial"}
                        </span>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <a
                          href={r.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={textLink}
                          style={accent}
                        >
                          Source →
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards — no horizontal scrolling. */}
          <ul className="mt-8 space-y-4 sm:hidden">
            {visible.map((r) => {
              const isOpen = expanded.has(r.id);
              return (
                <li key={r.id} className={card}>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-xs font-semibold uppercase tracking-widest" style={accent}>
                      {r.stateName}
                    </span>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${coverageBadge(r.coverage)}`}>
                      {r.coverage === "full" ? "Full" : "Partial"}
                    </span>
                  </div>
                  <h3 className="mt-1 font-mono text-base font-bold wrap-break-word">{r.code}</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 ${isOpen ? "" : "line-clamp-3"}`}>
                    {r.text}
                  </p>
                  <button
                    type="button"
                    onClick={() => setExpanded((prev) => toggle(prev, r.id))}
                    aria-expanded={isOpen}
                    className={`${textLink} mt-1 inline-flex min-h-11 items-center text-xs pointer-coarse:min-h-12`}
                    style={accent}
                  >
                    {isOpen ? "Show less" : "Show full text"}
                  </button>
                  {isOpen && r.note ? (
                    <p className="mt-2 rounded-lg bg-neutral-50 p-2 text-xs text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300">
                      <span className="font-semibold">
                        {r.coverage === "partial" ? "What we do and don't cover: " : "Note: "}
                      </span>
                      {r.note}
                    </p>
                  ) : null}
                  <dl className="mt-3 space-y-1 text-sm">
                    <div className="flex gap-2">
                      <dt className="w-24 shrink-0 text-neutral-500">Subject</dt>
                      <dd>{r.subject}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="w-24 shrink-0 text-neutral-500">Framework</dt>
                      <dd className="min-w-0 wrap-break-word">{r.frameworkName}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="w-24 shrink-0 text-neutral-500">Course</dt>
                      <dd className="min-w-0">
                        <Link href={`/course/${r.course.id}`} className={textLink}>
                          {r.course.title}
                        </Link>
                      </dd>
                    </div>
                  </dl>
                  <a
                    href={r.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${textLink} mt-2 inline-flex min-h-11 items-center text-sm pointer-coarse:min-h-12`}
                    style={accent}
                  >
                    Read the source document →
                  </a>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{label}</h3>
      <div className="mt-2 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function SortHeader({
  label,
  col,
  sortKey,
  sortDir,
  onSort,
}: {
  label: string;
  col: Exclude<SortKey, "relevance">;
  sortKey: SortKey;
  sortDir: SortDir;
  onSort: (col: Exclude<SortKey, "relevance">) => void;
}) {
  const active = sortKey === col;
  return (
    <th
      scope="col"
      className="px-3 py-2 font-semibold whitespace-nowrap"
      aria-sort={active ? (sortDir === "asc" ? "ascending" : "descending") : "none"}
    >
      <button
        type="button"
        onClick={() => onSort(col)}
        className="inline-flex min-h-11 items-center gap-1 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {label}
        <span aria-hidden="true" className={active ? "" : "text-neutral-400"}>
          {active ? (sortDir === "asc" ? "▲" : "▼") : "↕"}
        </span>
      </button>
    </th>
  );
}
