"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

function applyTheme(t: Theme) {
  const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = t === "dark" || (t === "system" && sysDark);
  const el = document.documentElement;
  el.classList.toggle("dark", dark);
  el.style.colorScheme = dark ? "dark" : "light";
}

const ICON: Record<Theme, string> = { system: "🖥️", light: "☀️", dark: "🌙" };
const NEXT: Record<Theme, Theme> = { system: "light", light: "dark", dark: "system" };

// Cycles System → Light → Dark. Persists to localStorage; the no-FOUC script in the
// root layout reads it on first paint. "System" follows the OS and updates live.
// theme is null until mounted (client-only read) to avoid a hydration mismatch.
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Read the client-only saved theme once on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme((localStorage.getItem("theme") as Theme) || "system");
  }, []);

  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  if (theme === null) return <span className="inline-block h-8 w-8" aria-hidden />;

  function cycle() {
    const next = NEXT[theme as Theme];
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  const label = theme[0].toUpperCase() + theme.slice(1);
  return (
    <button
      type="button"
      onClick={cycle}
      title={`Theme: ${label} (click to change)`}
      aria-label={`Theme: ${label}. Click to change.`}
      className="grid h-8 w-8 place-items-center rounded-md border border-neutral-200 text-base hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:hover:bg-neutral-800"
    >
      <span aria-hidden>{ICON[theme]}</span>
    </button>
  );
}
