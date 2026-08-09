import type { AuthoredCourse } from "./authored-course";

// Here Be Dragons, course 2 of 5: Giants, Dragons, and the Bones They Came From.
//
// Plan: plans/58-here-be-dragons-series.md §4.2. Category: Culture & History. Grades 9-12.
// Connections: plans/future-courses/culture/01-connections-to-the-catalog.md §4.2.
//
// THE THESIS EVERY LESSON IS CHECKED AGAINST: people were usually reasoning well from what they
// had, and the interesting questions are what they had, who they would let speak, and what it took
// to change their minds, including ours. A lesson that only says "look how odd that was" is trivia
// and gets cut.
//
// NO CONDESCENSION, EVER, INCLUDING TOWARD THE RELIGIOUS. Cotton Mather reasoned carefully from
// sources he trusted, published in the Royal Society's channels, and was right about smallpox
// inoculation when the physicians of Boston were wrong. Lessons 6 and 7 are the load-bearing pair
// and the course is worthless the moment either of them winks.
//
// TWO CONTESTED CLAIMS ARE TAUGHT AS CONTESTED, ON PURPOSE (plans/58 §8):
//   • Lesson 4, Mayor's griffin/Protoceratops thesis. Witton & Hing (2024) is a detailed published
//     rebuttal. The lesson teaches the disagreement, not a verdict.
//   • Lesson 1, the dragon-bone-to-Zhoukoudian chain. The apothecary trade and Schlosser's 1903
//     description are documented; the tidy causal chain popular retellings draw is NOT, and the
//     lesson says so in the prose rather than hedging quietly.
// Lesson 5 is the writing lesson that turns "may have inspired" into the course's best tool. It is
// placed immediately after lesson 4 so the learner meets the hedge while the example is warm.
//
// Images are NOT authored yet. The `:::figure` directive and its guard ship separately
// (plans/58 §3), and the public-domain scans are operator task 243. Every lesson below stands on
// its own text, so the figures are an enhancement and never a dependency.

export const GIANTS_DRAGONS_AND_THE_BONES_COURSE: AuthoredCourse = {
  title: "Giants, Dragons, and the Bones They Came From",
  description:
    "For most of recorded history, people dug up bones far too large for any animal they knew and had to say something about them. They said giants, dragons, thunder horses, and the remains of a world before the Flood. This course takes those answers seriously as answers: what evidence was on the table, which premises made each conclusion reasonable, and what it actually took to change the verdict. It ends with a ten-foot stone man buried on a farm in New York, and with the harder question of what you would need to see to stop believing something you already want to be true.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════════
    // Section 1 · Bones before there was a word for them
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "dragon-bones-in-the-apothecary",
      title: "1 · A tooth in a Beijing apothecary",
      section: "Section 1 · Bones before there was a word for them",
      body: `Walk into a traditional Chinese pharmacy at almost any point in the last two thousand years and you could buy 龍骨, *long gu*, dragon bone. You could also buy 龍齒, *long chi*, dragon teeth. They were ground, sometimes calcined, and prescribed for a long list of complaints.

They are fossils. Mostly the bones and teeth of Pleistocene mammals: rhinoceros, horse, deer, elephant, hyena, and a great many others, weathering out of loess and cave deposits across northern China and dug up for sale.

## Start with what that means

This course is going to spend a lot of time on Europeans looking at large bones and guessing. Before any of that, notice that there was an established, commercial, geographically organised trade in fossil material running for centuries in China, with a name for the substance, a place in the pharmacopoeia, a supply chain, and people who knew which hillsides produced it.

Dragon bone appears in the Chinese materia medica tradition from early on, and Li Shizhen's *Bencao gangmu* of 1596 discusses it at length, including where it is found and how to tell good material from bad. That is not a superstition about dragons. That is a monograph entry with sourcing notes.

## The word "dragon" is doing less work than you think

It is tempting to read *long gu* as "these people thought dragons were real, so they ground up dragon skeletons." Slow down, in exactly the way lesson 1 of the previous course asked you to.

*Long* is a category name for a class of large, powerful, serpentine creature in Chinese cosmology, a category with an enormous cultural range. Applying it to very large bones of unknown origin is a naming decision, and naming decisions are about the categories you have available. When a Dutch farmer at Claverack found a five-pound tooth in 1705 he reached for "giant," because giants were in the category system he had. Neither is stupid. Both are somebody sorting an unknown object into the best available box, which is what you do too.

## The part of this story that is documented, and the part that is not

Here is where this course starts earning its keep, because this material is repeated constantly in a tidier form than the record supports.

**Documented.** Around the turn of the twentieth century a German physician, K. A. Haberer, assembled a large collection of fossil teeth and bones bought from Chinese drugstores and shipped it to Munich. Max Schlosser described the collection in 1903 in *Die fossilen Säugethiere Chinas*. Among the material was a tooth Schlosser could not place, apelike or possibly human, and he wrote that China was likely to yield important fossil primates. That is all in print and you can go and read it.

**Documented.** Zhoukoudian, southwest of Beijing, includes a hill locally called 龍骨山, Longgushan, Dragon Bone Hill. The name is local and predates the excavations. Johan Gunnar Andersson, a Swedish geologist working in China as a mining adviser, became interested in the fossil sites there, and systematic excavation from 1921 onward eventually produced the material named *Sinanthropus pekinensis* and now classified as *Homo erectus*.

**Not documented, or at least not the way it is usually told.** The clean chain, "a scientist bought a human fossil in a Chinese pharmacy and it led him straight to Peking Man," compresses roughly twenty years, several people, two countries and a great deal of ordinary geology into a single causal arrow. Schlosser's famous tooth was not a Peking Man tooth; it is generally taken to have been an ape's. Andersson was in China for mining, not on Schlosser's errand. The interest in Chinese fossils that Schlosser's monograph stimulated is real and traceable; a direct line from that specific tooth to that specific hill is a story, and a good one, and it should be labelled as one.

## Why open the course here

Two reasons.

First, because a course about what people did with bones should not begin with Europeans. The knowledge was there, organised, commercial and old, and the European story joins it late.

Second, because you have just watched this course do the thing it is going to ask you to do for eighteen lessons: separate what is on the record from what has accreted onto it, and say which is which out loud rather than smoothing the seam.

:::reveal What is long gu, and roughly how long has it been part of Chinese materia medica? ||| Fossil bone, mostly of Pleistocene mammals, ground for medicine. It is attested in the Chinese materia medica tradition for something on the order of two thousand years and is discussed at length in Li Shizhen's compendium of 1596.

:::reveal Which part of the dragon-bone to Peking Man story is documented, and which part is not? ||| Documented: Haberer's drugstore collection, Schlosser's 1903 description of an unplaceable apelike tooth, the local name Dragon Bone Hill, and the excavations from 1921. Not documented: a direct causal line from that particular tooth to that particular excavation.

## Sources
- Andersson, J. G. (1934). *Children of the yellow earth: Studies in prehistoric China*. Kegan Paul.
- Boaz, N. T., & Ciochon, R. L. (2004). *Dragon Bone Hill: An ice-age saga of Homo erectus*. Oxford University Press.
- Li, S. (1596). *Bencao gangmu* [Compendium of materia medica]. Nanjing.
- Schlosser, M. (1903). *Die fossilen Säugethiere Chinas nebst einer Odontographie der recenten Antilopen*. Königlich Bayerische Akademie der Wissenschaften.`,
    },
    {
      slug: "before-the-word-fossil",
      title: "2 · What a fossil looked like before the word existed",
      section: "Section 1 · Bones before there was a word for them",
      body: `The English word *fossil* comes from Latin *fossilis*, meaning dug up. That is the whole of the original meaning. When Georgius Agricola published *De natura fossilium* in 1546, his subject was everything you get out of the ground: ores, gems, earths, salts, and yes, curious stones shaped like shells and teeth.

There was no word that meant "the remains of a once-living organism preserved in rock," because that was not yet an agreed category. And a category you do not have is not a category you can casually reach for.

## The genuinely hard problem

Put yourself in front of the evidence with the knowledge available in 1550.

You have a stone in the shape of a scallop. It is found in solid rock, in a hillside, thirty miles from any sea and a thousand feet above it. It is made of stone all the way through.

Candidate explanations, all of which were seriously argued by careful people:

**It grew there.** The earth has a shaping power, a *vis plastica*, that produces forms; crystals demonstrably grow into regular shapes inside rock, so why not this one. This is not a lazy idea. It is an inference from the best analogy available.

**It is a game.** *Lusus naturae*, a joke or a sport of nature, forms produced for their own sake. Ornamental, and not required to mean anything.

**It got there in the Flood.** A single global inundation could have stranded sea creatures inland, and there is a widely trusted historical text that reports one.

**It is a dead animal turned to stone.** Which requires you to believe that solid rock was once soft, that the sea was once here, and that enough time has passed for all of that, and none of those was obvious.

Only one of those turned out to be right, and it was not the one that took the least explaining. It took the most.

## People who got there early, and how

**Xenophanes**, in Greece around 500 BCE, is reported by later writers to have argued from shells found inland that those places had once been under water. Note that we have that at second hand, through people quoting him, which is a limitation worth naming rather than hiding.

**Shen Kuo**, in China, wrote the *Mengxi bitan* around 1088. Encountering petrified bamboo in a landslip near Yan'an, in a dry region where bamboo does not grow, he reasoned that the climate there must once have been different. That is a conclusion drawn from a specimen, against expectation, roughly six hundred years before the European argument got settled.

**Nicolas Steno**, in 1667, dissected the head of a large shark at Florence and compared its teeth to the *glossopetrae*, tongue stones, that turned up in Maltese rock. They matched. He then had to explain how a solid object gets inside another solid object, which is what pushed him into the geological work he is now better known for.

**Robert Hooke**, in the same era, argued from microscopy and from petrified wood that these things were organic remains, and went further, suggesting that some kinds of creature may have been lost from the world entirely.

## The move to notice

Steno did not win by being cleverer. He won by producing a **comparison that could be checked**: here is the tooth, here is the shark, look at them together.

That is the shape of almost every resolution in this course. Not a better argument in the abstract, but a specimen placed next to another specimen in a way that let somebody else look and agree or disagree. Lesson 8 is Steno's move applied to an elephant.

## What to carry

When you catch yourself thinking "how could they not see it," check whether the thing you think is obvious depends on a category you were handed for free. Extinction, deep time, and stone that was once mud are all inherited furniture. Someone had to build them, against real resistance, using evidence anyone could examine.

:::reveal What did the word "fossil" originally mean, and why does that matter? ||| Anything dug out of the ground, including ores and minerals. It matters because there was no agreed category for the remains of a once-living thing, and you cannot casually reach for a category you do not have.

:::reveal Steno matched tongue stones to something. What, and why was the method the important part? ||| The teeth of a large shark he dissected at Florence in 1667. The method mattered because it was a comparison anyone else could go and check, rather than an argument that had to be won in the abstract.

## Sources
- Agricola, G. (1546). *De natura fossilium*. Froben.
- Hooke, R. (1705). Lectures and discourses of earthquakes and subterraneous eruptions. In R. Waller (Ed.), *The posthumous works of Robert Hooke*. Smith and Walford.
- Needham, J. (1959). *Science and civilisation in China: Vol. 3. Mathematics and the sciences of the heavens and the earth*. Cambridge University Press.
- Rudwick, M. J. S. (1985). *The meaning of fossils: Episodes in the history of palaeontology* (2nd ed.). University of Chicago Press.
- Steno, N. (1667). *Elementorum myologiae specimen, seu musculi descriptio geometrica; cui accedunt canis carchariae dissectum caput*. Stella.`,
      recallContent: [
        {
          prompt: "What is long gu, and what is it actually made of?",
          answer:
            "Dragon bone: fossil bone and teeth, mostly of Pleistocene mammals, dug from loess and cave deposits in northern China and sold ground as medicine.",
        },
        {
          prompt:
            "State the part of the dragon-bone story that popular retellings get wrong.",
          answer:
            "The tidy causal line from one apothecary tooth to the Zhoukoudian excavations. Haberer's collection, Schlosser's 1903 description and the local name Dragon Bone Hill are all documented, but the single arrow between them is a story rather than a record.",
        },
      ],
    },
    {
      slug: "the-cyclops-and-the-dwarf-elephant",
      title: "3 · The cyclops and the dwarf elephant",
      section: "Section 1 · Bones before there was a word for them",
      body: `Here is a claim you have probably met, presented as a delightful fact: the Greek cyclops was inspired by the skulls of dwarf elephants, which have a large opening in the middle of the forehead that a person unfamiliar with elephants would read as a single eye socket.

Both halves of the setup are true, and the join between them is the problem.

## The true half

Dwarf elephants really did live on Mediterranean islands, including Sicily, Malta, Cyprus and Crete, through the Pleistocene. Island populations of large mammals frequently shrink over generations, and some of these animals stood barely a metre at the shoulder. Their remains turn up in island cave deposits in quantity, and people have been digging them up for a very long time.

An elephant skull really does have a huge central opening. It is the nasal cavity, which houses the base of the trunk. The actual eye sockets sit lower and to the sides, and on a weathered skull they are much less conspicuous than the hole in the middle. If you have never seen a living elephant, a bare elephant skull is a genuinely strange object.

## The join

The suggestion that this is where the cyclops came from is usually credited to the Austrian palaeontologist Othenio Abel, writing in the early twentieth century. It has been repeated ever since, in museum labels, documentaries, textbooks and a great many articles.

What is missing from it is the connecting evidence. Specifically:

**No ancient source makes the link.** No Greek or Roman writer says, or implies, that these skulls prompted the story. The connection is entirely a modern reconstruction of what ancient people must have thought.

**The literary cyclops is not skull-shaped.** Polyphemus in the *Odyssey* is a herdsman. He keeps sheep, milks them, makes cheese, lives in a cave, has neighbours and a father. Hesiod's Cyclopes are smiths who forge Zeus's thunderbolt. These are characters in a social world, not an anatomical inference; the single eye is one feature among many.

**The direction of the argument cannot be tested.** If someone in Bronze Age Sicily did look at a skull and think "giant," that fact left no trace we can find. The hypothesis makes no prediction that would fail.

## What to do with a claim like this

Not dismiss it. It is not absurd, and there is no positive evidence against it either. Do three things instead.

**Say what is established and what is added.** The elephants, the skull morphology, and the deposits are established. The inspiration is added.

**Name the author of the addition.** Abel proposed it. It did not emerge from the ancient world; it emerged from a twentieth-century palaeontologist looking at a skull and having a good idea.

**Ask what would settle it.** In this case, roughly: an ancient text that mentions the bones, or an archaeological context that puts the skulls somewhere ritually significant with a datable association. Absent that, the honest position is that this is an attractive, unfalsified, unsupported suggestion.

That is a perfectly respectable thing to hold. It is not the same thing as a fact, and the whole discipline of this series lives in the gap between those two.

## Why this lesson is here

Because the next lesson is a much bigger version of exactly this, with a real published fight attached, and it will be easier to follow if you have already practised on a small one.

:::reveal What is the large central opening in an elephant skull, and why does it matter here? ||| It is the nasal cavity that houses the base of the trunk, not an eye socket. It matters because it is the observable fact the cyclops suggestion is built on, and it is genuinely conspicuous on a weathered skull.

:::reveal Name the three things this lesson does with an attractive but unsupported claim. ||| Separate what is established from what is added, name the person who added it, and state what evidence would settle the question.

## Sources
- Homer. (1996). *The Odyssey* (R. Fagles, Trans.). Viking. (Original work composed c. 8th century BCE)
- Mayor, A. (2000). *The first fossil hunters: Paleontology in Greek and Roman times*. Princeton University Press.
- Van der Geer, A., Lyras, G., de Vos, J., & Dermitzakis, M. (2010). *Evolution of island mammals: Adaptation and extinction of placental mammals on islands*. Wiley-Blackwell.`,
    },
    {
      slug: "the-griffin-argument",
      title: "4 · The griffin argument, held open",
      section: "Section 1 · Bones before there was a word for them",
      body: `This lesson does not have an answer at the end. It has a disagreement, and the disagreement is the content.

## The claim

Adrienne Mayor, a folklorist and historian of science, argued in a 1989 article and at length in *The First Fossil Hunters* (2000) that the griffin of Greek art and literature originated in fossil observation. Specifically: nomads and prospectors in the gold-bearing regions of Central Asia encountered the eroded skeletons of *Protoceratops*, a beaked, four-legged, roughly sheep-sized dinosaur that weathers out of the Gobi in large numbers, and that these encounters, passed westward along trade routes, became the griffin.

## Why it is a good argument, and it is

Take it seriously before you take it apart. It is built on real observations.

**The griffin is anatomically odd for a Greek monster.** Most Greek hybrids splice familiar animals in obvious ways. The griffin is a quadruped with a beak, which is an unusual combination, and it is often shown with a frill or crest at the back of the skull.

**The griffin has no divine paperwork.** Unlike most of the Greek bestiary it has no birth story, no parentage, no myth of its own. It is described as if it were a real animal in a distant place.

**The sources place it in the right general direction.** Herodotus, relaying Aristeas, puts gold-guarding griffins in the far north beyond the Scythians, and later writers such as Ctesias and Aelian place them in the East and connect them to gold.

**The fossils are real and abundant.** *Protoceratops* skeletons genuinely do erode out of Central Asian deposits in numbers, often articulated, and they genuinely do have a beak and a bony frill.

That is a serious argument. It explains an anomaly, it uses the sources, and it makes a claim about a real place.

## Why it is contested, and it is

In 2024 Mark Witton and Richard Hing published a detailed rebuttal in *Interdisciplinary Science Reviews*. Their case, briefly:

**The art does not look like the fossil.** Griffins in ancient art are built from big cats and birds of prey: feline musculature, long flexible tails, manes, raptor beaks and wings. They differ from *Protoceratops* in nearly every proportion, and the resemblance shrinks the closer you look at actual objects rather than at a summary.

**The geography does not track.** Griffin imagery has a long history in the Near East and around the eastern Mediterranean, with a distribution that does not radiate outward from Central Asian fossil country the way the hypothesis would predict.

**The gold connection does not hold.** The *Protoceratops* beds sit a long way from the gold deposits the griffin was supposed to guard, which removes one of the load-bearing coincidences.

**The chronology runs the wrong way.** Griffin-like creatures appear in the record earlier than the proposed transmission route can comfortably account for.

## What to do with a live disagreement

Not pick the side you like. Do this instead.

**Locate the actual point of contention.** It is not "did *Protoceratops* exist" or "did Greeks trade eastward." It is narrower: is fossil observation the best explanation for the specific features of the griffin as depicted. That is the sentence the two sides disagree about, and finding that sentence is most of the work.

**Ask what each side would accept as a loss.** Mayor's case would be badly damaged by a well-dated griffin image from a region and period the transmission route cannot reach. Witton and Hing's case would be damaged by an ancient text describing beaked quadruped bones in that region. Naming the losing condition for each side is the single most useful thing you can do with any dispute.

**Notice who is doing what.** This is a folklorist arguing from transmission and texts against palaeontologists arguing from morphology and distribution. That is not a scandal; it is what an interdisciplinary question looks like, and each side is strongest inside its own evidence.

**Do not confuse "rebutted" with "refuted."** A published rebuttal is a move in an argument, not a verdict. It is currently the more detailed case on the specific question of resemblance, and Mayor has responded to critics before. The honest present statement is: *the fossil origin of the griffin is disputed, and the most detailed recent published analysis argues against it.*

## The uncomfortable part

Mayor's work is the reason a great deal of valuable material about pre-scientific fossil knowledge got taken seriously at all, and lesson 11 of this course leans on her book on Indigenous fossil traditions. You are allowed to find an author indispensable in one place and unpersuasive in another. In fact you are required to, because the alternative is deciding what is true by deciding whom you like.

:::reveal State the narrow sentence Mayor and her critics actually disagree about. ||| Whether fossil observation, specifically of Protoceratops, is the best explanation for the particular features of the griffin as it is depicted and described. Not whether the fossils exist or whether trade routes existed.

:::reveal Give the strongest point on each side of the griffin dispute. ||| For: the griffin is a beaked quadruped with no birth myth, described as a real animal in the direction of abundant Protoceratops fossils. Against: griffin art is built from cats and raptors, its geographic and chronological distribution does not radiate from those fossil beds, and the fossils are far from the gold.

:::reveal Why is it not hypocritical to use Mayor's later book after questioning her griffin thesis? ||| Because arguments are assessed one at a time on their evidence. Deciding what is true by deciding which authors you trust wholesale is the failure mode this course exists to prevent.

## Sources
- Aelian. (1958). *On the characteristics of animals* (A. F. Scholfield, Trans.). Harvard University Press. (Original work composed c. 200 CE)
- Granger, W., & Gregory, W. K. (1923). Protoceratops andrewsi, a pre-ceratopsian dinosaur from Mongolia. *American Museum Novitates, 72*, 1-9.
- Herodotus. (1998). *The histories* (R. Waterfield, Trans.). Oxford University Press. (Original work composed c. 430 BCE)
- Mayor, A. (2000). *The first fossil hunters: Paleontology in Greek and Roman times*. Princeton University Press.
- Witton, M. P., & Hing, R. A. (2024). Did the horned dinosaur Protoceratops inspire the griffin? *Interdisciplinary Science Reviews*. https://doi.org/10.1177/03080188241255543`,
      recallContent: [
        {
          prompt:
            "Why does the cyclops and dwarf elephant story fail as an established fact, even though nothing in it is absurd?",
          answer:
            "No ancient source makes the link, the literary Cyclopes are social characters rather than anatomical inferences, and the hypothesis makes no prediction that could fail. The elephants and the skull are established; the inspiration is a modern addition.",
        },
        {
          prompt:
            "Who is credited with the cyclops suggestion, and roughly when?",
          answer:
            "The Austrian palaeontologist Othenio Abel, in the early twentieth century. It did not come down from antiquity.",
        },
      ],
    },
    {
      slug: "may-have-inspired",
      title: "5 · How they wrote it: what \"may have inspired\" is doing",
      section: "Section 1 · Bones before there was a word for them",
      body: `This is the first of this course's recurring writing lessons. It takes one four-word phrase and pulls it apart, because that phrase is load-bearing for an entire genre of popular science and history, and you have just met two examples of it.

## The sentence

> Fossil skeletons of *Protoceratops* may have inspired the legend of the griffin.

Read it as a claim and ask what it commits its author to.

**Almost nothing.** "May have" asserts possibility. The sentence is true if there is any chance at all that the thing happened, and it is very hard to establish that there is no chance at all of anything. A sentence that cannot lose is not carrying information about the world; it is carrying information about what the author finds plausible.

**Nobody is doing anything.** "Inspired the legend" has no person in it. Somebody, at some time, in some place, saw something and told someone. Every one of those blanks is where the evidence would have to be, and the phrasing lets all of them stay blank. The previous course called this the missing actor, and the last course in this series takes it apart properly.

**The direction is asserted for free.** "Inspired" says the fossil came first and caused the story. That is the entire claim under dispute, and the verb smuggles it in as though it were background.

## What happens next, which is the real problem

Hedges do not survive transmission. Watch one paragraph degrade across four genres, all describing the same underlying state of knowledge:

**The paper.** "The distribution of *Protoceratops* remains is consistent with, but does not establish, a role in the transmission of griffin imagery."

**The book for general readers.** "*Protoceratops* may have inspired the griffin."

**The museum label.** "The griffin was probably based on dinosaur fossils found by ancient nomads."

**The headline.** "The real animal behind the griffin."

At no step does anyone lie, and no single step is a big move. The scientist hedged honestly. The author simplified for a reader who does not want three clauses. The label writer had forty words and a font size. The subeditor needed the line to fit and to be read. Four reasonable acts, and the output is a false statement about the world.

That pipeline is the thing to learn. It is the same shape as the text-to-text-to-picture-to-fact pipeline in the previous course, running through modern institutions instead of medieval ones.

## Hedging honestly versus hedging to hide

They look identical and they are not the same act.

**An honest hedge marks a known gap.** It tells you where the evidence stops, and it usually comes with the shape of what would close the gap. "Consistent with" is honest when the author goes on to say what would make it more than consistent.

**A hiding hedge buys the reader's assent without the cost.** It states the exciting thing, then adds a modal so that the author cannot be held to it. The test is whether removing the hedge changes what the reader walks away believing. If the reader leaves believing the strong version either way, the hedge was decoration.

## How to write the honest version

Three moves, and they are all things you can do in your next essay.

**Name the actor or admit there isn't one.** Not "may have inspired" but "no ancient source records anyone connecting these bones to the griffin."

**Split the sentence in two.** One sentence for the evidence, one for the inference, so the reader can see the join. "*Protoceratops* skeletons are abundant in the region. Whether anyone drew the connection is not recorded."

**State the loss condition.** "This would be much stronger if any ancient text described such bones." A writer who tells you what would sink their own claim is telling you they have looked.

## The drill

Take this sentence: *Dwarf elephant skulls may have inspired the cyclops myth.*

Rewrite it so that a reader who reads only your version comes away believing exactly what the evidence supports, and no more. You will find you need at least two sentences, and that is the point: the hedge was compressing a gap that needs room to be visible.

:::reveal What does the phrase "may have inspired" commit its author to? ||| Almost nothing. It asserts bare possibility, which is nearly impossible to disprove, so it carries information about what the author finds plausible rather than about the world.

:::reveal How can you tell an honest hedge from one that is hiding? ||| Remove the hedge and ask whether the reader walks away believing anything different. If the reader believes the strong version either way, the hedge was decoration rather than a marked gap.

:::reveal Name the three moves for writing the honest version of a hedged claim. ||| Name the actor or admit there is not one, split evidence and inference into separate sentences, and state what would sink the claim.

## Sources
- Hyland, K. (1998). *Hedging in scientific research articles*. John Benjamins.
- Lakoff, G. (1973). Hedges: A study in meaning criteria and the logic of fuzzy concepts. *Journal of Philosophical Logic, 2*(4), 458-508.
- Witton, M. P., & Hing, R. A. (2024). Did the horned dinosaur Protoceratops inspire the griffin? *Interdisciplinary Science Reviews*. https://doi.org/10.1177/03080188241255543`,
      recallContent: [
        {
          prompt:
            "In the griffin dispute, what is the narrow sentence the two sides actually disagree about?",
          answer:
            "Whether fossil observation is the best explanation for the specific features of the griffin as depicted. Not whether the fossils or the trade routes existed.",
        },
        {
          prompt:
            "What is the single most useful thing you can do with any live disagreement?",
          answer:
            "Name what each side would accept as a loss: the specific evidence that would damage their case. It converts a clash of opinions into a question about the world.",
        },
      ],
    },
    {
      slug: "quiz-before-the-science",
      title: "Section 1 quiz · Bones before there was a word for them",
      section: "Section 1 · Bones before there was a word for them",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What is long gu, the substance sold in Chinese pharmacies as dragon bone?",
            options: [
              "Fossil bone and teeth of Pleistocene mammals, ground for medicine",
              "Carved bone amulets recovered from Shang royal burial chambers",
              "Ivory offcuts traded west along the caravan routes for use as ink",
              "Ox shoulder blades heated with a poker until the surface cracked",
            ],
            correctIndex: 0,
            explanation:
              "Rhinoceros, horse, deer, elephant and hyena material, mostly, weathering out of loess and cave deposits and dug for sale.",
            sourceLessonSlug: "dragon-bones-in-the-apothecary",
          },
          {
            prompt: "Which sixteenth-century Chinese work discusses dragon bone at length, including where it is found?",
            options: [
              "Li Shizhen's Bencao gangmu, the compendium of materia medica",
              "Song Yingxing's Tiangong kaiwu, the survey of craft technology",
              "Xu Xiake's travel diaries, the record of a lifetime of walking",
              "Shen Kuo's Mengxi bitan, the notebook of miscellaneous essays",
            ],
            correctIndex: 0,
            explanation:
              "Published in 1596. It is a monograph entry with sourcing notes, not a superstition about dragons.",
            sourceLessonSlug: "dragon-bones-in-the-apothecary",
          },
          {
            prompt: "Which part of the dragon-bone story does the lesson say is NOT documented?",
            options: [
              "A direct causal line from one apothecary tooth to the Zhoukoudian dig",
              "That Haberer bought a large fossil collection from Chinese drugstores",
              "That Schlosser described an apelike tooth he could not confidently place",
              "That the hill at Zhoukoudian was locally called Dragon Bone Hill already",
            ],
            correctIndex: 0,
            explanation:
              "The tidy chain compresses about twenty years, several people and two countries into one arrow. The other three are all in the record.",
            sourceLessonSlug: "dragon-bones-in-the-apothecary",
          },
          {
            prompt: "What did the Latin word from which we get \"fossil\" originally mean?",
            options: [
              "Dug up, covering ores, gems, earths and salts along with odd stones",
              "Turned to stone, covering only material replaced by mineral over time",
              "Placed by the Flood, covering anything found above the present sea level",
              "Shaped by nature, covering forms produced inside rock without a purpose",
            ],
            correctIndex: 0,
            explanation:
              "Agricola's De natura fossilium of 1546 is about everything you get out of the ground. The narrower meaning came much later.",
            sourceLessonSlug: "before-the-word-fossil",
          },
          {
            prompt: "The lesson lists several serious sixteenth-century explanations for a stone shell found inland. Which one turned out to be right?",
            options: [
              "It is a dead animal turned to stone, which was the costliest to believe",
              "It grew in place by a shaping power in the earth, as crystals visibly do",
              "It is a sport of nature, a form produced for its own sake and no reason",
              "It was carried inland and stranded by a single global inundation event",
            ],
            correctIndex: 0,
            explanation:
              "It required believing that rock was once soft, that the sea was once there, and that enormous time had passed. It explained the most and cost the most.",
            sourceLessonSlug: "before-the-word-fossil",
          },
          {
            prompt: "What did Nicolas Steno compare the tongue stones of Maltese rock to in 1667?",
            options: [
              "The teeth in the head of a large shark he had dissected at Florence",
              "The scales of a sturgeon he had obtained from the fishmarkets of Pisa",
              "The claws of a crab preserved in the collection of the Medici family",
              "The spines of a sea urchin dredged from the seabed near Livorno",
            ],
            correctIndex: 0,
            explanation:
              "The important part is the method: a comparison someone else could go and check, rather than an argument to be won in the abstract.",
            sourceLessonSlug: "before-the-word-fossil",
          },
          {
            prompt: "Around 1088, Shen Kuo found petrified bamboo in a dry region of China. What did he conclude?",
            options: [
              "That the climate of the place must once have been different from now",
              "That the bamboo had been carried there and buried by a great flood",
              "That the stone had grown into the shape of bamboo without ever living",
              "That the specimen had been planted there deliberately as an offering",
            ],
            correctIndex: 0,
            explanation:
              "A conclusion drawn from a specimen against expectation, roughly six hundred years before the European argument was settled.",
            sourceLessonSlug: "before-the-word-fossil",
          },
          {
            prompt: "What is the large central opening in an elephant skull that the cyclops story depends on?",
            options: [
              "The nasal cavity, which houses the muscular base of the animal's trunk",
              "The eye socket, which faces forward in elephants unlike in most mammals",
              "The ear canal, which is unusually wide in the dwarfed island populations",
              "The brain case, which is exposed when the frontal bones weather away",
            ],
            correctIndex: 0,
            explanation:
              "The real eye sockets sit lower and to the sides and are far less conspicuous on a weathered skull.",
            sourceLessonSlug: "the-cyclops-and-the-dwarf-elephant",
          },
          {
            prompt: "Why does the lesson call the cyclops and dwarf elephant claim unsupported rather than false?",
            options: [
              "No ancient source makes the link and no evidence rules the link out",
              "The dwarf elephants have been shown to postdate the Homeric poems",
              "The skulls have never been recovered from any Greek island deposit",
              "Ancient writers describe the skulls and explicitly reject the reading",
            ],
            correctIndex: 0,
            explanation:
              "Attractive, unfalsified, unsupported. That is a respectable thing to hold, and it is not the same as a fact.",
            sourceLessonSlug: "the-cyclops-and-the-dwarf-elephant",
          },
          {
            prompt: "Which observation is the strongest point IN FAVOUR of the fossil origin of the griffin?",
            options: [
              "It is a beaked quadruped with no birth story, described as a real animal",
              "It is depicted with the mane and long flexible tail of a hunting cat",
              "It appears in Near Eastern art earlier than the trade routes were open",
              "It is always shown guarding gold in the workshops of the smith gods",
            ],
            correctIndex: 0,
            explanation:
              "Most Greek hybrids splice familiar animals and come with parentage. The griffin does neither, which is a real anomaly to explain.",
            sourceLessonSlug: "the-griffin-argument",
          },
          {
            prompt: "Which finding do Witton and Hing offer AGAINST the fossil origin of the griffin?",
            options: [
              "The fossil beds sit a long way from the gold the griffin was said to guard",
              "The fossil beds have produced no articulated skeletons of any kind at all",
              "The Greek sources place the griffin in the west rather than to the east",
              "The dinosaur in question was never described from Central Asian deposits",
            ],
            correctIndex: 0,
            explanation:
              "Their case also covers the art being built from cats and raptors, and a distribution that does not radiate from those beds.",
            sourceLessonSlug: "the-griffin-argument",
          },
          {
            prompt: "What does the phrase \"may have inspired\" commit the author who writes it to?",
            options: [
              "Almost nothing, because bare possibility is nearly impossible to disprove",
              "A dated claim about transmission that any later source could contradict",
              "A named actor whose testimony the reader can then go and check directly",
              "A physical mechanism that the author must be able to demonstrate works",
            ],
            correctIndex: 0,
            explanation:
              "A sentence that cannot lose carries information about the author's sense of plausibility, not about the world.",
            sourceLessonSlug: "may-have-inspired",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // Section 2 · Reasoning well from the premises you have
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "the-claverack-giant",
      title: "6 · The Claverack tooth, and a letter to the Royal Society",
      section: "Section 2 · Reasoning well from the premises you have",
      body: `In 1705, on the east bank of the Hudson River at Claverack in the colony of New York, a large tooth came out of the ground. Accounts of the time put its weight at close to five pounds. It passed through a few hands locally, reportedly sold at one point for a small measure of rum, and reached Albany.

There it came to the attention of Edward Hyde, Viscount Cornbury, the colonial governor. Cornbury sent it to London, labelled as the tooth of a giant.

## Why a governor wrote "giant" on a box

Not because he was foolish. Because it was the best available identification, and because a widely trusted historical source said giants had existed.

Genesis 6:4 states that there were giants in the earth in those days. For an educated English or colonial reader in 1705, scripture was not a separate compartment labelled faith. It was, among other things, the oldest and most complete historical record of the early world available in Europe, corroborated in places by classical authors, and treated as evidence in the ordinary way. If your best historical source reports very large humans before the Flood, and a tooth turns up that is far too large for any human you have seen, you have a hypothesis with independent textual support.

## Cotton Mather takes it up

Cotton Mather, the Boston minister, wrote about the Claverack remains in a series of letters to the secretary of the Royal Society of London in the early 1710s, the correspondence usually known as his *Curiosa Americana*. He treated the find as important, argued that it supported the historical accuracy of the Mosaic account, and presented it to the leading scientific body of the English-speaking world for its consideration.

He was elected a Fellow of the Royal Society in 1713.

## Three things to get straight before the next lesson

**This was a scientific communication.** Not a sermon. Mather wrote to a scientific society, in the channel the society used, about a specimen, with measurements and provenance, expecting to be assessed by other people who would examine the evidence. That is what participating in the science of 1712 looked like.

**The identification was wrong.** The Claverack material, and the much larger quantity found later at other sites, is mastodon: *Mammut americanum*, an extinct proboscidean. There were no antediluvian giants at Claverack.

**Being wrong here was not a failure of reasoning.** That is the entire subject of the next lesson, and it is the reason this course exists rather than a listicle about funny old beliefs.

## The instinct to resist

There is a version of this story that is told with a smirk: the Puritan minister who thought a mastodon tooth was a giant's. That version is cheap, it is historically illiterate, and it makes you worse at thinking, because it lets you file the episode under "religion versus science" and stop.

The people involved were doing something recognisable: an anomalous object turned up, they described it, they moved it into a network of correspondents who could assess it, and they proposed an identification consistent with their best sources. Every step of that is what you would want them to do. The conclusion was wrong because one of the premises was wrong, and finding out which premise was wrong took another ninety years and the invention of an entire science.

:::reveal What did Lord Cornbury write on the box when he shipped the Claverack tooth to London? ||| That it was the tooth of a giant, following the statement in Genesis that there were giants in the earth in the days before the Flood.

:::reveal In what channel, and to whom, did Cotton Mather report the Claverack find? ||| In letters to the secretary of the Royal Society of London, the correspondence known as his Curiosa Americana. He was elected a Fellow of the Society in 1713.

:::reveal What is the Claverack material actually from? ||| An American mastodon, Mammut americanum, an extinct proboscidean. The identification as a giant was wrong, but it was not carelessly arrived at.

## Sources
- Morris, A. (2013). Geomythology on the colonial frontier: Edward Taylor, Cotton Mather, and the Claverack giant. *The William and Mary Quarterly, 70*(4), 701-724.
- Semonin, P. (2000). *American monster: How the nation's first prehistoric creature became a symbol of national identity*. New York University Press.`,
      recallContent: [
        {
          prompt: "Why does an honest hedge need at least two sentences to replace it?",
          answer:
            "Because the hedge was compressing a gap. One sentence states the evidence, a second states the inference, and the join between them becomes visible to the reader.",
        },
        {
          prompt:
            "Trace how a hedged claim degrades from a paper to a headline, and say who lied.",
          answer:
            "Paper says consistent with, book says may have inspired, label says probably based on, headline says the real animal behind it. Nobody lied. Four reasonable simplifications produced a false statement.",
        },
      ],
    },
    {
      slug: "mathers-actual-argument",
      title: "7 · Reasoning well from the wrong premises",
      section: "Section 2 · Reasoning well from the premises you have",
      body: `This is the lesson the first half of the course was built to reach. Read it slowly, and read it charitably, because the charity is the method rather than the manners.

## Reconstruct the argument

Set out what Mather and his contemporaries actually had to work with, as premises.

**Premise one: scripture is a reliable historical source.** Widely held, by educated people, for good reasons available at the time. It is old, it is detailed, it is internally cross-referenced, and it agrees with classical sources on a range of points. Nobody in 1712 had a stratigraphic record to check it against.

**Premise two: the earth is young.** Ussher's chronology, published in 1650, placed the creation in 4004 BCE using genealogies and astronomical retro-calculation. It was careful work by the standards of its method. Six thousand years is not enough time for a lost fauna, so any large bone must belong to something that lived alongside recorded history.

**Premise three: species do not go extinct.** This one is easy to miss and it is the most important. A well-ordered creation would not lose its parts. This was not a fringe view; it was the default, and Jefferson still held it eighty years later, as lesson 9 shows.

**Observation: a tooth far too large for any known human, from ground where no elephant lives.**

Now run it. If the earth is young, if nothing has gone extinct, if scripture is historical, and if scripture reports giants, then a huge tooth found in the ground is very plausibly a giant's tooth. The conclusion follows from the premises. That is what valid reasoning looks like.

**The conclusion was false because premise three was false.** Not because anyone was careless, credulous, or ruled by faith over evidence.

## What it actually took to change the answer

Three things, none of which was available in 1712, and all of which had to be built.

**Comparative anatomy at scale.** Georges Cuvier, working in Paris from the 1790s, compared the fossil elephants of Siberia and the Ohio with living Indian and African elephants and showed they were distinct species that no longer exist anywhere. That required collections, correspondence, and a technique for reading a species off a bone.

**Extinction as an accepted fact.** Cuvier's demonstration is what made extinction a normal part of the natural order rather than an embarrassment. Once species can be lost, a giant tooth no longer needs to belong to something still living or to a human.

**Deep time.** The sequence of strata, which the next course in this series is about, gave the earth enough duration to hold a history longer than the human one.

Every one of those is an institution as much as an idea: a museum, a journal, a comparative collection, a network. That is what a change of mind at civilisational scale actually costs.

## The part that should stop you

Mather is also the reason that a great many Bostonians survived the smallpox epidemic of 1721.

He had read, in the Royal Society's *Philosophical Transactions*, accounts of inoculation practised in the Ottoman world. He had also been told about the practice, in detail, by Onesimus, a West African man he enslaved, who described having been inoculated in Africa. Mather advocated inoculation publicly. The physicians of Boston were, with one exception, against it. Zabdiel Boylston carried it out, and the mortality among those inoculated was dramatically lower than among the uninoculated population.

Sit with the arrangement of that. A minister accepted West African medical testimony as evidence, against the near-unanimous view of the credentialled physicians of his city, and was right. He also held that man in slavery, which is not a footnote and does not cancel out, and the two facts belong in the same paragraph because they were true of the same person at the same time.

## The thesis, stated plainly

**People were usually reasoning well from what they had. The interesting questions are what they had, who they would let speak, and what it took to change their minds.**

Mather had scripture, Ussher, a fixed creation, and the *Philosophical Transactions*. He would let an enslaved African man speak on medicine when the physicians of Boston would not. What changed the giants question was not better character; it was comparative anatomy, extinction, and deep time, none of which he could have had.

## And the turn onto you

You are also reasoning from premises you did not choose and mostly cannot see. Some of them are wrong. You will not find out which by being smarter than the people in this course, because they were not being stupid.

The only method that has ever worked is the one they used and that we inherited from them: describe the object precisely, put it where other people can examine it, say which premise your conclusion depends on, and name what would change your mind.

:::reveal Which of Mather's premises was actually false? ||| That species do not go extinct. It was the default view of the age, and Jefferson still held it eighty years later. The reasoning from the premises was sound.

:::reveal Name the three developments it took to change the answer about giant bones. ||| Comparative anatomy at scale (Cuvier), extinction accepted as a normal fact of nature, and deep time. Each is an institution as much as an idea.

:::reveal What did Mather do in 1721, and why does it belong in this lesson? ||| He advocated smallpox inoculation, on the strength of Royal Society reports and the testimony of Onesimus, a West African man he enslaved, against the near-unanimous view of Boston's physicians. He was right. It belongs here because it shows a careful reasoner deciding whom to let speak.

## Sources
- Herbert, E. W. (1975). Smallpox inoculation in Africa. *The Journal of African History, 16*(4), 539-559.
- Mather, C. (1722). *An account of the method and success of inoculating the small-pox, in Boston in New-England*. Peele.
- Rudwick, M. J. S. (1997). *Georges Cuvier, fossil bones, and geological catastrophes: New translations and interpretations of the primary texts*. University of Chicago Press.
- Ussher, J. (1650). *Annales veteris testamenti, a prima mundi origine deducti*. Flesher.
- Winslow, O. E. (1974). *A destroying angel: The conquest of smallpox in colonial Boston*. Houghton Mifflin.`,
      recallContent: [
        {
          prompt: "Why was writing \"tooth of a giant\" on the Claverack box a reasonable act in 1705?",
          answer:
            "Because the best available historical source, treated as evidence in the ordinary way, reported very large humans before the Flood, and the tooth was far too large for any human anyone had seen.",
        },
        {
          prompt:
            "What kind of document were Mather's Curiosa Americana letters, and why does that matter?",
          answer:
            "Scientific communications to the secretary of the Royal Society, with provenance and measurements, submitted for assessment by others. It matters because it makes the episode a piece of science rather than a piece of preaching.",
        },
      ],
    },
    {
      slug: "the-incognitum",
      title: "8 · The incognitum: an animal nobody could place",
      section: "Section 2 · Reasoning well from the premises you have",
      body: `In 1739 a French military expedition under Charles Le Moyne, Baron de Longueuil, moving down the Ohio, collected bones from a salt spring on the river's south side, in what is now Kentucky. The place is called Big Bone Lick, and it is a marsh around mineral springs where animals came for salt and where a great many of them died.

The material went to Paris, into the royal cabinet. That single shipment set off a fifty-year argument.

## The problem, precisely

The bones were contradictory, and that is what made them interesting.

**The limb bones and the tusks looked like an elephant's.** Massive, curved ivory tusks. Leg bones of the right general architecture and scale.

**The molars did not.** An elephant's molar is a slab of compressed enamel plates that works like a rasp, for grinding vegetation. These teeth were covered in large conical cusps, arranged in pairs. They looked like the teeth of something that ate a very different diet.

You have one animal that appears to be two things at once. Everything after this is people trying to resolve that.

## The candidate solutions, all reasonable

**Two animals mixed together.** Louis-Jean-Marie Daubenton, working with Buffon, proposed that the tusks and limb bones were elephant and the cusped teeth belonged to a hippopotamus, washed together at one site. Perfectly sound reasoning from comparative anatomy, and it accounts for the contradiction without needing anything new to exist.

**A northern variety of elephant.** Elephants live in hot countries. Bones like these were also turning up in Siberia. Perhaps there is a cold-climate elephant, or perhaps the climate changed. Benjamin Franklin, looking at material from the same lick, made exactly that observation about tusks and teeth and speculated about climate.

**A distinct animal, still out there.** In 1768 the anatomist William Hunter published in the *Philosophical Transactions* on bones from the Ohio. He argued the teeth ruled out an elephant, and that this was a separate species, which he took to be carnivorous. This is where the name settles: the *American incognitum*, the unknown one.

Hunter's carnivore reading is worth noting for what it shows. Big pointed cusps read as a predator's teeth if your comparative set is mostly carnivores and elephants. It was an inference from anatomy, and it was wrong, and it was not silly.

## Why nobody could just say "extinct"

Because that premise was not yet available, as lesson 7 set out. If species do not disappear, then an animal whose bones you are holding is an animal that is alive somewhere you have not looked, and North America in 1768 contained a great deal of somewhere you had not looked. The expectation that the incognitum was still wandering the interior was not fantasy. It was the strict consequence of a premise almost everybody held.

## How it was settled

By Cuvier, in Paris, in the decade around 1800, using the method lesson 2 identified: put the specimens side by side where anyone can check.

He compared Indian and African elephant skulls and teeth, the Siberian mammoth, and the Ohio animal, and showed that they were three distinct species, and that two of them are not to be found anywhere on earth. He later gave the Ohio animal the name mastodon, from the nipple-like form of the cusps on those puzzling molars.

That is when extinction stops being a heresy and becomes a fact, and once it is a fact, every other question in this course changes shape.

:::reveal What was contradictory about the Big Bone Lick material? ||| The tusks and limb bones looked like an elephant's, but the molars carried large conical cusps rather than the compressed enamel plates of an elephant's grinding tooth.

:::reveal Why did Daubenton propose two animals rather than one unknown one? ||| Because two known animals washed together at one site explains the contradiction without requiring anything new to exist. It is sound comparative reasoning, and it was wrong.

:::reveal Why could nobody simply conclude that the incognitum was extinct? ||| Because the near-universal premise was that species do not disappear. On that premise the animal must still be alive somewhere unexplored, and North America contained a great deal of unexplored somewhere.

## Sources
- Hunter, W. (1768). Observations on the bones, commonly supposed to be elephants bones, which have been found near the river Ohio in America. *Philosophical Transactions of the Royal Society of London, 58*, 34-45.
- Rudwick, M. J. S. (1997). *Georges Cuvier, fossil bones, and geological catastrophes: New translations and interpretations of the primary texts*. University of Chicago Press.
- Semonin, P. (2000). *American monster: How the nation's first prehistoric creature became a symbol of national identity*. New York University Press.`,
      recallContent: [
        {
          prompt: "State the thesis of this course in one sentence.",
          answer:
            "People were usually reasoning well from what they had, and the interesting questions are what they had, who they would let speak, and what it took to change their minds.",
        },
        {
          prompt:
            "What does the smallpox episode add to the picture of Mather as a reasoner?",
          answer:
            "That he weighed evidence on its merits and accepted West African medical testimony against the near-unanimous view of Boston's physicians, and was right. He also enslaved the man who gave it, and both facts stand together.",
        },
      ],
    },
    {
      slug: "jefferson-and-the-megalonyx",
      title: "9 · Jefferson, the Megalonyx, and a country that wanted big animals",
      section: "Section 2 · Reasoning well from the premises you have",
      body: `In 1796 Thomas Jefferson received a set of bones dug from a saltpetre cave in the western part of Virginia, in country that is now West Virginia. Among them were claws, and the claws were enormous.

He measured, compared, and reasoned as follows: the proportions suggest a clawed quadruped; the nearest familiar animal of that build is the lion; scaled to these claws the animal would be roughly three times the size of a lion. He called it the Great Claw, *Megalonyx*.

He read his memoir to the American Philosophical Society in Philadelphia in March 1797, in the same days he was inaugurated as Vice President of the United States, and it was published in the Society's *Transactions* in 1799.

## The postscript is the lesson

Before publication, Jefferson saw a magazine account of a fossil skeleton described from South America by Cuvier: *Megatherium*, a giant ground sloth. The build matched his bones better than a lion did.

He added a postscript. He did not withdraw the paper, and he did not quietly revise the argument to make himself look prescient. He appended a note saying that the animal may well be of the sloth kind rather than the clawed carnivore he had described.

In the same volume, Caspar Wistar published a more accurate anatomical treatment of the same bones, reading them as sloth-like. In 1822 the animal was formally named *Megalonyx jeffersonii*, which keeps Jefferson's name on the animal he misidentified and then corrected himself about, and that is a fair outcome.

## Why he wanted it to be a lion

Because of premise three again, and because of national politics, which in this period are the same conversation.

Jefferson held the standard view that nothing goes extinct. In the *Notes on the State of Virginia* he wrote: "Such is the economy of nature, that no instance can be produced of her having permitted any one race of her animals to become extinct; of her having formed any link in her great work so weak as to be broken." Asked why he listed the mammoth as though it still existed, he answered by asking why he should omit it as though it did not.

If nothing goes extinct, then a lion-like animal three times the size of a lion is currently alive somewhere in the western interior. Jefferson's instructions to Meriwether Lewis in 1803 asked for information about the animals of the country, including the remains or accounts of any that might be rare or extinct. He was not sending an expedition to hunt monsters. He was, however, keeping the question genuinely open, because on his premises it was open.

## The uncomfortable second reason

A very large American animal was useful to him. The next lesson is about why.

## What to take from Jefferson here

Two things that sit awkwardly together, which is why they are worth holding.

**He updated in public, in print, at cost.** A sitting Vice President published a paper and attached a note saying his central identification was probably wrong. That is the behaviour the whole enterprise runs on, and it is rarer than it should be.

**He was not a neutral party.** He wanted the answer to come out a particular way, for reasons that had nothing to do with the bones. Both are true, and the second does not cancel the first. What matters is that the evidence reached him in a form he could not argue with, and that he had built a habit of saying so.

:::reveal What did Jefferson initially conclude the Megalonyx bones came from? ||| A clawed quadruped of the lion kind, roughly three times the size of a lion, reasoning from the proportions of the claws against the nearest familiar animal of that build.

:::reveal What did Jefferson do when he learned of Cuvier's Megatherium before publication? ||| He added a postscript to his own paper saying the animal may well be of the sloth kind rather than the clawed carnivore he had described. He corrected himself in print rather than quietly.

:::reveal Why did Jefferson expect a giant clawed animal to be alive somewhere? ||| Because he held that nature permits no species to become extinct. On that premise an animal whose bones you hold must still be living somewhere unexplored.

## Sources
- Jefferson, T. (1785). *Notes on the state of Virginia*. Privately printed.
- Jefferson, T. (1799). A memoir on the discovery of certain bones of a quadruped of the clawed kind in the western parts of Virginia. *Transactions of the American Philosophical Society, 4*, 246-260.
- Semonin, P. (2000). *American monster: How the nation's first prehistoric creature became a symbol of national identity*. New York University Press.
- Wistar, C. (1799). A description of the bones deposited by the President in the Museum of the Society. *Transactions of the American Philosophical Society, 4*, 526-531.`,
    },
    {
      slug: "buffon-and-the-moose",
      title: "10 · Buffon's degeneracy thesis, and the moose shipped to Paris",
      section: "Section 2 · Reasoning well from the premises you have",
      body: `Georges-Louis Leclerc, Comte de Buffon, was the most widely read naturalist in Europe. In the *Histoire naturelle*, from 1761 onward, he advanced a claim about the New World that shaped a generation of argument.

## The claim

American animals, he held, are smaller and feebler than their Old World counterparts. There are fewer large species. European species transplanted to America decline over generations. The cause is the continent's climate: cold, wet, recently emerged from water, its air heavy with the exhalations of undrained forest and swamp.

Cornelius de Pauw extended it to people, arguing in the late 1760s that Indigenous Americans and, in time, European colonists were diminished by the same environment.

## Take the argument seriously first

It was not a slur dressed up as science, at least not at the start. Buffon had a genuine research programme behind it: the idea that environment shapes organisms, that a species is a thing that can vary with its conditions, and that a continent has a natural history of its own. Those are productive ideas, and the last of them survives.

He also had data of a kind: specimen weights and measurements from collections, and reports from correspondents. His American sample was thin, drawn heavily from a small number of animals that had actually crossed the Atlantic, but a thin sample is a defect in the evidence rather than a defect in the reasoning.

And note what makes the thesis feel scientific, which is the same thing that makes it hard to dislodge: it explains a lot with one mechanism, and it accounts in advance for any contrary case as a local exception.

## Why an American statesman took it personally

Because de Pauw's extension made it a claim about the future of a country, and because a nation arguing for its own legitimacy in European drawing rooms could not afford to be the continent where things get smaller.

Jefferson's *Notes on the State of Virginia*, published in 1785, answers Buffon directly, with tables comparing the weights of European and American animals side by side. That is the correct move: not indignation, a table.

## The moose

Jefferson, serving as minister to France, wanted a specimen. He wrote to correspondents in New England; John Sullivan of New Hampshire took up the job, and the getting of it was an ordeal involving a winter hunt, a considerable expense, and a carcass that had to be hauled some distance through snow.

The remains reached Paris in the autumn of 1787. Jefferson presented them to Buffon.

By Jefferson's own later account, the specimen made its point, and Buffon acknowledged it. That is worth flagging as what it is: **Jefferson's recollection of a private encounter, reported by an interested party.** Buffon died in 1788 and did not publish a retraction. The moose is a wonderful story, and the part of it we have is one side's memory of a conversation.

## The two lessons, and they pull against each other

**A specimen beats a table, and a table beats an argument.** Jefferson's tables were better evidence than Buffon's impressions, and the animal in the room was better than the tables. The escalation runs toward things the other person can put their hands on.

**Nobody in this story was disinterested.** Buffon was defending a system. Jefferson was defending a country. Both produced real evidence anyway, and the evidence outlasted both motives. Interest is not the same as dishonesty, and a field where nobody wanted anything would produce very little.

## The connection worth carrying

Notice what happened to the bones in this section. A giant tooth confirmed scripture for Mather. An unplaceable animal became a national asset for Jefferson. The same class of object, doing different work, because different people needed different things from it.

That is not a scandal about the past. It is the ordinary condition of evidence, and the reason a course like this asks who is holding the bone.

:::reveal What did Buffon claim about American animals, and what mechanism did he give? ||| That they are smaller and feebler than Old World counterparts and that transplanted species decline, caused by a cold, wet, recently emerged continent with heavy air from undrained swamp and forest.

:::reveal How did Jefferson answer Buffon in the Notes on the State of Virginia? ||| With tables comparing the weights of European and American animals side by side. Not indignation, evidence arranged so a reader could check it.

:::reveal What is the honest status of the story that the moose convinced Buffon? ||| It rests on Jefferson's own later recollection of a private encounter, reported by an interested party. Buffon died in 1788 without publishing a retraction.

## Sources
- Buffon, G. L. L. (1761). *Histoire naturelle, générale et particulière* (Vol. 9). Imprimerie Royale.
- Dugatkin, L. A. (2009). *Mr. Jefferson and the giant moose: Natural history in early America*. University of Chicago Press.
- Gerbi, A. (1973). *The dispute of the New World: The history of a polemic, 1750-1900* (J. Moyle, Trans.). University of Pittsburgh Press.
- Jefferson, T. (1785). *Notes on the state of Virginia*. Privately printed.`,
      recallContent: [
        {
          prompt:
            "What did Jefferson do to his own Megalonyx paper before it was published, and why does it matter?",
          answer:
            "He added a postscript saying the animal was probably of the sloth kind after seeing an account of Cuvier's Megatherium. It matters because updating in public, in print, at cost, is the behaviour the whole enterprise runs on.",
        },
        {
          prompt:
            "Quote the substance of Jefferson's position on extinction from the Notes on the State of Virginia.",
          answer:
            "That the economy of nature permits no race of animals to become extinct, and forms no link in her great work so weak as to be broken.",
        },
      ],
    },
    {
      slug: "quiz-reasoning-from-premises",
      title: "Section 2 quiz · Reasoning well from the premises you have",
      section: "Section 2 · Reasoning well from the premises you have",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Where was the 1705 tooth found that Lord Cornbury shipped to London labelled as a giant's?",
            options: [
              "At Claverack, on the east bank of the Hudson River in New York",
              "At Big Bone Lick, on the south side of the Ohio River in Kentucky",
              "At Lyme Regis, in the crumbling cliffs of the Dorset coast in England",
              "At Fort Dodge, in the gypsum beds of the upper Des Moines valley",
            ],
            correctIndex: 0,
            explanation:
              "Accounts of the time put its weight near five pounds. It reached Albany, and the governor sent it on to England.",
            sourceLessonSlug: "the-claverack-giant",
          },
          {
            prompt: "In what channel did Cotton Mather report the Claverack find?",
            options: [
              "Letters to the secretary of the Royal Society of London",
              "A pamphlet printed for sale to congregations in Boston",
              "A sermon later collected in his history of New England",
              "A petition to the colonial assembly of Massachusetts Bay",
            ],
            correctIndex: 0,
            explanation:
              "The correspondence known as his Curiosa Americana. He was elected a Fellow of the Society in 1713.",
            sourceLessonSlug: "the-claverack-giant",
          },
          {
            prompt: "What is the Claverack material actually from?",
            options: [
              "An American mastodon, an extinct proboscidean of the genus Mammut",
              "A woolly mammoth, whose Siberian relatives were described at the time",
              "A giant ground sloth of the kind Cuvier described from South America",
              "A brontothere of the sort collected later in the Dakota badlands",
            ],
            correctIndex: 0,
            explanation:
              "There were no antediluvian giants at Claverack. The identification was wrong; it was not carelessly arrived at.",
            sourceLessonSlug: "the-claverack-giant",
          },
          {
            prompt: "Which of Mather's premises was the false one that made his conclusion wrong?",
            options: [
              "That species never disappear, so nothing found can be lost from the world",
              "That very large teeth belong to animals of proportionally large body size",
              "That the ground at Claverack had never been disturbed since it was laid",
              "That written testimony from a distant witness can count as real evidence",
            ],
            correctIndex: 0,
            explanation:
              "It was the default view of the era, not a fringe one. Jefferson still held it eighty years later.",
            sourceLessonSlug: "mathers-actual-argument",
          },
          {
            prompt: "Which set of developments finally changed the answer about giant bones?",
            options: [
              "Comparative anatomy at scale, accepted extinction, and deep time",
              "Better excavation tools, private collecting, and cheaper engraving",
              "Improved microscopes, chemical analysis, and museum ticket revenue",
              "Longer voyages, colonial mapping, and the exchange of live animals",
            ],
            correctIndex: 0,
            explanation:
              "Each of those is an institution as much as an idea: a museum, a journal, a comparative collection, a network.",
            sourceLessonSlug: "mathers-actual-argument",
          },
          {
            prompt: "What did Cotton Mather advocate in the Boston epidemic of 1721, and on whose testimony in part?",
            options: [
              "Smallpox inoculation, partly on the testimony of Onesimus, whom he enslaved",
              "Strict maritime quarantine, on the advice of the physicians of the town",
              "Prayer and public fasting, against the medical opinion of the colony",
              "Isolation of the sick in a hospital built for the purpose on an island",
            ],
            correctIndex: 0,
            explanation:
              "He also drew on Royal Society reports of the practice in the Ottoman world. Boston's physicians were, with one exception, against it, and he was right.",
            sourceLessonSlug: "mathers-actual-argument",
          },
          {
            prompt: "What made the Big Bone Lick material so hard to interpret?",
            options: [
              "The tusks looked elephantine while the molars carried large conical cusps",
              "The bones had been crushed flat, so no measurement could be trusted at all",
              "The specimens arrived in Paris without any record of where they were found",
              "The teeth matched an elephant exactly while the limb bones matched no animal",
            ],
            correctIndex: 0,
            explanation:
              "One animal that appears to be two things at once. Everything after 1739 is people trying to resolve that.",
            sourceLessonSlug: "the-incognitum",
          },
          {
            prompt: "What did Daubenton propose to explain the contradictory Ohio bones?",
            options: [
              "An elephant and a hippopotamus washed together at a single site",
              "A single elephant whose teeth had been worn into an unusual shape",
              "A hoax assembled from unrelated bones by the traders who sold them",
              "An animal of the sloth kind whose limb bones resembled an elephant",
            ],
            correctIndex: 0,
            explanation:
              "Two known animals explain the contradiction without requiring anything new to exist. Sound comparative reasoning, and wrong.",
            sourceLessonSlug: "the-incognitum",
          },
          {
            prompt: "What did William Hunter argue in 1768 about the Ohio animal?",
            options: [
              "That it was a distinct species, which he took to be a carnivore",
              "That it was an ordinary elephant carried north by the great Flood",
              "That the bones came from at least four unrelated kinds of animal",
              "That the cusped teeth were the milk teeth of a juvenile elephant",
            ],
            correctIndex: 0,
            explanation:
              "The name settles here: the American incognitum, the unknown one. His carnivore reading was an inference from anatomy, and it was wrong.",
            sourceLessonSlug: "the-incognitum",
          },
          {
            prompt: "Jefferson first identified his Megalonyx bones as belonging to what kind of animal?",
            options: [
              "A clawed quadruped of the lion kind, about three times a lion's size",
              "A ground sloth of the kind Cuvier had described from South America",
              "An elephant of a northern variety adapted to a colder American winter",
              "A bear far larger than any then known from the forests of the interior",
            ],
            correctIndex: 0,
            explanation:
              "He reasoned from the proportions of the claws against the nearest familiar animal of that build. The claws were the striking part of the find.",
            sourceLessonSlug: "jefferson-and-the-megalonyx",
          },
          {
            prompt: "How did Jefferson respond to learning of Cuvier's Megatherium before his paper was printed?",
            options: [
              "He added a postscript conceding the animal was probably sloth-like",
              "He withdrew the memoir and asked the Society to destroy the proofs",
              "He rewrote the argument so that it appeared to predict the sloth",
              "He disputed the South American find as a badly reconstructed skeleton",
            ],
            correctIndex: 0,
            explanation:
              "A sitting Vice President attached a note to his own paper saying his central identification was probably wrong.",
            sourceLessonSlug: "jefferson-and-the-megalonyx",
          },
          {
            prompt: "What was Buffon's stated mechanism for the supposed weakness of American animals?",
            options: [
              "A cold, wet, recently emerged continent with heavy air from swamp",
              "Isolation from Old World species and the absence of interbreeding",
              "A shortage of salt and mineral springs across the whole continent",
              "Hunting pressure from human populations over many past centuries",
            ],
            correctIndex: 0,
            explanation:
              "The mechanism is climate. Jefferson answered it with tables of comparative weights rather than with indignation.",
            sourceLessonSlug: "buffon-and-the-moose",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // Section 3 · Whose bones, and whose discovery
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "bones-people-already-knew",
      title: "11 · Bones people already knew",
      section: "Section 3 · Whose bones, and whose discovery",
      body: `Big Bone Lick was not found in 1739. It was visited in 1739 by a French detachment that then shipped some of its contents to Paris.

The lick was a known place. It is a salt spring, and salt springs are among the most valuable and best-known features of any landscape: animals go to them, so hunters go to them. The bones were on the surface and in the marsh, in quantity, and had been for a very long time. People had been living in and moving through that country for thousands of years.

## What is actually on the record

Be careful here, because this is exactly the kind of territory where a well-meaning course overclaims and undoes its own credibility.

**Jefferson records a Delaware account.** In the *Notes on the State of Virginia*, Query VI, he reports that a delegation of Delaware men, asked by the governor of Virginia about the animal whose bones were found at the Ohio salt licks, gave an account handed down from their fathers: that a herd of enormous animals came to the Big Bone licks and destroyed the bear, deer, elk and buffalo, and that a great being intervened with lightning, killing all but one, which escaped. Jefferson uses this in support of his own position that the animal might still be alive.

Note what this document is. It is a European transcription, at second hand, of a summary given through interpretation, recorded by a man who wanted it to support a conclusion he already held. That is not a reason to discard it. It is a reason to describe it accurately as what it is, which is a report of a tradition, not the tradition itself.

**Brontothere fossils and the thunder horse.** In the badlands of what is now South Dakota, the fossil beds hold brontotheres, very large horned mammals of the Eocene. O. C. Marsh collected there in 1874 with Lakota permission after negotiating with Red Cloud, and he named the largest genus *Brontotherium*, thunder beast, in connection with accounts of a thunder horse associated with those bones. That much is in his own record and in the standard histories. The vivid retellings, in which a specific person hands Marsh a specific jaw with a specific speech, circulate far more confidently than the sources support, and you should treat them as you now treat "may have inspired."

**More broadly.** Fossil material appears in archaeological contexts across the Americas: collected, carried, sometimes worked, sometimes deposited in ways that suggest it mattered. That is physical evidence of interest and attention, and it does not require any interpretation of what people believed to be significant.

## The claim this lesson makes, and the one it refuses

**Makes:** People lived with these bones, knew where they were, moved them, and had accounts that explained them. Those accounts were sometimes the reason outside collectors found the sites at all. This is documented, and it is the ordinary condition of every fossil bed on earth.

**Refuses:** That those accounts were secretly correct palaeontology in disguise. A tradition about a great being killing enormous animals with lightning is not a garbled report of Pleistocene extinction, and turning it into one is its own kind of condescension: it says the account is only valuable if it turns out to have been science. It was an explanation of a real thing, in the terms of the people explaining it, exactly like Mather's and exactly like Hunter's carnivore.

## The evidentiary question underneath

Which is the real reason this lesson is in a course about method.

A written source has a date, an author and an archive. An oral account has custodians, transmission and a community, and it usually enters the written record only when an outsider writes it down, at which point what survives is the outsider's version. Those are different evidentiary situations, and the second is systematically disadvantaged by the way archives work, not by the way knowledge works.

The previous course put it as a question, and it is the same question here: **knew, or wrote down in a form that survived in an archive somebody later searched?**

## A note on the source for this lesson

Adrienne Mayor's *Fossil Legends of the First Americans* (2005) is the standard collection of this material and this lesson depends on it. Read it with the same care lesson 4 asked for: it is a work of interpretation, it sometimes reads connections more confidently than the evidence carries, and it is also the reason a great deal of this material was assembled at all. Both.

:::reveal What kind of document is Jefferson's record of the Delaware account of the big bones? ||| A European transcription, at second hand, of a summary given through interpretation, written down by a man who wanted it to support a conclusion he already held. A report of a tradition rather than the tradition itself.

:::reveal What does this lesson refuse to claim about Indigenous accounts of fossil beds? ||| That they were secretly correct palaeontology in disguise. Treating an account as valuable only if it turns out to have been science is its own condescension.

:::reveal Why is an oral account systematically disadvantaged in the record? ||| Because it usually enters the written record only when an outsider writes it down, so what survives is the outsider's version. That is a fact about how archives work, not about how knowledge works.

## Sources
- Jefferson, T. (1785). *Notes on the state of Virginia*. Privately printed.
- Mayor, A. (2005). *Fossil legends of the first Americans*. Princeton University Press.
- Semonin, P. (2000). *American monster: How the nation's first prehistoric creature became a symbol of national identity*. New York University Press.`,
      recallContent: [
        {
          prompt:
            "Name the two lessons of the Buffon episode that pull against each other.",
          answer:
            "A specimen beats a table and a table beats an argument, so the escalation runs toward what the other person can put their hands on. And nobody in the story was disinterested, yet both produced real evidence anyway.",
        },
        {
          prompt:
            "Both Mather and Jefferson used large bones for something beyond identifying an animal. What?",
          answer:
            "Mather used the tooth to support the historical accuracy of the Mosaic account. Jefferson used the great American animals to answer a European claim that his continent produced smaller and weaker life.",
        },
      ],
    },
    {
      slug: "discovery-has-an-owner",
      title: "12 · \"Discovery\" is a word with an owner",
      section: "Section 3 · Whose bones, and whose discovery",
      body: `Who discovered Big Bone Lick? Who discovered Dragon Bone Hill? The questions sound simple and they are not, and the reason they are not is worth eighteen minutes of your life.

## Three different things the word can mean

**First to see it.** Almost never recoverable, and almost never the person credited. Somebody was first to notice large bones at a salt lick, and there is no possibility of knowing who.

**First to publish it where the discipline reads.** This is what the word usually means in science, and it is a rule with a genuine purpose, discussed below.

**First to hold a legal claim over it.** A different system entirely, with courts attached.

Those three come apart constantly, and most arguments about who discovered what are really arguments about which of the three is being used.

## The scientific rule, taken seriously

Zoological naming runs on the principle of **priority**: the valid name of an animal is the earliest one properly published, attached to a designated type specimen, in a work that meets the code's requirements. The rules are set out by the International Commission on Zoological Nomenclature.

This is a good rule and it exists for good reasons. It settles disputes without appeal to status. It creates a checkable public record with a date. It forces the claimant to deposit a physical specimen where others can examine it, which is Steno's move from lesson 2 written into law. Without something like it, names multiply and nobody can tell whether two papers are about the same animal.

It also has a cost, and the cost is a specific and predictable one: it distributes credit according to **access to the publication system**. The quarryman who found the specimen, the local guide who knew the site, the preparator who spent nine months in the workshop, and the community that had a name for the bones already are all outside the mechanism, structurally, not accidentally.

That is a trade, and naming it as a trade is the honest way to hold it. It is not a conspiracy and it is not nothing.

## The same word in a courtroom

In *Johnson v. M'Intosh* (1823) the United States Supreme Court held that title to land in North America derived from European discovery, and that Indigenous nations retained a right of occupancy but not a right to convey full title to private buyers. Chief Justice Marshall's opinion reasons from what has come to be called the doctrine of discovery, a body of European legal thinking that treated the arrival of a European sovereign as the act that created ownership.

The word is doing the same work it does in a species name and with vastly higher stakes: it converts an encounter into a claim, and it does so from one party's side.

You do not need to be told what to think about that. You do need to notice that a word can be a mechanism, and that this one is.

## The precision to keep

Do not flatten this into "discovery is a lie." It is not. Cuvier genuinely established something nobody had established. Jefferson's bones genuinely entered a record where they could be checked and corrected, and were. That is real work, and pretending otherwise is just a different way of not looking at the evidence.

The accurate statement is narrower and more useful: **"discovered" describes an event in the history of one institution's records, and it is routinely read as an event in the history of the world.** Those are different claims. Almost every confident sentence containing the word is really about the first and is heard as the second.

## The habit

When you meet the word, ask three questions in order.

1. Discovered by whom, and to whom was it previously unknown?
2. What system is doing the recognising: a journal, a museum, a court, a market?
3. What did that system require of the claimant, and who could meet those requirements?

The third one is the sharpest, because it turns a question about individuals into a question about mechanism, and mechanisms are checkable.

:::reveal Name the three different things the word "discovery" can mean. ||| First to see it, first to publish it where the discipline reads, and first to hold a legal claim over it. Most arguments about discovery are really arguments about which one is being used.

:::reveal Why is the principle of priority in zoological naming a good rule despite its cost? ||| It settles disputes without appeal to status, creates a dated public record, and forces the claimant to deposit a specimen others can examine. Its cost is that it distributes credit by access to the publication system.

:::reveal State the narrow, accurate claim about the word "discovered." ||| It describes an event in the history of one institution's records, and it is routinely read as an event in the history of the world.

## Sources
- International Commission on Zoological Nomenclature. (1999). *International code of zoological nomenclature* (4th ed.). International Trust for Zoological Nomenclature.
- Johnson v. M'Intosh, 21 U.S. 543 (1823).
- Mayor, A. (2005). *Fossil legends of the first Americans*. Princeton University Press.
- Miller, R. J. (2006). *Native America, discovered and conquered: Thomas Jefferson, Lewis and Clark, and Manifest Destiny*. Praeger.`,
    },
    {
      slug: "map-bones-and-stories",
      title: "13 · Where the bones were, what was said, what they turned out to be",
      section: "Section 3 · Whose bones, and whose discovery",
      lessonType: "map",
      body: `Every marker on this map carries three things: what came out of the ground there, what was said about it at the time, and what it is now understood to be. Read the descriptions rather than skimming the pins, because the gap between the second and third of those is the course.

**Blue markers** are sites where the identification is now settled and the road to it is documented. **Amber markers** are places where the connection between the bones and a story about them is contested or unproven, and where the honest answer is still open. **Green markers** are places where local knowledge of the bones is documented as preceding the outside naming.

## Two markers carry no year, deliberately

The dwarf elephant deposits of Sicily and the *Protoceratops* beds of the Gobi are Pleistocene and Cretaceous respectively, while the stories attached to them are, in one case ancient and in the other modern. Putting a single year on either would assert a connection this course has spent two lessons declining to assert. They are undated on purpose, and the absence is the argument.

## The honest limits of this map

The green markers understate the case badly, and it is worth saying how.

They are the sites where somebody happened to write down that local knowledge came first, usually because an outsider needed a guide and mentioned it in a report. Every fossil bed on earth that people lived near was known to those people, and almost none of that is plottable, because plotting requires a document and a date. The map can show where the record happens to be legible. It cannot show where knowledge was.

That is the same point the previous course made about its own map, and it will keep being the same point: **absence on a document is usually a fact about the document.**

## What to look for as you scrub the years

The blue markers cluster in the eighteenth and nineteenth centuries, in Europe and the eastern United States, because that is when and where an institutional apparatus for settling such questions existed. The green markers carry dates that are not the dates the knowledge existed; they are the dates an outside record noticed it. Watch the two kinds of date drift apart, and remember that one of them is a fact about the world and the other is a fact about archives.

:::reveal What do the amber markers on this map mark? ||| Places where the connection between the bones and a story about them is contested or unproven, and where the honest answer is still open rather than settled.

:::reveal Why do two of the markers carry no year? ||| Because dating them would assert a connection between very old bones and a much later story, which is exactly the connection this course has declined to assert. The absence is the argument.

:::reveal What do the dates on the green markers actually record? ||| The date an outside record noticed the local knowledge, not the date the knowledge existed. The drift between those two is the thing to watch.

## Sources
- Boaz, N. T., & Ciochon, R. L. (2004). *Dragon Bone Hill: An ice-age saga of Homo erectus*. Oxford University Press.
- Mayor, A. (2005). *Fossil legends of the first Americans*. Princeton University Press.
- Semonin, P. (2000). *American monster: How the nation's first prehistoric creature became a symbol of national identity*. New York University Press.`,
      mapContent: {
        markers: [
          {
            id: "claverack",
            lat: 42.2226,
            lng: -73.7346,
            year: 1705,
            color: "#1d4ed8",
            title: "Claverack, New York",
            description:
              "OUT OF THE GROUND: a tooth weighing close to five pounds, eroding from the east bank of the Hudson. SAID AT THE TIME: the tooth of an antediluvian giant, shipped to London by the colonial governor and reported to the Royal Society by Cotton Mather. NOW UNDERSTOOD AS: American mastodon, Mammut americanum.",
          },
          {
            id: "big-bone-lick",
            lat: 38.8867,
            lng: -84.7519,
            year: 1739,
            color: "#15803d",
            title: "Big Bone Lick, Kentucky",
            description:
              "OUT OF THE GROUND: mastodon, mammoth, bison and much else, at a salt spring animals came to and hunters therefore knew. SAID AT THE TIME: an elephant, or a hippopotamus mixed with an elephant, or the American incognitum. Jefferson also recorded a Delaware account of huge animals destroyed by lightning. NOW UNDERSTOOD AS: a Pleistocene bone bed at a mineral lick. Green because the site was known and used long before the 1739 French detachment shipped its contents to Paris.",
          },
          {
            id: "greenbrier-cave",
            lat: 37.55,
            lng: -80.6,
            year: 1796,
            color: "#1d4ed8",
            title: "A saltpetre cave in western Virginia",
            description:
              "OUT OF THE GROUND: large claws and associated bones, sent to Thomas Jefferson from a cave in what was then Greenbrier County, Virginia, now West Virginia. Plotted approximately, because the exact cave is identified differently in different accounts. SAID AT THE TIME: a clawed quadruped of the lion kind, three times a lion's size. NOW UNDERSTOOD AS: a giant ground sloth, Megalonyx jeffersonii.",
          },
          {
            id: "paris-cabinet",
            lat: 48.8433,
            lng: 2.36,
            year: 1762,
            color: "#1d4ed8",
            title: "The royal cabinet, Paris",
            description:
              "OUT OF THE GROUND: nothing. This is where the Ohio bones went. SAID HERE: Daubenton read the tusks as elephant and the cusped teeth as hippopotamus, two animals washed together. NOW UNDERSTOOD AS: the place where the question was eventually settled, when Cuvier compared living and fossil elephants here around 1800 and made extinction a fact rather than a heresy.",
          },
          {
            id: "philadelphia-aps",
            lat: 39.9489,
            lng: -75.1497,
            year: 1797,
            color: "#1d4ed8",
            title: "American Philosophical Society, Philadelphia",
            description:
              "OUT OF THE GROUND: nothing. This is where the claws were read. SAID HERE: Jefferson's memoir on the Great Claw, delivered in March 1797, with a postscript added before publication conceding the animal was probably sloth-like. NOW UNDERSTOOD AS: the room where an American statesman corrected himself in print, which is the behaviour the whole enterprise runs on.",
          },
          {
            id: "dakota-badlands",
            lat: 43.75,
            lng: -102.5,
            year: 1874,
            color: "#15803d",
            title: "The badlands of present-day South Dakota",
            description:
              "OUT OF THE GROUND: brontotheres, very large horned mammals of the Eocene, weathering out of the White River beds. SAID AT THE TIME: thunder horses, in Lakota accounts associated with those bones and with storms. NOW UNDERSTOOD AS: brontotheres. O. C. Marsh collected here in 1874 with Lakota permission and named the largest genus Brontotherium, thunder beast. The vivid retellings of how he was handed his first jaw are more confident than the sources.",
          },
          {
            id: "zhoukoudian",
            lat: 39.6858,
            lng: 115.9236,
            year: 1921,
            color: "#15803d",
            title: "Longgushan, Dragon Bone Hill, Zhoukoudian",
            description:
              "OUT OF THE GROUND: an enormous Pleistocene cave fauna, and eventually hominin remains. SAID AT THE TIME: dragon bone, long gu, a material with a name, a market and a place in the pharmacopoeia. NOW UNDERSTOOD AS: Homo erectus and its associated fauna. Green because the hill's local name is Dragon Bone Hill and the digging and the trade were there before the excavation of 1921.",
          },
          {
            id: "anyang",
            lat: 36.1264,
            lng: 114.3155,
            year: 1899,
            color: "#15803d",
            title: "Anyang, the Yinxu site",
            description:
              "OUT OF THE GROUND: inscribed ox scapulae and turtle plastrons, sold in the same trade as fossil dragon bone. SAID AT THE TIME: medicine, until scholars recognised the marks on some pieces as writing. NOW UNDERSTOOD AS: Shang dynasty divination records, the oldest substantial body of Chinese writing. The traditional account of the 1899 recognition is disputed in its details, and the date is plotted for that traditional account rather than for a settled event.",
          },
          {
            id: "flaming-cliffs",
            lat: 44.135,
            lng: 103.727,
            color: "#b45309",
            title: "The Protoceratops beds of the Gobi",
            description:
              "OUT OF THE GROUND: abundant, often articulated skeletons of Protoceratops, a beaked, frilled, roughly sheep-sized dinosaur, formally described in 1923. SAID ABOUT THEM: that encounters with these skeletons gave rise to the griffin. NOW: genuinely contested, with a detailed published rebuttal in 2024. Deliberately undated, because a year would assert the connection the course declines to assert.",
          },
          {
            id: "sicily-dwarf-elephants",
            lat: 37.01,
            lng: 15.1,
            color: "#b45309",
            title: "Dwarf elephant deposits, southeastern Sicily",
            description:
              "OUT OF THE GROUND: the remains of dwarfed Pleistocene elephants, whose skulls carry a large central nasal opening. SAID ABOUT THEM: that they gave rise to the cyclops, a suggestion credited to Othenio Abel in the early twentieth century. NOW: unsupported and unrefuted, with no ancient source making the link. Deliberately undated, for the same reason as the Gobi marker.",
          },
          {
            id: "fort-dodge-gypsum",
            lat: 42.4975,
            lng: -94.168,
            year: 1868,
            color: "#1d4ed8",
            title: "Fort Dodge, Iowa",
            description:
              "OUT OF THE GROUND: a block of gypsum roughly eleven feet long, quarried on the order of George Hull and shipped to Chicago to be carved. SAID AT THE TIME: nothing; this part was private. NOW UNDERSTOOD AS: the raw material of the Cardiff Giant, and the reason a chemical analysis of the finished figure could point straight back to a quarry.",
          },
          {
            id: "cardiff-ny",
            lat: 42.9384,
            lng: -76.0966,
            year: 1869,
            color: "#1d4ed8",
            title: "Cardiff, Onondaga County, New York",
            description:
              "OUT OF THE GROUND: a carved gypsum figure over ten feet long, buried the previous autumn and dug up by well diggers on 16 October 1869. SAID AT THE TIME: a petrified antediluvian giant, or an ancient statue, viewable for a quarter. NOW UNDERSTOOD AS: a deliberate hoax, called a humbug by O. C. Marsh within weeks of examining it.",
          },
          {
            id: "new-york-copy",
            lat: 40.7419,
            lng: -73.988,
            year: 1869,
            color: "#1d4ed8",
            title: "Broadway, New York City",
            description:
              "OUT OF THE GROUND: nothing at all. SAID AT THE TIME: that this plaster figure was the genuine Cardiff Giant and the one upstate was the copy. NOW UNDERSTOOD AS: P. T. Barnum's replica of a fake, exhibited after the owners refused to sell him the original, and reportedly outdrawing it.",
          },
        ],
      },
    },
    {
      slug: "quiz-whose-discovery",
      title: "Section 3 quiz · Whose bones, and whose discovery",
      section: "Section 3 · Whose bones, and whose discovery",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Why was Big Bone Lick already a known place long before 1739?",
            options: [
              "It is a salt spring, so animals gathered there and hunters knew it",
              "It lay on the main portage between two navigable river systems",
              "It had been mapped by Spanish surveyors working north from Florida",
              "It was the site of a trading post established by French merchants",
            ],
            correctIndex: 0,
            explanation:
              "Salt springs are among the best-known features of any landscape, and the bones were on the surface and in the marsh in quantity.",
            sourceLessonSlug: "bones-people-already-knew",
          },
          {
            prompt: "What kind of document is Jefferson's record of the Delaware account of the big bones?",
            options: [
              "A second-hand transcription made by a man who wanted a conclusion",
              "A verbatim transcript taken down in the presence of the speakers",
              "A translation of a written Delaware chronicle held by the nation",
              "An affidavit sworn before the colonial court at Williamsburg",
            ],
            correctIndex: 0,
            explanation:
              "A report of a tradition rather than the tradition itself. Describing it accurately is not the same as discarding it.",
            sourceLessonSlug: "bones-people-already-knew",
          },
          {
            prompt: "Which claim does the lesson on Indigenous fossil accounts explicitly REFUSE to make?",
            options: [
              "That those accounts were secretly correct palaeontology in disguise",
              "That people knew where the bone beds were and moved material from them",
              "That outside collectors sometimes found sites because locals led them there",
              "That fossil material appears in archaeological contexts across the Americas",
            ],
            correctIndex: 0,
            explanation:
              "Treating an account as valuable only if it turns out to have been science is its own kind of condescension.",
            sourceLessonSlug: "bones-people-already-knew",
          },
          {
            prompt: "Which genus did O. C. Marsh name in connection with accounts of a thunder horse?",
            options: [
              "Brontotherium, the thunder beast of the White River badlands",
              "Megalonyx, the great claw of the western Virginia cave deposits",
              "Mammut, the American mastodon of the Ohio valley salt licks",
              "Protoceratops, the beaked and frilled dinosaur of the Gobi beds",
            ],
            correctIndex: 0,
            explanation:
              "He collected in the Dakota badlands in 1874 with Lakota permission after negotiating with Red Cloud. The vivid retellings outrun the sources.",
            sourceLessonSlug: "bones-people-already-knew",
          },
          {
            prompt: "Why is an oral account systematically disadvantaged in the surviving record?",
            options: [
              "It usually enters writing only when an outsider records his version",
              "It changes too much between tellings for any version to be trusted",
              "It is rarely dated, so no archive will accept it into a collection",
              "It is normally kept secret and withheld from any outside listener",
            ],
            correctIndex: 0,
            explanation:
              "That is a fact about how archives work, not about how knowledge works. The same point governs the map lesson's green markers.",
            sourceLessonSlug: "bones-people-already-knew",
          },
          {
            prompt: "The word \"discovery\" can mean three different things. Which set does the lesson give?",
            options: [
              "First to see, first to publish where the discipline reads, first to hold legal claim",
              "First to name, first to excavate the site, first to display it to a paying public",
              "First to suspect, first to prove it experimentally, first to teach it in a school",
              "First to record it, first to translate the record, first to place it in a museum",
            ],
            correctIndex: 0,
            explanation:
              "Most arguments about who discovered what are really arguments about which of the three is meant.",
            sourceLessonSlug: "discovery-has-an-owner",
          },
          {
            prompt: "What is the principle of priority in zoological naming?",
            options: [
              "The valid name is the earliest properly published one with a type specimen",
              "The valid name is the one used by the largest number of working specialists",
              "The valid name is the one given by the person who physically found the fossil",
              "The valid name is the one registered first with the government of the country",
            ],
            correctIndex: 0,
            explanation:
              "It settles disputes without appeal to status and forces a specimen into a place others can examine it.",
            sourceLessonSlug: "discovery-has-an-owner",
          },
          {
            prompt: "What is the predictable cost of the priority rule?",
            options: [
              "It distributes credit according to access to the publication system",
              "It makes older names impossible to correct once they are published",
              "It requires every species to be named in Latin rather than a local tongue",
              "It forbids a single researcher from naming more than one new species",
            ],
            correctIndex: 0,
            explanation:
              "The quarryman, the local guide, the preparator and the community with a prior name are outside the mechanism structurally, not accidentally.",
            sourceLessonSlug: "discovery-has-an-owner",
          },
          {
            prompt: "What did the Supreme Court hold in Johnson v. M'Intosh (1823)?",
            options: [
              "That title derived from European discovery, leaving only occupancy rights",
              "That Indigenous nations held full title and could sell land to any buyer",
              "That land title in the territories was determined solely by prior survey",
              "That the federal government could not acquire land from Indigenous nations",
            ],
            correctIndex: 0,
            explanation:
              "The same word that converts an encounter into a scientific claim converts an encounter into a legal one, from one party's side.",
            sourceLessonSlug: "discovery-has-an-owner",
          },
          {
            prompt: "State the narrow, accurate claim the lesson makes about the word \"discovered.\"",
            options: [
              "It describes an event in one institution's records and is heard as an event in the world",
              "It describes a false claim made by people who arrived somewhere after everybody else",
              "It describes a legal act only, and has no defensible meaning inside a scientific paper",
              "It describes the moment a specimen enters a museum and can no longer be re-examined",
            ],
            correctIndex: 0,
            explanation:
              "Flattening this into \"discovery is a lie\" is just a different way of not looking at the evidence.",
            sourceLessonSlug: "discovery-has-an-owner",
          },
          {
            prompt: "On the course map, what do the green markers indicate?",
            options: [
              "Places where local knowledge of the bones is documented as coming first",
              "Places where the fossils have never been assigned to a described species",
              "Places where the deposits have since been destroyed by quarrying or roads",
              "Places where the original specimens were lost in transit to a collection",
            ],
            correctIndex: 0,
            explanation:
              "Their dates record when an outside record noticed the knowledge, not when the knowledge existed.",
            sourceLessonSlug: "map-bones-and-stories",
          },
          {
            prompt: "Why do two markers on the course map deliberately carry no year at all?",
            options: [
              "Because dating them would assert the very connection the course declines to assert",
              "Because the deposits at those two sites have never been dated by any method",
              "Because the map renderer cannot display years before the common era began",
              "Because both sites were destroyed before any excavation record was written",
            ],
            correctIndex: 0,
            explanation:
              "The Gobi and Sicilian markers hold contested stories about very old bones. The absence of a year is the argument.",
            sourceLessonSlug: "map-bones-and-stories",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // Section 4 · The giant with a ticket price
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "the-cardiff-giant",
      title: "14 · The Cardiff Giant, and what a quarter bought",
      section: "Section 4 · The giant with a ticket price",
      body: `On 16 October 1869, two men digging a well behind the barn of William Newell, a farmer at Cardiff in Onondaga County, New York, struck stone about three feet down. What they uncovered was the figure of a man, over ten feet long, lying on his side with one hand across his abdomen, apparently in the ground and apparently very old.

Newell put a tent over the hole and began charging admission. A quarter, at first.

## What actually happened, from the other end

George Hull, a cigar maker from Binghamton and Newell's cousin, had spent about a year on this.

The account he later gave puts the origin in an argument with a Methodist revivalist about the passage in Genesis stating that there were giants in the earth in those days. Hull, who did not believe it, wondered how many people did, and what they would pay to see one.

In 1868 he had a block of gypsum roughly eleven feet long quarried near Fort Dodge, Iowa, and shipped by rail to Chicago. There stonecutters carved it into a figure, working from Hull's specifications. The surface was treated to look weathered and aged, and the skin was pitted all over with needles driven through a block to make something like pores. The finished figure was shipped east and buried on Newell's farm in November 1868, and left in the ground for the best part of a year.

Then Newell hired well diggers, and pointed them at the right spot.

## The response, which is not what the story usually says

Crowds came. So did the newspapers, and so did an argument about what the thing was, and the argument had several sides.

**A petrified man.** The popular reading, and the one the ticket sold. Petrifaction of an actual human body, an antediluvian giant preserved where he fell.

**An ancient statue.** Proposed by people who could see it was carved but assumed it was old. Some serious observers took this position, and it is a reasonable-looking hypothesis about a carved object found buried.

**A recent fake.** Othniel Charles Marsh, the Yale palaeontologist, examined it and called it a humbug, pointing to tool marks that had no business surviving on gypsum left in wet ground, and to the fresh, unweathered condition of a surface that should have been dissolving.

Andrew Dickson White, then president of Cornell, went to look and came away unpersuaded. In his memoirs he recorded the reaction of a clergyman standing beside him in the tent, who was moved by it.

## What the giant was made of, and why that mattered

Gypsum is soft and it is soluble. A gypsum figure buried in damp New York soil for the thousands of years the story required would not have crisp tool marks on it. It would be pitted, rounded and partly gone.

That is the sort of argument that settles things: not "this seems unlikely" but "this material behaves in a known way under known conditions, and this object does not show that behaviour." It is checkable by anybody, and it does not require you to know anything about Hull.

Hull confessed within a few months of the discovery.

## The thing worth holding onto

The scientific verdict was fast, public and correct. Within weeks of examination the object had been correctly called, on physical grounds, by people who had never heard of George Hull.

The crowds kept coming anyway. That gap, between a question being settled and a question being closed, is the subject of the next two lessons.

:::reveal What was the Cardiff Giant made of, and why did the material give it away? ||| Gypsum, which is soft and soluble. A gypsum figure buried for thousands of years in damp soil would be pitted and rounded, not crisply tool-marked and unweathered.

:::reveal Name the three explanations people offered for the Cardiff Giant when it was first exhibited. ||| A petrified antediluvian man, an ancient carved statue, and a recent fake. The middle one is a reasonable-looking hypothesis about a carved object found buried.

:::reveal How quickly was the object correctly identified, and by whom? ||| Within weeks of examination, by O. C. Marsh of Yale among others, on physical grounds, before anyone knew who George Hull was.

## Sources
- Franco, B. (1969). The Cardiff Giant: A hundred year old hoax. *New York History, 50*(4), 421-440.
- Tribble, S. (2009). *A colossal hoax: The giant from Cardiff that fooled America*. Rowman and Littlefield.
- White, A. D. (1905). *Autobiography of Andrew Dickson White*. Century.`,
      recallContent: [
        {
          prompt:
            "Ask the three questions this course gives for any use of the word \"discovery.\"",
          answer:
            "Discovered by whom, and previously unknown to whom? What system is doing the recognising: a journal, a museum, a court, a market? And what did that system require of the claimant, so who could meet those requirements?",
        },
        {
          prompt:
            "Why does the course insist that the priority rule is a good rule and not a scandal?",
          answer:
            "Because it settles naming disputes without appeal to status, produces a dated public record, and forces a physical specimen into a place others can examine. Its cost is real and it is a trade, not a conspiracy.",
        },
      ],
    },
    {
      slug: "barnums-copy",
      title: "15 · Barnum's copy, and the hoax of a hoax",
      section: "Section 4 · The giant with a ticket price",
      body: `The Cardiff Giant did not stay on the farm. Hull sold most of his interest to a syndicate of local businessmen, and the figure moved to Syracuse, where it drew paying crowds on a scale that made it a national object.

P. T. Barnum wanted it. He made offers. The syndicate turned him down.

So he had a plaster copy made and exhibited it in New York, presenting his as the real Cardiff Giant and the upstate one as an imitation.

## Read that sentence again

A replica of a forgery was advertised as the authentic version of a fake, and it reportedly outdrew the original.

Nobody in this transaction is buying a genuine antediluvian giant, because by this point the newspapers have carried Marsh's verdict and Hull's confession. Ticket-holders in New York in 1870 were, in large numbers, paying to look at a plaster copy of a gypsum carving that they already knew was a gypsum carving.

## What was actually being sold

Not authenticity. Three other things.

**Participation.** Being able to say you had seen it. The object was in the news, and looking at it bought you a position in a conversation everyone was having.

**The pleasure of the puzzle.** Barnum understood, and wrote about at length, that an audience enjoys evaluating a possible fraud. He published a whole book on humbug. The uncertainty is not an obstacle to the business; the uncertainty is the product.

**A story with an ending.** A hoax that has been exposed is a better story than a mystery, because it has a shape and a punchline, and the ticket lets you stand inside it.

## The line nobody can source

The remark "there's a sucker born every minute" is attached to this episode, usually attributed to Barnum and sometimes to David Hannum, one of the syndicate owners, said in reference to the people queueing for Barnum's copy.

The attribution is not established. It has been claimed for several people, it does not appear in a contemporaneous source tying it to any of them, and the version everyone repeats, the one where Barnum says it about his own customers, is the version with the least support.

This is the third time this course has stopped on an unsourced quotation, and it should be starting to feel like a pattern rather than a nitpick. A story acquires the line it deserves. A well-shaped anecdote attracts a well-shaped quotation the way a coastline attracts a sea monster: the empty space wants filling, and someone fills it, and after enough retellings the filling is indistinguishable from the object.

## The move to take away

When a story has a perfect line in it, check the line first. It is the most likely part to be invented, precisely because it is the part that makes the story worth retelling.

And notice which direction the invention runs. Nobody makes up a boring quotation.

:::reveal What did Barnum exhibit in New York, and how did he describe it? ||| A plaster copy of the Cardiff Giant, advertised as the genuine article, with the upstate original presented as the imitation. It reportedly outdrew the original.

:::reveal If not authenticity, what were people paying for by 1870? ||| Participation in a conversation everyone was having, the pleasure of evaluating a possible fraud, and a story with a punchline they could stand inside.

:::reveal What is the status of the line "there's a sucker born every minute"? ||| Unestablished. It has been claimed for several people with no contemporaneous source tying it to any of them, and the most-repeated version has the least support.

## Sources
- Barnum, P. T. (1866). *The humbugs of the world*. Carleton.
- Franco, B. (1969). The Cardiff Giant: A hundred year old hoax. *New York History, 50*(4), 421-440.
- Tribble, S. (2009). *A colossal hoax: The giant from Cardiff that fooled America*. Rowman and Littlefield.`,
    },
    {
      slug: "why-the-giant-worked",
      title: "16 · Why it worked: it fit what people already wanted",
      section: "Section 4 · The giant with a ticket price",
      body: `The Cardiff Giant is not a story about gullible farmers, and if you take that away from it you have wasted the lesson and learned a piece of flattery instead.

It is a story about a mechanism, and the mechanism is still running. Here it is in parts.

## 1. The conclusion was pre-sold

Hull did not have to persuade anybody that giants were possible. That work was already done, by a text most of his audience regarded as historical, by the surrounding argument between geology and scripture that was live and public in 1869, and by decades of newspaper reports of large bones from the American interior.

**The general principle:** a claim that fits an existing belief needs far less evidence than one that does not. It is not being evaluated from a standing start. It is being waved through a checkpoint that is already open.

## 2. The object was ambiguous in a productive way

A crisp modern statue would have been dismissed. A shapeless lump would have drawn nobody. Hull made something that supported several readings at once, and the *disagreement between the readings* is what kept it in the newspapers.

**The general principle:** ambiguity is not a weakness in a claim being sold. It is a feature. It generates the argument, and the argument generates the attention.

## 3. Disagreement among experts was reported as an open question

Some serious people said ancient statue. Marsh said humbug. In print, and to a reader skimming a column, that is two experts disagreeing, which reads as unsettled.

It was not unsettled. One side had a physical argument about how gypsum behaves in wet ground, and the other had an impression. **Coverage flattens that.** Two names, two positions, equal column inches.

**The general principle, and it is the most transferable thing in this course:** when you are told that experts disagree, ask what each side is arguing *from*. Disagreement between an argument and an impression is not a controversy. It is one argument and one impression.

## 4. Somebody was collecting at the door

Follow the money and it is not subtle. Hull spent money and recovered it. Newell took the gate. The syndicate paid a large sum and made it back. Barnum built a copy. The railroad ran excursion traffic to Cardiff. A local hotel filled up.

**The general principle:** the question "who profits if I believe this" is not cynicism, and it does not settle anything by itself. It tells you where to look for pressure on the evidence, which is different from telling you the claim is false.

## 5. The audience got something for its quarter

This is the part people leave out, and it is why the mechanism is durable rather than merely embarrassing.

The visitors were not simply defrauded. They got an outing, a spectacle, a thing to argue about at dinner, and a place in a national event. For twenty-five cents in 1869 that is not obviously a bad transaction, and a person who paid it and enjoyed it and later learned it was a carving has not been made a fool of in any way that should make you feel superior.

**The general principle:** when something false is widely believed, ask what the believing is *doing for people*. Correcting the fact rarely displaces the function, which is why exposure so often fails to end the story. The crowds kept coming after the confession.

## The turn onto you

Run the five back over something you currently believe and did not verify.

Is the conclusion one you already wanted? Is the evidence ambiguous in a way that generates argument rather than settling it? When you were told experts disagree, did you check what each side argued from? Who is collecting at the door? And what is believing it doing for you?

The last question is the one that stings, and it is the only one that gets at why exposure of the facts so often changes nothing.

:::reveal Why did Hull not need to persuade his audience that giants were possible? ||| Because that work was already done by a text most of them regarded as historical, by a live public argument between geology and scripture, and by years of newspaper reports of large bones from the interior.

:::reveal What should you ask when you are told that the experts disagree? ||| What each side is arguing FROM. A physical argument against an impression is not a controversy, however equal the column inches make it look.

:::reveal Why does exposing a hoax so often fail to end it? ||| Because correcting the fact does not displace the function. People were getting something real for their quarter, and the belief was doing work that the correction does not do.

## Sources
- Barnum, P. T. (1866). *The humbugs of the world*. Carleton.
- Franco, B. (1969). The Cardiff Giant: A hundred year old hoax. *New York History, 50*(4), 421-440.
- Tribble, S. (2009). *A colossal hoax: The giant from Cardiff that fooled America*. Rowman and Littlefield.`,
      recallContent: [
        {
          prompt:
            "What did Barnum exhibit on Broadway, and what does the episode show about what was being sold?",
          answer:
            "A plaster copy of the Cardiff Giant, advertised as the genuine article. It shows that authenticity was never the product: participation, the pleasure of the puzzle, and a story with an ending were.",
        },
        {
          prompt: "What is the rule about perfect lines in good stories?",
          answer:
            "Check the line first. It is the most likely part to be invented, because it is the part that makes the story worth retelling, and nobody ever invents a boring quotation.",
        },
      ],
    },
    {
      slug: "timeline-found-and-explained",
      title: "17 · The bone found, and the bone explained",
      section: "Section 4 · The giant with a ticket price",
      body: `One axis, two tracks. The upper track marks when material came out of the ground or into circulation. The lower track marks when somebody produced an account of it that held up, or in the last entry, took one apart.

The distance between the tracks is the argument of this course. Read it before the commentary underneath.

:::timeline What was found, and when it was explained
Han era | found | Dragon bone enters the Chinese materia medica tradition as a named substance
1596 | found | Li Shizhen's Bencao gangmu describes long gu and where good material is dug
1667 | explained | Steno matches the tongue stones of Malta to the teeth of a dissected shark
1705 | found | A tooth of nearly five pounds erodes out of the riverbank at Claverack
c. 1712 | explained | Mather reports the Claverack tooth to the Royal Society as a giant's
1739 | found | Bones from the Ohio salt lick are shipped to the royal cabinet in Paris
1762 | explained | Daubenton reads the material as an elephant and a hippopotamus together
1768 | explained | Hunter argues for a distinct species, the American incognitum
1785 | found | Jefferson publishes a Delaware account of the Big Bone Lick animals
1796 | found | Cave diggers in western Virginia send Jefferson a set of very large claws
1797 | explained | Jefferson reads the Great Claw memoir, then adds a correcting postscript
1799 | explained | Wistar reads the same bones as a sloth-like animal
c. 1800 | explained | Cuvier compares living and fossil elephants and makes extinction a fact
1806 | explained | Cuvier publishes on the great mastodon as a distinct extinct animal
1868 | found | A carved gypsum figure is buried on a farm at Cardiff, New York
1869 | explained | Marsh examines the Cardiff Giant and calls it a humbug within weeks
1874 | found | Marsh collects brontotheres in country whose people call them thunder horses
1903 | explained | Schlosser describes an apelike tooth from a Beijing drugstore collection
1921 | found | Systematic excavation begins at Dragon Bone Hill, Zhoukoudian
2024 | explained | Witton and Hing publish a detailed case against the griffin thesis
:::

## Three things the shape shows

**The gap is not ignorance; it is infrastructure.** Between Claverack in 1705 and Cuvier around 1800 there is nearly a century, and it is not a century of nobody thinking. It is the time it took to assemble comparative collections, a journal system, a museum, and a network of correspondents who could put two specimens side by side. Changing a mind at that scale is a construction project.

**Explanations arrive out of order and get overturned.** Steno solves shark teeth in 1667 and the Ohio animal is still unsettled in 1799. Hunter's carnivore was published, respected and wrong. Jefferson's lion was published, corrected by its own author, and superseded within two years. An orderly march of progress is not what this looks like.

**The last line is not an ending.** The griffin entry sits on the explained track because a detailed analysis was published, not because the question is closed. Mayor may answer it. Somebody may find something in a Central Asian archive. Putting a live dispute on a timeline requires you to say which it is, and this one is live.

## What is missing from this timeline, and why

There is almost nothing on it before 1596 outside China, and there is very little on it from anywhere that did not produce documents an archive kept.

That is not because nothing happened. Lesson 11 said it and the map lesson said it again: **this is a picture of a documentary record, not a picture of the past.** A timeline is one of the most confident-looking objects you can put in front of a student, and it is worth being suspicious of the ones that do not tell you what they left out.

:::reveal Why is there nearly a century between the Claverack tooth and Cuvier's settlement of the question? ||| Because the answer required infrastructure: comparative collections, a journal system, a museum, and a network able to put specimens side by side. Changing a mind at that scale is a construction project.

:::reveal Why is the 2024 griffin entry not an ending? ||| Because a published rebuttal is a move in an argument rather than a verdict. Putting a live dispute on a timeline obliges you to say that it is live.

:::reveal What is this timeline actually a picture of? ||| A documentary record, not the past. Nearly everything on it comes from places that produced documents an archive kept.

## Sources
- Rudwick, M. J. S. (1997). *Georges Cuvier, fossil bones, and geological catastrophes: New translations and interpretations of the primary texts*. University of Chicago Press.
- Semonin, P. (2000). *American monster: How the nation's first prehistoric creature became a symbol of national identity*. New York University Press.
- Witton, M. P., & Hing, R. A. (2024). Did the horned dinosaur Protoceratops inspire the griffin? *Interdisciplinary Science Reviews*. https://doi.org/10.1177/03080188241255543`,
    },
    {
      slug: "quiz-the-ticketed-giant",
      title: "Section 4 quiz · The giant with a ticket price",
      section: "Section 4 · The giant with a ticket price",
      quiz: {
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "How did the Cardiff Giant come to be in the ground at Cardiff, New York?",
            options: [
              "George Hull had it carved from Iowa gypsum and buried on his cousin's farm",
              "A quarry crew abandoned an unfinished monument on the site during a strike",
              "A travelling showman lost it from a wagon and the crate was buried by a flood",
              "A local sculptor carved it as a memorial and it was buried when the church moved",
            ],
            correctIndex: 0,
            explanation:
              "Quarried near Fort Dodge in 1868, carved in Chicago, buried on William Newell's farm that November, and dug up the following October.",
            sourceLessonSlug: "the-cardiff-giant",
          },
          {
            prompt: "What material was the Cardiff Giant carved from, and why did that matter?",
            options: [
              "Gypsum, which is soluble and would not keep crisp tool marks underground",
              "Marble, which is far too hard for the tooling marks that were found on it",
              "Sandstone, which would have crumbled entirely during the year underground",
              "Limestone, which could not have been quarried anywhere near Fort Dodge",
            ],
            correctIndex: 0,
            explanation:
              "The argument that settles things is not \"this seems unlikely\" but \"this material behaves in a known way and this object does not.\"",
            sourceLessonSlug: "the-cardiff-giant",
          },
          {
            prompt: "Which reading of the Cardiff Giant did some serious observers hold that was neither the popular one nor the correct one?",
            options: [
              "That it was a genuinely ancient carved statue rather than a petrified man",
              "That it was the fossil cast of a body preserved in a mineral spring deposit",
              "That it was a Native American burial marker moved from a nearby earthwork",
              "That it was a Spanish colonial monument left behind by an early expedition",
            ],
            correctIndex: 0,
            explanation:
              "A reasonable-looking hypothesis about a carved object found buried, and a good reminder that the alternatives were not silly.",
            sourceLessonSlug: "the-cardiff-giant",
          },
          {
            prompt: "Who examined the Cardiff Giant and publicly called it a humbug?",
            options: [
              "O. C. Marsh of Yale, pointing to tool marks and an unweathered surface",
              "Louis Agassiz of Harvard, pointing to the absence of any bone structure",
              "Caspar Wistar of Philadelphia, pointing to the proportions of the figure",
              "Georges Cuvier of Paris, pointing to the impossibility of human giants",
            ],
            correctIndex: 0,
            explanation:
              "Within weeks of examination, on physical grounds, before anyone knew who George Hull was. Wistar and Cuvier were long dead by 1869.",
            sourceLessonSlug: "the-cardiff-giant",
          },
          {
            prompt: "What did P. T. Barnum exhibit in New York after the owners refused to sell?",
            options: [
              "A plaster copy, advertised as the genuine giant and the upstate one as false",
              "A rival petrified man carved to order from a different Iowa gypsum block",
              "A collection of the tools used to carve the original, bought from the cutters",
              "A wax model of the discovery scene, with figures of the well diggers at work",
            ],
            correctIndex: 0,
            explanation:
              "A replica of a forgery advertised as the authentic version of a fake, and it reportedly outdrew the original.",
            sourceLessonSlug: "barnums-copy",
          },
          {
            prompt: "By 1870, with the confession public, what were ticket buyers actually purchasing?",
            options: [
              "Participation, the pleasure of the puzzle, and a story with a punchline",
              "Reassurance that the biblical account of giants had been confirmed at last",
              "A chance to inspect the figure closely and settle the question themselves",
              "Access to a scientific lecture delivered alongside the exhibit each evening",
            ],
            correctIndex: 0,
            explanation:
              "Barnum wrote a whole book on humbug. The uncertainty is not an obstacle to the business; it is the product.",
            sourceLessonSlug: "barnums-copy",
          },
          {
            prompt: "What is the actual status of the line \"there's a sucker born every minute\"?",
            options: [
              "Unestablished, claimed for several people with no contemporaneous source",
              "Documented in Barnum's own memoirs as his summary of the Cardiff affair",
              "Recorded by a Syracuse newspaper reporter who overheard David Hannum say it",
              "Traced to a printed handbill advertising the New York exhibition of the copy",
            ],
            correctIndex: 0,
            explanation:
              "The most-repeated version, the one where Barnum says it about his own customers, has the least support of any.",
            sourceLessonSlug: "barnums-copy",
          },
          {
            prompt: "What is the rule this course gives about a perfect line inside a good story?",
            options: [
              "Check the line first, because it is the most likely part to be invented",
              "Check the date first, because a misdated story is usually a merged story",
              "Check the venue first, because the setting is what most often shifts",
              "Check the number first, because a round figure is a rewritten figure",
            ],
            correctIndex: 0,
            explanation:
              "It is the part that makes the story worth retelling, and nobody ever invents a boring quotation.",
            sourceLessonSlug: "barnums-copy",
          },
          {
            prompt: "Why did Hull not have to persuade his audience that giants were possible?",
            options: [
              "That work was already done by scripture and a live public geology argument",
              "That work was already done by a wave of forged giants across the Midwest",
              "That work was already done by the state geologist in an official report",
              "That work was already done by a popular novel published earlier that year",
            ],
            correctIndex: 0,
            explanation:
              "A claim that fits an existing belief is waved through a checkpoint that is already open.",
            sourceLessonSlug: "why-the-giant-worked",
          },
          {
            prompt: "According to the lesson, why is ambiguity a FEATURE of a claim being sold rather than a weakness?",
            options: [
              "It generates the argument, and the argument generates the attention",
              "It makes any later legal action against the seller much harder to bring",
              "It allows the price of admission to be raised without new advertising",
              "It prevents specialists from committing themselves to a public position",
            ],
            correctIndex: 0,
            explanation:
              "A crisp modern statue would have been dismissed and a shapeless lump would have drawn nobody.",
            sourceLessonSlug: "why-the-giant-worked",
          },
          {
            prompt: "What should you ask when a report tells you that the experts disagree?",
            options: [
              "What each side is arguing from, since an impression is not an argument",
              "How many experts are on each side, since a majority is usually correct",
              "Which expert is more senior, since seniority tracks depth of experience",
              "Which side was quoted first, since editors lead with the stronger case",
            ],
            correctIndex: 0,
            explanation:
              "Marsh had a physical argument about gypsum in wet ground. Coverage flattens that into two names and equal column inches.",
            sourceLessonSlug: "why-the-giant-worked",
          },
          {
            prompt: "Why does exposing a hoax so often fail to end it?",
            options: [
              "Because correcting the fact does not displace what believing it was doing",
              "Because the correction is normally published long after public interest ends",
              "Because the people who paid have a legal interest in defending the object",
              "Because a retraction is always printed more quietly than the original claim",
            ],
            correctIndex: 0,
            explanation:
              "The crowds kept coming after the confession. People were getting something real for their quarter.",
            sourceLessonSlug: "why-the-giant-worked",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // Section 5 · Your turn
    // ══════════════════════════════════════════════════════════════════════════
    {
      slug: "assignment-your-state-fossil",
      title: "18 · Assignment: trace a fossil from your own state",
      section: "Section 5 · Your turn",
      lessonType: "assignment",
      body: `Pick a fossil animal or plant that has been described from your own state, and find out who named it, what they were reasoning from, and who else was in the room.

This assignment exists because the whole course has been about other people's evidence. This is the one place you handle some.

## Choose your subject

Most US states have designated an official state fossil, state dinosaur or state rock, and that designation is an easy starting point. A few states have not designated one. If yours has not, or if the designated one bores you, pick any species whose **type specimen** came from your state, or any well-known fossil locality within it. A state geological survey, a state museum, or a university geology department web page will get you started.

If you are outside the United States, use your province, region or country and the same structure applies.

## What to find out

Six things. Each one is a question this course has taught you to ask.

**1. The name and the naming.** The current scientific name, who published it, in what year, and in what journal or book. If the name has changed since, find out why and who changed it. Cite the original description if you can reach it, and say so plainly if you cannot.

**2. The type specimen.** Which physical object is the name attached to, and which institution holds it now? This is lesson 2's move, made into a legal requirement: a name in zoology is anchored to a thing another person can go and examine.

**3. Who found it.** Not who named it. Very often these are different people, and very often the finder is a quarry worker, a landowner, a student, a road crew, or an amateur collector. Sometimes the record does not say, and **"the published record does not name the finder" is a genuine finding**, worth reporting as one.

**4. What it was first thought to be.** Was the original identification correct? Many were not. If it was revised, find out what evidence did the revising. This is the found track and the explained track from lesson 17, on one specimen.

**5. Any prior local knowledge.** Was the locality known before it was described? Quarries, riverbanks, road cuts, cave systems and salt licks are usually known for a long time before a scientist arrives. Look for it, report what you find, and **report clearly if you find nothing**, without filling the gap with a guess about what people must have thought.

**6. One hedge, examined.** Find one sentence, in any source you used, containing a hedge: "may have," "is thought to," "possibly," "suggests." Quote it exactly. Then say what the hedge is marking, and whether the source goes on to say what would close the gap. This is lesson 5, applied to a real sentence you found yourself.

## What to submit

Around 700 to 1000 words, organised under those six headings, plus an APA 7 reference list.

Cite the primary description as a publication, not as the website you read about it on, though you may cite the website separately for what it gave you. Where you used a museum or survey page, cite that page.

## How this is assessed

- **Accuracy.** Names, dates, journals and institutions are correct and checkable.
- **Separation of record from inference.** At every point it is clear which statements come from a source and which are yours.
- **Quality of item 6.** Whether you correctly identified what the hedge was doing rather than just noticing a soft word.
- **Honesty about gaps.** Items 3 and 5 are where most students will find nothing. Reporting nothing accurately scores higher here than producing something plausible.

## The one rule, again

If you cannot establish something, write that you cannot establish it.

This course has spent eighteen lessons on the difference between a claim and the evidence for it, and on people who handled that difference well while getting the answer wrong. Mather described his specimen precisely and sent it where it could be checked. Jefferson attached a correction to his own paper. Hull, by contrast, produced an object designed to close the gap without evidence, and it worked for a while, and it worked because it was what people wanted.

A submission that quietly closes a gap is doing Hull's thing, at a much smaller scale, and it will be marked as such.

## Where this goes next

Take one claim you hold about the past, from any source at all, and write down what would change your mind about it. If nothing would, you have found something more interesting than a fossil.`,
    },
  ],
};
