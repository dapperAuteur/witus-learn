// Curated, PUBLIC product roadmap for the /roadmap page — distinct from the internal, owner-only
// src/lib/roadmap.ts (which carries branch names and engineering detail). Same rules as the other
// recruiting pages: plain language, NO fabricated stats / dates / efficacy claims, and nothing
// promised that isn't a genuine direction. Buckets:
//   now       = shipped and usable today
//   building  = actively in progress
//   exploring = a real direction we're considering, NOT a commitment or a date
// Grounded in the internal roadmap's shipped (✅), in-progress (🔧/🔜) and not-started (⚪) items.

export type RoadmapStatus = "now" | "building" | "exploring";

export interface PublicRoadmapItem {
  title: string;
  body: string;
}

export const ROADMAP_STATUS_META: Record<RoadmapStatus, { label: string; blurb: string; emoji: string }> = {
  now: { label: "Available now", blurb: "Shipped and usable today.", emoji: "✅" },
  building: { label: "Building", blurb: "Actively in progress.", emoji: "🚧" },
  exploring: { label: "Exploring", blurb: "A direction we're considering, not a promise or a date.", emoji: "🔭" },
};

export const PUBLIC_ROADMAP: Record<RoadmapStatus, PublicRoadmapItem[]> = {
  now: [
    {
      title: "Cited courses you can trust",
      body: "Every claim ties to a real source, with an in-line citation and a full bibliography on each course. Open any course and check the receipts yourself.",
    },
    {
      title: "Standards alignment",
      body: "Courses are mapped to published state standards, shown per lesson with the exact code and the standard's own words, and marked honestly when a standard is only partly covered.",
    },
    {
      title: "The interactive map curriculum",
      body: "Start from a place on the map and follow a commodity's story into a full course. The map is the table of contents.",
    },
    {
      title: "AI tutor and chat with the sources",
      body: "Ask questions and get answers grounded in the course's own cited material, not a guess from the open internet.",
    },
    {
      title: "Quizzes, spaced recall, and self-checks",
      body: "Practice built to make learning stick, with your score history saved so you can see what you've mastered.",
    },
    {
      title: "Certificates anyone can verify",
      body: "Finish a course and earn a certificate with a public verification link, so a stranger can confirm you took it.",
    },
    {
      title: "Cohorts and live classes",
      body: "Run a class with a roster, invite students by email, and take attendance automatically from who joins the live session.",
    },
    {
      title: "A parent and guardian view",
      body: "Link your child's account and see their progress, scores, and certificates, read-only, and export a gradebook as CSV or PDF.",
    },
    {
      title: "Sign-in built for kids",
      body: "A child can sign in with an avatar and a PIN, no email required, or study under a profile you manage for them.",
    },
    {
      title: "Your own school, your own domain",
      body: "Run a branded school on your own domain. Learners see your brand, not \"WitUS,\" and the platform handles the DNS.",
    },
    {
      title: "Sell a course or a bundle",
      body: "Offer free, one-time, or subscription pricing, and group courses into a discounted bundle.",
    },
    {
      title: "Works offline",
      body: "Download lessons to keep learning without a connection. Your progress syncs when you're back online.",
    },
    {
      title: "Tell us when something's off",
      body: "A built-in button on every page to report a bug, ask a question, or suggest an idea, and see what happens to it.",
    },
  ],
  building: [
    {
      title: "In-app lesson recording",
      body: "Record a lesson's audio right in the app, offline-first, so a dropped connection never loses a take.",
    },
    {
      title: "Assessment quality checks",
      body: "Automatic checks that a self-check's answer actually matches the lesson it sits in, so a quiz measures learning, not test-taking.",
    },
    {
      title: "More teacher packets",
      body: "Printable, standards-aligned units for teachers that lead back to the full cited courses.",
    },
    {
      title: "Sturdier and more reliable",
      body: "Deeper error monitoring behind the scenes so problems get caught and fixed faster, plus ongoing mobile and accessibility polish.",
    },
    {
      title: "Find people and topics across courses",
      body: "Search that surfaces the same person, place, or idea everywhere it appears in the catalog.",
    },
  ],
  exploring: [
    {
      title: "Specialization credentials",
      body: "Stackable credentials for completing a whole track of courses, not just a single one.",
    },
    {
      title: "A documentarian program",
      body: "Bringing primary-source, on-the-ground reporting into the courses themselves.",
    },
    {
      title: "Richer media over time",
      body: "Resuming across multi-part audio, and video recording after audio lands.",
    },
    {
      title: "More maps and atlases",
      body: "New map layers and explorations beyond today's commodity map and language atlas.",
    },
  ],
};
