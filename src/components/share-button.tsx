"use client";

import { useEffect, useRef, useState } from "react";

// Share the current page (school / course / lesson). Uses the native share sheet on mobile when
// available; otherwise a small popover with Copy link + X / LinkedIn / Facebook / Email. The OG
// tags on each page provide the rich preview card. Shares whatever URL the user is on, so it works
// for a school home, a course, or a specific lesson (module/section) without per-page wiring.
export function ShareButton({
  title,
  text,
  label = "Share",
}: {
  title: string;
  text?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  // Set from the click handler (window is only available client-side); the popover — the only
  // place `url` is read — never renders before that runs.
  const [url, setUrl] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  // Close the popover on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function onClick() {
    const shareUrl = window.location.href;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url: shareUrl });
        return; // native sheet handled it (including cancel)
      } catch {
        return;
      }
    }
    setUrl(shareUrl);
    setOpen((o) => !o);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard blocked — the links below still work */
    }
  }

  const enc = encodeURIComponent;
  const links = [
    { label: "X", href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}` },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
    { label: "Email", href: `mailto:?subject=${enc(title)}&body=${enc(`${text ? `${text}\n\n` : ""}${url}`)}` },
  ];

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={onClick}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-neutral-300 px-3 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
      >
        <span aria-hidden>↗</span> {label}
      </button>
      {open ? (
        <div
          role="menu"
          className="absolute right-0 z-30 mt-1 w-44 rounded-lg border border-neutral-200 bg-white p-1 shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
        >
          <button
            type="button"
            onClick={copy}
            role="menuitem"
            className="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {copied ? "Copied ✓" : "Copy link"}
          </button>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              role="menuitem"
              className="block rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
