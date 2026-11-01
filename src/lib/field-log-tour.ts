import { toEmbed } from "@/lib/media";
import { splitNoteLinks } from "@/lib/note-links";

// Tours from the field (plans/93 section 2): a photo or video logged in My Field Log fills a
// lesson's empty tour slot. Pure rules only, shared by the API routes, the lesson page, /teach/tours
// and the Field Log screen, so the refusal a publisher sees is the refusal the server enforces.
//
// LINK ONLY. Nothing here uploads or hosts a file: a tour is the capture's own https link, shown in
// the lesson the same way any embed is.
//
// RE-CHECKED ON EVERY READ. A published tour stores a copy of the link and a credit, but whether it
// may still be shown is decided again each time a lesson renders (liveTour below), against the
// capture and leg as they stand. A consent later set to "declined", a leg's permission note removed,
// or the capture deleted takes the tour off the lesson with no write path having to remember.

/** What the rules read from a project_captures row. */
export interface TourCaptureFacts {
  kind: string;
  consentStatus: string;
  involvesMinor: boolean;
  storageUrl: string | null;
  /**
   * "equirectangular" for a 360 photo, "flat" or null otherwise (plans/96 v2). Optional so a row read
   * before the column exists, or a caller that never selects it, reads as an ordinary photo.
   */
  projection?: string | null;
}

/** What the rules read from the capture's leg (null when the capture is on no leg). */
export interface TourLegFacts {
  permissionNote: string | null;
}

export type TourRefusal =
  | "consent_declined"
  | "minor_without_written_consent"
  | "not_photo_or_video"
  | "no_https_link"
  | "not_embeddable"
  | "no_permission_note";

/** Why a tour that WAS published is no longer shown. */
export type TourHiddenReason = TourRefusal | "capture_removed" | "link_changed";

export const TOUR_REFUSAL_COPY: Record<TourHiddenReason, string> = {
  consent_declined: "The subject declined. A declined capture is never published.",
  minor_without_written_consent:
    "This capture involves a minor. Only written consent from a parent or guardian allows publishing it.",
  not_photo_or_video: "Only a photo or a video can fill a tour slot.",
  no_https_link: "The capture needs a secure (https) link to where its file lives. Nothing is uploaded here.",
  not_embeddable:
    "This link cannot be shown inside a lesson. Link one file (a Google Drive file, a YouTube or Vimeo video, or an image or video file), not a folder, a channel, or an audio file.",
  no_permission_note:
    'The leg has no permission note. Add one first, for example "Public viewpoint, no permission needed."',
  capture_removed: "The capture this tour came from was deleted.",
  link_changed: "The capture's link changed after the tour was published.",
};

/** How a tour renders: an image, a video file, or an iframe embed. */
export interface TourMedia {
  kind: "image" | "video" | "iframe";
  src: string;
  /**
   * Set only on an IMAGE whose capture is marked as a 360 photo: the lesson shows it in the look-around
   * viewer. A 360 photo behind a Google Drive link is an iframe (Drive's own preview), so it shows flat;
   * the viewer needs the image file itself.
   */
  projection?: "equirectangular";
}

/** Does this tour open in the 360 viewer? */
export function isPanorama(media: TourMedia): boolean {
  return media.kind === "image" && media.projection === "equirectangular";
}

// ── 360 photos (plans/96 v2) ──────────────────────────────────────────────────

export const CAPTURE_PROJECTIONS = ["flat", "equirectangular"] as const;
export type CaptureProjection = (typeof CAPTURE_PROJECTIONS)[number];

/**
 * The projection to store for a capture, or an error. Only a photo can be a 360 photo; "flat" and null
 * are always fine (null means "not said", which renders as flat). Undefined means "leave it alone" on
 * an edit.
 */
export function checkCaptureProjection(
  kind: string,
  projection: CaptureProjection | null | undefined,
): { ok: true } | { ok: false; error: string } {
  if (projection === "equirectangular" && kind !== "photo") {
    return { ok: false, error: "Only a photo can be marked as a 360 photo." };
  }
  return { ok: true };
}

export type TourEligibility =
  | { ok: true; media: TourMedia }
  | { ok: false; reason: TourRefusal; message: string };

const IMAGE_FILE = /\.(jpe?g|png|webp|gif|avif)$/i;
const VIDEO_FILE = /\.(mp4|webm|ogv|mov|m4v)$/i;
const AUDIO_FILE = /\.(mp3|m4a|aac|wav|ogg|oga|flac)$/i;
const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;

/**
 * How a capture's link would render in a lesson, or null when it cannot be shown there.
 *
 * Narrower than toEmbed on purpose. toEmbed falls back to a generic iframe for any URL, which suits
 * an author pasting a link they have checked; a tour comes from a field log, so the shapes that are
 * certainly wrong are refused here instead of publishing an empty frame: a non-https link, a Drive
 * FOLDER (not one file), an audio file (a tour is pictures), and a YouTube link with no video id in
 * it (a channel or a search page).
 */
export function tourMediaFor(url: string | null | undefined): TourMedia | null {
  if (!url) return null;
  let u: URL;
  try {
    u = new URL(url.trim());
  } catch {
    return null;
  }
  if (u.protocol !== "https:") return null;
  const host = u.hostname.replace(/^www\./, "");
  if (host === "drive.google.com" && u.pathname.startsWith("/drive/folders")) return null;
  if (IMAGE_FILE.test(u.pathname)) return { kind: "image", src: u.toString() };
  if (VIDEO_FILE.test(u.pathname)) return { kind: "video", src: u.toString() };
  if (AUDIO_FILE.test(u.pathname)) return null;
  const embed = toEmbed(u.toString());
  if (!embed) return null;
  if (embed.kind === "youtube") {
    const id = embed.src.split("/embed/")[1] ?? "";
    if (!YOUTUBE_ID.test(id)) return null;
  }
  return { kind: "iframe", src: embed.src };
}

function isHttps(url: string | null): boolean {
  if (!url) return false;
  try {
    return new URL(url.trim()).protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * May this capture fill a tour slot? Every refusal is a hard rule, checked on the server before a
 * tour is written and again on every lesson read (liveTour). In order:
 *
 *   1. consent "declined": never, whatever else is true.
 *   2. involves a minor: only with "written" consent (a parent or guardian's yes, in writing).
 *   3. kind: photo or video only.
 *   4. an https storage link (link only: nothing is uploaded or hosted).
 *   5. a link that can be shown in a lesson (tourMediaFor).
 *   6. the capture's LEG carries a permission note. "Public viewpoint, no permission needed" is a
 *      valid note; a blank one, or no leg at all, is not.
 */
export function tourCaptureEligibility(capture: TourCaptureFacts, leg: TourLegFacts | null): TourEligibility {
  const refuse = (reason: TourRefusal): TourEligibility => ({ ok: false, reason, message: TOUR_REFUSAL_COPY[reason] });
  if (capture.consentStatus === "declined") return refuse("consent_declined");
  if (capture.involvesMinor && capture.consentStatus !== "written") return refuse("minor_without_written_consent");
  if (capture.kind !== "photo" && capture.kind !== "video") return refuse("not_photo_or_video");
  if (!isHttps(capture.storageUrl)) return refuse("no_https_link");
  const media = tourMediaFor(capture.storageUrl);
  if (!media) return refuse("not_embeddable");
  if (!leg?.permissionNote?.trim()) return refuse("no_permission_note");
  if (media.kind === "image" && capture.projection === "equirectangular") {
    return { ok: true, media: { ...media, projection: "equirectangular" } };
  }
  return { ok: true, media };
}

// ── People in frame (plans/96 v2) ─────────────────────────────────────────────
// Consent is logged per capture, for the SUBJECT the logger named. A street photo logged with consent
// "na" (no subject) still passes every rule above, yet can show a bystander's face or a child. So the
// publisher confirms this sentence before a tour is written. The server is the guard (422 without it);
// the checkbox in the picker only mirrors it. What is stored is the moment they confirmed, not who is
// in the picture.

/** The checkbox label in the picker, word for word. */
export const PEOPLE_ATTESTATION_LABEL =
  "No identifiable person appears in this capture, or each one has consent recorded on it.";

/** The 422 a publish without the attestation gets. */
export const PEOPLE_ATTESTATION_REQUIRED = `Confirm before publishing: ${PEOPLE_ATTESTATION_LABEL}`;

/** A stored tour joined to its capture and leg as they stand now. */
export interface StoredTour {
  url: string;
  creditLine: string;
  /** When the publisher confirmed the people-in-frame sentence; null for a tour published before v2. */
  peopleAttestedAt?: Date | null;
  /** null when the capture was deleted (the foreign key is set null). */
  capture: TourCaptureFacts | null;
  leg: TourLegFacts | null;
}

export type LiveTour =
  | { ok: true; media: TourMedia; credit: string }
  | { ok: false; reason: TourHiddenReason; message: string };

/**
 * Whether a published tour is shown right now. The capture must still exist, still point at the
 * link that was published (a changed link was never the one the publisher checked), and still pass
 * every rule in tourCaptureEligibility.
 */
export function liveTour(row: StoredTour): LiveTour {
  const hide = (reason: TourHiddenReason): LiveTour => ({ ok: false, reason, message: TOUR_REFUSAL_COPY[reason] });
  if (!row.capture) return hide("capture_removed");
  if ((row.capture.storageUrl ?? "").trim() !== row.url.trim()) return hide("link_changed");
  const e = tourCaptureEligibility(row.capture, row.leg);
  if (!e.ok) return hide(e.reason);
  return { ok: true, media: e.media, credit: row.creditLine };
}

/** A stored tour with the lesson it sits in, as the lesson and course pages read it. */
export interface StoredLessonTour extends StoredTour {
  lessonId: string;
  lessonType: string;
  contentUrl: string | null;
}

/**
 * The live field tours of a set of lessons, keyed by lesson id. A lesson that has since gained a
 * tour link of its own (contentUrl), or stopped being a virtual_tour, is no longer a slot: its own
 * content wins and the field tour is not shown.
 */
export function liveToursByLesson(rows: readonly StoredLessonTour[]): Map<string, { media: TourMedia; credit: string }> {
  const out = new Map<string, { media: TourMedia; credit: string }>();
  for (const row of rows) {
    if (!isEmptyTourSlot(row, false)) continue;
    const live = liveTour(row);
    if (live.ok) out.set(row.lessonId, { media: live.media, credit: live.credit });
  }
  return out;
}

export type TourSlotState =
  | { state: "empty" }
  | { state: "own_link" }
  | { state: "live"; credit: string; host: string; attested: boolean }
  | { state: "hidden"; credit: string; host: string; attested: boolean; reason: TourHiddenReason; message: string };

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/**
 * What /teach/tours says about one tour lesson: empty, filled by a tour link of its own, filled from
 * the field and shown, or filled from the field and hidden (with the reason). The host is shown so a
 * dead or unexpected link is visible at a glance.
 */
export function tourSlotState(
  lesson: { lessonType: string; contentUrl: string | null },
  stored: StoredTour | null,
): TourSlotState {
  if (lesson.contentUrl?.trim()) return { state: "own_link" };
  if (!stored) return { state: "empty" };
  const live = liveTour(stored);
  const host = hostOf(stored.url);
  // Q2 (BAM, 2026-11-01): a tour published before the attestation existed stays SHOWN, since every
  // one passed v1's consent rules; only this page labels it, until someone attests.
  const attested = stored.peopleAttestedAt != null;
  if (live.ok) return { state: "live", credit: stored.creditLine, host, attested };
  return { state: "hidden", credit: stored.creditLine, host, attested, reason: live.reason, message: live.message };
}

/**
 * Who may put a field capture into a lesson: the platform owner, the course's own instructor, or (Q3,
 * BAM 2026-11-01) a school admin of this tenant, unless the course is owner-only. The same line
 * canManageCourseReviewers draws: an owner-only course admits no brand_admin.
 */
export function canPublishTour(input: {
  isOwner: boolean;
  isInstructor: boolean;
  isSchoolAdmin?: boolean;
  ownerOnly?: boolean;
}): boolean {
  if (input.isOwner || input.isInstructor) return true;
  return Boolean(input.isSchoolAdmin) && !input.ownerOnly;
}

// ── Credit ────────────────────────────────────────────────────────────────────

export const TOUR_CREDIT_MAX = 400;

/**
 * The suggested credit line, shown under the tour as plain text. The publisher can edit it before
 * confirming. Reads as: "Photo by Brand Anthony McDonald at Fort Benjamin Harrison, Lawrence,
 * Indiana, October 2026." Month and year only: a day risks reading one off across time zones, and a
 * credit does not need it. No permission note and no subject name: those belong to the field log.
 */
export function buildTourCredit(input: {
  kind: string;
  capturedBy: string | null | undefined;
  legName: string;
  locationLabel?: string | null;
  capturedAt?: Date | string | null;
}): string {
  const noun = input.kind === "video" ? "Video" : "Photo";
  const who = input.capturedBy?.trim();
  const parts = [who ? `${noun} by ${who} at ${input.legName.trim()}` : `${noun} from the field at ${input.legName.trim()}`];
  if (input.locationLabel?.trim()) parts.push(input.locationLabel.trim());
  const when = input.capturedAt ? new Date(input.capturedAt) : null;
  if (when && !Number.isNaN(when.getTime())) {
    parts.push(when.toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" }));
  }
  const line = `${parts.join(", ").replace(/[.\s]+$/, "")}.`;
  return line.length > TOUR_CREDIT_MAX ? `${line.slice(0, TOUR_CREDIT_MAX - 1).trimEnd()}.` : line;
}

/** Tidy a credit the publisher typed: one line, trimmed, 1 to 400 characters. */
export function normalizeTourCredit(
  raw: string | null | undefined,
): { ok: true; credit: string } | { ok: false; error: string } {
  const credit = (raw ?? "").replace(/\s+/g, " ").trim();
  if (!credit) return { ok: false, error: "A tour needs a credit line." };
  if (credit.length > TOUR_CREDIT_MAX) return { ok: false, error: `Keep the credit to ${TOUR_CREDIT_MAX} characters.` };
  return { ok: true, credit };
}

// ── Slots ─────────────────────────────────────────────────────────────────────

/** A lesson a tour could fill: a virtual_tour with no tour link of its own and no field tour yet. */
export function isEmptyTourSlot(lesson: { lessonType: string; contentUrl: string | null }, hasFieldTour: boolean): boolean {
  return lesson.lessonType === "virtual_tour" && !lesson.contentUrl?.trim() && !hasFieldTour;
}

export interface TourSlotRef {
  courseId: string;
  courseSlug: string | null;
  lessonId: string;
  lessonSlug: string | null;
  /** The instructor's username, the first segment of the course's address. */
  username?: string | null;
}

/**
 * The slot a leg's notes point at, if any. A route file's notes carry the lesson each stop serves as
 * a site path (/bam/<course>/lesson/<slug>), which splitNoteLinks already recognizes. An exact lesson
 * match wins; otherwise a link to the course picks that course's first slot. Only the slots offered
 * (the caller's own, empty ones) can be suggested, so a note can never point the picker elsewhere.
 */
export function suggestSlotFromNotes<T extends TourSlotRef>(notes: string | null | undefined, slots: readonly T[]): T | null {
  if (!notes || slots.length === 0) return null;
  const links = splitNoteLinks(notes)
    .filter((s) => s.href && !s.external)
    .map((s) => s.href!.split("/").filter(Boolean));
  const userOk = (slot: T, user: string) => !slot.username || slot.username === user;
  for (const [user, course, kind, lesson] of links) {
    if (kind !== "lesson" || !lesson) continue;
    const hit = slots.find((s) => s.courseSlug === course && s.lessonSlug === lesson && userOk(s, user));
    if (hit) return hit;
  }
  for (const [user, course] of links) {
    if (!course) continue;
    const hit = slots.find((s) => s.courseSlug === course && userOk(s, user));
    if (hit) return hit;
  }
  return null;
}

// ── What a filled slot hides ──────────────────────────────────────────────────
// The 14 tour lessons were written before any tour existed, so their titles end "(360 tour,
// forthcoming)" or "(virtual tour, forthcoming)" and their bodies open with a paragraph saying the
// tour is not here yet. Once a tour is LIVE that is no longer true, so the suffix and that one
// paragraph are hidden on screen. The app never edits the course files (the seeder would only restore
// them), and an unfilled or hidden tour shows the lesson exactly as written. Removing the wording
// from a course file for good is a content follow-up per filled slot (plans/96 Q6; see TOUR SLOTS in
// src/lib/release-followups.ts).

const FORTHCOMING_SUFFIX = /\s*\((?:360|virtual) tour, forthcoming\)\s*$/i;
const FORTHCOMING_LEAD = /^\s*\*\*The (?:360|virtual) tour for this lesson is forthcoming\.\*\*/;

/** The lesson title to show: without the "(... tour, forthcoming)" suffix once a tour is live. */
export function displayTourTitle(title: string, filled: boolean): string {
  if (!filled) return title;
  const stripped = title.replace(FORTHCOMING_SUFFIX, "").trim();
  return stripped || title;
}

/** The body's opening "this tour is forthcoming" paragraph, or null when it does not open with one. */
export function forthcomingLead(text: string | null | undefined): string | null {
  if (!text || !FORTHCOMING_LEAD.test(text)) return null;
  const trimmed = text.replace(/^\s+/, "");
  const end = trimmed.search(/\n[ \t]*\n/);
  return end < 0 ? trimmed : trimmed.slice(0, end);
}

/** The body to show: without its forthcoming paragraph once a tour is live. */
export function displayTourBody(text: string | null, filled: boolean): string | null {
  if (!filled || text == null) return text;
  const lead = forthcomingLead(text);
  if (!lead) return text;
  return text.replace(/^\s+/, "").slice(lead.length).replace(/^\s+/, "");
}

/**
 * A lesson as every list surface should name it (plans/96 v2: offline downloads, in-course search,
 * /api/v1): title without the "(... tour, forthcoming)" suffix, and body without the forthcoming
 * paragraph, when its tour is live. `filled` is the set of lesson ids with a live tour
 * (liveToursByLesson); a lesson not in it comes back exactly as written.
 */
export function withTourDisplay<T extends { id: string; title: string; body?: string | null }>(
  lesson: T,
  filled: { has(id: string): boolean },
): T {
  if (!filled.has(lesson.id)) return lesson;
  const out = { ...lesson, title: displayTourTitle(lesson.title, true) };
  if (lesson.body !== undefined) out.body = displayTourBody(lesson.body ?? null, true);
  return out;
}
