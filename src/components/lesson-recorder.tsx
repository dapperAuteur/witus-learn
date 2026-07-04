"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  deletePending,
  getPending,
  savePending,
  type PendingRecording,
} from "@/lib/recording-store";
import { buildPublicId, formatBytes, MAX_UPLOAD_BYTES, uploadToCloudinary } from "@/lib/cloudinary-upload";

// When the CURRENT part nears the cap, finalize it and roll into a new part (a hair under the
// cap so every part uploads). A long take becomes several ordered parts, played back seamlessly.
const PART_ROLLOVER_BYTES = MAX_UPLOAD_BYTES - 4 * 1024 * 1024;

// In-app, offline-first, per-lesson audio recorder.
//  capture (MediaRecorder) → persist to IndexedDB immediately → upload to Cloudinary when online
//  → attach to the lesson (contentUrl [+ mediaParts] + lessonType=audio + mark recorded).
// A recording over the plan's upload cap is split into ordered <cap parts AT RECORD TIME (the
// MediaRecorder is rotated), so no take is ever cut off. Nothing is lost if the tab closes or
// you're offline: parts wait in IndexedDB and drain when connectivity returns.
type Status = "idle" | "recording" | "local" | "offline" | "uploading" | "uploaded" | "error";

function pickMime(): string {
  const candidates = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg"];
  if (typeof MediaRecorder === "undefined") return "";
  return candidates.find((m) => MediaRecorder.isTypeSupported(m)) ?? "";
}

function fmt(seconds: number): string {
  const s = Math.floor(seconds % 60);
  const m = Math.floor(seconds / 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function LessonRecorder({
  courseId,
  lessonId,
  onUploaded,
  courseLabel,
  lessonLabel,
}: {
  courseId: string;
  lessonId: string;
  onUploaded?: () => void;
  /** Course + lesson names → a readable Cloudinary public_id (else a random id). */
  courseLabel?: string;
  lessonLabel?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false); // recording paused (mic still held, no audio captured)
  const [bytes, setBytes] = useState(0);
  const [parts, setParts] = useState(0); // finalized parts so far (multi-part takes)
  const [error, setError] = useState<string | null>(null);

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

        const patch = await fetch(`/api/courses/${courseId}/lessons/${lessonId}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            contentUrl: urls[0],
            mediaParts: urls.length > 1 ? urls.map((url) => ({ url })) : null,
            lessonType: "audio",
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

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  async function startRecording() {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mime = pickMime();
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

      // Persist the growing recording after each part finalizes — nothing is lost on a crash.
      async function persist(): Promise<PendingRecording> {
        const rec: PendingRecording = {
          lessonId,
          courseId,
          parts: [...partsRef.current],
          mime: mime || "audio/webm",
          // Active seconds only — a paused stretch adds no audio, so it shouldn't add duration.
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
          const blob = new Blob(chunksRef.current, { type: mime || "audio/webm" });
          if (blob.size > 0) {
            partsRef.current.push(blob);
            setParts(partsRef.current.length);
          }
          const rec = await persist();
          if (finishingRef.current) {
            stopTimer();
            streamRef.current?.getTracks().forEach((t) => t.stop());
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
      setError("Couldn't access the microphone. Check the browser permission.");
      setStatus("idle");
    }
  }

  // Pause/resume the take (multi-session recording): MediaRecorder.pause() keeps the mic + the
  // in-progress blob, emits no audio while paused, and stitches seamlessly on resume — so a
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
    const ext = (mime ?? "").includes("mp4") ? "m4a" : (mime ?? "").includes("ogg") ? "ogg" : "webm";
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

  const btn = "min-h-9 rounded-md border border-neutral-300 px-3 text-sm dark:border-neutral-700";
  const canDownload = ["local", "uploading", "offline", "uploaded", "error"].includes(status);

  return (
    <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
      {status === "idle" ? (
        <button type="button" onClick={startRecording} className={btn}>🎙 Record audio</button>
      ) : null}

      {status === "recording" ? (
        <>
          <span className={`inline-flex items-center gap-1.5 font-medium ${paused ? "text-amber-600" : "text-red-600"}`}>
            <span className={`h-2 w-2 rounded-full ${paused ? "bg-amber-500" : "animate-pulse bg-red-600"}`} />
            {fmt(elapsed)}{paused ? " · paused" : ""}
          </span>
          <span className="text-xs text-neutral-500">
            {formatBytes(bytes)}
            {parts > 0 ? ` · part ${parts + 1}` : ""}
          </span>
          <button type="button" onClick={togglePause} className={btn}>
            {paused ? "▶ Resume" : "⏸ Pause"}
          </button>
          <button type="button" onClick={stopRecording} className={btn}>■ Stop</button>
        </>
      ) : null}

      {parts > 0 && status !== "recording" && status !== "idle" ? (
        <span className="w-full text-xs text-neutral-500">
          Long recording — split into {parts} parts, uploaded and played back in order.
        </span>
      ) : null}

      {status === "local" ? <span className="text-neutral-500">Recorded — preparing upload…</span> : null}
      {status === "uploading" ? <span className="text-neutral-500">Uploading… {progress}%</span> : null}
      {status === "offline" ? (
        <>
          <span className="text-amber-600">Saved locally — waiting to upload when you’re back online.</span>
          <button type="button" onClick={retryUpload} className={btn}>Try now</button>
          <button type="button" onClick={discard} className={btn}>Discard</button>
        </>
      ) : null}
      {status === "uploaded" ? (
        <>
          <span className="text-green-700 dark:text-green-400">Uploaded ✓ — attached to this lesson.</span>
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
        <button type="button" onClick={downloadRecording} className={btn} title="Save the audio file to this device">
          ⬇ Download
        </button>
      ) : null}

      {error && status === "idle" ? <span className="text-red-600">{error}</span> : null}
    </div>
  );
}
