"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Tenant {
  id: string;
  slug: string;
  name: string;
  domains: { id: string; host: string; isPrimary: boolean }[];
}

// Platform-owner UI to map custom domains to schools (writes tenant_domains).
export function DomainsAdmin({ tenants }: { tenants: Tenant[] }) {
  const router = useRouter();
  const [tenantId, setTenantId] = useState(tenants[0]?.id ?? "");
  const [host, setHost] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function add(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    const r = await fetch("/api/admin/domains", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ tenantId, host }),
    });
    setBusy(false);
    if (r.ok) {
      setHost("");
      router.refresh();
    } else {
      const d = await r.json().catch(() => ({}));
      setErr(d.error ?? "Could not add domain.");
    }
  }

  async function act(id: string, method: "DELETE" | "PATCH") {
    if (method === "DELETE" && !confirm("Unmap this domain from the school?")) return;
    setBusy(true);
    await fetch(`/api/admin/domains/${id}`, {
      method,
      headers: method === "PATCH" ? { "content-type": "application/json" } : undefined,
      body: method === "PATCH" ? JSON.stringify({ primary: true }) : undefined,
    });
    setBusy(false);
    router.refresh();
  }

  return (
    <div className="space-y-8">
      <form onSubmit={add} className="space-y-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <h2 className="font-semibold">Map a domain to a school</h2>
        <div className="grid gap-3 sm:grid-cols-[1fr_1.5fr_auto] sm:items-end">
          <label className="text-sm">
            School
            <select value={tenantId} onChange={(e) => setTenantId(e.target.value)} className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900">
              {tenants.map((t) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            Domain
            <input value={host} onChange={(e) => setHost(e.target.value)} placeholder="school.example.com" className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900" />
          </label>
          <button type="submit" disabled={busy || host.trim().length < 3} className="min-h-11 rounded-md px-4 font-medium text-white disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
            Add
          </button>
        </div>
        {err ? <p className="text-sm text-red-600">{err}</p> : null}
        <p className="text-xs text-neutral-500">
          After adding here: point the domain at the deployment (a CNAME to{" "}
          <code>cname.vercel-dns.com</code>, or the A record Vercel shows), add it in the Vercel
          project, and it goes live once DNS propagates and the TLS cert issues.{" "}
          <code>www.</code> resolves the same as the apex automatically.
        </p>
      </form>

      <div className="space-y-4">
        {tenants.map((t) => (
          <div key={t.id} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <h3 className="font-semibold">
              {t.name} <span className="text-sm font-normal text-neutral-500">/{t.slug}</span>
            </h3>
            {t.domains.length === 0 ? (
              <p className="mt-2 text-sm text-neutral-500">No domains mapped.</p>
            ) : (
              <ul className="mt-2 divide-y divide-neutral-200 dark:divide-neutral-800">
                {t.domains.map((d) => (
                  <li key={d.id} className="flex flex-wrap items-center gap-2 py-2 text-sm">
                    <span className="font-mono">{d.host}</span>
                    {d.isPrimary ? (
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 dark:bg-green-900 dark:text-green-200">primary</span>
                    ) : (
                      <button type="button" disabled={busy} onClick={() => act(d.id, "PATCH")} className="rounded border border-neutral-300 px-2 py-0.5 text-xs dark:border-neutral-700">
                        Make primary
                      </button>
                    )}
                    <button type="button" disabled={busy} onClick={() => act(d.id, "DELETE")} className="ml-auto rounded px-2 py-0.5 text-xs text-red-600">
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
