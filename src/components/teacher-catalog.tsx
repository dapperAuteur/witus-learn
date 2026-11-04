"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CROSSROADS_BACKFILL_COMMAND,
  CROSSROADS_BACKFILL_URL,
  type BulkNavigationResult,
  type BulkNavigationSummary,
  type NavigationMode,
} from "@/lib/bulk-navigation";

/** Reviewer sign-off progress for a course with "Before release" markers (plans/93 section 1). */
export interface CatalogReview {
  qrCleared: number;
  qrTotal: number;
  /** Every QR and P need cleared and no decision open: the owner or school admin may release the hold. */
  ready: boolean;
  openDecisions: number;
}

export interface CatalogCourse {
  id: string;
  /** Readable URL segment for /teach/<slug>; falls back to the uuid when a course has no slug. */
  slug: string | null;
  title: string;
  category: string | null;
  isPublished: boolean;
  visibility: string;
  publishHoldReason: string | null;
  priceType: string;
  price: number;
  /** False = unvetted, so learners see "Coming soon" instead of the lessons. The owner or the school's brand_admin changes it. */
  vetted: boolean;
  /** Instructor byline shown to owner/admins for courses they don't personally own (else null). */
  instructorLabel?: string | null;
  /** Null for a course with no release markers, which shows no chip. */
  review?: CatalogReview | null;
  /** Lesson navigation: a fixed order, or CYOA crossroads between lessons. */
  navigationMode?: string;
}

interface NavOutcome {
  mode: NavigationMode;
  summary: BulkNavigationSummary;
  /** Titles of the selected courses that were refused or failed (from this list, never from the server). */
  notChanged: string[];
  keyConfigured: boolean;
}

type Status = "all" | "published" | "draft" | "private" | "hold" | "vetted" | "unvetted";

// Case-insensitive subsequence match — feels "fuzzy" without a dependency (e.g. "knt" → "Knots").
function fuzzy(query: string, text: string): boolean {
  const q = query.toLowerCase().trim();
  if (!q) return true;
  const t = text.toLowerCase();
  if (t.includes(q)) return true;
  let i = 0;
  for (const ch of t) {
    if (ch === q[i]) i++;
    if (i === q.length) return true;
  }
  return false;
}

function priceLabel(c: CatalogCourse): string {
  if (c.priceType === "free") return "Free";
  return `$${c.price}${c.priceType === "subscription" ? "/mo" : ""}`;
}

// Teacher course catalog: search + filter + bulk edit (publish/unpublish/reprice/vet) + quick
// toggle. Bulk actions reuse the per-course PATCH route (validated + edit-gated server-side), so
// there is no bulk endpoint to keep in sync with the single-course rules. The one exception is
// "Set navigation" (2026-11-04), which goes through POST /api/courses/bulk-navigation: the same edit
// check per course, one request, and a per-course answer that includes each CYOA course's
// crossroads status, so the bar can say how many still need embeddings.
//
// `canVet` is the platform owner or this school's brand_admin (BAM 2026-10-29); `canOpenUnvetted`
// (live but unvetted) stays the platform owner's. The PATCH route strips each field for anyone else,
// so the buttons are hidden rather than shown-and-silently-ignored.
const STATUSES: Status[] = ["all", "published", "draft", "private", "hold", "vetted", "unvetted"];

export function TeacherCatalog({
  courses,
  canVet = false,
  canOpenUnvetted = false,
  canRunCrossroadsBackfill = false,
  initialStatus,
}: {
  courses: CatalogCourse[];
  canVet?: boolean;
  /** The platform owner: "Open while unvetted" / "Close while unvetted". */
  canOpenUnvetted?: boolean;
  /** The platform owner: after a switch to CYOA, show the backfill command and the Actions link. */
  canRunCrossroadsBackfill?: boolean;
  /** Preselect a status filter from the URL (?status=unvetted), so the admin tile and any
   *  bookmark can land directly on the vetting queue. Unknown values fall back to "all". */
  initialStatus?: string;
}) {
  const router = useRouter();
  const [rows, setRows] = useState(courses);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Status>(
    STATUSES.includes(initialStatus as Status) ? (initialStatus as Status) : "all",
  );
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [busy, setBusy] = useState(false);
  const [priceInput, setPriceInput] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [navConfirm, setNavConfirm] = useState<NavigationMode | null>(null);
  const [navOutcome, setNavOutcome] = useState<NavOutcome | null>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (navConfirm) confirmRef.current?.focus();
  }, [navConfirm]);

  const filtered = useMemo(
    () =>
      rows.filter((c) => {
        if (status === "published" && !c.isPublished) return false;
        if (status === "draft" && c.isPublished) return false;
        if (status === "private" && c.visibility !== "private") return false;
        if (status === "hold" && !c.publishHoldReason) return false;
        if (status === "vetted" && !c.vetted) return false;
        if (status === "unvetted" && c.vetted) return false;
        return fuzzy(query, `${c.title} ${c.category ?? ""}`);
      }),
    [rows, query, status],
  );

  function toggle(id: string) {
    setSelected((p) => {
      const n = new Set(p);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  }
  function selectAllShown() {
    setSelected(new Set(filtered.map((c) => c.id)));
  }
  function clearSelection() {
    setSelected(new Set());
  }

  // Apply a patch to every selected course; report how many succeeded (holds block publishing).
  async function bulk(patch: Record<string, unknown>, verb: string) {
    if (selected.size === 0 || busy) return;
    setBusy(true);
    setMsg(null);
    const ids = [...selected];
    const results = await Promise.all(
      ids.map(async (id) => {
        try {
          const r = await fetch(`/api/courses/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(patch),
          });
          return r.ok;
        } catch {
          return false;
        }
      }),
    );
    const ok = results.filter(Boolean).length;
    // Reflect the change locally for the ones that succeeded.
    setRows((prev) =>
      prev.map((c) =>
        selected.has(c.id) && results[ids.indexOf(c.id)] ? { ...c, ...normalize(patch) } : c,
      ),
    );
    setBusy(false);
    setMsg(`${verb}: ${ok}/${ids.length} updated${ok < ids.length ? " (some blocked: on hold, or private, which only the Make public control on the course's page opens)" : ""}.`);
    router.refresh();
  }

  // Set navigation on every selected course through the one bulk route (per-course checks server-side).
  async function applyNavigation(mode: NavigationMode) {
    if (selected.size === 0 || busy) return;
    setBusy(true);
    setMsg(null);
    setNavOutcome(null);
    const ids = [...selected];
    try {
      const r = await fetch("/api/courses/bulk-navigation", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ courseIds: ids, navigationMode: mode }),
      });
      const d = (await r.json().catch(() => null)) as {
        error?: string;
        results?: BulkNavigationResult[];
        summary?: BulkNavigationSummary;
        crossroadsKeyConfigured?: boolean;
      } | null;
      if (!r.ok || !d?.results || !d.summary) {
        setMsg(d?.error ?? "Couldn't set navigation. Nothing was changed.");
        return;
      }
      const done = new Set(d.results.filter((x) => x.status === "updated" || x.status === "unchanged").map((x) => x.courseId));
      setRows((prev) => prev.map((c) => (done.has(c.id) ? { ...c, navigationMode: mode } : c)));
      const titleOf = new Map(rows.map((c) => [c.id, c.title]));
      setNavOutcome({
        mode,
        summary: d.summary,
        notChanged: d.results.filter((x) => !done.has(x.courseId)).map((x) => titleOf.get(x.courseId) ?? x.courseId),
        keyConfigured: d.crossroadsKeyConfigured !== false,
      });
      setNavConfirm(null);
      router.refresh();
    } catch {
      setMsg("Couldn't reach the server. Nothing was changed.");
    } finally {
      setBusy(false);
    }
  }

  // Mirror a PATCH body onto the local CatalogCourse shape for optimistic display.
  function normalize(patch: Record<string, unknown>): Partial<CatalogCourse> {
    const out: Partial<CatalogCourse> = {};
    if ("isPublished" in patch) out.isPublished = Boolean(patch.isPublished);
    if ("priceType" in patch) out.priceType = String(patch.priceType);
    if ("price" in patch) out.price = Number(patch.price);
    // The wire field is a BOOLEAN; the server stamps/clears vetted_at itself.
    if ("vetted" in patch) out.vetted = Boolean(patch.vetted);
    return out;
  }

  async function quickTogglePublish(c: CatalogCourse) {
    await bulkOne(c.id, { isPublished: !c.isPublished }, c);
  }
  async function bulkOne(id: string, patch: Record<string, unknown>, c: CatalogCourse) {
    setBusy(true);
    try {
      const r = await fetch(`/api/courses/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(patch),
      });
      if (r.ok) setRows((prev) => prev.map((x) => (x.id === id ? { ...x, ...normalize(patch) } : x)));
      else if (r.status === 409) {
        const body = (await r.json().catch(() => null)) as { error?: string } | null;
        setMsg(`“${c.title}”: ${body?.error ?? "blocked, it is on hold or private."}`);
      }
    } finally {
      setBusy(false);
      router.refresh();
    }
  }

  const chip = "rounded-full border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700";
  const btn = "min-h-9 rounded-md border border-neutral-300 px-3 text-sm disabled:opacity-50 dark:border-neutral-700";

  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your courses…"
          aria-label="Search your courses"
          className="min-h-9 flex-1 rounded-md border border-neutral-300 px-3 text-sm dark:border-neutral-700 dark:bg-neutral-900"
        />
        {STATUSES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStatus(s)}
            className={`${chip} ${status === s ? "font-semibold" : ""}`}
            aria-pressed={status === s}
          >
            {s === "all" ? "All" : s === "hold" ? "On hold" : s[0].toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-2 flex items-center gap-3 text-xs text-neutral-600">
        <span>{filtered.length} shown</span>
        <button type="button" onClick={selectAllShown} className="underline">Select all shown</button>
        {selected.size > 0 ? (
          <button type="button" onClick={clearSelection} className="underline">Clear ({selected.size})</button>
        ) : null}
      </div>

      {selected.size > 0 ? (
        <div className="mt-3 flex flex-wrap items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-900/60">
          <span className="text-sm font-medium">{selected.size} selected:</span>
          <button type="button" disabled={busy} onClick={() => bulk({ isPublished: true }, "Publish")} className={btn}>Publish</button>
          <button type="button" disabled={busy} onClick={() => bulk({ isPublished: false }, "Unpublish")} className={btn}>Unpublish</button>
          <button type="button" disabled={busy} onClick={() => bulk({ priceType: "free", price: 0 }, "Make free")} className={btn}>Make free</button>
          {canVet ? (
            <>
              <button
                type="button"
                disabled={busy}
                onClick={() => bulk({ vetted: true }, "Mark vetted")}
                title="Reviewed: learners get the full course"
                className={btn}
              >
                Mark vetted
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={() => bulk({ vetted: false }, "Mark unvetted")}
                title="Not reviewed yet: learners get the Coming soon page (people already enrolled keep access)"
                className={btn}
              >
                Mark unvetted
              </button>
            </>
          ) : null}
          {canOpenUnvetted ? (
            <>
              <button
                type="button"
                disabled={busy}
                onClick={() => bulk({ allowUnvettedPublic: true }, "Open while unvetted")}
                title="Live but unvetted: the full course opens to the public NOW, with a review-in-progress notice on its pages. The syndication API still withholds it until vetted."
                className={btn}
              >
                Open while unvetted
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={() => bulk({ allowUnvettedPublic: false }, "Close while unvetted")}
                title="Back to the default: unvetted courses show the Coming soon page (enrollees keep access)"
                className={btn}
              >
                Close while unvetted
              </button>
            </>
          ) : null}
          <span role="group" aria-label="Set navigation" className="flex flex-wrap items-center gap-1">
            <span className="text-sm text-neutral-600">Navigation:</span>
            <button
              type="button"
              disabled={busy}
              onClick={() => setNavConfirm("cyoa")}
              aria-expanded={navConfirm === "cyoa"}
              title="Learners pick their next lesson at crossroads instead of following a fixed order"
              className={btn}
            >
              Set CYOA
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={() => setNavConfirm("linear")}
              aria-expanded={navConfirm === "linear"}
              title="Learners follow the lessons in their fixed order"
              className={btn}
            >
              Set Linear
            </button>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-sm text-neutral-600">$</span>
            <input
              type="number"
              min={0}
              step="0.01"
              value={priceInput}
              onChange={(e) => setPriceInput(e.target.value)}
              placeholder="9.99"
              aria-label="Bulk one-time price in dollars"
              className="min-h-9 w-20 rounded-md border border-neutral-300 px-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
            />
            <button
              type="button"
              disabled={busy || !(Number(priceInput) > 0)}
              onClick={() => bulk({ priceType: "one_time", price: Number(priceInput) }, "Set price")}
              className={btn}
            >
              Set one-time price
            </button>
          </span>
        </div>
      ) : null}

      {navConfirm && selected.size > 0 ? (
        <div
          role="group"
          aria-labelledby="nav-confirm-h"
          onKeyDown={(e) => {
            if (e.key === "Escape") setNavConfirm(null);
          }}
          className="mt-3 space-y-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm dark:border-amber-800 dark:bg-amber-950/40"
        >
          <p id="nav-confirm-h" className="font-semibold">
            Set navigation to {navConfirm === "cyoa" ? "CYOA" : "Linear"} on {selected.size} selected course
            {selected.size === 1 ? "" : "s"}?
          </p>
          <p>
            {navConfirm === "cyoa"
              ? "Learners choose their next lesson at crossroads (Continue, Related, Unexpected path) instead of a fixed next lesson. Related picks need crossroads embeddings; you'll see how many courses still need them."
              : "Learners follow the lessons in their fixed order. Any crossroads embeddings are kept, so switching back is free."}{" "}
            Courses you can&apos;t edit are skipped and listed.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              ref={confirmRef}
              type="button"
              disabled={busy}
              onClick={() => applyNavigation(navConfirm)}
              className="min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
              style={{ backgroundColor: "var(--accent)" }}
            >
              {busy ? "Saving…" : `Yes, set ${navConfirm === "cyoa" ? "CYOA" : "Linear"}`}
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={() => setNavConfirm(null)}
              className="min-h-11 rounded-md border border-neutral-300 px-4 dark:border-neutral-700"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      {navOutcome ? <NavOutcomeNotice outcome={navOutcome} canRunBackfill={canRunCrossroadsBackfill} /> : null}

      {msg ? <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{msg}</p> : null}

      <ul className="mt-4 space-y-2">
        {filtered.length === 0 ? (
          <li className="rounded-xl border border-dashed border-neutral-300 px-4 py-6 text-center text-neutral-600 dark:border-neutral-700">
            No courses match.
          </li>
        ) : (
          filtered.map((c) => (
            <li
              key={c.id}
              className="flex items-center gap-3 rounded-xl border border-neutral-200 px-4 py-3 dark:border-neutral-800"
            >
              <input
                type="checkbox"
                checked={selected.has(c.id)}
                onChange={() => toggle(c.id)}
                aria-label={`Select ${c.title}`}
              />
              <span className="flex min-w-0 flex-1 flex-col">
                <Link href={`/teach/${c.slug ?? c.id}`} className="truncate font-medium hover:underline">
                  {c.title}
                </Link>
                {c.instructorLabel ? (
                  <span className="truncate text-xs text-neutral-600">instructor: {c.instructorLabel}</span>
                ) : null}
              </span>
              <span className="shrink-0 text-xs text-neutral-600">{priceLabel(c)}</span>
              {c.visibility === "private" ? (
                <span className="shrink-0 rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-800 dark:bg-purple-900 dark:text-purple-200">🔒</span>
              ) : null}
              {c.publishHoldReason ? (
                <span title={c.publishHoldReason} className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-800 dark:bg-amber-900 dark:text-amber-200">⚠️ hold</span>
              ) : null}
              {c.review && (c.review.qrTotal > 0 || c.review.openDecisions > 0) ? (
                <span
                  title={
                    c.review.ready
                      ? "Every qualified-reviewer need is cleared: ready to release the review hold"
                      : `${c.review.qrCleared} of ${c.review.qrTotal} qualified-reviewer needs cleared${
                          c.review.openDecisions > 0 ? `, ${c.review.openDecisions} decision(s) open` : ""
                        }`
                  }
                  className={`shrink-0 rounded-full px-2 py-0.5 text-xs tabular-nums ${
                    c.review.ready
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                      : "bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-100"
                  }`}
                >
                  QR {c.review.qrCleared}/{c.review.qrTotal}
                </span>
              ) : null}
              {c.navigationMode === "cyoa" ? (
                <span
                  title="CYOA navigation: learners choose their next lesson at crossroads"
                  className="shrink-0 rounded-full bg-indigo-100 px-2 py-0.5 text-xs text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                >
                  CYOA
                </span>
              ) : null}
              {!c.vetted ? (
                <span
                  title="Unvetted: learners see the Coming soon page instead of the lessons"
                  className="shrink-0 rounded-full bg-sky-100 px-2 py-0.5 text-xs text-sky-800 dark:bg-sky-900 dark:text-sky-200"
                >
                  🕒 coming soon
                </span>
              ) : null}
              <button
                type="button"
                disabled={busy}
                onClick={() => quickTogglePublish(c)}
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${
                  c.isPublished
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"
                }`}
                title="Click to toggle publish"
              >
                {c.isPublished ? "Published" : "Draft"}
              </button>
              <Link href={`/teach/${c.slug ?? c.id}`} className="shrink-0 text-sm underline" style={{ color: "var(--accent)" }}>
                Manage
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

/** What a bulk "Set navigation" did, and, after CYOA, what still needs crossroads embeddings. */
function NavOutcomeNotice({ outcome, canRunBackfill }: { outcome: NavOutcome; canRunBackfill: boolean }) {
  const { summary: s, mode } = outcome;
  const label = mode === "cyoa" ? "CYOA" : "Linear";
  const [copied, setCopied] = useState(false);
  return (
    <div role="status" className="mt-3 space-y-2 rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800">
      <p>
        Set {label}: {s.updated} changed, {s.unchanged} already {label}
        {s.refused + s.failed > 0 ? `, ${s.refused + s.failed} not changed` : ""}.
      </p>
      {outcome.notChanged.length > 0 ? (
        <div>
          <p>Not changed (you can&apos;t edit them, or the save failed):</p>
          <ul className="mt-1 list-disc pl-5">
            {outcome.notChanged.map((t, i) => (
              <li key={`${i}-${t}`} className="break-words">{t}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {mode === "cyoa" && s.coursesNeedingCrossroads > 0 ? (
        <div className="space-y-2">
          <p className="font-medium">
            {s.coursesNeedingCrossroads} course{s.coursesNeedingCrossroads === 1 ? "" : "s"} need crossroads embeddings (
            {s.lessonsNeedingCrossroads} lesson{s.lessonsNeedingCrossroads === 1 ? "" : "s"}). Until then those lessons
            show Continue and Unexpected path, but no Related picks.
          </p>
          {!outcome.keyConfigured ? (
            <p>This deployment has no Mistral key, so the embeddings can&apos;t be built here.</p>
          ) : canRunBackfill ? (
            <>
              <p>
                Run the paced backfill: on GitHub,{" "}
                <a href={CROSSROADS_BACKFILL_URL} className="underline" style={{ color: "var(--accent)" }} target="_blank" rel="noreferrer">
                  Actions, Seed production courses
                </a>
                , Run workflow with seed off, rag none, cyoa needing. Or from a terminal:
              </p>
              <div className="flex flex-wrap items-start gap-2">
                <code className="min-w-0 flex-1 overflow-x-auto whitespace-pre rounded bg-neutral-100 px-2 py-1 text-xs dark:bg-neutral-800">
                  {CROSSROADS_BACKFILL_COMMAND}
                </code>
                <button
                  type="button"
                  onClick={() => {
                    void navigator.clipboard?.writeText(CROSSROADS_BACKFILL_COMMAND).then(
                      () => setCopied(true),
                      () => setCopied(false),
                    );
                  }}
                  className="min-h-9 rounded-md border border-neutral-300 px-3 text-xs dark:border-neutral-700"
                >
                  {copied ? "Copied" : "Copy command"}
                </button>
              </div>
            </>
          ) : (
            <p>
              Open each course and press <strong>Re-index crossroads</strong> in Instructor tools, or ask the platform
              owner to run the crossroads backfill.
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}
