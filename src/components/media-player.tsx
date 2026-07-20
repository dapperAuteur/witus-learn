"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Ref, SyntheticEvent } from "react";
import { playableAudioSrc, type Chapter, type TranscriptSegment } from "@/lib/media";

function fmt(s?: number): string {
  if (s == null) return "";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, "0")}`;
}

/** Send a position at most this often while playing. NEVER on the timeupdate tick (~4×/sec). */
const SAVE_EVERY_MS = 20_000;
/** Don't resume from a position this close to the start — it isn't worth a "resumed" nudge. */
const MIN_RESUME_S = 10;
/** Treat a position this close to the end as "finished" — start over rather than resume at 11:58. */
const END_SLACK_S = 15;

// Audio/video player with clickable chapter markers (seek), a transcript that follows playback,
// and — when the learner is signed in — a remembered playback position, so a 12-minute lesson
// picks up where they stopped instead of restarting. Degrades gracefully: without timing data,
// chapters render as a list and the transcript as plain text; without courseId/lessonId (signed
// out) nothing is tracked and nothing errors.
export function MediaPlayer({
  kind,
  src,
  poster,
  chapters,
  transcript,
  courseId,
  lessonId,
  resumeAt = 0,
}: {
  kind: "audio" | "video";
  src: string;
  poster?: string;
  chapters: Chapter[];
  transcript: TranscriptSegment[];
  /** Signed-in learner → save/restore the playback position. Omit to disable tracking entirely. */
  courseId?: string;
  lessonId?: string;
  /** Saved `lesson_progress.watch_seconds` for the ACTIVE learner (a managed child, when acting as one). */
  resumeAt?: number;
}) {
  const ref = useRef<HTMLMediaElement | null>(null);
  const [time, setTime] = useState(0);
  const [resumedFrom, setResumedFrom] = useState<number | null>(null);

  const tracking = Boolean(courseId && lessonId);
  const lastSentAt = useRef(0);
  const lastSentValue = useRef(-1);
  // Set once we've restored (or decided not to), so a later metadata event can't yank playback back.
  const restored = useRef(false);
  // webm recorded with MediaRecorder ships no duration in its header, so the browser reports
  // el.duration === Infinity and the native seek bar can't show how much is left. We fix it once by
  // seeking past the end (forces the browser to compute the real duration); `fixing` masks that
  // giant currentTime so it never lands in state or a saved position. See onLoadedMetadata.
  const durationFixed = useRef(false);
  const fixing = useRef(false);

  // Fire-and-forget position save. `keepalive` lets it survive the page being closed, which is
  // exactly when the last position matters most. Failures are silent — a lost position just
  // means resuming from an older one, never a broken lesson.
  const save = useCallback(
    (seconds: number) => {
      if (!tracking) return;
      const value = Math.floor(seconds);
      if (value === lastSentValue.current) return;
      lastSentAt.current = Date.now();
      lastSentValue.current = value;
      void fetch(`/api/courses/${courseId}/lessons/${lessonId}/view`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ watchSeconds: value }),
        keepalive: true,
      }).catch(() => {});
    },
    [tracking, courseId, lessonId],
  );

  // Leaving the page (tab hidden, back button, closed) is the most common way a lesson ends —
  // flush the position then, not just on pause.
  useEffect(() => {
    if (!tracking) return;
    const flush = () => {
      const el = ref.current;
      if (el && el.currentTime > MIN_RESUME_S && !el.ended) save(el.currentTime);
    };
    const onHide = () => {
      if (document.visibilityState === "hidden") flush();
    };
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", flush);
    return () => {
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", flush);
      flush();
    };
  }, [tracking, save]);

  function seek(s?: number) {
    if (s == null || !ref.current) return;
    ref.current.currentTime = s;
    void ref.current.play().catch(() => {});
  }

  // Restore the saved position once the duration is known (we need it to tell "stopped near the
  // end" — where restarting is right — from "stopped in the middle").
  const restorePosition = (el: HTMLMediaElement) => {
    if (restored.current) return;
    restored.current = true;
    const duration = Number.isFinite(el.duration) ? el.duration : 0;
    if (resumeAt < MIN_RESUME_S) return;
    if (duration > 0 && resumeAt > duration - END_SLACK_S) return; // basically finished → start over
    el.currentTime = resumeAt;
    setTime(resumeAt);
    setResumedFrom(resumeAt);
  };

  const onLoadedMetadata = (e: SyntheticEvent<HTMLMediaElement>) => {
    const el = e.currentTarget;
    // A duration-less webm: seek past the end once to make the browser compute the real duration,
    // then snap back to the start and restore. Until this runs, the native timeline is inaccurate.
    if (el.duration === Infinity && !durationFixed.current) {
      durationFixed.current = true;
      fixing.current = true;
      const settle = () => {
        el.removeEventListener("timeupdate", settle);
        fixing.current = false;
        el.currentTime = 0;
        setTime(0);
        restorePosition(el); // duration is finite now
      };
      el.addEventListener("timeupdate", settle);
      el.currentTime = 1e101; // clamped by the browser; the clamp is what forces duration to resolve
      return;
    }
    restorePosition(el);
  };

  const onTime = (e: SyntheticEvent<HTMLMediaElement>) => {
    if (fixing.current) return; // ignore the giant currentTime during duration detection
    const t = e.currentTarget.currentTime;
    setTime(t);
    // Throttled: at most one write per SAVE_EVERY_MS, and only once past the "did they really
    // start?" threshold — so scrubbing or an accidental tap doesn't cost a row version.
    if (tracking && t > MIN_RESUME_S && Date.now() - lastSentAt.current >= SAVE_EVERY_MS) save(t);
  };

  const onPause = (e: SyntheticEvent<HTMLMediaElement>) => {
    const el = e.currentTarget;
    if (tracking && !el.ended && el.currentTime > MIN_RESUME_S) save(el.currentTime);
  };

  // Reaching the end clears the saved position, so re-opening the lesson starts from the top
  // rather than parking the learner at the final second. (Reaching the end is NOT a completion —
  // "Mark complete" is still the only thing that completes a lesson.)
  const onEnded = () => {
    if (tracking) save(0);
    setResumedFrom(null);
  };

  const startOver = () => {
    if (ref.current) ref.current.currentTime = 0;
    setTime(0);
    setResumedFrom(null);
    save(0);
  };

  const mediaProps = {
    controls: true,
    onTimeUpdate: onTime,
    onLoadedMetadata,
    onPause,
    onEnded,
  } as const;

  const hasTimedTranscript = transcript.some((s) => s.start != null);
  const activeIdx = hasTimedTranscript
    ? transcript.findIndex((s) => s.start != null && time >= s.start && (s.end == null || time < s.end))
    : -1;

  return (
    <div className="space-y-4">
      {kind === "video" ? (
        <video ref={ref as Ref<HTMLVideoElement>} className="w-full rounded-lg" poster={poster} src={src} {...mediaProps} />
      ) : (
        <audio ref={ref as Ref<HTMLAudioElement>} className="w-full" src={playableAudioSrc(src)} {...mediaProps} />
      )}

      {resumedFrom != null ? (
        <p role="status" className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
          <span>
            Picking up where you left off — <span className="tabular-nums">{fmt(resumedFrom)}</span>.
          </span>
          <button type="button" onClick={startOver} className="min-h-9 underline hover:no-underline" style={{ color: "var(--accent)" }}>
            Start over
          </button>
        </p>
      ) : null}

      {chapters.length ? (
        <div className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
          <p className="font-medium">Chapters</p>
          <ol className="mt-2 space-y-0.5 text-sm">
            {chapters.map((c, i) => (
              <li key={i}>
                {c.start != null ? (
                  <button
                    type="button"
                    onClick={() => seek(c.start)}
                    className="flex w-full items-baseline gap-2 rounded px-1 py-0.5 text-left hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    <span className="font-mono text-xs tabular-nums" style={{ color: "var(--accent)" }}>
                      {fmt(c.start)}
                    </span>
                    <span>{c.title}</span>
                  </button>
                ) : (
                  <span className="block px-1 py-0.5">{c.title}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {transcript.length ? (
        <details className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800" open={hasTimedTranscript}>
          <summary className="cursor-pointer font-medium">Transcript</summary>
          <div className="mt-2 space-y-0.5 text-sm leading-relaxed">
            {transcript.map((seg, i) => {
              const body = (
                <>
                  {seg.speaker ? <span className="font-medium">{seg.speaker}: </span> : null}
                  {seg.text}
                </>
              );
              return seg.start != null ? (
                <button
                  key={i}
                  type="button"
                  onClick={() => seek(seg.start)}
                  aria-current={i === activeIdx ? "true" : undefined}
                  className={`block w-full rounded px-1 text-left hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
                    i === activeIdx
                      ? "bg-neutral-100 font-medium dark:bg-neutral-800"
                      : "text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {body}
                </button>
              ) : (
                <p key={i} className="px-1 text-neutral-700 dark:text-neutral-300">
                  {body}
                </p>
              );
            })}
          </div>
        </details>
      ) : null}
    </div>
  );
}
