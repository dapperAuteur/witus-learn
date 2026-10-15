import { z } from "zod";
import { apiContext, canEditCourse, errorJson, json } from "@/lib/api";
import { addLaunchTodo, deleteLaunchTodo, updateLaunchTodo } from "@/db/queries/release-followups";

type Params = { params: Promise<{ id: string }> };

// /api/courses/[id]/launch-todos: the items a course's editors add to its launch to-do list (its
// teacher, this school's admin, the platform owner; canEditCourse decides, the same gate as every
// other authoring route). The course resolves through the scoped DAL, so another school's course id
// is a 404, and every write names the tenant AND the course.
//
// The committed follow-ups (src/lib/release-followups.ts) are not touched here: they are BAM's, and
// close at /api/admin/follow-ups.

const url = z
  .string()
  .trim()
  .max(500)
  .refine((s) => s === "" || /^https?:\/\//i.test(s), "Use a full web address starting with http");

const AddSchema = z.object({
  kind: z.enum(["task", "blog-post"]),
  title: z.string().trim().min(1).max(200),
  blogName: z.string().trim().max(120).optional(),
  postUrl: url.optional(),
  dueWhen: z.enum(["seeded", "scheduled", "live"]),
});

const PatchSchema = z.object({
  todoId: z.string().uuid(),
  status: z.enum(["open", "done", "skipped"]).optional(),
  note: z.string().trim().max(2000).optional(),
  postUrl: url.optional(),
});

const DeleteSchema = z.object({ todoId: z.string().uuid() });

async function load(params: Params["params"]) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return { error: errorJson("Please sign in first.", 401) } as const;
  const course = await sdb.getCourseById(id);
  if (!course) return { error: errorJson("Not found", 404) } as const;
  if (!(await canEditCourse(session, sdb.tenantId, course))) return { error: errorJson("Not found", 404) } as const;
  return { sdb, session, course } as const;
}

export async function POST(req: Request, { params }: Params) {
  const ctx = await load(params);
  if ("error" in ctx) return ctx.error;
  const parsed = AddSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson(parsed.error.issues[0]?.message ?? "Invalid input", 400);
  const v = parsed.data;
  // A blog post is the case the list exists for, and "publish the post" means nothing without
  // saying WHICH blog. The post URL can come later, once it exists.
  if (v.kind === "blog-post" && !v.blogName) return errorJson("Name the blog the post goes on", 400);
  const row = await addLaunchTodo({
    tenantId: ctx.sdb.tenantId,
    courseId: ctx.course.id,
    kind: v.kind,
    title: v.title,
    blogName: v.kind === "blog-post" ? (v.blogName ?? null) : null,
    postUrl: v.postUrl || null,
    dueWhen: v.dueWhen,
    createdBy: ctx.session.user.id,
  });
  return json({ id: row.id }, 201);
}

export async function PATCH(req: Request, { params }: Params) {
  const ctx = await load(params);
  if ("error" in ctx) return ctx.error;
  const parsed = PatchSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson(parsed.error.issues[0]?.message ?? "Invalid input", 400);
  const v = parsed.data;
  const note = v.note?.trim() ?? "";
  // Same rule as every other closable list here: closing says what was done.
  if (v.status && v.status !== "open" && !note) {
    return errorJson("Say what was done (a link, what changed) before closing it", 400);
  }
  const row = await updateLaunchTodo(ctx.sdb.tenantId, ctx.course.id, v.todoId, {
    ...(v.status ? { status: v.status } : {}),
    ...(v.status ? { note: v.status === "open" ? null : note } : {}),
    ...(v.postUrl !== undefined ? { postUrl: v.postUrl || null } : {}),
    decidedBy: ctx.session.user.id,
  });
  if (!row) return errorJson("Not found", 404);
  return json({ id: row.id, status: row.status, note: row.note, postUrl: row.postUrl });
}

export async function DELETE(req: Request, { params }: Params) {
  const ctx = await load(params);
  if ("error" in ctx) return ctx.error;
  const parsed = DeleteSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const ok = await deleteLaunchTodo(ctx.sdb.tenantId, ctx.course.id, parsed.data.todoId);
  return ok ? json({ ok: true }) : errorJson("Not found", 404);
}
