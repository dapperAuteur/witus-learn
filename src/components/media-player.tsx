"use client";

import { useRef, useState } from "react";
import type { Ref, SyntheticEvent } from "react";
import type { Chapter, TranscriptSegment } from "@/lib/media";

function fmt(s?: number): string {
  if (s == null) return "";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, "0")}`;
}

// Audio/video player with clickable chapter markers (seek) and a transcript that follows
// playback (active segment highlighted; click a segment to seek). Degrades gracefully:
// without timing data, chapters render as a list and the transcript as plain text.
export function MediaPlayer({
  kind,
  src,
  poster,
  chapters,
  transcript,
}: {
  kind: "audio" | "video";
  src: string;
  poster?: string;
  chapters: Chapter[];
  transcript: TranscriptSegment[];
}) {
  const ref = useRef<HTMLMediaElement | null>(null);
  const [time, setTime] = useState(0);

  function seek(s?: number) {
    if (s == null || !ref.current) return;
    ref.current.currentTime = s;
    void ref.current.play().catch(() => {});
  }

  const hasTimedTranscript = transcript.some((s) => s.start != null);
  const activeIdx = hasTimedTranscript
    ? transcript.findIndex((s) => s.start != null && time >= s.start && (s.end == null || time < s.end))
    : -1;

  const onTime = (e: SyntheticEvent<HTMLMediaElement>) => setTime(e.currentTarget.currentTime);

  return (
    <div className="space-y-4">
      {kind === "video" ? (
        <video
          ref={ref as Ref<HTMLVideoElement>}
          controls
          className="w-full rounded-lg"
          poster={poster}
          src={src}
          onTimeUpdate={onTime}
        />
      ) : (
        <audio ref={ref as Ref<HTMLAudioElement>} controls className="w-full" src={src} onTimeUpdate={onTime} />
      )}

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
