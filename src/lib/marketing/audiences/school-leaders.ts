import type { AudienceLandingContent } from "../audience-landing";

// School leaders: the principal, curriculum director, district administrator, or after-school
// program director deciding whether to adopt or run a school here. What they need is defensible
// material, standards evidence they can file, and a school that is unmistakably theirs. Every claim
// below is a real platform feature or the real standards data rendered on every course page. No
// invented outcomes, no efficacy numbers, no ROI, no testimonials.
export const SCHOOL_LEADERS_LANDING: AudienceLandingContent = {
  slug: "school-leaders",
  eyebrow: "For school leaders",
  title: "Run your own school, on your own domain, that you can defend to a board",
  subtitle:
    "Your brand, your domain, isolated from every other school on the platform. Cited curriculum, standards evidence you can put in a filing, and live classes with attendance, a parent view, and verified credentials anyone can check.",
  metaDescription:
    "A white-label school for districts and leaders: your own domain, cited curriculum, per-state standards evidence for filings, live classes, attendance, a parent view, and a no-signup demo.",
  primaryCta: { href: "/demo", label: "Try the live demo →" },
  secondaryCta: { href: "/platform", label: "How the platform works" },
  valueProps: [
    {
      icon: "🏫",
      title: "Your brand, your domain, strictly isolated",
      body:
        "A school runs on its own domain with its own branding. Learners, teachers, and parents see your name, never the platform underneath it, and never any other school's content. Isolation between schools is the core invariant, not a setting you have to remember to turn on.",
    },
    {
      icon: "🎓",
      title: "Standards evidence you can hand a board or put in a filing",
      body:
        "Each course shows the standards it meets, by state, under its description. Open /academic-standards, pick your state, and print a per-course list for an adoption filing. Partial coverage is labeled partial, never dressed up as full.",
    },
    {
      icon: "📎",
      title: "Curriculum you can defend to a parent",
      body:
        "Every course is cited to real sources, with in-line citations and a bibliography. When a parent or a board member asks how a claim is known, the answer is on the page, not in a vendor's brochure.",
    },
    {
      icon: "🔴",
      title: "Live classes, cohorts, and attendance",
      body:
        "Teachers run live sessions with attendance and organize students into private cohorts by class. You get the structure of a real program, not just a video library.",
    },
    {
      icon: "👪",
      title: "A parent view and a kid-friendly login",
      body:
        "Younger learners sign in with a class code and a PIN, no email required. Parents get a view into what their child is doing, so families can follow along without a separate account for every task.",
    },
    {
      icon: "✅",
      title: "Verified credentials, checkable by anyone",
      body:
        "Every completion issues a credential with a public verification link, so a certificate can be confirmed against your school rather than just claimed. Useful when a registrar or a parent needs proof.",
    },
  ],
  faq: [
    {
      q: "Will our school look like ours, or like the platform's?",
      a: "Like yours. A school runs on its own domain with its own branding, and it is isolated from every other school on the platform, so your learners and parents never see another brand or another school's content.",
    },
    {
      q: "Are the standards alignments real, or marketing?",
      a: "They are computed from a committed standards file, not asserted by hand. Every quoted standard was transcribed from its publisher, partial coverage is labeled partial, and a course that is not analyzed yet shows nothing rather than a fake zero. You can read exactly which standards a course claims, per state, on /academic-standards.",
    },
    {
      q: "Can we evaluate it before committing anything?",
      a: "Yes. A demo school, Acme Academy, needs no signup and no card, and lets you try the admin and teacher features end to end before you decide anything.",
    },
    {
      q: "What does it cost?",
      a: "Pricing depends on how your school uses it, so the honest answer is to start with the no-signup demo and talk from there. There are no invented list prices here.",
    },
  ],
  closer: {
    title: "Evaluate a real school, standards and all, before you commit anything",
    body:
      "The Acme Academy demo lets you open courses, read their citations, check the standards they meet by state, and try the admin and teacher tools, with no signup and no card.",
  },
};
