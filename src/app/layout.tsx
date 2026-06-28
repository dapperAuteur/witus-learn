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
        {children}
      </body>
    </html>
  );
}
