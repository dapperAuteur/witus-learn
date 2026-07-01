import type { Metadata } from "next";
import Link from "next/link";
import { getScopedDb } from "@/db/scoped";
import { requireBrandAdmin } from "@/lib/session";
import { getAdminStats, listLearners } from "@/db/queries/admin-dashboard";

export const metadata: Metadata = { title: "Dashboard" };

function fmtDate(d: Date | null): string {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

// Brand-admin overview: headline stats + the learner roster for this school. Read-only,
// tenant-scoped. Everything routes through enrollments.tenant_id / courses.tenant_id.
export default async function AdminDashboardPage() {
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId);
  const [stats, learners] = await Promise.all([
    getAdminStats(sdb.tenantId),
    listLearners(sdb.tenantId),
  ]);

  const tiles = [
    { label: "Learners", value: stats.learners },
    { label: "Active enrollments", value: stats.enrollments },
    { label: "Courses", value: `${stats.publishedCourses}/${stats.courses}`, hint: "published / total" },
    { label: "Completions", value: stats.completions },
  ];

  return (
    <main className="py-10">
      <Link href="/admin" className="text-sm underline" style={{ color: "var(--accent)" }}>
        ← Admin
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Dashboard</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((t) => (
          <div key={t.label} className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="text-3xl font-bold" style={{ color: "var(--accent)" }}>{t.value}</div>
            <div className="mt-1 text-sm text-neutral-500">{t.label}</div>
            {t.hint ? <div className="text-xs text-neutral-400">{t.hint}</div> : null}
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-lg font-semibold">Learners</h2>
      <p className="mt-1 text-sm text-neutral-500">
        {learners.length === 0
          ? "No enrollments yet."
          : `${learners.length} learner${learners.length === 1 ? "" : "s"}, most recently active first.`}
      </p>

      {learners.length > 0 ? (
        <div className="mt-4 overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-left text-neutral-500 dark:border-neutral-800">
                <th className="p-3 font-medium">Learner</th>
                <th className="p-3 font-medium">Enrollments</th>
                <th className="p-3 font-medium">Completions</th>
                <th className="p-3 font-medium">Joined</th>
                <th className="p-3 font-medium">Last active</th>
              </tr>
            </thead>
            <tbody>
              {learners.map((l) => (
                <tr key={l.userId} className="border-b border-neutral-100 last:border-0 dark:border-neutral-800/60">
                  <td className="p-3">
                    <div className="font-medium">{l.name || l.email.split("@")[0]}</div>
                    <div className="text-xs text-neutral-500">{l.email}</div>
                  </td>
                  <td className="p-3 tabular-nums">{l.enrollments}</td>
                  <td className="p-3 tabular-nums">{l.completions}</td>
                  <td className="p-3 whitespace-nowrap text-neutral-600 dark:text-neutral-400">{fmtDate(l.firstEnrolledAt)}</td>
                  <td className="p-3 whitespace-nowrap text-neutral-600 dark:text-neutral-400">{fmtDate(l.lastSeenAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </main>
  );
}
