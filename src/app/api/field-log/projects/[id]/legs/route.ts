import { apiContext, errorJson, json } from "@/lib/api";
import { addLeg } from "@/db/queries/field-log";
import { LegSchema } from "@/lib/field-log-leg-schema";

type Params = { params: Promise<{ id: string }> };

// POST /api/field-log/projects/[id]/legs — add a site/node to a project.
export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const parsed = LegSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const leg = await addLeg(sdb.tenantId, session.user.id, id, parsed.data);
  if (!leg) return errorJson("Not found", 404);
  return json(leg, 201);
}
