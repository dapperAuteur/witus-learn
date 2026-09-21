// The "you have a contact request" signal in the site menu. A number beside a menu item, or a dot on
// a collapsed menu's trigger. The accessible name carries the count in words, because a bare number
// read aloud after "Family" means nothing.
export function NavBadge({ count, dot = false }: { count: number; dot?: boolean }) {
  const words = `${count} contact request${count === 1 ? "" : "s"} waiting`;
  if (dot) {
    return (
      <>
        <span aria-hidden className="ml-1 inline-block size-2 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
        <span className="sr-only">, {words}</span>
      </>
    );
  }
  return (
    <>
      <span
        aria-hidden
        className="ml-2 inline-flex min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-semibold text-white"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {count}
      </span>
      <span className="sr-only">, {words}</span>
    </>
  );
}
