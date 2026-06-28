"use client";

// Root error boundary — catches errors thrown in the root layout itself (e.g. a
// misconfigured environment on a fresh deploy). Renders its own <html>/<body> and
// stays neutral so it never reveals internals or another tenant's brand.
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
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
            We could not load this page. Please try again shortly.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{ marginTop: 16, minHeight: 44, padding: "0 20px", borderRadius: 6 }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
