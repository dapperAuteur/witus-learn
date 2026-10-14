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
  return { ok: true, media };
}

/** A stored tour joined to its capture and leg as they stand now. */
export interface StoredTour {
  url: string;
  creditLine: string;
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

/** Who may put a field capture into a lesson: the platform owner, or the course's own instructor. */
export function canPublishTour(input: { isOwner: boolean; isInstructor: boolean }): boolean {
  return input.isOwner || input.isInstructor;
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
// The 13 tour lessons were written before any tour existed, so their titles end "(360 tour,
// forthcoming)" or "(virtual tour, forthcoming)" and their bodies open with a paragraph saying the
// tour is not here yet. Once a tour is LIVE that is no longer true, so the suffix and that one
// paragraph are hidden on screen. The course files are not edited (the seeder would only restore
// them), and an unfilled or hidden tour shows the lesson exactly as written.

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
