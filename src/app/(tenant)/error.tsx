"use client";

import { ErrorBoundaryView } from "@/components/error-boundary-view";

// Error boundary for every school page. It sits INSIDE the (tenant) layout, so the school's own
// header and footer stay on the page around it (BAM, 2026-11-04: "all apps should include
// header/footer on 400/500 error pages"). An error in the layout itself goes to app/error.tsx.
export default function TenantError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <ErrorBoundaryView error={error} reset={reset} fallbackMessage="Unhandled client error" />;
}
