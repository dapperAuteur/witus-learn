import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { addCapture } from "@/db/queries/field-log";

type Params = { params: Promise<{ id: string }> };

const CaptureSchema = z.object({
  kind: z.enum(["photo", "audio", "video", "document", "interview", "artifact", "note"]),
  legId: z.string().uuid().nullish(),
  subject: z.string().max(300).nullish(),
  consentStatus: z.enum(["na", "verbal_recorded", "written", "on_record", "declined"]).optional(),
  involvesMinor: z.boolean().optional(),
  // Link only — we never host media.
  storageUrl: z.string().url().max(2000).nullish(),
  notes: z.string().max(2000).nullish(),
  capturedAt: z.string().datetime().nullish(),
});

// POST /api/field-log/projects/[id]/captures — log a capture (the field bank).
export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const parsed = CaptureSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const { capturedAt, ...rest } = parsed.data;
  const capture = await addCapture(sdb.tenantId, session.user.id, id, {
    ...rest,
    capturedAt: capturedAt ? new Date(capturedAt) : null,
  });
  if (!capture) return errorJson("Not found", 404);
  return json(capture, 201);
}
