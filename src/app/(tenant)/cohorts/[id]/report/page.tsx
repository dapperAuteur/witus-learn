import type { Metadata } from "next";
import { notFound, forbidden } from "next/navigation";
import { requireUserPage } from "@/lib/session";
import { isTenantAdmin } from "@/lib/api";
import { getScopedDb } from "@/db/scoped";
import { getCohort } from "@/db/queries/cohorts";
import { getCohortGradebook } from "@/db/queries/gradebook";
import { PrintButton } from "@/components/print-button";
import { GradeAdjust } from "@/components/grade-adjust";
import { AdjustedMark } from "@/components/adjusted-mark";

export const metadata: Metadata = { title: "Cohort report" };

// A print-optimized cohort gradebook (plans/50, Phase 1b) for "Save as PDF" via the browser. Same data
// as the CSV export, same authorization: the cohort owner or a tenant admin only, tenant-scoped. The
// print stylesheet isolates the report so the site header/footer do not print.
export default async function CohortReportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sdb = await getScopedDb();
  const session = await requireUserPage();

  const cohort = await getCohort(sdb.tenantId, id);
  if (!cohort) notFound();
  if (cohort.ownerId !== session.user.id && !(await isTenantAdmin(session, sdb.tenantId))) forbidden();

  const rows = await getCohortGradebook(sdb.tenantId, id);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <style>{`@media print {
        body * { visibility: hidden; }
        #cohort-report, #cohort-report * { visibility: visible; }
        #cohort-report { position: absolute; left: 0; top: 0; width: 100%; padding: 0 1rem; }
      }`}</style>

      <div className="mb-4 flex items-center justify-between print:hidden">
        <a href={`/cohorts/${cohort.id}`} className="text-sm text-neutral-600 hover:underline">
          Back to cohort
        </a>
        <PrintButton />
      </div>

      <div id="cohort-report">
        <h1 className="text-2xl font-bold">{cohort.name}</h1>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          Gradebook report, {rows.length} {rows.length === 1 ? "row" : "rows"}.
        </p>
        <table className="mt-4 w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-neutral-300 text-left">
              <th className="py-2 pr-4">Student</th>
              <th className="py-2 pr-4">Course</th>
              <th className="py-2 pr-4">Lessons completed</th>
              <th className="py-2 pr-4">Best quiz</th>
              <th className="py-2 pr-4">Enrolled</th>
              <th className="py-2 print:hidden">Adjust</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={`${r.userId}-${r.courseId}`} className="border-b border-neutral-100">
                <td className="py-1.5 pr-4">{r.student}</td>
                <td className="py-1.5 pr-4">
                  {r.courseTitle}
                  {r.courseMarkedComplete ? (
                    <AdjustedMark label="marked complete" reason={r.courseMarkedComplete.reason} />
                  ) : null}
                </td>
                <td className="py-1.5 pr-4">
                  {r.lessonsCompleted}
                  {r.originalLessonsCompleted != null ? (
                    <AdjustedMark label={`adjusted from ${r.originalLessonsCompleted}`} reason="Includes teacher adjustments" />
                  ) : null}
                </td>
                <td className="py-1.5 pr-4">
                  {r.bestQuiz === null ? "" : `${r.bestQuiz}%`}
                  {r.adjusted ? (
                    <AdjustedMark
                      label={`adjusted${r.originalBestQuiz != null ? ` from ${r.originalBestQuiz}%` : ""}`}
                      reason={r.adjusted.reason}
                    />
                  ) : null}
                </td>
                <td className="py-1.5 pr-4">{r.enrolledAt.toISOString().slice(0, 10)}</td>
                <td className="py-1.5 print:hidden">
                  <GradeAdjust
                    cohortId={cohort.id}
                    studentUserId={r.userId}
                    courseId={r.courseId}
                    courseTitle={r.courseTitle}
                    currentBest={r.originalBestQuiz !== undefined ? r.originalBestQuiz : r.bestQuiz}
                  />
                </td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-3 text-neutral-600">
                  No enrolled students yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </main>
  );
}
