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

  return { install, activate, dispatchFetch, cacheStorage };
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

  it("opens the downloads screen for the app's start URL, which is never saved", async () => {
    const online = bootServiceWorker(ONLINE());
    await online.install();
    const dead = await goOffline(online);
    const text = await (await dead.dispatchFetch(hardNavigation("/")))!.text();
    expect(text).toContain("Your downloads");
    expect(text).toContain("/downloads");
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

  it("skips a page over 1.5 MB", async () => {
    const big = vi.fn(async () => html(`<p>${"x".repeat(1.6 * 1024 * 1024)}</p>`)) as unknown as typeof fetch;
    const online = bootServiceWorker(big);
    await online.dispatchFetch(hardNavigation("/huge"));
    expect(await (await online.cacheStorage.open(VISITED)).keys()).toHaveLength(0);
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
