import { neonConfig, Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { seedAuthoredCourse } from "./lib/seed-authored-course";
import { SPEEDWAY_COURSE } from "./data/speedway-course";
import { ROBOTICS_STEAM_COURSE } from "./data/robotics-steam-course";
import { AI_YOUNG_MAKERS_COURSE } from "./data/ai-young-makers-course";
import { AI_ENTREPRENEURS_COURSE } from "./data/ai-entrepreneurs-course";
import { AI_Y1_TRAIN_YOUR_MODEL_COURSE } from "./data/ai-y1-train-your-model-course";
import { AI_Y2_ROBOTICS_AI_COURSE } from "./data/ai-y2-robotics-ai-course";
import { AI_Y3_CREATIVE_AI_COURSE } from "./data/ai-y3-creative-ai-course";
import { AI_Y4_SCIENCE_FAIR_CAPSTONE_COURSE } from "./data/ai-y4-science-fair-capstone-course";

// Seeds the ElementaryMBA school's authored courses: the "Speedway: The Greatest Spectacle
// in Learning" docuseries (migrated from CentOS), the cited, kid-friendly "Intro to Robotics
// & STEAM" course, "Young Makers: AI for Kids" (F3, grades 3-8 AI literacy), and the cited,
// hype-free "AI for Entrepreneurs" (F4, teen/young-adult track). Each committed data module
// carries the cleaned, cited content (narration stage tags stripped; APA `## Sources` kept),
// so this seeder never needs CentOS. Re-seedable (upsert by courseId,slug).
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

  // Intro to Robotics & STEAM — cited, age-appropriate (grades 6-12) STEAM course on
  // the same ElementaryMBA school. The school stays flags.comingSoon until launch, so
  // this is seeded-but-gated like the Trade School courses in seed-courses.ts.
  await db
    .insert(schema.courseCategories)
    .values({ tenantId, name: "STEAM", sortOrder: 2 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId,
    instructorId,
    slug: "intro-robotics-steam",
    course: ROBOTICS_STEAM_COURSE,
    category: "STEAM",
    navigationMode: "linear",
    replaceLessons: true,
  });

  // Young Makers: AI for Kids — F3, cited, kid-level (grades 3-8) AI literacy on the same
  // ElementaryMBA school. Seeded-but-gated like Robotics & STEAM above (school comingSoon).
  await db
    .insert(schema.courseCategories)
    .values({ tenantId, name: "AI for Kids", sortOrder: 3 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId,
    instructorId,
    slug: "young-makers-ai",
    course: AI_YOUNG_MAKERS_COURSE,
    category: "AI for Kids",
    navigationMode: "linear",
    replaceLessons: true,
  });
  // Young-makers AI mastery ladder (builds on F3), same "AI for Kids" category:
  // Y1 Train Your Own Model, Y2 Robotics + AI, Y3 Creative AI, Y4 Science-Fair (capstone).
  // Cited to Teachable Machine, MIT RAISE/Day of AI, micro:bit/Arduino/NASA, Code.org,
  // Common Sense, UNICEF, US Copyright Office, C2PA, Society for Science.
  for (const { slug, course } of [
    { slug: "ai-y1-train-your-model", course: AI_Y1_TRAIN_YOUR_MODEL_COURSE },
    { slug: "ai-y2-robotics-ai", course: AI_Y2_ROBOTICS_AI_COURSE },
    { slug: "ai-y3-creative-ai", course: AI_Y3_CREATIVE_AI_COURSE },
    { slug: "ai-y4-science-fair-capstone", course: AI_Y4_SCIENCE_FAIR_CAPSTONE_COURSE },
  ]) {
    await seedAuthoredCourse(db, {
      tenantId,
      instructorId,
      slug,
      course,
      category: "AI for Kids",
      navigationMode: "linear",
      replaceLessons: true,
    });
  }

  // AI for Entrepreneurs — F4, the entrepreneurship-track AI course (cited, hype-free) for
  // ElementaryMBA's older/teen + young-adult learners. Same gating.
  await db
    .insert(schema.courseCategories)
    .values({ tenantId, name: "Entrepreneurship", sortOrder: 4 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId,
    instructorId,
    slug: "ai-for-entrepreneurs",
    course: AI_ENTREPRENEURS_COURSE,
    category: "Entrepreneurship",
    navigationMode: "linear",
    replaceLessons: true,
  });

  const speedwayQuizzes = SPEEDWAY_COURSE.lessons.filter((l) => l.quiz).length;
  const roboticsQuizzes = ROBOTICS_STEAM_COURSE.lessons.filter((l) => l.quiz).length;
  const youngMakersQuizzes = AI_YOUNG_MAKERS_COURSE.lessons.filter((l) => l.quiz).length;
  const entrepreneursQuizzes = AI_ENTREPRENEURS_COURSE.lessons.filter((l) => l.quiz).length;
  await pool.end();
  console.log(
    `Done. Seeded on "${TARGET_SLUG}": Speedway (${SPEEDWAY_COURSE.lessons.length} lessons, ${speedwayQuizzes} quizzes); ` +
      `Intro to Robotics & STEAM (${ROBOTICS_STEAM_COURSE.lessons.length} lessons, ${roboticsQuizzes} quizzes); ` +
      `Young Makers: AI for Kids (${AI_YOUNG_MAKERS_COURSE.lessons.length} lessons, ${youngMakersQuizzes} quizzes); ` +
      `AI for Entrepreneurs (${AI_ENTREPRENEURS_COURSE.lessons.length} lessons, ${entrepreneursQuizzes} quizzes).`,
  );
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
