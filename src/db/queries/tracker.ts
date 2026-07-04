import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { platformSettings } from "@/db/schema/tenancy";
import { PLAN_ITEM_IDS, type TrackerComment, type TrackerItem, type TrackerState } from "@/lib/documentarian-plan";

// The Documentarian program tracker: the owner's per-item done/note state + a free-form
// comment log, stored as ONE JSON value under a single tenant-scoped platform_settings key
// (no dedicated migration — mirrors stream-targets). The plan STRUCTURE lives in code
// (src/lib/documentarian-plan.ts); only the mutable state is stored here.
const KEY = "documentarian_tracker";

const MAX_NOTE = 2000;
const MAX_COMMENT = 4000;
const MAX_COMMENTS = 500;

/** Coerce arbitrary parsed JSON into a safe {items, comments}: unknown item ids dropped,
 *  lengths clamped, malformed comments removed. */
function sanitize(input: unknown): { items: Record<string, TrackerItem>; comments: TrackerComment[] } {
  const obj = input && typeof input === "object" ? (input as Record<string, unknown>) : {};

  const rawItems = obj.items && typeof obj.items === "object" ? (obj.items as Record<string, unknown>) : {};
  const items: Record<string, TrackerItem> = {};
  for (const id of PLAN_ITEM_IDS) {
    const v = rawItems[id];
    if (v && typeof v === "object") {
      const iv = v as Record<string, unknown>;
      items[id] = { done: Boolean(iv.done), note: String(iv.note ?? "").slice(0, MAX_NOTE) };
    }
  }

  const rawComments = Array.isArray(obj.comments) ? obj.comments : [];
  const comments: TrackerComment[] = rawComments
    .filter((c): c is Record<string, unknown> => Boolean(c) && typeof c === "object")
    .slice(-MAX_COMMENTS)
    .map((c) => ({ at: String(c.at ?? "").slice(0, 40), text: String(c.text ?? "").slice(0, MAX_COMMENT) }))
    .filter((c) => c.text.length > 0);

  return { items, comments };
}

export async function getTracker(tenantId: string): Promise<TrackerState> {
  const rows = await db
    .select({ value: platformSettings.value, updatedAt: platformSettings.updatedAt })
    .from(platformSettings)
    .where(and(eq(platformSettings.tenantId, tenantId), eq(platformSettings.key, KEY)))
    .limit(1);
  const raw = rows[0]?.value;
  const updatedAt = rows[0]?.updatedAt ? new Date(rows[0].updatedAt).toISOString() : null;
  if (!raw) return { items: {}, comments: [], updatedAt: null };
  try {
    const clean = sanitize(JSON.parse(raw));
    return { ...clean, updatedAt };
  } catch {
    return { items: {}, comments: [], updatedAt: null };
  }
}

export async function setTracker(
  tenantId: string,
  state: { items: Record<string, TrackerItem>; comments: TrackerComment[] },
): Promise<void> {
  const clean = sanitize(state);
  const value = JSON.stringify(clean);
  await db
    .insert(platformSettings)
    .values({ tenantId, key: KEY, value })
    .onConflictDoUpdate({
      target: [platformSettings.tenantId, platformSettings.key],
      set: { value, updatedAt: new Date() },
    });
}
