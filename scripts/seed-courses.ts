import { neonConfig, Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { seedAuthoredCourse } from "./lib/seed-authored-course";
import { EDUCATION_LEADER_COURSE } from "./data/education-leader-course";
import { CYBER_SECURITY_COURSE } from "./data/cyber-security-course";
import { CIVICS_101_COURSE } from "./data/civics-101-course";
import { AI_LITERACY_COURSE } from "./data/ai-literacy-course";
import { AI_BUILDING_COURSE } from "./data/ai-building-course";
import { COURSE_CREATION_COURSE } from "./data/course-creation-course";
import { LEARNING_HOW_TO_LEARN_COURSE } from "./data/learning-how-to-learn-course";

// Seeds authored non-language courses on their schools (Ed.L.D. on Learn.WitUS;
// cyber + FAA join here when their content lands). Re-seedable via the shared
// seedAuthoredCourse upserter. Run: pnpm seed:courses

neonConfig.webSocketConstructor = ws;
const connectionString = resolveDbUrl(true);
if (!connectionString || connectionString.includes("placeholder")) {
  console.error("DATABASE_URL is not set. Put a real Neon string in .env.local.");
  process.exit(1);
}
const pool = new Pool({ connectionString });
const db = drizzle(pool, { schema, casing: "snake_case" });

async function tenantBySlug(slug: string): Promise<string | undefined> {
  const r = await db
    .select({ id: schema.tenants.id })
    .from(schema.tenants)
    .where(eq(schema.tenants.slug, slug))
    .limit(1);
  return r[0]?.id;
}

async function ensureInstructor(
  tenantId: string,
  who: { id: string; email: string; username: string; displayName: string },
): Promise<string> {
  await db
    .insert(schema.users)
    .values({ id: who.id, email: who.email, emailVerified: true, name: who.displayName })
    .onConflictDoNothing();
  await db
    .insert(schema.userProfiles)
    .values({ userId: who.id, username: who.username, displayName: who.displayName })
    .onConflictDoNothing();
  await db
    .insert(schema.tenantMemberships)
    .values({ tenantId, userId: who.id, role: "instructor" })
    .onConflictDoNothing();
  return who.id;
}

async function main() {
  // Education Leadership (Ed.L.D.) — on the Learn.WitUS school.
  const learnWitus = await tenantBySlug("learn-witus");
  if (!learnWitus) {
    console.error("Learn.WitUS tenant missing — run `pnpm seed:tenants` first.");
    process.exit(1);
  }
  // BAM is the instructor on Learn.WitUS courses (not a synthetic faculty account).
  const instructorId = await ensureInstructor(learnWitus, {
    id: "bam",
    email: "bam@awews.com",
    username: "bam",
    displayName: "BAM",
  });
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Education Leadership", sortOrder: 2 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "harvard-ed-l-d",
    course: EDUCATION_LEADER_COURSE,
    category: "Education Leadership",
    navigationMode: "linear",
  });

  // Civics (Learn.WitUS) — general, non-partisan. US Civics 101 is the template;
  // more general courses + the per-state layer (IN, AZ, AR first) follow.
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Civics", sortOrder: 3 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "us-civics-101",
    course: CIVICS_101_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });

  // How to Create a Course (the meta-course for teachers) — on Learn.WitUS.
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Teaching", sortOrder: 4 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "how-to-create-a-course",
    course: COURSE_CREATION_COURSE,
    category: "Teaching",
    navigationMode: "linear",
  });

  // AI Literacy (F1) — the flagship AI foundation, on Learn.WitUS (cross-cutting).
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "AI & Technology", sortOrder: 5 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "ai-literacy",
    course: AI_LITERACY_COURSE,
    category: "AI & Technology",
    navigationMode: "linear",
  });

  // Learning How to Learn — the study-skills foundation, on Learn.WitUS
  // (cross-cutting; the meta-skill that makes every other course land). Cited to
  // primary cognitive-science research; points learners to FlashLearn for spaced
  // recall.
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Study Skills", sortOrder: 6 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "learning-how-to-learn",
    course: LEARNING_HOW_TO_LEARN_COURSE,
    category: "Study Skills",
    navigationMode: "linear",
  });

  // Cybersecurity — on the Trade School (staged; the school stays flags.comingSoon
  // until launch, so the course is seeded but not yet publicly browsable). Skips if
  // the Trade School tenant has not been seeded yet.
  const tradeSchool = await tenantBySlug("trade-school");
  if (tradeSchool) {
    const tradeInstructor = await ensureInstructor(tradeSchool, {
      id: "seed-trade-faculty",
      email: "faculty@trade.witus.online",
      username: "trade-faculty",
      displayName: "WitUS Trade Faculty",
    });
    await db
      .insert(schema.courseCategories)
      .values({ tenantId: tradeSchool, name: "Cybersecurity", sortOrder: 1 })
      .onConflictDoNothing();
    await seedAuthoredCourse(db, {
      tenantId: tradeSchool,
      instructorId: tradeInstructor,
      slug: "cybersecurity-get-the-job",
      course: CYBER_SECURITY_COURSE,
      category: "Cybersecurity",
      navigationMode: "linear",
    });

    // Building with AI (F2) — the builder AI foundation on the Trade School. F1
    // (AI Literacy, on Learn.WitUS) is the recommended prerequisite. Same staging:
    // seeded under the school's comingSoon flag until launch.
    await db
      .insert(schema.courseCategories)
      .values({ tenantId: tradeSchool, name: "AI & Technology", sortOrder: 2 })
      .onConflictDoNothing();
    await seedAuthoredCourse(db, {
      tenantId: tradeSchool,
      instructorId: tradeInstructor,
      slug: "building-with-ai",
      course: AI_BUILDING_COURSE,
      category: "AI & Technology",
      navigationMode: "linear",
    });
  } else {
    console.log("skip cybersecurity (trade-school tenant missing — run `pnpm seed:tenants`)");
  }

  await pool.end();
  console.log("Done.");
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
