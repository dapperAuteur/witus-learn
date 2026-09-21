import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getAdultStatus } from "@/db/queries/teacher-age";
import { CONTACT_MODES } from "@/lib/contact";
import { mayUseContact } from "@/lib/teacher-age";

const Body = z.object({
  otherUserId: z.string().min(1).max(200),
  // "default" clears the override, so this person follows your default again.
  mode: z.enum([...CONTACT_MODES, "default"]),
});

// PUT /api/contact/overrides: set how ONE related adult may reach you, overriding your default for
// their role (decided 2026-09-20: "allow users to set individual user exceptions ... in every
// combination"). Only for someone you are actually related to through a class on this school; for
// anyone else it is the same 404 as a person who does not exist.
export async function PUT(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  if (!mayUseContact(await getAdultStatus(session.user.id))) {
    return json({ error: "Confirm you are 18 or older first.", needsAdultAttestation: true }, 403);
  }

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const { otherUserId, mode } = parsed.data;
  if (otherUserId === session.user.id) return errorJson("Not found", 404);
  if (!(await sdb.areContactRelated(session.user.id, otherUserId))) return errorJson("Not found", 404);

  await sdb.setContactOverride(session.user.id, otherUserId, mode === "default" ? null : mode);
  return json({ ok: true });
}
