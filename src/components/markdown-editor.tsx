"use client";

import { useRef, useState } from "react";
import { Markdown } from "./markdown";

// A lightweight WYSIWYG-style editor for lesson bodies: a formatting toolbar that inserts
// markdown around the selection + a live Preview tab (reusing the app's Markdown renderer).
// Fits the existing markdown content model — no heavy rich-text dependency.
export function MarkdownEditor({
  value,
  onChange,
  rows = 10,
  placeholder = "Write in markdown — use the toolbar, or type directly.",
}: {
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [tab, setTab] = useState<"write" | "preview">("write");

  function restore(selStart: number, selEnd: number) {
    requestAnimationFrame(() => {
      const ta = ref.current;
      if (!ta) return;
      ta.focus();
      ta.selectionStart = selStart;
      ta.selectionEnd = selEnd;
    });
  }

  // Wrap the selection with `before`/`after` (e.g. ** ** for bold).
  function surround(before: string, after = before) {
    const ta = ref.current;
    if (!ta) return;
    const s = ta.selectionStart;
    const e = ta.selectionEnd;
    onChange(value.slice(0, s) + before + value.slice(s, e) + after + value.slice(e));
    restore(s + before.length, e + before.length);
  }

  // Prefix every line touched by the selection (headings, lists, quotes).
  function prefixLines(prefix: string) {
    const ta = ref.current;
    if (!ta) return;
    const s = ta.selectionStart;
    const e = ta.selectionEnd;
    const lineStart = value.lastIndexOf("\n", s - 1) + 1;
    const block = value.slice(lineStart, e);
    const prefixed = block
      .split("\n")
      .map((l) => prefix + l)
      .join("\n");
    onChange(value.slice(0, lineStart) + prefixed + value.slice(e));
    restore(lineStart, e + prefixed.length - block.length);
  }

  function insertLink() {
    const url = window.prompt("Link URL:");
    if (!url) return;
    surround("[", `](${url})`);
  }

  const btn = "min-h-8 rounded px-2 text-sm hover:bg-neutral-200 focus-visible:outline-2 dark:hover:bg-neutral-700";
  return (
    <div className="rounded-md border border-neutral-300 dark:border-neutral-700">
      <div className="flex flex-wrap items-center gap-0.5 border-b border-neutral-200 p-1 dark:border-neutral-800">
        <button type="button" onClick={() => surround("**")} className={btn} title="Bold" aria-label="Bold"><strong>B</strong></button>
        <button type="button" onClick={() => surround("_")} className={btn} title="Italic" aria-label="Italic"><em>I</em></button>
        <button type="button" onClick={() => prefixLines("## ")} className={btn} title="Heading" aria-label="Heading">H2</button>
        <button type="button" onClick={() => prefixLines("### ")} className={btn} title="Subheading" aria-label="Subheading">H3</button>
        <button type="button" onClick={() => prefixLines("- ")} className={btn} title="Bullet list" aria-label="Bullet list">• List</button>
        <button type="button" onClick={() => prefixLines("1. ")} className={btn} title="Numbered list" aria-label="Numbered list">1. List</button>
        <button type="button" onClick={() => prefixLines("> ")} className={btn} title="Quote" aria-label="Quote">&ldquo;&rdquo;</button>
        <button type="button" onClick={insertLink} className={btn} title="Link" aria-label="Insert link">Link</button>
        <button type="button" onClick={() => surround("`")} className={btn} title="Inline code" aria-label="Inline code">{"</>"}</button>
        <div className="ml-auto flex rounded bg-neutral-100 p-0.5 text-xs dark:bg-neutral-800">
          <button type="button" onClick={() => setTab("write")} className={`rounded px-2 py-0.5 ${tab === "write" ? "bg-white shadow-sm dark:bg-neutral-700" : ""}`}>Write</button>
          <button type="button" onClick={() => setTab("preview")} className={`rounded px-2 py-0.5 ${tab === "preview" ? "bg-white shadow-sm dark:bg-neutral-700" : ""}`}>Preview</button>
        </div>
      </div>
      {tab === "write" ? (
        <textarea
          ref={ref}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          placeholder={placeholder}
          className="w-full resize-y rounded-b-md px-3 py-2 font-mono text-sm outline-none dark:bg-neutral-900"
        />
      ) : (
        <div className="min-h-32 px-3 py-2">
          {value.trim() ? <Markdown>{value}</Markdown> : <p className="text-sm text-neutral-400">Nothing to preview yet.</p>}
        </div>
      )}
    </div>
  );
}
