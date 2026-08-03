import { and, eq } from "drizzle-orm";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { seedAuthoredCourse } from "./lib/seed-authored-course";
import { BVC_SOMMELIER_WINE_COURSE } from "./data/bvc-sommelier-wine-course";
import { BVC_SOMMELIER_COFFEE_COURSE } from "./data/bvc-sommelier-coffee-course";
import { BVC_SOMMELIER_CHOCOLATE_COURSE } from "./data/bvc-sommelier-chocolate-course";

// Seeds the BVC Sommelier series (plans/53-bvc-sommelier-series-wine.md) onto the BVC tenant.
// Wine is course #1; chocolate, coffee, tea, beer, whiskey, rum and cannabis follow, and each one
// registers here alongside it. Idempotent: seedAuthoredCourse upserts lessons by (courseId, slug)
// so lesson IDs, embeddings and learner progress survive a re-seed.
//
// Run after seed:tenants:  pnpm seed:sommelier
//
// Two things about this series that are deliberate and load bearing:
//   * requiresAgeGate is TRUE on every alcohol course here, matching how BVC Season 2 and 3 are
//     handled. The no-alcohol path inside the content is a parallel drill, NOT a reason to drop
//     the gate: the course still instructs a reader to buy and taste wine.
//   * freePreviewCount is 3 rather than the default 1. Lesson 1 is housekeeping (what the course
//     is, what it refuses to claim, how flights work), so previewing only that would put the
//     paywall in front of every piece of actual teaching.

neonConfig.webSocketConstructor = ws;

const connectionString = resolveDbUrl(true);
if (!connectionString || connectionString.includes("placeholder")) {
  console.error("DATABASE_URL is not set. Put a real Neon string in .env.local.");
  process.exit(1);
}

const pool = new Pool({ connectionString });
const db = drizzle(pool, { schema, casing: "snake_case" });

const SERIES_SLUG = "bvc-taster";
const SERIES_TITLE = "BVC Taster";
const CATEGORY = "BVC Taster";

async function tenantBySlug(slug: string): Promise<string | undefined> {
  const r = await db
    .select({ id: schema.tenants.id })
    .from(schema.tenants)
    .where(eq(schema.tenants.slug, slug))
    .limit(1);
  return r[0]?.id;
}

// Match by email first: if BAM has logged in, an auth-generated id already owns bam@awews.com, so
// inserting the synthetic id would no-op on the unique email and leave the membership FK pointing
// at a row that does not exist. Same guard as every other seeder in this repo.
async function ensureInstructor(tenantId: string): Promise<string> {
  const who = { id: "bam", email: "bam@awews.com", username: "bam", displayName: "BAM" };
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


// Renamed 2026-08-03: "Sommelier" is wine's word, and the other vices' real titles (Cicerone,
// Q Grader, Interpener) are owned certification marks this course must not borrow. The series is
// now "Taster", which is plain English and unowned; each course explains the real title for its
// vice inside lesson 1.
//
// This renames IN PLACE rather than letting the seeder create new rows beside the old ones. A fresh
// insert would orphan the existing courses with their lessons, enrolments, progress and embeddings
// still attached, and leave two copies of every course in the catalog. Slug is the only thing that
// changes; every id survives.
const RENAMES: Record<string, string> = {
  "bvc-sommelier-wine": "bvc-taster-wine",
  "bvc-sommelier-coffee": "bvc-taster-coffee",
  "bvc-sommelier-chocolate": "bvc-taster-chocolate",
};

async function renameLegacySlugs(tenantId: string): Promise<void> {
  for (const [oldSlug, newSlug] of Object.entries(RENAMES)) {
    const [existingNew] = await db
      .select({ id: schema.courses.id })
      .from(schema.courses)
      .where(and(eq(schema.courses.tenantId, tenantId), eq(schema.courses.slug, newSlug)))
      .limit(1);
    if (existingNew) continue; // already renamed on a previous run
    const [old] = await db
      .select({ id: schema.courses.id })
      .from(schema.courses)
      .where(and(eq(schema.courses.tenantId, tenantId), eq(schema.courses.slug, oldSlug)))
      .limit(1);
    if (!old) continue;
    await db.update(schema.courses).set({ slug: newSlug }).where(eq(schema.courses.id, old.id));
    console.log(`~ renamed ${oldSlug} -> ${newSlug} (course id preserved)`);
  }
}

async function main() {
  // The tenant slug is "better-vice-club", NOT "bvc". `bvc` is only the content directory name
  // (content/bvc/) and the informal name in comments; seed-tenants.ts is the authority, and
  // seed-bvc.ts / seed-bvc-real.ts both resolve the same string.
  const bvc = await tenantBySlug("better-vice-club");
  if (!bvc) {
    console.error("Better Vice Club tenant missing, run `pnpm seed:tenants` first.");
    process.exit(1);
  }

  await renameLegacySlugs(bvc);

  const instructorId = await ensureInstructor(bvc);

  await db
    .insert(schema.courseCategories)
    .values({ tenantId: bvc, name: CATEGORY, sortOrder: 4 })
    .onConflictDoNothing();

  console.log("BVC Sommelier series:");

  await seedAuthoredCourse(db, {
    tenantId: bvc,
    instructorId,
    slug: "bvc-taster-wine",
    seriesOrder: 1,
    course: BVC_SOMMELIER_WINE_COURSE,
    category: CATEGORY,
    navigationMode: "linear",
    seriesSlug: SERIES_SLUG,
    seriesTitle: SERIES_TITLE,
    requiresAgeGate: true,
    freePreviewCount: 3,
  });

  // Coffee is the series' first UN-GATED course, deliberately: wine sits behind a 21+ wall, so the
  // series needed a front door that does not. No requiresAgeGate here, and that omission is the
  // decision rather than an oversight.
  await seedAuthoredCourse(db, {
    tenantId: bvc,
    instructorId,
    slug: "bvc-taster-coffee",
    seriesOrder: 2,
    course: BVC_SOMMELIER_COFFEE_COURSE,
    category: CATEGORY,
    navigationMode: "linear",
    seriesSlug: SERIES_SLUG,
    seriesTitle: SERIES_TITLE,
    freePreviewCount: 3,
  });

  // Chocolate, also un-gated.
  await seedAuthoredCourse(db, {
    tenantId: bvc,
    instructorId,
    slug: "bvc-taster-chocolate",
    seriesOrder: 3,
    course: BVC_SOMMELIER_CHOCOLATE_COURSE,
    category: CATEGORY,
    navigationMode: "linear",
    seriesSlug: SERIES_SLUG,
    seriesTitle: SERIES_TITLE,
    freePreviewCount: 3,
  });

  await pool.end();
  console.log("Done. Set the price and the vetted state in the admin UI.");
}

main().catch(async (e) => {
  console.error(e);
  await pool.end();
  process.exit(1);
});
