import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadCourseView } from "@/lib/course-access";
import { isWitusBrandedHost } from "@/lib/witus-host";
import { trackedHref } from "@/lib/tracked-link";
import { ogImageUrl } from "@/lib/og";
import { RelatedTools } from "@/components/related-tools";
import { ShareButton } from "@/components/share-button";
import { lessonAccess, isFreeCourse } from "@/lib/gating";
import { listGlossary, listSources } from "@/db/queries/pedagogy";
import { listLiveForCourse } from "@/db/queries/live";
import { LivePlayer } from "@/components/live-player";
import { GlossaryList } from "@/components/glossary-list";
import { ProgressBar } from "@/components/progress-bits";
import { getUnmetRequired, listPrerequisites } from "@/db/queries/prerequisites";
import { CourseActions } from "@/components/course-actions";
import { TutorChat } from "@/components/tutor-chat";
import { CourseAdminTools } from "@/components/course-admin-tools";
import { hasAgeConsentCookie } from "@/lib/age-gate";
import { AgeGate } from "@/components/age-gate";
import { brandName } from "@/lib/branding";

type Params = { params: Promise<{ username: string; courseSlug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { username, courseSlug } = await params;
  const view = await loadCourseView(username, courseSlug);
  if (!view) return { title: "Course" };
  const { course, tenant } = view;
  const brand = brandName(tenant);
  const description = course.description ?? `${course.title} — a course on ${brand}.`;
  const subtitle = course.category ?? course.seriesTitle ?? undefined;
  const image = ogImageUrl({ title: course.title, subtitle });
  // Page-relevant preview card + description so a shared course link shows its own title/summary.
  return {
    title: course.title,
    description,
    openGraph: { type: "article", title: course.title, description, images: [image] },
    twitter: { card: "summary_large_image", title: course.title, description, images: [image] },
  };
}

// Canonical pretty URL: /{instructor-username}/{course-slug}. Tenant + username
// scoped, so a foreign tenant's pretty URL 404s. Shows the syllabus with per-
// lesson lock/complete state.
export default async function CourseBySlugPage({ params }: Params) {
  const { username, courseSlug } = await params;
  const view = await loadCourseView(username, courseSlug);
  if (!view) notFound();

  const { course, lessons, isEditor, completedLessonIds, orderedLessonIds } = view;
  const courseLives = await listLiveForCourse(course.tenantId, course.id);

  // Cross-promotion is shown only on WitUS-branded hosts (or tenants that opt in), so
  // white-label brands never surface sibling apps. Mirrors the ecosystem-footer gate.
  const h = await headers();
  const host = h.get("x-forwarded-host") || h.get("host");
  const showEcosystem = isWitusBrandedHost(host) || view.tenant.flags.ecosystemSso === true;
  const relatedSlugs = Array.isArray(course.relatedProducts) ? course.relatedProducts : [];

  // Per-course (per-season) age gate: gate a course flagged requiresAgeGate even when
  // the brand itself is open (BVC S1 open, S2/S3 gated). Editors bypass.
  if (course.requiresAgeGate && !isEditor && !(await hasAgeConsentCookie(view.tenant.slug))) {
    return <AgeGate brand={brandName(view.tenant)} hasSafety={Boolean(view.tenant.legal.safetyUrl)} />;
  }

  const [glossary, sources, prerequisites] = await Promise.all([
    listGlossary(course.id),
    listSources(course.id),
    listPrerequisites(course.id),
  ]);
  const unmetPrereqIds = view.session
    ? new Set((await getUnmetRequired(view.session.user.id, course.id)).map((c) => c.id))
    : new Set<string>();
  const meta = [course.seriesTitle, course.seasonNumber ? `Season ${course.seasonNumber}` : null]
    .filter(Boolean)
    .join(" · ");
  const base = `/${username}/${courseSlug}`;
  const completedCount = lessons.filter((l) => completedLessonIds.has(l.id)).length;
  const percent = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;
  const showProgress = (view.isEnrolled || completedCount > 0) && lessons.length > 0;
  const typeIcon = (t: string) =>
    ({ text: "📖", exercise: "✍️", quiz: "🧠", map: "🗺️", video: "🎬", "360video": "🎬", audio: "🎧", assignment: "📝" })[t] ?? "📄";

  const lessonRow = (lesson: (typeof lessons)[number], n: number) => {
    const access = lessonAccess(course, lesson, {
      isEditor,
      isEnrolled: view.isEnrolled,
      completedLessonIds,
      orderedLessonIds,
    });
    const done = completedLessonIds.has(lesson.id);
    const inner = (
      <>
        <span
          aria-hidden
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-lg ${
            done ? "bg-green-100 dark:bg-green-900/40" : "bg-neutral-100 dark:bg-neutral-800"
          }`}
        >
          {done ? <span className="text-base text-green-600 dark:text-green-400">✓</span> : typeIcon(lesson.lessonType)}
        </span>
        <div className="min-w-0 flex-1">
          <span className={`block truncate font-medium ${access.open ? "" : "text-neutral-500"}`}>
            {n}. {lesson.title}
          </span>
          <span className="text-xs capitalize text-neutral-400">{lesson.lessonType.replace("_", " ")}</span>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-xs">
          {lesson.isFreePreview ? (
            <span className="rounded-full bg-neutral-200 px-2 py-0.5 dark:bg-neutral-700">Free preview</span>
          ) : null}
          {!access.open ? (
            <span aria-label="Locked" title="Locked">🔒</span>
          ) : null}
        </div>
      </>
    );
    return (
      <li key={lesson.id}>
        {access.open ? (
          <Link
            href={`${base}/lesson/${lesson.slug}`}
            className="flex items-center gap-3 rounded-xl border border-neutral-200 px-4 py-3 transition hover:border-neutral-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800 dark:hover:border-neutral-700"
          >
            {inner}
          </Link>
        ) : (
          <div className="flex items-center gap-3 rounded-xl border border-neutral-200 px-4 py-3 opacity-70 dark:border-neutral-800">
            {inner}
          </div>
        )}
      </li>
    );
  };

  const ungrouped = lessons.filter((l) => !l.moduleId);

  // Course structured data for search engines (only for publicly-visible courses).
  const jsonLd =
    course.isPublished && course.visibility !== "private"
      ? {
          "@context": "https://schema.org",
          "@type": "Course",
          name: course.title,
          description: course.description ?? `${course.title} — a course on ${brandName(view.tenant)}.`,
          provider: { "@type": "Organization", name: brandName(view.tenant) },
        }
      : null;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      {jsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      ) : null}
      <Link href="/" className="text-sm text-neutral-500 hover:underline">
        ← Back to catalog
      </Link>
      {meta ? <p className="mt-6 text-xs uppercase tracking-wide text-neutral-500">{meta}</p> : null}
      <div className="mt-1 flex items-start justify-between gap-3">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        {course.isPublished && course.visibility !== "private" ? (
          <ShareButton title={course.title} text={course.description ?? undefined} label="Share course" courseId={course.id} />
        ) : null}
      </div>
      <p className="mt-1 text-sm text-neutral-500">
        by{" "}
        <Link href={`/instructors/${username}`} className="hover:underline">
          {username}
        </Link>
        {isEditor && !course.isPublished ? " · Draft (only you can see this)" : null}
        {isEditor && course.visibility === "private" ? " · 🔒 Private (owner only)" : null}
      </p>
      {isEditor && course.publishHoldReason ? (
        <div
          role="alert"
          className="mt-4 rounded-lg border-2 border-amber-400 bg-amber-50 p-4 text-sm dark:border-amber-600 dark:bg-amber-950/40"
        >
          <p className="font-semibold text-amber-900 dark:text-amber-200">
            ⚠️ ON HOLD — do not publish this course yet
          </p>
          <p className="mt-1 text-amber-800 dark:text-amber-300">{course.publishHoldReason}</p>
          <p className="mt-1 text-xs text-amber-700 dark:text-amber-400">
            Publishing is blocked until this hold is cleared (vet the content, or switch to
            uncopyrighted sources). Only you and the platform owner can see this.
          </p>
        </div>
      ) : null}
      {course.description ? (
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">{course.description}</p>
      ) : null}

      {showProgress ? (
        <div className="mt-5 rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">{percent === 100 ? "Completed 🎉" : "Your progress"}</span>
            <span className="tabular-nums text-neutral-500">
              {completedCount} of {lessons.length} lessons
            </span>
          </div>
          <ProgressBar percent={percent} className="mt-2" />
          {view.session ? (
            <Link href={`/${username}/${courseSlug}/results`} className="mt-2 inline-block text-sm underline" style={{ color: "var(--accent)" }}>
              Your quiz &amp; recall results →
            </Link>
          ) : null}
        </div>
      ) : null}

      {view.session && course.isPublished ? (
        <CourseActions
          courseId={course.id}
          enrolled={view.isEnrolled}
          isFree={isFreeCourse(course)}
          priceLabel={isFreeCourse(course) ? "Free" : `$${course.price}`}
          allComplete={
            lessons.length > 0 && lessons.every((l) => completedLessonIds.has(l.id))
          }
        />
      ) : !view.session && course.isPublished ? (
        <p className="mt-6 text-sm">
          <Link href="/login" className="underline">
            Sign in
          </Link>{" "}
          to enroll and track your progress.
        </p>
      ) : null}

      {prerequisites.length > 0 ? (
        <section className="mt-8">
          <h2 className="mb-3 text-lg font-semibold">Prerequisites</h2>
          <ul className="space-y-2 text-sm">
            {prerequisites.map((p) => {
              const isRequired = p.enforcement === "required";
              const unmet = isRequired && unmetPrereqIds.has(p.prereq.id);
              return (
                <li key={p.prereq.id} className="flex items-center gap-2">
                  <Link href={`/course/${p.prereq.id}`} className="hover:underline">
                    {p.prereq.title}
                  </Link>
                  <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs dark:bg-neutral-700">
                    {p.enforcement}
                  </span>
                  {view.session && isRequired ? (
                    unmet ? (
                      <span title="Not yet completed">🔒</span>
                    ) : (
                      <span className="text-green-700 dark:text-green-400">✓</span>
                    )
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {courseLives.length > 0 ? (
        <section className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Live sessions</h2>
            <Link href="/live" className="text-sm underline" style={{ color: "var(--accent)" }}>
              All live →
            </Link>
          </div>
          <ul className="space-y-3">
            {courseLives.map((s) => (
              <li key={s.id} className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium">
                    {s.isLive ? "🔴 " : ""}
                    {s.title}
                  </span>
                  {s.scheduledAt && !s.isLive ? (
                    <span className="text-xs text-neutral-500">{new Date(s.scheduledAt).toLocaleString()}</span>
                  ) : null}
                </div>
                {s.isLive && s.playbackUrl ? (
                  <div className="mt-3">
                    <LivePlayer url={s.playbackUrl} title={s.title} />
                  </div>
                ) : s.recordingUrl ? (
                  <div className="mt-3">
                    <LivePlayer url={s.recordingUrl} title={s.title} />
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <h2 className="mt-8 mb-3 text-lg font-semibold">{view.modules.length > 0 ? "Sections" : "Lessons"}</h2>
      {lessons.length === 0 ? (
        <p className="text-neutral-500">No lessons yet.</p>
      ) : view.modules.length > 0 ? (
        <div className="space-y-3">
          {(() => {
            // Collapse every module except the one you're likely on — the first module that
            // isn't fully complete (or the first module for a fresh course). This turns a long
            // scroll into a compact list of section headers you expand as needed.
            const autoOpenId =
              view.modules.find((m) => {
                const ml = lessons.filter((l) => l.moduleId === m.id);
                return ml.length > 0 && ml.some((l) => !completedLessonIds.has(l.id));
              })?.id ?? view.modules[0]?.id;
            return view.modules.map((mod) => {
            const modLessons = lessons.filter((l) => l.moduleId === mod.id);
            if (modLessons.length === 0) return null;
            const doneCount = modLessons.filter((l) => completedLessonIds.has(l.id)).length;
            const complete = doneCount === modLessons.length;
            return (
              <details
                key={mod.id}
                open={mod.id === autoOpenId}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-medium">
                  <span className="min-w-0 truncate">{mod.title}</span>
                  <span className="shrink-0 text-xs tabular-nums text-neutral-500">
                    {complete ? "✓ " : ""}
                    {doneCount}/{modLessons.length}
                  </span>
                </summary>
                <ol className="space-y-2 px-3 pb-3">
                  {modLessons.map((lesson) => lessonRow(lesson, lessons.indexOf(lesson) + 1))}
                </ol>
              </details>
            );
          });
          })()}
          {ungrouped.length > 0 ? (
            <ol className="space-y-2">{ungrouped.map((lesson) => lessonRow(lesson, lessons.indexOf(lesson) + 1))}</ol>
          ) : null}
        </div>
      ) : (
        <ol className="space-y-2">{lessons.map((lesson, i) => lessonRow(lesson, i + 1))}</ol>
      )}

      {glossary.length > 0 ? (
        <section className="mt-10">
          <h2 className="mb-3 text-lg font-semibold">Key terms</h2>
          <GlossaryList terms={glossary} />
        </section>
      ) : null}

      {sources.length > 0 ? (
        <section className="mt-10">
          <h2 className="mb-3 text-lg font-semibold">Sources</h2>
          <ol className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            {sources.map((s) => {
              const rawHref = s.pdfUrl
                ? `/api/document-proxy?url=${encodeURIComponent(s.pdfUrl)}`
                : (s.url ?? (s.doi ? `https://doi.org/${s.doi}` : null));
              // Count clicks on external sources (document-proxy is internal → passes through).
              const href = rawHref ? trackedHref(rawHref, { courseId: course.id, kind: "content" }) : null;
              return (
                <li key={s.id} className="flex items-start gap-2">
                  <span>{s.apa ?? s.inText ?? s.url}</span>
                  {s.verified ? (
                    <span className="text-green-700 dark:text-green-400" title="Verified source">
                      ✓
                    </span>
                  ) : null}
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="underline">
                      link
                    </a>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </section>
      ) : null}

      {showEcosystem && relatedSlugs.length > 0 ? (
        <RelatedTools slugs={relatedSlugs} courseId={course.id} />
      ) : null}

      {course.isPublished && (view.isEditor || (view.isEnrolled && !isFreeCourse(course))) ? (
        <TutorChat courseId={course.id} courseTitle={course.title} />
      ) : null}

      {view.isEditor ? (
        <CourseAdminTools courseId={course.id} navigationMode={course.navigationMode} />
      ) : null}
    </main>
  );
}
