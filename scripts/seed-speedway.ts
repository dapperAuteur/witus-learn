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
import { AI_E1_MARKETING_COURSE } from "./data/ai-e1-marketing-course";
import { AI_E2_OPERATIONS_COURSE } from "./data/ai-e2-operations-course";
import { AI_E3_CUSTOMER_RESEARCH_COURSE } from "./data/ai-e3-customer-research-course";
import { AI_E4_PRODUCT_SERVICE_COURSE } from "./data/ai-e4-product-service-course";
import { AI_E5_FINANCE_ANALYTICS_CAPSTONE_COURSE } from "./data/ai-e5-finance-analytics-capstone-course";
import { WHAT_A_BUSINESS_ENTITY_IS_COURSE } from "./data/what-a-business-entity-is-course";
import { US_BUSINESS_FORMS_COURSE } from "./data/us-business-forms-course";
import { COOPERATIVES_COURSE } from "./data/cooperatives-course";
import { FINANCING_WITHOUT_ACCESS_COURSE } from "./data/financing-without-access-course";
import { FOREIGN_BUSINESS_FORMS_COURSE } from "./data/foreign-business-forms-course";
import { BUSINESS_GOVERNANCE_COURSE } from "./data/business-governance-course";
import { CHOOSE_A_FORM_CAPSTONE_COURSE } from "./data/choose-a-form-capstone-course";
import { READ_THE_STATEMENTS_COURSE } from "./data/read-the-statements-course";

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
    console.error(`Tenant "${TARGET_SLUG}" missing, run \`pnpm seed:tenants\` first.`);
    process.exit(1);
  }

  // BAM instructs every course, on every tenant — the synthetic "emba-faculty" account put
  // Speedway under /emba-faculty/... and regressed reassign:instructor on every re-seed.
  const existing = await db
    .select({ id: schema.users.id })
    .from(schema.users)
    .where(eq(schema.users.email, "bam@awews.com"))
    .limit(1);
  const instructorId = existing[0]?.id ?? "bam";
  if (!existing[0]) {
    await db
      .insert(schema.users)
      .values({ id: instructorId, email: "bam@awews.com", emailVerified: true, name: "BAM" })
      .onConflictDoNothing();
  }
  await db
    .insert(schema.userProfiles)
    .values({ userId: instructorId, username: "bam", displayName: "BAM" })
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
  // Entrepreneur AI mastery ladder (builds on F4), same "Entrepreneurship" category:
  // E1 Marketing & Content, E2 Operations & Automation, E3 Customer Research & Validation,
  // E4 Building an AI Product/Service, E5 Finance & Analytics (capstone). Cited to FTC,
  // US Copyright Office, SBA, IRS, NIST, Google PAIR, Steve Blank, CFPB.
  for (const { slug, course } of [
    { slug: "ai-e1-marketing", course: AI_E1_MARKETING_COURSE },
    { slug: "ai-e2-operations", course: AI_E2_OPERATIONS_COURSE },
    { slug: "ai-e3-customer-research", course: AI_E3_CUSTOMER_RESEARCH_COURSE },
    { slug: "ai-e4-product-service", course: AI_E4_PRODUCT_SERVICE_COURSE },
    { slug: "ai-e5-finance-analytics-capstone", course: AI_E5_FINANCE_ANALYTICS_CAPSTONE_COURSE },
  ]) {
    await seedAuthoredCourse(db, {
      tenantId,
      instructorId,
      slug,
      course,
      category: "Entrepreneurship",
      navigationMode: "linear",
      replaceLessons: true,
    });
  }

  // The two business shelves from the ElementaryMBA plan (proposals.ts, key
  // elementary-mba-emba-curriculum-plan, section 6). "How a Business Is Formed" holds the seven
  // business-formation courses shared whole from Learn.WitUS; "Business Core" holds the FIRM series,
  // starting with FIRM-01 just below.
  for (const { name, sortOrder } of [
    { name: "How a Business Is Formed", sortOrder: 5 },
    { name: "Business Core", sortOrder: 6 },
  ]) {
    await db.insert(schema.courseCategories).values({ tenantId, name, sortOrder }).onConflictDoNothing();
  }

  // FIRM-01 Read the Statements, the first course of the How a Firm Works series (FIRM), on the
  // Business Core shelf. ElementaryMBA is the series' home; Learn.WitUS shows this one course as its
  // preview (scripts/seed-courses.ts, src/lib/series-previews.ts). Brief:
  // cloud-briefs/firm-01/00-approved-brief.md (approved 2026-10-25). Tier 2. Free (BAM: free for the
  // first 100 students; the capped promotion is separate work). Public, held for the QR reviewer and
  // until ElementaryMBA's courses are vetted; the school itself stays comingSoon.
  await seedAuthoredCourse(db, {
    tenantId,
    instructorId,
    slug: "read-the-statements",
    course: READ_THE_STATEMENTS_COURSE,
    category: "Business Core",
    seriesSlug: "how-a-firm-works",
    seriesTitle: "How a Firm Works",
    seriesOrder: 1,
    seriesCode: "FIRM",
    seriesPosition: "01",
    navigationMode: "linear",
    price: 0,
    priceType: "free",
    visibility: "public",
    publishHoldReason:
      "Held until the qualified reviewer BAM has named has checked every lesson marked QR, and until ElementaryMBA's courses are vetted. Research tier 2: every figure is read from one filed 10-K (Chipotle Mexican Grill, fiscal 2025, accession 0001058090-26-000009) and every rule from SEC, CFR, IRS or SBA text.",
  });

  // Share the business-formation path from Learn.WitUS, the way seed-bvc-real.ts shares BVC Season 1:
  // same content, its own course rows, enrollment and progress on this school. These seven, and only
  // these, go to ElementaryMBA whole (FULL_SHARE_TO_ELEMENTARY_MBA in scripts/lib/seed-registry.ts,
  // BAM 2026-10-23); every other course reaches a second school only as a series' first course. The
  // series fields repeat Learn.WitUS's so the copy keeps its ENTITY codes and its /series page here.
  // Each entry carries its own series fields because the registry reads them from the entry, not the
  // call. The call's tenantId is this script's TARGET_SLUG lookup, which is what lets the registry read
  // the school; a lookup by a loop variable (seed-bvc-real.ts's shape) reads as unknown and fails.
  for (const { slug, course, seriesSlug, seriesCode, seriesOrder, seriesPosition } of [
    { slug: "what-a-business-entity-is", course: WHAT_A_BUSINESS_ENTITY_IS_COURSE, seriesSlug: "how-a-business-is-formed", seriesCode: "ENTITY", seriesOrder: 1, seriesPosition: "01" },
    { slug: "us-business-forms", course: US_BUSINESS_FORMS_COURSE, seriesSlug: "how-a-business-is-formed", seriesCode: "ENTITY", seriesOrder: 2, seriesPosition: "02" },
    { slug: "cooperatives", course: COOPERATIVES_COURSE, seriesSlug: "how-a-business-is-formed", seriesCode: "ENTITY", seriesOrder: 3, seriesPosition: "03" },
    { slug: "financing-without-access", course: FINANCING_WITHOUT_ACCESS_COURSE, seriesSlug: "how-a-business-is-formed", seriesCode: "ENTITY", seriesOrder: 4, seriesPosition: "04" },
    { slug: "foreign-business-forms", course: FOREIGN_BUSINESS_FORMS_COURSE, seriesSlug: "how-a-business-is-formed", seriesCode: "ENTITY", seriesOrder: 5, seriesPosition: "05" },
    { slug: "business-governance", course: BUSINESS_GOVERNANCE_COURSE, seriesSlug: "how-a-business-is-formed", seriesCode: "ENTITY", seriesOrder: 6, seriesPosition: "06" },
    { slug: "choose-a-form-capstone", course: CHOOSE_A_FORM_CAPSTONE_COURSE, seriesSlug: "how-a-business-is-formed", seriesCode: "ENTITY", seriesOrder: 7, seriesPosition: "99" },
  ]) {
    await seedAuthoredCourse(db, {
      tenantId,
      instructorId,
      slug,
      course,
      category: "How a Business Is Formed",
      navigationMode: "linear",
      seriesSlug,
      seriesTitle: "How a Business Is Formed",
      seriesOrder,
      seriesCode,
      seriesPosition,
    });
  }

  const speedwayQuizzes = SPEEDWAY_COURSE.lessons.filter((l) => l.quiz).length;
  const roboticsQuizzes = ROBOTICS_STEAM_COURSE.lessons.filter((l) => l.quiz).length;
  const youngMakersQuizzes = AI_YOUNG_MAKERS_COURSE.lessons.filter((l) => l.quiz).length;
  const entrepreneursQuizzes = AI_ENTREPRENEURS_COURSE.lessons.filter((l) => l.quiz).length;
  await pool.end();
  console.log(
    `Done. Seeded on "${TARGET_SLUG}": Speedway (${SPEEDWAY_COURSE.lessons.length} lessons, ${speedwayQuizzes} quizzes); ` +
      `Intro to Robotics & STEAM (${ROBOTICS_STEAM_COURSE.lessons.length} lessons, ${roboticsQuizzes} quizzes); ` +
      `Young Makers: AI for Kids (${AI_YOUNG_MAKERS_COURSE.lessons.length} lessons, ${youngMakersQuizzes} quizzes); ` +
      `AI for Entrepreneurs (${AI_ENTREPRENEURS_COURSE.lessons.length} lessons, ${entrepreneursQuizzes} quizzes); ` +
      `the 7-course business-formation path shared from Learn.WitUS; FIRM-01 Read the Statements.`,
  );
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
