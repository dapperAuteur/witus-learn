import { z } from "zod";
import { errorJson, json } from "@/lib/api";
import { getSession } from "@/lib/session";
import { getEditableProfile, updateProfile } from "@/db/queries/authoring";
import { applyProfileChanges, getAccountFacts, isUsernameTaken } from "@/db/queries/account-settings";
import { accountLockReason, ACCOUNT_LIMITS, USERNAME_TAKEN, validateUsername } from "@/lib/account-settings";
import { getTenantByHost } from "@/lib/tenant";
import type { ProfileLinks } from "@/db/schema";

// A blank string means "clear this": accept it, then normalize below.
const url = z.string().url().max(300).or(z.literal(""));

const Schema = z.object({
  displayName: z.string().max(ACCOUNT_LIMITS.displayName).optional(),
  username: z.string().max(100).optional(),
  bio: z.string().max(2000).optional(),
  avatarUrl: url.optional(),
  links: z
    .object({
      website: url.optional(),
      linkedin: url.optional(),
      portfolio: url.optional(),
      custom: z.array(z.object({ label: z.string().max(60), url: z.string().url().max(300) })).max(8).optional(),
    })
    .optional(),
});

// GET /api/profile: the signed-in user's own editable profile.
export async function GET() {
  const session = await getSession();
  if (!session) return errorJson("Unauthorized", 401);
  return json({ profile: await getEditableProfile(session.user.id) });
}

// PATCH /api/profile: a user edits their OWN profile (global, not tenant-scoped). Only the fields
// sent change: /teach/profile sends the instructor fields, /account sends the display name and the
// username (BAM, 2026-11-10: "users should be able to manage their accounts"). A display name or
// username change is logged in account_changes; isPlatformOwner is never editable here.
export async function PATCH(req: Request) {
  const session = await getSession();
  if (!session) return errorJson("Unauthorized", 401);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson(parsed.error.issues[0]?.message ?? "Check the form.", 400);
  const d = parsed.data;

  let username: string | undefined;
  if (d.username !== undefined) {
    const facts = await getAccountFacts(session.user.id);
    if (!facts) return errorJson("Unauthorized", 401);
    const checked = validateUsername(d.username);
    if (!checked.ok) return errorJson(checked.error, 400);
    if (checked.username !== facts.username) {
      const lock = accountLockReason(facts);
      if (lock) return errorJson(lock, 400);
      if (await isUsernameTaken(checked.username, session.user.id)) return errorJson(USERNAME_TAKEN, 409);
      username = checked.username;
    }
  }

  if (d.displayName !== undefined || username !== undefined) {
    const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
    const tenant = await getTenantByHost(host).catch(() => null);
    const result = await applyProfileChanges({
      userId: session.user.id,
      displayName: d.displayName === undefined ? undefined : d.displayName.trim() || null,
      username,
      actor: { userId: session.user.id, role: "self", tenantId: tenant?.id ?? null },
    });
    if (!result.ok) return result.reason === "username-taken" ? errorJson(USERNAME_TAKEN, 409) : errorJson("Unauthorized", 401);
  }

  // The instructor-profile fields: each changes only when sent, "" clears it.
  const rest: { bio?: string | null; avatarUrl?: string | null; links?: ProfileLinks } = {};
  if (d.bio !== undefined) rest.bio = d.bio.trim() || null;
  if (d.avatarUrl !== undefined) rest.avatarUrl = d.avatarUrl || null;
  if (d.links !== undefined) {
    // Drop empty link fields entirely so they don't render as dead links.
    const links: ProfileLinks = {};
    if (d.links.website) links.website = d.links.website;
    if (d.links.linkedin) links.linkedin = d.links.linkedin;
    if (d.links.portfolio) links.portfolio = d.links.portfolio;
    const custom = (d.links.custom ?? []).filter((c) => c.label.trim() && c.url.trim());
    if (custom.length) links.custom = custom;
    rest.links = links;
  }
  if (Object.keys(rest).length > 0) await updateProfile(session.user.id, rest);
  return json({ ok: true });
}
