"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export interface HelpEntry {
  slug: string;
  title: string;
  category: string;
  haystack: string; // title + category + keywords + body, lowercased, for search
}

// Case-insensitive subsequence match — "feels fuzzy" without a dependency (e.g. "recrd" → "record").
function fuzzy(query: string, text: string): boolean {
  const q = query.toLowerCase().trim();
  if (!q) return true;
  if (text.includes(q)) return true;
  let i = 0;
  for (const ch of text) {
    if (ch === q[i]) i++;
    if (i === q.length) return true;
  }
  return false;
}

// Searchable list of help articles. Fuzzy-matches the query against each article's title, category,
// keywords, and body; groups results by category.
export function HelpSearch({ entries }: { entries: HelpEntry[] }) {
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const matched = entries.filter((e) => fuzzy(query, e.haystack));
    const byCat = new Map<string, HelpEntry[]>();
    for (const e of matched) {
      if (!byCat.has(e.category)) byCat.set(e.category, []);
      byCat.get(e.category)!.push(e);
    }
    return [...byCat.entries()];
  }, [entries, query]);

  const count = groups.reduce((n, [, list]) => n + list.length, 0);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search help… (e.g. record, price, publish)"
        aria-label="Search help articles"
        className="min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
      />
      <p className="mt-2 text-xs text-neutral-500">{count} article{count === 1 ? "" : "s"}</p>

      {count === 0 ? (
        <p className="mt-6 text-neutral-500">No help articles match “{query}”.</p>
      ) : (
        <div className="mt-4 space-y-6">
          {groups.map(([category, list]) => (
            <section key={category}>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{category}</h2>
              <ul className="mt-2 divide-y divide-neutral-200 rounded-lg border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
                {list.map((e) => (
                  <li key={e.slug}>
                    <Link
                      href={`/help/${e.slug}`}
                      className="block px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                    >
                      {e.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
