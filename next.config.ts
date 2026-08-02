import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

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

// Wrap with Sentry's build plugin. It's safe with no Sentry env set: without SENTRY_AUTH_TOKEN it
// simply skips source-map upload (you just get minified stack traces), and the runtime SDK stays
// inert without a DSN. org/project/authToken come from env so nothing secret is committed here.
export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  silent: !process.env.CI,
  widenClientFileUpload: true,
  webpack: {
    // Strips the SDK's own debug logging from the bundle. Replaces the deprecated top-level
    // `disableLogger` option. Webpack-only, so it is a no-op under Turbopack (same as the old
    // flag was), but it silences the v10 deprecation warning.
    treeshake: { removeDebugLogging: true },
  },
});
