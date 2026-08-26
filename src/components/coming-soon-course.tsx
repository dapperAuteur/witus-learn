import Link from "next/link";
import { CourseInterestForm } from "./course-interest-form";
import { CourseNotifyForm } from "./course-notify-form";
import { CourseStandards } from "./course-standards";
import { ShareButton } from "./share-button";

// Per-COURSE "Coming soon" presentation for an unvetted course (`vetted_at IS NULL`).
//
// Not to be confused with src/components/coming-soon.tsx, which is the TENANT-level pre-launch
// holding page for a whole school (tenant.flags.comingSoon). This is a badge for catalog cards
// plus the whole public landing face for the course page, which stays public and indexable on
// purpose: it carries the description and the standards the course meets, and only the CONTENT is
// closed.
//
// This file must never be handed a lesson. It receives exactly the fields the public face shows
// (title, description, instructor username, brand) and nothing else: no lesson list, no media
// URL, no price, so "the closed course can't leak through the open page" is checkable by reading
// one small file. tests/isolation/vetting.test.ts asserts that.

/** Card / list badge. Absolutely positioned by the caller when it sits over a card. */
export function ComingSoonBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-900 dark:bg-sky-900 dark:text-sky-100 ${className}`}
    >
      <span aria-hidden="true">🕒</span> Coming soon
    </span>
  );
}

/**
 * The course landing page's closed-content panel, plus the "notify me" capture. Deliberately says
 * what a visitor CAN do (read what the course covers, check the standards, ask to be told when it
 * opens) and never states a date: a missed date is worse than no date, and we do not publish
 * claims we cannot stand behind.
 *
 * Only ever rendered for the stranger view, so `courseId` is safe to hand to the form: the course
 * landing page is public, and the signup route re-checks that the course is published + unvetted.
 */
export function ComingSoonPanel({
  brand,
  courseId,
  defaultEmail,
  defaultName,
}: {
  brand: string;
  courseId: string;
  /** Prefill for a signed-in visitor who is not enrolled (still editable). */
  defaultEmail?: string;
  defaultName?: string;
}) {
  return (
    <section
      aria-labelledby="coming-soon-heading"
      className="mt-6 rounded-xl border-2 p-5 sm:p-6"
      style={{ borderColor: "var(--accent)" }}
    >
      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
        Coming soon
      </p>
      <h2 id="coming-soon-heading" className="mt-1 text-xl font-bold">
        This course is being reviewed
      </h2>
      <p className="mt-2 text-neutral-700 dark:text-neutral-300">
        Every course on {brand} is checked against its sources before it opens, so the lessons are
        not available yet. What the course covers is above, and any academic standards it meets are
        listed with it. Enrollment opens when the review is finished.
      </p>
      <CourseNotifyForm courseId={courseId} defaultEmail={defaultEmail} />

      {/*
        The one-field notify box above stays exactly as it was, because for most visitors the
        address IS the whole value and every extra field costs signups. This is the longer road for
        the smaller number of people who want to do more than wait: test the course, or vet it.
        Collapsed so it costs the first group nothing, and open to a keyboard and a screen reader
        without any JavaScript of ours.

        Nothing in here grants anything. It records a request the instructor decides on.
      */}
      <details className="mt-6 border-t border-neutral-200 pt-4 dark:border-neutral-800">
        <summary className="min-h-11 cursor-pointer list-none text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12">
          <span style={{ color: "var(--accent)" }}>
            Want to help this course open? Test it, or vet it &rarr;
          </span>
        </summary>
        <h3 className="mt-3 text-base font-semibold">Put your name in</h3>
        <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
          A course is checked against its sources before it opens. If you want to read it early and
          send notes, or you know this subject well enough to check the claims, say so here. The
          instructor decides who reviews their own course, so this is a request, not a login.
        </p>
        <CourseInterestForm
          courseId={courseId}
          defaultEmail={defaultEmail}
          defaultName={defaultName}
        />
      </details>

      <p className="mt-3 text-sm text-neutral-600">
        Already studying this course? Sign in and it will open as usual.
      </p>
    </section>
  );
}

/**
 * The complete public landing face of an unvetted course: what it is, who teaches it, which
 * standards it meets, a share card, and the notify-me capture. Rendered INSTEAD of the syllabus
 * for anyone who is not the platform owner, the course's instructor or an existing enrollee.
 *
 * The structured data describes the course but never OFFERS it: no price, no offer, no enrollment
 * markup while a course cannot be bought.
 */
export function ComingSoonCourseFace({
  courseId,
  title,
  description,
  username,
  courseSlug,
  brand,
  defaultEmail,
  defaultName,
}: {
  courseId: string;
  title: string;
  description: string | null;
  /** Instructor's public username, for the byline link. */
  username: string;
  courseSlug: string;
  brand: string;
  defaultEmail?: string;
  defaultName?: string;
}) {
  const summary = description ?? `${title}, a course on ${brand}.`;
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: title,
            description: summary,
            provider: { "@type": "Organization", name: brand },
          }),
        }}
      />
      <Link href="/" className="text-sm text-neutral-600 hover:underline">
        ← Back to catalog
      </Link>
      <div className="mt-6 flex items-start justify-between gap-3">
        <h1 className="text-3xl font-bold">{title}</h1>
        <ShareButton
          title={title}
          text={description ?? undefined}
          label="Share course"
          courseId={courseId}
        />
      </div>
      <p className="mt-1 text-sm text-neutral-600">
        by{" "}
        <Link href={`/instructors/${username}`} className="hover:underline">
          {username}
        </Link>
      </p>
      {description ? (
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">{description}</p>
      ) : null}
      <CourseStandards courseSlug={courseSlug} />
      <ComingSoonPanel
        brand={brand}
        courseId={courseId}
        defaultEmail={defaultEmail}
        defaultName={defaultName}
      />
    </main>
  );
}
