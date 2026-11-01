// "Check link" on /teach/tours (plans/96 v2): does a published tour's link still answer?
//
// ON DEMAND ONLY. Nothing is scheduled and nothing is stored: the publisher presses the button, the
// server fetches the link once, and the answer is shown in the row until the page reloads.
//
// SERVER-SIDE FETCH OF A STORED LINK, so it is fenced: https only, no IP-literal or local host names
// (loopback, private, link-local, the cloud metadata address), at most 3 redirects with every hop
// checked the same way, a 5-second limit for the whole check, and the body is never read. The URL is
// never logged (shared DX logging rule): a link to someone's Drive file is the publisher's business.
//
// "Reachable" means the host answered 2xx after redirects. It cannot see inside: a Drive file that is
// not shared publicly may redirect to a sign-in page that itself answers 200, which is why the final
// host is returned too and the page names it when it differs.
//
// Pure apart from the fetch it is handed, so the tests drive it with a fake.

export const LINK_CHECK_TIMEOUT_MS = 5000;
export const LINK_CHECK_MAX_REDIRECTS = 3;

export type LinkCheckResult =
  | { status: number; reachable: boolean; finalHost: string; redirects: number }
  | { status: null; reachable: false; error: "blocked" | "timeout" | "network" | "too_many_redirects" };

/** IPv4 or IPv6 literals, and names that only mean something on a private network. */
export function isBlockedHost(hostname: string): boolean {
  const h = hostname.toLowerCase().replace(/^\[|\]$/g, "").replace(/\.$/, "");
  if (!h) return true;
  if (h === "localhost" || h.endsWith(".localhost") || h.endsWith(".local") || h.endsWith(".internal")) return true;
  // Any IP literal is refused: a tour link names a site, and an address is how an internal service
  // (or 169.254.169.254) would be reached.
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(h)) return true;
  if (h.includes(":")) return true;
  // A single label (no dot) resolves only on a local network.
  return !h.includes(".");
}

/** May the server fetch this URL? https, a public-looking host, no credentials in it. */
export function isCheckableUrl(raw: string): URL | null {
  let u: URL;
  try {
    u = new URL(raw.trim());
  } catch {
    return null;
  }
  if (u.protocol !== "https:") return null;
  if (u.username || u.password) return null;
  if (u.port && u.port !== "443") return null;
  if (isBlockedHost(u.hostname)) return null;
  return u;
}

type FetchLike = (url: string, init: RequestInit) => Promise<Response>;

/** Fetch the link, following up to 3 redirects by hand so each hop is checked. */
export async function checkTourLink(
  raw: string,
  opts: { fetchImpl?: FetchLike; timeoutMs?: number } = {},
): Promise<LinkCheckResult> {
  const doFetch: FetchLike = opts.fetchImpl ?? ((url, init) => fetch(url, init));
  const signal = AbortSignal.timeout(opts.timeoutMs ?? LINK_CHECK_TIMEOUT_MS);
  let current = isCheckableUrl(raw);
  if (!current) return { status: null, reachable: false, error: "blocked" };

  for (let redirects = 0; ; redirects++) {
    let res: Response;
    try {
      res = await doFetch(current.toString(), {
        method: "GET",
        redirect: "manual",
        signal,
        headers: { "user-agent": "Learn.WitUS link check", accept: "*/*" },
        cache: "no-store",
      });
    } catch (err) {
      const timedOut = err instanceof Error && (err.name === "TimeoutError" || err.name === "AbortError");
      return { status: null, reachable: false, error: timedOut ? "timeout" : "network" };
    }
    // Never read the body: the answer is the status line.
    void res.body?.cancel().catch(() => {});

    const location = res.headers.get("location");
    if (res.status >= 300 && res.status < 400 && location) {
      if (redirects >= LINK_CHECK_MAX_REDIRECTS) return { status: null, reachable: false, error: "too_many_redirects" };
      let next: URL | null = null;
      try {
        next = isCheckableUrl(new URL(location, current).toString());
      } catch {
        next = null;
      }
      if (!next) return { status: null, reachable: false, error: "blocked" };
      current = next;
      continue;
    }
    return {
      status: res.status,
      reachable: res.status >= 200 && res.status < 300,
      finalHost: current.hostname.replace(/^www\./, ""),
      redirects,
    };
  }
}

/** One plain sentence for the row's status line. */
export function describeLinkCheck(result: LinkCheckResult, storedHost: string): string {
  if (result.status === null) {
    switch (result.error) {
      case "blocked":
        return "Not checked: the link (or a redirect from it) is not a public https address.";
      case "timeout":
        return "No answer within 5 seconds. Try again; if it keeps failing, the link may be dead.";
      case "too_many_redirects":
        return "The link redirects more than 3 times, so it was not followed to the end.";
      default:
        return "The link could not be reached.";
    }
  }
  const elsewhere =
    result.finalHost !== storedHost.replace(/^www\./, "")
      ? ` It ended up on ${result.finalHost}: open it to check that is the file, not a sign-in page.`
      : "";
  if (result.reachable) return `Reachable: the link answered ${result.status}.${elsewhere}`;
  return `Not reachable: the link answered ${result.status}.${elsewhere}`;
}
