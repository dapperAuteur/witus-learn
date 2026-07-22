"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ApiKeyRow {
  id: string;
  name: string;
  keyPrefix: string;
  lastUsedAt: Date | string | null;
  createdAt: Date | string;
  revokedAt: Date | string | null;
}

function fmt(d: Date | string | null): string {
  if (!d) return "never";
  return new Date(d).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
}

// Click-to-copy chip for the once-shown raw key.
function Copyable({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="group inline-flex w-full items-start gap-2 rounded-md bg-neutral-900 px-3 py-2 text-left font-mono text-xs break-all text-neutral-100 hover:bg-neutral-800"
      title="Click to copy"
    >
      <span className="flex-1 break-all">{value}</span>
      <span className="shrink-0 text-neutral-400 group-hover:text-neutral-200">{copied ? "copied ✓" : "⧉ copy"}</span>
    </button>
  );
}

// Brand-admin UI to mint/revoke this school's server-to-server API keys (writes
// tenant_api_keys via /api/admin/api-keys). Mirrors DomainsAdmin's shape.
export function ApiKeysAdmin({ keys }: { keys: ApiKeyRow[] }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [justCreated, setJustCreated] = useState<{ name: string; raw: string } | null>(null);

  async function create(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    const r = await fetch("/api/admin/api-keys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name }),
    });
    setBusy(false);
    if (r.ok) {
      const d = await r.json();
      setJustCreated({ name: d.key.name, raw: d.raw });
      setName("");
      router.refresh();
    } else {
      const d = await r.json().catch(() => ({}));
      setErr(d.error ?? "Could not create key.");
    }
  }

  async function revoke(id: string) {
    if (!confirm("Revoke this key? Anything using it will stop working immediately.")) return;
    setBusy(true);
    await fetch(`/api/admin/api-keys/${id}`, { method: "DELETE" });
    setBusy(false);
    router.refresh();
  }

  const active = keys.filter((k) => !k.revokedAt);
  const revoked = keys.filter((k) => k.revokedAt);

  return (
    <div className="space-y-8">
      {justCreated ? (
        <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/40">
          <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">
            &ldquo;{justCreated.name}&rdquo; created, copy this key now
          </p>
          <p className="mt-1 text-xs text-amber-800 dark:text-amber-300">
            This is the only time the full key is shown. It will not be recoverable after you leave
            this page.
          </p>
          <div className="mt-3">
            <Copyable value={justCreated.raw} />
          </div>
          <button
            type="button"
            onClick={() => setJustCreated(null)}
            className="mt-3 text-xs underline text-amber-800 dark:text-amber-300"
          >
            I&rsquo;ve saved it, dismiss
          </button>
        </div>
      ) : null}

      <form onSubmit={create} className="space-y-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <h2 className="font-semibold">Create a key</h2>
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
          <label className="text-sm">
            Name (what it&rsquo;s for)
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="WanderLearn embed"
              className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
            />
          </label>
          <button
            type="submit"
            disabled={busy || name.trim().length < 1}
            className="min-h-11 rounded-md px-4 font-medium text-white disabled:opacity-60"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Create key
          </button>
        </div>
        {err ? <p className="text-sm text-red-600">{err}</p> : null}
      </form>

      <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <h3 className="font-semibold">Active keys</h3>
        {active.length === 0 ? (
          <p className="mt-2 text-sm text-neutral-500">No active keys.</p>
        ) : (
          <ul className="mt-2 divide-y divide-neutral-200 dark:divide-neutral-800">
            {active.map((k) => (
              <li key={k.id} className="flex flex-wrap items-center gap-2 py-2 text-sm">
                <span className="font-medium">{k.name}</span>
                <span className="font-mono text-xs text-neutral-500">{k.keyPrefix}…</span>
                <span className="text-xs text-neutral-500">last used: {fmt(k.lastUsedAt)}</span>
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => revoke(k.id)}
                  className="ml-auto min-h-11 rounded px-3 text-xs text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Revoke
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {revoked.length > 0 ? (
        <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <h3 className="font-semibold text-neutral-500">Revoked</h3>
          <ul className="mt-2 divide-y divide-neutral-200 dark:divide-neutral-800">
            {revoked.map((k) => (
              <li key={k.id} className="py-2 text-sm text-neutral-500">
                <span className="font-medium">{k.name}</span>{" "}
                <span className="font-mono text-xs">{k.keyPrefix}…</span>, revoked {fmt(k.revokedAt)}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
