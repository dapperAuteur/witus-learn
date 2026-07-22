"use client";

import { useEffect } from "react";

/**
 * Registers the offline service worker. Kill-switch: set NEXT_PUBLIC_DISABLE_SW=1 and redeploy to
 * unregister it for everyone (the SW persists in browsers otherwise).
 *
 * ⚠️ THE BUG THIS FIXES — read before touching the ordering below.
 * This used to be:
 *
 *     const onLoad = () => navigator.serviceWorker.register("/sw.js").catch(() => {});
 *     window.addEventListener("load", onLoad);
 *
 * `useEffect` runs after hydration, and on a fast or warm-cached load `window`'s `load` event has
 * ALREADY fired by then. The listener was therefore attached to an event that would never fire
 * again, `register()` was never called, and no service worker was ever installed — while
 * `.catch(() => {})` swallowed every error so it failed in total silence. Downloads still wrote
 * into the Cache API (that works without a SW), so the UI cheerfully showed "✓ saved" — but with
 * no SW to intercept the navigation, going offline gave the learner Chrome's dinosaur page
 * instead of their lesson. Green check, no lesson, on a plane.
 *
 * So: if the document has already finished loading, register NOW; only wait for `load` when the
 * page genuinely hasn't got there yet. And log failures instead of eating them.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;

    if (process.env.NEXT_PUBLIC_DISABLE_SW === "1") {
      navigator.serviceWorker
        .getRegistrations()
        .then((regs) => regs.forEach((r) => r.unregister()))
        .catch((err) => console.warn("[sw] unregister failed", err));
      return;
    }

    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch((err) => {
        // Never silent again: a failed registration means offline downloads cannot work, and the
        // download UI keys off navigator.serviceWorker.controller to refuse to claim otherwise.
        console.warn("[sw] registration failed, offline downloads will not work", err);
      });
    };

    // The whole point: don't wait for an event that may already have happened.
    if (document.readyState === "complete") {
      register();
      return;
    }
    window.addEventListener("load", register, { once: true });
    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}
