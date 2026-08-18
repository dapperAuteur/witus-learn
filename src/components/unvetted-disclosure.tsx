import Link from "next/link";

// The "live but unvetted" disclosure (plans/52, `allow_unvetted_public`). Shown on the course
// landing page and every lesson of a course the owner opened before its review finished. The
// honesty is the point: this catalog's citation review is a visible trust signal, so a course
// that skipped ahead of it must say so on the page, in plain words, with a link to what the
// review is — never a silent quiet opening.
export function UnvettedDisclosure() {
  return (
    <p className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-200">
      <span aria-hidden="true">🔎</span> This course is open while its review is still in
      progress. Every course here gets a source-by-source citation review before it is marked
      reviewed; this one has not finished that process yet.{" "}
      <Link href="/help/vetting-and-coming-soon" className="underline hover:no-underline">
        How review works
      </Link>
    </p>
  );
}
