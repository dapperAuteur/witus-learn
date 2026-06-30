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

/** The DNS record the admin must add at their registrar for this host. */
export function dnsRecordsFor(host: string): DnsRecord[] {
  const clean = host.toLowerCase().replace(/\.$/, "");
  if (isApex(clean)) return [{ type: "A", name: "@", value: APEX_IP }];
  const sub = clean.split(".").slice(0, -2).join("."); // the label(s) before the apex
  return [{ type: "CNAME", name: sub || clean, value: CNAME_TARGET }];
}

export interface DnsStatus {
  ok: boolean;
  detail: string;
}

/** Live DNS check: does this host actually point where it should yet? */
export async function checkDomainDns(host: string): Promise<DnsStatus> {
  const clean = host.toLowerCase().replace(/\.$/, "");
  try {
    if (isApex(clean)) {
      const a = await dns.resolve4(clean).catch(() => [] as string[]);
      return a.includes(APEX_IP)
        ? { ok: true, detail: `A record → ${APEX_IP}` }
        : { ok: false, detail: a.length ? `points to ${a.join(", ")} (expected ${APEX_IP})` : "no A record found yet" };
    }
    const cname = await dns.resolveCname(clean).catch(() => [] as string[]);
    if (cname.some((t) => t.replace(/\.$/, "").includes(CNAME_TARGET))) {
      return { ok: true, detail: `CNAME → ${CNAME_TARGET}` };
    }
    // Some providers flatten a CNAME to A records — accept the apex IP too.
    const a = await dns.resolve4(clean).catch(() => [] as string[]);
    if (a.includes(APEX_IP)) return { ok: true, detail: `A record → ${APEX_IP}` };
    return { ok: false, detail: cname.length ? `CNAME → ${cname.join(", ")}` : "no record found yet" };
  } catch {
    return { ok: false, detail: "not resolving yet" };
  }
}
