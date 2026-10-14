import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { updateLeg } from "@/db/queries/field-log";
import { LegPatchSchema } from "@/lib/field-log-leg-schema";

type Params = { params: Promise<{ id: string; legId: string }> };

const Uuid = z.string().uuid();

// PATCH /api/field-log/projects/[id]/legs/[legId] — edit one leg (most often: tick it visited).
// A leg that is not in this project, or a project this user cannot reach, is a 404, never a 403:
// the answer must not reveal that the id exists somewhere else. A malformed id is a 404 too, rather
// than a database error.
export async function PATCH(req: Request, { params }: Params) {
  const { id, legId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!Uuid.safeParse(id).success || !Uuid.safeParse(legId).success) return errorJson("Not found", 404);
  const parsed = LegPatchSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const leg = await updateLeg(sdb.tenantId, session.user.id, id, legId, parsed.data);
  if (!leg) return errorJson("Not found", 404);
  return json(leg);
}
