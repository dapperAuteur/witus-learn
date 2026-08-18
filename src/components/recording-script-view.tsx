"use client";

import { useEffect, useRef, useState } from "react";
import { CameraPreview, LessonRecorder } from "./lesson-recorder";

export interface ScriptLesson {
  id: string;
  title: string;
  recordedAt: string | null;
}

// Displays a course's generated recording (narration) script in the admin UI — the words to
// read aloud when recording. Two modes:
//  • Reading pane (default) with Copy / Print / Save-PDF.
//  • Teleprompter: full-screen auto-scrolling text with adjustable speed, text size, a mirror
//    toggle (for beam-splitter rigs), AND an embedded in-app recorder so you can record and read
//    at the same time (the overlay used to hide the per-lesson record buttons underneath it).
//    In video mode the recorder hands its live camera stream up here and a mirrored self-view
//    docks at the TOP of the overlay, next to a phone's front lens, so reading the scroll keeps
//    the speaker's eyes near the camera.
// The script is generated server-side (src/lib/narration.ts) and passed in; regenerating the
// page always reflects the current lessons.
export function RecordingScriptView({
  script,
  courseId,
  courseLabel,
  lessons = [],
}: {
  script: string;
  courseId: string;
  /** Course name/slug → readable Cloudinary upload names for recordings. */
  courseLabel?: string;
  /** Lessons offered as record targets inside the teleprompter (id + title + recorded state). */
  lessons?: ScriptLesson[];
}) {
  const [copied, setCopied] = useState(false);
  const [teleprompter, setTeleprompter] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(script);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may be blocked; the text is selectable anyway */
    }
  }

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2 print:hidden">
        <button
          type="button"
          onClick={() => setTeleprompter(true)}
          className="min-h-9 rounded-md px-3 text-sm font-medium text-white"
          style={{ backgroundColor: "var(--accent)" }}
        >
          ▶ Teleprompter
        </button>
        <button
          type="button"
          onClick={copy}
          className="min-h-9 rounded-md border border-neutral-300 px-3 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          {copied ? "✓ Copied" : "Copy script"}
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="min-h-9 rounded-md border border-neutral-300 px-3 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          Print / Save PDF
        </button>
      </div>
      <pre className="whitespace-pre-wrap rounded-lg border border-neutral-200 bg-white p-5 text-[15px] leading-8 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100">
        {script}
      </pre>

      {teleprompter ? (
        <Teleprompter
          script={script}
          courseId={courseId}
          courseLabel={courseLabel}
          lessons={lessons}
          onExit={() => setTeleprompter(false)}
        />
      ) : null}
    </div>
  );
}

function Teleprompter({
  script,
  courseId,
  courseLabel,
  lessons,
  onExit,
}: {
  script: string;
  courseId: string;
  courseLabel?: string;
  lessons: ScriptLesson[];
  onExit: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(60); // pixels per second
  const [fontSize, setFontSize] = useState(40); // px
  const [mirror, setMirror] = useState(false);
  // Live camera stream while the embedded recorder is in video mode (null otherwise). The
  // recorder owns the stream lifecycle; we only render the self-view.
  const [camStream, setCamStream] = useState<MediaStream | null>(null);
  // Which lesson the embedded recorder attaches to — default to the first not-yet-recorded one.
  const [recordLessonId, setRecordLessonId] = useState<string>(
    () => lessons.find((l) => !l.recordedAt)?.id ?? lessons[0]?.id ?? "",
  );

  // Auto-scroll loop: advance scrollTop by speed·dt while playing. Fractional accumulator
  // keeps slow speeds smooth. Stops at the bottom.
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    let last = performance.now();
    let acc = 0;
    const tick = (now: number) => {
      const el = scrollRef.current;
      if (el) {
        acc += ((now - last) / 1000) * speed;
        last = now;
        if (acc >= 1) {
          el.scrollTop += Math.floor(acc);
          acc -= Math.floor(acc);
          if (el.scrollTop + el.clientHeight >= el.scrollHeight - 1) {
            setPlaying(false);
            return;
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, speed]);

  // Keyboard: space = play/pause, Esc = exit, arrows = speed.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Don't hijack space/arrows while the user is on the recorder controls or a slider.
      const t = e.target as HTMLElement | null;
      if (t && ["BUTTON", "INPUT", "SELECT", "TEXTAREA"].includes(t.tagName)) return;
      if (e.key === " ") {
        e.preventDefault();
        setPlaying((p) => !p);
      } else if (e.key === "Escape") {
        onExit();
      } else if (e.key === "ArrowUp") {
        setSpeed((s) => Math.min(400, s + 10));
      } else if (e.key === "ArrowDown") {
        setSpeed((s) => Math.max(10, s - 10));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onExit]);

  function restart() {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black text-white">
      {/* Scrolling text */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-[8vw] py-[40vh]"
        style={{ transform: mirror ? "scaleX(-1)" : undefined }}
        onClick={() => setPlaying((p) => !p)}
      >
        <p
          className="mx-auto max-w-4xl whitespace-pre-wrap font-semibold leading-relaxed"
          style={{ fontSize }}
        >
          {script}
        </p>
      </div>

      {/* A center reading guide line */}
      <div className="pointer-events-none absolute left-0 right-0 top-1/2 border-t-2 border-red-500/60" />

      {/* Video mode: mirrored self-view docked at the top, where a phone's front lens sits.
          pointer-events-none so tap-to-play on the text underneath keeps working. */}
      {camStream ? (
        <div className="pointer-events-none absolute left-1/2 top-2 z-10 w-full max-w-[70vw] -translate-x-1/2 text-center sm:max-w-xs">
          <CameraPreview
            stream={camStream}
            className="mx-auto max-h-28 w-auto max-w-full rounded-lg border border-white/30 sm:max-h-36"
          />
          <p className="mx-auto mt-1 max-w-xs text-[11px] leading-snug text-white/70">
            Recording. Prop the phone so the camera sits just above these words, then read the
            scroll and your eyes stay near the lens. Preview is mirrored; the video isn’t.
          </p>
        </div>
      ) : null}

      {/* In-app recorder — record while you read (used to be hidden behind this overlay). */}
      {lessons.length > 0 ? (
        <div className="flex flex-wrap items-center justify-center gap-3 border-t border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-white">
          <span aria-hidden className="text-red-500">🎙</span>
          <label className="flex items-center gap-2">
            <span className="text-neutral-400">Recording to</span>
            <select
              value={recordLessonId}
              onChange={(e) => setRecordLessonId(e.target.value)}
              className="min-h-9 max-w-[46vw] truncate rounded-md border border-neutral-600 bg-neutral-800 px-2 text-white"
            >
              {lessons.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.recordedAt ? "✓ " : ""}
                  {l.title}
                </option>
              ))}
            </select>
          </label>
          {recordLessonId ? (
            <LessonRecorder
              key={recordLessonId}
              courseId={courseId}
              lessonId={recordLessonId}
              courseLabel={courseLabel}
              lessonLabel={lessons.find((l) => l.id === recordLessonId)?.title}
              onPreviewStream={setCamStream}
            />
          ) : null}
        </div>
      ) : null}

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4 bg-neutral-900 px-4 py-3 text-sm">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="min-h-9 rounded-md bg-white px-4 font-medium text-black"
        >
          {playing ? "⏸ Pause" : "▶ Play"}
        </button>
        <button type="button" onClick={restart} className="min-h-9 rounded-md border border-neutral-600 px-3">
          ↺ Restart
        </button>
        <label className="flex items-center gap-2">
          Speed
          <input
            type="range"
            min={10}
            max={400}
            step={10}
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
          <span className="w-14 tabular-nums text-neutral-400">{speed} px/s</span>
        </label>
        <label className="flex items-center gap-2">
          Size
          <input
            type="range"
            min={20}
            max={100}
            step={2}
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
          />
          <span className="w-12 tabular-nums text-neutral-400">{fontSize}px</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={mirror} onChange={(e) => setMirror(e.target.checked)} /> Mirror
        </label>
        <button type="button" onClick={onExit} className="min-h-9 rounded-md border border-neutral-600 px-3">
          Exit (Esc)
        </button>
        <span className="hidden text-xs text-neutral-500 sm:inline">
          Space = play/pause · ↑/↓ = speed · click text = play/pause
        </span>
      </div>
    </div>
  );
}
