import type { Metadata, Viewport } from "next";
import { resolveTenant } from "@/lib/tenant";
import { tenantMetadata, tenantViewport } from "@/lib/branding";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return tenantMetadata(await resolveTenant());
}

export async function generateViewport(): Promise<Viewport> {
  return tenantViewport(await resolveTenant());
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md px-4 py-2 font-medium text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
          style={{ backgroundColor: "var(--accent, #111)" }}
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
