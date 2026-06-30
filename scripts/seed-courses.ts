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
import { US_CONSTITUTION_COURSE } from "./data/us-constitution-course";
import { STATE_VS_FEDERAL_COURSE } from "./data/state-vs-federal-course";
import { US_STATE_LOCAL_GOV_COURSE } from "./data/us-state-local-gov-course";
import { HOW_TO_RUN_COURSE } from "./data/how-to-run-course";
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
  // Reuse the real user when the email is already taken (e.g. BAM has logged in, so an
  // auth-generated id owns bam@awews.com). Inserting the synthetic id would conflict on
  // the email, leave no row for that id, and the membership FK would fail. Matching by
  // email keeps course ownership on the real account and makes this idempotent.
  const existing = await db
    .select({ id: schema.users.id })
    .from(schema.users)
    .where(eq(schema.users.email, who.email))
    .limit(1);
  const userId = existing[0]?.id ?? who.id;
  if (!existing[0]) {
    await db
      .insert(schema.users)
      .values({ id: who.id, email: who.email, emailVerified: true, name: who.displayName })
      .onConflictDoNothing();
  }
  await db
    .insert(schema.userProfiles)
    .values({ userId, username: who.username, displayName: who.displayName })
    .onConflictDoNothing();
  await db
    .insert(schema.tenantMemberships)
    .values({ tenantId, userId, role: "instructor" })
    .onConflictDoNothing();
  return userId;
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
  // US Constitution 101 — a deeper, document-driven companion to US Civics 101
  // (same Civics category, same non-partisan + cited standard). Coming-soon gating
  // is handled at the school/UI level; the course is seeded published like civics.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "us-constitution-101",
    course: US_CONSTITUTION_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // State vs Federal Power — a federalism-focused companion in the Civics category
  // (same non-partisan + cited standard). Goes deeper than US Civics 101 on how the
  // Constitution divides power between the national government and the states.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "state-vs-federal",
    course: STATE_VS_FEDERAL_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // US, State & Local Government: Who Does What — the PRACTICAL civic-engagement angle
  // (same Civics category, same non-partisan + cited standard). Distinct from its three
  // siblings: it doesn't re-argue the legal division of power (that's state-vs-federal),
  // re-teach the document (us-constitution-101), or re-do the system overview (us-civics-101).
  // It stays on "what each LEVEL actually does day-to-day, and how a person engages with it."
  // The authoritative-values rule is load-bearing: LOCAL structure VARIES by state, so the
  // course says so and cites the 2022 Census of Governments rather than asserting one model.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "us-state-local-government",
    course: US_STATE_LOCAL_GOV_COURSE,
    category: "Civics",
    navigationMode: "linear",
  });
  // How to Run for Office — practical + strictly non-partisan (the *process*, not who
  // should win). Same Civics category and cited standard. The authoritative-values rule
  // is load-bearing: eligibility, ballot-access (signatures/fees), and state/local
  // contribution limits VARY by office/state, so the course names the rule + points to the
  // source (FEC, USA.gov, NCSL, Ballotpedia) rather than asserting one number as universal.
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "how-to-run-for-office",
    course: HOW_TO_RUN_COURSE,
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

  // Cybersecurity — consolidated onto Learn.WitUS (was on the Trade School). BAM is the
  // instructor, like the other Learn.WitUS courses.
  await db
    .insert(schema.courseCategories)
    .values({ tenantId: learnWitus, name: "Cybersecurity", sortOrder: 7 })
    .onConflictDoNothing();
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "cybersecurity-get-the-job",
    course: CYBER_SECURITY_COURSE,
    category: "Cybersecurity",
    navigationMode: "linear",
  });

  // Building with AI (F2) — also consolidated onto Learn.WitUS, in the shared
  // "AI & Technology" category alongside AI Literacy (F1, the recommended prerequisite).
  await seedAuthoredCourse(db, {
    tenantId: learnWitus,
    instructorId,
    slug: "building-with-ai",
    course: AI_BUILDING_COURSE,
    category: "AI & Technology",
    navigationMode: "linear",
  });

  await pool.end();
  console.log("Done.");
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
