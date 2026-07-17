import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @neondatabase/serverless uses `ws` for websocket transport; its native
  // bindings get mangled by the build minifier unless externalized. Mirrors
  // the shop-witus / wanderlearn fix for `TypeError: b.mask is not a function`.
  serverExternalPackages: ["@neondatabase/serverless", "ws"],
  experimental: {
    // Lets the per-tenant role guards throw a clean 403 via forbidden()
    // instead of silently redirecting. Requires this flag in Next 16.
    authInterrupts: true,
  },
  // The state-standards finder moved from /standards to /academic-standards (and its explorer
  // sub-route with it). This 308 keeps every existing bookmark, external link, and OG share
  // resolving. It is a same-app route move, NOT a cross-tenant by-id/slug lookup, so a permanent
  // redirect is correct here — the isolation "never redirect" rule is about existence-leaking
  // tenant lookups, which this is not.
  async redirects() {
    return [
      { source: "/standards", destination: "/academic-standards", permanent: true },
      { source: "/standards/:path*", destination: "/academic-standards/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
