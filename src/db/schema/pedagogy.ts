import { sql } from "drizzle-orm";
import {
  boolean,
  check,
  integer,
  pgTable,
  text,
  timestamp,
  unique,
  uuid,
} from "drizzle-orm/pg-core";
import { users } from "./auth";
import { courses, lessons } from "./courses";

// BVC's trust layer: glossary terms, the sources library, and the claims ledger
// that ties a factual claim to a verified source. Tenant scope inherited via course.

export const courseGlossaryTerms = pgTable(
  "course_glossary_terms",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    lessonId: uuid("lesson_id").references(() => lessons.id, { onDelete: "set null" }),
    term: text("term").notNull(),
    phonetic: text("phonetic"),
    definition: text("definition").notNull(),
    definitionFormat: text("definition_format").notNull().default("markdown"),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("course_glossary_course_term_uq").on(t.courseId, t.term),
    check(
      "course_glossary_format_chk",
      sql`${t.definitionFormat} in ('markdown','tiptap')`,
    ),
  ],
);

export const courseSources = pgTable("course_sources", {
  id: uuid("id").primaryKey().defaultRandom(),
  courseId: uuid("course_id")
    .notNull()
    .references(() => courses.id, { onDelete: "cascade" }),
  inText: text("in_text"),
  apa: text("apa"),
  doi: text("doi"),
  url: text("url"),
  pdfUrl: text("pdf_url"),
  verified: boolean("verified").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const courseClaims = pgTable(
  "course_claims",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    lessonId: uuid("lesson_id").references(() => lessons.id, { onDelete: "set null" }),
    sourceId: uuid("source_id").references(() => courseSources.id, { onDelete: "set null" }),
    claimText: text("claim_text").notNull(),
    location: text("location"),
    status: text("status").notNull().default("unconfirmed"),
    notes: text("notes"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    confirmedAt: timestamp("confirmed_at", { withTimezone: true }),
    confirmedBy: text("confirmed_by").references(() => users.id, { onDelete: "set null" }),
  },
  (t) => [
    check("course_claims_status_chk", sql`${t.status} in ('unconfirmed','confirmed','dropped')`),
  ],
);

export type CourseGlossaryTerm = typeof courseGlossaryTerms.$inferSelect;
export type CourseSource = typeof courseSources.$inferSelect;
export type CourseClaim = typeof courseClaims.$inferSelect;
