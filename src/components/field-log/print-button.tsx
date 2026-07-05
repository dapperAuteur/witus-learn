"use client";

// A print → "Save as PDF" trigger (no PDF dependency; the browser does the conversion).
export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="min-h-9 rounded-md px-4 text-sm font-medium text-white print:hidden"
      style={{ backgroundColor: "var(--accent)" }}
    >
      Print / Save as PDF
    </button>
  );
}
