import { apiContext, errorJson, isTenantAdmin } from "@/lib/api";
import { getSchoolRollup } from "@/db/queries/gradebook";
import { csvLine } from "@/lib/csv";

// GET /api/admin/gradebook.csv — the tenant-wide school roll-up as a CSV download (plans/50,
// Phase 3's read-only half). Authorized to a tenant ADMIN (brand_admin or platform owner) only,
// and read strictly within the request's tenant (getSchoolRollup filters tenantId in every
// sub-query), so no school can export another brand's learners. Mirrors
// /api/cohorts/[id]/gradebook.csv: student progress is PII, so attachment download, no caching,
// no third party.

export async function GET() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) {
    return errorJson("You do not have access to the school gradebook.", 403);
  }

  const rows = await getSchoolRollup(sdb.tenantId);
  const lines = [
    csvLine(["Student", "Email", "Courses enrolled", "Lessons completed", "Best quiz average (%)", "Cohorts"]),
  ];
  for (const r of rows) {
    lines.push(
      csvLine([
        r.student,
        r.email,
        r.coursesEnrolled,
        r.lessonsCompleted,
        r.bestQuizAvg ?? "",
        r.cohortNames.join("; "),
      ]),
    );
  }

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${sdb.tenant.slug}-school-gradebook.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
