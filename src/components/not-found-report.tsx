"use client";

import { useEffect } from "react";
import { reportClientError } from "@/lib/client-error";

// Reports a 404 to an admin (problem_reports + WitUS Inbox) ONLY when it came from an internal link —
// i.e. a broken link inside the app, which is the actionable kind worth tracking. Direct hits / bots /
// typos (no same-origin referrer) are not reported, to avoid noise. Renders nothing.
export function NotFoundReport() {
  useEffect(() => {
    try {
      const ref = document.referrer;
      const internal = ref && new URL(ref).origin === location.origin;
      if (internal) {
        reportClientError({ message: `404 (broken internal link): ${location.pathname}`, pageUrl: location.href });
      }
    } catch {
      // never throw from a 404 page
    }
  }, []);
  return null;
}
