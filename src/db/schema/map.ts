import {
  boolean,
  doublePrecision,
  index,
  integer,
  jsonb,
  pgTable,
  smallint,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { courses } from "./courses";
import { tenants } from "./tenancy";

// The Commodity Map dataset (per-tenant). Replaces the hardcoded
// lib/bvc/commodities.ts so new episodes appear automatically and other brands
// get their own map (or none).
export const mapCommodities = pgTable(
  "map_commodities",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    courseId: uuid("course_id").references(() => courses.id, { onDelete: "set null" }),
    seasonNumber: smallint("season_number"),
    episodeLabel: text("episode_label"),
    name: text("name").notNull(),
    geo: text("geo"),
    lat: doublePrecision("lat"),
    lon: doublePrecision("lon"),
    color: text("color"),
    isHome: boolean("is_home").notNull().default(false),
    summary: text("summary"),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("map_commodities_tenant_idx").on(t.tenantId, t.seasonNumber, t.sortOrder)],
);

// Growing-belt dataset (Equal Earth mode): latitude bands + (optionally) ISO
// numeric country codes for production-region polygons.
export const mapBelts = pgTable("map_belts", {
  id: uuid("id").primaryKey().defaultRandom(),
  tenantId: uuid("tenant_id")
    .notNull()
    .references(() => tenants.id, { onDelete: "cascade" }),
  commodityId: uuid("commodity_id").references(() => mapCommodities.id, { onDelete: "set null" }),
  name: text("name").notNull(),
  seasonNumber: smallint("season_number"),
  color: text("color"),
  latMin: doublePrecision("lat_min"),
  latMax: doublePrecision("lat_max"),
  description: text("description"),
  producers: text("producers"),
  productionCountryCodes: integer("production_country_codes").array(),
  fallbackBbox: jsonb("fallback_bbox"),
  sortOrder: integer("sort_order").notNull().default(0),
});

export type MapCommodity = typeof mapCommodities.$inferSelect;
export type MapBelt = typeof mapBelts.$inferSelect;
