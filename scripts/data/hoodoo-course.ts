// Authored "Hoodoo: A Tradition of Resistance", the PUBLIC cultural-history course on
// Learn.WitUS. Per BAM's decisions: framed as African American cultural history, spirituality,
// knowledge system, and resistance (NOT a practitioner how-to); cited to legitimate scholarship
// + public-domain sources; and seeded UNPUBLISHED, held until a knowledgeable reviewer/collaborator
// from the community signs off (see scripts/seed-courses.ts post-seed unpublish + plans/35).
//
// Respect + accuracy are the product here: Hoodoo is a living Black tradition that is frequently
// appropriated and commercialized. This course centers its history and the communities who created
// and carry it, distinguishes it clearly from Vodou/"Voodoo," and surveys practices as CULTURE and
// BELIEF (what they are and mean historically) rather than as instructions. Every content lesson is
// cited (APA 7 in-line + a `## Sources` bibliography) to scholars such as Hazzard-Donald, Chireau,
// Long, Raboteau, and Anderson, and to public-domain field studies (Puckett, 1926). The provided
// library (incl. the Hyatt Rootwork volumes) is treated as reference / Further Reading, not
// reproduced.

import type { AuthoredCourse } from "./authored-course";

export const HOODOO_COURSE: AuthoredCourse = {
  title: "Hoodoo: A Tradition of Resistance",
  description:
    "A respectful, historically grounded introduction to Hoodoo, the African American folk-spiritual tradition of conjure and rootwork. This is a CULTURAL-HISTORY course, not a how-to: it traces Hoodoo's West and Central African roots, its development under slavery as healing, protection, and resistance, its relationship to Christianity and the Bible, and its imprint on blues and Black American culture. It carefully distinguishes Hoodoo from Vodou/\"Voodoo,\" surveys its practices as belief and heritage rather than instruction, and reckons with commercialization and appropriation. Cited to scholarship (Hazzard-Donald, Chireau, Long, Raboteau, Anderson) and public-domain sources (Puckett, 1926). Authored to be reviewed by a knowledgeable member of the tradition before publication.",
  lessons: [
    // ── Section 1: What Hoodoo is (and isn't) ────────────────────────────
    {
      slug: "hoodoo-what-it-is",
      title: "1 · What Hoodoo is, and what it isn't",
      section: "Foundations",
      body: `**Hoodoo** is an African American **folk-spiritual tradition**, a body of practices for **healing, protection, luck, love, justice, and power** rooted in the experience of enslaved and free Black people in the American South. It is also called **conjure**, **rootwork**, **tricking**, or **working roots** (Chireau, 2003; Hazzard-Donald, 2013).

**A few important clarifications up front.**
- **Hoodoo is not a religion; it's a practice.** Unlike Vodou or Santería, Hoodoo has **no formal church, clergy, pantheon of deities, or initiation** required. Historically, most practitioners were (and are) **Christians** who saw conjure as compatible with their faith (Chireau, 2003).
- ⚠️ **Hoodoo is NOT the same as "Voodoo."** This is the single most common confusion. **Vodou (Haitian) and Vodun (West African)** are organized **religions** with deities (lwa/vodun), priesthoods, and liturgy. **Hoodoo** is an African American **folk practice**, a related but distinct thing. Popular culture blurred them (and sensationalized both); this course keeps them separate (Anderson, 2005).
- **It is a living tradition**, still practiced today, not a historical curiosity.

**Why study it as history?** Hoodoo is a window into how enslaved Africans and their descendants **preserved African knowledge, exercised agency, healed their communities, and resisted domination** when almost every other avenue was closed. That is the thread this course follows.

**A note on approach.** This course treats Hoodoo's practices as **culture and belief** (describing what they are and what they meant to people) rather than as instructions. And because Hoodoo is a **living Black tradition often appropriated by outsiders**, we center the scholarship of and about the communities who created it.

**Check yourself.** Name two ways Hoodoo differs from Vodou/"Voodoo," and explain why Hoodoo is described as a "practice" rather than a "religion."

## Sources
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.
- Anderson, J. E. (2005). *Conjure in African American society*. Louisiana State University Press.`,
    },

    // ── Section 2: African roots ─────────────────────────────────────────
    {
      slug: "hoodoo-african-roots",
      title: "2 · African roots and the Middle Passage",
      section: "Origins",
      recallContent: [
        {
          prompt:
            "Is Hoodoo a religion or a practice, and what does that tell you about clergy and deities?",
          answer:
            "It is a practice, not a religion. Hoodoo has no formal church, clergy, pantheon of deities, or required initiation, and most practitioners were Christians.",
        },
        {
          prompt: "Why is treating Hoodoo and 'Voodoo' as the same thing a mistake?",
          answer:
            "Vodou (Haitian) and Vodun (West African) are organized religions with deities and priesthoods, while Hoodoo is a related but distinct African American folk practice.",
        },
      ],
      body: `Hoodoo did not appear from nowhere. Its deepest roots reach back to the **spiritual and healing systems of West and Central Africa**, carried across the Atlantic in the memories of enslaved people (Hazzard-Donald, 2013; Raboteau, 1978).

**Central African (BaKongo) influence.** Scholars trace many core Hoodoo ideas to **Kongo cosmology**, especially the tradition of the **nkisi/minkisi**, consecrated objects that concentrate spiritual power for protection and healing. The Hoodoo **"mojo bag"** (also called a hand, toby, or gris-gris), a small charm bag of roots, minerals, and personal items, closely parallels the **minkisi** (Hazzard-Donald, 2013). Ideas about **the crossroads**, the spirit world, and the power of **graveyard dirt** also echo Kongo thought.

**West African influence.** From **West Africa** came traditions of **herbalism, ancestral reverence, divination, and the spiritual potency of words and objects**, knowledge that survived in altered form among the enslaved (Raboteau, 1978).

**Retention under pressure.** Enslavers tried to strip Africans of language, religion, and culture. But belief systems are portable: they survived in **memory, practice, and disguise**, blending African elements with what enslaved people encountered in America (European folk magic, Native American herb lore, and Protestant Christianity). The result was something **new and distinctly African American**: Hoodoo (Chireau, 2003).

⚠️ **A caution about specificity.** Because the enslaved came from many peoples and records are sparse, scholars debate exactly which practices trace to which origins. This course reports the **broad scholarly consensus** (strong Central-African/Kongo influence, plus West African and syncretic elements) and flags that finer claims are debated.

**Check yourself.** What African object is considered a likely ancestor of the Hoodoo "mojo bag," and from which region?

## Sources
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.
- Raboteau, A. J. (1978). *Slave religion: The "invisible institution" in the antebellum South*. Oxford University Press.
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.`,
    },

    // ── Section 3: Slavery, survival, resistance ─────────────────────────
    {
      slug: "hoodoo-resistance",
      title: "3 · Slavery, survival, and resistance",
      section: "Origins",
      recallContent: [
        {
          prompt:
            "Which Central African (Kongo) power object do scholars see as a likely ancestor of the mojo bag?",
          answer:
            "The nkisi (plural minkisi), a consecrated object that concentrates spiritual power for protection and healing.",
        },
        {
          prompt: "How did African belief systems survive enslavers' attempts to erase them?",
          answer:
            "They survived in memory, practice, and disguise, blending African elements with European folk magic, Native American herb lore, and Protestant Christianity into something new and distinctly African American.",
        },
      ],
      body: `Under slavery, Hoodoo was far more than folklore: it was a **tool of survival, healing, and resistance** for people denied power over their own lives (Chireau, 2003; Hazzard-Donald, 2013).

**Healing when no doctor would come.** Enslaved communities had little or no access to medical care. The **conjure doctor** or **root doctor**, often also a skilled **herbalist and midwife**, treated illness, delivered babies, and eased pain using plant knowledge partly inherited from Africa (Hazzard-Donald, 2013). This made the root doctor a figure of real authority within the quarters.

**Protection and autonomy.** Conjure offered a sense of **agency** in a system built to deny it: charms to avoid a whipping, to influence a cruel overseer, to protect a family, to find a lost person. Whether or not outsiders believed it "worked," it gave people a way to **act on their own behalf** (Chireau, 2003).

**Resistance.** Hoodoo intersected with resistance in real ways (Anderson, 2005):
- Enslavers genuinely **feared conjure and poisoning** by the enslaved, and laws and testimony reflect that fear.
- Conjure figures appear around acts of rebellion (some accounts tie spiritual practitioners to planned revolts), and belief in one's own protection could embolden resistance.
- Simply **maintaining an African-derived spiritual life** (in secret, against enslavers' efforts to control belief) was itself an act of cultural resistance.

This is why the tradition is often described, in the title of one study in the provided library, as a **"tradition of resistance."** Hoodoo carried **knowledge, healing, dignity, and defiance** through the darkest chapter of American history.

**Check yourself.** Describe two roles the conjure/root doctor played in enslaved communities, and one way Hoodoo connected to resistance.

## Sources
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.
- Anderson, J. E. (2005). *Conjure in African American society*. Louisiana State University Press.`,
    },

    // ── Section 4: Christianity & the Bible ──────────────────────────────
    {
      slug: "hoodoo-christianity",
      title: "4 · Hoodoo, Christianity, and the Bible",
      section: "Belief & Practice",
      recallContent: [
        {
          prompt: "What roles did the conjure or root doctor play in enslaved communities?",
          answer:
            "The root doctor was a healer, herbalist, and midwife who treated illness, delivered babies, and eased pain when no doctor would come, and was a figure of real authority.",
        },
        {
          prompt: "Name one way Hoodoo connected to resistance under slavery.",
          answer:
            "Enslavers feared conjure and poisoning, conjure figures appear around planned revolts, and keeping an African-derived spiritual life in secret was itself an act of cultural resistance.",
        },
      ],
      body: `One of Hoodoo's most distinctive features is its **deep intertwining with Christianity**, a point outsiders often miss (Chireau, 2003).

**Not a rival to the church.** For most practitioners historically, Hoodoo was **not** an alternative to Christianity but a **companion** to it. The same person might attend church on Sunday and consult a root doctor on Monday, seeing **no contradiction**: both drew on **spiritual power** to help with life's troubles (Chireau, 2003).

**The Bible as a book of power.** In Hoodoo, the **Bible itself is often treated as a powerful spiritual object**. Particular **Psalms** are associated with particular needs (protection, justice, favor), and scripture is used in workings, a practice sometimes called **"scriptural" or "Psalms" work.** Figures like **Moses** (who performed wonders and freed his people) are read as a kind of **conjurer**, and the Exodus story carried obvious power for enslaved people (Chireau, 2003; Hazzard-Donald, 2013).

**Why this matters.** This Christian dimension is central to understanding Hoodoo **on its own terms**, rather than through the sensational "black magic" lens popular culture imposed on it. For its practitioners, conjure was frequently a form of **faith in action**: asking God, saints, ancestors, and the spirit-charged natural world for help.

⚠️ **A note on framing.** This lesson describes **what practitioners believed and did**, historically and today, as a matter of culture and religion, not as a set of instructions to follow.

**Check yourself.** Explain how many practitioners reconciled Hoodoo with Christianity, and give one example of the Bible's role in the tradition.

## Sources
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.`,
    },

    // ── Section 5: Materia magica (cultural survey) ──────────────────────
    {
      slug: "hoodoo-materia",
      title: "5 · The materials of conjure: a cultural survey",
      section: "Belief & Practice",
      recallContent: [
        {
          prompt: "How did most historical practitioners relate Hoodoo to Christianity?",
          answer:
            "They treated conjure as a companion to their Christian faith, not a rival. The same person might attend church on Sunday and consult a root doctor on Monday, seeing no contradiction.",
        },
        {
          prompt: "Give one example of the Bible's role in Hoodoo.",
          answer:
            "The Bible is treated as a book of power: specific Psalms are tied to needs like protection or justice, and figures such as Moses are read as a kind of conjurer.",
        },
      ],
      body: `Hoodoo works with the **spiritual power believed to reside in the natural world**: roots, herbs, minerals, and everyday objects. This lesson **surveys** these materials as **culture and belief** (what they are and what they have meant), not as instructions.

**Roots and herbs.** The very name **"rootwork"** points to the centrality of plants. The most famous is **High John the Conqueror** root, associated with strength, luck, and mastering hardship, a symbol whose folklore (the trickster-hero "High John") carried hope through slavery (Hurston, 1935/as discussed in Chireau, 2003). Many other plants had specific associations in the tradition's folk pharmacopoeia.

**Charms and objects** (described as cultural artifacts):
- The **mojo bag / hand / toby**: a small flannel bag of roots, curios, and personal items, historically the signature Hoodoo charm (compare the Kongo *nkisi*; see Lesson 2).
- **Goofer dust** and **graveyard dirt**: materials associated with the spirits of the dead.
- **Foot-track magic**: beliefs about power in a person's footprints and the ground they walk.
- **The crossroads**: a spiritually charged place in the tradition, echoing Central African cosmology and later mythologized in blues (Lesson 8).

**Personal concerns.** Hoodoo often uses **personal items** (hair, a name written on paper, a photograph) on the belief that a connection to the person carries the working, an idea anthropologists call **contagious/sympathetic magic**, found in folk traditions worldwide (Puckett, 1926).

**The great field record.** Much of what we know about the *range* of these practices comes from the massive interviews collected by **Harry Middleton Hyatt** in the 1930s to 1940s (*Hoodoo-Conjuration-Witchcraft-Rootwork*, 5 vols.) and earlier by **Newbell Niles Puckett** (1926), invaluable **historical documentation** of a living tradition (available in the course library as reference).

**Check yourself.** Name three materials or concepts central to Hoodoo practice, and explain what "rootwork" refers to.

## Sources
- Puckett, N. N. (1926). *Folk beliefs of the Southern Negro*. University of North Carolina Press. (Public domain.)
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Hyatt, H. M. (1970-1978). *Hoodoo-conjuration-witchcraft-rootwork* (Vols. 1-5). Western Publishing. (Field documentation; reference.)`,
    },

    // ── Section 6: Regions & the Great Migration ─────────────────────────
    {
      slug: "hoodoo-regions-migration",
      title: "6 · Regional traditions and the Great Migration",
      section: "History & Spread",
      recallContent: [
        {
          prompt:
            "What does the name 'rootwork' point to, and what is the most famous root in the tradition?",
          answer:
            "It points to the centrality of roots and herbs. The most famous is High John the Conqueror root, associated with strength, luck, and mastering hardship.",
        },
        {
          prompt: "What is a mojo bag, and name one other material central to Hoodoo.",
          answer:
            "The mojo bag (also called a hand or toby) is a small flannel bag of roots, curios, and personal items. Other key materials include goofer dust, graveyard dirt, and the crossroads.",
        },
      ],
      body: `Hoodoo was never a single uniform system: it varied by **region, community, and family**, and it **traveled** with the people who carried it (Hazzard-Donald, 2013; Long, 2001).

**Regional homelands.** Hoodoo took especially deep root in the **Deep South**: the **Mississippi Delta**, and the **Low Country** of coastal South Carolina and Georgia, home to the **Gullah Geechee** people, whose relative isolation preserved unusually strong African retentions (Hazzard-Donald, 2013). Local traditions developed distinct herbs, names, and styles.

**The Great Migration.** Between roughly **1916 and 1970**, millions of Black Southerners moved to Northern and Western cities in the **Great Migration**. They carried Hoodoo with them into **Chicago, Detroit, New York, and beyond** (Long, 2001). In the cities, the tradition **changed**:
- It met the **cash economy** and mail order, giving rise to **spiritual-supply shops** and catalogs (Lesson 7).
- New institutions like **Spiritual churches** blended conjure, Catholicism, and Protestantism.
- Urban life reshaped which concerns people brought to conjure (jobs, rent, law, love in a new place).

**Change and continuity.** Some scholars (e.g., Hazzard-Donald, 2013) distinguish an **older, community-rooted "system"** from later **commercialized** forms. The tradition adapted (as living traditions do) while keeping its core: **using spiritual power to navigate a hard world.**

**Check yourself.** Where did Hoodoo take especially deep root in the South, and what did the Great Migration do to the tradition?

## Sources
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.
- Long, C. M. (2001). *Spiritual merchants: Religion, magic, and commerce*. University of Tennessee Press.`,
    },

    // ── Section 7: Commercialization & appropriation ─────────────────────
    {
      slug: "hoodoo-commerce-appropriation",
      title: "7 · Commercialization, appropriation, and ownership",
      section: "History & Spread",
      recallContent: [
        {
          prompt: "Where did Hoodoo take especially deep root in the South?",
          answer:
            "In the Deep South, especially the Mississippi Delta and the Low Country of coastal South Carolina and Georgia, home to the Gullah Geechee, whose isolation preserved strong African retentions.",
        },
        {
          prompt: "What did the Great Migration do to Hoodoo?",
          answer:
            "Millions of Black Southerners carried it into Northern and Western cities such as Chicago, Detroit, and New York, where it met the cash economy and mail order and gave rise to spiritual-supply shops.",
        },
      ],
      body: `As Hoodoo moved into cities and the marketplace, it faced two forces this course reckons with honestly: **commercialization** and **appropriation** (Long, 2001).

**The spiritual-supply business.** By the early 20th century, **spiritual-supply shops, drugstores, and mail-order catalogs** sold candles, oils, incense, roots, and charms to a largely Black clientele. Scholar **Carolyn Morrow Long** (*Spiritual Merchants*, 2001) documents how a **folk practice met mass production**: sometimes preserving knowledge and serving communities, sometimes selling cheap imitations of it. ⚠️ Notably, **many of the manufacturers and shop owners were not themselves part of the tradition**, profiting from a Black practice.

**Appropriation.** This raises the tradition's central modern tension. Hoodoo was **created by African Americans out of African heritage and the experience of slavery.** As it became visible and marketable, **outsiders increasingly packaged, sold, and taught it**, often stripped of its history and community, and blended with unrelated systems (note how some popular books even fuse "Voodoo" and "Hoodoo," a category error this course rejects). Many practitioners and scholars argue that **Hoodoo belongs to, and is best carried by, the Black community that created it**, and that engaging it respectfully means **honoring that origin** rather than treating it as a generic "magic" to be lifted (Chireau, 2003; Hazzard-Donald, 2013).

**Why this course is framed as it is.** These concerns are exactly why Learn.WitUS presents Hoodoo as **cultural history**: centering the tradition's own communities and scholarship, surveying practices as heritage rather than selling a how-to, and holding this course for **review by a knowledgeable member of the tradition** before publication.

**Check yourself.** What tension does commercialization create for Hoodoo, and what does "appropriation" mean in this context?

## Sources
- Long, C. M. (2001). *Spiritual merchants: Religion, magic, and commerce*. University of Tennessee Press.
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.`,
    },

    // ── Section 8: Hoodoo in music & culture ─────────────────────────────
    {
      slug: "hoodoo-music-culture",
      title: "8 · Hoodoo in blues, literature, and American culture",
      section: "Legacy",
      recallContent: [
        {
          prompt: "What tension does commercialization create for Hoodoo?",
          answer:
            "Spiritual-supply shops and mail-order catalogs sold to a largely Black clientele, but many manufacturers and owners were outsiders profiting from a Black practice, sometimes selling cheap imitations.",
        },
        {
          prompt: "What does 'appropriation' mean in the context of Hoodoo?",
          answer:
            "Outsiders package, sell, and teach a tradition created by African Americans, often stripped of its history. Many argue Hoodoo belongs to and is best carried by the Black community that created it.",
        },
      ],
      body: `Hoodoo's imprint on **American culture (especially Black American music and literature) is enormous**, even for people who never practiced it (Chireau, 2003).

**The blues.** Conjure runs all through the **blues**. Classic songs reference mojo hands, goofer dust, and roots. For example, Muddy Waters' **"(I'm Your) Hoochie Coochie Man"** name-checks the **mojo, the John the Conqueror root, and the seventh son** as sources of power. The famous legend of **Robert Johnson selling his soul at the crossroads** draws on the Hoodoo (ultimately Central African) idea of the **crossroads as a place of spiritual power**, later mythologized and sensationalized (Chireau, 2003).

**Literature.** **Zora Neale Hurston**, anthropologist and novelist, documented Hoodoo firsthand (*Mules and Men*, 1935; her 1931 study "Hoodoo in America") and wove it through her fiction, taking it seriously as culture rather than curiosity. Later writers like **Ishmael Reed** (*Mumbo Jumbo*) made conjure a lens on Black creativity and resistance.

**Today.** Hoodoo has seen a **resurgence**: in scholarship, in podcasts and media (the course library includes an interview with scholar **Dr. Katrina Hazzard-Donald**), and among a new generation reconnecting with ancestral practice. Debates about **authenticity, appropriation, and commercialization** (Lesson 7) are very much alive.

**The takeaway.** Hoodoo is not a footnote. It is a **root system** beneath a great deal of African American art, faith, and identity, a tradition of **knowledge, healing, and resistance** that helped a people survive and shaped a culture.

**Check yourself.** Give one example of Hoodoo in the blues and one writer who documented or drew on the tradition.

## Sources
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Hurston, Z. N. (1935). *Mules and men*. J. B. Lippincott. (Ethnographic account.)
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.`,
    },

    // ── Section 9: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "hoodoo-exercise",
      title: "9 · Practice: check your understanding",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Hoodoo history and culture, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Hoodoo is an African American folk-spiritual practice also called conjure or ___.",
            answer: "rootwork",
            accept: ["root work", "conjure"],
            explanation:
              "Hoodoo, conjure, and rootwork name the same African American folk-spiritual tradition of healing, protection, and power.",
          },
          {
            prompt:
              "Hoodoo is often confused with, but is DISTINCT from, the organized religion ___ (Haitian/West African).",
            answer: "Vodou",
            accept: ["voodoo", "vodun", "Voodoo", "Vodun"],
            explanation:
              "Vodou/Vodun are organized religions with deities and clergy; Hoodoo is an African American folk PRACTICE, a common but important distinction.",
          },
          {
            prompt:
              "Scholars trace the Hoodoo mojo bag to the Central African (Kongo) tradition of the ___ (power object).",
            answer: "nkisi",
            accept: ["minkisi", "nkisi/minkisi"],
            explanation:
              "The nkisi/minkisi, Kongo consecrated power objects, are considered likely ancestors of the mojo bag.",
          },
          {
            prompt:
              "Under slavery, the community healer and herbalist who also worked conjure was called the ___ doctor.",
            answer: "root",
            accept: ["conjure"],
            explanation:
              "The root (or conjure) doctor healed, delivered babies, and worked conjure, a figure of real authority in the quarters.",
          },
          {
            prompt:
              "Many Hoodoo practitioners were Christians who used the ___ (a book) and specific Psalms as sources of power.",
            answer: "Bible",
            accept: ["bible"],
            explanation:
              "Hoodoo is deeply intertwined with Christianity; the Bible and particular Psalms feature in scriptural work.",
          },
          {
            prompt:
              "TRUE or FALSE: Hoodoo and 'Voodoo' are two names for exactly the same thing.",
            answer: "false",
            explanation:
              "False. Vodou/Vodun are organized religions; Hoodoo is a distinct African American folk practice. Conflating them is a category error.",
          },
        ],
      },
    },

    // ── Section 10: Final quiz ───────────────────────────────────────────
    {
      slug: "hoodoo-quiz",
      title: "10 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "How is Hoodoo best described?",
            options: [
              "An organized religion with clergy and deities",
              "An African American folk-spiritual practice (conjure/rootwork) for healing, protection, and power",
              "A style of dance",
              "A dialect of English",
            ],
            correctIndex: 1,
            explanation:
              "Hoodoo is a folk PRACTICE, not a religion with clergy (historically practiced largely by Christians).",
            sourceLessonSlug: "hoodoo-what-it-is",
          },
          {
            prompt: "How does Hoodoo differ from Vodou/'Voodoo'?",
            options: [
              "They are identical",
              "Vodou/Vodun are organized religions with deities and clergy; Hoodoo is a distinct African American folk practice",
              "Hoodoo is older than all African religions",
              "Voodoo is practiced only in the U.S.",
            ],
            correctIndex: 1,
            explanation:
              "Conflating Hoodoo with Vodou is the most common error; they are related but distinct.",
            sourceLessonSlug: "hoodoo-what-it-is",
          },
          {
            prompt: "Which African tradition is a likely ancestor of the Hoodoo mojo bag?",
            options: [
              "The Egyptian pyramid",
              "The Central African (Kongo) nkisi/minkisi power object",
              "The Roman amulet",
              "None, it is purely European",
            ],
            correctIndex: 1,
            explanation:
              "Scholars link the mojo bag to Kongo minkisi, part of Hoodoo's strong Central African heritage.",
            sourceLessonSlug: "hoodoo-african-roots",
          },
          {
            prompt: "Under slavery, the root/conjure doctor most often also served as a…",
            options: [
              "Tax collector",
              "Healer, herbalist, and midwife",
              "Plantation owner",
              "Ship captain",
            ],
            correctIndex: 1,
            explanation:
              "Denied medical care, communities relied on the root doctor for healing, births, and conjure.",
            sourceLessonSlug: "hoodoo-resistance",
          },
          {
            prompt: "How did most historical practitioners relate Hoodoo to Christianity?",
            options: [
              "They rejected Christianity entirely",
              "They saw conjure as compatible with their Christian faith and used the Bible as a source of power",
              "Hoodoo forbade any religion",
              "Only non-Christians practiced it",
            ],
            correctIndex: 1,
            explanation:
              "Hoodoo is deeply intertwined with Christianity; the Bible and Psalms feature prominently.",
            sourceLessonSlug: "hoodoo-christianity",
          },
          {
            prompt: "What does 'rootwork' refer to?",
            options: [
              "Gardening for food",
              "The tradition's use of roots, herbs, and natural materials believed to hold spiritual power",
              "Tree surgery",
              "Genealogy research",
            ],
            correctIndex: 1,
            explanation:
              "The name reflects the centrality of roots and herbs (e.g., High John the Conqueror) in the practice.",
            sourceLessonSlug: "hoodoo-materia",
          },
          {
            prompt: "What did the Great Migration do to Hoodoo?",
            options: [
              "Ended it entirely",
              "Carried it into Northern and Western cities, where it met the cash economy and spiritual-supply shops",
              "Confined it to Africa",
              "Made it a federal religion",
            ],
            correctIndex: 1,
            explanation:
              "Millions of Black Southerners brought Hoodoo north, where it commercialized and adapted.",
            sourceLessonSlug: "hoodoo-regions-migration",
          },
          {
            prompt: "What tension does commercialization raise for Hoodoo?",
            options: [
              "It makes the practice illegal",
              "Outsiders often package, sell, and teach a Black tradition stripped of its history, an appropriation concern",
              "It has no effect on the tradition",
              "It turns Hoodoo into a sport",
            ],
            correctIndex: 1,
            explanation:
              "Scholars note that a practice created by African Americans was widely commercialized by outsiders, raising appropriation concerns.",
            sourceLessonSlug: "hoodoo-commerce-appropriation",
          },
          {
            prompt: "How did Hoodoo shape American culture?",
            options: [
              "It had no cultural impact",
              "It runs through the blues (mojo, crossroads) and Black literature (Hurston, Reed)",
              "It created jazz single-handedly",
              "It only influenced sports",
            ],
            correctIndex: 1,
            explanation:
              "Hoodoo imagery pervades the blues and appears throughout Black American literature.",
            sourceLessonSlug: "hoodoo-music-culture",
          },
          {
            prompt: "Why does this course present Hoodoo as cultural history rather than a how-to?",
            options: [
              "Because Hoodoo is fake",
              "To respect a living Black tradition, centering its communities and scholarship, and avoiding appropriation and unsafe instruction",
              "Because it is illegal to describe",
              "Because no sources exist",
            ],
            correctIndex: 1,
            explanation:
              "The cultural-history framing honors the tradition's origins, is grounded in scholarship, and avoids the harms of appropriation and how-to instruction.",
            sourceLessonSlug: "hoodoo-commerce-appropriation",
          },
        ],
      },
    },
  ],
};
