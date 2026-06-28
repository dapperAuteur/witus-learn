import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadCourseView } from "@/lib/course-access";
import { lessonAccess } from "@/lib/gating";

type Params = { params: Promise<{ username: string; courseSlug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { username, courseSlug } = await params;
  const view = await loadCourseView(username, courseSlug);
  return { title: view?.course.title ?? "Course" };
}

// Canonical pretty URL: /{instructor-username}/{course-slug}. Tenant + username
// scoped, so a foreign tenant's pretty URL 404s. Shows the syllabus with per-
// lesson lock/complete state.
export default async function CourseBySlugPage({ params }: Params) {
  const { username, courseSlug } = await params;
  const view = await loadCourseView(username, courseSlug);
  if (!view) notFound();

  const { course, lessons, isEditor, completedLessonIds, orderedLessonIds } = view;
  const meta = [course.seriesTitle, course.seasonNumber ? `Season ${course.seasonNumber}` : null]
    .filter(Boolean)
    .join(" · ");
  const base = `/${username}/${courseSlug}`;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/" className="text-sm text-neutral-500 hover:underline">
        ← Back to catalog
      </Link>
      {meta ? <p className="mt-6 text-xs uppercase tracking-wide text-neutral-500">{meta}</p> : null}
      <h1 className="mt-1 text-3xl font-bold">{course.title}</h1>
      <p className="mt-1 text-sm text-neutral-500">
        by{" "}
        <Link href={`/instructors/${username}`} className="hover:underline">
          {username}
        </Link>
        {isEditor && !course.isPublished ? " · Draft (only you can see this)" : null}
      </p>
      {course.description ? (
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">{course.description}</p>
      ) : null}

      <h2 className="mt-8 mb-3 text-lg font-semibold">Lessons</h2>
      {lessons.length === 0 ? (
        <p className="text-neutral-500">No lessons yet.</p>
      ) : (
        <ol className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {lessons.map((lesson, i) => {
            const access = lessonAccess(course, lesson, {
              isEditor,
              completedLessonIds,
              orderedLessonIds,
            });
            const done = completedLessonIds.has(lesson.id);
            return (
              <li key={lesson.id} className="flex items-center justify-between gap-3 py-3">
                <div className="flex items-center gap-3">
                  <span className="w-6 text-sm text-neutral-400">{i + 1}</span>
                  {access.open ? (
                    <Link href={`${base}/lesson/${lesson.slug}`} className="font-medium hover:underline">
                      {lesson.title}
                    </Link>
                  ) : (
                    <span className="font-medium text-neutral-500">{lesson.title}</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs">
                  {lesson.isFreePreview ? (
                    <span className="rounded-full bg-neutral-200 px-2 py-0.5 dark:bg-neutral-700">
                      Free preview
                    </span>
                  ) : null}
                  {done ? (
                    <span className="text-green-700 dark:text-green-400">✓</span>
                  ) : access.open ? null : (
                    <span aria-label="locked" title="Locked">
                      🔒
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </main>
  );
}
