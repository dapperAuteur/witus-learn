import type { Metadata } from "next";
import Link from "next/link";
import { requireTenant } from "@/lib/tenant";
import { requireUserPage } from "@/lib/session";
import { listCohorts } from "@/db/queries/cohorts";
import { getTeachingEligibility } from "@/db/queries/teacher-age";
import { hasTeacherRole } from "@/lib/cohort-access";
import { CreateCohortForm } from "@/components/create-cohort-form";
import { AdultAttestation } from "@/components/adult-attestation";

export const metadata: Metadata = { title: "Cohorts" };

// Cohorts: private classes (home-school #1 use case, a parent asked to have BVC teach her child +
// classmates). Lists the classes this person created or was assigned to teach. Since 2026-09-20
// only ADULT teachers or admins may create one (POST /api/cohorts enforces it; this page only
// decides which of three things to show in the create slot): the form, the "confirm you are 18+"
// card, or a plain explanation of who can. A parent-teacher without a teacher role gets a class by
// having an admin create it and assign them as its teacher.
export default async function CohortsPage() {
  const tenant = await requireTenant();
  const session = await requireUserPage();

  const [cohorts, isTeacher, eligibility] = await Promise.all([
    listCohorts(tenant.id, session.user.id),
    hasTeacherRole(session, tenant.id),
    getTeachingEligibility(session.user.id),
  ]);

  return (
    <main className="max-w-2xl py-10">
      <h1 className="text-2xl font-bold">Cohorts</h1>
      <p className="mt-1 text-sm text-neutral-600">
        Your private classes for {tenant.name}. Invite students by email, they land on{" "}
        <Link href="/live" className="underline">
          /live
        </Link>{" "}
        once they accept.
      </p>

      <div className="mt-6">
        {!isTeacher ? (
          <div className="space-y-4">
            <p className="rounded-lg border border-neutral-200 p-4 text-sm text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
              Classes are created by this school&apos;s teachers and admins. If you teach here, ask an
              admin to set up your class and add you as its teacher; it will then appear below.
            </p>
            {/* An admin can only assign an adult, so let a would-be teacher say so here first. */}
            {eligibility.ruleOn && eligibility.status === "unattested" ? (
              <AdultAttestation purpose="Going to teach a class here? Teachers must be adults. Confirm it once so an admin can add you as a class's teacher." />
            ) : null}
          </div>
        ) : eligibility.passesAgeRule ? (
          <CreateCohortForm />
        ) : eligibility.status === "unattested" ? (
          <AdultAttestation purpose="Teachers on this platform must be adults. Confirm it once and you can create classes." />
        ) : (
          <p className="rounded-lg border border-neutral-200 p-4 text-sm text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
            This account belongs to a student, so it can&apos;t create classes. Ask your school if you
            think that is wrong.
          </p>
        )}
      </div>

      <ul className="mt-8 divide-y divide-neutral-200 dark:divide-neutral-800">
        {cohorts.map((c) => (
          <li key={c.id} className="py-3">
            <Link href={`/cohorts/${c.id}`} className="font-medium hover:underline">
              {c.name}
            </Link>
            <p className="text-sm text-neutral-600">
              {c.memberCount} {c.memberCount === 1 ? "student" : "students"}
            </p>
          </li>
        ))}
        {cohorts.length === 0 ? (
          <li className="py-3 text-sm text-neutral-600">
            {isTeacher && eligibility.passesAgeRule ? "No cohorts yet, create your first class above." : "No classes yet."}
          </li>
        ) : null}
      </ul>
    </main>
  );
}
