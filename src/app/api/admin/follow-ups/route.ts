import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { getFollowUp } from "@/lib/release-followups";
import { upsertReleaseFollowup } from "@/db/queries/release-followups";

// Close or reopen a release follow-up (/admin/follow-ups). Owner-only: these are BAM's marketing and
// release chores (his blog, his task files), not a school admin's. The tenant comes from apiContext(),
// resolved server-side from the request host; the client never supplies it.

const Schema = z.object({
  followupKey: z.string().min(1).max(120),
  status: z.enum(["open", "done", "skipped"]),
  note: z.string().trim().max(4000).optional(),
});

export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  // Only keys in the committed index, and only ones defined for THIS school: a follow-up written for
  // another tenant's courses must not be closable from here.
  const followUp = getFollowUp(parsed.data.followupKey);
  if (!followUp || followUp.tenant !== sdb.tenant.slug) return errorJson("Unknown follow-up", 404);

  // Closing without saying what was done makes the list lie: the post reads as handled with no URL to
  // check it against. The same rule as the source checks.
  const note = parsed.data.note?.trim() ?? "";
  if (parsed.data.status !== "open" && !note) {
    return errorJson("Say what was done (the live URL, what changed) before closing a follow-up", 400);
  }

  const row = await upsertReleaseFollowup({
    tenantId: sdb.tenantId,
    followupKey: followUp.key,
    status: parsed.data.status,
    note: note || null,
    decidedBy: session.user.id,
  });

  return json({ followupKey: row.followupKey, status: row.status, note: row.note, updatedAt: row.updatedAt.toISOString() });
}
