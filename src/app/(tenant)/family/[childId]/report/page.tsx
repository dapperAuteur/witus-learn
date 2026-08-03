import type { Metadata } from "next";
import Link from "next/link";
import { forbidden } from "next/navigation";
import { requireUserPage } from "@/lib/session";
import { getScopedDb } from "@/db/scoped";
import { isGuardianOf } from "@/db/queries/family";
import { getLearnerGradebook, getLearnerName } from "@/db/queries/gradebook";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = { title: "Family report" };

// A print-optimized gradebook for ONE child (plans/50, Phase 2) for "Save as PDF" via the browser. Same
// data + columns as the family CSV export, same authorization: the child's own GUARDIAN only, within the
// request's tenant. isGuardianOf is THE gate (mirrors /family), so a parent can never reach another
// family's child. The print stylesheet isolates the report so the site header/footer do not print.
export default async function FamilyReportPage({ params }: { params: Promise<{ childId: string }> }) {
  const { childId } = await params;
  const sdb = await getScopedDb();
  const session = await requireUserPage();

  // THE gate — every per-child read is preceded by isGuardianOf (see src/db/queries/family.ts).
  if (!(await isGuardianOf(sdb.tenantId, session.user.id, childId))) forbidden();

  const [rows, childName] = await Promise.all([
    getLearnerGradebook(sdb.tenantId, childId),
    getLearnerName(childId),
  ]);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <style>{`@media print {
        body * { visibility: hidden; }
        #family-report, #family-report * { visibility: visible; }
        #family-report { position: absolute; left: 0; top: 0; width: 100%; padding: 0 1rem; }
      }`}</style>

      <div className="mb-4 flex items-center justify-between print:hidden">
        <Link href="/family" className="text-sm text-neutral-500 hover:underline">
          Back to family
        </Link>
        <PrintButton />
      </div>

      <div id="family-report">
        <h1 className="text-2xl font-bold">{childName}</h1>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          Gradebook report, {rows.length} {rows.length === 1 ? "row" : "rows"}.
        </p>
        {/* Scroll the grade table inside its own box so a long course name never forces the whole
            page to scroll sideways on a phone (page-quality rule). Print/PDF shows it full-width. */}
        <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-neutral-300 text-left">
              <th className="py-2 pr-4">Course</th>
              <th className="py-2 pr-4">Lessons completed</th>
              <th className="py-2 pr-4">Best quiz</th>
              <th className="py-2">Enrolled</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.courseTitle} className="border-b border-neutral-100">
                <td className="py-1.5 pr-4">{r.courseTitle}</td>
                <td className="py-1.5 pr-4">{r.lessonsCompleted}</td>
                <td className="py-1.5 pr-4">{r.bestQuiz === null ? "" : `${r.bestQuiz}%`}</td>
                <td className="py-1.5">{r.enrolledAt.toISOString().slice(0, 10)}</td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-3 text-neutral-500">
                  Not enrolled in any courses yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
        </div>
      </div>
    </main>
  );
}
