import Link from "next/link";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { getMembership, getSession, isPlatformOwner } from "@/lib/session";
import { listOwnCourses } from "@/db/queries/authoring";
import { TeacherCatalog } from "@/components/teacher-catalog";
import { createCourseAction } from "./actions";

export const metadata: Metadata = { title: "Teach" };

// Minimal instructor surface: create a course + list your own (drafts + published).
// The full authoring dashboard (modules/lessons/quizzes) builds on the CRUD APIs.
export default async function TeachPage() {
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

  const courses = await listOwnCourses(tenant.id, session.user.id);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your courses</h1>
        <div className="flex items-center gap-4 text-sm">
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
          <Link href="/teach/profile" className="underline" style={{ color: "var(--accent)" }}>
            Edit profile →
          </Link>
          <Link href="/teach/feedback" className="underline" style={{ color: "var(--accent)" }}>
            Curriculum feedback →
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
        <p className="mt-8 rounded-xl border border-dashed border-neutral-300 px-4 py-6 text-center text-neutral-500 dark:border-neutral-700">
          No courses yet.
        </p>
      ) : (
        <TeacherCatalog
          courses={courses.map((c) => ({
            id: c.id,
            title: c.title,
            category: c.category,
            isPublished: c.isPublished,
            visibility: c.visibility,
            publishHoldReason: c.publishHoldReason,
            priceType: c.priceType,
            price: Number(c.price ?? 0),
          }))}
        />
      )}
    </main>
  );
}
