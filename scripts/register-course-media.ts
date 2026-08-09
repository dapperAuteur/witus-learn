import { readFileSync } from "node:fs";
import { and, eq } from "drizzle-orm";
import { db } from "../src/db/client";
import * as schema from "../src/db/schema";

/**
 * Register an uploaded media manifest into `media_assets`, so the assets appear in the review queue
 * at /admin/media and BAM can approve or reject each one before a course goes live.
 *
 *   pnpm register:media scripts/data/media/here-be-dragons.json
 *
 * WHY A SCRIPT RATHER THAN THE UPLOADER DOING IT. The uploader (scripts/upload-course-media.mjs)
 * talks to Cloudinary and the public internet and deliberately touches no database: it is safe to run
 * anywhere, including before a migration has been applied. This step needs the DB and needs migration
 * 0049, so it is separate and idempotent.
 *
 * IDEMPOTENT, AND IT PRESERVES DECISIONS. `media_assets` is unique on (tenant_id, url), so re-running
 * refreshes an asset's details rather than stacking duplicates. Critically, it does NOT reset
 * `status`, `reviewed_by`, `reviewed_at` or `review_note`: re-running the registration after fixing a
 * caption must not silently un-approve something a human already looked at. If a re-run should force
 * re-review, that is a deliberate act and belongs in the review UI, not in a bulk script.
 *
 * The rights status is mapped from the manifest's licence tier. `unknown` can never be approved
 * (src/lib/media-verify.ts), which is the correct resting place for anything this cannot classify.
 */

interface ManifestEntry {
  course: string;
  lesson: string;
  kind: string;
  url: string;
  publicId: string;
  alt: string;
  caption: string;
  credit: string;
  rightsStatus: string;
  rightsTier?: string | null;
  sourceUrl: string;
}

/** Wikimedia's licence short names, mapped onto the app's RIGHTS_STATUSES vocabulary. */
function toRightsStatus(licence: string): string {
  const l = licence.trim().toLowerCase();
  if (l.startsWith("cc0")) return "cc0";
  if (l.startsWith("public domain") || l.startsWith("pd")) return "public-domain";
  if (l.startsWith("cc by-sa") || l.startsWith("cc-by-sa")) return "cc-by-sa";
  if (l.startsWith("cc by") || l.startsWith("cc-by")) return "cc-by";
  // Anything unrecognised parks at `unknown`, which the board refuses to approve. Guessing here
  // would defeat the entire point of the provenance triple.
  return "unknown";
}

async function main() {
  const path = process.argv[2];
  if (!path) {
    console.error("Usage: pnpm register:media <manifest.json>");
    process.exit(1);
  }

  const manifest: ManifestEntry[] = JSON.parse(readFileSync(path, "utf-8"));
  if (!Array.isArray(manifest) || manifest.length === 0) {
    console.error(`No entries in ${path}.`);
    process.exit(1);
  }

  // The learn.witus.online tenant, the same one seed-courses.ts writes to.
  const [tenant] = await db
    .select({ id: schema.tenants.id, slug: schema.tenants.slug })
    .from(schema.tenants)
    .where(eq(schema.tenants.slug, "learn-witus"))
    .limit(1);
  if (!tenant) {
    console.error('No tenant with slug "learn-witus". Seed the tenant first.');
    process.exit(1);
  }

  let inserted = 0;
  let refreshed = 0;
  let unknownRights = 0;

  for (const entry of manifest) {
    if (!entry.url) continue;
    const rightsStatus = toRightsStatus(entry.rightsStatus);
    if (rightsStatus === "unknown") unknownRights++;

    const existing = await db
      .select({ id: schema.mediaAssets.id, status: schema.mediaAssets.status })
      .from(schema.mediaAssets)
      .where(
        and(eq(schema.mediaAssets.tenantId, tenant.id), eq(schema.mediaAssets.url, entry.url)),
      )
      .limit(1);

    const fields = {
      courseSlug: entry.course ?? null,
      lessonSlug: entry.lesson ?? null,
      kind: entry.kind ?? "image",
      publicId: entry.publicId ?? null,
      alt: entry.alt ?? null,
      caption: entry.caption ?? null,
      credit: entry.credit,
      rightsStatus,
      sourceUrl: entry.sourceUrl,
    };

    if (existing[0]) {
      // Details only. Status and the review trail are deliberately untouched, see the note above.
      await db
        .update(schema.mediaAssets)
        .set(fields)
        .where(eq(schema.mediaAssets.id, existing[0].id));
      refreshed++;
      console.log(`= ${entry.course}/${entry.lesson} (${existing[0].status})`);
    } else {
      await db.insert(schema.mediaAssets).values({ tenantId: tenant.id, url: entry.url, ...fields });
      inserted++;
      console.log(`+ ${entry.course}/${entry.lesson} [${rightsStatus}]`);
    }
  }

  console.log(
    `\n${inserted} registered, ${refreshed} refreshed, ${manifest.length} in the manifest.`,
  );
  if (unknownRights > 0) {
    console.log(
      `${unknownRights} asset(s) parked at rights status "unknown"; the board will not let them be approved until that is settled.`,
    );
  }
  console.log("Review them at /admin/media before the courses go live.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
