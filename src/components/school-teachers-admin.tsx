"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Client half of /admin/teachers. The server re-checks everything (POST/DELETE /api/admin/teachers).

export function AddSchoolTeacher() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function add(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const res = await fetch("/api/admin/teachers", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (res.ok) {
      setEmail("");
      setMsg({ ok: true, text: "Done. They can now create classes and write courses here." });
      router.refresh();
    } else {
      setMsg({ ok: false, text: data.error ?? "Couldn't do that. Try again." });
    }
  }

  return (
    <form onSubmit={add} className="mt-2 space-y-2 text-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
        <label className="flex-1">
          Their account email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="teacher@example.com"
            className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
          />
        </label>
        <button
          type="submit"
          disabled={busy || !email.trim()}
          className="min-h-11 shrink-0 rounded-md px-4 font-medium text-white disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {busy ? "Saving…" : "Make a teacher"}
        </button>
      </div>
      <p className="text-xs text-neutral-600 dark:text-neutral-400">They need to have signed in to this school once.</p>
      {msg ? (
        <p role={msg.ok ? "status" : "alert"} className={msg.ok ? "text-green-700 dark:text-green-400" : "text-red-600"}>
          {msg.text}
        </p>
      ) : null}
    </form>
  );
}

export function RemoveSchoolTeacher({ userId, name }: { userId: string; name: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  async function remove() {
    if (!confirm(`Remove ${name} as a teacher? Classes they already teach stay theirs, but they can't create new classes or courses here.`)) return;
    setBusy(true);
    setErr(null);
    const res = await fetch(`/api/admin/teachers/${encodeURIComponent(userId)}`, { method: "DELETE" });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) setErr(data.error ?? "Couldn't remove.");
    router.refresh();
  }
  return (
    <div className="shrink-0 text-right">
      <button
        type="button"
        disabled={busy}
        onClick={remove}
        className="min-h-11 rounded-md border border-red-300 px-3 text-sm text-red-700 disabled:opacity-60 dark:border-red-800 dark:text-red-400"
      >
        {busy ? "Removing…" : "Remove teacher"}
      </button>
      {err ? <p role="alert" className="mt-1 text-xs text-red-600">{err}</p> : null}
    </div>
  );
}
