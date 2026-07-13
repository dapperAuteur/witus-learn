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

class FakeCache {
  readonly store = new Map<string, Response>();
  private key(request: { url: string } | string): string {
    return new URL(typeof request === "string" ? request : request.url, ORIGIN).toString();
  }
  async put(request: { url: string } | string, response: Response) {
    this.store.set(this.key(request), response);
  }
  async add(request: string) {
    const res = await (globalThis.fetch as typeof fetch)(new URL(request, ORIGIN).toString());
    if (!res.ok) throw new TypeError("cache.add failed");
    this.store.set(this.key(request), res);
  }
  async match(request: { url: string } | string, options?: { ignoreSearch?: boolean }) {
    const wanted = this.key(request);
    if (!options?.ignoreSearch) return this.store.get(wanted);
    const base = wanted.split("?")[0];
    for (const [k, v] of this.store) if (k.split("?")[0] === base) return v;
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
  async open(name: string) {
    let c = this.caches.get(name);
    if (!c) {
      c = new FakeCache();
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
  const cacheStorage = new FakeCacheStorage();
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
    listeners.get("fetch")?.({
      request,
      respondWith: (p: Promise<Response>) => {
        responded = p;
      },
    });
    if (!responded) return null; // SW declined to handle it → straight to the network
    return await responded;
  }

  return { install, dispatchFetch, cacheStorage };
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
    const cache = await sw.cacheStorage.open("witus-static-v4");
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
