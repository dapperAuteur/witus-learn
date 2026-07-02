import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { platformSettings } from "@/db/schema/tenancy";

// Per-tenant list of RTMP push destinations (LinkedIn Live, YouTube, X, …) that the
// owner copies into OBS's multiple-output so one broadcast fans out to several socials.
// The app is only a config store: it never touches the media, and each RTMP URL + key is
// pushed by OBS, not by us. Stored as one JSON value in the tenant-scoped platform_settings
// table (no dedicated migration), alongside the always-on stream settings.
const KEY = "stream_targets";

export interface StreamTarget {
  /** Display label, e.g. "LinkedIn Live" or "YouTube". */
  label: string;
  /** RTMP(S) ingest URL from the destination, e.g. rtmps://… . */
  rtmpUrl: string;
  /** The destination's stream key. Often single-use / expiring (LinkedIn), so it's editable. */
  streamKey: string;
}

export async function getStreamTargets(tenantId: string): Promise<StreamTarget[]> {
  const rows = await db
    .select({ value: platformSettings.value })
    .from(platformSettings)
    .where(and(eq(platformSettings.tenantId, tenantId), eq(platformSettings.key, KEY)))
    .limit(1);
  const raw = rows[0]?.value;
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((t): t is StreamTarget => Boolean(t) && typeof t === "object")
      .map((t) => ({
        label: String(t.label ?? "").slice(0, 80),
        rtmpUrl: String(t.rtmpUrl ?? "").slice(0, 500),
        streamKey: String(t.streamKey ?? "").slice(0, 500),
      }));
  } catch {
    return [];
  }
}

export async function setStreamTargets(tenantId: string, targets: StreamTarget[]): Promise<void> {
  await db
    .insert(platformSettings)
    .values({ tenantId, key: KEY, value: JSON.stringify(targets) })
    .onConflictDoUpdate({
      target: [platformSettings.tenantId, platformSettings.key],
      set: { value: JSON.stringify(targets) },
    });
}
