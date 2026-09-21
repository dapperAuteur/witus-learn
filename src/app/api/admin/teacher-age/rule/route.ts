import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { setTeachersMustBeAdults } from "@/db/queries/teacher-age";
import { RULE_OFF_PHRASE } from "@/lib/teacher-age";

const Body = z.object({ on: z.boolean(), confirmText: z.string().max(40).optional() });

// POST /api/admin/teacher-age/rule: the platform owner's "teachers must be adults" switch. Owner
// only. Platform-wide (not per school). Turning it OFF requires typing RULE_OFF_PHRASE, checked here
// so a hand-built request cannot skip the warning.
export async function POST(req: Request) {
  const { session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  if (!parsed.data.on && parsed.data.confirmText?.trim() !== RULE_OFF_PHRASE) {
    return errorJson(`Type ${RULE_OFF_PHRASE} to turn the rule off.`, 400);
  }

  await setTeachersMustBeAdults(parsed.data.on);
  return json({ ok: true, on: parsed.data.on });
}
