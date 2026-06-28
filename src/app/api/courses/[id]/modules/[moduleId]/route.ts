import { z } from "zod";
import { errorJson, json, loadEditableCourse } from "@/lib/api";
import { deleteModule, updateModule } from "@/db/queries/authoring";

type Params = { params: Promise<{ id: string; moduleId: string }> };

const Schema = z.object({
  title: z.string().min(1).max(200).optional(),
  sortOrder: z.number().int().optional(),
  isPublished: z.boolean().optional(),
});

export async function PATCH(req: Request, { params }: Params) {
  const { id, moduleId } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const updated = await updateModule(id, moduleId, parsed.data);
  if (!updated) return errorJson("Not found", 404);
  return json({ module: updated });
}

export async function DELETE(_req: Request, { params }: Params) {
  const { id, moduleId } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;

  const ok = await deleteModule(id, moduleId);
  if (!ok) return errorJson("Not found", 404);
  return json({ ok: true });
}
