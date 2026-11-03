// When a "chat with the sources" answer is saved. PURE (the owner check and the insert are passed in),
// so the rules are unit-tested in tests/source-chat-history.test.ts.
//
// BAM, 2026-11-02: save answers for the platform owner only, for now. Everyone else: nothing stored,
// exactly as before. Saving must never block or fail the answer, so this never throws, and a save that
// takes longer than `timeoutMs` is given up on (the answer goes back; the insert may still land).

export const SAVE_TIMEOUT_MS = 3000;

export interface SaveIfOwnerArgs {
  /** Is the asker the platform owner? Asked first; a false or a failure means nothing is saved. */
  isOwner: () => Promise<boolean>;
  /** Insert the row; resolves to its id. */
  save: () => Promise<string>;
  timeoutMs?: number;
  log?: (message: string, err?: unknown) => void;
}

/** The saved row's id, or null when nothing was saved (not the owner, a failure, or too slow). */
export async function saveIfOwner({ isOwner, save, timeoutMs = SAVE_TIMEOUT_MS, log = console.error }: SaveIfOwnerArgs): Promise<string | null> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    if (!(await isOwner())) return null;
    const timeout = new Promise<null>((resolve) => {
      timer = setTimeout(() => {
        log(`source-chat: saving the answer took over ${timeoutMs} ms; answering without waiting`);
        resolve(null);
      }, timeoutMs);
    });
    // A save that fails AFTER the timeout won is still caught here, never an unhandled rejection.
    const saving = save().catch((err: unknown) => {
      log("source-chat: saving the answer failed; answering anyway", err);
      return null;
    });
    return await Promise.race([saving, timeout]);
  } catch (err) {
    log("source-chat: saving the answer failed; answering anyway", err);
    return null;
  } finally {
    if (timer) clearTimeout(timer);
  }
}
