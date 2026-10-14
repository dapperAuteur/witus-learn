import Link from "next/link";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { requireUserPage, isPlatformOwner } from "@/lib/session";
import { getUsername } from "@/db/queries/authoring";
import { hasReviewerCredential, KIND_TITLE, needLabel, RESET_RULE, REVIEW_DISCLAIMER, STATE_LABEL } from "@/lib/lesson-review";
import { reviewsByLesson, summarizeLessonReview } from "@/lib/lesson-review-summary";

/** Login-gated, one reviewer's own list, never shared or indexed, so no social card by design. */
export const metadata: Metadata = {
  title: "Review lessons",
  description: "The lessons you were invited to review before release, and how you will be credited.",
  robots: { index: false, follow: false },
};

const fmt = (d: Date | string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

// Reviewer sign-off (plans/93 section 1), the reviewer's own list: every lesson marked "Before
// release" in the courses this viewer holds an ACCEPTED review grant for, in this tenant, and
// nothing else. The course list comes from the grants (tenant-scoped, matched by the pure auditor
// rule), and the lesson read is limited to exactly those course ids.
//
// It shows each need's STATE and never a correction's text: corrections are attached to one lesson
// and are read there (no page lists corrections across courses, by the no-inbox rule).
//
// Page guard, not the API guard, for the same reason /audit/citations gives: a signed-out reviewer
// following a link needs to be sent to sign in and brought back.
export default async function AuditReviewPage() {
  const session = await requireUserPage();
  const sdb = await getScopedDb();
  const viewer = { userId: session.user.id, email: session.user.email ?? null };

  const [owner, grants] = await Promise.all([isPlatformOwner(session.user.id), sdb.listViewerAuditGrants(viewer)]);
  const courseIds = grants.map((g) => g.courseId);
  const [lessons, reviews] = await Promise.all([sdb.listReviewableLessons(courseIds), sdb.listLessonReviews(courseIds)]);
  const byLesson = reviewsByLesson(reviews);
  const usernames = new Map(
    await Promise.all(
      [...new Set(grants.map((g) => g.instructorId))].map(async (id) => [id, await getUsername(id)] as const),
    ),
  );

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">Review lessons</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Thank you for reviewing. Each lesson below is marked &ldquo;Before release&rdquo; because it needs someone with your
        background to read it. Open it, read it against its sources, and record a verdict at the foot of the page: cleared,
        cleared with one correction to make, or not cleared.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {RESET_RULE} A correction is attached to the lesson for the author to apply. Nobody replies to it, and a new verdict
        replaces the old one.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{REVIEW_DISCLAIMER}</p>
      <p className="mt-3 text-sm">
        <Link
          href="/audit/citations"
          className="inline-flex min-h-11 items-center underline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ color: "var(--accent)" }}
        >
          Verify these courses&apos; citations
        </Link>
      </p>

      {owner ? (
        <p className="mt-4 rounded-md border border-neutral-200 p-4 text-sm dark:border-neutral-800">
          As the platform owner, you follow sign-off on each course&apos;s own page under Teach, in the &ldquo;Reviewer
          sign-off&rdquo; panel. This page lists only courses you were invited to review yourself.
        </p>
      ) : null}

      {grants.length === 0 ? (
        <p className="mt-8 rounded-md border border-neutral-200 p-4 text-sm dark:border-neutral-800">
          You do not have an accepted invitation to review any course on this site yet. If you were sent an invitation link,
          open it first and it will bring you back here.
        </p>
      ) : (
        grants.map((g) => {
          const username = usernames.get(g.instructorId) ?? null;
          const courseLessons = lessons
            .filter((l) => l.courseId === g.courseId && l.isPublished)
            .map((l) => ({ lesson: l, summary: summarizeLessonReview(l, byLesson.get(l.id) ?? []) }))
            .filter((x) => x.summary.rows.some((r) => r.stillMarked) || x.summary.decisions.length > 0);
          const credited = hasReviewerCredential(g);
          return (
            <section key={g.auditorId} aria-labelledby={`course-${g.auditorId}`} className="mt-8">
              <h2 id={`course-${g.auditorId}`} className="text-lg font-semibold">
                {g.courseTitle}
              </h2>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {credited
                  ? `You will be credited as ${g.reviewerName!.trim()}, ${g.reviewerCredential!.trim()}.`
                  : "Not credited yet: the person who invited you adds your name and credential, and you can record a verdict once they have."}
              </p>
              {courseLessons.length === 0 ? (
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">No lesson in this course is marked for review.</p>
              ) : (
                <ul className="mt-3 divide-y divide-neutral-100 rounded-lg border border-neutral-200 dark:divide-neutral-800/60 dark:border-neutral-800">
                  {courseLessons.map(({ lesson, summary }) => {
                    const href = username && g.courseSlug && lesson.slug ? `/${username}/${g.courseSlug}/lesson/${lesson.slug}` : null;
                    return (
                      <li key={lesson.id} className="p-3 text-sm">
                        {href ? (
                          <Link
                            href={href}
                            className="inline-flex min-h-11 items-center font-medium underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2"
                            style={{ color: "var(--accent)" }}
                          >
                            {lesson.title}
                          </Link>
                        ) : (
                          <span className="font-medium">{lesson.title}</span>
                        )}
                        <ul className="mt-1 space-y-1 text-neutral-700 dark:text-neutral-300">
                          {summary.rows
                            .filter((r) => r.stillMarked)
                            .map((r) => (
                              <li key={r.kind}>
                                <span className="font-medium">{KIND_TITLE[r.kind]}</span> ({r.whos.join("; ")}):{" "}
                                {STATE_LABEL[r.state]}
                                {r.review && r.review.reviewerUserId === session.user.id
                                  ? `, your verdict of ${fmt(r.review.decidedAt)}`
                                  : r.review
                                    ? `, ${r.review.reviewerName}, ${fmt(r.review.decidedAt)}`
                                    : ""}
                              </li>
                            ))}
                          {summary.decisions.map((d, i) => (
                            <li key={`decision-${i}`}>
                              Needs {needLabel(d)} by the course author (not a review): {d.who}
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          );
        })
      )}
    </main>
  );
}
