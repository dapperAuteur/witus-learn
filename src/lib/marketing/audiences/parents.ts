import type { AudienceLandingContent } from "../audience-landing";

// Parents and families: a parent choosing supplemental or primary courses for a child, who wants to
// watch progress and trust the material. Every claim below is a real platform feature (the parent
// view, the kid-friendly login, citations, the real standards data on every course page, the shuffled
// quizzes). No invented outcomes, no efficacy claims, no family stories.
export const PARENTS_LANDING: AudienceLandingContent = {
  slug: "parents",
  eyebrow: "For parents and families",
  title: "See what your child is learning, and trust where it comes from",
  subtitle:
    "Watch progress from a parent view built into the platform, sign a young learner in without an email, and read the sources behind every lesson. Use it alongside school or as your main curriculum; that choice is yours.",
  metaDescription:
    "A parent view of your child's progress, grades, and attendance, kid-friendly logins with no email, cited lessons, and standards by state. Look around the demo, no signup.",
  primaryCta: { href: "/demo", label: "Look around the demo →" },
  secondaryCta: { href: "/explore", label: "Browse the courses" },
  valueProps: [
    {
      icon: "👀",
      title: "A parent view, built in",
      body:
        "Read-only access to your child's progress, grades, credentials, and attendance. No separate app to install, no spreadsheet to keep, no logging in as them to check.",
    },
    {
      icon: "🔑",
      title: "A login a young child can manage",
      body:
        "A learner without an email signs in with a class code, an avatar, and a PIN. There is no password for you to reset and no account you have to create on their behalf.",
    },
    {
      icon: "📎",
      title: "Every claim has a source",
      body:
        "Lessons carry in-line citations and a bibliography, so you can see how the course knows what it teaches. Where the sources disagree, the course teaches the disagreement instead of hiding it.",
    },
    {
      icon: "🎓",
      title: "Standards, by state",
      body:
        "Each course shows which standards it meets, by state, under its description, so you can see how it lines up with school. Partial coverage is labeled partial, never dressed up as full.",
    },
    {
      icon: "🧭",
      title: "Quizzes that measure learning",
      body:
        "Answer choices shuffle on every attempt, so a child cannot memorize where the right answer sits, and questions are checked so the correct choice is not just the longest one. A score means something.",
    },
    {
      icon: "🧩",
      title: "Alongside school, or as the main course",
      body:
        "Add a single course to fill a gap, or build a full course load. The platform works either way, and nothing pushes you toward one or the other.",
    },
  ],
  faq: [
    {
      q: "Does this replace school?",
      a: "Only if you want it to. Many families use one or two courses to supplement what happens at school; others build a primary course load. Both are supported, and the choice stays with you.",
    },
    {
      q: "My child does not have an email address. How do they sign in?",
      a: "They do not need one. A young learner signs in with a class code, an avatar they pick, and a short PIN, so there is no email account to set up and no password for you to manage.",
    },
    {
      q: "How do I know the material is trustworthy?",
      a: "Every lesson cites the real sources behind its claims, and the standards a course meets are computed from a committed file rather than asserted by hand. You can open a course in the demo and read both before anyone signs up.",
    },
    {
      q: "What does it cost?",
      a: "Pricing depends on how you use it; the demo needs no signup and no card, so you can look around and see the parent view and the courses first.",
    },
  ],
  closer: {
    title: "Look around before you decide anything",
    body:
      "The demo lets you open a course, read its citations, check the standards it meets, and see how progress looks, all with a shared account and no signup.",
  },
};
