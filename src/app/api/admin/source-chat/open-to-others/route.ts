import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { courseChatOpenToOthers, setCourseChatOpenToOthers } from "@/db/queries/source-chat-config";

// The platform owner's "Course chat for everyone else" switch (BAM, 2026-11-04: "chat should only be available
// for me until I turn it on for other users"). Platform-wide, every school. Off (the default): only the owner gets
// the course chat. On: each course's stage on /admin/source-chat decides. Owner only, because it overrides the
// per-course stages a brand admin may set.
const Body = z.object({ on: z.boolean() });

export async function GET() {
  const { session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);
  return json({ on: await courseChatOpenToOthers() });
}

export async function POST(req: Request) {
  const { session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  await setCourseChatOpenToOthers(parsed.data.on);
  return json({ ok: true, on: parsed.data.on });
}
