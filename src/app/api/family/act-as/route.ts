import { z } from "zod";
import { cookies } from "next/headers";
import { apiContext, errorJson, json } from "@/lib/api";
import { isManagedChildOf } from "@/db/queries/family";
import { ACTIVE_LEARNER_COOKIE } from "@/lib/active-learner";
import { env } from "@/lib/env";

const Body = z.object({ learnerId: z.string().min(1).nullable() });

// POST /api/family/act-as — switch the signed-in user's "studying as" identity.
// `learnerId: null` clears the cookie (back to "me"). Otherwise, re-verify
// `isManagedChildOf(session.user.id, learnerId)` server-side BEFORE setting the
// cookie — the client's claim is never trusted on its own. 403 if the caller
// doesn't manage that profile.
export async function POST(req: Request) {
  const { session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid request.", 400);

  const store = await cookies();
  const { learnerId } = parsed.data;

  if (learnerId === null) {
    store.delete(ACTIVE_LEARNER_COOKIE);
    return json({ ok: true, learnerId: null });
  }

  const allowed = await isManagedChildOf(session.user.id, learnerId);
  if (!allowed) return errorJson("You don't manage that profile.", 403);

  store.set(ACTIVE_LEARNER_COOKIE, learnerId, {
    httpOnly: true,
    sameSite: "lax",
    secure: env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days — re-verified server-side on every use anyway.
  });
  return json({ ok: true, learnerId });
}
