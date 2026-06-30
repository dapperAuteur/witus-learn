import { neonConfig, Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { seedAuthoredCourse } from "./lib/seed-authored-course";
import { SPEEDWAY_COURSE } from "./data/speedway-course";

// Seeds the "Speedway: The Greatest Spectacle in Learning" docuseries (migrated
// from CentOS) onto the ElementaryMBA school. The committed data module carries the
// cleaned, cited content (narration stage tags stripped; APA `## Sources` kept), so
// this seeder never needs CentOS. Re-seedable (upsert by courseId,slug).
// Run: pnpm seed:speedway
//
// The ElementaryMBA tenant must already exist (run `pnpm seed:tenants` first) — this
// script does NOT create tenants.
const TARGET_SLUG = "elementary-mba";

neonConfig.webSocketConstructor = ws;
const connectionString = resolveDbUrl(true);
if (!connectionString || connectionString.includes("placeholder")) {
  console.error("DATABASE_URL is not set. Put a real Neon string in .env.local.");
  process.exit(1);
}
const pool = new Pool({ connectionString });
const db = drizzle(pool, { schema, casing: "snake_case" });

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

  const instructorId = "seed-emba-instructor";
  await db
    .insert(schema.users)
    .values({ id: instructorId, email: "faculty@emba.witus.online", emailVerified: true, name: "ElementaryMBA Faculty" })
    .onConflictDoNothing();
  await db
    .insert(schema.userProfiles)
    .values({ userId: instructorId, username: "emba-faculty", displayName: "ElementaryMBA Faculty" })
    .onConflictDoNothing();
  await db
    .insert(schema.tenantMemberships)
    .values({ tenantId, userId: instructorId, role: "instructor" })
    .onConflictDoNothing();

  await db
    .insert(schema.courseCategories)
    .values({ tenantId, name: "Docuseries", sortOrder: 1 })
    .onConflictDoNothing();

  await seedAuthoredCourse(db, {
    tenantId,
    instructorId,
    slug: "speedway",
    course: SPEEDWAY_COURSE,
    category: "Docuseries",
    navigationMode: "linear",
    seasonNumber: 1,
    replaceLessons: true,
  });

  const quizzes = SPEEDWAY_COURSE.lessons.filter((l) => l.quiz).length;
  await pool.end();
  console.log(
    `Done. Speedway seeded on "${TARGET_SLUG}": ${SPEEDWAY_COURSE.lessons.length} lessons (${quizzes} quizzes).`,
  );
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
