import type { Metadata } from "next";
import Link from "next/link";
import { requireTenant } from "@/lib/tenant";
import { requireUser } from "@/lib/session";
import { listCohorts } from "@/db/queries/cohorts";
import { CreateCohortForm } from "@/components/create-cohort-form";

export const metadata: Metadata = { title: "Cohorts" };

// Cohorts: any signed-in user's private classes (home-school #1 use case — a parent asked
// to have BVC teach her child + classmates). A user creates a cohort, invites students by
// email, and sees a live "who's here" roster on each cohort's page. Not admin-only — any
// signed-in teacher/parent-teacher can run their own cohorts.
export default async function CohortsPage() {
  const tenant = await requireTenant();
  const session = await requireUser();

  const cohorts = await listCohorts(tenant.id, session.user.id);

  return (
    <main className="max-w-2xl py-10">
      <h1 className="text-2xl font-bold">Cohorts</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Your private classes for {tenant.name}. Invite students by email — they land on{" "}
        <Link href="/live" className="underline">
          /live
        </Link>{" "}
        once they accept.
      </p>

      <div className="mt-6">
        <CreateCohortForm />
      </div>

      <ul className="mt-8 divide-y divide-neutral-200 dark:divide-neutral-800">
        {cohorts.map((c) => (
          <li key={c.id} className="py-3">
            <Link href={`/cohorts/${c.id}`} className="font-medium hover:underline">
              {c.name}
            </Link>
            <p className="text-sm text-neutral-500">
              {c.memberCount} {c.memberCount === 1 ? "student" : "students"}
            </p>
          </li>
        ))}
        {cohorts.length === 0 ? (
          <li className="py-3 text-sm text-neutral-500">No cohorts yet — create your first class above.</li>
        ) : null}
      </ul>
    </main>
  );
}
