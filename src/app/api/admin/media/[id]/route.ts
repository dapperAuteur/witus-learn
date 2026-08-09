import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { MEDIA_STATUSES, mediaDecisionError } from "@/lib/media-verify";

type Params = { params: Promise<{ id: string }> };

// PATCH /api/admin/media/[id], record an approve/reject decision on one asset.
//
// Owner-only, and tenant-scoped through the scoped DAL: the update's WHERE clause carries the
// tenant, so an id belonging to another school matches no row and this returns 404. It must stay a
// 404 and never a redirect or a 403, because "you may not touch this one" confirms the asset exists,
// which is the cross-tenant leak the isolation rules exist to prevent. A genuinely unknown id and a
// foreign one answer identically.

const DecisionSchema = z.object({
  status: z.enum(MEDIA_STATUSES),
  note: z.string().trim().max(4000).optional(),
});

export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  // Reject non-UUID input before it reaches Postgres (cheap, and keeps a malformed id from
  // surfacing as a 500 that describes the query).
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
    return errorJson("Not found", 404);
  }

  const parsed = DecisionSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  // Read the asset first so the decision rules can see its rights status, and so a foreign id 404s
  // before anything is written.
  const existing = await sdb.getMediaAsset(id);
  if (!existing) return errorJson("Not found", 404);

  const note = parsed.data.note?.trim() ?? "";
  const problem = mediaDecisionError({
    status: parsed.data.status,
    note,
    rightsStatus: existing.rightsStatus,
  });
  if (problem) return errorJson(problem, 400);

  const asset = await sdb.setMediaAssetStatus({
    id,
    status: parsed.data.status,
    reviewNote: note || null,
    reviewedBy: session.user.id,
  });
  if (!asset) return errorJson("Not found", 404);

  return json({ asset });
}
