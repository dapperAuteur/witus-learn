"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  deletePending,
  getPending,
  savePending,
  type PendingRecording,
} from "@/lib/recording-store";
import {
  downloadExtension,
  fallbackMime,
  formatSeconds,
  mediaConstraints,
  modeFromMime,
  pickRecordingMime,
  type RecordingMode,
} from "@/lib/recording-media";
import { buildPublicId, formatBytes, MAX_UPLOAD_BYTES, uploadToCloudinary } from "@/lib/cloudinary-upload";

// When the CURRENT part nears the cap, finalize it and roll into a new part (a hair under the
// cap so every part uploads). A long take becomes several ordered parts, played back seamlessly.
// Video hits this far sooner than audio (a 720p take runs roughly 15-25 MB per minute), so a
// long video lesson simply becomes more parts; the pipeline is the same.
const PART_ROLLOVER_BYTES = MAX_UPLOAD_BYTES - 4 * 1024 * 1024;

// In-app, offline-first, per-lesson recorder with two first-class modes, audio and video.
//  capture (MediaRecorder) → persist to IndexedDB immediately → upload to Cloudinary when online
//  → attach to the lesson (contentUrl [+ mediaParts] + lessonType=audio|video + mark recorded).
// A recording over the plan's upload cap is split into ordered <cap parts AT RECORD TIME (the
// MediaRecorder is rotated), so no take is ever cut off. Nothing is lost if the tab closes or
// you're offline: parts wait in IndexedDB and drain when connectivity returns. Nothing here
// publishes anything: uploading attaches the file to the (still unpublished-as-it-was) lesson.
// Video specifics: 720p front camera (plan 60 decision), a live self-view that is MIRRORED FOR
// PREVIEW ONLY (the recorded file is not mirrored), and a best-effort screen wake lock so a
// propped-up phone doesn't sleep mid-take.
type Status = "idle" | "recording" | "local" | "offline" | "uploading" | "uploaded" | "error";

/** Best-effort screen wake lock (mobile: a propped phone dims and sleeps mid-take without it). */
async function requestWakeLock(): Promise<WakeLockSentinel | null> {
  try {
    if (typeof navigator !== "undefined" && "wakeLock" in navigator) {
      return await navigator.wakeLock.request("screen");
    }
  } catch {
    /* not supported / denied (e.g. battery saver) — recording still works */
  }
  return null;
}

/** Live camera self-view. Mirrored so the speaker looks natural; the recording itself is NOT
 *  mirrored (the raw stream goes to MediaRecorder, this transform is preview-only). */
export function CameraPreview({ stream, className }: { stream: MediaStream; className?: string }) {
  return (
    <video
      ref={(el) => {
        if (el && el.srcObject !== stream) el.srcObject = stream;
      }}
      autoPlay
      muted
      playsInline
      aria-label="Live camera preview (mirrored)"
      className={`-scale-x-100 bg-black ${className ?? ""}`}
    />
  );
}

export function LessonRecorder({
  courseId,
  lessonId,
  onUploaded,
  courseLabel,
  lessonLabel,
  onPreviewStream,
}: {
  courseId: string;
  lessonId: string;
  onUploaded?: () => void;
  /** Course + lesson names → a readable Cloudinary public_id (else a random id). */
  courseLabel?: string;
  lessonLabel?: string;
  /** When provided, the parent renders the camera self-view (gets the live stream while a video
   *  take records, then null). When absent the recorder renders its own inline preview. */
  onPreviewStream?: (stream: MediaStream | null) => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false); // recording paused (devices still held, nothing captured)
  const [bytes, setBytes] = useState(0);
  const [parts, setParts] = useState(0); // finalized parts so far (multi-part takes)
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<RecordingMode>("audio");
  const [previewStream, setPreviewStream] = useState<MediaStream | null>(null);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const partsRef = useRef<Blob[]>([]); // finalized part blobs, in order
  const chunksRef = useRef<BlobPart[]>([]); // current part's chunks
  const partBytesRef = useRef(0); // current part size
  const totalBytesRef = useRef(0); // all parts + current
  const finishingRef = useRef(false); // true = user stopped (final); false = auto rollover
  const pausedRef = useRef(false); // mirrors `paused` for the interval + duration accounting
  const elapsedRef = useRef(0); // ACTIVE seconds recorded (excludes paused gaps)
  const startedAtRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);

  // Upload each part in order, then attach the lesson (contentUrl mirrors part 1; mediaParts holds
  // the full ordered list when there's more than one). Clears local copy only on success.
  const upload = useCallback(
    async (rec: PendingRecording) => {
      if (typeof navigator !== "undefined" && !navigator.onLine) {
        setStatus("offline");
        return;
      }
      setStatus("uploading");
      setProgress(0);
      setError(null);
      try {
        const urls: string[] = [];
        const n = rec.parts.length;
        // Readable Cloudinary name (e.g. witus/recordings/faa-part-107/intro[-part2]); falls back
        // to the lessonId when titles aren't provided, and to a random id if even that's empty.
        const humanBase = buildPublicId("witus/recordings", courseLabel, lessonLabel ?? lessonId);
        for (let i = 0; i < n; i++) {
          const name = n > 1 ? `lesson-${lessonId}-part${i + 1}.webm` : `lesson-${lessonId}.webm`;
          const publicId = humanBase ? (n > 1 ? `${humanBase}-part${i + 1}` : humanBase) : undefined;
          // Cumulative progress across parts (each part 0..100 → overall 0..100).
          const url = await uploadToCloudinary(
            rec.parts[i],
            name,
            (p) => setProgress(Math.round(((i + p / 100) / n) * 100)),
            publicId,
          );
          urls.push(url);
        }

        // Takes saved before `mode` existed carry no mode field: infer audio/video from the mime.
        const lessonType = rec.mode ?? modeFromMime(rec.mime);
        const patch = await fetch(`/api/courses/${courseId}/lessons/${lessonId}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            contentUrl: urls[0],
            mediaParts: urls.length > 1 ? urls.map((url) => ({ url })) : null,
            lessonType,
            recorded: true,
            durationSeconds: Math.round(rec.durationSeconds) || null,
          }),
        });
        if (!patch.ok) throw new Error("Recorded, but couldn't attach it to the lesson.");

        await deletePending(lessonId);
        setStatus("uploaded");
        onUploaded?.();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Upload failed.");
        setStatus("error");
      }
    },
    [courseId, lessonId, onUploaded, courseLabel, lessonLabel],
  );

  // On mount: resume any pending recording (survives reloads). Auto-upload if we're online.
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const rec = await getPending(lessonId);
      if (cancelled || !rec) return;
      if (typeof navigator !== "undefined" && navigator.onLine) void upload(rec);
      else setStatus("offline");
    })();
    return () => {
      cancelled = true;
    };
  }, [lessonId, upload]);

  // Drain the queue when connectivity returns (while a recording is waiting or errored).
  useEffect(() => {
    async function onOnline() {
      if (status !== "offline" && status !== "error") return;
      const rec = await getPending(lessonId);
      if (rec) void upload(rec);
    }
    window.addEventListener("online", onOnline);
    return () => window.removeEventListener("online", onOnline);
  }, [status, lessonId, upload]);

  // Unmount mid-take (e.g. the teleprompter's lesson switch remounts this component via `key`):
  // finalize instead of leaking a live camera/mic. Marking finishing makes the recorder's onstop
  // persist what it has and hand the parent back a null preview stream; the pending take then
  // uploads (or waits in IndexedDB). Refs only — safe under StrictMode's double-invoke.
  const onPreviewStreamRef = useRef(onPreviewStream);
  useEffect(() => {
    onPreviewStreamRef.current = onPreviewStream;
  }, [onPreviewStream]);
  useEffect(() => {
    return () => {
      if (recorderRef.current && recorderRef.current.state !== "inactive") {
        finishingRef.current = true;
        if (recorderRef.current.state === "paused") recorderRef.current.resume();
        recorderRef.current.stop();
      }
      streamRef.current?.getTracks().forEach((t) => t.stop());
      void wakeLockRef.current?.release().catch(() => {});
      wakeLockRef.current = null;
      onPreviewStreamRef.current?.(null);
    };
  }, []);

  // The wake lock is dropped when the tab backgrounds; re-acquire it when a video take comes
  // back into view (the listener mutates only refs, no state).
  useEffect(() => {
    if (status !== "recording" || mode !== "video") return;
    const onVisible = () => {
      if (document.visibilityState === "visible") {
        void requestWakeLock().then((wl) => {
          if (wl) wakeLockRef.current = wl;
        });
      }
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [status, mode]);

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function clearPreview() {
    setPreviewStream(null);
    onPreviewStream?.(null);
  }

  async function startRecording(nextMode: RecordingMode) {
    setError(null);
    setMode(nextMode);
    try {
      const stream = await navigator.mediaDevices.getUserMedia(mediaConstraints(nextMode));
      streamRef.current = stream;
      const mime = pickRecordingMime(nextMode);
      partsRef.current = [];
      chunksRef.current = [];
      partBytesRef.current = 0;
      totalBytesRef.current = 0;
      finishingRef.current = false;
      pausedRef.current = false;
      elapsedRef.current = 0;
      setParts(0);
      setBytes(0);
      setPaused(false);
      if (nextMode === "video") {
        setPreviewStream(stream);
        onPreviewStream?.(stream);
        wakeLockRef.current = await requestWakeLock();
      }

      // Persist the growing recording after each part finalizes — nothing is lost on a crash.
      async function persist(): Promise<PendingRecording> {
        const rec: PendingRecording = {
          lessonId,
          courseId,
          parts: [...partsRef.current],
          mime: mime || fallbackMime(nextMode),
          mode: nextMode,
          // Active seconds only — a paused stretch adds no media, so it shouldn't add duration.
          durationSeconds: elapsedRef.current,
          createdAt: Date.now(),
        };
        await savePending(rec);
        return rec;
      }

      // Build a recorder for one part; on stop it either rolls into the next part or finalizes.
      function makeRecorder(): MediaRecorder {
        const mr = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
        chunksRef.current = [];
        partBytesRef.current = 0;
        mr.ondataavailable = (e) => {
          if (e.data.size <= 0) return;
          chunksRef.current.push(e.data);
          partBytesRef.current += e.data.size;
          totalBytesRef.current += e.data.size;
          setBytes(totalBytesRef.current);
          // Near the cap: roll this part over into a fresh one (no cut-off).
          if (partBytesRef.current >= PART_ROLLOVER_BYTES && mr.state === "recording" && !finishingRef.current) {
            mr.stop();
          }
        };
        mr.onstop = async () => {
          const blob = new Blob(chunksRef.current, { type: mime || fallbackMime(nextMode) });
          if (blob.size > 0) {
            partsRef.current.push(blob);
            setParts(partsRef.current.length);
          }
          const rec = await persist();
          if (finishingRef.current) {
            stopTimer();
            streamRef.current?.getTracks().forEach((t) => t.stop());
            clearPreview();
            void wakeLockRef.current?.release().catch(() => {});
            wakeLockRef.current = null;
            setStatus("local");
            void upload(rec);
          } else {
            // Roll into the next part on the same live stream.
            const next = makeRecorder();
            recorderRef.current = next;
            next.start(2000);
          }
        };
        return mr;
      }

      const mr = makeRecorder();
      recorderRef.current = mr;
      startedAtRef.current = Date.now();
      setElapsed(0);
      // Tick only while actively recording — a paused stretch doesn't advance the clock.
      timerRef.current = setInterval(() => {
        if (pausedRef.current) return;
        elapsedRef.current += 1;
        setElapsed(elapsedRef.current);
      }, 1000);
      mr.start(2000); // emit data every 2s so we can track size + roll parts near the cap
      setStatus("recording");
    } catch {
      setError(
        nextMode === "video"
          ? "Couldn't access the camera and microphone. Check the browser permissions."
          : "Couldn't access the microphone. Check the browser permission.",
      );
      clearPreview();
      setStatus("idle");
    }
  }

  // Pause/resume the take (multi-session recording): MediaRecorder.pause() keeps the devices + the
  // in-progress blob, emits nothing while paused, and stitches seamlessly on resume — so a
  // course can be recorded across several sittings without stopping/re-uploading.
  function togglePause() {
    const mr = recorderRef.current;
    if (!mr) return;
    if (mr.state === "recording") {
      mr.pause();
      pausedRef.current = true;
      setPaused(true);
    } else if (mr.state === "paused") {
      mr.resume();
      pausedRef.current = false;
      setPaused(false);
    }
  }

  function stopRecording() {
    finishingRef.current = true;
    pausedRef.current = false;
    // A paused recorder must resume before it can flush its final data on stop().
    if (recorderRef.current?.state === "paused") recorderRef.current.resume();
    recorderRef.current?.stop();
  }

  async function retryUpload() {
    const rec = await getPending(lessonId);
    if (rec) void upload(rec);
    else setStatus("idle");
  }

  async function discard() {
    await deletePending(lessonId);
    setStatus("idle");
    setError(null);
  }

  // Save the take to the device as a safety net (especially if the upload fails). Uses the
  // in-memory blobs, falling back to the IndexedDB copy (survives a reload). Named from the
  // course + lesson so the file is recognizable.
  async function downloadRecording() {
    let blobs = partsRef.current;
    let mime = blobs[0]?.type;
    if (!blobs.length) {
      const rec = await getPending(lessonId);
      if (rec) {
        blobs = rec.parts;
        mime = rec.mime;
      }
    }
    if (!blobs.length) return;
    const slug = buildPublicId(courseLabel, lessonLabel ?? lessonId)?.replace(/\//g, "-") || `lesson-${lessonId}`;
    const ext = downloadExtension(mime, modeFromMime(mime));
    blobs.forEach((blob, i) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = blobs.length > 1 ? `${slug}-part${i + 1}.${ext}` : `${slug}.${ext}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    });
  }

  const btn = "min-h-11 rounded-md border border-neutral-300 px-3 text-sm dark:border-neutral-700";
  const canDownload = ["local", "uploading", "offline", "uploaded", "error"].includes(status);

  return (
    <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
      {status === "idle" ? (
        <>
          <button type="button" onClick={() => startRecording("audio")} className={btn}>
            🎙 Record audio
          </button>
          <button type="button" onClick={() => startRecording("video")} className={btn}>
            🎥 Record video
          </button>
        </>
      ) : null}

      {status === "recording" ? (
        <>
          <span
            role="status"
            className={`inline-flex items-center gap-1.5 font-medium ${paused ? "text-amber-600" : "text-red-600"}`}
          >
            <span className={`h-2 w-2 rounded-full ${paused ? "bg-amber-500" : "animate-pulse bg-red-600"}`} />
            {formatSeconds(elapsed)}
            {paused ? " · paused" : ""}
          </span>
          <span className="text-xs text-neutral-600">
            {formatBytes(bytes)}
            {parts > 0 ? ` · part ${parts + 1}` : ""}
          </span>
          <button type="button" onClick={togglePause} className={btn}>
            {paused ? "▶ Resume" : "⏸ Pause"}
          </button>
          <button type="button" onClick={stopRecording} className={btn}>■ Stop</button>
          {mode === "video" && previewStream && !onPreviewStream ? (
            <div className="w-full">
              <CameraPreview
                stream={previewStream}
                className="max-h-40 w-full max-w-xs rounded-lg border border-neutral-300 dark:border-neutral-700"
              />
              <p className="mt-1 max-w-xs text-xs text-neutral-600">
                Mirrored preview only, the saved video isn’t flipped. Keep this preview right next to
                your camera so your eyes stay near the lens.
              </p>
            </div>
          ) : null}
          {mode === "video" ? (
            <p className="w-full text-xs text-neutral-600">
              Saved on this device while you record; uploads to this lesson when you stop. Nothing is
              published automatically.
            </p>
          ) : null}
        </>
      ) : null}

      {parts > 0 && status !== "recording" && status !== "idle" ? (
        <span className="w-full text-xs text-neutral-600">
          Long recording, split into {parts} parts, uploaded and played back in order.
        </span>
      ) : null}

      {status === "local" ? <span className="text-neutral-600">Recorded, preparing upload…</span> : null}
      {status === "uploading" ? <span className="text-neutral-600">Uploading… {progress}%</span> : null}
      {status === "offline" ? (
        <>
          <span className="text-amber-600">Saved locally, waiting to upload when you’re back online.</span>
          <button type="button" onClick={retryUpload} className={btn}>Try now</button>
          <button type="button" onClick={discard} className={btn}>Discard</button>
        </>
      ) : null}
      {status === "uploaded" ? (
        <>
          <span className="text-green-700 dark:text-green-400">Uploaded ✓, attached to this lesson.</span>
          <button type="button" onClick={() => setStatus("idle")} className={btn}>Re-record</button>
        </>
      ) : null}
      {status === "error" ? (
        <>
          <span className="text-red-600">{error ?? "Upload failed."}</span>
          <button type="button" onClick={retryUpload} className={btn}>Retry</button>
          <button type="button" onClick={discard} className={btn}>Discard</button>
        </>
      ) : null}

      {canDownload ? (
        <button type="button" onClick={downloadRecording} className={btn} title="Save the recording to this device">
          ⬇ Download
        </button>
      ) : null}

      {error && status === "idle" ? <span className="text-red-600">{error}</span> : null}
    </div>
  );
}
