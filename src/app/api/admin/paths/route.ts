import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { createPath } from "@/db/queries/paths";

const Schema = z.object({
  title: z.string().min(1).max(200),
  slug: z.string().min(1).max(120).regex(/^[a-z0-9-]+$/, "lowercase, digits, and hyphens only"),
  description: z.string().max(2000).nullable().optional(),
});

// POST /api/admin/paths — create a learning path on the current school.
export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson(parsed.error.issues[0]?.message ?? "Invalid input", 400);

  await createPath({
    tenantId: sdb.tenantId,
    slug: parsed.data.slug,
    title: parsed.data.title,
    description: parsed.data.description ?? null,
  });
  return json({ ok: true });
}
