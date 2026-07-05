import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getProjectBundle, updateProject } from "@/db/queries/field-log";

type Params = { params: Promise<{ id: string }> };

const ChecklistSchema = z.object({
  stages: z.array(
    z.object({
      key: z.string(),
      items: z.array(z.object({ id: z.string(), done: z.boolean(), note: z.string().max(2000) })),
    }),
  ),
});

const PatchSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  subject: z.string().max(500).nullish(),
  medium: z.enum(["words", "sound", "motion", "archive"]).nullish(),
  subjectTag: z.enum(["people", "events", "institutions", "travel-place"]).nullish(),
  chainMode: z.boolean().optional(),
  kit: z.array(z.string().max(120)).max(100).nullish(),
  checklist: ChecklistSchema.optional(),
  status: z.enum(["planning", "active", "assembling", "published", "archived"]).optional(),
  visibility: z.enum(["private", "in_review", "submitted"]).optional(),
  /** Solo/owner self-attestation toggle → stamps selfAttestedAt. */
  selfAttest: z.boolean().optional(),
});

// GET /api/field-log/projects/[id] — the full bundle (404 if not the caller's).
export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const bundle = await getProjectBundle(sdb.tenantId, session.user.id, id);
  if (!bundle) return errorJson("Not found", 404);
  return json(bundle);
}

// PATCH /api/field-log/projects/[id] — update project meta / checklist.
export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const parsed = PatchSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const { selfAttest, ...rest } = parsed.data;
  const updated = await updateProject(sdb.tenantId, session.user.id, id, {
    ...rest,
    ...(selfAttest !== undefined ? { selfAttestedAt: selfAttest ? new Date() : null } : {}),
  });
  if (!updated) return errorJson("Not found", 404);
  return json(updated);
}
