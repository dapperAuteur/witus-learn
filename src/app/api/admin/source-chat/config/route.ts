import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { getSourceChatConfig, setSourceChatConfig } from "@/db/queries/source-chat-config";

// Owner/brand-admin management of a course's "chat with the sources" config (stage + agents + params).
export async function GET(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) return errorJson("Forbidden", 403);
  const courseId = new URL(req.url).searchParams.get("courseId");
  if (!courseId) return errorJson("courseId required", 400);
  return json(await getSourceChatConfig(sdb.tenantId, courseId));
}

const Patch = z.object({
  courseId: z.string().uuid(),
  config: z
    .object({
      stage: z.enum(["owner", "invited", "paid"]).optional(),
      agents: z.array(z.enum(["explain", "examples", "coach"])).optional(),
      provider: z.string().max(40).optional(),
      temperature: z.number().min(0).max(1).optional(),
      topK: z.number().int().min(1).max(12).optional(),
      grounding: z.enum(["strict", "mixed"]).optional(),
    })
    .passthrough(),
});

export async function PATCH(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) return errorJson("Forbidden", 403);
  const parsed = Patch.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  return json(await setSourceChatConfig(sdb.tenantId, parsed.data.courseId, parsed.data.config));
}
