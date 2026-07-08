import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { acceptGuardianInvite } from "@/db/queries/family";

const Body = z.object({ token: z.string().min(1) });

// POST /api/family/accept — a signed-in parent redeems a guardian invite token, linking
// them to exactly the one child named on that invite. Tenant + studentUserId come from
// the invite row itself (never from the caller), so this can't be used to link to an
// arbitrary child.
export async function POST(req: Request) {
  const { session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid invite.", 400);

  const child = await acceptGuardianInvite(parsed.data.token, session.user.id);
  if (!child) return errorJson("This invite is invalid or has already been used.", 400);

  return json({ ok: true, studentUserId: child.studentUserId, studentDisplayName: child.studentDisplayName });
}
