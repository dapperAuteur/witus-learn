import type { Metadata } from "next";
import Link from "next/link";
import { getScopedDb } from "@/db/scoped";
import { requireBrandAdmin } from "@/lib/session";
import { getSchoolRollup } from "@/db/queries/gradebook";

export const metadata: Metadata = { title: "School gradebook" };

// The tenant-wide roll-up (plans/50, Phase 3's read-only half): one row per learner across the
// whole school. Brand-admin/owner only, tenant-scoped, same gate as the other /admin pages.
// Login-gated admin surface, so no OG card (page-quality rule exempts pages behind auth).
export default async function AdminGradebookPage() {
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId);
  const rows = await getSchoolRollup(sdb.tenantId);

  return (
    <main className="max-w-4xl py-10">
      <Link href="/admin" className="text-sm underline" style={{ color: "var(--accent)" }}>
        ← Admin
      </Link>
      <h1 className="mt-4 text-2xl font-bold">School gradebook</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Every learner in this school: enrollments, lessons completed, best quiz average, and
        cohort membership. Per-class detail lives on each cohort&apos;s roster page.
      </p>

      <div className="mt-4">
        <a
          href="/api/admin/gradebook.csv"
          className="inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:hover:bg-neutral-900 pointer-coarse:min-h-12"
        >
          Export school gradebook (CSV)
        </a>
      </div>

      {rows.length === 0 ? (
        <p className="mt-6 text-sm text-neutral-600">
          No learners yet. Learners appear here once someone enrolls in a course or joins a cohort.
        </p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead className="border-b border-neutral-200 text-xs uppercase tracking-wide text-neutral-600 dark:border-neutral-800">
              <tr>
                <th scope="col" className="px-3 py-2">Student</th>
                <th scope="col" className="px-3 py-2">Email</th>
                <th scope="col" className="px-3 py-2 text-right">Courses</th>
                <th scope="col" className="px-3 py-2 text-right">Lessons completed</th>
                <th scope="col" className="px-3 py-2 text-right">Best quiz avg</th>
                <th scope="col" className="px-3 py-2">Cohorts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {rows.map((r) => (
                <tr key={r.userId}>
                  <td className="px-3 py-2 font-medium">{r.student}</td>
                  <td className="px-3 py-2 text-neutral-600 dark:text-neutral-400">{r.email}</td>
                  <td className="px-3 py-2 text-right tabular-nums">{r.coursesEnrolled}</td>
                  <td className="px-3 py-2 text-right tabular-nums">{r.lessonsCompleted}</td>
                  <td className="px-3 py-2 text-right tabular-nums">
                    {r.bestQuizAvg === null ? <span className="text-neutral-400">-</span> : `${r.bestQuizAvg}%`}
                  </td>
                  <td className="px-3 py-2 text-neutral-600 dark:text-neutral-400">
                    {r.cohortNames.length ? r.cohortNames.join(", ") : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
