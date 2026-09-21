import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import {
  getAdultFacts,
  grantTeacherAgeException,
  hasActiveTeacherAgeException,
} from "@/db/queries/teacher-age";
import { db } from "@/db/client";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { adultStatus, exceptionGrantError, minorSignals } from "@/lib/teacher-age";

const Body = z.object({
  userId: z.string().min(1).max(200),
  confirmEmail: z.string().max(320),
  reason: z.string().max(2000),
  acks: z.object({
    teachUnverified: z.boolean().optional(),
    checkedOutside: z.boolean().optional(),
    noContact: z.boolean().optional(),
  }),
  minorSignalAck: z.boolean().optional(),
});

// POST /api/admin/teacher-age/exceptions: the last step of granting an exception to the
// "teachers must be adults" rule. Owner only. Every warning the UI showed is re-checked here by
// exceptionGrantError (src/lib/teacher-age.ts) against the account's facts as they are NOW, so
// neither a stale page nor a hand-built request can skip one.
export async function POST(req: Request) {
  const { session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const d = parsed.data;

  const [user] = await db.select({ id: users.id, email: users.email }).from(users).where(eq(users.id, d.userId)).limit(1);
  if (!user) return errorJson("No such account.", 404);
  const [facts, hasException] = await Promise.all([getAdultFacts(user.id), hasActiveTeacherAgeException(user.id)]);

  const error = exceptionGrantError(
    { reason: d.reason, confirmEmail: d.confirmEmail, acks: d.acks, minorSignalAck: d.minorSignalAck },
    { email: user.email, status: adultStatus(facts), signals: minorSignals(facts), hasException },
  );
  if (error) return errorJson(error, 400);

  await grantTeacherAgeException({ userId: user.id, grantedBy: session.user.id, reason: d.reason.trim() });
  return json({ ok: true });
}
