"use client";

import { useState } from "react";

interface Term {
  id: string;
  term: string;
  phonetic: string | null;
  definition: string;
}

const COLLAPSED = 12;

// Searchable, collapsible glossary — a long vocab list (languages can have ~120 terms)
// shouldn't be one endless scroll. Shows a handful, with search + "show all".
export function GlossaryList({ terms }: { terms: Term[] }) {
  const [q, setQ] = useState("");
  const [showAll, setShowAll] = useState(false);
  const query = q.trim().toLowerCase();
  const filtered = query
    ? terms.filter((t) => `${t.term} ${t.definition}`.toLowerCase().includes(query))
    : terms;
  const visible = showAll || query ? filtered : filtered.slice(0, COLLAPSED);
  const hiddenCount = filtered.length - visible.length;

  return (
    <div>
      {terms.length > COLLAPSED ? (
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`Search ${terms.length} terms…`}
          aria-label="Search key terms"
          className="mb-4 w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
        />
      ) : null}

      {filtered.length === 0 ? (
        <p className="text-sm text-neutral-500">No terms match &ldquo;{q}&rdquo;.</p>
      ) : (
        <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {visible.map((g) => (
            <div key={g.id}>
              <dt className="font-semibold">
                {g.term}
                {g.phonetic ? <span className="ml-2 font-normal italic text-neutral-500">{g.phonetic}</span> : null}
              </dt>
              <dd className="whitespace-pre-wrap text-sm text-neutral-700 dark:text-neutral-300">{g.definition}</dd>
            </div>
          ))}
        </dl>
      )}

      {hiddenCount > 0 ? (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="mt-4 text-sm font-medium underline"
          style={{ color: "var(--accent)" }}
        >
          Show all {filtered.length} terms
        </button>
      ) : showAll && !query && filtered.length > COLLAPSED ? (
        <button
          type="button"
          onClick={() => setShowAll(false)}
          className="mt-4 text-sm font-medium underline"
          style={{ color: "var(--accent)" }}
        >
          Show less
        </button>
      ) : null}
    </div>
  );
}
