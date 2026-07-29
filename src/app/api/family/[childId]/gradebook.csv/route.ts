import { apiContext, errorJson } from "@/lib/api";
import { isGuardianOf } from "@/db/queries/family";
import { getLearnerGradebook, getLearnerName } from "@/db/queries/gradebook";

// GET /api/family/<childId>/gradebook.csv — one child's gradebook as a CSV download (plans/50, Phase 2).
// Authorized to the child's own GUARDIAN only (isGuardianOf is THE gate), and read strictly within the
// request's tenant (both the guardian check and getLearnerGradebook take sdb.tenantId), so a parent can
// never reach another family's child, and no tenant can reach another's learner. Student progress is
// PII: attachment download, no caching, no third party. Columns match the cohort export exactly.

function csvCell(value: string | number): string {
  const s = String(value);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export async function GET(_req: Request, { params }: { params: Promise<{ childId: string }> }) {
  const { childId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  // THE gate — every per-child read is preceded by isGuardianOf (see src/db/queries/family.ts).
  if (!(await isGuardianOf(sdb.tenantId, session.user.id, childId))) {
    return errorJson("You do not have access to this learner.", 403);
  }

  const [rows, childName] = await Promise.all([
    getLearnerGradebook(sdb.tenantId, childId),
    getLearnerName(childId),
  ]);

  const header = ["Student", "Course", "Lessons completed", "Best quiz score (%)", "Enrolled"];
  const lines = [header.join(",")];
  for (const r of rows) {
    lines.push(
      [
        csvCell(r.student),
        csvCell(r.courseTitle),
        csvCell(r.lessonsCompleted),
        csvCell(r.bestQuiz ?? ""),
        csvCell(r.enrolledAt.toISOString().slice(0, 10)),
      ].join(","),
    );
  }

  const slug = childName.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase() || "learner";
  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${slug}-gradebook.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
