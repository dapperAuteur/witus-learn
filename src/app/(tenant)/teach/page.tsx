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
import { SeedDriftWarnings } from "@/components/seed-drift-warnings";
import type { OpenSeedDrift } from "@/db/queries/seed-drift";
import { CourseRequestForm, type ExistingCourseOption } from "@/components/course-request-form";
import { countOpenCourseRequests, listOwnCourseRequests, type CourseRequestRow } from "@/db/queries/course-requests";
import { requestStatusLabel } from "@/lib/course-requests";
import { listOffersForTeacher, type CourseOfferRow } from "@/db/queries/course-offers";
import { CourseOfferResponse } from "@/components/course-offer-response";
import type { CourseRequestStatus } from "@/db/schema";

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

  // Seed drift (plans/97 Q5): re-surfaced on every visit until acknowledged on the course's page.
  // The owner sees every course's; an instructor their own. Never allowed to take Teach down.
  let drifts: OpenSeedDrift[] = [];
  try {
    drifts = await sdb.listOpenSeedDrifts(owner ? {} : { instructorId: session.user.id });
  } catch (err) {
    console.error("seed drift unavailable", err);
  }

  // Course requests (BAM 2026-11-10): a teacher's own, with the school's answer; for an admin, how many
  // wait on /admin/users. Off the critical path: a deploy ahead of migration 0081 still renders Teach.
  let ownRequests: CourseRequestRow[] = [];
  let openRequests = 0;
  try {
    [ownRequests, openRequests] = await Promise.all([
      listOwnCourseRequests(tenant.id, session.user.id),
      isAdmin ? countOpenCourseRequests(tenant.id) : Promise.resolve(0),
    ]);
  } catch (err) {
    console.error("course requests unavailable", err);
  }
  // Courses a school's admin offered this teacher (BAM 2026-11-10: "approve assigned courses"), and the
  // school's courses a teacher could ask to teach. Off the critical path like the requests above: a
  // deploy ahead of migration 0084 still renders Teach.
  let offers: CourseOfferRow[] = [];
  let existingCourses: ExistingCourseOption[] = [];
  try {
    offers = await listOffersForTeacher(tenant.id, session.user.id);
    if (!isAdmin) {
      existingCourses = (await listAllTenantCourses(tenant.id))
        .filter((c) => c.instructorId !== session.user.id && (owner || !c.ownerOnly))
        .map((c) => ({
          id: c.id,
          title: c.title,
          instructorLabel: c.instructorDisplayName || (c.instructorUsername ? `@${c.instructorUsername}` : "unassigned"),
        }));
    }
  } catch (err) {
    console.error("course offers unavailable", err);
  }

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
          {isAdmin ? (
            <Link href="/admin/users#course-requests" className="font-medium underline" style={{ color: "var(--accent)" }}>
              Course requests{openRequests > 0 ? ` (${openRequests})` : ""} →
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
      <SeedDriftWarnings drifts={drifts} />

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

      {offers.length > 0 ? (
        <section id="course-offers" aria-labelledby="course-offers-h" className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950">
          <h2 id="course-offers-h" className="font-semibold">
            Courses offered to you ({offers.length})
          </h2>
          <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
            Your school offered you these courses to teach. Nothing changes until you accept; then the course is yours to edit, record
            and teach.
          </p>
          <ul className="mt-3 space-y-4">
            {offers.map((o) => (
              <li key={o.id} className="rounded-lg border border-neutral-200 bg-white p-4 text-sm dark:border-neutral-800 dark:bg-neutral-900">
                <p className="font-medium">{o.courseTitle}</p>
                <p className="mt-0.5 text-xs text-neutral-600 dark:text-neutral-400">
                  Offered by {o.offeredByLabel ?? "the school"} · open until{" "}
                  {new Date(o.expiresAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </p>
                <CourseOfferResponse offerId={o.id} courseTitle={o.courseTitle} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* A teacher who is not an admin asks the school for a course; an admin creates one above. */}
      {!isAdmin ? <CourseRequestForm existingCourses={existingCourses} /> : null}
      {ownRequests.length > 0 ? (
        <section aria-labelledby="own-requests-h" className="mt-6">
          <h2 id="own-requests-h" className="font-semibold">
            Your course requests
          </h2>
          <ul className="mt-2 divide-y divide-neutral-200 text-sm dark:divide-neutral-800">
            {ownRequests.map((r) => (
              <li key={r.id} className="py-3">
                <p className="font-medium">
                  {r.kind === "existing" ? "To teach: " : null}
                  {r.title}{" "}
                  <span className="font-normal text-neutral-600 dark:text-neutral-400">({requestStatusLabel(r.status as CourseRequestStatus, r.kind)})</span>
                </p>
                {r.status === "approved" && r.courseId ? (
                  <Link href={`/teach/${r.courseSlug ?? r.courseId}`} className="underline" style={{ color: "var(--accent)" }}>
                    {r.kind === "existing" ? "Open the course →" : "Open the draft course →"}
                  </Link>
                ) : null}
                {r.decisionNote ? (
                  <p className="mt-1 whitespace-pre-wrap text-neutral-700 dark:text-neutral-300">
                    <span className="font-medium">Note from the school: </span>
                    {r.decisionNote}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

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
            navigationMode: c.navigationMode,
          }))}
          canVet={isAdmin}
          canOpenUnvetted={owner}
          canRunCrossroadsBackfill={owner}
          initialStatus={status}
        />
      )}
    </main>
  );
}
