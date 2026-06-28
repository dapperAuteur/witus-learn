import { z } from "zod";
import { errorJson, json, loadEditableCourse } from "@/lib/api";
import { createModule } from "@/db/queries/authoring";

const Schema = z.object({
  title: z.string().min(1).max(200),
  sortOrder: z.number().int().optional(),
  isPublished: z.boolean().optional(),
});

// POST /api/courses/[id]/modules
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const courseModule = await createModule(id, parsed.data);
  return json({ module: courseModule }, 201);
}
