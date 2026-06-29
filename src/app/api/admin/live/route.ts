import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { createLiveSessions } from "@/db/queries/live";

const Schema = z.object({
  tenantIds: z.array(z.string().uuid()).min(1),
  title: z.string().min(1).max(200),
  description: z.string().max(2000).nullable().optional(),
  scheduledAt: z.string().nullable().optional(),
  visibility: z.enum(["public", "members", "enrolled"]),
  playbackUrl: z.string().url().nullable().optional(),
  courseId: z.string().uuid().nullable().optional(),
});

// POST /api/admin/live — platform owner schedules/starts a live session and
// broadcasts it to one or more schools (fan-out: a row per tenant).
export async function POST(req: Request) {
  const { session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const d = parsed.data;

  const count = await createLiveSessions(
    d.tenantIds,
    {
      courseId: d.courseId ?? null,
      title: d.title,
      description: d.description ?? null,
      scheduledAt: d.scheduledAt ? new Date(d.scheduledAt) : null,
      visibility: d.visibility,
      playbackUrl: d.playbackUrl ?? null,
    },
    session.user.id,
  );
  return json({ ok: true, count });
}
