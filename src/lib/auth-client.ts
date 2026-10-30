import { magicLinkClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

// Browser client. baseURL defaults to the current origin, which is correct for
// each tenant domain (the magic-link is sent for whatever host the user is on).
export const authClient = createAuthClient({
  // No genericOAuthClient(): better-auth 1.7 removed it. WitUS SSO starts through
  // the standard signIn.social({ provider: "witus" }) API.
  plugins: [magicLinkClient()],
});
