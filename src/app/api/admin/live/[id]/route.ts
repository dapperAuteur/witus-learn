import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { deleteLiveSession, updateLiveSession } from "@/db/queries/live";

type Params = { params: Promise<{ id: string }> };

async function requireOwner() {
  const { session } = await apiContext();
  if (!session) return { error: errorJson("Unauthorized", 401) };
  if (!(await isPlatformOwner(session.user.id))) return { error: errorJson("Forbidden", 403) };
  return { ok: true as const };
}

const PatchSchema = z.object({
  isLive: z.boolean().optional(),
  recordingUrl: z.string().url().nullable().optional(),
  playbackUrl: z.string().url().nullable().optional(),
  title: z.string().min(1).max(200).optional(),
  visibility: z.enum(["public", "members", "enrolled"]).optional(),
});

// PATCH /api/admin/live/[id] — go live / end, set the recording, edit.
export async function PATCH(req: Request, { params }: Params) {
  const gate = await requireOwner();
  if ("error" in gate) return gate.error;
  const { id } = await params;
  const parsed = PatchSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  await updateLiveSession(id, parsed.data);
  return json({ ok: true });
}

// DELETE /api/admin/live/[id]
export async function DELETE(_req: Request, { params }: Params) {
  const gate = await requireOwner();
  if ("error" in gate) return gate.error;
  const { id } = await params;
  await deleteLiveSession(id);
  return json({ ok: true });
}
