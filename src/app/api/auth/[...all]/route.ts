import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@/lib/auth";

// Better Auth handlers: magic-link request/verify, session, sign-out.
export const { GET, POST } = toNextJsHandler(auth);
