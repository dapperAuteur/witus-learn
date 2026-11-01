"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// A tour from the field that is a 360 photo (plans/96 v2). The viewer's code is a separate chunk,
// fetched only when this renders, which is only on a lesson whose tour is a 360 photo: no other page
// pays for it.
//
// Fallback: if WebGL is missing or the image cannot be read as a texture (most often a host without
// CORS headers), the learner gets the flat picture, the same one v1 showed, and the credit stays.
// "View as a flat image" is always there too: it opens the file itself.

const PanoramaViewer = dynamic(() => import("./panorama-viewer").then((m) => m.PanoramaViewer), {
  ssr: false,
  loading: () => (
    <div
      role="status"
      className="flex aspect-video w-full items-center justify-center rounded-lg border border-neutral-200 bg-neutral-900 text-sm text-white dark:border-neutral-800"
    >
      Loading the 360 view…
    </div>
  ),
});

export function TourPanorama({ src, title, onOpened }: { src: string; title: string; onOpened?: () => void }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="space-y-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={`Tour photo: ${title}`} className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800" />
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          The 360 view could not open on this device, so the photo is shown flat.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <PanoramaViewer src={src} label={`360 tour: ${title}`} onError={() => setFailed(true)} onReady={onOpened} />
      <p className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-neutral-600 dark:text-neutral-400">
        <span>Look around: drag, or use arrow keys. Plus and minus zoom.</span>
        <a href={src} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline">
          View as a flat image
        </a>
      </p>
    </div>
  );
}
