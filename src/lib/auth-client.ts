import { magicLinkClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

// Browser client. baseURL defaults to the current origin, which is correct for
// each tenant domain (the magic-link is sent for whatever host the user is on).
export const authClient = createAuthClient({
  plugins: [magicLinkClient()],
});
