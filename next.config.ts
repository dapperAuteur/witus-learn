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
};

export default nextConfig;
