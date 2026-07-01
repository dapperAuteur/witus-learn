"use client";

import { useState } from "react";

// Direct-to-Cloudinary unsigned upload for lesson media (video/audio/image/PDF). Fetches the
// auth-gated config, uploads straight to Cloudinary with progress, and hands back the secure URL.
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
      const cfgRes = await fetch("/api/upload/cloudinary");
      if (!cfgRes.ok) {
        throw new Error(cfgRes.status === 503 ? "Media uploads aren't configured yet." : "You can't upload here.");
      }
      const { cloudName, uploadPreset } = (await cfgRes.json()) as { cloudName: string; uploadPreset: string };
      const form = new FormData();
      form.append("file", file);
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
          } else {
            reject(new Error("Upload failed."));
          }
        };
        xhr.onerror = () => reject(new Error("Upload failed — check your connection."));
        xhr.send(form);
      });
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
