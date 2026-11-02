import { writeFileSync } from "node:fs";
import { inArray } from "drizzle-orm";
import type { NeonDatabase } from "drizzle-orm/neon-serverless";
import * as schema from "../../src/db/schema";
import type { SeedReport } from "./seed-authored-course";

/**
 * Print the seed's drift summary and, when SEED_REPORT_PATH is set (the post-merge workflow
 * .github/workflows/seed-production.yml), write two files beside it:
 *   - SEED_REPORT_PATH: the whole report as JSON (for the job summary);
 *   - SEED_REPORT_PATH with `.courses.json`: `[{ tenantSlug, courseSlug }]` of the courses whose content
 *     this run changed, the shape `pnpm rag:index --courses-file` reads.
 * Never prints lesson text.
 */
export async function writeSeedReport(db: NeonDatabase<typeof schema>, report: SeedReport): Promise<void> {
  const open = report.drifted.filter((d) => !d.acknowledged);
  console.log(
    `Seed drift: ${report.changedCourses.length} course(s) changed, ${open.length} lesson(s) left as edited in the app` +
      `${report.drifted.length - open.length ? ` (+${report.drifted.length - open.length} already acknowledged)` : ""}` +
      `, ${report.baselined} lesson(s) baselined.`,
  );
  for (const d of open) console.log(`  edited in the app: ${d.courseSlug}/${d.lessonSlug}`);

  const path = process.env.SEED_REPORT_PATH;
  if (!path) return;
  const tenantIds = [...new Set(report.changedCourses.map((c) => c.tenantId))];
  const tenants = tenantIds.length
    ? await db.select({ id: schema.tenants.id, slug: schema.tenants.slug }).from(schema.tenants).where(inArray(schema.tenants.id, tenantIds))
    : [];
  const slugOf = new Map(tenants.map((t) => [t.id, t.slug]));
  const seen = new Set<string>();
  const courses = report.changedCourses
    .map((c) => ({ tenantSlug: slugOf.get(c.tenantId) ?? "", courseSlug: c.courseSlug }))
    .filter((c) => c.tenantSlug && !seen.has(`${c.tenantSlug}/${c.courseSlug}`) && seen.add(`${c.tenantSlug}/${c.courseSlug}`));
  writeFileSync(path, JSON.stringify({ ...report, courses }, null, 2));
  writeFileSync(path.replace(/\.json$/, "") + ".courses.json", JSON.stringify(courses, null, 2));
}
