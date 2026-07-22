import type { Metadata } from "next";
import Link from "next/link";
import { requirePlatformOwner } from "@/lib/session";
import { getScopedDb } from "@/db/scoped";
import { countOpenProblemReports, listRecentProblemReports } from "@/db/queries/problem-reports";
import { countOpenFeedback, listFeedback } from "@/db/queries/feedback";
import { countLeads, listRecentLeads } from "@/db/queries/leads";
import { listRecentEnrollments } from "@/db/queries/admin-dashboard";
import { getMigrationStatus } from "@/db/queries/migration-status";

export const metadata: Metadata = { title: "Operator overview" };

function fmtDateTime(d: Date): string {
  return new Date(d).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

// Cross-cutting operator surface: pulls together the signals BAM otherwise has to check across
// several admin pages (open problem reports, new curriculum feedback, recent leads +
// enrollments) plus a migration-status indicator, in one scannable place. Owner-only — a
// platform-wide operator view, not a per-brand-admin surface. Every read below is tenant-scoped
// through the existing query helpers (reused, not duplicated) except the migration check, which
// is inherently database-wide (migrations aren't tenant data).
export default async function OperatorOverviewPage() {
  const sdb = await getScopedDb();
  await requirePlatformOwner();

  const [openReportsCount, recentReports, openFeedbackCount, recentFeedback, leadsCount, recentLeads, recentEnrollments, migration] =
    await Promise.all([
      countOpenProblemReports(sdb.tenantId),
      listRecentProblemReports(sdb.tenantId, 5),
      countOpenFeedback(sdb.tenantId),
      listFeedback(sdb.tenantId, {}).then((rows) => rows.slice(0, 5)),
      countLeads(sdb.tenantId),
      listRecentLeads(sdb.tenantId, 5),
      listRecentEnrollments(sdb.tenantId, 5),
      getMigrationStatus(),
    ]);

  return (
    <main className="py-10">
      <Link href="/admin" className="text-sm underline" style={{ color: "var(--accent)" }}>
        ← Admin
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Operator overview</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Cross-cutting signals for {sdb.tenant.name}, open reports, curriculum feedback, recent
        activity, and whether this database is up to date.
      </p>

      {/* Migration status */}
      <div
        className="mt-6 rounded-2xl border p-5"
        style={
          migration.upToDate === false
            ? { borderColor: "#f59e0b", background: "rgba(245,158,11,0.08)" }
            : undefined
        }
      >
        <h2 className="font-semibold">Migration status</h2>
        {migration.applied !== null ? (
          migration.upToDate ? (
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              ✅ Up to date, {migration.applied} applied, {migration.onDisk} on disk.
            </p>
          ) : (
            <p className="mt-1 text-sm">
              ⚠️ {migration.applied} applied / {migration.onDisk} on disk, {migration.onDisk - migration.applied}{" "}
              pending. Run <code className="font-mono">pnpm db:migrate:prod</code>.
            </p>
          )
        ) : (
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Latest on disk: <span className="break-all font-mono">{migration.latestOnDisk ?? "none"}</span> ({migration.onDisk}{" "}
            total). Could not read the applied-migrations count for this database{migration.error ? ` (${migration.error})` : ""},
            verify prod is migrated manually.
          </p>
        )}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Open problem reports */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-baseline justify-between">
            <h2 className="font-semibold">🐞 Open problem reports</h2>
            <Link href="/admin/reports" className="text-xs underline" style={{ color: "var(--accent)" }}>
              View all
            </Link>
          </div>
          <div className="mt-1 text-3xl font-bold" style={{ color: "var(--accent)" }}>
            {openReportsCount}
          </div>
          {recentReports.length === 0 ? (
            <p className="mt-3 text-sm text-neutral-500">No reports yet.</p>
          ) : (
            <ul className="mt-3 divide-y divide-neutral-100 text-sm dark:divide-neutral-800/60">
              {recentReports.map((r) => (
                <li key={r.id} className="py-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium capitalize">{r.kind}</span>
                    <span className="text-xs text-neutral-500">{fmtDateTime(r.createdAt)}</span>
                  </div>
                  <p className="mt-0.5 truncate text-neutral-600 dark:text-neutral-400">{r.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* New curriculum feedback */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-baseline justify-between">
            <h2 className="font-semibold">💬 Curriculum feedback</h2>
            <Link href="/teach/feedback" className="text-xs underline" style={{ color: "var(--accent)" }}>
              View all
            </Link>
          </div>
          <div className="mt-1 text-3xl font-bold" style={{ color: "var(--accent)" }}>
            {openFeedbackCount}
            <span className="ml-1 text-sm font-normal text-neutral-500">new</span>
          </div>
          {recentFeedback.length === 0 ? (
            <p className="mt-3 text-sm text-neutral-500">No feedback yet.</p>
          ) : (
            <ul className="mt-3 divide-y divide-neutral-100 text-sm dark:divide-neutral-800/60">
              {recentFeedback.map((f) => (
                <li key={f.id} className="py-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">{f.courseTitle}</span>
                    <span className="text-xs text-neutral-500">{fmtDateTime(f.createdAt)}</span>
                  </div>
                  <p className="mt-0.5 truncate text-neutral-600 dark:text-neutral-400">{f.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Recent leads */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-baseline justify-between">
            <h2 className="font-semibold">🎯 Recent leads</h2>
            <Link href="/admin/leads" className="text-xs underline" style={{ color: "var(--accent)" }}>
              View all
            </Link>
          </div>
          <div className="mt-1 text-3xl font-bold" style={{ color: "var(--accent)" }}>
            {leadsCount}
          </div>
          {recentLeads.length === 0 ? (
            <p className="mt-3 text-sm text-neutral-500">No leads yet.</p>
          ) : (
            <ul className="mt-3 divide-y divide-neutral-100 text-sm dark:divide-neutral-800/60">
              {recentLeads.map((l) => (
                <li key={l.id} className="flex items-center justify-between gap-2 py-2">
                  <span className="truncate font-mono">{l.email}</span>
                  <span className="whitespace-nowrap text-xs text-neutral-500">{fmtDateTime(l.createdAt)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Recent enrollments */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-baseline justify-between">
            <h2 className="font-semibold">📈 Recent enrollments</h2>
            <Link href="/admin/dashboard" className="text-xs underline" style={{ color: "var(--accent)" }}>
              View all
            </Link>
          </div>
          {recentEnrollments.length === 0 ? (
            <p className="mt-3 text-sm text-neutral-500">No enrollments yet.</p>
          ) : (
            <ul className="mt-3 divide-y divide-neutral-100 text-sm dark:divide-neutral-800/60">
              {recentEnrollments.map((e) => (
                <li key={e.id} className="py-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">{e.userName || e.userEmail.split("@")[0]}</span>
                    <span className="text-xs text-neutral-500">{fmtDateTime(e.enrolledAt)}</span>
                  </div>
                  <p className="mt-0.5 truncate text-neutral-600 dark:text-neutral-400">{e.courseTitle}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
