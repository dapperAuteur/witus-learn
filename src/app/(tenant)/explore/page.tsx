import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { ogImageUrl } from "@/lib/og";
import { listBelts, listCommodities, tenantHasMapData } from "@/db/queries/map";
import {
  countPublicCourses,
  getCurriculumStats,
  getEpisodeFacts,
  getExploreCopy,
  getMostCitedCourse,
  summarizeMap,
} from "@/db/queries/explore";
import { type MapPin } from "@/components/commodity-map";
import { type MapBelt } from "@/components/growing-belts-map";
import { MapTabs } from "@/components/map-tabs";
import { EpisodeExplorer } from "@/components/episode-explorer";
import { PricingContactForm } from "@/components/pricing-contact-form";

// ─────────────────────────────────────────────────────────────────────────────
// /explore — the landing page for the map curriculum.
//
// THE RULE THIS PAGE LIVES BY: every number and every noun below is either (a) counted
// out of THIS tenant's own rows, (b) a real, checked citation in the Sources block, or
// (c) a description of behaviour that demonstrably exists in this repo. There are no
// invented statistics, no efficacy claims, no testimonials, and no standards-alignment
// claims — this page sells children's education to parents and teachers, so an
// unverifiable sentence is a defect, not a flourish. If you add a claim, bring its receipt.
//
// The map stays the centrepiece: the hero is deliberately short, the map renders
// immediately after it, and both CTAs point back at it. Never demote it to a catalog.
//
// Multi-tenant: every query is tenant-scoped; the prose is either derived from the
// tenant's own row or overridden per-tenant via platform_settings (see getExploreCopy).
// Nothing here hardcodes one brand's voice or one brand's numbers.
// ─────────────────────────────────────────────────────────────────────────────

function plural(n: number, singular: string, pluralForm?: string): string {
  return n === 1 ? singular : (pluralForm ?? `${singular}s`);
}

export async function generateMetadata(): Promise<Metadata> {
  const tenant = await requireTenant();
  if (tenant.flags.commodityMap === false || !(await tenantHasMapData(tenant.id))) {
    return { title: "Explore" };
  }

  const [commodities, copy] = await Promise.all([
    listCommodities(tenant.id),
    getExploreCopy(tenant),
  ]);
  const map = summarizeMap(commodities, []);
  const brand = brandName(tenant);

  // Tenant-scoped SEO: title, description and OG card all resolve from THIS brand's row
  // and THIS brand's rows. Another brand on another domain gets its own — OG/JSON-LD is a
  // known cross-tenant leak vector in this repo, so nothing here may be hardcoded.
  const description =
    map.commodities > 0
      ? `${map.commodities} ${plural(map.commodities, "episode")} from ${map.origins} ${plural(map.origins, "origin")} around the world, each one a cited, source-checked course from ${brand}.`
      : copy.subhead;

  // Share this page and the preview IS the map — /api/og?map=1 renders this tenant's own pins on
  // the same Natural Earth projection the page uses. The route reads the pins for the tenant it
  // resolves from the host, so a brand can only ever get its own map on its own card.
  const image = ogImageUrl({ title: copy.headline, subtitle: brand, map: true });
  return {
    title: copy.headline,
    description,
    openGraph: { type: "website", title: copy.headline, description, images: [image] },
    twitter: { card: "summary_large_image", title: copy.headline, description, images: [image] },
  };
}

export default async function ExplorePage() {
  const tenant = await requireTenant();
  if (tenant.flags.commodityMap === false || !(await tenantHasMapData(tenant.id))) notFound();

  const [rows, beltRows, copy, stats] = await Promise.all([
    listCommodities(tenant.id),
    listBelts(tenant.id),
    getExploreCopy(tenant),
    getCurriculumStats(tenant.id),
  ]);

  // How many pins actually open a full course — tenant-scoped, so a pin somehow pointing
  // at a foreign course contributes nothing rather than inflating the number.
  const courseIds = rows.map((c) => c.courseId).filter((id): id is string => !!id);
  const [pinCourses, citedCourse, episodeFacts] = await Promise.all([
    countPublicCourses(tenant.id, courseIds),
    getMostCitedCourse(tenant.id),
    // Per-episode lesson/source counts, so clicking a pin can reveal what the episode actually
    // contains instead of throwing the visitor into the course. Tenant-scoped (see the query).
    getEpisodeFacts(tenant.id, courseIds),
  ]);

  const map = summarizeMap(rows, beltRows);
  const brand = brandName(tenant);

  const pins: MapPin[] = rows.map((c) => {
    const facts = c.courseId ? episodeFacts.get(c.courseId) : undefined;
    return {
      id: c.id,
      name: c.name,
      geo: c.geo,
      lat: c.lat,
      lon: c.lon,
      color: c.color,
      seasonNumber: c.seasonNumber,
      isHome: c.isHome,
      courseId: c.courseId,
      episodeLabel: c.episodeLabel,
      summary: c.summary,
      lessons: facts?.lessons ?? 0,
      sources: facts?.sources ?? 0,
    };
  });
  const belts: MapBelt[] = beltRows.map((b) => ({
    id: b.id,
    name: b.name,
    color: b.color,
    seasonNumber: b.seasonNumber,
    latMin: b.latMin,
    latMax: b.latMax,
    productionCountryCodes: b.productionCountryCodes,
    description: b.description,
  }));

  // Structured data — brand + items from the resolved tenant, never a hardcoded brand.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: copy.headline,
    description: copy.subhead,
    isPartOf: { "@type": "Organization", name: brand },
    ...(rows.length > 0
      ? {
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: rows.length,
            itemListElement: rows.slice(0, 25).map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.name,
            })),
          },
        }
      : {}),
  };

  // Every tile is a COUNT OF ROWS, not a marketing figure. A tile with nothing behind it
  // does not render — an empty map never gets to fake a full one.
  const tiles = [
    { value: map.commodities, label: `${plural(map.commodities, "episode")} on the map` },
    { value: map.origins, label: `${plural(map.origins, "origin")} worldwide` },
    { value: stats.lessons, label: `${plural(stats.lessons, "lesson")} to work through` },
    { value: stats.sources, label: `cited ${plural(stats.sources, "source")}` },
  ].filter((t) => t.value > 0);

  const card =
    "rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900";
  const primaryCta =
    "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12";
  const secondaryCta =
    "inline-flex min-h-11 items-center justify-center rounded-md border border-neutral-300 px-5 py-2.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 pointer-coarse:min-h-12";
  const textLink = "font-medium underline focus-visible:outline-2 focus-visible:outline-offset-2";
  const accent = { color: "var(--accent)" };

  const faqs = [
    copy.audience
      ? {
          // BAM's answer, verbatim in substance: high school. We do not dress it up with an age
          // range in years or claims about younger learners — he has not made those calls.
          q: "Who is this designed for?",
          a: `${copy.audience}. If you are teaching a different age group and want to know whether it fits, ask us below — we would rather tell you honestly than have you find out after you have planned around it.`,
        }
      : null,
    stats.courses > 0
      ? {
          q: "What does it cost?",
          a:
            stats.freeCourses === stats.courses
              ? `Every one of the ${stats.courses} ${plural(stats.courses, "course")} here is currently free. Each course page shows its own price. For a class, a co-op, or a school, pricing is a conversation — ask us below and we will answer with a number for the number of students you actually have.`
              : stats.freeCourses > 0
                ? `${stats.freeCourses} of the ${stats.courses} ${plural(stats.courses, "course")} here are free; the rest are paid. Every course page shows its price before you enrol. For a class, a co-op, or a school, ask us about pricing below.`
                : "Every course page shows its price before you enrol. For a class, a co-op, or a school, ask us about pricing below.",
        }
      : null,
    {
      // Time commitment: BAM has NOT set one, so this page does not print one. It would be easy
      // to add up lessons.duration_seconds and call it "hours per week" — and it would be a made-up
      // number that a parent might plan a school year around. Saying "not yet" is the honest answer.
      q: "How much time does it take each week?",
      a: "We have not published an hours-per-week figure yet, so we are not going to invent one — you would plan a school year around it. Go in any order and at your own pace in the meantime; when we have a number we can stand behind, it will be on this page. If you need to know now, ask us below and we will talk through what your week looks like.",
    },
    {
      q: "What do we need to get started?",
      a: "A web browser — phone, tablet, or computer. Signing in is a magic link sent to your email, so there is no password to remember.",
    },
    {
      q: "Can my child sign in without an email address?",
      a: "Yes. A child can sign in themselves with a class code, their animal avatar, and a PIN — no email account required. If you would rather they had no login at all, you can create a profile you manage for them and study as them from your own account.",
    },
    {
      q: "Can I use this with a class or a co-op?",
      a: "Yes. Create a cohort, invite students by email, and you get a roster, per-student progress and grades, and attendance taken automatically from who is present in the live session.",
    },
    {
      q: "Can I see how my student is doing?",
      a: "Yes. Link your child's account and your parent view shows their course progress, quiz and recall scores, certificates earned, and live-class attendance — read-only, and only for the children linked to you.",
    },
    stats.sources > 0
      ? {
          q: "How do I know the content is accurate?",
          a: `Every course publishes its bibliography, and individual claims are tracked against the source that backs them — ${stats.sources} ${plural(stats.sources, "source")} across the catalogue so far. Open any course, scroll to Sources, and check them. They are there to be used, not admired.`,
        }
      : null,
    tenant.requiresAgeGate
      ? {
          q: "Is there an age restriction?",
          a: `${brand} asks visitors to confirm their age before entering, and some individual courses carry their own age gate as well.`,
        }
      : null,
  ].filter((f): f is { q: string; a: string } => f !== null);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1. What is this? Short on purpose — a returning learner is one tap from the map. */}
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest" style={accent}>
          {brand}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">{copy.headline}</h1>

        {/* The first question a homeschooling parent asks, answered before they have to scroll
            for it. Tenant-overridable (platform_settings.explore_audience) — see getExploreCopy. */}
        {copy.audience ? (
          <p
            className="mt-3 inline-flex rounded-full border px-3 py-1 text-sm font-medium"
            style={{ color: "var(--accent)", borderColor: "var(--accent)" }}
          >
            {copy.audience}
          </p>
        ) : null}

        <p className="mt-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          {copy.subhead}
        </p>
        {copy.intro ? (
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">{copy.intro}</p>
        ) : null}

        {tiles.length > 0 ? (
          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {tiles.map((t) => (
              <div
                key={t.label}
                className="rounded-xl border border-neutral-200 p-3 dark:border-neutral-800"
              >
                <dd className="text-2xl font-bold" style={accent}>
                  {t.value}
                </dd>
                <dt className="mt-0.5 text-xs leading-snug text-neutral-600 dark:text-neutral-400">
                  {t.label}
                </dt>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a href="#map" className={primaryCta} style={{ backgroundColor: "var(--accent)" }}>
            Open the map ↓
          </a>
          {stats.courses > 0 ? (
            <Link href="/courses" className={secondaryCta}>
              Browse all {stats.courses} {plural(stats.courses, "course")}
            </Link>
          ) : null}
        </div>
      </header>

      {/* 2. THE MAP — the signature surface. First thing after the hero, never buried. */}
      <section id="map" className="mt-10 scroll-mt-4" aria-labelledby="map-heading">
        <h2 id="map-heading" className="text-2xl font-bold">
          Start anywhere
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Every episode sits at its origin — tap a pin to read what it is about, right here. Switch
          to <strong>Growing Belts</strong> to see where each commodity is actually grown.
        </p>
        <div className="mt-5 min-w-0">
          {pins.length === 0 ? (
            <p className="text-neutral-500">The map dataset has not been seeded yet.</p>
          ) : (
            <MapTabs commodities={pins} belts={belts} />
          )}
        </div>
      </section>

      {/* 3. How it works — the actual path a learner walks through this app. */}
      <section className="mt-14" aria-labelledby="how-heading">
        <h2 id="how-heading" className="text-2xl font-bold">
          How it works
        </h2>
        <ol className="mt-5 grid gap-4 sm:grid-cols-3">
          {[
            {
              n: 1,
              t: "Tap a pin",
              d: "Each pin is one commodity, placed where it actually comes from. The map is the table of contents.",
            },
            {
              n: 2,
              t: "Read the episode",
              d: "The pin opens that commodity's story — where it began, who grows it, why it mattered — with its sources listed underneath.",
            },
            {
              n: 3,
              t: "Take the course",
              d: "From the episode, enrol in the full course: lessons, quizzes, and recall practice, with progress saved as you go.",
            },
          ].map((s) => (
            <li key={s.n} className={card}>
              <span
                aria-hidden
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: "var(--accent)" }}
              >
                {s.n}
              </span>
              <h3 className="mt-3 font-semibold">{s.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {s.d}
              </p>
            </li>
          ))}
        </ol>
        {pinCourses > 0 && pinCourses < map.commodities ? (
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            {pinCourses} of the {map.commodities} {plural(map.commodities, "pin")} currently open into
            a full course; the rest are episode pages while their courses are written.
          </p>
        ) : null}
      </section>

      {/* 4. What's actually on the map — the real list, named. No hand-waving. */}
      {rows.length > 0 ? (
        <section className="mt-14" aria-labelledby="what-heading">
          <h2 id="what-heading" className="text-2xl font-bold">
            What&apos;s on the map
          </h2>
          <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
            One thing you can hold, traced back to where it came from. Each one pulls in history,
            geography, economics, and science — because that is what it takes to explain it honestly.
            Pick any name to read what it covers.
          </p>
          {/* Selecting an episode opens it IN PLACE. It used to link straight into /episode/<id>,
              which ejected a visitor mid-page; now the detail is revealed here and opening the
              episode is a deliberate second step. */}
          <EpisodeExplorer pins={pins} />
          {map.beltCountries > 0 ? (
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              The <strong>Growing Belts</strong> view maps production regions for {map.belts}{" "}
              {plural(map.belts, "commodity", "commodities")} across {map.beltCountries}{" "}
              {plural(map.beltCountries, "country", "countries")}.
            </p>
          ) : null}
        </section>
      ) : null}

      {/* 5. Who it's for — three buyers, three genuinely different reasons to say yes. */}
      <section className="mt-14" aria-labelledby="who-heading">
        <h2 id="who-heading" className="text-2xl font-bold">
          Who it&apos;s for
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className={card}>
            <h3 className="font-semibold">Parents</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              A map is an invitation, not a worksheet. A kid who asks &ldquo;why is chocolate from
              there?&rdquo; has already started — and you can watch it land, because you get a
              read-only view of what they are actually doing.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-neutral-600 dark:text-neutral-400">
              <li>· Progress, quiz and recall scores, certificates earned</li>
              <li>· Kids can sign in with an avatar and a PIN — no email needed</li>
              <li>· Or no login at all: run a profile you manage for them</li>
            </ul>
            <Link href="/family" className={`${textLink} mt-3 inline-block text-sm`} style={accent}>
              The parent view →
            </Link>
          </div>

          <div className={card}>
            <h3 className="font-semibold">Teachers</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Run it as a class without rebuilding it. Create a cohort, invite your students by
              email, and work the map together — attendance is taken for you, from who actually turns
              up to the live session.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-neutral-600 dark:text-neutral-400">
              <li>· Cohorts with a roster and email invitations</li>
              <li>· Attendance from live-session presence</li>
              <li>· Per-student progress and grades</li>
            </ul>
            <Link href="/cohorts" className={`${textLink} mt-3 inline-block text-sm`} style={accent}>
              Run a cohort →
            </Link>
          </div>

          <div className={card}>
            <h3 className="font-semibold">Homeschoolers</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              You can teach this yourself. Every lesson names its sources, so you can check a claim,
              follow the citation, and answer the hard question when your student asks it — instead
              of taking a curriculum&apos;s word for it.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-neutral-600 dark:text-neutral-400">
              <li>· A full bibliography on every course</li>
              <li>· Go in any order — the map prescribes no starting point</li>
              <li>· Works for one learner or a whole co-op</li>
            </ul>
            <Link href="/courses" className={`${textLink} mt-3 inline-block text-sm`} style={accent}>
              See the courses →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Trust. The real differentiator — and it is demonstrable, so demonstrate it. */}
      <section className="mt-14" aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="text-2xl font-bold">
          Why you can trust it
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          The honest answer to &ldquo;how do I know this is true?&rdquo; is: don&apos;t take our word
          for it. Go and look. Every course carries its bibliography in public.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {stats.sources > 0 ? (
            <div className={card}>
              <p className="text-3xl font-bold" style={accent}>
                {stats.sources}
              </p>
              <h3 className="mt-1 font-semibold">cited {plural(stats.sources, "source")}</h3>
              <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                {stats.verifiedSources > 0
                  ? `${stats.verifiedSources} of them checked against the original and marked verified.`
                  : "Listed in full, with links, on each course page."}
              </p>
            </div>
          ) : null}

          {stats.claims > 0 ? (
            <div className={card}>
              <p className="text-3xl font-bold" style={accent}>
                {stats.claims}
              </p>
              <h3 className="mt-1 font-semibold">tracked {plural(stats.claims, "claim")}</h3>
              <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                Individual factual claims are logged against the source that supports them
                {stats.confirmedClaims > 0 ? `, and ${stats.confirmedClaims} are confirmed` : ""}. A
                claim we cannot stand up gets cut, not softened.
              </p>
            </div>
          ) : null}

          {stats.instructors > 0 ? (
            <div className={card}>
              <p className="text-3xl font-bold" style={accent}>
                {stats.instructors}
              </p>
              <h3 className="mt-1 font-semibold">named {plural(stats.instructors, "instructor")}</h3>
              <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                Real people with public profiles. Every course says who wrote it.
              </p>
              <Link
                href="/instructors"
                className={`${textLink} mt-2 inline-block text-sm`}
                style={accent}
              >
                Meet them →
              </Link>
            </div>
          ) : null}
        </div>

        {citedCourse ? (
          <p className="mt-5 text-sm">
            <Link href={`/course/${citedCourse.id}`} className={textLink} style={accent}>
              See it for yourself: the {citedCourse.sources}{" "}
              {plural(citedCourse.sources, "source")} behind &ldquo;{citedCourse.title}&rdquo; →
            </Link>
          </p>
        ) : null}
      </section>

      {/* 7. The approach — with real citations. These claims are about the METHOD's standing
             in the literature, NOT about outcomes we have never measured. */}
      <section className="mt-14" aria-labelledby="approach-heading">
        <h2 id="approach-heading" className="text-2xl font-bold">
          Why teach it this way
        </h2>
        <div className="mt-3 max-w-2xl space-y-3 text-neutral-700 dark:text-neutral-300">
          <p>
            Anchoring lessons in real places — and in the communities and economies attached to them
            — is a long-established approach in education, usually called{" "}
            <em>place-based education</em> (Smith, 2002; Sobel, 2004). The map is that idea made
            literal: the table of contents is a set of real locations.
          </p>
          <p>
            The citation habit is deliberate too. Researchers assessing students&apos; ability to
            judge online information have found that students frequently struggle to evaluate the
            credibility of the sources they encounter (McGrew et al., 2018). A course that shows its
            sources — and invites you to follow them — is a course a student can practise that
            judgement on.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            We make no claims about test scores or learning gains for this curriculum. We have not
            measured them, so we will not assert them.
          </p>
        </div>

        <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-neutral-500">
          Sources
        </h3>
        <ul className="mt-2 max-w-2xl space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <li className="wrap-break-word">
            McGrew, S., Breakstone, J., Ortega, T., Smith, M., &amp; Wineburg, S. (2018). Can
            students evaluate online sources? Learning from assessments of civic online reasoning.{" "}
            <em>Theory &amp; Research in Social Education, 46</em>(2), 165&ndash;193.{" "}
            <a
              href="https://eric.ed.gov/?id=EJ1179994"
              className={textLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              ERIC EJ1179994
            </a>
          </li>
          <li className="wrap-break-word">
            Smith, G. A. (2002). Place-based education: Learning to be where we are.{" "}
            <em>Phi Delta Kappan, 83</em>(8), 584&ndash;594.{" "}
            <a
              href="https://doi.org/10.1177/003172170208300806"
              className={textLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1177/003172170208300806
            </a>
          </li>
          <li className="wrap-break-word">
            Sobel, D. (2004). <em>Place-based education: Connecting classrooms and communities</em>.
            Orion Society.
          </li>
        </ul>
      </section>

      {/* 8. FAQ — ONLY questions this repo can answer truthfully. Cost, logins, cohorts and
             accuracy all come from real behaviour. What we cannot ground (recommended age
             range, hours per week, standards alignment) is ABSENT rather than guessed. */}
      <section className="mt-14" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-2xl font-bold">
          Questions
        </h2>
        <div className="mt-5 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-neutral-200 px-4 dark:border-neutral-800"
            >
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 py-3 font-medium focus-visible:outline-2 focus-visible:outline-offset-2">
                <span>{f.q}</span>
                <span
                  aria-hidden
                  className="shrink-0 text-xl text-neutral-400 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {f.a}
              </p>
            </details>
          ))}
        </div>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Something we haven&apos;t answered?{" "}
          <Link href="/help" className={textLink} style={accent}>
            Read the help centre
          </Link>
          , or{" "}
          <a href="#pricing" className={textLink} style={accent}>
            ask us directly
          </a>
          .
        </p>
      </section>

      {/* ── STANDARDS-ALIGNMENT INSERTION POINT ────────────────────────────────────────────
          A standards-alignment section belongs HERE (after the questions, before the pricing
          conversation): it is the last thing a school buyer checks before asking what it costs.
          Owned by a separate change (src/lib/standards.ts + its own section/page) — intentionally
          left empty rather than filled with a placeholder claim, because an unverifiable
          standards claim on a page that sells children's education is a defect, not a gap.
          ──────────────────────────────────────────────────────────────────────────────────── */}

      {/* 9. Pricing is a conversation. We do not print a number, because there is not one number:
             it depends on whether you are one family or a district. So we ask, and we answer. */}
      <section id="pricing" className="mt-14 scroll-mt-4" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="text-2xl font-bold">
          Ask us about pricing
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          One family, a co-op, a classroom, and a district are four different conversations, so we
          would rather have the conversation than post a number that is wrong for three of them.
          Tell us who you are teaching and we will come back to you with a straight answer.
        </p>
        <PricingContactForm />
      </section>

      {/* 10. Do the thing — and the thing is the map, where this page started. */}
      <section
        className="mt-14 rounded-2xl border-2 p-6 sm:p-8"
        style={{ borderColor: "var(--accent)" }}
      >
        <h2 className="text-2xl font-bold">Pick something you ate today</h2>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Then find out where it actually came from. That is the whole first lesson.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a href="#map" className={primaryCta} style={{ backgroundColor: "var(--accent)" }}>
            Back to the map ↑
          </a>
          {stats.courses > 0 ? (
            <Link href="/courses" className={secondaryCta}>
              Browse the courses
            </Link>
          ) : null}
          <Link href="/cohorts" className={secondaryCta}>
            Run it with a class
          </Link>
          <a href="#pricing" className={secondaryCta}>
            Ask about pricing
          </a>
        </div>
      </section>
    </main>
  );
}
