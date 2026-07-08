import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { createCohort, listCohorts } from "@/db/queries/cohorts";

const Body = z.object({ name: z.string().min(1).max(120) });

// POST /api/cohorts — any signed-in user creates their own private class (cohort).
export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Please enter a class name.", 400);

  const cohort = await createCohort(sdb.tenantId, session.user.id, parsed.data.name.trim());
  return json({ cohort });
}

// GET /api/cohorts — the signed-in caller's own cohorts.
export async function GET() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const cohorts = await listCohorts(sdb.tenantId, session.user.id);
  return json({ cohorts });
}
