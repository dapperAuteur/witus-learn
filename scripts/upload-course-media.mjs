#!/usr/bin/env node
// Source, rights-check and upload public-domain course media to Cloudinary.
//
// WHY A SCRIPT AND NOT A MANUAL UPLOAD. Two reasons, and the second is the important one:
//   1. It is repeatable. The next course family runs the same tool with a different manifest.
//   2. It REFUSES to upload anything whose licence it cannot read and allow. The catalog's whole
//      trust signal is that it can account for what it publishes, and an image whose rights nobody
//      checked is the same class of problem as an uncited claim.
//
// LICENCE TIERS, and why CC BY / CC BY-SA are ALLOWED rather than refused.
//
// An earlier draft of this script refused share-alike on the grounds that "these courses are sold."
// That was wrong twice over: all five Here Be Dragons courses are FREE, and CC BY-SA expressly
// permits commercial use in any case. Refusing it would have dropped good images for no reason,
// which is its own kind of error.
//
// So three tiers, and the difference is what each OBLIGES us to do, not whether we may use it:
//   · `open`        public domain / CC0. No obligation. Credit shown anyway, because this catalog
//                   credits things.
//   · `attribution` CC BY. Attribution and a licence link are MANDATORY, so the credit line carries
//                   both and the manifest marks it.
//   · `share-alike` CC BY-SA. Same mandatory attribution, plus a share-alike term that attaches to
//                   ADAPTATIONS of the image. Placing an image beside lesson text is normally a
//                   collection rather than an adaptation, so it does not make the lesson share-alike,
//                   but that is a judgement rather than a certainty and this script does not pretend
//                   otherwise: it flags every such asset so BAM decides at /admin/media. Do not CROP
//                   or edit a share-alike image without thinking about that term.
//
// This is exactly what the verification surface is for. The script's job is to establish and record
// what each licence obliges; the approve/reject decision is a human one.
//
// USAGE
//   node scripts/upload-course-media.mjs --dry-run    # rights-check and report, upload nothing
//   node scripts/upload-course-media.mjs              # upload
//
// Output: a JSON manifest at scripts/data/media/<batch>.json carrying the provenance triple
// (credit, rights status, source URL) for every asset, which is what the /admin/media verification
// surface reads so BAM can confirm each one before a course goes live.

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const UA = "witus-learn-course-build/1.0 (https://learn.witus.online; tools@awews.com)";

// Licence short names we will publish, and what each obliges. Anything not matched here is refused,
// loudly, and skipped: an unreadable or non-free licence does not ship. Non-commercial (CC BY-NC*)
// and no-derivatives (CC BY-ND*) are deliberately absent and will be refused by the fallthrough.
const LICENCE_TIERS = [
  { tier: "open", match: /^(public domain|cc0|pd[- ])/i, obligation: null },
  {
    tier: "attribution",
    match: /^cc[ -]by[ -]?(\d|sa)?[^-]*$/i,
    obligation: "Attribution and a licence link are required wherever this image appears.",
  },
  {
    tier: "share-alike",
    match: /^cc[ -]by[ -]sa/i,
    obligation:
      "Attribution and a licence link are required. The share-alike term attaches to ADAPTATIONS of the image: placing it beside lesson text is normally a collection rather than an adaptation, but do not crop or edit it without considering that. Confirm at /admin/media before this course goes live.",
  },
];

/** Classify a licence. Share-alike is checked first because CC BY-SA also matches the CC BY shape. */
function classify(licence) {
  if (!licence) return null;
  if (/^cc[ -]by[ -]sa/i.test(licence)) return LICENCE_TIERS[2];
  if (/^(public domain|cc0|pd[- ])/i.test(licence)) return LICENCE_TIERS[0];
  if (/^cc[ -]by/i.test(licence) && !/nc|nd/i.test(licence)) return LICENCE_TIERS[1];
  return null;
}

// ── The batch ─────────────────────────────────────────────────────────────────────────────────────
// Exact Wikimedia Commons file titles, verified to exist and to carry an allowed licence before this
// file was written. `alt` is for a reader who cannot see the image and is NOT the caption; `caption`
// says what to look at and why it is here. Both are authored here rather than generated, because a
// generated alt text is worse than none.
// ── The batch ─────────────────────────────────────────────────────────────────────────────────────
// Batches live in scripts/data/media-batches/<name>.mjs, each exporting { batch, targets }. The
// script is the tool; a batch is data. That split is what the header promised and is what makes the
// next course family one new file and one command rather than an edit to this script.
const batchArg = (() => {
  const i = process.argv.indexOf("--batch");
  return i !== -1 ? process.argv[i + 1] : undefined;
})();
if (!batchArg) {
  console.error(
    "Usage: node scripts/upload-course-media.mjs --batch <name> [--dry-run]\n" +
      "Batches: scripts/data/media-batches/<name>.mjs",
  );
  process.exit(1);
}
const batchFile = join(ROOT, "scripts", "data", "media-batches", `${batchArg}.mjs`);
if (!existsSync(batchFile)) {
  console.error(`No batch file at ${batchFile}`);
  process.exit(1);
}
const { batch: BATCH, targets: TARGETS } = await import(pathToFileURL(batchFile).href);
if (!BATCH || !Array.isArray(TARGETS) || TARGETS.length === 0) {
  console.error(`Batch "${batchArg}" must export a non-empty { batch, targets }.`);
  process.exit(1);
}
console.log(`Batch "${BATCH}": ${TARGETS.length} target(s).`);


// ── Helpers ───────────────────────────────────────────────────────────────────────────────────────

function loadEnv() {
  const path = join(ROOT, ".env.local");
  if (!existsSync(path)) throw new Error("No .env.local found; cannot reach Cloudinary.");
  const env = {};
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return env;
}

const val = (em, key) => (em?.[key]?.value ?? "").toString();
const stripHtml = (s) => s.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

async function commonsMeta(title) {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo" +
    "&iiprop=url|extmetadata|mime|size&iiurlwidth=2400&titles=" +
    encodeURIComponent(title);
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Commons API ${res.status} for ${title}`);
  const data = await res.json();
  const pages = data?.query?.pages ?? {};
  const page = Object.values(pages)[0];
  if (!page || page.missing !== undefined) throw new Error(`Commons file not found: ${title}`);
  const ii = page.imageinfo?.[0];
  if (!ii) throw new Error(`No imageinfo for ${title}`);
  const em = ii.extmetadata ?? {};
  return {
    licence: stripHtml(val(em, "LicenseShortName")),
    artist: stripHtml(val(em, "Artist")) || "Unknown",
    credit: stripHtml(val(em, "Credit")),
    usageTerms: stripHtml(val(em, "UsageTerms")),
    descriptionUrl: ii.descriptionurl,
    fileUrl: ii.url,
    // Cloudinary's image cap on this plan is 10MB and several of these scans are far larger (the
    // Carta Marina original is 5016px wide). Commons renders a width-limited copy on demand, which
    // is both small enough and far more than a lesson needs, so prefer it and keep the original as
    // the fallback for images that were already small.
    thumbUrl: ii.thumburl ?? null,
    mime: ii.mime,
    bytes: ii.size,
  };
}

async function cloudinaryUpload(env, { buffer, mime, publicId, context }) {
  const cloud = env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const key = env.CLOUDINARY_API_KEY;
  const secret = env.CLOUDINARY_API_SECRET;
  if (!cloud || !key || !secret) throw new Error("Cloudinary cloud name, API key and secret are all required.");

  const timestamp = Math.floor(Date.now() / 1000);
  // Signed upload: sha1 over the alphabetically sorted params we send, plus the secret.
  const signed = { context, public_id: publicId, timestamp: String(timestamp) };
  const toSign = Object.keys(signed)
    .sort()
    .map((k) => `${k}=${signed[k]}`)
    .join("&");
  const signature = createHash("sha1").update(toSign + secret).digest("hex");

  const form = new FormData();
  form.append("file", new Blob([buffer], { type: mime }));
  form.append("public_id", publicId);
  form.append("timestamp", String(timestamp));
  form.append("context", context);
  form.append("api_key", key);
  form.append("signature", signature);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, {
    method: "POST",
    body: form,
  });
  const body = await res.json();
  if (!res.ok) throw new Error(`Cloudinary ${res.status}: ${body?.error?.message ?? "unknown"}`);
  return body;
}

// ── Main ──────────────────────────────────────────────────────────────────────────────────────────

// Every target names a course slug and a lesson slug. Check them against the actual course data
// FIRST, because an asset pointing at a lesson that does not exist is invisible: it uploads happily,
// lands in the manifest, and then simply never renders anywhere. Two of these were wrong on the first
// run and only a separate check caught them.
{
  let bad = 0;
  for (const t of TARGETS) {
    // The data file is USUALLY named after the course slug, and sometimes is not: the route/place
    // courses were authored with short file names (indiana-avenue-course.ts) and long registered
    // slugs (indiana-avenue-a-district-and-what-replaced-it). A target may therefore name its file
    // explicitly. Without this the check refused perfectly good targets, which would have been read
    // as "that course does not exist" rather than "this script guessed the filename".
    const file = join(ROOT, "scripts", "data", t.file ?? `${t.course}-course.ts`);
    if (!existsSync(file)) {
      console.log(`! ${t.commons}: no course file at ${t.file ?? `${t.course}-course.ts`}`);
      bad++;
      continue;
    }
    const src = readFileSync(file, "utf8");
    if (!src.includes(`slug: "${t.lesson}"`)) {
      console.log(`! ${t.commons}: lesson "${t.lesson}" does not exist in ${t.course}`);
      bad++;
    }
  }
  if (bad > 0) {
    console.error(`\nRefusing to run: ${bad} target(s) point at a lesson or course that does not exist.`);
    process.exit(1);
  }
}

const dryRun = process.argv.includes("--dry-run");
const env = loadEnv();
const manifest = [];
let refused = 0;
let uploaded = 0;

for (const t of TARGETS) {
  process.stdout.write(`\n${t.commons}\n`);
  let meta;
  try {
    meta = await commonsMeta(t.commons);
  } catch (err) {
    console.log(`  ! SKIPPED, could not read metadata: ${err.message}`);
    refused++;
    continue;
  }

  const tier = classify(meta.licence);
  console.log(`  licence: ${meta.licence || "(none reported)"}${tier ? ` [${tier.tier}]` : ""}`);
  if (!tier) {
    console.log("  ! REFUSED. Licence is missing, non-commercial, no-derivatives, or unreadable.");
    refused++;
    continue;
  }
  if (tier.obligation) console.log(`  obligation: ${tier.obligation}`);

  const publicId = `witus/courses/${BATCH}/${t.course}/${t.name}`;
  const creditLine = `${meta.artist}. ${t.commons.replace(/^File:/, "")}. ${meta.licence}. Via Wikimedia Commons. ${meta.descriptionUrl}`;

  if (dryRun) {
    console.log(`  would upload -> ${publicId}`);
    manifest.push({ ...t, publicId, url: null, credit: creditLine, rightsStatus: meta.licence, rightsTier: tier.tier, rightsObligation: tier.obligation, sourceUrl: meta.descriptionUrl });
    continue;
  }

  const downloadUrl = meta.thumbUrl ?? meta.fileUrl;
  const fileRes = await fetch(downloadUrl, { headers: { "User-Agent": UA } });
  if (!fileRes.ok) {
    console.log(`  ! SKIPPED, download failed: ${fileRes.status}`);
    refused++;
    continue;
  }
  const buffer = Buffer.from(await fileRes.arrayBuffer());

  const context = `alt=${t.alt.replace(/[|=]/g, " ")}|credit=${creditLine.replace(/[|=]/g, " ")}`;
  let up;
  try {
    up = await cloudinaryUpload(env, { buffer, mime: meta.mime, publicId, context });
  } catch (err) {
    // Never abort the batch: a failure on asset 7 must not discard the manifest entries for 1 to 6.
    console.log(`  ! SKIPPED, upload failed: ${err.message}`);
    refused++;
    continue;
  }
  console.log(`  uploaded -> ${up.secure_url} (${up.width}x${up.height})`);
  uploaded++;

  manifest.push({
    course: t.course,
    lesson: t.lesson,
    kind: "image",
    url: up.secure_url,
    publicId: up.public_id,
    alt: t.alt,
    caption: t.caption,
    credit: creditLine,
    rightsStatus: meta.licence,
    rightsTier: tier.tier,
    rightsObligation: tier.obligation,
    sourceUrl: meta.descriptionUrl,
    width: up.width,
    height: up.height,
  });
}

const outDir = join(ROOT, "scripts", "data", "media");
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, `${BATCH}.json`);
writeFileSync(outFile, JSON.stringify(manifest, null, 2) + "\n");

console.log(
  `\n${dryRun ? "DRY RUN. " : ""}${uploaded} uploaded, ${refused} refused or skipped, ${TARGETS.length} considered.`,
);
console.log(`Manifest: ${outFile}`);
if (refused > 0) {
  console.log("Refused assets are not a failure. An image whose rights cannot be established does not ship.");
}
