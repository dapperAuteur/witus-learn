import type { Metadata } from "next";
import Link from "next/link";
import { forbidden } from "next/navigation";
import { requireUser } from "@/lib/session";
import { isTenantAdmin } from "@/lib/api";
import { getScopedDb } from "@/db/scoped";
import { getCohort, listMembers } from "@/db/queries/cohorts";
import { listPresent } from "@/db/queries/live-chat";
import { CohortRoster } from "@/components/cohort-roster";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const sdb = await getScopedDb();
  const cohort = await getCohort(sdb.tenantId, id);
  return { title: cohort ? `${cohort.name}, Cohort roster` : "Cohort" };
}

// A cohort's roster: members, who's currently present in /live, an invite-by-email
// form, and remove-member controls. 404s across tenants via ownOrNotFound — never a
// redirect, which would leak whether a cohort with this id exists on another brand.
export default async function CohortRosterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sdb = await getScopedDb();
  const session = await requireUser();

  const found = await getCohort(sdb.tenantId, id);
  const cohort = sdb.ownOrNotFound(found);
  // Any signed-in user manages only their own cohorts; brand admins/owner see any.
  if (cohort.ownerId !== session.user.id && !(await isTenantAdmin(session, sdb.tenantId))) forbidden();

  const [members, present] = await Promise.all([
    listMembers(sdb.tenantId, cohort.id),
    listPresent(sdb.tenantId),
  ]);
  const presentIds = new Set(present.map((p) => p.userId));

  return (
    <main className="max-w-2xl py-10">
      <Link href="/cohorts" className="text-sm text-neutral-500 hover:underline">
        ← Cohorts
      </Link>
      <h1 className="mt-3 text-2xl font-bold">{cohort.name}</h1>
      <p className="mt-1 text-sm text-neutral-500">
        {members.length} {members.length === 1 ? "student" : "students"} ·{" "}
        <Link href="/live" className="underline">
          Go to /live
        </Link>
      </p>

      {/* Gradebook export (plans/50, Phase 1). A plain download link: the route returns a CSV
          attachment, authorized to the cohort owner or a tenant admin. */}
      <p className="mt-4">
        <a
          href={`/api/cohorts/${cohort.id}/gradebook.csv`}
          className="inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900 pointer-coarse:min-h-12"
        >
          Export gradebook (CSV)
        </a>
      </p>

      <div className="mt-6">
        <CohortRoster
          cohortId={cohort.id}
          members={members.map((m) => ({
            userId: m.userId,
            displayName: m.displayName,
            present: presentIds.has(m.userId),
          }))}
        />
      </div>
    </main>
  );
}
