import { z } from "zod";
import { errorJson } from "@/lib/api";
import { auth } from "@/lib/auth";

// POST /api/kid-login — the kid-facing sign-in endpoint (class code → avatar → PIN). This
// route is a thin wrapper: ALL real validation (class code → cohort, cohort membership,
// rate-limited PIN compare, session mint) lives in the Better Auth plugin endpoint
// `auth.api.kidLoginVerify` (src/lib/kid-login-plugin.ts) — kept there, not here, so the
// same checks apply no matter which URL a caller hits (see that file's comment).
//
// No enumeration: every failure — bad class code, child not in that class, wrong PIN,
// locked out — surfaces as the exact same generic message. Never distinguish them.
const Body = z.object({
  classCode: z.string().trim().min(1).max(32),
  childUserId: z.string().min(1),
  pin: z.string().min(4).max(6),
});

const GENERIC_ERROR = "That didn't match. Please try again.";

export async function POST(req: Request) {
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson(GENERIC_ERROR, 400);

  try {
    const response = await auth.api.kidLoginVerify({
      body: parsed.data,
      asResponse: true,
    });
    return response;
  } catch {
    // Covers APIError (bad code/child/PIN/lockout) and any unexpected failure alike —
    // never leak which one it was.
    return errorJson(GENERIC_ERROR, 401);
  }
}
