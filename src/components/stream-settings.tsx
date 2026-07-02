"use client";

import { useState } from "react";

// Admin card for the persistent, always-on stream (the values that used to be the
// RTMP_STREAM_PLAYBACK_URL / STREAM_EMBED_CODE env vars). The embed is sent as the
// provider's raw snippet; the server extracts + allowlists the iframe src and stores
// only that. Nothing here renders pasted HTML.
export function StreamSettings({
  initial,
}: {
  initial: { playbackUrl: string | null; embedSrc: string | null };
}) {
  const [playbackUrl, setPlaybackUrl] = useState(initial.playbackUrl ?? "");
  const [embedCode, setEmbedCode] = useState("");
  const [savedSrc, setSavedSrc] = useState<string | null>(initial.embedSrc);
  const [status, setStatus] = useState<{ kind: "ok" | "err"; msg: string } | null>(null);
  const [saving, setSaving] = useState(false);

  const field =
    "w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900";

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch("/api/admin/stream-settings", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        // Send embedCode only when the admin typed a new one; blank leaves it unchanged
        // is not supported by a stateless PATCH, so blank clears it — mirror that in the UI copy.
        body: JSON.stringify({ playbackUrl: playbackUrl || null, embedCode: embedCode || null }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        embedSrc?: string | null;
        playbackUrl?: string | null;
      };
      if (!res.ok) {
        setStatus({ kind: "err", msg: data.error ?? "Could not save." });
      } else {
        setSavedSrc(data.embedSrc ?? null);
        setStatus({ kind: "ok", msg: "Stream settings saved." });
      }
    } catch {
      setStatus({ kind: "err", msg: "Network error. Try again." });
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800" aria-label="Stream settings">
      <h2 className="font-semibold">Always-on stream</h2>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        The persistent stream for this school, shown on the Live page when no session is live. Paste
        your provider&apos;s embed code (an iframe from Viloud, YouTube, and the like) or a direct
        https player URL. We keep only the player URL, never the raw HTML.
      </p>

      <form onSubmit={save} className="mt-4 space-y-3">
        <label className="block text-sm">
          Playback URL (optional)
          <input
            value={playbackUrl}
            onChange={(e) => setPlaybackUrl(e.target.value)}
            placeholder="https://s.viloud.tv/embed/…"
            className={`mt-1 ${field}`}
          />
        </label>

        <label className="block text-sm">
          Embed code (optional — paste, then save; blank leaves the saved embed unless you clear it)
          <textarea
            value={embedCode}
            onChange={(e) => setEmbedCode(e.target.value)}
            placeholder={'<div><iframe src="https://…viloud.tv/embed/…" …></iframe></div>'}
            rows={3}
            className={`mt-1 ${field} font-mono text-xs`}
          />
        </label>

        {savedSrc ? (
          <p className="text-xs text-neutral-500">
            Saved embed source: <span className="font-mono">{savedSrc}</span>
          </p>
        ) : (
          <p className="text-xs text-neutral-500">No embed saved yet.</p>
        )}

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="min-h-9 rounded-md px-4 text-sm font-medium text-white disabled:opacity-60"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {saving ? "Saving…" : "Save stream settings"}
          </button>
          {status ? (
            <span
              role="status"
              className={`text-sm ${status.kind === "ok" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}
            >
              {status.msg}
            </span>
          ) : null}
        </div>
      </form>
    </section>
  );
}
