import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { acceptInvite } from "@/db/queries/cohorts";

const Body = z.object({ token: z.string().min(1) });

// POST /api/cohorts/accept — a signed-in student redeems a cohort invite token.
// Tenant comes from the invite row itself (not the caller), but since a token
// can only ever belong to one tenant this can't cross a boundary either way.
export async function POST(req: Request) {
  const { session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid invite.", 400);

  const cohort = await acceptInvite(parsed.data.token, session.user.id);
  if (!cohort) return errorJson("This invite is invalid or has already been used.", 400);

  return json({ ok: true, cohortId: cohort.id });
}
