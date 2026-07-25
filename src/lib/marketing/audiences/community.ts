import type { AudienceLandingContent } from "../audience-landing";

// Community, city, and program leaders who want to run their OWN school on the platform: an
// after-school program, a weekend school, a supplementary or community-education program under
// their community's own name and domain. Carries the "communities educating themselves" framing.
// Every claim below is a real platform feature. The heritage framing stays GENERAL and true: no
// invented dates, enrollment figures, or named-and-cited historical programs. Where specificity is
// wanted, it points to the cited courses in the catalog that actually teach this history.
export const COMMUNITY_LANDING: AudienceLandingContent = {
  slug: "community",
  eyebrow: "For community leaders",
  title: "Run your community's own school, under your own name",
  subtitle:
    "Communities have long built their own weekend schools, after-school programs, and supplementary schools to complement the public system. This is a modern tool for that: your program, your brand, your domain, with cited and standards-aligned courses you can stand behind to families and funders.",
  metaDescription:
    "For community, city, and program leaders: run your own school on your own domain with cited, standards-aligned courses, cohorts, live classes, attendance, and a demo with no signup.",
  primaryCta: { href: "/demo", label: "Try the live demo →" },
  secondaryCta: { href: "/platform", label: "How to run your own school" },
  valueProps: [
    {
      icon: "🏛️",
      title: "Your own school, on your own domain",
      body:
        "Run your program under your community's name and brand, on your own domain. Learners see your school, not the platform underneath it, and never encounter the other schools that share it.",
    },
    {
      icon: "🌱",
      title: "A long tradition, made practical",
      body:
        "Communities have always organized to educate themselves alongside the public system, in weekend schools, after-school clubs, and supplementary programs. This is a place to carry that work forward. The history itself is taught, with citations, inside courses in the catalog.",
    },
    {
      icon: "📎",
      title: "Cited courses you can defend",
      body:
        "Every claim in a course ties to a real source, with in-line citations and a bibliography. When a parent, a board, or a funder asks how you know, the answer is on the page.",
    },
    {
      icon: "🎓",
      title: "Standards shown by state",
      body:
        "Each course shows the published standards it meets, by state, under its description. Partial coverage is labeled partial, never dressed up as full, so what you show families and funders holds up.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Built to run a real program",
      body:
        "Organize learners into cohorts, teach live classes, take attendance, and give parents a view of progress. Younger learners get a kid-friendly login built for how children actually sign in.",
    },
    {
      icon: "🤖",
      title: "An AI tutor grounded in your content",
      body:
        "Learners can ask questions and get answers drawn only from what your courses actually teach and their sources, not the open internet.",
    },
  ],
  faq: [
    {
      q: "Do learners and families see that this is a shared platform?",
      a: "No. Your school runs on its own domain under your own brand, and it is strictly isolated: a learner in your program never sees another program's courses, learners, or name. To families, it is simply your school.",
    },
    {
      q: "We are not a public school. Can we still align to standards?",
      a: "Yes. Each course shows the published standards it meets, by state, so an after-school or weekend program can show families and funders exactly what a course covers. A course that has not been analyzed yet shows nothing rather than a fake zero.",
    },
    {
      q: "What does it cost to run a program here?",
      a: "It depends on how you run it and how many learners you serve. The demo needs no signup and no card, so you can evaluate every feature first and then talk specifics.",
    },
  ],
  closer: {
    title: "See what your community's school could be, before you commit anything",
    body:
      "The demo school lets you open a course, read its citations, check the standards it meets, and try the tools for running a program, with a shared account and no signup.",
  },
};
