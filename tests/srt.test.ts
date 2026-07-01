import { describe, expect, it } from "vitest";
import { parseSrt, stripSubtitleFormatting } from "@/lib/srt";

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
