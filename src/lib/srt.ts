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

import type { TranscriptSegment } from "@/lib/media";

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
