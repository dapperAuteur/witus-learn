import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getScopedDb } from "@/db/scoped";
import { brandName } from "@/lib/branding";
import { AUDIENCES } from "@/lib/marketing/audiences";

export const metadata: Metadata = {
  title: "Who is Learn.WitUS for?",
  description:
    "Cited, standards-aligned, media-rich courses for teachers, school leaders, parents, homeschool families, and community leaders. Find the page written for you.",
};

// The index of the per-audience landing pages. Recruiting-tenant only, like each page it links to.
export default async function AudienceIndexPage() {
  const sdb = await getScopedDb();
  if (!sdb.tenant.flags.recruiting) notFound();
  const brand = brandName(sdb.tenant);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          {brand}
        </p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Who is this for?</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          The same cited, standards-aligned courses, described for the way you would actually use them.
          Pick the page written for you.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {AUDIENCES.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/for/${a.slug}`}
              className="block h-full rounded-lg border border-neutral-200 p-5 hover:border-current dark:border-neutral-800"
            >
              <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
                {a.eyebrow}
              </p>
              <p className="mt-1 font-medium">{a.title}</p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{a.subtitle}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
