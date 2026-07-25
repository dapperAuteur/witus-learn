import type { AudienceLandingContent } from "../audience-landing";

// Teachers: the classroom teacher who wants cited, standards-aligned material they can actually
// stand behind, and a place to teach it. Every claim below is a real platform feature or the real
// standards data now rendered on every course page. No invented outcomes.
export const TEACHERS_LANDING: AudienceLandingContent = {
  slug: "teachers",
  eyebrow: "For teachers",
  title: "Material you can stand behind, in front of any class",
  subtitle:
    "Every course is cited to real sources, aligned to published standards, and honest about what it does and does not claim. Assign it, teach it live, or build your own on top of it.",
  metaDescription:
    "Cited, standards-aligned courses for teachers: every claim tied to a source, alignments you can hand an administrator, live classes and cohorts, and an AI tutor grounded in your content.",
  primaryCta: { href: "/demo", label: "Try the live demo →" },
  secondaryCta: { href: "/academic-standards", label: "See the standards a course meets" },
  valueProps: [
    {
      icon: "📎",
      title: "Every claim has a citation",
      body:
        "Lessons carry in-line citations and a bibliography, so when a student or a parent asks how you know, the answer is on the page. Where the sources disagree, the course teaches the disagreement instead of hiding it.",
    },
    {
      icon: "🎓",
      title: "Standards alignment you can hand an administrator",
      body:
        "Each course shows the standards it meets, by state, under its description. Open /academic-standards, pick your state, and print the list for a filing. Partial coverage is labeled partial, never dressed up as full.",
    },
    {
      icon: "🔴",
      title: "Teach it live, or assign it",
      body:
        "Run a live session with attendance, or assign a course and watch progress. Make a private cohort for one class and invite students by email.",
    },
    {
      icon: "🧭",
      title: "Quizzes that measure learning, not test-taking",
      body:
        "Answer choices shuffle every attempt, so a student cannot coast on position, and questions are checked so the correct answer is not simply the longest one. A quiz score means something.",
    },
    {
      icon: "🤖",
      title: "An AI tutor grounded in the course",
      body:
        "Students can ask questions and get answers drawn only from what the course actually teaches and its sources, not the open internet.",
    },
    {
      icon: "🛠️",
      title: "Build your own on top of it",
      body:
        "Author your own lessons, quizzes, and media, or adapt what is here. You keep the credit; students see your name as the instructor.",
    },
  ],
  faq: [
    {
      q: "How do I know the alignments are real and not marketing?",
      a: "They are computed from a committed standards file, not asserted by hand. Every quoted standard was transcribed from its publisher, and a course that is not analyzed yet shows nothing rather than a fake zero. You can read exactly which standards a course claims, per state, on its page and on /academic-standards.",
    },
    {
      q: "Can I use just one course, or do I have to adopt everything?",
      a: "One course is fine. Assign a single course to a single class; nothing forces you to take the rest of the catalog.",
    },
    {
      q: "What does it cost?",
      a: "Pricing depends on how you use it; the demo needs no signup and no card, so you can see every teacher feature first.",
    },
  ],
  closer: {
    title: "See a real course, cited and aligned, before you decide anything",
    body:
      "The demo school lets you open a course, read its citations, check the standards it meets, and try the teacher tools, with a shared account and no signup.",
  },
};
