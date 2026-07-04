import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { createProject, listProjects } from "@/db/queries/field-log";
import { templateByKey } from "@/lib/field-log-templates";

// My Field Log — the learner's own documentation projects. Any signed-in user; the tenant is
// resolved server-side and access is scoped to the caller's projects (§ isolation invariant).

const CreateSchema = z.object({
  templateKey: z.string().min(1).max(80),
  title: z.string().min(1).max(200),
  subject: z.string().max(500).nullish(),
  medium: z.enum(["words", "sound", "motion", "archive"]).nullish(),
  subjectTag: z.enum(["people", "events", "institutions", "travel-place"]).nullish(),
});

// GET /api/field-log/projects — the caller's projects in this tenant.
export async function GET() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  return json(await listProjects(sdb.tenantId, session.user.id));
}

// POST /api/field-log/projects — create a project from a template.
export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const parsed = CreateSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  if (!templateByKey(parsed.data.templateKey)) return errorJson("Unknown template", 400);
  const project = await createProject({
    tenantId: sdb.tenantId,
    userId: session.user.id,
    ...parsed.data,
  });
  return json(project, 201);
}
