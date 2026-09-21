import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { findUserByEmail, getAdultFacts, hasActiveTeacherAgeException } from "@/db/queries/teacher-age";
import { adultStatus, minorSignals } from "@/lib/teacher-age";

const Body = z.object({ email: z.string().trim().email().max(320) });

// POST /api/admin/teacher-age/lookup: step 1 of granting an exception. Owner only. Returns the
// account and every signal the adult test sees, so the warnings on the next step are about THIS
// person, not generic.
export async function POST(req: Request) {
  const { session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Enter an email address.", 400);

  const user = await findUserByEmail(parsed.data.email);
  if (!user) return errorJson("No account uses that email.", 404);
  const [facts, hasException] = await Promise.all([getAdultFacts(user.id), hasActiveTeacherAgeException(user.id)]);

  return json({
    user,
    status: adultStatus(facts),
    signals: minorSignals(facts),
    attestedAt: facts.attestedAt,
    hasException,
  });
}
