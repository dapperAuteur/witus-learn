import { sql } from "drizzle-orm";
import {
  boolean,
  check,
  jsonb,
  pgTable,
  text,
  timestamp,
  unique,
  uuid,
} from "drizzle-orm/pg-core";
import { citext } from "./_types";
import { users } from "./auth";

// ── Typed JSONB shapes (server-resolved branding/config; never client-supplied) ─

export interface TenantTheme {
  /** Display name in chrome/metadata, e.g. "Better Vice Club". */
  name?: string;
  shortName?: string;
  wordmark?: string;
  logoUrl?: string;
  faviconUrl?: string;
  manifestUrl?: string;
  ogDefaultUrl?: string;
  themeColor?: string;
  /** Tailwind/CSS accent tokens, e.g. { accent: "#993C1D", accentFg: "#fff" }. */
  colors?: Record<string, string>;
}

export interface TenantLegal {
  termsUrl?: string;
  privacyUrl?: string;
  safetyUrl?: string;
}

export interface TenantFlags {
  paths?: boolean;
  leadFunnel?: boolean;
  witusInbox?: boolean;
  marketplace?: boolean;
  commodityMap?: boolean;
  /** Show the "host your own school" recruitment hero (the default Learn.WitUS school). */
  recruiting?: boolean;
  /** Allowed top-level route surface for this brand. */
  surface?: string[];
  /** Per-tenant AI tutor: disable with false (default on when an AI key is configured). */
  aiTutor?: boolean;
  /** Per-tenant primary AI provider override (e.g. "anthropic"); falls back to env default. */
  aiProvider?: string;
  /** Render a "launching soon" landing instead of the catalog (for pre-launch schools). */
  comingSoon?: boolean;
  /** Gamification dose: "off" (none), "light" (streak/mastery — default), "full" (+ XP/levels/badges,
   *  and leaderboards when that surface ships). Adult brands (e.g. BVC) may prefer "light" or "off". */
  gamification?: "off" | "light" | "full";
}

export interface TenantStripeConfig {
  /** "platform" (shared account) for v1; "dedicated" reserved for later. */
  accountMode?: "platform" | "dedicated";
  statementDescriptor?: string;
  /** Reserved for a future per-tenant Stripe account. */
  accountId?: string;
}

export interface TenantEmailConfig {
  from?: string;
  fromName?: string;
  replyTo?: string;
}

// ── Tables ───────────────────────────────────────────────────────────────────

/** The brand registry. One row per tenant/brand. */
export const tenants = pgTable("tenants", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: citext("slug").notNull().unique(),
  name: text("name").notNull(),
  tagline: text("tagline"),
  isActive: boolean("is_active").notNull().default(true),
  requiresAgeGate: boolean("requires_age_gate").notNull().default(false),
  theme: jsonb("theme").$type<TenantTheme>().notNull().default({}),
  legal: jsonb("legal").$type<TenantLegal>().notNull().default({}),
  flags: jsonb("flags").$type<TenantFlags>().notNull().default({}),
  stripe: jsonb("stripe").$type<TenantStripeConfig>().notNull().default({}),
  email: jsonb("email").$type<TenantEmailConfig>().notNull().default({}),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

/** host → tenant resolution. Middleware/server resolves request Host to a tenant. */
export const tenantDomains = pgTable("tenant_domains", {
  id: uuid("id").primaryKey().defaultRandom(),
  tenantId: uuid("tenant_id")
    .notNull()
    .references(() => tenants.id, { onDelete: "cascade" }),
  host: citext("host").notNull().unique(),
  isPrimary: boolean("is_primary").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

/** Per-tenant roles. A user can be a learner on one brand and an instructor on another. */
export const tenantMemberships = pgTable(
  "tenant_memberships",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    role: text("role").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("tenant_memberships_tenant_user_uq").on(t.tenantId, t.userId),
    check("tenant_memberships_role_chk", sql`${t.role} in ('learner','instructor','brand_admin')`),
  ],
);

export type TenantRole = "learner" | "instructor" | "brand_admin";

/** LMS-owned profile (global identity across tenants). Replaces CentOS `profiles`. */
/** Instructor profile links: a few named ones + any number of custom links. */
export interface ProfileLinks {
  website?: string;
  linkedin?: string;
  portfolio?: string;
  custom?: { label: string; url: string }[];
}

export const userProfiles = pgTable("user_profiles", {
  userId: text("user_id")
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  username: citext("username").unique(),
  displayName: text("display_name"),
  bio: text("bio"),
  avatarUrl: text("avatar_url"),
  links: jsonb("links").$type<ProfileLinks>().notNull().default({}),
  isPlatformOwner: boolean("is_platform_owner").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

/** key/value platform settings; optional tenant_id for per-tenant overrides. */
export const platformSettings = pgTable(
  "platform_settings",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id").references(() => tenants.id, { onDelete: "cascade" }),
    key: text("key").notNull(),
    value: text("value"),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [unique("platform_settings_tenant_key_uq").on(t.tenantId, t.key)],
);
