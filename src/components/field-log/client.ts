import { reportClientError } from "@/lib/client-error";

// Shared client-side fetch helper for the Field Log. Guarantees every 400/500 fails "properly":
// a clear, user-facing message is returned (never a raw throw), and 500-class failures are
// auto-reported to an admin (problem_reports + WitUS Inbox). A network failure (offline) is
// reported back as `offline: true` so callers can queue instead of treating it as a bug.
export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string; status: number; offline?: boolean };

export async function apiRequest<T>(url: string, init?: RequestInit): Promise<ApiResult<T>> {
  let res: Response;
  try {
    res = await fetch(url, init);
  } catch {
    // Network / offline — expected in the field; not an admin-worthy bug.
    return { ok: false, error: "You appear to be offline. We'll keep your work and retry.", status: 0, offline: true };
  }
  const data = (await res.json().catch(() => ({}))) as { error?: string } & T;
  if (!res.ok) {
    const error = data?.error || `Request failed (${res.status}). Please try again.`;
    if (res.status >= 500) {
      reportClientError({ message: `Field Log ${res.status} at ${url}: ${error}` });
    }
    return { ok: false, error, status: res.status };
  }
  return { ok: true, data: data as T };
}

export const postJson = <T>(url: string, body: unknown) =>
  apiRequest<T>(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });

export const patchJson = <T>(url: string, body: unknown) =>
  apiRequest<T>(url, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
