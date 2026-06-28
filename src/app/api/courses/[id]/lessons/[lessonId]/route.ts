import { z } from "zod";
import { errorJson, json, loadEditableCourse } from "@/lib/api";
import { deleteLesson, getLessonById, updateLesson } from "@/db/queries/authoring";

type Params = { params: Promise<{ id: string; lessonId: string }> };

const Schema = z.object({
  title: z.string().min(1).max(200).optional(),
  lessonType: z
    .enum(["video", "text", "audio", "slides", "quiz", "360video", "photo_360", "virtual_tour", "map"])
    .optional(),
  moduleId: z.string().uuid().nullable().optional(),
  textContent: z.string().nullable().optional(),
  contentUrl: z.string().url().nullable().optional(),
  contentFormat: z.enum(["markdown", "tiptap"]).nullable().optional(),
  durationSeconds: z.number().int().nullable().optional(),
  sortOrder: z.number().int().optional(),
  isFreePreview: z.boolean().optional(),
  isPublished: z.boolean().optional(),
});

export async function GET(_req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;
  const lesson = await getLessonById(ctx.sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== id) return errorJson("Not found", 404);
  return json({ lesson });
}

export async function PATCH(req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const updated = await updateLesson(id, lessonId, parsed.data);
  if (!updated) return errorJson("Not found", 404);
  return json({ lesson: updated });
}

export async function DELETE(_req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;

  const ok = await deleteLesson(id, lessonId);
  if (!ok) return errorJson("Not found", 404);
  return json({ ok: true });
}
