// seed:well — the WELL wellness-coaching program (plans/67), BAM's PRIVATE study path.
//
//   pnpm seed:well
//
// Unlike seed-health.ts (which imports gitignored generated modules and is excluded from
// typecheck), this seeder is fully typechecked: WELL courses are hand-authored, committed data
// modules built against verified research dossiers.
//
// Every course seeds with `visibility: "private"` (INSERT-ONLY, so the later public flip in the
// admin UI survives every re-seed) and explicit literal series codes, which keeps
// check-series-codes able to see them. Category and instructor match the health family.

import { neonConfig, Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { seedAuthoredCourse } from "./lib/seed-authored-course";
import { resolveDbUrl } from "./db-url";
import { WELL_ORIENTATION_SCOPE_COURSE } from "./data/well-orientation-scope-course";
import { WELL_COACHING_PSYCHOLOGY_COURSE } from "./data/well-coaching-psychology-course";
import { WELL_COACHING_MOVEMENT_COURSE } from "./data/well-coaching-movement-course";
import { WELL_COACHING_NUTRITION_COURSE } from "./data/well-coaching-nutrition-course";
import { WELL_RECOVERY_STRESS_COURSE } from "./data/well-recovery-stress-course";
import { WELL_SLEEP_COURSE } from "./data/well-sleep-course";
import { WELL_MENTAL_WELLBEING_COURSE } from "./data/well-mental-wellbeing-course";
import { WELL_MOVEMENT_LONGEVITY_COURSE } from "./data/well-movement-longevity-course";
import { WELL_CENTENARIAN_CAPSTONE_COURSE } from "./data/well-centenarian-capstone-course";

const TARGET_SLUG = "learn-witus";
const INSTRUCTOR_EMAIL = "bam@awews.com";
const HOLD_REASON = "Private study program (plans/67). Owner-only until the public flip.";

async function main() {
  const url = resolveDbUrl(true);
  if (!url) {
    console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED).");
    process.exit(1);
  }
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema });

  const [tenant] = await db
    .select({ id: schema.tenants.id })
    .from(schema.tenants)
    .where(eq(schema.tenants.slug, TARGET_SLUG))
    .limit(1);
  if (!tenant) {
    console.error(`Tenant "${TARGET_SLUG}" not found. Run seed:tenants first.`);
    await pool.end();
    process.exit(1);
  }

  const [instructor] = await db
    .select({ id: schema.users.id })
    .from(schema.users)
    .where(eq(schema.users.email, INSTRUCTOR_EMAIL))
    .limit(1);
  if (!instructor) {
    console.error(`Instructor ${INSTRUCTOR_EMAIL} not found. Sign in once, then re-run.`);
    await pool.end();
    process.exit(1);
  }

  await seedAuthoredCourse(db, {
    tenantId: tenant.id,
    instructorId: instructor.id,
    slug: "well-orientation-scope",
    course: WELL_ORIENTATION_SCOPE_COURSE,
    category: "Health & Longevity",
    navigationMode: "linear",
    seriesSlug: "well-wellness-coaching",
    seriesTitle: "WELL: Wellness Coaching",
    seriesOrder: 1,
    seriesCode: "WELL",
    seriesPosition: "00",
    visibility: "private",
    publishHoldReason: HOLD_REASON,
    replaceLessons: true,
  });

  await seedAuthoredCourse(db, {
    tenantId: tenant.id,
    instructorId: instructor.id,
    slug: "well-coaching-psychology",
    course: WELL_COACHING_PSYCHOLOGY_COURSE,
    category: "Health & Longevity",
    navigationMode: "linear",
    seriesSlug: "well-wellness-coaching",
    seriesTitle: "WELL: Wellness Coaching",
    seriesOrder: 2,
    seriesCode: "WELL",
    seriesPosition: "01",
    visibility: "private",
    publishHoldReason: HOLD_REASON,
    replaceLessons: true,
  });

  await seedAuthoredCourse(db, {
    tenantId: tenant.id,
    instructorId: instructor.id,
    slug: "well-coaching-movement",
    course: WELL_COACHING_MOVEMENT_COURSE,
    category: "Health & Longevity",
    navigationMode: "linear",
    seriesSlug: "well-wellness-coaching",
    seriesTitle: "WELL: Wellness Coaching",
    seriesOrder: 3,
    seriesCode: "WELL",
    seriesPosition: "02",
    visibility: "private",
    publishHoldReason: HOLD_REASON,
    replaceLessons: true,
  });

  await seedAuthoredCourse(db, {
    tenantId: tenant.id,
    instructorId: instructor.id,
    slug: "well-coaching-nutrition",
    course: WELL_COACHING_NUTRITION_COURSE,
    category: "Health & Longevity",
    navigationMode: "linear",
    seriesSlug: "well-wellness-coaching",
    seriesTitle: "WELL: Wellness Coaching",
    seriesOrder: 4,
    seriesCode: "WELL",
    seriesPosition: "03",
    visibility: "private",
    publishHoldReason: HOLD_REASON,
    replaceLessons: true,
  });

  await seedAuthoredCourse(db, {
    tenantId: tenant.id,
    instructorId: instructor.id,
    slug: "well-recovery-stress",
    course: WELL_RECOVERY_STRESS_COURSE,
    category: "Health & Longevity",
    navigationMode: "linear",
    seriesSlug: "well-wellness-coaching",
    seriesTitle: "WELL: Wellness Coaching",
    seriesOrder: 5,
    seriesCode: "WELL",
    seriesPosition: "04",
    visibility: "private",
    publishHoldReason: HOLD_REASON,
    replaceLessons: true,
  });

  await seedAuthoredCourse(db, {
    tenantId: tenant.id,
    instructorId: instructor.id,
    slug: "well-sleep",
    course: WELL_SLEEP_COURSE,
    category: "Health & Longevity",
    navigationMode: "linear",
    seriesSlug: "well-wellness-coaching",
    seriesTitle: "WELL: Wellness Coaching",
    seriesOrder: 6,
    seriesCode: "WELL",
    seriesPosition: "05",
    visibility: "private",
    publishHoldReason: HOLD_REASON,
    replaceLessons: true,
  });

  await seedAuthoredCourse(db, {
    tenantId: tenant.id,
    instructorId: instructor.id,
    slug: "well-mental-wellbeing",
    course: WELL_MENTAL_WELLBEING_COURSE,
    category: "Health & Longevity",
    navigationMode: "linear",
    seriesSlug: "well-wellness-coaching",
    seriesTitle: "WELL: Wellness Coaching",
    seriesOrder: 7,
    seriesCode: "WELL",
    seriesPosition: "06",
    visibility: "private",
    publishHoldReason: HOLD_REASON,
    replaceLessons: true,
  });

  await seedAuthoredCourse(db, {
    tenantId: tenant.id,
    instructorId: instructor.id,
    slug: "well-movement-longevity",
    course: WELL_MOVEMENT_LONGEVITY_COURSE,
    category: "Health & Longevity",
    navigationMode: "linear",
    seriesSlug: "well-wellness-coaching",
    seriesTitle: "WELL: Wellness Coaching",
    seriesOrder: 8,
    seriesCode: "WELL",
    seriesPosition: "07",
    visibility: "private",
    publishHoldReason: HOLD_REASON,
    replaceLessons: true,
  });

  await seedAuthoredCourse(db, {
    tenantId: tenant.id,
    instructorId: instructor.id,
    slug: "well-centenarian-capstone",
    course: WELL_CENTENARIAN_CAPSTONE_COURSE,
    category: "Health & Longevity",
    navigationMode: "linear",
    seriesSlug: "well-wellness-coaching",
    seriesTitle: "WELL: Wellness Coaching",
    seriesOrder: 9,
    seriesCode: "WELL",
    seriesPosition: "99",
    visibility: "private",
    publishHoldReason: HOLD_REASON,
    replaceLessons: true,
  });

  await pool.end();
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
