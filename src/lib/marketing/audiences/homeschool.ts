import type { AudienceLandingContent } from "../audience-landing";

// Homeschool families and co-ops/pods: a parent teaching at home, or an organizer running a pod for
// several families, who wants structure, records they can keep, and material they can trust. Every
// claim below is a real platform feature or the real standards data rendered on every course page.
// No invented outcomes, no efficacy numbers, no prices, and no claims about what any state requires.
export const HOMESCHOOL_LANDING: AudienceLandingContent = {
  slug: "homeschool",
  eyebrow: "For homeschool families",
  title: "Structure, records, and material you can trust, without building it yourself",
  subtitle:
    "Teach cited, standards-listed courses at home or run a private pod for your co-op. Progress, grades, and attendance are tracked for you, and a parent view lets you keep an eye on it without a spreadsheet.",
  metaDescription:
    "A homeschool LMS for families and co-ops: private pods, no-spreadsheet records, per-state standards, a kid-friendly login, cited courses, and a no-signup demo.",
  primaryCta: { href: "/demo", label: "Try the demo, no signup →" },
  secondaryCta: { href: "/explore", label: "Browse the courses" },
  valueProps: [
    {
      icon: "🏠",
      title: "A private pod for your family or co-op",
      body:
        "Make a private cohort, invite your students by email, and teach the group together. A homeschool pod stays its own space, separate from every other family on the platform.",
    },
    {
      icon: "🗂️",
      title: "Records without a spreadsheet",
      body:
        "Progress, quiz grades, certificates, and attendance are tracked as students work, so you are not copying scores into a notebook by hand. A parent view gives read-only oversight of what your child is doing.",
    },
    {
      icon: "🎓",
      title: "Standards each course meets, by state",
      body:
        "Every course lists the published standards it aligns to, per state, under its description, which can help if your state asks for a portfolio or reporting. Requirements differ by state, so check your own state's rules; the platform shows what a course covers, not what any state requires.",
    },
    {
      icon: "🧒",
      title: "A login a young child can use",
      body:
        "Younger learners sign in with a class code, an avatar, and a PIN, with no email needed. Older students can use an email login when they are ready.",
    },
    {
      icon: "📎",
      title: "Cited courses your student can trust",
      body:
        "Every course is cited to real sources, with in-line citations and a bibliography, so when your student asks how a claim is known, the answer is on the page. Save any lesson for offline, so learning does not stop when the internet does.",
    },
    {
      icon: "🔁",
      title: "Self-paced, with quizzes worth retaking",
      body:
        "Students work at their own pace, and answer choices shuffle while questions rotate from a larger pool, so a retake measures learning instead of a memorized answer key.",
    },
  ],
  faq: [
    {
      q: "Can I run this for my whole co-op, not just my own kids?",
      a: "Yes. Create a private cohort, invite each student by email, and teach the group together. The pod is its own space, isolated from other families on the platform.",
    },
    {
      q: "Will this help with our state's portfolio or reporting?",
      a: "Each course shows the standards it meets, by state, which you can print for your records. Homeschool requirements differ by state, so confirm what yours asks for; the platform reports what a course covers, and partial coverage is labeled partial, never dressed up as full.",
    },
    {
      q: "My youngest does not have an email address. Can they still sign in?",
      a: "Yes. Young learners sign in with a class code, an avatar, and a PIN, with no email required, so a child can get to their lessons on their own.",
    },
    {
      q: "What does it cost?",
      a: "Pricing depends on how your family or pod uses it, so the honest answer is to start with the demo, which needs no signup and no card, and go from there. There are no invented list prices here.",
    },
  ],
  closer: {
    title: "Open a real course, cited and standards-listed, before you enroll anyone",
    body:
      "The demo school lets you read a course and its citations, check the standards it meets by state, and try the family tools, with no signup and no card.",
  },
};
