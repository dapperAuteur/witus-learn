import { describe, expect, it } from "vitest";
import {
  chaptersFromSegments,
  formatTimecode,
  parseSrt,
  parseTimecode,
  stripSubtitleFormatting,
} from "@/lib/srt";

describe("stripSubtitleFormatting", () => {
  it("removes SRT/HTML tags and collapses whitespace", () => {
    expect(stripSubtitleFormatting("<b>BAM,</b> the   fastest")).toBe("BAM, the fastest");
    expect(stripSubtitleFormatting('<font color="#fff">hi</font>')).toBe("hi");
  });
  it("removes ASS override tags and decodes entities", () => {
    expect(stripSubtitleFormatting("{\\an8}top &amp; bottom")).toBe("top & bottom");
  });
});

describe("parseSrt", () => {
  const sample = `1
00:00:04,100 --> 00:00:06,269
<b>Line one.</b>

2
00:00:07,000 --> 00:00:08,500
Line two
across wrap`;

  it("parses cues into seconds with stripped text", () => {
    const segs = parseSrt(sample);
    expect(segs).toHaveLength(2);
    expect(segs[0]).toEqual({ text: "Line one.", start: 4.1, end: 6.269 });
    // A wrapped cue joins its lines with a space.
    expect(segs[1].text).toBe("Line two across wrap");
    expect(segs[1].start).toBe(7);
  });

  it("removes a whole-hour base timecode by default (01:00:00 → 0)", () => {
    const hourBased = `1
01:00:04,100 --> 01:00:06,269
Intro.

2
01:00:10,000 --> 01:00:12,000
Next.`;
    const segs = parseSrt(hourBased);
    // Rebased from 3604.1 / 3610, so relative gaps (5.9s) are preserved.
    expect(segs[0]?.start).toBe(4.1);
    expect(segs[1]?.start).toBe(10);
  });

  it("keeps the hour base when told to", () => {
    const hourBased = `1
01:00:04,100 --> 01:00:06,269
Intro.`;
    expect(parseSrt(hourBased, { normalizeHourBase: false })[0].start).toBe(3604.1);
  });

  it("applies a manual offset and clamps starts at 0", () => {
    const segs = parseSrt(sample, { offsetSeconds: -10 });
    expect(segs[0].start).toBe(0); // 4.1 - 10 clamped to 0
    expect(segs[1].start).toBe(0); // 7 - 10 clamped to 0
  });

  it("accepts WEBVTT-style dot milliseconds and skips malformed blocks", () => {
    const vtt = `WEBVTT

00:00:01.000 --> 00:00:02.000
Dot ms.

garbage-with-no-timing`;
    const segs = parseSrt(vtt);
    expect(segs).toHaveLength(1);
    expect(segs[0]).toEqual({ text: "Dot ms.", start: 1, end: 2 });
  });

  it("returns [] for empty input", () => {
    expect(parseSrt("")).toEqual([]);
    expect(parseSrt("   \n\n  ")).toEqual([]);
  });
});

describe("chaptersFromSegments", () => {
  it("starts a chapter at a silence gap and titles it from the first line", () => {
    const segs = [
      { text: "Welcome to the show.", start: 0, end: 2 },
      { text: "Still the intro.", start: 2.2, end: 4 },
      { text: "Now a brand new topic entirely here.", start: 10, end: 13 }, // 6s gap → new chapter
    ];
    const chapters = chaptersFromSegments(segs, { minGapSeconds: 2.5, everySeconds: 999 });
    expect(chapters).toHaveLength(2);
    expect(chapters[0]).toEqual({ title: "Welcome to the show", start: 0 });
    expect(chapters[1]?.start).toBe(10);
    expect(chapters[1]?.title.startsWith("Now a brand new topic")).toBe(true);
  });

  it("forces a chapter at least every everySeconds", () => {
    const segs = Array.from({ length: 10 }, (_, i) => ({ text: `Line ${i}`, start: i * 60, end: i * 60 + 1 }));
    // No big gaps, but a 120s cadence over 540s → several chapters.
    const chapters = chaptersFromSegments(segs, { minGapSeconds: 999, everySeconds: 120 });
    expect(chapters.length).toBeGreaterThan(2);
    expect(chapters[0]?.start).toBe(0);
  });

  it("returns [] when no segment has timing", () => {
    expect(chaptersFromSegments([{ text: "no time" }])).toEqual([]);
  });
});

describe("timecode helpers", () => {
  it("formats seconds", () => {
    expect(formatTimecode(0)).toBe("0:00");
    expect(formatTimecode(83)).toBe("1:23");
    expect(formatTimecode(3725)).toBe("1:02:05");
  });
  it("parses timecodes and plain seconds", () => {
    expect(parseTimecode("1:23")).toBe(83);
    expect(parseTimecode("1:02:05")).toBe(3725);
    expect(parseTimecode("42")).toBe(42);
    expect(parseTimecode("")).toBeNull();
    expect(parseTimecode("abc")).toBeNull();
  });
});
