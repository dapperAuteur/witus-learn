/**
 * "Needs a connection": what a button that must reach the server says when it can't.
 *
 * Offline, a plain `fetch` rejects with a bare TypeError. Most buttons in this app never expected
 * that: the promise rejected, the spinner stayed on "Working…", and nothing told the learner why.
 * `serverFetch` turns "no network" into one typed error, and NEEDS_CONNECTION is the one sentence
 * every such button shows for it. A server ANSWER (any status, 4xx and 5xx included) still resolves
 * normally, so each caller keeps its own message for "the server said no".
 *
 * Writes that can wait (marking a lesson complete, a quiz attempt, an /admin/future note) go to the
 * offline outbox instead (src/lib/offline-outbox.ts); this is for the ones that cannot.
 */

export const NEEDS_CONNECTION = "Needs a connection. Try again when you're back online.";

/** The request never reached the server: the browser is offline, or the network failed. */
export class NeedsConnectionError extends Error {
  constructor(options?: { cause?: unknown }) {
    super(NEEDS_CONNECTION, options);
    this.name = "NeedsConnectionError";
  }
}

/** True only when the browser says it is offline. `navigator.onLine` can say "online" wrongly,
 *  never the reverse in a way that matters here, so this is safe for failing fast. */
export function isOffline(): boolean {
  return typeof navigator !== "undefined" && navigator.onLine === false;
}

/**
 * `fetch`, except that "no network" rejects with NeedsConnectionError. Offline it fails at once
 * without trying, so the message appears immediately. An abort is passed through untouched: the
 * caller cancelled it, nothing is wrong with the connection.
 */
export async function serverFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  if (isOffline()) throw new NeedsConnectionError();
  try {
    return await fetch(input, init);
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") throw err;
    throw new NeedsConnectionError({ cause: err });
  }
}

/** The message for a failed call: NEEDS_CONNECTION for no network, else the caller's own. */
export function failureMessage(err: unknown, otherwise: string): string {
  return err instanceof NeedsConnectionError ? NEEDS_CONNECTION : otherwise;
}
