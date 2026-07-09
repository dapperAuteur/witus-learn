import { neonConfig, Pool } from "@neondatabase/serverless";
import { and, asc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";

// Ensures the shared demo account exists (brand_admin on the Acme tenant ONLY) and gives
// it a small baseline of enrolled/completed content so a fresh "Try the demo" visitor
// doesn't land in an empty sandbox. Idempotent. Run: pnpm seed:demo
//
// This mirrors ensureDemoUser()/seedDemoBaseline() in src/db/queries/demo.ts — the source
// of truth used by the app (demo-login + the nightly cron reset). It's duplicated here
// rather than imported because scripts in this repo run under plain `tsx` (no "@/*" path
// alias resolution — see every other scripts/seed-*.ts, which all build their own
// pool/db instead of importing src/db/client). Keep the two in sync if either changes.
//
// Like every seed script, DEMO_VISITOR_USER_EMAIL is read directly from process.env
// (loaded by --env-file=.env.local), not through src/lib/env.ts.

neonConfig.webSocketConstructor = ws;

const connectionString = resolveDbUrl(true);
if (!connectionString || connectionString.includes("placeholder")) {
  console.error("DATABASE_URL is not set. Put a real Neon string in .env.local.");
  process.exit(1);
}

const pool = new Pool({ connectionString });
const db = drizzle(pool, { schema, casing: "snake_case" });

const DEMO_TENANT_SLUG = "acme-academy";
const DEMO_USER_ID = "demo-teacher";

async function main() {
  const email = process.env.DEMO_VISITOR_USER_EMAIL;
  if (!email) {
    console.error("DEMO_VISITOR_USER_EMAIL is not set — nothing to seed. Set it in .env.local.");
    process.exit(1);
  }

  const [tenant] = await db
    .select({ id: schema.tenants.id })
    .from(schema.tenants)
    .where(eq(schema.tenants.slug, DEMO_TENANT_SLUG))
    .limit(1);
  if (!tenant) {
    console.error(`Tenant "${DEMO_TENANT_SLUG}" not found. Run \`pnpm seed:tenants\` first.`);
    process.exit(1);
  }

  // 1. Ensure the user (stable literal id, mirroring seed-owner.ts's "bam").
  await db
    .insert(schema.users)
    .values({ id: DEMO_USER_ID, email, emailVerified: true, name: "Demo Teacher" })
    .onConflictDoNothing();
  const [u] = await db.select({ id: schema.users.id }).from(schema.users).where(eq(schema.users.email, email)).limit(1);
  const userId = u?.id;
  if (!userId) {
    console.error("Failed to ensure the demo user.");
    process.exit(1);
  }

  // 2. Profile — friendly display name, explicitly NOT a platform owner.
  await db
    .insert(schema.userProfiles)
    .values({ userId, displayName: "Demo Teacher", isPlatformOwner: false })
    .onConflictDoUpdate({
      target: schema.userProfiles.userId,
      set: { displayName: "Demo Teacher", isPlatformOwner: false },
    });

  // 3. brand_admin on Acme ONLY — never any other tenant.
  await db
    .insert(schema.tenantMemberships)
    .values({ tenantId: tenant.id, userId, role: "brand_admin" })
    .onConflictDoNothing();
  console.log(`+ demo user ${userId} <${email}> is brand_admin on ${DEMO_TENANT_SLUG} (${tenant.id})`);

  // 4. Baseline: enroll in a couple of Acme's published courses + mark a lesson or two done.
  const published = await db
    .select()
    .from(schema.courses)
    .where(and(eq(schema.courses.tenantId, tenant.id), eq(schema.courses.isPublished, true)))
    .limit(2);

  if (published.length === 0) {
    console.log(
      `No published courses on ${DEMO_TENANT_SLUG} yet — skipping baseline enrollment. ` +
        "Seed real course content into Acme for the demo to feel alive.",
    );
  }

  for (const course of published) {
    await db
      .insert(schema.enrollments)
      .values({ tenantId: tenant.id, userId, courseId: course.id })
      .onConflictDoNothing({
        target: [schema.enrollments.userId, schema.enrollments.courseId, schema.enrollments.attemptNumber],
      });

    const courseLessons = await db
      .select({ id: schema.lessons.id })
      .from(schema.lessons)
      .where(and(eq(schema.lessons.courseId, course.id), eq(schema.lessons.isPublished, true)))
      .orderBy(asc(schema.lessons.sortOrder))
      .limit(2);

    for (const lesson of courseLessons) {
      await db
        .insert(schema.lessonProgress)
        .values({ userId, lessonId: lesson.id, completedAt: new Date() })
        .onConflictDoUpdate({
          target: [schema.lessonProgress.userId, schema.lessonProgress.lessonId],
          set: { completedAt: new Date() },
        });
    }
    console.log(`  enrolled + progressed in "${course.title}"`);
  }

  await pool.end();
  console.log("Done.");
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
