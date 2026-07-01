// Shown on "Read Your Body's Data" lessons. Links to our own handoff route, which mints a
// fresh single-use token server-side and redirects to the CentenarianOS metrics module — the
// learner lands already signed in (no second account). No token appears in this HTML.
export function MetricsTrackerCta() {
  return (
    <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/50">
      <p className="font-semibold">Your metrics tracker</p>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Log and review your daily body data in the CentenarianOS tracker. You&rsquo;ll be signed in
        automatically with your Learn.WitUS account — no separate login. Your metrics are stored in
        CentenarianOS.
      </p>
      {/* A real <a>, not next/link: this navigates to our API route, which mints a fresh
          token and 302s to an external host — a client-side <Link> can't follow that. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href="/api/integrations/centos/metrics"
        className="mt-3 inline-flex min-h-11 items-center rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{ backgroundColor: "var(--accent)" }}
      >
        Open your metrics tracker →
      </a>
    </div>
  );
}
