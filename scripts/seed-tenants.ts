import { neonConfig, Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";

// Seeds the launch tenant (Better Vice Club) plus a dummy "Acme Academy" used by
// the isolation test suite. Idempotent. Run: pnpm seed:tenants
//
// Local hosts: bvc.localhost:3040 / acme.localhost:3040 (browsers resolve
// *.localhost → 127.0.0.1). Add the production hosts to tenant_domains later.

neonConfig.webSocketConstructor = ws;

const connectionString = resolveDbUrl(true);
if (!connectionString || connectionString.includes("placeholder")) {
  console.error("DATABASE_URL is not set. Put a real Neon string in .env.local.");
  process.exit(1);
}

const pool = new Pool({ connectionString });
const db = drizzle(pool, { schema, casing: "snake_case" });

interface SeedTenant {
  slug: string;
  name: string;
  tagline: string;
  requiresAgeGate: boolean;
  theme: schema.TenantTheme;
  legal: schema.TenantLegal;
  flags: schema.TenantFlags;
  hosts: { host: string; isPrimary: boolean }[];
}

const TENANTS: SeedTenant[] = [
  {
    slug: "better-vice-club",
    name: "Better Vice Club",
    tagline: "A cited, audio-first history of the world's vices — coffee to khat.",
    requiresAgeGate: true,
    theme: {
      name: "Better Vice Club",
      shortName: "BVC",
      themeColor: "#993C1D",
      colors: { accent: "#993C1D", accentFg: "#ffffff" },
    },
    legal: { termsUrl: "/terms", privacyUrl: "/privacy", safetyUrl: "/safety" },
    flags: { commodityMap: true, paths: true, leadFunnel: true },
    hosts: [
      { host: "bvc.localhost", isPrimary: true },
      { host: "bettervice.club", isPrimary: false },
    ],
  },
  {
    slug: "acme-academy",
    name: "Acme Academy",
    tagline: "Isolation test tenant. Its content must never appear on another brand's domain.",
    requiresAgeGate: false,
    theme: { name: "Acme Academy", shortName: "Acme", themeColor: "#185FA5" },
    legal: { termsUrl: "/terms", privacyUrl: "/privacy" },
    flags: { commodityMap: false, paths: true },
    hosts: [{ host: "acme.localhost", isPrimary: true }],
  },
];

async function main() {
  for (const t of TENANTS) {
    const existing = await db
      .select({ id: schema.tenants.id })
      .from(schema.tenants)
      .where(eq(schema.tenants.slug, t.slug))
      .limit(1);

    let tenantId = existing[0]?.id;
    if (!tenantId) {
      const [row] = await db
        .insert(schema.tenants)
        .values({
          slug: t.slug,
          name: t.name,
          tagline: t.tagline,
          requiresAgeGate: t.requiresAgeGate,
          theme: t.theme,
          legal: t.legal,
          flags: t.flags,
          stripe: { accountMode: "platform", statementDescriptor: t.theme.shortName },
        })
        .returning({ id: schema.tenants.id });
      tenantId = row.id;
      console.log(`+ tenant ${t.slug} (${tenantId})`);
    } else {
      console.log(`= tenant ${t.slug} already exists (${tenantId})`);
    }

    for (const h of t.hosts) {
      await db
        .insert(schema.tenantDomains)
        .values({ tenantId, host: h.host, isPrimary: h.isPrimary })
        .onConflictDoNothing({ target: schema.tenantDomains.host });
      console.log(`  · host ${h.host}${h.isPrimary ? " (primary)" : ""}`);
    }
  }
  await pool.end();
  console.log("Done.");
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
