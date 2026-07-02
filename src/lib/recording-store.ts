// Offline-first store for in-app lesson recordings. Captured audio is written to IndexedDB
// immediately (survives tab close / connection loss) and drained to Cloudinary when back online.
// One pending recording per lesson, keyed by lessonId. A recording is one or more ordered PARTS
// (a long take is split into <cap parts at record time). No external dependency — raw IndexedDB.

const DB_NAME = "witus-recordings";
const STORE = "pending";
const VERSION = 1;

export interface PendingRecording {
  lessonId: string;
  courseId: string;
  /** Ordered parts, each under the upload cap. A normal take is a single part. */
  parts: Blob[];
  mime: string;
  durationSeconds: number;
  createdAt: number;
}

// Legacy records (pre-multi-part) stored a single `blob`. Normalize them to `parts` on read.
function normalize(rec: (PendingRecording & { blob?: Blob }) | undefined): PendingRecording | undefined {
  if (!rec) return undefined;
  if (!Array.isArray(rec.parts)) rec.parts = rec.blob ? [rec.blob] : [];
  return rec;
}

function idbAvailable(): boolean {
  return typeof indexedDB !== "undefined";
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, VERSION);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(STORE)) {
        req.result.createObjectStore(STORE, { keyPath: "lessonId" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function tx<T>(mode: IDBTransactionMode, fn: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  const db = await openDb();
  return new Promise<T>((resolve, reject) => {
    const t = db.transaction(STORE, mode);
    const req = fn(t.objectStore(STORE));
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
    t.oncomplete = () => db.close();
  });
}

export async function savePending(rec: PendingRecording): Promise<void> {
  if (!idbAvailable()) return;
  await tx("readwrite", (s) => s.put(rec));
}

export async function getPending(lessonId: string): Promise<PendingRecording | undefined> {
  if (!idbAvailable()) return undefined;
  return normalize(await tx<PendingRecording | undefined>("readonly", (s) => s.get(lessonId)));
}

export async function deletePending(lessonId: string): Promise<void> {
  if (!idbAvailable()) return;
  await tx("readwrite", (s) => s.delete(lessonId));
}

export async function listPending(): Promise<PendingRecording[]> {
  if (!idbAvailable()) return [];
  const all = (await tx<PendingRecording[]>("readonly", (s) => s.getAll())) ?? [];
  return all.map((r) => normalize(r)!).filter(Boolean);
}
