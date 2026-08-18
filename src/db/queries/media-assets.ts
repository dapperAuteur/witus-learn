import "server-only";
import { and, desc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { mediaAssets, type MediaAsset } from "@/db/schema";
import type { MediaKind, MediaStatus } from "@/lib/media-verify";

// Media-verification rows for /admin/media. Every read and write filters `tenant_id`, and the tenant
// is always resolved server-side from the request host (via ScopedDb), never supplied by a client.
//
// The by-id helpers take the tenant as their FIRST argument and put it in the WHERE clause rather
// than fetching and comparing afterwards, so a foreign id simply matches no row. The caller then
// returns 404, never a redirect: a redirect would confirm that the id exists somewhere, which is the
// leak this app's isolation rules exist to prevent.

export interface UpsertMediaAsset {
  tenantId: string;
  courseSlug: string | null;
  lessonSlug: string | null;
  kind: MediaKind;
  url: string;
  publicId: string | null;
  alt: string | null;
  caption: string | null;
  credit: string;
  rightsStatus: string;
  sourceUrl: string;
}

/**
 * Register an uploaded asset (or refresh the details of one already registered at the same URL).
 *
 * Re-registering deliberately does NOT reset an existing decision: re-running an upload script must
 * not silently un-approve media that was already checked. Editing the credit or the rights of an
 * approved asset is a real change, so callers that mean that should reject it and register the
 * corrected version.
 */
export async function upsertMediaAsset(v: UpsertMediaAsset): Promise<MediaAsset> {
  const [row] = await db
    .insert(mediaAssets)
    .values(v)
    .onConflictDoUpdate({
      target: [mediaAssets.tenantId, mediaAssets.url],
      set: {
        courseSlug: v.courseSlug,
        lessonSlug: v.lessonSlug,
        kind: v.kind,
        publicId: v.publicId,
        alt: v.alt,
        caption: v.caption,
        credit: v.credit,
        rightsStatus: v.rightsStatus,
        sourceUrl: v.sourceUrl,
      },
    })
    .returning();
  return row;
}

/** Count of assets still awaiting review for one tenant — the /admin landing headline number. */
export async function countPendingMediaAssets(tenantId: string): Promise<number> {
  const [row] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(mediaAssets)
    .where(and(eq(mediaAssets.tenantId, tenantId), eq(mediaAssets.status, "pending")));
  return row?.count ?? 0;
}

/** Every asset for one tenant, newest first. Nothing here crosses a tenant boundary. */
export async function listMediaAssets(tenantId: string): Promise<MediaAsset[]> {
  return db
    .select()
    .from(mediaAssets)
    .where(eq(mediaAssets.tenantId, tenantId))
    .orderBy(desc(mediaAssets.createdAt))
    .limit(2000);
}

/** One asset, or undefined when the id belongs to another tenant or to nothing at all. */
export async function getMediaAsset(
  tenantId: string,
  id: string,
): Promise<MediaAsset | undefined> {
  const [row] = await db
    .select()
    .from(mediaAssets)
    .where(and(eq(mediaAssets.tenantId, tenantId), eq(mediaAssets.id, id)))
    .limit(1);
  return row;
}

export interface SetMediaAssetStatus {
  tenantId: string;
  id: string;
  status: MediaStatus;
  reviewNote: string | null;
  reviewedBy: string | null;
}

/** Record a decision. Returns undefined when the id is not this tenant's, so the caller 404s. */
export async function setMediaAssetStatus(v: SetMediaAssetStatus): Promise<MediaAsset | undefined> {
  const [row] = await db
    .update(mediaAssets)
    .set({
      status: v.status,
      reviewNote: v.reviewNote,
      reviewedBy: v.reviewedBy,
      reviewedAt: new Date(),
    })
    .where(and(eq(mediaAssets.tenantId, v.tenantId), eq(mediaAssets.id, v.id)))
    .returning();
  return row;
}
