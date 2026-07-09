// Single source of truth for the legal/education disclaimer. Learn.WitUS hosts
// user/instructor-authored courses across many topics (health, law, finance, etc.) — this text
// makes clear none of it is professional advice, and must be visible everywhere the content is:
// the site footer (every page), the chromeless `/embed/course/[id]` view (which strips all other
// site chrome), and every `/api/v1` JSON response (so a consumer like WanderLearn can render it in
// its own UI — see plans/wanderlearn-embed-integration.md, which requires consumers display it).
//
// Edit copy here ONLY — don't paraphrase inline at any call site, so every surface stays in sync.

export const DISCLAIMER_FULL =
  "This content is for informational and educational purposes only and is not professional advice (medical, legal, financial, or otherwise). Always do your own research and consult a qualified professional for your situation. Knowledge evolves. Science, laws, and best practices change over time. Therefore, verify against current sources.";

export const DISCLAIMER_SHORT =
  "For educational purposes only. NOT professional advice. Do your own research; science, laws, and best practices evolve.";
