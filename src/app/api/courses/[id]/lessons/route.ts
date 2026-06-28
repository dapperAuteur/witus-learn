import { z } from "zod";
import { errorJson, json, loadEditableCourse } from "@/lib/api";
import { createLesson, listLessons } from "@/db/queries/authoring";

const LESSON_TYPES = [
  "video",
  "text",
  "audio",
  "slides",
  "quiz",
  "360video",
  "photo_360",
  "virtual_tour",
  "map",
] as const;

const Schema = z.object({
  title: z.string().min(1).max(200),
  lessonType: z.enum(LESSON_TYPES).optional(),
  moduleId: z.string().uuid().nullable().optional(),
  textContent: z.string().nullable().optional(),
  contentUrl: z.string().url().nullable().optional(),
  contentFormat: z.enum(["markdown", "tiptap"]).nullable().optional(),
  durationSeconds: z.number().int().nullable().optional(),
  sortOrder: z.number().int().optional(),
  isFreePreview: z.boolean().optional(),
  isPublished: z.boolean().optional(),
  slug: z.string().max(120).nullable().optional(),
});

type Params = { params: Promise<{ id: string }> };

// GET — authoring list (all lessons incl. drafts). The public player (Phase 4)
// reads lessons with gating; this is the instructor view.
export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;
  return json({ lessons: await listLessons(id) });
}

// POST — create a lesson.
export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const lesson = await createLesson(ctx.sdb.tenantId, id, parsed.data);
  return json({ lesson }, 201);
}
