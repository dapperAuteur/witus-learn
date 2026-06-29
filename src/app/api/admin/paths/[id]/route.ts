import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { deletePath, getPathTenantId, setPathCourses } from "@/db/queries/paths";

type Params = { params: Promise<{ id: string }> };

async function gate(id: string) {
  const { sdb, session } = await apiContext();
  if (!session) return { error: errorJson("Unauthorized", 401) };
  if (!(await isPlatformOwner(session.user.id))) return { error: errorJson("Forbidden", 403) };
  const tenantId = await getPathTenantId(id);
  if (!tenantId || tenantId !== sdb.tenantId) return { error: errorJson("Not found", 404) };
  return { ok: true as const };
}

const PatchSchema = z.object({ courseIds: z.array(z.string().uuid()) });

// PATCH /api/admin/paths/[id] — set the ordered courses in a path.
export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;
  const g = await gate(id);
  if ("error" in g) return g.error;
  const parsed = PatchSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  await setPathCourses(id, parsed.data.courseIds);
  return json({ ok: true });
}

// DELETE /api/admin/paths/[id]
export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  const g = await gate(id);
  if ("error" in g) return g.error;
  await deletePath(id);
  return json({ ok: true });
}
