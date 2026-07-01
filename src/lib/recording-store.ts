// Offline-first store for in-app lesson recordings. Captured audio is written to IndexedDB
// immediately (survives tab close / connection loss) and drained to Cloudinary when back online.
// One pending blob per lesson, keyed by lessonId. No external dependency — raw IndexedDB.

const DB_NAME = "witus-recordings";
const STORE = "pending";
const VERSION = 1;

export interface PendingRecording {
  lessonId: string;
  courseId: string;
  blob: Blob;
  mime: string;
  durationSeconds: number;
  createdAt: number;
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
  return (await tx<PendingRecording | undefined>("readonly", (s) => s.get(lessonId))) ?? undefined;
}

export async function deletePending(lessonId: string): Promise<void> {
  if (!idbAvailable()) return;
  await tx("readwrite", (s) => s.delete(lessonId));
}

export async function listPending(): Promise<PendingRecording[]> {
  if (!idbAvailable()) return [];
  return (await tx<PendingRecording[]>("readonly", (s) => s.getAll())) ?? [];
}
