import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getProjectBundle, updateCapture } from "@/db/queries/field-log";
import { CAPTURE_PROJECTIONS, checkCaptureProjection } from "@/lib/field-log-tour";

type Params = { params: Promise<{ id: string; captureId: string }> };

const Uuid = z.string().uuid();

// Only what a logged capture may change after the fact. Today that is its projection: marking a photo
// logged before plans/96 v2 (or by the route import) as a 360 photo, or un-marking it. Strict, so a
// body carrying anything else is refused instead of being half-applied.
const Patch = z.object({ projection: z.enum(CAPTURE_PROJECTIONS).nullable() }).strict();

// PATCH /api/field-log/projects/[id]/captures/[captureId] { projection }
//
// Who: a crew member of the project (getProjectBundle is the tenant check and the membership check).
// The capture must belong to THIS project; any other id, or another school's, is a 404.
//
// A published tour reads the projection on every lesson view (src/lib/field-log-tour.ts), so marking
// a capture as 360 changes how its lesson shows the tour on the next load. The link is untouched, so
// the tour stays published.
export async function PATCH(req: Request, { params }: Params) {
  const { id, captureId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  if (!Uuid.safeParse(id).success || !Uuid.safeParse(captureId).success) return errorJson("Not found", 404);

  const parsed = Patch.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const bundle = await getProjectBundle(sdb.tenantId, session.user.id, id);
  const capture = bundle?.captures.find((c) => c.id === captureId);
  if (!bundle || !capture) return errorJson("Not found", 404);

  const check = checkCaptureProjection(capture.kind, parsed.data.projection);
  if (!check.ok) return errorJson(check.error, 400);

  const updated = await updateCapture(sdb.tenantId, session.user.id, capture.id, { projection: parsed.data.projection });
  if (!updated) return errorJson("Not found", 404);
  return json(updated);
}
