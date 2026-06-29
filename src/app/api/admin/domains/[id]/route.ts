import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { removeDomain, setPrimaryDomain } from "@/db/queries/admin-domains";

type Params = { params: Promise<{ id: string }> };

async function requireOwner() {
  const { session } = await apiContext();
  if (!session) return { error: errorJson("Unauthorized", 401) };
  if (!(await isPlatformOwner(session.user.id))) return { error: errorJson("Forbidden", 403) };
  return { ok: true as const };
}

// DELETE /api/admin/domains/[id] — unmap a domain.
export async function DELETE(_req: Request, { params }: Params) {
  const gate = await requireOwner();
  if ("error" in gate) return gate.error;
  const { id } = await params;
  await removeDomain(id);
  return json({ ok: true });
}

const PatchSchema = z.object({ primary: z.literal(true) });

// PATCH /api/admin/domains/[id] — make this the tenant's primary domain.
export async function PATCH(req: Request, { params }: Params) {
  const gate = await requireOwner();
  if ("error" in gate) return gate.error;
  const { id } = await params;
  const parsed = PatchSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  await setPrimaryDomain(id);
  return json({ ok: true });
}
