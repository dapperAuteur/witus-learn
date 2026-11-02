import Link from "next/link";
import { cache } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { getCourseBySlug } from "@/db/queries/authoring";
import { cachedCourseBySlug } from "@/lib/public-cache";
import { canAccessCourse } from "@/lib/api";
import { getSession } from "@/lib/session";
import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { ogImageUrl } from "@/lib/og";
import {
  bibliographyAccess,
  buildCourseBibliography,
  citationSegments,
  whereInSource,
  type BibliographyAccess,
  type BibliographyEntry,
} from "@/lib/course-bibliography";
import { parseReleaseMarkers } from "@/lib/lesson-review";

type Params = { params: Promise<{ username: string; courseSlug: string }> };

// A course's full bibliography for its learners (BAM, 2026-11-01): every source its published
// lessons cite, in APA order, each with the lessons that use it and the pinpoints they cite
// (src/lib/course-bibliography.ts).
//
// THE GATE (bibliographyAccess), computed on every read so releasing a course is what turns it on:
// a LIVE course shows it to anyone who can open the course; a held, unvetted, scheduled, unpublished
// or private course shows it only to its editors (canAccessCourse) and to holders of an ACCEPTED
// audit grant on it, under a banner; everyone else gets the same not-found a missing course gets,
// never a redirect. The course is resolved in THIS tenant (from the host), and the lessons are read
// through the tenant-scoped DAL, so another school's course id or slug is a 404.
//
// Only lesson numbers, titles and locators are shown; never the lesson prose, so a paid lesson's
// text cannot leak through its bibliography.
const loadSources = cache(async function loadSources(username: string, courseSlug: string) {
  const tenant = await requireTenant();
  const session = await getSession();
  const course =
    (await cachedCourseBySlug(tenant.id, username, courseSlug)) ??
    (session ? await getCourseBySlug(tenant.id, username, courseSlug) : null);
  if (!course) return null;

  const sdb = await getScopedDb();
  const isEditor = await canAccessCourse(session, sdb.tenantId, course);
  const isAuditor =
    session && !isEditor
      ? Boolean(
          await sdb.getViewerAuditorGrant({
            courseId: course.id,
            userId: session.user.id,
            email: session.user.email ?? null,
          }),
        )
      : false;
  const access: BibliographyAccess = bibliographyAccess(course, { isEditor, isAuditor });
  if (access === "not-found") return null;
  return { tenant, course, sdb, access };
});

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { username, courseSlug } = await params;
  const loaded = await loadSources(username, courseSlug);
  if (!loaded) return { title: "Not found", robots: { index: false, follow: false } };
  const { course, tenant, access } = loaded;
  const title = `Sources: ${course.title}`;
  const description = `Every source cited in ${course.title} on ${brandName(tenant)}, with the lessons that use each one and the pages or sections they cite.`;
  const image = ogImageUrl({ title, subtitle: "Sources and bibliography" });
  return {
    title,
    description,
    // A course that is not released yet is only seen by its editors and reviewers: never indexed.
    ...(access === "preview" ? { robots: { index: false, follow: false } } : {}),
    openGraph: { type: "article", title, description, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function CourseSourcesPage({ params }: Params) {
  const { username, courseSlug } = await params;
  const loaded = await loadSources(username, courseSlug);
  if (!loaded) notFound();
  const { course, sdb, access } = loaded;

  const rows = await sdb.listPublishedLessonSearchRows(course.id);
  const entries = buildCourseBibliography(
    rows.map((r, i) => ({
      slug: r.slug,
      title: r.title,
      position: i + 1,
      // The "Before release" marker lines are stored stripped already; parsing again is a no-op
      // for them and keeps an unseeded marker from reading as prose.
      body: parseReleaseMarkers(r.body).body,
    })),
  );
  const courseHref = `/${username}/${courseSlug}`;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-sm">
        <Link
          href={courseHref}
          className="inline-flex min-h-11 items-center underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ color: "var(--accent)" }}
        >
          Back to {course.title}
        </Link>
      </p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight">Sources and bibliography</h1>
      <p className="mt-1 text-lg text-neutral-700 dark:text-neutral-300">{course.title}</p>

      {access === "preview" ? (
        <p className="mt-4 rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
          Learners see this page once the course is released. You can see it now because you edit or review this course.
        </p>
      ) : null}

      <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
        Every source this course cites, in APA 7 reference-list order. Under each one: the lessons that use it and, where a
        lesson cites a page, section, part or timestamp, that location, so you can open the source at the right place. A
        lesson listed with no location cites the work as a whole.
      </p>

      {entries.length === 0 ? (
        <p className="mt-8 rounded-md border border-neutral-200 p-4 text-sm dark:border-neutral-800">
          This course does not list any sources yet.
        </p>
      ) : (
        <>
          <p className="mt-4 text-sm font-medium">
            {entries.length} {entries.length === 1 ? "source" : "sources"}
          </p>
          <ol className="mt-3 space-y-4">
            {entries.map((e) => (
              <SourceItem key={e.key} entry={e} lessonHref={(slug) => (slug ? `${courseHref}/lesson/${slug}` : null)} />
            ))}
          </ol>
        </>
      )}
    </main>
  );
}

function SourceItem({ entry, lessonHref }: { entry: BibliographyEntry; lessonHref: (slug: string | null) => string | null }) {
  return (
    <li className="rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800">
      <p className="break-words pl-6 -indent-6 text-neutral-800 dark:text-neutral-200">
        {citationSegments(entry.text).map((s, i) =>
          s.kind === "em" ? (
            <em key={i}>{s.value}</em>
          ) : s.kind === "link" ? (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ color: "var(--accent)" }}
            >
              {s.value}
            </a>
          ) : (
            <span key={i}>{s.value}</span>
          ),
        )}
      </p>
      {entry.uses.length > 0 ? (
        <div className="mt-2">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-600 dark:text-neutral-400">Used in</p>
          <ul className="mt-1 space-y-1">
            {entry.uses.map((u) => {
              const href = lessonHref(u.lessonSlug);
              const where = whereInSource(u);
              const label = `Lesson ${u.lessonNumber}: ${u.lessonTitle}`;
              return (
                <li key={u.lessonNumber} className="break-words text-neutral-700 dark:text-neutral-300">
                  {href ? (
                    <Link
                      href={href}
                      className="inline-flex min-h-11 items-center underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{ color: "var(--accent)" }}
                    >
                      {label}
                    </Link>
                  ) : (
                    <span>{label}</span>
                  )}
                  {where ? <span className="block text-neutral-600 dark:text-neutral-400">Where: {where}</span> : null}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </li>
  );
}
