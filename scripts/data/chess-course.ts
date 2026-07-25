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
    "A complete, cited chess course for high school students: how to actually play (the board, the six pieces, check and checkmate, castling, en passant, promotion, and how to read algebraic notation), the rulebook itself (the FIDE Laws of Chess, touch-move, the clock, and the five different ways a game can be drawn), how to think (opening principles, forks, pins, skewers, discovered attacks, and the endgames every player must know), fifteen centuries of verified history (chaturanga to shatranj to the fifteenth-century queen, Steinitz to Deep Blue to AlphaZero to the 2020 online boom), how organized chess fits together (FIDE, Elo ratings, the title system, the Olympiad, US Chess, and the online platforms), and the honest economics, why almost nobody earns a living playing chess, and the many real ways to build a life or a business around the board anyway.",
  lessons: [
    // ─────────────────────────── SECTION 1 · HOW TO PLAY ───────────────────────────
    {
      slug: "chess-board-and-goal",
      title: "1 · The board, the armies, and the point of the game",
      section: "Section 1 · How to play: the board, the pieces, the goal",
      body: `Chess is a fight between two armies of sixteen pieces on a board of sixty-four squares, and the whole thing is decided by exactly one piece: the king. Everything else, every opening, every sacrifice, every hour anyone has ever spent studying, is about that.

**The board.** An 8×8 grid of alternating light and dark squares. The board sits between the players so that **the corner square nearest each player's right hand is light** (Fédération Internationale des Échecs [FIDE], 2023, Art. 2.1). "White on the right." Roughly half the chess boards in movies, ads, and stock photos are set up wrong; now you'll never un-see it.

Every square has a name. The **files** (columns) are lettered **a through h** from White's left; the **ranks** (rows) are numbered **1 through 8** starting from White's side. So the square where White's king starts is **e1**, and the center squares, the most valuable real estate on the board, are **d4, d5, e4, e5**.

**The setup.** Each side starts with eight pawns on its second rank (second from that player, so rank 2 for White, rank 7 for Black), and behind them, from the corners inward: **rook, knight, bishop**, then **queen and king** in the middle (FIDE, 2023, Art. 2.2-2.3). The one everybody forgets: **the queen starts on her own color**. White's queen on **d1** (a light square), Black's queen on **d8** (a dark square). If the queen and king are swapped, the game hasn't started yet and someone should fix it.

**Who moves first.** The player with the light-colored pieces, **White, makes the first move, and the players then move alternately** (FIDE, 2023, Art. 1.2). Moving first is a small but real advantage, which is why organized chess alternates colors between rounds.

**The point of the game.** The objective is to attack the opponent's king in such a way that it has **no legal escape**, that is **checkmate**, and it wins the game (FIDE, 2023, Art. 1.4, 5.1.1). You never actually capture the king. The game ends the instant the king cannot be saved.

Hold on to that. Beginners play to grab pieces. Pieces matter, a bigger army usually wins, but pieces are the means. A player with almost nothing left who checkmates beats a player with two extra queens who doesn't. The next four lessons teach you the pieces, the endings, the special moves, and the language, and then Section 2 hands you the actual rulebook.

:::reveal You sit down at a tournament and notice the corner square nearest your right hand is dark. What is wrong, and what is the other classic setup error you should check for? ||| The board is rotated, the near-right corner must be a light square (FIDE, 2023, Art. 2.1). Once it's fixed, check that each queen starts on her own color: White's queen on d1 (light), Black's on d8 (dark). A swapped king and queen is the other setup error hiding in half the chess photos ever taken.

## Sources
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
    },
    {
      slug: "chess-how-pieces-move",
      title: "2 · How the six pieces move",
      section: "Section 1 · How to play: the board, the pieces, the goal",
      body: `Six kinds of piece, six movement rules, and one shared law: **a piece captures by moving to a square occupied by an enemy piece and removing it**, with one pawn-shaped exception you'll meet in Lesson 4. You can never move onto a square occupied by your own piece (FIDE, 2023, Art. 3.1).

| Piece | Moves | The thing to remember |
| --- | --- | --- |
| **Rook** | Any number of squares along its rank or file (Art. 3.3) | Long-range; loves open files |
| **Bishop** | Any number of squares along a diagonal (Art. 3.2) | Trapped on one color for the whole game |
| **Queen** | Rook + bishop combined (Art. 3.4) | Strongest piece; also the easiest to lose by showing off |
| **Knight** | To one of the nearest squares *not* on its own rank, file, or diagonal (Art. 3.6) | The famous "L"; the only piece that jumps |
| **King** | One square in any direction (Art. 3.8) | Can never move into check |
| **Pawn** | Forward one square; optionally two from its starting square; **captures diagonally forward** (Art. 3.7) | The only piece that moves one way and captures another, and it never moves backward |

Three of those rows carry the ideas that decide real games.

**The blocking rule.** The bishop, rook, and queen **may not move over any intervening pieces** (FIDE, 2023, Art. 3.5). At the start of the game every one of those long-range pieces is walled in behind pawns, which is exactly why openings are about *opening* lines. The knight is the sole exception: it jumps over anything, friend or enemy, which is why knights are the first pieces that can develop and why they thrive in blocked positions where the long-range pieces suffocate.

**The bishop's life sentence.** A bishop that starts on a light square moves along diagonals forever, and every square on a diagonal from a light square is light. Each side's two bishops split the board between them, one on each color, and neither can ever help the other. Lose your dark-squared bishop and the dark squares around your king get permanently weaker. Strong players genuinely think in colors like this.

**The pawn's double identity.** A pawn *moves* straight ahead but *captures* one square diagonally forward. So a pawn directly in front of an enemy pawn is stuck, neither can move or take the other, while a pawn diagonal to an enemy piece is a threat. And because pawns can never retreat, every pawn move is permanent in a way no piece move is.

Notice what's *not* in the table: point values. You have probably heard that a queen is "worth 9" and a pawn "worth 1." That's a genuinely useful counting tool and Section 3 will teach it, but it is **coaching convention, not law**. The FIDE Laws of Chess assign no numeric value to any piece (FIDE, 2023). The rulebook only cares about checkmate.

:::reveal A knight sits on a1, the corner square. How many squares can it reach, and what does that tell you about where knights belong? ||| Only two, b3 and c2. From a center square like e4 the same knight reaches eight. That four-fold difference is why one of the oldest coaching sayings is "a knight on the rim is dim": knights belong near the center, where their jump covers the most ground.

## Sources
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
      recallContent: [
        {
          prompt: "Which corner square must be light when the board is set up, and where does each queen start?",
          answer:
            "The corner square nearest each player's right hand (FIDE Art. 2.1). Each queen starts on her own color: White's on d1, Black's on d8.",
        },
        {
          prompt: "How does a game of chess actually end in a win, do you capture the king?",
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

**Check.** Your king is **in check** when it is attacked by at least one enemy piece (FIDE, 2023, Art. 3.9). Check is not the end of anything, it's an emergency you are required to fix *right now*. You have at most three ways out, and this triage is worth memorizing as a checklist:

1. **Move** the king to a safe square.
2. **Block** the check by putting a piece in the way (impossible against a knight, it jumps, or against anything attacking from one square away).
3. **Capture** the checking piece.

You may never make a move that leaves, or places, your own king in check (FIDE, 2023, Art. 3.9). There is no move so brilliant that it's allowed to lose you the king. And a piece that is *pinned* against your king (you'll meet pins properly in Section 3) can still deliver check to the enemy king even though it can't legally move, the rulebook is explicit about that (FIDE, 2023, Art. 3.9.1).

**Checkmate.** The king is attacked and **no legal move fixes it**, none of the three exits works. Game over, on the spot, no matter what else is on the board (FIDE, 2023, Art. 5.1.1). A game can also end when a player **resigns**, declaring defeat, which ends the game immediately (Art. 5.1.2). Experienced players resign lost positions; beginners should mostly play on, because at beginner level the extra queen gets stalemated away more often than anyone admits. Which brings us to the heartbreak.

**Stalemate.** The player to move has **no legal move at all**, and their king is **not in check**. That is not a win for anyone. It is a **draw**, immediately (FIDE, 2023, Art. 5.2.1). Read that twice, because it is the single most painful rule in beginner chess: you can be ahead by a queen and two rooks, chase the lone enemy king into a corner, take away every square it has, and if you take away every square *without* giving check, the game is instantly drawn. Half a point each. The advantage evaporates. Every chess teacher on earth has watched a student do this in a tournament, and Section 3's endgame lesson exists mostly to make sure it never happens to you.

**Dead position.** One more automatic draw belongs here: if a position arises where **neither player can possibly checkmate by any series of legal moves**, the game is dead and drawn (FIDE, 2023, Art. 5.2.2). The classic cases: king versus king, king and bishop versus king, king and knight versus king. There is simply no way to build a mate with that little material, so the Laws stop the game rather than let anyone play on for a win that cannot exist.

Chess has *five* distinct ways to end in a draw, stalemate and dead position are two; agreement, repetition, and the fifty-move rule are coming in Section 2, where you'll also learn which draws happen automatically and which you must claim.

:::reveal You have king and queen against a lone king. It is your opponent's turn. Their king is in the corner, NOT in check, and every square it could move to is covered by your queen. What just happened to your winning position? ||| Stalemate (FIDE, 2023, Art. 5.2.1): the player to move has no legal move and is not in check, so the game is drawn on the spot. Your extra queen counts for nothing, which is why the K+Q checkmate technique in Section 3 is about giving the enemy king exactly one safe square until your own king arrives.

## Sources
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
      recallContent: [
        {
          prompt: "Which is the only piece that can jump over other pieces, and which rule stops the others?",
          answer:
            "The knight (Art. 3.6). The bishop, rook, and queen may not move over intervening pieces (Art. 3.5), which is why openings are about opening lines.",
        },
        {
          prompt: "Are the piece point values (queen = 9, pawn = 1, etc.) part of the rules of chess?",
          answer:
            "No, they're coaching convention for counting material. The FIDE Laws assign no numeric value to any piece; the rulebook only cares about checkmate.",
        },
      ],
    },
    {
      slug: "chess-special-moves",
      title: "4 · The three special moves: castling, en passant, promotion",
      section: "Section 1 · How to play: the board, the pieces, the goal",
      body: `Three moves break the ordinary movement rules, and all three exist for good reasons. They are also where self-taught players carry the most misinformation, so this lesson leans hard on the actual articles.

**Castling** (FIDE, 2023, Art. 3.8.2). Once per game, your king and one rook move *together*: the king slides **two squares** toward the rook, and the rook hops to the square the king crossed. Kingside castling is written **O-O**; queenside is **O-O-O**. It is the only move that touches two of your pieces, and it does two jobs at once, tucks your king behind a wall of pawns and brings a rook toward the center.

The conditions are precise, and the Laws split them into two kinds:

- **Rights you can lose forever:** you may not castle if your **king has already moved**, or with a **rook that has already moved** (Art. 3.8.2.1). Even if they move back home, the right is gone on that side.
- **Problems that are only temporary:** castling is *prevented for now* if the square the king is on, must cross, or will land on is **attacked**, or if **any piece stands between the king and that rook** (Art. 3.8.2.2). Clear the problem and you may castle later.

Now the two myths. First: *"you can't castle if you've ever been in check."* False, being in check *prevents castling at that moment* (the king's square is attacked), but once the check is dealt with, if your king never moved, the right survives. Second: *"you can't castle if the rook is attacked or passes through an attacked square."* Also false, the attacked-square conditions in Art. 3.8.2.2 are about **the king's squares only**. The rook's journey can be as dangerous as it likes.

**En passant** (FIDE, 2023, Art. 3.7.3.1). The strangest rule in chess, and the only capture where the capturing piece doesn't land on the victim's square. When an enemy pawn uses its two-square first move and lands **directly beside** your pawn, your pawn may capture it **as if it had moved only one square**, your pawn moves diagonally to the square the enemy pawn *skipped*, and the enemy pawn comes off. The catch that defines the rule: this capture is legal **only on the move immediately after** the two-square advance. Wait one turn and the window closes forever. Why does this rule exist? It arrived alongside the pawn's two-square first move, precisely so that the faster pawn couldn't sneak *past* an enemy pawn that could have captured it moving square by square.

**Promotion** (FIDE, 2023, Art. 3.7.3.3). A pawn that reaches the far rank **must** immediately become a queen, rook, bishop, or knight of its own color, staying a pawn is not an option, and neither is the "it can only become a piece you lost" folklore: the Laws say outright that the choice **"is not restricted to pieces that have been captured previously"** (Art. 3.7.3.4). You can have two queens, or three. Nearly always you choose the queen; the interesting exceptions, **underpromotion**, are usually a knight (because a knight gives checks a queen can't) or, rarely, a rook or bishop to avoid delivering an immediate stalemate. The exchange happens as part of the same move: the pawn's arrival and the new piece's appearance are one move, and the new piece acts from the very next turn.

Promotion is why endgames, where few pieces remain and pawns march, are so violent underneath their quiet surface. Every pawn is a queen on layaway.

:::reveal Early in the game your king was checked and you blocked the check; your king has never moved. Ten moves later you want to castle kingside, but your kingside rook is currently attacked by a bishop. May you castle? ||| Yes on both counts. A past check doesn't matter, only a *current* attack on the king's own square, the square it crosses, or the square it lands on prevents castling (Art. 3.8.2.2), and your king never moved so the right survives. The rook being attacked is irrelevant: the attacked-square conditions apply to the king's squares only.

## Sources
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
      recallContent: [
        {
          prompt: "Name the three, and only three, ways out of check.",
          answer: "Move the king, block the check, or capture the checking piece. If none is legal, it's checkmate.",
        },
        {
          prompt: "Your opponent has only a king; you have king + knight. Can anyone win this game?",
          answer:
            "No, it's a dead position (Art. 5.2.2): no series of legal moves can produce checkmate with that material, so the game is automatically drawn.",
        },
      ],
    },
    {
      slug: "chess-algebraic-notation",
      title: "5 · Algebraic notation: the language every chess player reads",
      section: "Section 1 · How to play: the board, the pieces, the goal",
      body: `Chess has a written language, and it is not optional decoration. In rated over-the-board play, **both players are required to record the game, move by move**, on a scoresheet (FIDE, 2023, Art. 8.1), and the Laws recognize one system for doing it: **algebraic notation**, defined in Appendix C of the rulebook. Every chess book, every online analysis board, every engine, every broadcast uses it. Ten minutes here buys you the entire literature of the game.

**The system.** You already know square names from Lesson 1 (file letter + rank number: e4, d5, h8). Now add piece letters:

| Symbol | Meaning |
| --- | --- |
| **K, Q, R, B, N** | King, Queen, Rook, Bishop, k**N**ight (K was taken) |
| *(no letter)* | A pawn move, pawns are written by destination alone |
| **x** | A capture (Bxe5, bishop captures on e5) |
| **+** | Check |
| **#** | Checkmate |
| **O-O / O-O-O** | Castling kingside / queenside |
| **e8=Q** | Promotion, the pawn on e8 becomes a queen |

A move is written as *piece letter + destination square*: **Nf3** means a knight moves to f3. Pawn moves drop the letter entirely: **e4** means a pawn moves to e4. When a pawn captures, you name its starting file: **exd5**, the e-pawn captures on d5. And when two identical pieces can reach the same square, you disambiguate with the starting file or rank: **Rad1**, the rook *from the a-file* goes to d1.

**Read a whole (terrible) game.** Here is the fastest checkmate that exists, the Fool's Mate: **1. f3 e5 2. g4 Qh4#**. Translate it: White pushes the f-pawn one square; Black answers e5; White pushes the g-pawn two squares, opening the fatal diagonal to his own king, and Black's queen lands on h4, checkmate, two moves. Now the more famous trap every beginner must know, the Scholar's Mate: **1. e4 e5 2. Qh5 Nc6 3. Bc4 Nf6 4. Qxf7#**, queen takes the f7 pawn, mate, because f7 is defended only by the king and the bishop on c4 backs the queen up. (The defense, for the record, is simple once you can read the threat: meet 3. Bc4 with **g6**, hitting the queen, instead of the careless 3... Nf6.)

**Why the rulebook makes you write.** The scoresheet isn't bureaucracy, it's *evidence*. In Section 2 you'll learn about draws by repetition and by the fifty-move rule: both must be **claimed**, and your claim is verified against the recorded moves. No scoresheet, no claim. The written game is also how disputes get resolved, how your rating gets processed, and (most valuably for you) how you replay and study your own games afterward, which is the single highest-return study habit in chess.

One habit to build from day one: write the move *after* you play it, keep the sheet legible, and record your opponent's moves too. Your future self, replaying the game to find out where it went wrong, will thank you.

:::reveal Your opponent writes "4. Qxf7#" on the scoresheet. Say in plain words exactly what happened on the board. ||| On White's fourth move, the queen captured whatever stood on f7, and it's checkmate. Q = queen, x = captures, f7 = the destination square, # = checkmate. (You've just read the last move of a Scholar's Mate.)

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
            "No, the Laws say the choice 'is not restricted to pieces that have been captured previously' (Art. 3.7.3.4). Two or three queens is perfectly legal. Staying a pawn is not.",
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
            options: [
              "d1, a light square, her own color",
              "e1, one square to the queen's right",
              "d8, mirroring Black's own queen",
              "Anywhere along her own first rank",
            ],
            correctIndex: 0,
            explanation:
              "Queens start on their own color: White's queen on d1 (light), Black's on d8 (dark). The king takes the remaining center square.",
            sourceLessonSlug: "chess-board-and-goal",
          },
          {
            prompt: "What actually wins a game of chess?",
            options: [
              "Capturing the enemy king, ending the game at once",
              "Checkmate, attacking the king so it has no legal escape",
              "Capturing more total material than your opponent",
              "Reaching the far side of the board with your king",
            ],
            correctIndex: 1,
            explanation:
              "Art. 1.4 and 5.1.1: the game is won by checkmating the opponent's king. The king is never captured, the game ends the moment it can't be saved.",
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
              "It can't capture, pawns only block",
            ],
            correctIndex: 1,
            explanation:
              "Art. 3.7: pawns move straight forward but capture one square diagonally forward, the only piece whose move and capture differ. They never move backward.",
            sourceLessonSlug: "chess-how-pieces-move",
          },
          {
            prompt: "Are the familiar point values (queen 9, rook 5, pawn 1...) part of the FIDE Laws of Chess?",
            options: [
              "Yes, Article 3 lists them as Q9 R5 B3 N3 P1",
              "Yes, but only for tie-breaks and adjudication",
              "No, it's a coaching convention, not in the Laws",
              "No, but FIDE's official scale ranks bishop over 3",
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
              "Capture the piece that gives the check",
              "Pass your turn and let the check stand",
            ],
            correctIndex: 3,
            explanation:
              "There is no passing in chess, and you may never leave your king in check (Art. 3.9). Move, block, or capture, if none works, it's checkmate.",
            sourceLessonSlug: "chess-check-checkmate-stalemate",
          },
          {
            prompt: "The player to move has NO legal move and their king is NOT in check. What is the result?",
            options: [
              "They lose the game, having no legal move",
              "They may pass and the opponent moves again",
              "The game is immediately drawn, stalemate",
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
              "The bishop's side can force checkmate with perfect play",
              "It's a 'dead position', an automatic draw with no legal mate",
              "It's a win for the bishop's side by the fifty-move rule",
              "The bishop's side wins on time if the clock runs out",
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
              "You can't castle while your rook passes through an attacked square",
              "Only the king's squares are restricted; the rook may pass through attack",
              "You may castle even after your king has moved, as long as it moved back",
            ],
            correctIndex: 2,
            explanation:
              "Art. 3.8.2.2 restricts the square the king is on, crosses, or lands on. The rook's journey is unrestricted, and a past (resolved) check doesn't matter, but a king that has ever moved loses the right forever (Art. 3.8.2.1).",
            sourceLessonSlug: "chess-special-moves",
          },
          {
            prompt: "Your opponent's pawn advances two squares and lands directly beside your pawn. When may you capture it en passant?",
            options: [
              "Any time before that enemy pawn eventually promotes",
              "Only on the move immediately after the two-square advance",
              "Only if your capturing pawn has not yet moved at all",
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
              "Keep it as a pawn if you prefer to, and skip promoting",
              "Promote to a second queen even with one already on the board",
              "Promote it to an enemy-colored piece to block enemy lines",
              "Promote only to a type of piece you have already lost",
            ],
            correctIndex: 1,
            explanation:
              "Art. 3.7.3.3-3.7.3.4: the pawn must become a Q, R, B, or N of its own color, and the choice 'is not restricted to pieces that have been captured previously.' Two queens is fine; staying a pawn is not.",
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
              "Required in rated play; draw claims are verified from it",
              "It directly adds bonus rating points to each game",
              "It's entirely optional but considered good manners",
              "Only the arbiter records the moves in rated games",
            ],
            correctIndex: 0,
            explanation:
              "Art. 8.1 requires both players to record the moves, and Section 2's claimable draws (threefold repetition, fifty-move rule) can only be verified from the recorded moves. No scoresheet, no claim.",
            sourceLessonSlug: "chess-algebraic-notation",
          },
        ],
      },
    },

    // ─────────────────────────── SECTION 2 · THE RULEBOOK ───────────────────────────
    {
      slug: "chess-who-writes-the-rules",
      title: "7 · Who writes the rules: FIDE and the Laws of Chess",
      section: "Section 2 · The rulebook: the FIDE Laws of Chess",
      body: `Everything in Section 1 came stamped with article numbers from one document. Time to meet it properly.

**FIDE.** The Fédération Internationale des Échecs, the International Chess Federation, was founded in **Paris in 1924**, under the motto **"Gens una sumus"**: *we are one family* (FIDE, n.d.). Today it counts **204 national chess federations** as members and has been recognized by the International Olympic Committee as a global sporting organization since **1999** (FIDE, n.d.). Compare that with a sport like tennis, where the rule-writer, two professional tours, and four Grand Slams are seven different power centers: chess is unusually tidy. **One federation writes one rulebook for the whole world.**

**The Laws of Chess.** They live in the FIDE Handbook as section **E.01**, and the current edition **took effect on 1 January 2023**, approved by the FIDE General Assembly (FIDE, 2023). Two structural things are worth knowing before you ever argue a rule:

- **The Laws are versioned.** Rule details change between editions, which is why this course cites the 2023 Laws *by edition* and why a rules claim from an old YouTube video or an uncle who played in the 90s should be checked against the current handbook, not trusted.
- **The Laws are deliberately incomplete.** The preface says outright that they cannot cover every situation, and gives the **arbiter**, chess's referee, the discretion to reach a fair decision in cases the text doesn't settle. Chess is a game of precise rules administered by human judgment, and FIDE trains and licenses arbiters (up to the **International Arbiter** title) to supply it; its Arbiters' Commission publishes a manual for exactly this work (FIDE Arbiters' Commission, 2025).

**What the Laws actually contain.** Articles 1-5 are the "basic rules of play" you met in Section 1, the board, the moves, check, and how games end. Articles 6-12 are the "competition rules": the clock (Art. 6), irregularities (Art. 7), recording moves (Art. 8), the draw rules (Art. 9), points (Art. 10), player conduct (Art. 11), and the arbiter's role (Art. 12). After that come the appendices: rapid chess (A), blitz (B), algebraic notation (C), and more. This section walks the competition rules that actually decide games: touching pieces, draws, and the clock.

**One wrinkle for American players.** National federations run their own domestic events, and the United States is the notable case: **US Chess**, the national governing body, administers its own national rating system and its own tournament rules for domestic play (US Chess, n.d.). They're close cousins of the FIDE Laws, not photocopies, a serious U.S. tournament player eventually reads both. This course teaches the FIDE Laws, because they're the world standard and the document everything else adapts.

:::reveal A friend confidently quotes a chess rule "from the official rulebook" they read in 2019. Before you believe the details, what two questions should you ask? ||| Which edition, the Laws are versioned, and the current edition took effect 1 January 2023, so pre-2023 details may have changed; and whose rulebook, FIDE's Laws govern international play, but domestic events (like US Chess tournaments) run on the national federation's own rules, which differ in details.

## Sources
- Fédération Internationale des Échecs. (n.d.). *About FIDE*. https://www.fide.com/about-fide
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023
- FIDE Arbiters' Commission. (2025). *Arbiters' manual 2025*. https://arbiters.fide.com/wp-content/uploads/Publications/Manual/Arbiters_Manual_2025.pdf
- US Chess. (n.d.). *About*. https://new.uschess.org/about`,
      recallContent: [
        {
          prompt: "What does '1. f3 e5 2. g4 Qh4#' describe, and why is it famous?",
          answer:
            "The Fool's Mate, the fastest possible checkmate: White's f- and g-pawn moves open the diagonal to the king, and Black's queen mates on h4 on move two.",
        },
        {
          prompt: "In rated play, who must keep a record of the moves, and in what notation?",
          answer:
            "Both players (Art. 8.1), in algebraic notation, the system defined in Appendix C of the FIDE Laws.",
        },
      ],
    },
    {
      slug: "chess-touch-move",
      title: "8 · Touch-move: the rule that makes chess honest",
      section: "Section 2 · The rulebook: the FIDE Laws of Chess",
      body: `Chess has no take-backs, and the boundary is drawn at your fingertips. The touch-move rule is the most famous competition rule in the game, the first one every new tournament player collides with, and it lives in **Article 4** of the Laws.

**The core rule.** If the player having the move **deliberately touches** one of their own pieces **with the intention of moving it**, they **must move it** if a legal move exists. Touch an *opponent's* piece the same way, and you must **capture it** if you legally can (FIDE, 2023, Art. 4.3). Not "should." Must. Grabbing your queen, noticing the move loses, and putting her back is not an option the rulebook offers, if the queen has any legal move, the queen is moving.

**The escape hatch, announced first.** Pieces drift off-center; sometimes you genuinely need to neaten the board. The Laws allow it: a player may adjust pieces on their squares **provided they first announce the intention**, the traditional phrase is **"j'adoube"** (French: *I adjust*), or plain English "I adjust" (FIDE, 2023, Art. 4.2). The sequence is the entire rule. Say it, *then* touch. Touching first and saying "adjust" after you've seen your opponent's face is exactly the move the rule exists to prevent.

**Castling has its own trap.** Castling is a *king* move, and the Laws enforce the order: touch your **rook first and then your king**, and you are **not allowed to castle on that side on that move**, you're now under the ordinary touch-move rules instead (FIDE, 2023, Art. 4.4.2). Tournament habit: castle by moving the king its two squares first, then the rook. Always.

**When is a move final?** Releasing the piece. Article 4's structure is: touched = committed to *that piece*; **released on a square = committed to that move**. For captures, the move is complete when the captured piece is off the board and you've released your capturing piece; for castling, when you've released the rook; for promotion, when you've released the new piece on the promotion square (FIDE, 2023, Art. 4.7). Slide your bishop while keeping a finger on it, and you may still slide it somewhere else, let go, and it lives there now.

**And if the move was illegal?** It happens, a pinned piece moves, a king steps into check. In standard play the position is restored and the touch-move rules apply to the piece you touched; the penalty schedule is precise: for the **first completed illegal move**, the arbiter gives your opponent **two extra minutes**; for the **second by the same player, the arbiter declares the game lost** (FIDE, 2023, Art. 7.5.5). Two administrative errors and the game is gone, one more reason the pros' hands hover so long before they commit.

Why does chess hold this line so hard? Because the game's integrity lives in the idea that **the thinking happens in your head, not on the board**. The moment players can test-drive moves with their hands, watch the opponent's reaction, and retreat, it's a different game. Touch-move forces every experiment to run on internal hardware, which, not coincidentally, is exactly the calculation skill Section 3 trains.

:::reveal It's your move. You pick up your knight, then see, too late, that every knight move loses material. Its retreat squares are covered, but one legal knight move exists. What does Article 4.3 require, and what would have protected you? ||| You must make a knight move, a legal move with the touched piece exists, so the knight is moving, losses and all. The protection is procedural: calculate with your hands still, and touch a piece only when the decision is final. (Saying "j'adoube" only works BEFORE touching, and only for adjusting a piece on its square.)

## Sources
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
      recallContent: [
        {
          prompt: "When did the current edition of the FIDE Laws of Chess take effect?",
          answer: "1 January 2023, FIDE Handbook section E.01. The Laws are versioned, so always check the edition.",
        },
        {
          prompt: "Chess's rule-making structure vs. a sport like tennis, what's the headline difference?",
          answer:
            "One world federation (FIDE, founded Paris 1924, 204 member federations) writes one rulebook for the whole world; national bodies like US Chess adapt it for domestic play.",
        },
      ],
    },
    {
      slug: "chess-five-draws",
      title: "9 · The five draws, and which ones you must claim",
      section: "Section 2 · The rulebook: the FIDE Laws of Chess",
      body: `Roughly half the outcomes in top-level chess are draws, and the Laws provide five distinct doors to one. Two you already know from Section 1. What almost nobody outside tournament halls knows is the *mechanism*: some draws happen **automatically**, and some exist only if a player **claims** them. Learn the difference and you will win (well, save) games on procedure alone.

| Draw | Article | Automatic or claimed? |
| --- | --- | --- |
| Stalemate | 5.2.1 | Automatic |
| Dead position (no mate possible) | 5.2.2 | Automatic |
| Agreement | 5.2.3 / 9.1 | By both players |
| Threefold repetition | 9.2 | **Claimed** |
| Fifty-move rule | 9.3 | **Claimed** |
| Fivefold repetition | 9.6.1 | Automatic |
| Seventy-five-move rule | 9.6.2 | Automatic |

(Yes, the table has seven rows for five draws, repetition and the move-counter each come in a claimed version and a bigger automatic version. That's the punchline of this lesson.)

**Draw by agreement** (FIDE, 2023, Art. 5.2.3, 9.1). The players simply agree. The protocol is exact: offer a draw **after making your move on the board and before pressing your clock**, and **no conditions can be attached** (Art. 9.1.2.1). An offer can't be retracted and stands until the opponent accepts it, rejects it in words, or rejects it the eloquent way, by touching a piece.

**Threefold repetition** (Art. 9.2). If the **same position** is about to appear, or has appeared, **at least three times**, same player to move, same possible moves for both players, the player to move may **claim** a draw. Read the fine print twice: it's the same *position*, not the same *moves*, and the repetitions **don't have to be consecutive**. And "same possible moves" has teeth: if a castling right or an en passant possibility existed the first time and is gone the third time, the positions are **not** the same. This is the rule a defender clings to, force the strong side to repeat, count to three, call the arbiter.

**The fifty-move rule** (Art. 9.3). If the last **fifty consecutive moves by each player** contain **no pawn move and no capture**, the player to move may claim a draw. Pawn moves and captures are chess's only irreversible events, this rule says that if nothing irreversible has happened in fifty moves, the game has stopped going anywhere. It's why "I'll just shuffle my king and win on the clock" isn't a strategy against a competent defender with a scoresheet.

**The automatic backstops** (Art. 9.6). Claims require alert players; the Laws also protect the game from zombies. If the same position appears **five** times, or **seventy-five** consecutive moves pass with no pawn move or capture, the game is **drawn, full stop**, no claim needed, the arbiter steps in (FIDE, 2023, Art. 9.6.1-9.6.2). The claimed thresholds (3 and 50) reward attention; the automatic ones (5 and 75) end the game regardless.

Now connect this to Lesson 5: **every claim above is verified against the scoresheets.** A repetition claim means demonstrating the position recurred; a fifty-move claim means counting moves on paper. The notation habit isn't clerical, it's your legal standing.

:::reveal Move 30, 45, and 61 of your game reach the identical position with you to move each time, same possible moves for both sides. The repetitions weren't consecutive, and your opponent is winning on material. What are you entitled to? ||| A draw by threefold repetition, on claim (Art. 9.2). The repetitions don't need to be consecutive, same position, same player to move, same possible moves, three times is enough. Claim it before making your move (and your scoresheet is the evidence), and the material deficit stops mattering.

## Sources
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
      recallContent: [
        {
          prompt: "You want to castle. Which piece must your hand touch first, and what happens if you get it backwards?",
          answer:
            "The king (move it two squares, then the rook). Deliberately touch the rook first, then the king, and Art. 4.4.2 forbids castling on that side that move.",
        },
        {
          prompt: "What's the penalty schedule for completed illegal moves in standard play?",
          answer:
            "First one: the opponent gets two extra minutes. Second by the same player: the arbiter declares the game lost (Art. 7.5.5).",
        },
      ],
    },
    {
      slug: "chess-clock-and-time",
      title: "10 · The clock: how chess became a game you can lose by standing still",
      section: "Section 2 · The rulebook: the FIDE Laws of Chess",
      body: `Every serious chess game is really two contests: one on the board, one against the **chessclock**, two linked timers, only one ever running, yours running whenever it's your move. Press your side after moving and the opponent's starts. Article 6 of the Laws governs all of it (FIDE, 2023, Art. 6).

**Losing on time.** Using up your allotted time is called **flag-fall** (from the little flag old analog clocks dropped at the hour). The rule: a player who does not complete the prescribed number of moves in the allotted time **loses the game** (FIDE, 2023, Art. 6.9), *with one beautiful exception*. If the position is such that your opponent **could not possibly checkmate you by any series of legal moves**, your flag falling produces a **draw**, not a loss (Art. 6.9). A lone king can't lose on time to another lone king. Chess refuses to award a win the board says is impossible.

**Clock etiquette is law, not manners.** You must press the clock **with the same hand you moved with** (FIDE, 2023, Art. 6.2.3), no moving with the right while the left hovers over the button. Forgetting to press at all is legal, painful, and self-punishing: your clock just keeps running while you wonder why your opponent is thinking so long.

**Time controls, the three speeds of chess.** The Laws define the boundaries, and increments (added seconds per move, an idea popularized by Bobby Fischer's patented clock design) count toward the math at 60 moves' worth:

| Speed | Definition | Where you'll meet it |
| --- | --- | --- |
| **Classical** | Slower than rapid, an hour or more per player | Title norms, championships, serious league play |
| **Rapid** | More than 10 but less than 60 minutes per player (base + 60× increment) (FIDE, 2023, App. A) | Weekend events, World Rapid Championship |
| **Blitz** | 10 minutes or less per player (base + 60× increment) (FIDE, 2023, App. B) | Club nights, online default, World Blitz Championship |

Online platforms add **bullet** (under ~3 minutes, often 1), an internet-native speed with no FIDE appendix of its own; under the Laws' definitions it's simply very fast blitz.

**Both flags down?** It happens, especially with analog clocks. In a sudden-death period, where all remaining moves must be completed in the remaining time, the Guidelines to the Laws call the game **drawn** if it cannot be established which flag fell first (FIDE, 2023, Guidelines III.3.1.2). Digital clocks have made the question rare; the rule remains for when it isn't.

**And the modern hard line.** During play, a player may not have **any electronic device not specifically approved by the arbiter** in the playing venue, a phone in your pocket can cost you the game (FIDE, 2023, Art. 11.3.2). That severity isn't paranoia. Any phone now carries an engine stronger than any human champion (Section 4 tells that story), so the anti-device rule is the load-bearing wall of over-the-board integrity, and Section 6 covers the people whose *job* is defending it.

:::reveal Your opponent has king and rook against your bare king and is trying to win on the clock. Your flag falls. What's the result, and what would it have been if THEIR flag had fallen instead? ||| Your flag falling loses: king + rook can checkmate, so Art. 6.9's exception doesn't save you. Their flag falling is only a draw, your lone king cannot possibly deliver checkmate by any series of legal moves, and the Laws never award a win the board makes impossible.

## Sources
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
      recallContent: [
        {
          prompt: "Threefold repetition and the fifty-move rule vs. their bigger siblings, what's the operational difference?",
          answer:
            "Threefold (9.2) and fifty-move (9.3) draws must be CLAIMED by a player, verified against the scoresheet. Fivefold repetition (9.6.1) and seventy-five moves (9.6.2) are AUTOMATIC, the arbiter ends the game, no claim needed.",
        },
        {
          prompt: "What's the exact protocol for offering a draw?",
          answer:
            "Make your move on the board, offer the draw, then press your clock, and no conditions can be attached (Art. 9.1.2.1). It can't be retracted; touching a piece rejects it.",
        },
      ],
    },
    {
      slug: "chess-quiz-rulebook",
      title: "11 · Quiz: the FIDE Laws of Chess",
      section: "Section 2 · The rulebook: the FIDE Laws of Chess",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who publishes the Laws of Chess used worldwide, and when did the current edition take effect?",
            options: [
              "FIDE, the current edition took effect 1 January 2023",
              "Chess.com, updated continuously online year-round",
              "Each country writes its own set of unrelated laws",
              "The reigning world champion approves each edition",
            ],
            correctIndex: 0,
            explanation:
              "FIDE (founded Paris, 1924) maintains the Laws as Handbook section E.01; the current edition took effect 1 January 2023. National bodies adapt them for domestic play.",
            sourceLessonSlug: "chess-who-writes-the-rules",
          },
          {
            prompt: "What is FIDE's motto, and what does it mean?",
            options: [
              "'Gens una sumus', we are one family",
              "'Citius, altius, fortius', faster, higher, stronger",
              "'Mens sana in corpore sano', a sound mind in a sound body",
              "'Scacchia ludus', the game of chess",
            ],
            correctIndex: 0,
            explanation:
              "'Gens una sumus,' Latin for 'we are one family', fitting for a single federation of 204 national members writing one rulebook for the world.",
            sourceLessonSlug: "chess-who-writes-the-rules",
          },
          {
            prompt: "Why do the Laws of Chess give the arbiter explicit discretion?",
            options: [
              "Because the Laws' preface admits it can't cover every case",
              "Because arbiters outrank the FIDE General Assembly",
              "Because most of the rules are unwritten traditions",
              "They don't, arbiters may only read the text aloud",
            ],
            correctIndex: 0,
            explanation:
              "The Laws are deliberately incomplete: precise rules administered by human judgment. FIDE trains and licenses arbiters (up to International Arbiter) for exactly this.",
            sourceLessonSlug: "chess-who-writes-the-rules",
          },
          {
            prompt: "You deliberately touch your own bishop, intending to move it. It has three legal moves, all bad. What now?",
            options: [
              "Say 'j'adoube' now and put the touched bishop back",
              "You must move the bishop; Art. 4.3 gives no escape here",
              "You may move any piece if you haven't released the bishop",
              "You immediately lose the game under the touch rule",
            ],
            correctIndex: 1,
            explanation:
              "Touch-move (Art. 4.3): deliberately touching your piece with intent to move commits you to moving it if it legally can. 'J'adoube' only works if announced BEFORE touching, for adjusting.",
            sourceLessonSlug: "chess-touch-move",
          },
          {
            prompt: "What's the correct way to adjust a piece sitting crookedly on its square?",
            options: [
              "Announce 'j'adoube' or 'I adjust' first, then straighten it",
              "Straighten it quickly and say 'adjust' if anyone objects",
              "Ask the arbiter to straighten it; players may not adjust",
              "Adjusting pieces is forbidden once the game has started",
            ],
            correctIndex: 0,
            explanation:
              "Art. 4.2: adjustment is legal only if the intention is announced first. Touch first, explain later is precisely what touch-move exists to prevent.",
            sourceLessonSlug: "chess-touch-move",
          },
          {
            prompt: "Intending to castle, you pick up your rook first, then reach for your king. What does Art. 4.4.2 say?",
            options: [
              "Nothing at all; the order of the two pieces doesn't matter",
              "You may not castle that side this move; touch-move now applies",
              "You lose the right to castle for the rest of the game on both sides",
              "The arbiter simply adds two minutes to the opponent's clock",
            ],
            correctIndex: 1,
            explanation:
              "Castling is a king move: rook-then-king forfeits castling on that side for that move (Art. 4.4.2). Habit: king two squares first, then the rook.",
            sourceLessonSlug: "chess-touch-move",
          },
          {
            prompt: "When is a non-capturing move 'made' final, the point of no return for that move?",
            options: [
              "When you first touch the piece with intent",
              "When you release the piece on its new square",
              "When you finally press your clock button",
              "When your opponent responds with a move",
            ],
            correctIndex: 1,
            explanation:
              "Touched = committed to that piece; released = committed to that move (Art. 4). While your hand still holds the piece, you may still choose a different square for it.",
            sourceLessonSlug: "chess-touch-move",
          },
          {
            prompt: "In standard play, what happens after a player's SECOND completed illegal move?",
            options: [
              "Two more minutes added to the opponent's clock",
              "The arbiter declares that player to have lost",
              "The illegal move simply stands if unnoticed",
              "The whole game restarts from move one again",
            ],
            correctIndex: 1,
            explanation:
              "Art. 7.5.5: first completed illegal move costs two minutes (added to the opponent); the second by the same player loses the game.",
            sourceLessonSlug: "chess-touch-move",
          },
          {
            prompt: "What's the lawful way to offer a draw?",
            options: [
              "At any time, even on the opponent's move",
              "After moving, before you press your clock",
              "Only through the arbiter, always in writing",
              "Only after move 30 has been reached",
            ],
            correctIndex: 1,
            explanation:
              "Art. 9.1.2.1: move, offer, then press. No conditions can be attached, the offer can't be retracted, and touching a piece rejects it.",
            sourceLessonSlug: "chess-five-draws",
          },
          {
            prompt: "For a threefold-repetition claim, which of these is required?",
            options: [
              "The three repetitions must come on three consecutive moves",
              "The same exact MOVES, not position, must repeat thrice",
              "The same position, side to move, and rights, not just in a row",
              "The opponent must formally agree to the repetition claim",
            ],
            correctIndex: 2,
            explanation:
              "Art. 9.2: it's the position that repeats, not the moves, and not necessarily consecutively. Lost castling or en passant rights make positions NOT the same.",
            sourceLessonSlug: "chess-five-draws",
          },
          {
            prompt: "The fifty-move rule lets the player to move claim a draw when...",
            options: [
              "...fifty total moves have now been played overall",
              "...the last fifty moves saw no pawn move or capture",
              "...one player has been ahead for fifty full moves",
              "...both clocks pass the fifty-minute time mark",
            ],
            correctIndex: 1,
            explanation:
              "Art. 9.3: fifty moves by EACH side with no pawn move or capture, chess's two irreversible events. At seventy-five such moves the draw becomes automatic (Art. 9.6.2).",
            sourceLessonSlug: "chess-five-draws",
          },
          {
            prompt: "Which pair of draws happens AUTOMATICALLY, with no claim required?",
            options: [
              "Threefold repetition and the fifty-move rule",
              "Fivefold repetition and the seventy-five-move rule",
              "Agreement and ordinary threefold repetition",
              "Every draw type still requires an explicit claim",
            ],
            correctIndex: 1,
            explanation:
              "Art. 9.6.1-9.6.2 are the backstops: five repetitions or seventy-five capture-less, pawn-less moves end the game regardless of claims. The 3- and 50- versions (9.2, 9.3) must be claimed.",
            sourceLessonSlug: "chess-five-draws",
          },
          {
            prompt: "Your opponent has only a bare king. YOUR flag falls. Result?",
            options: [
              "You simply lose on time, flag down",
              "Draw: a lone king can never checkmate you",
              "Your opponent chooses win or draw",
              "The game continues without clocks",
            ],
            correctIndex: 1,
            explanation:
              "Art. 6.9's exception: flag-fall loses UNLESS the opponent couldn't checkmate you by any series of legal moves. King vs. king-plus-anything-mateable is the classic case.",
            sourceLessonSlug: "chess-clock-and-time",
          },
          {
            prompt: "Per the FIDE Laws' appendices, a game with 5 minutes per player plus a 3-second increment is...",
            options: [
              "Rapid, since the increment doesn't count",
              "Blitz: base + 60× increment, 10 min or less",
              "Classical, if both players agree to it",
              "Bullet, which FIDE Appendix B defines",
            ],
            correctIndex: 1,
            explanation:
              "Appendix B: blitz is 10 minutes or less counting base time plus 60 times the increment. 5 + (60×3s = 3 min) = 8 minutes → blitz. Rapid (App. A) is more than 10 and less than 60. 'Bullet' is an online label, not a FIDE appendix.",
            sourceLessonSlug: "chess-clock-and-time",
          },
          {
            prompt: "Which of these is a rule, not mere etiquette?",
            options: [
              "Press the clock with the same hand that moved",
              "Always shake hands before the game starts",
              "Always announce 'check' out loud each time",
              "Always resign once you are down a whole queen",
            ],
            correctIndex: 0,
            explanation:
              "The same-hand rule is law (Art. 6.2.3). Handshakes are custom, announcing check is optional in serious play, and resigning is always a choice.",
            sourceLessonSlug: "chess-clock-and-time",
          },
        ],
      },
    },

    // ─────────────────────────── SECTION 3 · STRATEGY & TACTICS ───────────────────────────
    {
      slug: "chess-opening-principles",
      title: "12 · The opening: three jobs, not thirty memorized moves",
      section: "Section 3 · Strategy: openings, tactics, endgames",
      body: `Beginners think strong players have memorized the opening. Sometimes they have, but memory is the *last* thing they built, not the first. Underneath every respectable opening are three jobs, and if your first ten moves do these three jobs you will leave the opening in decent shape against anyone:

**Job 1, fight for the center.** Remember the knight math from Lesson 2: a knight in the corner reaches two squares, a knight in the center reaches eight. That ratio holds, less dramatically, for every piece: **central squares radiate more power**. So the opening battle is for d4, d5, e4, e5, occupy the center with pawns, aim pieces at it, and deny it to the opponent. This is why 1. e4 and 1. d4 are the two most respected first moves: each stakes a pawn in the center and opens lines for pieces to follow.

**Job 2, develop your minor pieces.** "Develop" means getting knights and bishops off the back rank onto squares where they do work. Every move spent on anything else is a move your opponent can spend building an army that's actually *in the game*. Two classic corollaries: **don't move the same piece twice in the opening** without a concrete reason (it burns development time), and **don't bring your queen out early**, she's so valuable that every enemy developing move that attacks her forces her to run, and your opponent develops *for free* while you shuffle. Look back at the Scholar's Mate from Lesson 5: 2. Qh5 threatens mate, yes, but against a defender who knows the pattern, White's queen becomes a piñata, swatted around the board by Black's developing moves. The trap punishes ignorance; the *idea* behind it loses to competence.

**Job 3, get your king safe.** Castle early, usually kingside. An uncastled king in the center sits on the very files the opening is busy ripping open. The saddest recurring game in scholastic chess: a player wins material brilliantly, leaves the king on e1, and gets mated through the middle by move 18.

**Openings as vocabulary.** Named openings are just well-trodden road networks through those three jobs, and knowing a few names lets you read chess culture. After 1. e4 e5 2. Nf3 Nc6: 3. Bc4 is the **Italian Game** (bishop eyes f7, the weakest square in Black's camp, sound familiar from the Scholar's Mate?), and 3. Bb5 is the **Ruy López**, named for the sixteenth-century Spanish priest Ruy López de Segura, whose 1561 treatise analyzed it, one of the oldest continuously-played openings on earth (Murray, 1913). After 1. d4 d5, the move 2. c4 is the **Queen's Gambit**, the "sacrificed" pawn is nearly always regainable, which is why it's chess's most famous *fake* gamble, and why a certain 2020 TV series borrowed the name (that story lands in Section 4).

The practical advice this course will stand behind: pick **one** opening setup for White and **one** response to each of 1. e4 and 1. d4 for Black, learn the first six-to-eight moves *with the reasons attached*, and spend the rest of your study time on Sections' 3 tactics and endgames. Openings decide surprisingly few games below master level. Hanging pieces decides thousands.

:::reveal After 1. e4 e5 2. Qh5, White threatens Qxf7# ideas and also attacks the e5 pawn. Why do coaches still call 2. Qh5 a bad habit rather than a weapon? ||| Because Black's best defenses are developing moves that hit the queen, 2...Nc6 guards e5, and after 3. Bc4 g6 the queen must retreat or wander while Black gains time on every move. The early queen turns each of Black's defensive moves into free development; the trap only beats players who haven't seen it, and the habit collapses against everyone else.

## Sources
- Murray, H. J. R. (1913). *A history of chess*. Clarendon Press.
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
      recallContent: [
        {
          prompt: "Flag-fall (Art. 6.9): when does running out of time NOT lose the game?",
          answer:
            "When the opponent couldn't possibly checkmate you by any series of legal moves, then it's a draw. The Laws never award a win the board makes impossible.",
        },
        {
          prompt: "Per Appendices A and B, where do rapid and blitz draw their boundaries?",
          answer:
            "Counting base time plus 60× the increment: blitz is 10 minutes or less per player; rapid is more than 10 but less than 60. An hour or more is classical territory.",
        },
      ],
    },
    {
      slug: "chess-tactics-fork-pin-skewer",
      title: "13 · Tactics I: counting material, forks, pins, and skewers",
      section: "Section 3 · Strategy: openings, tactics, endgames",
      body: `A **tactic** is a short, forcing sequence that wins something concrete, material or mate. Studies of amateur games agree with every coach who ever lived: below master level, games are overwhelmingly decided by tactics, not by grand plans. This lesson and the next give you the core patterns; there are only a handful, endlessly remixed.

**First, the counting scale.** To "win material" you need to know what things are worth. The traditional values, and remember from Lesson 2, this is **coaching convention, not anything in the FIDE Laws** (FIDE, 2023):

| Piece | Conventional value |
| --- | --- |
| Pawn | 1 |
| Knight | 3 |
| Bishop | 3 |
| Rook | 5 |
| Queen | 9 |

The king has no number, you can't trade him. The scale is a servant, not a master (a knight that dominates the board outworks a rook trapped in a corner), but for reading trades it's indispensable: rook-for-bishop is losing "the exchange" (5 for 3); two minor pieces (3+3) usually outweigh a rook (5); three pawns for a piece is roughly even on paper and usually worse in practice in the middlegame.

**The fork.** One piece attacks **two or more targets at once**; the opponent saves one, you take the other. Every piece can fork, even the king, even a pawn (one pawn attacking two pieces diagonally is the cheapest fork in chess). But the knight is the fork's signature artist, because its jump attacks squares no other piece is watching along the way. The dream version, the **royal fork**, hits king and queen simultaneously: the king *must* step out of check (Lesson 3's triage), and the queen is gone. Knight forks are the single most common way beginners lose queens, which is also to say: the most common way beginners *win* queens, once they start looking for them.

**The pin.** A piece can't, or shouldn't, move because a bigger prize stands **behind it** on the same line. Only line-movers pin: bishops, rooks, queens. Two flavors with legally different teeth:

- **Absolute pin**, the piece is pinned **to its king**. Moving it is *illegal* (it would expose the king to check, forbidden by Art. 3.9). The pinned piece is effectively paralyzed, though remember the rulebook's dark little footnote from Lesson 3: a pinned piece still *gives* check and still supports its own army's threats (FIDE, 2023, Art. 3.9.1).
- **Relative pin**, the prize behind is merely valuable (say, a queen or rook), so moving the pinned piece is legal but usually terrible. "Usually" is the operative word: relative pins get broken by countertactics, so verify before you lean on one.

The pin's practical power is that a paralyzed defender can be **attacked again**: pile a second attacker on a pinned piece and it often just falls.

**The skewer.** The pin's mirror image: the *big* piece stands in front and is attacked first; it must move, **exposing the smaller prize behind it**. King in front, rook behind, enemy bishop on the diagonal, the king steps aside, the rook dies. Skewers love the endgame, where kings walk around in the open on the same lines as their last remaining pieces.

Train these as *shapes*, not sentences. Your eye needs to fire on "knight two squares from king AND queen," "queen and king on one diagonal," "rook behind king on a file" before your conscious mind arrives. That firing is built one way: volume. Puzzle sets sorted by motif exist on every major platform, and Lesson 16 builds them into a routine.

:::reveal Your bishop pins a knight to the enemy queen; your opponent moves the knight anyway, and it forks your queen and rook. What did you just learn about the two kinds of pin? ||| That was a RELATIVE pin, the prize behind was the queen, not the king, so moving the knight was perfectly legal, just supposedly unwise. Only an absolute pin (piece pinned to its king, Art. 3.9) makes the move illegal. Relative pins are promises the tactics have to keep, check for countertactics before trusting one.

## Sources
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
      recallContent: [
        {
          prompt: "What are the opening's three jobs?",
          answer:
            "Fight for the center (d4/d5/e4/e5), develop the minor pieces (knights and bishops off the back rank, queen stays home early), and get the king safe, castle early.",
        },
        {
          prompt: "After 1. e4 e5 2. Nf3 Nc6, what are 3. Bc4 and 3. Bb5 called?",
          answer:
            "3. Bc4 is the Italian Game (eyeing f7); 3. Bb5 is the Ruy López, analyzed in Ruy López de Segura's 1561 treatise, one of the oldest openings still in top-level use.",
        },
      ],
    },
    {
      slug: "chess-tactics-discovered-attacks",
      title: "14 · Tactics II: discovered attacks, double check, and removing the defender",
      section: "Section 3 · Strategy: openings, tactics, endgames",
      body: `Round two of the pattern library: the tactics where the attack comes from a piece that *didn't move*, and the demolition tools that make other tactics work.

**The discovered attack.** Two of your pieces stand on the same line; the front one moves, and the back one's attack switches on like a floodlight. The move and the discovery are **two threats delivered in one turn**, the moving piece can grab something or make its own threat while the unveiled piece attacks something else, and the opponent gets one move to answer both. That's the family resemblance across the best tactics: **more threats than the opponent has moves.**

**Discovered check** turns the dial up: the unveiled piece gives *check*, which means the opponent's reply is forced to deal with the check (Lesson 3's triage: move, block, or capture) while your moving piece does *anything it wants*. A rampaging pattern from real games: bishop on a diagonal to the enemy king, knight in front; the knight captures a defended pawn *with check behind it*, the king deals with the check, the knight escapes with the loot, sometimes twice.

**Double check** is the nuclear variant: the moving piece gives check *and* the unveiled piece gives check, simultaneously. Now walk the triage. **Block?** You can only block one of the two check-lines; the other still hits. **Capture?** You can only capture one checker per move; the other still hits. So a double check leaves precisely one category of legal reply: **the king must move** (a consequence the Laws' definition of check makes airtight, no single move can neutralize two attackers except by relocating their target; FIDE, 2023, Art. 3.9). Some of the most famous mating attacks in chess history run on this logic: the opponent's entire army becomes spectators because none of it is allowed to help.

**Removing the defender.** Tactics often *almost* work, that knight fork would win the queen, except a bishop guards the fork square. So make the guard disappear:

- **Capture it**, trade off the defender, then execute the tactic.
- **Deflect it**, attack or check the defender so it must move away from its post (also called *decoy* when you drag a piece *toward* a fatal square rather than away from a duty).
- **Overload it**, if one defender guards two things, take one; the defender recaptures and abandons the other; take that too. An overworked piece is a promise that can't be kept twice.

**How to actually find all this in a game.** The professional habit is a scan, every move, in this order: **checks, captures, threats**, yours *and* theirs. Checks first because they force the most; captures next; threats last. It sounds mechanical because it is; the magic isn't in the scan, it's in doing it on move 31 with two minutes left, when your hand is itching to play the first idea it saw. The blunders that decide amateur games aren't failures of talent. They're skipped scans.

:::reveal Your opponent's rook and bishop both defend a knight on d5, but the rook also defends the back rank against your heavy pieces. What's the tactical term for that rook's situation, and what's the recipe? ||| The rook is OVERLOADED, one piece with two jobs. Recipe: cash in one of its duties to break the other. Capture the knight on d5; if the rook recaptures, it has abandoned the back rank, and the back-rank threat lands. An overworked defender can't keep both promises.

## Sources
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
      recallContent: [
        {
          prompt: "Fork, pin, skewer, thirty-second definitions?",
          answer:
            "Fork: one piece attacks two targets at once. Pin: a piece can't (absolute, pinned to king, illegal to move) or shouldn't (relative) move because of a prize behind it. Skewer: the big piece is in front, forced to move and expose the smaller one behind.",
        },
        {
          prompt: "Rook for bishop, and two minors for a rook, how does the conventional scale read those trades?",
          answer:
            "Rook (5) for bishop (3) is losing 'the exchange.' Two minor pieces (3+3=6) usually outweigh a rook (5). And the scale is coaching convention, the FIDE Laws assign no values.",
        },
      ],
    },
    {
      slug: "chess-basic-endgames",
      title: "15 · Endgames: the part champions study first",
      section: "Section 3 · Strategy: openings, tactics, endgames",
      body: `José Raúl Capablanca, world champion from 1921 to 1927, and one of the cleanest players who ever lived, opened his classic primer not with openings but with **elementary endings and simple mates**, on the logic that you must know where the game is going before the earlier stages mean anything (Capablanca, 1921). A century later every serious coach still teaches in that order, and this lesson is the non-negotiable core: the endings you will reach in real games, and the ideas that decide them.

**King and queen versus king.** A won game that Lesson 3 taught you how to *lose*, by stalemate. The safe technique: use the queen alone to shrink the enemy king's world, parking her a **knight's move away** from the enemy king again and again (a knight's-move distance never gives check and never allows escape between the boxes), herding the king to the edge. Then, this is the discipline, **stop**. Leave the king its patch of edge, walk your own king over at leisure, and only when your king stands two ranks away deliver mate with the queen. Every stalemate tragedy in this ending comes from one impulse: giving one more queen move than the position needs.

**King and rook versus king.** Same architecture, less firepower: the rook cuts the board with a wall (the "box"), your king walks up as the muscle, the box shrinks, mate arrives on the edge. Slower than the queen version and completely reliable once drilled. Drill both against a friend or a machine until they're boring; "boring" is what technique feels like from the inside.

**The opposition, kings dueling.** Two kings can never stand on adjacent squares (each would be moving into check). So when kings face each other with **one square between them, the player who does NOT have to move** controls the door: the mover must give ground. That state is called **having the opposition**, and it converts directly into results in pawn endings, the king with the opposition shoulders its rival away from the promotion path, or muscles its own pawn through. If a pawn ending looks like two old men shuffling, watch again: it's a knife fight over a single tempo.

**The square of the pawn.** Passed pawn racing for promotion, enemy king chasing: does it catch it? Draw the mental **square** whose corners are the pawn and its promotion square (from a pawn on a4: a4-a8-e8-e4). **If the defending king can step into that square on its move, it catches the pawn; if not, the pawn queens.** One glance replaces ten moves of counting, and remember the pawn's two-square first move when you draw the square from its home rank.

**Why promotion rules the phase.** Material from Lesson 13's scale gets *converted* here: an extra pawn in a middlegame is a small edge; an extra pawn in a king-and-pawn ending is often simply a new queen (Art. 3.7.3.3) and the game. This is also where underpromotion earns its keep, promoting to a knight with check, or to a rook to avoid a stalemate your new queen would have delivered. And keep the automatic draws from Lesson 9 in your pocket: a defender who can't stop the pawn may still be angling for stalemate, repetition, or a fifty-move fortress. Endgames are where every rule in this course shows up to work at once.

:::reveal White pawn on b5 (moving up the board), White king far away, Black king on f6 with Black to move. Use the square rule: does the king catch the pawn? ||| Draw the square from b5 to the promotion corner: b5-b8-e8-e5. Black's king on f6 stands OUTSIDE it, but it's Black's move: Ke6 (or Ke5) steps INTO the square, so yes, the king catches the pawn. Same position with White to move, b6 redraws a smaller square (b6-b8-d8-d6) the king can never enter, and the pawn queens.

## Sources
- Capablanca, J. R. (1921). *Chess fundamentals*. Harcourt, Brace.
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
      recallContent: [
        {
          prompt: "Why is double check the one tactic that permits only a king move in reply?",
          answer:
            "Blocking or capturing can each neutralize only ONE checker, and two are attacking at once, so the only legal category of reply is relocating the target: the king must move.",
        },
        {
          prompt: "What's the professional every-move scan, in order?",
          answer:
            "Checks, captures, threats, yours and your opponent's. Checks force the most, captures next, threats last. Most amateur blunders are skipped scans, not missing talent.",
        },
      ],
    },
    {
      slug: "chess-improving",
      title: "16 · How to actually get better (a plan that fits a school week)",
      section: "Section 3 · Strategy: openings, tactics, endgames",
      body: `Chess improvement has a suspicious amount in common with getting stronger at anything: the work that helps is mildly uncomfortable and unglamorous, and the work that feels good mostly doesn't help. Here is a plan built from the standing advice of the coaching tradition, Capablanca's endings-first doctrine included (Capablanca, 1921), sized for a person with homework.

**The weekly skeleton (about 5 hours):**

| Activity | Time | Why it earns its slot |
| --- | --- | --- |
| Tactics puzzles | 20-30 min/day | Builds the pattern-firing from Lessons 13-14; the highest-return minutes in chess |
| One SLOW game | 1× week, 30+ min/side | Long thinks are where the scan (checks, captures, threats) becomes a habit |
| Review that game | 30 min, same week | Find the real mistake yourself BEFORE turning the engine on |
| Endgame technique | 30 min/week | Drill Lesson 15 until boring; boring = owned |
| Openings | whatever's left | The smallest slice on purpose, see Lesson 12 |

Three of those rows deserve their fine print.

**Slow games, on purpose.** Blitz and bullet are fun, legitimate, and nearly useless for building calculation, because they train your hand to play the first pattern your eye finds, the exact reflex the scan exists to interrupt. Play fast for joy; count only slow games as practice. One thoughtful 30-minute game teaches more than twenty 3-minute ones.

**Review your losses, and write before you engine.** Lesson 5 made you keep notation; here's the payoff. Replay the loss and mark, in your own words, where you think it went wrong, *then* check with an engine or a stronger player. The gap between where you *thought* the game turned and where it actually turned is the most precise map of your blind spots that exists, and it's free. Reviewing only wins feels great and teaches almost nothing; your wins mostly show you your opponents' mistakes.

**Puzzles with intent.** Do them slowly enough to *calculate to the end* before moving, guessing the first move and hoping is blitz in disguise. Motif-sorted sets (all forks, then all pins) build recognition fastest at the start; mixed sets keep you honest later, because real games don't announce the theme.

**Two multipliers, if you can get them.** A **club**, school club, local club, or a team, supplies the two things solo study can't: slightly-stronger opponents on demand, and someone to review games with (Section 5 shows how to find rated events from there). A **coach** accelerates everything but costs money; Section 6 looks at that market from both sides of the table, because coaching is also one of the main ways people who love this game get *paid*, quite possibly including future-you.

One warning label, because you live on the same internet as everyone else: engines are for *checking* your analysis, never for *replacing* it. A phone evaluating at superhuman strength (Section 4 explains just how superhuman) will happily hand you the best move in every position, and doing so builds precisely nothing in the only hardware you're allowed to bring to the board, which, per Article 11.3.2, is your head (FIDE, 2023).

:::reveal Two students study five hours a week. One plays 40 blitz games and reviews none; the other plays one slow game, reviews it before engine-checking it, and does daily motif puzzles. Why does the coaching tradition bet everything on the second student? ||| Because improvement lives in the uncomfortable loop the second student runs: slow calculation (building the scan), self-diagnosis before engine-diagnosis (mapping blind spots), and pattern volume (puzzles). The blitz-only student trains the first-idea reflex, the exact habit that causes amateur blunders, and never finds out where their games are actually turning.

## Sources
- Capablanca, J. R. (1921). *Chess fundamentals*. Harcourt, Brace.
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023`,
      recallContent: [
        {
          prompt: "What is 'the opposition,' and why does it decide pawn endings?",
          answer:
            "Kings one square apart, and the player NOT to move controls the door, the mover must give ground. That single tempo decides who shoulders through to promote.",
        },
        {
          prompt: "How does the 'square of the pawn' rule work?",
          answer:
            "Draw the square from the pawn to its promotion square. If the defending king can step inside it on its move, it catches the pawn; outside, the pawn queens. Mind the pawn's two-square first move.",
        },
      ],
    },
    {
      slug: "chess-quiz-strategy",
      title: "17 · Quiz: openings, tactics, and endgames",
      section: "Section 3 · Strategy: openings, tactics, endgames",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What are the opening's three jobs?",
            options: [
              "Center, development, king safety",
              "Memorize lines, trade queens, attack",
              "Push rook pawns, develop the queen, avoid castling",
              "Copy the opponent, then improvise",
            ],
            correctIndex: 0,
            explanation:
              "Fight for d4/d5/e4/e5, get knights and bishops working, castle early. Do those three jobs and you leave the opening healthy without memorization.",
            sourceLessonSlug: "chess-opening-principles",
          },
          {
            prompt: "Why is bringing the queen out early a bad habit rather than aggression?",
            options: [
              "The queen simply can't capture during the opening",
              "Enemy developing moves hit her, gaining time for free",
              "It is actually illegal before move 10 arrives",
              "The queen is weaker in the opening than the endgame",
            ],
            correctIndex: 1,
            explanation:
              "Every move that hits the queen is development with tempo for the opponent. The Scholar's Mate idea collapses against 2...Nc6 and 3...g6 for exactly this reason.",
            sourceLessonSlug: "chess-opening-principles",
          },
          {
            prompt: "After 1. e4 e5 2. Nf3 Nc6 3. Bb5, which opening is on the board?",
            options: [
              "The Ruy López, from a Spanish priest's 1561 book",
              "The Italian Game, from a 1497 Lucena text",
              "The Queen's Gambit, a queenside d4 opening",
              "The Sicilian Defense, Black's 1...c5 reply",
            ],
            correctIndex: 0,
            explanation:
              "3. Bb5 is the Ruy López (Ruy López de Segura, 1561), one of the oldest openings still played at the top. 3. Bc4 would be the Italian; the Queen's Gambit starts 1. d4 d5 2. c4.",
            sourceLessonSlug: "chess-opening-principles",
          },
          {
            prompt: "Why is the Queen's Gambit called chess's most famous FAKE gamble?",
            options: [
              "Because it simply loses the game outright by force",
              "Because the offered c-pawn is nearly always regained",
              "Because the queen herself is really sacrificed",
              "Because it was actually invented for television",
            ],
            correctIndex: 1,
            explanation:
              "1. d4 d5 2. c4 offers a pawn White can generally win back. The name outgrew the gamble, and lent itself to a certain 2020 series.",
            sourceLessonSlug: "chess-opening-principles",
          },
          {
            prompt: "On the conventional scale, trading your rook for the opponent's bishop is called...",
            options: [
              "...winning the exchange, gaining 5 for 3",
              "...losing the exchange, giving 5 for 3",
              "...an even and fair material trade",
              "...a positional pawn gambit line",
            ],
            correctIndex: 1,
            explanation:
              "Rook ≈ 5, bishop ≈ 3 on the coaching scale (which the FIDE Laws don't contain). Giving the rook for a minor piece is 'losing the exchange.'",
            sourceLessonSlug: "chess-tactics-fork-pin-skewer",
          },
          {
            prompt: "What makes the knight the signature forking piece?",
            options: [
              "It is easily the most valuable minor piece",
              "Its jump hits squares line-pieces never cover",
              "It's the only piece allowed to attack the king",
              "It is allowed to move twice in one turn",
            ],
            correctIndex: 1,
            explanation:
              "Any piece can fork, but the knight's L-jump lands threats that line-pieces telegraph. The 'royal fork', king and queen at once, wins the queen by force.",
            sourceLessonSlug: "chess-tactics-fork-pin-skewer",
          },
          {
            prompt: "A knight is pinned to its own KING by your bishop. What is legally true?",
            options: [
              "The knight may move if it captures something",
              "Moving it is illegal, but it still gives check",
              "The knight must be moved away immediately",
              "Your bishop may not be captured while pinning",
            ],
            correctIndex: 1,
            explanation:
              "An absolute pin paralyzes the piece (Art. 3.9 forbids exposing your own king), yet Art. 3.9.1 confirms a pinned piece still attacks, it can even deliver check.",
            sourceLessonSlug: "chess-tactics-fork-pin-skewer",
          },
          {
            prompt: "King in front, queen behind on the same diagonal; your bishop attacks the king. What's the tactic?",
            options: [
              "A skewer: the king must move, exposing the queen",
              "A pin, since the pinned king simply can't move",
              "A fork, two pieces attacked from one square",
              "A discovered check along the bishop's line",
            ],
            correctIndex: 0,
            explanation:
              "That's the skewer: the bigger piece in FRONT is forced aside, and the prize behind falls. (A pin is the same geometry with the small piece in front.)",
            sourceLessonSlug: "chess-tactics-fork-pin-skewer",
          },
          {
            prompt: "Why is a discovered CHECK so much stronger than an ordinary discovered attack?",
            options: [
              "It instantly ends the entire game immediately",
              "The forced reply gives the moved piece a free turn",
              "It simply can never be blocked by anything",
              "It doesn't even use a second attacking piece",
            ],
            correctIndex: 1,
            explanation:
              "The unveiled check must be answered (move/block/capture), while the piece that moved does as it pleases, the classic engine of 'windmill' destructions.",
            sourceLessonSlug: "chess-tactics-discovered-attacks",
          },
          {
            prompt: "Against a DOUBLE check, which replies are possible?",
            options: [
              "Block just either one of the two checkers",
              "Capture just either one of the two checkers",
              "Only a king move; block or capture stops just one",
              "Any one of the normal three escape options",
            ],
            correctIndex: 2,
            explanation:
              "Two checkers, one move: blocking or capturing neutralizes only one, so the king must relocate. That's why double check powers famous mating attacks.",
            sourceLessonSlug: "chess-tactics-discovered-attacks",
          },
          {
            prompt: "An enemy rook guards both the back rank and a knight you'd like to take. The tactical label and the recipe?",
            options: [
              "Overloaded piece: one duty falls if it recaptures",
              "Absolute pin, so the rook simply can't move",
              "Zugzwang, where nearly any move now loses",
              "Skewer, attacking straight through the rook",
            ],
            correctIndex: 0,
            explanation:
              "One piece, two jobs: capture the knight, and if the rook recaptures it abandons the back rank. An overworked piece can't keep both promises.",
            sourceLessonSlug: "chess-tactics-discovered-attacks",
          },
          {
            prompt: "In the K+Q vs K mate, what is the queen's safe herding pattern, and what's the fatal impulse?",
            options: [
              "Give check every move; the impulse is moving too slowly",
              "Keep the queen a knight's-move from the king, not adjacent",
              "Trade the queen for a rook and then bring the king",
              "March the passed pawn up to promote a second queen",
            ],
            correctIndex: 1,
            explanation:
              "The knight's-move distance shrinks the king's world without checks or escapes; then STOP, bring your king, and mate. Extra 'helpful' queen moves are how Art. 5.2.1 stalemates are born.",
            sourceLessonSlug: "chess-basic-endgames",
          },
          {
            prompt: "Kings face each other with one empty square between them. Who has 'the opposition'?",
            options: [
              "The player who is forced now to move first",
              "The player NOT on move; the mover must give ground",
              "Whoever happens to have more pawns on board",
              "White always holds it, purely by definition",
            ],
            correctIndex: 1,
            explanation:
              "Kings can't touch, so the obligation to move becomes a weakness: the mover steps aside and the other king gains ground. Pawn endings turn on this single tempo.",
            sourceLessonSlug: "chess-basic-endgames",
          },
          {
            prompt: "What question does the 'square of the pawn' answer at a glance?",
            options: [
              "Whether the king can catch a passed pawn in time",
              "Whether castling rights are still legal here",
              "Which exact squares an enemy knight controls",
              "Whether the whole position is a dead draw",
            ],
            correctIndex: 0,
            explanation:
              "Draw the square from pawn to promotion corner: if the defending king can step inside on its move, it catches the pawn. One glance replaces ten moves of counting.",
            sourceLessonSlug: "chess-basic-endgames",
          },
          {
            prompt: "Per the study plan, which habit is the highest-return use of daily minutes?",
            options: [
              "Memorizing long forced opening lines by rote",
              "Tactics puzzles, calculated fully to the end",
              "Playing endless one-minute bullet games",
              "Watching chess streamers for hours daily",
            ],
            correctIndex: 1,
            explanation:
              "Pattern volume builds the eye that wins amateur games, and calculating to the end trains the scan. Openings get the smallest slice on purpose; blitz is joy, not practice.",
            sourceLessonSlug: "chess-improving",
          },
        ],
      },
    },

    // ─────────────────────────── SECTION 4 · HISTORY ───────────────────────────
    {
      slug: "chess-origins",
      title: "18 · Chaturanga to shatranj: chess's first thousand years",
      section: "Section 4 · History: fifteen centuries in five lessons",
      body: `The game on your board is roughly **fifteen hundred years old**, and its passport is stamped across three continents. The scholarly bedrock for this story is H. J. R. Murray's *A History of Chess* (1913), nine hundred pages of sources that a century of later research has adjusted in places but never replaced, and this lesson tells only the parts of the story historians actually agree on.

**India, around the sixth century CE: chaturanga.** The earliest ancestor historians accept emerged in northern India as **chaturanga**, Sanskrit for "four limbs," after the four divisions of a classical Indian army (Murray, 1913). Look at the lineup and you can still see the regiment badges on your own pieces:

| Chaturanga division | Your piece |
| --- | --- |
| Infantry (foot soldiers) | Pawns |
| Cavalry (horses) | Knights |
| Elephants | Bishops |
| Chariots | Rooks |

Plus the king and his counselor. Played on the same 8×8 grid, by two players, with victory through the king. It is recognizably the same game, a sentence you can say about almost nothing else from the sixth century.

**Persia: shatranj, and the words you still say.** The game traveled the trade routes west into Persia, where it became **shatranj**, and where it picked up its vocabulary. The king was the **shah**. A threatened king prompted the warning *shah!*, which Europe would eventually wear down into **"check."** A king with no escape was *shah mat*, commonly rendered "the king is helpless" or "the king is defeated", which is standing on your scoresheet today as **"checkmate"** (Murray, 1913). You have been speaking Persian at the chessboard all along.

**The Islamic world: chess's first golden age.** After the Arab conquest of Persia in the seventh century, shatranj spread throughout the Islamic world, and something remarkable happened: the first true chess *culture*. Court players earned titles and patronage; masters composed *mansubat*, endgame puzzles, ancestors of the ones you solved in Section 3, and wrote analytical treatises centuries before Europe wrote its own (Murray, 1913). The idea that chess is something you can *study*, not just play, was invented here.

**Into Europe by about 1000.** The game crossed into Europe along the width of the Mediterranean, through Islamic Spain, through Sicily and Italy, along trade routes, and by roughly the year 1000 it was established enough to appear in European wills, sermons, and moral tracts (Murray, 1913). Europe then did what every culture along the route had done: reskinned the army to match its own society. The shah's counselor (the *firz*) became a **queen**; the elephant, an animal most Europeans had never seen, became the **bishop**. But here's the detail that sets up the next lesson: those renamed pieces kept their old, feeble Persian *moves*. The medieval queen crept **one diagonal square at a time**. She was, for five hundred years, one of the weakest pieces on the board.

:::reveal Your opponent announces "checkmate." Trace the word back through two languages, what did it originally mean, and about whom? ||| It comes through Persian: *shah mat*, the shah (king) is helpless/defeated. The warning *shah!* for a threatened king became "check." Every game you play ends in a sixth-to-seventh-century Persian sentence about a king who cannot be saved (Murray, 1913).

## Sources
- Murray, H. J. R. (1913). *A history of chess*. Clarendon Press.`,
      recallContent: [
        {
          prompt: "Why do slow games and loss-review beat high volumes of blitz for improvement?",
          answer:
            "Slow games train the checks-captures-threats scan; reviewing losses (your own diagnosis BEFORE the engine's) maps your real blind spots. Blitz trains the first-idea reflex that causes blunders.",
        },
        {
          prompt: "What are engines for in a training plan, and what are they never for?",
          answer:
            "For CHECKING your analysis after you've done it yourself. Never for replacing it, outsourced calculation builds nothing in the only hardware you may bring to the board (Art. 11.3.2).",
        },
      ],
    },
    {
      slug: "chess-queens-revolution",
      title: "19 · The queen's revolution: the modern game is born (c. 1475-1500)",
      section: "Section 4 · History: fifteen centuries in five lessons",
      body: `For its first nine centuries, chess was a *slow* game. The medieval European queen stepped one diagonal square at a time; the bishop's ancestor hopped exactly two squares diagonally. Armies took dozens of moves to make contact. Then, in the space of about twenty-five years at the end of the fifteenth century, Europe rebuilt the game into the fastest, most violent version it had ever had, and that version is the one you are learning.

**What changed.** In late-fifteenth-century Spain and Italy, the earliest clear evidence is Valencian, from around 1475, including a poem (the *Scachs d'amor*) that plays out a game under the new rules, the queen acquired her modern powers: **rook plus bishop, the strongest piece on the board**, and the bishop acquired his full diagonals (Murray, 1913; Yalom, 2004). Contemporaries knew exactly how radical this was. In Italy the new game was called **scacchi alla rabiosa**, roughly, "madwoman's chess" (Murray, 1913). The pawn's two-square first move and, with it, the en passant rule you met in Lesson 4, belong to this same era of speed-up renovations, en passant exists *because* the pawns got faster.

**Why then, and why a queen?** The historian Marilyn Yalom's *Birth of the Chess Queen* (2004) argues the timing is no coincidence: the piece exploded in power in the exact decades when **Isabella I of Castile**, a queen who commanded armies and co-ruled one of Europe's rising powers, dominated the Iberian political world where the new rules first appear. Cultural historians debate how direct the influence was; the correlation itself, and the Iberian origin, are well documented (Yalom, 2004). Chess has always reskinned itself to match the society playing it, that's how an elephant became a bishop, and late-medieval Europe evidently found a one-square-per-turn queen implausible.

**Speed changed everything about how the game is studied.** In the old slow game, early moves barely interacted and openings hardly mattered. In the new game, the queen could deliver the Scholar's Mate you met in Lesson 5 **four moves in**, suddenly the opening was a minefield, and *knowing the map* was worth money. Right on cue, and right alongside the printing press, came the world's first printed chess analysis: **Luis Ramírez de Lucena's treatise of 1497**, cataloguing openings of the new game (Murray, 1913). And in **1561**, the Spanish priest **Ruy López de Segura** published the treatise that gave Lesson 12's opening its name (Murray, 1913). Opening theory, the thing modern grandmasters maintain like a second job, is a direct consequence of the queen's new legs plus movable type.

**The result.** Within a generation or two, the old shatranj-style game was effectively extinct in Europe. Faster, sharper, more decisive, the "mad queen's game" out-competed its ancestor in the only tournament that matters: what people chose to play. Every rule you learned in Sections 1 and 2 descends from this renovation; FIDE's Laws of Chess are its maintenance manual.

:::reveal The queen's new powers arrive c. 1475-1500, and the first PRINTED opening analysis appears in 1497. Why do those two dates travel together? ||| Because the fast queen made the opening dangerous (a four-move mate now existed), so mapped knowledge of the early game suddenly had real value, and the printing press, brand new in Europe, could mass-produce exactly that knowledge. Lucena's 1497 treatise is the ancestor of every opening book, course, and database; opening theory is the mad queen's paperwork.

## Sources
- Murray, H. J. R. (1913). *A history of chess*. Clarendon Press.
- Yalom, M. (2004). *Birth of the chess queen: A history*. HarperCollins.`,
      recallContent: [
        {
          prompt: "What does 'chaturanga' mean, and how does the name survive on your board?",
          answer:
            "Sanskrit for 'four limbs', the four divisions of a classical Indian army: infantry (pawns), cavalry (knights), elephants (bishops), chariots (rooks).",
        },
        {
          prompt: "Where did chess's first true study culture, endgame puzzles and analytical treatises, develop?",
          answer:
            "In the Islamic world after shatranj spread from conquered Persia: masters composed mansubat (endgame problems) and wrote analysis centuries before Europe did.",
        },
      ],
    },
    {
      slug: "chess-championship-century",
      title: "20 · Steinitz 1886: chess gets a world champion (and the Soviets get a dynasty)",
      section: "Section 4 · History: fifteen centuries in five lessons",
      body: `For most of the nineteenth century, "world's best chess player" was a reputation, not a title, argued in coffeehouses, tested in occasional matches, never formalized. London hosted the first great international tournament in 1851; the American prodigy Paul Morphy toured Europe in 1858 and beat everyone worth beating, then quit the game, still with no official crown to show for it (Murray, 1913). The crown had to be invented, and it took a business negotiation to do it.

**1886: the first official World Chess Championship.** **Wilhelm Steinitz** and **Johannes Zukertort**, the era's two dominant players, signed an agreement to play a match explicitly *"for the Championship of the World"*, the first time the title was formally at stake. They played across three American cities, New York, St. Louis, and New Orleans, first to ten wins. **Steinitz won 10-5** and became the first official world chess champion (ChessBase, n.d.). He mattered twice over: beyond the title, Steinitz was the first great *theorist* of positional chess, the idea that positions have permanent features (pawn structure, weak squares, the bishop pair) that accumulate into wins, rather than chess being a sequence of raids. Section 3's "strategy" is his intellectual estate.

**The private-property era.** Here's the structural oddity: for its first sixty years, the world title was the champion's **personal property**. The champion chose challengers, set financial terms, and could simply price an opponent out. No federation ran it, remember from Lesson 7 that FIDE wasn't even founded until 1924, and the arrangement only ended when the reigning champion, Alexander Alekhine, died in 1946 *holding* the title. Into the vacuum stepped FIDE, which organized a championship tournament at **The Hague and Moscow in 1948**; **Mikhail Botvinnik** won it, and the title has run through federation cycles ever since (FIDE Museum, n.d.). Meanwhile the women's crown was ahead of schedule: FIDE's **first Women's World Championship was held in London in 1927**, won by **Vera Menchik**, who then defended it until her death in 1944 and regularly played (and beat) the leading men, decades before that was considered thinkable (FIDE Museum, n.d.).

**The Soviet dynasty, and the night it broke.** From Botvinnik in 1948 onward, the title lived in the Soviet Union, which had made chess a funded state project: schools, trainers, salaries, a production line of champions. For **twenty-four years**, every world champion was Soviet. Then came **Reykjavik, 1972**: the American **Bobby Fischer**, brilliant, difficult, and playing essentially alone against that entire system, beat defending champion **Boris Spassky 12½-8½** in the "Match of the Century," a Cold War proxy event that put chess on front pages worldwide (ChessBase, 2022). The interruption was brief (Fischer never defended; Anatoly Karpov took the title in 1975), but chess's place in popular culture was never the same.

**1985: the youngest champion.** In Moscow, on 9 November 1985, the 22-year-old **Garry Kasparov** beat Karpov **13-11** to become the youngest world champion in history (ChessBase, 2020), a record that stood until 2024. Kasparov would dominate for two decades, and Section 4's next lesson is about the opponent who finally beat him: it had no pulse.

:::reveal Before 1948, how did the world championship actually change hands, and what does 1886 mark? ||| By private negotiation: from Steinitz-Zukertort in 1886 (the first match formally played 'for the Championship of the World', Steinitz won 10-5) until Alekhine's death in 1946, the title was the champion's personal property; champions picked challengers and set the price. Only in 1948 did FIDE take over, running the Hague-Moscow tournament that made Botvinnik champion and putting the title into the federation cycles used ever since.

## Sources
- ChessBase. (n.d.). *Johannes Zukertort and the first World Chess Championship match*. https://en.chessbase.com/post/johannes-zukertort-and-the-first-world-chess-championship-match
- ChessBase. (2020). *35 years ago: Kasparov becomes youngest world champion in the history of chess*. https://en.chessbase.com/post/35-years-ago-kasparov-becomes-youngest-world-champion-in-the-history-of-chess
- ChessBase. (2022). *Fischer vs Spassky – 50 years ago*. https://en.chessbase.com/post/fischer-vs-spassky-50-years-ago
- FIDE Museum. (n.d.). *The history of FIDE*. https://museum.fide.com/fide-history
- Murray, H. J. R. (1913). *A history of chess*. Clarendon Press.`,
      recallContent: [
        {
          prompt: "Name the queen's two transformations at the end of the fifteenth century, and the game's new Italian nickname.",
          answer:
            "She went from one diagonal step to rook-plus-bishop power (the bishop got full diagonals too), and contemporaries called the new game scacchi alla rabiosa, the mad queen's chess.",
        },
        {
          prompt: "What is Lucena's 1497 treatise the ancestor of?",
          answer:
            "All printed opening theory, the first printed chess analysis, arriving right when the fast new queen made mapped openings valuable and the printing press made them distributable.",
        },
      ],
    },
    {
      slug: "chess-man-vs-machine",
      title: "21 · Man versus machine: Deep Blue, the engines, and AlphaZero",
      section: "Section 4 · History: fifteen centuries in five lessons",
      body: `Chess was computing's chosen proving ground almost from the beginning, Claude Shannon, the founder of information theory, published the first serious paper on programming chess in 1950, before general-purpose computers could meaningfully play at all (Shannon, 1950). The reasoning: chess was believed to require *intelligence*, so a machine that played it well would teach us something about thinking. Half a century later, the experiment produced an answer nobody fully expected.

**1996, Philadelphia: the champion holds.** IBM's **Deep Blue**, a purpose-built supercomputer, sat across (via a human operator) from world champion **Garry Kasparov** in a six-game match under standard tournament conditions. Deep Blue **won the first game**, the first time a computer had ever beaten a reigning world champion in a classical game under tournament conditions, and the result circled the globe. But Kasparov adapted, found the machine's blind spots, and **won the match 4-2** (Chess.com, n.d.). Humanity's flag still flew. For fourteen months.

**1997, New York: the rematch.** IBM upgraded the machine and brought Kasparov back. Get the two results straight, because the internet loves to smear them into one: **Kasparov won in 1996; Deep Blue won the 1997 rematch**, 3½-2½, taking the decisive sixth game on **11 May 1997**, the first defeat of a reigning world champion by a computer in a match (Chess.com, n.d.; History.com, n.d.). The headlines said humanity lost. What actually happened was narrower and stranger: a team of engineers, using massive brute-force search plus grandmaster-tuned evaluation, had built a machine that was better at *this one thing* than the best human alive. It wrote no poems about it.

**The quiet aftermath is the real story.** Deep Blue was dismantled, but Moore's law kept going. Within a decade, engines running on ordinary consumer computers were beyond the best humans, and the fight simply... ended. Chess didn't die, it *reorganized around the machines*. Engines became the universal training partner and analysis tool (with the discipline flag Lesson 16 planted: they check your thinking; they must not replace it), preparation went digital, and over-the-board integrity became an anti-device problem, the reason Article 11.3.2's electronics ban exists (FIDE, 2023) and the reason fair play is now a profession (Section 6).

**2017: the machines stopped needing us.** Deep Blue and its descendants played from human knowledge, handcrafted evaluation rules, libraries of human openings. In December 2017, DeepMind's **AlphaZero** discarded all of it: given only the rules of chess, it trained **entirely by playing against itself**, then beat **Stockfish**, the strongest traditional engine of the day, in a 100-game match: **28 wins, 72 draws, zero losses** (Chess.com, 2017), a result peer-reviewed and published in *Science* the following year (Silver et al., 2018). And it won *strangely*: long-term piece sacrifices, prowling rook-pawn pushes, less like a calculator, more like a very patient alien. Today's top engines (Stockfish included) have absorbed the neural-network approach, and human professionals study the machines' games for ideas, the exact reverse of 1997's arrangement.

Fifteen hundred years after chaturanga, the strongest chess entities on Earth taught themselves. The humans, undeterred, kept playing each other, in bigger numbers than ever, as the next lesson shows.

:::reveal A video essay says "Deep Blue beat Kasparov in 1996." What's the precise correction, with dates? ||| Deep Blue won *Game 1* in Philadelphia in 1996, the first classical, tournament-condition win by a computer over a reigning champion, but KASPAROV WON that match 4-2. The MACHINE won the 1997 New York rematch 3½-2½, clinched in Game 6 on 11 May 1997. Two matches, split; the garbled one-match version erases the year humanity held the line.

## Sources
- Chess.com. (n.d.). *Kasparov vs. Deep Blue | The match that changed history*. https://www.chess.com/article/view/deep-blue-kasparov-chess
- Chess.com. (2017). *Google's AlphaZero destroys Stockfish in 100-game match*. https://www.chess.com/news/view/google-s-alphazero-destroys-stockfish-in-100-game-match
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023
- History.com. (n.d.). *Deep Blue defeats Garry Kasparov in chess match (May 11, 1997)*. https://www.history.com/this-day-in-history/may-11/deep-blue-defeats-garry-kasparov-in-chess-match
- Shannon, C. E. (1950). Programming a computer for playing chess. *Philosophical Magazine*, *41*(314), 256–275.
- Silver, D., Hubert, T., Schrittwieser, J., Antonoglou, I., Lai, M., Guez, A., Lanctot, M., Sifre, L., Kumaran, D., Graepel, T., Lillicrap, T., Simonyan, K., & Hassabis, D. (2018). A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play. *Science*, *362*(6419), 1140–1144.`,
      recallContent: [
        {
          prompt: "1886, 1948, 1972, 1985, attach the event to each year.",
          answer:
            "1886: Steinitz beats Zukertort 10-5 in the first official world championship. 1948: FIDE takes over the title (Hague-Moscow, Botvinnik). 1972: Fischer beats Spassky 12½-8½ in Reykjavik, breaking 24 years of Soviet reign. 1985: Kasparov, 22, beats Karpov 13-11, youngest champion (until 2024).",
        },
        {
          prompt: "Who was Vera Menchik?",
          answer:
            "Winner of the first Women's World Championship (London, 1927), which she held until her death in 1944, and a regular competitor against the leading men, decades ahead of her time.",
        },
      ],
    },
    {
      slug: "chess-online-boom",
      title: "22 · The boom: how a pandemic and a TV show made chess bigger than ever",
      section: "Section 4 · History: fifteen centuries in five lessons",
      body: `The strangest chapter in chess history is the most recent one: five centuries after the mad queen and two decades after the machines won, the ancient game became, of all things, a growth industry. It took three ingredients, stacked in one year.

**Ingredient one: the game had already moved online.** By 2020, playing chess meant tapping a phone: instant opponents at any strength, any speed, free analysis afterward. The infrastructure for a boom was sitting there, warmed up, waiting for a reason.

**Ingredient two: everyone was suddenly home.** The COVID-19 lockdowns of 2020 pushed the planet toward indoor, online, low-cost pastimes, and chess fit the moment perfectly. Twitch streamers, chess professionals and entertainment personalities alike, turned live games into spectator content, and online amateur showcase events made "watching other people learn chess" a genre of its own.

**Ingredient three: on 23 October 2020, Netflix released *The Queen's Gambit*.** A fictional drama about an orphaned girl who fights her way to the top of 1960s world chess, it became, by Netflix's own announcement, its **most-watched scripted limited series to date: 62 million households in the first 28 days** (Netflix, 2020). What happened next is the best-documented demand shock in the game's history, and the numbers below are Netflix's published ones, not folklore (Netflix, 2020):

- **New players on Chess.com increased fivefold.**
- Google searches for chess **doubled**; **"how to play chess" hit a nine-year peak**.
- eBay inquiries for chess sets rose **250%**.
- Walter Tevis's original 1983 novel entered the *New York Times* bestseller list, **37 years after publication**.
- FIDE reported significantly higher interest in the upcoming World Championship.

Contemporary reporting filled in the scale: Bloomberg's end-of-2020 analysis chronicled surging chess set sales and millions of new sign-ups on the major platforms in the weeks after release (Bloomberg, 2020).

**Why this boom stuck.** Chess had been "popular" before, 1972 made front pages too. But 1972's fans had nowhere to *play*: you watched Fischer, then maybe found a club, eventually. 2020's viewers finished an episode and were playing rated games on a phone within minutes, watching streamers explain their own games by night, and joining online tournaments by the weekend. The funnel from *curious* to *playing* had collapsed from weeks to minutes, and retention followed. The post-2020 chess world, massive online platforms, chess as watchable entertainment, scholastic waves, celebrity amateur events, is the ecosystem Sections 5 and 6 map, because it's the one you'd actually be playing, and possibly working, in.

One caution the sourcing habit demands: you will meet grander claims online, "chess grew by X hundred million players", with no year, no source, no definition of "player." You now know what a real figure looks like: it has an owner, a date, and a denominator. Netflix's 62 million households counted a specific thing over a specific 28 days. Hold every chess statistic, every statistic, to that standard.

:::reveal What made the 2020 boom durable when the bigger-headline 1972 Fischer boom faded? ||| The funnel. In 1972 a new fan had no immediate way to play; by 2020 the distance from 'curious' to 'rated game on your phone' was minutes, with streamers and online events to keep you. Same spark, but 2020's spark landed on ready infrastructure, which is why the audience stayed and became the amateur economy Section 6 explores.

## Sources
- Bloomberg. (2020). *Netflix's 'The Queen's Gambit' drives major boom in chess sales, games*. https://www.bloomberg.com/graphics/2020-chess-boom/
- Netflix. (2020, November 23). *From 'The Queen's Gambit' to a record-setting checkmate*. https://about.netflix.com/en/news/the-queens-gambit-netflix-most-watched-scripted-limited-series`,
      recallContent: [
        {
          prompt: "Get the Deep Blue story exactly right: who won what, when?",
          answer:
            "1996, Philadelphia: Deep Blue won Game 1 but KASPAROV won the match 4-2. 1997, New York: DEEP BLUE won the rematch 3½-2½, clinching Game 6 on 11 May 1997, the first match defeat of a reigning champion by a computer.",
        },
        {
          prompt: "What made AlphaZero's 2017 result different in kind from Deep Blue's?",
          answer:
            "AlphaZero learned chess purely from self-play, no human openings, no handcrafted evaluation, and beat Stockfish +28 =72 −0 over 100 games (peer-reviewed in Science, 2018). Deep Blue ran on human knowledge plus brute force.",
        },
      ],
    },
    {
      slug: "chess-quiz-history",
      title: "23 · Quiz: fifteen centuries of chess",
      section: "Section 4 · History: fifteen centuries in five lessons",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Where and roughly when did chess's earliest accepted ancestor emerge, and what was it called?",
            options: [
              "Northern India, around the sixth century CE, chaturanga",
              "Ancient Egypt, around 2000 BCE, the game of senet",
              "China, around the tenth century CE, called xiangqi",
              "Persia, around 300 BCE, a game they called shatranj",
            ],
            correctIndex: 0,
            explanation:
              "Chaturanga ('four limbs', the four army divisions) appears in sixth-century India; it became shatranj after traveling to Persia (Murray, 1913).",
            sourceLessonSlug: "chess-origins",
          },
          {
            prompt: "What does 'checkmate' literally descend from?",
            options: [
              "Persian 'shah mat', the king is helpless/defeated",
              "Latin 'checcus mattus', the board is full",
              "French 'échec du maître', the master's blow",
              "Sanskrit 'chatur mat', meaning four defeats",
            ],
            correctIndex: 0,
            explanation:
              "The shah (king) gave chess its check vocabulary: 'shah!' for a threatened king became 'check,' and 'shah mat' became 'checkmate.'",
            sourceLessonSlug: "chess-origins",
          },
          {
            prompt: "Which culture produced chess's first study tradition, endgame problems and written analysis?",
            options: [
              "The Islamic world, in the centuries after shatranj",
              "Victorian England and its many chess clubs",
              "Renaissance Italy and its earliest masters",
              "The Soviet Union's famous state chess school",
            ],
            correctIndex: 0,
            explanation:
              "Masters of the Islamic golden age composed mansubat (endgame puzzles) and analytical treatises centuries before Europe, inventing the idea that chess can be studied.",
            sourceLessonSlug: "chess-origins",
          },
          {
            prompt: "Before the late fifteenth century, how did the queen move?",
            options: [
              "One square diagonally, one of the weakest pieces",
              "Exactly as she already does today, oddly",
              "Just like a knight, leaping in an L-shape",
              "She didn't exist on the board in any form",
            ],
            correctIndex: 0,
            explanation:
              "The medieval queen (from the Persian counselor, the firz) crept one diagonal square at a time for five hundred years, until the c. 1475-1500 revolution gave her rook-plus-bishop power.",
            sourceLessonSlug: "chess-queens-revolution",
          },
          {
            prompt: "What was 'scacchi alla rabiosa'?",
            options: [
              "Italy's name for the new fast 'mad queen's chess'",
              "A banned medieval gambling variant of chess",
              "The very first mechanical chess game clock",
              "A long medieval instructional poem on chess",
            ],
            correctIndex: 0,
            explanation:
              "Contemporaries knew the queen's new powers were radical and named the game for it. The modern rules you're learning are that renovation, maintained.",
            sourceLessonSlug: "chess-queens-revolution",
          },
          {
            prompt: "Why did opening theory arise almost simultaneously with the queen's new powers?",
            options: [
              "The fast queen made openings sharp, and print spread it",
              "FIDE then mandated the formal study of openings",
              "Kings began castling, which required memorization",
              "Coffeehouse players demanded much faster games then",
            ],
            correctIndex: 0,
            explanation:
              "Speed made the opening a minefield worth mapping; movable type made maps distributable. Printed opening theory (Lucena 1497, Ruy López 1561) is a direct consequence.",
            sourceLessonSlug: "chess-queens-revolution",
          },
          {
            prompt: "What happened in 1886?",
            options: [
              "Steinitz beat Zukertort for the first world title",
              "FIDE was founded in Paris in that same year",
              "The very first chess Olympiad was held then",
              "Paul Morphy toured across Europe in triumph",
            ],
            correctIndex: 0,
            explanation:
              "Played across New York, St. Louis, and New Orleans, first to ten wins; Steinitz won 10-5 in the first match formally contested 'for the Championship of the World.'",
            sourceLessonSlug: "chess-championship-century",
          },
          {
            prompt: "How did the world title operate between 1886 and 1946?",
            options: [
              "As the champion's private property; he chose challengers",
              "FIDE ran the qualification cycles from the start",
              "It rotated among the national federations annually",
              "It was decided by a big tournament every year",
            ],
            correctIndex: 0,
            explanation:
              "No federation ran it; a champion could price out a challenger. Only after Alekhine's death did FIDE organize the 1948 Hague-Moscow event Botvinnik won, starting the federation era.",
            sourceLessonSlug: "chess-championship-century",
          },
          {
            prompt: "Who was Vera Menchik?",
            options: [
              "First Women's World Champion, 1927; also faced top men",
              "The very first female president of FIDE itself",
              "The real-life heroine behind The Queen's Gambit",
              "The first woman ever to earn the GM title, 1978",
            ],
            correctIndex: 0,
            explanation:
              "Menchik won the inaugural 1927 Women's World Championship and defended it until 1944, playing top men's events decades before that was considered thinkable.",
            sourceLessonSlug: "chess-championship-century",
          },
          {
            prompt: "What made Reykjavik 1972 'the Match of the Century'?",
            options: [
              "Fischer beat Spassky 12½-8½, ending Soviet rule",
              "It was the very first televised chess match",
              "It ended in a tie, later broken by blitz",
              "Fischer was the youngest champion in history",
            ],
            correctIndex: 0,
            explanation:
              "One American against the funded Soviet chess machine, with Cold War symbolism no one could miss. Fischer never defended; Karpov took the title in 1975, but chess's pop-culture standing was transformed.",
            sourceLessonSlug: "chess-championship-century",
          },
          {
            prompt: "Which is the CORRECT account of the Kasparov-Deep Blue matches?",
            options: [
              "Kasparov won 1996 4-2; Deep Blue won the 1997 rematch",
              "Deep Blue simply swept both of the two matches",
              "Kasparov won both; a later machine beat him in 2003",
              "Deep Blue won in 1996; Kasparov took revenge in 1997",
            ],
            correctIndex: 0,
            explanation:
              "Two matches, split. Deep Blue's Game-1 win in 1996 was the first classical win by a computer over a reigning champion, but Kasparov took that match; the machine won the rematch a year later.",
            sourceLessonSlug: "chess-man-vs-machine",
          },
          {
            prompt: "Why was the 1997 rematch a genuine historical milestone?",
            options: [
              "The first match defeat of a reigning champion by a machine",
              "It proved machines finally understood chess like humans",
              "It was the first single game a computer won versus a champion",
              "It effectively ended all competitive human chess for good",
            ],
            correctIndex: 0,
            explanation:
              "The single-game first had already happened (Game 1, 1996). 1997 was the first MATCH defeat, after which engines soon exceeded all humans, and chess reorganized around them rather than dying.",
            sourceLessonSlug: "chess-man-vs-machine",
          },
          {
            prompt: "What separated AlphaZero (2017) from Deep Blue and the traditional engines?",
            options: [
              "It learned from self-play alone, given only the bare rules",
              "It was the very first computer to beat a world champion",
              "It searched more positions per second than any machine ever",
              "It was designed and quietly built entirely by IBM Research",
            ],
            correctIndex: 0,
            explanation:
              "DeepMind's December 2017 result (peer-reviewed in Science, 2018) showed a machine discovering chess knowledge from scratch, and today's engines absorbed its neural-network approach.",
            sourceLessonSlug: "chess-man-vs-machine",
          },
          {
            prompt: "By Netflix's own announcement, what did The Queen's Gambit do in its first 28 days (from 23 October 2020)?",
            options: [
              "62 million households, its top scripted limited series",
              "Only 10 million households watched it in 28 days",
              "It won the World Chess Championship broadcast rights",
              "Some 200 million households watched in 28 days",
            ],
            correctIndex: 0,
            explanation:
              "Netflix (Nov. 23, 2020) published the figure, along with a fivefold increase in new Chess.com players, doubled chess searches, +250% eBay chess-set inquiries, and the 1983 novel hitting the NYT bestseller list 37 years late.",
            sourceLessonSlug: "chess-online-boom",
          },
          {
            prompt: "Why did the 2020 boom retain players when the 1972 Fischer boom faded?",
            options: [
              "A viewer could play rated games on a phone at once",
              "The Queen's Gambit simply ran for more seasons",
              "FIDE had lowered its membership fees worldwide",
              "Chess officially became an Olympic sport in 2021",
            ],
            correctIndex: 0,
            explanation:
              "1972's fans had nowhere immediate to play; 2020's landed on ready infrastructure. Same spark, different kindling, and the resulting ecosystem is the one Sections 5 and 6 map.",
            sourceLessonSlug: "chess-online-boom",
          },
        ],
      },
    },

    // ─────────────────────────── SECTION 5 · ORGANIZED CHESS ───────────────────────────
    {
      slug: "chess-how-organized-chess-works",
      title: "24 · The pyramid: FIDE, national federations, and the Olympiad",
      section: "Section 5 · Organized chess: ratings, titles, and where you fit",
      body: `Suppose you get good. Where does "good" go? This section maps the machine that turns casual players into rated players, rated players into titled players, and national teams into a world championship, because unlike most of what you'll do in high school, chess has a single pyramid that runs from your first club night to the world title, and you can locate yourself on it precisely.

**The apex: FIDE.** You met the federation in Lesson 7 as the rulebook's author; here's the rest of the job. Founded in Paris in 1924 under the motto *Gens una sumus* ("we are one family"), FIDE today counts **204 national federations** as members and has been recognized by the International Olympic Committee since 1999 (FIDE, n.d.-a). It runs the **world championship cycles**, the open title you followed through Section 4, plus women's, junior, and senior world championships and the World Rapid & Blitz, maintains the **international rating list** (next lesson), and awards the **titles** that Lesson 26 explains (Lesson 7's arbiters get their titles from FIDE too).

**The middle: your national federation.** Every FIDE member country has one governing body. In the United States it's **US Chess** (the United States Chess Federation), founded in **1939** from the merger of two rival national organizations; it administers the national rating system, sanctions national championships, over twenty of them annually, many scholastic, and represents American chess inside FIDE (US Chess, n.d.). Almost every serious American player's first rated game is a US Chess-rated game, not a FIDE-rated one; internationally rated events are a layer you reach later.

**The base: clubs and schools.** Below the federations sits the layer you can join this week: school chess clubs, community clubs, library programs, and weekend tournaments. This is not a minor-league footnote, it's where nearly all of organized chess actually happens, and Lesson 27 is a practical guide to entering it.

**The Olympiad: nations, four boards at a time.** Chess's flagship team event predates almost everything else on the calendar: FIDE organized the **first official Chess Olympiad in London in 1927**, with sixteen national teams contesting the gold-plated **Hamilton-Russell Cup**, Hungary took the first one (FIDE Museum, n.d.). Held roughly every two years since (regularly biennial after 1950), the modern Olympiad brings well over a hundred nations' teams, an open section and a women's section, to one hall for eleven rounds of four-board team matches. It is the closest thing chess has to a World Cup, and its scale is the best single exhibit for the claim stitched into FIDE's motto: everyone in this game, from your club to the medal stand, is playing inside one connected system.

And one more 1927 landmark belongs in this map: the same London gathering hosted the **first Women's World Championship**, won by Vera Menchik (FIDE Museum, n.d.), the women's title is as old as the Olympiad itself.

:::reveal Trace the full pyramid: a ninth-grader wins her school club championship in Ohio. What are the organizational layers between that game and the World Chess Championship? ||| Club/school events feed US Chess (the national federation, founded 1939), rated weekend tournaments, state and national scholastic championships. US Chess is one of FIDE's 204 member federations, and FIDE runs the international layer: FIDE-rated events, titles, the Olympiad (national teams), and the world championship cycles. One unbroken ladder, every rung is enterable.

## Sources
- Fédération Internationale des Échecs. (n.d.-a). *About FIDE*. https://www.fide.com/about-fide
- FIDE Museum. (n.d.). *The history of FIDE*. https://museum.fide.com/fide-history
- US Chess. (n.d.). *About*. https://new.uschess.org/about`,
      recallContent: [
        {
          prompt: "What five documented effects did Netflix report from The Queen's Gambit's first weeks?",
          answer:
            "62M households in 28 days; Chess.com new players up fivefold; chess searches doubled ('how to play chess' at a nine-year peak); eBay chess-set inquiries +250%; the 1983 novel on the NYT bestseller list 37 years later.",
        },
        {
          prompt: "What does a trustworthy statistic look like, per the boom lesson?",
          answer:
            "It has an owner, a date, and a denominator, like Netflix's '62 million households in the first 28 days.' A number with no year, source, or definition gets treated as folklore.",
        },
      ],
    },
    {
      slug: "chess-elo-explained",
      title: "25 · Elo: the number that follows you around",
      section: "Section 5 · Organized chess: ratings, titles, and where you fit",
      body: `Chess solved a problem most fields still fumble: how do you measure skill objectively, when skill can only be observed through wins and losses against other people whose skill you also don't know? The answer is the **Elo rating system**, designed by **Arpad Elo**, a Hungarian-American physics professor and master-level player. **US Chess implemented his system in 1960; FIDE adopted it in 1970**, publishing its first official international rating list the following year (FIDE, n.d.-b). Versions of it now rank everything from esports players to dating profiles, chess exported the idea to the world.

**The core logic, no heavy math required.** Your rating is a number that moves with your results:

- The rating **gap** between two players predicts an **expected score**. Roughly equal ratings → expect about 50%. A couple hundred points of advantage → expect roughly three wins in four. A vast gap → expect nearly everything.
- After you play, your actual score is compared to the expected score. **Beat expectations, gain points; fall short, lose points.** How many depends on the size of the surprise: beating an equal nudges you up a little, beating someone far above you pays out a lot, and losing to them costs almost nothing, the system already assumed you'd lose.
- A multiplier (the *K-factor*) scales the movement, set higher for new and developing players, youth ratings move fast on purpose, because the system is still learning who you are (and, at your age, because who you are keeps improving).

Two properties make Elo genuinely fair in a way that should raise your standards for every other ranking you meet. It is **self-correcting**: an overrated player leaks points until the number matches reality, an underrated one climbs. And it is **opponent-aware**: nobody farms a high rating by beating beginners, because expected wins pay nearly nothing. The number is hard to fake over any real sample of games, which is exactly why the cheating economics in Section 6 target it.

**Reading the scale.** FIDE ratings for active players run from the floor of 1400 up past 2800 for the handful of best humans alive. Useful landmarks you've already met or soon will: **2200** is the threshold tied to the Candidate Master title, **2300** FIDE Master, **2400** International Master, **2500** Grandmaster (FIDE, 2022), Lesson 26 explains what *else* those titles take. There is no absolute meaning to any single number; the scale is relational, anchored by the pool. Which leads to the misunderstanding that trips up every new player:

**Ratings from different pools don't translate.** Your FIDE rating, your US Chess rating, and your ratings on each online platform are computed inside **separate populations with separate formulas, floors, and starting points**, so the same person routinely carries several ratings hundreds of points apart, and none of them is "wrong." A rating is a coordinate inside one pool, not a universal skill certificate. Compare your blitz rating on one site to a friend's FIDE classical rating and you have said, precisely, nothing.

:::reveal You're rated 1300. Tuesday you lose to a 1900; Thursday you beat a different 1900. Why is the combined effect on your rating strongly positive rather than a wash? ||| Because Elo pays by surprise, not by result. The loss was expected, a 600-point favorite should win, so it costs you a point or two. The win is a large violation of the expected score and pays out heavily. Beat expectations across the two games (one win where ~zero were expected) and the system moves you up: it's evidence 1300 underestimates you.

## Sources
- Fédération Internationale des Échecs. (n.d.-b). *Anniversary of Arpad Elo — rating system that changed chess world*. https://www.fide.com/anniversary-of-arpad-elo-rating-system-that-changed-chess-world/
- Fédération Internationale des Échecs. (2022). *International title regulations* (FIDE Handbook B.01). https://handbook.fide.com/chapter/B012022`,
      recallContent: [
        {
          prompt: "When was the first official Chess Olympiad, and what's the event's modern shape?",
          answer:
            "London, 1927, 16 national teams playing for the Hamilton-Russell Cup (Hungary won). Now roughly biennial, with open and women's sections and well over a hundred national teams playing four-board matches.",
        },
        {
          prompt: "Who founded US Chess and when, and what does it actually run?",
          answer:
            "Formed in 1939 by the merger of two rival national bodies. It administers the U.S. national rating system, sanctions 20+ national championships a year (many scholastic), and represents the U.S. in FIDE.",
        },
      ],
    },
    {
      slug: "chess-titles",
      title: "26 · Grandmaster: what the letters actually take",
      section: "Section 5 · Organized chess: ratings, titles, and where you fit",
      body: `"Grandmaster" may be the most casually misused word in chess journalism, so let's install the real definitions. FIDE awards a ladder of **titles**, earned once, held **for life**, under regulations published in its handbook (FIDE, 2022). They are the game's permanent credentials, recognized identically in every one of FIDE's 204 member countries.

**The open titles** (any player, any gender, may earn them):

| Title | Rating requirement | Plus |
| --- | --- | --- |
| **Grandmaster (GM)** | Reach 2500 | Norms |
| **International Master (IM)** | Reach 2400 | Norms |
| **FIDE Master (FM)** | Reach 2300 |, |
| **Candidate Master (CM)** | Reach 2200 |, |

**So what's a norm?** For GM and IM, the rating alone isn't enough, you must also prove you can produce title-level chess **against title-level fields, repeatedly**. A norm is a tournament performance meeting strict conditions: a high performance rating (for a GM norm, on the order of **2600**, achieved against opposition averaging **2380+**), in events with required mixes of titled players and multiple federations, with norms accumulating across **at least 27 games**, in practice, usually three strong 9-round tournaments (FIDE, 2022). One hot weekend can't make you a grandmaster; the system is engineered so the title certifies a *sustained* level, not a spike. That engineering is why roughly speaking the GM title means the same thing in Lagos, Lima, and London, and why earning one typically consumes years of expensive travel to norm-eligible events. Remember that cost; Section 6 does the math on it.

**The women's titles.** In parallel, FIDE awards **WGM (2300), WIM (2200)**, and further steps, each set 200 points below the corresponding open title (FIDE, 2022). Note the design carefully: these are *additional* titles reserved for women, women earn the open titles by exactly the same standards as everyone else, and the strongest women hold both sets. Whether separate women's titles help participation or undersell women's chess is a live, genuinely contested debate inside the game; this course's job is that you know what the letters mean when you see them.

**Titles you'll actually encounter locally.** National federations award their own (US Chess crowns *national* masters via its own rating system, for instance), remember Lesson 25: different pool, different rules; a national title is not a FIDE title. And arbiters and trainers carry FIDE credentials of their own, the licensed referees from Lesson 7 climb to **International Arbiter**, a fact that matters in Section 6 because it's a *career ladder you can climb without being a 2500 player*.

**How rare is the summit?** Millions play rated chess; the world's population of grandmasters has never exceeded a few thousand *in total, ever awarded*. The precise count shifts monthly with FIDE's lists, so this course won't pretend to one, but the shape is what matters: the GM title sits past the 99.9th percentile of the people who were already serious enough to get rated. In 2024, an 18-year-old, **Gukesh Dommaraju**, became the youngest *world champion* in history, breaking the record Kasparov had held since 1985 (ChessBase, 2020). Prodigies are real. They are also, statistically, not the plan, and the next section is about all the ways into chess that don't require being one.

:::reveal A news story calls a strong local player 'a chess grandmaster' because she dominates city tournaments with a 2210 national rating. Name two distinct reasons the label is wrong, and what she plausibly IS. ||| First, pool: a national rating isn't a FIDE rating (Lesson 25, different population, different formula). Second, requirements: GM demands reaching FIDE 2500 PLUS norms, repeated ~2600-level performances against strong titled, multi-federation fields across at least 27 games (FIDE, 2022). At FIDE 2200 she'd plausibly be a Candidate Master; 'grandmaster' is a specific lifetime credential, not a compliment.

## Sources
- ChessBase. (2020). *35 years ago: Kasparov becomes youngest world champion in the history of chess*. https://en.chessbase.com/post/35-years-ago-kasparov-becomes-youngest-world-champion-in-the-history-of-chess
- Fédération Internationale des Échecs. (2022). *International title regulations* (FIDE Handbook B.01). https://handbook.fide.com/chapter/B012022`,
      recallContent: [
        {
          prompt: "Who designed the chess rating system, and when did the big federations adopt it?",
          answer:
            "Arpad Elo, a Hungarian-American physics professor. US Chess implemented it in 1960; FIDE adopted it in 1970 and published its first international list in 1971.",
        },
        {
          prompt: "Why can't you farm a high Elo rating by beating weaker players?",
          answer:
            "Because Elo pays by surprise: wins you were expected to score move your rating almost nothing, while upsets pay heavily. The system is opponent-aware and self-correcting.",
        },
      ],
    },
    {
      slug: "chess-where-to-play",
      title: "27 · Where you actually play: clubs, tournaments, and the two big platforms",
      section: "Section 5 · Organized chess: ratings, titles, and where you fit",
      body: `Everything so far becomes real the day you play a game that counts. Here's the practical geography of organized chess, from tonight to your first rated tournament.

**Start where the boards already are.** A school chess club, a public library program, a community club: this layer costs little or nothing, and it supplies the two things Lesson 16 said solo study can't, live opponents slightly better than you, and people to review games with. No school club? Starting one is a two-person project: a faculty sponsor, a room, a few sets. (File that thought; Section 6 counts club-founding as entrepreneurship, because it is.)

**Your first rated tournament.** In the U.S., rated play runs through **US Chess**: you join the federation, and any sanctioned event you enter, a Saturday scholastic, a weekend open, reports results into the national rating system, and your number is born (US Chess, n.d.). Most open tournaments use the **Swiss system**: nobody is eliminated, and each round pairs players with the same score against each other, winners meet winners, so by the last round you're facing exactly your level, whatever your level turns out to be. Expect **sections** grouped by rating so novices aren't fed to experts, published **time controls** (Lesson 10 lets you read them now), scoresheets (Lesson 5), and touch-move enforced for real (Lesson 8). A scholastic tournament is one of the friendlier competitive environments in youth sports, but it is a real one, with an arbiter or tournament director applying the actual rules from Section 2.

**The two big online platforms.** Both give unlimited opponents, puzzles, and analysis; know how they differ, because the difference is a business-model lesson:

- **Chess.com** is the largest commercial platform, a company with subscriptions, ads, sponsored events, and hired streamers and writers. Its scale is why the boom statistics from Lesson 22 ran through it (Netflix, 2020).
- **Lichess** is the philosophical counterweight: begun in **2010** by the French programmer **Thibault Duplessis** as a hobby project, it is **free and open-source, carries no ads, sells no data, and runs on donations**, "patrons" who voluntarily fund the servers (Lichess, n.d.). Everything is free for everyone, full stop.

The pair is a live economics exhibit you'll revisit in Section 6: the same product, online chess, sustainably delivered by a venture-scale subscription business *and* by a donation-funded open-source project. Neither model is a charity case; both have run for years at massive scale.

**Practical online defaults for a student:** play rapid (10+ minutes) when you're practicing, not just bullet (Lesson 16); do the daily puzzles; use each site's free analysis on your finished games, self-diagnosis first, remember. And set your expectations about numbers now: your online rating will not match your future US Chess rating, which will not match your future FIDE rating (Lesson 25). All three can be true about the same you.

:::reveal It's round 4 of a Swiss-system tournament. You've lost every game, and your friend has won every game. Whom does each of you face this round, and why do organizers love this design? ||| The Swiss pairs by score: your friend plays another 3-0, and you play another 0-3. Nobody is eliminated, everyone plays every round, and the field self-sorts, by the final round, both of you are facing opponents of exactly your demonstrated level that weekend. Fair games for the whole hall, decisive standings at the top, no one sent home Friday night.

## Sources
- Lichess. (n.d.). *About lichess.org*. https://lichess.org/about
- Netflix. (2020, November 23). *From 'The Queen's Gambit' to a record-setting checkmate*. https://about.netflix.com/en/news/the-queens-gambit-netflix-most-watched-scripted-limited-series
- US Chess. (n.d.). *About*. https://new.uschess.org/about`,
      recallContent: [
        {
          prompt: "GM and IM require more than a rating. What's the extra requirement, in one breath?",
          answer:
            "Norms: repeated title-level tournament performances (for GM, ~2600 performance against ~2380+ average opposition) in events with titled, multi-federation fields, totaling at least 27 games, usually three 9-round events (FIDE Handbook B.01).",
        },
        {
          prompt: "Are FIDE titles temporary rankings?",
          answer:
            "No, titles are earned once and held for life, recognized in all 204 FIDE member federations. Ratings float; the letters don't.",
        },
      ],
    },
    {
      slug: "chess-quiz-organized",
      title: "28 · Quiz: ratings, titles, and the pyramid",
      section: "Section 5 · Organized chess: ratings, titles, and where you fit",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What are the three layers of organized chess, bottom to top?",
            options: [
              "Clubs/schools → national federations → then FIDE",
              "Online platforms → sponsors → the world champion",
              "Cities → states → then the United Nations",
              "Players → streamers → then chess engines",
            ],
            correctIndex: 0,
            explanation:
              "One connected pyramid: local clubs feed nationally rated events run under US Chess (or your country's federation), which is one of FIDE's 204 members; FIDE runs titles, the Olympiad, and the world championship cycles.",
            sourceLessonSlug: "chess-how-organized-chess-works",
          },
          {
            prompt: "What is the Chess Olympiad?",
            options: [
              "FIDE's flagship national-team event since 1927",
              "The Olympic Games' own official chess event",
              "An annual online blitz world championship",
              "The main world championship match itself",
            ],
            correctIndex: 0,
            explanation:
              "Sixteen teams contested the 1927 Hamilton-Russell Cup (Hungary won); today well over a hundred nations send four-board teams. Chess's World Cup, in effect.",
            sourceLessonSlug: "chess-how-organized-chess-works",
          },
          {
            prompt: "How old is the Women's World Championship?",
            options: [
              "As old as the Olympiad, from 1927, won by Vera Menchik",
              "It only began in the early 1990s, quite recently",
              "It began only after The Queen's Gambit aired in 2020",
              "There has never been a separate women's world title",
            ],
            correctIndex: 0,
            explanation:
              "The same 1927 London gathering that hosted the first official Olympiad crowned Menchik the first Women's World Champion.",
            sourceLessonSlug: "chess-how-organized-chess-works",
          },
          {
            prompt: "Who created the chess rating system, and what was his day job?",
            options: [
              "Arpad Elo, a physics professor and strong player",
              "Wilhelm Steinitz, the first world champion",
              "Claude Shannon, the information theorist",
              "Thibault Duplessis, the Lichess programmer",
            ],
            correctIndex: 0,
            explanation:
              "Elo's system was implemented by US Chess in 1960 and adopted by FIDE in 1970 (first international list, 1971). Versions of it now rank esports and more.",
            sourceLessonSlug: "chess-elo-explained",
          },
          {
            prompt: "In Elo, what determines how many points a single game moves your rating?",
            options: [
              "How far your result beats the expected score",
              "Always a flat 10 rating points for each win",
              "The total length of the game in moves",
              "The tournament's total prize fund size",
            ],
            correctIndex: 0,
            explanation:
              "Expected results pay almost nothing; upsets pay heavily. That's what makes the system self-correcting and impossible to farm against weak opposition.",
            sourceLessonSlug: "chess-elo-explained",
          },
          {
            prompt: "Your friend's blitz rating on one website is 1980; your FIDE classical rating is 1610. What do these numbers say about who's stronger?",
            options: [
              "Almost nothing; they're coordinates in separate pools",
              "Your friend is a clear 370 points much stronger",
              "You are stronger, because FIDE ratings run higher",
              "Whoever has played the more games is stronger",
            ],
            correctIndex: 0,
            explanation:
              "Ratings don't translate across pools. The same person routinely holds several ratings hundreds of points apart, none of them 'wrong.'",
            sourceLessonSlug: "chess-elo-explained",
          },
          {
            prompt: "Why do developing young players have a higher K-factor?",
            options: [
              "So their ratings move fast while they improve fast",
              "Purely as a reward for joining chess young",
              "To protect adults from losing points to them",
              "It's really just a typo in the regulations",
            ],
            correctIndex: 0,
            explanation:
              "The K-factor scales rating movement. High K for new/young players makes the number converge on reality faster during the years skill changes fastest.",
            sourceLessonSlug: "chess-elo-explained",
          },
          {
            prompt: "Match the FIDE rating requirement to the title: 2500, 2400, 2300, 2200.",
            options: [
              "GM, IM, FM, CM",
              "CM, FM, IM, GM",
              "GM, FM, IM, CM",
              "IM, GM, CM, FM",
            ],
            correctIndex: 0,
            explanation:
              "Grandmaster 2500, International Master 2400, FIDE Master 2300, Candidate Master 2200 (FIDE Handbook B.01), with GM and IM additionally requiring norms.",
            sourceLessonSlug: "chess-titles",
          },
          {
            prompt: "What is a GM norm?",
            options: [
              "A ~2600 result versus titled players, 27+ games",
              "Any single strong tournament victory at all",
              "A 2500 FIDE rating held for a whole year",
              "A paper certificate simply purchased from FIDE",
            ],
            correctIndex: 0,
            explanation:
              "Norms force the title to certify a sustained level against title-level fields, one hot weekend can't make a grandmaster (FIDE, 2022).",
            sourceLessonSlug: "chess-titles",
          },
          {
            prompt: "How long does a FIDE title last, and where is it recognized?",
            options: [
              "For life, in every one of FIDE's 204 federations",
              "Just one single year, but always renewable",
              "Until your rating drops below the threshold",
              "Only ever within your own home federation",
            ],
            correctIndex: 0,
            explanation:
              "Titles are permanent credentials; ratings float. That's why 'GM' means the same thing in Lagos, Lima, and London.",
            sourceLessonSlug: "chess-titles",
          },
          {
            prompt: "How do the women's titles (WGM, WIM) relate to the open titles?",
            options: [
              "Extra titles set 200 points below the open ones",
              "They simply replace the open titles for women",
              "They require higher ratings than open titles",
              "They quietly expire unless defended each year",
            ],
            correctIndex: 0,
            explanation:
              "WGM = 2300, WIM = 2200 (FIDE Handbook B.01). The strongest women hold both sets; whether separate women's titles help or hurt is a live debate inside chess.",
            sourceLessonSlug: "chess-titles",
          },
          {
            prompt: "What happened in world championship history in 2024?",
            options: [
              "Gukesh, 18, became the youngest champion ever",
              "Kasparov returned and reclaimed the title",
              "The world title was quietly abolished then",
              "A chess computer was allowed to compete",
            ],
            correctIndex: 0,
            explanation:
              "Kasparov's youngest-champion record (age 22, Moscow 1985) stood for 39 years until an 18-year-old broke it in 2024.",
            sourceLessonSlug: "chess-titles",
          },
          {
            prompt: "In a Swiss-system tournament, how are players paired each round?",
            options: [
              "Against opponents on your same current score",
              "Completely at random in every single round",
              "Single elimination, lose and you're out",
              "Strictly by player age group each round",
            ],
            correctIndex: 0,
            explanation:
              "The field self-sorts: by the last round you face your demonstrated level. Everyone plays all rounds; the top decides the standings.",
            sourceLessonSlug: "chess-where-to-play",
          },
          {
            prompt: "How does a U.S. student's game become nationally rated?",
            options: [
              "Join US Chess and play a sanctioned rated event",
              "Just submit a video of the game to FIDE",
              "Just win three casual games at any local club",
              "Just reach a 1500 rating online first of all",
            ],
            correctIndex: 0,
            explanation:
              "Rated play runs through the federation (US Chess, founded 1939): sanctioned events feed the national system. FIDE-rated events are a later, international layer.",
            sourceLessonSlug: "chess-where-to-play",
          },
          {
            prompt: "Chess.com and Lichess deliver a similar product with opposite economics. Which description is accurate?",
            options: [
              "Chess.com is commercial; Lichess is free and open-source",
              "Both big platforms are wholly owned by FIDE directly",
              "Lichess charges subscriptions; Chess.com is a nonprofit",
              "Chess.com is open-source; Lichess sells user data",
            ],
            correctIndex: 0,
            explanation:
              "Two sustainable models for one product, a business-model exhibit Section 6 returns to. Lichess's about page: no ads, no data sales, patrons fund the servers.",
            sourceLessonSlug: "chess-where-to-play",
          },
        ],
      },
    },

    // ─────────────────────────── SECTION 6 · THE HONEST ECONOMY ───────────────────────────
    {
      slug: "chess-honest-math",
      title: "29 · The honest math: almost nobody earns a living playing chess",
      section: "Section 6 · The economy around the board: amateurs and entrepreneurs",
      body: `This section begins with the sentence most chess courses bury: **almost nobody on Earth earns a living playing chess.** Not "it's hard." Not "you have to really want it." Structurally, arithmetically, the job "professional chess player" barely exists, and you deserve the real numbers-shaped truth before anyone sells you the dream. Then, for the rest of the section, the better news: the *economy around the board* is far larger than the playing of it, it grew dramatically after 2020, and most of its doors don't check your rating on the way in.

**Why playing doesn't pay.** Chess prize money is a steep pyramid. At the very top, world championship cycles, elite invitationals, the purses are real. One layer down, the arithmetic turns hostile:

- **Prizes concentrate at first place.** A typical weekend open publishes its prize list in advance: a healthy top prize, thinning fast below it, nothing at all for most of the field. And a Swiss tournament (Lesson 27) guarantees you face your own level, reliably outscoring your section is exactly as hard as being systematically better than people rated like you.
- **The costs are per-event and unavoidable:** entry fee, travel, lodging, and days of your time, paid by everyone, recouped by almost no one. Run the expected value the way Lesson 25 taught you to think about expectations, using the tournament's own published prize list, and the number is negative for nearly every entrant. That's not cynicism; it's the flyer doing math.
- **Even the credential chase costs money.** Remember Lesson 26: GM and IM norms require strong international fields across at least 27 games (FIDE, 2022), which in practice means years of travel to norm-eligible events, an expensive project with no salary attached, undertaken in the *hope* of a title that itself guarantees no income.

The population that clears all of this, living primarily on playing income, is, roughly, the world elite plus a thin band of circuit professionals. Everyone else with "chess" on their tax return is earning from the game some *other* way. Many titled players, grandmasters included, make their actual living from coaching, writing, commentary, and content, the playing career is the credential, not the paycheck.

**The reframe that makes this section hopeful.** Look at what the game demonstrably has, per its own documented boom (Netflix, 2020; Bloomberg, 2020): tens of millions of new and returning players who need someone to *teach* them, *organize* their competitions, *arbitrate* their disputes, *build and run* their clubs and platforms, *make* the content they watch, and *defend* the integrity of their games. Every one of those verbs is a job or a business, most existed for centuries before streaming, and none requires a 2500 rating. The players are the market. The rest of this section walks the map: coaching and the scholastic pipeline (Lesson 30), content (31), organizing and arbitration (32), and the newest profession, fair play (33).

:::reveal A weekend open charges a $60 entry and publishes $2,000 in total prizes across 80 expected entrants, with $700 for first. Without any more data, what does the Lesson 25 habit of thinking in expectations tell you about entering "for the money"? ||| The field pays in $4,800 (80 × $60) to chase $2,000, the average entrant recovers well under half an entry fee before travel and lodging, and the winner-heavy prize list means the median entrant recovers $0. Enter for rated games, experience, and the norm ladder if that's your path, but as an income proposition, the flyer itself says no. That arithmetic, repeated across the sport, is why "professional tournament player" barely exists as a job.

## Sources
- Bloomberg. (2020). *Netflix's 'The Queen's Gambit' drives major boom in chess sales, games*. https://www.bloomberg.com/graphics/2020-chess-boom/
- Fédération Internationale des Échecs. (2022). *International title regulations* (FIDE Handbook B.01). https://handbook.fide.com/chapter/B012022
- Netflix. (2020, November 23). *From 'The Queen's Gambit' to a record-setting checkmate*. https://about.netflix.com/en/news/the-queens-gambit-netflix-most-watched-scripted-limited-series`,
      recallContent: [
        {
          prompt: "What's the Swiss system's pairing rule, and what does it guarantee about your opposition?",
          answer:
            "Each round pairs players on the same score, winners meet winners, nobody is eliminated. By design you always end up facing your own demonstrated level.",
        },
        {
          prompt: "Contrast the business models of the two big online platforms.",
          answer:
            "Chess.com: the largest commercial platform, subscriptions, ads, sponsored events. Lichess: free and open-source since 2010, no ads, no data sales, funded by donor 'patrons.' Same product, opposite economics, both sustainable at scale.",
        },
      ],
    },
    {
      slug: "chess-coaching-scholastic",
      title: "30 · Coaching and the scholastic pipeline: chess's biggest real labor market",
      section: "Section 6 · The economy around the board: amateurs and entrepreneurs",
      body: `If you want to see where chess money actually changes hands in America, skip the grandmaster invitational and walk into a school cafeteria on a Saturday morning: hundreds of kids, paid coaches, an organizer who rented the space, a TD running pairings, and parents who wrote checks for lessons, club dues, and entry fees. **Scholastic chess is the load-bearing floor of the U.S. chess economy**, and US Chess's own calendar says so: the federation sanctions over twenty national championships a year, a large share of them scholastic (US Chess, n.d.).

**The coaching market, honestly described.** Chess coaching runs from a college student running a lunchtime club program, through after-school enrichment companies that place coaches in dozens of schools, up to titled players charging premium rates for private lessons online. Three honest facts about it:

- **The credential that matters at the entry level is not a title.** A beginning student needs a coach who is a few hundred points stronger, reliably prepared, and good with children, not a grandmaster. (At the *top* of the market, titles and coaching track records set the price; different market, same game.) This is why coaching is realistically open to strong high school players right now: club assistants, camp counselors, and beginner-group coaches are hired every season, and "I run my school's club and hold a US Chess rating" is a legitimate résumé line at sixteen.
- **Rates vary too much to quote.** By region, format (group vs. private), venue (school program vs. independent), and credential, the spread is enormous, so this course refuses to print "chess coaches make $X," because any such number without a year, place, and definition is folklore (the Lesson 22 standard). What's structural and true: group teaching through schools pays as *employment*; private coaching pays as a *small business*, with everything that implies about finding clients, setting rates, and keeping them.
- **The product is not "making grandmasters."** Nearly all scholastic coaching sells confidence, focus, sportsmanship, problem-solving practice, and a safe competitive outlet. Schools often buy chess partly on claims that it raises academic performance, and here the sourcing habit matters: the research on academic transfer is genuinely mixed, so the honest pitch stays close to what's directly observable (kids concentrating for an hour, losing gracefully, doing voluntary hard thinking) rather than promising math scores. Sell what you can verify; it's better business *and* better epistemics.

**The pipeline as a system.** School club → local scholastic tournaments → state championships → national scholastics. Every arrow in that chain is staffed: someone teaches the club, someone directs the tournament (Lesson 32), someone organizes travel, someone runs the summer camp that keeps skills warm in July. In most towns those someones are part-time, semi-amateur, and perpetually scarce, scarcity that a competent, rules-literate young person (which, five sections in, is you) can walk straight into. The teenager who can teach a knight fork to a room of fourth-graders, keep score disputes calm using actual Article numbers, and show up twice a week is not waiting for the chess economy to make room. The room is already empty and waiting.

:::reveal A parent asks a 16-year-old club captain: "You're not a master, why should you coach my beginner kid?" What's the honest, correct answer? ||| Because at the beginner level the effective credential is being reliably stronger than the student, prepared, and good with kids, a master's extra 800 points add nothing to teaching how pieces move, and the scholastic market hires exactly this profile every season for club groups and camps. (At elite levels, titles rightly set the price, different market.) The honest coach also sells only what's observable: focus, sportsmanship, real practice, not promised report-card gains, since research on academic transfer is mixed.

## Sources
- US Chess. (n.d.). *About*. https://new.uschess.org/about`,
      recallContent: [
        {
          prompt: "Why is the expected value of a weekend open's prize pool negative for nearly every entrant?",
          answer:
            "Winner-heavy prize lists mean most of the field recovers nothing, entries plus travel are paid by everyone, and the Swiss guarantees you face your own level, so systematically outscoring your section is exactly as hard as being better than your rating peers.",
        },
        {
          prompt: "For most titled players, what role does playing actually serve economically?",
          answer:
            "The credential, not the paycheck, many GMs and IMs earn their living from coaching, writing, commentary, and content, with results and titles serving as the storefront.",
        },
      ],
    },
    {
      slug: "chess-content-streaming",
      title: "31 · Content: streaming, video, and writing about a 1,500-year-old game",
      section: "Section 6 · The economy around the board: amateurs and entrepreneurs",
      body: `The strangest labor-market fact in modern chess: in the 2020s, some of the game's best-known and best-paid figures are *media businesses*, streamers, video creators, commentators, writers, and the correlation between their income and their Elo is loose at best. This lesson is about why that's true, and how to think about content as a chess business without swallowing the influencer fantasy whole.

**Why chess content works as entertainment.** The 2020 boom (Lesson 22) didn't just add players; it added an *audience*, the documented wave of tens of millions of curious newcomers (Netflix, 2020) who wanted chess explained, performed, and made funny. Live games with running commentary, recap videos of famous matches, celebrity-amateur showcases (Chess.com's *PogChamps* events made "watching beginners learn chess" a headline genre), opening explainers, cheating-drama coverage: the game turned out to be superb raw material for internet video, endless content, zero licensing fees, a fifteen-century back catalog (Bloomberg, 2020).

**The decoupling of Elo and audience.** A 2700 grandmaster and a 1400 club player can both build real audiences, because the products differ. The GM sells *insight and spectacle*: watching mastery in real time. The club player sells *companionship and relatability*: learning in public, one blunder at a time, which a beginner audience often finds more useful than perfection. Teaching, storytelling, humor, consistency, and production quality are the actual inputs; the rating mostly picks which lane you're in. Several of the most-watched chess creators on Earth are not grandmasters, and several grandmasters stream to empty rooms.

**The honest economics of the creator lane.** The same structural honesty as Lesson 29, because the shape is identical:

- **It's a power-law market.** A handful of top channels capture most of the audience; the long tail earns pocket money or nothing. Platform payouts, sponsorships, and subscriptions follow attention, and attention is winner-take-most.
- **It's a *business*, not a lottery ticket.** The creators who last treat it like one: consistent schedule, a defined niche (chess for absolute beginners; endgames only; chess history; opening traps), multiple small revenue streams (platform revenue, memberships, lesson funnels, affiliate gear), and years of unpaid or underpaid reps before any of it compounds.
- **The barrier to entry is genuinely low, which cuts both ways.** A phone, free platform accounts (Lesson 27), and a Lichess board can start a channel this weekend. So can everyone else's. Low barriers make starting easy and standing out hard; the moat is showing up for year two.

**The practical version for a student:** content is the rare chess business you can pilot at zero cost and small scale, a school-club recap channel, puzzle explainers for your district's scholastic scene, tournament vlogs. Worst case, you've built editing, speaking, and audience skills that transfer to literally everything. Best case, the niche grows with you. Either way you'll have learned the discipline this whole course keeps teaching: **show your sources, count honestly, and don't quote numbers nobody published**, which applies to view-count daydreams exactly as it did to prize funds.

:::reveal A 1500-rated junior and an IM both want to start chess channels. Why isn't the IM's 1,000-point advantage decisive, and what IS each one's natural product? ||| Because audience buys teaching, personality, consistency, and production, not rating certificates. The IM's lane is insight and spectacle (mastery performed live); the junior's lane is relatable learning-in-public, which beginner audiences often find more instructive than perfection. Elo picks the lane; execution decides the outcome, and in a power-law market, most channels in both lanes stay small, so treat it as a low-cost skills bet, not a income plan.

## Sources
- Bloomberg. (2020). *Netflix's 'The Queen's Gambit' drives major boom in chess sales, games*. https://www.bloomberg.com/graphics/2020-chess-boom/
- Netflix. (2020, November 23). *From 'The Queen's Gambit' to a record-setting checkmate*. https://about.netflix.com/en/news/the-queens-gambit-netflix-most-watched-scripted-limited-series`,
      recallContent: [
        {
          prompt: "What's the load-bearing floor of the U.S. chess economy, and what's the evidence?",
          answer:
            "Scholastic chess, US Chess sanctions 20+ national championships a year, many scholastic, and the local layer (school programs, camps, lessons, weekend scholastics) is where most chess money actually changes hands.",
        },
        {
          prompt: "Why does this course refuse to print an average chess-coaching rate?",
          answer:
            "Because rates vary enormously by region, format, venue, and credential, any single number without a year, place, and definition is folklore by the Lesson 22 standard.",
        },
      ],
    },
    {
      slug: "chess-organizing-arbiters",
      title: "32 · Running the game: directors, arbiters, organizers, and club builders",
      section: "Section 6 · The economy around the board: amateurs and entrepreneurs",
      body: `Every rated game you'll ever play happens because somebody did unglamorous work first: booked a room, published a flyer, took entries, built pairings, enforced Article 4.3 calmly at board twelve, and mailed the rating report afterward. That somebody has a set of job titles, a credential ladder, and (this is the part nobody tells students) chronically thin ranks that a rules-literate young person can join early.

**The tournament director / arbiter track.** Running the competition is a skilled role with formal certification on both tiers of Lesson 24's pyramid. Domestically, US Chess certifies **tournament directors (TDs)** in ascending levels, the entry level is built on knowing the rules and procedures, not on your playing strength, and directors advance by accumulating experience at larger events (US Chess, n.d.). Internationally, FIDE licenses **arbiters**, rising to the **International Arbiter** title, with its Arbiters' Commission publishing the manual that trains them (FIDE Arbiters' Commission, 2025). Notice what this ladder prices: *rules knowledge, judgment under pressure, and administrative reliability*. Your rating is irrelevant. A Section-2-literate student who can distinguish a 9.2 claim from a 9.6.1 automatic draw, apply the 7.5.5 illegal-move schedule without drama, and keep a hall of eight-year-olds and their parents calm is most of the way to the entry credential already, and TDs, unlike most people at a chess tournament, are *paid to be there*.

**The organizer: chess's small-business owner.** Distinct from directing the games is *producing the event*: renting the venue, setting the entry fee and prize structure, insurance, equipment, marketing, staffing, refunds when a snowstorm hits. It's a spreadsheet business with real risk, commit to a guaranteed prize fund and a short field, and the organizer personally eats the difference, and real, repeatable reward for whoever does it competently in an underserved area. The same skills scale down beautifully: founding a school or community club (a room, sets, a schedule, dues or a sponsor) is the zero-capital version, and running its ladder tournament is the training wheels for running an open.

**The rest of the room.** Look around a big scholastic and count the economy: coaches warming up teams (Lesson 30), a vendor table selling sets, boards, clocks, and books; camp flyers on every surface; a streamer covering the top boards (Lesson 31). Equipment retail, club supply, chess summer camps, private academies, each is a small business orbiting the same weekend. None of it needs you to beat anyone at chess. All of it needs you to be organized, honest, and there.

**Why this lesson sits in a strategy course.** Because the skills transfer both ways. Organizing forces exactly what Sections 2 and 3 train, procedures, contingency thinking, calm decisions with people watching, and the reverse is true too: the player who understands *why* the fifty-move rule exists makes a better TD than the one who memorized it. In chess's economy, deep rules literacy is a monetizable asset all by itself. You now have it.

:::reveal An organizer guarantees $1,500 in prizes, rents a hall for $400, pays a TD $200, and charges $45 entry. How many entrants just to break even, and what's the lesson about guaranteed prize funds? ||| $2,100 in committed costs ÷ $45 = 47 entrants to break even; fewer, and the organizer personally pays the gap, since the prizes were GUARANTEED. That's the organizer's core risk decision: guaranteed funds attract entries but transfer all shortfall risk to you; 'based on entries' prize funds shift it back to the players. Reading that trade-off is the whole business in one line of the flyer.

## Sources
- FIDE Arbiters' Commission. (2025). *Arbiters' manual 2025*. https://arbiters.fide.com/wp-content/uploads/Publications/Manual/Arbiters_Manual_2025.pdf
- US Chess. (n.d.). *About*. https://new.uschess.org/about`,
      recallContent: [
        {
          prompt: "In the creator lane, what does Elo actually determine, and what decides success?",
          answer:
            "Elo mostly picks your lane (mastery-spectacle vs. learning-in-public); teaching, personality, consistency, and production decide outcomes, in a power-law market where most channels stay small.",
        },
        {
          prompt: "Why is chess content the rare chess business a student can pilot at zero cost?",
          answer:
            "A phone plus free platform accounts starts a channel; worst case you've built editing, speaking, and audience skills that transfer everywhere. Low barriers cut both ways, the moat is consistency into year two.",
        },
      ],
    },
    {
      slug: "chess-fair-play",
      title: "33 · Fair play: the cheating problem, honestly, and the careers it created",
      section: "Section 6 · The economy around the board: amateurs and entrepreneurs",
      body: `Every era of chess got the integrity problem its technology deserved. Yours is this: **any phone now carries an engine stronger than any human champion** (Lesson 21), and most chess is played online, where nobody can see your hands. The result is the defining governance issue of modern chess, and, true to this section's theme, a brand-new profession.

**The over-the-board defense** you already know from Lesson 10: Article 11.3.2's ban on unapproved electronic devices in the playing venue, enforceable up to loss of game (FIDE, 2023), plus arbiters, and at elite events, screening and broadcast delays. Crude, physical, largely effective.

**The online defense is statistical.** Platforms can't search pockets, so they search *patterns*: agreement rates between a player's moves and engine choices, accuracy far above rating-appropriate levels, suspicious timing, sudden performance discontinuities, evaluated across many games, the same logic that makes Elo hard to fake (Lesson 25) making cheating hard to hide. Detection teams, analysts, statisticians, engineers, are now permanent staff at the major platforms. **"Fair-play analyst" is a chess career that did not exist when your parents were in high school**, and it sits at the intersection of chess literacy, statistics, and software: a very buildable skill stack for a student reading this.

**The case that showed the whole system working itself out in public.** In September 2022, at the Sinquefield Cup in St. Louis, the 19-year-old American grandmaster **Hans Niemann** defeated world champion **Magnus Carlsen**, who withdrew from the tournament the next day and later made plain he suspected Niemann of cheating. In October 2022, **Chess.com published a report concluding Niemann had likely cheated in more than 100 online games**, including some with prize money, **while finding no determinative evidence of cheating in the over-the-board Sinquefield game itself**; FIDE's investigation likewise found no evidence of over-the-board cheating in that event (CNN, 2023; FIDE, 2023b). Niemann sued Carlsen, Chess.com, and others for $100 million; a federal court **dismissed the suit in June 2023**, and the parties announced a resolution that August, with Niemann returning to the platform (CNN, 2023). FIDE's disciplinary process, for its part, sanctioned Carlsen over the manner of his withdrawal-and-implication while clearing Niemann on the over-the-board allegations (FIDE, 2023b).

Sit with how much that one story teaches. **Past online cheating was real and provable at scale**, the statistical methods worked. **The specific over-the-board accusation was never substantiated**, suspicion, even a world champion's, is not evidence. **Institutions, not vibes, resolved it**: a platform's published methodology, a federation's investigation and ethics process, and a courtroom. And **both directions carried consequences**, for cheating, and for accusing without proof. That's the entire fair-play problem in miniature: the game's currency is trust, and everyone in Section 6's economy, coach, creator, organizer, arbiter, platform, is ultimately in the trust business.

**Which is the note this course ends on.** You've learned the game, the rulebook that structures it, the thinking it trains, the fifteen centuries behind it, the pyramid organizing it, and the economy around it. The through-line was always the same discipline: *claims need sources, numbers need owners, and integrity is what makes the whole system worth playing in.* That habit will out-earn any opening you ever memorize, on the board and everywhere else.

:::reveal "Chess.com's 2022 report proved Niemann cheated against Carlsen." What are the two precise corrections, and why do they matter? ||| The report concluded he LIKELY cheated in 100+ ONLINE games, but found NO determinative evidence in the over-the-board Sinquefield game the accusation was actually about (and FIDE's investigation found none either). Precision matters because the two claims have opposite implications: one shows statistical detection working at scale; the other shows an unsubstantiated accusation, and the aftermath (dismissed $100M suit, an August 2023 resolution, FIDE sanctioning the accuser's conduct while clearing the accused OTB) is the system pricing both.

## Sources
- CNN. (2023, June 28). *Judge dismisses chess grandmaster's $100 million lawsuit against Magnus Carlsen, among others, in cheating scandal*. https://www.cnn.com/2023/06/28/sport/judge-dismisses-niemann-lawsuit-carlsen-chess-spt-intl
- Fédération Internationale des Échecs. (2023). *FIDE laws of chess taking effect from 1 January 2023* (FIDE Handbook E.01). https://handbook.fide.com/chapter/E012023
- Fédération Internationale des Échecs. (2023b). *Decision on the Magnus Carlsen / Hans Niemann case*. https://www.fide.com/decision-on-the-magnus-carlsen-hans-niemann-case/`,
      recallContent: [
        {
          prompt: "What does the TD/arbiter credential ladder price, and what does it ignore?",
          answer:
            "It prices rules knowledge, judgment under pressure, and administrative reliability (US Chess TD levels domestically; FIDE arbiter licensing up to International Arbiter). It ignores your playing rating entirely, and directors are paid to be there.",
        },
        {
          prompt: "Guaranteed vs. based-on-entries prize funds, who holds the risk in each?",
          answer:
            "Guaranteed: the organizer eats any shortfall if the field is small (that's why the break-even entrant count is THE number on the spreadsheet). Based-on-entries: the risk shifts to players, whose prizes shrink with the field.",
        },
      ],
    },
    {
      slug: "chess-quiz-economy",
      title: "34 · Quiz: the economy around the board",
      section: "Section 6 · The economy around the board: amateurs and entrepreneurs",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is this course's honest headline about professional chess playing?",
            options: [
              "Almost nobody earns a living just from playing games",
              "Any titled master can live on tournament prizes",
              "Prize money is evenly distributed through the field",
              "Online blitz prizes sustain most professionals",
            ],
            correctIndex: 0,
            explanation:
              "Winner-heavy prize pyramids, per-event costs paid by everyone, and the Swiss system's level matchmaking make playing income structurally scarce. Most 'chess professionals' earn from teaching, content, organizing, not playing.",
            sourceLessonSlug: "chess-honest-math",
          },
          {
            prompt: "Why does the norm system (Lesson 26) matter to the ECONOMICS of a playing career?",
            options: [
              "Norms need years of costly travel and 27+ titled games",
              "Norms pay a monthly stipend directly from FIDE",
              "Norms directly replace all tournament entry fees",
              "Norms guarantee a paid corporate sponsorship deal",
            ],
            correctIndex: 0,
            explanation:
              "The credential chase itself costs serious money and years, and the resulting title guarantees no income, the credential is a storefront, not a paycheck.",
            sourceLessonSlug: "chess-honest-math",
          },
          {
            prompt: "An 80-player open charges $60 entries and pays $2,000 total prizes. What's the field's collective arithmetic?",
            options: [
              "The field pays $4,800 to chase just $2,000 in prizes",
              "The whole field roughly breaks even on the money",
              "The whole field profits if everyone plays well",
              "Prize money usually exceeds entries at most opens",
            ],
            correctIndex: 0,
            explanation:
              "Run the expected value from the flyer's own numbers before entering 'for the money.' Enter for rated games and experience, the math says the income story isn't there.",
            sourceLessonSlug: "chess-honest-math",
          },
          {
            prompt: "What is the load-bearing floor of the U.S. chess economy?",
            options: [
              "Scholastic chess: school programs, camps, lessons",
              "Elite closed invitational tournaments only",
              "The entire chess book publishing industry",
              "Big casino, hotel, and resort chess rooms",
            ],
            correctIndex: 0,
            explanation:
              "US Chess sanctions 20+ national championships annually, many scholastic, and the local layer beneath them is where most chess money actually changes hands.",
            sourceLessonSlug: "chess-coaching-scholastic",
          },
          {
            prompt: "What's the effective credential for entry-level scholastic coaching?",
            options: [
              "Being reliably stronger than the kids, and prepared",
              "A full grandmaster title, and nothing at all less",
              "A verified FIDE rating of well over 2200 points",
              "A full four-year college degree in education",
            ],
            correctIndex: 0,
            explanation:
              "Beginner groups don't consume a master's extra 800 points. That's precisely why coaching is realistically open to strong high schoolers, club assistants and camp coaches are hired every season.",
            sourceLessonSlug: "chess-coaching-scholastic",
          },
          {
            prompt: "Why won't this course print 'chess coaches make $X per hour'?",
            options: [
              "Because rates vary hugely by region, format, and venue",
              "Because chess coaching is entirely unpaid labor",
              "Because US Chess strictly forbids publishing rates",
              "Because coaching rates are identical everywhere",
            ],
            correctIndex: 0,
            explanation:
              "The Lesson 22 sourcing standard applies to your own economic decisions: numbers need owners, dates, and denominators, or they get cut.",
            sourceLessonSlug: "chess-coaching-scholastic",
          },
          {
            prompt: "When schools ask whether chess raises academic performance, what's the honest position?",
            options: [
              "The research on academic transfer is genuinely mixed",
              "Studies uniformly prove large test-score gains",
              "Chess has clearly been shown to harm academics",
              "Honestly, no school has ever once asked this",
            ],
            correctIndex: 0,
            explanation:
              "Sell what you can verify. It's better business and better epistemics, the course's sourcing discipline applied to your own marketing.",
            sourceLessonSlug: "chess-coaching-scholastic",
          },
          {
            prompt: "Why can a 1400-rated creator out-earn a grandmaster online?",
            options: [
              "Audiences buy teaching and production, not raw Elo",
              "Platforms secretly cap grandmaster earnings",
              "Player ratings are simply hidden while online",
              "They simply can't; income tracks Elo exactly",
            ],
            correctIndex: 0,
            explanation:
              "Several of the most-watched chess creators aren't GMs; several GMs stream to empty rooms. The inputs are execution and personality; the market is power-law either way.",
            sourceLessonSlug: "chess-content-streaming",
          },
          {
            prompt: "What's the realistic framing of starting a chess channel as a student?",
            options: [
              "A low-cost skills bet, worst case, not an income plan",
              "A reliable path to full-time income within a year",
              "Utterly pointless unless you are already titled",
              "Strictly forbidden by all the scholastic rules",
            ],
            correctIndex: 0,
            explanation:
              "Power-law market, low barriers, moat = consistency into year two. Pilot it at zero cost and let the transferable skills be the guaranteed return.",
            sourceLessonSlug: "chess-content-streaming",
          },
          {
            prompt: "What does the TD/arbiter credential ladder price?",
            options: [
              "Rules knowledge, judgment, and admin reliability",
              "Only your all-time peak playing rating counts",
              "Your total count of tournament victories",
              "The size of your social media following",
            ],
            correctIndex: 0,
            explanation:
              "US Chess certifies TDs in ascending levels; FIDE licenses arbiters up to International Arbiter. Deep rules literacy, Section 2, is a monetizable asset by itself, and directors are paid to be at the tournament.",
            sourceLessonSlug: "chess-organizing-arbiters",
          },
          {
            prompt: "An organizer guarantees $1,500 in prizes with $600 of venue/staff costs and a $45 entry fee. What's the key risk?",
            options: [
              "Below 47 entrants the organizer eats the shortfall",
              "There is really no risk in guaranteed prizes",
              "Players might demand refunds if they lose",
              "US Chess quietly collects any prize surplus",
            ],
            correctIndex: 0,
            explanation:
              "$2,100 committed ÷ $45 = ~47 to break even. 'Based on entries' prize funds shift that risk to players. Reading this trade-off on a flyer is the organizer's whole business in miniature.",
            sourceLessonSlug: "chess-organizing-arbiters",
          },
          {
            prompt: "Why did 'fair-play analyst' emerge as a chess profession?",
            options: [
              "Pocket engines and online play forced scaled detection",
              "FIDE suddenly required one arbiter for each board",
              "Streaming simply made these analysts newly famous",
              "It hasn't, cheating detection is fully automated",
            ],
            correctIndex: 0,
            explanation:
              "Online platforms can't search pockets, so they search patterns: engine-agreement rates, timing, discontinuities, across many games. Chess literacy + statistics + software is the stack.",
            sourceLessonSlug: "chess-fair-play",
          },
          {
            prompt: "What did Chess.com's October 2022 report on Hans Niemann actually conclude?",
            options: [
              "Likely cheated in 100+ online games, but no OTB proof",
              "He cheated in the Sinquefield Cup game against Carlsen",
              "He had honestly never once cheated anywhere at all",
              "Carlsen himself had actually been the one cheating",
            ],
            correctIndex: 0,
            explanation:
              "Both halves matter: proven-at-scale online detection AND an unsubstantiated over-the-board accusation (FIDE's investigation also found no OTB evidence). Precision about which claim was proven is the lesson.",
            sourceLessonSlug: "chess-fair-play",
          },
          {
            prompt: "How did the Carlsen-Niemann affair resolve institutionally?",
            options: [
              "A court dismissed Niemann's $100M suit in June 2023",
              "Niemann actually won the full $100 million at trial",
              "Carlsen was simply banned from all chess for it",
              "It remains entirely unresolved with no findings",
            ],
            correctIndex: 0,
            explanation:
              "Institutions, not vibes: platform methodology, federation investigation and ethics process, and a courtroom, with consequences priced in both directions (for cheating, and for accusing without proof).",
            sourceLessonSlug: "chess-fair-play",
          },
          {
            prompt: "What is the through-line this course claims connects the rulebook, the history, and the economy?",
            options: [
              "Claims need sources, numbers need owners; trust is all",
              "Memorizing openings is the foundation of success",
              "Only grandmasters matter to the chess economy",
              "Chess is really primarily a spectator business",
            ],
            correctIndex: 0,
            explanation:
              "From verified article numbers to Netflix's owned-and-dated boom figures to the fair-play economy: the discipline of checking claims is the course's real deliverable, on the board and off it.",
            sourceLessonSlug: "chess-fair-play",
          },
        ],
      },
    },
  ],
};
