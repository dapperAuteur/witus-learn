import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Can a learner actually REACH /downloads from the nav with no network?
 *
 * The Downloads link in the header (src/components/site-header.tsx → NavItem.hardNav) is a real
 * <a>, not a next/link. That looks like a nitpick and isn't: it is the difference between the link
 * working offline and being dead exactly when it's needed. This file proves it by running the REAL
 * public/sw.js fetch handler with the network down, and asking it both questions:
 *
 *   • a hard <a> click  → `request.mode === "navigate"` → served from the SW's precache. ✅
 *   • a <Link> click    → an RSC fetch for /downloads   → nothing to serve.                ❌
 *
 * So this is a regression test for the LINK TYPE, not just for the page: swap the <a> back to a
 * <Link> and the only thing that changes is which of these two paths the browser takes — and the
 * second one is the broken one.
 */

const SW_SOURCE = readFileSync(
  fileURLToPath(new URL("../public/sw.js", import.meta.url)),
  "utf8",
);

const ORIGIN = "https://bettervice.club";

// Mirrors the parts of the real Cache API the worker relies on: entries are kept in insertion
// order (the real API returns the FIRST stored match), each match hands back a fresh copy (a real
// match never returns an already-read body), and `add` goes through the worker's own fetch, so
// an "install while online" test never touches the real network.
class FakeCache {
  readonly store = new Map<string, Response>();
  constructor(private readonly fetchImpl: () => typeof fetch) {}
  private key(request: { url: string } | string): string {
    return new URL(typeof request === "string" ? request : request.url, ORIGIN).toString();
  }
  async put(request: { url: string } | string, response: Response) {
    this.store.set(this.key(request), response);
  }
  async add(request: string) {
    const res = await this.fetchImpl()(new URL(request, ORIGIN).toString());
    if (!res.ok) throw new TypeError("cache.add failed");
    this.store.set(this.key(request), res);
  }
  async match(request: { url: string } | string, options?: { ignoreSearch?: boolean; ignoreVary?: boolean }) {
    const wanted = this.key(request);
    const base = wanted.split("?")[0];
    for (const [k, v] of this.store) {
      if (k === wanted || (options?.ignoreSearch && k.split("?")[0] === base)) return v.clone();
    }
    return undefined;
  }
  async delete(request: { url: string } | string) {
    return this.store.delete(this.key(request));
  }
  async keys() {
    return [...this.store.keys()];
  }
}

class FakeCacheStorage {
  readonly caches = new Map<string, FakeCache>();
  constructor(private readonly fetchImpl: () => typeof fetch) {}
  async open(name: string) {
    let c = this.caches.get(name);
    if (!c) {
      c = new FakeCache(this.fetchImpl);
      this.caches.set(name, c);
    }
    return c;
  }
  async keys() {
    return [...this.caches.keys()];
  }
  async delete(name: string) {
    return this.caches.delete(name);
  }
  async match(request: { url: string } | string) {
    for (const c of this.caches.values()) {
      const hit = await c.match(request);
      if (hit) return hit;
    }
    return undefined;
  }
}

type Listener = (event: unknown) => void;

/** Boot the real sw.js in a fake worker global, run its `install`, and hand back a way to fire
 *  fetch events at it. `fetch` is a vi.fn the test controls — that's how we "go offline". */
function bootServiceWorker(fetchImpl: typeof fetch) {
  const listeners = new Map<string, Listener>();
  const cacheStorage = new FakeCacheStorage(() => fetchImpl);
  const self = {
    addEventListener: (type: string, fn: Listener) => listeners.set(type, fn),
    skipWaiting: () => {},
    clients: { claim: async () => {} },
    location: { origin: ORIGIN },
  };

  // A browser service worker resolves a relative URL against its own scope; Node's `Request`
  // throws on one. sw.js legitimately builds `new Request("/downloads?__rsc")`, so give it a
  // Request that resolves like the browser's does. Harness-only — sw.js itself runs unmodified.
  class ScopedRequest extends Request {
    constructor(input: RequestInfo | URL, init?: RequestInit) {
      super(typeof input === "string" ? new URL(input, ORIGIN) : input, init);
    }
  }

  // `caches`, `fetch` and `Request` are globals inside a service worker; shadow them as params so
  // the real source runs unmodified. No transformation of sw.js — what ships is what's tested.
  new Function("self", "caches", "fetch", "Request", SW_SOURCE)(
    self,
    cacheStorage,
    fetchImpl,
    ScopedRequest,
  );

  async function install() {
    const waits: Promise<unknown>[] = [];
    listeners.get("install")?.({ waitUntil: (p: Promise<unknown>) => waits.push(p) });
    await Promise.all(waits);
  }

  /** Fire a fetch event and return what the SW responded with (or null if it passed through). */
  async function dispatchFetch(request: {
    method: string;
    url: string;
    mode?: string;
    destination?: string;
    headers: Headers;
  }): Promise<Response | null> {
    let responded: Promise<Response> | null = null;
    const waits: Promise<unknown>[] = [];
    listeners.get("fetch")?.({
      request,
      respondWith: (p: Promise<Response>) => {
        responded = p;
      },
      waitUntil: (p: Promise<unknown>) => waits.push(p),
    });
    if (!responded) return null; // SW declined to handle it → straight to the network
    const res = await responded;
    // The worker remembers visited pages inside waitUntil, after it has answered. Let that land
    // before the test looks at the caches, as a real worker kept alive by waitUntil would.
    await Promise.all(waits);
    return res;
  }

  async function activate() {
    const waits: Promise<unknown>[] = [];
    listeners.get("activate")?.({ waitUntil: (p: Promise<unknown>) => waits.push(p) });
    await Promise.all(waits);
  }

  /** Post a message to the worker, as a page's `registration.active.postMessage` would. */
  async function postMessage(data: unknown, ports: { postMessage: (m: unknown) => void }[] = []) {
    const waits: Promise<unknown>[] = [];
    listeners.get("message")?.({ data, ports, waitUntil: (p: Promise<unknown>) => waits.push(p) });
    await Promise.all(waits);
  }

  return { install, activate, dispatchFetch, postMessage, cacheStorage };
}

/** What the browser issues when a learner clicks a real <a href="/downloads">. */
const hardNavigation = (path: string) => ({
  method: "GET",
  url: `${ORIGIN}${path}`,
  mode: "navigate",
  destination: "document",
  headers: new Headers(),
});

/** What Next's router issues instead when the same link is a <Link href="/downloads">. */
const rscNavigation = (path: string) => ({
  method: "GET",
  url: `${ORIGIN}${path}`,
  mode: "cors",
  destination: "empty",
  headers: new Headers({ RSC: "1" }),
});

const ONLINE = () =>
  vi.fn(async (input: RequestInfo | URL) => {
    const url = typeof input === "string" ? input : (input as { url: string }).url;
    return new Response(`<!doctype html><title>Your downloads</title>${url}`, {
      status: 200,
      headers: { "content-type": "text/html" },
    });
  }) as unknown as typeof fetch;

/** Airplane mode: every network request rejects, exactly as it does in a real browser. */
const OFFLINE = () =>
  vi.fn(async () => {
    throw new TypeError("Failed to fetch");
  }) as unknown as typeof fetch;

describe("the Downloads nav link with no network", () => {
  let sw: ReturnType<typeof bootServiceWorker>;

  beforeEach(async () => {
    // Install while online — the SW precaches /downloads + /offline, as it does on a real first
    // visit. Then the network dies.
    sw = bootServiceWorker(ONLINE());
    await sw.install();
  });

  it("precaches /downloads at install, so it exists before the learner ever needs it", async () => {
    const cache = await sw.cacheStorage.open("witus-static-v6");
    expect(await cache.keys()).toContain(`${ORIGIN}/downloads`);
  });

  it("serves /downloads from cache for a HARD navigation — what the nav <a> produces", async () => {
    const offline = bootServiceWorker(ONLINE());
    await offline.install();
    // Now go offline: rebuild the handler over the SAME caches with a dead network.
    const dead = bootServiceWorker(OFFLINE());
    // Reuse the populated caches from the online install.
    for (const [name, cache] of offline.cacheStorage.caches) {
      const target = await dead.cacheStorage.open(name);
      for (const [k, v] of cache.store) target.store.set(k, v);
    }

    const res = await dead.dispatchFetch(hardNavigation("/downloads"));
    expect(res).not.toBeNull();
    expect(res!.status).toBe(200);
    expect(await res!.text()).toContain("Your downloads");
  });

  it("CANNOT serve the RSC fetch a <Link> would have issued — this is why the link is a real <a>", async () => {
    const dead = bootServiceWorker(OFFLINE());
    const online = bootServiceWorker(ONLINE());
    await online.install();
    for (const [name, cache] of online.cacheStorage.caches) {
      const target = await dead.cacheStorage.open(name);
      for (const [k, v] of cache.store) target.store.set(k, v);
    }

    // The SW's RSC branch looks for a payload savePage() cached under a synthetic key. /downloads
    // is precached as a DOCUMENT only, so there is nothing here — a <Link> click offline would get
    // undefined and the learner would be staring at a dead menu item.
    const res = await dead.dispatchFetch(rscNavigation("/downloads"));
    expect(res).toBeUndefined();
  });

  it("still falls through to /offline for a page the learner never saved", async () => {
    const dead = bootServiceWorker(OFFLINE());
    const online = bootServiceWorker(ONLINE());
    await online.install();
    for (const [name, cache] of online.cacheStorage.caches) {
      const target = await dead.cacheStorage.open(name);
      for (const [k, v] of cache.store) target.store.set(k, v);
    }

    const res = await dead.dispatchFetch(hardNavigation("/courses/never-visited"));
    expect(res).not.toBeNull();
    expect(await res!.text()).toContain("/offline");
  });
});

/** A worker with a dead network over a COPY of `online`'s caches: the same device, signal lost. */
async function goOffline(online: ReturnType<typeof bootServiceWorker>, fetchImpl: typeof fetch = OFFLINE()) {
  const dead = bootServiceWorker(fetchImpl);
  for (const [name, cache] of online.cacheStorage.caches) {
    const target = await dead.cacheStorage.open(name);
    for (const [k, v] of cache.store) target.store.set(k, v);
  }
  return dead;
}

const html = (body: string) =>
  new Response(`<!doctype html>${body}`, { status: 200, headers: { "content-type": "text/html; charset=utf-8" } });

describe("offline navigations serve the right document", () => {
  it("serves the fresh /offline saved in the pages cache over a stale install-time copy", async () => {
    const online = bootServiceWorker(ONLINE());
    await online.install();
    // The install-time copy (static cache, created first) is old; the client saved a fresh one.
    (await online.cacheStorage.open("witus-static-v6")).store.set(`${ORIGIN}/offline`, html("<h1>STALE offline</h1>"));
    await (await online.cacheStorage.open("witus-pages-v1")).put("/offline", html("<h1>FRESH offline</h1>"));

    const dead = await goOffline(online);
    const res = await dead.dispatchFetch(hardNavigation("/courses"));
    const text = await res!.text();
    expect(text).toContain("FRESH offline");
    expect(text).not.toContain("STALE");
  });

  it("gives a navigation the saved HTML even when the ?__rsc payload was stored first", async () => {
    const online = bootServiceWorker(ONLINE());
    await online.install();
    const pages = await online.cacheStorage.open("witus-pages-v1");
    const lesson = "/bam/knots/lesson/bowline";
    // savePage() writes both halves concurrently, so the RSC payload can land first.
    await pages.put(`${lesson}?__rsc`, new Response("0:[\"$\",\"div\"]", { headers: { "content-type": "text/x-component" } }));
    await pages.put(lesson, html("<h1>The bowline</h1>"));

    const dead = await goOffline(online);
    const res = await dead.dispatchFetch(hardNavigation(`${lesson}?ref=next`));
    expect(res!.headers.get("content-type")).toContain("text/html");
    expect(await res!.text()).toContain("The bowline");
  });

  it("never answers sign-in, dashboard or admin pages from a cache", async () => {
    const online = bootServiceWorker(ONLINE());
    await online.install();
    const pages = await online.cacheStorage.open("witus-pages-v1");
    for (const path of ["/dashboard", "/admin/users", "/login"]) await pages.put(path, html(`<h1>PRIVATE ${path}</h1>`));
    await pages.put("/admin/future", html("<h1>Future board</h1>"));

    const dead = await goOffline(online);
    for (const path of ["/dashboard", "/admin/users", "/login"]) {
      const text = await (await dead.dispatchFetch(hardNavigation(path)))!.text();
      expect(text).not.toContain("PRIVATE");
      expect(text).toContain("/offline");
    }
    // The owner's deliberately saved board is the one admin page that works offline.
    expect(await (await dead.dispatchFetch(hardNavigation("/admin/future")))!.text()).toContain("Future board");
    // And the RSC branch leaves these paths to the network, saved payload or not.
    await pages.put("/dashboard?__rsc", new Response("PRIVATE rsc"));
    expect(await (await goOffline(online)).dispatchFetch(rscNavigation("/dashboard"))).toBeNull();
  });

  it("falls back to inline HTML with a way forward when no /offline copy exists at all", async () => {
    const dead = bootServiceWorker(OFFLINE());
    const res = await dead.dispatchFetch(hardNavigation("/courses"));
    expect(res!.headers.get("content-type")).toContain("text/html");
    const text = await res!.text();
    expect(text).toContain('href="/downloads"');
    expect(text).toContain("Retry");
  });

  it("opens the home page for the app's start URL, precached at install (worker v6)", async () => {
    const online = bootServiceWorker(ONLINE());
    await online.install();
    const dead = await goOffline(online);
    const text = await (await dead.dispatchFetch(hardNavigation("/")))!.text();
    // ONLINE answers every URL with a page that names it; the home page's copy names "/".
    expect(text).toContain(`${ORIGIN}/`);
    expect(text).not.toContain(`${ORIGIN}/downloads`);
  });

  it("serves a saved course page by its own path", async () => {
    const online = bootServiceWorker(ONLINE());
    await online.install();
    await (await online.cacheStorage.open("witus-pages-v1")).put("/bam/knots", html("<h1>Knots course</h1>"));
    const dead = await goOffline(online);
    expect(await (await dead.dispatchFetch(hardNavigation("/bam/knots")))!.text()).toContain("Knots course");
  });

  it("never touches /api, saved or not", async () => {
    const dead = bootServiceWorker(OFFLINE());
    expect(await dead.dispatchFetch(hardNavigation("/api/health"))).toBeNull();
  });
});

describe("a server error on a saved page", () => {
  /** The network is up but the server answers 503 (e.g. its database is over quota). */
  const SERVER_DOWN = () =>
    vi.fn(async () => new Response("<h1>Service unavailable</h1>", { status: 503, headers: { "content-type": "text/html" } })) as unknown as typeof fetch;

  async function savedThenDown() {
    const online = bootServiceWorker(ONLINE());
    await online.install();
    const pages = await online.cacheStorage.open("witus-pages-v1");
    await pages.put("/bam/knots/lesson/bowline", html("<h1>The bowline</h1>"));
    await pages.put("/dashboard", html("<h1>PRIVATE dashboard</h1>"));
    return goOffline(online, SERVER_DOWN());
  }

  it("serves the saved copy of that exact page instead of the 503", async () => {
    const sw = await savedThenDown();
    const res = await sw.dispatchFetch(hardNavigation("/bam/knots/lesson/bowline"));
    expect(res!.status).toBe(200);
    expect(await res!.text()).toContain("The bowline");
  });

  it("passes the 503 through for a page that was never saved", async () => {
    const sw = await savedThenDown();
    const res = await sw.dispatchFetch(hardNavigation("/bam/knots/lesson/sheet-bend"));
    expect(res!.status).toBe(503);
  });

  it("passes the 503 through for never-cached pages, even if a copy exists", async () => {
    const sw = await savedThenDown();
    const res = await sw.dispatchFetch(hardNavigation("/dashboard"));
    expect(res!.status).toBe(503);
    expect(await res!.text()).not.toContain("PRIVATE");
  });

  it("leaves /api alone", async () => {
    const sw = await savedThenDown();
    expect(await sw.dispatchFetch(hardNavigation("/api/courses"))).toBeNull();
  });

  it("passes a healthy 200 straight through, saved copy or not", async () => {
    const online = bootServiceWorker(ONLINE());
    await online.install();
    await (await online.cacheStorage.open("witus-pages-v1")).put("/bam/knots/lesson/bowline", html("<h1>OLD copy</h1>"));
    const sw = await goOffline(online, ONLINE());
    const text = await (await sw.dispatchFetch(hardNavigation("/bam/knots/lesson/bowline")))!.text();
    expect(text).not.toContain("OLD copy");
  });
});

describe("visited public pages are remembered and served offline (worker v6)", () => {
  const VISITED = "witus-visited-v1";

  /** A network that answers each path with its own page, so a test can tell which copy it got. */
  const PER_PATH = () =>
    vi.fn(async (input: RequestInfo | URL) => {
      const url = new URL(typeof input === "string" ? input : (input as { url: string }).url);
      return html(`<h1>LIVE ${url.pathname}${url.search}</h1>`);
    }) as unknown as typeof fetch;

  async function visit(paths: string[]) {
    const online = bootServiceWorker(PER_PATH());
    for (const p of paths) await online.dispatchFetch(hardNavigation(p));
    return online;
  }

  it("serves a page opened online from its visited copy once the network is gone", async () => {
    const dead = await goOffline(await visit(["/bam/knots"]));
    const res = await dead.dispatchFetch(hardNavigation("/bam/knots"));
    expect(res!.headers.get("content-type")).toContain("text/html");
    expect(await res!.text()).toContain("LIVE /bam/knots");
  });

  it("keys a visited copy by the exact URL, query string included", async () => {
    const dead = await goOffline(await visit(["/courses?category=art"]));
    expect(await (await dead.dispatchFetch(hardNavigation("/courses?category=art")))!.text()).toContain(
      "LIVE /courses?category=art",
    );
    // A different query is a different page the visitor never opened.
    const other = await (await dead.dispatchFetch(hardNavigation("/courses?category=math")))!.text();
    expect(other).not.toContain("LIVE");
    expect(other).toContain("You're offline");
  });

  it("prefers the learner's saved copy over the visited one", async () => {
    const online = await visit(["/bam/knots"]);
    await (await online.cacheStorage.open("witus-pages-v1")).put("/bam/knots", html("<h1>SAVED knots</h1>"));
    const text = await (await (await goOffline(online)).dispatchFetch(hardNavigation("/bam/knots")))!.text();
    expect(text).toContain("SAVED knots");
    expect(text).not.toContain("LIVE");
  });

  it("caps the visited cache and evicts the page opened longest ago", async () => {
    const paths = Array.from({ length: 152 }, (_, i) => `/page-${i}`);
    const online = await visit(paths);
    const keys = await (await online.cacheStorage.open(VISITED)).keys();
    expect(keys).toHaveLength(150);
    expect(keys).not.toContain(`${ORIGIN}/page-0`);
    expect(keys).not.toContain(`${ORIGIN}/page-1`);
    expect(keys).toContain(`${ORIGIN}/page-151`);
  });

  it("counts a revisit as recent, so a page the visitor keeps opening is not evicted", async () => {
    const online = await visit(["/home-base", ...Array.from({ length: 148 }, (_, i) => `/p-${i}`)]);
    await online.dispatchFetch(hardNavigation("/home-base")); // opened again: now the newest
    await online.dispatchFetch(hardNavigation("/one-more"));
    await online.dispatchFetch(hardNavigation("/and-another"));
    const keys = await (await online.cacheStorage.open(VISITED)).keys();
    expect(keys).toContain(`${ORIGIN}/home-base`);
    expect(keys).not.toContain(`${ORIGIN}/p-0`);
  });

  it("skips a page over 2 MB, and keeps one the size of the full catalog", async () => {
    const big = vi.fn(async () => html(`<p>${"x".repeat(2.1 * 1024 * 1024)}</p>`)) as unknown as typeof fetch;
    const online = bootServiceWorker(big);
    await online.dispatchFetch(hardNavigation("/huge"));
    expect(await (await online.cacheStorage.open(VISITED)).keys()).toHaveLength(0);
    // /courses measured 1.16 MB with 276 courses: well inside the limit, with room to grow.
    const catalog = vi.fn(async () => html(`<p>${"x".repeat(1.6 * 1024 * 1024)}</p>`)) as unknown as typeof fetch;
    const sw = bootServiceWorker(catalog);
    await sw.dispatchFetch(hardNavigation("/courses"));
    expect(await (await sw.cacheStorage.open(VISITED)).keys()).toEqual([`${ORIGIN}/courses`]);
  });

  it("does not remember an error page, a non-HTML answer or a redirect", async () => {
    const answers: Record<string, () => Response> = {
      "/missing": () => new Response("<h1>Not found</h1>", { status: 404, headers: { "content-type": "text/html" } }),
      "/feed": () => new Response("{}", { status: 200, headers: { "content-type": "application/json" } }),
      "/moved": () => {
        const res = html("<h1>Sign in</h1>");
        Object.defineProperty(res, "redirected", { value: true });
        return res;
      },
    };
    const net = vi.fn(async (input: RequestInfo | URL) =>
      answers[new URL(typeof input === "string" ? input : (input as { url: string }).url).pathname](),
    ) as unknown as typeof fetch;
    const online = bootServiceWorker(net);
    for (const p of Object.keys(answers)) await online.dispatchFetch(hardNavigation(p));
    expect(await (await online.cacheStorage.open(VISITED)).keys()).toHaveLength(0);
  });

  it("falls back to /downloads for '/' when the home page was never visited", async () => {
    const online = bootServiceWorker(ONLINE());
    await online.install();
    await (await online.cacheStorage.open(VISITED)).delete("/");
    const text = await (await (await goOffline(online)).dispatchFetch(hardNavigation("/")))!.text();
    expect(text).toContain("/downloads");
  });

  it("serves a remembered RSC payload to the identical <Link> fetch, and never to a navigation", async () => {
    const rsc = vi.fn(async () =>
      new Response('0:["$","main"]', { status: 200, headers: { "content-type": "text/x-component" } }),
    ) as unknown as typeof fetch;
    const online = bootServiceWorker(rsc);
    const linkFetch = { ...rscNavigation("/bam/knots?_rsc=abc12"), headers: new Headers({ RSC: "1" }) };
    await online.dispatchFetch(linkFetch);
    const keys = await (await online.cacheStorage.open(VISITED)).keys();
    expect(keys).toEqual([`${ORIGIN}/bam/knots?_rsc=abc12`]);

    const dead = await goOffline(online);
    expect(await (await dead.dispatchFetch(linkFetch))!.text()).toContain('"main"');
    // The same path as a document is NOT answered with the payload: it was never an HTML page.
    const nav = await dead.dispatchFetch(hardNavigation("/bam/knots"));
    expect(nav!.headers.get("content-type")).toContain("text/html");
    expect(await nav!.text()).not.toContain('"main"');
    // Nor is a navigation that happens to carry the payload's own URL.
    const navWithKey = await dead.dispatchFetch(hardNavigation("/bam/knots?_rsc=abc12"));
    expect(await navWithKey!.text()).not.toContain('"main"');
  });

  /** A server that answers the router's RSC fetch with a payload and a document fetch with HTML. */
  const RSC_AND_HTML = (date = () => new Date().toUTCString()) =>
    vi.fn(async (input: RequestInfo | URL) => {
      const isRsc = typeof input !== "string" && (input as { headers?: Headers }).headers?.get?.("RSC") === "1";
      if (isRsc) return new Response('0:["$","main"]', { status: 200, headers: { "content-type": "text/x-component" } });
      const url = new URL(typeof input === "string" ? input : (input as { url: string }).url, ORIGIN);
      if (url.pathname.startsWith("/_next/static/")) {
        return new Response("/* js */", { status: 200, headers: { "content-type": "application/javascript" } });
      }
      return new Response(`<h1>PAGE ${url.pathname}${url.search}</h1><script src="/_next/static/chunks/app/(tenant)/page-tap1.js"></script>`, {
        status: 200,
        headers: { "content-type": "text/html", date: date() },
      });
    });

  it("remembers the page as a document after a tap, so it opens offline as a full load", async () => {
    const net = RSC_AND_HTML();
    const online = bootServiceWorker(net as unknown as typeof fetch);
    await online.dispatchFetch(rscNavigation("/bam/knots?_rsc=abc12"));
    const keys = await (await online.cacheStorage.open(VISITED)).keys();
    expect(keys).toContain(`${ORIGIN}/bam/knots`);
    // The document fetch drops the router's `_rsc` key: it is the page's real address.
    expect(net.mock.calls.map(([i]) => (typeof i === "string" ? i : null))).toContain(`${ORIGIN}/bam/knots`);

    const dead = await goOffline(online);
    const nav = await dead.dispatchFetch(hardNavigation("/bam/knots"));
    expect(await nav!.text()).toContain("PAGE /bam/knots</h1>");
    // Its JS came along, so the page renders rather than failing on a chunk.
    const chunk = await dead.dispatchFetch({
      method: "GET",
      url: `${ORIGIN}/_next/static/chunks/app/(tenant)/page-tap1.js`,
      mode: "no-cors",
      destination: "script",
      headers: new Headers(),
    });
    expect(chunk!.status).toBe(200);
  });

  it("keeps a tapped page's own query string, which makes it a different page", async () => {
    const online = bootServiceWorker(RSC_AND_HTML() as unknown as typeof fetch);
    await online.dispatchFetch(rscNavigation("/courses?category=art&_rsc=q1"));
    expect(await (await online.cacheStorage.open(VISITED)).keys()).toContain(`${ORIGIN}/courses?category=art`);
  });

  it("does not fetch the document again for a tap back to a page remembered minutes ago", async () => {
    const net = RSC_AND_HTML();
    const online = bootServiceWorker(net as unknown as typeof fetch);
    await online.dispatchFetch(rscNavigation("/bam/knots?_rsc=a"));
    await online.dispatchFetch(rscNavigation("/bam/knots?_rsc=b"));
    const documentFetches = net.mock.calls.filter(([i]) => i === `${ORIGIN}/bam/knots`);
    expect(documentFetches).toHaveLength(1);
  });

  it("refreshes a tapped page whose remembered copy is old", async () => {
    const net = RSC_AND_HTML(() => new Date(Date.now() - 60 * 60 * 1000).toUTCString());
    const online = bootServiceWorker(net as unknown as typeof fetch);
    await online.dispatchFetch(rscNavigation("/bam/knots?_rsc=a"));
    await online.dispatchFetch(rscNavigation("/bam/knots?_rsc=b"));
    expect(net.mock.calls.filter(([i]) => i === `${ORIGIN}/bam/knots`)).toHaveLength(2);
  });

  it("never fetches or remembers a private page's document after a tap, nor after a prefetch", async () => {
    const net = RSC_AND_HTML();
    const online = bootServiceWorker(net as unknown as typeof fetch);
    await online.dispatchFetch(rscNavigation("/family?_rsc=x"));
    await online.dispatchFetch({
      ...rscNavigation("/bam/knots?_rsc=pf1"),
      headers: new Headers({ RSC: "1", "Next-Router-Prefetch": "1" }),
    });
    expect(net.mock.calls.filter(([i]) => typeof i === "string")).toHaveLength(0);
    expect(await (await online.cacheStorage.open(VISITED)).keys()).toEqual([]);
  });

  it("does not remember prefetches, which are partial segments", async () => {
    const rsc = vi.fn(async () =>
      new Response("0:[]", { status: 200, headers: { "content-type": "text/x-component" } }),
    ) as unknown as typeof fetch;
    const online = bootServiceWorker(rsc);
    await online.dispatchFetch({
      ...rscNavigation("/bam/knots?_rsc=pf1"),
      headers: new Headers({ RSC: "1", "Next-Router-Prefetch": "1" }),
    });
    expect(await (await online.cacheStorage.open(VISITED)).keys()).toHaveLength(0);
  });

  it("keeps the visited cache across a worker update", async () => {
    const online = await visit(["/bam/knots"]);
    await online.cacheStorage.open("witus-static-v5"); // a previous worker's cache
    const listeners = online.cacheStorage;
    const sw = bootServiceWorker(PER_PATH());
    for (const [name, cache] of listeners.caches) {
      const target = await sw.cacheStorage.open(name);
      for (const [k, v] of cache.store) target.store.set(k, v);
    }
    await sw.activate();
    expect(await sw.cacheStorage.keys()).toContain(VISITED);
    expect(await sw.cacheStorage.keys()).not.toContain("witus-static-v5");
  });
});

describe("private and one-time pages are never remembered", () => {
  const VISITED = "witus-visited-v1";

  async function visitedKeysAfter(paths: string[], respond: () => Response = () => html("<h1>PAGE</h1>")) {
    const online = bootServiceWorker(vi.fn(async () => respond()) as unknown as typeof fetch);
    for (const p of paths) await online.dispatchFetch(hardNavigation(p));
    return { online, keys: await (await online.cacheStorage.open(VISITED)).keys() };
  }

  it("skips sign-in, invite, signed-in, admin, checkout and billing routes", async () => {
    const privatePaths = [
      "/login",
      "/login?next=/family",
      "/verify/abc123",
      "/kids",
      "/join/invite-token",
      "/dashboard",
      "/dashboard/settings",
      "/admin",
      "/admin/users",
      "/admin/future",
      "/admin/school-billing",
      "/teach/course-1",
      "/audit/citations",
      "/cohorts/c1",
      "/family",
      "/field-log/new",
      "/my-courses",
      "/checkout",
      "/billing/portal",
    ];
    const { keys } = await visitedKeysAfter(privatePaths);
    expect(keys).toEqual([]);
  });

  it("skips URLs that carry a token or a payment session", async () => {
    const { keys } = await visitedKeysAfter(["/course/abc?session_id=cs_test_1", "/courses?token=t", "/?code=x"]);
    expect(keys).toEqual([]);
  });

  it("still remembers ordinary public pages beside them", async () => {
    const { keys } = await visitedKeysAfter(["/courses", "/help", "/bam/knots", "/course/abc?canceled=true"]);
    expect(keys).toHaveLength(4);
  });

  it("skips a response that sets a cookie", async () => {
    const { keys } = await visitedKeysAfter(["/courses"], () => {
      const res = html("<h1>PAGE</h1>");
      res.headers.set("set-cookie", "session=1; HttpOnly");
      return res;
    });
    expect(keys).toEqual([]);
  });

  it("skips a response a route marked private or no-store on purpose", async () => {
    for (const cc of ["no-store", "private, max-age=60", "private, no-store"]) {
      const { keys } = await visitedKeysAfter(["/courses"], () => {
        const res = html("<h1>PAGE</h1>");
        res.headers.set("cache-control", cc);
        return res;
      });
      expect(keys, cc).toEqual([]);
    }
  });

  it("does remember a page carrying the Cache-Control Next.js puts on every dynamic page", async () => {
    // Measured on this app's own build: `next start`, then curl -D - on /offline and /downloads.
    const { keys } = await visitedKeysAfter(["/courses"], () => {
      const res = html("<h1>PAGE</h1>");
      res.headers.set("cache-control", "private, no-cache, no-store, max-age=0, must-revalidate");
      return res;
    });
    expect(keys).toEqual([`${ORIGIN}/courses`]);
  });

  it("never remembers a private path's RSC payload either", async () => {
    const rsc = () => new Response("0:[]", { status: 200, headers: { "content-type": "text/x-component" } });
    const online = bootServiceWorker(vi.fn(async () => rsc()) as unknown as typeof fetch);
    await online.dispatchFetch(rscNavigation("/teach/course-1?_rsc=x"));
    await online.dispatchFetch(rscNavigation("/family?_rsc=x"));
    expect(await (await online.cacheStorage.open(VISITED)).keys()).toEqual([]);
  });

  it("does not serve a private path from a visited copy, however one got there", async () => {
    const online = bootServiceWorker(ONLINE());
    await online.install();
    await (await online.cacheStorage.open(VISITED)).put("/family", html("<h1>PRIVATE family</h1>"));
    const text = await (await (await goOffline(online)).dispatchFetch(hardNavigation("/family")))!.text();
    expect(text).not.toContain("PRIVATE");
  });
});

describe("the front door is precached, so a first offline launch opens the app (worker v6)", () => {
  const VISITED = "witus-visited-v1";
  const CHUNK = "/_next/static/chunks/app/page-home123.js";

  /** The real shape: each page's HTML points at the JS chunk it needs to render. */
  const SITE = () =>
    vi.fn(async (input: RequestInfo | URL) => {
      const url = new URL(typeof input === "string" ? input : (input as { url: string }).url);
      if (url.pathname.startsWith("/_next/static/")) {
        return new Response("/* js */", { status: 200, headers: { "content-type": "application/javascript" } });
      }
      return html(`<h1>PAGE ${url.pathname}</h1><script src="${CHUNK}"></script>`);
    }) as unknown as typeof fetch;

  it("stores /, /downloads, /offline and /help in the visited cache at install", async () => {
    const sw = bootServiceWorker(SITE());
    await sw.install();
    const keys = await (await sw.cacheStorage.open(VISITED)).keys();
    for (const p of ["/", "/downloads", "/offline", "/help"]) expect(keys).toContain(`${ORIGIN}${p}`);
  });

  it("opens the home page and the help index with no network, on a device that never browsed", async () => {
    const online = bootServiceWorker(SITE());
    await online.install();
    const dead = await goOffline(online);
    expect(await (await dead.dispatchFetch(hardNavigation("/")))!.text()).toContain("PAGE /</h1>");
    expect(await (await dead.dispatchFetch(hardNavigation("/help")))!.text()).toContain("PAGE /help");
  });

  it("caches the JS the precached pages need, so they render instead of failing on a chunk", async () => {
    const online = bootServiceWorker(SITE());
    await online.install();
    const dead = await goOffline(online);
    const chunk = await dead.dispatchFetch({
      method: "GET",
      url: `${ORIGIN}${CHUNK}`,
      mode: "no-cors",
      destination: "script",
      headers: new Headers(),
    });
    expect(chunk!.status).toBe(200);
    expect(await chunk!.text()).toContain("js");
  });

  // REGRESSION: the asset pattern stopped at every "(", so the home page's own chunk,
  // chunks/app/(tenant)/page-….js, became a request for chunks/app/. In Chromium that request
  // never settled and held install open, so the worker never took control of a page.
  it("precaches a (route group) chunk under its full URL, not cut off at the parenthesis", async () => {
    const GROUP_CHUNK = "/_next/static/chunks/app/(tenant)/page-home456.js";
    const net = vi.fn(async (input: RequestInfo | URL) => {
      const url = new URL(typeof input === "string" ? input : (input as { url: string }).url);
      if (url.pathname.startsWith("/_next/static/")) {
        return new Response("/* js */", { status: 200, headers: { "content-type": "application/javascript" } });
      }
      return html(`<h1>PAGE ${url.pathname}</h1><script src="${GROUP_CHUNK}"></script>`);
    });
    const sw = bootServiceWorker(net as unknown as typeof fetch);
    await sw.install();
    const requested = net.mock.calls.map(([input]) =>
      decodeURI(new URL(typeof input === "string" ? input : (input as { url: string }).url, ORIGIN).pathname),
    );
    expect(requested).toContain(GROUP_CHUNK);
    expect(requested).not.toContain("/_next/static/chunks/app/");
  });

  it("applies the visit exclusions: a front-door answer that sets a cookie or redirects is skipped", async () => {
    const net = vi.fn(async (input: RequestInfo | URL) => {
      const url = new URL(typeof input === "string" ? input : (input as { url: string }).url);
      const res = html(`<h1>PAGE ${url.pathname}</h1>`);
      if (url.pathname === "/") res.headers.set("set-cookie", "s=1");
      if (url.pathname === "/help") Object.defineProperty(res, "redirected", { value: true });
      return res;
    }) as unknown as typeof fetch;
    const sw = bootServiceWorker(net);
    await sw.install();
    const keys = await (await sw.cacheStorage.open(VISITED)).keys();
    expect(keys).not.toContain(`${ORIGIN}/`);
    expect(keys).not.toContain(`${ORIGIN}/help`);
    expect(keys).toContain(`${ORIGIN}/downloads`);
  });

  it("installs cleanly when the network is down, and falls back as v5 did", async () => {
    const sw = bootServiceWorker(OFFLINE());
    await expect(sw.install()).resolves.toBeUndefined();
    expect(await (await sw.dispatchFetch(hardNavigation("/")))!.text()).toContain("You're offline");
  });

  it("fetches the front door again when a page asks (after the visited cache was emptied)", async () => {
    const sw = bootServiceWorker(SITE());
    await sw.cacheStorage.delete(VISITED);
    await sw.postMessage({ type: "witus:warm-front-door" });
    const keys = await (await sw.cacheStorage.open(VISITED)).keys();
    expect(keys).toContain(`${ORIGIN}/`);
    // Any other message is ignored.
    await sw.cacheStorage.delete(VISITED);
    await sw.postMessage({ type: "something-else" });
    expect(sw.cacheStorage.caches.has(VISITED)).toBe(false);
  });
});

describe("sign-out cancels the worker's background saves before the purge (privacy)", () => {
  const VISITED = "witus-visited-v1";
  const SETTLE = { type: "witus:settle-saves" };
  const flush = () => new Promise((r) => setTimeout(r, 0));

  /** The router's tap answers at once; the follow-up document fetch waits until `release()`. */
  function slowDocumentServer({ honorAbort }: { honorAbort: boolean }) {
    let release!: () => void;
    const gate = new Promise<void>((r) => (release = r));
    const net = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const isRsc = typeof input !== "string" && (input as { headers?: Headers }).headers?.get?.("RSC") === "1";
      if (isRsc) return new Response('0:["$","main"]', { status: 200, headers: { "content-type": "text/x-component" } });
      await new Promise<void>((resolve, reject) => {
        void gate.then(resolve);
        if (!honorAbort) return;
          // As a real fetch does: an already-aborted signal rejects at once.
          if (init?.signal?.aborted) reject(new DOMException("Aborted", "AbortError"));
          init?.signal?.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")));
      });
      return new Response("<h1>PRIVATE: Ada's view of this page</h1>", {
        status: 200,
        headers: { "content-type": "text/html", date: new Date().toUTCString() },
      });
    });
    return { net: net as unknown as typeof fetch, release };
  }

  it("a page still downloading when sign-out starts is not written after it", async () => {
    const { net, release } = slowDocumentServer({ honorAbort: false });
    const sw = bootServiceWorker(net);
    const tap = sw.dispatchFetch(rscNavigation("/bam/knots?_rsc=a")); // background save now in flight
    await flush();

    const port = { postMessage: vi.fn() };
    const settled = sw.postMessage(SETTLE, [port]);
    release(); // the server answers only AFTER sign-out began
    await Promise.all([tap, settled]);

    const keys = (await (await sw.cacheStorage.open(VISITED)).keys()).map(String);
    expect(keys).not.toContain(`${ORIGIN}/bam/knots`);
    // The worker said it was done, which is what the page waits for before it purges.
    expect(port.postMessage).toHaveBeenCalledWith(SETTLE);
  });

  it("aborts the download rather than waiting it out, so sign-out stays fast", async () => {
    const { net } = slowDocumentServer({ honorAbort: true });
    const sw = bootServiceWorker(net);
    const tap = sw.dispatchFetch(rscNavigation("/bam/knots?_rsc=a"));
    await flush();
    const port = { postMessage: vi.fn() };
    await sw.postMessage(SETTLE, [port]); // resolves without the server ever answering
    await tap;
    expect(port.postMessage).toHaveBeenCalledWith(SETTLE);
    expect((await (await sw.cacheStorage.open(VISITED)).keys()).map(String)).not.toContain(`${ORIGIN}/bam/knots`);
  });

  it("keeps remembering normally for whoever browses after sign-out", async () => {
    const { net, release } = slowDocumentServer({ honorAbort: false });
    release();
    const sw = bootServiceWorker(net);
    await sw.postMessage(SETTLE, [{ postMessage: () => {} }]);
    await sw.dispatchFetch(rscNavigation("/bam/knots?_rsc=b"));
    expect((await (await sw.cacheStorage.open(VISITED)).keys()).map(String)).toContain(`${ORIGIN}/bam/knots`);
  });
});

describe("only real pages are kept by the worker", () => {
  const VISITED = "witus-visited-v1";
  const visitedKeys = async (sw: ReturnType<typeof bootServiceWorker>) =>
    (await (await sw.cacheStorage.open(VISITED)).keys()).map((r) => (typeof r === "string" ? r : (r as Request).url));
  const typed = (body: string, type: string, status = 200) => new Response(body, { status, headers: { "content-type": type } });
  const redirectedRes = (res: Response) => Object.defineProperty(res, "redirected", { value: true });

  it("never keeps an error page, a redirect or a non-HTML body from a navigation", async () => {
    for (const make of [
      () => typed("<h1>Server error</h1>", "text/html", 500),
      () => typed("<h1>Not found</h1>", "text/html", 404),
      () => redirectedRes(typed("<h1>Sign in</h1>", "text/html")),
      () => typed('{"ok":true}', "application/json"),
      () => typed("plain", "text/plain"),
    ]) {
      const sw = bootServiceWorker(vi.fn(async () => make()) as unknown as typeof fetch);
      await sw.dispatchFetch(hardNavigation("/bam/knots"));
      expect(await visitedKeys(sw)).toEqual([]);
    }
  });

  it("never keeps an error page or a redirect fetched after a tap", async () => {
    for (const doc of [
      () => typed("<h1>Server error</h1>", "text/html", 500),
      () => redirectedRes(typed("<h1>Sign in</h1>", "text/html")),
      () => typed('{"ok":true}', "application/json"),
    ]) {
      const net = vi.fn(async (input: RequestInfo | URL) =>
        typeof input === "string" ? doc() : typed('0:["$","main"]', "text/x-component"),
      );
      const sw = bootServiceWorker(net as unknown as typeof fetch);
      await sw.dispatchFetch(rscNavigation("/bam/knots?_rsc=a"));
      expect(await visitedKeys(sw)).not.toContain(`${ORIGIN}/bam/knots`);
    }
  });

  it("keeps a router payload only when it is one, and only under its own _rsc key", async () => {
    // A tap answered with HTML (an error page) is not a payload.
    const asHtml = bootServiceWorker(vi.fn(async () => typed("<h1>x</h1>", "text/html")) as unknown as typeof fetch);
    await asHtml.dispatchFetch(rscNavigation("/bam/knots?_rsc=a"));
    expect(await visitedKeys(asHtml)).not.toContain(`${ORIGIN}/bam/knots?_rsc=a`);

    // A payload whose request has no _rsc key would sit at the page's own address: not kept.
    const noKey = bootServiceWorker(vi.fn(async () => typed("0:[]", "text/x-component")) as unknown as typeof fetch);
    await noKey.dispatchFetch(rscNavigation("/bam/knots"));
    expect(await visitedKeys(noKey)).toEqual([]);
  });

  it("does not precache an /offline that redirected, and does not cache a missing asset", async () => {
    const net = vi.fn(async (input: RequestInfo | URL) => {
      const url = new URL(typeof input === "string" ? input : (input as { url: string }).url, ORIGIN);
      if (url.pathname === "/offline") return redirectedRes(typed("<h1>Sign in</h1>", "text/html"));
      if (url.pathname.startsWith("/_next/")) return typed("Not found", "text/html", 404);
      return typed("<h1>page</h1>", "text/html");
    });
    const sw = bootServiceWorker(net as unknown as typeof fetch);
    await sw.install();
    const staticKeys = async () =>
      (await (await sw.cacheStorage.open("witus-static-v6")).keys()).map((r) => (typeof r === "string" ? r : (r as Request).url));
    expect((await staticKeys()).some((k) => k.endsWith("/offline"))).toBe(false);
    expect((await staticKeys()).some((k) => k.endsWith("/downloads"))).toBe(true);

    await sw.dispatchFetch({ method: "GET", url: `${ORIGIN}/_next/static/chunks/gone.js`, mode: "no-cors", destination: "script", headers: new Headers() });
    await new Promise((r) => setTimeout(r, 0));
    expect((await staticKeys()).some((k) => k.includes("gone.js"))).toBe(false);
  });
});

describe("the visited cache stays bounded, least recently used first (worker v6)", () => {
  const VISITED = "witus-visited-v1";
  const PAGES = "witus-pages-v1";
  const keysOf = async (sw: ReturnType<typeof bootServiceWorker>, name = VISITED) =>
    (await (await sw.cacheStorage.open(name)).keys()).map((r) => (typeof r === "string" ? r : (r as Request).url));
  const page = (body = "") =>
    new Response(`<h1>LIVE</h1>${body}`, { status: 200, headers: { "content-type": "text/html", date: new Date().toUTCString() } });
  const payload = (size = 10) =>
    new Response(`0:${"x".repeat(size)}`, { status: 200, headers: { "content-type": "text/x-component" } });

  /** Pages answer as HTML; router fetches answer as payloads, and the follow-up document fetch
   *  after a tap gets a non-page, so a tap stores ONLY its payload (to test the payload budget). */
  const net = (pageBody = () => "") =>
    vi.fn(async (input: RequestInfo | URL) => {
      if (typeof input === "string") return new Response("{}", { status: 200, headers: { "content-type": "application/json" } });
      const headers = (input as { headers?: Headers }).headers;
      return headers?.get?.("RSC") === "1" ? payload() : page(pageBody());
    }) as unknown as typeof fetch;

  it("gives router payloads their own budget, so taps never push pages out", async () => {
    const sw = bootServiceWorker(net());
    for (let i = 0; i < 150; i++) await sw.dispatchFetch(hardNavigation(`/page-${i}`));
    for (let i = 0; i < 60; i++) await sw.dispatchFetch(rscNavigation(`/tap-${i}?_rsc=r${i}`));
    const keys = await keysOf(sw);
    expect(keys.filter((k) => !k.includes("_rsc"))).toHaveLength(150);
    expect(keys).toContain(`${ORIGIN}/page-0`);
    const payloads = keys.filter((k) => k.includes("_rsc"));
    expect(payloads).toHaveLength(50);
    expect(payloads).not.toContain(`${ORIGIN}/tap-0?_rsc=r0`); // the oldest payloads went
    expect(payloads).toContain(`${ORIGIN}/tap-59?_rsc=r59`);
  });

  it("counts opening a copy offline as use, so it is evicted last", async () => {
    const online = bootServiceWorker(net());
    for (let i = 0; i < 150; i++) await online.dispatchFetch(hardNavigation(`/page-${i}`));

    const dead = await goOffline(online);
    expect(await (await dead.dispatchFetch(hardNavigation("/page-0")))!.text()).toContain("LIVE");
    await new Promise((r) => setTimeout(r, 0)); // the touch lands after the answer

    const back = bootServiceWorker(net());
    for (const [name, cache] of dead.cacheStorage.caches) {
      const target = await back.cacheStorage.open(name);
      for (const [k, v] of cache.store) target.store.set(k, v);
    }
    await back.dispatchFetch(hardNavigation("/new-page"));
    const keys = await keysOf(back);
    expect(keys).toContain(`${ORIGIN}/page-0`); // used offline: kept
    expect(keys).not.toContain(`${ORIGIN}/page-1`); // now the least recently used
  });

  it("caps the whole cache at 40 MB, dropping the oldest pages first", async () => {
    const big = "x".repeat(1.9 * 1024 * 1024);
    const sw = bootServiceWorker(net(() => big));
    for (let i = 0; i < 25; i++) await sw.dispatchFetch(hardNavigation(`/big-${i}`));
    const keys = await keysOf(sw);
    expect(keys).toHaveLength(21); // 21 × 1.9 MB fits in 40 MB; 22 would not
    expect(keys).not.toContain(`${ORIGIN}/big-0`);
    expect(keys).toContain(`${ORIGIN}/big-24`);
  });

  it("skips a router payload over 1 MB", async () => {
    const sw = bootServiceWorker(vi.fn(async () => payload(1.1 * 1024 * 1024)) as unknown as typeof fetch);
    await sw.dispatchFetch(rscNavigation("/courses?_rsc=big"));
    expect(await keysOf(sw)).toEqual([]);
  });

  it("never evicts a page the learner saved, and still serves it offline", async () => {
    const online = bootServiceWorker(net());
    const saved = await online.cacheStorage.open(PAGES);
    await saved.put("/bam/knots/lesson/one", html("<h1>SAVED lesson one</h1>"));
    await online.dispatchFetch(hardNavigation("/bam/knots/lesson/one")); // visited too, then pushed out
    for (let i = 0; i < 200; i++) await online.dispatchFetch(hardNavigation(`/page-${i}`));

    expect(await keysOf(online)).not.toContain(`${ORIGIN}/bam/knots/lesson/one`);
    expect(await keysOf(online, PAGES)).toContain(`${ORIGIN}/bam/knots/lesson/one`);
    const dead = await goOffline(online);
    expect(await (await dead.dispatchFetch(hardNavigation("/bam/knots/lesson/one")))!.text()).toContain("SAVED lesson one");
  });
});
