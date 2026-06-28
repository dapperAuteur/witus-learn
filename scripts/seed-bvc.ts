import { neonConfig, Pool } from "@neondatabase/serverless";
import { and, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";

// Seeds sample courses for BVC + the Acme isolation tenant so the catalog and the
// isolation suite have real content. Idempotent. Run after seed:tenants:
//   pnpm seed:bvc

neonConfig.webSocketConstructor = ws;

const connectionString = resolveDbUrl(true);
if (!connectionString || connectionString.includes("placeholder")) {
  console.error("DATABASE_URL is not set. Put a real Neon string in .env.local.");
  process.exit(1);
}

const pool = new Pool({ connectionString });
const db = drizzle(pool, { schema, casing: "snake_case" });

async function tenantIdBySlug(slug: string): Promise<string | undefined> {
  const r = await db
    .select({ id: schema.tenants.id })
    .from(schema.tenants)
    .where(eq(schema.tenants.slug, slug))
    .limit(1);
  return r[0]?.id;
}

async function ensureInstructor(
  id: string,
  email: string,
  username: string,
  displayName: string,
  tenantId: string,
) {
  await db
    .insert(schema.users)
    .values({ id, email, emailVerified: true, name: displayName })
    .onConflictDoNothing();
  await db
    .insert(schema.userProfiles)
    .values({ userId: id, username, displayName })
    .onConflictDoNothing();
  await db
    .insert(schema.tenantMemberships)
    .values({ tenantId, userId: id, role: "instructor" })
    .onConflictDoNothing();
}

async function ensureCategory(tenantId: string, name: string, sortOrder: number) {
  await db
    .insert(schema.courseCategories)
    .values({ tenantId, name, sortOrder })
    .onConflictDoNothing();
}

type CourseSeed = Omit<typeof schema.courses.$inferInsert, "tenantId" | "instructorId">;

async function ensureCourse(tenantId: string, instructorId: string, data: CourseSeed) {
  const existing = await db
    .select({ id: schema.courses.id })
    .from(schema.courses)
    .where(and(eq(schema.courses.tenantId, tenantId), eq(schema.courses.slug, data.slug!)))
    .limit(1);
  if (existing[0]) {
    console.log(`  = course ${data.slug} exists`);
    return;
  }
  await db.insert(schema.courses).values({ ...data, tenantId, instructorId });
  console.log(`  + course ${data.slug}`);
}

async function main() {
  const bvc = await tenantIdBySlug("better-vice-club");
  const acme = await tenantIdBySlug("acme-academy");
  if (!bvc || !acme) {
    console.error("Tenants missing — run `pnpm seed:tenants` first.");
    process.exit(1);
  }

  // ── BVC ──
  await ensureInstructor("seed-bvc-instructor", "faculty@bettervice.club", "bvc-faculty", "BVC Faculty", bvc);
  await ensureCategory(bvc, "Daily Rituals", 1);
  await ensureCategory(bvc, "The Forbidden Leaf", 3);
  console.log("BVC courses:");
  await ensureCourse(bvc, "seed-bvc-instructor", {
    title: "Coffee",
    slug: "coffee",
    description:
      "Coffee originated in the volcanic highlands of Ethiopia — the world's second-largest traded commodity, and the economics that put $2-a-day farmers behind a $5 cup.",
    category: "Daily Rituals",
    seasonNumber: 1,
    seriesSlug: "daily-rituals",
    seriesTitle: "Daily Rituals",
    isPublished: true,
    publishedAt: new Date(),
    isFeatured: true,
    featuredOrder: 1,
  });
  await ensureCourse(bvc, "seed-bvc-instructor", {
    title: "Tea",
    slug: "tea",
    description:
      "The oldest documented tea cultivation traces to Yunnan, China. How the British tea trade reshaped the geography of India, Sri Lanka, and Kenya.",
    category: "Daily Rituals",
    seasonNumber: 1,
    seriesSlug: "daily-rituals",
    seriesTitle: "Daily Rituals",
    isPublished: true,
    publishedAt: new Date(),
  });
  await ensureCourse(bvc, "seed-bvc-instructor", {
    title: "Cannabis",
    slug: "cannabis",
    description:
      "Documented in Central Asian ritual and medicine for over 5,000 years. The political history behind its 1970 Schedule I classification.",
    category: "The Forbidden Leaf",
    seasonNumber: 3,
    seriesSlug: "forbidden-leaf",
    seriesTitle: "The Forbidden Leaf",
    requiresAgeGate: true,
    isPublished: true,
    publishedAt: new Date(),
    isFeatured: true,
    featuredOrder: 2,
  });

  // ── Acme (isolation tenant) ──
  await ensureInstructor("seed-acme-instructor", "faculty@acme.test", "acme-faculty", "Acme Faculty", acme);
  await ensureCategory(acme, "General", 1);
  console.log("Acme courses:");
  await ensureCourse(acme, "seed-acme-instructor", {
    title: "Introduction to Acme",
    slug: "intro",
    description: "A dummy Acme course. It must never appear on the BVC domain.",
    category: "General",
    isPublished: true,
    publishedAt: new Date(),
  });

  await pool.end();
  console.log("Done.");
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
