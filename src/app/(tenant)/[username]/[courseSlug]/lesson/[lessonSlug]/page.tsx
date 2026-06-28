import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadCourseView } from "@/lib/course-access";
import { lessonAccess, type LessonLockReason } from "@/lib/gating";
import { LessonPlayer } from "@/components/lesson-player";
import { MarkCompleteButton } from "@/components/mark-complete-button";

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
