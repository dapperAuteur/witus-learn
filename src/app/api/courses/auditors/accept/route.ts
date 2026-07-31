import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { acceptAuditorInvite } from "@/db/queries/course-auditors";
import { getUsername } from "@/db/queries/authoring";

const Body = z.object({ token: z.string().min(1) });

// POST /api/courses/auditors/accept — redeem an audit invite. The tenant comes from the invite row
// itself (a token can only ever belong to one), never from the caller. Accepting while signed OUT
// still stamps `accepted_at`, so the grant is live for whoever later signs in with that address;
// accepting while signed IN also records `user_id`, which keeps the grant working if the person
// later changes their email.
export async function POST(req: Request) {
  const { session } = await apiContext();

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid invite.", 400);

  const accepted = await acceptAuditorInvite(parsed.data.token, session?.user.id ?? null);
  if (!accepted) return errorJson("This invite link is not valid.", 400);

  // A readable destination when the course has a pretty URL; the by-id page otherwise.
  const username = await getUsername(accepted.instructorId);
  const href =
    username && accepted.courseSlug
      ? `/${username}/${accepted.courseSlug}`
      : `/course/${accepted.auditor.courseId}`;

  return json({ ok: true, courseTitle: accepted.courseTitle, href, signedIn: Boolean(session) });
}
