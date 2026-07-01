// reassign-instructor — make BAM the single instructor on every course, and pull any courses
// on the old trade-school / health tenants into the Learn.WitUS catalog. Fixes the "Trade Faculty"
// / health-faculty bylines left over from the per-tenant seeders. Idempotent; safe to re-run.
//
//   pnpm reassign:instructor            # dry run — prints what it WOULD change
//   pnpm reassign:instructor --apply    # actually reassign

import { neonConfig, Pool } from "@neondatabase/serverless";
import { and, eq, inArray, ne, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";

const OWNER_EMAIL = process.env.PLATFORM_OWNER_EMAIL || "bam@awews.com";
// Courses stranded on these standalone tenants get moved into the Learn.WitUS catalog.
const MERGE_FROM = ["trade-school", "witus-health", "health"];

async function main() {
  const url = resolveDbUrl(true);
  if (!url) {
    console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED).");
    process.exit(1);
  }
  const apply = process.argv.includes("--apply");
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema });

  const [owner] = await db
    .select({ id: schema.users.id })
    .from(schema.users)
    .where(eq(schema.users.email, OWNER_EMAIL))
    .limit(1);
  if (!owner) {
    console.error(`Owner ${OWNER_EMAIL} not found — has BAM logged in? Set PLATFORM_OWNER_EMAIL if different.`);
    await pool.end();
    process.exit(1);
  }
  const [lw] = await db
    .select({ id: schema.tenants.id })
    .from(schema.tenants)
    .where(eq(schema.tenants.slug, "learn-witus"))
    .limit(1);
  if (!lw) {
    console.error("learn-witus tenant missing.");
    await pool.end();
    process.exit(1);
  }

  // Which tenants currently own courses, and how many.
  const byTenant = await db
    .select({ slug: schema.tenants.slug, n: sql<number>`count(*)::int` })
    .from(schema.courses)
    .innerJoin(schema.tenants, eq(schema.courses.tenantId, schema.tenants.id))
    .groupBy(schema.tenants.slug);
  console.log("Courses per tenant:", Object.fromEntries(byTenant.map((r) => [r.slug, r.n])));

  const mergeTenants = await db
    .select({ id: schema.tenants.id, slug: schema.tenants.slug })
    .from(schema.tenants)
    .where(inArray(schema.tenants.slug, MERGE_FROM));
  const mergeIds = mergeTenants.map((t) => t.id);

  if (!apply) {
    const strays = mergeIds.length
      ? await db.select({ n: sql<number>`count(*)::int` }).from(schema.courses).where(inArray(schema.courses.tenantId, mergeIds))
      : [{ n: 0 }];
    const wrongInstructor = await db
      .select({ n: sql<number>`count(*)::int` })
      .from(schema.courses)
      .where(and(eq(schema.courses.tenantId, lw.id), ne(schema.courses.instructorId, owner.id)));
    console.log(`DRY RUN. Would move ${strays[0]?.n ?? 0} course(s) from [${mergeTenants.map((t) => t.slug).join(", ")}] → learn-witus,`);
    console.log(`and set instructor → ${OWNER_EMAIL} on ${wrongInstructor[0]?.n ?? 0} learn-witus course(s) (plus the moved ones).`);
    console.log("Re-run with --apply to make the changes.");
    await pool.end();
    return;
  }

  // 1) Move stray-tenant courses into Learn.WitUS. Owner must be an instructor there (they are).
  if (mergeIds.length) {
    const moved = await db
      .update(schema.courses)
      .set({ tenantId: lw.id })
      .where(inArray(schema.courses.tenantId, mergeIds))
      .returning({ id: schema.courses.id });
    console.log(`Moved ${moved.length} course(s) into learn-witus.`);
  }
  // 2) Set the owner as instructor on every Learn.WitUS course.
  const fixed = await db
    .update(schema.courses)
    .set({ instructorId: owner.id })
    .where(and(eq(schema.courses.tenantId, lw.id), ne(schema.courses.instructorId, owner.id)))
    .returning({ id: schema.courses.id });
  console.log(`Reassigned ${fixed.length} course(s) to ${OWNER_EMAIL}. Done.`);

  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
