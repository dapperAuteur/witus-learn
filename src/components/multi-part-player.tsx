"use client";

import { useEffect, useRef, useState } from "react";

// Sequential player for a recording that was split into several <cap parts at record time.
// Plays one part at a time and auto-advances to the next when it ends, so a long lecture that
// exceeded the single-file upload cap still plays as one continuous listen. Manual prev/next too.
export function MultiPartPlayer({
  parts,
  kind,
  title,
}: {
  parts: string[];
  kind: "audio" | "video";
  title: string;
}) {
  const [i, setI] = useState(0);
  const advancedRef = useRef(false); // only autoplay a part we advanced INTO (not the first load)
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!advancedRef.current) return;
    const el = kind === "video" ? videoRef.current : audioRef.current;
    // Playback was already user-initiated on a prior part, so continuing is allowed.
    el?.play().catch(() => {});
  }, [i, kind]);

  function onEnded() {
    if (i < parts.length - 1) {
      advancedRef.current = true;
      setI((n) => n + 1);
    }
  }
  function go(n: number) {
    advancedRef.current = false; // manual jump: load, don't force autoplay
    setI(Math.max(0, Math.min(parts.length - 1, n)));
  }

  const src = parts[i];

  return (
    <div>
      {kind === "video" ? (
        <video ref={videoRef} controls className="w-full rounded-lg bg-black" src={src} onEnded={onEnded} />
      ) : (
        <audio ref={audioRef} controls className="w-full" src={src} onEnded={onEnded} />
      )}
      <div className="mt-2 flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
        <span>
          Part {i + 1} of {parts.length}
        </span>
        <button
          type="button"
          onClick={() => go(i - 1)}
          disabled={i === 0}
          className="min-h-9 rounded-md border border-neutral-300 px-2 disabled:opacity-40 dark:border-neutral-700"
        >
          ‹ Prev
        </button>
        <button
          type="button"
          onClick={() => go(i + 1)}
          disabled={i === parts.length - 1}
          className="min-h-9 rounded-md border border-neutral-300 px-2 disabled:opacity-40 dark:border-neutral-700"
        >
          Next ›
        </button>
        <span className="sr-only">{title}</span>
      </div>
    </div>
  );
}
