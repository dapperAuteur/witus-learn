import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { getStreamSettings, setStreamSettings } from "@/db/queries/stream-settings";
import { isAllowedStreamUrl, resolveStreamSrc } from "@/lib/stream-embed";

const Schema = z.object({
  // A direct https player URL (validated against the streaming-host allowlist).
  playbackUrl: z.string().max(2000).nullable().optional(),
  // The provider's embed snippet (an <iframe> in a <div>). We extract + allowlist
  // its src; the raw HTML is never stored or rendered.
  embedCode: z.string().max(8000).nullable().optional(),
});

// PATCH /api/admin/stream-settings — set the CURRENT tenant's persistent stream
// (the values that used to be RTMP_STREAM_PLAYBACK_URL / STREAM_EMBED_CODE). Tenant
// is resolved server-side from the host; gated to a brand admin (or platform owner).
export async function PATCH(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) return errorJson("Forbidden", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const d = parsed.data;

  // Playback URL: empty clears it; otherwise it must be an allowlisted https URL.
  let playbackUrl: string | null = null;
  if (d.playbackUrl && d.playbackUrl.trim()) {
    const u = d.playbackUrl.trim();
    if (!isAllowedStreamUrl(u)) {
      return errorJson("Playback URL must be an https link on an allowed streaming host.", 400);
    }
    playbackUrl = u;
  }

  // Embed code: empty clears it; otherwise extract + allowlist the iframe src.
  let embedSrc: string | null = null;
  if (d.embedCode && d.embedCode.trim()) {
    const r = resolveStreamSrc(d.embedCode);
    if (r.error) return errorJson(r.error, 400);
    embedSrc = r.src ?? null;
  }

  await setStreamSettings(sdb.tenantId, { playbackUrl, embedSrc });
  return json({ ok: true, playbackUrl, embedSrc });
}

// GET — current values (admin UI hydration). Owner/brand-admin only.
export async function GET() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) return errorJson("Forbidden", 403);
  return json(await getStreamSettings(sdb.tenantId));
}
