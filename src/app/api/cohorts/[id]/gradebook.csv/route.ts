import { apiContext, errorJson, isTenantAdmin } from "@/lib/api";
import { getCohort } from "@/db/queries/cohorts";
import { getCohortGradebook } from "@/db/queries/gradebook";

// GET /api/cohorts/<id>/gradebook.csv — the cohort's gradebook as a CSV download (plans/50, Phase 1).
// Authorized to the cohort OWNER or a tenant ADMIN only, and read strictly within the request's tenant
// (getCohort / getCohortGradebook both take sdb.tenantId), so no teacher or school can export another
// cohort's students. Student progress is PII: attachment download, no caching, no third party.

function csvCell(value: string | number): string {
  const s = String(value);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const cohort = await getCohort(sdb.tenantId, id);
  if (!cohort) return errorJson("Cohort not found.", 404);
  if (cohort.ownerId !== session.user.id && !(await isTenantAdmin(session, sdb.tenantId))) {
    return errorJson("You do not have access to this cohort.", 403);
  }

  const rows = await getCohortGradebook(sdb.tenantId, id);
  // "Adjusted" makes teacher overrides (plans/66) visible in the export too: an adjusted number
  // with no marker would be indistinguishable from a real one. The cell carries what changed and
  // the recorded reason; empty = untouched real values.
  const header = ["Student", "Course", "Lessons completed", "Best quiz score (%)", "Enrolled", "Adjusted"];
  const lines = [header.join(",")];
  for (const r of rows) {
    const adjustments = [
      r.adjusted
        ? `quiz adjusted${r.originalBestQuiz != null ? ` from ${r.originalBestQuiz}%` : ""}: ${r.adjusted.reason}`
        : null,
      r.originalLessonsCompleted != null ? `lessons adjusted from ${r.originalLessonsCompleted}` : null,
      r.courseMarkedComplete ? `marked complete: ${r.courseMarkedComplete.reason}` : null,
    ].filter(Boolean);
    lines.push(
      [
        csvCell(r.student),
        csvCell(r.courseTitle),
        csvCell(r.lessonsCompleted),
        csvCell(r.bestQuiz ?? ""),
        csvCell(r.enrolledAt.toISOString().slice(0, 10)),
        csvCell(adjustments.join(" | ")),
      ].join(","),
    );
  }

  const slug = cohort.name.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase() || "cohort";
  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${slug}-gradebook.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
