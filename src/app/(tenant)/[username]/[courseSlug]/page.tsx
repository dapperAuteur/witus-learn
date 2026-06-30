import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadCourseView } from "@/lib/course-access";
import { lessonAccess, isFreeCourse } from "@/lib/gating";
import { listGlossary, listSources } from "@/db/queries/pedagogy";
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

      {showProgress ? (
        <div className="mt-5 rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">{percent === 100 ? "Completed 🎉" : "Your progress"}</span>
            <span className="tabular-nums text-neutral-500">
              {completedCount} of {lessons.length} lessons
            </span>
          </div>
          <ProgressBar percent={percent} className="mt-2" />
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

      <h2 className="mt-8 mb-3 text-lg font-semibold">Lessons</h2>
      {lessons.length === 0 ? (
        <p className="text-neutral-500">No lessons yet.</p>
      ) : (
        <ol className="space-y-2">
          {lessons.map((lesson, i) => {
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
                    {i + 1}. {lesson.title}
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
          })}
        </ol>
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
              const href = s.pdfUrl
                ? `/api/document-proxy?url=${encodeURIComponent(s.pdfUrl)}`
                : (s.url ?? (s.doi ? `https://doi.org/${s.doi}` : null));
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

      {course.isPublished && (view.isEditor || (view.isEnrolled && !isFreeCourse(course))) ? (
        <TutorChat courseId={course.id} courseTitle={course.title} />
      ) : null}

      {view.isEditor ? (
        <CourseAdminTools courseId={course.id} navigationMode={course.navigationMode} />
      ) : null}
    </main>
  );
}
