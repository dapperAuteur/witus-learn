// The visible "this value was adjusted" marker (plans/66). Every surface that shows an
// override-affected value renders one of these next to it: an adjusted number with no marker
// would be indistinguishable from a real one, which is the failure this feature is built to
// avoid. The reason is exposed inline (title + expandable text), never hidden behind an icon
// alone.
export function AdjustedMark({ label, reason }: { label: string; reason: string }) {
  return (
    <span className="ml-1 inline-block align-middle">
      <details className="inline">
        <summary
          className="inline cursor-pointer list-none rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-amber-800 dark:bg-amber-950 dark:text-amber-300"
          title={reason}
        >
          {label}
        </summary>
        <span className="mt-1 block max-w-60 text-xs text-neutral-600">{reason}</span>
      </details>
    </span>
  );
}
