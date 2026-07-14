import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { getFutureWorkItem } from "@/lib/future-work";
import { insertFutureWorkNote, setFutureWorkNoteStatus } from "@/db/queries/future-work-notes";

// Feedback channel for Future Classes & Features. Owner-only (this is BAM's private planning
// surface, like the Documentarian tracker — not a brand-admin one). The tenant comes from
// apiContext(), which resolves it server-side from the request host; the client never supplies it.
//
// Notes land in `future_work_notes` and are read back from the terminal with `pnpm future:list`.

const NoteSchema = z.object({
  itemKey: z.string().min(1).max(120),
  body: z.string().trim().min(1).max(8000),
});

const StatusSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(["open", "done"]),
});

export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = NoteSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  // Only keys that exist in the committed content index — no notes on phantom items.
  if (!getFutureWorkItem(parsed.data.itemKey)) return errorJson("Unknown item", 404);

  const note = await insertFutureWorkNote({
    tenantId: sdb.tenantId,
    itemKey: parsed.data.itemKey,
    body: parsed.data.body,
    authorUserId: session.user.id,
  });
  return json(
    { id: note.id, itemKey: note.itemKey, body: note.body, status: note.status, createdAt: note.createdAt.toISOString() },
    201,
  );
}

export async function PATCH(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = StatusSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const note = await setFutureWorkNoteStatus(sdb.tenantId, parsed.data.id, parsed.data.status);
  if (!note) return errorJson("Not found", 404);
  return json({ id: note.id, status: note.status });
}
