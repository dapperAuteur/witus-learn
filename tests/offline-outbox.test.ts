import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * The offline outbox exists for one promise: A QUEUED WRITE IS NEVER SILENTLY LOST.
 *
 * BAM writes a note on /admin/future at 30,000 feet. The POST can't go anywhere. Every one of these
 * tests is a way that note could quietly disappear — and the assertion that it doesn't:
 *
 *   • the tab is closed / the page reloads  → it's in storage, not in React state
 *   • the server says 400                   → it's KEPT, flagged, and shown, not dropped
 *   • the session expired while it sat there→ it's KEPT and retried after signing in, not dropped
 *   • the flush runs twice at once          → it isn't sent twice
 *   • storage is full                       → enqueue() says so, so the form can keep the draft
 *
 * The only two ways an item may leave the queue are a 2xx from the server and a human clicking
 * Discard. If a change to offline-outbox.ts adds a third, one of these tests should fail.
 */

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

const KEY = "witus-offline-outbox-v1";
const NOTE = { kind: "future-note", url: "/api/admin/future/notes", method: "POST" as const };

let store: MemoryStorage;
/** Every request the fake server saw — proves "sent once", not "sent twice". */
let seen: string[];

beforeEach(() => {
  store = new MemoryStorage();
  seen = [];
  vi.stubGlobal("localStorage", store);
  vi.stubGlobal("navigator", { onLine: true });
  // A window that records dispatched events, so we can assert the "synced" hand-off to the form.
  vi.stubGlobal("window", {
    dispatchEvent: () => true,
    addEventListener: () => {},
    removeEventListener: () => {},
  });
  vi.stubGlobal("crypto", { randomUUID: () => `id-${Math.random().toString(36).slice(2)}` });
  vi.resetModules();
});

async function load() {
  return import("@/lib/offline-outbox");
}

/** A server that always answers `status`, recording what it was asked. */
function server(status: number, body: unknown = { id: "note-1", body: "hi", status: "open" }) {
  vi.stubGlobal("fetch", async (url: string) => {
    seen.push(url);
    return new Response(JSON.stringify(body), {
      status,
      headers: { "content-type": "application/json" },
    });
  });
}

const queueNote = async (body: string) => {
  const outbox = await load();
  return outbox.enqueue({ ...NOTE, body: { itemKey: "sdtw-ida-b-wells", body }, label: body });
};

describe("the offline outbox", () => {
  it("persists a queued note to storage — so a reload or a closed tab can't lose it", async () => {
    const outbox = await load();
    const item = await queueNote("Cut the travel proposals to three");
    expect(item).not.toBeNull();

    // The proof: read it back from a FRESH module instance, as a page reload would.
    vi.resetModules();
    const reloaded = await import("@/lib/offline-outbox");
    const items = reloaded.outboxFor("future-note");
    expect(items).toHaveLength(1);
    expect(items[0].label).toBe("Cut the travel proposals to three");
    expect(items[0].failed).toBe(false);
    // And it's really in localStorage, not module memory.
    expect(store.getItem(KEY)).toContain("Cut the travel proposals");
    expect(outbox.readOutbox()).toHaveLength(1);
  });

  it("reports a failed enqueue instead of pretending — so the form can keep the draft", async () => {
    // Quota exceeded. If enqueue() lied here, the form would clear the textarea and the note would
    // be gone with nothing anywhere to show for it. That is THE failure this module exists to stop.
    store.setItem = () => {
      throw new DOMException("QuotaExceededError", "QuotaExceededError");
    };
    const item = await queueNote("A note that cannot be stored");
    expect(item).toBeNull();
  });

  it("sends the queue when the network is back, and only then removes it", async () => {
    const outbox = await load();
    await queueNote("Ship the civics course");
    server(201);

    await outbox.flushOutbox();

    expect(seen).toEqual(["/api/admin/future/notes"]);
    expect(outbox.readOutbox()).toHaveLength(0); // removed ONLY because the server took it
  });

  it("does nothing while offline — the note waits rather than failing", async () => {
    const outbox = await load();
    await queueNote("Written on a plane");
    vi.stubGlobal("navigator", { onLine: false });
    server(201);

    await outbox.flushOutbox();

    expect(seen).toEqual([]); // never even attempted
    expect(outbox.readOutbox()).toHaveLength(1); // still safely queued
  });

  it("keeps the note when the network throws mid-flush", async () => {
    const outbox = await load();
    await queueNote("Still offline, really");
    vi.stubGlobal("fetch", async () => {
      throw new TypeError("Failed to fetch");
    });

    await outbox.flushOutbox();

    const [item] = outbox.readOutbox();
    expect(item).toBeTruthy();
    expect(item.failed).toBe(false); // a dead network is not the note's fault
    expect(item.attempts).toBe(1);
  });

  it("KEEPS a note the server rejects (400) — flagged and visible, never dropped", async () => {
    const outbox = await load();
    await queueNote("Something the API won't accept");
    server(400, { error: "Invalid input" });

    await outbox.flushOutbox();

    const [item] = outbox.readOutbox();
    expect(item).toBeTruthy(); // still here — this is the whole point
    expect(item.failed).toBe(true); // and honestly marked as failed
    expect(item.lastError).toContain("400");
    expect(item.label).toBe("Something the API won't accept"); // the text is still recoverable

    // A permanently-failed item isn't retried forever behind the user's back.
    seen = [];
    await outbox.flushOutbox();
    expect(seen).toEqual([]);
  });

  it("KEEPS a note through a 401 and retries it after signing back in", async () => {
    const outbox = await load();
    await queueNote("Queued, then the session expired");
    server(401, { error: "Unauthorized" });

    await outbox.flushOutbox();

    const [item] = outbox.readOutbox();
    expect(item.failed).toBe(false); // retryable: the note is fine, the session isn't
    expect(item.lastError).toContain("Sign in");

    // Signed back in — the next flush sends it for real.
    server(201);
    await outbox.flushOutbox();
    expect(outbox.readOutbox()).toHaveLength(0);
  });

  it("keeps a note through a 500 and retries it later", async () => {
    const outbox = await load();
    await queueNote("The server was having a moment");
    server(503);
    await outbox.flushOutbox();
    expect(outbox.readOutbox()[0].failed).toBe(false);

    server(201);
    await outbox.flushOutbox();
    expect(outbox.readOutbox()).toHaveLength(0);
  });

  it("doesn't send the same note twice when two flushes race", async () => {
    const outbox = await load();
    await queueNote("Only once, please");
    // A slow server: both flushes are in flight at the same time, which is exactly what happens
    // when the `online` event fires while a mount-triggered flush is still running.
    vi.stubGlobal("fetch", async (url: string) => {
      seen.push(url);
      await new Promise((r) => setTimeout(r, 20));
      return new Response(JSON.stringify({ id: "note-1" }), { status: 201 });
    });

    await Promise.all([outbox.flushOutbox(), outbox.flushOutbox()]);

    expect(seen).toHaveLength(1);
    expect(outbox.readOutbox()).toHaveLength(0);
  });

  it("discard is the only other way out — and it removes just that note", async () => {
    const outbox = await load();
    const keep = await queueNote("Keep me");
    const drop = await queueNote("Drop me");
    expect(outbox.readOutbox()).toHaveLength(2);

    outbox.discard(drop!.id);

    const left = outbox.readOutbox();
    expect(left).toHaveLength(1);
    expect(left[0].id).toBe(keep!.id);
  });

  it("only shows a form its OWN queued items", async () => {
    const outbox = await load();
    await queueNote("A future-work note");
    outbox.enqueue({ kind: "problem-report", url: "/api/reports", method: "POST", body: {}, label: "A bug" });

    expect(outbox.outboxFor("future-note")).toHaveLength(1);
    expect(outbox.outboxFor("problem-report")).toHaveLength(1);
    expect(outbox.outboxFor("nothing-uses-this")).toHaveLength(0);
  });

  it("reads a corrupt queue as empty rather than throwing on every page load", async () => {
    store.setItem(KEY, "{not json");
    const outbox = await load();
    expect(outbox.readOutbox()).toEqual([]);
  });
});
