// Pure helpers for the in-app lesson recorder (audio + video modes). Kept free of DOM state so
// they can be unit-tested; the MediaRecorder/getUserMedia wiring lives in
// src/components/lesson-recorder.tsx.

export type RecordingMode = "audio" | "video";

// Codec candidates in preference order, filtered through MediaRecorder.isTypeSupported at
// runtime. Safari and Chrome disagree (Safari records mp4, Chrome prefers webm), so neither a
// single mime nor a single order-free set works: the first supported candidate wins.
const MIME_CANDIDATES: Record<RecordingMode, readonly string[]> = {
  audio: ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg"],
  video: [
    "video/mp4;codecs=avc1", // Safari's recorder; plays back everywhere
    "video/webm;codecs=vp9,opus",
    "video/webm;codecs=vp8,opus",
    "video/webm",
    "video/mp4",
  ],
};

function defaultIsSupported(mime: string): boolean {
  return typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(mime);
}

/** Best supported MediaRecorder mimeType for the mode, or "" (= let the browser pick). */
export function pickRecordingMime(
  mode: RecordingMode,
  isSupported: (mime: string) => boolean = defaultIsSupported,
): string {
  return MIME_CANDIDATES[mode].find((m) => isSupported(m)) ?? "";
}

/** Container mime to stamp on blobs/persistence when the browser wouldn't name one. */
export function fallbackMime(mode: RecordingMode): string {
  return mode === "video" ? "video/webm" : "audio/webm";
}

/** Recording mode implied by a stored mime (for pending takes saved before `mode` existed). */
export function modeFromMime(mime: string | undefined): RecordingMode {
  return (mime ?? "").startsWith("video") ? "video" : "audio";
}

/** File extension for a downloaded take, from its container mime. */
export function downloadExtension(mime: string | undefined, mode: RecordingMode): string {
  const m = mime ?? "";
  if (mode === "video") return m.includes("mp4") ? "mp4" : "webm";
  return m.includes("mp4") ? "m4a" : m.includes("ogg") ? "ogg" : "webm";
}

/** getUserMedia constraints per mode. Video captures at 720p (decided in plan 60: plenty for a
 *  talking-head lesson, roughly half the bytes of 1080p) from the front camera, which is the
 *  self-view teleprompter case this recorder exists for. */
export function mediaConstraints(mode: RecordingMode): MediaStreamConstraints {
  if (mode === "audio") return { audio: true };
  return {
    audio: true,
    video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
  };
}

/** m:ss elapsed-time label. */
export function formatSeconds(seconds: number): string {
  const s = Math.floor(seconds % 60);
  const m = Math.floor(seconds / 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}
