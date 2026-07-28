"use client";

// "Save as PDF" via the browser's own print-to-PDF (plans/50). Zero dependency: the print stylesheet
// on the report page isolates the report, and the browser writes the PDF. Hidden in the printout itself.
export function PrintButton({ label = "Save as PDF" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900 pointer-coarse:min-h-12 print:hidden"
    >
      {label}
    </button>
  );
}
