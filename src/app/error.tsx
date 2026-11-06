"use client";

import { NeutralChrome } from "@/components/neutral-chrome";
import { ErrorBoundaryView } from "@/components/error-boundary-view";

// Root route error boundary. It catches what (tenant)/error.tsx cannot: an error in the school layout
// itself, and errors on the routes outside it (login, verify, kids, embed). The school layout is
// not rendered here (it may be what failed), so the page brings the neutral header and footer, with
// Sign in, instead of rendering bare.
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <NeutralChrome>
      <ErrorBoundaryView error={error} reset={reset} fallbackMessage="Unhandled client error" />
    </NeutralChrome>
  );
}
