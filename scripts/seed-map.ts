import { neonConfig, Pool } from "@neondatabase/serverless";
import { and, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";

// Seeds the BVC Commodity Map dataset (21 episodes) into map_commodities, linking
// each pin to its course where one exists. Idempotent. Run: pnpm seed:map

neonConfig.webSocketConstructor = ws;
const connectionString = resolveDbUrl(true);
if (!connectionString || connectionString.includes("placeholder")) {
  console.error("DATABASE_URL is not set. Put a real Neon string in .env.local.");
  process.exit(1);
}
const pool = new Pool({ connectionString });
const db = drizzle(pool, { schema, casing: "snake_case" });

const SEASON_COLOR: Record<string, string> = {
  "1": "#BA7517",
  "2": "#185FA5",
  "3": "#993C1D",
  home: "#3B6D11",
};

interface C {
  ep: number;
  season: 1 | 2 | 3;
  name: string;
  geo: string;
  lat: number;
  lon: number;
  slug?: string;
  isHome?: boolean;
  summary: string;
}

const COMMODITIES: C[] = [
  { ep: 1, season: 1, name: "Coffee", geo: "Ethiopian highlands", lat: 9, lon: 40, slug: "coffee", summary: "The world's second-largest traded commodity; Ethiopian origins." },
  { ep: 2, season: 1, name: "Tea", geo: "Yunnan Province, China", lat: 25, lon: 101, slug: "tea", summary: "Oldest documented tea cultivation; reshaped the geography of empire." },
  { ep: 3, season: 1, name: "Chocolate", geo: "Mesoamerica (Maya origin)", lat: 16, lon: -90, summary: "Sacred Maya/Aztec currency; 70% of cacao now grows in West Africa." },
  { ep: 4, season: 1, name: "Sugar", geo: "Caribbean (colonial plantation zone)", lat: 18, lon: -66, summary: "Economic engine of the Atlantic slave trade." },
  { ep: 5, season: 1, name: "Guayusa", geo: "Ecuadorian Amazon", lat: 0, lon: -77, summary: "Caffeinated holly leaf and Kichwa dream-sharing tradition." },
  { ep: 6, season: 1, name: "Kola Nut", geo: "West Africa (Nigeria, Ghana)", lat: 7, lon: 3, summary: "The original caffeinated ingredient in Coca-Cola." },
  { ep: 7, season: 1, name: "Kava", geo: "Vanuatu, Pacific Islands", lat: -16, lon: 168, summary: "A root drink of Pacific Island governance ceremonies." },
  { ep: 8, season: 2, name: "Beer", geo: "Mesopotamia (modern Iraq)", lat: 32, lon: 44, summary: "The Hymn to Ninkasi, ~1800 BCE: the world's oldest beer recipe." },
  { ep: 9, season: 2, name: "Wine", geo: "Caucasus (Georgia and Armenia)", lat: 41, lon: 45, summary: "Oldest confirmed winemaking, ~6000 BCE." },
  { ep: 10, season: 2, name: "Whiskey", geo: "Scotland and Ireland", lat: 56, lon: -4, summary: "One of the most legally protected geographic designations." },
  { ep: 11, season: 2, name: "Rum", geo: "Caribbean (Barbados)", lat: 13.5, lon: -57, summary: "The economic foundation of the triangular trade." },
  { ep: 12, season: 2, name: "Tequila", geo: "Jalisco, Mexico", lat: 21, lon: -103, summary: "Producible legally in only five Mexican states." },
  { ep: 13, season: 2, name: "Sake", geo: "Japan", lat: 35, lon: 137, summary: "Wabi-sabi aesthetics shape how sake is understood." },
  { ep: 14, season: 2, name: "The Toast (Synthesis)", geo: "Lynchburg, Tennessee", lat: 35.3, lon: -86.4, summary: "Nathan 'Nearest' Green's erased role in Jack Daniel's whiskey." },
  { ep: 15, season: 3, name: "Tobacco", geo: "Virginia and the American South", lat: 37.5, lon: -79, summary: "The first great American colonial commodity." },
  { ep: 16, season: 3, name: "Cannabis", geo: "Central Asia (documented origin)", lat: 40, lon: 68, slug: "cannabis", summary: "5,000+ years of ritual use; the politics of its 1970 scheduling." },
  { ep: 17, season: 3, name: "Opioids", geo: "Afghanistan (Golden Crescent)", lat: 34, lon: 66, summary: "~85% of the world's illicit opium; the Scott County, IN outbreak." },
  { ep: 18, season: 3, name: "Coca and Cocaine", geo: "Colombian Andes", lat: 4, lon: -74, summary: "8,000 years of Andean coca use; Indianapolis as a crossroads." },
  { ep: 19, season: 3, name: "Psychedelics", geo: "Oaxacan highlands, Mexico", lat: 17, lon: -96, summary: "María Sabina's velada ceremonies and cultural extraction." },
  { ep: 20, season: 3, name: "Khat", geo: "Ethiopian highlands (Harar)", lat: 9.5, lon: 42, summary: "Ethiopia's second-largest export crop and a governance tradition." },
  { ep: 21, season: 3, name: "The Full Spectrum", geo: "Indianapolis, Indiana", lat: 39.8, lon: -86.2, isHome: true, summary: "The three-season synthesis: geography, history, and power." },
];

async function main() {
  const t = await db
    .select({ id: schema.tenants.id })
    .from(schema.tenants)
    .where(eq(schema.tenants.slug, "better-vice-club"))
    .limit(1);
  const tenantId = t[0]?.id;
  if (!tenantId) {
    console.error("BVC tenant missing — run `pnpm seed:tenants` first.");
    process.exit(1);
  }

  for (const c of COMMODITIES) {
    const exists = await db
      .select({ id: schema.mapCommodities.id })
      .from(schema.mapCommodities)
      .where(and(eq(schema.mapCommodities.tenantId, tenantId), eq(schema.mapCommodities.name, c.name)))
      .limit(1);
    if (exists[0]) {
      console.log(`= ${c.name}`);
      continue;
    }
    let courseId: string | null = null;
    if (c.slug) {
      const course = await db
        .select({ id: schema.courses.id })
        .from(schema.courses)
        .where(and(eq(schema.courses.tenantId, tenantId), eq(schema.courses.slug, c.slug)))
        .limit(1);
      courseId = course[0]?.id ?? null;
    }
    await db.insert(schema.mapCommodities).values({
      tenantId,
      courseId,
      seasonNumber: c.season,
      episodeLabel: `Episode ${c.ep}`,
      name: c.name,
      geo: c.geo,
      lat: c.lat,
      lon: c.lon,
      color: c.isHome ? SEASON_COLOR.home : SEASON_COLOR[String(c.season)],
      isHome: c.isHome ?? false,
      summary: c.summary,
      sortOrder: c.ep,
    });
    console.log(`+ ${c.name}`);
  }
  await pool.end();
  console.log("Done.");
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
