"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Click-to-copy chip — minimises transcription errors when entering DNS values.
function Copyable({ value, className = "" }: { value: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      aria-label={copied ? `Copied ${value}` : `Copy ${value}`}
      title="Click to copy"
      className={`group inline-flex items-center gap-1 rounded px-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 ${className}`}
    >
      <span className="break-all">{value}</span>
      <span aria-hidden className="text-[10px] text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
        {copied ? "copied ✓" : "⧉"}
      </span>
    </button>
  );
}

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

  type DnsRecord = { type: string; name: string; value: string };
  type DnsInfo = { loading?: boolean; records?: DnsRecord[]; status?: { ok: boolean; detail: string } };
  const [dns, setDns] = useState<Record<string, DnsInfo>>({});

  async function checkDns(id: string, h: string) {
    setDns((m) => ({ ...m, [id]: { ...m[id], loading: true } }));
    const r = await fetch("/api/admin/domains/check", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ host: h }),
    });
    const d = r.ok ? await r.json() : { status: { ok: false, detail: "check failed" }, records: [] };
    setDns((m) => ({ ...m, [id]: { loading: false, records: d.records, status: d.status } }));
  }

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
                {t.domains.map((d) => {
                  const info = dns[d.id];
                  return (
                    <li key={d.id} className="py-2 text-sm">
                      <div className="flex flex-wrap items-center gap-2">
                        <Copyable value={d.host} className="font-mono" />
                        {d.isPrimary ? (
                          <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 dark:bg-green-900 dark:text-green-200">primary</span>
                        ) : (
                          <button type="button" disabled={busy} onClick={() => act(d.id, "PATCH")} className="rounded border border-neutral-300 px-2 py-0.5 text-xs dark:border-neutral-700">
                            Make primary
                          </button>
                        )}
                        <button type="button" disabled={info?.loading} onClick={() => checkDns(d.id, d.host)} className="rounded border border-neutral-300 px-2 py-0.5 text-xs dark:border-neutral-700">
                          {info?.loading ? "Checking…" : "Check DNS"}
                        </button>
                        <button type="button" disabled={busy} onClick={() => act(d.id, "DELETE")} className="ml-auto rounded px-2 py-0.5 text-xs text-red-600">
                          Remove
                        </button>
                      </div>
                      {info && !info.loading ? (
                        <div className="mt-2 rounded-md bg-neutral-50 p-3 dark:bg-neutral-900/60">
                          {info.status ? (
                            <p className={info.status.ok ? "text-green-700 dark:text-green-400" : "text-amber-700 dark:text-amber-400"}>
                              {info.status.ok ? "✓ Live — " : "⏳ Not set up yet — "}
                              {info.status.detail}
                            </p>
                          ) : null}
                          {info.records?.length ? (
                            <div className="mt-2">
                              <p className="text-xs text-neutral-500">
                                Add a record at your DNS provider (click a value to copy).{" "}
                                {info.records.length > 1 ? "An apex domain works with EITHER the A or the CNAME — " : ""}
                                use whatever your host (e.g. Vercel) shows for this domain.
                              </p>
                              <table className="mt-1 w-full text-xs">
                                <thead className="text-neutral-400">
                                  <tr className="text-left"><th className="pr-3 font-normal">Type</th><th className="pr-3 font-normal">Name</th><th className="font-normal">Value</th></tr>
                                </thead>
                                <tbody className="font-mono">
                                  {info.records.map((rec, i) => (
                                    <tr key={i}>
                                      <td className="pr-3 align-top">{rec.type}</td>
                                      <td className="pr-2 align-top"><Copyable value={rec.name} /></td>
                                      <td className="align-top"><Copyable value={rec.value} /></td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
