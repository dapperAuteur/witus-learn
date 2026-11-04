import { z } from "zod";
import { apiContext, checkEditableCourse, errorJson, json } from "@/lib/api";
import { updateCourse } from "@/db/queries/authoring";
import { crossroadsEmbedderConfigured, getCrossroadsStatus } from "@/lib/cyoa/crossroads-index";
import {
  BULK_NAVIGATION_MAX,
  mapLimit,
  summarizeBulkNavigation,
  type BulkNavigationResult,
} from "@/lib/bulk-navigation";

// POST /api/courses/bulk-navigation: set navigation (linear or CYOA) on several courses at once (BAM,
// 2026-11-04). Each course gets exactly the check the single-course PATCH /api/courses/[id] does
// (checkEditableCourse: this school's course, and the caller is its instructor, the school's brand_admin or the
// platform owner; an owner-only course admits no brand_admin), so one request can carry a mixed selection and
// answers per course. A refused course is reported by id only: never its title, so a refusal confirms nothing.
//
// Switching to CYOA does NOT embed the crossroads here. One request embedding many courses' lessons would run
// past a serverless function's time budget and Mistral's per-minute pacing; the paced backfill already exists
// (Actions, Seed production courses, cyoa "needing"; OPERATING.md 3c), as does each course's Re-index
// crossroads button. Instead every CYOA course in the reply carries its crossroads status, and the catalog says
// how many still need embeddings and how to run the backfill. Until then those lessons show Continue and
// Unexpected path, just no Related picks.
const Body = z.object({
  courseIds: z.array(z.string().uuid()).min(1).max(BULK_NAVIGATION_MAX),
  navigationMode: z.enum(["linear", "cyoa"]),
});

export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const { navigationMode } = parsed.data;
  const ids = [...new Set(parsed.data.courseIds)];

  const results = await mapLimit(ids, 6, async (courseId): Promise<BulkNavigationResult> => {
    try {
      const checked = await checkEditableCourse(sdb, session, courseId);
      if ("status" in checked) return { courseId, status: checked.status === 404 ? "not-found" : "forbidden" };
      const { course } = checked;
      let status: BulkNavigationResult["status"] = "unchanged";
      if (course.navigationMode !== navigationMode) {
        const updated = await updateCourse(sdb.tenantId, courseId, { navigationMode });
        if (!updated) return { courseId, status: "not-found" };
        status = "updated";
      }
      // A failed status read must not turn a saved switch into a "failed" row; the course page shows it anyway.
      const crossroads =
        navigationMode === "cyoa" ? await getCrossroadsStatus(courseId).catch(() => undefined) : undefined;
      return { courseId, status, title: course.title, ...(crossroads ? { crossroads } : {}) };
    } catch (err) {
      console.error("bulk-navigation: a course failed", courseId, err);
      return { courseId, status: "failed" };
    }
  });

  return json({
    navigationMode,
    results,
    summary: summarizeBulkNavigation(results),
    crossroadsKeyConfigured: crossroadsEmbedderConfigured(),
  });
}
