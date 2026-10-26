import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  // The build's type-check covers the app only (tsconfig.build.json). scripts/ (325 course data
  // files, about 53 MB) and tests/ are checked by `pnpm typecheck` in CI on every pull request;
  // checking them inside the build pushed the TypeScript step past Vercel's 45-minute limit on a
  // 4-core, 8 GB machine (2026-10-25).
  typescript: { tsconfigPath: "tsconfig.build.json" },
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
  // PostHog ingest is proxied through our own origin (`/ingest`) so ad blockers that match on the
  // vendor hostname don't drop events. PostHog's endpoints use trailing slashes, and Next would 308
  // them away before the rewrite runs, so trailing-slash redirects are turned off here. That is
  // global, so src/proxy.ts puts the old "/page/ → /page" redirect back for every page route
  // (it skips /ingest and /api), which keeps one URL per page without per-page canonicals.
  // Spec: witus-online lib/analytics/INTEGRATE.md step 2. The shared project is US region.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      // /static must come first: assets come from a different upstream host than ingest.
      { source: "/ingest/static/:path*", destination: "https://us-assets.i.posthog.com/static/:path*" },
      { source: "/ingest/:path*", destination: "https://us.i.posthog.com/:path*" },
    ];
  },
  async redirects() {
    return [
      { source: "/standards", destination: "/academic-standards", permanent: true },
      { source: "/standards/:path*", destination: "/academic-standards/:path*", permanent: true },
    ];
  },
  // Framing policy (plans/embeddable-widget-backlog.md "Security — framing"): the /embed/*
  // family is the ONLY surface a third-party site may iframe (the paste-anywhere course card
  // and the trusted-consumer course view), so it alone gets `frame-ancestors *`. Every other
  // route is clickjacking surface (login, admin, checkout) and is pinned to same-origin
  // framing with both the CSP directive and the legacy X-Frame-Options. The split is done with
  // two disjoint source matchers rather than an override pair because X-Frame-Options has no
  // "allow everyone" value to override WITH — omitting it on /embed/* is the only correct form.
  async headers() {
    return [
      {
        source: "/embed/:path*",
        headers: [{ key: "Content-Security-Policy", value: "frame-ancestors *" }],
      },
      {
        // Everything that is not under /embed/. Negative lookahead keeps the two rules disjoint.
        source: "/((?!embed/).*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
        ],
      },
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
