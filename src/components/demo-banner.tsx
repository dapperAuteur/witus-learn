// Shown at the top of every tenant page when the signed-in user is the shared demo
// account (src/db/queries/demo.ts's isDemoEmail). Sets expectations up front so a
// visitor never mistakes the shared sandbox for a private account.
export function DemoBanner() {
  return (
    <div
      role="status"
      className="border-b border-amber-300 bg-amber-50 px-4 py-2 text-center text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200"
    >
      You&apos;re in a shared demo account — anything you do here resets every night.
    </div>
  );
}
