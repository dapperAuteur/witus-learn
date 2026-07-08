import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { createManagedChild } from "@/db/queries/family";

const Body = z.object({ name: z.string().trim().min(1).max(80) });

// POST /api/family/children — a signed-in parent creates a login-less managed child
// profile (Family Model B: young kids with no email). Tenant comes from the request
// host (never the client); the new profile is owned by the caller alone.
export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Please enter a name.", 400);

  const childUserId = await createManagedChild(sdb.tenantId, session.user.id, parsed.data.name);
  return json({ ok: true, childUserId }, 201);
}
