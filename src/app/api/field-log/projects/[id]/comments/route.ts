import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { addComment } from "@/db/queries/field-log";

type Params = { params: Promise<{ id: string }> };

const CommentSchema = z.object({ body: z.string().min(1).max(4000) });

// POST /api/field-log/projects/[id]/comments — add a journal entry.
export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const parsed = CommentSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const ok = await addComment(sdb.tenantId, session.user.id, id, parsed.data.body);
  if (!ok) return errorJson("Not found", 404);
  return json({ ok: true }, 201);
}
