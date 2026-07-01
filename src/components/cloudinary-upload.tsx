"use client";

import { useState } from "react";
import { uploadToCloudinary } from "@/lib/cloudinary-upload";

// Direct-to-Cloudinary unsigned upload for lesson media (video/audio/image/PDF). Uses the shared
// helper: rejects over-cap files up front, and chunk-uploads large ones for reliability.
export function CloudinaryUpload({
  onUploaded,
  accept = "video/*,audio/*,image/*,application/pdf",
}: {
  onUploaded: (url: string) => void;
  accept?: string;
}) {
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  async function handle(file: File) {
    setError(null);
    setBusy(true);
    setProgress(0);
    try {
      const url = await uploadToCloudinary(file, file.name, setProgress);
      onUploaded(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <label className="inline-flex min-h-9 cursor-pointer items-center rounded-md border border-neutral-300 px-3 text-sm hover:bg-neutral-100 focus-within:outline-2 dark:border-neutral-700 dark:hover:bg-neutral-800">
        {busy ? `Uploading… ${progress}%` : "⬆ Upload media"}
        <input
          type="file"
          accept={accept}
          disabled={busy}
          className="sr-only"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) void handle(f);
            e.target.value = "";
          }}
        />
      </label>
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
