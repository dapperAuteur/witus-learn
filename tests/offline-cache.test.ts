import { beforeEach, describe, expect, it, vi } from "vitest";

// Exercises src/lib/offline.ts against an in-memory Cache API + fetch, so the parts that actually
// bite — shared-media refcounting, interrupt safety, and manifest↔cache drift — are run, not just
// typechecked. Node's undici supplies real Request/Response/Headers, so the code under test does
// genuine cache.put / cache.match / cache.keys work.

// ── A minimal but faithful Cache API ─────────────────────────────────────────────────────────
class FakeCache {
  readonly store = new Map<string, Response>();

  private key(request: RequestInfo): string {
    const url = typeof request === "string" ? request : request.url;
    return new URL(url, "https://tenant.example").toString();
  }

  async put(request: RequestInfo, response: Response) {
    this.store.set(this.key(request), response);
  }
  async add(request: RequestInfo) {
    const res = await fetch(request as string);
    if (!res.ok) throw new TypeError("cache.add failed");
    this.store.set(this.key(request), res);
  }
  async match(request: RequestInfo, options?: { ignoreSearch?: boolean }) {
    const wanted = this.key(request);
    if (!options?.ignoreSearch) return this.store.get(wanted);
    const base = wanted.split("?")[0];
    for (const [k, v] of this.store) if (k.split("?")[0] === base) return v;
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
  async delete(name: string) {
    return this.caches.delete(name);
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

let cacheStorage: FakeCacheStorage;
/** Paths the fake network refuses, so we can simulate a lesson that 404s mid-batch. */
let broken: Set<string>;

beforeEach(() => {
  cacheStorage = new FakeCacheStorage();
  broken = new Set();
  vi.stubGlobal("caches", cacheStorage);
  vi.stubGlobal("localStorage", new MemoryStorage());
  vi.stubGlobal("navigator", { storage: undefined });
  vi.stubGlobal("fetch", async (input: RequestInfo) => {
    const url = typeof input === "string" ? input : input.url;
    const path = new URL(url, "https://tenant.example").pathname;
    if (broken.has(path)) return new Response("nope", { status: 404 });
    // Lesson pages come back as real HTML referencing their build assets, so savePage() has
    // something to discover — that's the ChunkLoadError regression below.
    if (path.includes("/lesson/") || path === "/downloads" || path === "/offline") {
      return new Response(
        `<!doctype html><script src="/_next/static/chunks/shared-abc.js"></script>` +
          `<link rel="stylesheet" href="/_next/static/css/app-def.css">` +
          `<script>self.__next_f.push([1,"\\"/_next/static/chunks/app${path}/page-xyz.js\\""])</script>`,
        { status: 200, headers: { "content-type": "text/html" } },
      );
    }
    return new Response("ok", { status: 200 });
  });
  vi.resetModules();
});

async function load() {
  return import("@/lib/offline");
}

const meta = (lessonTitle: string, sectionTitle: string | null = "Section 1") => ({
  courseTitle: "Signals",
  courseSlug: "signals",
  courseHref: "/bam/signals",
  sectionTitle,
  lessonTitle,
});

const lesson = (slug: string, mediaUrl: string | null = null, section: string | null = "Section 1") => ({
  pagePath: `/bam/signals/lesson/${slug}`,
  mediaUrl,
  meta: meta(`Lesson ${slug}`, section),
});

/** Lesson-page paths currently in PAGES_CACHE (shell pages + RSC keys excluded, as prod does). */
async function cachedPaths(offline: Awaited<ReturnType<typeof load>>) {
  return (await offline.listSavedPagePaths()).sort();
}

describe("offline cache + manifest, together", () => {
  it("saves page, RSC payload, media and manifest entry", async () => {
    const offline = await load();
    await offline.saveLesson(lesson("a", "https://cdn/a.mp3"));

    const pages = cacheStorage.caches.get(offline.PAGES_CACHE)!;
    const media = cacheStorage.caches.get(offline.MEDIA_CACHE)!;
    // Both halves of the page: the HTML document and the synthetic ?__rsc key.
    expect([...pages.store.keys()].some((k) => k.endsWith("/bam/signals/lesson/a"))).toBe(true);
    expect([...pages.store.keys()].some((k) => k.includes("__rsc"))).toBe(true);
    expect(media.store.size).toBe(1);

    const { entries } = await offline.reconcileOffline();
    expect(entries).toHaveLength(1);
    expect(entries[0].lessonTitle).toBe("Lesson a");
    expect(entries[0].sectionTitle).toBe("Section 1");
    expect(entries[0].mediaUrl).toBe("https://cdn/a.mp3");
  });

  it("does NOT report a lesson as saved when its page 404s", async () => {
    const offline = await load();
    broken.add("/bam/signals/lesson/gone");
    await expect(offline.saveLesson(lesson("gone"))).rejects.toBeTruthy();
    // Nothing cached, nothing in the manifest — no phantom download.
    expect(await offline.isSaved("/bam/signals/lesson/gone")).toBe(false);
    expect((await offline.reconcileOffline()).entries).toHaveLength(0);
  });

  it("SHARED MEDIA: removing one lesson keeps audio another saved lesson still uses", async () => {
    const offline = await load();
    const shared = "https://cdn/shared.mp3";
    await offline.saveLesson(lesson("a", shared));
    await offline.saveLesson(lesson("b", shared));
    await offline.saveLesson(lesson("c", "https://cdn/solo.mp3"));

    const media = cacheStorage.caches.get(offline.MEDIA_CACHE)!;
    expect(media.store.size).toBe(2);

    // Remove A — B still references the shared file, so it must survive.
    await offline.removeLessons([{ pagePath: "/bam/signals/lesson/a" }]);
    expect(await offline.isMediaSaved(shared)).toBe(true);
    expect(await cachedPaths(offline)).toEqual(["/bam/signals/lesson/b", "/bam/signals/lesson/c"]);

    // Remove B — now nothing references it, so it goes.
    await offline.removeLessons([{ pagePath: "/bam/signals/lesson/b" }]);
    expect(await offline.isMediaSaved(shared)).toBe(false);
    // C's own media was never touched.
    expect(await offline.isMediaSaved("https://cdn/solo.mp3")).toBe(true);
  });

  it("removing a whole section takes its lessons and only its media", async () => {
    const offline = await load();
    await offline.saveLesson(lesson("a", "https://cdn/a.mp3", "One"));
    await offline.saveLesson(lesson("b", "https://cdn/b.mp3", "One"));
    await offline.saveLesson(lesson("c", "https://cdn/c.mp3", "Two"));

    await offline.removeLessons([
      { pagePath: "/bam/signals/lesson/a" },
      { pagePath: "/bam/signals/lesson/b" },
    ]);

    const { entries } = await offline.reconcileOffline();
    expect(entries.map((e) => e.lessonTitle)).toEqual(["Lesson c"]);
    expect(await offline.isMediaSaved("https://cdn/a.mp3")).toBe(false);
    expect(await offline.isMediaSaved("https://cdn/b.mp3")).toBe(false);
    expect(await offline.isMediaSaved("https://cdn/c.mp3")).toBe(true);
  });

  it("remove is idempotent — removing twice, or removing what was never saved, is a no-op", async () => {
    const offline = await load();
    await offline.saveLesson(lesson("a"));
    await offline.removeLessons([{ pagePath: "/bam/signals/lesson/a" }]);
    await expect(offline.removeLessons([{ pagePath: "/bam/signals/lesson/a" }])).resolves.toBeUndefined();
    await expect(offline.removeLessons([{ pagePath: "/never/saved" }])).resolves.toBeUndefined();
    expect((await offline.reconcileOffline()).entries).toHaveLength(0);
  });

  it("an INTERRUPTED multi-select leaves complete lessons, never partial ones", async () => {
    const offline = await load();
    broken.add("/bam/signals/lesson/b"); // the network dies on the 2nd of 3
    const { failed } = await offline.saveCourse([lesson("a"), lesson("b"), lesson("c")]);

    expect(failed.map((l) => l.pagePath)).toEqual(["/bam/signals/lesson/b"]);
    // a and c are fully committed (page + manifest); b is absent from BOTH. No half-state.
    const { entries, orphanPages } = await offline.reconcileOffline();
    expect(entries.map((e) => e.pagePath).sort()).toEqual([
      "/bam/signals/lesson/a",
      "/bam/signals/lesson/c",
    ]);
    expect(orphanPages).toEqual([]);
  });

  it("DRIFT: a manifest entry whose page isn't cached is stale — pruned, and the prune persists", async () => {
    const offline = await load();
    await offline.saveLesson(lesson("a"));
    await offline.saveLesson(lesson("b"));

    // Simulate the cache being evicted underneath us (browser storage pressure), which leaves the
    // manifest advertising a lesson that would 404 offline.
    const pages = cacheStorage.caches.get(offline.PAGES_CACHE)!;
    for (const k of [...pages.store.keys()]) if (k.includes("/lesson/a")) pages.store.delete(k);

    const { entries } = await offline.reconcileOffline();
    expect(entries.map((e) => e.pagePath)).toEqual(["/bam/signals/lesson/b"]);

    // The prune was persisted, not just filtered for one render.
    const { readManifest } = await import("@/lib/offline-manifest");
    expect(Object.keys(readManifest())).toEqual(["/bam/signals/lesson/b"]);
  });

  it("DRIFT: a cached page with no manifest entry is an orphan — shown, and removable", async () => {
    const offline = await load();
    await offline.saveLesson(lesson("a"));
    await offline.saveLesson(lesson("b"));

    // Simulate the manifest being lost (cleared site data, quota-blocked write, older build).
    localStorage.clear();

    const before = await offline.reconcileOffline();
    expect(before.entries).toHaveLength(0);
    expect(before.orphanPages).toEqual(["/bam/signals/lesson/a", "/bam/signals/lesson/b"]);

    // The learner can still reclaim the space — that's the whole point of surfacing them.
    await offline.removeLessons(before.orphanPages.map((pagePath) => ({ pagePath })));
    expect((await offline.reconcileOffline()).orphanPages).toEqual([]);
  });

  it("media no saved lesson references is surfaced as removable orphan media", async () => {
    const offline = await load();
    await offline.saveLesson(lesson("a", "https://cdn/a.mp3"));
    // Strand the media by dropping the manifest entry but leaving MEDIA_CACHE alone.
    localStorage.clear();

    const inv = await offline.reconcileOffline();
    expect(inv.orphanMedia).toEqual(["https://cdn/a.mp3"]);

    await offline.removeMedia(inv.orphanMedia);
    expect(await offline.isMediaSaved("https://cdn/a.mp3")).toBe(false);
  });

  it("the /downloads shell is cached but never listed as a lesson", async () => {
    const offline = await load();
    await offline.saveLesson(lesson("a"));

    // saveLesson best-effort caches /downloads so the manager is reachable with no network...
    await vi.waitFor(async () => expect(await offline.isSaved(offline.DOWNLOADS_PATH)).toBe(true));
    // ...but it's an app shell, not a lesson, so it must not pollute the inventory.
    const { entries, orphanPages } = await offline.reconcileOffline();
    expect(entries).toHaveLength(1);
    expect(orphanPages).toEqual([]);
    expect(await cachedPaths(offline)).toEqual(["/bam/signals/lesson/a"]);
  });

  // REGRESSION (found by driving real Chrome against a killed server): the SW caches
  // /_next/static/* cache-first but only ON DEMAND, so a page the learner opens for the first time
  // while OFFLINE had no route chunk and died with a ChunkLoadError → "Something went wrong". It
  // broke /downloads and /offline — the two pages whose whole job is to work with no network.
  it("caches the JS/CSS a saved page needs to actually RENDER offline", async () => {
    const offline = await load();
    await offline.saveLesson(lesson("a"));

    const assets = cacheStorage.caches.get(offline.ASSETS_CACHE);
    const keys = [...(assets?.store.keys() ?? [])].map((u) => new URL(u).pathname);
    expect(keys).toContain("/_next/static/chunks/shared-abc.js");
    expect(keys).toContain("/_next/static/css/app-def.css");
    // Including the route chunk embedded (escaped) in the RSC flight payload — the exact one whose
    // absence produced the ChunkLoadError.
    expect(keys).toContain("/_next/static/chunks/app/bam/signals/lesson/a/page-xyz.js");
  });

  it("caches the /downloads and /offline shells — with their JS — on the first save", async () => {
    const offline = await load();
    await offline.saveLesson(lesson("a"));
    await vi.waitFor(async () => {
      expect(await offline.isSaved(offline.DOWNLOADS_PATH)).toBe(true);
      expect(await offline.isSaved("/offline")).toBe(true);
    });
    const assets = cacheStorage.caches.get(offline.ASSETS_CACHE);
    const keys = [...(assets?.store.keys() ?? [])].map((u) => new URL(u).pathname);
    expect(keys).toContain("/_next/static/chunks/app/downloads/page-xyz.js");
  });

  it("removeAllOffline wipes pages, media, page assets and the manifest", async () => {
    const offline = await load();
    await offline.saveLesson(lesson("a", "https://cdn/a.mp3"));
    await offline.saveLesson(lesson("b", "https://cdn/b.mp3"));
    expect(cacheStorage.caches.get(offline.ASSETS_CACHE)!.store.size).toBeGreaterThan(0);

    await offline.removeAllOffline();

    const { entries, orphanPages, orphanMedia } = await offline.reconcileOffline();
    expect(entries).toHaveLength(0);
    expect(orphanPages).toEqual([]);
    expect(orphanMedia).toEqual([]);
    // "Remove all" must reclaim the JS too, or it quietly leaves megabytes behind.
    expect(cacheStorage.caches.get(offline.ASSETS_CACHE)?.store.size ?? 0).toBe(0);
  });

  it("storageUsage returns null (rather than a wrong 0 B) where estimate() is unsupported", async () => {
    const offline = await load();
    expect(await offline.storageUsage()).toBeNull();
  });
});
