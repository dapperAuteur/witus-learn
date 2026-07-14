// Authored course: "Lacrosse: The Creator's Game" — how to play, strategy, history, rules,
// leagues, and the amateur/entrepreneur pathways. Category "Sports". Audience: high school.
//
// SOURCING NOTES (load-bearing — this course's trust proposition):
//
//  • INDIGENOUS ORIGINS ARE FOUNDATIONAL, NOT A FOOTNOTE. Section 1 is the Haudenosaunee
//    game. It leads with the Onondaga Nation's own words (onondaganation.org) and with an
//    Indigenous historian — Allan Downey (Dakelh, Nak'azdli Whut'en), *The Creator's Game*
//    (UBC Press, 2018) — rather than only white-authored histories about Native people.
//    Indigenous-owned news (Windspeaker, ICT) carries the current-events reporting.
//
//  • WHAT WE DELIBERATELY DO NOT REPRODUCE. Ceremonial medicine games are ceremony. The
//    course teaches THAT they exist, WHO they belong to, and WHY they matter, and then stops:
//    no ceremonial procedures, no songs, no descriptions of ritual, no "how to hold your own
//    medicine game." Where a Nation publishes something itself, we quote that; where it does
//    not, we say so and point the learner to the Nation instead of filling the gap. This is
//    stated to the learner in Lesson 1 so the silence reads as respect, not omission.
//
//  • EVERY RULE IS QUOTED FROM A REAL, CURRENT RULEBOOK. No invented rule numbers. Every rule
//    number cited in this course was checked against the rulebook PDF itself (July 2026), not
//    against memory or a secondary source. Men's and women's lacrosse are DIFFERENT GAMES with
//    different codes; every rules lesson names the discipline AND the code before it gives a
//    number. Editions verified current against worldlacrosse.sport/the-game/playing-rules/:
//      - World Lacrosse. Rules of Men's Field Lacrosse 2025–2027 (Ver. 1.1, Jan. 2025).
//      - World Lacrosse. 2025–2026 Women's Field Lacrosse Rules (v1.1).
//      - World Lacrosse. 2026–2028 Sixes Lacrosse Official Playing Rules (Ver. 2.0, May 2026).
//      - World Lacrosse. 2026–2028 Box Lacrosse Official Playing Rules (Ver. 2.0, May 2026).
//      - NCAA. 2025 and 2026 Men's Lacrosse Rules and Interpretations.
//      - NCAA. 2026 and 2027 Women's Lacrosse Rules.
//    NOTE: the Sixes/box books turned over to v2.0 in May 2026 and the men's field book to v1.1
//    — an earlier draft of this course cited the superseded v1.0s. The course preaches "check
//    the edition date"; it now passes its own test. One casualty: a draft line citing a specific
//    ASTM standard number for Sixes women's eyewear was CUT — the rulebook names no number.
//    Trap we defuse explicitly: the international women's field game is TEN a side (WL 5.A.3);
//    NCAA women's is TWELVE (NCAA women's rules, Rule 1). Both are true; most of the internet
//    reports only the second. Same for the shot clock (WL 80s both codes; NCAA women's 90s).
//
//  • NO FABRICATED STATS, QUOTES, OR PEOPLE. Two facts commonly asserted online that this
//    course refuses to repeat: (1) lacrosse was NOT declared Canada's national game by act of
//    parliament in 1859 — the Dictionary of Canadian Biography calls that a long-held myth;
//    (2) Athletes Unlimited Pro Lacrosse is NOT a current league — AU suspended it
//    indefinitely on Dec. 18, 2024. Both are taught as verify-don't-assume lessons.
//
//  • THE OLYMPIC QUESTION IS LIVE. Haudenosaunee eligibility for LA28 is unresolved and dated
//    in-text (verified to Windspeaker, March 25, 2026; World Lacrosse pathway, July 1, 2026).
//    The course tells learners the date of its own information and tells them to re-check.

import type { AuthoredCourse } from "./authored-course";

export const LACROSSE_COURSE: AuthoredCourse = {
  title: "Lacrosse: The Creator's Game",
  description:
    "A full course in lacrosse — the Haudenosaunee game it has always been, and the modern sport it became. Start with the Indigenous origins and the Haudenosaunee Nationals' fight to play their own game at the Olympics; learn how the game is actually played (men's field, women's field, box, and the Olympic Sixes format — four genuinely different games, taught separately and never blurred); build real skills and strategy; read the actual rulebooks; and then map the ways an ordinary person builds a life in this sport — coaching, officiating, stringing, running a program, or fixing the access problem the sport still has. Every rule is quoted from a current, cited rulebook. Every claim ties to a source.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The Creator's Game
    // ═══════════════════════════════════════════════════════════════════════
    {
      slug: "the-creators-game",
      title: "1 · The Creator's Game",
      section: "1 · The Creator's Game: Indigenous origins",
      body: `Lacrosse is an Indigenous game. Not "inspired by" one. Not "with roots in" one. It **is** one — invented, carried, and still played by Native nations, and by the Haudenosaunee (Iroquois) Confederacy above all. If you learn the sport without learning that, you have learned a stick and a ball and missed the game.

Start with how the Onondaga Nation, one of the six nations of the Haudenosaunee Confederacy, describes it in its own words. Lacrosse at Onondaga "is considered sacred." It is "a game that was given by the Creator, to be played for the Creator," and it "has been known to have healing power. Because of this, it is also known as the **Medicine Game**" (Onondaga Nation, n.d.). The Onondaga name for it, *Dehoñtjihgwa'és*, roughly translates as "**they bump hips**" — which will make immediate sense to anyone who has watched a loose-ball scrum (Onondaga Nation, n.d.).

That is the frame for everything that follows. The Creator's Game is older than the rulebook, older than the leagues, older than the countries that now argue about who is allowed to play it.

### What "medicine game" means — and what this course will not do

A medicine game is **ceremony**. It is played for healing, at request, on Haudenosaunee terms. It is not a spectator event and it is not an exhibition. Onondaga is explicit about the pieces it chooses to share publicly: the sticks are hand-made hickory, and "the spirit of the tree connects the player to Mother Earth as they play for the Creator." Traditional games are played "between two groups, usually divided up between clans or young men versus old men." And "when a game like this is played on Mother Earth, it is said that a game is also being played with our ancestors in Creator's land" (Onondaga Nation, n.d.).

**Here is our rule for this course.** Where a Nation publishes something about the game itself, we quote the Nation. Where it does not, we do not go looking for someone else's description of it and print that instead. This course teaches **that** ceremonial medicine games exist, **whose** they are, and **why** they matter — and then it stops. You will not find ceremonial procedure, songs, prayers, or a "how to run your own medicine game" here, because that is not ours to give and reproducing it would be the opposite of respect. If you want to understand it more deeply, the right move is not to read more about Haudenosaunee people; it is to listen to them. Start at onondaganation.org and haudenosauneenationals.com.

### Historians and honest complications

The standard academic history of the Indigenous game is Thomas Vennum's *American Indian Lacrosse: Little Brother of War* (1994) — the "little brother of war" phrase is his title, drawn from how some Native nations described the game's role in resolving conflict. Read it alongside **Allan Downey's *The Creator's Game* (2018)**, which matters here for a specific reason: Downey is Dakelh (Nak'azdli Whut'en) — an Indigenous historian writing Indigenous lacrosse history, not an outsider narrating it. His book tracks how Indigenous people used lacrosse itself, from the 1860s to the 1990s, as a way of asserting identity and nationhood while settler institutions were trying to take the game from them (Downey, 2018).

One complication worth naming immediately, because it will come up again in Section 6: the Onondaga Nation states that in the traditional game women do not play, because "they are respected for providing life and are to protect this gift" (Onondaga Nation, n.d.). That is a statement about the **ceremonial** game at Onondaga. It is not a statement about the modern sport, where Haudenosaunee women compete at the highest level — the Haudenosaunee Nationals field a women's national team. Both facts are true at once. A course that flattens them into one is getting something wrong.

:::reveal Why does this course refuse to describe the ceremonial details of a Haudenosaunee medicine game? ||| Because a medicine game is ceremony, not content. The course teaches that medicine games exist, whose they are, and why they matter, and quotes what Haudenosaunee nations publish themselves — but it does not reproduce ceremonial procedure that isn't ours to give. Where a Nation hasn't published something, the answer is to listen to that Nation, not to substitute an outsider's description.

## Sources
- Downey, A. (2018). *The Creator's game: Lacrosse, identity, and Indigenous nationhood*. UBC Press. https://www.ubcpress.ca/the-creators-game
- Onondaga Nation. (n.d.). *Lacrosse*. https://www.onondaganation.org/culture/sports/lacrosse/
- Vennum, T. (1994). *American Indian lacrosse: Little brother of war*. Smithsonian Institution Press.`,
    },
    {
      slug: "the-stick-and-the-maker",
      title: "2 · The stick, the wood, and the maker",
      section: "1 · The Creator's Game: Indigenous origins",
      body: `Pick up a modern lacrosse stick and you are holding an aluminum or composite shaft with a molded plastic head, strung with synthetic mesh. Pick up a traditional Haudenosaunee stick and you are holding a single piece of **hickory**, steam-bent and cured for years, strung with leather and nylon — in the older sticks, deer sinew.

That is not a nostalgia point. It is a teaching point about what the object means.

The Onondaga Nation describes the wooden stick as carrying the game's meaning in its material: players hold "hand-made sticks made of hickory," and "the spirit of the tree connects the player to Mother Earth as they play for the Creator" (Onondaga Nation, n.d.). The traditional medicine game at Onondaga is played **only** with wooden sticks. A wooden stick is not equipment that happens to be old-fashioned; in the ceremonial game it is the correct and only stick.

### Why the stick maker matters

Making a traditional stick is a years-long craft: select and fell the hickory, split it, steam and bend the crook, clamp it, cure it — commonly for a year or more — then carve, drill, and string it. Onondaga's best-known maker, **Alf (Alfie) Jacques**, made wooden sticks for roughly half a century and spent decades teaching the history of the game to anyone who asked; when he died in 2023 he was described as "one of the greatest ambassadors the sport has ever seen" (Onondaga Nation, 2023).

Hold that next to a fact you will meet in Section 6: the modern sport's equipment industry is large, growing, and almost entirely plastic. Traditional stick-making is a living Indigenous craft that a mass-manufacturing sport nearly rendered invisible. If you are looking for a place where lacrosse's history and its economics collide, this is it — and it is one of the more interesting doors in the whole sport for someone who likes making things with their hands.

### What the modern stick is made of, and why

World Lacrosse's current rulebooks let you build a stick from a defined list of materials and then police the result. The men's field rules require, among other things, that the stick not be "constructed or strung or tampered with to confuse an opponent into believing that the ball is in the stick when it is not, or that the ball is not in the stick when it is" (World Lacrosse, 2025a, Rule 16.8). The NCAA women's rules list the legal materials plainly: "composite, metal alloy (shaft only), rubber, wood, gut, leather, fiberglass, nylon, plastic and any other synthetic material" — note that **wood is still legal**, sitting quietly in a list of synthetics (NCAA, 2026a, Rule 2, Sec. 2).

The other thing every code polices is **pocket depth** — how deep the mesh sags. A pocket that is too deep holds the ball when it should release, which is why officials do "stick checks," and why in NCAA women's lacrosse an official does a mandatory pocket-depth check on the goal-scorer's stick after a goal (NCAA, 2026b). Learn the phrase now; you will see it called on television.

:::reveal In the traditional Haudenosaunee medicine game, what is the stick made of — and is that kind of stick still legal in the modern game? ||| Hickory — a single piece of hand-shaped wood. The ceremonial medicine game at Onondaga is played only with wooden sticks. And yes: wood is still on the list of legal stick materials in the modern rulebooks (e.g., the NCAA women's rules list "wood" alongside composite, metal alloy, plastic and other synthetics).

## Sources
- National Collegiate Athletic Association. (2026a). *2026 and 2027 NCAA women's lacrosse rules*. https://ncaaorg.s3.amazonaws.com/championships/sports/lacrosse/rules/women/PRWLA_RulesBook.pdf
- National Collegiate Athletic Association. (2026b). *2025 NCAA women's lacrosse table reference sheet*. https://ncaaorg.s3.amazonaws.com/championships/sports/lacrosse/rules/women/2025PRWLA_NCAAWomensLacrosseTableReferenceSheet.pdf
- Onondaga Nation. (n.d.). *Lacrosse*. https://www.onondaganation.org/culture/sports/lacrosse/
- Onondaga Nation. (2023). *'National treasure of the Haudenosaunee' Alfie Jacques dies at 74*. https://www.onondaganation.org/news/2023/national-treasure-of-the-haudenosaunee-alfie-jacques-dies-at-74/
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.1). https://worldlacrosse.sport/wp-content/uploads/2026/01/WL_Mens-Rules_25-27_FINAL_1.1.pdf`,
      recallContent: [
        {
          prompt: "What does the Onondaga Nation call lacrosse, and why?",
          answer:
            "The Medicine Game — because it was given by the Creator, is played for the Creator, and is known to have healing power. Their name for it, Dehoñtjihgwa'és, roughly means \"they bump hips.\"",
        },
        {
          prompt: "Who is Allan Downey, and why does this course cite him specifically?",
          answer:
            "A Dakelh (Nak'azdli Whut'en) historian and author of The Creator's Game (2018) — an Indigenous scholar writing Indigenous lacrosse history, rather than an outsider narrating it.",
        },
      ],
    },
    {
      slug: "codification-and-exclusion",
      title: "3 · The name, the rulebook, and the ban",
      section: "1 · The Creator's Game: Indigenous origins",
      body: `Here is the part of lacrosse history that gets mangled most often. Slow down and get it right, because almost every version you'll read online contains at least one confidently-stated error.

### Where the name came from

French Jesuit missionaries in the St. Lawrence Valley encountered the game in the 1630s. **Jean de Brébeuf wrote about Huron (Wendat) people playing it in 1636**, and the French name attached from there (World Lacrosse, n.d.-a). *Crosse* is simply the ordinary French word for a stick or bat used in a ball game — so "la crosse" means something close to "the stick game." You will also see it claimed that Brébeuf named it after a bishop's crozier. That's a popular story; treat it as folk etymology unless you find a primary source, and notice how the more mundane explanation (French people used the French word for stick) needs no legend at all.

What matters more than the etymology: **the name is French, and the game is not.** The sport carries a colonizer's word for an Indigenous invention. That's worth sitting with for a second.

### Who wrote the rulebook

**William George Beers** was a Montreal dentist who joined the Montreal Lacrosse Club as a teenager in 1856, began writing down rules in **1860**, and drove the founding of the **National Lacrosse Association on September 26, 1867, in Kingston, Ontario**, where representatives of 29 clubs adopted his rules. He published *Lacrosse: The National Game of Canada* in 1869 (Dictionary of Canadian Biography, n.d.). He is genuinely why the modern sport has a fixed number of players, a standard ball, and a written rulebook.

He also wrote this. Beers studied Kahnawake and Akwesasne players, called them "the acknowledged masters of the game" — and then argued that the game needed European "rationalization," asserting that "the Indian never can play as scientifically as the best white players" (Dictionary of Canadian Biography, n.d.). Codification and contempt arrived in the same package. That is the honest sentence, and it is better than either the version that erases Beers or the version that makes him a hero.

### Two myths, killed

**Myth 1: "Lacrosse was declared Canada's national game by act of parliament in 1859."** It was not. Beers's claim that parliament had done so "became a myth both long and widely held" (Dictionary of Canadian Biography, n.d.). Canada did legislate national sports — in 1994, naming lacrosse the national **summer** sport and hockey the national winter sport — but that is 135 years later and a different act.

**Myth 2: "Indigenous players simply drifted away from the sport they invented."** They were **pushed out**. In 1880 the governing body reorganized as an amateur association, and Indigenous players were barred from championship competition — often on the reasoning that they were automatically "professionals," a rule that did the work of a race rule without saying so out loud. Excluded from the sport's official structure, Haudenosaunee communities kept playing and built their own competitions; it was **1990** before an Indigenous national team played in the world championship (Downey, 2018).

Read that pair of dates again: **1880 to 1990**. Well over a century in which the people who invented the game were locked out of its highest level, in a sport their own communities never stopped playing.

:::reveal Was lacrosse declared Canada's national game by act of parliament in 1859? ||| No. That claim originated with Beers and, as the Dictionary of Canadian Biography puts it, "became a myth both long and widely held." Canada did legislate national sports in 1994 — lacrosse as the national summer sport, hockey as the national winter sport — but no 1859 act ever existed.

## Sources
- Dictionary of Canadian Biography. (n.d.). *Beers, William George*. In *Dictionary of Canadian Biography* (Vol. 12). University of Toronto/Université Laval. https://www.biographi.ca/en/bio/beers_william_george_12E.html
- Downey, A. (2018). *The Creator's game: Lacrosse, identity, and Indigenous nationhood*. UBC Press. https://www.ubcpress.ca/the-creators-game
- World Lacrosse. (n.d.-a). *Origin & history*. https://worldlacrosse.sport/the-game/origin-history/`,
      recallContent: [
        {
          prompt: "Why does the traditional stick maker matter to the sport's story, not just its craft?",
          answer:
            "Because the wooden stick is the correct stick in the ceremonial game — it carries meaning, not just function — and because traditional stick-making is a living Indigenous craft that a plastic mass-manufacturing industry nearly rendered invisible.",
        },
        {
          prompt: "What is a 'stick check,' and what is it looking for?",
          answer:
            "An official's inspection of a player's stick during the game — most often checking pocket depth. A pocket that's too deep holds the ball when it should release. In NCAA women's lacrosse there's a mandatory pocket-depth check on the goal-scorer's stick after a goal.",
        },
      ],
    },
    {
      slug: "haudenosaunee-nationals",
      title: "4 · The Haudenosaunee Nationals: a nation with a team",
      section: "1 · The Creator's Game: Indigenous origins",
      body: `The **Haudenosaunee Nationals** are the national lacrosse teams of the Haudenosaunee Confederacy — the Mohawk, Oneida, Onondaga, Cayuga, Seneca, and Tuscarora nations. They are not a club, not a heritage side, and not a symbolic gesture. They are a national team that beats other national teams, and the thing that makes them unique in world sport is worth stating precisely:

**The Haudenosaunee are a full member of World Lacrosse — joining in 1985 — and are the only Indigenous nation admitted to international competition by a sport's world governing body under its own flag** (World Lacrosse, n.d.-b). The men's team has finished on the world championship podium repeatedly, and has ranked as high as third in the world.

They were the **Iroquois Nationals** until June 2022, when the organization dropped the exonym "Iroquois" — a name given by outsiders — for **Haudenosaunee**, "people of the longhouse," which is what the Confederacy calls itself.

### Sovereignty is the whole story

**2010.** Travelling to the world championship in Manchester on **Haudenosaunee passports** — documents Haudenosaunee people have used internationally since the 1970s — the team was refused visas by the United Kingdom. The U.S. Secretary of State issued a one-time waiver guaranteeing the players could re-enter the United States; the U.K. still would not admit them. Players born inside U.S. borders were offered U.S. passports and **refused them**, because carrying another nation's document was, to them, a denial of who they are. The team forfeited its games and did not play (CBC News, 2010).

Sit with the cost of that. A world championship, given up, over a document.

**2020–2022.** Organizers initially excluded the Nationals from **The World Games 2022** on the grounds that they did not represent a sovereign nation. **Ireland Lacrosse then voluntarily withdrew from the tournament and gave the Haudenosaunee its place** (World Lacrosse, 2020). Ireland's Sonny Campbell explained it about as well as it can be explained: "None of us would be going to Birmingham, Ala., in the first place if it wasn't for the Iroquois and giving us the gift of their medicine game" (as quoted in NPR, 2020).

That is what the sport's better instincts look like. Hold onto it, because in Section 5 you will meet the institution that has so far chosen differently.

### Why this belongs in a "how to play lacrosse" course

Because you cannot understand the modern sport's politics — Olympic eligibility, who gets to represent whom, whose flag flies — without it. And because the Nationals' own framing is the cleanest statement of the stakes anyone has produced. Claudia Jimerson, the organization's director of lacrosse operations, on the Olympic fight: **"The barrier is structural, not athletic"** (as quoted in Laskaris, 2026).

:::reveal What is unique about the Haudenosaunee Nationals' standing in world sport? ||| They are a full member of World Lacrosse — joining in 1985 — and are the only Indigenous nation admitted to international competition by a sport's world governing body, competing under their own flag. That recognition by the sport, without recognition as a UN nation-state, is exactly the tension at the center of the Olympic question.

## Sources
- CBC News. (2010). *Iroquois lacrosse team denied visas by U.K.* https://www.cbc.ca/news/world/iroquois-lacrosse-team-denied-visas-by-u-k-1.869901
- Laskaris, S. (2026, March 25). *Haudenosaunee Nationals lacrosse teams still pushing for IOC recognition*. Windspeaker. https://windspeaker.com/news/sports/haudenosaunee-nationals-lacrosse-teams-still-pushing-ioc-recognition
- NPR. (2020, October 1). *Ireland Lacrosse bows out of 2022 World Games so Iroquois Nationals can play*. https://www.npr.org/2020/10/01/917033527/ireland-lacrosse-bows-out-of-2022-world-games-so-iroquois-nationals-can-play
- World Lacrosse. (n.d.-b). *Haudenosaunee Nation* [Member profile]. https://worldlacrosse.sport/world-lacrosse-members/haudenosaunee-nation/
- World Lacrosse. (2020). *Ireland Lacrosse voluntarily withdraws from TWG 2022*. https://worldlacrosse.sport/ireland-lacrosse-voluntarily-withdraws-from-twg-2022/`,
      recallContent: [
        {
          prompt: "In 1880, what happened to Indigenous players in organized lacrosse — and how long did it last?",
          answer:
            "The governing body reorganized as an amateur association and barred Indigenous players from championship competition, often by classing them automatically as 'professionals.' It was 1990 before an Indigenous national team played in the world championship — 110 years.",
        },
        {
          prompt: "Where does the name 'lacrosse' come from?",
          answer:
            "From French. Jesuit missionaries encountered the game in the 1630s — Jean de Brébeuf wrote about Huron (Wendat) people playing it in 1636 — and 'crosse' is simply the French word for a stick used in a ball game. The name is French; the game is not.",
        },
      ],
    },
    {
      slug: "quiz-origins",
      title: "5 · Check your understanding: origins",
      section: "1 · The Creator's Game: Indigenous origins",
      body: "A graded quiz on Section 1. The bank is larger than any single attempt, so a retry draws a fresh set of questions. Passing score is 70%. Every answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "How does the Onondaga Nation itself describe lacrosse?",
            options: [
              "As a game invented in Montreal in the 1800s and later adopted by Native nations",
              "As sacred — a game given by the Creator, played for the Creator, known to have healing power, and therefore also called the Medicine Game",
              "As a purely recreational pastime with no cultural meaning",
              "As a European import that replaced older Haudenosaunee games",
            ],
            correctIndex: 1,
            explanation:
              "Onondaga Nation (n.d.): lacrosse \"is considered sacred… a game that was given by the Creator, to be played for the Creator,\" and \"has been known to have healing power. Because of this, it is also known as the Medicine Game.\"",
            sourceLessonSlug: "the-creators-game",
          },
          {
            prompt: "Why does this course refuse to describe ceremonial medicine-game practices in detail?",
            options: [
              "Because no written records of them exist anywhere",
              "Because they are ceremony, not content — the course teaches that they exist and whose they are, quotes what Nations publish themselves, and does not reproduce what isn't ours to give",
              "Because they are identical to the modern game, so describing them would be redundant",
              "Because they are legally classified information",
            ],
            correctIndex: 1,
            explanation:
              "The course's stated rule: where a Nation publishes something, quote the Nation; where it doesn't, don't substitute an outsider's description. Respect looks like a boundary, not a gap.",
            sourceLessonSlug: "the-creators-game",
          },
          {
            prompt: "What is the Onondaga name for lacrosse, and what does it roughly mean?",
            options: [
              "Dehoñtjihgwa'és — roughly, \"they bump hips\"",
              "Baggataway — roughly, \"the little war\"",
              "Tewaaraton — roughly, \"the Creator's stick\"",
              "La crosse — roughly, \"the bishop's staff\"",
            ],
            correctIndex: 0,
            explanation:
              "Onondaga Nation (n.d.) gives Dehoñtjihgwa'és, roughly \"they bump hips.\" (\"La crosse\" is the French name, not an Indigenous one.)",
            sourceLessonSlug: "the-creators-game",
          },
          {
            prompt: "Who is Allan Downey, and why does this course cite his book?",
            options: [
              "A Montreal dentist who wrote the first rulebook",
              "A Dakelh (Nak'azdli Whut'en) historian whose book The Creator's Game (2018) is Indigenous lacrosse history written by an Indigenous scholar",
              "The founder of World Lacrosse",
              "A Haudenosaunee stick maker from Onondaga",
            ],
            correctIndex: 1,
            explanation:
              "Downey is an Indigenous historian; the course deliberately cites Indigenous scholarship rather than relying only on white-authored histories about Native people.",
            sourceLessonSlug: "the-creators-game",
          },
          {
            prompt: "In the traditional Haudenosaunee medicine game, what is the stick made of?",
            options: [
              "Aluminum with a plastic head",
              "Hand-made hickory, strung traditionally — and the ceremonial game is played only with wooden sticks",
              "Carbon-fiber composite",
              "Any material, as long as the pocket is legal",
            ],
            correctIndex: 1,
            explanation:
              "Onondaga Nation (n.d.): players hold \"hand-made sticks made of hickory,\" and \"the spirit of the tree connects the player to Mother Earth as they play for the Creator.\"",
            sourceLessonSlug: "the-stick-and-the-maker",
          },
          {
            prompt: "Is a wooden stick still legal in the modern codified game?",
            options: [
              "No — wood was banned for safety reasons in the 1980s",
              "Yes — the NCAA women's rules list wood among the legal stick materials, alongside composite, metal alloy, plastic and other synthetics",
              "Only for goalkeepers",
              "Only in exhibition games",
            ],
            correctIndex: 1,
            explanation:
              "NCAA (2026a), Rule 2, Sec. 2 lists the legal materials: \"composite, metal alloy (shaft only), rubber, wood, gut, leather, fiberglass, nylon, plastic and any other synthetic material.\"",
            sourceLessonSlug: "the-stick-and-the-maker",
          },
          {
            prompt: "What are officials usually checking when they perform a \"stick check\"?",
            options: [
              "The player's grip strength",
              "Pocket depth — a pocket that's too deep holds the ball when it should release",
              "Whether the shaft is made of wood",
              "The color of the stick head",
            ],
            correctIndex: 1,
            explanation:
              "Pocket depth is the classic stick-check target; NCAA women's rules even require a mandatory pocket-depth check on the goal-scorer's stick after a goal.",
            sourceLessonSlug: "the-stick-and-the-maker",
          },
          {
            prompt: "Where does the word \"lacrosse\" come from?",
            options: [
              "From a Mohawk word meaning \"stick game\"",
              "From French — \"crosse\" is the ordinary French word for a stick used in a ball game; Jesuit missionaries encountered the game in the 1630s",
              "From a Latin liturgical term introduced in 1867",
              "From the town of La Crosse, Wisconsin",
            ],
            correctIndex: 1,
            explanation:
              "Jean de Brébeuf wrote about Huron (Wendat) people playing in 1636 and the French name stuck. The bishop's-crozier story is folk etymology; the plain explanation is that French speakers used the French word for stick.",
            sourceLessonSlug: "codification-and-exclusion",
          },
          {
            prompt: "What did William George Beers actually do?",
            options: [
              "Invented lacrosse in 1856",
              "Wrote down the first rules from 1860, drove the founding of the National Lacrosse Association on Sept. 26, 1867, and published a book on the game in 1869",
              "Founded the International Olympic Committee",
              "Led the Haudenosaunee Nationals to their first world championship medal",
            ],
            correctIndex: 1,
            explanation:
              "Beers codified an existing Indigenous game; he did not invent it. Representatives of 29 clubs adopted his rules at Kingston, Ontario, in 1867 (Dictionary of Canadian Biography, n.d.).",
            sourceLessonSlug: "codification-and-exclusion",
          },
          {
            prompt: "How should Beers be described honestly?",
            options: [
              "As a hero who saved the game from disappearing",
              "As a villain with no lasting influence",
              "As the codifier of the modern rulebook who also disparaged the Indigenous players he called \"the acknowledged masters of the game,\" claiming \"the Indian never can play as scientifically as the best white players\"",
              "As an Indigenous rulemaker from Kahnawake",
            ],
            correctIndex: 2,
            explanation:
              "Both things are documented in the same source (Dictionary of Canadian Biography, n.d.). Codification and contempt arrived in the same package.",
            sourceLessonSlug: "codification-and-exclusion",
          },
          {
            prompt: "Was lacrosse declared Canada's national game by an act of parliament in 1859?",
            options: [
              "Yes, on July 1, 1859",
              "No — that claim originated with Beers and, per the Dictionary of Canadian Biography, \"became a myth both long and widely held\"",
              "Yes, but the act was repealed in 1994",
              "Yes, and hockey was added in the same act",
            ],
            correctIndex: 1,
            explanation:
              "No such 1859 act existed. Canada did legislate national sports in 1994 — lacrosse as national summer sport, hockey as national winter sport.",
            sourceLessonSlug: "codification-and-exclusion",
          },
          {
            prompt: "What happened to Indigenous players in organized lacrosse in 1880?",
            options: [
              "They were given permanent championship berths",
              "They were barred from championship competition when the association reorganized as amateur-only, often by being classed automatically as \"professionals\"",
              "They voluntarily stopped competing",
              "They were required to use plastic sticks",
            ],
            correctIndex: 1,
            explanation:
              "An amateurism rule did the work of a race rule. Excluded communities kept playing and built their own competitions; it was 1990 before an Indigenous national team played in the world championship.",
            sourceLessonSlug: "codification-and-exclusion",
          },
          {
            prompt: "What is uniquely true of the Haudenosaunee Nationals in world sport?",
            options: [
              "They are the only team allowed to use wooden sticks",
              "They are a full member of World Lacrosse (joined 1985) — the only Indigenous nation admitted to international competition by a sport's world governing body, competing under their own flag",
              "They are a club team representing New York State",
              "They hold a permanent Olympic berth",
            ],
            correctIndex: 1,
            explanation:
              "World Lacrosse (n.d.-b) lists the Haudenosaunee Nation as a full member, joined 1985. That recognition by the sport — without UN nation-state status — is the crux of the Olympic dispute.",
            sourceLessonSlug: "haudenosaunee-nationals",
          },
          {
            prompt: "In 2010, why did the Iroquois Nationals miss the world championship in Manchester?",
            options: [
              "They failed to qualify",
              "The U.K. refused to issue visas on their Haudenosaunee passports; offered U.S. passports instead, the players refused, and the team forfeited",
              "The tournament was cancelled",
              "They were suspended by World Lacrosse",
            ],
            correctIndex: 1,
            explanation:
              "CBC News (2010). Players born inside U.S. borders declined U.S. passports because carrying another nation's document was a denial of who they are — and gave up a world championship over it.",
            sourceLessonSlug: "haudenosaunee-nationals",
          },
          {
            prompt: "How did the Haudenosaunee end up competing at The World Games 2022 after being excluded?",
            options: [
              "The IOC intervened",
              "Ireland Lacrosse voluntarily withdrew from the tournament and gave the Haudenosaunee its place",
              "They won a lawsuit",
              "The exclusion was a clerical error",
            ],
            correctIndex: 1,
            explanation:
              "World Lacrosse (2020). Ireland's Sonny Campbell: \"None of us would be going to Birmingham, Ala., in the first place if it wasn't for the Iroquois and giving us the gift of their medicine game.\"",
            sourceLessonSlug: "haudenosaunee-nationals",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════
    // SECTION 2 — How the game is played
    // ═══════════════════════════════════════════════════════════════════════
    {
      slug: "mens-field-lacrosse",
      title: "6 · Men's field lacrosse (the international rules)",
      section: "2 · How the game is played",
      body: `**Discipline: men's field lacrosse. Code: World Lacrosse.** Everything in this lesson is quoted from the *Rules of Men's Field Lacrosse 2025–2027* (World Lacrosse, 2025a). College rules differ slightly — that's Lesson 8.

### The shape of the game

The rulebook opens with one sentence that tells you almost everything: "Two teams of ten Players each play lacrosse. The two Teams attempt to score by causing the ball to enter the goal of its opponent, while preventing the other Team from securing the ball and scoring" (World Lacrosse, 2025a). The ball is "carried, thrown, or batted with the stick, rolled or kicked" — and "the hand may not touch the ball, except by a goalkeeper who is within their goal crease."

### The ten

"Ten Players shall constitute a full Team. A full Team shall comprise **1 goalkeeper, 3 defenders, 3 midfielders and 3 attackers**" (Rule 19.1). Each team must have a properly equipped goalkeeper on the field at all times.

| Position | Count | What the job actually is |
| --- | --- | --- |
| Goalkeeper | 1 | Stops shots; the only player who can touch the ball with a hand, and only inside the crease. Directs the defense — the loudest person on the field. |
| Defenders | 3 | Guard attackers, carry the long stick, and start the clear out of the defensive end. |
| Midfielders | 3 | Run both ends of the field. Take the face-off, ride, clear, and score. The most physically brutal job on the field. |
| Attackers | 3 | Live behind and beside the goal, create shots, and lead the ride when possession is lost. |

### The field, the clock, the shot clock

- **Field:** 91.4 m to 100 m long, 50 m to 60 m wide (Rule 1.1).
- **Goals:** two posts 1.83 m apart with a crossbar 1.83 m high — a six-foot square — set **12 m from each end line** (Rules 2.1, 2.2). That last number is the one that surprises people: the goal is *not* on the end line. There is real playing space **behind** the goal, and that space is where the modern attacking game lives.
- **Game:** "The match shall be divided into 4 periods of 15 minutes duration each" (Rule 29.1), with 2-minute breaks between quarters and a 10-minute half-time (Rule 29.3).
- **Shot clock:** 80 seconds, counting down from 80 to 0, with a shot clock at each end of the field (Rule 43.1). Get the ball, and you have 80 seconds to take a real shot or give it up.

### Offside — the rule that shapes every strategy

You may not simply send everyone forward. A team is offside if it has "more than six (6) Players… in their attack half of the field" or "more than seven (7) Players… in their defensive half" (Rule 65.1). Because 3 attackers must effectively stay in the attacking half and 3 defenders in the defensive half, the **midfielders are the ones who cross the line** — which is exactly why a midfielder's day is spent sprinting from one restraining line to the other.

This is also why lacrosse looks like basketball and hockey rather than soccer: it produces a **settled** 6-on-6 in the attacking half (3 attackers + 3 midfielders), a **defensive** 6-on-6, and a fast, chaotic **transition** in between when someone gets caught on the wrong side of the field.

### Equipment (men's, required)

"All Players are required to wear protective gloves, suitable boots or shoes, and a **protective helmet, designed for lacrosse, which is equipped with a facemask and a chinstrap**," plus a mouthguard (Rule 17.1). The goalkeeper must also wear a throat guard, chest protector, and box/cup.

That equipment list exists because **body checking is legal** in the men's game — which is the single biggest reason the men's and women's games are not the same sport with different jerseys. Next lesson.

:::reveal In World Lacrosse men's field, what are the ten positions, how long is the shot clock, and how far is the goal from the end line? ||| 1 goalkeeper, 3 defenders, 3 midfielders, 3 attackers (Rule 19.1). The shot clock is 80 seconds (Rule 43.1). The goal sits 12 m from the end line (Rule 2.2) — there is real playing space behind the goal, and the modern attacking game lives there.

## Sources
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.1). https://worldlacrosse.sport/wp-content/uploads/2026/01/WL_Mens-Rules_25-27_FINAL_1.1.pdf`,
      recallContent: [
        {
          prompt: "Who are the Haudenosaunee Nationals, and what did they give up in 2010?",
          answer:
            "The national lacrosse teams of the Haudenosaunee Confederacy, a full member of World Lacrosse since 1985. In 2010 they forfeited the world championship rather than travel on U.S. passports after the U.K. refused visas on their Haudenosaunee passports.",
        },
        {
          prompt: "How did Claudia Jimerson of the Haudenosaunee Nationals sum up the Olympic fight?",
          answer: "\"The barrier is structural, not athletic.\"",
        },
      ],
    },
    {
      slug: "womens-field-lacrosse",
      title: "7 · Women's field lacrosse (the international rules)",
      section: "2 · How the game is played",
      body: `**Discipline: women's field lacrosse. Code: World Lacrosse.** Everything here is quoted from the *2025–2026 Women's Field Lacrosse Rules* (World Lacrosse, 2025b). This is a **different game** from the men's — not a softer version of it. Different team size, different contact rules, different equipment, different fouls, different geometry.

### Start with the number everyone gets wrong

**The international women's field game is played TEN a side.** "Any number of players up to ten (10) are permitted on the field at the same time. One of the 10 players on each team may be a goalkeeper" (Rule 5.A.3). Rosters max at 22 players for World Lacrosse events (Rule 5.A.2).

You will read on a hundred websites that women's lacrosse is twelve a side. That is the **NCAA/U.S. college** number, and it is also correct — for that code. The two facts coexist. This is the first and best example of why "which discipline, which code?" has to be the first question you ask about any lacrosse rule. Lesson 8 is the side-by-side.

### The field and the clock

- **Field:** 91.4 m to 100 m long, 50 m to 60 m wide; World Lacrosse events use 100 m × 50–60 m (Rules 1.A.2, 1.A.3).
- **Game:** "The duration of the game will be four 15-minute quarters" (Rule 12.A.1).
- **Shot clock:** 80 seconds (Rules 24.A.1, 24.A.2) — the same as the men's international game.
- **Restraining line:** "A team must not… have more than six (6) players in their Attacking Area of the field" (Rule 18.A.2) — the women's equivalent of offside, and it does the same strategic work: it forces a settled attack and creates transition.

### Contact: the actual difference

There is **no body checking** in the women's rulebook. It isn't listed as a foul with a penalty — it isn't there as a legal action at all. Instead the rules build a game around **space**:

- **Illegal Contact (Rule 20.A.12):** "A player must not displace another player. They must not detain, hold…" — and a defender "must allow the opponent time and/or space to stop and/or change direction to avoid contact."
- **Charge (Rule 20.A.3):** an attacking player using body or stick to make body contact with a defender who is in a legal defensive position.
- **Shooting Space (Rule 20.A.19):** the signature rule of the women's game, and the one worth memorizing. "**A defender must not block or guard the goal, with any part of their body for the purpose of obstructing the shooting lane… Obstructing this space denies the attacking team the opportunity to shoot safely.**" It's in effect only when the attacking team has possession inside the 15 m marking area.

Read that last one again and notice **why** it exists: in a game where players are not armored, a defender standing in the shooting lane is a body about to be hit by a hard rubber ball at speed. The women's game keeps the lane clear on purpose. It's a rule about physics, not politeness.

- **Three seconds (Rule 20.A.20):** a defender must not stay inside the 11 m fan for more than three seconds unless marking an opponent within a stick's length (about 1.5 m). No parking in front of the goal.

### Equipment (women's, World Lacrosse)

- **Mouthguard: required** for every player including the goalkeeper (Rule 6.A.5).
- **Eye guards: permitted, not required** at this level — "Field players may wear close-fitting gloves, nose guards, or eye guards" (Rule 6.A.2). *(Note carefully: in **NCAA** women's lacrosse eye protection is **mandatory** — Lesson 8. Different code, different answer.)*
- **Headgear and face masks: not permitted for field players** — "Field players are not permitted to wear headgear or face masks" (Rule 6.A.2). Read that twice. It is not that helmets are optional; the international rulebook **prohibits** field players from wearing them.
- **Goalkeeper:** must wear a chest/body pad, a helmet with a face mask, and a throat protector (Rule 6.A.20).

### The draw

Women's lacrosse doesn't start with a face-off. It starts with a **draw**: two opponents stand at the center circle, sticks held back-to-back **above hip level**, parallel to and above the center line, with the ball between them; on the whistle they push up and the ball flies (Rule 13.A.5). It's a vertical contest, not a scramble on the ground — a completely different skill from the men's face-off, and one of the most valuable specialist skills in the game.

:::reveal In the World Lacrosse women's rules, how many players are on the field, and what does the Shooting Space rule forbid? ||| Up to ten, one of whom may be the goalkeeper (Rule 5.A.3). Shooting Space (Rule 20.A.19) forbids a defender from blocking or guarding the goal with any part of their body to obstruct the shooting lane — because it "denies the attacking team the opportunity to shoot safely." In a game without body armor, keeping the lane clear is a safety rule.

## Sources
- World Lacrosse. (2025b). *2025–2026 women's field lacrosse rules* (v1.1). https://worldlacrosse.sport/wp-content/uploads/2025/03/2025_2026-WF-Rulebook_FINALv1.1-1.pdf`,
      recallContent: [
        {
          prompt: "In World Lacrosse men's field, what is the offside rule?",
          answer:
            "A team may not have more than six players in its attack half or more than seven in its defensive half (Rule 65.1). It's why midfielders do all the running — and why the game settles into 6-on-6 at each end.",
        },
        {
          prompt: "Why is there space behind the goal in field lacrosse?",
          answer:
            "Because the goal sits 12 m from the end line (WL men's Rule 2.2), not on it. That space behind the cage is where much of the modern attacking game is run from.",
        },
      ],
    },
    {
      slug: "mens-vs-womens",
      title: "8 · Don't blur them: men's vs. women's, World Lacrosse vs. NCAA",
      section: "2 · How the game is played",
      body: `Two questions must be answered before **any** lacrosse rule means anything:

1. **Which discipline?** Men's field, women's field, box, or Sixes.
2. **Which code?** World Lacrosse (international), NCAA (U.S. college), a national body like USA Lacrosse, a state high-school association, or a pro league — each writes its own book.

Skip either question and you will confidently state something false. Here is the side-by-side, every cell sourced.

### Field lacrosse: the four-way comparison

| | **WL men's** | **WL women's** | **NCAA men's** | **NCAA women's** |
| --- | --- | --- | --- | --- |
| Players on field | 10 | **10** | 10 | **12** |
| Field | 91.4–100 m × 50–60 m | 91.4–100 m × 50–60 m (100 m × 50–60 m at WL events) | 110 yd × 60 yd | optimal 120 yd × 65 yd, goals 100 yd apart |
| Game length | 4 × 15 min | 4 × 15 min | 4 × 15 min | 4 × 15 min |
| Shot / possession clock | 80 s | 80 s | 80 s | **90 s** |
| Body checking | Legal (regulated) | **Not part of the game** | Legal (regulated) | **Not part of the game** |
| Field-player helmet | **Required** | **Prohibited** | **Required** | Not required (headgear permitted) |
| Field-player eye protection | (helmet/facemask) | **Permitted, not required** | (helmet/facemask) | **Required** |
| Restart at center | Face-off | Draw | Face-off | Draw |

Sources by cell: World Lacrosse (2025a) Rules 19.1, 1.1, 29.1, 43.1, 17.1; World Lacrosse (2025b) Rules 5.A.3, 1.A.2–1.A.3, 12.A.1, 24.A.1, 6.A.2, 13.A.5; NCAA (2025) Rule 1 Sec. 1–2, Rule 3 Sec. 1; NCAA (2026a) Rule 3 Sec. 1, Rule 2 Sec. 18.

### The three that trip everyone

**1. "Women's lacrosse is 12-a-side."** Half true. NCAA women's: "Twelve players constitute a full team… One of the 12 players on each team may be a goalkeeper" (NCAA, 2026a, Rule 3, Sec. 1). World Lacrosse women's: ten (Rule 5.A.3). Both are correct in their own code. Say which one you mean.

**2. "Women don't wear helmets because the game is safer."** Wrong causality, and it gets the rule backwards. Under World Lacrosse women's rules field players are **not permitted** to wear headgear or face masks (Rule 6.A.2). The reasoning that produced the modern women's game runs the other way: because players are *not* armored, the rules remove the actions that armor exists to survive — no body checking, no defenders in the shooting lane (Rule 20.A.19), no crowding the goal (Rule 20.A.20). And under **NCAA** women's rules, **eye protection is mandatory**: "All field players shall wear eye protection properly" (NCAA, 2026a, Rule 2, Sec. 18). Different code, different answer, and neither is "the girls' version."

**3. "Same sport, different rules."** They are related sports with a shared ancestor, the way rugby union and rugby league are related. A men's defender's core skill — a legal body check (World Lacrosse, 2025a, Rule 70) — does not exist in the women's game. A women's defender's core skill — playing legal defense without entering shooting space — has no men's equivalent. **Coach them separately, watch them separately, and describe them separately.**

### How to check any rule yourself, in 90 seconds

1. Name the discipline and the code.
2. Go to the governing body's own rules page — **worldlacrosse.sport/the-game/playing-rules/** for international, **ncaapublications.com** for college.
3. Open the current rulebook PDF and search for the term.
4. Note the **edition year**. World Lacrosse men's field is currently a 2025–2027 book; women's field is a 2025–2026 book; Sixes and box are 2026–2028 books. They do not all turn over on the same schedule, which is exactly how a stale rule ends up in someone's blog post.

:::reveal How many players are on a women's lacrosse field? ||| It depends on the code — and that's the point. World Lacrosse women's field: ten (Rule 5.A.3). NCAA women's: twelve (Rule 1). Both are correct. Any source that gives you one number without naming the code is a source that hasn't checked.

## Sources
- National Collegiate Athletic Association. (2025). *2025 and 2026 NCAA men's lacrosse rules and interpretations*. https://ncaaorg.s3.amazonaws.com/championships/sports/lacrosse/rules/men/PRMLA_RulesBook.pdf
- National Collegiate Athletic Association. (2026a). *2026 and 2027 NCAA women's lacrosse rules*. https://ncaaorg.s3.amazonaws.com/championships/sports/lacrosse/rules/women/PRWLA_RulesBook.pdf
- World Lacrosse. (n.d.-c). *Playing rules*. https://worldlacrosse.sport/the-game/playing-rules/
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.1). https://worldlacrosse.sport/wp-content/uploads/2026/01/WL_Mens-Rules_25-27_FINAL_1.1.pdf
- World Lacrosse. (2025b). *2025–2026 women's field lacrosse rules* (v1.1). https://worldlacrosse.sport/wp-content/uploads/2025/03/2025_2026-WF-Rulebook_FINALv1.1-1.pdf`,
      recallContent: [
        {
          prompt: "In World Lacrosse women's field, are field players allowed to wear helmets?",
          answer:
            "No — Rule 6.A.2 states field players are NOT permitted to wear headgear or face masks. Eye guards are permitted but not required at that level. (In NCAA women's lacrosse, eye protection IS mandatory.)",
        },
        {
          prompt: "How does a women's lacrosse game restart at the center?",
          answer:
            "With a draw: two players hold their sticks back-to-back above hip level, parallel to and above the center line with the ball between them, and push up on the whistle (WL women's Rule 13.A.5). Not a face-off.",
        },
      ],
    },
    {
      slug: "box-and-sixes",
      title: "9 · Box and Sixes: the other two lacrosses",
      section: "2 · How the game is played",
      body: `Field lacrosse is not the only lacrosse. Two more disciplines matter, and one of them is the game you will watch at the **Olympics**.

### Box lacrosse

**Box** is lacrosse played indoors, in a rink — historically a drained hockey arena — with boards, hard walls, and a much smaller goal. "Box Lacrosse is played by two teams of **six** Players each" (World Lacrosse, 2026a). It is the dominant form in much of Canada and among many Haudenosaunee players, and it is the game of the professional **National Lacrosse League** (Section 5).

Why it matters even if you never play it: box is where a huge amount of the field game's skill comes from. Confined space, constant contact off the walls, a tiny goal, and a shot clock produce players who can finish in traffic and defend without space. Many of the best field attackers in the world grew up playing box in the winter.

### Sixes — the Olympic game

**Sixes** is World Lacrosse's newest discipline, built deliberately to be cheaper, faster, more global, and Olympic-viable. **It is the discipline that will be played at the Los Angeles 2028 Olympic Games.** From the *2026–2028 Sixes Lacrosse Official Playing Rules* (World Lacrosse, 2026b):

- **Six players a side:** "A full team shall be composed of six (6) Players on the field, which includes five (5) field Players and one [goalkeeper]."
- **Field:** rectangular, **70 m long × 36 m wide** — much smaller than a field-lacrosse pitch.
- **Game:** "four (4) quarters of eight (8) minutes each" — a 32-minute game.
- **Shot clock: 30 seconds.** Two visible 30-second shot clocks are required.
- **Restart after a goal:** no face-off. "Following any goal, the Goalkeeper must retrieve the ball from the goal and ready it for play," with a five-second count. Possession simply goes to the other team and the game restarts instantly.
- **One rulebook, two disciplines:** "Generally, the Official Rules of Sixes Lacrosse apply equally to women's and men's games. Where a rule is specific to a discipline, it is denoted with a 'W' (for Women) or 'M' (for Men) as part of the numbering."

Those W/M markers are where the men's and women's games still diverge, and equipment is the clearest case. **Sixes men's (Rule 2.4.1M):** players are required to wear protective gloves and a lacrosse helmet with facemask and chinstrap. **Sixes women's (Rule 2.4.1W):** "Close-fitting gloves, nose guards, and eyewear **may** be worn by any field Player," and "all eyewear must meet applicable ASTM safety standard or a comparable standard." (The rulebook names no specific ASTM number here — so neither do we. If you see a course or a blog quote a precise standard code for this rule, ask them where they got it.) Same discipline, same field, same clock — different protective rules, because the contact rules differ.

### Why Sixes exists

Follow the money and the geography. Field lacrosse needs a big pitch, a big roster, and expensive specialist equipment — including long sticks and face-off specialists — which quietly favors countries that already have deep lacrosse infrastructure. Sixes strips that out: a small field, six players, a 30-second clock, no face-off after goals, no positional specialists. A country with one pitch and twelve committed players can field a competitive Sixes team. That is what a governing body does when it wants a sport to be genuinely global — and it is exactly what the International Olympic Committee looks for.

:::reveal What is the Olympic lacrosse discipline, and what are its four defining numbers? ||| Sixes. Six players a side (five field players + a goalkeeper), a 70 m × 36 m field, four 8-minute quarters, and a 30-second shot clock (World Lacrosse, 2026b). After a goal there is no face-off — the goalkeeper restarts play.

## Sources
- World Lacrosse. (2026a). *2026–2028 box lacrosse official playing rules* (Ver. 2.0, May 2026). https://worldlacrosse.sport/wp-content/uploads/2026/05/26-28-Box-Rule-Book_v2_0526.pdf
- World Lacrosse. (2026b). *2026–2028 Sixes lacrosse official playing rules* (Ver. 2.0, May 2026). https://worldlacrosse.sport/wp-content/uploads/2026/05/26-28-Sixes-Rule-Book_v2_0526.pdf`,
      recallContent: [
        {
          prompt: "Name three rules that differ between NCAA men's and NCAA women's lacrosse.",
          answer:
            "Any three of: team size (10 vs 12); shot/possession clock (80 s vs 90 s); body checking (legal vs not part of the game); required equipment (helmet vs mandatory eye protection); restart (face-off vs draw).",
        },
        {
          prompt: "Why is it wrong to say \"women don't wear helmets because their game is safer\"?",
          answer:
            "It reverses the logic and misstates the rule. Under World Lacrosse women's rules, field players are PROHIBITED from wearing headgear. Because players aren't armored, the rules remove the actions armor exists to survive — no body checking, no defenders in the shooting lane, no crowding the goal.",
        },
      ],
    },
    {
      slug: "quiz-how-its-played",
      title: "10 · Check your understanding: how it's played",
      section: "2 · How the game is played",
      body: "A graded quiz on Section 2. Every rule in this quiz is quoted from a current rulebook — if you disagree with an answer, go read the rule. Passing score is 70%.",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "In World Lacrosse men's field lacrosse, what is a full team?",
            options: [
              "12 players: 1 goalkeeper, 4 defenders, 4 midfielders, 3 attackers",
              "10 players: 1 goalkeeper, 3 defenders, 3 midfielders, 3 attackers",
              "6 players: 1 goalkeeper and 5 field players",
              "10 players with no fixed position requirements",
            ],
            correctIndex: 1,
            explanation: "World Lacrosse (2025a), Rule 19.1, quoted exactly.",
            sourceLessonSlug: "mens-field-lacrosse",
          },
          {
            prompt: "How long is the shot clock in World Lacrosse men's field lacrosse?",
            options: ["30 seconds", "60 seconds", "80 seconds", "There is no shot clock"],
            correctIndex: 2,
            explanation: "Rule 43.1: shot clocks set and reset to 80 seconds, counting down from 80 to 0.",
            sourceLessonSlug: "mens-field-lacrosse",
          },
          {
            prompt: "Why is there playable space behind the goal in field lacrosse?",
            options: [
              "There isn't — the goal is on the end line",
              "Because the goal is set 12 m from the end line, leaving real playing space behind the cage",
              "Because the goalkeeper may leave the field",
              "Because the end line is only marked for face-offs",
            ],
            correctIndex: 1,
            explanation:
              "World Lacrosse (2025a), Rule 2.2. That space behind the goal is where much of the modern attacking game is run from.",
            sourceLessonSlug: "mens-field-lacrosse",
          },
          {
            prompt: "What does the men's offside rule (WL Rule 65.1) require?",
            options: [
              "No more than six players in the attack half and no more than seven in the defensive half",
              "All ten players must stay in their own half at all times",
              "Only the goalkeeper may cross the center line",
              "Offside applies only during face-offs",
            ],
            correctIndex: 0,
            explanation:
              "It's why midfielders run constantly, and why the game settles into 6-on-6 at each end with fast transition in between.",
            sourceLessonSlug: "mens-field-lacrosse",
          },
          {
            prompt: "How many players are on the field per team under the World Lacrosse WOMEN'S field rules?",
            options: ["12", "11", "10", "6"],
            correctIndex: 2,
            explanation:
              "Rule 5.A.3: \"Any number of players up to ten (10) are permitted on the field at the same time. One of the 10 players on each team may be a goalkeeper.\" NCAA women's is 12 — different code.",
            sourceLessonSlug: "womens-field-lacrosse",
          },
          {
            prompt: "What does the Shooting Space rule (WL women's Rule 20.A.19) forbid?",
            options: [
              "An attacker shooting from outside the 15 m marking area",
              "A defender blocking or guarding the goal with any part of their body to obstruct the shooting lane",
              "A goalkeeper leaving the goal circle",
              "Passing backward across the restraining line",
            ],
            correctIndex: 1,
            explanation:
              "The rule exists because \"obstructing this space denies the attacking team the opportunity to shoot safely\" — in an unarmored game, a body in the shooting lane is a body about to be hit by a hard ball.",
            sourceLessonSlug: "womens-field-lacrosse",
          },
          {
            prompt: "Under World Lacrosse women's field rules, may a field player wear a helmet?",
            options: [
              "Yes, and it is required",
              "Yes, it is optional",
              "No — field players are not permitted to wear headgear or face masks",
              "Only the three attackers may",
            ],
            correctIndex: 2,
            explanation:
              "Rule 6.A.2. Eye guards are permitted; headgear and face masks are prohibited for field players. Goalkeepers, by contrast, must wear a helmet, throat protector and chest pad (6.A.20).",
            sourceLessonSlug: "womens-field-lacrosse",
          },
          {
            prompt: "How does a women's lacrosse game restart at the center of the field?",
            options: [
              "A face-off, with both players crouched over the ball",
              "A draw — sticks held back-to-back above hip level with the ball between them, pushed up on the whistle",
              "A goalkeeper throw",
              "A coin toss for possession",
            ],
            correctIndex: 1,
            explanation: "World Lacrosse (2025b), Rule 13.A.5. It's a vertical contest, a completely different skill from the men's face-off.",
            sourceLessonSlug: "womens-field-lacrosse",
          },
          {
            prompt: "Someone tells you \"women's lacrosse is 12-a-side.\" What's the correct response?",
            options: [
              "Agree — that's the universal number",
              "Correct them — it's always 10",
              "Ask which code: NCAA women's is 12, World Lacrosse women's is 10, and both are correct in their own rulebook",
              "It doesn't matter; the number varies game to game",
            ],
            correctIndex: 2,
            explanation:
              "Every lacrosse rule needs two qualifiers before it means anything: which discipline, and which code.",
            sourceLessonSlug: "mens-vs-womens",
          },
          {
            prompt: "What is the possession/shot clock in NCAA WOMEN'S lacrosse?",
            options: ["30 seconds", "60 seconds", "80 seconds", "90 seconds"],
            correctIndex: 3,
            explanation:
              "NCAA women's uses a 90-second possession clock (NCAA, 2026a). World Lacrosse — both men's and women's — uses 80 seconds. Same sport, different code, different number.",
            sourceLessonSlug: "mens-vs-womens",
          },
          {
            prompt: "In NCAA women's lacrosse, what does Rule 2, Section 18 require of field players?",
            options: [
              "Helmets with face masks",
              "Eye protection, worn properly, meeting the current ASTM standard",
              "Nothing beyond a mouthguard",
              "Shoulder pads and arm pads",
            ],
            correctIndex: 1,
            explanation:
              "\"All field players shall wear eye protection properly.\" This is mandatory in NCAA women's lacrosse but only permitted (not required) under World Lacrosse women's rules — a perfect example of why you name the code.",
            sourceLessonSlug: "mens-vs-womens",
          },
          {
            prompt: "How should you think about the relationship between men's and women's lacrosse?",
            options: [
              "The same game, with women's being a non-contact version",
              "Related sports with a shared ancestor — like rugby union and rugby league. Core skills in one (a legal body check; playing defense without entering shooting space) have no equivalent in the other",
              "Identical rules with different equipment",
              "Two names for one sport",
            ],
            correctIndex: 1,
            explanation:
              "Coach them separately, watch them separately, describe them separately. Blurring them is how courses and commentators get lacrosse wrong.",
            sourceLessonSlug: "mens-vs-womens",
          },
          {
            prompt: "Which lacrosse discipline will be played at the Los Angeles 2028 Olympic Games?",
            options: ["Men's field lacrosse", "Women's field lacrosse", "Box lacrosse", "Sixes"],
            correctIndex: 3,
            explanation:
              "Sixes — World Lacrosse's smaller, faster, cheaper discipline, designed in part to make the sport globally viable and Olympic-viable.",
            sourceLessonSlug: "box-and-sixes",
          },
          {
            prompt: "What are the defining numbers of Sixes lacrosse?",
            options: [
              "10 players, 100 m field, four 15-minute quarters, 80-second shot clock",
              "6 players (5 field + goalkeeper), 70 m × 36 m field, four 8-minute quarters, 30-second shot clock",
              "6 players, indoor rink, two 30-minute halves, no shot clock",
              "12 players, 120-yard field, four 15-minute quarters, 90-second clock",
            ],
            correctIndex: 1,
            explanation: "World Lacrosse (2026b). And after a goal there's no face-off — the goalkeeper restarts play.",
            sourceLessonSlug: "box-and-sixes",
          },
          {
            prompt: "Why did World Lacrosse create the Sixes discipline?",
            options: [
              "To make the game more dangerous and therefore more watchable",
              "To lower cost and barriers — a small field, six players, no positional specialists — so more countries can field a competitive team, which is what a sport needs to be Olympic-viable",
              "To replace box lacrosse in Canada",
              "Because field lacrosse was banned internationally",
            ],
            correctIndex: 1,
            explanation:
              "Field lacrosse's big pitch, big roster and specialist equipment quietly favor countries with deep existing infrastructure. Sixes strips that out.",
            sourceLessonSlug: "box-and-sixes",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Skills & strategy
    // ═══════════════════════════════════════════════════════════════════════
    {
      slug: "the-five-fundamentals",
      title: "11 · The five fundamentals",
      section: "3 · Skills & strategy",
      body: `Everything in lacrosse is built from five things. Nobody outgrows them. The professionals you'll watch in Section 5 are simply people who do these five things faster and under more pressure than you can.

**1. Cradle.** Carrying the ball in the stick while you run. The head of the stick rocks in a small arc so the ball stays pinned in the pocket by its own momentum — the same reason water stays in a bucket you swing overhead. Beginners cradle too hard and too wide; the goal is the *smallest* motion that keeps the ball secure while you sprint, cut, and get checked.

**2. Catch.** The single most under-practiced skill. You do not stab at the ball — you **give with it**, drawing the stick back slightly as the ball arrives so the pocket absorbs the impact instead of bouncing it out. A stiff stick spits the ball out. Soft hands keep it.

**3. Pass.** Top hand pushes, bottom hand pulls — it's a lever, not a throw. The stick does the work. Two rules to internalize early: pass to where your teammate is **going**, not where they are; and pass to the **stick side**, away from the defender.

**4. Shoot.** Same mechanics as a pass, plus your whole body — hips and shoulders rotate through, weight transfers front foot. Accuracy beats power at every level below professional, and it beats power at professional level more often than highlight reels suggest. **Pick a corner.** Goalkeepers save the ball that's aimed at their chest.

**5. Ground balls.** The one that actually decides games. A loose ball on the turf is a possession nobody owns yet. You get low — knees bent, back of the stick head almost flat on the ground — you **scoop through** the ball rather than at it, and you protect it immediately. There's a coaching cliché that ground balls win games. It is a cliché because it keeps being true: possession is the whole currency of a sport with an 80-second shot clock (World Lacrosse, 2025a, Rule 43.1). Every ground ball you win is up to 80 seconds you take from the other team.

### How to actually get better, without a team

- **Wall ball.** Find a brick wall. Throw and catch, right hand, left hand, in patterns, for twenty minutes a day. This is the closest thing lacrosse has to a cheat code, and it costs nothing but a ball. Every good player you will ever meet did thousands of hours of it.
- **Your weak hand.** A one-handed player is a solved problem for any competent defender: they simply take away your strong side and you disappear. Spend at least half your reps on the hand you hate.
- **Ground balls alone.** Roll the ball out, sprint, scoop, protect, sprint back. It's boring. Do it anyway.

:::reveal Which of the five fundamentals is the one coaches say wins games, and why is that literally true in a shot-clock sport? ||| Ground balls. A loose ball is a possession nobody owns; winning it hands you the ball and takes it from the other team. In a sport with an 80-second shot clock, every ground ball you win is up to 80 seconds of possession you take away from your opponent.

## Sources
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.1). https://worldlacrosse.sport/wp-content/uploads/2026/01/WL_Mens-Rules_25-27_FINAL_1.1.pdf`,
      recallContent: [
        {
          prompt: "Name the four lacrosse disciplines.",
          answer: "Men's field, women's field, box (indoor, six a side), and Sixes (the Olympic discipline).",
        },
        {
          prompt: "In box lacrosse, how many players per team are on the floor?",
          answer: "Six (World Lacrosse box rules). It's the game of the professional National Lacrosse League.",
        },
      ],
    },
    {
      slug: "offense",
      title: "12 · Offense: creating a shot that isn't a prayer",
      section: "3 · Skills & strategy",
      body: `A settled offense in lacrosse is a puzzle: six attackers (three attackers + three midfielders, because of the offside rule) against six defenders, one of whom is a goalkeeper, on an 80-second clock. Almost nothing scores by accident. Here's how good teams create a real shot.

### The three ways to create an advantage

**1. Dodge.** One-on-one, beat your defender. Split dodge, face dodge, roll dodge, bull dodge — the names describe the footwork, but the principle is identical in all of them: **make the defender commit to one direction, then go the other.** A dodge that beats a defender forces someone else to help, and the instant someone helps, a teammate is open. You are not dodging to score. You are dodging to make the defense move.

**2. Off-ball movement.** The overwhelming majority of what happens in a good offense is happening away from the ball: cutting, sealing, replacing, clearing space so that when the ball arrives, the shot is already there. Bad offenses stand and watch the ball carrier. Watch a professional game with your eyes deliberately **off** the ball for one possession — you'll see the actual game.

**3. Picks and screens** *(men's field and box).* Set a legal screen on a teammate's defender to free them. Note the "legal" — an illegal pick is a minor foul in the World Lacrosse men's code (2025a, Rule 54), and moving into a defender who hasn't been given time and space is the classic way to turn your own advantage into a turnover.

### The space behind the goal (X)

Because the goal sits **12 m from the end line** (World Lacrosse, 2025a, Rule 2.2), there's a whole zone behind it — traditionally called **X**. It's the best real estate on the field:

- A defender guarding you at X has their back to their own goal and can't see the field.
- You can attack the goal from either side.
- Your goalkeeper's counterpart can't easily track you.

The classic offensive engine in men's field lacrosse is a dodge from X toward the goal-line-extended, forcing a slide, and moving the ball to the open man. Learn to see it, and half of what looks like chaos on television resolves into a pattern.

### The women's free position

In the women's game, a major foul by the defense inside the critical scoring area gives the attacker a **free position** — a clean, protected setup with the defender moved off. That is why the fouls in Section 4 are worth learning even as an attacker: knowing which defensive actions are fouls tells you where to attack. A defender who's been sliding into shooting space (World Lacrosse, 2025b, Rule 20.A.19) is a defender you can draw a whistle from all game long.

### The one habit that separates good offenses from bad ones

**Move the ball faster than a defender can rotate.** Defenses beat individuals; they lose to ball movement. A skip pass that jumps a rotating defense is worth more than any highlight-reel dodge, and it's the skill that scales when the athletes across from you are bigger and faster than you.

:::reveal What is the real purpose of a dodge, and what is "X"? ||| A dodge's purpose isn't to score — it's to force the defense to move. When your defender is beaten, someone must slide to help, and the moment they do, a teammate is open. "X" is the space directly behind the goal (playable because the goal sits 12 m off the end line), the best attacking real estate on the field: your defender's back is to their own goal and you can attack from either side.

## Sources
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.1). https://worldlacrosse.sport/wp-content/uploads/2026/01/WL_Mens-Rules_25-27_FINAL_1.1.pdf
- World Lacrosse. (2025b). *2025–2026 women's field lacrosse rules* (v1.1). https://worldlacrosse.sport/wp-content/uploads/2025/03/2025_2026-WF-Rulebook_FINALv1.1-1.pdf`,
      recallContent: [
        {
          prompt: "What are the five fundamentals of lacrosse?",
          answer: "Cradle, catch, pass, shoot, and ground balls.",
        },
        {
          prompt: "What is \"wall ball\" and why does every good player do it?",
          answer:
            "Throwing and catching against a brick wall, both hands, in patterns, for extended sessions. It's free, it needs no team, and it's the fastest way to build the stick skills the whole sport rests on.",
        },
      ],
    },
    {
      slug: "defense",
      title: "13 · Defense: taking away time and space",
      section: "3 · Skills & strategy",
      body: `Defense in lacrosse is not about hitting people. It is about **taking away time and space** until the shot clock kills the possession for you. In the World Lacrosse men's game that clock is 80 seconds (2025a, Rule 43.1); in NCAA women's it's 90 (NCAA, 2026a). A defense that concedes nothing for a minute has already half-won the possession.

### On-ball defense (both games)

Stay between your player and the goal. Move your feet, not your body — a defender who lunges is a defender who is beaten. Keep your stick in the passing/shooting lane. Force the ball carrier where **you** want them to go (usually away from the middle of the field, toward the sideline, toward their weak hand), not where they want to go.

**Men's:** you may body-check, but the rules are strict. World Lacrosse (2025a, Rule 70) makes it illegal to body-check an opponent who is not in possession or within 2.74 m of a loose ball or a ball in flight; illegal to check from the rear, below the hips, or at or above the neck; illegal to check a player who is on the ground or on one or both knees; and illegal to block with the head ("spearing"). Stick checks are likewise regulated: swinging your stick "in a dangerous or reckless way" is slashing (Rule 71.1), and striking an opponent's helmet or neck with the stick is illegal (Rule 71.2). **Legal contact is a narrow lane, and the penalty for leaving it is your team playing a man down.**

**Women's:** there is no body-checking lane at all. Legal defense means playing the stick and the space while never displacing your opponent (World Lacrosse, 2025b, Rule 20.A.12), never obstructing shooting space (Rule 20.A.19), and never parking in the 11 m fan for more than three seconds unless you're marking someone within a stick's length (Rule 20.A.20). It is a game of angles and discipline, and elite women's defenders are among the most technically precise athletes in the sport.

### Team defense: the slide

When your teammate gets beaten — and they will — someone has to **slide**: leave their own player to stop the ball. The instant they do, the offense has a free player somewhere, so the rest of the defense must **rotate** to cover. Two common schemes:

- **Adjacent slide:** the defender nearest the ball slides. Short distance, fast help — but it opens the man next to the ball, which is a dangerous place to be open.
- **Crease slide:** the defender guarding the player in front of the goal slides. Longer trip, but it leaves the open man farther from the cage.

Every defense is a bet about which shot you'd rather give up. There is no scheme that gives up nothing.

### Man-to-man vs. zone

**Man-to-man:** each defender guards a person. Clear accountability, harder to beat with ball movement, vulnerable to a great dodger.
**Zone:** each defender guards an area. Protects a weak individual defender and clogs the middle, but is beaten by fast ball movement and a team that shoots well from outside.

Most teams run man-to-man and slide, then switch to a zone when they're protecting a lead, hiding a mismatch, or facing a team that can't shoot from distance.

### The goalkeeper

The goalkeeper is the only player who may touch the ball with a hand, and only inside the crease (World Lacrosse, 2025a). Two jobs: stop the ball, and **run the defense with your voice** — call the ball's location, call the slide, call the clear. A quiet goalkeeper is a defensive liability no matter how many saves they make.

:::reveal Under World Lacrosse men's rules, name three body-checks that are illegal. ||| Any three of: checking a player who is not in possession and not within 2.74 m of a loose ball or a ball in flight; initial contact from the rear, below the hips, or at/above the neck; checking a player who is lying on the ground or down on one or both knees; blocking with the head (spearing); an avoidable check after the player has already thrown the ball (Rule 70).

## Sources
- National Collegiate Athletic Association. (2026a). *2026 and 2027 NCAA women's lacrosse rules*. https://ncaaorg.s3.amazonaws.com/championships/sports/lacrosse/rules/women/PRWLA_RulesBook.pdf
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.1). https://worldlacrosse.sport/wp-content/uploads/2026/01/WL_Mens-Rules_25-27_FINAL_1.1.pdf
- World Lacrosse. (2025b). *2025–2026 women's field lacrosse rules* (v1.1). https://worldlacrosse.sport/wp-content/uploads/2025/03/2025_2026-WF-Rulebook_FINALv1.1-1.pdf`,
      recallContent: [
        {
          prompt: "What are the three ways an offense creates an advantage?",
          answer:
            "Dodging (beat your defender one-on-one and force a slide), off-ball movement (cutting and clearing space away from the ball), and picks/screens (men's field and box — and they must be legal).",
        },
        {
          prompt: "What single habit most separates good offenses from bad ones?",
          answer:
            "Moving the ball faster than the defense can rotate. Defenses beat individuals; they lose to ball movement.",
        },
      ],
    },
    {
      slug: "transition-and-special-teams",
      title: "14 · Transition, clears, rides, and playing a man down",
      section: "3 · Skills & strategy",
      body: `The settled 6-on-6 is the game you see most. The game that **decides** most matches happens in the seconds between the two ends of the field.

### Face-off (men's) and draw (women's)

Every quarter starts with one, and in the men's field game **every goal** is followed by one. That makes the face-off specialist one of the most valuable players on a men's roster: a team that wins face-offs gets the ball back after every goal it scores and every goal it concedes. Body checking either player participating in the face-off is a major foul (World Lacrosse, 2025a) — this is a battle of hands, hips and leverage, not a collision.

The women's **draw** (Rule 13.A.5) is a different skill entirely — a vertical push, timing the whistle, and a controlled direction — and it is just as decisive.

Note the contrast built into **Sixes**: possession simply alternates and the goalkeeper restarts play after every goal (World Lacrosse, 2026b). No face-off specialist, by design. That single rule change removes an entire position — which tells you a lot about who Sixes is built for.

### Clearing and riding

- **Clear:** moving the ball from your defensive end up the field after you win it. Sounds simple. Under pressure, against a team that presses, it is where games are lost — a turnover during a clear hands the other team the ball 20 metres from your goal with your defense out of position.
- **Ride:** the opposite job — your attackers pressuring the other team's clear to force that turnover. The ride is the reason attackers have to be able to play defense, and it is the least glamorous, most respected work an attacker does.

### Man-up and man-down (the extra-man game)

Fouls in the men's game put players in the **penalty box**, and the penalties are timed. In World Lacrosse men's field:

- A **minor** foul, when the *other* team has possession, is "suspension from the field of play for 30 seconds for the Player committing the foul" (Rule 50.1).
- A **major** foul is "suspension from the game for a period of **1, 2 or 3 minutes**, depending upon the Officials' diagnosis of the severity and intention of the foul," with the ball normally awarded to the team that was fouled (Rule 68.1).

So for 30 seconds to 3 minutes, one team plays 6-on-5 in the attacking half. That's the **extra-man offense (EMO)** — usually a set formation, patient ball movement, and a shot from a spot the defense can't cover with a man missing. The other team runs a **man-down defense**, collapsing into a zone and trying to survive the clock.

Special teams are where disciplined teams beat talented ones. A team that takes three unnecessary-roughness penalties (Rule 74) hands its opponent three free power plays, and no amount of individual skill makes that back.

The women's game manages this differently — with **cards**. In NCAA women's lacrosse: a green card costs 1 minute, a yellow 2 minutes, a red 5 minutes (NCAA, 2026b). Same principle: lose your discipline, play short.

:::reveal How long does a player sit for a major foul in World Lacrosse men's field, and what does the other team do with that time? ||| One, two, or three minutes, depending on the officials' judgment of severity and intent (Rule 68.1). The other team runs an extra-man offense (EMO) — a 6-on-5 with a set formation and patient ball movement — while the short-handed team collapses into a man-down zone and tries to survive the clock.

## Sources
- National Collegiate Athletic Association. (2026b). *2025 NCAA women's lacrosse table reference sheet*. https://ncaaorg.s3.amazonaws.com/championships/sports/lacrosse/rules/women/2025PRWLA_NCAAWomensLacrosseTableReferenceSheet.pdf
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.1). https://worldlacrosse.sport/wp-content/uploads/2026/01/WL_Mens-Rules_25-27_FINAL_1.1.pdf
- World Lacrosse. (2026b). *2026–2028 Sixes lacrosse official playing rules* (Ver. 2.0, May 2026). https://worldlacrosse.sport/wp-content/uploads/2026/05/26-28-Sixes-Rule-Book_v2_0526.pdf`,
      recallContent: [
        {
          prompt: "What is a \"slide,\" and what does it cost you?",
          answer:
            "A slide is a defender leaving their own player to stop a ball carrier who has beaten their defender. It costs you a free offensive player somewhere — so the rest of the defense must rotate to cover. Every slide package is a bet about which shot you'd rather concede.",
        },
        {
          prompt: "Besides stopping shots, what is a goalkeeper's other job?",
          answer:
            "Running the defense with their voice — calling the ball, the slides, and the clear. A quiet goalkeeper is a liability no matter how many saves they make.",
        },
      ],
    },
    {
      slug: "quiz-skills-strategy",
      title: "15 · Check your understanding: skills & strategy",
      section: "3 · Skills & strategy",
      body: "A graded quiz on Section 3. Passing score is 70%.",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What are the five fundamentals of lacrosse?",
            options: [
              "Sprinting, tackling, jumping, blocking, and diving",
              "Cradle, catch, pass, shoot, and ground balls",
              "Face-off, clear, ride, slide, and check",
              "Dodging, screening, cutting, sliding, and riding",
            ],
            correctIndex: 1,
            explanation: "Everything else in the sport is built from these five. Nobody outgrows them.",
            sourceLessonSlug: "the-five-fundamentals",
          },
          {
            prompt: "What's the correct technique for catching a lacrosse ball?",
            options: [
              "Stab at the ball to meet it early",
              "Hold the stick rigid so the ball can't escape",
              "Give with the ball — draw the stick back slightly as it arrives so the pocket absorbs the impact",
              "Turn the stick head away at the last moment",
            ],
            correctIndex: 2,
            explanation: "A stiff stick spits the ball out. Soft hands keep it. Catching is the most under-practiced skill in the sport.",
            sourceLessonSlug: "the-five-fundamentals",
          },
          {
            prompt: "Why do coaches insist that ground balls win games?",
            options: [
              "Because they look impressive",
              "Because a loose ball is a possession nobody owns — and in a sport with an 80-second shot clock, every ground ball you win is up to 80 seconds of possession taken from the opponent",
              "Because the rules award a bonus point for a scooped ball",
              "Because they're the only legal way to gain possession",
            ],
            correctIndex: 1,
            explanation: "Possession is the currency of a shot-clock sport. The cliché survives because it keeps being true.",
            sourceLessonSlug: "the-five-fundamentals",
          },
          {
            prompt: "What is \"wall ball\"?",
            options: [
              "A penalty for hitting the boards in box lacrosse",
              "Throwing and catching against a brick wall, both hands, in patterns — free, solo, and the fastest way to build stick skills",
              "A zone defense formation",
              "A drill only goalkeepers do",
            ],
            correctIndex: 1,
            explanation: "It's the closest thing lacrosse has to a cheat code, and it costs nothing but a ball.",
            sourceLessonSlug: "the-five-fundamentals",
          },
          {
            prompt: "Why should a player spend real practice time on their weak hand?",
            options: [
              "The rules require players to alternate hands",
              "Because a one-handed player is a solved problem — a competent defender simply takes away the strong side and the player disappears",
              "Because the weak hand generates more shot power",
              "It's only relevant for goalkeepers",
            ],
            correctIndex: 1,
            explanation: "Spend at least half your reps on the hand you hate.",
            sourceLessonSlug: "the-five-fundamentals",
          },
          {
            prompt: "What is the real purpose of a dodge?",
            options: [
              "To score directly, every time",
              "To force the defense to move — once your defender is beaten, someone must slide to help, and the moment they do, a teammate is open",
              "To draw a penalty",
              "To run out the shot clock",
            ],
            correctIndex: 1,
            explanation: "You dodge to make the defense move. The goal you create is usually someone else's.",
            sourceLessonSlug: "offense",
          },
          {
            prompt: "What is \"X\" in field lacrosse?",
            options: [
              "The center face-off spot",
              "The space directly behind the goal — playable because the goal sits 12 m off the end line — where a defender's back is to their own cage and you can attack from either side",
              "The penalty box",
              "The goalkeeper's crease",
            ],
            correctIndex: 1,
            explanation: "It's the best attacking real estate on the field, and the engine of the classic men's field offense.",
            sourceLessonSlug: "offense",
          },
          {
            prompt: "What single habit most separates good offenses from bad ones?",
            options: [
              "Shooting as hard as possible",
              "Holding the ball to run the clock",
              "Moving the ball faster than the defense can rotate — defenses beat individuals but lose to ball movement",
              "Always dodging from the same side",
            ],
            correctIndex: 2,
            explanation:
              "A skip pass that jumps a rotating defense is worth more than any highlight-reel dodge — and it's the skill that still works when the athletes across from you are bigger and faster.",
            sourceLessonSlug: "offense",
          },
          {
            prompt: "Under World Lacrosse men's field Rule 70, which body-check is ILLEGAL?",
            options: [
              "A check on a ball carrier, front-on, above the hips and below the neck",
              "A check on an opponent who is down on one knee",
              "A check on an opponent within 2.74 m of a loose ball",
              "A check on an opponent chasing a ball in flight 2 m away",
            ],
            correctIndex: 1,
            explanation:
              "Rule 70.6: body-checking an opponent lying on the ground or down on one or both knees is illegal. So are checks from the rear, below the hips, at or above the neck, and checks on players not in possession and not near a loose or in-flight ball.",
            sourceLessonSlug: "defense",
          },
          {
            prompt: "In the women's game, what does legal defense consist of?",
            options: [
              "Body-checking the ball carrier off balance",
              "Playing the stick and the space without displacing your opponent, without obstructing shooting space, and without parking in the 11 m fan for more than three seconds",
              "Standing directly in front of the goal at all times",
              "Holding the attacker's stick until the whistle",
            ],
            correctIndex: 1,
            explanation:
              "World Lacrosse (2025b), Rules 20.A.12, 20.A.19, 20.A.20. It's a game of angles and discipline — there is no body-checking lane at all.",
            sourceLessonSlug: "defense",
          },
          {
            prompt: "What is a defensive \"slide\"?",
            options: [
              "A goalkeeper diving across the crease",
              "A defender leaving their own player to stop a ball carrier who has beaten their defender — which forces the rest of the defense to rotate",
              "A substitution during play",
              "A legal check from behind",
            ],
            correctIndex: 1,
            explanation:
              "Adjacent slide = fast help but opens the man next to the ball. Crease slide = slower but leaves the open man farther from the cage. Every scheme is a bet about which shot you'd rather give up.",
            sourceLessonSlug: "defense",
          },
          {
            prompt: "When would a team most likely switch from man-to-man to a zone defense?",
            options: [
              "When facing a team that shoots very well from outside",
              "When protecting a lead, hiding a mismatch, or facing a team that can't shoot from distance",
              "Whenever they win the face-off",
              "Zone defense is illegal in lacrosse",
            ],
            correctIndex: 1,
            explanation:
              "Zone protects a weak individual defender and clogs the middle, but it is beaten by fast ball movement and good outside shooting.",
            sourceLessonSlug: "defense",
          },
          {
            prompt: "Why is a face-off specialist so valuable on a men's field roster?",
            options: [
              "Because the face-off is worth two goals",
              "Because in men's field lacrosse every quarter AND every goal is followed by a face-off — so winning them means getting the ball back after every goal you score and every goal you concede",
              "Because they also play goalkeeper",
              "Because face-offs are the only way to score",
            ],
            correctIndex: 1,
            explanation:
              "Note the contrast in Sixes: possession alternates and the goalkeeper restarts after each goal, which removes the position entirely — by design.",
            sourceLessonSlug: "transition-and-special-teams",
          },
          {
            prompt: "What's the difference between a clear and a ride?",
            options: [
              "A clear is a shot; a ride is a pass",
              "A clear is moving the ball out of your own defensive end after winning it; a ride is pressuring the other team's clear to force a turnover",
              "A clear is a substitution; a ride is a timeout",
              "They're two names for the same thing",
            ],
            correctIndex: 1,
            explanation:
              "A turnover during a clear hands the opponent the ball near your goal with your defense out of position — which is why the ride is the least glamorous, most respected work an attacker does.",
            sourceLessonSlug: "transition-and-special-teams",
          },
          {
            prompt: "In World Lacrosse men's field, what is the penalty for a MAJOR foul?",
            options: [
              "Loss of possession only",
              "Suspension from the game for 1, 2, or 3 minutes depending on the officials' judgment of severity and intent, with the ball usually awarded to the fouled team",
              "Automatic ejection",
              "A 30-second suspension in every case",
            ],
            correctIndex: 1,
            explanation:
              "Rule 68.1. (A minor foul, when the other team has possession, is a 30-second suspension — Rule 50.1.) That's the extra-man offense: for 30 seconds to 3 minutes, one team plays 6-on-5.",
            sourceLessonSlug: "transition-and-special-teams",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Rules, fouls & officials
    // ═══════════════════════════════════════════════════════════════════════
    {
      slug: "who-writes-the-rules",
      title: "16 · Who actually writes the rules",
      section: "4 · Rules, fouls & officials",
      body: `There is no single lacrosse rulebook. There are several, they disagree with each other, and they turn over on different schedules. If you can name the rule-writers, you can settle almost any lacrosse argument in a browser tab.

| Body | What it governs | Where its rules live |
| --- | --- | --- |
| **World Lacrosse** | The international game: men's field, women's field, box, Sixes, plus endorsed wheelchair and mixed formats. This is the code used at world championships and at the **Olympics**. | worldlacrosse.sport/the-game/playing-rules/ |
| **NCAA** | U.S. college lacrosse — separate men's and women's rules books, each with its own rules committee. | ncaapublications.com |
| **National/member federations** (e.g. USA Lacrosse) | The sport within one country: youth rules, coach and official certification, safety standards. | usalacrosse.com |
| **State high-school associations** | Your actual high-school season — usually adopting a national high-school code with state modifications. | your state association |
| **Pro leagues** (PLL, NLL, WLL) | Their own competitions. Leagues write house rules — different clocks, different field sizes, sometimes a 2-point line. | each league's site |

World Lacrosse states its own remit plainly: it "is responsible for the rules of men's and women's field, box and Sixes lacrosse" (World Lacrosse, n.d.-c).

### The edition trap

Rulebooks are dated, and the dates don't line up:

- Men's field: a **2025–2027** book.
- Women's field: a **2025–2026** book.
- Sixes and box: **2026–2028** books.
- NCAA men's: a **2025 and 2026** book. NCAA women's: a **2026 and 2027** book.

This is precisely how a stale rule survives on the internet for a decade. Someone reads a 2018 rulebook, writes a blog post, and it gets copied forever. **Always check the edition year on the cover.**

### How to read a rulebook without reading a rulebook

You are not going to read 90 pages. You don't have to. Every rulebook is built the same way:

1. **Table of contents first.** Rules are grouped: the field, the equipment, the teams, time, fouls, penalties. Find the group, then the rule.
2. **Search the PDF** for the term you actually care about ("shot clock," "shooting space," "body-check").
3. **Read the rule and the note under it.** Most rulebooks add interpretations, examples, or "approved rulings" (ARs) beneath the rule. World Lacrosse's men's book says it outright: the ARs "have the same authority as the rules."
4. **Cite it.** "World Lacrosse men's field, Rule 70.3" ends an argument. "I'm pretty sure you can't hit someone from behind" does not.

Doing this once is a genuinely useful life skill and not just a lacrosse one: **going to the primary source and reading the actual text** is the difference between knowing something and having heard something.

:::reveal Someone says "you can't check a player from behind in lacrosse." How do you turn that into a claim you can defend? ||| Name the discipline and code, find the rule, and cite it: World Lacrosse men's field lacrosse, Rule 70.3 — it is illegal to body-check an opponent where initial contact is from their rear, below their hips, or at or above their neck. Then check the edition year on the cover (this is the 2025–2027 book), because rulebooks turn over.

## Sources
- World Lacrosse. (n.d.-c). *Playing rules*. https://worldlacrosse.sport/the-game/playing-rules/
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.1). https://worldlacrosse.sport/wp-content/uploads/2026/01/WL_Mens-Rules_25-27_FINAL_1.1.pdf`,
      recallContent: [
        {
          prompt: "In transition, what's the difference between a clear and a ride?",
          answer:
            "A clear is your team moving the ball out of your defensive end after winning it. A ride is the other team's attackers pressuring that clear to force a turnover.",
        },
        {
          prompt: "In NCAA women's lacrosse, how long do the green, yellow, and red cards cost you?",
          answer: "Green card = 1 minute, yellow = 2 minutes, red = 5 minutes.",
        },
      ],
    },
    {
      slug: "fouls-and-penalties",
      title: "17 · Fouls and penalties",
      section: "4 · Rules, fouls & officials",
      body: `Fouls are where the men's and women's games diverge most visibly, so — as always — name the discipline and the code first.

### Men's field (World Lacrosse, 2025a)

Fouls come in three tiers.

**Minor fouls** — "those of a less serious kind" (Rule 51.1). Examples: interference (52), pushing (53), illegal pick (54), holding (55), withholding the ball from play (58), offside (65), warding — guarding your stick with your free arm (66), illegal stick (63), illegal equipment (64).
*Penalty:* if the offending team has the ball or the ball is loose, possession goes to the other team where the foul occurred. If the *other* team already had possession, the offender is suspended for **30 seconds** (Rule 50.1).

**Major fouls** — "those of a more serious kind" (Rule 69.1). These are the ones you'll hear called on television: **illegal body-check** (70), **slashing** (71), **cross check** (72), **tripping** (73), **unnecessary roughness** (74), **unsportsmanlike conduct** (75).
*Penalty:* suspension for **1, 2, or 3 minutes**, at the officials' judgment of severity and intent; the ball normally goes to the fouled team (Rule 68.1). Commit five major fouls and you're out of the game (Rule 76).

**Expulsion fouls** — the most serious; the player is out (Rules 77–78).

Two useful details you can only get from the actual text. First, slashing doesn't require you to hit anything: swinging "at an opponent's stick in a dangerous or reckless way" is slashing "even if they do not actually hit the opponent's stick or body" (Rule 71.1). Second, the rulebook explicitly protects the follow-through: a player "in their legitimate follow through motion" who strikes an opponent on the head while shooting or passing has committed **no foul** (Approved Ruling 71.1). Rules are written by people who have watched a lot of lacrosse.

### Women's field (World Lacrosse, 2025b)

The women's book has **minor** and **major** fouls too, but the penalty logic is built around **space, not the penalty box**. The characteristic penalty is a **free position**: play stops, the ball is given to the fouled player, and the offending defender is moved to a set distance away. For a major foul by the defense inside the critical scoring area, that free position is a genuinely dangerous scoring chance — which is exactly the point. The rules make illegal defense expensive.

The signature women's fouls, all cited earlier: **illegal contact** (20.A.12 — you may not displace another player), **charge** (20.A.3), **ward** (20.A.18 — you may not guard your stick with your arm), **shooting space** (20.A.19), **three seconds in the 11 m fan** (20.A.20). Shooting space is an immediate whistle (Rule 20.B.7).

And on top of the fouls, there are **cards** — the mechanism that puts a women's team a player down. In NCAA women's lacrosse: **green = 1 minute, yellow = 2 minutes, red = 5 minutes** (NCAA, 2026b).

### What this means for you as a player

Learn your own code's fouls the way you'd learn vocabulary, because **the fouls define the game's shape**. In the men's game, discipline means not handing your opponent a 6-on-5. In the women's game, discipline means not handing your opponent a free position eight metres from your goal. Same lesson, different currency: **penalties are how good teams lose to worse ones.**

:::reveal In World Lacrosse men's field, does a slash require actually hitting the opponent? ||| No. Rule 71.1: swinging your stick "at an opponent's stick in a dangerous or reckless way" is slashing "even if they do not actually hit the opponent's stick or body." Conversely, a player in a legitimate follow-through while shooting or passing who strikes an opponent on the head has committed no foul (AR 71.1).

## Sources
- National Collegiate Athletic Association. (2026b). *2025 NCAA women's lacrosse table reference sheet*. https://ncaaorg.s3.amazonaws.com/championships/sports/lacrosse/rules/women/2025PRWLA_NCAAWomensLacrosseTableReferenceSheet.pdf
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.1). https://worldlacrosse.sport/wp-content/uploads/2026/01/WL_Mens-Rules_25-27_FINAL_1.1.pdf
- World Lacrosse. (2025b). *2025–2026 women's field lacrosse rules* (v1.1). https://worldlacrosse.sport/wp-content/uploads/2025/03/2025_2026-WF-Rulebook_FINALv1.1-1.pdf`,
      recallContent: [
        {
          prompt: "Name the five main bodies that write lacrosse rules.",
          answer:
            "World Lacrosse (international, and the Olympic code), the NCAA (U.S. college — separate men's and women's books), national federations like USA Lacrosse, state high-school associations, and the pro leagues, which write their own house rules.",
        },
        {
          prompt: "What is the \"edition trap\"?",
          answer:
            "Rulebooks are dated and don't turn over together — men's field is a 2025–2027 book, women's field 2025–2026, Sixes and box 2026–2028, NCAA men's 2025–26, NCAA women's 2026–27. Quoting an old edition is how stale rules survive online for years. Always check the cover date.",
        },
      ],
    },
    {
      slug: "becoming-an-official",
      title: "18 · The third team on the field: becoming an official",
      section: "4 · Rules, fouls & officials",
      body: `USA Lacrosse calls officials "**the third team on the field**" (USA Lacrosse, n.d.-a). That's the right frame, and it points at something practical: **officiating is the single most accessible paid role in this sport.**

Think about what it requires. Not size. Not speed. Not a club-team budget. It requires that you know the rulebook, that you can make a decision in half a second and stand behind it, and that you are willing to be shouted at by adults who have not read the rulebook. If you already have the temperament, everything else is learnable in a season.

### How it works

USA Lacrosse develops "certified training programs to prepare officials for game situations," and membership "includes all requirements needed for official certification" — plus educational resources, the annual rule book, online courses, clinics, and webinars (USA Lacrosse, n.d.-a). The path is: join, train, get certified, start on youth games, work up. Local officials' associations assign games and pay per game.

### Why this is genuinely worth your time as a high-school student

1. **It pays now.** Not someday. Officials are paid per game, and youth games are the entry point.
2. **Chronic shortage.** Officials' associations in most sports are short-handed, which means a competent, reliable, punctual young official is not competing for scarce work — the work is competing for them.
3. **It makes you a much better player.** You cannot officiate a game without knowing exactly where the line is between a legal check and a major foul, or between good defense and shooting space. Officials know the rules better than most coaches. That knowledge shows up in your own game immediately.
4. **It's a real credential.** "Certified lacrosse official, three seasons" on a résumé is a claim about judgment, composure, and reliability under pressure that most 17-year-olds cannot make.

### The scorer's table

Not ready to stand in the middle? Every game also needs a **timekeeper, a shot-clock operator, and a scorer**, and those roles are formally defined in the rulebooks — the World Lacrosse men's book gives the shot-clock operator their own duties section (2025a, Rule 43.3), and the NCAA publishes a women's **table reference sheet** telling the table crew exactly when to stop the clock, when to sound the horn, and when to reset the possession clock to 90 (NCAA, 2026b). Table crew is often the first paid job available to a young person at a lacrosse venue, and it's the fastest way to learn a rulebook cold.

:::reveal Why is officiating the most accessible paid role in lacrosse — and how does it make you a better player? ||| It requires no size, speed, or club budget: only rules knowledge, quick decisions, and composure. USA Lacrosse membership includes what's needed for certification, and officials' associations pay per game amid a chronic shortage. And you cannot officiate without knowing exactly where the line sits between a legal check and a major foul — knowledge that shows up in your own play immediately.

## Sources
- National Collegiate Athletic Association. (2026b). *2025 NCAA women's lacrosse table reference sheet*. https://ncaaorg.s3.amazonaws.com/championships/sports/lacrosse/rules/women/2025PRWLA_NCAAWomensLacrosseTableReferenceSheet.pdf
- USA Lacrosse. (n.d.-a). *Officials*. https://www.usalacrosse.com/officials
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.1). https://worldlacrosse.sport/wp-content/uploads/2026/01/WL_Mens-Rules_25-27_FINAL_1.1.pdf`,
      recallContent: [
        {
          prompt: "What is a \"free position\" in women's lacrosse?",
          answer:
            "The characteristic penalty: play stops, the ball is given to the fouled player, and the offending defender is moved a set distance away. For a major defensive foul inside the critical scoring area, it's a serious scoring chance — which is the point.",
        },
        {
          prompt: "Why do penalties matter so much strategically?",
          answer:
            "Because penalties are how good teams lose to worse ones. In the men's game a penalty hands the opponent a 6-on-5 for 30 seconds to 3 minutes; in the women's game it hands them a free position near your goal.",
        },
      ],
    },
    {
      slug: "quiz-rules-officials",
      title: "19 · Check your understanding: rules & officials",
      section: "4 · Rules, fouls & officials",
      body: "A graded quiz on Section 4. Passing score is 70%.",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which body writes the rules used at the Olympic Games?",
            options: ["The NCAA", "USA Lacrosse", "World Lacrosse", "The Premier Lacrosse League"],
            correctIndex: 2,
            explanation:
              "World Lacrosse is \"responsible for the rules of men's and women's field, box and Sixes lacrosse\" — and Sixes is the Olympic discipline.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "What is the \"edition trap\"?",
            options: [
              "Rulebooks are secret and can't be read by the public",
              "Rulebooks are dated and turn over on different schedules, so quoting an old edition spreads stale rules — always check the cover year",
              "Only coaches are allowed to own a rulebook",
              "Every governing body publishes the same book",
            ],
            correctIndex: 1,
            explanation:
              "WL men's field is a 2025–2027 book; WL women's field 2025–2026; Sixes and box 2026–2028; NCAA men's 2025–26; NCAA women's 2026–27. They don't line up.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "In a World Lacrosse rulebook, what authority do \"approved rulings\" (ARs) have?",
            options: [
              "None — they're just commentary",
              "The same authority as the rules themselves",
              "They apply only to youth games",
              "They apply only in overtime",
            ],
            correctIndex: 1,
            explanation:
              "The men's field rulebook states that the ARs \"have the same authority as the rules.\" They're where the interpretations and edge cases live.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "Which of these is the strongest way to settle a lacrosse rules argument?",
            options: [
              "\"I've played for years and this is how we always did it\"",
              "\"A coach told me\"",
              "Name the discipline and code, quote the rule number from the current rulebook, and note the edition year",
              "Search a forum thread",
            ],
            correctIndex: 2,
            explanation:
              "\"World Lacrosse men's field, Rule 70.3, 2025–2027 edition\" ends an argument. Going to the primary source is a life skill, not just a lacrosse one.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "In World Lacrosse men's field, what is the penalty for a MINOR foul when the other team already has possession?",
            options: [
              "Loss of possession",
              "A 30-second suspension for the player who committed the foul",
              "A 3-minute suspension",
              "A free position for the fouled player",
            ],
            correctIndex: 1,
            explanation:
              "Rule 50.1. If the offending team has the ball or the ball is loose, possession simply changes hands instead.",
            sourceLessonSlug: "fouls-and-penalties",
          },
          {
            prompt: "Which of these is a MAJOR foul in World Lacrosse men's field?",
            options: ["Offside", "Warding", "Slashing", "Illegal pick"],
            correctIndex: 2,
            explanation:
              "Slashing (Rule 71) is a major foul, alongside illegal body-check (70), cross check (72), tripping (73), unnecessary roughness (74) and unsportsmanlike conduct (75). Offside, warding and illegal pick are minor fouls.",
            sourceLessonSlug: "fouls-and-penalties",
          },
          {
            prompt: "Does a slash require actually striking the opponent?",
            options: [
              "Yes, contact is always required",
              "No — swinging at an opponent's stick in a dangerous or reckless way is slashing \"even if they do not actually hit the opponent's stick or body\"",
              "Only if the opponent falls down",
              "Only in box lacrosse",
            ],
            correctIndex: 1,
            explanation:
              "Rule 71.1. And the reverse is also written down: a legitimate follow-through while shooting or passing that strikes an opponent's head is no foul (AR 71.1).",
            sourceLessonSlug: "fouls-and-penalties",
          },
          {
            prompt: "How many major fouls can a player commit in a World Lacrosse men's field match before being removed from the game?",
            options: ["Two", "Three", "Five", "There is no limit"],
            correctIndex: 2,
            explanation: "Rule 76: a player committing five major fouls is out of the game.",
            sourceLessonSlug: "fouls-and-penalties",
          },
          {
            prompt: "What is the characteristic penalty in women's lacrosse?",
            options: [
              "The penalty box",
              "A free position — play stops, the fouled player gets the ball, and the offending defender is moved a set distance away",
              "A penalty shot from the center circle",
              "Loss of a timeout",
            ],
            correctIndex: 1,
            explanation:
              "The women's penalty logic is built around space rather than the box. A major defensive foul inside the critical scoring area yields a genuinely dangerous free position — which is the point: illegal defense is made expensive.",
            sourceLessonSlug: "fouls-and-penalties",
          },
          {
            prompt: "In NCAA women's lacrosse, what does a yellow card cost?",
            options: ["30 seconds", "1 minute", "2 minutes", "5 minutes"],
            correctIndex: 2,
            explanation: "Green = 1 minute, yellow = 2 minutes, red = 5 minutes (NCAA, 2026b).",
            sourceLessonSlug: "fouls-and-penalties",
          },
          {
            prompt: "How does USA Lacrosse describe officials?",
            options: [
              "\"The necessary evil\"",
              "\"The third team on the field\"",
              "\"Volunteers only\"",
              "\"The rulebook's servants\"",
            ],
            correctIndex: 1,
            explanation:
              "USA Lacrosse (n.d.-a). And it develops certified training programs; membership includes what's needed for certification.",
            sourceLessonSlug: "becoming-an-official",
          },
          {
            prompt: "Why is officiating described as the most accessible PAID role in lacrosse?",
            options: [
              "Because it requires elite athleticism",
              "Because it requires no size, speed, or club-team budget — only rules knowledge, decisiveness, and composure — and officials are paid per game amid a chronic shortage",
              "Because officials are guaranteed a college scholarship",
              "Because it requires no training at all",
            ],
            correctIndex: 1,
            explanation:
              "A competent, reliable, punctual young official isn't competing for scarce work — the work is competing for them.",
            sourceLessonSlug: "becoming-an-official",
          },
          {
            prompt: "How does officiating make you a better player?",
            options: [
              "It doesn't — it's purely a job",
              "Because you cannot officiate without knowing exactly where the line sits between a legal check and a major foul, or between good defense and shooting space",
              "Because officials get extra practice time",
              "Because officials are scouted by colleges",
            ],
            correctIndex: 1,
            explanation: "Officials know the rules better than most coaches, and that knowledge shows up in your own game immediately.",
            sourceLessonSlug: "becoming-an-official",
          },
          {
            prompt: "Which of these is a real, rulebook-defined game role you could be paid for without officiating?",
            options: [
              "Shot-clock operator",
              "Assistant referee coordinator",
              "Field commissioner",
              "Sideline analyst",
            ],
            correctIndex: 0,
            explanation:
              "The World Lacrosse men's book gives the shot-clock operator their own duties section (Rule 43.3), and the NCAA publishes a women's table reference sheet for the timer, possession-clock timer and scorer.",
            sourceLessonSlug: "becoming-an-official",
          },
          {
            prompt: "Why is table crew (timer/scorer/shot-clock) a smart first job at a lacrosse venue?",
            options: [
              "It's the highest-paid role in the sport",
              "It's often the first paid job available to a young person there, and it's the fastest way to learn a rulebook cold",
              "It requires a coaching license",
              "It guarantees a spot on the varsity team",
            ],
            correctIndex: 1,
            explanation:
              "The roles are formally defined in the rulebooks — which means learning them means learning the rules from the inside.",
            sourceLessonSlug: "becoming-an-official",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Leagues & the road to LA28
    // ═══════════════════════════════════════════════════════════════════════
    {
      slug: "college-and-recruiting",
      title: "20 · College lacrosse and the recruiting pipeline",
      section: "5 · Leagues & the road to LA28",
      body: `For most American high-school players, "the next level" means NCAA lacrosse — men's and women's, across Divisions I, II and III, each with its own rules book and its own recruiting rules. This lesson is the honest version, including the parts a recruiting service won't tell you.

### The one recruiting rule to know

Lacrosse had a genuine early-recruiting crisis: coaches were making offers to 14-year-olds. In **April 2017** the NCAA passed legislation moving the initial recruiting-contact date to **September 1 of a player's junior year** for men's and women's lacrosse (Intercollegiate Women's Lacrosse Coaches Association, n.d.). Before that date, Division I coaches cannot call, text, email, or make offers.

**Two warnings, both load-bearing.**
First, recruiting rules change — often annually — and they differ by division and by sport. Do not take *this course's* word for what the rule is in the year you're being recruited. **Go to ncaa.org, find the current recruiting calendar for your division and sport, and read it.** That is the authoritative source; anything else, including a coach, a club, or a paid recruiting service, is a secondary interpretation of it.
Second, the rule restricts what **coaches** may do, not what **you** may do. You can email coaches, send film, and attend camps before September 1. They simply can't reply the way you'd like yet.

### The honest math

The pipeline runs through **club and travel lacrosse**, and that is precisely where the sport's access problem lives. Recruiting happens at summer tournaments and showcases that cost money to enter, money to travel to, and money to stay at. The Aspen Institute's Project Play finds that **travel is now the costliest feature of youth sports** — on average parents spend more per year on travel than on equipment, private lessons, registration fees, or camps — and that participation splits sharply by income: 24% of kids aged 6–12 from homes earning $25,000 or less played sports regularly, versus 40% from homes earning $100,000+ (Aspen Institute Project Play, n.d.).

Lacrosse sits at the expensive end of that spectrum. A men's field player needs a helmet, gloves, shoulder and arm protection, a stick, and cleats before they play a single minute, and then a club fee and a tournament schedule on top. **That is not a small barrier; it is the barrier**, and Section 6 is partly about what people are doing to lower it.

### What to actually do with this

- **Play in high school. Play in a club if you can.** But know that the club circuit is a market, not a meritocracy, and price it accordingly.
- **Send film.** Coaches watch film. Film is cheap. Film does not care where you live.
- **Consider Division III.** No athletic scholarships there — but strong lacrosse, real coaching, and admissions officers who care that you play. For a lot of players it's a better outcome than a D-I roster spot they never come off the bench for.
- **Ask what the roster actually looks like.** How many players at your position? How many are on the field on Saturday? A hard question early saves four unhappy years.
- **Have a plan that isn't playing.** Which is the whole point of Section 6.

:::reveal When can NCAA Division I lacrosse coaches first contact a recruit — and where should you verify that? ||| September 1 of the player's junior year, under legislation the NCAA passed in April 2017 to curb early recruiting. But verify it yourself for the year you're recruited, on ncaa.org's current recruiting calendar for your division and sport — the rules change, and every club, coach, or recruiting service is only interpreting that document.

## Sources
- Aspen Institute Project Play. (n.d.). *Youth sports facts: Challenges*. https://projectplay.org/youth-sports/facts/challenges
- Intercollegiate Women's Lacrosse Coaches Association. (n.d.). *Lacrosse keeps September 1 junior year contact rule*. https://www.iwlca.org/news_article/show/1014833
- National Collegiate Athletic Association. (n.d.). *NCAA.org* [recruiting calendars and rules by division and sport]. https://www.ncaa.org/`,
      recallContent: [
        {
          prompt: "What does USA Lacrosse call officials, and why is it an accessible role?",
          answer:
            "\"The third team on the field.\" It needs no size, speed, or club budget — only rules knowledge, decisiveness, and composure — it's paid per game, and there's a chronic shortage of officials.",
        },
        {
          prompt: "Which body's rules will be used for lacrosse at the Olympics?",
          answer: "World Lacrosse — specifically the Sixes rules, because Sixes is the Olympic discipline.",
        },
      ],
    },
    {
      slug: "pro-leagues",
      title: "21 · The pro leagues — including the one that shut down",
      section: "5 · Leagues & the road to LA28",
      body: `Professional lacrosse is real, growing, and small. Knowing its actual shape — not the shape a highlight reel implies — is what lets you make sensible decisions about it.

### Premier Lacrosse League (PLL) — men's field

Founded by players, the PLL is the top men's field league in North America. It runs **eight teams** — the Boston Cannons, New York Atlas, Philadelphia Waterdogs, Maryland Whipsnakes, Carolina Chaos, Denver Outlaws, Utah Archers, and California Redwoods — and its 2026 season is its eighth (Premier Lacrosse League, 2026). It began as a touring league playing in a different city each weekend and has since moved to a city-based model — a deliberate bet that the sport can sustain local franchises.

### National Lacrosse League (NLL) — men's box

The NLL is the professional **box** (indoor) league, and it is the older institution. It's also the honest one about its own economics: the league's own website publishes a piece titled *"Many NLL Players Hold Multiple Jobs: An Inside Look"* — noting that "something that makes the NLL unique vs other sports is the athlete's ability to hold down full time jobs, raise families AND play a professional sport" (National Lacrosse League, n.d.).

Read that sentence carefully, because it's the single most useful fact in this lesson. **Professional lacrosse, for most of the people playing it, is not a full-time living.** Players teach, sell, coach, build, and work — and then play professionally on weekends. That is not a knock on the league; it's a description of a sport still building its economy. It should inform every plan you make. (This course does not print salary figures, because the figures floating around the internet come from content farms rather than from leagues or player associations. If you want a number, get it from a league or a CBA — not from a listicle.)

### Women's Lacrosse League (WLL)

The PLL launched the **WLL**, a women's professional league, which debuted at the 2025 PLL Championship Series with four teams: the **Boston Guard, New York Charging, Maryland Charm, and California Palms** (Premier Lacrosse League, 2024). In 2026 it took its biggest step yet: its first full regular season — eleven weekends with playoffs, rosters expanded to 23 players via an expansion draft, games on ESPN networks — and it **switched from the sixes format to full-field 10-v-10** (USA Lacrosse, 2025).

Notice that 10. It's the same number as World Lacrosse's women's field rules (Lesson 7). The professional women's game and the international women's game are converging on the same shape.

### The league that shut down — and why it's in this course

**Athletes Unlimited Pro Lacrosse** was a women's professional league with an unusual model: no fixed teams, players drafted into new teams each week, individual points deciding a champion. It ran four seasons, **2021 through 2024**. On **December 18, 2024**, Athletes Unlimited suspended it **indefinitely, effective immediately**, saying that "the international competition schedule and availability of the sport's most elite athletes during the summer months over the next few years makes it impossible for AU to project the growth of our league" (Athletes Unlimited, 2024).

This is in the course on purpose. Almost every "list of pro lacrosse leagues" you will find still lists Athletes Unlimited as active, because nobody updates a listicle. **A sport this young changes fast, and a source that hasn't been checked this year is a source that is probably wrong.** Before you cite any league, roster, or format — go to the league's own site and look at the date.

:::reveal Is Athletes Unlimited a current professional lacrosse league? ||| No. AU Pro Lacrosse ran 2021–2024 and Athletes Unlimited suspended it indefinitely, effective immediately, on December 18, 2024 — citing the international competition schedule and elite-athlete availability. Most online "lists of pro lacrosse leagues" still list it, which is the lesson: check the league's own site and check the date.

## Sources
- Athletes Unlimited. (2024, December 18). *Athletes Unlimited official statement regarding AU Pro Lacrosse*. https://auprosports.com/read/athletes-unlimited-official-statement-regarding-au-pro-lacrosse/
- National Lacrosse League. (n.d.). *Many NLL players hold multiple jobs: An inside look*. https://www.nll.com/news/many-nll-players-hold-multiple-jobs-an-inside-look/
- Premier Lacrosse League. (2024). *Premier Lacrosse League launches Women's Lacrosse League (WLL)*. https://premierlacrosseleague.com/articles/premier-lacrosse-league-launches-womens-lacrosse-league-wll-new-womens-professional-lacrosse-property-to-debut-at-2025-pll-championship-series
- Premier Lacrosse League. (2026). *Premier Lacrosse League announces 2026 schedule, expands regular season*. https://premierlacrosseleague.com/articles/premier-lacrosse-league-announces-2026-schedule-expands-regular-season
- USA Lacrosse. (2025, September 10). *Women's Lacrosse League expands to full season schedule with playoffs*. https://www.usalacrosse.com/magazine/professional/wll/womens-lacrosse-league-expands-full-season-schedule-playoffs`,
      recallContent: [
        {
          prompt: "When can NCAA Division I lacrosse coaches first contact a recruit?",
          answer:
            "September 1 of the player's junior year (NCAA legislation, April 2017) — but verify the current calendar on ncaa.org for your division and sport, because recruiting rules change.",
        },
        {
          prompt: "Where does the recruiting pipeline's access problem come from?",
          answer:
            "It runs through club and travel lacrosse — paid tournaments and showcases. Project Play finds travel is now the costliest feature of youth sports, and participation splits sharply by household income (24% of kids from homes under $25k play regularly vs 40% from $100k+ homes).",
        },
      ],
    },
    {
      slug: "road-to-la28",
      title: "22 · The road to LA28 — and who is not invited",
      section: "5 · Leagues & the road to LA28",
      body: `Lacrosse is returning to the Olympic Games. That sentence contains one of the sport's happiest facts and its ugliest open question, and this lesson gives you both — with dates, so you can check whether they've changed.

### Lacrosse has been here before

Lacrosse was a **medal sport at the 1904 St. Louis Games and the 1908 London Games**, and a demonstration sport in 1928, 1932 and 1948 (World Lacrosse, n.d.-a). And at St. Louis in 1904, one of the medals went to a team of **Mohawk players from Canada, who took bronze** (ICT, n.d.). The Creator's Game's last Olympic medal era already included Indigenous people. Keep that in mind for what follows.

### The 2028 pathway (verified July 2026)

At **Los Angeles 2028**, lacrosse returns as **Sixes**, with **"six men's and six women's teams"** (World Lacrosse, 2026c). World Lacrosse confirmed the qualification route on **July 1, 2026**:

1. **Continental championships, September–December 2026.** Pan-American (Oshawa, Canada, Sept. 29–Oct. 4); Asia-Pacific (Sunshine Coast, Australia, Oct. 5–10); European (Salou, Spain, Nov. 2–18); African (Johannesburg, South Africa, Dec. 1–4). "The top 16 nations per gender — five each from the Pan-American, Asia-Pacific and European championships, one from Africa — advance."
2. **World Lacrosse Sixes Championships, October 2027** — "sending five men's and five women's teams to LA28. That includes the United States, which qualifies automatically as host, subject to participation at both the Pan-American championships and the WLSC."
3. **Final Olympic qualifying tournament, early 2028.** "The next six ranked teams from the WLSC get one last chance, with the winners completing the field of six for LA28."

Six teams. That is a very small door.

### The question the sport has not answered

**Can the Haudenosaunee — the people who invented this game — play it at the Olympics?**

Here is the state of play, and here is the date attached to it. **As of the most recent reporting verified for this course (March 25, 2026):** the International Olympic Committee's position is that it will **not** allow the Haudenosaunee to compete under their own flag, because IOC eligibility rules require a **National Olympic Committee**, which in turn requires recognition as an independent state — which the Haudenosaunee, recognized by World Lacrosse but not by the United Nations, do not have. IOC officials have also warned that granting an exception might encourage other groups to seek recognition (Laskaris, 2026).

The Haudenosaunee are not asking to be a country. They are asking to play their own game. Claudia Jimerson, the Nationals' director of lacrosse operations, put the whole thing in three sentences: "The Haudenosaunee Confederacy means every real definition of nationhood. We have governance, treaties, identity, land and international participation. But because we do not fit neatly into that imposed framework, we are excluded." And: **"The barrier is structural, not athletic"** (as quoted in Laskaris, 2026).

Some things that have happened:
- **January 2025:** in the final week of the Biden administration, the U.S. and Canadian governments released a **joint statement calling on the IOC** to let the Haudenosaunee qualify for the Games under their own flag (Onondaga Nation, 2025). *What we deliberately do not tell you: whether any administration has since renewed that call. We could not verify that either way, so we don't assert it — go check.*
- As of March 2026 the Nationals were **still pushing for IOC recognition**, and the IOC's position had not changed (Laskaris, 2026).
- Rex Lyons, the men's head coach, on the bureaucratic shape of the problem: "There's not a box for us to check. We are not recognized by the UN as a nation-state. So politically, we're kind of an outlier. And it makes things challenging" (as quoted in Onondaga Nation, 2025).

### Your job, as a person who now knows this

**Go and check the current status yourself.** This lesson is dated July 2026. If you are reading it later, something has probably changed, and the source that will tell you is not a sports blog — it's the Haudenosaunee Nationals, the Onondaga Nation, World Lacrosse, and Indigenous news outlets like Windspeaker and ICT. Being able to say "as of *this date*, the status was *this*, and here is where I checked" is the single most valuable habit this entire course is trying to teach you.

:::reveal As of the most recent reporting verified for this course, can the Haudenosaunee Nationals compete at the 2028 Olympics — and why? ||| As of March 25, 2026: no. The IOC's position is that only nations with a National Olympic Committee may compete, and an NOC requires recognition as an independent state. The Haudenosaunee are recognized by World Lacrosse (a full member since 1985) but not by the UN, so under current IOC rules they are ineligible, and no exception has been granted. As their director of lacrosse operations put it: "The barrier is structural, not athletic." Check the current status — this is live.

## Sources
- ICT. (n.d.). *When the Mohawk lacrosse team played at the Olympics*. https://ictnews.org/archive/when-the-mohawk-lacrosse-team-played-at-the-olympics/
- Laskaris, S. (2026, March 25). *Haudenosaunee Nationals lacrosse teams still pushing for IOC recognition*. Windspeaker. https://windspeaker.com/news/sports/haudenosaunee-nationals-lacrosse-teams-still-pushing-ioc-recognition
- Onondaga Nation. (2025, June 5). *Haudenosaunee's quest: Lacrosse will make the 2028 LA Olympics. Will the game's creators?* https://www.onondaganation.org/news/2025/haudenosaunees-quest-lacrosse-will-make-the-2028-la-olympics-will-the-games-creators/
- World Lacrosse. (n.d.-a). *Origin & history*. https://worldlacrosse.sport/the-game/origin-history/
- World Lacrosse. (2026c, July 1). *WL confirms Olympic pathway from continental Sixes championships to LA28*. https://worldlacrosse.sport/wl-confirms-olympic-pathway-from-continental-sixes-championships-to-la28/`,
      recallContent: [
        {
          prompt: "How many teams does the PLL have, and what does the NLL publish about its own players' jobs?",
          answer:
            "The PLL has eight teams (2026 is its eighth season). The NLL's own site runs a piece titled \"Many NLL Players Hold Multiple Jobs\" — noting that its athletes hold full-time jobs, raise families, AND play professionally.",
        },
        {
          prompt: "What happened to Athletes Unlimited Pro Lacrosse?",
          answer:
            "It ran 2021–2024 and was suspended indefinitely, effective immediately, on December 18, 2024. Most online lists of pro lacrosse leagues still show it as active — which is the lesson about checking dates.",
        },
      ],
    },
    {
      slug: "quiz-leagues-olympics",
      title: "23 · Check your understanding: leagues & the Olympics",
      section: "5 · Leagues & the road to LA28",
      body: "A graded quiz on Section 5. Note that several answers here are dated — if you're reading this well after July 2026, verify the Olympic status yourself. Passing score is 70%.",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "When may NCAA Division I lacrosse coaches first contact a recruit?",
            options: [
              "Any time from ninth grade",
              "September 1 of the player's junior year, under NCAA legislation passed in April 2017 to curb early recruiting",
              "Only after the player graduates",
              "January 1 of senior year, in all divisions",
            ],
            correctIndex: 1,
            explanation:
              "And verify it for your own year on ncaa.org — recruiting calendars change, and clubs and recruiting services are only interpreting that document.",
            sourceLessonSlug: "college-and-recruiting",
          },
          {
            prompt: "The September 1 rule restricts what, exactly?",
            options: [
              "What recruits may do — you can't email a coach before then",
              "What coaches may do — you can still email coaches, send film, and attend camps; they just can't respond the way you'd like yet",
              "Both parties equally",
              "Only official campus visits",
            ],
            correctIndex: 1,
            explanation: "Send film. Film is cheap, coaches watch it, and it doesn't care where you live.",
            sourceLessonSlug: "college-and-recruiting",
          },
          {
            prompt: "According to the Aspen Institute's Project Play, what is now the costliest feature of youth sports?",
            options: ["Equipment", "Private lessons", "Travel", "Registration fees"],
            correctIndex: 2,
            explanation:
              "On average parents spend more per year on travel than on equipment, private lessons, registration fees, or camps — which is exactly what makes a recruiting pipeline that runs through travel tournaments an access problem.",
            sourceLessonSlug: "college-and-recruiting",
          },
          {
            prompt: "Project Play reports what gap in regular sports participation among kids aged 6–12?",
            options: [
              "No measurable gap by income",
              "24% from homes earning $25,000 or less, versus 40% from homes earning $100,000+",
              "35% versus 37% — essentially even",
              "Participation is higher in lower-income homes",
            ],
            correctIndex: 1,
            explanation: "Cost is not a small barrier in lacrosse; it is the barrier.",
            sourceLessonSlug: "college-and-recruiting",
          },
          {
            prompt: "Why does the course suggest seriously considering NCAA Division III?",
            options: [
              "Because D-III offers the largest athletic scholarships",
              "Because there are no athletic scholarships there — but there is strong lacrosse, real coaching, and admissions officers who care that you play, which beats a D-I roster spot you never come off the bench for",
              "Because D-III has no recruiting rules",
              "Because D-III teams play in the PLL",
            ],
            correctIndex: 1,
            explanation: "Also worth asking any program: how many players at my position, and how many are on the field on Saturday?",
            sourceLessonSlug: "college-and-recruiting",
          },
          {
            prompt: "What is the PLL, and how big is it?",
            options: [
              "A women's indoor league with four teams",
              "The top men's FIELD league in North America, with eight teams; 2026 is its eighth season",
              "The international governing body",
              "A college conference",
            ],
            correctIndex: 1,
            explanation:
              "Boston Cannons, New York Atlas, Philadelphia Waterdogs, Maryland Whipsnakes, Carolina Chaos, Denver Outlaws, Utah Archers, California Redwoods. It began as a touring league and moved to a city-based model.",
            sourceLessonSlug: "pro-leagues",
          },
          {
            prompt: "What does the NLL itself publish about its players' working lives?",
            options: [
              "That all players are full-time professional athletes",
              "That many hold multiple jobs — its own site runs a piece noting athletes hold down full-time jobs, raise families, AND play professionally",
              "That players are forbidden from outside employment",
              "Nothing — the league does not comment",
            ],
            correctIndex: 1,
            explanation:
              "It's the most useful fact in the lesson: professional lacrosse, for most people playing it, is not yet a full-time living. Plan accordingly.",
            sourceLessonSlug: "pro-leagues",
          },
          {
            prompt: "Why does this course refuse to print professional lacrosse salary figures?",
            options: [
              "Because salaries are secret by law",
              "Because the numbers circulating online come from content farms rather than leagues or player associations — if you want a number, get it from a league or a CBA",
              "Because players are unpaid",
              "Because salaries are identical across all leagues",
            ],
            correctIndex: 1,
            explanation: "Cite the source that owns the number, or don't cite a number.",
            sourceLessonSlug: "pro-leagues",
          },
          {
            prompt: "What changed for the Women's Lacrosse League (WLL) in 2026?",
            options: [
              "It folded",
              "It played its first full regular season — eleven weekends with playoffs, rosters expanded to 23, games on ESPN — and switched from sixes to full-field 10-v-10",
              "It expanded to sixteen teams",
              "It merged with the NLL",
            ],
            correctIndex: 1,
            explanation:
              "Four teams: Boston Guard, New York Charging, Maryland Charm, California Palms. That 10-v-10 matches World Lacrosse's women's field rules — the pro and international women's games are converging.",
            sourceLessonSlug: "pro-leagues",
          },
          {
            prompt: "Is Athletes Unlimited Pro Lacrosse currently operating?",
            options: [
              "Yes — it's the top women's league",
              "No — it ran 2021–2024 and Athletes Unlimited suspended it indefinitely, effective immediately, on December 18, 2024",
              "Yes, but only in Canada",
              "It never existed",
            ],
            correctIndex: 1,
            explanation:
              "Most online \"lists of pro lacrosse leagues\" still show it as active, because nobody updates a listicle. Check the league's own site, and check the date.",
            sourceLessonSlug: "pro-leagues",
          },
          {
            prompt: "When was lacrosse previously an Olympic medal sport?",
            options: [
              "1924 and 1936",
              "1904 (St. Louis) and 1908 (London) — with demonstration appearances in 1928, 1932 and 1948",
              "It has never been an Olympic sport",
              "1948 only",
            ],
            correctIndex: 1,
            explanation:
              "And at St. Louis in 1904 a team of Mohawk players from Canada took bronze — the Creator's Game's last Olympic medal era already included Indigenous people.",
            sourceLessonSlug: "road-to-la28",
          },
          {
            prompt: "How many teams per gender will play lacrosse at the Los Angeles 2028 Olympic Games?",
            options: ["Four", "Six", "Eight", "Twelve"],
            correctIndex: 1,
            explanation:
              "Six men's and six women's teams, in the Sixes discipline (World Lacrosse, July 1, 2026). It is a very small door.",
            sourceLessonSlug: "road-to-la28",
          },
          {
            prompt: "What is the confirmed qualification pathway to LA28?",
            options: [
              "A single world championship in 2028",
              "Continental championships (Sept–Dec 2026) → World Lacrosse Sixes Championships (Oct 2027, sending five teams per gender including host USA) → a final Olympic qualifying tournament in early 2028 that completes the field of six",
              "Direct invitation by the IOC",
              "The top six teams in the world rankings qualify automatically",
            ],
            correctIndex: 1,
            explanation:
              "Confirmed by World Lacrosse on July 1, 2026. The USA qualifies automatically as host, subject to participating in the Pan-American championships and the WLSC.",
            sourceLessonSlug: "road-to-la28",
          },
          {
            prompt: "What is the IOC's stated reason for not admitting the Haudenosaunee to the 2028 Games?",
            options: [
              "That the team isn't competitive enough",
              "That IOC eligibility rules require a National Olympic Committee, which requires recognition as an independent state — recognition the Haudenosaunee do not have from the UN, though World Lacrosse has recognized them as a full member since 1985",
              "That lacrosse isn't their traditional sport",
              "That the roster deadline passed",
            ],
            correctIndex: 1,
            explanation:
              "As of March 25, 2026 (Laskaris, Windspeaker). Claudia Jimerson of the Nationals: \"The barrier is structural, not athletic.\"",
            sourceLessonSlug: "road-to-la28",
          },
          {
            prompt: "What is the right way to state the Haudenosaunee Olympic-eligibility situation to someone else?",
            options: [
              "\"They're definitely in\"",
              "\"They're definitely out, forever\"",
              "\"As of [this date], the status was [this], and here is where I checked\" — because the question is live and the authoritative sources are the Nationals, the Onondaga Nation, World Lacrosse, and Indigenous news outlets",
              "\"Nobody knows anything about it\"",
            ],
            correctIndex: 2,
            explanation:
              "Dating your claim and naming your source is the single most valuable habit this course is trying to teach — in lacrosse and everywhere else.",
            sourceLessonSlug: "road-to-la28",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════
    // SECTION 6 — Opportunities: amateurs & entrepreneurs
    // ═══════════════════════════════════════════════════════════════════════
    {
      slug: "ways-into-the-game",
      title: "24 · Ways into the game that don't require being a star",
      section: "6 · Opportunities: amateurs & entrepreneurs",
      body: `Almost every conversation a young person has about a sport assumes one path: **be good enough to get picked.** That path is real, it is narrow, and — as Section 5 showed — it does not even end in a full-time living for most of the people who complete it.

Here is the other map. Every item on it is available to you **now**, at your current skill level, and several of them pay.

### 1. Get certified as a coach — possibly before you can drive

USA Lacrosse runs a coach certification ladder — **Bronze, Silver, Gold, and Platinum** (formerly Levels 1–3). Bronze is the baseline required of all active coach members and focuses on safety and risk management. Membership for coaches 18 and older includes enrollment in the Level 1 program, and every coach member gets a background screening through the National Center for Safety Initiatives, renewed every two years (USA Lacrosse, n.d.-b).

And here's the part most high-school students don't know: USA Lacrosse also runs a **Junior Coach** certification, aimed at teenagers — **a coach can be certified as a Junior Level 1 coach at 14** (USA Lacrosse, n.d.-c; confirm current requirements on the page, as certification programs get updated).

Read that again. You can hold a real, named coaching certification while you are still in high school, and go coach eight-year-olds on Saturday mornings.

### 2. Officiate (Lesson 18)

Certified, paid per game, chronically short-handed, and it makes you a smarter player. This is the highest-leverage item on the list.

### 3. Work the table

Timer, scorer, shot-clock operator (Lesson 18). Often the first paid job at a lacrosse venue, and the fastest way to learn the rulebook cold.

### 4. String sticks

Stringing a lacrosse head — the mesh, the sidewall, the shooting strings — is a craft skill that determines how a stick throws. Every team has players who cannot string their own sticks and will pay someone who can. It costs almost nothing to learn, requires no facility, and it is a genuine, immediate, cash-in-hand micro-business you can start this month. (It's also the shallow end of a much deeper craft tradition — Lesson 26.)

### 5. Film and stats

Coaches want film. Recruiters want film. Parents want film. Learn to shoot a game from a good angle, cut a clean highlight reel, and keep accurate stats, and you will not lack for people who want to pay you. It's also one of the few roles where the skills transfer straight into a career that has nothing to do with lacrosse.

### 6. Run wall-ball for younger kids

You need a wall, a bucket of balls, and an hour. Charge a small amount, or run it free at a rec center and build something. **A person who consistently shows up and organizes other people is a rarer and more valuable thing than a person with a good shot** — a sentence worth taping to your wall regardless of what you end up doing with your life.

:::reveal Name three roles in lacrosse that pay, that a high-school student can hold right now. ||| Any three of: certified official (USA Lacrosse certification, paid per game, chronic shortage); table crew (timer, scorer, shot-clock operator); certified coach — USA Lacrosse's Junior Coach certification starts as young as 14; stick stringer; film and stats; running wall-ball sessions for younger players.

## Sources
- USA Lacrosse. (n.d.-b). *Coach certification*. https://www.usalacrosse.com/coach-certification
- USA Lacrosse. (n.d.-c). *Junior coach certification*. https://www.usalacrosse.com/junior-coach-certification`,
      recallContent: [
        {
          prompt: "How many teams will play Olympic lacrosse per gender at LA28, and in which discipline?",
          answer: "Six per gender, in Sixes.",
        },
        {
          prompt: "As of the reporting verified in this course, can the Haudenosaunee compete at LA28?",
          answer:
            "As of March 25, 2026: no. The IOC requires a National Olympic Committee, which requires recognition as an independent state; the Haudenosaunee have World Lacrosse membership (since 1985) but not UN statehood, and no exception has been granted. Check the current status — it's live.",
        },
      ],
    },
    {
      slug: "building-a-program",
      title: "25 · Building a program: the honest economics",
      section: "6 · Opportunities: amateurs & entrepreneurs",
      body: `Lacrosse is a growing sport in a lot of places that don't have it yet. That is the entrepreneurial opening — and also a warning, because most people who "start a lacrosse program" start a club that costs families money and folds in two years. Here is how the economics actually work.

### The three models

**1. The school program.** Cheapest for families, hardest to start. It needs a school that will sanction it, a coach, a field, and enough equipment for a roster. Its advantage is enormous: it reaches kids who would never seek out a club, and it's usually free or nearly free to play.

**2. The rec/youth league.** A community organization, often volunteer-run, playing local games. Modest registration fee, borrowed fields, loaner equipment. This is where most players in a new lacrosse market actually come from.

**3. The club/travel team.** Paid coaching, tournament travel, showcase events. It is the recruiting pipeline (Lesson 20). It is also, honestly, a **business** — one whose customers are anxious parents and whose product is partly hope. Some clubs are outstanding. Some sell access they cannot deliver. If you build one, decide early which you're going to be.

### What it actually costs to put a kid on a field

Men's field lacrosse requires a helmet with facemask, gloves, and a stick, plus shoulder and arm protection — **before the first practice** (World Lacrosse, 2025a, Rule 17.1). Women's field requires a stick and a mouthguard, and, in NCAA and most U.S. school play, eye protection (NCAA, 2026a, Rule 2, Sec. 18); a goalkeeper in either game needs a helmet, throat guard and chest protector. Add cleats. Add a field. Add a registration fee. Add — if it's a club — travel.

This is why the sport's participation splits along income lines the way Section 5 described (Aspen Institute Project Play, n.d.). **Equipment is the gate.** Any program that wants to be genuinely open has to answer the equipment question before it answers anything else.

### The five things a program actually needs

1. **A field.** School fields, parks-department fields, a lined soccer pitch. This is a phone call, not a construction project.
2. **Equipment that families don't buy.** A loaner bin is the single highest-leverage thing a new program can build. Used gear, donated gear, grant-funded gear, outgrown gear from an established club nearby.
3. **Certified, background-checked coaches.** USA Lacrosse membership includes the certification path and a background screening through the National Center for Safety Initiatives, renewed every two years (USA Lacrosse, n.d.-b). This is not paperwork — it is the reason parents will trust you with their children.
4. **Officials.** No officials, no games. Which is why growing a program and growing the local officials' pool are the same project (Lesson 18).
5. **A reason to keep showing up.** Kids stay for their friends and for a coach who knows their name. They do not stay for a logo.

### Where the actual money is (and isn't)

The romantic version — you start a club, it grows, you turn pro — is rare. The realistic versions are ordinary and workable: **paid coaching** (school, club, camps, private sessions), **running camps and clinics** in the off-season, **officiating** at volume, **equipment services**, and **program administration** for a league that has grown past what volunteers can manage. None of these will make you rich. Several of them will pay you to spend your life around a game you love, which is not nothing, and is more than most people get.

:::reveal What is the single highest-leverage thing a new lacrosse program can build, and why? ||| A loaner-equipment bin. Equipment is the gate — men's field requires helmet, gloves, stick and arm/shoulder protection before the first practice; women's requires a stick, mouthguard and (in NCAA/most U.S. school play) eye protection. A program that removes the equipment cost removes the biggest barrier to who can walk on the field.

## Sources
- Aspen Institute Project Play. (n.d.). *Youth sports facts: Challenges*. https://projectplay.org/youth-sports/facts/challenges
- National Collegiate Athletic Association. (2026a). *2026 and 2027 NCAA women's lacrosse rules*. https://ncaaorg.s3.amazonaws.com/championships/sports/lacrosse/rules/women/PRWLA_RulesBook.pdf
- USA Lacrosse. (n.d.-b). *Coach certification*. https://www.usalacrosse.com/coach-certification
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.1). https://worldlacrosse.sport/wp-content/uploads/2026/01/WL_Mens-Rules_25-27_FINAL_1.1.pdf`,
      recallContent: [
        {
          prompt: "At what age can someone hold a USA Lacrosse Junior Coach certification?",
          answer: "As young as 14 — a real, named coaching credential you can hold while still in high school. (Confirm current requirements on USA Lacrosse's page.)",
        },
        {
          prompt: "What are USA Lacrosse's coach certification levels, and what does membership include?",
          answer:
            "Bronze, Silver, Gold and Platinum (formerly Levels 1–3), with Bronze as the safety-and-risk baseline for all active coach members. Membership includes the certification path and a background screening through the National Center for Safety Initiatives, renewed every two years.",
        },
      ],
    },
    {
      slug: "the-business-side",
      title: "26 · The business side: sticks, gear, camps, and media",
      section: "6 · Opportunities: amateurs & entrepreneurs",
      body: `Every sport has an economy around it. Lacrosse's is small enough that an individual can still find a real gap in it — which is exactly why it's interesting.

### Stringing, and the craft behind it

Start with the obvious one: **stringing heads for money.** Low startup cost, immediate demand, no facility. Learn mesh, sidewall, shooters, pocket placement, and learn the pocket-depth rules well enough that you never string an illegal stick (Lesson 2 — officials check).

Then look at the deep end of the same craft. A traditional Haudenosaunee wooden stick takes years: select hickory, split, steam, bend, clamp, cure, carve, string. Onondaga's **Alf Jacques** made them for roughly half a century and taught the game's history alongside them; he was called "one of the greatest ambassadors the sport has ever seen" (Onondaga Nation, 2023). This is a living Indigenous craft, held by a small number of makers, sitting alongside a plastic mass-manufacturing industry that mostly ignores it.

If you are not Haudenosaunee, the honest way into that world is as a **customer, a student, and an advocate** — not as someone who learns the shape and sells it. Buy from Native makers. Learn who they are. Understand that the wooden stick means something before you handle one like inventory.

### Equipment and the second-hand market

Gear is expensive (Lesson 25) and kids outgrow it every year. That combination is a business and a public good at the same time: **used-equipment resale, cleaning and refurbishing, gear swaps, and consignment.** It is unglamorous and it is genuinely needed, and every dollar it takes off a family's cost is a kid who gets to play.

### Camps, clinics, and coaching

Off-season camps, position-specific clinics (goalkeeping, face-off/draw, defense), skills sessions, wall-ball groups. The barrier is trust, not talent: certification and a background check (USA Lacrosse, n.d.-b) plus a track record. Start small, run one clinic well, and let it grow by word of mouth.

### Media

The sport is under-covered relative to how fast it's growing, and the tools are in your pocket. Game film, highlight reels, a local-scene newsletter, a podcast, photography, a YouTube channel that explains rules to new parents. The PLL and WLL now put their games on ESPN networks (USA Lacrosse, 2025) — a signal that the audience is real and growing, and that the amateur layer beneath it (high-school and club coverage) is largely unbuilt.

### The rule that governs all of it

**Solve a problem someone actually has.** Nobody needs another lacrosse apparel brand. Plenty of people need: a stick strung properly by Thursday; a used helmet that fits an eleven-year-old; a clinic for kids whose school has no team; an official who shows up on time; a highlight reel that a college coach will actually watch; a wooden stick made by someone who knows what it means. **Every one of those is a business, and none of them requires you to be great at lacrosse.**

:::reveal If you are not Haudenosaunee, what is the honest way to engage with traditional wooden stick-making? ||| As a customer, a student, and an advocate — buy from Native makers, learn who they are, and understand that the wooden stick carries meaning before you handle one like inventory. Not by learning the shape and selling it.

## Sources
- Onondaga Nation. (2023). *'National treasure of the Haudenosaunee' Alfie Jacques dies at 74*. https://www.onondaganation.org/news/2023/national-treasure-of-the-haudenosaunee-alfie-jacques-dies-at-74/
- USA Lacrosse. (n.d.-b). *Coach certification*. https://www.usalacrosse.com/coach-certification
- USA Lacrosse. (2025, September 10). *Women's Lacrosse League expands to full season schedule with playoffs*. https://www.usalacrosse.com/magazine/professional/wll/womens-lacrosse-league-expands-full-season-schedule-playoffs`,
      recallContent: [
        {
          prompt: "Name three of the five things a new lacrosse program actually needs.",
          answer:
            "Any three of: a field (a phone call, not a construction project); loaner equipment families don't have to buy; certified, background-checked coaches; officials (no officials, no games); and a reason for kids to keep showing up — friends and a coach who knows their name.",
        },
        {
          prompt: "Why does equipment matter so much to who gets to play lacrosse?",
          answer:
            "Because it's the gate. Men's field requires a helmet, gloves, stick and arm/shoulder protection before the first practice; goalkeepers need a helmet, throat guard and chest protector. Add cleats, fees and travel, and the sport's participation splits along income lines.",
        },
      ],
    },
    {
      slug: "the-access-problem",
      title: "27 · The access problem, named honestly",
      section: "6 · Opportunities: amateurs & entrepreneurs",
      body: `Here is the thing a promotional lacrosse course would leave out.

**Lacrosse is an Indigenous game that became, in its organized American form, one of the whitest and most expensive sports in the country.** Not by accident, and not only by economics — Section 1 showed you the 1880 rule that pushed Indigenous players out of the sport's championship structure for over a century (Downey, 2018).

### The numbers, and how to get current ones

A peer-reviewed study of NCAA participation data reported that white athletes made up **91.4% of male lacrosse players and 90.6% of female lacrosse players**, with Black athletes at 2.2% and 2.4% respectively (Fultz & Chen, 2012, using NCAA data). Those figures are more than a decade old, and the sport has changed somewhat since — which is exactly why you should not take them as current.

**Go get the current ones yourself.** The NCAA publishes a **Demographics Database** that lets you break participation down by sport, division, and race/ethnicity, updated regularly (NCAA, n.d.-a). Look up lacrosse. Look up a sport you'd expect to be more diverse. Compare. That's a twenty-minute exercise that will teach you more than any paragraph here can.

### Why it's like this

Three causes, all real, none of them "kids in some neighborhoods don't like lacrosse":

1. **Equipment cost** (Lesson 25) — a gate at the door.
2. **The travel-club pipeline** (Lesson 20) — recruiting happens where the money already is. Project Play: travel is the costliest feature of youth sports, and participation splits sharply by household income (Aspen Institute Project Play, n.d.).
3. **Geography and history** — the sport concentrated in a handful of regions and a set of schools, and stayed there. Plus the exclusion in Section 1, whose effects don't evaporate because a rule was repealed.

### What people are actually doing about it

- **School-based programs that go to the kids.** **Harlem Lacrosse** places full-time program directors *inside* schools, running not just lacrosse but "daily wrap-around academic support, mentoring, leadership training, college readiness, career exploration [and] admissions counseling," across New York, Boston, Los Angeles, Baltimore, and Philadelphia (Harlem Lacrosse, n.d.). The model is the interesting part: the program comes to the school, not the other way round, and the sport is the hook rather than the point.
- **Loaner-equipment programs** that remove the gate entirely.
- **Sixes.** Don't miss this: World Lacrosse's newest discipline needs a smaller field, fewer players, and no long sticks or face-off specialists (World Lacrosse, 2026b). A discipline explicitly designed to lower the cost of entry is an access intervention wearing an Olympic uniform.
- **Indigenous-led lacrosse**, on its own terms — the Haudenosaunee Nationals, wooden-stick festivals, community programs. Support looks like showing up, buying from Native makers, and getting the history right when you tell it.

### The entrepreneurial reading of all this

Every barrier in this lesson is also an opening. A sport with an equipment gate needs equipment programs. A sport with a travel-club pipeline needs alternatives to it. A sport that is 90% one demographic in a country that is not has an enormous unserved population and a growing one — and the people who build the on-ramps will be the ones who shape what the sport becomes over the next twenty years.

**That is a more interesting job than being a professional lacrosse player, and — as Section 5 showed — a considerably better-paid one.**

:::reveal What are the three real causes of lacrosse's access problem? ||| Equipment cost (a gate at the door); the travel-club recruiting pipeline (recruiting happens where the money already is); and geography plus history — including the 1880 exclusion of Indigenous players from championship competition, whose effects didn't evaporate when the rule was repealed. Notably absent: any claim that some kids "aren't interested."

## Sources
- Aspen Institute Project Play. (n.d.). *Youth sports facts: Challenges*. https://projectplay.org/youth-sports/facts/challenges
- Downey, A. (2018). *The Creator's game: Lacrosse, identity, and Indigenous nationhood*. UBC Press. https://www.ubcpress.ca/the-creators-game
- Fultz, M., & Chen, S. (2012). A close look at the diversity of lacrosse. *KAHPERD Journal, 50*(1), 13–18. https://scholarworks.moreheadstate.edu/msu_faculty_research/309/
- Harlem Lacrosse. (n.d.). *Harlem Lacrosse*. https://www.harlemlacrosse.org/
- National Collegiate Athletic Association. (n.d.-a). *NCAA demographics database*. https://www.ncaa.org/sports/2018/12/13/ncaa-demographics-database.aspx
- World Lacrosse. (2026b). *2026–2028 Sixes lacrosse official playing rules* (Ver. 2.0, May 2026). https://worldlacrosse.sport/wp-content/uploads/2026/05/26-28-Sixes-Rule-Book_v2_0526.pdf`,
      recallContent: [
        {
          prompt: "What's the rule that governs any lacrosse business idea?",
          answer:
            "Solve a problem someone actually has. Nobody needs another apparel brand; plenty of people need a stick strung by Thursday, a used helmet that fits, a clinic for kids with no school team, an official who shows up on time, or a highlight reel a coach will actually watch.",
        },
        {
          prompt: "Why is the second-hand equipment market both a business and a public good?",
          answer:
            "Gear is expensive and kids outgrow it every year. Resale, refurbishing, swaps and consignment take cost off families — and every dollar removed is a kid who gets to play.",
        },
      ],
    },
    {
      slug: "lacrosse-exercise",
      title: "28 · Practice: the vocabulary that makes you sound like you belong",
      section: "6 · Opportunities: amateurs & entrepreneurs",
      body: "Fill in the missing term. One or two words each; spelling and capitalization are checked forgivingly. These are the terms that recur across the whole course — the rules, the strategy, the history, and the business.",
      exercise: {
        instructions:
          "Type the term the description points to. If you're stuck, the lesson that teaches it is named in the explanation after you check.",
        items: [
          {
            prompt:
              "Because lacrosse was given by the Creator, is played for the Creator, and is known to have healing power, the Onondaga Nation also call it the ________ Game.",
            answer: "Medicine",
            accept: ["medicine", "medicine game", "the medicine game"],
            explanation:
              "Onondaga Nation (n.d.). It is also called the Creator's Game. (Lesson 1)",
          },
          {
            prompt:
              "The Montreal dentist who wrote down the first modern rules from 1860 and drove the founding of the National Lacrosse Association in 1867 was William George ________.",
            answer: "Beers",
            accept: ["beers", "w.g. beers"],
            explanation:
              "He codified an existing Indigenous game — and simultaneously argued that \"the Indian never can play as scientifically as the best white players.\" (Lesson 3)",
          },
          {
            prompt:
              "The national teams of the Haudenosaunee Confederacy — a full member of World Lacrosse since 1985 — are called the Haudenosaunee ________.",
            answer: "Nationals",
            accept: ["nationals", "haudenosaunee nationals"],
            explanation:
              "Known as the Iroquois Nationals until June 2022. The only Indigenous nation admitted to international competition by a sport's world governing body. (Lesson 4)",
          },
          {
            prompt:
              "In World Lacrosse men's field, a full team of ten is 1 goalkeeper, 3 defenders, 3 midfielders and 3 ________.",
            answer: "attackers",
            accept: ["attacker", "attack", "attackmen", "attackers/attack"],
            explanation: "World Lacrosse (2025a), Rule 19.1. (Lesson 6)",
          },
          {
            prompt:
              "The women's rule forbidding a defender from blocking or guarding the goal with any part of their body to obstruct the shooting lane is called ________ ________.",
            answer: "shooting space",
            accept: ["shooting-space", "the shooting space"],
            explanation:
              "World Lacrosse (2025b), Rule 20.A.19 — it exists because obstructing that space \"denies the attacking team the opportunity to shoot safely.\" (Lesson 7)",
          },
          {
            prompt:
              "The six-a-side discipline, played on a 70 m × 36 m field with four 8-minute quarters and a 30-second shot clock, that will be played at the 2028 Olympics is called ________.",
            answer: "Sixes",
            accept: ["sixes", "lacrosse sixes", "six"],
            explanation: "World Lacrosse (2026b). Designed to lower cost and make the sport globally viable. (Lesson 9)",
          },
          {
            prompt:
              "The space directly behind the goal — playable because the goal sits 12 m off the end line — is traditionally called ________.",
            answer: "X",
            accept: ["x", "behind the goal", "the x"],
            explanation:
              "The best attacking real estate on the field: your defender's back is to their own cage and you can attack from either side. (Lesson 12)",
          },
          {
            prompt:
              "When a defender leaves their own player to stop a ball carrier who has beaten their defender, that's called a ________.",
            answer: "slide",
            accept: ["slide", "sliding"],
            explanation:
              "And it forces the rest of the defense to rotate, because it always leaves someone open. (Lesson 13)",
          },
          {
            prompt:
              "Moving the ball out of your own defensive end after winning it is called a ________; the opponent's pressure on it is called a ride.",
            answer: "clear",
            accept: ["clear", "clearing"],
            explanation: "A turnover during a clear hands the opponent the ball near your goal with your defense out of position. (Lesson 14)",
          },
          {
            prompt:
              "In World Lacrosse men's field, the penalty for a major foul is a suspension of 1, 2, or 3 ________.",
            answer: "minutes",
            accept: ["minute", "minutes", "mins"],
            explanation:
              "Rule 68.1 — at the officials' judgment of severity and intent. That's the extra-man offense. (Lesson 14)",
          },
          {
            prompt:
              "USA Lacrosse calls officials \"the third ________ on the field.\"",
            answer: "team",
            accept: ["team"],
            explanation:
              "Certified, paid per game, chronically short-handed — the most accessible paid role in the sport. (Lesson 18)",
          },
          {
            prompt:
              "The women's professional league launched by the PLL, which played its first full regular season in 2026, is the ________ ________ ________ (abbreviated WLL).",
            answer: "Women's Lacrosse League",
            accept: ["womens lacrosse league", "women's lacrosse league", "wll"],
            explanation:
              "Four teams — Boston Guard, New York Charging, Maryland Charm, California Palms — and it switched from sixes to 10-v-10 for 2026. (Lesson 21)",
          },
          {
            prompt:
              "The IOC's stated reason the Haudenosaunee cannot currently enter the Olympics is that they lack a National Olympic ________.",
            answer: "Committee",
            accept: ["committee", "noc"],
            explanation:
              "An NOC requires recognition as an independent state. \"The barrier is structural, not athletic\" — Claudia Jimerson. (Lesson 22)",
          },
          {
            prompt:
              "USA Lacrosse's certification aimed at teen coaches — available from age 14 — is the ________ Coach certification.",
            answer: "Junior",
            accept: ["junior", "junior coach"],
            explanation: "A real, named coaching credential you can hold while still in high school. (Lesson 24)",
          },
          {
            prompt:
              "The single highest-leverage thing a new lacrosse program can build, because equipment is the gate, is a ________ bin (or program) of gear families don't have to buy.",
            answer: "loaner",
            accept: ["loaner", "loan", "equipment", "loaner equipment"],
            explanation:
              "Remove the equipment cost and you remove the biggest barrier to who can walk onto the field. (Lessons 25 and 27)",
          },
        ],
      },
    },
    {
      slug: "quiz-opportunities",
      title: "29 · Check your understanding: opportunities",
      section: "6 · Opportunities: amateurs & entrepreneurs",
      body: "The final graded quiz. Passing score is 70%.",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is the minimum age for a USA Lacrosse Junior Coach certification?",
            options: ["18", "16", "14", "There is no junior pathway"],
            correctIndex: 2,
            explanation:
              "You can hold a real, named coaching credential while still in high school (USA Lacrosse, n.d.-c — confirm current requirements on their page).",
            sourceLessonSlug: "ways-into-the-game",
          },
          {
            prompt: "What are USA Lacrosse's coach certification levels?",
            options: [
              "Beginner, Intermediate, Advanced",
              "Bronze, Silver, Gold, Platinum (formerly Levels 1–3), with Bronze as the safety/risk-management baseline for all active coach members",
              "A, B, and C licences",
              "There is only one level",
            ],
            correctIndex: 1,
            explanation:
              "Membership also includes a background screening through the National Center for Safety Initiatives, renewed every two years.",
            sourceLessonSlug: "ways-into-the-game",
          },
          {
            prompt: "Which of these is described as the highest-leverage paid role available to a high-school student in lacrosse?",
            options: ["Playing on a travel club team", "Officiating", "Selling apparel", "Managing a college roster"],
            correctIndex: 1,
            explanation:
              "Certified, paid per game, chronically short-handed — and it makes you a smarter player, because you have to know exactly where every line is.",
            sourceLessonSlug: "ways-into-the-game",
          },
          {
            prompt: "Why is stick stringing a realistic micro-business for a student?",
            options: [
              "It requires a workshop and expensive machinery",
              "It costs almost nothing to learn, requires no facility, and every team has players who can't string their own sticks and will pay someone who can",
              "It's licensed by World Lacrosse",
              "It only pays at professional level",
            ],
            correctIndex: 1,
            explanation:
              "Just learn the pocket-depth rules well enough never to string an illegal stick — officials check.",
            sourceLessonSlug: "ways-into-the-game",
          },
          {
            prompt: "Which statement about the three program models is accurate?",
            options: [
              "School programs are the most expensive for families",
              "Club/travel teams are the cheapest way to play",
              "School programs are cheapest for families and reach kids who'd never seek out a club; club/travel teams are a business whose product is partly hope",
              "Rec leagues are only for elite players",
            ],
            correctIndex: 2,
            explanation:
              "Some clubs are outstanding; some sell access they cannot deliver. If you build one, decide early which you're going to be.",
            sourceLessonSlug: "building-a-program",
          },
          {
            prompt: "What is the single highest-leverage thing a new lacrosse program can build?",
            options: [
              "A logo and uniforms",
              "A loaner-equipment bin — because equipment is the gate",
              "A social media account",
              "A championship team",
            ],
            correctIndex: 1,
            explanation:
              "Men's field requires helmet, gloves, stick and arm/shoulder protection before the first practice. Remove that cost and you remove the biggest barrier to who can play.",
            sourceLessonSlug: "building-a-program",
          },
          {
            prompt: "Why are growing a program and growing the local officials' pool the same project?",
            options: [
              "Because officials also coach",
              "Because no officials means no games",
              "Because officials pay the league fees",
              "They're unrelated",
            ],
            correctIndex: 1,
            explanation: "A program with no officials has practices, not a season.",
            sourceLessonSlug: "building-a-program",
          },
          {
            prompt: "What does the course say about where the realistic money is in lacrosse?",
            options: [
              "Playing professionally",
              "Paid coaching, camps and clinics, officiating at volume, equipment services, and program administration — none of which will make you rich, but several of which will pay you to spend your life around the game",
              "Sponsorship deals for amateur players",
              "There is no money in lacrosse at any level",
            ],
            correctIndex: 1,
            explanation:
              "The romantic version — start a club, turn pro — is rare. The ordinary versions are workable, and more than most people get.",
            sourceLessonSlug: "building-a-program",
          },
          {
            prompt: "If you are not Haudenosaunee, what's the honest way to engage with traditional wooden stick-making?",
            options: [
              "Learn the shape and start selling wooden sticks",
              "As a customer, a student, and an advocate — buy from Native makers, learn who they are, and understand the stick carries meaning before you handle one like inventory",
              "Avoid the subject entirely",
              "Mass-produce a plastic version",
            ],
            correctIndex: 1,
            explanation:
              "It's a living Indigenous craft held by a small number of makers, sitting alongside a mass-manufacturing industry that mostly ignores it.",
            sourceLessonSlug: "the-business-side",
          },
          {
            prompt: "What's the rule the course gives for evaluating any lacrosse business idea?",
            options: [
              "Go where the biggest market is",
              "Solve a problem someone actually has — nobody needs another apparel brand; plenty of people need a stick strung by Thursday or a used helmet that fits",
              "Only start something if you were an elite player",
              "Copy what a successful club is already doing",
            ],
            correctIndex: 1,
            explanation: "And none of those problems requires you to be great at lacrosse.",
            sourceLessonSlug: "the-business-side",
          },
          {
            prompt: "What did a peer-reviewed study of NCAA data (Fultz & Chen, 2012) report about lacrosse participation?",
            options: [
              "That lacrosse was the most racially diverse NCAA sport",
              "That white athletes made up 91.4% of male and 90.6% of female NCAA lacrosse players, with Black athletes at 2.2% and 2.4%",
              "That participation was evenly split across all groups",
              "That the NCAA does not collect this data",
            ],
            correctIndex: 1,
            explanation:
              "Those figures are over a decade old — which is why the lesson tells you to go pull current numbers from the NCAA's own Demographics Database rather than trusting a stale paragraph.",
            sourceLessonSlug: "the-access-problem",
          },
          {
            prompt: "Which of these is NOT one of the three real causes of lacrosse's access problem?",
            options: [
              "Equipment cost",
              "The travel-club recruiting pipeline",
              "Geography and history, including the 1880 exclusion of Indigenous players",
              "Kids in some neighborhoods not being interested in the sport",
            ],
            correctIndex: 3,
            explanation:
              "That last one is the explanation people reach for when they haven't looked at the first three.",
            sourceLessonSlug: "the-access-problem",
          },
          {
            prompt: "What is distinctive about the Harlem Lacrosse model?",
            options: [
              "It runs elite travel tournaments",
              "It places full-time program directors inside schools, delivering academic support, mentoring, leadership training and college/career counseling alongside lacrosse — the program comes to the school, not the other way round",
              "It is a professional league",
              "It manufactures equipment",
            ],
            correctIndex: 1,
            explanation:
              "It operates in New York, Boston, Los Angeles, Baltimore and Philadelphia. The sport is the hook rather than the point.",
            sourceLessonSlug: "the-access-problem",
          },
          {
            prompt: "In what sense is the Sixes discipline an access intervention?",
            options: [
              "It isn't — it's purely a TV format",
              "It needs a smaller field, fewer players, and no long sticks or face-off specialists — a discipline explicitly designed to lower the cost of entry, wearing an Olympic uniform",
              "It bans expensive equipment brands",
              "It is free to play by rule",
            ],
            correctIndex: 1,
            explanation:
              "Field lacrosse's big pitch, big roster and specialist gear quietly favor countries and communities that already have infrastructure. Sixes strips that out.",
            sourceLessonSlug: "the-access-problem",
          },
          {
            prompt: "What is the entrepreneurial reading of lacrosse's access problem?",
            options: [
              "That the sport is a bad market and should be avoided",
              "That every barrier is also an opening — a sport with an equipment gate needs equipment programs, a sport with a travel-club pipeline needs alternatives, and a sport that is 90% one demographic has an enormous unserved population",
              "That someone else will fix it eventually",
              "That the only fix is more scholarships",
            ],
            correctIndex: 1,
            explanation:
              "The people who build the on-ramps will shape what the sport becomes over the next twenty years — a more interesting job than playing professionally, and a better-paid one.",
            sourceLessonSlug: "the-access-problem",
          },
        ],
      },
    },
  ],
};
