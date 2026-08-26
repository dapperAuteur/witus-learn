"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { findQuoteMatch } from "@/lib/annotation-anchor";
import { NOTE_BODY_MAX, NOTE_CONTEXT_MAX, NOTE_QUOTE_MAX } from "@/lib/annotations";
import { NOTES_CHANGED_EVENT, type NoteView } from "./notes-panel";

// The inline-annotation layer (plans/61 step 3). Wraps the rendered lesson body and does the two
// DOM jobs the pure matching core (src/lib/annotation-anchor.ts) cannot:
//
//   1. SELECTION → ANCHOR: when the learner selects text inside one anchored block, a small
//      "Add note" affordance appears; saving posts the note with quote + ~30 chars of context +
//      the block's content-derived id.
//   2. ANCHOR → HIGHLIGHT: every anchored note whose quote still resolves gets its text wrapped
//      in <mark> elements. A quote that no longer matches paints NOTHING — the note shows as
//      orphaned in the panel instead of highlighting the wrong words.
//
// Marks are painted imperatively after hydration and cleared before each repaint. The wrapped
// children are server-rendered and stable, so React never reconciles away the marks; interactive
// islands inside the body (reveals, figures) carry no data-block-id and are never touched.

interface Anchored {
  id: string;
  body: string;
  quote: string;
  contextPrefix?: string | null;
  contextSuffix?: string | null;
  blockId?: string | null;
}

interface PendingAnchor {
  quote: string;
  contextPrefix: string;
  contextSuffix: string;
  blockId: string | null;
  /** Container-relative coordinates for the affordance, computed in the selection handler
   *  (refs may be read in event handlers, never during render). */
  top: number;
  left: number;
}

export function AnnotationLayer({
  courseId,
  lessonId,
  children,
}: {
  courseId: string;
  lessonId: string;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const url = `/api/courses/${courseId}/lessons/${lessonId}/notes`;
  const [pending, setPending] = useState<PendingAnchor | null>(null);
  const [composerOpen, setComposerOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  // ── Anchor → highlight ─────────────────────────────────────────────────────

  const paint = useCallback(async () => {
    const container = containerRef.current;
    if (!container) return;
    let notes: Anchored[] = [];
    try {
      const r = await fetch(url);
      if (!r.ok) return;
      const data = (await r.json()) as { own: NoteView[]; teacherNotes: NoteView[] };
      notes = [...data.own, ...data.teacherNotes].filter((n): n is NoteView & { quote: string } =>
        Boolean(n.quote),
      );
    } catch {
      return; // No highlights is a safe failure; the panel reports load errors.
    }

    clearMarks(container);
    for (const note of notes) {
      const blocks = candidateBlocks(container, note.blockId ?? null);
      for (const block of blocks) {
        const match = findQuoteMatch(block.textContent ?? "", {
          quote: note.quote,
          contextPrefix: note.contextPrefix,
          contextSuffix: note.contextSuffix,
        });
        if (match) {
          wrapMatch(block, match.start, match.end, note.id, note.body);
          break; // One highlight per note: the best block wins, duplicates disambiguated by context.
        }
      }
    }
  }, [url]);

  useEffect(() => {
    const repaint = () => void paint();
    // Deferred a tick: effects must not set state or mutate the tree synchronously mid-hydration.
    const t = setTimeout(repaint, 0);
    window.addEventListener(NOTES_CHANGED_EVENT, repaint);
    return () => {
      clearTimeout(t);
      window.removeEventListener(NOTES_CHANGED_EVENT, repaint);
    };
  }, [paint]);

  // ── Selection → anchor ─────────────────────────────────────────────────────

  useEffect(() => {
    let debounce: ReturnType<typeof setTimeout> | undefined;
    const onSelectionChange = () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        const container = containerRef.current;
        if (!container || composerOpen) return;
        const sel = window.getSelection();
        if (!sel || sel.isCollapsed || sel.rangeCount === 0) {
          setPending(null);
          return;
        }
        const range = sel.getRangeAt(0);
        if (!container.contains(range.commonAncestorContainer)) {
          setPending(null);
          return;
        }
        const quote = range.toString().trim();
        if (quote.length < 2 || quote.length > NOTE_QUOTE_MAX) {
          setPending(null);
          return;
        }
        // The anchor lives in ONE block. A selection spanning blocks gets no affordance rather
        // than an anchor that can never be re-found.
        const startBlock = blockOf(range.startContainer);
        const endBlock = blockOf(range.endContainer);
        if (!startBlock || startBlock !== endBlock) {
          setPending(null);
          return;
        }
        const blockText = startBlock.textContent ?? "";
        const offsets = rangeOffsetsIn(startBlock, range);
        const contextPrefix = offsets
          ? blockText.slice(Math.max(0, offsets.start - 30), offsets.start).slice(-NOTE_CONTEXT_MAX)
          : "";
        const contextSuffix = offsets
          ? blockText.slice(offsets.end, offsets.end + 30).slice(0, NOTE_CONTEXT_MAX)
          : "";
        const rect = range.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const rawLeft = rect.left - containerRect.left + rect.width / 2;
        setPending({
          quote,
          contextPrefix,
          contextSuffix,
          blockId: startBlock.getAttribute("data-block-id"),
          top: rect.bottom - containerRect.top + 6,
          // Keep the 18rem popover inside the container on narrow screens.
          left: Math.min(Math.max(rawLeft, 144), Math.max(containerRect.width - 144, 144)),
        });
      }, 250);
    };
    document.addEventListener("selectionchange", onSelectionChange);
    return () => {
      clearTimeout(debounce);
      document.removeEventListener("selectionchange", onSelectionChange);
    };
  }, [composerOpen]);

  async function save() {
    if (!pending) return;
    const body = draft.trim();
    if (!body) return;
    setSaving(true);
    setSaveError(null);
    try {
      const r = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          body: body.slice(0, NOTE_BODY_MAX),
          quote: pending.quote,
          contextPrefix: pending.contextPrefix || undefined,
          contextSuffix: pending.contextSuffix || undefined,
          blockId: pending.blockId ?? undefined,
        }),
      });
      if (!r.ok) throw new Error(String(r.status));
      setDraft("");
      setComposerOpen(false);
      setPending(null);
      window.getSelection()?.removeAllRanges();
      window.dispatchEvent(new Event(NOTES_CHANGED_EVENT));
    } catch {
      setSaveError("Could not save the note. Your text is still here, try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div ref={containerRef} className="relative">
      {children}

      {pending && !composerOpen ? (
        <button
          type="button"
          onClick={() => setComposerOpen(true)}
          className="absolute z-20 inline-flex min-h-11 -translate-x-1/2 items-center gap-1 rounded-full border border-neutral-300 bg-white px-3 text-sm font-medium shadow-md dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12"
          style={{ top: pending.top, left: pending.left, color: "var(--accent)" }}
        >
          <span aria-hidden>✎</span> Add note
        </button>
      ) : null}

      {pending && composerOpen ? (
        <div
          role="dialog"
          aria-label="Note on selected text"
          className="absolute z-20 w-72 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-lg border border-neutral-200 bg-white p-3 shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
          style={{ top: pending.top, left: pending.left }}
        >
          <blockquote className="max-h-16 overflow-hidden border-l-2 pl-2 text-xs italic text-neutral-600" style={{ borderColor: "var(--accent)" }}>
            {pending.quote}
          </blockquote>
          <label htmlFor="annotation-draft" className="sr-only">
            Your note on the selected text
          </label>
          <textarea
            id="annotation-draft"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            maxLength={NOTE_BODY_MAX}
            rows={3}
            autoFocus
            placeholder="Your note about this passage (private to you)"
            className="mt-2 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm dark:border-neutral-700 dark:bg-neutral-950"
          />
          <div className="mt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={save}
              disabled={saving || draft.trim().length === 0}
              className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-white disabled:opacity-60 pointer-coarse:min-h-12"
              style={{ backgroundColor: "var(--accent)" }}
            >
              {saving ? "Saving…" : "Save note"}
            </button>
            <button
              type="button"
              onClick={() => {
                setComposerOpen(false);
                setPending(null);
              }}
              className="inline-flex min-h-11 items-center text-sm text-neutral-600 underline pointer-coarse:min-h-12"
            >
              Cancel
            </button>
          </div>
          {saveError ? (
            <p role="status" className="mt-1 text-xs text-red-600 dark:text-red-400">
              {saveError}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

// ── DOM helpers ────────────────────────────────────────────────────────────────

/** The anchored block an arbitrary node sits in, or null outside any block. */
function blockOf(node: Node): HTMLElement | null {
  const el = node instanceof HTMLElement ? node : node.parentElement;
  return el?.closest<HTMLElement>("[data-block-id]") ?? null;
}

/** Blocks to try for a note: its stored block id first, every block as the fallback (the block's
 *  text may have been edited, changing its content-derived id, while the quote survived). */
function candidateBlocks(container: HTMLElement, blockId: string | null): HTMLElement[] {
  if (blockId) {
    const exact = Array.from(container.querySelectorAll<HTMLElement>(`[data-block-id="${CSS.escape(blockId)}"]`));
    if (exact.length > 0) return exact;
  }
  return Array.from(container.querySelectorAll<HTMLElement>("[data-block-id]"));
}

/** Character offsets of a range within a block's textContent, via a text-node walk. */
function rangeOffsetsIn(block: HTMLElement, range: Range): { start: number; end: number } | null {
  let pos = 0;
  let start = -1;
  let end = -1;
  const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const len = node.nodeValue?.length ?? 0;
    if (node === range.startContainer) start = pos + range.startOffset;
    if (node === range.endContainer) end = pos + range.endOffset;
    pos += len;
  }
  // A start/end container that is an ELEMENT (triple-click selects this way) falls back to the
  // block bounds so the affordance still appears for a full-block selection.
  if (start === -1 && block.contains(range.startContainer)) start = 0;
  if (end === -1 && block.contains(range.endContainer)) end = pos;
  return start >= 0 && end > start ? { start, end } : null;
}

/** Remove every previously painted highlight so a repaint starts clean. */
function clearMarks(container: HTMLElement) {
  for (const mark of Array.from(container.querySelectorAll("mark[data-note-id]"))) {
    const parent = mark.parentNode;
    if (!parent) continue;
    while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
    parent.removeChild(mark);
    parent.normalize();
  }
}

/** Wrap [start, end) of a block's text in <mark> elements, one per intersected text node. */
function wrapMatch(block: HTMLElement, start: number, end: number, noteId: string, noteBody: string) {
  // Collect first: wrapping mutates the tree and would derail a live walker.
  const nodes: { node: Text; from: number; to: number }[] = [];
  let pos = 0;
  const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const text = node as Text;
    const len = text.nodeValue?.length ?? 0;
    const from = Math.max(start - pos, 0);
    const to = Math.min(end - pos, len);
    if (from < to) nodes.push({ node: text, from, to });
    pos += len;
    if (pos >= end) break;
  }
  for (const { node, from, to } of nodes) {
    const target = node.splitText(from);
    target.splitText(to - from);
    const mark = document.createElement("mark");
    mark.setAttribute("data-note-id", noteId);
    mark.title = noteBody.length > 120 ? `${noteBody.slice(0, 117)}…` : noteBody;
    mark.style.backgroundColor = "color-mix(in srgb, var(--accent) 22%, transparent)";
    mark.style.color = "inherit";
    mark.style.borderRadius = "2px";
    target.parentNode?.replaceChild(mark, target);
    mark.appendChild(target);
  }
}

