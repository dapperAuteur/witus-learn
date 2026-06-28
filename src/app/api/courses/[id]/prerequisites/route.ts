import { z } from "zod";
import { apiContext, errorJson, json, loadEditableCourse } from "@/lib/api";
import {
  addPrerequisite,
  getUnmetRequired,
  listPrerequisites,
  removePrerequisite,
} from "@/db/queries/prerequisites";

type Params = { params: Promise<{ id: string }> };

// GET — public list of prerequisites; includes which required ones the signed-in
// learner still needs.
export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);

  const prerequisites = await listPrerequisites(id);
  const unmet = session ? await getUnmetRequired(session.user.id, id) : [];
  const unmetIds = new Set(unmet.map((c) => c.id));
  return json({
    prerequisites: prerequisites.map((p) => ({
      id: p.prereq.id,
      title: p.prereq.title,
      enforcement: p.enforcement,
      met: !unmetIds.has(p.prereq.id),
    })),
  });
}

const PostSchema = z.object({
  prerequisiteCourseId: z.string().uuid(),
  enforcement: z.enum(["required", "recommended"]).default("required"),
});

// POST — instructor adds a prerequisite (must be a course in the same tenant).
export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;

  const parsed = PostSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  if (parsed.data.prerequisiteCourseId === id) {
    return errorJson("A course cannot require itself", 400);
  }
  // The prerequisite must belong to this tenant (scoped lookup).
  const prereq = await ctx.sdb.getCourseById(parsed.data.prerequisiteCourseId);
  if (!prereq) return errorJson("Prerequisite course not found", 404);

  await addPrerequisite(id, parsed.data.prerequisiteCourseId, parsed.data.enforcement);
  return json({ ok: true }, 201);
}

const DeleteSchema = z.object({ prerequisiteCourseId: z.string().uuid() });

// DELETE — instructor removes a prerequisite.
export async function DELETE(req: Request, { params }: Params) {
  const { id } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;

  const parsed = DeleteSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  await removePrerequisite(id, parsed.data.prerequisiteCourseId);
  return json({ ok: true });
}
