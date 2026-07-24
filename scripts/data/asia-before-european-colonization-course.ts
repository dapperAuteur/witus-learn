// Authored "Asia Before European Colonization: The Center of Gravity" — the ANCHOR of the
// precolonial-Asia track (plans/future-courses/precolonial-asia-track-proposal.md). From BAM's
// world.md queue. ORIENTATION depth, deliberately: a map and a frame, not an encyclopedia —
// the major civilizational zones, when each flourished, and the connective tissue between
// them. Depth belongs to the track's follow-on courses (Ancient India, Tang-Song China,
// Islamic Golden Age, Silk Roads, Mongols, SE-Asian maritime empires, Japan & Korea, the
// Great Divergence).
//
// The thesis, CITED NOT ASSERTED: for most of recorded history Asia was the world's economic
// center, and "the rise of the West" is recent and (per one side of a live scholarly debate)
// contingent. Taught from Pomeranz (2000, The Great Divergence) and Maddison's (2007)
// estimates WITH their caveats stated (contested reconstructions; attributed; ranges; no
// false precision), against named critics (Broadberry, Guan & Li 2018). The course's own
// voice asserts only what is settled.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations + a ## Sources list. Backbone:
//     Pomeranz, Maddison (2007) + the Maddison Project (Bolt & van Zanden 2020), Frankopan,
//     Hansen (2012, 2020), Thapar, Ebrey, Elvin, Totman, Seth, Coe, Coedès, Lockard, Gutas,
//     Morgan, Jackson, UNESCO histories and World Heritage documentation, museum records
//     (British Library, BnF).
//   * NOTHING is flattened to "Asia did X." Every claim names a civilization, a period, and
//     a region. The final exercise drills exactly that habit.
//   * HEDGES ARE EXPLICIT where beloved claims are shaky:
//     - The Indus script is UNDECIPHERED — said plainly; whether it encodes language at all
//       is itself a live dispute (Farmer, Sproat & Witzel 2004 vs. Parpola 1994).
//     - Zero/the numeral system is cited carefully: place value in Aryabhata (499 CE), zero
//       as a number in Brahmagupta (628 CE), the Gwalior inscription (876 CE) as the secure
//       epigraphic date, the Bakhshali manuscript's radiocarbon dates flagged as disputed;
//       transmission via al-Khwarizmi credited, "Arabic numerals" named as a misnomer with
//       the Indian origin documented.
//     - Maddison's GDP shares are taught as reconstructions with wide error bars, never as
//       measurements; every figure is attributed and rounded.
//     - Chang'an at "about a million," Tripitaka Koreana at "over 81,000 blocks," Belitung
//       cargo at "tens of thousands," Hartwell's Song iron estimate labeled his estimate.
//     - The Tale of Genji is "often called" the first novel; sakoku is taught as managed
//       trade, not a sealed country; Majapahit's claimed reach is court poetry until
//       corroborated; Angkor's "collapse" is taught as contested (Buckley 2010 droughts +
//       the 1431 Ayutthaya sack, neither asserted as sufficient).
//     - The Mongols are taught as NEITHER only-barbarian NOR only-Pax-Mongolica; chronicle
//       body counts are flagged as unverifiable.
//   * "European colonization" is taught PRECISELY, not as "Asia untouched until Europe":
//     the Mughals were themselves Central Asian outsiders; intra-Asian empire (Chola raids,
//     Mongol conquests, the Imjin War, Ming occupation of Vietnam) long predates Europeans;
//     European rule arrived as coastal enclaves (Goa 1510, Malacca 1511, Manila 1571) and
//     became territorial rule only from Plassey (1757) onward — and Japan, Korea, Siam and
//     most of China were never European colonies at all.
//   * No utopia: caste and hierarchy, hereditary slavery (Korean nobi, per Palais), the
//     Indian Ocean slave trade, and conquest are taught plainly, each named to its region
//     and period.
//
// House format: `section` on every lesson; one single-line :::reveal per teaching lesson
// (answer NOT restated beneath); a quiz per section with a ~15-question bank (above the
// 10-question attempt cap, so retries rotate); every question carries `explanation` +
// `sourceLessonSlug`; recallContent on teaching lessons; one exercise (name the
// civilization · period · region). Registered in scripts/seed-courses.ts under
// "Culture & History"; NO migration — `pnpm seed:courses`.

import type { AuthoredCourse } from "./authored-course";

export const ASIA_BEFORE_EUROPEAN_COLONIZATION_COURSE: AuthoredCourse = {
  title: "Asia Before European Colonization: The Center of Gravity",
  description:
    "For most of recorded history, the center of the world economy was not in Europe. It was in Asia, and this course shows you the map. In eleven survey lessons plus an honest-record section, you will meet the Indus cities and the script nobody has ever read; Ashoka, the emperor who published his conscience on rocks; the Gupta mathematicians whose place-value numerals and zero became the digits you use every day; the Mughals, Central Asian outsiders who ruled India two centuries before the British did; Han, Tang, and Song China, where printing, paper money, the magnetic compass, and gunpowder were in use while Paris was a muddy town; Heian Japan and the shogunates; Korea, which printed with movable metal type before Gutenberg was born; Angkor, the largest preindustrial city footprint archaeologists have mapped; and the maritime empires of Srivijaya and Majapahit that most world-history courses skip entirely. Between them ran the connective tissue: the Silk Roads by land and sea, the translation movement of the Islamic Golden Age, and the Mongol Empire, taught as neither pure destroyer nor pure connector, because the record shows both. The course's central claim is cited, not asserted: economic historians' reconstructions (Maddison, 2007; taught with their caveats) put China and India together at roughly half of world output as late as 1820, and the scholarly fight over when and why 'the West' pulled ahead (Pomeranz, 2000, versus Broadberry and colleagues, 2018) is presented as the live debate it is. It is honest where honesty is uncomfortable: caste, hereditary slavery, and conquest were Asian realities long before any European ship arrived, and 'colonization' was not a European invention, only a European escalation. Every claim names a civilization, a period, and a region. Nothing here is 'Asia did X.'",
  lessons: [
    // ────────────── SECTION 1 · THE MAP AND THE CLAIM ──────────────
    {
      slug: "asia-not-one-place",
      title: "1 · One word, many worlds: the map and the timeline",
      section: "Section 1 · The map and the claim",
      body: `Start with the word itself, because the word is a trap.

"Asia" was never a self-description. It is an ancient Greek term, used by writers like Herodotus in the fifth century BCE for the lands east of the Aegean Sea, and it grew outward from there until it covered everything from the Bosporus to the Pacific. No emperor in Chang'an, no scholar in Baghdad, no priest-king at Angkor ever thought of himself as "an Asian" doing "Asian things." Even the boundary between "Europe" and "Asia" is a convention, not a fact of nature: no ocean separates them, and geographers have drawn the line in different places for centuries (Lewis & Wigen, 1997). Today "Asia" covers roughly 30 percent of Earth's land and roughly 60 percent of its people. A single word for that much of humanity will flatten everything it touches unless you handle it carefully.

So this course adopts one rule before any history: **never say "Asia did X."** Name the civilization, the period, and the region, every time. Not "Asians invented printing": woodblock printing in Tang China by the ninth century CE, movable metal type in Goryeo Korea by 1377. Not "Asia was rich": Mughal Bengal's weavers in the seventeenth century, the Song Chinese iron industry in the eleventh. The final exercise of this course drills exactly this habit, because it is the most transferable skill here.

Here is the map you will carry through the course, zone by zone:

| Zone | Anchor civilizations in this course | When they flourished |
|---|---|---|
| **South Asia** | Indus cities; Maurya; Gupta; Mughals | c. 2600 BCE to 1757 CE |
| **East Asia** | Han, Tang, Song China; Heian Japan and the shogunates; Silla, Goryeo, Joseon Korea | c. 200 BCE to the 1800s |
| **Southeast Asia** | Angkor (Khmer); Srivijaya; Majapahit | c. 650 to c. 1500 |
| **Central Asia** | The steppe and oasis world: Silk Road cities; the Mongol Empire | throughout; empire 1206 to the 1300s |
| **West Asia** | The Abbasid Caliphate and the Islamic Golden Age | 750 to 1258 |

Notice two things about that table. First, **West Asia is on it.** The region usually relabeled "the Middle East" is part of Asia, and cutting it out of "Asian history" is a modern habit this course does not follow: Baghdad's translation movement belongs in this story as much as Kaifeng's printers do. Second, **Southeast Asia is on it.** It is the zone world-history surveys most often skip, which is exactly why this course gives it a full section: while European crusaders were besieging castles, the largest urban footprint on the planet was Khmer.

One more piece of framing, because the course title uses a loaded phrase. "Before European colonization" is **not one date.** Portugal seized Goa on India's west coast in 1510 and Malacca in 1511; Spain took Manila in 1571. But for roughly the next two centuries European power in most of Asia meant coastal enclaves and shipping lanes, not ruled territory. Territorial colonization of Asia's heartlands is usually dated from the East India Company's victory at Plassey in Bengal in 1757, and most of mainland Southeast Asia was annexed only in the nineteenth century. Japan, Korea, Siam (Thailand), and most of China were **never European colonies at all**; Korea's colonizer, from 1910 to 1945, was Japan (Frankopan, 2015; Lockard, 2009). Keep the dates straight and two opposite errors die at once: the error that says Asian history stops mattering in 1500, and the error that says nothing bad happened in Asia until Europeans arrived. Section 6 takes up the second error in detail.

:::reveal Why does this course refuse the sentence "Asia invented printing," and what does it say instead? ||| Because "Asia" is a Greek-derived label covering 60 percent of humanity, not an actor, and flattened claims can't be checked. The course names the civilization, period, and region instead: woodblock printing in Tang China by the ninth century CE; movable metal type in Goryeo Korea by 1377.

## Sources
- Lewis, M. W., & Wigen, K. E. (1997). *The myth of continents: A critique of metageography*. University of California Press.
- Frankopan, P. (2015). *The Silk Roads: A new history of the world*. Bloomsbury.
- Lockard, C. A. (2009). *Southeast Asia in world history*. Oxford University Press.
- Hansen, V. (2020). *The year 1000: When explorers connected the world and globalization began*. Scribner.`,
    },
    {
      slug: "asia-center-of-gravity",
      title: "2 · The center of gravity: the claim, its sources, and its caveats",
      section: "Section 1 · The map and the claim",
      body: `This course makes one big claim, and this lesson shows you exactly where it comes from and how far to trust it. The claim: **for most of recorded history, the economic center of the world was in Asia, and the period in which "the West" leads is recent.** Every part of that sentence has a source, and every source has limits. Learning to hold both is the real lesson.

**The population floor (the sturdy part).** Asia has held a large majority of the world's people for as long as demographers can reconstruct. That much is not seriously disputed, and it matters: in a pre-industrial world, where nearly all wealth was farms and hands, the regions with the most people were, in aggregate, the biggest economies almost by definition.

**The GDP reconstructions (the part with error bars).** The economist Angus Maddison spent decades building estimates of economic output for every region of the world across two thousand years. His figures are the ones you have probably seen quoted: in his reconstruction, **India (South Asia) was roughly a quarter of world output around 1700 and China roughly a fifth; by 1820 China alone was roughly a third, and China and India together roughly half** (Maddison, 2007). Read those numbers the way economic historians do, not the way headlines do. Nobody surveyed Mughal Bengal's GDP. Maddison's figures are reconstructions built from tax rolls, population counts, grain prices, and explicit assumptions, and his successors at the Maddison Project keep revising them as evidence improves (Bolt & van Zanden, 2020). Treat them as **rough shares, attributed to their author**, never as measurements. This course will always write "Maddison's estimate" and round aggressively, and when you see anyone quote a precise percentage for the year 1000 without a name attached, you have caught false precision in the wild.

**The qualitative record (the part you can touch).** Independent of any spreadsheet, the physical evidence points the same direction. Europeans sailed east to buy, not to sell: Indian cotton textiles, Chinese silk and porcelain, and Southeast Asian spices were what the world wanted, and Europe paid overwhelmingly in silver, much of it mined in Spanish America and shipped, via Manila and via Europe, to Asia (Frank, 1998; Pomeranz, 2000). The historian Janet Abu-Lughod (1989) mapped the thirteenth-century trading world as a set of interlocking circuits from Flanders to the South China Sea, with the richest circuits at the Asian end and no single power in charge of the whole.

**The interpretive fight (the honest part).** How late did Asia's lead last, and why did it end? That is a live scholarly debate, and this course teaches it as one. Kenneth Pomeranz's *The Great Divergence* (2000) argued that the most advanced regions of China, especially the Yangzi River delta, were broadly comparable to England in living standards and market development as late as about 1750, and that Europe's breakout after 1800 was **contingent**, riding on accessible coal and New World resources rather than on any long-standing superiority. Stephen Broadberry, Hanhui Guan, and David Daokui Li (2018) rebuilt the national accounts and pushed back: in their reconstruction the divergence begins substantially earlier, with northwestern Europe pulling ahead of China's richest regions well before 1750. The debate continues in the journals; Section 7 walks through it properly. What no serious side disputes is the shape of the story this course tells: Asia's great economies were central for a very long time, and the world in which "the West" clearly leads is, on the scale of this course's timeline, an eyeblink.

So here is the course's claim, stated with the discipline it will demand of every other claim: *according to the standard reconstructions (Maddison, 2007, as revised by the Maddison Project), Asia's two largest economies alone accounted for roughly half of world output as late as 1820; the timing and causes of the reversal are contested among economic historians (Pomeranz, 2000; Broadberry et al., 2018).* That sentence, hedges and all, is stronger than any confident slogan, because every part of it can survive a hostile fact-check.

:::reveal Why does this course insist on writing "Maddison's estimate" instead of just stating the GDP percentages as facts? ||| Because nobody measured GDP in 1700; Maddison's figures are reconstructions from tax rolls, population counts, and explicit assumptions, with wide error bars, and the Maddison Project keeps revising them. Attributing and rounding the numbers keeps the claim honest and lets it survive a hostile fact-check; asserting precise percentages for pre-modern centuries is false precision.

## Sources
- Maddison, A. (2007). *Contours of the world economy, 1-2030 AD: Essays in macro-economic history*. Oxford University Press.
- Bolt, J., & van Zanden, J. L. (2020). *Maddison style estimates of the evolution of the world economy: A new 2020 update* (Maddison Project Working Paper WP-15). University of Groningen.
- Pomeranz, K. (2000). *The Great Divergence: China, Europe, and the making of the modern world economy*. Princeton University Press.
- Broadberry, S., Guan, H., & Li, D. D. (2018). China, Europe, and the Great Divergence: A study in historical national accounting, 980-1850. *The Journal of Economic History, 78*(4), 955-1000.
- Frank, A. G. (1998). *ReOrient: Global economy in the Asian age*. University of California Press.
- Abu-Lughod, J. L. (1989). *Before European hegemony: The world system A.D. 1250-1350*. Oxford University Press.`,
      recallContent: [
        {
          prompt: "What is the one rule this course adopts before any history, and why?",
          answer:
            "Never say 'Asia did X.' Name the civilization, the period, and the region for every claim, because 'Asia' is an outsiders' label (Greek in origin) covering roughly 60 percent of humanity, and flattened claims can neither be checked nor falsified.",
        },
        {
          prompt: "Give the key dates that show 'European colonization of Asia' was not one event.",
          answer:
            "Coastal enclaves first: Goa 1510, Malacca 1511, Manila 1571. Territorial rule only from Plassey in Bengal, 1757; most of mainland Southeast Asia annexed in the 1800s. Japan, Korea, Siam, and most of China were never European colonies; Korea was colonized by Japan (1910-1945).",
        },
      ],
    },
    {
      slug: "asia-quiz-1",
      title: "Section 1 quiz · The map and the claim",
      section: "Section 1 · The map and the claim",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Where does the word 'Asia' come from?",
            options: [
              "It is a Greek-derived term for lands east of the Aegean, later stretched to cover the whole continent; it was never a self-description",
              "It is the ancient Chinese name for the lands west of the Pacific",
              "It was coined by Mughal geographers in the 1500s",
              "It comes from the Sanskrit word for 'sunrise'",
            ],
            correctIndex: 0,
            explanation:
              "Writers like Herodotus used it in the fifth century BCE for the lands east of the Aegean; no historical actor in Chang'an, Baghdad, or Angkor thought of himself as 'an Asian.'",
            sourceLessonSlug: "asia-not-one-place",
          },
          {
            prompt: "What is the one rule this course applies to every historical claim?",
            options: [
              "Name the civilization, the period, and the region; never say 'Asia did X'",
              "Prefer the oldest available source",
              "Trust population figures over trade figures",
              "Always cite at least one European observer",
            ],
            correctIndex: 0,
            explanation:
              "'Asia' covers roughly 60 percent of humanity; a claim flattened to the continent can be neither checked nor falsified. The final exercise drills the naming habit.",
            sourceLessonSlug: "asia-not-one-place",
          },
          {
            prompt: "Why does the course insist that West Asia (the 'Middle East') belongs in Asian history?",
            options: [
              "Because relabeling it out of Asia is a modern habit, and Baghdad's translation movement is part of this story",
              "Because the Abbasids ruled China",
              "Because Europe had no contact with it",
              "Because it was the only literate zone of Asia",
            ],
            correctIndex: 0,
            explanation:
              "The Abbasid world of 750-1258 sits on the course map alongside South, East, Southeast, and Central Asia; cutting it out flattens the connective tissue the course teaches in Section 5.",
            sourceLessonSlug: "asia-not-one-place",
          },
          {
            prompt: "Which zone does the course call 'the chapter most world-history surveys skip'?",
            options: [
              "Southeast Asia (Angkor, Srivijaya, Majapahit)",
              "East Asia",
              "South Asia",
              "West Asia",
            ],
            correctIndex: 0,
            explanation:
              "That omission is why the course gives Southeast Asia a full section: while European crusaders besieged castles, the largest mapped urban footprint on the planet was Khmer.",
            sourceLessonSlug: "asia-not-one-place",
          },
          {
            prompt: "When did European territorial colonization of Asia's heartlands begin, on the usual dating?",
            options: [
              "With the East India Company's victory at Plassey in Bengal, 1757",
              "With Vasco da Gama's arrival in 1498",
              "With the fall of Constantinople in 1453",
              "With the Opium War in 1839",
            ],
            correctIndex: 0,
            explanation:
              "Goa (1510), Malacca (1511), and Manila (1571) were coastal enclaves; ruled territory on a subcontinental scale is usually dated from Plassey, and most of mainland Southeast Asia was annexed only in the 1800s.",
            sourceLessonSlug: "asia-not-one-place",
          },
          {
            prompt: "Which of these Asian countries was colonized by a European power?",
            options: [
              "None of these: Japan, Siam (Thailand), and Korea were never European colonies",
              "Japan, by Portugal",
              "Siam (Thailand), by France",
              "Korea, by Britain",
            ],
            correctIndex: 0,
            explanation:
              "Japan and Siam kept their sovereignty; Korea was colonized in 1910, but by Japan, not by any European power. 'European colonization' has to be taught precisely or it teaches errors.",
            sourceLessonSlug: "asia-not-one-place",
          },
          {
            prompt: "In Maddison's (2007) reconstruction, roughly what share of world output did China and India together hold in 1820?",
            options: [
              "Roughly half",
              "Under 10 percent",
              "About one fifth",
              "Over 90 percent",
            ],
            correctIndex: 0,
            explanation:
              "His estimates put China alone at roughly a third in 1820 and India at roughly a sixth. The course always writes 'Maddison's estimate' and rounds, because these are reconstructions, not measurements.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "How does the course say you should read Maddison's GDP figures?",
            options: [
              "As attributed reconstructions with wide error bars, built from tax rolls and assumptions, and still being revised",
              "As exact measurements from period surveys",
              "As propaganda with no evidentiary value",
              "As accurate for Europe but invented for Asia",
            ],
            correctIndex: 0,
            explanation:
              "Nobody surveyed Mughal Bengal's GDP. The Maddison Project (Bolt & van Zanden, 2020) keeps revising the estimates; quoting a precise unattributed percentage for a pre-modern century is false precision.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "What did Pomeranz (2000) argue in The Great Divergence?",
            options: [
              "Advanced Chinese regions were broadly comparable to England as late as about 1750, and Europe's breakout was contingent on coal and New World resources",
              "Europe had led the world economy since the Roman Empire",
              "China never had market institutions",
              "The divergence is a myth and never happened",
            ],
            correctIndex: 0,
            explanation:
              "Pomeranz compared England with the Yangzi delta rather than with 'China' as a whole, and located the decisive break after 1800, in contingencies rather than deep superiority.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "What is the main published challenge to Pomeranz's late dating taught in this course?",
            options: [
              "Broadberry, Guan, and Li (2018) rebuilt the historical national accounts and place the divergence substantially earlier than 1750",
              "There is none; the question is settled",
              "Maddison (2007) proved the divergence began in 1492",
              "Abu-Lughod (1989) showed Europe led by 1250",
            ],
            correctIndex: 0,
            explanation:
              "The debate is live in the journals, which is exactly how the course presents it: attributed positions, no winner declared. Section 7 walks through it.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "Which direction did silver overwhelmingly flow in the early modern world economy, and why?",
            options: [
              "Toward Asia, because Indian textiles, Chinese silk and porcelain, and Southeast Asian spices were what the world wanted to buy",
              "Toward Europe, because Asia bought European manufactures",
              "It circulated only inside the Americas",
              "Toward Africa, to pay for gold",
            ],
            correctIndex: 0,
            explanation:
              "Europeans sailed east to buy, not to sell, and paid largely in silver, much of it mined in Spanish America (Frank, 1998; Pomeranz, 2000). The trade's direction is physical evidence independent of any GDP spreadsheet.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "What did Abu-Lughod (1989) map in Before European Hegemony?",
            options: [
              "A thirteenth-century world system of interlocking trade circuits from Flanders to the South China Sea, with no single hegemon",
              "The complete road network of the Mongol Empire",
              "The GDP of every medieval state",
              "The spread of the Black Death",
            ],
            correctIndex: 0,
            explanation:
              "Her point was structural: the world economy predates European dominance, and its richest circuits in 1250-1350 were at the Asian end.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "Which of these is an example of 'false precision' as the course defines it?",
            options: [
              "'China produced exactly 28.4 percent of world GDP in the year 1000,' quoted with no author attached",
              "'Maddison's estimate puts China at roughly a third of world output in 1820'",
              "'The timing of the divergence is contested among economic historians'",
              "'Asia has held a large majority of world population for as long as demographers can reconstruct'",
            ],
            correctIndex: 0,
            explanation:
              "A decimal-point percentage for a pre-modern century, asserted without attribution, claims a certainty the evidence cannot support. The other three sentences carry their hedges and attributions.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "Which part of the course's central claim does it call 'the sturdy part'?",
            options: [
              "Asia's population majority: a large majority of the world's people, for as long as demographers can reconstruct",
              "The exact GDP percentages",
              "The claim that no Asian state ever declined",
              "The claim that Europe was always poor",
            ],
            correctIndex: 0,
            explanation:
              "In a pre-industrial world of farms and hands, the regions with the most people were in aggregate the biggest economies almost by definition; the GDP shares are the part with error bars.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "Why does the course teach the Pomeranz-Broadberry disagreement instead of picking a side?",
            options: [
              "Because it is a live scholarly debate, and the course's own voice asserts only what is settled",
              "Because both sides are equally likely to be wrong about everything",
              "Because students are not allowed to see disagreements",
              "Because the debate was resolved in 2018",
            ],
            correctIndex: 0,
            explanation:
              "What is settled (Asia's long centrality, the recency of the West's lead) the course asserts; what is contested (timing, causes) it attributes to named scholars on each side.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
        ],
      },
    },
    // ────────────── SECTION 2 · SOUTH ASIA ──────────────
    {
      slug: "asia-indus-cities",
      title: "3 · The Indus cities, and the script nobody can read",
      section: "Section 2 · South Asia: Indus to the Mughals",
      body: `South Asia's story opens with a civilization that has no named kings, no readable words, and some of the best municipal engineering of the ancient world.

The **Indus (or Harappan) civilization** flourished in its mature urban phase from roughly **2600 to 1900 BCE**, along the Indus River and the now-dry Ghaggar-Hakra system, in present-day Pakistan and northwest India. Its best-known cities are **Mohenjo-daro** and **Harappa** in Pakistan, and **Dholavira** and **Rakhigarhi** in India. Archaeologists have recorded well over a thousand settlements, spread across an area larger, by common estimates, than ancient Egypt and Mesopotamia combined (Kenoyer, 1998; Possehl, 2002). This was one of the world's first urban civilizations, contemporary with Old Kingdom Egypt and the cities of Sumer, and it traded with the latter: Mesopotamian texts record goods from a land called **Meluhha**, usually identified with the Indus region (Possehl, 2002).

What the cities are famous for is **planning**. Mohenjo-daro's streets run in broadly regular alignments; houses were built of fired brick in standardized proportions; and, most striking to modern eyes, the cities were plumbed. Covered drains ran down the streets, private houses connected to them, and many houses had dedicated bathing platforms. Mohenjo-daro's **Great Bath**, a watertight brick tank about 12 meters long, is among the earliest known public water structures anywhere (Kenoyer, 1998; UNESCO World Heritage Centre, n.d.). Weights recovered across Indus sites follow a single standardized system, which tells you commerce over a huge area ran on shared rules.

Now the part every honest course must say plainly. **The Indus script is undeciphered.** Roughly four to seven hundred distinct signs, by the main catalogs, appear on seals, tablets, and pottery. The inscriptions are short: most are only a few signs long, and even the longest run to just a few dozen. There is no bilingual text, no Rosetta Stone. We do not know what language its makers spoke, and after more than a century of attempts, no proposed decipherment has won scholarly acceptance. The dispute goes even deeper: Farmer, Sproat, and Witzel (2004) argued that the signs may not encode language at all, while specialists like Parpola (1994) maintain that they do. Both positions are live; this course asserts neither. What that means in practice is humbling: a civilization of perhaps a million or more people is known to us **entirely through archaeology**, with no names, no dates in its own voice, no stories.

Notice what is also missing from the digs, because the absence is evidence too. No grand royal tombs. No monumental palaces or unambiguous temples on the Egyptian or Mesopotamian model have been identified (Possehl, 2002). Whether that reflects a genuinely different political order or simply the limits of what survives, archaeologists still debate.

Around **1900 BCE** the urban system faded: cities shrank, writing and the weight system fell out of use, and settlement shifted eastward. The causes are debated (shifting rivers, a weakening monsoon, declining trade), and the old story that invading "Aryans" destroyed the cities is **rejected**: the famous "massacre" once claimed at Mohenjo-daro did not withstand re-examination, and the urban decline predates the period associated with Indo-Aryan migration (Possehl, 2002; Kenoyer, 1998). When a claim dies in the evidence, the course says so.

:::reveal What is the honest, current state of the Indus script, stated with both layers of uncertainty? ||| It is undeciphered: several hundred distinct signs, short inscriptions (the longest only a few dozen signs), no bilingual text, no accepted decipherment, unknown underlying language. And beneath that, scholars actively dispute whether the signs encode language at all (Farmer, Sproat & Witzel 2004 say maybe not; Parpola 1994 says they do). The course asserts neither side.

## Sources
- Kenoyer, J. M. (1998). *Ancient cities of the Indus Valley civilization*. Oxford University Press.
- Possehl, G. L. (2002). *The Indus civilization: A contemporary perspective*. AltaMira Press.
- Farmer, S., Sproat, R., & Witzel, M. (2004). The collapse of the Indus-script thesis: The myth of a literate Harappan civilization. *Electronic Journal of Vedic Studies, 11*(2), 19-57.
- Parpola, A. (1994). *Deciphering the Indus script*. Cambridge University Press.
- UNESCO World Heritage Centre. (n.d.). *Archaeological ruins at Moenjodaro*. https://whc.unesco.org/en/list/138/`,
      recallContent: [
        {
          prompt: "State the course's central claim with its full source discipline (attribution + hedges).",
          answer:
            "According to the standard reconstructions (Maddison, 2007, revised by the Maddison Project), China and India together accounted for roughly half of world output as late as 1820; the timing and causes of the reversal are contested (Pomeranz, 2000, argues late and contingent; Broadberry, Guan & Li, 2018, argue earlier).",
        },
        {
          prompt: "What physical, non-spreadsheet evidence points to Asia as the economic center before 1800?",
          answer:
            "The direction of trade: Europeans sailed east to buy Indian cotton, Chinese silk and porcelain, and Southeast Asian spices, and paid overwhelmingly in silver (much of it Spanish-American), because Asia made what the world wanted (Frank, 1998; Pomeranz, 2000).",
        },
      ],
    },
    {
      slug: "asia-maurya-ashoka",
      title: "4 · Maurya: the emperor who published his conscience",
      section: "Section 2 · South Asia: Indus to the Mughals",
      body: `About fifteen centuries after the Indus cities faded, South Asia produced its first documented empire, and with it one of the strangest royal documents in world history: an emperor's public statement of remorse, carved on rocks across a subcontinent.

**Chandragupta Maurya** seized power in the Ganges kingdom of Magadha around **321 BCE**, in the turbulence after Alexander of Macedon's armies withdrew from the Indus region, and built an empire from his capital at **Pataliputra** (near modern Patna). A Greek ambassador, **Megasthenes**, lived at that court and wrote an account of it; his book survives only in fragments quoted by later authors, so historians use it carefully (Thapar, 2002). Note what this already tells you: large-scale empire, professional armies, and diplomatic exchange with the Hellenistic world are features of South Asian history from the fourth century BCE, two thousand years before any European power ruled an acre of it.

The empire's most famous ruler is Chandragupta's grandson, **Ashoka** (reigned c. 268-232 BCE). Early in his reign he conquered **Kalinga**, on India's east coast. Then he did something no other ancient conqueror is known to have done: he had his reaction inscribed on stone, in public, across his empire. In his 13th Major Rock Edict, Ashoka states, in the edict's own figures, that a hundred and fifty thousand people were deported from Kalinga, a hundred thousand were killed, and many times that number perished, and that the killing "weighed heavily on his mind." Treat the numbers as Ashoka's claim rather than a verified census; ancient royal figures are rhetoric as much as arithmetic. But the document itself is real and datable, and its content is unique: a king advertising his own war's cost as a moral failure (Thapar, 2012).

The **edicts** are the earliest substantial body of readable royal writing from South Asia: inscriptions on rocks and polished stone pillars, mostly in **Prakrit** written in the **Brahmi** script (with **Kharosthi** in the northwest, and at Kandahar, in present-day Afghanistan, a bilingual edict in **Greek and Aramaic**, addressed to the region's Hellenistic and Aramaic-reading population). In them Ashoka promotes what he calls *dhamma*: non-injury, truthfulness, respect across sects, provision of medical care and wells along roads. He also patronized Buddhism, and the Sri Lankan chronicles credit missions in his era, including his son Mahinda's to Sri Lanka, with carrying it beyond India; per the chronicles, note, which are later and devotional (Thapar, 2012). The lion capital of his pillar at Sarnath is today the national emblem of India.

Here is the detail that connects this lesson to the whole course's method. After the Maurya empire ended, the Brahmi script was gradually forgotten in India itself. For centuries, people lived among Ashoka's pillars and could not read them. The script was deciphered in **1837** by **James Prinsep**, an East India Company mint official working with Indian pandits and accumulated scholarship, and only then did Ashoka re-emerge from legend into documented history (Thapar, 2012). Records get lost, and recovered, and the recovery is itself work you can date and attribute.

One caution against the romance trap. Ashoka's remorse did not dissolve his empire: the edicts announce that he retained Kalinga, and they warn the forest peoples that he has power to punish. The Mauryan state ran on taxation, an army, and, per the political manual tradition associated with it, surveillance. An empire with a conscience is still an empire. This course will say the same about every state it admires.

:::reveal What makes Ashoka's 13th Major Rock Edict unique among ancient royal inscriptions, and how should its casualty figures be read? ||| It is a conqueror's public, carved admission that his own war was a moral failure: it reports (in its own figures) 150,000 deported and 100,000 killed at Kalinga and says this weighed on the king's mind. The numbers should be read as Ashoka's claim, royal rhetoric rather than a verified census; what is solid is the datable document and its unprecedented content.

## Sources
- Thapar, R. (2012). *Aśoka and the decline of the Mauryas* (3rd ed.). Oxford University Press.
- Thapar, R. (2002). *Early India: From the origins to AD 1300*. University of California Press.
- Dhammika, S. (Trans.). (1993). *The edicts of King Asoka: An English rendering*. Buddhist Publication Society.`,
      recallContent: [
        {
          prompt: "Give the Indus civilization's mature dates, two cities in each modern country, and its scale.",
          answer:
            "Mature urban phase c. 2600-1900 BCE. Mohenjo-daro and Harappa (present-day Pakistan); Dholavira and Rakhigarhi (present-day India). Well over a thousand recorded settlements, covering an area larger by common estimates than Egypt and Mesopotamia combined.",
        },
        {
          prompt: "What physical evidence shows Indus cities were planned, and what is notably absent from the digs?",
          answer:
            "Regular street alignments, standardized fired bricks, a single weight system across sites, covered street drains with house connections, bathing platforms, and the Great Bath at Mohenjo-daro. Absent: readable texts, named rulers, grand royal tombs, and unambiguous palaces or temples.",
        },
      ],
    },
    {
      slug: "asia-gupta-zero",
      title: "5 · Gupta India and the numerals you are using right now",
      section: "Section 2 · South Asia: Indus to the Mughals",
      body: `Look at any number on your screen. The system you are reading it in, ten digits, place value, a zero, was worked out in India, and this lesson traces exactly what is documented about that, because few claims in world history are misstated more often in both directions.

The **Gupta empire** (c. **320-550 CE**) united much of northern India from, again, Magadha. Historians often label its era a "classical age" of Sanskrit culture, a convention worth a hedge (golden-age labels always are; this was also a society of hardening caste hierarchy, which Section 6 takes up). What is concrete: courtly Sanskrit literature reached a peak associated with the poet **Kalidasa**; and the Buddhist monastery-university at **Nalanda**, founded in this period, would draw students from across Asia for centuries, including the Chinese pilgrim Xuanzang in the 600s (Thapar, 2002).

Now the mathematics, stated link by documented link (Plofker, 2009):

- **Place value.** The astronomer **Aryabhata**, writing his *Aryabhatiya* in **499 CE**, computed with a decimal place-value system, gave a value of pi accurate to four decimal places, built early trigonometric tables, and proposed that the earth rotates. Place-value notation is in confident use in Indian mathematics from at least this period.
- **Zero as a number.** Several ancient systems, Babylonian and Maya among them, used a placeholder for an empty position. The documented Indian contribution is bigger: treating zero as a **number you can calculate with**. **Brahmagupta**, in his *Brahmasphutasiddhanta* (**628 CE**), states rules for arithmetic with zero and with negative numbers, the earliest known text to do so systematically. (He also ruled that zero divided by zero is zero, which is wrong, and the honesty of recording a great mathematician's error is part of this course's method.)
- **The oldest physical zeros.** A dot-zero appears in a Khmer inscription in Cambodia dated **683 CE**, and the **Gwalior temple inscription** of **876 CE** is the classic securely dated zero in India, written much as we write it. The **Bakhshali manuscript**, a birch-bark mathematical text with hundreds of dot-zeros, made headlines in 2017 when radiocarbon tests at the Bodleian Library returned dates spanning roughly the third to tenth centuries CE; specialist historians of Indian mathematics immediately disputed the library's "oldest zero" framing, arguing the manuscript's text is a unified later composition (Plofker et al., 2017). So: the headline is contested; Gwalior 876 is safe; Brahmagupta 628 is textual bedrock.
- **Transmission.** In Abbasid Baghdad around the **820s CE**, the mathematician **al-Khwarizmi** wrote a treatise on calculating with the Indian numerals; Arabic mathematicians themselves called the system "Hindi" reckoning. Latin translations of such works, and Fibonacci's *Liber Abaci* (**1202**), carried the digits into Europe, which is why Europeans called them "Arabic numerals." The label records the messenger, not the origin, and both deserve credit: Indian invention, Arabic transmission and development, European adoption (Plofker, 2009). That chain, India to Baghdad to Europe, is this course's connective tissue in miniature, and you will see it again in Section 5.

Why does this lesson matter beyond trivia? Because it models how to make a "who invented it" claim survive scrutiny: name the text, name the date, separate placeholder from number, flag the contested manuscript, and credit the transmission chain. "India invented our numbers" done sloppily invites debunking; done precisely, it is one of the best-documented facts in the history of science.

:::reveal Lay out the documented chain for zero and the decimal numerals, with dates, including the contested link. ||| Place value in use by Aryabhata's Aryabhatiya (499 CE); zero treated as a number with arithmetic rules in Brahmagupta's Brahmasphutasiddhanta (628 CE); physical zeros in a Khmer inscription (683 CE) and the Gwalior inscription (876 CE). The Bakhshali manuscript's radiocarbon dates (3rd-10th centuries) are CONTESTED as evidence for an earlier zero (Plofker et al., 2017). Transmission: al-Khwarizmi in Baghdad (c. 820s) wrote on the Indian numerals; Fibonacci's Liber Abaci (1202) helped carry them into Europe, hence the misnomer "Arabic numerals."

## Sources
- Plofker, K. (2009). *Mathematics in India*. Princeton University Press.
- Plofker, K., Keller, A., Hayashi, T., Montelle, C., & Wujastyk, D. (2017). The Bakhshālī manuscript: A response to the Bodleian Library's radiocarbon dating. *History of Science in South Asia, 5*(1), 134-150.
- Thapar, R. (2002). *Early India: From the origins to AD 1300*. University of California Press.`,
      recallContent: [
        {
          prompt: "Date the Maurya empire's founding and Ashoka's reign, and name the capital.",
          answer:
            "Chandragupta Maurya took power in Magadha c. 321 BCE, after Alexander's withdrawal from the Indus region; capital Pataliputra (near modern Patna). Ashoka reigned c. 268-232 BCE.",
        },
        {
          prompt: "In what languages and scripts were Ashoka's edicts written, and who read them again after they were forgotten?",
          answer:
            "Mostly Prakrit in the Brahmi script, Kharosthi in the northwest, plus a Greek-and-Aramaic bilingual at Kandahar. Brahmi was forgotten for centuries and deciphered in 1837 by James Prinsep, building on Indian pandits' and earlier scholars' work.",
        },
      ],
    },
    {
      slug: "asia-mughals",
      title: "6 · The Mughals: an empire of outsiders, before the Europeans",
      section: "Section 2 · South Asia: Indus to the Mughals",
      body: `The last South Asian empire before British rule was founded by a Central Asian prince who wrote poetry in Turkic, traced his ancestry to both Timur and Genghis Khan, and had never seen India until he invaded it. Getting the Mughals right is the fastest way to get "European colonization" right, so this lesson does both.

**Babur**, a Timurid ruler from the Fergana valley in present-day Uzbekistan, defeated the Delhi sultan Ibrahim Lodi at the **First Battle of Panipat in 1526** and founded the dynasty Europeans came to call **"Mughal," a Persian form of "Mongol."** Even the name is an outsiders' label for outsiders. Babur's own memoir, the *Baburnama*, is refreshingly frank about what he was doing: conquering, and not always admiring what he found. The empire he founded was Muslim-ruled, Persian-speaking at court, and governed a population that remained mostly non-Muslim throughout (Richards, 1993; Eaton, 2019).

His grandson **Akbar** (reigned **1556-1605**) built the machine that made the dynasty durable: a graded imperial service (the *mansabdar* system) that folded Rajput and other Hindu elites into the ruling class, systematic land-revenue measurement associated with his minister Todar Mal, abolition of the tax on non-Muslim pilgrims and then of the *jizya* poll tax, and a court policy of *sulh-i kul*, "peace with all," that staged debates among Muslim, Hindu, Jain, Zoroastrian, and Christian scholars (Richards, 1993). Hedge where the record demands it: Akbar's much-cited "new religion," the *Din-i Ilahi*, was a small court discipleship circle, not a mass faith, and historians debate whether "religion" is even the right word for it (Eaton, 2019).

The Mughal economy is where this course's central thesis gets concrete. In Maddison's (2007) reconstruction, read with the caveats from Lesson 2, the subcontinent under the Mughals was roughly a **quarter of world output around 1700**, and Mughal **Bengal's** cotton weavers supplied textiles to buyers from Southeast Asia to Europe. When England's ambassador **Sir Thomas Roe** reached Emperor Jahangir's court in **1615**, he came as a supplicant asking trade permission, and European trading companies operated for the next century-plus at the empire's sufferance, from coastal footholds (Richards, 1993). Shah Jahan's **Taj Mahal** (completed mid-1600s; UNESCO World Heritage since 1983) is the era's best-known monument, built at the center of that wealth.

Now the teaching point the course title depends on. **The Mughals were themselves outsiders who conquered and ruled India for two centuries before any European power ruled any of it.** Conquest, foreign dynasties, religious difference between rulers and ruled, extraction of revenue: all of it was present in South Asia long before 1757. So "European colonization" cannot mean "the arrival of outsiders"; it names something more specific, and the difference is worth stating carefully. The Mughals settled where they ruled; Delhi and Agra were the empire's centers, its wealth was largely spent and reinvested inside the subcontinent, and the dynasty became a South Asian dynasty. British rule, by contrast, was run by a company and then a distant crown, with sovereignty, profits, and final decisions seated in London. Historians argue about how much weight each difference carries, and the follow-on Great Divergence course takes that up; what this course asserts is only the datable sequence.

That sequence, precisely: **Aurangzeb**, the last of the powerful emperors, died in **1707**; the empire fragmented into successor states over the following decades; and the East India Company's victory at **Plassey (1757)** and its acquisition of the **diwani** (revenue rights) of Bengal in **1765** began territorial European rule, with a Mughal emperor surviving as a figurehead in Delhi until the British deposed the last one in 1857 (Richards, 1993). European colonization of India was real, datable, and transformative. It was not the beginning of Indian contact with conquest, and a course that taught it that way would flatten two millennia of documented South Asian statecraft into a waiting room.

:::reveal Why do the Mughals prove that "European colonization" cannot simply mean "outsiders arrived," and what does the course say it does mean here? ||| Because the Mughals WERE outsiders: a Central Asian, Persian-speaking, Muslim dynasty (Babur, descended from Timur and Genghis Khan, took Delhi in 1526) ruling a mostly non-Muslim subcontinent for two centuries before Plassey (1757). "European colonization" names something more specific and datable: rule seated abroad, with sovereignty and profits flowing to a distant company and crown, beginning territorially with Plassey and the 1765 Bengal diwani, whereas the Mughals settled, spent, and became a South Asian dynasty.

## Sources
- Richards, J. F. (1993). *The Mughal Empire* (The New Cambridge History of India, I.5). Cambridge University Press.
- Eaton, R. M. (2019). *India in the Persianate Age, 1000-1765*. University of California Press.
- Maddison, A. (2007). *Contours of the world economy, 1-2030 AD: Essays in macro-economic history*. Oxford University Press.
- UNESCO World Heritage Centre. (n.d.). *Taj Mahal*. https://whc.unesco.org/en/list/252/`,
      recallContent: [
        {
          prompt: "What exactly did Brahmagupta do in 628 CE, and what error of his does the course record?",
          answer:
            "In the Brahmasphutasiddhanta he stated systematic rules for arithmetic with zero and with negative numbers, the earliest known text to treat zero as a number to calculate with. He also ruled that zero divided by zero equals zero, which is wrong; the course records the error deliberately.",
        },
        {
          prompt: "Why are 'our numbers' called Arabic numerals, and what does the course say the label records?",
          answer:
            "Because Europe received them via the Arabic world: al-Khwarizmi wrote on calculation with the Indian numerals in Baghdad c. 820s, and Latin translations plus Fibonacci's Liber Abaci (1202) spread them in Europe. The label records the messenger, not the origin; Arabic mathematicians themselves called it Hindi reckoning.",
        },
      ],
    },
    {
      slug: "asia-quiz-2",
      title: "Section 2 quiz · South Asia",
      section: "Section 2 · South Asia: Indus to the Mughals",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What are the dates of the Indus civilization's mature urban phase?",
            options: [
              "Roughly 2600-1900 BCE",
              "Roughly 1500-1000 BCE",
              "Roughly 3500-3000 BCE",
              "Roughly 800-400 BCE",
            ],
            correctIndex: 0,
            explanation:
              "Contemporary with Old Kingdom Egypt and Sumer's cities; Mesopotamian texts record trade with a land called Meluhha, usually identified with the Indus region.",
            sourceLessonSlug: "asia-indus-cities",
          },
          {
            prompt: "What is the current scholarly status of the Indus script?",
            options: [
              "Undeciphered, with no accepted reading; scholars even dispute whether it encodes language at all",
              "Deciphered in 1837 by James Prinsep",
              "Readable but only partially translated",
              "Proven to be an early form of Sanskrit",
            ],
            correctIndex: 0,
            explanation:
              "No bilingual text exists, inscriptions are short, and no decipherment has won acceptance. Farmer, Sproat & Witzel (2004) argue the signs may not encode language; Parpola (1994) maintains they do.",
            sourceLessonSlug: "asia-indus-cities",
          },
          {
            prompt: "Which feature is the Indus cities' engineering signature?",
            options: [
              "Municipal water infrastructure: covered street drains, house connections, bathing platforms, the Great Bath",
              "Stone pyramids over royal tombs",
              "Massive city walls with chariot gates",
              "Aqueducts on arched bridges",
            ],
            correctIndex: 0,
            explanation:
              "Standardized bricks and weights point to shared rules over a huge area; what is missing (readable texts, named kings, unambiguous palaces or temples) is evidence too.",
            sourceLessonSlug: "asia-indus-cities",
          },
          {
            prompt: "What happened to the old claim that invading 'Aryans' destroyed the Indus cities?",
            options: [
              "It is rejected: the claimed massacre evidence did not withstand re-examination, and the urban decline predates the migration period",
              "It was confirmed by radiocarbon dating",
              "It remains the leading explanation",
              "It was replaced by proof of a volcanic eruption",
            ],
            correctIndex: 0,
            explanation:
              "The decline c. 1900 BCE is real; its causes (river shifts, weakening monsoon, trade decline) are debated. When a claim dies in the evidence, the course says so.",
            sourceLessonSlug: "asia-indus-cities",
          },
          {
            prompt: "What is unique about Ashoka's 13th Major Rock Edict?",
            options: [
              "A conqueror publicly inscribed remorse for his own war, reporting its deportations and deaths as a moral failure",
              "It is the oldest writing found in India",
              "It abolished the Mauryan army",
              "It was written in Latin",
            ],
            correctIndex: 0,
            explanation:
              "No other ancient conqueror is known to have published such a statement. Its figures (150,000 deported, 100,000 killed, in the edict's own numbers) are Ashoka's claim, not a verified census.",
            sourceLessonSlug: "asia-maurya-ashoka",
          },
          {
            prompt: "How should the casualty figures in Ashoka's Kalinga edict be treated?",
            options: [
              "As the king's own reported figures, royal rhetoric rather than verified statistics",
              "As exact counts from an imperial census",
              "As a later forgery",
              "As referring to animals, not people",
            ],
            correctIndex: 0,
            explanation:
              "The document is real and datable; the numbers are its author's. Separating the two is the same discipline the course applies to Maddison's percentages.",
            sourceLessonSlug: "asia-maurya-ashoka",
          },
          {
            prompt: "What happened to the Brahmi script of Ashoka's edicts after the Mauryas?",
            options: [
              "It was gradually forgotten in India and deciphered only in 1837, by James Prinsep working with Indian pandits' scholarship",
              "It remained in continuous use until today",
              "It was banned by the Guptas",
              "It was never written down",
            ],
            correctIndex: 0,
            explanation:
              "For centuries people lived among pillars they could not read. Records get lost and recovered, and the recovery is datable, attributable work.",
            sourceLessonSlug: "asia-maurya-ashoka",
          },
          {
            prompt: "Which languages appear on Ashoka's Kandahar edict, and why does that matter?",
            options: [
              "Greek and Aramaic, showing the Mauryan state addressed its Hellenistic and Aramaic-reading subjects in their own languages",
              "Sanskrit and Tamil, showing a north-south divide",
              "Chinese and Prakrit, showing Silk Road contact",
              "Latin and Greek, showing Roman influence",
            ],
            correctIndex: 0,
            explanation:
              "The empire's northwest reached into present-day Afghanistan, where Alexander's successors had settled Greek speakers; most edicts elsewhere are Prakrit in Brahmi or Kharosthi.",
            sourceLessonSlug: "asia-maurya-ashoka",
          },
          {
            prompt: "What is the earliest known text to state systematic rules for arithmetic with zero?",
            options: [
              "Brahmagupta's Brahmasphutasiddhanta, 628 CE",
              "Aryabhata's Aryabhatiya, 499 CE",
              "Fibonacci's Liber Abaci, 1202",
              "Euclid's Elements, c. 300 BCE",
            ],
            correctIndex: 0,
            explanation:
              "Aryabhata computed with place value; Brahmagupta treated zero (and negatives) as numbers with stated rules, though he wrongly ruled that zero divided by zero is zero.",
            sourceLessonSlug: "asia-gupta-zero",
          },
          {
            prompt: "Why is the Bakhshali manuscript's 'world's oldest zero' claim taught as contested?",
            options: [
              "Its 2017 radiocarbon dates span roughly the 3rd to 10th centuries, and specialist historians dispute the oldest-folio framing (Plofker et al., 2017)",
              "The manuscript was proven to be a modern forgery",
              "It contains no zeros at all",
              "Radiocarbon dating cannot be applied to birch bark",
            ],
            correctIndex: 0,
            explanation:
              "The safe anchors are textual and epigraphic: Brahmagupta 628 CE, the Khmer inscription of 683 CE, and the Gwalior inscription of 876 CE.",
            sourceLessonSlug: "asia-gupta-zero",
          },
          {
            prompt: "Why are the decimal digits called 'Arabic numerals' in Europe?",
            options: [
              "Europe received them via the Arabic world (al-Khwarizmi c. 820s; Fibonacci 1202); the label records the messenger, not the Indian origin",
              "They were invented in Baghdad",
              "Arab traders invented them for bookkeeping",
              "The name was chosen at random",
            ],
            correctIndex: 0,
            explanation:
              "Arabic mathematicians themselves called the system Hindi reckoning. Indian invention, Arabic transmission and development, European adoption: all three links deserve credit.",
            sourceLessonSlug: "asia-gupta-zero",
          },
          {
            prompt: "Who founded the Mughal empire, and where was he from?",
            options: [
              "Babur, a Timurid prince from the Fergana valley in Central Asia, who won at Panipat in 1526",
              "Akbar, a Rajput king from Gujarat",
              "Aurangzeb, a Persian shah",
              "Ashoka, from Magadha",
            ],
            correctIndex: 0,
            explanation:
              "He traced descent from both Timur and Genghis Khan; 'Mughal' is a Persian form of 'Mongol.' The dynasty was outsiders by origin and became South Asian by settlement.",
            sourceLessonSlug: "asia-mughals",
          },
          {
            prompt: "What did Akbar's statecraft include?",
            options: [
              "Folding Hindu elites into the imperial service, revenue reform, abolishing the jizya, and staged interfaith debate at court",
              "Forced conversion of the whole population",
              "Abolition of taxation",
              "Closing India to all foreign trade",
            ],
            correctIndex: 0,
            explanation:
              "The mansabdar system and sulh-i kul made a minority-led dynasty durable. His Din-i Ilahi is hedged as a small court circle, not a mass religion.",
            sourceLessonSlug: "asia-mughals",
          },
          {
            prompt: "What was Sir Thomas Roe's position when he reached Jahangir's court in 1615?",
            options: [
              "A supplicant ambassador asking trade permission from a far richer empire",
              "A conqueror dictating terms",
              "A colonial governor taking office",
              "A missionary banned from court",
            ],
            correctIndex: 0,
            explanation:
              "For a century-plus after Roe, European companies operated at Mughal sufferance from coastal footholds; Maddison's (2007) estimate puts the subcontinent at roughly a quarter of world output c. 1700.",
            sourceLessonSlug: "asia-mughals",
          },
          {
            prompt: "Which sequence correctly orders the end of Mughal power and the start of British territorial rule?",
            options: [
              "Aurangzeb dies 1707 → fragmentation → Plassey 1757 → Bengal diwani 1765 → last emperor deposed 1857",
              "Plassey 1757 → Aurangzeb dies 1707 → diwani 1765",
              "Diwani 1765 → Panipat 1526 → Plassey 1757",
              "Last emperor deposed 1857 → Plassey 1757 → Aurangzeb dies 1707",
            ],
            correctIndex: 0,
            explanation:
              "The Company's rule began territorially in Bengal after Plassey and the 1765 revenue grant, amid the fragmentation that followed Aurangzeb's death in 1707.",
            sourceLessonSlug: "asia-mughals",
          },
        ],
      },
    },
    // ────────────── SECTION 3 · EAST ASIA ──────────────
    {
      slug: "asia-han-tang",
      title: "7 · Han and Tang China: the census, the paper, the printed book",
      section: "Section 3 · East Asia: China, Japan, Korea",
      body: `While Rome ruled the Mediterranean, an empire of comparable scale ruled East Asia, and unlike almost everything in this course so far, we can count its people, because it counted them itself.

The **Han dynasty** (206 BCE-220 CE, with a brief interruption) governed from the Yellow River plain, and its census of **2 CE** survives in the official histories: roughly **57 million registered persons** (Ebrey, 2010). Pause on what kind of evidence that is. Not a modern reconstruction, not an estimate with error bars: an administrative document produced by the state it describes, which is why historians treat early imperial China as one of the best-documented societies of the ancient world. The Han state ran on registered households, salaried officials, and, from **124 BCE**, an imperial academy training men in the Confucian classics for office; the fully developed written examination system came later (under the Sui from 605, expanded under Tang and Song), but the idea that office should rest on tested learning starts here.

Two Han-era items changed the world. First, the westward routes: in **138 BCE** Emperor Wu sent the envoy **Zhang Qian** into Central Asia, and the connections that grew from such missions became the network later called the Silk Roads, Section 5's subject (Hansen, 2012). Second, **paper**. The official history credits the court officer **Cai Lun** with presenting a refined papermaking process in **105 CE**; archaeologists have found paper older than that, so teach it precisely: Cai Lun standardized and spread a technology already emerging, and within a few centuries paper had replaced bamboo and silk as China's writing surface, many hundreds of years before it reached Europe via the Islamic world (Ebrey, 2010).

After the Han fell in 220 CE, China spent over three centuries divided, a reminder this course flags deliberately: Chinese history is not an unbroken imperial escalator; unification is an achievement, not a default. The Sui reunified in the 580s, and the **Tang dynasty** (**618-907**) built on it the empire usually counted among the most cosmopolitan of the entire premodern world. Its capital **Chang'an** (modern Xi'an) was a planned grid city of, by common estimates, about a million people, with markets full of Sogdian, Persian, and other foreign merchants, Buddhist monasteries alongside Daoist temples, and communities of Nestorian Christians and Muslims; a stone stele erected in 781 still records the Christian community's official standing (Benn, 2002). The monk **Xuanzang** left Chang'an in 629 to study at Nalanda in India and returned in 645 with hundreds of scriptures; his journey connects this lesson to the Gupta lesson you already read.

Tang China also gives this course its single most checkable artifact. In 1900, a sealed cave library was discovered at **Dunhuang**, a Silk Road oasis town, containing tens of thousands of manuscripts. Among them was a printed scroll of the **Diamond Sutra**, a Buddhist text, carrying a dated colophon equivalent to **11 May 868**. It is the earliest securely dated complete printed book known anywhere, produced by woodblock, and you can examine it today in the British Library's digital collections (British Library, n.d.; Hansen, 2012). Europe's first printed books are nearly six centuries younger.

The honest ledger, as always: the **An Lushan rebellion** (**755-763**) devastated the Tang state. You will sometimes read that it killed 36 million people, because registered population in the censuses fell by roughly that much. That inference is rejected by historians: the war shattered the census system itself, so millions vanished from the *registers*, not necessarily from the world (Benn, 2002). It is the Maddison lesson again, in Chinese form: know what a number is actually counting before you repeat it.

:::reveal Why is the Diamond Sutra of 868 the course's "most checkable artifact," and what exactly does it prove? ||| It is a physically surviving woodblock-printed scroll with a colophon dated to 11 May 868, found in the Dunhuang cave library and held by the British Library, where anyone can examine it digitally. It proves complete printed books existed in Tang China nearly six centuries before Europe's first, with no reconstruction or estimate involved: the artifact itself carries its date.

## Sources
- Ebrey, P. B. (2010). *The Cambridge illustrated history of China* (2nd ed.). Cambridge University Press.
- Benn, C. (2002). *China's golden age: Everyday life in the Tang dynasty*. Oxford University Press.
- Hansen, V. (2012). *The Silk Road: A new history*. Oxford University Press.
- British Library. (n.d.). *The Diamond Sutra* (Or.8210/P.2). https://www.bl.uk/`,
      recallContent: [
        {
          prompt: "Who founded the Mughal empire, when, from where, and what does the dynasty's name mean?",
          answer:
            "Babur, a Timurid prince from the Fergana valley (present-day Uzbekistan), descended from Timur and Genghis Khan, defeated Ibrahim Lodi at the First Battle of Panipat in 1526. 'Mughal' is a Persian form of 'Mongol,' an outsiders' label for an outsider dynasty.",
        },
        {
          prompt: "Give the datable sequence from Mughal peak to European territorial rule.",
          answer:
            "Akbar's consolidation 1556-1605; Roe arrives as a supplicant at Jahangir's court 1615; Maddison's estimate puts the subcontinent at roughly a quarter of world output c. 1700; Aurangzeb dies 1707 and the empire fragments; Plassey 1757; the Company takes Bengal's diwani 1765; the last Mughal is deposed 1857.",
        },
      ],
    },
    {
      slug: "asia-song-revolution",
      title: "8 · The Song economic revolution",
      section: "Section 3 · East Asia: China, Japan, Korea",
      body: `If you could visit one economy in the year 1100, the strongest candidate on the evidence would be **Song dynasty China** (960-1279). This lesson is about what is documented there, and it is the heart of the course's economic thesis, so the sourcing discipline is at maximum.

The historian Mark Elvin (1973) called what happened under the Song a **"medieval economic revolution,"** and the label has stuck in the scholarship. The ingredients, each attributable: population growth past, by common estimates, **100 million** (roughly double the Han census world, and probably then the largest polity on earth); fast-ripening Champa rice strains that allowed double-cropping in the south; dense commercial networks of markets and canals; and cities of a scale Europe would not see for centuries. Northern Song **Kaifeng** and Southern Song **Hangzhou** each held, by common estimates, around a million people. When Marco Polo saw Hangzhou a century later under Mongol rule, he called it the finest and noblest city in the world; that is his claim, from a text historians use with care, but the city's documented size makes the awe plausible (Ebrey, 2010; Elvin, 1973).

Now the famous inventions, each with its primary source named, because "China invented X" is exactly the kind of claim this course refuses to leave vague:

- **Printing at scale.** Woodblock printing (Tang, previous lesson) became a mass industry under the Song: the state printed the Confucian canon, and commercial printers sold everything from exam guides to medical manuals. **Movable type** was invented here too: the scholar-official **Shen Kuo**, in his *Dream Pool Essays* (**1088**), describes the artisan **Bi Sheng** making movable type of baked clay in the **1040s**. Movable type remained less practical than woodblock for Chinese's thousands of characters, which is an honest wrinkle worth knowing: an invention can be real and still not dominant in its homeland.
- **Gunpowder as a weapon.** The earliest surviving printed gunpowder formulas appear in the official military manual *Wujing Zongyao* (**1044**), and Song forces fielded fire lances, bombs, and rockets in their long wars. Gunpowder's later journey west, via the Mongol era, remade every battlefield on earth.
- **The magnetic compass at sea.** Shen Kuo (1088) describes the magnetized needle; **Zhu Yu's** *Pingzhou Ketan* (early 1100s) records ships' pilots using it in overcast weather, the earliest known account of marine compass navigation anywhere.
- **Paper money.** In Sichuan in the early **1000s**, merchant promissory notes evolved into **jiaozi**, and from the 1020s the Song state issued them: the world's first government paper currency, four centuries before anything comparable in Europe (Ebrey, 2010; Elvin, 1973).

Add the heavy industry, with its estimate labeled as one: the economic historian Robert Hartwell (1962) estimated Northern Song iron production at roughly **125,000 tons a year by 1078**, coal-fired in part, a figure later scholars have debated and revised but which even skeptics place far beyond anything contemporary in Europe. And add the institutional change: cheap printed books plus expanded civil-service examinations meant the Song bureaucracy drew on a broader pool of tested candidates than any earlier state, though wealthy families still held real advantages, so "meritocracy" deserves its quotation marks (Ebrey, 2010).

The honest ledger. Song China was not a superpower in the military sense: it paid negotiated annual payments to the Khitan Liao state after the treaty of **1005**, lost its north to the Jurchen Jin in **1127**, and fell to the Mongols in **1279**. Wealth and vulnerability coexisted; the course notes it because triumphalism is just romance with a flag. And one social datum belongs in the same ledger: it was during the Song that **foot binding** began spreading among elite women, a documented, centuries-long harm that no account of the era's brilliance may omit (Ebrey, 2010).

:::reveal Name the primary sources, with dates, behind three Song inventions, and the estimate the course labels as an estimate. ||| Movable type: Shen Kuo's Dream Pool Essays (1088) describes Bi Sheng's clay type of the 1040s. Gunpowder: the earliest printed formulas are in the Wujing Zongyao (1044). Marine compass: Zhu Yu's Pingzhou Ketan (early 1100s) records pilots navigating by needle, after Shen Kuo described the magnetized needle. The labeled estimate: Hartwell's (1962) figure of roughly 125,000 tons of iron a year by 1078, debated and revised since.

## Sources
- Elvin, M. (1973). *The pattern of the Chinese past*. Stanford University Press.
- Ebrey, P. B. (2010). *The Cambridge illustrated history of China* (2nd ed.). Cambridge University Press.
- Hartwell, R. (1962). A revolution in the Chinese iron and coal industries during the Northern Sung, 960-1126 A.D. *The Journal of Asian Studies, 21*(2), 153-162.
- Hansen, V. (2020). *The year 1000: When explorers connected the world and globalization began*. Scribner.`,
      recallContent: [
        {
          prompt: "What makes the Han census of 2 CE a different kind of evidence from Maddison's GDP shares?",
          answer:
            "It is an administrative document produced by the state it describes (roughly 57 million registered persons), not a modern reconstruction. Its limits are different too: it counts registered people, so its later collapses can reflect broken registration rather than deaths, as the An Lushan case shows.",
        },
        {
          prompt: "State the paper and printing facts precisely, with dates and hedges.",
          answer:
            "Paper: the official history credits Cai Lun with a refined process in 105 CE, but archaeology finds older paper, so he standardized an emerging technology. Printing: the Diamond Sutra, woodblock-printed with a colophon dated 11 May 868, found at Dunhuang and held by the British Library, is the earliest securely dated complete printed book.",
        },
      ],
    },
    {
      slug: "asia-japan-korea",
      title: "9 · Japan and Korea: the court, the sword, and the metal type",
      section: "Section 3 · East Asia: China, Japan, Korea",
      body: `East Asia is not China with a coastline. Japan and Korea each built distinctive states and cultures in constant, selective conversation with their giant neighbor, borrowing what they wanted and refusing the rest, and each holds a world first that most students never hear about.

**Japan: from the Heian court to the shogunates.** In **794** the imperial court settled at Heian-kyo (modern Kyoto), opening the **Heian period** (794-1185). Its aristocracy produced one of the great literatures of the world, much of it written by women: court ladies wrote in the newly developed *kana* syllabaries while men often wrote in prestige Chinese, and around **1010** the lady-in-waiting **Murasaki Shikibu** completed *The Tale of Genji*, a psychological prose narrative of enormous length and subtlety that is **often called the world's first novel**; the course keeps the "often called" because the label depends on how you define the genre (Totman, 2000). In **1185** the Minamoto warrior clan crushed its rivals, and in **1192** Minamoto no Yoritomo took the title **shogun**: the start of nearly **700 years** in which emperors reigned as sacred figureheads in Kyoto while warrior governments actually ruled. Test that against everything you assume about monarchy; the dual structure lasted until 1868. The Kamakura shogunate repelled two **Mongol invasions (1274 and 1281)**, both broken partly by storms later mythologized as the *kamikaze*, "divine winds" (Totman, 2000). After a long era of civil war, **Tokugawa Ieyasu** won the battle of Sekigahara in **1600** and became shogun in **1603**; the Tokugawa peace lasted two and a half centuries. Its foreign policy, often summarized as *sakoku*, "closed country," deserves this course's precision: Japan expelled most Europeans and banned Christianity, but maintained managed trade with the Dutch at Dejima in Nagasaki harbor, with China, with Korea through Tsushima, and with the Ryukyu kingdom. Managed and narrow is not sealed (Totman, 2000).

**Korea: the peninsula that printed first.** The kingdom of **Silla** unified most of the peninsula by **676**, in alliance with Tang China and then in a successful war to push Tang forces back out, which is Korean history's recurring geometry: absorb from the neighbor, resist the neighbor. The **Goryeo** dynasty (**918-1392**) gave Korea its Western name and two of the world's great book projects. The **Tripitaka Koreana**, the Buddhist canon carved onto more than **81,000 wooden printing blocks** in the mid-1200s (while Mongol armies were ravaging the country), survives complete at Haeinsa temple and is UNESCO-listed (UNESCO World Heritage Centre, n.d.). And in **1377**, a Goryeo temple printed the **Jikji**, an anthology of Zen teachings, using **movable metal type**: it is the oldest extant book printed with movable metal type anywhere, roughly **78 years before Gutenberg's Bible**, a priority UNESCO recognized by inscribing it in the Memory of the World register in 2001. The surviving volume is held today at the Bibliothèque nationale de France (UNESCO, 2001; Seth, 2011). Say it precisely: Gutenberg's system, developed independently with alloy type, a press, and alphabetic script, launched mass printing in Europe; Korea's priority in the technology itself is documented and physical.

The **Joseon** dynasty (**1392-1897**) added the innovation this course finds most striking of all. In **1443**, King **Sejong** and his scholars created **Hangul**, a new alphabet engineered for the Korean language, promulgated in 1446 in a document, the *Hunminjeongeum*, that explains its purpose: so that ordinary people who could not learn classical Chinese characters might easily write. A writing system with a named inventor, a stated design rationale, and a publication date is almost unique in world history (Seth, 2011). Literati resistance kept Chinese characters dominant in elite life for centuries, another honest wrinkle, but the alphabet survived to become modern Korea's script.

Keep both countries on your Section 6 radar: Joseon Korea ran on a large hereditary slave class (the *nobi*), and Japan under Hideyoshi launched a devastating invasion of Korea in the 1590s. The honest record includes them, and this course will get there.

:::reveal What exactly is the Jikji's documented claim to priority, stated with the precision the course demands? ||| Printed at a Goryeo temple in 1377, the Jikji is the oldest EXTANT book printed with movable METAL type, roughly 78 years before Gutenberg's Bible; UNESCO inscribed it in the Memory of the World register (2001) and the surviving volume is at the Bibliothèque nationale de France. The precise claim is priority of the surviving artifact and the technology, not that Gutenberg copied it: his independently developed press-and-alloy system is what launched mass printing in Europe.

## Sources
- Totman, C. (2000). *A history of Japan*. Blackwell.
- Seth, M. J. (2011). *A history of Korea: From antiquity to the present*. Rowman & Littlefield.
- UNESCO. (2001). *Baegun hwasang chorok buljo jikji simche yojeol (vol. II), the second volume of "Anthology of Great Buddhist Priests' Zen Teachings"* (Memory of the World Register). UNESCO.
- UNESCO World Heritage Centre. (n.d.). *Haeinsa Temple Janggyeong Panjeon, the depositories for the Tripitaka Koreana woodblocks*. https://whc.unesco.org/en/list/737/`,
      recallContent: [
        {
          prompt: "What did Elvin (1973) mean by the Song 'medieval economic revolution'? List the ingredients.",
          answer:
            "Population past a commonly estimated 100 million; Champa rice double-cropping; dense market and canal networks; cities of about a million (Kaifeng, Hangzhou); mass printing; the world's first government paper money (jiaozi, from the 1020s); large-scale, partly coal-fired iron production (Hartwell's estimate ~125,000 tons/year by 1078, labeled an estimate).",
        },
        {
          prompt: "What belongs on the Song lesson's honest ledger?",
          answer:
            "Military vulnerability alongside wealth: negotiated payments to the Liao after 1005, loss of the north to the Jin in 1127, conquest by the Mongols in 1279. And foot binding began spreading among elite women during the Song, a documented harm no account of the era may omit.",
        },
      ],
    },
    {
      slug: "asia-quiz-3",
      title: "Section 3 quiz · East Asia",
      section: "Section 3 · East Asia: China, Japan, Korea",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the Han census of 2 CE record, and why does the course treat it as special evidence?",
            options: [
              "Roughly 57 million registered persons; it is an administrative document from the state itself, not a modern reconstruction",
              "Exactly 100 million citizens, counted by Roman envoys",
              "Only the population of the capital",
              "Nothing; it is legendary",
            ],
            correctIndex: 0,
            explanation:
              "Early imperial China counted its own people, which is why it ranks among the best-documented ancient societies. Its limit: it counts the registered, which matters for reading later census collapses.",
            sourceLessonSlug: "asia-han-tang",
          },
          {
            prompt: "How does the course state the paper claim precisely?",
            options: [
              "The official history credits Cai Lun with a refined process in 105 CE, but older paper exists archaeologically, so he standardized an emerging technology",
              "Cai Lun invented paper from nothing in 105 CE",
              "Paper was invented in Egypt and imported to China",
              "Paper is a Tang invention of the 700s",
            ],
            correctIndex: 0,
            explanation:
              "Getting attribution right means separating the documented credit (the Hou Hanshu's account of Cai Lun) from the archaeological record, which shows earlier paper.",
            sourceLessonSlug: "asia-han-tang",
          },
          {
            prompt: "What is the Diamond Sutra of 868?",
            options: [
              "The earliest securely dated complete printed book, a woodblock scroll from Dunhuang with a colophon equivalent to 11 May 868, now in the British Library",
              "The first book printed with movable metal type",
              "A Confucian examination manual",
              "A map of the Silk Roads",
            ],
            correctIndex: 0,
            explanation:
              "The artifact carries its own date, which is why the course calls it its most checkable object: no reconstruction is involved.",
            sourceLessonSlug: "asia-han-tang",
          },
          {
            prompt: "Why do historians reject the claim that the An Lushan rebellion killed 36 million people?",
            options: [
              "The figure comes from a fall in registered census population, and the war broke the census system itself; missing from the registers is not the same as dead",
              "Because the rebellion never happened",
              "Because Tang China had fewer than 36 million people",
              "Because the figure was invented by European historians",
            ],
            correctIndex: 0,
            explanation:
              "Know what a number is counting before repeating it: the same discipline the course applies to Maddison's shares and Ashoka's edict figures.",
            sourceLessonSlug: "asia-han-tang",
          },
          {
            prompt: "What was Chang'an under the Tang?",
            options: [
              "A planned grid capital of about a million people (by common estimates), with foreign merchant communities, Buddhist monasteries, and documented Christian and Muslim presence",
              "A small military outpost on the steppe",
              "A port city ruled by Persian merchants",
              "The capital of Heian Japan",
            ],
            correctIndex: 0,
            explanation:
              "The 781 stele recording the Nestorian Christian community's standing still survives; Xuanzang left from here in 629 for Nalanda in India.",
            sourceLessonSlug: "asia-han-tang",
          },
          {
            prompt: "Which primary source documents Bi Sheng's invention of movable type?",
            options: [
              "Shen Kuo's Dream Pool Essays (1088), describing clay movable type made in the 1040s",
              "The Wujing Zongyao (1044)",
              "Marco Polo's Travels",
              "The Hunminjeongeum (1446)",
            ],
            correctIndex: 0,
            explanation:
              "An honest wrinkle: movable type stayed less practical than woodblock for Chinese's thousands of characters, so the invention was real but not dominant at home.",
            sourceLessonSlug: "asia-song-revolution",
          },
          {
            prompt: "Where do the earliest surviving printed gunpowder formulas appear?",
            options: [
              "In the Song military manual Wujing Zongyao, 1044",
              "In Roger Bacon's writings, 1267",
              "In a Mongol chronicle of 1240",
              "In the Diamond Sutra, 868",
            ],
            correctIndex: 0,
            explanation:
              "Song forces fielded fire lances, bombs, and rockets; the technology moved west during the Mongol era and remade battlefields everywhere.",
            sourceLessonSlug: "asia-song-revolution",
          },
          {
            prompt: "What is the earliest known account of marine compass navigation?",
            options: [
              "Zhu Yu's Pingzhou Ketan (early 1100s), describing pilots steering by the needle in overcast weather",
              "A Viking saga of the 900s",
              "Columbus's log of 1492",
              "Ibn Battuta's travels of the 1330s",
            ],
            correctIndex: 0,
            explanation:
              "Shen Kuo had described the magnetized needle in 1088; Zhu Yu records its use at sea, which is the navigational first.",
            sourceLessonSlug: "asia-song-revolution",
          },
          {
            prompt: "What was jiaozi?",
            options: [
              "The world's first government-issued paper money, evolving from Sichuan merchant notes and state-issued from the 1020s",
              "A Song tax on iron",
              "The Mongol postal relay system",
              "A type of movable metal type",
            ],
            correctIndex: 0,
            explanation:
              "Government paper currency operated in Song China roughly four centuries before anything comparable in Europe.",
            sourceLessonSlug: "asia-song-revolution",
          },
          {
            prompt: "How does the course present Hartwell's Song iron figure?",
            options: [
              "As his estimate (~125,000 tons/year by 1078), debated and revised since, though even skeptics place Song output far beyond contemporary Europe",
              "As an exact measurement from Song records",
              "As disproven and worthless",
              "As a figure for steel, not iron",
            ],
            correctIndex: 0,
            explanation:
              "Labeled estimates with named authors can be argued with; unattributed 'facts' cannot. That is the course's standing rule for numbers.",
            sourceLessonSlug: "asia-song-revolution",
          },
          {
            prompt: "What belongs on the Song lesson's honest ledger alongside the economic revolution?",
            options: [
              "Payments to the Liao after 1005, loss of the north in 1127, conquest by the Mongols in 1279, and the spread of foot binding among elite women",
              "Nothing; the Song era had no dark side",
              "The destruction of all Buddhist temples",
              "A ban on all foreign trade",
            ],
            correctIndex: 0,
            explanation:
              "Wealth and vulnerability coexisted, and the era's documented social harms are part of its record. Triumphalism is romance with a flag.",
            sourceLessonSlug: "asia-song-revolution",
          },
          {
            prompt: "What was the Heian period's most famous literary work, and how does the course label it?",
            options: [
              "Murasaki Shikibu's Tale of Genji (c. 1010), 'often called' the world's first novel, with the hedge kept because the label depends on defining the genre",
              "The Kojiki, definitively the world's first novel",
              "A war chronicle written by samurai",
              "A Chinese-language legal code",
            ],
            correctIndex: 0,
            explanation:
              "Much of Heian literature was written by court women using the kana syllabaries while men wrote prestige Chinese.",
            sourceLessonSlug: "asia-japan-korea",
          },
          {
            prompt: "What does the course say sakoku ('closed country') actually was?",
            options: [
              "Managed, narrow trade: Europeans mostly expelled, but exchange continued with the Dutch at Dejima, China, Korea via Tsushima, and Ryukyu",
              "Total isolation with zero foreign contact for 250 years",
              "A ban on Japanese ships only",
              "An open-ports policy",
            ],
            correctIndex: 0,
            explanation:
              "Managed and narrow is not sealed. Precision about sakoku is the same habit as precision about 'European colonization.'",
            sourceLessonSlug: "asia-japan-korea",
          },
          {
            prompt: "What is the Jikji's precise claim to fame?",
            options: [
              "Printed in Goryeo Korea in 1377, it is the oldest extant book printed with movable metal type, roughly 78 years before Gutenberg's Bible",
              "It is the first printed book of any kind",
              "It proves Gutenberg copied Korean technology",
              "It is the oldest surviving paper document",
            ],
            correctIndex: 0,
            explanation:
              "UNESCO inscribed it in the Memory of the World register in 2001; the volume is held at the Bibliothèque nationale de France. Gutenberg's independent press-and-alloy system is what launched mass printing in Europe.",
            sourceLessonSlug: "asia-japan-korea",
          },
          {
            prompt: "Why does the course call Hangul 'almost unique' among writing systems?",
            options: [
              "It has a named creator (Sejong and his scholars, 1443), a stated purpose (literacy for ordinary people), and a promulgation document with a date (Hunminjeongeum, 1446)",
              "It is the world's oldest alphabet",
              "It was the first script ever printed",
              "It descends directly from Chinese characters",
            ],
            correctIndex: 0,
            explanation:
              "Most scripts evolve anonymously over centuries; Hangul was engineered, documented, and dated, though elite resistance kept Chinese characters dominant for centuries after.",
            sourceLessonSlug: "asia-japan-korea",
          },
        ],
      },
    },
    // ────────────── SECTION 4 · SOUTHEAST ASIA ──────────────
    {
      slug: "asia-angkor",
      title: "10 · Angkor: the biggest city footprint of the preindustrial world",
      section: "Section 4 · Southeast Asia: the skipped chapter",
      body: `Here is a fact that should be famous and is not: the largest preindustrial settlement complex that archaeologists have ever mapped is not in China, Europe, or the Middle East. It is in Cambodia.

The **Khmer Empire** conventionally begins in **802 CE**, when **Jayavarman II** was consecrated as universal monarch in a ceremony we know of from an inscription carved 250 years later, so even the founding date arrives with a hedge attached (Coe, 2003). From the ninth century to the fifteenth, Khmer kings built their capitals around **Angkor**, near the great lake Tonle Sap, and engineered the landscape itself: vast reservoirs called *barays* (the West Baray is roughly eight kilometers long), canals, and embankments that managed the monsoon's feast-or-famine water supply and supported intensive rice agriculture.

How big was it? In **2007**, a team led by Damian Evans published a comprehensive archaeological map, built from ground survey and airborne radar, in the *Proceedings of the National Academy of Sciences*, and its title states the finding: Angkor was "the world's largest preindustrial settlement complex," a low-density urban sprawl of interconnected neighborhoods, ponds, and rice fields covering on the order of a **thousand square kilometers** (Evans et al., 2007). Lidar flights in the 2010s confirmed and extended the picture. Note the phrasing discipline: Angkor was not a million-person Manhattan; it was an enormous dispersed city, and "largest settlement complex mapped" is exactly what the evidence supports, no more.

At its center stands **Angkor Wat**, built under **Suryavarman II** (reigned c. 1113-1150) as a temple to Vishnu and later converted to Buddhist use, and often described as the largest religious monument on earth. A generation later, **Jayavarman VII** (reigned from 1181) built the walled capital Angkor Thom and its face-towered Bayon temple, and his inscriptions record a network of hospitals and rest houses along the empire's roads (Coe, 2003). The whole complex has been a UNESCO World Heritage site since 1992.

We even have an eyewitness. In **1296-97** a Chinese envoy named **Zhou Daguan** lived at Angkor and wrote the only surviving firsthand account of the city in its prime: royal processions, markets run largely by women, houses ranked by status, and, because this course keeps its honest ledger everywhere, **enslaved people in ordinary households**, whom he describes matter-of-factly (Zhou Daguan, 1296-97/2007). Temple inscriptions likewise record thousands of workers bound to temple estates. Section 6 returns to this; the point here is that the record itself refuses the utopia reading.

What ended it? The old story says Angkor "fell" when the Thai kingdom of **Ayutthaya sacked it in 1431**, and a sack is indeed recorded in later chronicles. The fuller, current picture is messier and more interesting: tree-ring studies show decades-scale **megadroughts** punctuated by violent monsoon years in the 1300s-1400s, exactly the stress a giant water-management city handles worst (Buckley et al., 2010), trade patterns were shifting toward the coasts, and the capital migrated toward present-day Phnom Penh. Angkor Wat itself was **never abandoned**; it remained a working shrine. Which is why this course refuses the most repeated Angkor cliché of all: the French naturalist Henri Mouhot, whose 1860s travel writings made Angkor famous in Europe, did not "discover" a lost city. Khmer people were worshipping in it, Portuguese and Spanish visitors had described it in the 1500s, and "discovery" here means only "Europeans started paying attention." You saw this move in the Indus lesson's dead theories, and you will see it again: who gets credited with knowing a place is itself part of the history (Coe, 2003).

:::reveal What exactly did Evans et al. (2007) establish about Angkor, and how does the course phrase it to avoid overclaiming? ||| Using ground survey and airborne radar (later extended by lidar), they mapped Angkor as the world's largest KNOWN preindustrial settlement complex: a low-density sprawl of neighborhoods, ponds, and fields on the order of a thousand square kilometers. The course says "largest settlement complex mapped," not "biggest city ever" or "a million-person metropolis," because the dispersed footprint is what the evidence supports.

## Sources
- Evans, D., Pottier, C., Fletcher, R., Hensley, S., Tapley, I., Milne, A., & Barbetti, M. (2007). A comprehensive archaeological map of the world's largest preindustrial settlement complex at Angkor, Cambodia. *Proceedings of the National Academy of Sciences, 104*(36), 14277-14282.
- Zhou Daguan. (2007). *A record of Cambodia: The land and its people* (P. Harris, Trans.). Silkworm Books. (Original work written c. 1296-1297)
- Coe, M. D. (2003). *Angkor and the Khmer civilization*. Thames & Hudson.
- Buckley, B. M., Anchukaitis, K. J., Penny, D., Fletcher, R., Cook, E. R., Sano, M., Nam, L. C., Wichienkeeo, A., Minh, T. T., & Hong, T. M. (2010). Climate as a contributing factor in the demise of Angkor, Cambodia. *Proceedings of the National Academy of Sciences, 107*(15), 6748-6752.
- UNESCO World Heritage Centre. (n.d.). *Angkor*. https://whc.unesco.org/en/list/668/`,
      recallContent: [
        {
          prompt: "Describe Japan's dual political structure and give its dates.",
          answer:
            "From Minamoto no Yoritomo's appointment as shogun in 1192 until 1868, emperors reigned as sacred figureheads in Kyoto while warrior governments (Kamakura, Ashikaga, then Tokugawa from 1603) actually ruled: nearly 700 years of reign without rule.",
        },
        {
          prompt: "What makes Hangul almost unique among the world's writing systems?",
          answer:
            "It has a named creator (King Sejong and his scholars, 1443), a stated design rationale (so ordinary people unable to learn Chinese characters could write, per the Hunminjeongeum), and a publication date (1446). Elite resistance kept Chinese characters dominant for centuries, but the alphabet became modern Korea's script.",
        },
      ],
    },
    {
      slug: "asia-srivijaya-majapahit",
      title: "11 · Srivijaya and Majapahit: the empires of the monsoon sea",
      section: "Section 4 · Southeast Asia: the skipped chapter",
      body: `The world's most valuable trade corridor in the Middle Ages was a strait. Whoever sat athwart the sea route between India and China, where the monsoon winds force ships to stop and wait for the season to turn, could tax a hemisphere's commerce. Two island empires did exactly that, and most world-history courses never mention either.

**Srivijaya** was a Buddhist maritime power centered, by the standard identification, at **Palembang** in southeastern Sumatra (present-day Indonesia), dominant from the late 600s into the 1000s. It was a **thalassocracy**: an empire of harbors, fleets, and client ports controlling the **Strait of Malacca** and the Sunda Strait, rather than a broad territorial state. We know it from its own Old Malay inscriptions of the 680s, from Chinese court records, and from Arab geographers. The Chinese monk **Yijing** stopped there in **671** on his way to India and returned for years in the 680s-690s, reporting, in his account, a community of more than a thousand Buddhist monks and advising future pilgrims to study Sanskrit there first (Coedès, 1968; Hall, 2011). Sit with that: an island city in Sumatra functioning as a preparatory university for the Buddhist world.

Now the "how we know" twist, one of the best in all of Asian history. Srivijaya was so thoroughly forgotten that **no one even knew it had existed** until the French scholar **George Coedès** reassembled it in **1918** from inscriptions and Chinese records. An empire that lasted centuries vanished from memory because its writing was scattered, its buildings were wood in a wet climate, and its successors told other stories. Forgetting is not evidence of absence; it is evidence about what survives and who is doing the remembering, which is this course's method in one sentence (Coedès, 1968).

Java, meanwhile, produced monuments nobody could forget. Around **800 CE**, under the Sailendra dynasty, central Java raised **Borobudur**, a stepped stone mountain of a monument, commonly described as the largest Buddhist monument in the world, its galleries carrying kilometers of relief carving (UNESCO World Heritage Centre, n.d.). And in **1293**, east Java became the seat of **Majapahit**, the last and largest of the region's Hindu-Buddhist empires, founded in the immediate aftermath of something remarkable: a **Mongol (Yuan) naval expedition sent by Kublai Khan was outmaneuvered and expelled** by the Javanese prince who then took the throne. Majapahit peaked in the mid-1300s under King **Hayam Wuruk** and his formidable chief minister **Gajah Mada**. The court poem *Nagarakretagama*, composed by Mpu Prapanca in **1365**, lists roughly a hundred places across the archipelago as tributaries, sketching a sphere that maps loosely onto modern Indonesia and beyond. Read that list the way this course reads Maddison: it is a **court panegyric**, praise literature, and how much real control it reflects, as opposed to prestige, trade primacy, and wishful geography, is genuinely debated among historians (Hall, 2011; Lockard, 2009). Majapahit's decline in the 1400s-1500s coincided with the rise of Muslim sultanates, above all **Malacca** (founded c. 1400), which inherited the strait-hub role until Portugal seized it in **1511**, the date you already know from Lesson 1.

What made all of this run was the **monsoon**: winds that blow reliably toward Asia's coasts for half the year and away for the other half, setting the rhythm of sailing seasons and forcing the layovers that made entrepôt cities rich. And what made it lucrative was, among much else, spices: until the seventeenth century, **cloves and nutmeg grew on earth only in the small Maluku islands** of eastern Indonesia, so every clove in a Cairo kitchen or a London pie had passed through these sea lanes (Lockard, 2009). When Europeans finally sailed into these waters, they were not opening a new world; they were entering, and then muscling into, a very old and very rich one.

:::reveal Why is Srivijaya's disappearance from memory itself a lesson in method? ||| Because a centuries-long empire can vanish from the record without having been small: Srivijaya's writing was scattered inscriptions, its buildings were wood in a wet climate, and its successors told other stories, so its existence was only reassembled by Coedès in 1918 from inscriptions and Chinese records. Forgetting reflects what survives and who does the remembering, not what mattered; absence of fame is not absence of history.

## Sources
- Coedès, G. (1968). *The Indianized states of Southeast Asia* (W. F. Vella, Ed.; S. B. Cowing, Trans.). University of Hawaii Press.
- Hall, K. R. (2011). *A history of early Southeast Asia: Maritime trade and societal development, 100-1500*. Rowman & Littlefield.
- Lockard, C. A. (2009). *Southeast Asia in world history*. Oxford University Press.
- UNESCO World Heritage Centre. (n.d.). *Borobudur Temple Compounds*. https://whc.unesco.org/en/list/592/`,
      recallContent: [
        {
          prompt: "Who is Zhou Daguan and why does he matter to this course twice over?",
          answer:
            "A Chinese envoy who lived at Angkor in 1296-97 and wrote the only surviving eyewitness account of the city in its prime. He matters once as evidence (processions, women-run markets, daily life) and once for the honest ledger: he matter-of-factly describes enslaved people in Khmer households.",
        },
        {
          prompt: "Why does the course reject 'Henri Mouhot discovered Angkor,' and what is the fuller account of Angkor's end?",
          answer:
            "Angkor Wat was never abandoned (Khmer worshippers used it continuously, and Iberian visitors described it in the 1500s); Mouhot's 1860s writings only made it famous in Europe. The end of Angkor as capital combines recorded megadroughts and violent monsoon swings (Buckley et al., 2010), shifting coastal trade, the recorded 1431 Ayutthaya sack, and the court's move toward Phnom Penh.",
        },
      ],
    },
    {
      slug: "asia-quiz-4",
      title: "Section 4 quiz · Southeast Asia",
      section: "Section 4 · Southeast Asia: the skipped chapter",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What did Evans et al. (2007) establish about Angkor?",
            options: [
              "It was the world's largest known preindustrial settlement complex: a low-density urban sprawl on the order of a thousand square kilometers",
              "It was a walled city of ten million people",
              "It was purely a ceremonial site with no population",
              "It was founded by Chinese colonists",
            ],
            correctIndex: 0,
            explanation:
              "The PNAS map came from ground survey and airborne radar, later extended by lidar. The course phrases it as 'largest complex mapped,' which is what the evidence supports.",
            sourceLessonSlug: "asia-angkor",
          },
          {
            prompt: "What was the engineering foundation of Angkor's agriculture?",
            options: [
              "Monsoon water management: vast baray reservoirs (the West Baray is roughly 8 km long), canals, and embankments supporting intensive rice farming",
              "Deep wells drilled into the water table",
              "Terraced mountainside farming",
              "Imported grain from China",
            ],
            correctIndex: 0,
            explanation:
              "A giant water-management city is exactly the kind of system that decades-scale droughts punish hardest, which is central to the current account of Angkor's end.",
            sourceLessonSlug: "asia-angkor",
          },
          {
            prompt: "Who wrote the only surviving eyewitness account of Angkor in its prime?",
            options: [
              "Zhou Daguan, a Chinese envoy who lived there in 1296-97",
              "Henri Mouhot, in the 1860s",
              "Ibn Battuta, in the 1340s",
              "Marco Polo, in the 1290s",
            ],
            correctIndex: 0,
            explanation:
              "His Record of Cambodia describes processions, markets largely run by women, and, matter-of-factly, enslaved people in ordinary households: evidence and honest ledger at once.",
            sourceLessonSlug: "asia-angkor",
          },
          {
            prompt: "Why does the course reject the claim that Henri Mouhot 'discovered' Angkor?",
            options: [
              "Angkor Wat was never abandoned: Khmer worshippers used it continuously and Iberian visitors described it in the 1500s; Mouhot only made it famous in Europe",
              "Because Mouhot never went to Cambodia",
              "Because the city was discovered by satellite",
              "Because Angkor was built after Mouhot's death",
            ],
            correctIndex: 0,
            explanation:
              "'Discovery' in such stories usually means 'Europeans started paying attention.' Who gets credited with knowing a place is itself part of the history.",
            sourceLessonSlug: "asia-angkor",
          },
          {
            prompt: "What is the current, fuller account of the end of Angkor as a capital?",
            options: [
              "Recorded megadroughts and violent monsoon swings (Buckley et al., 2010), shifting coastal trade, the 1431 Ayutthaya sack recorded in later chronicles, and the court's move toward Phnom Penh",
              "A single earthquake destroyed it in 1431",
              "European invaders burned it in the 1500s",
              "Nothing; it remains Cambodia's capital",
            ],
            correctIndex: 0,
            explanation:
              "The sack is recorded, but tree-ring climate evidence and trade shifts fill out the picture; single-cause 'falls' rarely survive scrutiny.",
            sourceLessonSlug: "asia-angkor",
          },
          {
            prompt: "Under which king was Angkor Wat built, and to which god was it first dedicated?",
            options: [
              "Suryavarman II (reigned c. 1113-1150), dedicated to Vishnu and later converted to Buddhist use",
              "Jayavarman VII, dedicated to the Buddha from the start",
              "Jayavarman II, dedicated to Shiva",
              "Hayam Wuruk, dedicated to Vishnu",
            ],
            correctIndex: 0,
            explanation:
              "Jayavarman VII came a generation later, building Angkor Thom and the Bayon and endowing the road network's hospitals and rest houses recorded in his inscriptions.",
            sourceLessonSlug: "asia-angkor",
          },
          {
            prompt: "What kind of state was Srivijaya?",
            options: [
              "A thalassocracy: an empire of harbors, fleets, and client ports controlling the straits, centered by the standard identification at Palembang in Sumatra",
              "A landlocked mountain kingdom",
              "A Chinese province",
              "A nomadic steppe confederation",
            ],
            correctIndex: 0,
            explanation:
              "Its power sat on the Malacca and Sunda straits, where monsoon sailing schedules forced ships to stop; it taxed and hosted the India-China trade from the late 600s into the 1000s.",
            sourceLessonSlug: "asia-srivijaya-majapahit",
          },
          {
            prompt: "What did the monk Yijing report about Srivijaya?",
            options: [
              "In his account, a community of more than a thousand Buddhist monks; he advised pilgrims to study Sanskrit there before going on to India",
              "That it had no religious life at all",
              "That it was ruled by Chinese governors",
              "That its people could not read",
            ],
            correctIndex: 0,
            explanation:
              "He stopped there in 671 and returned in the 680s-690s. The course flags the monk-count as his report: eyewitness numbers get attribution, like all numbers here.",
            sourceLessonSlug: "asia-srivijaya-majapahit",
          },
          {
            prompt: "What happened to the memory of Srivijaya, and why does the course dwell on it?",
            options: [
              "The empire was entirely forgotten until George Coedès reassembled its existence in 1918 from inscriptions and Chinese records; forgetting reflects what survives, not what mattered",
              "It was remembered continuously in Indonesian schools",
              "It was a myth invented in 1918",
              "Its records were destroyed by the Portuguese",
            ],
            correctIndex: 0,
            explanation:
              "Wooden cities in wet climates, scattered inscriptions, and successors telling other stories can erase a centuries-long power from memory. Absence of fame is not absence of history.",
            sourceLessonSlug: "asia-srivijaya-majapahit",
          },
          {
            prompt: "What event immediately preceded Majapahit's founding in 1293?",
            options: [
              "A Mongol (Yuan) naval expedition sent by Kublai Khan was outmaneuvered and expelled by the Javanese prince who then took the throne",
              "The Portuguese conquest of Malacca",
              "The eruption of Krakatoa",
              "The fall of Srivijaya to the Cholas",
            ],
            correctIndex: 0,
            explanation:
              "Even at the Mongol Empire's height, its reach had limits; Java's repulse of the expedition is one of the clearest cases.",
            sourceLessonSlug: "asia-srivijaya-majapahit",
          },
          {
            prompt: "How does the course tell you to read the Nagarakretagama's list of roughly a hundred tributaries?",
            options: [
              "As a 1365 court panegyric: evidence of Majapahit's horizon and prestige, while the degree of real control is debated among historians",
              "As an administrative census proving direct rule of all of modern Indonesia",
              "As a forgery from the colonial era",
              "As a Chinese diplomatic record",
            ],
            correctIndex: 0,
            explanation:
              "Mpu Prapanca was praising King Hayam Wuruk. Do not upgrade praise literature into administration; name the source and state what kind of text it is.",
            sourceLessonSlug: "asia-srivijaya-majapahit",
          },
          {
            prompt: "What is Borobudur?",
            options: [
              "A stepped stone monument raised in central Java around 800 CE under the Sailendra dynasty, commonly described as the world's largest Buddhist monument",
              "A Khmer temple at Angkor",
              "A mosque built by the Malacca sultanate",
              "A Chinese pagoda in Sumatra",
            ],
            correctIndex: 0,
            explanation:
              "Its galleries carry kilometers of relief carving; it is UNESCO-listed. Java built monuments in stone that, unlike Srivijaya's wooden cities, could not be forgotten.",
            sourceLessonSlug: "asia-srivijaya-majapahit",
          },
          {
            prompt: "Why were the Maluku islands disproportionately important to world trade before the 1600s?",
            options: [
              "Cloves and nutmeg grew nowhere else on earth, so every clove anywhere had passed through Southeast Asian sea lanes",
              "They held the world's only tin mines",
              "They controlled the Suez route",
              "They minted the region's only currency",
            ],
            correctIndex: 0,
            explanation:
              "Botanical monopoly plus monsoon geography made the archipelago's entrepôts rich, and made the straits the most valuable corridor of the medieval world.",
            sourceLessonSlug: "asia-srivijaya-majapahit",
          },
          {
            prompt: "What role did the monsoon play in the maritime empires' power?",
            options: [
              "Its seasonal winds set sailing schedules and forced layovers, so strait-side entrepôts could host, provision, and tax the waiting trade",
              "It made sailing impossible, so all trade went overland",
              "It only mattered for agriculture",
              "It blew constantly in one direction year-round",
            ],
            correctIndex: 0,
            explanation:
              "Winds toward Asia's coasts half the year and away the other half are the physical engine under Srivijaya, Majapahit, and later Malacca.",
            sourceLessonSlug: "asia-srivijaya-majapahit",
          },
          {
            prompt: "Which city inherited the strait-hub role in the 1400s, and how did its independence end?",
            options: [
              "Malacca, founded c. 1400; Portugal seized it in 1511",
              "Palembang, seized by Spain in 1571",
              "Manila, seized by Portugal in 1511",
              "Singapore, founded by the British in 1819",
            ],
            correctIndex: 0,
            explanation:
              "Malacca rose as Majapahit declined and Muslim sultanates spread; its 1511 capture is one of the enclave dates from Lesson 1's precise timeline of European colonization.",
            sourceLessonSlug: "asia-srivijaya-majapahit",
          },
        ],
      },
    },
    // ────────────── SECTION 5 · THE CONNECTIVE TISSUE ──────────────
    {
      slug: "asia-silk-roads",
      title: "12 · The Silk Roads, by land and by sea",
      section: "Section 5 · The connective tissue",
      body: `Everything you have met so far, Gupta mathematics, Tang printing, Abbasid Baghdad ahead, was connected. This lesson is about the connections, and it opens by taking apart the very name they carry.

**Nobody in antiquity ever walked a "Silk Road."** The term was coined in **1877** by the German geographer **Ferdinand von Richthofen**, and like "Asia" itself it is a modern label pasted onto older realities (Hansen, 2012). What the label covers is a shifting web of routes: overland tracks hopping oasis to oasis across Central Asia between China, India, Persia, and the Mediterranean, and, carrying far more bulk, the **maritime routes** through the Southeast Asian straits you met in the last lesson and across the Indian Ocean.

The historian Valerie Hansen (2012) spent a career with the documents actually excavated along the land routes, contracts, passes, letters from the sand at Turfan, Dunhuang, and Niya, and her revision is worth stating as hers: most documented overland trade was **local and small-scale**, merchants moving goods between neighboring oases, not caravans hauling Chinese silk nonstop to Rome. What made the routes world-changing was less the freight than the **traffic in people and ideas**: soldiers, refugees, missionaries, technologies, and above all religions. Buddhism traveled these roads from India into Central Asia and China, leaving the painted cave-temple libraries of Dunhuang where the Diamond Sutra slept; Islam, Christianity in its Church-of-the-East form, and Manichaeism traveled them too. The network's signature middlemen for centuries were the **Sogdians**, an Iranian-speaking merchant people from the cities around Samarkand, whose abandoned letters, found in a watchtower near Dunhuang, give us the trade in their own voices (Hansen, 2012; Whitfield, 1999).

Two transfers deserve the course's precision treatment. **Paper** moved west: a famous story credits Chinese papermakers captured at the **Battle of Talas (751)** between Abbasid and Tang forces with bringing the craft to Samarkand. Historians treat that story as a tale, not a record, since paper was present in Central Asia earlier; what is documented is the outcome, paper mills operating in Samarkand and then Baghdad by the late 700s, with enormous consequences in the next lesson (Hansen, 2012). And **silk itself** was never a Chinese monopoly forever: sericulture had reached Byzantium by the 500s, another reminder that technologies leak along exactly the routes that make them valuable.

For the sea lanes, the course again reaches for an artifact you can visit. In 1998, divers off **Belitung Island, Indonesia**, found a ninth-century wreck: a ship of **Arabian-style construction**, sewn-plank rather than nailed, loaded with **tens of thousands** of mass-produced ceramic bowls from China's Changsha kilns, one of them carrying a date corresponding to the **820s CE**. The cargo, now in Singapore's Asian Civilisations Museum, is physical proof of what the texts imply: industrial-scale production in Tang China, filling an Indian Ocean ship bound for the Abbasid world, centuries before any European ship entered these waters (Hansen, 2020). One wreck kills two myths at once: that pre-modern trade was all trinkets, and that intercontinental commerce began with Europeans.

Peter Frankopan's *The Silk Roads* (2015) argues these corridors, not the Mediterranean, were the axis of world history for most of recorded time. You now know enough to read that claim the course's way: as a framing argument by a named historian, sitting on documented traffic, to be weighed rather than recited. UNESCO began inscribing stretches of the land routes on the World Heritage list in 2014; the roads are now heritage. What they were for two millennia was infrastructure.

:::reveal What is Hansen's (2012) documented revision of the Silk Road story, and what does the Belitung wreck add on the maritime side? ||| From excavated documents (Turfan, Dunhuang, Niya), Hansen argues most overland trade was local and small-scale, oasis to oasis; the routes' world-historical cargo was people, religions, and technologies more than nonstop luxury freight. The Belitung wreck (9th-century Arabian-style ship, tens of thousands of Changsha bowls, a date in the 820s) shows the sea route carrying genuinely industrial-scale trade between Tang China and the Abbasid world, centuries before European ships arrived.

## Sources
- Hansen, V. (2012). *The Silk Road: A new history*. Oxford University Press.
- Hansen, V. (2020). *The year 1000: When explorers connected the world and globalization began*. Scribner.
- Whitfield, S. (1999). *Life along the Silk Road*. University of California Press.
- Frankopan, P. (2015). *The Silk Roads: A new history of the world*. Bloomsbury.
- UNESCO World Heritage Centre. (2014). *Silk Roads: The routes network of Chang'an-Tianshan corridor*. https://whc.unesco.org/en/list/1442/`,
      recallContent: [
        {
          prompt: "What kind of empire was Srivijaya, and what did Yijing report there?",
          answer:
            "A Buddhist thalassocracy (empire of harbors and fleets, not broad territory) centered by the standard identification at Palembang, Sumatra, controlling the Malacca and Sunda straits from the late 600s into the 1000s. Yijing, stopping in 671 and again in the 680s-690s, reported (his account) over a thousand monks and advised pilgrims to study Sanskrit there before India.",
        },
        {
          prompt: "How does the course tell you to read the Nagarakretagama's list of a hundred tributaries?",
          answer:
            "As a court panegyric of 1365 (Mpu Prapanca praising Hayam Wuruk's Majapahit): evidence of the empire's horizon and prestige, but how much real control it reflects is debated among historians. Same discipline as Maddison's shares: name the source, state what it is, do not upgrade praise into administration.",
        },
      ],
    },
    {
      slug: "asia-islamic-golden-age",
      title: "13 · Baghdad: the translation movement and the Islamic Golden Age",
      section: "Section 5 · The connective tissue",
      body: `West Asia is Asia. This lesson sits at the hinge of the whole course, because Abbasid Baghdad is where the streams you have been following, Indian mathematics, Greek philosophy, Persian statecraft, Chinese paper, ran together and were transformed.

The **Abbasid Caliphate** founded its new capital, the round city of **Baghdad**, in **762 CE**, and within a generation it ranked among the largest and richest cities in the world. What happened there over the next two centuries is called the **translation movement**, and the scholar Dimitri Gutas (1998) has reconstructed it as one of history's great intellectual projects: a **sustained, society-wide, patron-funded effort**, spanning roughly the eighth through tenth centuries, to translate nearly the whole available corpus of Greek science and philosophy, along with Persian and Sanskrit works, into Arabic. Caliphs funded it, but so did families of officials, physicians, and merchants; it was fashion, infrastructure, and policy at once. Two enabling facts: the new **paper mills** (previous lesson) made books radically cheaper than parchment, and the Abbasid realm inherited scholarly communities, Greek-literate Christians prominent among the translators, who did much of the work.

Now the hedge the course owes you. The famous **"House of Wisdom"** (*Bayt al-Hikma*), often described as a grand academy founded by the caliph **al-Ma'mun** (reigned 813-833), is real but its nature is debated: the surviving evidence is thin, and Gutas (1998) argues it was essentially a palace library, with the translation movement happening across the whole society rather than inside one building. Popular accounts inflate the institution; the documented wonder is the movement. This course teaches the hedge on purpose, because "there was a great library" is exactly the kind of claim that hardens into myth when nobody checks its footnotes.

What the movement produced was not just preservation but **new science**, and three names carry the point:

- **Al-Khwarizmi** (c. 780-850), working in Baghdad, wrote the book whose title gave us the word **algebra** (*al-jabr*), systematizing the solving of equations, and the treatise on reckoning with **Indian numerals** you met in the Gupta lesson; Latin corruptions of his name gave us **algorithm**. One scholar, two loanwords deep in your math homework.
- **Ibn al-Haytham** (965-c. 1040), working later in Cairo, wrote the *Book of Optics* (c. 1011-1021), arguing from constructed experiments that vision happens by light entering the eye; historians of science treat the book as a landmark of experimental method.
- **Ibn Sina** (Avicenna, 980-1037), a Persian physician-philosopher, completed his medical encyclopedia *al-Qanun* (the **Canon of Medicine**) in **1025**; in Latin translation it served as a standard European medical textbook into the early modern period (Pormann & Savage-Smith, 2007).

Hold on to the transmission geometry, because it completes a loop this course has been drawing since Lesson 5: **Indian numerals reached Europe through Arabic Baghdad; Greek philosophy returned to Europe through Arabic translations** rendered into Latin in places like Toledo. The historian George Saliba (2007) argues the traffic ran deeper still, into the astronomy behind Copernicus; that is a scholarly argument, attributed as one. Either way, the caricature of a "dark age" world where knowledge slept until Europe woke is unsupportable: the lights were on, in Baghdad, Cairo, Samarkand, and Cordoba.

Two honest notes to close. First, the "golden age" frame has its own trap: it can imply that everything after some date was decline, and historians increasingly push back on that story too; science in the Islamic world did not stop in 1258 (Saliba, 2007). Second, the era's end-date icon is real enough: in **1258** a Mongol army under Hulagu sacked Baghdad and killed the last Abbasid caliph of the city. Which brings this course to the empire that could do such a thing, and also ran the safest roads in Eurasia. Next lesson.

:::reveal What is the documented core of the 'Islamic Golden Age,' and what hedge does the course attach to the House of Wisdom? ||| The documented core is the translation movement (Gutas, 1998): a two-century, society-wide, patron-funded project in Abbasid Baghdad translating Greek, Persian, and Sanskrit learning into Arabic on cheap new paper, and the new science it fed (al-Khwarizmi's algebra and numeral treatise, Ibn al-Haytham's optics, Ibn Sina's 1025 Canon). The hedge: the 'House of Wisdom' is real but thinly evidenced, and Gutas argues it was essentially a palace library; the movement, not one building, is the wonder.

## Sources
- Gutas, D. (1998). *Greek thought, Arabic culture: The Graeco-Arabic translation movement in Baghdad and early ʿAbbāsid society*. Routledge.
- Saliba, G. (2007). *Islamic science and the making of the European Renaissance*. MIT Press.
- Pormann, P. E., & Savage-Smith, E. (2007). *Medieval Islamic medicine*. Edinburgh University Press.
- Plofker, K. (2009). *Mathematics in India*. Princeton University Press.`,
      recallContent: [
        {
          prompt: "Who coined 'Silk Road,' when, and why does the course lead with that fact?",
          answer:
            "Ferdinand von Richthofen, a German geographer, in 1877. The course leads with it because the name, like 'Asia,' is a modern label pasted onto older realities, and knowing a term's origin inoculates against treating the label as the thing.",
        },
        {
          prompt: "How does the course handle the Battle of Talas paper story?",
          answer:
            "As a tale, not a record: the story that captured Chinese papermakers brought papermaking to Samarkand after 751 is treated by historians as legend, since paper existed in Central Asia earlier. What is documented is the outcome: paper mills in Samarkand and Baghdad by the late 700s.",
        },
      ],
    },
    {
      slug: "asia-mongols",
      title: "14 · The Mongols: destruction and connection, both documented",
      section: "Section 5 · The connective tissue",
      body: `In 1206, a steppe assembly proclaimed a leader named Temujin as **Chinggis (Genghis) Khan**, and within three generations his family ruled the largest contiguous land empire in history, from Korea to Hungary. Two cartoon versions of the Mongols circulate, and this course refuses both, because the record documents both halves of the truth.

**Cartoon one: pure barbarians.** The conquests were, in fact, staggeringly violent, and saying so requires no exaggeration. Cities that resisted were made examples: when Hulagu's army took **Baghdad in 1258**, the caliph was killed and the city devastated, and contemporary and later chroniclers report death tolls that range from tens of thousands into the hundreds of thousands and beyond. Persian chroniclers assign figures above a million to the sacks of cities like Merv and Nishapur. This course's number discipline applies to atrocities exactly as it applies to GDP: those chronicle figures are **unverifiable and, at the top end, implausible** for the cities' likely populations, and historians treat them as expressions of catastrophe rather than counts (Morgan, 2007; Jackson, 2017). The catastrophe itself is not in doubt; whole regions' irrigation and urban life took generations to recover, and some scholars argue parts of the Iranian plateau never fully did (Jackson, 2017).

**Cartoon two: pure connectors, the "Pax Mongolica."** Also grounded in evidence, and also incomplete. The unified empire ran the **yam**, a relay post-road system with stations, remounts, and passports that moved messengers and officials across Eurasia at unprecedented speed; it took censuses; it deliberately spared, relocated, and employed artisans and engineers from conquered cities; and it kept its trunk routes safe enough that commercial handbooks and travelers treated trans-Eurasian journeys as routine business (Morgan, 2007). This is the world that put a Venetian merchant family at Kublai Khan's court: **Marco Polo** (traveling 1271-1295), whose account historians debate in its details and broadly accept in its substance, hedge included. Religious policy was pragmatic tolerance: the khans taxed and consulted Buddhist, Muslim, Christian, and Daoist clergy alike, less from principle than from statecraft. Under **Kublai**, the dynasty renamed itself **Yuan (1271)**, completed the conquest of Song China in **1279** (a date you know), and governed China until 1368.

Hold both cartoons up together and the honest synthesis appears: **the Mongols destroyed a connected world's nodes, then ran the connections harder than anyone before them.** Gunpowder and other Chinese technologies moved west in Mongol service; Persian astronomers worked in China and Chinese administrators in Iran; and the same unified routes that carried silk and scholars almost certainly helped carry the **plague** that reached the Black Sea in the 1340s and became Europe's Black Death, a transmission historians link to the Mongol-era circulation system while debating its exact path (Frankopan, 2015; Morgan, 2007). Connection was never automatically benign; the course notes it and moves on, because the point is structural, not moral.

One more thread ties this lesson to three earlier ones. The Mongol imperial family's afterlives run through this whole course: the Yuan in China; the Ilkhanate in Iran and Iraq; the Golden Horde on the steppe; and, centuries later, a Fergana prince proud of his descent from both Timur and Chinggis Khan, whom you met at Panipat in 1526 founding the Mughal ("Mongol") empire. Even the failed expeditions mattered: the storms that broke the invasions of Japan (1274, 1281) and the Javanese reversal that birthed Majapahit (1293) are load-bearing dates in two other lessons. For a century, nearly every story in Asia bent around this empire, in destruction, in connection, usually in both.

:::reveal How does the course's number discipline apply to Mongol atrocity figures, and what synthesis does it teach in place of the two cartoons? ||| Chronicle death tolls (hundreds of thousands at Baghdad 1258; over a million claimed at Merv or Nishapur) are unverifiable and at the top end implausible, so they are read as expressions of catastrophe, not counts; the catastrophe itself is undoubted. The synthesis: the Mongols destroyed a connected world's nodes AND then ran the connections harder than anyone before (yam relay, censuses, spared artisans, safe trunk routes, technology transfer), with the same routes likely carrying the 1340s plague west. Neither only-barbarian nor only-Pax-Mongolica survives the record.

## Sources
- Morgan, D. (2007). *The Mongols* (2nd ed.). Blackwell.
- Jackson, P. (2017). *The Mongols and the Islamic world: From conquest to conversion*. Yale University Press.
- Frankopan, P. (2015). *The Silk Roads: A new history of the world*. Bloomsbury.`,
      recallContent: [
        {
          prompt: "Name the three scholars this lesson uses to show the movement produced new science, with their contributions.",
          answer:
            "Al-Khwarizmi (algebra, from his book's title al-jabr, plus the treatise on Indian numerals; 'algorithm' from his name), Ibn al-Haytham (Book of Optics, c. 1011-1021, experiment-based theory of vision), and Ibn Sina (Canon of Medicine, 1025, a standard European medical text in Latin translation into the early modern period).",
        },
        {
          prompt: "What two enabling conditions made the Baghdad translation movement possible?",
          answer:
            "Paper mills (Samarkand, then Baghdad, by the late 700s) made books far cheaper than parchment, and the Abbasid realm inherited scholarly communities, prominently Greek-literate Christians, who did much of the translating under broad patronage from caliphs down to merchant families.",
        },
      ],
    },
    {
      slug: "asia-quiz-5",
      title: "Section 5 quiz · The connective tissue",
      section: "Section 5 · The connective tissue",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Where does the term 'Silk Road' come from?",
            options: [
              "Coined in 1877 by the German geographer Ferdinand von Richthofen; no ancient trader used it",
              "It appears in Han dynasty records",
              "Marco Polo coined it in the 1290s",
              "It is a translation of a Sogdian phrase",
            ],
            correctIndex: 0,
            explanation:
              "Like 'Asia,' it is a modern label pasted onto older realities, which is why the course opens the lesson by dating it.",
            sourceLessonSlug: "asia-silk-roads",
          },
          {
            prompt: "What is Hansen's (2012) documented revision of the overland Silk Road story?",
            options: [
              "Excavated documents show mostly local, small-scale, oasis-to-oasis trade; the routes' great cargo was people, religions, and technologies",
              "There was no overland trade at all",
              "Caravans regularly hauled silk nonstop from China to Rome",
              "Only silk ever moved on the routes",
            ],
            correctIndex: 0,
            explanation:
              "Her evidence is the contracts, passes, and letters dug up at Turfan, Dunhuang, and Niya, including the Sogdian merchants' own correspondence.",
            sourceLessonSlug: "asia-silk-roads",
          },
          {
            prompt: "How does the course treat the story that prisoners from the Battle of Talas (751) brought papermaking to Samarkand?",
            options: [
              "As a tale rather than a record, since paper existed in Central Asia earlier; the documented outcome is paper mills in Samarkand and Baghdad by the late 700s",
              "As a verified event with named prisoners",
              "As a myth with no underlying truth about paper's spread",
              "As proof that paper was invented at Talas",
            ],
            correctIndex: 0,
            explanation:
              "Separate the legend (the prisoners) from the documented outcome (the mills). The mills are what mattered: cheap books fueled Baghdad's translation movement.",
            sourceLessonSlug: "asia-silk-roads",
          },
          {
            prompt: "What does the Belitung shipwreck prove?",
            options: [
              "A 9th-century Arabian-style ship carried tens of thousands of mass-produced Chinese Changsha bowls (one dated to the 820s): industrial-scale Tang-Abbasid sea trade centuries before European ships arrived",
              "That Europeans reached Indonesia in the 800s",
              "That sea trade was limited to small luxury cargoes",
              "That Chinese ships never sailed west",
            ],
            correctIndex: 0,
            explanation:
              "One wreck kills two myths: pre-modern trade as trinkets, and intercontinental commerce as a European invention. The cargo is in Singapore's Asian Civilisations Museum.",
            sourceLessonSlug: "asia-silk-roads",
          },
          {
            prompt: "Who were the Sogdians?",
            options: [
              "An Iranian-speaking merchant people from the Samarkand region who served for centuries as the overland network's signature middlemen",
              "A Chinese dynasty",
              "Mongol tax collectors",
              "Japanese pirates",
            ],
            correctIndex: 0,
            explanation:
              "Their abandoned letters, found in a watchtower near Dunhuang, preserve the trade in the traders' own voices.",
            sourceLessonSlug: "asia-silk-roads",
          },
          {
            prompt: "What was the Baghdad translation movement, per Gutas (1998)?",
            options: [
              "A sustained, society-wide, patron-funded effort (roughly 8th-10th centuries) translating Greek, Persian, and Sanskrit learning into Arabic",
              "A single caliph's one-year project",
              "A program to translate Arabic works into Latin",
              "A purely religious effort limited to scripture",
            ],
            correctIndex: 0,
            explanation:
              "Caliphs, officials, physicians, and merchants all funded it; Greek-literate Christian scholars did much of the translating; cheap paper made it feasible.",
            sourceLessonSlug: "asia-islamic-golden-age",
          },
          {
            prompt: "What hedge does the course attach to the House of Wisdom?",
            options: [
              "It is real but thinly evidenced, and Gutas argues it was essentially a palace library; the documented wonder is the society-wide movement, not one building",
              "It never existed in any form",
              "It was the world's first university, fully documented",
              "It was located in Cairo, not Baghdad",
            ],
            correctIndex: 0,
            explanation:
              "Popular accounts inflate the institution. 'There was a great library' is the kind of claim that hardens into myth when nobody checks footnotes, so the course checks them.",
            sourceLessonSlug: "asia-islamic-golden-age",
          },
          {
            prompt: "Which two everyday English words descend from al-Khwarizmi and his book?",
            options: [
              "'Algebra' (from al-jabr in his book's title) and 'algorithm' (from Latin corruptions of his name)",
              "'Chemistry' and 'zenith'",
              "'Zero' and 'cipher'",
              "'Compass' and 'almanac'",
            ],
            correctIndex: 0,
            explanation:
              "He also wrote the treatise on reckoning with Indian numerals that carried the decimal system westward: one scholar, two loanwords, one transmission chain.",
            sourceLessonSlug: "asia-islamic-golden-age",
          },
          {
            prompt: "What was Ibn Sina's Canon of Medicine (1025)?",
            options: [
              "A medical encyclopedia that, in Latin translation, served as a standard European medical textbook into the early modern period",
              "A book of religious law",
              "The first book printed with movable type",
              "A Mongol medical manual",
            ],
            correctIndex: 0,
            explanation:
              "Its European career (Pormann & Savage-Smith, 2007) is the cleanest single proof that learning flowed from West Asia INTO Europe for centuries.",
            sourceLessonSlug: "asia-islamic-golden-age",
          },
          {
            prompt: "What honest caution does the course attach to the 'golden age' frame itself?",
            options: [
              "It can imply everything afterward was decline, a story historians increasingly push back on; science in the Islamic world did not stop in 1258",
              "That golden ages never really happen",
              "That the term is too positive about Baghdad",
              "That only Europe had golden ages",
            ],
            correctIndex: 0,
            explanation:
              "Saliba (2007) argues sophisticated work continued long after, possibly feeding Copernican astronomy; that is presented as his attributed argument.",
            sourceLessonSlug: "asia-islamic-golden-age",
          },
          {
            prompt: "How does the course handle chronicle death tolls from the Mongol conquests?",
            options: [
              "As unverifiable and, at the top end, implausible: read as expressions of catastrophe rather than counts, while the catastrophe itself is undoubted",
              "As precise statistics to memorize",
              "As proof the conquests were invented",
              "As undercounts to be tripled",
            ],
            correctIndex: 0,
            explanation:
              "Number discipline applies to atrocities exactly as to GDP: Persian chroniclers' million-plus figures for Merv or Nishapur exceed the cities' plausible populations.",
            sourceLessonSlug: "asia-mongols",
          },
          {
            prompt: "What was the yam?",
            options: [
              "The Mongol relay post-road system: stations, remounts, and passports moving messengers across Eurasia at unprecedented speed",
              "A Mongol siege engine",
              "The Mongol royal clan",
              "A tax on silk",
            ],
            correctIndex: 0,
            explanation:
              "It is the documented machinery behind the 'Pax Mongolica' half of the ledger, alongside censuses, spared artisans, and safe trunk routes.",
            sourceLessonSlug: "asia-mongols",
          },
          {
            prompt: "Which statement matches the course's synthesis on the Mongols?",
            options: [
              "They destroyed a connected world's nodes, then ran the connections harder than anyone before them; neither cartoon survives the record",
              "They were pure destroyers with no constructive record",
              "The conquests were bloodless and the Pax total",
              "They never affected trade either way",
            ],
            correctIndex: 0,
            explanation:
              "Baghdad 1258 and the yam are both documented. The same unified routes likely helped carry the 1340s plague west: connection is not automatically benign.",
            sourceLessonSlug: "asia-mongols",
          },
          {
            prompt: "How is Marco Polo's account treated by historians, per the course?",
            options: [
              "Debated in its details, broadly accepted in its substance",
              "Accepted word for word",
              "Proven to be entirely fabricated",
              "Lost, and known only by title",
            ],
            correctIndex: 0,
            explanation:
              "The hedge travels with the source: his journey (1271-1295) is evidence of the Mongol-era circulation system, cited with its scholarly caveats attached.",
            sourceLessonSlug: "asia-mongols",
          },
          {
            prompt: "Which later dynasty's founder claimed descent from both Chinggis Khan and Timur?",
            options: [
              "The Mughals: Babur, who won at Panipat in 1526",
              "The Ming",
              "The Tokugawa",
              "The Abbasids",
            ],
            correctIndex: 0,
            explanation:
              "'Mughal' is Persian for 'Mongol': the empire's afterlives run through the whole course, from the Yuan in China to the Fergana prince in Delhi.",
            sourceLessonSlug: "asia-mongols",
          },
        ],
      },
    },
    // ────────────── SECTION 6 · NO UTOPIA ──────────────
    {
      slug: "asia-hierarchy-bondage",
      title: "15 · No utopia: hierarchy and bondage across Asia",
      section: "Section 6 · No utopia: the honest record",
      body: `A course built to refute one distortion must not manufacture the opposite one. Precolonial Asia was not a paradise that Europeans interrupted; it contained steep hereditary hierarchy and outright slavery, documented in its own sources. Omitting that record would be its own kind of flattening, and it would hand ammunition to anyone who wants to dismiss this whole course as advertising. So here it is, named to region and period, like everything else.

**South Asia: caste.** Textual hierarchy is ancient: the four-fold *varna* scheme appears in a late hymn of the Rigveda, and the *Manusmriti* (compiled roughly between 200 BCE and 200 CE) codifies a legal order of ranked, birth-assigned groups, including people treated as polluting and excluded, the groups later called "untouchable." The lived system, thousands of endogamous *jati* communities, was regionally varied and changed over time, and historians such as Susan Bayly (1999) argue that colonial-era institutions later hardened and reorganized it. Hold both halves with precision, because two opposite myths circulate: caste is neither an eternal, unchanging essence of India, nor a British invention. It is a documented precolonial hierarchy that later rulers, indigenous and colonial, reworked (Bayly, 1999; Thapar, 2002).

**Korea: the nobi.** Joseon Korea, the same state that gave you Sejong's alphabet, ran for centuries on a hereditary unfree class, the **nobi**, who could be bought, sold, inherited, and given as gifts, with status passing to children. The historian James Palais (1996) estimated that nobi amounted to roughly **30 percent of the population in some periods**, an estimate attributed as his, from registers that permit only rough shares, and he argued on that basis that Korea should be counted among history's genuine slave societies. Scholars debate whether "slave" or "serf" better translates nobi status, since many lived semi-independently and paid tribute; the debate is real, and so is the hereditary unfreedom (Palais, 1996; Seth, 2011).

**Southeast Asia: temple and household bondage.** You already met this record through an eyewitness: Zhou Daguan matter-of-factly describes enslaved people in Angkor's households in 1296-97, and Khmer temple inscriptions list thousands of bound workers attached to temple estates (Zhou Daguan, 1296-97/2007; Coe, 2003). Across much of Southeast Asia, historians describe bondage for debt as a central labor institution, with a spectrum from short-term debt peonage to permanent hereditary slavery.

**East and West Asia: the legal and commercial record.** Tang China's law code regulated slavery as a routine institution, with enslaved people bought and sold. And the **Indian Ocean slave trade**, moving people from East Africa and elsewhere into Asian ports and households, ran for many centuries before the Atlantic trade began and continued alongside it; its forms varied enormously, from plantation labor to soldiers and administrators, which is a difference from the Atlantic system worth teaching but not a euphemism (Campbell, 2004). One documented life makes the complexity vivid: **Malik Ambar** (1548-1626), born in Ethiopia, enslaved and sold across the Indian Ocean world, ended his life as the effective ruler of the Ahmadnagar sultanate in India's Deccan and one of the Mughals' most stubborn military opponents. His story is not redemption arithmetic; it is evidence that Asian slavery was real, large, and structurally different from the plantation model most students picture (Campbell, 2004).

Why does an orientation course spend a lesson on this? Three reasons, and they echo a rule you have now seen applied to golden ages and conquerors alike. First, the record demands it: these institutions are in the inscriptions, law codes, and eyewitness accounts, not in hostile propaganda. Second, honesty here protects everything else: a course that hid the nobi could not be trusted on the Jikji. Third, precision matters even in indictment: "Asia practiced caste" is as false as "Asia was casteless," because caste is South Asian, nobi Korean, temple bondage Khmer. Name the system, the place, and the period, in the hard parts exactly as in the proud ones.

:::reveal Why does the course insist on naming hierarchy and bondage system by system instead of either skipping them or generalizing them? ||| Skipping them would flatten the record (they are documented in Asia's own law codes, inscriptions, and eyewitness accounts) and would make the course untrustworthy on everything else. Generalizing them ("Asia practiced caste") fails the same precision test as flattery: caste is South Asian with its own contested history, nobi is Joseon Korean (Palais's ~30 percent estimate, attributed), temple bondage is Khmer, and the Indian Ocean trade had its own structure. Honesty and precision apply to the hard parts exactly as to the proud ones.

## Sources
- Bayly, S. (1999). *Caste, society and politics in India from the eighteenth century to the modern age*. Cambridge University Press.
- Palais, J. B. (1996). *Confucian statecraft and Korean institutions: Yu Hyŏngwŏn and the late Chosŏn dynasty*. University of Washington Press.
- Campbell, G. (Ed.). (2004). *The structure of slavery in Indian Ocean Africa and Asia*. Frank Cass.
- Zhou Daguan. (2007). *A record of Cambodia: The land and its people* (P. Harris, Trans.). Silkworm Books. (Original work written c. 1296-1297)
- Thapar, R. (2002). *Early India: From the origins to AD 1300*. University of California Press.
- Seth, M. J. (2011). *A history of Korea: From antiquity to the present*. Rowman & Littlefield.`,
      recallContent: [
        {
          prompt: "List the documented machinery of the 'Pax Mongolica' side of the ledger.",
          answer:
            "The yam post-road relay with stations, remounts, and passports; imperial censuses; deliberate sparing and relocation of artisans and engineers; trunk routes safe enough for routine trans-Eurasian commerce (Marco Polo's 1271-95 journey, debated in detail, accepted in substance); pragmatic religious tolerance; Persian and Chinese experts exchanged across the empire.",
        },
        {
          prompt: "Trace the Mongol threads that connect to other lessons in this course.",
          answer:
            "Baghdad 1258 ends the Abbasid lesson's era; Yuan conquest of Song 1279 ends the Song lesson; the failed invasions of Japan (1274, 1281) and the repelled Java expedition (Majapahit's founding, 1293) appear in Sections 3-4; Babur, founder of the Mughals (1526), claimed descent from both Chinggis Khan and Timur.",
        },
      ],
    },
    {
      slug: "asia-conquest-before-europe",
      title: "16 · Conquest before colonization: empire was already here",
      section: "Section 6 · No utopia: the honest record",
      body: `The second half of the honest record: war, conquest, and empire between Asian states. This lesson matters because a lazy version of this course's title implies that domination arrived in Asia on European ships. The documented record says otherwise, loudly, and getting it right sharpens rather than weakens the analysis of what European colonization actually was.

Walk back through your own lessons and count the conquests that had nothing to do with Europe. The **Chola** kingdom of south India launched a naval expedition against **Srivijaya in 1025**, raiding its ports across the Bay of Bengal: an Asian maritime power projecting force against another Asian maritime power, five centuries before Portugal reached the strait (Hall, 2011). The **Mongol conquests** you met in Section 5 subjugated more of Asia than any European empire ever ruled. The **Mughals** were a conquest state from Panipat onward. **Ming China occupied Vietnam** from **1407 to 1427**, imposing direct administration until Le Loi's resistance expelled the occupiers, an episode Vietnamese historiography remembers vividly (Taylor, 2013). And in the **Imjin War (1592-1598)**, Toyotomi Hideyoshi's newly unified Japan invaded Joseon Korea with armies over 150,000 strong (by the standard accounts of a well-documented war), aiming through Korea at China itself; the invasions were fought to a bloody stalemate by Korean armies and irregulars, Admiral **Yi Sun-sin's** navy, and Ming intervention, and they devastated the peninsula. A memorial in Kyoto, the Mimizuka mound, holds the noses and ears taken from tens of thousands of Korean dead as trophies; the war's brutality is not a matter of interpretation (Swope, 2009; Seth, 2011).

So "empire" and "conquest" were not European imports; they were the ordinary weather of Asian statecraft, as they were of European, African, and American statecraft. What, then, actually distinguishes **European colonization**, the thing this course's title dates everything "before"? Lesson 6 gave you the working answer for India, and it generalizes:

- **Where sovereignty sat.** The Mughals, Ming, and Tokugawa ruled from inside the lands they ruled and became local powers; their revenues were largely spent and reinvested there. Company and colonial rule answered to owners and ministries on another continent, and profits, careers, and final authority flowed there.
- **The global system.** European colonization plugged Asian economies into a worldwide extractive network, with policy set to the metropole's advantage: the classic documented example is Bengal's textile industry, the pride of Lesson 6, declining under Company rule while Britain's mechanized industry rose, a linkage whose precise causes economic historians still argue about and which the track's Great Divergence course examines in depth.
- **The dates.** Enclaves from 1510, territory from 1757, the high tide in the 1800s, and the end within living memory's reach: India's independence came in 1947, Indonesia's was declared in 1945. On this course's timeline, European rule over Asia's heartlands lasted roughly two centuries out of four and a half millennia of documented urban history.

One more precision, and it may be the most useful one in the lesson: the last empire to colonize a major Asian nation before 1945 was **Asian**. Japan, having escaped colonization itself, annexed **Korea in 1910** and ruled it until 1945, with documented severity. History does not sort perpetrators and victims by continent, and a course that taught otherwise would be doing propaganda with better footnotes.

None of this dilutes what European colonization did; scale, integration, and ideology made it a rupture, not just another conquest, and the follow-on courses document exactly how. What this lesson removes is the waiting-room picture of Asia: four millennia of states that fought, conquered, taxed, enslaved, built, printed, and calculated, on their own terms, for their own reasons, long before and long after the first European sail appeared.

:::reveal What distinguishes European colonization from the intra-Asian conquests the course has documented, and why does the distinction strengthen rather than weaken the course? ||| The distinguishing marks are structural, not the mere arrival of outsiders: sovereignty seated on another continent (with profits and final authority flowing there), integration into a global extractive system run for the metropole (Bengal's textile decline as the classic argued case), and specific dates (enclaves 1510, territory 1757, ended by the mid-1900s). The distinction strengthens the course because it survives the documented record of Chola raids, Mongol conquest, Ming-occupied Vietnam, the Imjin War, and Japan's 1910 annexation of Korea, whereas 'domination arrived on European ships' collapses on first contact with the evidence.

## Sources
- Swope, K. M. (2009). *A dragon's head and a serpent's tail: Ming China and the first great East Asian war, 1592-1598*. University of Oklahoma Press.
- Taylor, K. W. (2013). *A history of the Vietnamese*. Cambridge University Press.
- Seth, M. J. (2011). *A history of Korea: From antiquity to the present*. Rowman & Littlefield.
- Hall, K. R. (2011). *A history of early Southeast Asia: Maritime trade and societal development, 100-1500*. Rowman & Littlefield.
- Richards, J. F. (1993). *The Mughal Empire* (The New Cambridge History of India, I.5). Cambridge University Press.`,
      recallContent: [
        {
          prompt: "State the two opposite myths about caste that the course rejects, and the documented position between them.",
          answer:
            "Myth one: caste as an eternal, unchanging essence of India. Myth two: caste as a British invention. Documented position: textual hierarchy is ancient (varna in a late Rigveda hymn; the Manusmriti's codified ranks c. 200 BCE-200 CE), the lived jati system varied by region and changed over time, and colonial institutions later hardened and reorganized it (Bayly, 1999).",
        },
        {
          prompt: "What were the nobi, and how does the course present Palais's figure?",
          answer:
            "Joseon Korea's hereditary unfree class: bought, sold, inherited, status passing to children. Palais (1996) estimated roughly 30 percent of the population in some periods; the course attributes the estimate to him, notes the registers permit only rough shares, and reports the scholarly debate over 'slave' versus 'serf' while keeping the hereditary unfreedom itself undisputed.",
        },
      ],
    },
    {
      slug: "asia-quiz-6",
      title: "Section 6 quiz · The honest record",
      section: "Section 6 · No utopia: the honest record",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why does the course include a section on hierarchy, slavery, and conquest at all?",
            options: [
              "Because the record demands it (it is in Asia's own law codes, inscriptions, and eyewitness accounts), and hiding it would make the course untrustworthy on everything else",
              "To argue that precolonial Asia was worse than everywhere else",
              "Because European sources require it",
              "To justify later colonization",
            ],
            correctIndex: 0,
            explanation:
              "A course that hid the nobi could not be trusted on the Jikji. The romance trap is the erasure trap's mirror image.",
            sourceLessonSlug: "asia-hierarchy-bondage",
          },
          {
            prompt: "Which two opposite myths about caste does the course reject?",
            options: [
              "That caste is an eternal, unchanging essence of India, and that caste was a British invention",
              "That caste existed, and that it was hierarchical",
              "That the Manusmriti is old, and that jatis exist",
              "That caste is South Asian, and that it changed over time",
            ],
            correctIndex: 0,
            explanation:
              "The documented position: ancient textual hierarchy (varna; the Manusmriti c. 200 BCE-200 CE), a varied and changing lived jati system, and colonial-era hardening argued by Bayly (1999).",
            sourceLessonSlug: "asia-hierarchy-bondage",
          },
          {
            prompt: "What does Palais (1996) estimate about the nobi, and how does the course present it?",
            options: [
              "Roughly 30 percent of Joseon Korea's population in some periods; presented as his attributed estimate from registers that permit only rough shares",
              "An exact census figure of 30 percent for all of Korean history",
              "That the nobi were free wage laborers",
              "That nobi status ended in the 1400s",
            ],
            correctIndex: 0,
            explanation:
              "He argued Korea belongs among history's genuine slave societies; scholars debate 'slave' vs 'serf' as translations, while the hereditary unfreedom is undisputed.",
            sourceLessonSlug: "asia-hierarchy-bondage",
          },
          {
            prompt: "How does the course use Malik Ambar's life?",
            options: [
              "As documented evidence that Indian Ocean slavery was real, large, and structurally different from the plantation model: born in Ethiopia, enslaved, he ended as effective ruler of Ahmadnagar and a stubborn Mughal opponent",
              "As proof that slavery in Asia was benign",
              "As a legend with no documentation",
              "As an example of European plantation slavery",
            ],
            correctIndex: 0,
            explanation:
              "Not redemption arithmetic: one man's rise does not offset an institution. His documented career shows the trade's reach and its difference in form from the Atlantic system (Campbell, 2004).",
            sourceLessonSlug: "asia-hierarchy-bondage",
          },
          {
            prompt: "Which eyewitness and epigraphic evidence documents bondage at Angkor?",
            options: [
              "Zhou Daguan's 1296-97 account describes enslaved people in households, and temple inscriptions list thousands of bound workers on temple estates",
              "Portuguese court records from the 1500s",
              "Henri Mouhot's 1860s diaries",
              "There is no evidence of bondage at Angkor",
            ],
            correctIndex: 0,
            explanation:
              "The same sources that document Angkor's grandeur document its unfreedom, which is why the course reads sources whole rather than quarrying them for compliments.",
            sourceLessonSlug: "asia-hierarchy-bondage",
          },
          {
            prompt: "Why is 'Asia practiced caste' as false as 'Asia was casteless,' per the course?",
            options: [
              "Because both flatten: caste is South Asian, nobi bondage is Korean, temple bondage is Khmer; precision applies to the hard parts exactly as to the proud ones",
              "Because caste never existed anywhere",
              "Because only Europe had social hierarchy",
              "Because the word 'caste' is untranslatable",
            ],
            correctIndex: 0,
            explanation:
              "The anti-flattening rule is not a politeness rule; it is an accuracy rule, and it cuts in every direction.",
            sourceLessonSlug: "asia-hierarchy-bondage",
          },
          {
            prompt: "What happened between the Chola kingdom and Srivijaya in 1025?",
            options: [
              "A Chola naval expedition raided Srivijaya's ports across the Bay of Bengal: Asian power projected against Asian power, five centuries before Portugal arrived",
              "They signed a permanent alliance",
              "Srivijaya conquered south India",
              "Portugal mediated a peace between them",
            ],
            correctIndex: 0,
            explanation:
              "One of the course's cleanest proofs that maritime force projection was an intra-Asian reality long before European ships entered these waters.",
            sourceLessonSlug: "asia-conquest-before-europe",
          },
          {
            prompt: "What was the Ming occupation of Vietnam?",
            options: [
              "Direct Chinese administration of Vietnam from 1407 to 1427, ended by Le Loi's resistance",
              "A trade agreement signed in 1407",
              "A Mongol invasion of the 1280s",
              "A French protectorate",
            ],
            correctIndex: 0,
            explanation:
              "An Asian great power annexing and administering an Asian neighbor, remembered vividly in Vietnamese historiography (Taylor, 2013).",
            sourceLessonSlug: "asia-conquest-before-europe",
          },
          {
            prompt: "What was the Imjin War?",
            options: [
              "Hideyoshi's Japan invaded Joseon Korea (1592-1598), aiming through Korea at China; Korean forces, Yi Sun-sin's navy, and Ming intervention fought it to a devastating stalemate",
              "A Korean invasion of Japan",
              "A civil war inside Ming China",
              "A war between Japan and Portugal",
            ],
            correctIndex: 0,
            explanation:
              "The Mimizuka mound in Kyoto, holding trophies taken from tens of thousands of Korean dead, makes the war's brutality a matter of record, not interpretation (Swope, 2009).",
            sourceLessonSlug: "asia-conquest-before-europe",
          },
          {
            prompt: "Which power annexed Korea in 1910?",
            options: [
              "Japan, which ruled it until 1945",
              "Britain",
              "Russia",
              "The United States",
            ],
            correctIndex: 0,
            explanation:
              "The last empire to colonize a major Asian nation before 1945 was Asian. History does not sort perpetrators and victims by continent.",
            sourceLessonSlug: "asia-conquest-before-europe",
          },
          {
            prompt: "Which of these does the course list as a structural mark of European colonization, beyond 'outsiders arrived'?",
            options: [
              "Sovereignty seated on another continent, with profits, careers, and final authority flowing to the metropole",
              "The use of cavalry in battle",
              "Taxation of peasants",
              "Religious difference between rulers and ruled",
            ],
            correctIndex: 0,
            explanation:
              "Cavalry, taxation, and religious difference all describe the Mughals too. The seat of sovereignty and the global extractive system are what the definition needs.",
            sourceLessonSlug: "asia-conquest-before-europe",
          },
          {
            prompt: "How long did European rule over Asia's heartlands last, on the course's timeline?",
            options: [
              "Roughly two centuries (from Plassey 1757 to the mid-1900s) out of some four and a half millennia of documented urban history",
              "Over a thousand years",
              "From 1510 continuously to the present",
              "Less than a decade",
            ],
            correctIndex: 0,
            explanation:
              "India's independence came in 1947 and Indonesia declared in 1945; the enclave era from 1510 was earlier but was not heartland rule. Proportion is part of precision.",
            sourceLessonSlug: "asia-conquest-before-europe",
          },
          {
            prompt: "What is the 'waiting-room picture' the course removes?",
            options: [
              "The idea that Asian history was a prelude spent waiting for Europeans to arrive and matter",
              "The idea that Asia had large cities",
              "The idea that trade existed before 1500",
              "The idea that empires kept archives",
            ],
            correctIndex: 0,
            explanation:
              "Four millennia of states fought, taxed, built, printed, and calculated on their own terms; European colonization was a late, real, datable rupture, not the start of the story.",
            sourceLessonSlug: "asia-conquest-before-europe",
          },
          {
            prompt: "Does documenting intra-Asian conquest dilute what European colonization did, per the course?",
            options: [
              "No: scale, integration, and ideology made European colonization a rupture, and the precise definition survives the evidence, unlike the slogan version",
              "Yes: it proves colonization was harmless",
              "Yes: all empires are identical in every respect",
              "No, because European colonization never happened",
            ],
            correctIndex: 0,
            explanation:
              "A definition that collapses when it meets the Chola raid or the Imjin War was a bad definition. The one the course teaches gets stronger under the same test.",
            sourceLessonSlug: "asia-conquest-before-europe",
          },
          {
            prompt: "What does the course say about Bengal's textile industry under Company rule?",
            options: [
              "It declined while Britain's mechanized industry rose, a documented linkage whose precise causes economic historians still argue about",
              "It grew without interruption into the 1900s",
              "It never existed",
              "It was destroyed by the Mughals",
            ],
            correctIndex: 0,
            explanation:
              "The claim is stated with its debate attached and handed to the track's Great Divergence course for depth, which is the course's standing procedure for contested causation.",
            sourceLessonSlug: "asia-conquest-before-europe",
          },
        ],
      },
    },
    // ────────────── SECTION 7 · THE DIVERGENCE, AND HOW WE KNOW ──────────────
    {
      slug: "asia-great-divergence",
      title: "17 · The Great Divergence: a live debate, and the toolkit you leave with",
      section: "Section 7 · The divergence, and how we know",
      body: `You now know the map. Time to face the question the whole course has been building toward, and to face it the way historians actually do: as an open argument between named scholars, on evidence you now know how to weigh.

**The question.** If, on the standard reconstructions, China and India together were roughly half the world economy as late as 1820 (Maddison, 2007), and if Song China ran a partly coal-fired iron industry, printed money, and compass-guided shipping seven centuries before industrial Britain, then why did the industrial breakthrough happen in northwestern Europe, and when did Europe's lead actually begin? Economic historians call this **the Great Divergence** question, after the book that reframed it.

**Pomeranz's argument (2000).** Kenneth Pomeranz's move was methodological before it was historical: stop comparing "Europe" with "China," a continent-sized flattening this course has trained you to distrust, and compare **like with like**, England against the Yangzi River delta, the two most commercially advanced regions of their worlds. On his reading of the evidence, the two looked broadly comparable as late as about **1750** in life expectancy, consumption, market institutions, and agricultural sophistication, and both faced the same ecological wall: land running out. What broke the tie, he argued, was **contingency**: Britain's coal lay close to its industrial regions, and the New World supplied land-intensive calories and cotton that lifted the ecological constraint, resources no Yangzi merchant could reach. On this view Europe's lead is late, narrow at first, and lucky in its geography. Pomeranz and allied scholars (Wong, Frank, Marks) are often grouped as the "California School" (Pomeranz, 2000; Frank, 1998).

**The pushback (2018).** Stephen Broadberry, Hanhui Guan, and David Daokui Li rebuilt GDP-per-capita series for China back to 980 using historical national accounting, and their reconstruction tells a different story: China's leading regions, on their figures, had already fallen behind the leading edge of Europe **well before 1750**, with the gap opening progressively rather than suddenly (Broadberry et al., 2018). Real-wage studies by Robert Allen and collaborators likewise found early modern silver wages in Asian cities below northwestern European levels, though comparing rice-and-wheat living standards across continents is exactly as hard as it sounds (Allen, 2009). If the revisionists are right, the divergence has deeper institutional or economic roots; if Pomeranz is right, it was late and contingent. **This course declares no winner**, because the professionals have not: the debate continues, dataset by dataset, in the journals.

**What no side disputes.** Read the debate's boundaries carefully, because they are the course's final factual payload. Nobody argues Europe led the world economy in 1000, or 1500. Nobody disputes that the divergence, whenever it began, was **complete and enormous by the mid-1800s**, when British gunboats, not British textiles, set terms in Asian ports. And nobody disputes that the lead has been narrowing again within living memory. Whether "the West's" clear economic dominance lasted two centuries or three, on this course's four-and-a-half-millennium timeline it is a **recent episode**, and the burden of the word "contingent" is precisely what the scholars are still fighting about.

**The toolkit, one last time.** Look back at what you actually used in this course, because it is the transferable part. You weighed **state documents** (the Han census of 2 CE, Ashoka's edicts) that count only what states count. **Dated artifacts** (the Diamond Sutra's colophon, the Jikji, the Belitung cargo) that carry their own proof. **Eyewitnesses** (Zhou Daguan, Yijing, Marco Polo) read with their limits attached. **Reconstructions** (Maddison's shares, Hartwell's tonnage) treated as attributed estimates with error bars. **Archaeology** (the Indus drains, Evans's Angkor map) that speaks where texts are silent, and **silences** (Srivijaya's four forgotten centuries) that testify about survival, not absence. Every future claim you meet about any place's past can be put through the same audit: *who says, in what kind of source, about which people, where, when, and does anything independent converge?* Run it on the claims you want to believe hardest. That habit, more than any date in this course, is what you should walk out with.

:::reveal State the Great Divergence debate's two positions with their named scholars, and what neither side disputes. ||| Pomeranz (2000, with the California School): comparing like regions (England vs the Yangzi delta), rough comparability until c. 1750, then a late, contingent breakout riding on accessible coal and New World resources. Broadberry, Guan & Li (2018, with Allen's wage studies): reconstructed accounts show Europe's leading edge pulling ahead well before 1750, implying deeper roots. Neither side disputes that Europe did not lead in 1000 or 1500, that the divergence was complete and enormous by the mid-1800s, and that on a millennia-long timeline the West's clear lead is a recent episode.

## Sources
- Pomeranz, K. (2000). *The Great Divergence: China, Europe, and the making of the modern world economy*. Princeton University Press.
- Broadberry, S., Guan, H., & Li, D. D. (2018). China, Europe, and the Great Divergence: A study in historical national accounting, 980-1850. *The Journal of Economic History, 78*(4), 955-1000.
- Allen, R. C. (2009). *The British industrial revolution in global perspective*. Cambridge University Press.
- Maddison, A. (2007). *Contours of the world economy, 1-2030 AD: Essays in macro-economic history*. Oxford University Press.
- Bolt, J., & van Zanden, J. L. (2020). *Maddison style estimates of the evolution of the world economy: A new 2020 update* (Maddison Project Working Paper WP-15). University of Groningen.
- Frank, A. G. (1998). *ReOrient: Global economy in the Asian age*. University of California Press.`,
      recallContent: [
        {
          prompt: "List four documented intra-Asian conquests or invasions from before or apart from European rule, with dates.",
          answer:
            "The Chola naval raid on Srivijaya (1025); the Mongol conquests (1200s, including Baghdad 1258 and Song China by 1279); Ming China's occupation of Vietnam (1407-1427, expelled by Le Loi's resistance); Hideyoshi's Imjin War invasions of Korea (1592-1598). Japan's annexation of Korea (1910-1945) completes the point that the last pre-1945 colonizer of a major Asian nation was Asian.",
        },
        {
          prompt: "Roughly how long did European rule over Asia's heartlands last, against the course's full timeline?",
          answer:
            "About two centuries (territorial rule from Plassey 1757; independence movements succeeding by the mid-1900s, e.g. Indonesia 1945, India 1947) out of roughly four and a half millennia of documented urban history since the Indus cities.",
        },
      ],
    },
    {
      slug: "asia-exercise-name-it",
      title: "Exercise · Name the civilization, the person, the place",
      section: "Section 7 · The divergence, and how we know",
      body: `The course's first rule was: never say "Asia did X"; name the civilization, the period, the region. This drill checks that the names actually stuck. Each prompt describes something you met in the course; type the missing name. Spelling is checked forgivingly, and common alternate forms are accepted.`,
      exercise: {
        instructions:
          "Fill in the missing name (a civilization, dynasty, person, city, or empire). Common alternate spellings are accepted.",
        items: [
          {
            prompt: "The urban civilization of c. 2600-1900 BCE whose script remains undeciphered: the ___ civilization.",
            answer: "Indus",
            accept: ["harappan", "indus valley"],
            hint: "Named for a river in present-day Pakistan.",
            explanation: "The Indus (Harappan) civilization: planned cities, standardized weights, covered drains, and several hundred signs no one can read.",
          },
          {
            prompt: "The Mauryan emperor who inscribed his remorse for the Kalinga war on rocks across South Asia: ___.",
            answer: "Ashoka",
            accept: ["asoka"],
            hint: "Reigned c. 268-232 BCE; his lion capital is India's national emblem.",
            explanation: "Ashoka's edicts, in Prakrit, Greek, and Aramaic, are the earliest substantial readable royal writing from South Asia.",
          },
          {
            prompt: "The mathematician whose 628 CE treatise first stated systematic rules for arithmetic with zero: ___.",
            answer: "Brahmagupta",
            accept: [],
            hint: "His Brahmasphutasiddhanta also handled negative numbers.",
            explanation: "Brahmagupta treated zero as a number to calculate with; Aryabhata (499 CE) had already computed with place value.",
          },
          {
            prompt: "The Central Asian founder of the Mughal empire, victor at Panipat in 1526: ___.",
            answer: "Babur",
            accept: [],
            hint: "He claimed descent from both Timur and Genghis Khan.",
            explanation: "A Timurid prince from Fergana; 'Mughal' is a Persian form of 'Mongol,' an outsiders' label for an outsider dynasty.",
          },
          {
            prompt: "The scholar-official whose Dream Pool Essays (1088) recorded Bi Sheng's movable type: ___ ___.",
            answer: "Shen Kuo",
            accept: ["shen gua"],
            hint: "He also described the magnetized needle.",
            explanation: "Shen Kuo's notebook is the primary source for clay movable type (1040s) and an early account of the compass.",
          },
          {
            prompt: "The court lady who wrote The Tale of Genji around 1010: ___ ___.",
            answer: "Murasaki Shikibu",
            accept: ["murasaki"],
            hint: "Heian Japan; the work is often called the world's first novel.",
            explanation: "Heian court women, writing in kana while men wrote prestige Chinese, produced much of classical Japan's greatest literature.",
          },
          {
            prompt: "The Korean dynasty that printed the Jikji with movable metal type in 1377: ___.",
            answer: "Goryeo",
            accept: ["koryo", "goryeo korea", "koryŏ"],
            hint: "The dynasty's name gave Korea its Western name.",
            explanation: "Goryeo (918-1392) also carved the 81,000-block Tripitaka Koreana; the Jikji predates Gutenberg's Bible by roughly 78 years.",
          },
          {
            prompt: "The Khmer capital mapped as the world's largest preindustrial settlement complex: ___.",
            answer: "Angkor",
            accept: [],
            hint: "Evans et al. (2007), in present-day Cambodia.",
            explanation: "A low-density engineered landscape on the order of a thousand square kilometers, centered on Angkor Wat and Angkor Thom.",
          },
          {
            prompt: "The Sumatra-based maritime empire, forgotten until Coedès reassembled it in 1918: ___.",
            answer: "Srivijaya",
            accept: ["sriwijaya"],
            hint: "It controlled the Strait of Malacca; Yijing studied there in 671.",
            explanation: "A Buddhist thalassocracy centered by the standard identification at Palembang, dominant from the late 600s into the 1000s.",
          },
          {
            prompt: "The Abbasid capital of the translation movement, founded in 762: ___.",
            answer: "Baghdad",
            accept: [],
            hint: "Sacked by Hulagu's Mongol army in 1258.",
            explanation: "Its two-century, society-wide translation movement (Gutas, 1998) turned Greek, Persian, and Sanskrit learning into Arabic science.",
          },
          {
            prompt: "The steppe leader proclaimed supreme khan in 1206, founder of history's largest contiguous land empire: ___ Khan.",
            answer: "Genghis",
            accept: ["chinggis", "chingis", "genghis khan", "chinggis khan"],
            hint: "Born Temujin.",
            explanation: "His family's empire ran from Korea to Hungary within three generations: destroyer and connector at once, per the documented record.",
          },
          {
            prompt: "The historian whose book The Great Divergence (2000) argued Europe's breakout was late and contingent: ___.",
            answer: "Pomeranz",
            accept: ["kenneth pomeranz"],
            hint: "He compared England with the Yangzi delta, not 'Europe' with 'China.'",
            explanation: "Kenneth Pomeranz; the named pushback is Broadberry, Guan & Li (2018), and the course declares no winner because the field has not.",
          },
        ],
      },
    },
    {
      slug: "asia-quiz-7",
      title: "Section 7 quiz · The divergence, and the whole map",
      section: "Section 7 · The divergence, and how we know",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What was Pomeranz's methodological innovation in The Great Divergence?",
            options: [
              "Comparing like with like: England against the Yangzi delta, the most advanced regions of each world, instead of 'Europe' against 'China'",
              "Using only European sources",
              "Ignoring economic data entirely",
              "Comparing modern nations' borders backward in time",
            ],
            correctIndex: 0,
            explanation:
              "It is the course's anti-flattening rule applied to economic history: name the region before you compare, or the comparison is meaningless.",
            sourceLessonSlug: "asia-great-divergence",
          },
          {
            prompt: "What broke the England-Yangzi tie, in Pomeranz's argument?",
            options: [
              "Contingency: coal near Britain's industrial regions, plus New World land, calories, and cotton lifting the shared ecological constraint",
              "Inherent European cultural superiority",
              "China's abolition of markets",
              "A Chinese ban on iron production",
            ],
            correctIndex: 0,
            explanation:
              "On his reading both regions faced the same wall (land running out) as late as c. 1750; geography and colonies, not deep superiority, opened Europe's escape hatch.",
            sourceLessonSlug: "asia-great-divergence",
          },
          {
            prompt: "What did Broadberry, Guan, and Li (2018) conclude?",
            options: [
              "Reconstructed GDP-per-capita series show China's leading regions falling behind Europe's leading edge well before 1750, with the gap opening progressively",
              "That the divergence never happened",
              "That China led the world economy until 1900",
              "That Pomeranz was right in every particular",
            ],
            correctIndex: 0,
            explanation:
              "Their historical national accounting reaches back to 980. If they are right, the divergence has deeper roots; the debate continues in the journals.",
            sourceLessonSlug: "asia-great-divergence",
          },
          {
            prompt: "Why does the course declare no winner in the Great Divergence debate?",
            options: [
              "Because the professionals have not: the datasets and arguments are still contested in the journals, and the course's voice asserts only what is settled",
              "Because the question is unanswerable in principle",
              "Because both sides retracted their books",
              "Because the course has no opinion on anything",
            ],
            correctIndex: 0,
            explanation:
              "The same posture as the Indus script and the House of Wisdom: attribute the live positions, assert the settled boundaries.",
            sourceLessonSlug: "asia-great-divergence",
          },
          {
            prompt: "Which of these is a boundary of the debate that NO serious side disputes?",
            options: [
              "Europe did not lead the world economy in 1000 or 1500, and the divergence was complete and enormous by the mid-1800s",
              "The divergence began with the fall of Rome",
              "Asia never had advanced economies",
              "The divergence is still widening today",
            ],
            correctIndex: 0,
            explanation:
              "Whether the West's clear lead lasted two centuries or three, on a four-and-a-half-millennium timeline it is a recent episode. That boundary is the course's final factual payload.",
            sourceLessonSlug: "asia-great-divergence",
          },
          {
            prompt: "What do Allen's (2009) real-wage studies contribute, and with what caveat?",
            options: [
              "Early modern silver wages in Asian cities measured below northwestern European levels, with the caveat that cross-continental living-standard comparisons are genuinely hard",
              "Proof that wages were identical everywhere",
              "Evidence that wages cannot be studied historically",
              "A finding that Asian wages were the world's highest in 1800",
            ],
            correctIndex: 0,
            explanation:
              "Comparing rice-based and wheat-based consumption baskets across continents is exactly as hard as it sounds, so the wage evidence is weighed, not worshipped.",
            sourceLessonSlug: "asia-great-divergence",
          },
          {
            prompt: "In the course's toolkit, what is the limit of state documents like the Han census?",
            options: [
              "They count only what states count: registered people, so a collapse in the registers is not automatically a collapse in the population",
              "They are always deliberate forgeries",
              "They cover only religious matters",
              "They cannot be dated",
            ],
            correctIndex: 0,
            explanation:
              "The An Lushan '36 million dead' error came from reading a census collapse as a body count. Every evidence type in the toolkit carries its own failure mode.",
            sourceLessonSlug: "asia-great-divergence",
          },
          {
            prompt: "Which evidence type does the course call 'artifacts that carry their own proof'?",
            options: [
              "Dated objects like the Diamond Sutra's 868 colophon, the Jikji of 1377, and the Belitung cargo",
              "Modern textbook summaries",
              "Court poetry like the Nagarakretagama",
              "GDP reconstructions",
            ],
            correctIndex: 0,
            explanation:
              "A colophon or a dated bowl needs no reconstruction; that is why the course anchors its biggest claims to such objects wherever it can.",
            sourceLessonSlug: "asia-great-divergence",
          },
          {
            prompt: "How should court poetry like the Nagarakretagama be classified in the toolkit?",
            options: [
              "As a source whose genre must be named: praise literature, evidence of horizon and prestige, not an administrative record of control",
              "As equivalent to a census",
              "As worthless fabrication",
              "As an eyewitness travel account",
            ],
            correctIndex: 0,
            explanation:
              "Knowing what kind of text you are reading is the audit's second question. Upgrading panegyric into administration was the Majapahit trap.",
            sourceLessonSlug: "asia-srivijaya-majapahit",
          },
          {
            prompt: "What does the course's final audit ask of any historical claim?",
            options: [
              "Who says it, in what kind of source, about which people, where, when, and whether anything independent converges",
              "Whether it appears in more than one textbook",
              "Whether it sounds plausible",
              "Whether it flatters the right side",
            ],
            correctIndex: 0,
            explanation:
              "And the standing instruction: run it hardest on the claims you most want to believe, in either direction.",
            sourceLessonSlug: "asia-great-divergence",
          },
          {
            prompt: "Which single sentence best states the course's central, hedged thesis?",
            options: [
              "On the standard reconstructions (Maddison, 2007, as revised), China and India together were roughly half of world output as late as 1820; the timing and causes of the reversal are contested (Pomeranz, 2000; Broadberry et al., 2018)",
              "Asia was always richer than everywhere else and always will be",
              "China was exactly 32.9 percent of world GDP in 1820, a measured fact",
              "The West has led the world economy since antiquity",
            ],
            correctIndex: 0,
            explanation:
              "Attribution, rounding, and named disagreement make the sentence stronger, not weaker: every part of it survives a hostile fact-check.",
            sourceLessonSlug: "asia-great-divergence",
          },
          {
            prompt: "Why does the course treat Srivijaya's four forgotten centuries as evidence rather than as absence?",
            options: [
              "Because what survives depends on materials, climate, and who does the remembering; forgetting testifies about survival, not about what mattered",
              "Because forgotten states never existed",
              "Because Chinese records are always wrong",
              "Because oral tradition is superior to writing",
            ],
            correctIndex: 0,
            explanation:
              "Wooden cities in wet climates leave thin records; Coedès reassembled the empire in 1918 from inscriptions and Chinese accounts. Silences are data about preservation.",
            sourceLessonSlug: "asia-great-divergence",
          },
          {
            prompt: "A friend says: 'Asia was rich until Europeans showed up in 1500 and ruined it.' Using this course, what is the precise correction?",
            options: [
              "European power in Asia was coastal enclaves for two centuries after 1510; territorial rule began at Plassey (1757); and Asia's own record includes conquest, hierarchy, and slavery, so neither the utopia nor the 1500 turning point survives the evidence",
              "Asia was actually poor throughout history",
              "Europeans never affected Asia at all",
              "The friend is right in every detail",
            ],
            correctIndex: 0,
            explanation:
              "The course's dates and honest record cut against both romantic and dismissive slogans at once: that is what precision is for.",
            sourceLessonSlug: "asia-conquest-before-europe",
          },
          {
            prompt: "A website claims: 'Song China had 30 percent of world GDP in 1100.' What does the course's method require before repeating this?",
            options: [
              "Attribution and hedging: identify whose reconstruction it is, treat it as an estimate with error bars, round rather than assert decimals, and check the Maddison Project's current revision",
              "Nothing; percentages are always safe to repeat",
              "Rejecting it because GDP did not exist in 1100",
              "Doubling it to correct for Western bias",
            ],
            correctIndex: 0,
            explanation:
              "Pre-modern GDP shares are reconstructions. Unattributed precision is the tell; the fix is a name, a hedge, and a range.",
            sourceLessonSlug: "asia-center-of-gravity",
          },
          {
            prompt: "What does the course say you should walk out with, above any single date?",
            options: [
              "The audit habit: name the civilization, period, and region; classify the source; attribute the numbers; and run the check hardest on claims you want to believe",
              "A ranked list of history's greatest empires",
              "The conviction that no historical claim can ever be trusted",
              "A complete chronology of every Asian dynasty",
            ],
            correctIndex: 0,
            explanation:
              "The map matters, but the method transfers: it works on every continent's history and it is the fastest way to detect nonsense about any of them.",
            sourceLessonSlug: "asia-great-divergence",
          },
        ],
      },
    },
  ],
};
