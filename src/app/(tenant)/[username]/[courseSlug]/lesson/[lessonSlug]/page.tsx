import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadCourseView } from "@/lib/course-access";
import { lessonAccess, type LessonLockReason } from "@/lib/gating";
import { LessonPlayer } from "@/components/lesson-player";
import { LessonViewPing } from "@/components/lesson-view-ping";
import { MarkCompleteButton } from "@/components/mark-complete-button";
import { RecallPlayer } from "@/components/recall-player";
import { ProgressBar } from "@/components/progress-bits";
import { CurriculumFeedback } from "@/components/curriculum-feedback";
import { NotesPanel } from "@/components/notes-panel";
import { AnnotationLayer } from "@/components/annotation-layer";
import { UnvettedDisclosure } from "@/components/unvetted-disclosure";
import { isOpenWhileUnvetted } from "@/lib/vetting";
import { AssignmentSubmit } from "@/components/assignment-submit";
import { getSubmission } from "@/db/queries/assignments";
import { buildCrossroads } from "@/lib/crossroads";
import { entitiesInLesson } from "@/lib/entities";
import { listCourses } from "@/db/queries/catalog";
import { hasAgeConsentCookie } from "@/lib/age-gate";
import { AgeGate } from "@/components/age-gate";
import { MetricsTrackerCta } from "@/components/metrics-tracker-cta";
import { SaveOfflineButton } from "@/components/save-offline-button";
import type { OfflineLessonMeta, SavableLesson } from "@/lib/offline";
import { ShareButton } from "@/components/share-button";
import { isDirectMediaFile } from "@/lib/media";
import { brandName } from "@/lib/branding";
import { ogImageUrl } from "@/lib/og";

// Reported 2026-08-26: "pages don't maintain complete status when I revisit page to review."
// The completion IS persisted (lesson_progress.completed_at was set in prod for the reported
// lesson), and MarkCompleteButton already calls router.refresh(), so the write path and the read
// path are both fine. What the learner saw was a CACHED render of a page whose entire body is
// per-learner: completedLessonIds, gating, notes, recall. Navigating away and back could serve a
// payload rendered before the completion. This page has no cacheable form, so it says so.
export const dynamic = "force-dynamic";

type Params = {
  params: Promise<{ username: string; courseSlug: string; lessonSlug: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { username, courseSlug, lessonSlug } = await params;
  const view = await loadCourseView(username, courseSlug);
  const lesson = view?.lessons.find((l) => l.slug === lessonSlug);
  if (!view || !lesson) return { title: "Lesson" };
  const description = `${lesson.title}, part of ${view.course.title}.`;
  const image = ogImageUrl({ title: lesson.title, subtitle: view.course.title });
  return {
    title: lesson.title,
    description,
    openGraph: { type: "article", title: lesson.title, description, images: [image] },
    twitter: { card: "summary_large_image", title: lesson.title, description, images: [image] },
  };
}

const LOCK_COPY: Record<LessonLockReason, string> = {
  draft: "This lesson is not available.",
  unvetted: "This course is still being reviewed. Its lessons open once it is published in full.",
  locked: "Enrollment is required for this lesson (coming in a later phase).",
  sequential: "Complete the previous lessons first to unlock this one.",
};

export default async function LessonPage({ params }: Params) {
  const { username, courseSlug, lessonSlug } = await params;
  const view = await loadCourseView(username, courseSlug);
  if (!view) notFound();

  const lesson = view.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson) notFound();

  // Per-course (per-season) age gate. Editors bypass.
  if (view.course.requiresAgeGate && !view.isEditor && !(await hasAgeConsentCookie(view.tenant.slug))) {
    return <AgeGate brand={brandName(view.tenant)} hasSafety={Boolean(view.tenant.legal.safetyUrl)} />;
  }

  const access = lessonAccess(view.course, lesson, {
    isEditor: view.isEditor,
    isEnrolled: view.isEnrolled,
    isAuditor: view.isAuditor,
    completedLessonIds: view.completedLessonIds,
    orderedLessonIds: view.orderedLessonIds,
  });
  // An invited auditor (plans/52 section 5) READS this lesson and records nothing. Every write is
  // refused server-side; hiding the write controls here is so the page never offers a button that
  // can only fail, and says plainly that nothing is being kept.
  const canRecord = Boolean(view.session) && !view.isAuditor;

  const idx = view.lessons.findIndex((l) => l.id === lesson.id);
  const prev = idx > 0 ? view.lessons[idx - 1] : null;
  const next = idx < view.lessons.length - 1 ? view.lessons[idx + 1] : null;
  const base = `/${username}/${courseSlug}`;
  // "Save for offline" needs the current + next lesson's page path and (if direct-media) file —
  // embeds like YouTube can't be cached, so mediaUrl is null for those (the page still caches).
  const directMediaUrl = (l: (typeof view.lessons)[number]) =>
    (l.lessonType === "audio" || l.lessonType === "video") && l.contentUrl && isDirectMediaFile(l.contentUrl)
      ? l.contentUrl
      : null;
  // Metadata for the offline manifest, so /downloads can name a saved lesson with no network (a
  // cached URL alone carries no title/course/section — see src/lib/offline-manifest.ts).
  const moduleTitles = new Map(view.modules.map((m) => [m.id, m.title]));
  const offlineMeta = (l: (typeof view.lessons)[number]): OfflineLessonMeta => ({
    courseTitle: view.course.title,
    courseSlug,
    courseHref: base,
    sectionTitle: (l.moduleId ? moduleTitles.get(l.moduleId) : null) ?? null,
    lessonTitle: l.title,
  });
  const nextOffline: SavableLesson | null = next
    ? { pagePath: `${base}/lesson/${next.slug}`, mediaUrl: directMediaUrl(next), meta: offlineMeta(next) }
    : null;
  const completed = view.completedLessonIds.has(lesson.id);
  const total = view.lessons.length;
  const position = idx + 1;
  const coursePercent = total > 0 ? Math.round((view.completedLessonIds.size / total) * 100) : 0;
  const remaining = Math.max(0, total - view.completedLessonIds.size);

  // Assignment lessons: load the ACTIVE learner's own submission for the submit box
  // (self, or a managed child if a parent is "studying as" one).
  const submission =
    lesson.lessonType === "assignment" && access.open && view.activeLearnerId
      ? await getSubmission(lesson.id, view.activeLearnerId)
      : null;

  // CYOA crossroads (semantic + cross-course are tenant-scoped inside buildCrossroads).
  const crossroads =
    access.open && view.course.navigationMode === "cyoa"
      ? await buildCrossroads({
          tenantId: view.tenant.id,
          course: view.course,
          lessonId: lesson.id,
          username,
          courseSlug,
        })
      : [];

  // "Also discussed in" (plans/45 Part 3): entities this lesson names that ALSO appear in other
  // courses. Tenant-scoped, and only when the tenant has at least two courses covering the entity, so
  // the connection is real for this school. Only runs when the body actually names an entity.
  const namedEntities = access.open ? entitiesInLesson(lesson.textContent) : [];
  let alsoDiscussed: { slug: string; name: string }[] = [];
  if (namedEntities.length > 0) {
    const published = new Set((await listCourses(view.tenant.id)).map((c) => c.slug));
    alsoDiscussed = namedEntities
      .filter((e) => e.courses.filter((l) => published.has(l.courseSlug)).length >= 2)
      .map((e) => ({ slug: e.slug, name: e.name }));
  }

  return (
    <div>
      {/* Sticky progress header — course context + position always visible. Offsets by the
          sticky site header's height (--site-header-h, measured by StickyHeader) so the two
          bars STACK — site nav on top, progress bar under it — instead of fighting for top-0.
          z-10 keeps it under the z-40 header, so the header's dropdowns open over it. */}
      <div className="sticky top-(--site-header-h) z-10 border-b border-neutral-200 bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex items-center justify-between gap-3 text-sm">
            <Link href={base} className="flex min-w-0 items-center gap-2 font-medium text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100">
              <span aria-hidden>←</span> <span className="truncate">{view.course.title}</span>
            </Link>
            <span className="shrink-0 font-medium tabular-nums text-neutral-600">
              Lesson {position} of {total}
            </span>
          </div>
          <div className="mt-2">
            <ProgressBar percent={coursePercent} />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl gap-8 px-4 py-8">
        {/* Contents rail — completion at a glance. On a sectioned course (FAA Part 107 runs 14
            modules / 100+ lessons) a flat list is an endless scroll, so lessons are grouped into
            collapsible sections and only the section you're in starts open. Flat courses stay flat. */}
        <nav aria-label="Lessons in this course" className="hidden w-60 shrink-0 lg:block">
          <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
            {view.modules.length > 0 ? "Sections" : "Lessons"}
          </div>
          {(() => {
            const lessonLink = (l: (typeof view.lessons)[number]) => {
              const done = view.completedLessonIds.has(l.id);
              const current = l.id === lesson.id;
              return (
                <li key={l.id}>
                  <Link
                    href={`${base}/lesson/${l.slug}`}
                    aria-current={current ? "page" : undefined}
                    className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${
                      current
                        ? "font-semibold"
                        : "text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-900"
                    }`}
                    style={current ? { backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)", color: "var(--accent)" } : undefined}
                  >
                    <span aria-hidden className="grid h-4 w-4 shrink-0 place-items-center">
                      {done ? (
                        <span className="text-emerald-500">✓</span>
                      ) : current ? (
                        <span style={{ color: "var(--accent)" }}>▸</span>
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                      )}
                    </span>
                    <span className="truncate">{l.title}</span>
                  </Link>
                </li>
              );
            };

            if (view.modules.length === 0) {
              return <ol className="mt-3 space-y-0.5 text-sm">{view.lessons.map(lessonLink)}</ol>;
            }
            const ungrouped = view.lessons.filter((l) => !l.moduleId);
            return (
              <div className="mt-3 space-y-1 text-sm">
                {view.modules.map((mod) => {
                  const modLessons = view.lessons.filter((l) => l.moduleId === mod.id);
                  if (modLessons.length === 0) return null;
                  const doneCount = modLessons.filter((l) => view.completedLessonIds.has(l.id)).length;
                  const hasCurrent = modLessons.some((l) => l.id === lesson.id);
                  return (
                    <details key={mod.id} open={hasCurrent}>
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 rounded-md px-2 py-1.5 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900">
                        <span className="min-w-0 truncate">{mod.title}</span>
                        <span className="shrink-0 text-xs tabular-nums text-neutral-600">
                          {doneCount}/{modLessons.length}
                        </span>
                      </summary>
                      <ol className="space-y-0.5 pl-2">{modLessons.map(lessonLink)}</ol>
                    </details>
                  );
                })}
                {ungrouped.length > 0 ? <ol className="space-y-0.5">{ungrouped.map(lessonLink)}</ol> : null}
              </div>
            );
          })()}
        </nav>

        {/* Main lesson column. */}
        <main className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h1 className="text-2xl font-bold tracking-tight">{lesson.title}</h1>
            {view.course.isPublished && view.course.visibility !== "private" ? (
              <ShareButton title={`${lesson.title}, ${view.course.title}`} label="Share" courseId={view.course.id} lessonId={lesson.id} />
            ) : null}
          </div>

          <div className="mt-6">
            {access.open ? (
          <>
            {/* Records "the learner opened this lesson" (for the ACTIVE learner — a managed child
                when a parent is studying as one), so Continue can point at the lesson they were
                really on instead of the first gap in the syllabus. Never a completion. Signed-out
                learners simply don't render it — no ping, no error. */}
            {isOpenWhileUnvetted(view.course) ? <UnvettedDisclosure /> : null}
            {canRecord ? <LessonViewPing courseId={view.course.id} lessonId={lesson.id} /> : null}
            {/* Open with recall: quiz the PREVIOUS lesson before this one's content. */}
            {Array.isArray(lesson.recallContent) && lesson.recallContent.length > 0 && canRecord ? (
              <RecallPlayer courseId={view.course.id} lessonId={lesson.id} items={lesson.recallContent} />
            ) : null}
            {/* The annotation layer (plans/61) wraps the player so a learner can select lesson
                text and attach a note to that exact passage. Signed-out viewers and read-only
                auditors get the untouched player: no selection affordance, no highlights. */}
            {canRecord ? (
              <AnnotationLayer courseId={view.course.id} lessonId={lesson.id}>
                <LessonPlayer
                  lesson={lesson}
                  trackPlayback={canRecord}
                  trackRecall={canRecord}
                  readOnly={view.isAuditor}
                  resumeAt={view.watchSeconds.get(lesson.id) ?? 0}
                />
              </AnnotationLayer>
            ) : (
              <LessonPlayer
                lesson={lesson}
                trackPlayback={canRecord}
                trackRecall={canRecord}
                readOnly={view.isAuditor}
                resumeAt={view.watchSeconds.get(lesson.id) ?? 0}
              />
            )}
            <SaveOfflineButton
              pagePath={`${base}/lesson/${lesson.slug}`}
              mediaUrl={directMediaUrl(lesson)}
              meta={offlineMeta(lesson)}
              next={nextOffline}
            />
            {view.course.slug === "read-your-bodys-data" && view.session ? <MetricsTrackerCta /> : null}
            <div className="mt-6">
              {view.isAuditor ? (
                <p className="rounded-lg border border-sky-300 bg-sky-50 p-4 text-sm text-sky-900 dark:border-sky-800 dark:bg-sky-950/40 dark:text-sky-200">
                  You are reviewing this course. Nothing here is recorded: no progress, no quiz
                  scores, no certificate. Send your notes to whoever invited you.
                </p>
              ) : view.session ? (
                <MarkCompleteButton
                  courseId={view.course.id}
                  lessonId={lesson.id}
                  completed={completed}
                  isLinear={view.course.navigationMode !== "cyoa"}
                  nextHref={next ? `${base}/lesson/${next.slug}` : null}
                />
              ) : (
                <Link href="/login" className="text-sm underline">
                  Sign in to track your progress
                </Link>
              )}
            </div>
            {lesson.lessonType === "assignment" && canRecord ? (
              <AssignmentSubmit
                courseId={view.course.id}
                lessonId={lesson.id}
                initial={
                  submission
                    ? {
                        body: submission.body,
                        status: submission.status,
                        grade: submission.grade,
                        feedback: submission.feedback,
                      }
                    : null
                }
              />
            ) : null}
          </>
        ) : (
          <div className="rounded-lg border border-neutral-200 p-6 text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
            <p>{LOCK_COPY[access.reason ?? "locked"]}</p>
            {!view.session ? (
              <Link href="/login" className="mt-2 inline-block text-sm underline">
                Sign in
              </Link>
            ) : null}
          </div>
        )}
      </div>

      {crossroads.length > 0 ? (
        <section className="mt-10">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-600">
            Where to next?
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {crossroads.map((c, i) => (
              <Link
                key={i}
                href={c.href}
                className="rounded-lg border border-neutral-200 p-3 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800"
              >
                <span className="text-xs uppercase tracking-wide" style={{ color: "var(--accent)" }}>
                  {c.label}
                </span>
                <p className="mt-1 font-medium">{c.title}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {alsoDiscussed.length > 0 ? (
        <p className="mt-6 text-sm text-neutral-600">
          Also discussed in other courses:{" "}
          {alsoDiscussed.map((e, i) => (
            <span key={e.slug}>
              {i > 0 ? ", " : ""}
              <Link href={`/e/${e.slug}`} className="underline hover:no-underline" style={{ color: "var(--accent)" }}>
                {e.name}
              </Link>
            </span>
          ))}
        </p>
      ) : null}

      {/* Personal notes (plans/61). Auditors record nothing, so they get no notes panel; the
          API refuses their writes regardless. */}
      {access.open && canRecord ? <NotesPanel courseId={view.course.id} lessonId={lesson.id} base={base} /> : null}

      {access.open && view.session ? (
        <CurriculumFeedback courseId={view.course.id} lessonId={lesson.id} />
      ) : null}

          <nav className="mt-10 flex items-center justify-between gap-3 border-t border-neutral-200 pt-5 dark:border-neutral-800">
            {prev ? (
              <Link
                href={`${base}/lesson/${prev.slug}`}
                className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-600 hover:border-current dark:border-neutral-700 dark:text-neutral-300"
              >
                ← Previous
              </Link>
            ) : (
              <span />
            )}
            <span className="hidden text-center text-xs text-neutral-400 sm:block">
              {coursePercent === 100
                ? "Course complete 🎉"
                : `${remaining} lesson${remaining === 1 ? "" : "s"} to finish`}
            </span>
            {next ? (
              <Link
                href={`${base}/lesson/${next.slug}`}
                className="rounded-lg px-6 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg, #fff)" }}
              >
                Next →
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </main>
      </div>
    </div>
  );
}
