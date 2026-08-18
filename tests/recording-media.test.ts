import { describe, expect, it } from "vitest";
import {
  downloadExtension,
  fallbackMime,
  formatSeconds,
  mediaConstraints,
  modeFromMime,
  pickRecordingMime,
} from "@/lib/recording-media";

describe("pickRecordingMime", () => {
  it("prefers opus-in-webm for audio when everything is supported", () => {
    expect(pickRecordingMime("audio", () => true)).toBe("audio/webm;codecs=opus");
  });
  it("prefers mp4/avc1 for video when everything is supported (plays back everywhere)", () => {
    expect(pickRecordingMime("video", () => true)).toBe("video/mp4;codecs=avc1");
  });
  it("walks down the candidate list to the first supported entry", () => {
    expect(pickRecordingMime("video", (m) => m === "video/webm")).toBe("video/webm");
    expect(pickRecordingMime("audio", (m) => m === "audio/mp4")).toBe("audio/mp4");
  });
  it("returns empty string when nothing is supported (browser picks its default)", () => {
    expect(pickRecordingMime("video", () => false)).toBe("");
  });
  it("returns empty string under node, where MediaRecorder does not exist", () => {
    expect(pickRecordingMime("audio")).toBe("");
    expect(pickRecordingMime("video")).toBe("");
  });
  it("never offers an audio container for video, or vice versa", () => {
    expect(pickRecordingMime("video", (m) => m.startsWith("audio/"))).toBe("");
    expect(pickRecordingMime("audio", (m) => m.startsWith("video/"))).toBe("");
  });
});

describe("fallbackMime / modeFromMime", () => {
  it("stamps a container matching the mode", () => {
    expect(fallbackMime("audio")).toBe("audio/webm");
    expect(fallbackMime("video")).toBe("video/webm");
  });
  it("round-trips: mode → fallback mime → mode", () => {
    expect(modeFromMime(fallbackMime("audio"))).toBe("audio");
    expect(modeFromMime(fallbackMime("video"))).toBe("video");
  });
  it("treats legacy/unknown mimes as audio (all pre-video pending takes were audio)", () => {
    expect(modeFromMime("audio/webm;codecs=opus")).toBe("audio");
    expect(modeFromMime(undefined)).toBe("audio");
    expect(modeFromMime("")).toBe("audio");
  });
  it("detects video mimes regardless of codec suffix", () => {
    expect(modeFromMime("video/mp4;codecs=avc1")).toBe("video");
    expect(modeFromMime("video/webm")).toBe("video");
  });
});

describe("downloadExtension", () => {
  it("keeps the audio mapping (mp4 container downloads as m4a)", () => {
    expect(downloadExtension("audio/webm;codecs=opus", "audio")).toBe("webm");
    expect(downloadExtension("audio/mp4", "audio")).toBe("m4a");
    expect(downloadExtension("audio/ogg", "audio")).toBe("ogg");
    expect(downloadExtension(undefined, "audio")).toBe("webm");
  });
  it("maps video containers to mp4/webm", () => {
    expect(downloadExtension("video/mp4;codecs=avc1", "video")).toBe("mp4");
    expect(downloadExtension("video/webm;codecs=vp9,opus", "video")).toBe("webm");
    expect(downloadExtension(undefined, "video")).toBe("webm");
  });
});

describe("mediaConstraints", () => {
  it("audio mode asks for the microphone only", () => {
    expect(mediaConstraints("audio")).toEqual({ audio: true });
  });
  it("video mode asks for mic + 720p front camera (plan 60 decision)", () => {
    const c = mediaConstraints("video");
    expect(c.audio).toBe(true);
    expect(c.video).toEqual({ facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } });
  });
});

describe("formatSeconds", () => {
  it("formats m:ss with zero-padded seconds", () => {
    expect(formatSeconds(0)).toBe("0:00");
    expect(formatSeconds(5)).toBe("0:05");
    expect(formatSeconds(65)).toBe("1:05");
    expect(formatSeconds(600)).toBe("10:00");
  });
  it("floors fractional seconds", () => {
    expect(formatSeconds(59.9)).toBe("0:59");
  });
});
