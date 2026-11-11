"use client";

import { useLayoutEffect } from "react";

// Re-applies the saved theme (localStorage "theme": light, dark, or system/absent) to <html> once an
// error page has mounted. The no-FOUC script in the root layout does this at parse time, but an
// error page can be drawn by Next's error shell (<html id="__next_error__">, which does not carry the
// root layout's body) or re-rendered on the client, and then the dark class is not on <html> and the
// page paints light. Same rule as the layout script and ThemeToggle; idempotent.
export function ThemeKeeper() {
  useLayoutEffect(() => {
    try {
      const t = localStorage.getItem("theme");
      const sys = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const dark = t === "dark" || (t !== "light" && sys);
      const el = document.documentElement;
      el.classList.toggle("dark", dark);
      el.style.colorScheme = dark ? "dark" : "light";
    } catch {
      // Storage blocked: leave whatever the layout script decided.
    }
  }, []);
  return null;
}
