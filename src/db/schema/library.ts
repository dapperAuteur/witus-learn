import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

// Platform-owner private library: long-form internal ebooks (interview prep, the commercial
// playbook) readable ONLY by the platform owner at /admin/library. Content lives in the database,
// never in this (public) repo; it is upserted from local markdown via
// `node scripts/sync-library.mjs <files...>`.
//
// Deliberately PLATFORM-LEVEL, so no tenant_id: this is BAM's own reading room, not tenant
// content. Every read sits behind requirePlatformOwner(), goes through src/db/queries/library.ts
// (not the tenant-scoped DAL), and nothing public or tenant-scoped may reach it.
export const libraryDocuments = pgTable("library_documents", {
  id: uuid("id").primaryKey().defaultRandom(),
  /** Filename minus extension and any leading YYYY-MM-DD- prefix; see scripts/sync-library.mjs. */
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description"),
  /** Full markdown body, rendered by the shared safe <Markdown> component (no raw HTML). */
  content: text("content").notNull(),
  // The sibling PDF of the markdown source, base64 encoded, so the owner can download the typeset
  // copy instead of only reading the rendered markdown. Base64 in `text` rather than `bytea` on
  // purpose (same idiom as witus.online's library): drizzle has no bytea column type, and the Neon
  // drivers (the app's neon-serverless Pool in src/db/client.ts and the plain `sql` tagged template
  // scripts/sync-library.mjs uses) hand bytea back as a driver-formatted string, so binary would
  // need a customType re-parsing that format on every read. Base64 round-trips losslessly through
  // both, at ~33% extra storage on files under a few megabytes. NULL when no sibling PDF exists.
  pdf: text("pdf"),
  /** Size of the DECODED pdf in bytes, so the UI can show a file size without pulling the
   *  payload. Set together with `pdf`; NULL exactly when it is NULL. */
  pdfBytes: integer("pdf_bytes"),
  sortOrder: integer("sort_order").notNull().default(0),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export type LibraryDocument = typeof libraryDocuments.$inferSelect;
