import { NotFoundReport } from "@/components/not-found-report";
import { ErrorChrome } from "@/components/error-chrome";
import { ErrorContent } from "@/components/error-content";

// The one 404 page: unmatched URLs, notFound() anywhere (it is caught here, above the school layout),
// an unknown host, and a cross-tenant resource. It wears the school's own header and footer
// (ErrorChrome; neutral when there is no school), so a visitor can still sign in or find their way
// back. It must never reveal another brand's name or content (isolation rule): the chrome is the
// host's own school, and the message names nothing. Reports broken internal links to an admin.
export default function NotFound() {
  return (
    <ErrorChrome>
      <NotFoundReport />
      <ErrorContent
        code="404"
        title="Page not found"
        message="We couldn't find that page. It may have moved, or the link may be out of date."
      />
    </ErrorChrome>
  );
}
