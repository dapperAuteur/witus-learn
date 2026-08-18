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
import { selectResume } from "@/lib/resume";
import { isDirectMediaFile } from "@/lib/media";
import type { SavableLesson } from "@/lib/offline";
import {
  OfflineDownloadProvider,
  OfflineDownloadAllButton,
  OfflineLessonCheckbox,
  OfflineSectionCheckbox,
  OfflineSelectionBar,
} from "@/components/offline-selection";
import { listGlossary, listSources } from "@/db/queries/pedagogy";
import { getPathsForCourse } from "@/db/queries/paths";
import { listLiveForCourse } from "@/db/queries/live";
import { LivePlayer } from "@/components/live-player";
import { GlossaryList } from "@/components/glossary-list";
import { ProgressBar } from "@/components/progress-bits";
import { getUnmetRequired, listPrerequisites } from "@/db/queries/prerequisites";
import { CourseActions } from "@/components/course-actions";
import { TutorChat } from "@/components/tutor-chat";
import { CourseSourceChat } from "@/components/course-source-chat";
import { getSourceChatConfig } from "@/db/queries/source-chat-config";
import { courseHasChunks } from "@/db/queries/source-chunks";
import { sourceChatAllowed } from "@/lib/source-chat-access";
import { CourseAdminTools } from "@/components/course-admin-tools";
import { getEmbeddingStaleness } from "@/db/queries/cyoa";
import { hasAgeConsentCookie } from "@/lib/age-gate";
import { AgeGate } from "@/components/age-gate";
import { brandName } from "@/lib/branding";
import { CourseStandards } from "@/components/course-standards";
import { CourseSearch } from "@/components/course-search";
import { ComingSoonCourseFace } from "@/components/coming-soon-course";
import { UnvettedDisclosure } from "@/components/unvetted-disclosure";
import { isOpenWhileUnvetted, isUnvetted } from "@/lib/vetting";
import { isPlatformOwner } from "@/lib/session";
import { VetCourseCta } from "@/components/vet-course-cta";

type Params = { params: Promise<{ username: string; courseSlug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { username, courseSlug } = await params;
  const view = await loadCourseView(username, courseSlug);
  if (!view) return { title: "Course" };
  const { course, tenant } = view;
  const brand = brandName(tenant);
  const description = course.description ?? `${course.title}, a course on ${brand}.`;
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

  // UNVETTED ("Coming soon"): the landing page stays public and indexable, because the description
  // and the standards it meets are exactly what teachers and schools shop on. The course behind it
  // is closed: no lesson list, no lesson titles, no media URLs, no price, no enroll button. Owner,
  // instructor and existing enrollees never land here (loadCourseView resolves that gate and, for
  // anyone else, returns the view with no lessons at all).
  //
  // Deliberately BEFORE the per-course age gate: this face shows no more than the catalog card
  // already does (title + description), and an age wall in front of it would make a public page
  // unindexable for no protective gain. Every actual lesson stays behind both gates.
  if (view.isComingSoon) {
    return (
      <ComingSoonCourseFace
        courseId={course.id}
        title={course.title}
        description={course.description}
        username={username}
        courseSlug={courseSlug}
        brand={brandName(view.tenant)}
        defaultEmail={view.session?.user.email}
      />
    );
  }

  // Vetting is the platform owner's own review, so the "needs vetting" CTA is owner-only (the
  // PATCH strips the field for everyone else anyway). Only asked when it could show something.
  const ownerNeedsToVet =
    isUnvetted(course) && view.session ? await isPlatformOwner(view.session.user.id) : false;

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
  const unmetPrereqIds = view.activeLearnerId
    ? new Set((await getUnmetRequired(view.activeLearnerId, course.id)).map((c) => c.id))
    : new Set<string>();
  const meta = [course.seriesTitle, course.seasonNumber ? `Season ${course.seasonNumber}` : null]
    .filter(Boolean)
    .join(" · ");
  const base = `/${username}/${courseSlug}`;
  const completedCount = lessons.filter((l) => completedLessonIds.has(l.id)).length;
  const percent = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;
  const showProgress = (view.isEnrolled || completedCount > 0) && lessons.length > 0;

  // "Continue where you left off" — the lesson the learner was ACTUALLY on (last opened), not the
  // first gap in the syllabus. Only shown once they've genuinely begun, so the copy never lies to
  // someone who has never opened the course; and only when the lesson is still open to them (a
  // sequential course could have re-locked it), otherwise the syllabus below is the honest answer.
  const hasBegun = Boolean(view.lastViewedLessonId) || completedCount > 0;
  const resumeLesson =
    view.session && hasBegun
      ? selectResume(lessons, completedLessonIds, view.lastViewedLessonId).lesson
      : null;
  const resumeHref =
    resumeLesson?.slug &&
    lessonAccess(course, resumeLesson, { isEditor, isEnrolled: view.isEnrolled, isAuditor: view.isAuditor, completedLessonIds, orderedLessonIds }).open
      ? `${base}/lesson/${resumeLesson.slug}`
      : null;
  // Distinguish "you stopped mid-lesson" from "you finished that one, here's the next".
  const resumingInProgress =
    resumeLesson != null &&
    resumeLesson.id === view.lastViewedLessonId &&
    !completedLessonIds.has(resumeLesson.id);
  // Series membership: which learning path(s) this course sits in, so the learner is told it's part
  // of an ordered track (and where). Empty for a standalone course, so the banner just doesn't show.
  const coursePaths = await getPathsForCourse(view.tenant.id, course.id);
  // Every lesson the learner may save for offline: page path, direct-media file (when applicable),
  // and the metadata the offline manifest needs so /downloads can name it with no network (a
  // cached URL alone can't tell you its course, section or title — see src/lib/offline-manifest.ts).
  // Locked lessons are EXCLUDED — nothing useful to cache, and no checkbox is rendered for them.
  const moduleTitles = new Map(view.modules.map((m) => [m.id, m.title]));
  const savableLessons = lessons.reduce<SavableLesson[]>((acc, l) => {
    const access = lessonAccess(course, l, { isEditor, isEnrolled: view.isEnrolled, isAuditor: view.isAuditor, completedLessonIds, orderedLessonIds });
    if (!access.open) return acc;
    const mediaUrl =
      (l.lessonType === "audio" || l.lessonType === "video") && l.contentUrl && isDirectMediaFile(l.contentUrl)
        ? l.contentUrl
        : null;
    acc.push({
      pagePath: `${base}/lesson/${l.slug}`,
      mediaUrl,
      meta: {
        courseTitle: course.title,
        courseSlug,
        courseHref: base,
        sectionTitle: (l.moduleId ? moduleTitles.get(l.moduleId) : null) ?? null,
        lessonTitle: l.title,
        // Stamp what the learner is actually downloading, so /downloads can later tell them the
        // instructor has changed the course since (see courses.content_version).
        courseId: course.id,
        courseContentVersion: course.contentVersion,
      },
    });
    return acc;
  }, []);
  const savablePaths = new Set(savableLessons.map((l) => l.pagePath));

  // "Chat with the sources": shown when the course is indexed AND the learner is allowed by the
  // owner-set stage (owner/instructor → invited/enrolled → paid). Config lives in platform_settings.
  const sourceChatConfig = await getSourceChatConfig(course.tenantId, course.id);
  const showSourceChat =
    (course.isPublished || isEditor) && // editors can test on their own unpublished courses
    (await courseHasChunks(course.tenantId, course.id)) &&
    sourceChatAllowed({ isEditor, isEnrolled: view.isEnrolled, free: isFreeCourse(course), stage: sourceChatConfig.stage });
  const typeIcon = (t: string) =>
    ({ text: "📖", exercise: "✍️", quiz: "🧠", map: "🗺️", video: "🎬", "360video": "🎬", audio: "🎧", assignment: "📝" })[t] ?? "📄";

  const lessonRow = (lesson: (typeof lessons)[number], n: number) => {
    const access = lessonAccess(course, lesson, {
      isEditor,
      isEnrolled: view.isEnrolled,
      // An invited auditor (plans/52 section 5) reads this unvetted course; every write is refused
      // server-side, so opening the row here costs nothing but a reviewer being able to do the job.
      isAuditor: view.isAuditor,
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
    const pagePath = `${base}/lesson/${lesson.slug}`;
    return (
      // The offline checkbox sits OUTSIDE the <Link> — a checkbox nested inside an anchor can't be
      // clicked without navigating. It renders itself away for locked lessons (never registered
      // with the provider) and in browsers with no Cache API.
      <li key={lesson.id} className="flex items-center gap-1">
        <OfflineLessonCheckbox pagePath={pagePath} lessonTitle={lesson.title} />
        {access.open ? (
          <Link
            href={pagePath}
            className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-neutral-200 px-4 py-3 transition hover:border-neutral-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800 dark:hover:border-neutral-700"
          >
            {inner}
          </Link>
        ) : (
          <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-neutral-200 px-4 py-3 opacity-70 dark:border-neutral-800">
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
          description: course.description ?? `${course.title}, a course on ${brandName(view.tenant)}.`,
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
            ⚠️ ON HOLD, do not publish this course yet
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

      {isOpenWhileUnvetted(course) ? <UnvettedDisclosure /> : null}

      {ownerNeedsToVet ? <VetCourseCta courseId={course.id} courseTitle={course.title} /> : null}

      <CourseStandards courseSlug={courseSlug} />

      {coursePaths.map((p) => {
        const next = p.courses[p.position]; // position is 1-based, so this is the course AFTER it
        return (
          <aside
            key={p.id}
            className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm dark:border-neutral-800 dark:bg-neutral-900"
          >
            <p className="font-medium">
              Part {p.position} of {p.total} in{" "}
              <Link href={`/paths/${p.slug}`} className="underline" style={{ color: "var(--accent)" }}>
                {p.title}
              </Link>{" "}
              <span className="font-normal text-neutral-500">(recommended order)</span>
            </p>
            <ol className="mt-2 list-decimal space-y-0.5 pl-5 text-neutral-600 dark:text-neutral-400">
              {p.courses.map((c) => (
                <li key={c.id} className={c.id === course.id ? "font-semibold text-neutral-900 dark:text-neutral-100" : ""}>
                  {c.id === course.id ? (
                    c.title
                  ) : (
                    <Link href={`/course/${c.id}`} className="hover:underline">
                      {c.title}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
            {next ? (
              <Link href={`/course/${next.id}`} className="mt-2 inline-block font-medium underline" style={{ color: "var(--accent)" }}>
                Next in this track: {next.title} →
              </Link>
            ) : null}
          </aside>
        );
      })}

      {resumeLesson && resumeHref ? (
        <section className="mt-5 flex flex-col gap-4 rounded-xl border-2 p-4 sm:flex-row sm:items-center" style={{ borderColor: "var(--accent)" }}>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
              {resumingInProgress ? "Continue where you left off" : "Next up"}
            </p>
            <p className="mt-0.5 truncate text-lg font-bold">{resumeLesson.title}</p>
            <p className="mt-0.5 text-sm text-neutral-500">
              Lesson {lessons.indexOf(resumeLesson) + 1} of {lessons.length}
            </p>
          </div>
          <Link
            href={resumeHref}
            className="grid min-h-11 shrink-0 place-items-center rounded-xl px-6 text-center font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg, #fff)" }}
          >
            {resumingInProgress ? "Resume" : "Continue"} →
          </Link>
        </section>
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

      {/* An invited auditor (plans/52 section 5) is here to READ the course, not take it: no enroll,
          no certificate, no recorded progress. Saying so beats an enroll button that 403s. */}
      {view.isAuditor ? (
        <p className="mt-6 rounded-lg border border-sky-300 bg-sky-50 p-4 text-sm text-sky-900 dark:border-sky-800 dark:bg-sky-950/40 dark:text-sky-200">
          You are reviewing this course before it opens. You can read every lesson. Nothing you do is
          recorded: no progress, no quiz scores, no certificate.
        </p>
      ) : view.session && course.isPublished ? (
        <CourseActions
          courseId={course.id}
          enrolled={view.isEnrolled}
          isFree={isFreeCourse(course)}
          priceType={course.priceType as "free" | "one_time" | "subscription"}
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

      {/* In-course search (plans/61 §5): only for viewers who can read the content — the API
          enforces the same gate server-side. Deliberately described as searching text, self-checks
          and image DESCRIPTIONS (alt/caption/credit), never as "image search". */}
      {(view.isEnrolled || isEditor || view.isAuditor) && lessons.length > 0 ? (
        <section className="mt-8">
          <h2 className="mb-3 text-lg font-semibold">Search this course</h2>
          <CourseSearch courseId={course.id} basePath={base} />
        </section>
      ) : null}

      {/* Offline downloads. The provider is a CLIENT component; the syllabus below is SERVER JSX
          passed to it as children, so it renders inside the provider's React tree and the client
          checkboxes nested in each row/section read its context — that's how the ticks live inside
          the existing collapsible sections instead of in a duplicated shadow list. */}
      <OfflineDownloadProvider lessons={savableLessons}>
      <div className="mt-8 mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">{view.modules.length > 0 ? "Sections" : "Lessons"}</h2>
        <OfflineDownloadAllButton />
      </div>
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
                <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 font-medium">
                  {/* Select-all for this section. Stops its own clicks so ticking it doesn't also
                      collapse the section it lives in. */}
                  <OfflineSectionCheckbox
                    sectionTitle={mod.title}
                    paths={modLessons
                      .map((l) => `${base}/lesson/${l.slug}`)
                      .filter((p) => savablePaths.has(p))}
                  />
                  <span className="min-w-0 flex-1 truncate">{mod.title}</span>
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
      <OfflineSelectionBar />
      </OfflineDownloadProvider>

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

      {showSourceChat ? <CourseSourceChat courseId={course.id} courseTitle={course.title} /> : null}

      {view.isEditor ? (
        <CourseAdminTools
          courseId={course.id}
          navigationMode={course.navigationMode}
          index={await getEmbeddingStaleness(course.id)}
        />
      ) : null}
    </main>
  );
}
