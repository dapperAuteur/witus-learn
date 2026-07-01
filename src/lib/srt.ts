// SRT (SubRip) → transcript parser. Turns a .srt subtitle file (as produced by BAM's
// transcriber) into the app's TranscriptSegment[] shape — timestamps in SECONDS, all
// subtitle formatting stripped — so lessons can render a click-to-seek, follow-along
// transcript synced to the audio/video player.
//
// Two robustness details this handles:
//  1. Formatting: strips <b>/<i>/<u>/<font …> tags, ASS/SSA {\…} overrides, and decodes
//     the few HTML entities SRT uses.
//  2. Hour-base timecodes: many transcribers emit a 1-hour base (cues start at 01:00:00…)
//     while media playback starts at 0. By default we detect and subtract that whole-hour
//     base so the transcript lines up with the player. An explicit offsetSeconds can nudge
//     the sync further if a specific file needs it.

import type { Chapter, TranscriptSegment } from "@/lib/media";

export interface ParseSrtOptions {
  /** Subtract a whole-hour base timecode (e.g. 01:00:00 → 00:00:00) so timestamps match
   *  media that starts at 0. On by default. */
  normalizeHourBase?: boolean;
  /** Extra manual offset in seconds, applied after hour-base normalization. Positive =
   *  shift later, negative = earlier. Clamped so no start goes below 0. */
  offsetSeconds?: number;
}

// HH:MM:SS,mmm (SRT uses a comma; VTT uses a dot — accept both). Hours optional.
const TIME_RE = /(?:(\d{1,2}):)?(\d{1,2}):(\d{2})[,.](\d{1,3})/;

function timeToSeconds(match: RegExpMatchArray): number {
  const h = match[1] ? parseInt(match[1], 10) : 0;
  const m = parseInt(match[2], 10);
  const s = parseInt(match[3], 10);
  const ms = parseInt(match[4].padEnd(3, "0").slice(0, 3), 10);
  return h * 3600 + m * 60 + s + ms / 1000;
}

const round3 = (n: number): number => Math.round(n * 1000) / 1000;

/** Strip SRT/VTT inline formatting and decode basic entities; collapse whitespace. */
export function stripSubtitleFormatting(text: string): string {
  return text
    .replace(/<\/?[^>]+>/g, "") // <b> </b> <i> <font color="…"> …
    .replace(/\{\\?[^}]*\}/g, "") // ASS/SSA override tags like {\an8}
    .replace(/&nbsp;/gi, " ")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
}

interface RawCue {
  start: number;
  end?: number;
  text: string;
}

/**
 * Parse SRT (or WEBVTT) text into TranscriptSegment[] (seconds, formatting stripped).
 * Blocks are separated by blank lines; each has an optional index line, a timing line
 * (`start --> end`), then one or more text lines. Malformed blocks are skipped, not fatal.
 */
export function parseSrt(raw: string, opts: ParseSrtOptions = {}): TranscriptSegment[] {
  const { normalizeHourBase = true, offsetSeconds = 0 } = opts;

  const normalized = raw.replace(/^﻿/, "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
  if (!normalized) return [];

  const cues: RawCue[] = [];
  for (const block of normalized.split(/\n{2,}/)) {
    const lines = block.split("\n");
    const timingIdx = lines.findIndex((l) => l.includes("-->"));
    if (timingIdx === -1) continue;

    const [startPart, endPart = ""] = lines[timingIdx].split("-->");
    const startMatch = startPart.match(TIME_RE);
    if (!startMatch) continue;
    const endMatch = endPart.match(TIME_RE);

    const text = stripSubtitleFormatting(lines.slice(timingIdx + 1).join(" "));
    if (!text) continue;

    cues.push({
      start: timeToSeconds(startMatch),
      end: endMatch ? timeToSeconds(endMatch) : undefined,
      text,
    });
  }
  if (cues.length === 0) return [];

  // Detect and remove a whole-hour base timecode (e.g. everything offset by 01:00:00).
  let base = 0;
  if (normalizeHourBase) {
    const minStart = Math.min(...cues.map((c) => c.start));
    if (minStart >= 3600) base = Math.floor(minStart / 3600) * 3600;
  }
  const shift = offsetSeconds - base;

  return cues.map((c) => {
    const start = Math.max(0, round3(c.start + shift));
    const seg: TranscriptSegment = { text: c.text, start };
    if (c.end != null) seg.end = Math.max(start, round3(c.end + shift));
    return seg;
  });
}

export interface ChapterizeOptions {
  /** New chapter when the silent gap before a cue is at least this many seconds (natural
   *  topic/scene breaks tend to have longer pauses). */
  minGapSeconds?: number;
  /** Also force a new chapter at least every this many seconds, so no chapter runs too long. */
  everySeconds?: number;
  /** Max words kept in an auto-generated chapter title. */
  titleWords?: number;
}

/** First few words of a cue, tidied into a chapter title. */
function titleFromText(text: string, words: number): string {
  const parts = text.trim().split(/\s+/);
  let title = parts.slice(0, words).join(" ").replace(/[.,;:!?—-]+$/, "");
  if (parts.length > words) title += "…";
  return title.charAt(0).toUpperCase() + title.slice(1);
}

/**
 * Derive navigable chapters from transcript segments. SRT has no chapter data, so we
 * infer breaks from timing: a new chapter starts at a silence gap (>= minGapSeconds) or
 * at least every everySeconds, titled from the first line spoken in that segment. The
 * result is meant as a STARTING POINT the instructor edits (rename/retime) in the app.
 */
export function chaptersFromSegments(
  segments: TranscriptSegment[],
  opts: ChapterizeOptions = {},
): Chapter[] {
  const { minGapSeconds = 2.5, everySeconds = 120, titleWords = 8 } = opts;
  const timed = segments.filter((s) => s.start != null);
  if (timed.length === 0) return [];

  const chapters: Chapter[] = [];
  let lastChapterStart = -Infinity;
  let prevEnd: number | undefined;
  for (const seg of timed) {
    const start = seg.start as number;
    const gap = prevEnd != null ? start - prevEnd : Infinity;
    const first = chapters.length === 0;
    if (first || gap >= minGapSeconds || start - lastChapterStart >= everySeconds) {
      chapters.push({ title: titleFromText(seg.text, titleWords), start: round3(start) });
      lastChapterStart = start;
    }
    prevEnd = seg.end ?? start;
  }
  return chapters;
}

/** Seconds → "m:ss" (or "h:mm:ss" past an hour). For chapter/transcript UIs. */
export function formatTimecode(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const mm = h > 0 ? String(m).padStart(2, "0") : String(m);
  return `${h > 0 ? `${h}:` : ""}${mm}:${String(sec).padStart(2, "0")}`;
}

/** Parse "h:mm:ss" / "m:ss" / plain seconds → seconds. Returns null if unparseable. */
export function parseTimecode(value: string): number | null {
  const v = value.trim();
  if (v === "") return null;
  if (/^\d+(\.\d+)?$/.test(v)) return parseFloat(v);
  const parts = v.split(":").map((p) => Number(p));
  if (parts.some((n) => Number.isNaN(n))) return null;
  return parts.reduce((acc, n) => acc * 60 + n, 0);
}
