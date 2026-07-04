import { describe, expect, it } from "vitest";
import { playableAudioSrc } from "@/lib/media";

describe("playableAudioSrc", () => {
  const CLOUD = "https://res.cloudinary.com/witus";

  it("rewrites a Cloudinary WebM audio URL to an f_mp3 rendition (iOS Safari can't play WebM/Opus)", () => {
    const url = `${CLOUD}/video/upload/v1720000000/witus/recordings/faa-part-107/intro.webm`;
    expect(playableAudioSrc(url)).toBe(
      `${CLOUD}/video/upload/f_mp3/v1720000000/witus/recordings/faa-part-107/intro.webm`,
    );
  });

  it("handles the /auto/upload delivery path too", () => {
    const url = `${CLOUD}/auto/upload/v1/lesson-x.webm`;
    expect(playableAudioSrc(url)).toBe(`${CLOUD}/auto/upload/f_mp3/v1/lesson-x.webm`);
  });

  it("preserves existing transformations by prepending the format transform", () => {
    const url = `${CLOUD}/video/upload/q_auto/v1/a.webm`;
    expect(playableAudioSrc(url)).toBe(`${CLOUD}/video/upload/f_mp3/q_auto/v1/a.webm`);
  });

  it("does not double-apply when a format transform is already present", () => {
    const url = `${CLOUD}/video/upload/f_mp3/v1/a.webm`;
    expect(playableAudioSrc(url)).toBe(url);
  });

  it("leaves non-Cloudinary URLs unchanged (external files / embeds)", () => {
    const url = "https://example.com/audio/lesson.mp3";
    expect(playableAudioSrc(url)).toBe(url);
    expect(playableAudioSrc("")).toBe("");
  });

  it("does not touch Cloudinary IMAGE delivery URLs (only video/auto audio)", () => {
    const url = `${CLOUD}/image/upload/v1/cover.jpg`;
    expect(playableAudioSrc(url)).toBe(url);
  });
});
