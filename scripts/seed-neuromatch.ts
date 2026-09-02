/**
 * Seeds the four NEUROMATCH COMPANION courses onto Learn.WitUS.
 *
 * These are BAM's private study courses (plans/74). They are FOUNDATIONS courses that sit
 * underneath Neuromatch Academy's own material: the concepts, the maths substrate and the
 * vocabulary that make Neuromatch's coursebooks followable. They do not reproduce, replace or
 * summarise those coursebooks, each of which is two to three weeks of full-time work.
 *
 * Deliberately its OWN seeder rather than an entry in scripts/seed-courses.ts, so this branch does
 * not collide with concurrent edits to that file. The static registry (scripts/lib/seed-registry.ts)
 * scans every scripts/seed-*.ts, so audit-course, check-series-codes and check-standards-coverage
 * pick these up automatically with no registration step.
 *
 * PRIVATE BY DESIGN. `visibility: "private"` + `publishHoldReason` are INSERT-ONLY in
 * seedAuthoredCourse (owner-editable afterwards at /admin/pricing and /admin/courses), so a re-seed
 * never re-hides a course BAM has since published. Free by design too: personal study, not a
 * product. Because they are private they are NOT staged in STAGED_COURSES (src/lib/citations.ts);
 * stage them at the public flip, not before.
 *
 * ATTRIBUTION. Neuromatch publishes its course content under CC BY 4.0 (no NonCommercial clause),
 * so adapting it here is legitimate provided attribution, a link to the source materials, a link to
 * the licence, and a clear statement of modifications all travel with it. Every course's first
 * lesson carries that block, and it names what was changed. See scripts/data/neuromatch-*.ts.
 *
 * Run: pnpm seed:neuromatch   (or pnpm seed:neuromatch:prod)
 */

import { neonConfig, Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { seedAuthoredCourse } from "./lib/seed-authored-course";
import type { AuthoredCourse } from "./data/authored-course";
import { NEUROMATCH_COMPNEURO_COURSE } from "./data/neuromatch-compneuro-course";
import { NEUROMATCH_DEEP_LEARNING_COURSE } from "./data/neuromatch-deep-learning-course";
import { NEUROMATCH_COMP_BEHAVIOUR_COURSE } from "./data/neuromatch-comp-behaviour-course";
import { NEUROMATCH_CLIMATE_TOOLS_COURSE } from "./data/neuromatch-climate-tools-course";

const TARGET_SLUG = "learn-witus";
const INSTRUCTOR_EMAIL = "bam@awews.com";
const HOLD_REASON =
  "Private study course (plans/74). Owner-only while BAM works through it; flip to public only after a standards pass and citation staging.";

interface Entry {
  slug: string;
  course: AuthoredCourse;
  category: string;
}

const ENTRIES: Entry[] = [
  {
    slug: "computational-neuroscience-foundations",
    course: NEUROMATCH_COMPNEURO_COURSE,
    category: "Science & Math",
  },
  {
    slug: "deep-learning-foundations",
    course: NEUROMATCH_DEEP_LEARNING_COURSE,
    category: "AI & Technology",
  },
  {
    slug: "computational-behaviour-foundations",
    course: NEUROMATCH_COMP_BEHAVIOUR_COURSE,
    category: "Science & Math",
  },
  {
    slug: "computational-climate-tools-foundations",
    course: NEUROMATCH_CLIMATE_TOOLS_COURSE,
    category: "Science & Math",
  },
];

neonConfig.webSocketConstructor = ws;

async function main() {
  const connectionString = resolveDbUrl(true);
  if (!connectionString || connectionString.includes("placeholder")) {
    console.error("DATABASE_URL is not set. Put a real Neon string in .env.local.");
    process.exit(1);
  }
  const pool = new Pool({ connectionString });
  const db = drizzle(pool, { schema, casing: "snake_case" });

  try {
    const [tenant] = await db
      .select({ id: schema.tenants.id })
      .from(schema.tenants)
      .where(eq(schema.tenants.slug, TARGET_SLUG))
      .limit(1);
    if (!tenant) {
      console.error(`Tenant "${TARGET_SLUG}" missing. Run \`pnpm seed:tenants\` first.`);
      process.exit(1);
    }

    const [instructor] = await db
      .select({ id: schema.users.id })
      .from(schema.users)
      .where(eq(schema.users.email, INSTRUCTOR_EMAIL))
      .limit(1);
    if (!instructor) {
      console.error(`Instructor ${INSTRUCTOR_EMAIL} missing. Run \`pnpm seed:owner\` first.`);
      process.exit(1);
    }

    for (const entry of ENTRIES) {
      await db
        .insert(schema.courseCategories)
        .values({ tenantId: tenant.id, name: entry.category, sortOrder: 3 })
        .onConflictDoNothing();
      await seedAuthoredCourse(db, {
        tenantId: tenant.id,
        instructorId: instructor.id,
        slug: entry.slug,
        course: entry.course,
        category: entry.category,
        navigationMode: "linear",
        price: 0,
        priceType: "free",
        visibility: "private",
        publishHoldReason: HOLD_REASON,
        replaceLessons: true,
      });
      const quizzes = entry.course.lessons.filter((l) => l.quiz).length;
      console.log(
        `  ${entry.slug}: ${entry.course.lessons.length} lessons (${quizzes} quizzes) [${entry.category}]`,
      );
    }

    console.log(`Done. Seeded ${ENTRIES.length} Neuromatch companion course(s), private + free.`);
  } finally {
    await pool.end();
  }
}

main().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
