import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadCourseView } from "@/lib/course-access";
import { lessonAccess, type LessonLockReason } from "@/lib/gating";
import { LessonPlayer } from "@/components/lesson-player";
import { MarkCompleteButton } from "@/components/mark-complete-button";
import { CurriculumFeedback } from "@/components/curriculum-feedback";
import { AssignmentSubmit } from "@/components/assignment-submit";
import { getSubmission } from "@/db/queries/assignments";
import { buildCrossroads } from "@/lib/crossroads";
import { hasAgeConsentCookie } from "@/lib/age-gate";
import { AgeGate } from "@/components/age-gate";
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
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link href={base} className="text-sm text-neutral-500 hover:underline">
        ← {view.course.title}
      </Link>
      <h1 className="mt-3 text-2xl font-bold">{lesson.title}</h1>

      <div className="mt-6">
        {access.open ? (
          <>
            <LessonPlayer lesson={lesson} />
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

      <nav className="mt-10 flex justify-between text-sm">
        {prev ? (
          <Link href={`${base}/lesson/${prev.slug}`} className="hover:underline">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`${base}/lesson/${next.slug}`} className="hover:underline">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
