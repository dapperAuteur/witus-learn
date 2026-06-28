import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getScopedDb } from "@/db/scoped";
import { getCommodityById } from "@/db/queries/map";
import { listSources } from "@/db/queries/pedagogy";

type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const sdb = await getScopedDb();
  const c = await getCommodityById(sdb.tenantId, id);
  return { title: c ? `${c.name} — the episode` : "Episode" };
}

// Episode marketing page (the pin → here). A conversion surface: hero, the
// commodity story, origin/season, a sources trust signal, and an enroll CTA.
export default async function EpisodePage({ params }: Params) {
  const { id } = await params;
  const sdb = await getScopedDb();
  const commodity = await getCommodityById(sdb.tenantId, id);
  if (!commodity) notFound();

  const course = commodity.courseId ? await sdb.getCourseById(commodity.courseId) : null;
  const sources = course ? await listSources(course.id) : [];
  const verified = sources.filter((s) => s.verified).length;
  const accent = commodity.color ?? "var(--accent)";
  const style = { "--accent": accent } as CSSProperties;

  return (
    <main style={style}>
      <header className="px-4 py-12 text-white" style={{ backgroundColor: accent }}>
        <div className="mx-auto max-w-3xl">
          <Link href="/explore" className="text-sm text-white/80 hover:underline">
            ← The Commodity Map
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-white/90">
            {commodity.episodeLabel ? <span>{commodity.episodeLabel}</span> : null}
            {commodity.seasonNumber ? <span>· Season {commodity.seasonNumber}</span> : null}
            {commodity.geo ? <span>· {commodity.geo}</span> : null}
          </div>
          <h1 className="mt-2 text-4xl font-bold">{commodity.name}</h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-10">
        {commodity.summary ? (
          <p className="text-lg leading-relaxed text-neutral-800 dark:text-neutral-200">
            {commodity.summary}
          </p>
        ) : null}

        {course?.description ? (
          <p className="mt-6 text-neutral-700 dark:text-neutral-300">{course.description}</p>
        ) : null}

        {sources.length > 0 ? (
          <p className="mt-6 text-sm text-neutral-500">
            ✓ {sources.length} cited source{sources.length === 1 ? "" : "s"}
            {verified > 0 ? ` (${verified} verified)` : ""} — every claim tied to a source.
          </p>
        ) : null}

        <div className="mt-8">
          {course ? (
            <Link
              href={`/course/${course.id}`}
              className="inline-block min-h-12 rounded-md px-6 py-3 text-lg font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: accent }}
            >
              Start this episode →
            </Link>
          ) : (
            <p className="text-neutral-500">This episode is coming soon.</p>
          )}
        </div>
      </div>
    </main>
  );
}
