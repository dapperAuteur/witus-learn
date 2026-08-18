"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  /** False = unvetted, so learners see "Coming soon" instead of the lessons. Owner-only to change. */
  vetted: boolean;
  /** Instructor byline shown to owner/admins for courses they don't personally own (else null). */
  instructorLabel?: string | null;
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
// there is no bulk endpoint to keep in sync with the single-course rules.
//
// `canVet` is the platform owner. Vetting is owner-only server-side (the PATCH route strips the
// field for everyone else), so the buttons are hidden rather than shown-and-silently-ignored.
const STATUSES: Status[] = ["all", "published", "draft", "private", "hold", "vetted", "unvetted"];

export function TeacherCatalog({
  courses,
  canVet = false,
  initialStatus,
}: {
  courses: CatalogCourse[];
  canVet?: boolean;
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
    setMsg(`${verb}: ${ok}/${ids.length} updated${ok < ids.length ? " (some blocked, e.g. on hold)" : ""}.`);
    router.refresh();
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
      else if (r.status === 409) setMsg(`“${c.title}” is on hold, can’t publish until the hold clears.`);
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

      <div className="mt-2 flex items-center gap-3 text-xs text-neutral-500">
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
          <span className="flex items-center gap-1">
            <span className="text-sm text-neutral-500">$</span>
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

      {msg ? <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{msg}</p> : null}

      <ul className="mt-4 space-y-2">
        {filtered.length === 0 ? (
          <li className="rounded-xl border border-dashed border-neutral-300 px-4 py-6 text-center text-neutral-500 dark:border-neutral-700">
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
                  <span className="truncate text-xs text-neutral-500">instructor: {c.instructorLabel}</span>
                ) : null}
              </span>
              <span className="shrink-0 text-xs text-neutral-500">{priceLabel(c)}</span>
              {c.visibility === "private" ? (
                <span className="shrink-0 rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-800 dark:bg-purple-900 dark:text-purple-200">🔒</span>
              ) : null}
              {c.publishHoldReason ? (
                <span title={c.publishHoldReason} className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-800 dark:bg-amber-900 dark:text-amber-200">⚠️ hold</span>
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
