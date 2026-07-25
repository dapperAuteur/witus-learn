import { neonConfig, Pool } from "@neondatabase/serverless";
import { and, eq, inArray } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { BUNDLE_PROPOSALS } from "../src/lib/bundles";

// Seed the proposed bundles (src/lib/bundles.ts) for the launch tenant. Each bundle is created
// UNPUBLISHED with the recommended app price pre-filled, so nothing sells until BAM reviews the price
// and publishes it at /admin/bundles. Idempotent: re-running refreshes the member set and title, and
// never overwrites a price or publish state BAM has changed.
//
//   pnpm seed:bundles

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
    .where(eq(schema.tenants.slug, "learn-witus"))
    .limit(1);
  const tenantId = t[0]?.id;
  if (!tenantId) {
    console.error("Tenant 'learn-witus' not found. Run seed:tenants first.");
    process.exit(1);
  }

  let created = 0;
  let updated = 0;
  let skippedEmpty = 0;

  for (const b of BUNDLE_PROPOSALS) {
    // Resolve member course ids by slug, in THIS tenant, in the proposal's order.
    const found = await db
      .select({ id: schema.courses.id, slug: schema.courses.slug })
      .from(schema.courses)
      .where(and(eq(schema.courses.tenantId, tenantId), inArray(schema.courses.slug, b.appMembers)));
    const idBySlug = new Map(found.map((r) => [r.slug, r.id] as const));
    const courseIds = b.appMembers.map((s) => idBySlug.get(s)).filter((x): x is string => !!x);
    const missing = b.appMembers.filter((s) => !idBySlug.has(s));

    if (courseIds.length === 0) {
      skippedEmpty++;
      console.log(`  SKIP  ${b.slug}: none of its ${b.appMembers.length} courses exist in this tenant yet`);
      continue;
    }

    const existing = await db
      .select({ id: schema.bundles.id })
      .from(schema.bundles)
      .where(and(eq(schema.bundles.tenantId, tenantId), eq(schema.bundles.slug, b.slug)))
      .limit(1);

    let bundleId: string;
    if (existing[0]) {
      bundleId = existing[0].id;
      // Refresh only the human fields; leave price + is_published as BAM set them.
      await db.update(schema.bundles).set({ title: b.title }).where(eq(schema.bundles.id, bundleId));
      await db.delete(schema.bundleCourses).where(eq(schema.bundleCourses.bundleId, bundleId));
      updated++;
    } else {
      const ins = await db
        .insert(schema.bundles)
        .values({
          tenantId,
          slug: b.slug,
          title: b.title,
          price: String(b.appPrice), // recommended price pre-filled, still unpublished
          isPublished: false,
        })
        .returning({ id: schema.bundles.id });
      bundleId = ins[0].id;
      created++;
    }

    await db
      .insert(schema.bundleCourses)
      .values(courseIds.map((courseId, i) => ({ bundleId, courseId, sortOrder: i })))
      .onConflictDoNothing();

    const note = missing.length ? `  (${missing.length} member(s) not seeded yet)` : "";
    console.log(`  ${existing[0] ? "updated" : "created"}  ${b.slug}: ${courseIds.length} course(s), $${b.appPrice}, UNPUBLISHED${note}`);
  }

  console.log(`\nBundles: ${created} created, ${updated} updated, ${skippedEmpty} skipped (no member courses yet).`);
  console.log("All UNPUBLISHED. Review price + publish at /admin/bundles.");
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
