import Link from "next/link";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { getMembership, getSession, isPlatformOwner } from "@/lib/session";
import { getScopedDb } from "@/db/scoped";
import type { TourSlotRow } from "@/db/queries/tour-embeds";
import { displayTourTitle, tourSlotState, type TourSlotState } from "@/lib/field-log-tour";
import { RemoveTourButton } from "@/components/remove-tour-button";

export const metadata: Metadata = {
  title: "Tours from the field",
  description:
    "Every virtual-tour lesson in your courses: empty, filled from My Field Log, or hidden, and why.",
  robots: { index: false, follow: false },
};

// Always per-viewer and re-checked on read: a tour hidden by a consent change must show as hidden here
// on the next load, never from a cached render.
export const dynamic = "force-dynamic";

const BADGE: Record<TourSlotState["state"], { label: string; className: string }> = {
  empty: { label: "Empty", className: "border-neutral-300 text-neutral-700 dark:border-neutral-700 dark:text-neutral-300" },
  own_link: {
    label: "Has its own tour link",
    className: "border-sky-300 bg-sky-50 text-sky-900 dark:border-sky-800 dark:bg-sky-950/40 dark:text-sky-200",
  },
  live: {
    label: "Shown, from the field",
    className: "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200",
  },
  hidden: {
    label: "Hidden",
    className: "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200",
  },
};

// Tours from the field (plans/93 section 2): the instructor's view of every tour slot, reached from
// the /teach header. Login-gated and nested, so the page-reachability guard does not scan it; the
// header link is what keeps it findable. Nothing here is a request or a queue: it lists the viewer's
// own lessons and what is in them.
export default async function TeachToursPage() {
  const tenant = await requireTenant();
  const session = await getSession();

  if (!session) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-2xl font-bold">Tours from the field</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Please{" "}
          <Link href="/login" className="underline">
            sign in
          </Link>{" "}
          to see the tour slots in your courses on {brandName(tenant)}.
        </p>
      </main>
    );
  }

  const owner = await isPlatformOwner(session.user.id);
  const membership = (await getMembership(session.user.id, tenant.id)) ?? "";
  if (!owner && !["instructor", "brand_admin"].includes(membership)) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-2xl font-bold">Tours from the field</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          You are signed in, but not an instructor on this brand, so there are no tour slots to show.
        </p>
      </main>
    );
  }

  const sdb = await getScopedDb();
  let slots: TourSlotRow[] = [];
  let loadFailed = false;
  try {
    slots = await sdb.listTourSlots({ userId: session.user.id, isOwner: owner });
  } catch (err) {
    console.error("tours: could not list tour slots for /teach/tours", err);
    loadFailed = true;
  }

  const rows = slots.map((s) => ({ slot: s, state: tourSlotState(s, s.tour) }));
  const byCourse = new Map<string, { title: string; rows: typeof rows }>();
  for (const r of rows) {
    const group = byCourse.get(r.slot.courseId) ?? { title: r.slot.courseTitle, rows: [] };
    group.rows.push(r);
    byCourse.set(r.slot.courseId, group);
  }
  const count = (state: TourSlotState["state"]) => rows.filter((r) => r.state.state === state).length;

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/teach" className="inline-flex min-h-11 items-center text-sm underline" style={{ color: "var(--accent)" }}>
        ← Your courses
      </Link>
      <h1 className="mt-2 text-2xl font-bold">Tours from the field</h1>
      <p className="mt-3 max-w-prose text-sm text-neutral-700 dark:text-neutral-300">
        Every virtual-tour lesson in {owner ? "this school's courses" : "your courses"}. Fill an empty one from a stop in{" "}
        <Link href="/field-log" className="underline">
          My Field Log
        </Link>
        : open the leg and choose <strong>Use in a lesson</strong>. The lesson shows the capture&apos;s own link with its
        credit, never a copy. A tour stays on the lesson only while its capture passes every rule: the subject did not
        decline, a minor appears only with written consent, it is a photo or video with an https link, and its stop has a
        permission note. When one stops passing, it is hidden and this page says why.
      </p>

      {loadFailed ? (
        <p role="alert" className="mt-6 rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
          The tour slots could not be loaded. If this branch was just merged, the database migration may not have run yet.
        </p>
      ) : rows.length === 0 ? (
        <p className="mt-8 rounded-xl border border-dashed border-neutral-300 px-4 py-6 text-center text-neutral-600 dark:border-neutral-700">
          No virtual-tour lessons in {owner ? "this school's courses" : "your courses"} yet.
        </p>
      ) : (
        <>
          <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400">
            {rows.length} tour {rows.length === 1 ? "lesson" : "lessons"}: {count("empty")} empty, {count("live")} shown from
            the field, {count("hidden")} hidden, {count("own_link")} with a tour link of their own.
          </p>
          {[...byCourse.entries()].map(([courseId, group]) => (
            <section key={courseId} aria-labelledby={`tours-${courseId}`} className="mt-8">
              <h2 id={`tours-${courseId}`} className="text-lg font-semibold">
                {group.title}
              </h2>
              <ul className="mt-3 space-y-3">
                {group.rows.map(({ slot, state }) => {
                  const title = displayTourTitle(slot.lessonTitle, state.state === "live");
                  const href =
                    slot.username && slot.courseSlug && slot.lessonSlug
                      ? `/${slot.username}/${slot.courseSlug}/lesson/${slot.lessonSlug}`
                      : null;
                  const badge = BADGE[state.state];
                  return (
                    <li key={slot.lessonId} className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="min-w-0">
                          {href ? (
                            <Link href={href} className="inline-flex min-h-11 items-center font-medium underline">
                              {title}
                            </Link>
                          ) : (
                            <span className="font-medium">{title}</span>
                          )}
                          {!slot.lessonPublished ? <span className="ml-2 text-xs text-neutral-600">(draft)</span> : null}
                        </div>
                        <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${badge.className}`}>
                          {badge.label}
                        </span>
                      </div>
                      {state.state === "live" || state.state === "hidden" ? (
                        <div className="mt-2 space-y-1 text-sm">
                          <p className="break-words text-neutral-700 dark:text-neutral-300">
                            <span className="font-medium">Credit:</span> {state.credit}
                          </p>
                          <p className="text-xs text-neutral-600 dark:text-neutral-400">
                            Link host: {state.host}
                            {slot.tour ? ` · added ${slot.tour.setAt.toLocaleDateString("en-US", { dateStyle: "medium" })}` : ""}
                          </p>
                          {state.state === "hidden" ? (
                            <p className="text-amber-900 dark:text-amber-200">Why it is hidden: {state.message}</p>
                          ) : null}
                          <RemoveTourButton courseId={slot.courseId} lessonId={slot.lessonId} lessonTitle={title} />
                        </div>
                      ) : state.state === "empty" ? (
                        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                          Waiting for a tour. Learners see the lesson as written, including its note that the tour is
                          forthcoming.
                        </p>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </>
      )}
    </main>
  );
}
