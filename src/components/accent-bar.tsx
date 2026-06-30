"use client";

// Common accents for the languages we teach (es / fr / pt / it) — letters not on a
// US keyboard. Clicking inserts into whichever text input/textarea is focused;
// onMouseDown + preventDefault keeps focus in that input.
const CHARS = ["á", "é", "í", "ó", "ú", "ñ", "ü", "¿", "¡", "à", "è", "ì", "ò", "ù", "â", "ê", "î", "ô", "û", "ç", "ã", "õ"];

function insertChar(char: string) {
  const el = document.activeElement;
  if (!(el instanceof HTMLInputElement) && !(el instanceof HTMLTextAreaElement)) return;
  const start = el.selectionStart ?? el.value.length;
  const end = el.selectionEnd ?? el.value.length;
  const newValue = el.value.slice(0, start) + char + el.value.slice(end);
  // Use the native value setter so React's onChange fires for controlled inputs.
  const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
  const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
  if (setter) setter.call(el, newValue);
  else el.value = newValue;
  el.dispatchEvent(new Event("input", { bubbles: true }));
  const caret = start + char.length;
  el.setSelectionRange(caret, caret);
}

export function AccentBar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-1 ${className}`} role="group" aria-label="Insert an accented character">
      {CHARS.map((c) => (
        <button
          key={c}
          type="button"
          tabIndex={-1}
          aria-label={`Insert ${c}`}
          onMouseDown={(e) => {
            e.preventDefault();
            insertChar(c);
          }}
          className="min-h-8 min-w-8 rounded-md border border-neutral-300 px-2 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          {c}
        </button>
      ))}
    </div>
  );
}
