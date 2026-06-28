import { NextResponse } from "next/server";
import { getScopedDb } from "@/db/scoped";
import type { CatalogQuery } from "@/db/queries/catalog";

// GET /api/courses — tenant-scoped catalog list. Public; only published courses.
// Filters: ?q= &category= &series= &featured=true &sort=newest|title|featured
export async function GET(req: Request) {
  const sdb = await getScopedDb(); // 404s on an unknown host
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
  return NextResponse.json({ courses });
}
