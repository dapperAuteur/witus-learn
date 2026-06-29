import { neonConfig, Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";

// Seeds BAM as the platform owner and the instructor on EVERY course (re-homing the
// synthetic seed instructors @witus-faculty / @witus-languages / @bvc-faculty to him).
// His user matches by email, so signing in as bam@awews.com lands on this account.
// Run: pnpm seed:owner

neonConfig.webSocketConstructor = ws;
const connectionString = resolveDbUrl(true);
if (!connectionString || connectionString.includes("placeholder")) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}
const pool = new Pool({ connectionString });
const db = drizzle(pool, { schema, casing: "snake_case" });

const OWNER_EMAIL = "bam@awews.com";

async function main() {
  // 1. Ensure the user. If BAM already signed in (user exists under a generated id),
  //    prefer that id so we don't fight the unique email.
  await db
    .insert(schema.users)
    .values({ id: "bam", email: OWNER_EMAIL, emailVerified: true, name: "Brand Anthony McDonald" })
    .onConflictDoNothing();
  const u = await db.select({ id: schema.users.id }).from(schema.users).where(eq(schema.users.email, OWNER_EMAIL)).limit(1);
  const ownerId = u[0]?.id;
  if (!ownerId) {
    console.error("Failed to ensure the owner user.");
    process.exit(1);
  }

  // 2. Profile: username, name, owner flag, bio + links.
  await db
    .insert(schema.userProfiles)
    .values({
      userId: ownerId,
      username: "bam",
      displayName: "BAM",
      isPlatformOwner: true,
      bio: "Brand Anthony McDonald (BAM) — founder and instructor across the WitUS schools.",
      links: { website: "https://brandanthonymcdonald.com", custom: [] },
    })
    .onConflictDoUpdate({
      target: schema.userProfiles.userId,
      set: { username: "bam", displayName: "BAM", isPlatformOwner: true },
    });

  // 3. Make BAM a member of every school (so the per-instructor pretty URLs resolve).
  const tenants = await db.select({ id: schema.tenants.id }).from(schema.tenants);
  for (const t of tenants) {
    await db.insert(schema.tenantMemberships).values({ tenantId: t.id, userId: ownerId, role: "brand_admin" }).onConflictDoNothing();
  }

  // 4. Re-home every course to BAM.
  const res = await db.update(schema.courses).set({ instructorId: ownerId }).returning({ id: schema.courses.id });
  console.log(`Re-homed ${res.length} courses to BAM (${ownerId}).`);

  await pool.end();
  console.log("Done. Set PLATFORM_OWNER_EMAIL=bam@awews.com so future logins keep owner.");
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
