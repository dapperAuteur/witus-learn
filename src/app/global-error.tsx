"use client";

import { useEffect } from "react";
import { reportClientError } from "@/lib/client-error";

// Root error boundary — catches errors thrown in the root layout itself. Renders its own
// <html>/<body>, stays neutral, auto-reports to an admin, and offers retry + a route back home.
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    reportClientError({ message: error.message || "Unhandled root error", digest: error.digest });
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
        }}
      >
        <main style={{ maxWidth: 480, padding: 24, textAlign: "center" }}>
          <h1 style={{ fontSize: 28, fontWeight: 700 }}>Service temporarily unavailable</h1>
          <p style={{ color: "#666", marginTop: 12 }}>
            We could not load this page, and our team has been notified. Please try again shortly.
          </p>
          <div style={{ marginTop: 16, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button type="button" onClick={reset} style={{ minHeight: 44, padding: "0 20px", borderRadius: 6 }}>
              Try again
            </button>
            {/* Root boundary renders its own <html> outside the router; a plain anchor is correct here. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" style={{ minHeight: 44, padding: "10px 20px", borderRadius: 6, border: "1px solid #ccc", textDecoration: "none", color: "inherit" }}>
              Back to home
            </a>
          </div>
          {error.digest ? (
            <p style={{ color: "#999", fontSize: 12, marginTop: 12 }}>Reference: {error.digest}</p>
          ) : null}
        </main>
      </body>
    </html>
  );
}
