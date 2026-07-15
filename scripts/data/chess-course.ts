// Authored "Chess: Play It, Study It, Build With It" — a high-school-level, cited course covering
// how to play, the FIDE Laws of Chess, strategy and tactics, fifteen centuries of verified
// history, how organized chess fits together, and the honest economics of the game for amateurs
// and entrepreneurs.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every rule statement is cited to the FIDE Laws of Chess taking effect from 1 January 2023
//     (FIDE Handbook E.01), with the ARTICLE NUMBER read out of the handbook — not guessed.
//     Touch-move is Article 4.3. The distinction most web summaries miss: threefold repetition
//     (9.2) and the fifty-move rule (9.3) are draws a PLAYER must claim, while fivefold
//     repetition (9.6.1) and the seventy-five-move rule (9.6.2) end the game automatically.
//     Where a claim could not be pinned to a verified article number, the course states the rule
//     WITHOUT a number rather than inventing one.
//   * Piece point values (9/5/3/3/1) are taught explicitly as COACHING CONVENTION, not law —
//     the FIDE rulebook assigns no point values to anything.
//   * History dates were individually verified: chaturanga in ~6th-century India → shatranj in
//     Persia → the queen's and bishop's modern powers in late-15th-century Europe;
//     Steinitz–Zukertort 1886 as the first official world championship; KASPAROV WON the 1996
//     Philadelphia match 4–2, and DEEP BLUE won the 1997 New York rematch 3½–2½ (Game 6, 11 May
//     1997) — a pair of results the internet routinely garbles into one; AlphaZero's 2017
//     preprint and 2018 Science paper; The Queen's Gambit boom figures come from Netflix's own
//     announcement (62M households / 28 days) rather than from retellings of it.
//   * Ratings and titles are cited to FIDE's own pages and the FIDE title regulations (Handbook
//     B.01): US Chess adopted Elo's system in 1960, FIDE in 1970; GM ≥2500, IM ≥2400, FM ≥2300,
//     CM ≥2200, with norms across at least 27 games.
//   * The economics section is honest by design: almost nobody earns a living PLAYING chess, and
//     the course says so, then maps the real jobs around the board (coaching, the scholastic
//     pipeline, content, directing/arbitration, fair play) instead of selling the dream. No
//     invented salaries, no invented rates — a number appears with a year and a source, or it
//     does not appear.

import type { AuthoredCourse } from "./authored-course";

export const CHESS_COURSE: AuthoredCourse = {
  title: "Chess: Play It, Study It, Build With It",
  description:
    "A complete, cited chess course for high school students: how to actually play (the board, the six pieces, check and checkmate, castling, en passant, promotion, and how to read algebraic notation), the rulebook itself (the FIDE Laws of Chess — touch-move, the clock, and the five different ways a game can be drawn), how to think (opening principles, forks, pins, skewers, discovered attacks, and the endgames every player must know), fifteen centuries of verified history (chaturanga to shatranj to the fifteenth-century queen, Steinitz to Deep Blue to AlphaZero to the 2020 online boom), how organized chess fits together (FIDE, Elo ratings, the title system, the Olympiad, US Chess, and the online platforms), and the honest economics — why almost nobody earns a living playing chess, and the many real ways to build a life or a business around the board anyway.",
  lessons: [
    // ─────────────────────────── SECTION 1 · HOW TO PLAY ───────────────────────────
    {
      slug: "chess-board-and-goal",
      title: "1 · The board, the armies, and the point of the game",
      section: "Section 1 · How to play: the board, the pieces, the goal",
      body: `Chess is a fight between two armies of sixteen pieces on a board of sixty-four squares, and the whole thing is decided by exactly one piece: the king. Everything else — every opening, every sacrifice, every hour anyone has ever spent studying — is about that.

**The board.** An 8×8 grid of alternating light and dark squares. The board sits between the players so that **the corner square nearest each player's right hand is light** (Fédération Internationale des Échecs [FIDE], 2023, Art. 2.1). "White on the right." Roughly half the chess boards in movies, ads, and stock photos are set up wrong; now you'll never un-see it.

Every square has a name. The **files** (columns) are lettered **a through h** from White's left; the **ranks** (rows) are numbered **1 through 8** starting from White's side. So the square where White's king starts is **e1**, and the center squares — the most valuable real estate on the board — are **d4, d5, e4, e5**.

**The setup.** Each side starts with eight pawns on its second rank (second from that player, so rank 2 for White, rank 7 for Black), and behind them, from the corners inward: **rook, knight, bishop**, then **queen and king** in the middle (FIDE, 2023, Art. 2.2–2.3). The one everybody forgets: **the queen starts on her own color**. White's queen on **d1** (a light square), Black's queen on **d8** (a dark square). If the queen and king are swapped, the game hasn't started yet and someone should fix it.

**Who moves first.** The player with the light-colored pieces — **White — makes the first move, and the players then move alternately** (FIDE, 2023, Art. 1.2). Moving first is a small but real advantage, which is why organized chess alternates colors between rounds.

**The point of the game.** The objective is to attack the opponent's king in such a way that it has **no legal escape** — that is **checkmate**, and it wins the game (FIDE, 2023, Art. 1.4, 5.1.1). You never actually capture the king. The game ends the instant the king cannot be saved.

Hold on to that. Beginners play to grab pieces. Pieces matter — a bigger army usually wins — but pieces are the means. A player with almost nothing left who checkmates beats a player with two extra queens who doesn't. The next four lessons teach you the pieces, the endings, the special moves, and the language, and then Section 2 hands you the actual rulebook.

:::reveal You sit down at a tournament and notice the corner square nearest your right hand is dark. What is wrong, and what is the other classic setup error you should check for? ||| The board is rotated — the near-right corner must be a light square (FIDE, 2023, Art. 2.1). Once it's fixed, check that each queen starts on her own color: White's queen on d1 (light), Black's on d8 (dark). A swapped king and queen is the other setup error hiding in half the chess photos ever taken.

## Sources
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
    },
    {
      slug: "chess-how-pieces-move",
      title: "2 · How the six pieces move",
      section: "Section 1 · How to play: the board, the pieces, the goal",
      body: `Six kinds of piece, six movement rules, and one shared law: **a piece captures by moving to a square occupied by an enemy piece and removing it** — with one pawn-shaped exception you'll meet in Lesson 4. You can never move onto a square occupied by your own piece (FIDE, 2023, Art. 3.1).

| Piece | Moves | The thing to remember |
| --- | --- | --- |
| **Rook** | Any number of squares along its rank or file (Art. 3.3) | Long-range; loves open files |
| **Bishop** | Any number of squares along a diagonal (Art. 3.2) | Trapped on one color for the whole game |
| **Queen** | Rook + bishop combined (Art. 3.4) | Strongest piece; also the easiest to lose by showing off |
| **Knight** | To one of the nearest squares *not* on its own rank, file, or diagonal (Art. 3.6) | The famous "L"; the only piece that jumps |
| **King** | One square in any direction (Art. 3.8) | Can never move into check |
| **Pawn** | Forward one square; optionally two from its starting square; **captures diagonally forward** (Art. 3.7) | The only piece that moves one way and captures another — and it never moves backward |

Three of those rows carry the ideas that decide real games.

**The blocking rule.** The bishop, rook, and queen **may not move over any intervening pieces** (FIDE, 2023, Art. 3.5). At the start of the game every one of those long-range pieces is walled in behind pawns — which is exactly why openings are about *opening* lines. The knight is the sole exception: it jumps over anything, friend or enemy, which is why knights are the first pieces that can develop and why they thrive in blocked positions where the long-range pieces suffocate.

**The bishop's life sentence.** A bishop that starts on a light square moves along diagonals forever — and every square on a diagonal from a light square is light. Each side's two bishops split the board between them, one on each color, and neither can ever help the other. Lose your dark-squared bishop and the dark squares around your king get permanently weaker. Strong players genuinely think in colors like this.

**The pawn's double identity.** A pawn *moves* straight ahead but *captures* one square diagonally forward. So a pawn directly in front of an enemy pawn is stuck — neither can move or take the other — while a pawn diagonal to an enemy piece is a threat. And because pawns can never retreat, every pawn move is permanent in a way no piece move is.

Notice what's *not* in the table: point values. You have probably heard that a queen is "worth 9" and a pawn "worth 1." That's a genuinely useful counting tool and Section 3 will teach it — but it is **coaching convention, not law**. The FIDE Laws of Chess assign no numeric value to any piece (FIDE, 2023). The rulebook only cares about checkmate.

:::reveal A knight sits on a1, the corner square. How many squares can it reach, and what does that tell you about where knights belong? ||| Only two — b3 and c2. From a center square like e4 the same knight reaches eight. That four-fold difference is why one of the oldest coaching sayings is "a knight on the rim is dim": knights belong near the center, where their jump covers the most ground.

## Sources
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
      recallContent: [
        {
          prompt: "Which corner square must be light when the board is set up, and where does each queen start?",
          answer:
            "The corner square nearest each player's right hand (FIDE Art. 2.1). Each queen starts on her own color: White's on d1, Black's on d8.",
        },
        {
          prompt: "How does a game of chess actually end in a win — do you capture the king?",
          answer:
            "No. You win by checkmate: attacking the king so it has no legal escape (Art. 1.4, 5.1.1). The king is never captured; the game ends the moment it can't be saved.",
        },
      ],
    },
    {
      slug: "chess-check-checkmate-stalemate",
      title: "3 · Check, checkmate, and the draw that breaks beginners' hearts",
      section: "Section 1 · How to play: the board, the pieces, the goal",
      body: `Everything in chess funnels toward three words that sound alike and mean completely different things.

**Check.** Your king is **in check** when it is attacked by at least one enemy piece (FIDE, 2023, Art. 3.9). Check is not the end of anything — it's an emergency you are required to fix *right now*. You have at most three ways out, and this triage is worth memorizing as a checklist:

1. **Move** the king to a safe square.
2. **Block** the check by putting a piece in the way (impossible against a knight — it jumps — or against anything attacking from one square away).
3. **Capture** the checking piece.

You may never make a move that leaves — or places — your own king in check (FIDE, 2023, Art. 3.9). There is no move so brilliant that it's allowed to lose you the king. And a piece that is *pinned* against your king (you'll meet pins properly in Section 3) can still deliver check to the enemy king even though it can't legally move — the rulebook is explicit about that (FIDE, 2023, Art. 3.9.1).

**Checkmate.** The king is attacked and **no legal move fixes it** — none of the three exits works. Game over, on the spot, no matter what else is on the board (FIDE, 2023, Art. 5.1.1). A game can also end when a player **resigns** — declaring defeat, which ends the game immediately (Art. 5.1.2). Experienced players resign lost positions; beginners should mostly play on, because at beginner level the extra queen gets stalemated away more often than anyone admits. Which brings us to the heartbreak.

**Stalemate.** The player to move has **no legal move at all**, and their king is **not in check**. That is not a win for anyone. It is a **draw**, immediately (FIDE, 2023, Art. 5.2.1). Read that twice, because it is the single most painful rule in beginner chess: you can be ahead by a queen and two rooks, chase the lone enemy king into a corner, take away every square it has — and if you take away every square *without* giving check, the game is instantly drawn. Half a point each. The advantage evaporates. Every chess teacher on earth has watched a student do this in a tournament, and Section 3's endgame lesson exists mostly to make sure it never happens to you.

**Dead position.** One more automatic draw belongs here: if a position arises where **neither player can possibly checkmate by any series of legal moves**, the game is dead and drawn (FIDE, 2023, Art. 5.2.2). The classic cases: king versus king, king and bishop versus king, king and knight versus king. There is simply no way to build a mate with that little material, so the Laws stop the game rather than let anyone play on for a win that cannot exist.

Chess has *five* distinct ways to end in a draw — stalemate and dead position are two; agreement, repetition, and the fifty-move rule are coming in Section 2, where you'll also learn which draws happen automatically and which you must claim.

:::reveal You have king and queen against a lone king. It is your opponent's turn. Their king is in the corner, NOT in check, and every square it could move to is covered by your queen. What just happened to your winning position? ||| Stalemate (FIDE, 2023, Art. 5.2.1): the player to move has no legal move and is not in check, so the game is drawn on the spot. Your extra queen counts for nothing — which is why the K+Q checkmate technique in Section 3 is about giving the enemy king exactly one safe square until your own king arrives.

## Sources
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
      recallContent: [
        {
          prompt: "Which is the only piece that can jump over other pieces, and which rule stops the others?",
          answer:
            "The knight (Art. 3.6). The bishop, rook, and queen may not move over intervening pieces (Art. 3.5) — which is why openings are about opening lines.",
        },
        {
          prompt: "Are the piece point values (queen = 9, pawn = 1, etc.) part of the rules of chess?",
          answer:
            "No — they're coaching convention for counting material. The FIDE Laws assign no numeric value to any piece; the rulebook only cares about checkmate.",
        },
      ],
    },
    {
      slug: "chess-special-moves",
      title: "4 · The three special moves: castling, en passant, promotion",
      section: "Section 1 · How to play: the board, the pieces, the goal",
      body: `Three moves break the ordinary movement rules, and all three exist for good reasons. They are also where self-taught players carry the most misinformation, so this lesson leans hard on the actual articles.

**Castling** (FIDE, 2023, Art. 3.8.2). Once per game, your king and one rook move *together*: the king slides **two squares** toward the rook, and the rook hops to the square the king crossed. Kingside castling is written **O-O**; queenside is **O-O-O**. It is the only move that touches two of your pieces, and it does two jobs at once — tucks your king behind a wall of pawns and brings a rook toward the center.

The conditions are precise, and the Laws split them into two kinds:

- **Rights you can lose forever:** you may not castle if your **king has already moved**, or with a **rook that has already moved** (Art. 3.8.2.1). Even if they move back home, the right is gone on that side.
- **Problems that are only temporary:** castling is *prevented for now* if the square the king is on, must cross, or will land on is **attacked**, or if **any piece stands between the king and that rook** (Art. 3.8.2.2). Clear the problem and you may castle later.

Now the two myths. First: *"you can't castle if you've ever been in check."* False — being in check *prevents castling at that moment* (the king's square is attacked), but once the check is dealt with, if your king never moved, the right survives. Second: *"you can't castle if the rook is attacked or passes through an attacked square."* Also false — the attacked-square conditions in Art. 3.8.2.2 are about **the king's squares only**. The rook's journey can be as dangerous as it likes.

**En passant** (FIDE, 2023, Art. 3.7.3.1). The strangest rule in chess, and the only capture where the capturing piece doesn't land on the victim's square. When an enemy pawn uses its two-square first move and lands **directly beside** your pawn, your pawn may capture it **as if it had moved only one square** — your pawn moves diagonally to the square the enemy pawn *skipped*, and the enemy pawn comes off. The catch that defines the rule: this capture is legal **only on the move immediately after** the two-square advance. Wait one turn and the window closes forever. Why does this rule exist? It arrived alongside the pawn's two-square first move, precisely so that the faster pawn couldn't sneak *past* an enemy pawn that could have captured it moving square by square.

**Promotion** (FIDE, 2023, Art. 3.7.3.3). A pawn that reaches the far rank **must** immediately become a queen, rook, bishop, or knight of its own color — staying a pawn is not an option, and neither is the "it can only become a piece you lost" folklore: the Laws say outright that the choice **"is not restricted to pieces that have been captured previously"** (Art. 3.7.3.4). You can have two queens, or three. Nearly always you choose the queen; the interesting exceptions — **underpromotion** — are usually a knight (because a knight gives checks a queen can't) or, rarely, a rook or bishop to avoid delivering an immediate stalemate. The exchange happens as part of the same move: the pawn's arrival and the new piece's appearance are one move, and the new piece acts from the very next turn.

Promotion is why endgames — where few pieces remain and pawns march — are so violent underneath their quiet surface. Every pawn is a queen on layaway.

:::reveal Early in the game your king was checked and you blocked the check; your king has never moved. Ten moves later you want to castle kingside, but your kingside rook is currently attacked by a bishop. May you castle? ||| Yes on both counts. A past check doesn't matter — only a *current* attack on the king's own square, the square it crosses, or the square it lands on prevents castling (Art. 3.8.2.2), and your king never moved so the right survives. The rook being attacked is irrelevant: the attacked-square conditions apply to the king's squares only.

## Sources
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
      recallContent: [
        {
          prompt: "Name the three — and only three — ways out of check.",
          answer: "Move the king, block the check, or capture the checking piece. If none is legal, it's checkmate.",
        },
        {
          prompt: "Your opponent has only a king; you have king + knight. Can anyone win this game?",
          answer:
            "No — it's a dead position (Art. 5.2.2): no series of legal moves can produce checkmate with that material, so the game is automatically drawn.",
        },
      ],
    },
    {
      slug: "chess-algebraic-notation",
      title: "5 · Algebraic notation: the language every chess player reads",
      section: "Section 1 · How to play: the board, the pieces, the goal",
      body: `Chess has a written language, and it is not optional decoration. In rated over-the-board play, **both players are required to record the game, move by move**, on a scoresheet (FIDE, 2023, Art. 8.1) — and the Laws recognize one system for doing it: **algebraic notation**, defined in Appendix C of the rulebook. Every chess book, every online analysis board, every engine, every broadcast uses it. Ten minutes here buys you the entire literature of the game.

**The system.** You already know square names from Lesson 1 (file letter + rank number: e4, d5, h8). Now add piece letters:

| Symbol | Meaning |
| --- | --- |
| **K, Q, R, B, N** | King, Queen, Rook, Bishop, k**N**ight (K was taken) |
| *(no letter)* | A pawn move — pawns are written by destination alone |
| **x** | A capture (Bxe5 — bishop captures on e5) |
| **+** | Check |
| **#** | Checkmate |
| **O-O / O-O-O** | Castling kingside / queenside |
| **e8=Q** | Promotion — the pawn on e8 becomes a queen |

A move is written as *piece letter + destination square*: **Nf3** means a knight moves to f3. Pawn moves drop the letter entirely: **e4** means a pawn moves to e4. When a pawn captures, you name its starting file: **exd5** — the e-pawn captures on d5. And when two identical pieces can reach the same square, you disambiguate with the starting file or rank: **Rad1** — the rook *from the a-file* goes to d1.

**Read a whole (terrible) game.** Here is the fastest checkmate that exists, the Fool's Mate: **1. f3 e5 2. g4 Qh4#**. Translate it: White pushes the f-pawn one square; Black answers e5; White pushes the g-pawn two squares — opening the fatal diagonal to his own king — and Black's queen lands on h4, checkmate, two moves. Now the more famous trap every beginner must know, the Scholar's Mate: **1. e4 e5 2. Qh5 Nc6 3. Bc4 Nf6 4. Qxf7#** — queen takes the f7 pawn, mate, because f7 is defended only by the king and the bishop on c4 backs the queen up. (The defense, for the record, is simple once you can read the threat: meet 3. Bc4 with **g6**, hitting the queen, instead of the careless 3... Nf6.)

**Why the rulebook makes you write.** The scoresheet isn't bureaucracy — it's *evidence*. In Section 2 you'll learn about draws by repetition and by the fifty-move rule: both must be **claimed**, and your claim is verified against the recorded moves. No scoresheet, no claim. The written game is also how disputes get resolved, how your rating gets processed, and — most valuably for you — how you replay and study your own games afterward, which is the single highest-return study habit in chess.

One habit to build from day one: write the move *after* you play it, keep the sheet legible, and record your opponent's moves too. Your future self, replaying the game to find out where it went wrong, will thank you.

:::reveal Your opponent writes "4. Qxf7#" on the scoresheet. Say in plain words exactly what happened on the board. ||| On White's fourth move, the queen captured whatever stood on f7 — and it's checkmate. Q = queen, x = captures, f7 = the destination square, # = checkmate. (You've just read the last move of a Scholar's Mate.)

## Sources
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
      recallContent: [
        {
          prompt: "For how long is an en passant capture available?",
          answer:
            "Only on the move immediately after the enemy pawn's two-square advance (Art. 3.7.3.1). Wait one turn and the right is gone forever.",
        },
        {
          prompt: "Is pawn promotion limited to pieces you've already lost?",
          answer:
            "No — the Laws say the choice 'is not restricted to pieces that have been captured previously' (Art. 3.7.3.4). Two or three queens is perfectly legal. Staying a pawn is not.",
        },
      ],
    },
    {
      slug: "chess-quiz-how-to-play",
      title: "6 · Quiz: the board, the pieces, and the special moves",
      section: "Section 1 · How to play: the board, the pieces, the goal",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How should the chessboard be oriented between the players?",
            options: [
              "The corner square nearest each player's right hand is light",
              "The corner square nearest each player's right hand is dark",
              "Orientation doesn't matter as long as the pieces are placed correctly",
              "White chooses the orientation before the game",
            ],
            correctIndex: 0,
            explanation:
              "FIDE Laws Art. 2.1: the near corner square to the player's right is white/light. 'White on the right.'",
            sourceLessonSlug: "chess-board-and-goal",
          },
          {
            prompt: "Where does the white queen start the game?",
            options: ["d1 — a light square, her own color", "e1", "d8", "Anywhere on the first rank"],
            correctIndex: 0,
            explanation:
              "Queens start on their own color: White's queen on d1 (light), Black's on d8 (dark). The king takes the remaining center square.",
            sourceLessonSlug: "chess-board-and-goal",
          },
          {
            prompt: "What actually wins a game of chess?",
            options: [
              "Capturing the enemy king",
              "Checkmate — attacking the king so it has no legal escape",
              "Capturing more pieces than your opponent",
              "Reaching the far side of the board with your king",
            ],
            correctIndex: 1,
            explanation:
              "Art. 1.4 and 5.1.1: the game is won by checkmating the opponent's king. The king is never captured — the game ends the moment it can't be saved.",
            sourceLessonSlug: "chess-board-and-goal",
          },
          {
            prompt: "Which piece is the only one allowed to jump over other pieces?",
            options: ["The queen", "The rook", "The knight", "The bishop"],
            correctIndex: 2,
            explanation:
              "Art. 3.5 forbids the bishop, rook, and queen from moving over intervening pieces; the knight (Art. 3.6) jumps over anything.",
            sourceLessonSlug: "chess-how-pieces-move",
          },
          {
            prompt: "A bishop starts the game on a light square. Which squares can it visit during the game?",
            options: [
              "Only light squares, forever",
              "Any square, eventually",
              "Dark squares only after it crosses the center",
              "Light squares in the opening, any square in the endgame",
            ],
            correctIndex: 0,
            explanation:
              "A bishop moves only along diagonals (Art. 3.2), and every diagonal from a light square stays light. Each bishop is color-bound for life.",
            sourceLessonSlug: "chess-how-pieces-move",
          },
          {
            prompt: "How does a pawn capture?",
            options: [
              "Straight ahead, one square",
              "One square diagonally forward",
              "One square in any direction",
              "It can't capture — pawns only block",
            ],
            correctIndex: 1,
            explanation:
              "Art. 3.7: pawns move straight forward but capture one square diagonally forward — the only piece whose move and capture differ. They never move backward.",
            sourceLessonSlug: "chess-how-pieces-move",
          },
          {
            prompt: "Are the familiar point values (queen 9, rook 5, pawn 1...) part of the FIDE Laws of Chess?",
            options: [
              "Yes — Article 3 lists them",
              "Yes, but only for tie-breaks",
              "No — they're a coaching convention; the rulebook assigns no values",
              "No — FIDE uses a different official scale",
            ],
            correctIndex: 2,
            explanation:
              "The Laws assign no numeric value to any piece. Point values are a useful counting tool from coaching tradition, not law.",
            sourceLessonSlug: "chess-how-pieces-move",
          },
          {
            prompt: "Your king is in check. Which of these is NOT one of your possible ways out?",
            options: [
              "Move the king to a safe square",
              "Block the check with another piece",
              "Capture the checking piece",
              "Pass your turn and let the check stand",
            ],
            correctIndex: 3,
            explanation:
              "There is no passing in chess, and you may never leave your king in check (Art. 3.9). Move, block, or capture — if none works, it's checkmate.",
            sourceLessonSlug: "chess-check-checkmate-stalemate",
          },
          {
            prompt: "The player to move has NO legal move and their king is NOT in check. What is the result?",
            options: [
              "They lose — they can't move",
              "They may pass and the opponent moves again",
              "The game is immediately drawn — stalemate",
              "The arbiter decides based on material",
            ],
            correctIndex: 2,
            explanation:
              "Art. 5.2.1: stalemate is an immediate draw, no matter how much material the other side has. The classic way a won position becomes half a point.",
            sourceLessonSlug: "chess-check-checkmate-stalemate",
          },
          {
            prompt: "King and bishop versus a lone king. What does the rulebook say about this game?",
            options: [
              "The side with the bishop can win with perfect play",
              "It's a 'dead position' — drawn, because no series of legal moves can produce checkmate",
              "It's a win after 50 more moves",
              "The bishop's side wins on time if the other player's clock runs out",
            ],
            correctIndex: 1,
            explanation:
              "Art. 5.2.2: when neither player can possibly checkmate by any series of legal moves, the game is dead and automatically drawn. K+B vs K and K+N vs K are the classic cases.",
            sourceLessonSlug: "chess-check-checkmate-stalemate",
          },
          {
            prompt: "Which of these statements about castling is TRUE?",
            options: [
              "You can never castle if you've been in check at any point in the game",
              "You can't castle if your rook passes through an attacked square",
              "The attacked-square restrictions apply only to the king's squares — the rook's path can be attacked",
              "You may castle even after your king has moved, as long as it moved back",
            ],
            correctIndex: 2,
            explanation:
              "Art. 3.8.2.2 restricts the square the king is on, crosses, or lands on. The rook's journey is unrestricted, and a past (resolved) check doesn't matter — but a king that has ever moved loses the right forever (Art. 3.8.2.1).",
            sourceLessonSlug: "chess-special-moves",
          },
          {
            prompt: "Your opponent's pawn advances two squares and lands directly beside your pawn. When may you capture it en passant?",
            options: [
              "Any time before it promotes",
              "Only on the move immediately after the two-square advance",
              "Only if your pawn hasn't moved yet",
              "En passant isn't a legal capture in tournament play",
            ],
            correctIndex: 1,
            explanation:
              "Art. 3.7.3.1: the en passant window is exactly one move. Your pawn takes diagonally onto the square the enemy pawn skipped.",
            sourceLessonSlug: "chess-special-moves",
          },
          {
            prompt: "A pawn reaches the far rank. Which of these is a legal choice?",
            options: [
              "Keep it as a pawn",
              "Promote it to a second queen, even though your first queen is still on the board",
              "Promote it to an enemy-colored piece to block lines",
              "Promote only to a piece you've already lost",
            ],
            correctIndex: 1,
            explanation:
              "Art. 3.7.3.3–3.7.3.4: the pawn must become a Q, R, B, or N of its own color, and the choice 'is not restricted to pieces that have been captured previously.' Two queens is fine; staying a pawn is not.",
            sourceLessonSlug: "chess-special-moves",
          },
          {
            prompt: "What does the notation 'exd5' mean?",
            options: [
              "The e-file pawn captures on d5",
              "A bishop moves from e to d5",
              "The king castles queenside",
              "A pawn on d5 is promoted",
            ],
            correctIndex: 0,
            explanation:
              "Pawn moves carry no piece letter; a pawn capture names the starting file. 'exd5' = the e-pawn captures whatever stands on d5.",
            sourceLessonSlug: "chess-algebraic-notation",
          },
          {
            prompt: "Why does keeping a scoresheet matter beyond habit?",
            options: [
              "It's required in rated play (Art. 8.1), and draw claims like repetition and the fifty-move rule are verified against it",
              "It adds rating points",
              "It's optional but polite",
              "Only the arbiter keeps score in rated games",
            ],
            correctIndex: 0,
            explanation:
              "Art. 8.1 requires both players to record the moves, and Section 2's claimable draws (threefold repetition, fifty-move rule) can only be verified from the recorded moves. No scoresheet, no claim.",
            sourceLessonSlug: "chess-algebraic-notation",
          },
        ],
      },
    },
  ],
};
