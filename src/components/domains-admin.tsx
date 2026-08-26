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
      className={`group inline-flex min-h-11 items-center gap-1 rounded px-2 hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-800 ${className}`}
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
  domains: { id: string; host: string; isPrimary: boolean; wildcardCovered: boolean }[];
}

type DnsRecord = { type: string; name: string; value: string };
type VerificationRecord = { type: string; domain: string; value: string; reason?: string };

// DNS/Vercel state for one host, keyed by host (not domain id) so it survives from the
// "just added" response through the router.refresh() that re-fetches the domain list.
interface HostInfo {
  loading?: boolean;
  records?: DnsRecord[];
  status?: { ok: boolean; detail: string };
  verifying?: boolean;
  verified?: boolean;
  verification?: VerificationRecord[];
  vercelError?: string;
}

// School (brand_admin) + platform-owner UI to self-serve custom domains: map a host to a
// school, then — for a genuinely custom domain — register it with Vercel and show the
// DNS records + a "Check verification" poll. Subdomains of the app's own wildcard zone
// need none of that; they're live the moment the row exists.
export function DomainsAdmin({
  tenants,
  hasVercelDomains,
  maxDomains,
}: {
  tenants: Tenant[];
  hasVercelDomains: boolean;
  maxDomains: number;
}) {
  const router = useRouter();
  const [tenantId, setTenantId] = useState(tenants[0]?.id ?? "");
  const [host, setHost] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [info, setInfo] = useState<Record<string, HostInfo>>({});

  async function checkDns(h: string) {
    setInfo((m) => ({ ...m, [h]: { ...m[h], loading: true } }));
    const r = await fetch("/api/admin/domains/check", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ host: h }),
    });
    const d = r.ok ? await r.json() : { status: { ok: false, detail: "check failed" }, records: [] };
    setInfo((m) => ({ ...m, [h]: { ...m[h], loading: false, records: d.records, status: d.status } }));
  }

  async function checkVerification(h: string) {
    setInfo((m) => ({ ...m, [h]: { ...m[h], verifying: true } }));
    const r = await fetch("/api/admin/domains/verify", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ host: h }),
    });
    const d = r.ok ? await r.json() : { verified: false, verification: [] };
    setInfo((m) => ({ ...m, [h]: { ...m[h], verifying: false, verified: d.verified, verification: d.verification } }));
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
    const d = await r.json().catch(() => ({}));
    setBusy(false);
    if (r.ok) {
      const h = d.host as string;
      setInfo((m) => ({
        ...m,
        [h]: {
          records: d.dnsRecords ?? [],
          verified: d.vercel?.verified,
          verification: d.vercel?.verification,
          vercelError: d.vercel && d.vercel.ok === false ? d.vercel.error : undefined,
        },
      }));
      setHost("");
      router.refresh();
    } else {
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
            <input value={host} onChange={(e) => setHost(e.target.value)} placeholder="school.example.com or myschool.learn.witus.online" className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900" />
          </label>
          <button type="submit" disabled={busy || host.trim().length < 3} className="min-h-11 rounded-md px-4 font-medium text-white disabled:opacity-60" style={{ backgroundColor: "var(--accent)" }}>
            Add
          </button>
        </div>
        {err ? <p className="text-sm text-red-600">{err}</p> : null}
        <p className="text-xs text-neutral-600">
          A <code>&lt;name&gt;.learn.witus.online</code> subdomain goes live immediately, no DNS
          needed. {" "}
          {hasVercelDomains
            ? "A custom domain (your own, e.g. school.example.com) is registered with Vercel automatically, we'll show you the DNS records to set at your registrar and a button to check when it verifies."
            : "Custom domains still map here, but Vercel auto-registration isn't configured yet, point the domain at the generic DNS records shown below, and ask the platform owner to add it in the Vercel project."}
          {" "}Up to {maxDomains} domains per school.
        </p>
      </form>

      <div className="space-y-4">
        {tenants.map((t) => (
          <div key={t.id} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <h3 className="font-semibold">
              {t.name} <span className="text-sm font-normal text-neutral-600">/{t.slug}</span>
            </h3>
            {t.domains.length === 0 ? (
              <p className="mt-2 text-sm text-neutral-600">No domains mapped.</p>
            ) : (
              <ul className="mt-2 divide-y divide-neutral-200 dark:divide-neutral-800">
                {t.domains.map((d) => {
                  const hi = info[d.host];
                  return (
                    <li key={d.id} className="py-2 text-sm">
                      <div className="flex flex-wrap items-center gap-2">
                        <Copyable value={d.host} className="font-mono" />
                        {d.isPrimary ? (
                          <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 dark:bg-green-900 dark:text-green-200">primary</span>
                        ) : (
                          <button type="button" disabled={busy} onClick={() => act(d.id, "PATCH")} className="min-h-11 rounded border border-neutral-300 px-3 text-xs focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700">
                            Make primary
                          </button>
                        )}
                        {d.wildcardCovered ? (
                          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            covered, no DNS needed, it&apos;s live
                          </span>
                        ) : (
                          <>
                            <button type="button" disabled={hi?.loading} onClick={() => checkDns(d.host)} className="min-h-11 rounded border border-neutral-300 px-3 text-xs focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700">
                              {hi?.loading ? "Checking…" : "Check DNS"}
                            </button>
                            {hasVercelDomains ? (
                              <button type="button" disabled={hi?.verifying} onClick={() => checkVerification(d.host)} className="min-h-11 rounded border border-neutral-300 px-3 text-xs focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700">
                                {hi?.verifying ? "Checking…" : "Check verification"}
                              </button>
                            ) : null}
                            {hi?.verified === true ? (
                              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 dark:bg-green-900 dark:text-green-200">✅ Verified</span>
                            ) : hi?.verified === false ? (
                              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-800 dark:bg-amber-900 dark:text-amber-200">⏳ Pending DNS</span>
                            ) : null}
                          </>
                        )}
                        <button type="button" disabled={busy} onClick={() => act(d.id, "DELETE")} className="ml-auto min-h-11 rounded px-3 text-xs text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2">
                          Remove
                        </button>
                      </div>
                      {!d.wildcardCovered && hi?.vercelError ? (
                        <p className="mt-2 text-xs text-red-600">
                          Vercel registration error: {hi.vercelError}. The domain is still mapped here,
                          try &quot;Check verification&quot;, or remove and re-add it to retry.
                        </p>
                      ) : null}
                      {!d.wildcardCovered && hi && !hi.loading ? (
                        <div className="mt-2 rounded-md bg-neutral-50 p-3 dark:bg-neutral-900/60">
                          {hi.status ? (
                            <p className={hi.status.ok ? "text-green-700 dark:text-green-400" : "text-amber-700 dark:text-amber-400"}>
                              {hi.status.ok ? "✓ Live, " : "⏳ Not set up yet, "}
                              {hi.status.detail}
                            </p>
                          ) : null}
                          {hi.records?.length ? (
                            <div className="mt-2">
                              <p className="text-xs text-neutral-600">
                                Add a record at your DNS provider (click a value to copy).{" "}
                                {hi.records.length > 1 ? "An apex domain works with EITHER the A or the CNAME, " : ""}
                                use whatever your host (e.g. Vercel) shows for this domain.
                              </p>
                              <div className="mt-1 overflow-x-auto">
                                <table className="w-full text-xs">
                                  <thead className="text-neutral-400">
                                    <tr className="text-left"><th className="pr-3 font-normal">Type</th><th className="pr-3 font-normal">Name</th><th className="font-normal">Value</th></tr>
                                  </thead>
                                  <tbody className="font-mono">
                                    {hi.records.map((rec, i) => (
                                      <tr key={i}>
                                        <td className="pr-3 align-top">{rec.type}</td>
                                        <td className="pr-2 align-top"><Copyable value={rec.name} /></td>
                                        <td className="align-top"><Copyable value={rec.value} /></td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          ) : null}
                          {hi.verification?.length ? (
                            <div className="mt-3">
                              <p className="text-xs text-neutral-600">Vercel also asks for:</p>
                              <div className="mt-1 overflow-x-auto">
                                <table className="w-full text-xs">
                                  <tbody className="font-mono">
                                    {hi.verification.map((rec, i) => (
                                      <tr key={i}>
                                        <td className="pr-3 align-top">{rec.type}</td>
                                        <td className="pr-2 align-top"><Copyable value={rec.domain} /></td>
                                        <td className="align-top"><Copyable value={rec.value} /></td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
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
