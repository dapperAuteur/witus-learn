import { z } from "zod";
import { apiContext, errorJson, isTenantInstructor, json } from "@/lib/api";
import { createCourse } from "@/db/queries/authoring";
import type { CatalogQuery } from "@/db/queries/catalog";

// GET /api/courses — tenant-scoped catalog list. Public; only published courses.
// Filters: ?q= &category= &series= &featured=true &sort=newest|title|featured
export async function GET(req: Request) {
  const { sdb } = await apiContext(); // 404s on an unknown host
  const sp = new URL(req.url).searchParams;

  const sortParam = sp.get("sort");
  const opts: CatalogQuery = {
    q: sp.get("q") ?? undefined,
    category: sp.get("category") ?? undefined,
    seriesSlug: sp.get("series") ?? undefined,
    featured: sp.get("featured") === "true" || undefined,
    sort:
      sortParam === "title" || sortParam === "featured" || sortParam === "newest"
        ? sortParam
        : undefined,
  };

  const courses = await sdb.listCourses(opts);
  return json({ courses });
}

const CreateCourseSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().max(5000).optional(),
  category: z.string().max(120).optional(),
  seasonNumber: z.number().int().min(0).max(99).optional(),
  seriesSlug: z.string().max(120).optional(),
  seriesTitle: z.string().max(200).optional(),
  navigationMode: z.enum(["linear", "cyoa"]).optional(),
  isSequential: z.boolean().optional(),
  requiresAgeGate: z.boolean().optional(),
  visibility: z.enum(["public", "members", "scheduled"]).optional(),
});

// POST /api/courses — instructor creates a course in the current tenant.
export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!(await isTenantInstructor(session, sdb.tenantId))) return errorJson("Forbidden", 403);

  const body = await req.json().catch(() => null);
  const parsed = CreateCourseSchema.safeParse(body);
  if (!parsed.success) return errorJson("Invalid input", 400);

  const course = await createCourse(sdb.tenantId, session!.user.id, parsed.data);
  return json({ course }, 201);
}
