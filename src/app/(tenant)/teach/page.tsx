import Link from "next/link";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { getMembership, getSession, isPlatformOwner } from "@/lib/session";
import { listAllTenantCourses, listOwnCourses, type ManagedCourse } from "@/db/queries/authoring";
import { TeacherCatalog, type CatalogReview } from "@/components/teacher-catalog";
import { getScopedDb } from "@/db/scoped";
import { readinessOf, reviewsByLesson, summarizeLessonReview, type LessonReviewSummary } from "@/lib/lesson-review-summary";
import { ownerOnlyBlocks } from "@/lib/course-visibility";
import { createCourseAction } from "./actions";

export const metadata: Metadata = { title: "Teach" };

// Minimal instructor surface: create a course + list your own (drafts + published).
// The full authoring dashboard (modules/lessons/quizzes) builds on the CRUD APIs.
export default async function TeachPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const tenant = await requireTenant();
  const session = await getSession();

  if (!session) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-2xl font-bold">Teach on {brandName(tenant)}</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Please{" "}
          <Link href="/login" className="underline">
            sign in
          </Link>{" "}
          to manage your courses.
        </p>
      </main>
    );
  }

  const owner = await isPlatformOwner(session.user.id);
  const membership = (await getMembership(session.user.id, tenant.id)) ?? "";
  const isInstructor = owner || ["instructor", "brand_admin"].includes(membership);
  const isAdmin = owner || membership === "brand_admin";

  if (!isInstructor) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-2xl font-bold">Teach on {brandName(tenant)}</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          You are signed in, but not yet an instructor on this brand. Instructor onboarding arrives
          in a later phase.
        </p>
      </main>
    );
  }

  // Admins see EVERY course on the brand (so a course bylined to another/stale-seed instructor is
  // reachable to reassign), private and held ones included; a plain instructor sees only their own.
  // An OWNER-ONLY course is left off a brand_admin's list (its title alone says it exists), unless
  // they are its instructor; the platform owner sees it.
  const courses = (
    isAdmin ? await listAllTenantCourses(tenant.id) : await listOwnCourses(tenant.id, session.user.id)
  ).filter((c) => !ownerOnlyBlocks({ isOwner: owner, isInstructor: c.instructorId === session.user.id }, c));
  // Reviewer sign-off (plans/93 section 1): a "QR 12/17" chip per course that carries release
  // markers. Only marked lessons are read (a handful of courses), then the verdicts on just those
  // courses; each state is computed against the lesson as it stands, exactly as the course page does.
  const sdb = await getScopedDb();
  const reviewable = await sdb.listReviewableLessons(courses.map((c) => c.id));
  const markedCourseIds = [...new Set(reviewable.map((l) => l.courseId))];
  const reviewsFor = reviewsByLesson(await sdb.listLessonReviews(markedCourseIds));
  const summariesByCourse = new Map<string, LessonReviewSummary[]>();
  for (const l of reviewable) {
    const list = summariesByCourse.get(l.courseId) ?? [];
    list.push(summarizeLessonReview(l, reviewsFor.get(l.id) ?? []));
    summariesByCourse.set(l.courseId, list);
  }
  const reviewFor = (courseId: string): CatalogReview | null => {
    const summaries = summariesByCourse.get(courseId);
    if (!summaries) return null;
    const r = readinessOf(summaries);
    return { qrCleared: r.qrCleared, qrTotal: r.qrTotal, ready: r.ready, openDecisions: r.openDecisions };
  };

  const labelFor = (c: (typeof courses)[number]): string | null => {
    if (!isAdmin) return null;
    const m = c as ManagedCourse;
    if (m.instructorId === session.user.id) return null; // "yours" — no byline needed
    return m.instructorDisplayName || (m.instructorUsername ? `@${m.instructorUsername}` : "unassigned");
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">Your courses</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          {owner ? (
            <Link href="/admin" className="font-medium underline" style={{ color: "var(--accent)" }}>
              Admin →
            </Link>
          ) : null}
          {isAdmin ? (
            <Link href="/teach/announce" className="font-medium underline" style={{ color: "var(--accent)" }}>
              Announce →
            </Link>
          ) : null}
          <Link href="/help" className="underline" style={{ color: "var(--accent)" }}>
            Help →
          </Link>
          <Link href="/teach/profile" className="underline" style={{ color: "var(--accent)" }}>
            Edit profile →
          </Link>
          <Link href="/teach/feedback" className="underline" style={{ color: "var(--accent)" }}>
            Curriculum feedback →
          </Link>
          {/* Tours from the field (plans/93 section 2): every virtual-tour slot and what fills it. */}
          <Link href="/teach/tours" className="inline-flex min-h-11 items-center underline" style={{ color: "var(--accent)" }}>
            Tours →
          </Link>
        </div>
      </div>

      <form action={createCourseAction} className="mt-6 flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-semibold">New course</h2>
        <label className="text-sm font-medium" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          name="title"
          required
          maxLength={200}
          className="min-h-11 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
        />
        <label className="text-sm font-medium" htmlFor="description">
          Description (optional)
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          className="rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
        />
        <button
          type="submit"
          className="min-h-11 self-start rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Create course
        </button>
      </form>

      {courses.length === 0 ? (
        <p className="mt-8 rounded-xl border border-dashed border-neutral-300 px-4 py-6 text-center text-neutral-600 dark:border-neutral-700">
          No courses yet.
        </p>
      ) : (
        <TeacherCatalog
          courses={courses.map((c) => ({
            id: c.id,
            slug: c.slug,
            title: c.title,
            category: c.category,
            isPublished: c.isPublished,
            visibility: c.visibility,
            publishHoldReason: c.publishHoldReason,
            priceType: c.priceType,
            price: Number(c.price ?? 0),
            // Boolean, not the timestamp: the row only needs to know vetted or not, and the
            // date itself is the owner's record, not something to ship to every client.
            vetted: c.vettedAt != null,
            instructorLabel: labelFor(c),
            review: reviewFor(c.id),
          }))}
          canVet={isAdmin}
          canOpenUnvetted={owner}
          initialStatus={status}
        />
      )}
    </main>
  );
}
