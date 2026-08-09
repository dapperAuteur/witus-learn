import { sql } from "drizzle-orm";
import { check, index, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { tenants } from "./tenancy";
import { users } from "./auth";

// Every piece of media uploaded for a course (image, video, audio, document), with the provenance
// that justifies publishing it and the owner's approve/reject decision. Backs /admin/media.
//
// WHY THE ROWS LIVE HERE AND NOT IN A COMMITTED FILE, unlike the citations and the source checks:
// the assets themselves are uploaded at build time by whoever is authoring, one at a time, and the
// list changes between sessions with no diff to review. The decision is the durable part, and it is
// per tenant, so it belongs in a tenant-scoped table like every other content-adjacent decision.
//
// THE PROVENANCE TRIPLE (`credit`, `rights_status`, `source_url`) is NOT NULL on purpose. This
// catalog does not publish media it cannot account for: the courses are paid, so "found it on a
// search engine" is a takedown waiting to happen. `source_url` holds a URL for anything third party
// and a plain sentence for our own work ("shot by BAM, Accra, 2026-03"), which is why it is text and
// not a URL column; the board renders it as a link only when it parses as one.
//
// `status` defaults to `pending`, so an asset that is merely registered is never treated as
// reviewed. The safe state is the one that needs no action to be true, the same reasoning behind
// `courses.vetted_at` starting NULL.
export const mediaAssets = pgTable(
  "media_assets",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    /** The course this belongs to, or NULL for a general brand asset (a logo, an OG background). */
    courseSlug: text("course_slug"),
    /** Optional narrowing: which lesson uses it, so a reviewer can find it in context. */
    lessonSlug: text("lesson_slug"),
    kind: text("kind").notNull(),
    /** Cloudinary secure URL (or any hosted URL): what the preview and the lesson both point at. */
    url: text("url").notNull(),
    /** Cloudinary public_id, see buildPublicId() in src/lib/cloudinary-upload.ts. */
    publicId: text("public_id"),
    /** Alt text for an image. Reviewed here because a wrong alt is invisible to a sighted checker. */
    alt: text("alt"),
    caption: text("caption"),
    /** Who made it, as it should appear beside the asset. */
    credit: text("credit").notNull(),
    /** One of RIGHTS_STATUSES in src/lib/media-verify.ts; `unknown` can never be approved. */
    rightsStatus: text("rights_status").notNull(),
    /** Where it came from: a URL for third-party media, a plain provenance line for our own. */
    sourceUrl: text("source_url").notNull(),
    status: text("status").notNull().default("pending"),
    reviewedBy: text("reviewed_by").references(() => users.id, { onDelete: "set null" }),
    reviewedAt: timestamp("reviewed_at", { withTimezone: true }),
    /** Required to reject, optional to approve. Enforced by the API and the form alike. */
    reviewNote: text("review_note"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    // One row per uploaded URL per tenant: re-registering an asset updates its details instead of
    // stacking duplicates that each need reviewing again.
    unique("media_assets_tenant_url_uq").on(t.tenantId, t.url),
    index("media_assets_tenant_idx").on(t.tenantId),
    index("media_assets_tenant_status_idx").on(t.tenantId, t.status),
    index("media_assets_tenant_course_idx").on(t.tenantId, t.courseSlug),
    check("media_assets_kind_chk", sql`${t.kind} in ('image','video','audio','document')`),
    check("media_assets_status_chk", sql`${t.status} in ('pending','approved','rejected')`),
  ],
);

export type MediaAsset = typeof mediaAssets.$inferSelect;
