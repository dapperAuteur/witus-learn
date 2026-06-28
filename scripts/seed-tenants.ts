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
    slug: "learn-witus",
    name: "Learn.WitUS",
    tagline:
      "The WitUS learning platform — host your courses under your own brand and domain.",
    requiresAgeGate: false,
    theme: {
      name: "Learn.WitUS",
      shortName: "WitUS",
      themeColor: "#0a0a0a",
      colors: { accent: "#2563eb", accentFg: "#ffffff" },
    },
    legal: { termsUrl: "/terms", privacyUrl: "/privacy" },
    flags: { recruiting: true, paths: false, commodityMap: false },
    hosts: [
      { host: "learn.witus.online", isPrimary: true },
      { host: "learn.localhost", isPrimary: false },
      // Bare localhost maps here so the default `pnpm dev` URL resolves in dev.
      { host: "localhost", isPrimary: false },
    ],
  },
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

  // Pre-launch schools — resolve to a branded "launching soon" page (flags.comingSoon)
  // until their content lands. Prod domains are added later via the admin dashboard
  // (BAM holds the real domains); only dev *.localhost hosts are seeded here.
  {
    slug: "trade-school",
    name: "WitUS Trade School",
    tagline: "Job-ready vocational training — cyber-security and FAA Part 107 drone licensing.",
    requiresAgeGate: false,
    theme: {
      name: "WitUS Trade School",
      shortName: "Trade",
      themeColor: "#0F766E",
      colors: { accent: "#0F766E", accentFg: "#ffffff" },
    },
    legal: { termsUrl: "/terms", privacyUrl: "/privacy" },
    flags: { comingSoon: true },
    hosts: [{ host: "trade.localhost", isPrimary: true }],
  },
  {
    slug: "elementary-mba",
    name: "ElementaryMBA",
    tagline: "Business fundamentals, taught simply — from the ground up.",
    requiresAgeGate: false,
    theme: {
      name: "ElementaryMBA",
      shortName: "EMBA",
      themeColor: "#15803D",
      colors: { accent: "#15803D", accentFg: "#ffffff" },
    },
    legal: { termsUrl: "/terms", privacyUrl: "/privacy" },
    flags: { comingSoon: true },
    hosts: [{ host: "emba.localhost", isPrimary: true }],
  },
  {
    slug: "hip-hop-axiom",
    name: "Hip-Hop Axiom",
    tagline: "The principles of hip-hop as a framework for learning and life.",
    requiresAgeGate: false,
    theme: {
      name: "Hip-Hop Axiom",
      shortName: "Axiom",
      themeColor: "#6D28D9",
      colors: { accent: "#6D28D9", accentFg: "#ffffff" },
    },
    legal: { termsUrl: "/terms", privacyUrl: "/privacy" },
    flags: { comingSoon: true },
    hosts: [{ host: "axiom.localhost", isPrimary: true }],
  },
  {
    slug: "sex-with-the-lights-on",
    name: "Sex With the Lights On",
    tagline: "Adult intimacy education with Professor girthBrooks — honest, evidence-based.",
    requiresAgeGate: true,
    theme: {
      name: "Sex With the Lights On",
      shortName: "SWLO",
      themeColor: "#BE123C",
      colors: { accent: "#BE123C", accentFg: "#ffffff" },
    },
    legal: { termsUrl: "/terms", privacyUrl: "/privacy", safetyUrl: "/safety" },
    flags: { comingSoon: true },
    hosts: [{ host: "swlo.localhost", isPrimary: true }],
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
