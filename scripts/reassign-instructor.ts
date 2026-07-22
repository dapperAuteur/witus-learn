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
    console.error(`Owner ${OWNER_EMAIL} not found, has BAM logged in? Set PLATFORM_OWNER_EMAIL if different.`);
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

  // After this script every course on Learn.WitUS ends up keyed (lw, owner, slug) — so any slug
  // that exists BOTH on a stray tenant and on Learn.WitUS is a stale duplicate (the catalog was
  // re-seeded onto Learn.WitUS long ago; the stranded copy is the leftover). A blind bulk UPDATE
  // hits courses_tenant_instructor_slug_uq and aborts the whole run (that's the failure BAM hit
  // on `cybersecurity-get-the-job`). Move course-by-course, skip duplicates, and REPORT them —
  // never delete: the stranded copy could still hold enrollments/progress, and destroying data
  // is a human decision.
  const lwSlugs = new Set(
    (
      await db
        .select({ slug: schema.courses.slug })
        .from(schema.courses)
        .where(eq(schema.courses.tenantId, lw.id))
    ).map((r) => r.slug),
  );

  // 1) Move stray-tenant courses into Learn.WitUS, one at a time, slug-guarded.
  if (mergeIds.length) {
    const strays = await db
      .select({ id: schema.courses.id, slug: schema.courses.slug, tenantId: schema.courses.tenantId })
      .from(schema.courses)
      .where(inArray(schema.courses.tenantId, mergeIds));
    let moved = 0;
    const dupes: { id: string; slug: string | null }[] = [];
    for (const c of strays) {
      if (c.slug !== null && lwSlugs.has(c.slug)) {
        dupes.push({ id: c.id, slug: c.slug });
        continue;
      }
      await db.update(schema.courses).set({ tenantId: lw.id, instructorId: owner.id }).where(eq(schema.courses.id, c.id));
      if (c.slug !== null) lwSlugs.add(c.slug);
      moved++;
    }
    console.log(`Moved ${moved} course(s) into learn-witus.`);
    if (dupes.length) {
      console.log(`SKIPPED ${dupes.length} stranded duplicate(s), the same slug already lives on learn-witus:`);
      for (const d of dupes) console.log(`  - ${d.slug} (stranded course id ${d.id})`);
      console.log(
        "These are stale leftovers from the old per-tenant seeds. Verify each has no enrollments you care about, then delete by id, this script deliberately never deletes courses.",
      );
    }
  }

  // 2) Set the owner as instructor on every Learn.WitUS course — same guard, per course: if the
  // owner already has a course with this slug on Learn.WitUS, flipping this one would collide.
  const wrong = await db
    .select({ id: schema.courses.id, slug: schema.courses.slug })
    .from(schema.courses)
    .where(and(eq(schema.courses.tenantId, lw.id), ne(schema.courses.instructorId, owner.id)));
  const ownerSlugs = new Set(
    (
      await db
        .select({ slug: schema.courses.slug })
        .from(schema.courses)
        .where(and(eq(schema.courses.tenantId, lw.id), eq(schema.courses.instructorId, owner.id)))
    ).map((r) => r.slug),
  );
  let fixed = 0;
  const instructorDupes: { id: string; slug: string | null }[] = [];
  for (const c of wrong) {
    if (c.slug !== null && ownerSlugs.has(c.slug)) {
      instructorDupes.push(c);
      continue;
    }
    await db.update(schema.courses).set({ instructorId: owner.id }).where(eq(schema.courses.id, c.id));
    if (c.slug !== null) ownerSlugs.add(c.slug);
    fixed++;
  }
  console.log(`Reassigned ${fixed} course(s) to ${OWNER_EMAIL}.`);
  if (instructorDupes.length) {
    console.log(`SKIPPED ${instructorDupes.length} duplicate(s), ${OWNER_EMAIL} already owns a course with the same slug:`);
    for (const d of instructorDupes) console.log(`  - ${d.slug} (course id ${d.id})`);
  }
  console.log("Done.");

  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
