"use client";

import { useEffect, useRef, useState } from "react";

// Displays a course's generated recording (narration) script in the admin UI — the words to
// read aloud when recording. Two modes:
//  • Reading pane (default) with Copy / Print / Save-PDF.
//  • Teleprompter: full-screen auto-scrolling text with adjustable speed, text size, and a
//    mirror toggle (for beam-splitter teleprompter rigs).
// The script is generated server-side (src/lib/narration.ts) and passed in; regenerating the
// page always reflects the current lessons.
export function RecordingScriptView({ script }: { script: string }) {
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

      {teleprompter ? <Teleprompter script={script} onExit={() => setTeleprompter(false)} /> : null}
    </div>
  );
}

function Teleprompter({ script, onExit }: { script: string; onExit: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(60); // pixels per second
  const [fontSize, setFontSize] = useState(40); // px
  const [mirror, setMirror] = useState(false);

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
