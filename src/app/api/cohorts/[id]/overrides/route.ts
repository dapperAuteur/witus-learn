import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { getCohort, listMembers } from "@/db/queries/cohorts";
import { createOverride, listCohortOverrides } from "@/db/queries/overrides";

type Params = { params: Promise<{ id: string }> };

const CreateSchema = z.object({
  studentUserId: z.string().min(1).max(200),
  courseId: z.string().uuid(),
  // v1 UI exposes course-level kinds only; lesson_complete exists in the schema for later.
  kind: z.enum(["quiz_score", "course_complete"]),
  value: z.number().min(0).max(100).optional(),
  reason: z.string().trim().min(3).max(2000),
});

/** Cohort owner or tenant admin, cohort resolved in this tenant — the shared gate. */
async function gate(id: string) {
  const { sdb, session } = await apiContext();
  if (!session) return { error: errorJson("Unauthorized", 401) } as const;
  const cohort = await getCohort(sdb.tenantId, id);
  if (!cohort) return { error: errorJson("Not found", 404) } as const;
  if (cohort.ownerId !== session.user.id && !(await isTenantAdmin(session, sdb.tenantId))) {
    return { error: errorJson("Forbidden", 403) } as const;
  }
  return { sdb, session, cohort } as const;
}

// POST /api/cohorts/[id]/overrides — a teacher writes a grade adjustment for a member of their
// cohort (plans/66, approved 2026-08-18). APPEND-ONLY: there is no PATCH and no DELETE here by
// design — a wrong adjustment is corrected by a newer one, so the trail stays honest. The
// student's real attempts are never touched; surfaces show the adjusted value WITH a marker.
export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const g = await gate(id);
  if ("error" in g) return g.error;
  const { sdb, session } = g;

  const parsed = CreateSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input (a reason of at least 3 characters is required)", 400);
  const { studentUserId, courseId, kind, value, reason } = parsed.data;
  if (kind === "quiz_score" && value == null) {
    return errorJson("A score adjustment needs the adjusted score", 400);
  }

  const members = await listMembers(sdb.tenantId, id);
  if (!members.some((m) => m.userId === studentUserId)) {
    return errorJson("That student is not a member of this class", 400);
  }
  const course = await sdb.getCourseById(courseId);
  if (!course) return errorJson("Not found", 404);

  const override = await createOverride({
    tenantId: sdb.tenantId,
    cohortId: id,
    studentUserId,
    teacherUserId: session.user.id,
    courseId,
    kind,
    value: kind === "quiz_score" ? value : null,
    reason,
  });
  return json({ override }, 201);
}

// GET — the class's adjustment trail, newest first (teacher/admin only).
export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const g = await gate(id);
  if ("error" in g) return g.error;
  return json({ overrides: await listCohortOverrides(g.sdb.tenantId, id) });
}
