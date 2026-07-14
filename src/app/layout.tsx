import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { resolveTenant } from "@/lib/tenant";
import { tenantMetadata, tenantViewport } from "@/lib/branding";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import { OfflineOutboxFlusher } from "@/components/offline-outbox-flusher";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

/**
 * The ROOT layout runs on every route — including `/offline` and `/downloads`, which exist
 * precisely to work with no network and do no tenant/session/DB work of their own. Resolving the
 * tenant here hits the database, so a DB outage (or an offline client that somehow reaches the
 * origin) turned a decorative <title>/<meta> lookup into a 500 on EVERY page, the offline ones
 * included. Branding is cosmetic at this layer: `tenantMetadata`/`tenantViewport` already accept
 * `null` and fall back to neutral defaults, so degrade to those instead of taking the page down.
 *
 * Deliberately NOT fixed inside `resolveTenant()`: content pages SHOULD fail loudly when the DB is
 * unreachable. Swallowing it there would make `requireTenant()` 404 during an outage, quietly
 * serving "brand not found" instead of surfacing the real problem.
 */
async function tenantForChrome() {
  try {
    return await resolveTenant();
  } catch (err) {
    console.warn("[layout] tenant lookup failed — falling back to neutral branding", err);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const host = h.get("x-forwarded-host") || h.get("host");
  const proto = h.get("x-forwarded-proto") || "https";
  const baseUrl = host ? `${proto}://${host}` : null;
  return tenantMetadata(await tenantForChrome(), baseUrl);
}

export async function generateViewport(): Promise<Viewport> {
  return tenantViewport(await tenantForChrome());
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        {/* No-FOUC: apply the saved (or system) theme before the page paints. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var d=t==='dark'||(t!=='light'&&m);var e=document.documentElement;e.classList.toggle('dark',d);e.style.colorScheme=d?'dark':'light';}catch(e){}})();",
          }}
        />
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md px-4 py-2 font-medium text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
          style={{ backgroundColor: "var(--accent, #111)" }}
        >
          Skip to content
        </a>
        {children}
        <ServiceWorkerRegister />
        {/* Sends anything written while offline (today: /admin/future notes) as soon as there's a
            connection — on whatever page is open when it comes back, not just the one that queued
            it. Renders nothing; no-ops on an empty queue. See src/lib/offline-outbox.ts. */}
        <OfflineOutboxFlusher />
        {/* Vercel Web Analytics — privacy-friendly, cookieless page/route counts. No-ops off Vercel. */}
        <Analytics />
      </body>
    </html>
  );
}
