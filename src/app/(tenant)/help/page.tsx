import type { Metadata } from "next";
import Link from "next/link";
import { HELP_ARTICLES } from "@/lib/help-articles";
import { HelpSearch, type HelpEntry } from "@/components/help-search";

export const metadata: Metadata = { title: "Help & teacher guide" };

// In-app Help Center / teacher guide (help-documention.md). Fuzzy-searchable how-tos for using the
// app. Public — harmless to read, and one link away from Teach.
export default function HelpPage() {
  const entries: HelpEntry[] = HELP_ARTICLES.map((a) => ({
    slug: a.slug,
    title: a.title,
    category: a.category,
    haystack: `${a.title} ${a.category} ${a.keywords.join(" ")} ${a.body}`.toLowerCase(),
  }));

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-bold">Help &amp; teacher guide</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        How to use the app — creating courses, recording, pricing, publishing, live, and more. Search
        or browse below.
      </p>
      <div className="mt-6">
        <HelpSearch entries={entries} />
      </div>
      <p className="mt-8 text-sm text-neutral-500">
        Can&apos;t find it?{" "}
        <Link href="/teach" className="underline" style={{ color: "var(--accent)" }}>
          Go to Teach
        </Link>{" "}
        or use the “🐞 Report a problem” button (choose <em>feedback</em>) to ask.
      </p>
    </main>
  );
}
