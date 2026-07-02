import { sql } from "drizzle-orm";
import {
  boolean,
  check,
  integer,
  jsonb,
  numeric,
  pgTable,
  smallint,
  text,
  timestamp,
  unique,
  uniqueIndex,
  index,
  uuid,
} from "drizzle-orm/pg-core";
import { citext } from "./_types";
import { users } from "./auth";
import { tenants } from "./tenancy";

// ── Categories (per-tenant) ──────────────────────────────────────────────────
export const courseCategories = pgTable(
  "course_categories",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    name: citext("name").notNull(),
    sortOrder: integer("sort_order").notNull().default(0),
    // Optional cross-promotion: a WitUS ecosystem product slug (see src/lib/ecosystem.ts)
    // surfaced as an "Explore in the WitUS ecosystem" chip on this category's catalog header.
    ecosystemProductSlug: text("ecosystem_product_slug"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [unique("course_categories_tenant_name_uq").on(t.tenantId, t.name)],
);

// ── Courses ──────────────────────────────────────────────────────────────────
export const courses = pgTable(
  "courses",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    instructorId: text("instructor_id")
      .notNull()
      .references(() => users.id),
    title: text("title").notNull(),
    slug: text("slug"),
    description: text("description"),
    coverImageUrl: text("cover_image_url"),
    category: text("category"),
    tags: text("tags").array(),
    // Cross-promotion: 0–3 WitUS ecosystem product slugs (see src/lib/ecosystem.ts) the
    // instructor curates for this course; rendered as a small labeled "Related WitUS tools"
    // sidebar card. Empty/NULL = no card. Clicks route through /api/link/click.
    relatedProducts: jsonb("related_products").$type<string[]>(),

    // Pricing / billing (wired in Phase 5)
    price: numeric("price", { precision: 10, scale: 2 }).notNull().default("0"),
    priceType: text("price_type").notNull().default("free"),
    // For priceType "subscription": how often it bills. NULL = monthly (legacy default).
    billingInterval: text("billing_interval"),
    stripeProductId: text("stripe_product_id"),
    stripePriceId: text("stripe_price_id"),

    // Publishing / visibility.
    // visibility: "public" | "members" | "scheduled" | "private". A "private" course is
    // owner-only — visible/editable ONLY by the platform owner and the course's own
    // instructor, never by brand_admins/moderators (see canAccessCourse).
    isPublished: boolean("is_published").notNull().default(false),
    visibility: text("visibility").notNull().default("public"),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    // When set, the course is HELD: a clear UI banner shows this reason and publishing is
    // blocked until it clears (e.g. "vet culturally" or "swap copyrighted source for open").
    // NULL = no hold.
    publishHoldReason: text("publish_hold_reason"),

    // Learning behaviour
    navigationMode: text("navigation_mode").notNull().default("linear"),
    isSequential: boolean("is_sequential").notNull().default(false),
    allowCrossCourseCyoa: boolean("allow_cross_course_cyoa").notNull().default(false),
    trialPeriodDays: integer("trial_period_days"),
    // Per-course age-gate (enables gating e.g. BVC S2/S3 only; see plans/future).
    requiresAgeGate: boolean("requires_age_gate").notNull().default(false),

    // Social rollups (maintained by triggers in later phases)
    likeCount: integer("like_count").notNull().default(0),
    reviewCount: integer("review_count").notNull().default(0),
    avgRating: numeric("avg_rating", { precision: 3, scale: 2 }),

    // Series / season grouping
    seasonNumber: smallint("season_number"),
    seriesSlug: text("series_slug"),
    seriesTitle: text("series_title"),

    // Featured strip
    isFeatured: boolean("is_featured").notNull().default(false),
    featuredOrder: integer("featured_order"),

    // Outbox announcements: when this course was last dispatched to the WitUS Outbox
    // (as a draft social post → Ocoya). NULL = never announced. Lets the batch-announce
    // UI show what's been announced and stagger the rest over time.
    announcedAt: timestamp("announced_at", { withTimezone: true }),

    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    // Slug is unique per instructor within a tenant (pretty URLs: /{instructor}/{slug}).
    uniqueIndex("courses_tenant_instructor_slug_uq")
      .on(t.tenantId, t.instructorId, t.slug)
      .where(sql`${t.slug} is not null`),
    index("courses_tenant_published_idx").on(t.tenantId, t.isPublished),
    index("courses_tenant_series_idx").on(t.tenantId, t.seriesSlug),
    check("courses_price_type_chk", sql`${t.priceType} in ('free','one_time','subscription')`),
    check("courses_billing_interval_chk", sql`${t.billingInterval} is null or ${t.billingInterval} in ('month','year')`),
    check("courses_visibility_chk", sql`${t.visibility} in ('public','members','scheduled','private')`),
    check("courses_navigation_mode_chk", sql`${t.navigationMode} in ('linear','cyoa')`),
  ],
);

// ── Modules ──────────────────────────────────────────────────────────────────
export const courseModules = pgTable("course_modules", {
  id: uuid("id").primaryKey().defaultRandom(),
  courseId: uuid("course_id")
    .notNull()
    .references(() => courses.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  isPublished: boolean("is_published").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

// ── Lessons (tenant_id denormalized for cheap by-id isolation + embeddings join) ─
export const lessons = pgTable(
  "lessons",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    moduleId: uuid("module_id").references(() => courseModules.id, { onDelete: "set null" }),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),

    title: text("title").notNull(),
    lessonType: text("lesson_type").notNull().default("text"),
    contentUrl: text("content_url"),
    textContent: text("text_content"),
    contentFormat: text("content_format"),
    durationSeconds: integer("duration_seconds"),
    sortOrder: integer("sort_order").notNull().default(0),
    isFreePreview: boolean("is_free_preview").notNull().default(false),
    isPublished: boolean("is_published").notNull().default(false),
    slug: text("slug"),

    // Format-specific payloads (used by the Phase 4 lesson players)
    quizContent: jsonb("quiz_content"),
    // Active-recall prompts: [{ prompt, answer }]. Rendered as click-to-reveal cards with a
    // self-grade ("I got it" / "Missed it"), so learners test themselves in-lesson before the quiz.
    recallContent: jsonb("recall_content").$type<{ prompt: string; answer: string }[]>(),
    exerciseContent: jsonb("exercise_content"),
    audioChapters: jsonb("audio_chapters"),
    // Multi-part media: when a recording is too long for the upload cap, it's captured and stored
    // as ordered <cap parts and played back in sequence. contentUrl mirrors parts[0] for
    // back-compat; a single-part recording leaves this null and uses contentUrl alone.
    mediaParts: jsonb("media_parts").$type<{ url: string; durationSeconds?: number }[]>(),
    transcriptContent: jsonb("transcript_content"),
    mapContent: jsonb("map_content"),
    documents: jsonb("documents"),
    podcastLinks: jsonb("podcast_links"),
    video360Autoplay: boolean("video_360_autoplay"),
    video360PosterUrl: text("video_360_poster_url"),

    // Recording progress: when the instructor marked this lesson's audio/video as recorded.
    // NULL = not recorded yet. Drives the "mark recorded" checklist on the recording-script page.
    recordedAt: timestamp("recorded_at", { withTimezone: true }),

    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("lessons_course_slug_uq")
      .on(t.courseId, t.slug)
      .where(sql`${t.slug} is not null`),
    index("lessons_course_idx").on(t.courseId),
    check(
      "lessons_type_chk",
      sql`${t.lessonType} in ('video','text','audio','slides','quiz','360video','photo_360','virtual_tour','map','assignment','exercise')`,
    ),
    check(
      "lessons_content_format_chk",
      sql`${t.contentFormat} is null or ${t.contentFormat} in ('markdown','tiptap')`,
    ),
  ],
);

export type Course = typeof courses.$inferSelect;
export type CourseModule = typeof courseModules.$inferSelect;
export type Lesson = typeof lessons.$inferSelect;
export type CourseCategory = typeof courseCategories.$inferSelect;
