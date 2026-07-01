// Shared direct-to-Cloudinary upload used by the media uploader and the in-app recorder.
// Two hardening measures for the current (100MB-cap) Cloudinary plan:
//  1. a size guard that rejects anything ≥ the plan cap BEFORE a doomed multi-minute upload;
//  2. chunked upload (Content-Range + X-Unique-Upload-Id) so large-but-allowed files go up in
//     small ~6MB requests — far more reliable over the flaky connections the offline recorder
//     is built for, and resumable-friendly.

/** Just under the current Cloudinary plan's 100MB per-asset cap. */
export const MAX_UPLOAD_BYTES = 99 * 1024 * 1024;
/** Cloudinary requires each non-final chunk to be ≥ 5MB; 6MB keeps requests small + valid. */
const CHUNK_BYTES = 6 * 1024 * 1024;

export function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/** Thrown when a file is too big for the plan — the caller shows a clear "split it" message. */
export class UploadTooLargeError extends Error {
  constructor(public readonly size: number) {
    super(
      `This recording is ${formatBytes(size)} — larger than the ${formatBytes(MAX_UPLOAD_BYTES)} limit on the current Cloudinary plan. ` +
        `Record shorter, per-lesson takes (or upgrade the plan).`,
    );
    this.name = "UploadTooLargeError";
  }
}

interface CloudinaryConfig {
  cloudName: string;
  uploadPreset: string;
}

async function getConfig(): Promise<CloudinaryConfig> {
  const res = await fetch("/api/upload/cloudinary");
  if (!res.ok) {
    throw new Error(res.status === 503 ? "Media uploads aren't configured yet." : "You can't upload here.");
  }
  return (await res.json()) as CloudinaryConfig;
}

// A single (possibly ranged) POST to Cloudinary. Resolves the secure_url on the final chunk.
function postChunk(
  cloudName: string,
  form: FormData,
  headers: Record<string, string>,
  onLoaded: (loaded: number) => void,
): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`);
    for (const [k, v] of Object.entries(headers)) xhr.setRequestHeader(k, v);
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) onLoaded(e.loaded);
    };
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const body = JSON.parse(xhr.responseText) as { secure_url?: string };
          resolve(body.secure_url ?? null); // null on a non-final chunk (Cloudinary returns "done" later)
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
}

/**
 * Upload a file/blob to Cloudinary and return its secure URL.
 * Rejects (UploadTooLargeError) if it exceeds the plan cap. Uses chunked upload above CHUNK_BYTES.
 * `onProgress` reports 0–100 across the whole file.
 */
export async function uploadToCloudinary(
  file: Blob,
  filename: string,
  onProgress?: (percent: number) => void,
): Promise<string> {
  if (file.size > MAX_UPLOAD_BYTES) throw new UploadTooLargeError(file.size);

  const { cloudName, uploadPreset } = await getConfig();
  const total = file.size;

  // Small file → one request (existing behaviour).
  if (total <= CHUNK_BYTES) {
    const form = new FormData();
    form.append("file", new File([file], filename, { type: file.type || "application/octet-stream" }));
    form.append("upload_preset", uploadPreset);
    const url = await postChunk(cloudName, form, {}, (loaded) =>
      onProgress?.(Math.round((loaded / total) * 100)),
    );
    if (!url) throw new Error("Upload finished without a URL.");
    return url;
  }

  // Large file → chunked upload. Same X-Unique-Upload-Id across all chunks; Content-Range per chunk.
  const uploadId = `witus-${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
  let uploaded = 0;
  let finalUrl: string | null = null;

  for (let start = 0; start < total; start += CHUNK_BYTES) {
    const end = Math.min(start + CHUNK_BYTES, total);
    const chunk = file.slice(start, end);
    const form = new FormData();
    form.append("file", new File([chunk], filename, { type: file.type || "application/octet-stream" }));
    form.append("upload_preset", uploadPreset);
    const base = uploaded;
    const url = await postChunk(
      cloudName,
      form,
      { "X-Unique-Upload-Id": uploadId, "Content-Range": `bytes ${start}-${end - 1}/${total}` },
      (loaded) => onProgress?.(Math.round(((base + loaded) / total) * 100)),
    );
    uploaded = end;
    if (url) finalUrl = url;
  }

  if (!finalUrl) throw new Error("Upload finished without a URL.");
  return finalUrl;
}
