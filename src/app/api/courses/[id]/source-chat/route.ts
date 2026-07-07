import { z } from "zod";
import { apiContext, canEditCourse, errorJson, json } from "@/lib/api";
import { isEnrolled } from "@/db/queries/enrollment";
import { isFreeCourse } from "@/lib/gating";
import { getSourceChatConfig } from "@/db/queries/source-chat-config";
import { sourceChat } from "@/lib/ai/source-chat";
import type { Lens } from "@/lib/ai/specialists";

type Params = { params: Promise<{ id: string }> };

const Body = z.object({
  question: z.string().min(1).max(2000),
  // Owner/instructor test override from the dashboard (ignored for learners).
  config: z
    .object({
      agents: z.array(z.enum(["explain", "examples", "coach"])).optional(),
      provider: z.string().max(40).optional(),
      temperature: z.number().min(0).max(1).optional(),
      topK: z.number().int().min(1).max(12).optional(),
      grounding: z.enum(["strict", "mixed"]).optional(),
    })
    .optional(),
});

// POST /api/courses/[id]/source-chat — grounded, retrieval-based chat over the course's sources.
// Access follows the course's configured stage: owner/instructor always; enrolled learners once the
// owner opens it (invited); paid-course enrolled learners at the paid stage.
export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);

  const config = await getSourceChatConfig(sdb.tenantId, id);
  const isAdmin = await canEditCourse(session, sdb.tenantId, course);
  let allowed = isAdmin;
  if (!allowed) {
    if (config.stage === "invited") allowed = await isEnrolled(session.user.id, id);
    else if (config.stage === "paid") allowed = !isFreeCourse(course) && (await isEnrolled(session.user.id, id));
  }
  if (!allowed) return errorJson("Chat with the sources isn't available for you on this course yet.", 403);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  // Admins can test unsaved params; learners always use the saved config.
  const eff = isAdmin && parsed.data.config ? { ...config, ...parsed.data.config } : config;
  const result = await sourceChat(course, parsed.data.question, {
    agents: eff.agents as Lens[],
    provider: eff.provider || undefined,
    temperature: eff.temperature,
    topK: eff.topK,
    grounding: eff.grounding,
  });
  return json(result);
}
