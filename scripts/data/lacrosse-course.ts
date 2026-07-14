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
//  • EVERY RULE IS QUOTED FROM A REAL, CURRENT RULEBOOK. No invented rule numbers. Men's and
//    women's lacrosse are DIFFERENT GAMES with different codes; every rules lesson names the
//    discipline AND the code (World Lacrosse vs. NCAA) before it gives a number:
//      - World Lacrosse. Rules of Men's Field Lacrosse 2025–2027 (Ver. 1.0).
//      - World Lacrosse. 2025–2026 Women's Field Lacrosse Rules (v1.1).
//      - World Lacrosse. 2026–2028 Sixes Lacrosse Official Playing Rules (Ver. 1.0).
//      - NCAA. 2025 and 2026 Men's Lacrosse Rules and Interpretations.
//      - NCAA. 2026 and 2027 Women's Lacrosse Rules.
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
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.0). https://worldlacrosse.sport/wp-content/uploads/2025/01/WL_Mens-Rules_25-27.pdf`,
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
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.0). https://worldlacrosse.sport/wp-content/uploads/2025/01/WL_Mens-Rules_25-27.pdf`,
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

Sources by cell: World Lacrosse (2025a) Rules 19.1, 1.1, 29.1, 43.1, 17.1; World Lacrosse (2025b) Rules 5.A.3, 1.A.2–1.A.3, 12.A.1, 24.A.1, 6.A.2, 13.A.5; NCAA (2025) Rule 1 Sec. 1–2, Rule 3 Sec. 1; NCAA (2026a) Rule 1, Rule 2 Sec. 18.

### The three that trip everyone

**1. "Women's lacrosse is 12-a-side."** Half true. NCAA women's: "Twelve players constitute a full team… One of the 12 players on each team may be a goalkeeper" (NCAA, 2026a, Rule 1). World Lacrosse women's: ten (Rule 5.A.3). Both are correct in their own code. Say which one you mean.

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
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.0). https://worldlacrosse.sport/wp-content/uploads/2025/01/WL_Mens-Rules_25-27.pdf
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

Those W/M markers are where the men's and women's games still diverge, and equipment is the clearest case. **Sixes men's (Rule 2.4.1M):** players are required to wear protective gloves and a lacrosse helmet with facemask and chinstrap. **Sixes women's (Rule 2.4.1W):** gloves, nose guards, and eye guards *may* be worn; eye guards must meet the ASTM F3077 standard or comparable. Same discipline, same field, same clock — different protective rules, because the contact rules differ.

### Why Sixes exists

Follow the money and the geography. Field lacrosse needs a big pitch, a big roster, and expensive specialist equipment — including long sticks and face-off specialists — which quietly favors countries that already have deep lacrosse infrastructure. Sixes strips that out: a small field, six players, a 30-second clock, no face-off after goals, no positional specialists. A country with one pitch and twelve committed players can field a competitive Sixes team. That is what a governing body does when it wants a sport to be genuinely global — and it is exactly what the International Olympic Committee looks for.

:::reveal What is the Olympic lacrosse discipline, and what are its four defining numbers? ||| Sixes. Six players a side (five field players + a goalkeeper), a 70 m × 36 m field, four 8-minute quarters, and a 30-second shot clock (World Lacrosse, 2026b). After a goal there is no face-off — the goalkeeper restarts play.

## Sources
- World Lacrosse. (2026a). *2026–2028 box lacrosse official playing rules*. https://worldlacrosse.sport/wp-content/uploads/2026/02/WL-26-28-Box-Rule-Book_Feb26.pdf
- World Lacrosse. (2026b). *2026–2028 Sixes lacrosse official playing rules* (Ver. 1.0). https://worldlacrosse.sport/wp-content/uploads/2026/02/WL-26-28-Sixes-Rule-Book_Feb26.pdf`,
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
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.0). https://worldlacrosse.sport/wp-content/uploads/2025/01/WL_Mens-Rules_25-27.pdf`,
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
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.0). https://worldlacrosse.sport/wp-content/uploads/2025/01/WL_Mens-Rules_25-27.pdf
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
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.0). https://worldlacrosse.sport/wp-content/uploads/2025/01/WL_Mens-Rules_25-27.pdf
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
- World Lacrosse. (2025a). *Rules of men's field lacrosse: 2025–2027* (Ver. 1.0). https://worldlacrosse.sport/wp-content/uploads/2025/01/WL_Mens-Rules_25-27.pdf
- World Lacrosse. (2026b). *2026–2028 Sixes lacrosse official playing rules* (Ver. 1.0). https://worldlacrosse.sport/wp-content/uploads/2026/02/WL-26-28-Sixes-Rule-Book_Feb26.pdf`,
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
    // <<<APPEND-NEXT-SECTION>>>
  ],
};
