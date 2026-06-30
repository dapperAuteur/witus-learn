import "server-only";
import { promises as dns } from "node:dns";

// Where custom domains should point. Vercel defaults; override per deployment with
// DOMAIN_APEX_IP / DOMAIN_CNAME_TARGET.
export const APEX_IP = process.env.DOMAIN_APEX_IP ?? "76.76.21.21";
export const CNAME_TARGET = process.env.DOMAIN_CNAME_TARGET ?? "cname.vercel-dns.com";

export interface DnsRecord {
  type: "A" | "CNAME";
  name: string;
  value: string;
}

/** Apex (root) domains use 2 labels (example.com); anything longer is a subdomain. */
export function isApex(host: string): boolean {
  return host.replace(/\.$/, "").split(".").length <= 2;
}

/** The DNS records that work for this host. Use whatever your DNS host (e.g. Vercel)
 *  shows for YOUR domain — these are the common Vercel defaults. An apex domain can use
 *  either the A record or a CNAME (Vercel supports both); a subdomain uses the CNAME. */
export function dnsRecordsFor(host: string): DnsRecord[] {
  const clean = host.toLowerCase().replace(/\.$/, "");
  if (isApex(clean)) {
    return [
      { type: "A", name: "@", value: APEX_IP },
      { type: "CNAME", name: "@", value: CNAME_TARGET },
    ];
  }
  const sub = clean.split(".").slice(0, -2).join("."); // the label(s) before the apex
  return [{ type: "CNAME", name: sub || clean, value: CNAME_TARGET }];
}

export interface DnsStatus {
  ok: boolean;
  detail: string;
}

/** Is the domain working? The reliable signal is whether it actually SERVES the site
 *  (true for an A record OR a CNAME — we don't care which the admin chose). DNS detail
 *  is a fallback when it isn't reachable yet. */
export async function checkDomainDns(host: string): Promise<DnsStatus> {
  const clean = host.toLowerCase().replace(/\.$/, "");

  // 1. Reachability: does https://host respond at all? (works for A or CNAME setups.)
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`https://${clean}/`, { method: "HEAD", redirect: "manual", signal: controller.signal }).catch(
      () => null,
    );
    clearTimeout(timer);
    if (res && res.status < 500) return { ok: true, detail: "domain is live and responding" };
  } catch {
    /* fall through to DNS detail */
  }

  // 2. Not reachable yet — report what DNS currently shows so the admin can debug.
  try {
    const [a, cname] = await Promise.all([
      dns.resolve4(clean).catch(() => [] as string[]),
      dns.resolveCname(clean).catch(() => [] as string[]),
    ]);
    if (a.includes(APEX_IP) || cname.some((c) => /vercel/i.test(c))) {
      return { ok: true, detail: cname[0] ? `CNAME → ${cname[0]}` : `A → ${a.join(", ")}` };
    }
    if (a.length || cname.length) {
      return { ok: false, detail: `resolves to ${cname[0] ?? a.join(", ")} — not the app yet (DNS may still be propagating)` };
    }
    return { ok: false, detail: "no DNS record found yet" };
  } catch {
    return { ok: false, detail: "not resolving yet" };
  }
}
