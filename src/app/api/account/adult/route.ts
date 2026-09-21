import { z } from "zod";
import { errorJson, json } from "@/lib/api";
import { getSession } from "@/lib/session";
import { attestAdult } from "@/db/queries/teacher-age";

const Body = z.object({ confirm: z.literal(true) });

// POST /api/account/adult: the signed-in user attests "I am 18 or older". Global (user_profiles is
// not tenant-scoped; the attestation is about the person). Refused for an account the platform
// already knows is a child's: a managed child, a kid login, or someone's linked student
// (src/lib/teacher-age.ts). Keeps the first attestation time.
export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return errorJson("Please sign in first.", 401);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Tick the box to confirm you are 18 or older.", 400);

  const ok = await attestAdult(session.user.id);
  if (!ok) return errorJson("This account belongs to a student, so it can't be confirmed as an adult.", 409);
  return json({ ok: true });
}
