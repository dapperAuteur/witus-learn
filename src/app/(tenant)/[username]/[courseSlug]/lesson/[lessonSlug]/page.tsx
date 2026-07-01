import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadCourseView } from "@/lib/course-access";
import { lessonAccess, type LessonLockReason } from "@/lib/gating";
import { LessonPlayer } from "@/components/lesson-player";
import { MarkCompleteButton } from "@/components/mark-complete-button";
import { ProgressBar } from "@/components/progress-bits";
import { CurriculumFeedback } from "@/components/curriculum-feedback";
import { AssignmentSubmit } from "@/components/assignment-submit";
import { getSubmission } from "@/db/queries/assignments";
import { buildCrossroads } from "@/lib/crossroads";
import { hasAgeConsentCookie } from "@/lib/age-gate";
import { AgeGate } from "@/components/age-gate";
import { MetricsTrackerCta } from "@/components/metrics-tracker-cta";
import { SaveOfflineButton } from "@/components/save-offline-button";
import { ShareButton } from "@/components/share-button";
import { isDirectMediaFile } from "@/lib/media";
import { brandName } from "@/lib/branding";

type Params = {
  params: Promise<{ username: string; courseSlug: string; lessonSlug: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { username, courseSlug, lessonSlug } = await params;
  const view = await loadCourseView(username, courseSlug);
  return { title: view?.lessons.find((l) => l.slug === lessonSlug)?.title ?? "Lesson" };
}

const LOCK_COPY: Record<LessonLockReason, string> = {
  draft: "This lesson is not available.",
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
    completedLessonIds: view.completedLessonIds,
    orderedLessonIds: view.orderedLessonIds,
  });

  const idx = view.lessons.findIndex((l) => l.id === lesson.id);
  const prev = idx > 0 ? view.lessons[idx - 1] : null;
  const next = idx < view.lessons.length - 1 ? view.lessons[idx + 1] : null;
  const base = `/${username}/${courseSlug}`;
  const completed = view.completedLessonIds.has(lesson.id);
  const total = view.lessons.length;
  const position = idx + 1;
  const coursePercent = total > 0 ? Math.round((view.completedLessonIds.size / total) * 100) : 0;
  const remaining = Math.max(0, total - view.completedLessonIds.size);

  // Assignment lessons: load the learner's own submission for the submit box.
  const submission =
    lesson.lessonType === "assignment" && access.open && view.session
      ? await getSubmission(lesson.id, view.session.user.id)
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

  return (
    <div>
      {/* Sticky progress header — course context + position always visible. */}
      <div className="sticky top-0 z-10 border-b border-neutral-200 bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex items-center justify-between gap-3 text-sm">
            <Link href={base} className="flex min-w-0 items-center gap-2 font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100">
              <span aria-hidden>←</span> <span className="truncate">{view.course.title}</span>
            </Link>
            <span className="shrink-0 font-medium tabular-nums text-neutral-500">
              Lesson {position} of {total}
            </span>
          </div>
          <div className="mt-2">
            <ProgressBar percent={coursePercent} />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl gap-8 px-4 py-8">
        {/* Contents rail — completion at a glance. */}
        <nav aria-label="Lessons in this course" className="hidden w-60 shrink-0 lg:block">
          <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Lessons</div>
          <ol className="mt-3 space-y-0.5 text-sm">
            {view.lessons.map((l) => {
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
            })}
          </ol>
        </nav>

        {/* Main lesson column. */}
        <main className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h1 className="text-2xl font-bold tracking-tight">{lesson.title}</h1>
            {view.course.isPublished && view.course.visibility !== "private" ? (
              <ShareButton title={`${lesson.title} — ${view.course.title}`} label="Share" />
            ) : null}
          </div>

          <div className="mt-6">
            {access.open ? (
          <>
            <LessonPlayer lesson={lesson} />
            {(lesson.lessonType === "audio" || lesson.lessonType === "video") &&
            lesson.contentUrl &&
            isDirectMediaFile(lesson.contentUrl) ? (
              <SaveOfflineButton url={lesson.contentUrl} />
            ) : null}
            {view.course.slug === "read-your-bodys-data" && view.session ? <MetricsTrackerCta /> : null}
            <div className="mt-6">
              {view.session ? (
                <MarkCompleteButton courseId={view.course.id} lessonId={lesson.id} completed={completed} />
              ) : (
                <Link href="/login" className="text-sm underline">
                  Sign in to track your progress
                </Link>
              )}
            </div>
            {lesson.lessonType === "assignment" && view.session ? (
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
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
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
