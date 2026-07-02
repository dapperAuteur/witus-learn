// Authored "Hoodoo & Rootwork: The Complete Study", a PRIVATE, owner-only comprehensive study
// course for the Learn.WitUS owner. This SUPPLEMENTS the public cultural-history course
// (scripts/data/hoodoo-course.ts → HOODOO_COURSE). Where the public v1 deliberately surveys
// practice only as belief and heritage, this version "uses ALL the content": it covers the FULL
// scope of Hoodoo, including the practice/rootwork dimension, as a comprehensive personal study.
//
// IMPORTANT. How this ships:
//   • This course is SEEDED UNPUBLISHED and held for the owner's private use (handled centrally;
//     do NOT wire publishing here, and do NOT edit seed-courses.ts to reference this file).
//   • Respect + accuracy remain the product. Hoodoo is a LIVING BLACK TRADITION, created by
//     African Americans out of African heritage and the experience of slavery, and it is frequently
//     appropriated and commercialized. This course CENTERS its African American origins and
//     communities, distinguishes it clearly from Vodou/"Voodoo," and, even in this fuller form,
//     describes workings as BELIEF and TRADITION (what practitioners do and why), never as medical,
//     legal, or professional advice, and never as a how-to for harming anyone.
//
// SOURCES / IP: Every content lesson is synthesized from the literature and cited (APA 7 in-line +
// a `## Sources` bibliography). NOTHING is reproduced verbatim from any book. Scholarly sources,
// Hazzard-Donald (2013), Chireau (2003), Long (2001), Raboteau (1978), Anderson (2005),
// Puckett (1926, public domain), Hurston (1935), and the Hyatt corpus (1970 to 1978), carry the
// factual/historical claims. Practitioner works (Yronwode, Casas, Moise, Shone, Alvarado, and
// scriptural-magic literature) are cited explicitly AS PRACTITIONER PERSPECTIVES, not as
// scholarship, so the reader can weigh them accordingly.
//
// SAFETY: ⚠️ flags mark anything ingestible, health-related, legal, or otherwise potentially
// harmful. This material is offered as cultural/spiritual study, not as medical, legal, or
// professional advice.

import type { AuthoredCourse } from "./authored-course";

export const HOODOO_COMPLETE_COURSE: AuthoredCourse = {
  title: "Hoodoo & Rootwork: The Complete Study",
  description:
    "A comprehensive, private study of Hoodoo, the African American folk-spiritual tradition of conjure and rootwork, covering its full scope from African roots through practice, materia magica, core workings, divination, regional forms, commerce, and its imprint on music and literature. Unlike the public cultural-history course, this fuller version surveys the practice/rootwork dimension itself, always framed as belief and tradition (what practitioners do and why) rather than as medical, legal, or professional advice or as any how-to for harm. It centers the tradition's African American origins and communities, distinguishes Hoodoo clearly from Vodou/\"Voodoo,\" and teaches the reader to read the sources, scholarly (Hazzard-Donald, Chireau, Long, Raboteau, Anderson, Puckett, Hurston, Hyatt) and practitioner (Yronwode, Casas, Moise, Shone, Alvarado), critically and respectfully. Authored for private study; safety and ethics flags throughout.",
  lessons: [
    // ── Section 1: Orientation ───────────────────────────────────────────
    {
      slug: "hcx-orientation",
      title: "1 · Orientation: how to use this private study",
      section: "Orientation",
      body: `Welcome. This is a **comprehensive, private study of Hoodoo**, the African American folk-spiritual tradition also called **conjure**, **rootwork**, **tricking**, or **working roots** (Chireau, 2003; Hazzard-Donald, 2013). It is the companion to the public *"Hoodoo: A Tradition of Resistance"* cultural-history course. Where that course deliberately surveys practice only as heritage, this one **uses the full scope of the material** (including the practice/rootwork dimension) for serious personal study.

**Who and what this is for.** This is a **private study module**, held **unpublished**, for one learner. That freedom carries responsibility, so this course keeps the same commitments the public one does:

- **It centers the tradition's African American origins and the communities who created and carry it.** Hoodoo was forged by enslaved and free Black people in the American South out of African heritage. It is theirs. Studying it means honoring that, not extracting from it (Hazzard-Donald, 2013).
- ⚠️ **Hoodoo is NOT the same as "Voodoo."** **Vodou (Haitian)** and **Vodun (West African)** are organized **religions** with deities, priesthoods, and liturgy. **Hoodoo** is an African American **folk practice**, related but distinct. Popular culture fused and sensationalized them; this course keeps them separate (Anderson, 2005). We return to this in every section.
- **Practices are described as belief and tradition** (what practitioners do and what it means to them), not as guarantees, and not as advice.

**⚠️ Standing safety and scope disclaimers (read once, apply throughout).**
- This is **not medical advice.** Hoodoo's herbal lore overlaps real pharmacology; some plants are toxic. **Nothing here is a treatment.** Consult a licensed clinician for health matters.
- This is **not legal advice.** Some historical materials (e.g., graveyard dirt, certain minerals, wildlife parts) carry **legal** issues today; some acts (trespass, harassment) are crimes regardless of intent.
- **No "harming" how-to.** The tradition includes hostile workings (crossing, jinxing). This course **describes that they exist and what they meant**, and refuses to frame them as step-by-step instruction to injure a real person. Ethics are covered in Section 12.

**How to read the sources (a skill you'll build).** This course leans on two kinds of writing, and keeps them clearly labeled:
1. **Scholarship**: historians, anthropologists, and folklorists (Hazzard-Donald, Chireau, Long, Raboteau, Anderson, Puckett, Hurston) and the great field record of **Harry Middleton Hyatt** (1970 to 1978). These carry the **factual and historical** claims.
2. **Practitioner literature**: living rootworkers and teachers (Yronwode, Casas, Moise, Shone, Alvarado, and scriptural-magic writers). These describe **what practice looks like from inside** and are cited **as practitioner perspectives**, which vary and sometimes disagree, not as settled fact.

**How this course is organized.** Twelve sections move from **roots → history → belief → materia → workings → divination → regions → commerce → the Hyatt corpus → culture → ethics.** A fill-in **exercise** and a final **quiz** close it out. Every content lesson ends with a **Check yourself** prompt and a cited **## Sources** list.

**Check yourself.** State the two kinds of sources this course uses and how it treats each; then name the single most important distinction to keep straight (hint: it is not "Voodoo").

## Sources
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.
- Anderson, J. E. (2005). *Conjure in African American society*. Louisiana State University Press.
- Hyatt, H. M. (1970 to 1978). *Hoodoo, conjuration, witchcraft, rootwork* (Vols. 1 to 5). Alma Egan Hyatt Foundation. (Field documentation; reference.)`,
    },

    // ── Section 2: African roots (deeper) ────────────────────────────────
    {
      slug: "hcx-african-roots",
      title: "2 · African roots: Kongo minkisi and West African systems",
      section: "Origins",
      body: `Hoodoo's deepest structure is **African**, carried across the Atlantic in the minds and bodies of enslaved people and reassembled under new conditions (Hazzard-Donald, 2013; Raboteau, 1978). This lesson goes deeper than a survey into the **specific African systems** scholars link to conjure.

**Central African (BaKongo) cosmology, the strongest thread.** Many scholars regard **Kongo** influence as especially formative (Hazzard-Donald, 2013):
- **The *nkisi* / *minkisi*.** A *nkisi* (plural *minkisi*) is a consecrated container (a bag, bundle, or figure) packed with *bilongo* (medicines: roots, minerals, earth, relics) and animated to **heal, protect, judge, or bind**. The Hoodoo **mojo bag** (hand, toby, gris-gris), a flannel packet of roots, curios, and personal items, "fed" and kept close, is widely read as a descendant of the *nkisi* (Hazzard-Donald, 2013; Chireau, 2003).
- **The Kongo cosmogram (*dikenga*)**: a cross-in-circle mapping the sun's course and the boundary between the living and the dead (the *kalunga* line / water). Scholars connect it to Hoodoo's charged **crossroads** and to the frequent use of **crosses, water, and reflective surfaces** (Hazzard-Donald, 2013).
- **The dead and the ground.** Kongo thought locates ancestral power below and across water, illuminating why **graveyard dirt** and **the footprint / the ground one walks** carry such weight in conjure.

**West African contributions.** From the many West African peoples enslaved in the South came (Raboteau, 1978; Anderson, 2005):
- **Deep herbalism and a "green pharmacy"**: botanical healing knowledge that made the root doctor a genuine practitioner of plant medicine.
- **The potency of words, names, and oaths**: spoken power, praise, and the moral weight of the sworn word.
- **Ancestral reverence and divination**: consulting the dead and reading signs, later refracted through Christian and folk forms.
- **Islamic threads.** Some enslaved West Africans were **Muslim**; scholars note possible contributions (written charms, the potency of sacred script) that may inform Hoodoo's later love of **paper, seals, and scripture** (Anderson, 2005).

**Creolization, not preservation-in-amber.** Hoodoo is not "African religion frozen." Under slavery, African systems **blended** with **European folk magic**, **Native American plant lore**, and **Protestant Christianity** to become something **new and distinctly African American** (Chireau, 2003). The African substrate is real and load-bearing; so is the American recombination.

⚠️ **A scholarly caution.** The enslaved came from many nations, and the record is thin and mediated. Scholars therefore report a **broad consensus** (strong Kongo influence + West African + syncretic elements) while **debating finer attributions**. Treat confident one-to-one "this came from exactly here" claims (common in popular books) with care.

**Check yourself.** Define *nkisi/minkisi* and explain, in two or three sentences, how it relates to the mojo bag. Then name one West African contribution distinct from the Kongo thread.

## Sources
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.
- Raboteau, A. J. (1978). *Slave religion: The "invisible institution" in the antebellum South*. Oxford University Press.
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Anderson, J. E. (2005). *Conjure in African American society*. Louisiana State University Press.`,
      recallContent: [
        {
          prompt:
            "The course's most important distinction: how does Hoodoo differ from Vodou/Vodun?",
          answer:
            "Hoodoo is an African American folk practice (conjure, rootwork). Vodou (Haitian) and Vodun (West African) are organized religions with deities, priesthoods, and liturgy. They are related but distinct.",
        },
        {
          prompt:
            "What two kinds of writing does this study rely on, and what does each provide?",
          answer:
            "Scholarship (historians, anthropologists, folklorists, and the Hyatt field record) carries the factual and historical claims. Practitioner literature shows what practice looks like from inside and is cited as practitioner perspective, not settled fact.",
        },
      ],
    },

    // ── Section 3: Development under slavery + resistance ────────────────
    {
      slug: "hcx-slavery-resistance",
      title: "3 · Development under slavery: healing, autonomy, resistance",
      section: "Origins",
      body: `Hoodoo took its recognizable American shape **in the crucible of slavery**, where it functioned as **healing, protection, autonomy, and resistance** for people denied power over their own bodies and lives (Chireau, 2003; Hazzard-Donald, 2013; Anderson, 2005).

**The conjure / root doctor.** Within the quarters, the **conjure doctor** (root doctor, two-head/"two-headed" doctor, one head for the seen world, one for the unseen) was often **healer, herbalist, midwife, counselor, and spiritual specialist** at once (Hazzard-Donald, 2013). With little or no access to white medicine, communities relied on this figure for **births, illness, injury, and trouble**, real authority in a world that granted the enslaved almost none.

**Conjure as autonomy.** Whether or not an outsider believed it "worked," conjure gave people a **means to act on their own behalf**: a charm to avoid the lash, to soften a cruel overseer, to keep a family together, to draw luck, to find what was lost (Chireau, 2003). In a system engineered to produce helplessness, that sense of **agency** was itself powerful.

**Conjure and resistance.** The record ties conjure to resistance in several registers (Anderson, 2005):
- **Enslavers feared it.** Fear of **poisoning and conjure** by the enslaved runs through court records, laws, and planter testimony, a fear the enslaved could sometimes turn to advantage.
- **Protection and revolt.** Belief in one's own spiritual protection could **embolden** defiance; conjure figures appear in and around accounts of planned rebellion (the case of **Gullah Jack**, tied to the 1822 Denmark Vesey conspiracy, is the most cited example).
- **Cultural survival as resistance.** Simply **keeping an African-derived spiritual life alive**, in secret and against enslavers' efforts to control belief, was an act of defiance.

**A complicated figure.** Scholarship (Anderson, 2005; Chireau, 2003) also records that conjurers were **feared as well as revered** within their own communities, a conjurer could be asked to **harm** as well as heal, and reputations cut both ways. Romanticizing the tradition flattens this; the honest history holds **both** the healer and the feared worker.

⚠️ **Historical, not instructional.** This lesson reports **what people did and believed** under slavery. It is not a manual, and the hostile side of conjure is treated as **history and ethics** (Section 12), not how-to.

**Check yourself.** List three roles the conjure/root doctor filled, and give two distinct ways conjure connected to resistance. Then note the "complicated figure" point in one sentence.

## Sources
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.
- Anderson, J. E. (2005). *Conjure in African American society*. Louisiana State University Press.`,
      recallContent: [
        {
          prompt:
            "What is a nkisi (plural minkisi), and what Hoodoo object is read as its descendant?",
          answer:
            "A nkisi is a Kongo consecrated container (a bag, bundle, or figure) packed with medicines (bilongo) and animated to heal, protect, judge, or bind. The Hoodoo mojo bag is widely read as its descendant.",
        },
        {
          prompt:
            "Hoodoo is not African religion frozen in amber. Which traditions blended under slavery to make it something new?",
          answer:
            "African systems (with a strong Kongo thread) blended with European folk magic, Native American plant lore, and Protestant Christianity to become something new and distinctly African American.",
        },
      ],
    },

    // ── Section 4: Christianity, Bible, Psalms ───────────────────────────
    {
      slug: "hcx-christianity-scripture",
      title: "4 · Christianity, the Bible, and scriptural (Psalms) work",
      section: "Belief & Practice",
      body: `A defining (and widely misunderstood) feature of Hoodoo is how **deeply Christian** most of its practitioners have been. Historically, Hoodoo was **not a rival to the church but a companion to it** (Chireau, 2003).

**Faith and conjure, together.** The same person might worship on Sunday and consult a root doctor on Monday and perceive **no contradiction**, both reached for **spiritual power** to meet life's troubles (Chireau, 2003). Understanding this Christian dimension is essential to seeing Hoodoo **on its own terms**, rather than through the sensational "black magic" lens imposed from outside.

**The Bible as an object of power.** In the tradition the **Bible itself** is treated as spiritually potent: carried, opened to specific passages, laid on the body, or kept in the home for protection (Chireau, 2003; Hazzard-Donald, 2013). Biblical figures are read through a conjure lens: **Moses** (who worked wonders, bested Pharaoh's magicians, and freed a people) is understood almost as an archetypal **conjurer**, and the **Exodus** narrative carried obvious power for the enslaved.

**Scriptural / "Psalms" work.** A major strand of Hoodoo pairs **specific Psalms and verses with specific needs**: protection, justice, favor, peace in a home, safe travel. Practitioner literature (cited here **as practitioner perspective**, not scholarship, e.g., **Yronwode**'s correspondence course; the broad **scriptural-magic** literature descended from grimoire traditions like the "Secrets of the Psalms") systematizes these pairings, often reciting a Psalm alongside a candle, a wash, or a written petition. Scholars document that scripture-in-practice is **real and old** in the tradition (Chireau, 2003); the exhaustive **verse-by-verse correspondence tables** in some practitioner and grimoire sources are **later systematizations** and vary from book to book: read them as **one lineage's system, not fixed doctrine.**

**Where the sources part.** Scholarship establishes **that** scripture is central and **how** it functioned socially and historically. Practitioner books supply the **fine-grained "which Psalm for which purpose."** Keeping that line clear is exactly the critical-reading skill this course builds (Section 10).

⚠️ **Framing note.** This describes practitioners' **belief and use** of scripture. It is not a claim that reciting a verse produces a physical outcome, and it is not religious or professional advice.

**Check yourself.** Explain how practitioners historically reconciled Hoodoo with Christianity, why Moses is read as a "conjurer," and how you'd treat a book's Psalm-by-Psalm correspondence table (as fact, or as one lineage's system?).

## Sources
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.
- Yronwode, C. (2002). *Hoodoo herb and root magic* / *Hoodoo rootwork correspondence course*. Lucky Mojo Curio Co. (Practitioner perspective.)`,
      recallContent: [
        {
          prompt:
            "Under slavery, what roles did the conjure or root doctor fill in the community?",
          answer:
            "Often healer, herbalist, midwife, counselor, and spiritual specialist at once. With little access to white medicine, communities relied on this figure for births, illness, injury, and trouble, which gave real authority.",
        },
        {
          prompt:
            "Name two distinct ways conjure connected to resistance under slavery.",
          answer:
            "Enslavers feared poisoning and conjure, which the enslaved could sometimes turn to advantage; belief in spiritual protection could embolden revolt (as with Gullah Jack in the 1822 Denmark Vesey conspiracy); and simply keeping an African-derived spiritual life alive was itself defiance.",
        },
      ],
    },

    // ── Section 5: Materia magica in depth ───────────────────────────────
    {
      slug: "hcx-materia-magica",
      title: "5 · The materia magica in depth: roots, curios, minerals, concerns",
      section: "Belief & Practice",
      body: `Hoodoo works with the **spiritual power believed to reside in the material world**. This lesson surveys that *materia magica* **in depth**, as tradition and belief. ⚠️ **Standing herbal safety note:** many plants below have real pharmacology and some are **toxic**; **nothing here is a recommendation to ingest anything**, and several items carry **legal** issues. This is cultural study, not medical or legal advice.

**Roots and herbs (the "root" in rootwork).**
- **High John the Conqueror** (a species of morning-glory tuber), the tradition's most famous root, tied to **strength, mastery, luck, and virility**, and bound up with the trickster-hero folklore of "High John" that carried hope under slavery (Hurston, 1935/as discussed in Chireau, 2003; Yronwode, practitioner).
- Other frequently cited roots/herbs and their **traditional associations** (belief, not prescription): **Angelica ("Holy Ghost root")**: protection, especially of women and children; **Master Root / Little John (galangal)**: court cases and mastery; **Sampson Snake Root**: power and male vitality; **Devil's Shoestring**: protection, "trip up" trouble, gambling luck; **Five-Finger Grass (cinquefoil)**: the "five fingers" of luck (money, favor, wisdom, power, love). ⚠️ Names are folk-names and often **do not** match a single botanical species across regions, a key reason **not** to self-medicate from a rootwork list.

**Curios (non-botanical items).** **Lodestones** and **magnetic sand** ("drawing"); **pyrite** ("fool's gold," money-drawing); **black cat bone** and various **animal parts** (⚠️ some legally restricted, some cruel in origin, a genuine ethics/legality flag); **coins, keys, nails, pins, and dice**; **railroad spikes** (protection/nailing-down).

**Minerals, earths, and powders.** **Salt** (cleansing, protection); **saltpeter** and **sulfur/"brimstone"** (⚠️ flammable/toxic); **red brick dust** (a well-known protective wash for a doorstep); **graveyard dirt** (⚠️ legal and ethical cautions, it is taken with observance and, in tradition, "paid for"); **goofer dust** (a compound associated with hostile work and the dead, treated here as history, per Section 12).

**Oils, incenses, waters, and washes.** **Condition/anointing oils**, **incense/powders**, **Florida Water** and other **colognes/waters**, and **floor washes / spiritual baths**. Much of this is the **commercial layer** documented by **Long (2001)** (Section 9). An industry grew up supplying it.

**Personal concerns.** Perhaps the deepest idea: workings often use a **"personal concern"** of the target: **hair, nail parings, a name written on paper, a photograph, a footprint, bodily traces**. The belief is that a **connection to the person carries the working**; anthropologists call this **contagious/sympathetic magic**, found worldwide (Puckett, 1926). This is why **secrecy about one's own concerns** is itself a protective theme in the tradition.

**Where we know this from.** The **range** of these materials is documented above all by **Hyatt** (1970 to 1978) and **Puckett** (1926); practitioner books (Yronwode; Casas; Moise; Shone; Alvarado) organize and teach them today (**practitioner perspective**).

**Check yourself.** Name three roots/herbs with their traditional associations, define a "personal concern," and state two categories of item on this list that carry a safety or legal flag (and why).

## Sources
- Puckett, N. N. (1926). *Folk beliefs of the Southern Negro*. University of North Carolina Press. (Public domain.)
- Hyatt, H. M. (1970 to 1978). *Hoodoo, conjuration, witchcraft, rootwork* (Vols. 1 to 5). Alma Egan Hyatt Foundation. (Field documentation; reference.)
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Long, C. M. (2001). *Spiritual merchants: Religion, magic, and commerce*. University of Tennessee Press.
- Yronwode, C. (2002). *Hoodoo herb and root magic*. Lucky Mojo Curio Co. (Practitioner perspective.)`,
      recallContent: [
        {
          prompt:
            "Historically, how did most Hoodoo practitioners relate their practice to Christianity?",
          answer:
            "Hoodoo was a companion to the church, not a rival. The same person might worship on Sunday and consult a root doctor on Monday and see no contradiction, since both reached for spiritual power to meet life's troubles.",
        },
        {
          prompt:
            "How should you treat a practitioner book's Psalm-by-Psalm correspondence table?",
          answer:
            "As one lineage's system, not fixed doctrine. Scripture in practice is real and old, but the detailed verse-by-verse tables are later systematizations that vary from book to book, so read them as practitioner perspective.",
        },
      ],
    },

    // ── Section 6: Core workings surveyed ────────────────────────────────
    {
      slug: "hcx-core-workings",
      title: "6 · Core workings surveyed: hands, jars, cleansings, protection, tracks, crossroads",
      section: "Belief & Practice",
      body: `This lesson surveys the **major families of Hoodoo workings**: what they are, what they're *for* in the tradition, and the belief-logic behind them. ⚠️ **Read this as a study of a tradition, not as a spellbook or advice.** Where a working can bear on health, safety, another person's autonomy, or the law, that is flagged, and the hostile forms are treated as **history and ethics** (Section 12), not how-to.

**Mojo hands / bags (nation sacks, tobies, gris-gris).** The signature portable charm: a small flannel bag holding **roots, curios, minerals, and often a personal concern**, made for **luck, love, money, protection, or gambling** (Hazzard-Donald, 2013; Hyatt, 1970 to 1978). In tradition it is **"fixed," named, prayed over, and periodically "fed"** (e.g., with a dressing oil or whiskey) and kept **secret**; its ancestor is the Kongo *nkisi* (Section 2). Practitioner literature (Yronwode; Casas, practitioner) preserves the making-lore.

**Sweetening work: honey jars and sugar jars.** A "container spell": a person's name-paper (a personal concern) set in **honey or sugar** with a candle, to **sweeten** how someone regards you: for love, family peace, a boss, a court. The belief-logic is **sympathetic** ("as this is sweet, so let their feeling toward me be sweet") (Yronwode; Moise, practitioner). ⚠️ **Ethics flag:** sweetening aimed at **overriding another adult's consent** (coercive love work) is exactly where Section 12's autonomy ethics apply.

**Souring / crossing work (surveyed as history).** The mirror image: **vinegar jars, souring, crossing, jinxing**, meant to turn someone against a target or bring them trouble. ⚠️ **This course names that these exist and what they meant; it does not instruct anyone to harm a real person.** Treated in Section 12.

**Cleansing and uncrossing.** **Spiritual baths, floor washes, smoke-cleansing, and egg cleansings (*limpia*-style)** to remove **"crossed conditions," bad luck, or "unnatural illness."** **Uncrossing** is the dedicated remedy for feeling "worked on." This is among the **most central and least controversial** families of work, its aim is **relief** (Hyatt, 1970 to 1978; Yronwode, practitioner). ⚠️ Herbal-bath safety note from Section 5 applies; and "unnatural illness" is a **cultural category**, not a medical diagnosis. Real symptoms need a clinician.

**Protection and "jinx-breaking."** **Red-brick-dust washes on the threshold**, protective mojo, **witch-bottles / protection bottles**, **nailing down** trouble, and keeping the door and yard "clean." Protective work is the tradition's everyday backbone (Hazzard-Donald, 2013).

**Foot-track magic.** A distinctive, deeply African-rooted family: because the **footprint and the ground one walks** carry a person's essence, work is laid **in the path** or made **from gathered track/dirt**, to follow, protect, or (historically) to harm (Puckett, 1926; Hyatt, 1970 to 1978). ⚠️ The hostile forms are, again, historical, and physically laying anything to trip or sicken someone can be **assault or trespass**.

**The crossroads.** A spiritually charged place: for **disposing of** the remnants of work, for **"taking" a skill** in the crossroads legend, and, in blues myth, for the fateful bargain (Section 11). Its logic is **Kongo cosmology** (the *dikenga*'s crossing point; Section 2), not the Christian "devil" that later stories layered on (Hazzard-Donald, 2013).

**A note on the "how."** Real workings involve **timing** (days, moon), **prayer/scripture** (Section 4), **direction and disposal**, and above all **the worker's focus and faith**. This survey conveys the **shape and meaning** of these families **without** functioning as a step-by-step manual, consistent with this course's responsibility even in private study.

**Check yourself.** Match each to its aim: mojo hand, honey jar, uncrossing, red-brick-dust wash, foot-track work, crossroads. Then identify which two families this lesson treats as **history/ethics only**, and why.

## Sources
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.
- Hyatt, H. M. (1970 to 1978). *Hoodoo, conjuration, witchcraft, rootwork* (Vols. 1 to 5). Alma Egan Hyatt Foundation. (Field documentation; reference.)
- Puckett, N. N. (1926). *Folk beliefs of the Southern Negro*. University of North Carolina Press. (Public domain.)
- Yronwode, C. (2002). *Hoodoo herb and root magic*. Lucky Mojo Curio Co. (Practitioner perspective.)
- Moise, H. S. (2018). *Working conjure: A guide to Hoodoo folk magic*. Weiser. (Practitioner perspective.)`,
      recallContent: [
        {
          prompt:
            "What is a 'personal concern,' and what belief makes it work?",
          answer:
            "A personal concern is something of the target such as hair, nail parings, a name on paper, a photograph, or a footprint. The belief is that a connection to the person carries the working, which anthropologists call contagious or sympathetic magic.",
        },
        {
          prompt:
            "Which single root is the tradition's most famous, and what is it associated with?",
          answer:
            "High John the Conqueror (a morning-glory tuber), tied to strength, mastery, luck, and virility, and bound up with the trickster-hero folklore of 'High John' that carried hope under slavery.",
        },
      ],
    },

    // ── Section 7: Divination ────────────────────────────────────────────
    {
      slug: "hcx-divination",
      title: "7 · Divination in conjure: signs, dreams, and the read",
      section: "Belief & Practice",
      body: `Before a worker acts, the tradition asks: **what is really going on, and what is called for?** **Divination** (reading the situation and the unseen) is how that question is answered (Chireau, 2003; Hyatt, 1970 to 1978).

**Signs, omens, and dreams.** The oldest layer is **folk sign-reading**: bird behavior, an itching palm, a broken mirror, "haints," and above all **dreams**, long read for guidance and warning (Puckett, 1926). **Dream interpretation** was so central that the commercial era produced popular **"dream books"**, pamphlets mapping dream images to meanings (and, in the numbers-gambling world, to numbers to play), documented as part of the spiritual-supply trade (Long, 2001).

**Reading media.** Practitioners have used varied instruments to "read": **playing cards** (an older folk method later joined by tarot), **a Bible-and-key** (a key set in a Bible, swung to answer or to name a culprit), **water-gazing / scrying**, **bones or objects cast and read**, and simple **yes/no** tools. Scholarship documents the **range**; practitioner literature (Yronwode; Alvarado, practitioner) teaches specific methods today.

**The "read" as the heart of the work.** In practice, divination isn't a party trick. It **sets the whole working**: is the trouble "natural" (needs a doctor, a lawyer, a conversation) or "unnatural" (a crossed condition)? Who or what is involved? What outcome is realistic and right? A responsible worker, in the tradition's own self-understanding, **reads before acting** (Chireau, 2003).

⚠️ **Two flags.**
- **Not diagnosis.** A "read" is a **spiritual/cultural** assessment, **never** a medical, psychological, or legal diagnosis. Real problems need real professionals.
- **Numbers/gambling.** The historical dream-book-to-numbers link is **cultural history**, not a system for winning money: ⚠️ gambling carries real financial risk.

**Where we know this from.** **Puckett (1926)** and **Hyatt (1970 to 1978)** record the signs, dreams, and reading-methods as they were actually reported; **Long (2001)** documents the dream-book commerce; practitioner books teach the methods as living practice.

**Check yourself.** Name three divination methods used in conjure, explain what "reading before acting" accomplishes, and state the flag about "natural vs. unnatural" trouble in one sentence.

## Sources
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Puckett, N. N. (1926). *Folk beliefs of the Southern Negro*. University of North Carolina Press. (Public domain.)
- Hyatt, H. M. (1970 to 1978). *Hoodoo, conjuration, witchcraft, rootwork* (Vols. 1 to 5). Alma Egan Hyatt Foundation. (Field documentation; reference.)
- Long, C. M. (2001). *Spiritual merchants: Religion, magic, and commerce*. University of Tennessee Press.`,
      recallContent: [
        {
          prompt:
            "What is a honey jar (sweetening work) meant to do, and what belief-logic drives it?",
          answer:
            "It sets a person's name-paper in honey or sugar with a candle to sweeten how someone regards you, for love, family peace, a boss, or a court. The logic is sympathetic: as this is sweet, so let their feeling be sweet.",
        },
        {
          prompt:
            "What is uncrossing (cleansing) for, and why is it called the most central and least controversial family of work?",
          answer:
            "Baths, washes, smoke, and egg cleansings remove a crossed condition, bad luck, or unnatural illness. Its aim is relief, which is why it is the least controversial. Note that unnatural illness is a cultural category, not a medical diagnosis.",
        },
      ],
    },

    // ── Section 8: Regions & Great Migration ─────────────────────────────
    {
      slug: "hcx-regions-migration",
      title: "8 · Regional traditions: Low Country/Gullah, the Delta, and the Great Migration",
      section: "History & Spread",
      body: `Hoodoo was never one uniform system. It varied by **region, community, and family**, and it **moved** with the people who carried it (Hazzard-Donald, 2013; Long, 2001).

**The Low Country and the Gullah Geechee.** Along the **coastal South Carolina and Georgia** Sea Islands, the **Gullah Geechee** people, descended largely from rice-culture West and Central Africans and long relatively isolated, preserved unusually **strong African retentions** in language (Gullah creole), foodways, crafts, and spiritual life (Hazzard-Donald, 2013). Here conjure sits close to its African sources: **"root doctors"** and figures like the celebrated **Dr. Buzzard** of St. Helena Island became legendary (especially in **court-case work**), and **"haints,"** the color **"haint blue,"** and boo hags belong to this world.

**The Mississippi Delta.** In the **Delta**, Hoodoo braided tightly with **labor, poverty, and the blues** (Section 11). This is the country of the **crossroads legend** and of blues songs thick with mojo, goofer dust, and John the Conqueror, a regional style where conjure and music fed each other (Chireau, 2003).

**Other homelands.** Distinct local flavors developed across the **Deep South**: the Carolinas, Georgia, Alabama, Louisiana (where Hoodoo also brushed up against, but stayed distinct from, **Louisiana Voodoo** and Catholic influences), and beyond, each with its own preferred herbs, names, and styles (Hazzard-Donald, 2013).

**The Great Migration (c. 1916 to 1970).** Millions of Black Southerners moved to **Chicago, Detroit, New York, and the West** in the **Great Migration**, carrying Hoodoo into the cities, where it **changed** (Long, 2001):
- It met the **cash economy and mail order**, fueling **spiritual-supply shops and catalogs** (Section 9).
- New institutions, **Spiritual churches**, blended conjure with Catholic and Protestant elements.
- Urban concerns (jobs, rent, law, love in a strange city) reshaped what people brought to the work.

**Hazzard-Donald's argument.** Katrina **Hazzard-Donald (2013)** distinguishes an older, **community-rooted "Old Black Belt Hoodoo system"** from later **"marketeered"** forms, arguing that commerce and outsiders reshaped (and in places thinned) the tradition even as it spread. Whether one fully accepts the sharp line, it's a **useful frame** for seeing change and continuity together.

**Check yourself.** Contrast the Low Country/Gullah and the Delta as Hoodoo homelands, and explain what the Great Migration did to the tradition. Then state Hazzard-Donald's "old system vs. marketeered" distinction in one sentence.

## Sources
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.
- Long, C. M. (2001). *Spiritual merchants: Religion, magic, and commerce*. University of Tennessee Press.
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.`,
      recallContent: [
        {
          prompt:
            "In conjure, what does divination accomplish, and what key question does 'reading before acting' answer?",
          answer:
            "Divination reads the situation and the unseen before any work, setting the whole working. A central question is whether the trouble is natural (needing a doctor, lawyer, or conversation) or unnatural (a crossed condition).",
        },
        {
          prompt:
            "Name three instruments practitioners have used to 'read.'",
          answer:
            "Playing cards (later joined by tarot), a Bible-and-key, water-gazing or scrying, bones or objects cast and read, and simple yes/no tools. Dreams and folk signs are the oldest layer.",
        },
      ],
    },

    // ── Section 9: Commerce & appropriation ──────────────────────────────
    {
      slug: "hcx-commerce-appropriation",
      title: "9 · Spiritual-supply commerce and the ethics of appropriation",
      section: "History & Spread",
      body: `As Hoodoo entered the city and the marketplace, it met two forces this course names honestly: **commercialization** and **appropriation** (Long, 2001).

**The spiritual-supply industry (Long, 2001).** Carolyn Morrow **Long**'s *Spiritual Merchants* is the definitive account of how a **folk practice met mass production**. By the early-to-mid 20th century, **drugstores, spiritual-supply shops, and mail-order catalogs** sold **candles, oils, incenses, powders, sachets, and roots** to a largely Black clientele. Brands and label art (some of it demeaning caricature), manufacturers, and distributors built a **real industry**, one that **both preserved knowledge and diluted it** with cheap, generic "products." ⚠️ **Long documents that many manufacturers and shop owners were not part of the tradition**, often white or immigrant businessmen profiting from a Black practice.

**Appropriation: the tradition's central modern tension.** Hoodoo was **created by African Americans** out of African heritage and the experience of slavery. As it grew visible and marketable, **outsiders increasingly packaged, sold, and taught it**, frequently **stripped of its history and community**, and blended with unrelated systems (note how some popular books still fuse **"Voodoo" and "Hoodoo,"** a category error this course rejects). Many practitioners and scholars argue that **Hoodoo belongs to, and is best carried by, the Black community that created it**, and that engaging it respectfully means **honoring that origin** rather than lifting it as generic "magic" (Chireau, 2003; Hazzard-Donald, 2013).

**A live debate among practitioners.** The practitioner world **argues about this openly**: over **who may practice and teach**, over **initiatory vs. open** transmission, and over commercialization itself. Voices like **Starr Casas** (**Old Style Conjure**, practitioner) emphasize **family/African American lineage and the Christian core**; broadly accessible teachers like **Sherry Shone** (*Hoodoo for Everyone*) and **Denise Alvarado** frame a more **open** approach. This course **doesn't resolve** the debate; it flags that it exists and treats it as essential context.

**Why this matters even for private study.** Studying privately doesn't exempt anyone from **respect**. The responsible posture, the one this course models, is to **learn from the tradition's own communities and scholarship**, to **credit and center** them, and to be **honest about the appropriation and commodification** woven into the modern supply chain.

**Check yourself.** Summarize Long's finding about who ran the spiritual-supply business, define "appropriation" in this context, and name the live practitioner debate (who may practice/teach) without claiming to resolve it.

## Sources
- Long, C. M. (2001). *Spiritual merchants: Religion, magic, and commerce*. University of Tennessee Press.
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.
- Casas, S. (2017). *Old style conjure: Hoodoo, rootwork, & folk magic*. Weiser. (Practitioner perspective.)`,
      recallContent: [
        {
          prompt:
            "What makes the Low Country and the Gullah Geechee distinctive in Hoodoo's history?",
          answer:
            "Relatively isolated Sea Island communities, descended largely from rice-culture West and Central Africans, preserved unusually strong African retentions in language (Gullah creole), foodways, and spiritual life. It was home to legendary root doctors like Dr. Buzzard.",
        },
        {
          prompt:
            "What did the Great Migration (roughly 1916 to 1970) do to Hoodoo?",
          answer:
            "It carried Hoodoo into cities like Chicago, Detroit, and New York, where it met the cash economy and mail order (fueling spiritual-supply shops and catalogs), gave rise to Spiritual churches blending conjure with Catholic and Protestant elements, and took on urban concerns.",
        },
      ],
    },

    // ── Section 10: The Hyatt corpus & reading sources critically ─────────
    {
      slug: "hcx-hyatt-sources",
      title: "10 · The Hyatt corpus and reading the sources critically",
      section: "Sources & Method",
      body: `Serious study of Hoodoo means knowing **where the knowledge comes from** and reading it **critically**. This lesson is about **method**.

**The Hyatt corpus: the great field record.** In the **1930s to 40s**, **Harry Middleton Hyatt**, a white Anglican clergyman-folklorist, interviewed **hundreds of Black informants** across the South, recording their practices in their own words. The result, *Hoodoo, Conjuration, Witchcraft, Rootwork* (**5 volumes**, published **1970 to 1978**), runs to thousands of pages and is the **single largest documentation** of the tradition's *range* ever assembled (Hyatt, 1970 to 1978). **How to read it critically:**
- ⚠️ **Mediation and power.** A white outsider paid Black informants for their knowledge in the Jim Crow South. That shapes **what was shared, what was withheld or exaggerated, and how it was framed.** Read it as a **record filtered through that relationship**, not a neutral mirror.
- **Breadth, not doctrine.** Hyatt captured **contradictory** practices from **many** people and places. It shows the tradition's **variety**, not a single "correct" system. Resist treating any one entry as "the way."
- **Invaluable and imperfect at once.** It preserved priceless material that would otherwise be lost **and** it must be handled with the cautions above.

**The other pillars, and how to weigh them.**
- **Puckett (1926)**: early, systematic folk-belief collection; **public domain**, valuable, but of its era in language and framing.
- **Hurston (1935)**, *Mules and Men*: a **Black anthropologist-novelist** who did fieldwork **inside** communities; unusually close and sympathetic, and literary, a different (and often richer) vantage than an outsider's.
- **Raboteau (1978); Chireau (2003); Anderson (2005); Long (2001); Hazzard-Donald (2013)**: the **modern scholarly synthesis** that contextualizes and interprets the field record. When you want a **fact or interpretation**, prefer these.

**Scholarship vs. practitioner literature (the core skill).** Keep two questions in mind for **every** claim:
1. **Who is speaking, and with what authority?** A **historian** documenting what people did, or a **practitioner** teaching what they do? Both are legitimate, for **different** purposes.
2. **Is this fact, interpretation, or one lineage's system?** "The mojo bag descends from the *nkisi*" is **scholarly interpretation** with strong support; "Psalm X is for purpose Y" is **one lineage's system**; "enslavers feared conjure" is **documented fact**. Sorting these is the whole game.

**Practitioner authors, labeled.** **Yronwode**, **Casas**, **Moise**, **Shone**, and **Alvarado** are cited throughout this course **as practitioner perspectives**, knowledgeable, useful, and **sometimes in disagreement with each other**. That disagreement is a **feature** to study, not a defect to resolve.

**Check yourself.** Give two reasons the Hyatt corpus must be read critically, explain why Hurston's vantage differs from Hyatt's, and state the two questions to ask of every claim.

## Sources
- Hyatt, H. M. (1970 to 1978). *Hoodoo, conjuration, witchcraft, rootwork* (Vols. 1 to 5). Alma Egan Hyatt Foundation. (Field documentation; reference.)
- Puckett, N. N. (1926). *Folk beliefs of the Southern Negro*. University of North Carolina Press. (Public domain.)
- Hurston, Z. N. (1935). *Mules and men*. J. B. Lippincott. (Ethnographic account.)
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.`,
      recallContent: [
        {
          prompt:
            "What did Carolyn Morrow Long's Spiritual Merchants (2001) reveal about the spiritual-supply business?",
          answer:
            "That a folk practice met mass production, and that many manufacturers and shop owners were not part of the tradition, often white or immigrant businessmen profiting from a Black practice. Commercialization both preserved knowledge and diluted it.",
        },
        {
          prompt:
            "What is the live debate among practitioners about appropriation and transmission?",
          answer:
            "Practitioners argue openly over who may practice and teach, over initiatory versus open transmission, and over commercialization. Voices like Starr Casas emphasize family and African American lineage and the Christian core, while teachers like Sherry Shone and Denise Alvarado frame a more open approach.",
        },
      ],
    },

    // ── Section 11: Music & literature ───────────────────────────────────
    {
      slug: "hcx-music-literature",
      title: "11 · Hoodoo in music and literature",
      section: "Legacy",
      body: `Hoodoo's imprint on **American culture, above all Black music and literature, is enormous**, reaching people who never worked a root in their lives (Chireau, 2003).

**The blues.** Conjure saturates the **blues**. **Muddy Waters'** "(I'm Your) **Hoochie Coochie Man**" name-checks the **mojo, the John the Conqueror root, and the seventh son**; songs by **Ma Rainey**, **Bessie Smith**, **Blind Willie McTell**, and others reference **mojo hands, goofer dust, and "black cat bone."** The legend of **Robert Johnson** selling his soul **at the crossroads** draws on the Hoodoo (ultimately **Kongo**) idea of the crossroads as a **place of spiritual power**, later mythologized and sensationalized with a Christian "devil" the older tradition didn't require (Chireau, 2003; Hazzard-Donald, 2013). Conjure imagery flows onward into **R&B, soul, funk, and hip-hop.**

**Literature.** **Zora Neale Hurston**, anthropologist and novelist, documented Hoodoo firsthand (*Mules and Men*, 1935; her earlier "Hoodoo in America") and wove it through her fiction, taking it seriously as **culture** rather than curiosity. **Charles Chesnutt**'s *The Conjure Woman* (1899) put conjure at the center of literary fiction; **Ishmael Reed**'s *Mumbo Jumbo* made "Neo-HooDoo" a lens on Black creativity and resistance; and conjure runs through **Toni Morrison**, **Gloria Naylor** (*Mama Day*, set in a Gullah-like Sea Island world), **Ntozake Shange**, and others.

**Today.** Hoodoo is enjoying a **resurgence**: in scholarship, in podcasts and media, in film and television (from *The Skeleton Key* to contemporary Black horror and drama), and among a **new generation reconnecting with ancestral practice**. The debates of Section 9, **authenticity, appropriation, commercialization**, are very much alive in that revival.

**The takeaway.** Hoodoo is **not a footnote**. It is a **root system** beneath a great deal of African American art, faith, and identity, a tradition of **knowledge, healing, and resistance** that helped a people survive and shaped a culture the whole world borrows from.

**Check yourself.** Give one specific example of Hoodoo in the blues (song + the conjure item it names) and two writers who documented or drew on the tradition. Then note how the crossroads legend both uses and distorts the older Kongo idea.

## Sources
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Hurston, Z. N. (1935). *Mules and men*. J. B. Lippincott. (Ethnographic account.)
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.`,
      recallContent: [
        {
          prompt:
            "Why must the Hyatt corpus be read critically?",
          answer:
            "A white outsider paid Black informants for their knowledge in the Jim Crow South, which shaped what was shared, withheld, or exaggerated, and how it was framed. It also captured contradictory practices, so it shows the tradition's breadth and variety, not a single correct doctrine.",
        },
        {
          prompt:
            "What two questions should you ask of every claim about Hoodoo?",
          answer:
            "First, who is speaking and with what authority: a historian documenting what people did, or a practitioner teaching what they do? Second, is this fact, interpretation, or one lineage's system?",
        },
      ],
    },

    // ── Section 12: Ethics, respect & continuing study ───────────────────
    {
      slug: "hcx-ethics-continuing",
      title: "12 · Ethics, respect, and continuing study",
      section: "Ethics & Close",
      body: `This closing lesson gathers the **ethical commitments** that have run through the whole course and points toward **responsible continuing study**.

**Respect the origin.** Hoodoo is a **living Black tradition**, created by African Americans out of African heritage and the crucible of slavery. The first ethic is to **center and credit** that origin, to study **with** the tradition's communities and scholarship rather than extracting from them, and to be honest about **appropriation and commodification** (Sections 9 to 10; Chireau, 2003; Hazzard-Donald, 2013).

**Keep the distinctions straight.** ⚠️ **Hoodoo is not "Voodoo."** Vodou/Vodun are organized religions; Hoodoo is an African American folk practice. Conflating them is both an **error** and a **disrespect**. It's how the tradition got sensationalized in the first place (Anderson, 2005).

**Autonomy and harm: the hard ethics.** The tradition contains **hostile work** (crossing, jinxing, some love-compulsion). This course has consistently **named that such work exists and what it meant**, and just as consistently **refused to frame it as how-to for injuring a real person.** Two principles carry that stance:
- ⚠️ **Consent and autonomy.** Work aimed at **overriding another adult's free will** (coercive love work, domination for its own sake) is exactly where private study should **stop and reflect**. Even within practitioner communities, many teachers counsel caution here.
- ⚠️ **The law and real harm.** Intent doesn't erase consequences. **Trespass, harassment, poisoning, animal cruelty, and theft** are crimes and wrongs **regardless of spiritual framing.** Nothing in this course endorses them.

**Safety, gathered.** ⚠️ Across the course: **herbs can be toxic and are never medical advice**; **spiritual assessment is never diagnosis**: real health, legal, or mental-health problems need **licensed professionals**; some **materials and acts carry legal risk**; and **gambling** (the dream-book/numbers thread) carries **financial risk**.

**Continuing study, responsibly.** If study deepens: **read the scholarship first** (Hazzard-Donald, Chireau, Long, Raboteau, Anderson, Hurston, Puckett, and the Hyatt corpus with its cautions); read practitioner authors **as practitioners** and **notice where they disagree** (Yronwode, Casas, Moise, Shone, Alvarado); **learn from the tradition's own communities**; and hold onto **humility** about what an outsider can and should claim. The most respectful posture is often to **listen and credit**, not to appropriate.

**The through-line.** Hoodoo carried **knowledge, healing, dignity, and defiance** through the darkest chapter of American history and shaped a whole culture. Studying it well means honoring **all** of that: its beauty and its hard edges, its Africa and its America, its faith and its resistance, with **respect, accuracy, and care.**

**Check yourself.** State the first ethic (origin/credit), the autonomy principle, and one legal-or-safety flag; then explain, in a sentence, why "Hoodoo is not Voodoo" is an **ethical** point and not just a factual one.

## Sources
- Chireau, Y. P. (2003). *Black magic: Religion and the African American conjuring tradition*. University of California Press.
- Hazzard-Donald, K. (2013). *Mojo workin': The old African American Hoodoo system*. University of Illinois Press.
- Anderson, J. E. (2005). *Conjure in African American society*. Louisiana State University Press.
- Long, C. M. (2001). *Spiritual merchants: Religion, magic, and commerce*. University of Tennessee Press.`,
      recallContent: [
        {
          prompt:
            "Give an example of Hoodoo in the blues, and explain how the Robert Johnson crossroads legend both uses and distorts the older Kongo idea.",
          answer:
            "Muddy Waters' 'Hoochie Coochie Man' name-checks the mojo, the John the Conqueror root, and the seventh son. The Robert Johnson crossroads legend draws on the Hoodoo (ultimately Kongo) idea of the crossroads as a place of spiritual power, but distorts it by adding a Christian devil the older tradition did not require.",
        },
        {
          prompt:
            "Name two writers who documented or drew on Hoodoo in literature.",
          answer:
            "Zora Neale Hurston (Mules and Men) documented it firsthand and wove it through her fiction. Charles Chesnutt (The Conjure Woman), Ishmael Reed (Mumbo Jumbo and 'Neo-HooDoo'), Toni Morrison, and Gloria Naylor (Mama Day) drew on it.",
        },
      ],
    },

    // ── Section 13: Practice (fill in the blanks) ────────────────────────
    {
      slug: "hcx-exercise",
      title: "13 · Practice: check your understanding",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Hoodoo's history, sources, materia, and ethics, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "The Central African (Kongo) consecrated power object considered a likely ancestor of the mojo bag is the ___.",
            answer: "nkisi",
            accept: ["minkisi", "nkisi/minkisi", "n'kisi"],
            explanation:
              "The nkisi/minkisi, Kongo containers of medicines animated to heal, protect, or judge, are widely read as ancestors of the Hoodoo mojo bag (Hazzard-Donald, 2013).",
          },
          {
            prompt:
              "Hoodoo is often confused with, but is DISTINCT from, the organized religion ___ (Haitian/West African).",
            answer: "Vodou",
            accept: ["voodoo", "vodun", "Voodoo", "Vodun"],
            explanation:
              "Vodou/Vodun are organized religions with deities and clergy; Hoodoo is an African American folk practice. Conflating them is both an error and a disrespect.",
          },
          {
            prompt:
              "The most famous Hoodoo root, tied to strength, mastery, and luck (and to a trickster-hero of the same name), is High John the ___.",
            answer: "Conqueror",
            accept: ["conqueror", "conquerer"],
            explanation:
              "High John the Conqueror root, bound up with the 'High John' folk-hero, is the tradition's signature root (Hurston, 1935; Chireau, 2003).",
          },
          {
            prompt:
              "A hair, name-paper, photograph, or footprint used because a connection to the person carries the working is called a personal ___.",
            answer: "concern",
            accept: ["concerns"],
            explanation:
              "A 'personal concern' embodies contagious/sympathetic magic: the belief that a link to the person carries the work (Puckett, 1926).",
          },
          {
            prompt:
              "The container working that sets a name-paper in honey or sugar with a candle to 'sweeten' someone toward you is a ___ jar.",
            answer: "honey",
            accept: ["sweetening", "sugar", "honey jar", "sweetening jar"],
            explanation:
              "Honey/sweetening jars work by sympathy ('as this is sweet, so let their feeling be sweet'), with an ethics flag when aimed at overriding consent (Section 6, 12).",
          },
          {
            prompt:
              "The family of workings (baths, washes, smoke, eggs) meant to remove a 'crossed condition' or bad luck is called ___.",
            answer: "uncrossing",
            accept: ["cleansing", "un-crossing", "uncrossing and cleansing"],
            explanation:
              "Uncrossing/cleansing is among the most central and least controversial families. Its aim is relief. (Herbal-bath safety and 'not a diagnosis' flags apply.)",
          },
          {
            prompt:
              "The 5-volume 1970s field record of hundreds of Black informants, collected by Harry Middleton Hyatt, is titled Hoodoo, Conjuration, Witchcraft, ___.",
            answer: "Rootwork",
            accept: ["rootwork", "root work"],
            explanation:
              "Hyatt's Hoodoo, Conjuration, Witchcraft, Rootwork (1970 to 1978) is the largest documentation of the tradition's range, read critically for its mediated origin.",
          },
          {
            prompt:
              "Carolyn Morrow Long's Spiritual ___ (2001) documents the commercial spiritual-supply industry that grew around Hoodoo.",
            answer: "Merchants",
            accept: ["merchants"],
            explanation:
              "Long's Spiritual Merchants shows a folk practice meeting mass production, and that many suppliers were outsiders profiting from a Black practice.",
          },
          {
            prompt:
              "TRUE or FALSE: A practitioner book's Psalm-by-Psalm correspondence table should be treated as fixed, universal doctrine.",
            answer: "false",
            explanation:
              "False. Such tables are one lineage's system and vary book to book: read them as practitioner perspective, not settled fact (Section 4, 10).",
          },
          {
            prompt:
              "TRUE or FALSE: Because this is a private study, respect for the tradition's African American origins no longer applies.",
            answer: "false",
            explanation:
              "False. Private study does not exempt anyone from respect: center and credit the origin communities and be honest about appropriation (Section 12).",
          },
        ],
      },
    },

    // ── Section 14: Final quiz ───────────────────────────────────────────
    {
      slug: "hcx-quiz",
      title: "14 · Final quiz",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "How is Hoodoo best described, and how does it differ from Vodou/'Voodoo'?",
            options: [
              "They are identical organized religions",
              "Hoodoo is an African American folk practice (conjure/rootwork); Vodou/Vodun are distinct organized religions with deities and clergy",
              "Hoodoo is a religion and Vodou is a folk practice",
              "Both are styles of blues music",
            ],
            correctIndex: 1,
            explanation:
              "Hoodoo is a folk PRACTICE (largely by Christians); Vodou/Vodun are organized religions, a related but distinct thing. Conflating them is the central error the course rejects.",
            sourceLessonSlug: "hcx-orientation",
          },
          {
            prompt: "Which African source do scholars most strongly link to the mojo bag and the charged crossroads?",
            options: [
              "Ancient Egyptian temple religion",
              "Central African (Kongo) cosmology: the nkisi/minkisi and the dikenga cosmogram",
              "Roman household gods",
              "Purely European folk magic",
            ],
            correctIndex: 1,
            explanation:
              "Kongo minkisi are read as ancestors of the mojo bag, and the dikenga's crossing point underlies the crossroads, Hoodoo's strongest African thread (Hazzard-Donald, 2013).",
            sourceLessonSlug: "hcx-african-roots",
          },
          {
            prompt: "Under slavery, the conjure/root doctor most often ALSO served as…",
            options: [
              "A tax collector for the plantation",
              "A healer, herbalist, and midwife with real authority in the community",
              "An official of the church",
              "A ship's navigator",
            ],
            correctIndex: 1,
            explanation:
              "Denied white medicine, communities relied on the root doctor for births, illness, and trouble, a figure both revered and, at times, feared.",
            sourceLessonSlug: "hcx-slavery-resistance",
          },
          {
            prompt: "How should a book's 'Psalm X is for purpose Y' correspondence table be read?",
            options: [
              "As fixed, universal doctrine",
              "As one lineage's system / practitioner perspective, useful but varying, not settled fact",
              "As proven scientific fact",
              "As irrelevant to Hoodoo",
            ],
            correctIndex: 1,
            explanation:
              "Scripture-in-practice is real and old, but detailed correspondence tables are later systematizations that vary: read them as practitioner perspective (Section 4, 10).",
            sourceLessonSlug: "hcx-christianity-scripture",
          },
          {
            prompt: "What is a 'personal concern' in Hoodoo, and why does it carry a caution?",
            options: [
              "A worry the client discusses; no caution",
              "A hair, name-paper, or photograph believed to carry a working, reflecting sympathetic magic; cautions apply because it can target a person's autonomy",
              "A type of candle; a fire hazard",
              "A regional dialect word for money",
            ],
            correctIndex: 1,
            explanation:
              "Personal concerns embody contagious/sympathetic magic; when used to override another adult's will, the course's autonomy ethics apply (Sections 5, 6, 12).",
            sourceLessonSlug: "hcx-materia-magica",
          },
          {
            prompt: "Which pairing correctly matches a working to its traditional aim?",
            options: [
              "Uncrossing → to harm an enemy",
              "Honey jar → to sweeten someone's regard; uncrossing → to remove a crossed condition / bring relief",
              "Red-brick-dust wash → gambling only",
              "Mojo hand → to curse a household",
            ],
            correctIndex: 1,
            explanation:
              "Honey jars sweeten; uncrossing/cleansing removes a 'crossed condition' and seeks relief. Hostile forms are surveyed as history/ethics, not how-to (Section 6).",
            sourceLessonSlug: "hcx-core-workings",
          },
          {
            prompt: "In conjure, what is the role of divination (signs, dreams, cards, Bible-and-key)?",
            options: [
              "It is a medical diagnosis",
              "It 'reads' the situation before acting (e.g., whether trouble is 'natural' or 'unnatural') and sets the working",
              "It guarantees winning the numbers",
              "It has no role in the tradition",
            ],
            correctIndex: 1,
            explanation:
              "A responsible worker 'reads before acting.' ⚠️ A read is a spiritual/cultural assessment, never a medical, legal, or psychological diagnosis (Section 7).",
            sourceLessonSlug: "hcx-divination",
          },
          {
            prompt: "What distinguishes the Low Country/Gullah region in the history of Hoodoo?",
            options: [
              "It had no connection to conjure",
              "Its relatively isolated Gullah Geechee communities preserved unusually strong African retentions in language and spiritual life",
              "It invented mail-order catalogs",
              "It rejected all African influence",
            ],
            correctIndex: 1,
            explanation:
              "Sea Island isolation preserved strong African retentions (Gullah creole, foodways, conjure), home to legendary root doctors like Dr. Buzzard (Section 8).",
            sourceLessonSlug: "hcx-regions-migration",
          },
          {
            prompt: "What did Carolyn Morrow Long's Spiritual Merchants (2001) document about the supply business?",
            options: [
              "That it was run entirely by tradition insiders",
              "That a folk practice met mass production, and many manufacturers/shop owners were OUTSIDERS profiting from a Black practice",
              "That no commercial trade ever existed",
              "That Hoodoo and Voodoo are the same",
            ],
            correctIndex: 1,
            explanation:
              "Long shows commercialization both preserved and diluted the tradition, with many outsider merchants, a core appropriation concern (Section 9).",
            sourceLessonSlug: "hcx-commerce-appropriation",
          },
          {
            prompt: "Why must the Hyatt corpus (and older field records) be read critically?",
            options: [
              "Because they are fictional",
              "Because a white outsider collected them from Black informants under Jim Crow, shaping what was shared and framed, and they show variety, not one 'correct' system",
              "Because they endorse a single doctrine",
              "Because they contain no real information",
            ],
            correctIndex: 1,
            explanation:
              "Hyatt is invaluable AND mediated by its power dynamics; it documents breadth, not doctrine. Prefer modern scholarship for facts/interpretation (Section 10).",
            sourceLessonSlug: "hcx-hyatt-sources",
          },
        ],
      },
    },
  ],
};
