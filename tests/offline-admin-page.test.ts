import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Can BAM actually READ /admin/future on a plane — and does it leave the device when he signs out?
 *
 * This runs the REAL src/lib/offline.ts against the REAL public/sw.js over one shared fake Cache
 * API, so the whole chain is exercised end to end rather than asserted about:
 *
 *   1. save it (online)   → the page HTML, its RSC payload, and the /_next/static chunks it needs
 *                            to RENDER all land in the caches. A page cached WITHOUT its chunks
 *                            dies with a ChunkLoadError the first time it's opened offline — that
 *                            regression has bitten this codebase twice, so it's pinned here.
 *   2. kill the network   → a hard navigation to /admin/future is answered from PAGES_CACHE, and
 *                            the chunk request that follows is answered from ASSETS_CACHE.
 *   3. sign out           → the cached admin page is GONE, while the learner's lessons are not.
 *
 * The point of (3): this is the only authenticated page the app will cache. The cached HTML holds
 * BAM's own notes, unencrypted, with no session check in front of it. Being able to save it is only
 * defensible because signing out revokes it — so the revoke is tested as hard as the save.
 */

const SW_SOURCE = readFileSync(fileURLToPath(new URL("../public/sw.js", import.meta.url)), "utf8");

const ORIGIN = "https://bettervice.club";
const ADMIN_PATH = "/admin/future";
const LESSON_PATH = "/bam/signals/lesson/one";
const CHUNK = "/_next/static/chunks/app/admin/future/page-abc123.js";

// ── One Cache API, shared by offline.ts (which writes) and sw.js (which reads) ────────────────
class FakeCache {
  readonly store = new Map<string, Response>();
  private key(request: RequestInfo | { url: string }): string {
    const url = typeof request === "string" ? request : (request as { url: string }).url;
    return new URL(url, ORIGIN).toString();
  }
  /**
   * The real Cache API READS THE BODY TO COMPLETION and stores the bytes; `match` then hands out a
   * fresh, unread body every time. A fake that stores the live Response object instead leaves an
   * undrained stream behind — which silently TRUNCATES a large page, and would have this test
   * "prove" that half of /admin/future is missing. (It did exactly that against the real server
   * until the harness was fixed. The bug was here, not in the app.)
   */
  private async keep(key: string, response: Response) {
    const body = await response.arrayBuffer();
    this.store.set(key, new Response(body, { status: response.status, headers: response.headers }));
  }
  async put(request: RequestInfo, response: Response) {
    await this.keep(this.key(request), response);
  }
  async add(request: RequestInfo) {
    const res = await (globalThis.fetch as typeof fetch)(
      new URL(typeof request === "string" ? request : (request as Request).url, ORIGIN).toString(),
    );
    if (!res.ok) throw new TypeError("cache.add failed");
    await this.keep(this.key(request), res);
  }
  async match(request: RequestInfo | { url: string }, options?: { ignoreSearch?: boolean }) {
    const wanted = this.key(request);
    const hit = this.store.get(wanted);
    if (hit) return hit.clone();
    if (!options?.ignoreSearch) return undefined;
    const base = wanted.split("?")[0];
    for (const [k, v] of this.store) if (k.split("?")[0] === base) return v.clone();
    return undefined;
  }
  async delete(request: RequestInfo) {
    return this.store.delete(this.key(request));
  }
  async keys() {
    return [...this.store.keys()].map((url) => new Request(url));
  }
}

class FakeCacheStorage {
  readonly caches = new Map<string, FakeCache>();
  async open(name: string) {
    let cache = this.caches.get(name);
    if (!cache) {
      cache = new FakeCache();
      this.caches.set(name, cache);
    }
    return cache as unknown as Cache;
  }
  async keys() {
    return [...this.caches.keys()];
  }
  async delete(name: string) {
    return this.caches.delete(name);
  }
  async match(request: RequestInfo | { url: string }) {
    for (const cache of this.caches.values()) {
      const hit = await cache.match(request);
      if (hit) return hit;
    }
    return undefined;
  }
}

class MemoryStorage implements Storage {
  private map = new Map<string, string>();
  get length() {
    return this.map.size;
  }
  clear() {
    this.map.clear();
  }
  getItem(k: string) {
    return this.map.get(k) ?? null;
  }
  key(i: number) {
    return [...this.map.keys()][i] ?? null;
  }
  removeItem(k: string) {
    this.map.delete(k);
  }
  setItem(k: string, v: string) {
    this.map.set(k, v);
  }
}

/** The page as the server really renders it: a proposal, plus the script tags that make it render.
 *  The chunk URL also appears escaped inside the flight payload — savePage's regex must find both. */
const ADMIN_HTML =
  `<!doctype html><title>Future classes &amp; features</title>` +
  `<link rel="stylesheet" href="/_next/static/css/app-def.css">` +
  `<script src="/_next/static/chunks/shared-xyz.js"></script>` +
  `<script>self.__next_f.push([1,"\\"${CHUNK}\\""])</script>` +
  `<main><h1>Future classes &amp; features</h1><h4>She Did The Work</h4>` +
  `<p>A note BAM already wrote</p></main>`;

const LESSON_HTML = `<!doctype html><title>Lesson one</title><script src="/_next/static/chunks/shared-xyz.js"></script>`;

let cacheStorage: FakeCacheStorage;

const ONLINE = async (input: RequestInfo | URL) => {
  const url = typeof input === "string" ? input : ((input as Request).url ?? String(input));
  const { pathname } = new URL(url, ORIGIN);
  if (pathname === ADMIN_PATH) {
    return new Response(ADMIN_HTML, { status: 200, headers: { "content-type": "text/html" } });
  }
  if (pathname === LESSON_PATH) {
    return new Response(LESSON_HTML, { status: 200, headers: { "content-type": "text/html" } });
  }
  if (pathname.startsWith("/_next/static/")) {
    return new Response(`/* ${pathname} */`, {
      status: 200,
      headers: { "content-type": "application/javascript" },
    });
  }
  return new Response("ok", { status: 200, headers: { "content-type": "text/html" } });
};

/** Airplane mode: every request rejects, exactly as a real browser's does. */
const OFFLINE = async () => {
  throw new TypeError("Failed to fetch");
};

beforeEach(() => {
  cacheStorage = new FakeCacheStorage();
  vi.stubGlobal("caches", cacheStorage);
  vi.stubGlobal("localStorage", new MemoryStorage());
  vi.stubGlobal("navigator", { storage: undefined, onLine: true });
  vi.stubGlobal("fetch", ONLINE);
  vi.resetModules();
});

async function offlineLib() {
  return import("@/lib/offline");
}

/** Boot the REAL public/sw.js over the caches offline.ts just wrote into, with a dead network. */
function bootServiceWorker(fetchImpl: typeof fetch) {
  const listeners = new Map<string, (event: unknown) => void>();
  const self = {
    addEventListener: (type: string, fn: (event: unknown) => void) => listeners.set(type, fn),
    skipWaiting: () => {},
    clients: { claim: async () => {} },
    location: { origin: ORIGIN },
  };
  class ScopedRequest extends Request {
    constructor(input: RequestInfo | URL, init?: RequestInit) {
      super(typeof input === "string" ? new URL(input, ORIGIN) : input, init);
    }
  }
  // sw.js runs UNMODIFIED — `self`, `caches`, `fetch`, `Request` are just its worker globals.
  new Function("self", "caches", "fetch", "Request", SW_SOURCE)(
    self,
    cacheStorage,
    fetchImpl,
    ScopedRequest,
  );

  return async function dispatchFetch(request: {
    method: string;
    url: string;
    mode?: string;
    destination?: string;
    headers: Headers;
  }): Promise<Response | null | undefined> {
    let responded: Promise<Response> | null = null;
    listeners.get("fetch")?.({
      request,
      respondWith: (p: Promise<Response>) => {
        responded = p;
      },
    });
    if (!responded) return null;
    return await responded;
  };
}

/** What the browser issues for a real <a href> click / a typed URL / a bookmark. */
const hardNavigation = (path: string) => ({
  method: "GET",
  url: `${ORIGIN}${path}`,
  mode: "navigate",
  destination: "document" as const,
  headers: new Headers(),
});

/** What the browser issues for a <script src> the cached HTML references. */
const scriptRequest = (path: string) => ({
  method: "GET",
  url: `${ORIGIN}${path}`,
  mode: "no-cors",
  destination: "script" as const,
  headers: new Headers(),
});

const adminMeta = (savedByUserId: string | null = "user-bam") => ({
  pageTitle: "Future classes & features",
  pageSummary: "32 proposals to review",
  sensitive: true,
  savedByUserId,
});

describe("/admin/future, saved for offline", () => {
  it("caches the page, its RSC payload, and the JS/CSS chunks it needs to RENDER", async () => {
    const offline = await offlineLib();
    await offline.savePageOffline({ pagePath: ADMIN_PATH, meta: adminMeta() });

    const pages = cacheStorage.caches.get(offline.PAGES_CACHE)!;
    expect([...pages.store.keys()]).toContain(`${ORIGIN}${ADMIN_PATH}`);
    expect([...pages.store.keys()].some((k) => k.includes("__rsc"))).toBe(true);

    // The ChunkLoadError guard. A page cached without these renders as "Something went wrong" the
    // first time it's opened with no network — the chunk is only in the SW's on-demand cache if
    // you'd already VISITED the page online, and the whole point here is opening it offline.
    const assets = cacheStorage.caches.get(offline.ASSETS_CACHE)!;
    const cachedAssets = [...assets.store.keys()];
    expect(cachedAssets).toContain(`${ORIGIN}${CHUNK}`); // from the flight payload (escaped)
    expect(cachedAssets).toContain(`${ORIGIN}/_next/static/chunks/shared-xyz.js`); // <script src>
    expect(cachedAssets).toContain(`${ORIGIN}/_next/static/css/app-def.css`); // <link href>
  });

  it("is reported saved only after being read back OUT of the cache", async () => {
    const offline = await offlineLib();
    expect(await offline.isSaved(ADMIN_PATH)).toBe(false);
    await offline.savePageOffline({ pagePath: ADMIN_PATH, meta: adminMeta() });
    expect(await offline.isSaved(ADMIN_PATH)).toBe(true);
  });

  it("refuses to claim a save when the page itself fails to fetch", async () => {
    vi.stubGlobal("fetch", async () => new Response("nope", { status: 403 }));
    const offline = await offlineLib();
    await expect(
      offline.savePageOffline({ pagePath: ADMIN_PATH, meta: adminMeta() }),
    ).rejects.toBeTruthy();
    // Nothing cached, and nothing in the manifest to advertise on /downloads.
    expect(await offline.isSaved(ADMIN_PATH)).toBe(false);
    expect((await offline.reconcileOffline()).pages).toHaveLength(0);
  });

  it("shows up on /downloads as a PAGE, not as a mystery lesson or an orphan", async () => {
    const offline = await offlineLib();
    await offline.savePageOffline({ pagePath: ADMIN_PATH, meta: adminMeta() });

    const { entries, pages, orphanPages } = await offline.reconcileOffline();
    expect(entries).toHaveLength(0); // not a lesson
    expect(orphanPages).toHaveLength(0); // and not an unnamed orphan either
    expect(pages).toHaveLength(1);
    expect(pages[0].pageTitle).toBe("Future classes & features");
    expect(pages[0].sensitive).toBe(true);
  });

  // ── The actual question: does it open on a plane? ───────────────────────────────────────────
  it("SERVES the saved page over a DEAD network — hard navigation, from the real sw.js", async () => {
    const offline = await offlineLib();
    await offline.savePageOffline({ pagePath: ADMIN_PATH, meta: adminMeta() });

    // The network dies. Same caches, new worker, no fetch will ever succeed again.
    const dispatch = bootServiceWorker(OFFLINE as unknown as typeof fetch);

    const res = await dispatch(hardNavigation(ADMIN_PATH));
    expect(res).toBeTruthy();
    expect(res!.status).toBe(200);
    const html = await res!.text();
    expect(html).toContain("Future classes");
    expect(html).toContain("She Did The Work"); // the proposals are really there
    expect(html).toContain("A note BAM already wrote"); // …and so are the notes
  });

  it("SERVES the page's JS chunk over the dead network too — so it renders, not ChunkLoadErrors", async () => {
    const offline = await offlineLib();
    await offline.savePageOffline({ pagePath: ADMIN_PATH, meta: adminMeta() });
    const dispatch = bootServiceWorker(OFFLINE as unknown as typeof fetch);

    // This is the request that used to kill the page: React boots from the cached HTML and asks for
    // its route chunk. With no network and nothing cached, that throws a ChunkLoadError and the
    // learner gets "Something went wrong" instead of the page they saved.
    const res = await dispatch(scriptRequest(CHUNK));
    expect(res).toBeTruthy();
    expect(await res!.text()).toContain(CHUNK);
  });

  it("a page that was never saved still falls through to /offline", async () => {
    const offline = await offlineLib();
    await offline.savePageOffline({ pagePath: ADMIN_PATH, meta: adminMeta() });
    const dispatch = bootServiceWorker(OFFLINE as unknown as typeof fetch);

    const res = await dispatch(hardNavigation("/admin/roadmap"));
    // Nothing cached for it, and /offline was never precached in this test, so the SW has nothing
    // to hand back at all. What matters is the negative: a cached /admin/future must NEVER stand in
    // for a different admin screen just because both start with /admin.
    const html = res ? await res.text() : "";
    expect(html).not.toContain("She Did The Work");
    expect(html).not.toContain("A note BAM already wrote");
  });
});

describe("signing out takes the private page with it", () => {
  it("purges the saved admin page but NOT the learner's saved lessons", async () => {
    const offline = await offlineLib();
    await offline.saveLesson({
      pagePath: LESSON_PATH,
      meta: {
        courseTitle: "Signals",
        courseSlug: "signals",
        courseHref: "/bam/signals",
        sectionTitle: null,
        lessonTitle: "Lesson one",
      },
    });
    await offline.savePageOffline({ pagePath: ADMIN_PATH, meta: adminMeta() });

    // `null` = what the sign-out button passes: nobody is signed in any more.
    const removed = await offline.purgeSensitivePages(null);
    expect(removed).toEqual([ADMIN_PATH]);

    expect(await offline.isSaved(ADMIN_PATH)).toBe(false);
    // Signing out must NOT cost a learner the course they downloaded for their commute.
    expect(await offline.isSaved(LESSON_PATH)).toBe(true);

    const { entries, pages } = await offline.reconcileOffline();
    expect(pages).toHaveLength(0);
    expect(entries).toHaveLength(1);
  });

  it("keeps the page for the user who saved it, and purges it for anyone else", async () => {
    const offline = await offlineLib();
    await offline.savePageOffline({ pagePath: ADMIN_PATH, meta: adminMeta("user-bam") });

    // Still BAM → his own download survives a page load.
    expect(await offline.purgeSensitivePages("user-bam")).toEqual([]);
    expect(await offline.isSaved(ADMIN_PATH)).toBe(true);

    // Somebody else signs in on the same laptop → it goes, before they can open it.
    expect(await offline.purgeSensitivePages("user-someone-else")).toEqual([ADMIN_PATH]);
    expect(await offline.isSaved(ADMIN_PATH)).toBe(false);
  });

  it("purges a cached admin page even when the MANIFEST has lost all record of it", async () => {
    const offline = await offlineLib();
    await offline.savePageOffline({ pagePath: ADMIN_PATH, meta: adminMeta() });

    // The manifest is a hint layer — it can be cleared by the browser, or blocked by quota. If the
    // purge only trusted the manifest, this cached admin page would be stranded on the device with
    // nothing left that knows it's private. So the purge ALSO sweeps by path.
    localStorage.removeItem("witus-offline-manifest-v1");
    expect(await offline.isSaved(ADMIN_PATH)).toBe(true); // still cached…

    expect(await offline.purgeSensitivePages(null)).toEqual([ADMIN_PATH]);
    expect(await offline.isSaved(ADMIN_PATH)).toBe(false); // …and now genuinely gone
  });

  it("removeAllOffline takes everything, private pages included", async () => {
    const offline = await offlineLib();
    await offline.savePageOffline({ pagePath: ADMIN_PATH, meta: adminMeta() });
    await offline.removeAllOffline();
    expect(await offline.isSaved(ADMIN_PATH)).toBe(false);
  });
});
