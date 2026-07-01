import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { resolveTenant } from "@/lib/tenant";
import { tenantMetadata, tenantViewport } from "@/lib/branding";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const host = h.get("x-forwarded-host") || h.get("host");
  const proto = h.get("x-forwarded-proto") || "https";
  const baseUrl = host ? `${proto}://${host}` : null;
  return tenantMetadata(await resolveTenant(), baseUrl);
}

export async function generateViewport(): Promise<Viewport> {
  return tenantViewport(await resolveTenant());
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
      </body>
    </html>
  );
}
