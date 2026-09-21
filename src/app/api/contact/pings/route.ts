import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { checkRateLimit } from "@/lib/rate-limit";
import { counterpartView, effectiveMode, mayPing, pingBlockReason, pingEmailDueAt } from "@/lib/contact";
import { mayUseContact } from "@/lib/teacher-age";

const Body = z.object({
  toUserId: z.string().min(1).max(200),
  studentUserId: z.string().min(1).max(200),
  cohortId: z.string().uuid(),
});

// POST /api/contact/pings: "I'd like to talk." A signal, not a message: there is no body field and
// never will be (CLAUDE.md, no-inbox rule). The recipient sees it IN THE APP first (a badge, and a
// card on /family or the class roster). If the asker has not marked it "we've started talking"
// within 48 hours, the recipient gets one email, Reply-To the asker (src/app/api/cron/contact-pings).
//
// The recipient is never picked from a search: the client names a (recipient, student, class)
// triple and the server re-proves the relationship inside this tenant. Anything that does not prove
// out is the same 404 as a user who does not exist, so this cannot be used to find people.
export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  const me = session.user.id;

  // Cheap first gate (per-process, a speed bump only). The real limit is the database rule below.
  if (!checkRateLimit(`contact-ping:${sdb.tenantId}:${me}`, { windowMs: 60 * 60 * 1000, max: 20 }).allowed) {
    return errorJson("Too many requests. Try again later.", 429);
  }

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const { toUserId, studentUserId, cohortId } = parsed.data;
  if (toUserId === me || studentUserId === me || studentUserId === toUserId) return errorJson("Not found", 404);

  const role = await sdb.contactRelationshipRole({ fromUserId: me, toUserId, studentUserId, cohortId });
  if (!role) return errorJson("Not found", 404);

  const [people, overridesAboutMe] = await Promise.all([
    sdb.getContactPeople([me, toUserId]),
    sdb.listContactOverridesAbout(me, [toUserId]),
  ]);
  const sender = people.get(me);
  const recipient = people.get(toUserId);
  if (!sender || !recipient) return errorJson("Not found", 404);
  if (!mayUseContact(sender.status)) {
    return json({ error: "Confirm you are 18 or older first.", needsAdultAttestation: true }, 403);
  }

  const mode = effectiveMode({
    settings: recipient.settings,
    override: overridesAboutMe.get(toUserId) ?? null,
    askerRole: role,
  });
  if (!mayPing(counterpartView(mode, mayUseContact(recipient.status)))) {
    return errorJson("They've asked to be contacted through the school.", 403);
  }

  const now = new Date();
  const blocked = pingBlockReason(await sdb.listPingsForTriple(me, toUserId, studentUserId), now);
  if (blocked) return errorJson(blocked, 429);

  const ping = await sdb.createPing({ cohortId, studentUserId, fromUserId: me, toUserId, fromRole: role });
  return json({
    ok: true,
    ping: { id: ping.id, createdAt: ping.createdAt.toISOString(), emailDueAt: pingEmailDueAt(ping).toISOString() },
  });
}
