import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireTenant } from "@/lib/tenant";
import { getSiteUrl } from "@/lib/site-url";
import { getPublishedCourseWithLessons } from "@/db/queries/api-v1";

export const metadata: Metadata = { robots: { index: false, follow: false } };

type Params = { params: Promise<{ id: string }> };

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * Chromeless, iframe-friendly view of one published course — designed to be embedded by
 * another app (e.g. WanderLearn) via `<iframe src="https://learn.witus.online/embed/course/…">`.
 * Deliberately OUTSIDE the `(tenant)` route group: no SiteHeader/SiteFooter, no age-gate, no
 * ecosystem footer — just the course + its published lesson list, plus a link out to the real
 * (full-featured, session-aware) course page for actually taking it.
 *
 * Tenant resolution is still HOST-based (requireTenant): the browser loading this page is
 * hitting learn.witus.online (inside the host app's iframe), so the Host header is ours, not
 * the embedding app's — unlike /api/v1, which is called server-to-server FROM the other app's
 * own network and so must resolve tenant from the API key instead (see src/lib/api-v1-auth.ts).
 * Metadata-only (no lesson bodies/media) — see plans/wanderlearn-embed-design.md §(e).
 */
export default async function EmbedCoursePage({ params }: Params) {
  const tenant = await requireTenant();
  const { id } = await params;
  if (!UUID_RE.test(id)) notFound();

  const course = await getPublishedCourseWithLessons(tenant.id, id);
  if (!course) notFound();

  const siteUrl = await getSiteUrl();
  const continueHref =
    course.instructorUsername && course.slug
      ? `${siteUrl}/${course.instructorUsername}/${course.slug}`
      : siteUrl;

  return (
    <main className="mx-auto max-w-2xl p-6">
      <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">{tenant.name}</p>
      <h1 className="mt-1 text-xl font-bold">{course.title}</h1>
      {course.description ? (
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{course.description}</p>
      ) : null}

      {course.lessons.length > 0 ? (
        <ol className="mt-6 space-y-2">
          {course.lessons.map((l, i) => (
            <li
              key={l.id}
              className="flex items-center gap-3 rounded-md border border-neutral-200 px-3 py-2 text-sm dark:border-neutral-800"
            >
              <span className="text-neutral-400">{i + 1}.</span>
              <span className="flex-1">{l.title}</span>
              <span className="text-xs text-neutral-500">{l.lessonType}</span>
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-6 text-sm text-neutral-500">No published lessons yet.</p>
      )}

      <a
        href={continueHref}
        target="_top"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-md px-4 py-2 text-sm font-medium text-white"
        style={{ backgroundColor: "var(--accent, #111)" }}
      >
        Continue on {tenant.name} →
      </a>
    </main>
  );
}
