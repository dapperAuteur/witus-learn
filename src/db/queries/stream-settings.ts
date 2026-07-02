import "server-only";
import { and, eq, inArray } from "drizzle-orm";
import { db } from "@/db/client";
import { platformSettings } from "@/db/schema/tenancy";
import { env } from "@/lib/env";
import { isAllowedStreamUrl, resolveStreamSrc } from "@/lib/stream-embed";

// Persistent, per-tenant "always-on" stream config, stored in the generic
// platform_settings key/value table (tenant-scoped, no dedicated migration). These
// are the values that would otherwise be env vars (RTMP_STREAM_PLAYBACK_URL /
// STREAM_EMBED_CODE); keeping them here lets the platform owner change them from
// /admin/live without a redeploy. Server-resolved from the request tenant, never
// client-supplied. The embed is stored as an already-extracted, allowlisted src
// (see src/lib/stream-embed.ts) so nothing renders raw pasted HTML.
const PLAYBACK_KEY = "stream_playback_url";
const EMBED_SRC_KEY = "stream_embed_src";

export interface StreamSettings {
  /** Direct https player/playback URL, or null. */
  playbackUrl: string | null;
  /** Extracted + allowlisted iframe src from the provider embed code, or null. */
  embedSrc: string | null;
}

export async function getStreamSettings(tenantId: string): Promise<StreamSettings> {
  const rows = await db
    .select({ key: platformSettings.key, value: platformSettings.value })
    .from(platformSettings)
    .where(
      and(
        eq(platformSettings.tenantId, tenantId),
        inArray(platformSettings.key, [PLAYBACK_KEY, EMBED_SRC_KEY]),
      ),
    );
  const byKey = new Map(rows.map((r) => [r.key, r.value]));
  let playbackUrl = byKey.get(PLAYBACK_KEY) ?? null;
  let embedSrc = byKey.get(EMBED_SRC_KEY) ?? null;

  // Fall back to the deployment-wide env defaults when this tenant hasn't set its own, so the
  // stream values only need to be provided once (RTMP_STREAM_PLAYBACK_URL / STREAM_EMBED_CODE).
  // Env values pass the SAME allowlist/extract as an admin paste; nothing raw is trusted.
  if (!playbackUrl && env.RTMP_STREAM_PLAYBACK_URL && isAllowedStreamUrl(env.RTMP_STREAM_PLAYBACK_URL)) {
    playbackUrl = env.RTMP_STREAM_PLAYBACK_URL.trim();
  }
  if (!embedSrc && env.STREAM_EMBED_CODE) {
    const r = resolveStreamSrc(env.STREAM_EMBED_CODE);
    if (r.src) embedSrc = r.src;
  }

  return { playbackUrl, embedSrc };
}

async function upsert(tenantId: string, key: string, value: string | null): Promise<void> {
  await db
    .insert(platformSettings)
    .values({ tenantId, key, value })
    .onConflictDoUpdate({
      target: [platformSettings.tenantId, platformSettings.key],
      set: { value },
    });
}

export async function setStreamSettings(tenantId: string, s: StreamSettings): Promise<void> {
  await Promise.all([
    upsert(tenantId, PLAYBACK_KEY, s.playbackUrl),
    upsert(tenantId, EMBED_SRC_KEY, s.embedSrc),
  ]);
}
