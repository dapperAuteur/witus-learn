import type { Metadata } from "next";
import Link from "next/link";
import { getScopedDb } from "@/db/scoped";
import { requireBrandAdmin } from "@/lib/session";
import { listProblemReports } from "@/db/queries/problem-reports";
import { ReportsTriage } from "@/components/reports-triage";

export const metadata: Metadata = { title: "Problem reports" };

// Admin triage for in-app "Report a problem" submissions. Brand-admin/owner only, tenant-scoped.
export default async function ReportsAdminPage() {
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId);
  const reports = await listProblemReports(sdb.tenantId);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/admin" className="text-sm underline" style={{ color: "var(--accent)" }}>
        ← Admin
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Problem reports</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        In-app bug/idea reports for this school. Each is also mirrored to the WitUS Inbox.
      </p>
      <div className="mt-6">
        <ReportsTriage
          reports={reports.map((r) => ({
            id: r.id,
            kind: r.kind,
            message: r.message,
            pageUrl: r.pageUrl,
            email: r.email,
            status: r.status,
            createdAt: r.createdAt.toISOString(),
          }))}
        />
      </div>
    </main>
  );
}
