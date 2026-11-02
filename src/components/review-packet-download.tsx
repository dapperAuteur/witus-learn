"use client";

import { useState } from "react";
import type { PacketFormat } from "@/lib/review-packet";

/**
 * "Download the lessons for your review" (plans/97 v2, G3), one pair of buttons per course on
 * /audit/review. A fetch rather than a plain link, so the reviewer sees "Preparing your file" while
 * a long course is laid out and a retry when it fails, instead of a silent dead click.
 */
export function ReviewPacketDownload({
  courseId,
  courseTitle,
  onDownloaded,
}: {
  courseId: string;
  courseTitle: string;
  /** Called after a file was received (the analytics hook lives with the caller). */
  onDownloaded?: (format: PacketFormat) => void;
}) {
  const [busy, setBusy] = useState<PacketFormat | null>(null);
  const [failed, setFailed] = useState<{ format: PacketFormat; message: string } | null>(null);

  async function download(format: PacketFormat) {
    setBusy(format);
    setFailed(null);
    try {
      const res = await fetch(`/api/courses/${courseId}/review-packet?format=${format}`);
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setFailed({ format, message: data.error ?? "Your file could not be prepared." });
        return;
      }
      const blob = await res.blob();
      const name =
        /filename="([^"]+)"/.exec(res.headers.get("content-disposition") ?? "")?.[1] ?? `review-packet.${format}`;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10_000);
      onDownloaded?.(format);
    } catch {
      setFailed({ format, message: "Network error." });
    } finally {
      setBusy(null);
    }
  }

  const button =
    "min-h-11 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 sm:w-auto dark:border-neutral-700";
  return (
    <div className="mt-3">
      <div className="flex flex-col gap-2 sm:flex-row">
        <button type="button" className={button} disabled={busy !== null} onClick={() => download("pdf")}>
          Download the lessons for your review (PDF)<span className="sr-only">, {courseTitle}</span>
        </button>
        <button type="button" className={button} disabled={busy !== null} onClick={() => download("epub")}>
          Download the lessons for your review (EPUB)<span className="sr-only">, {courseTitle}</span>
        </button>
      </div>
      <p role="status" className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        {busy ? "Preparing your file" : ""}
      </p>
      {failed ? (
        <div role="alert" className="mt-1 text-sm text-amber-700 dark:text-amber-400">
          {failed.message}{" "}
          <button
            type="button"
            className="inline-flex min-h-11 items-center underline focus-visible:outline-2 focus-visible:outline-offset-2"
            onClick={() => download(failed.format)}
          >
            Try again
          </button>
        </div>
      ) : null}
    </div>
  );
}
