"use client";

import { useEffect, useState } from "react";
import { offlineReadiness, offlineWorks, type OfflineReadiness } from "./offline";

const PENDING: OfflineReadiness = {
  storage: false,
  serviceWorkerApi: false,
  registered: false,
  controlling: false,
};

/**
 * Live answer to "can this learner actually rely on offline right now?".
 *
 * Re-probes on `controllerchange`, because a service worker legitimately takes a moment to install
 * and claim the page on a first visit — during which `controller` is null and offline genuinely
 * would NOT work. Without this, the UI would either lie (claim offline works before the SW is
 * controlling) or nag forever (condemn a page that is about to be claimed).
 *
 * `ready` is null while the first probe is in flight, so callers can render nothing rather than
 * flashing a scary "offline unavailable" banner at every page load.
 */
export function useOfflineReadiness(): { ready: OfflineReadiness | null; works: boolean } {
  const [ready, setReady] = useState<OfflineReadiness | null>(null);

  useEffect(() => {
    let cancelled = false;
    const probe = () => {
      offlineReadiness()
        .then((next) => {
          if (!cancelled) setReady(next);
        })
        .catch(() => {
          if (!cancelled) setReady(PENDING);
        });
    };
    probe();

    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) {
      return () => {
        cancelled = true;
      };
    }
    // The SW claimed (or released) this page — the answer just changed.
    navigator.serviceWorker.addEventListener("controllerchange", probe);
    // A first-visit SW is still installing when we first probe; `ready` resolves once it's
    // active, and claim() then fires controllerchange. Probe again on both, belt and braces.
    navigator.serviceWorker.ready.then(probe).catch(() => {});
    return () => {
      cancelled = true;
      navigator.serviceWorker.removeEventListener("controllerchange", probe);
    };
  }, []);

  return { ready, works: ready !== null && offlineWorks(ready) };
}
