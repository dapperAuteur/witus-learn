import { z } from "zod";
import { errorJson, json } from "@/lib/api";
import { getSession } from "@/lib/session";
import { getEditableProfile, updateProfile } from "@/db/queries/authoring";
import type { ProfileLinks } from "@/db/schema";

// A blank string means "clear this" — accept it, then normalize below.
const url = z.string().url().max(300).or(z.literal(""));

const Schema = z.object({
  displayName: z.string().max(120).optional(),
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

// GET /api/profile — the signed-in user's own editable profile.
export async function GET() {
  const session = await getSession();
  if (!session) return errorJson("Unauthorized", 401);
  return json({ profile: await getEditableProfile(session.user.id) });
}

// PATCH /api/profile — a user edits their OWN profile (not tenant-scoped; username and
// isPlatformOwner are intentionally not editable here).
export async function PATCH(req: Request) {
  const session = await getSession();
  if (!session) return errorJson("Unauthorized", 401);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const d = parsed.data;

  // "" → cleared. Drop empty link fields entirely so they don't render as dead links.
  const links: ProfileLinks = {};
  if (d.links?.website) links.website = d.links.website;
  if (d.links?.linkedin) links.linkedin = d.links.linkedin;
  if (d.links?.portfolio) links.portfolio = d.links.portfolio;
  const custom = (d.links?.custom ?? []).filter((c) => c.label.trim() && c.url.trim());
  if (custom.length) links.custom = custom;

  await updateProfile(session.user.id, {
    displayName: d.displayName?.trim() || null,
    bio: d.bio?.trim() || null,
    avatarUrl: d.avatarUrl || null,
    links,
  });
  return json({ ok: true });
}
