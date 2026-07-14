import { beforeEach, describe, expect, it, vi } from "vitest";

// The offline manifest is the metadata side-table that lets /downloads name a cached lesson
// (course → section → title) with no network. It is a HINT layer: the Cache API stays the source
// of truth for "is this saved". These tests pin the three behaviours that keep it honest —
// (1) malformed/foreign data never becomes a wrong label, (2) shared media is refcounted so
// removing one lesson can't delete another's audio, (3) blocked storage degrades instead of
// throwing. Vitest runs in a `node` environment, so localStorage is stubbed here.

class MemoryStorage implements Storage {
  private map = new Map<string, string>();
  get length() {
    return this.map.size;
  }
  clear() {
    this.map.clear();
  }
  getItem(key: string) {
    return this.map.get(key) ?? null;
  }
  key(index: number) {
    return [...this.map.keys()][index] ?? null;
  }
  removeItem(key: string) {
    this.map.delete(key);
  }
  setItem(key: string, value: string) {
    this.map.set(key, value);
  }
}

const KEY = "witus-offline-manifest-v1";

function installStorage(storage: Storage | null) {
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    get() {
      if (!storage) throw new DOMException("blocked", "SecurityError");
      return storage;
    },
  });
}

let store: MemoryStorage;
beforeEach(() => {
  store = new MemoryStorage();
  installStorage(store);
  vi.resetModules();
});

async function load() {
  return import("@/lib/offline-manifest");
}

function entry(over: Partial<Record<string, unknown>> = {}) {
  return {
    kind: "lesson",
    pagePath: "/bam/course/lesson/one",
    courseTitle: "Course",
    courseSlug: "course",
    courseHref: "/bam/course",
    sectionTitle: "Section 1",
    lessonTitle: "Lesson One",
    mediaUrl: null,
    savedAt: 1_700_000_000_000,
    ...over,
  } as import("@/lib/offline-manifest").OfflineEntry;
}

/** A saved standalone PAGE — the /admin/future case. Not a lesson, and it must not be coerced into
 *  looking like one. */
function pageEntry(over: Partial<Record<string, unknown>> = {}) {
  return {
    kind: "page",
    pagePath: "/admin/future",
    pageTitle: "Future classes & features",
    pageSummary: "32 proposals to review",
    sensitive: true,
    savedByUserId: "user-bam",
    mediaUrl: null,
    savedAt: 1_700_000_000_000,
    ...over,
  } as import("@/lib/offline-manifest").OfflineEntry;
}

describe("offline manifest", () => {
  it("round-trips an entry", async () => {
    const m = await load();
    m.upsertEntry(entry());
    expect(m.readManifest()["/bam/course/lesson/one"]).toMatchObject({
      lessonTitle: "Lesson One",
      sectionTitle: "Section 1",
      courseHref: "/bam/course",
    });
  });

  it("upsert is idempotent — re-saving refreshes rather than duplicating", async () => {
    const m = await load();
    m.upsertEntry(entry());
    m.upsertEntry(entry({ savedAt: 1_800_000_000_000 }));
    const manifest = m.readManifest();
    expect(Object.keys(manifest)).toHaveLength(1);
    expect(manifest["/bam/course/lesson/one"].savedAt).toBe(1_800_000_000_000);
  });

  it("reads corrupt JSON as empty instead of throwing", async () => {
    store.setItem(KEY, "{not json");
    const m = await load();
    expect(m.readManifest()).toEqual({});
  });

  it("drops malformed entries rather than rendering a wrong title next to a real lesson", async () => {
    store.setItem(
      KEY,
      JSON.stringify({
        // No `kind` — written by a build that predates saved pages. Must still read as a lesson,
        // or every download an existing learner has would turn into an unnamed orphan on upgrade.
        "/good": { courseTitle: "C", courseSlug: "c", courseHref: "/c", lessonTitle: "L" },
        "/bad-missing-title": { courseTitle: "C", courseSlug: "c", courseHref: "/c" },
        "/bad-not-an-object": 42,
      }),
    );
    const m = await load();
    const manifest = m.readManifest();
    expect(Object.keys(manifest)).toEqual(["/good"]);
    const good = manifest["/good"];
    expect(m.isLessonEntry(good)).toBe(true);
    if (!m.isLessonEntry(good)) throw new Error("legacy entry must read as a lesson");
    // Missing optionals are normalised, never left undefined.
    expect(good.sectionTitle).toBeNull();
    expect(good.mediaUrl).toBeNull();
    expect(good.savedAt).toBe(0);
  });

  it("round-trips a saved PAGE without pretending it's a lesson", async () => {
    const m = await load();
    m.upsertEntry(pageEntry());
    const saved = m.readManifest()["/admin/future"];
    expect(m.isPageEntry(saved)).toBe(true);
    expect(m.isLessonEntry(saved)).toBe(false);
    if (!m.isPageEntry(saved)) throw new Error("expected a page entry");
    expect(saved.pageTitle).toBe("Future classes & features");
    expect(saved.sensitive).toBe(true);
    expect(saved.savedByUserId).toBe("user-bam");
  });

  it("a page entry with a corrupted `sensitive` flag reads as PRIVATE, not public", async () => {
    // Fail safe. If we can't prove a cached page is public, treat it as private — the purge then
    // removes it on sign-out. The other default would leave an admin page on the device forever.
    store.setItem(
      KEY,
      JSON.stringify({ "/admin/future": { kind: "page", pageTitle: "F", sensitive: "yes-ish" } }),
    );
    const m = await load();
    const saved = m.readManifest()["/admin/future"];
    if (!m.isPageEntry(saved)) throw new Error("expected a page entry");
    expect(saved.sensitive).toBe(true);
  });

  it("drops a page entry with no title — an unnameable page becomes a removable orphan instead", async () => {
    store.setItem(KEY, JSON.stringify({ "/admin/future": { kind: "page", sensitive: true } }));
    const m = await load();
    expect(m.readManifest()).toEqual({});
  });

  it("withoutPaths removes only the named lessons", async () => {
    const m = await load();
    const manifest = {
      "/a": entry({ pagePath: "/a" }),
      "/b": entry({ pagePath: "/b" }),
      "/c": entry({ pagePath: "/c" }),
    };
    expect(Object.keys(m.withoutPaths(manifest, ["/b"]))).toEqual(["/a", "/c"]);
    // Removing an absent path is a no-op (idempotent removal).
    expect(Object.keys(m.withoutPaths(manifest, ["/zzz"]))).toEqual(["/a", "/b", "/c"]);
  });

  it("referencedMedia keeps media that a REMAINING lesson still shares", async () => {
    const m = await load();
    // Two lessons point at the same file — removing one must not orphan the other's audio.
    const manifest = {
      "/a": entry({ pagePath: "/a", mediaUrl: "https://cdn/shared.mp3" }),
      "/b": entry({ pagePath: "/b", mediaUrl: "https://cdn/shared.mp3" }),
      "/c": entry({ pagePath: "/c", mediaUrl: "https://cdn/solo.mp3" }),
    };
    const afterRemovingA = m.withoutPaths(manifest, ["/a"]);
    expect(m.referencedMedia(afterRemovingA).has("https://cdn/shared.mp3")).toBe(true);

    const afterRemovingAandB = m.withoutPaths(manifest, ["/a", "/b"]);
    expect(m.referencedMedia(afterRemovingAandB).has("https://cdn/shared.mp3")).toBe(false);
    expect(m.referencedMedia(afterRemovingAandB).has("https://cdn/solo.mp3")).toBe(true);
  });

  it("degrades (never throws) when storage is blocked — e.g. Safari private mode", async () => {
    installStorage(null); // accessing localStorage THROWS, it doesn't return undefined
    const m = await load();
    expect(m.manifestSupported()).toBe(false);
    expect(m.readManifest()).toEqual({});
    expect(m.writeManifest({ "/a": entry({ pagePath: "/a" }) })).toBe(false);
    expect(() => m.upsertEntry(entry())).not.toThrow();
    expect(() => m.clearManifest()).not.toThrow();
  });

  it("reports a failed write (quota exceeded) rather than pretending it saved", async () => {
    const full = new MemoryStorage();
    full.setItem = () => {
      throw new DOMException("QuotaExceededError", "QuotaExceededError");
    };
    installStorage(full);
    const m = await load();
    expect(m.writeManifest({ "/a": entry({ pagePath: "/a" }) })).toBe(false);
  });

  it("clearManifest wipes everything", async () => {
    const m = await load();
    m.upsertEntry(entry());
    m.clearManifest();
    expect(m.readManifest()).toEqual({});
  });
});
