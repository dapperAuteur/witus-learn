import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { brandName } from "@/lib/branding";
import { LanguagesMap } from "@/components/languages-map";
import { MAP_LANGUAGES } from "@/lib/languages-map-data";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const sdb = await getScopedDb();
  return { title: `Language Atlas — ${brandName(sdb.tenant)}` };
}

// The Languages map (origin pins + speaker regions + colonial-spread arcs). Only
// rendered for a school that actually has language courses — the query is
// tenant-scoped, so the page 404s on any tenant without them (isolation-safe).
export default async function LanguagesAtlasPage() {
  const sdb = await getScopedDb();
  const courses = await sdb.listCourses({ category: "Languages" });
  if (courses.length === 0) notFound();

  // Link each mapped language to its actual (tenant-scoped) course, by slug.
  const bySlug = new Map(courses.map((c) => [c.slug, c]));
  const courseHrefs: Record<string, { href: string; title: string }> = {};
  for (const lang of MAP_LANGUAGES) {
    const c = bySlug.get(lang.slug);
    if (c) courseHrefs[lang.slug] = { href: `/course/${c.id}`, title: c.title };
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-6">
        <p className="text-sm uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          Language Atlas
        </p>
        <h1 className="mt-1 text-3xl font-bold">Where the languages come from — and how they spread</h1>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Each pin marks a language&apos;s origin; the shaded countries are where it is spoken today;
          the dashed arcs trace how it spread. Tap a language to start its course.
        </p>
      </header>

      <LanguagesMap courseHrefs={courseHrefs} />
    </main>
  );
}
