import { neonConfig, Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { seedAuthoredCourse } from "./lib/seed-authored-course";
import type { AuthoredCourse } from "./data/authored-course";
import { READ_YOUR_BODY_COURSE } from "./data/read-your-body-course";
import { NASM_CES_COURSE } from "./data/nasm-ces-course";
import { NASM_CPT_COURSE } from "./data/nasm-cpt-course";
import { NASM_CNC_COURSE } from "./data/nasm-cnc-course";
import { ECS_FOUNDATIONS_COURSE } from "./data/ecs-foundations-course";
import { ECS_FITNESS_COURSE } from "./data/ecs-fitness-course";
import { ECS_NUTRITION_COURSE } from "./data/ecs-nutrition-course";
import { ECS_NEUROSCIENCE_COURSE } from "./data/ecs-neuroscience-course";

// Seeds the HEALTH / FITNESS courses migrated from CentOS into a witus tenant.
// The committed data modules under scripts/data/ carry the cleaned, cited content
// (stage tags stripped; APA `## Sources` kept), so this seeder never needs CentOS.
// Re-seedable: seedAuthoredCourse upserts lessons by (courseId, slug), so editing a
// data module and re-running updates lessons in place (IDs/embeddings/progress safe).
// Run: pnpm seed:health
//
// TARGET TENANT — these courses currently live on the existing Learn.WitUS school.
// BAM will later spin up a dedicated health/longevity brand and we will re-home them
// (change TARGET_SLUG and re-run). The tenant must already exist (run
// `pnpm seed:tenants` first) — this script does NOT create tenants.
const TARGET_SLUG = "learn-witus";

neonConfig.webSocketConstructor = ws;
const connectionString = resolveDbUrl(true);
if (!connectionString || connectionString.includes("placeholder")) {
  console.error("DATABASE_URL is not set. Put a real Neon string in .env.local.");
  process.exit(1);
}
const pool = new Pool({ connectionString });
const db = drizzle(pool, { schema, casing: "snake_case" });

interface HealthCourse {
  slug: string;
  course: AuthoredCourse;
  category: string;
}

// Categories group the courses on the school. ECS = Endocannabinoid System.
const COURSES: HealthCourse[] = [
  { slug: "read-your-bodys-data", course: READ_YOUR_BODY_COURSE, category: "Health & Longevity" },
  { slug: "nasm-cpt", course: NASM_CPT_COURSE, category: "Fitness Certification" },
  { slug: "nasm-ces", course: NASM_CES_COURSE, category: "Fitness Certification" },
  { slug: "nasm-cnc", course: NASM_CNC_COURSE, category: "Fitness Certification" },
  { slug: "ecs-foundations", course: ECS_FOUNDATIONS_COURSE, category: "Endocannabinoid System" },
  { slug: "ecs-fitness", course: ECS_FITNESS_COURSE, category: "Endocannabinoid System" },
  { slug: "ecs-nutrition", course: ECS_NUTRITION_COURSE, category: "Endocannabinoid System" },
  { slug: "ecs-neuroscience", course: ECS_NEUROSCIENCE_COURSE, category: "Endocannabinoid System" },
];

async function ensureInstructor(tenantId: string): Promise<string> {
  // BAM owns + instructs every course (see MEMORY: BAM identity). Reuse a stable
  // seed instructor id so this is idempotent and never collides on the unique email.
  const id = "seed-health-instructor";
  await db
    .insert(schema.users)
    .values({ id, email: "faculty@health.witus.online", emailVerified: true, name: "WitUS Health Faculty" })
    .onConflictDoNothing();
  await db
    .insert(schema.userProfiles)
    .values({ userId: id, username: "witus-health", displayName: "WitUS Health Faculty" })
    .onConflictDoNothing();
  await db
    .insert(schema.tenantMemberships)
    .values({ tenantId, userId: id, role: "instructor" })
    .onConflictDoNothing();
  return id;
}

async function main() {
  const t = await db
    .select({ id: schema.tenants.id })
    .from(schema.tenants)
    .where(eq(schema.tenants.slug, TARGET_SLUG))
    .limit(1);
  const tenantId = t[0]?.id;
  if (!tenantId) {
    console.error(`Tenant "${TARGET_SLUG}" missing — run \`pnpm seed:tenants\` first.`);
    process.exit(1);
  }

  const instructorId = await ensureInstructor(tenantId);

  // Course categories for the health courses (idempotent).
  const categories = [...new Set(COURSES.map((c) => c.category))];
  for (let i = 0; i < categories.length; i++) {
    await db
      .insert(schema.courseCategories)
      .values({ tenantId, name: categories[i], sortOrder: 10 + i })
      .onConflictDoNothing();
  }

  for (const c of COURSES) {
    await seedAuthoredCourse(db, {
      tenantId,
      instructorId,
      slug: c.slug,
      course: c.course,
      category: c.category,
      navigationMode: "linear",
      replaceLessons: true,
    });
    const quizzes = c.course.lessons.filter((l) => l.quiz).length;
    console.log(`  ${c.slug}: ${c.course.lessons.length} lessons (${quizzes} quizzes) [${c.category}]`);
  }

  await pool.end();
  console.log(`\nDone. ${COURSES.length} health courses seeded on "${TARGET_SLUG}".`);
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
