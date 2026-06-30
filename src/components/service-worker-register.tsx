"use client";

import { useEffect } from "react";

// Registers the offline service worker after load. Kill-switch: set NEXT_PUBLIC_DISABLE_SW=1
// and redeploy to unregister it for everyone (the SW persists in browsers otherwise).
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;

    if (process.env.NEXT_PUBLIC_DISABLE_SW === "1") {
      navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister()));
      return;
    }

    const onLoad = () => navigator.serviceWorker.register("/sw.js").catch(() => {});
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return null;
}
