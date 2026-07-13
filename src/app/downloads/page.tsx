import type { Metadata } from "next";
import { OfflineDownloadsManager } from "@/components/offline-downloads-manager";

export const metadata: Metadata = { title: "Your downloads" };

/**
 * The Downloads manager: everything saved to THIS device, across every course, with a remove
 * control at each level (lesson, section, course, everything) and the storage it's using.
 *
 * Deliberately OUTSIDE the `(tenant)` route group — like `/offline`. That group's layout resolves
 * the tenant from the host and hits the DB; a page that depends on that is unrenderable exactly
 * when the learner needs it. This one makes NO tenant, session or DB call, so:
 *   • the service worker's install-time `cache.add("/downloads")` always succeeds and is cheap;
 *   • the cached HTML is brand-neutral, so a single copy is correct on every tenant domain;
 *   • serving it from cache with no network is total — every row below is read client-side from
 *     the browser's own Cache API + localStorage manifest, with no fetch of any kind.
 * (It is still marked `ƒ` dynamic in the build, because the ROOT layout is dynamic — same as
 * `/offline`. That's irrelevant to offline behaviour: the SW caches the response, not the
 * rendering strategy.)
 */
export default function DownloadsPage() {
  return (
    <main id="main-content" className="mx-auto max-w-2xl px-4 py-10">
      {/* Real <a> (not next/link): offline, we want a hard navigation the service worker can
          answer from cache — a client-side RSC fetch would just fail. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/" className="text-sm text-neutral-500 hover:underline">
        ← Back
      </a>
      <h1 className="mt-6 text-2xl font-bold">Your downloads</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Lessons you&rsquo;ve saved to this device. They work with no connection — and you can remove
        anything you don&rsquo;t need any more to free up space. This list lives on your device, so
        it&rsquo;s different on each phone or computer you use.
      </p>
      <OfflineDownloadsManager />
    </main>
  );
}
