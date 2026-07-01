"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  deletePending,
  getPending,
  savePending,
  type PendingRecording,
} from "@/lib/recording-store";

// In-app, offline-first, per-lesson audio recorder.
//  capture (MediaRecorder) → persist to IndexedDB immediately → upload to Cloudinary when online
//  → attach to the lesson (contentUrl + lessonType=audio + mark recorded).
// Nothing is lost if the tab closes or you're offline: the blob waits in IndexedDB and the queue
// drains automatically when connectivity returns. Status: recorded-locally → waiting (offline) →
// uploading NN% → uploaded ✓ / failed (retry).
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
}: {
  courseId: string;
  lessonId: string;
  onUploaded?: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const startedAtRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Upload a pending blob to Cloudinary, attach it to the lesson, then clear it from IndexedDB.
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
        const cfgRes = await fetch("/api/upload/cloudinary");
        if (!cfgRes.ok) {
          throw new Error(cfgRes.status === 503 ? "Media uploads aren't configured yet." : "You can't upload here.");
        }
        const { cloudName, uploadPreset } = (await cfgRes.json()) as { cloudName: string; uploadPreset: string };
        const form = new FormData();
        form.append("file", new File([rec.blob], `lesson-${lessonId}.webm`, { type: rec.mime || "audio/webm" }));
        form.append("upload_preset", uploadPreset);

        const url = await new Promise<string>((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`);
          xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 100));
          };
          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              try {
                resolve((JSON.parse(xhr.responseText) as { secure_url: string }).secure_url);
              } catch {
                reject(new Error("Unexpected upload response."));
              }
            } else reject(new Error("Upload failed."));
          };
          xhr.onerror = () => reject(new Error("Upload failed — check your connection."));
          xhr.send(form);
        });

        // Attach to the lesson + mark recorded. Only clear local copy once this succeeds.
        const patch = await fetch(`/api/courses/${courseId}/lessons/${lessonId}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            contentUrl: url,
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
    [courseId, lessonId, onUploaded],
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
      const mr = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
      chunksRef.current = [];
      mr.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      mr.onstop = async () => {
        stopTimer();
        streamRef.current?.getTracks().forEach((t) => t.stop());
        const durationSeconds = (Date.now() - startedAtRef.current) / 1000;
        const blob = new Blob(chunksRef.current, { type: mime || "audio/webm" });
        const rec: PendingRecording = {
          lessonId,
          courseId,
          blob,
          mime: mime || "audio/webm",
          durationSeconds,
          createdAt: Date.now(),
        };
        await savePending(rec); // persisted BEFORE any upload attempt — never lost
        setStatus("local");
        void upload(rec);
      };
      recorderRef.current = mr;
      startedAtRef.current = Date.now();
      setElapsed(0);
      timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
      mr.start();
      setStatus("recording");
    } catch {
      setError("Couldn't access the microphone. Check the browser permission.");
      setStatus("idle");
    }
  }

  function stopRecording() {
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

  const btn = "min-h-9 rounded-md border border-neutral-300 px-3 text-sm dark:border-neutral-700";

  return (
    <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
      {status === "idle" ? (
        <button type="button" onClick={startRecording} className={btn}>🎙 Record audio</button>
      ) : null}

      {status === "recording" ? (
        <>
          <span className="inline-flex items-center gap-1.5 font-medium text-red-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-600" /> {fmt(elapsed)}
          </span>
          <button type="button" onClick={stopRecording} className={btn}>■ Stop</button>
        </>
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

      {error && status === "idle" ? <span className="text-red-600">{error}</span> : null}
    </div>
  );
}
