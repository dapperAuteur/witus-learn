# CREW-04 Megalodon: answers to the open research checks

**As of:** October 21, 2026. Every source below was fetched on that date. Nothing here comes from memory.

**For:** the cloud session that edits `scripts/data/cinema-look-camera-rig-course.ts` and `src/lib/research-checks.ts` in the public repo, and cannot browse.

**Status labels.**
- **VERIFIED:** read in the primary source (the maker, the rule body, the registry) on the date above.
- **REPORTED:** read in a secondary source, a third-party copy of a primary document, or one account. Usable with attribution, not as a general rule.
- **STILL OPEN:** no fetched source settles it. The lesson must leave it out or keep the hedge.

Tags inside answers match the research pack: **[V]** read in a fetched source, **[I]** inferred with the reasoning shown, **[A]** an assumption.

**Reference letters.** New Sony and DJI entries continue the course file's existing letters: the course already has Sony (n.d.-a) (timecode page) and Sony (n.d.-b) (FX3 specifications), so new Sony pages start at (n.d.-c). The DJI manual has its own year (2024) and needs no letter. Re-letter when merging if the file has changed.

**Other `megalodon-` checks.** `src/lib/research-checks.ts` on `origin/main` holds exactly four: `megalodon-trademark`, `megalodon-fx3-hdmi-bit-depth`, `megalodon-gimbal-modes`, `megalodon-sideline-practice`. There are no others. The QR items in lessons 3, 6 and 14, and the cut items (focus breathing, T-stops, Komodo-X weight and price), have no check entry; they are answered in section 5.

---

## 1. `megalodon-trademark`

**Status:** the registry facts are **VERIFIED** (read in the USPTO's own trademark search system and in TSDR status records). Whether the course title may use the word is a legal decision, and that is **STILL OPEN** for the course owner, with counsel if wanted.

**Method, so it can be repeated.** The USPTO's public search site (tmsearch.uspto.gov) is a JavaScript application. Its own search backend answered a direct query for the word mark, live and dead records, on October 21, 2026: `megalodon` returned 31 records, `megalodon*` 32 (the extra one is MEGALODONUT, for food), `megladon*` 7, and `megaladon*` 0 (U.S. Patent and Trademark Office [USPTO], n.d.-a). Three records were then opened in TSDR to confirm status (USPTO, n.d.-b, n.d.-c, n.d.-d). No public mirror was needed.

**Answer in plain words.** No live US registration or application for MEGALODON covers cameras, camera supports or gimbals, or broadcast services. Nothing at all is filed in class 38. Two live class 9 records sit close to the RF side of the course, and one live class 41 record covers entertainment:

| Mark | Reg. no. (serial no.) | Owner | Goods or services | Status | Source |
|---|---|---|---|---|---|
| MEGALODON | 7,764,736 (79413156) | Panorama Antennas Limited, London, UK | Class 9: "Antennas; coaxial cables" | "LIVE/REGISTRATION/Issued and Active"; registered Apr. 22, 2025; Madrid Protocol basis (66(a)), international registration 1830264 | USPTO (n.d.-b) [V] |
| MEGLADON (different spelling) | 2,814,890 (76513525) | Megladon Manufacturing Group, Ltd., Austin, Texas | Class 9: "Signal transmission paths, namely optical cables, optical fibers, optical wave guides, metal cables, and metal wires" | Live; registered Feb. 17, 2004; renewed (status date Dec. 5, 2024) | USPTO (n.d.-d) [V] |
| MEGALODON | 5,173,007 (86981713) | Feld Motor Sports, Inc., Vienna, Virginia | Class 41: "Entertainment services, namely, performing and competing in motor sports events" | Live; registered Mar. 28, 2017; "The registration has been renewed" (status date Jun. 22, 2026) | USPTO (n.d.-c) [V] |

The same owner, Feld Motor Sports, also holds live MEGALODON registrations for T-shirts (class 25, Reg. No. 5,306,714) and toy trucks (class 28, Reg. No. 5,355,800) (USPTO, n.d.-a) [V].

Panorama's own product page names the goods: "Megalodon® 8x 4G/5G Low Profile Antenna" (Panorama Antennas, n.d.) [V]. It is a cellular and Wi-Fi antenna, not a camera or video product.

**Dead records in the relevant classes** (abandoned or cancelled, no current rights from the registration): Defiant Studios, LLC, classes 9 and 41, games (abandoned 2021); Megalodon Studios LLC, classes 9 and 41 (abandoned); LG Electronics, class 9, smartphones (cancelled); Megalodon Sports & Entertainment, LLC, class 41, television programs "involving athletes" (abandoned); Megalodon Pictures, class 41 (abandoned) (USPTO, n.d.-a) [V].

**What the search does not cover** [I]: unregistered (common-law) use and state registrations. The research pack already found a commercial "Megalodon" offer from Gemstone Media, and trade press calls Fox's rig "Megalodon" in quotation marks. Neither shows up in the federal register. A registry search is not a clearance opinion.

**What the course owner must confirm on uspto.gov before release.**
1. Open tmsearch.uspto.gov, search the word mark `megalodon` with live and dead records, and confirm the count and the three live records above.
2. Open TSDR for serial numbers 79413156, 76513525 and 86981713 and confirm each is still live and its goods are as listed.
3. Decide, with counsel if wanted, whether a course title that uses "Megalodon" as the industry nickname for a camera rig conflicts with a class 9 registration for antennas and coaxial cable. The course's own goods are educational services (class 41); the only live class 41 MEGALODON is for motor sports events.
4. Record the decision in the check's answer at /admin/research.

**Lesson fix:** no lesson text changes. The title stays "Megalodon: Cinema-look camera rig" only if the owner clears step 3; otherwise it becomes "Cinema-look camera rig" (the slug already omits the word). Lesson 1 should keep calling "Megalodon" an industry nickname, never a product or brand.

---

## 2. `megalodon-fx3-hdmi-bit-depth` (lesson 8, `recording-power-and-heat`)

**Status:** bit depth **VERIFIED**. Color sampling of the HDMI signal **STILL OPEN** (Sony's help guide does not state it).

**Answer in plain words.** The FX3's HDMI bit depth depends on whether the camera is also recording to its card:

- **Recording to the card at the same time** (`Rec. Media dur HDMI Output` set to `On`): "The color depth for the output movie is based on [Record Setting] under [Movie Settings]" (Sony, n.d.-c) [V]. The Record Setting list includes both 8-bit and 10-bit choices. In XAVC S 4K, for example, 59.94p offers "200M 4:2:2 10bit" and "150M 4:2:0 8bit"; every XAVC HS 4K choice is 10-bit; every XAVC S-I choice is "4:2:2 10bit" (Sony, n.d.-d) [V]. So a camera recording an 8-bit setting sends 8-bit over HDMI [I, from "based on"].
- **HDMI only, no card recording** (`Off(HDMI Only)`): the `4K Output Set.(HDMI Only)` item "Sets the frame rate and color depth of 4K movie output," and every option is 10-bit: "[59.94p 10bit] / [50p 10bit] / [29.97p 10bit] / [25p 10bit] / [23.98p 10bit] / [24.00p 10bit]" (Sony, n.d.-c) [V].
- **RAW over HDMI:** a separate `RAW Output` setting sends RAW "to another RAW-compatible device"; the output size is "4264 x 2408 pixels"; "RAW movies cannot be recorded on the memory card of the camera"; "The gamma is locked to S-Log3 during RAW output" (Sony, n.d.-c, n.d.-e) [V]. This is for external RAW recorders, not a live feed [I].
- **Resolution trap for live work:** with Log shooting on, or a PPLUT picture profile, "the HDMI output resolution becomes 1080" regardless of the Output Resolution setting, unless the camera is in HDMI-only mode or RAW output (Sony, n.d.-c) [V].
- **Clean feed:** in HDMI-only or RAW mode, "[HDMI Info. Display] becomes temporarily set to [Off]" (Sony, n.d.-c) [V].
- **Time code over HDMI:** "When [Time Code Output] is set to [On], images may not be output properly to the TV or recording device. In this case, set [Time Code Output] to [Off]" (Sony, n.d.-c) [V].
- **FX3A:** the FX3A help guide's HDMI page carries the same items and the same "10bit" options (Sony, n.d.-f) [V], and its Movie Settings page has the same mix of 8-bit and 10-bit record settings (Sony, n.d.-g) [V].

**Color sampling (4:2:2 or 4:2:0) over HDMI:** the HDMI pages speak only of "color depth." Sony defines color sampling and bit depth separately on the Movie Settings page ("Color sampling (4:2:2, 4:2:0) is the recording ratio of color information"; "Bit depth represents the gradation of luminance information") (Sony, n.d.-d) [V], but no fetched Sony page says what sampling the HDMI signal carries. Third-party recorder pages that claim 4:2:2 were blocked or not fetched, so nothing is claimed here.

**Lesson fix:** replace "Sony's specifications page does not state the bit depth or the color sampling of the HDMI output" with what Sony's help guide does say: in HDMI-only mode the 4K output is 10-bit; when the camera also records, the output bit depth follows the record setting, so an 8-bit record setting means an 8-bit feed. Keep a shorter hedge for sampling only ("Sony's help guide does not state the color sampling of the HDMI signal; check it on the receiving monitor or converter before promising 4:2:2"), and keep the check open, narrowed to sampling. Optionally add the 1080-in-Log trap to lesson 7 or 8.

---

## 3. `megalodon-gimbal-modes` (lesson 16, `running-a-sideline`)

**Status:** what each mode does is **VERIFIED** (DJI's user manual). Which mode sports operators actually use is **STILL OPEN** (no broadcaster or operator account found).

**Answer in plain words.** The DJI RS 4 and RS 4 Pro share one manual and the same modes: "The gimbal follow modes of DJI RS 4 and DJI RS 4 Pro are the same" (DJI, 2024, p. 33) [V].

| Mode | What DJI says it does | DJI's suggested use | Locator |
|---|---|---|---|
| PF | "Pan follow, where only the pan axis follows the movement of the grip" | "walk-through and arc shots or moving from left to right" | DJI (2024), p. 33 [V] |
| PTF | "Pan and tilt follow, where both the pan and tilt axes follow the movement of the grip" | "moving on a slant" | p. 34 [V] |
| FPV | "Pan, tilt, and roll follow, where all three axes follow the movement of the grip" | "rotating the camera" | p. 34 [V] |
| Custom | "Enables or disables any axis follow as required. Lock mode is enabled when the three axes are disabled. All the three axes will not follow the movement of the grip in lock mode." | "smooth tracking shots and quick reaction shots" | p. 34 [V] |
| 3D Roll 360 | Tilt axis turned 90° up; the joystick spins the pan axis 360° | "rotating shots" | p. 34 [V] |

**Controls that matter on a live sideline** (DJI, 2024, pp. 25 to 31) [V]:
- **Mode switch:** "Toggle to switch gimbal mode from PF, PTF, and FPV" (p. 25).
- **Trigger:** "Press and hold to enter Lock mode. In Lock mode, the gimbal will not respond to the movement of the grip." "Tap twice to re-center the gimbal." "Tap three times to turn the gimbal 180° so that the camera faces you (selfie mode)" (p. 26). The press-and-hold action can be set to Lock or to FPV instead (p. 31).
- **Disable Selfie:** "prevents accidentally entering selfie mode and interrupting recording" (p. 30).
- **Sport Mode:** hold the M button; "the follow speed of the gimbal increases greatly. It is suitable for shooting in scenarios where subjects move suddenly and at fast speeds." Holding M while pressing the trigger twice enters and stays in Sport Mode (p. 25).
- **Follow speed:** "fast, medium, slow, and custom" (p. 29).
- **Deadband:** "Deadband determines how much movement the gimbal tolerates prior to translating the pan, tilt, and roll movement of the camera" (p. 46).
- **Power button:** "Press once: Enter or exit sleep mode. The three axes will automatically lock" (p. 25). On air, a stray press ends the shot [I].

**For sports work:** the only fetched source that ties a mode to fast action is DJI's own Sport Mode sentence above. No network, operator or trade-press account found says which follow mode a sideline specialty operator uses.

**Lesson fix:** lesson 16 can now teach what PF, PTF, FPV, Custom and Lock do, how to recenter, Sport Mode, and the selfie-tap risk, all cited to DJI (2024) with page numbers. It must not say which mode sideline operators use; keep that as a named gap for the qualified reviewer, and narrow this check to "operator practice" rather than deleting it.

---

## 4. `megalodon-sideline-practice` (lesson 16, highest stakes)

**Status:** league rules on where field-level media and cameras may be: **VERIFIED** for the NFL and MLB, **REPORTED** for the NCAA (full rule book read, but on a non-NCAA host) and the NBA (a 2014 press report of a league memo). One WNBA team's 2026 media policy is **VERIFIED** as that team's document. Working backward with a spotter or utility: **REPORTED** (one UK studio risk assessment, one press profile). A sports-specific league or network standard for spotting a handheld operator: **STILL OPEN**.

### 4.1 NFL (VERIFIED)
- Field markings: "The playing field will be rimmed by a solid white border six feet wide along the end lines and sidelines. There will be an additional broken yellow line nine feet four inches farther outside this border along each sideline in the non-bench areas." A "broken white border ... will be marked three feet inside the nine-foot four inch broken yellow border on the sideline, extending to meet the existing yellow broken line six feet behind both end zones and at each television box outside the bench area" (National Football League [NFL], 2026, p. iv, Field Markings note 1) [V]. The bench-area diagram labels the outer zone "MEDIA AND ALL OTHERS" (NFL, 2026, p. v) [V]. The rulebook does not say, in these passages, which line a television camera must stay behind.
- Rule 13, Section 1, Article 4: "The only persons permitted within the solid six-foot white border (1-1-2) while play is in progress on the field are game officials," given "For reasons involving the safety of participating players whose actions may carry them out of bounds, officials' unobstructed coverage of the game, and spectators' sightlines to the field" (NFL, 2026) [V].
- Rule 13, Section 1, Article 6: field level outside the benches is limited to persons accredited "by the home club's public relations office for purposes related to news media coverage, stadium operations, or pregame and halftime entertainment," and "Photographers and other personnel accredited for field-level work must not be permitted in the end zones or any other part of the official playing field while play is in progress" (NFL, 2026) [V].
- Press report, not rule: after a player hit an ESPN camera cart in 2020, "Technically the cart and its operator were where they were supposed to be," behind "a dashed yellow line that broadcasting equipment needs to remain behind"; the player suffered "a Grade 2 AC joint sprain, and a small piece of his collarbone was chipped" (Keeley, 2020) [REPORTED]. Being in the permitted zone does not make a position safe [I].

### 4.2 NCAA football (REPORTED: the NCAA's own 2026 rule book, read in a complete copy hosted by an officials' association)
- Rule 1-2-3-a: limit lines "12 feet outside the sidelines and the end lines," or not less than six feet where the stadium does not permit (National Collegiate Athletic Association [NCAA], 2026, p. FR-19) [REPORTED].
- Rule 1-2-3-b: "No person outside the team area shall be inside the limit lines. ... (Exception: Hand-held cameras under the supervision of the television partners may briefly be between the limit lines and the sideline after the ball is dead and the game clock has been stopped. This exception does not allow cameras to be on the field of play or in the end zone at any time.)" (NCAA, 2026, p. FR-19) [REPORTED].
- Rule 1-2-4-d: "No media personnel, including journalists, radio and television personnel, or their equipment, shall be in the team area or coaching box" (NCAA, 2026, pp. FR-19 to FR-20) [REPORTED].
- Rule 1-4-11-c, Exceptions 5 and 6: after a change of possession or timeout, "one camera is permitted from the television broadcast onto the playing enclosure"; it "must exit the field of play when players enter the huddle or line up in a formation" and "is restricted to the area outside the hash marks." After a touchdown, one broadcast camera may enter the end zone and "must immediately exit ... when the ball is ready for play for the try down" (NCAA, 2026, pp. FR-29 to FR-30) [REPORTED].
- A Scripps News investigation (the page shows no date) reports nearly 90 people knocked off their feet in NFL sideline collisions in one season, "including coaches, team staff, photographers and others," and that one conference widened its limit line "to support safe and efficient movement for broadcast personnel" (Gliha & Freeman, n.d.) [REPORTED].

### 4.3 MLB (VERIFIED)
- Rule 4.07(a): "No person shall be allowed on the playing field during a game except players and coaches in uniform, managers, news photographers authorized by the home team, umpires, officers of the law in uniform and watchmen or other employees of the home Club" (Office of the Commissioner of Baseball, 2026) [V].
- Rule 8.01(e): each umpire may eject "any person whose duties permit his presence on the field, such as ground crew members, ushers, photographers, newsmen, broadcasting crew members, etc." (Office of the Commissioner of Baseball, 2026) [V].
- Rule 6.01(d): "In case of unintentional interference with play by any person herein authorized to be on the playing field ... the ball is alive and in play. If the interference is intentional, the ball shall be dead" (Office of the Commissioner of Baseball, 2026) [V].

### 4.4 Basketball (NBA REPORTED; one WNBA team VERIFIED)
- No league-wide NBA media or camera-position document was found in public. A 2014 report of an NBA memo: "The 'escape lanes' on either side of the stanchions will be increased from three feet to four feet wide," and baseline photographers cut "from 24 to 20" (SI Wire, 2014) [REPORTED, dated].
- Las Vegas Aces, 2026 (WNBA team policy): "General Media photographers and camera operators will resume traditional baseline quadrant procedures and sit up to a minimum of 6 feet from the court. As a reminder, camera operators and photographers are generally prohibited from entering escape lanes during play"; "Rubber lens hoods must be on all lenses for still photographers, broadcasters, and news and entertainment video and film crews" (Las Vegas Aces, 2026, p. 2) [V for that team only].

### 4.5 Working backward, spotters and utilities (REPORTED)
- A UK studio facility's Steadicam risk assessment: "All movement routes should be checked to ensure they are clear from items and debris before shots are undertaken"; "An assistant will watch the operator's back, carry the stand and provide general support and assistance"; "People in the area of operation will be avoided by the operator and 'minded' by the assistant"; "The distance covered by an operator should be limited" (BBC Studioworks, 2023, pp. 2 to 3) [REPORTED: one facility, studio context, not sports].
- A Fox handheld operator profiled in 2019 works "trailed by two 'utilities' who carry his camera wire"; "when Cornelli is looking into his viewfinder, he sometimes can't tell how close the players are"; after one collision he "was diagnosed with a concussion" (Curtis, 2019) [REPORTED: one cabled operator, not an RF gimbal rig].

**What remains unsupported:** no fetched league, network or crew-safety document describes how a utility spots a handheld specialty operator on a sideline, what signals they use, or where an RF gimbal operator should stand during live play. The research pack's line "Utility: spots the operator on the sideline, carries batteries, manages cable, watches for players and officials" is still [I].

**Lesson fix:** lesson 16 can now state the rule-book limits with citations: in the NFL only officials may be inside the six-foot white border while play is live, and accredited field-level personnel may not be on the field or in the end zones during play; under NCAA rules a TV handheld may enter the zone between the limit line and the sideline only briefly, after the ball is dead and the clock stopped, and never the team area; in MLB the umpire can eject broadcast crew. It can quote the two REPORTED accounts as examples (one facility's assistant "will watch the operator's back"; one network operator who cannot judge player distance through the viewfinder), labeled as accounts, not standards. It must keep the QR marker and must not invent a spotting procedure; this check stays open, narrowed to "spotting practice from an experienced operator."

---

## 5. QR lessons and the items the session cut

### 5.1 Rolling and global shutters (lesson 6, `rolling-and-global-shutter`)
**Status:** **VERIFIED** (maker's technical page), with one correction.

- RED's technical page: "With most digital cameras, the shutter is controlled by the sensor itself. Photosites are read row by row in rapid succession" (RED Digital Cinema, n.d.-a) [V].
- Artifacts: "fast-moving subjects can appear angled or sheared, and rapid camera movements are more likely to appear as a wobble. Effects are most pronounced with whip pans, fast subjects, high shutter speeds or run and gun type shots. Strobes can also partially illuminate the frame" (RED Digital Cinema, n.d.-a) [V].
- Which cameras show it most: "Stills cameras with a video mode, compact cameras and digital camcorders all typically exhibit the strongest effect" (RED Digital Cinema, n.d.-a) [V].
- Global shutter: "A global shutter controls incoming light to all photosites simultaneously" and "effectively addresses all of the potential rolling shutter artifacts" (RED Digital Cinema, n.d.-a) [V].
- Trade-offs: "Some global shutter designs can also make sensor photosites less efficient, which can in turn compromise image noise" (RED Digital Cinema, n.d.-a) [V].
- **Correction:** "A common misconception is that a global shutter can fix flickering in artificial light, but neither shutter type fully addresses this problem. Two ways around this type of flickering are to use either continuous lighting, or a safe shutter speed and frame rate combination" (RED Digital Cinema, n.d.-a) [V]. Lesson 6 currently lists "against an LED board" as a rolling-shutter case; RED names strobes, not LED boards, and says flicker under artificial light is not cured by either shutter type.
- The FX3 has no global-shutter claim in Sony's specifications (still the case, re-read) (Sony, n.d.-b) [V]; with RED's statement that most digital sensors read row by row, treating it as rolling shutter stays a reasoned inference [I].

**Lesson fix:** cite RED Digital Cinema (n.d.-a) for the definitions, the "whip pans, fast subjects ... run and gun" list, and the noise trade-off. Change "or against an LED board" to "or under strobes," and add one sentence that a global shutter does not cure flicker from artificial light (a safe shutter speed and frame rate does). The source gap behind lesson 6's QR marker is closed; whether the marker comes off is the course's own rule to apply.

### 5.2 The gimbal balancing routine (lesson 14, `payload-and-balance`)
**Status:** **VERIFIED** for the order and checks, from DJI's manual. Two steps stay field practice [I].

- Before balancing: "make sure to power on the camera if using an optical zoom lens and to select the focal length if using a varifocal lens," and "Make sure DJI RS 4 / DJI RS 4 Pro is powered off or in sleep mode before balancing" (DJI, 2024, p. 14) [V].
- Order: "Balance the vertical tilt, the depth for the tilt axis, the roll axis and the pan axis in sequence" (p. 14). Tests: vertical tilt is balanced "when the camera is steady while pointing upward" (p. 14); tilt depth "when the camera is steady while tilted up or down by 45°" (p. 15); roll "when the camera is steady horizontally" (p. 16); pan "when the camera is steady when rotating the pan while tilting the grip" (p. 17) [V].
- Why: "An unbalanced gimbal may affect the stability of videos and reduce the battery life. Severe imbalance may cause the device to overheat and go into hibernation" (p. 14) [V].
- Then motors: "Auto tune provides the proper stiffness for the motor according to the payload"; "Place the gimbal on a steady flat surface. DO NOT move the gimbal during automatic calibration" (p. 24). "After balancing the gimbal, if changing the focal length, changing the lens or the camera causes the balance status icon to turn red, or if the gimbal shakes for no reason, it is recommended to perform automatic calibration"; "increase the stiffness if the gimbal is not stable enough and ... lower the stiffness if the gimbal starts to shake" (p. 28) [V].
- Checking: "To check the balance status of the gimbal, tilt the gimbal 15° left or right and check the status bar" (green or gray balanced, yellow slightly off, red critical) (p. 28); in the Ronin app, "If the gimbal is properly balanced, the power value of the motors should be in the range of ±5" (p. 45) [V].
- Clearance: tilt endpoints can be set because "Some longer lenses may hit the gimbal frame" (p. 47) [V].
- Payload: "Make sure the combined weight of the camera, lens, and other accessories are within the load capacity" (p. 10) [V].
- **Still field practice [I]:** "attach every cable before balancing" and "use short, flexible cables with a slack loop." The DJI manual has no cable-routing guidance.

**Lesson fix:** replace "These steps follow from what balance is" with DJI's sequence and checks, cited to DJI (2024) with pages: lens at working focal length, gimbal off or asleep, tilt then tilt depth then roll then pan, then Auto Tune on a flat surface, then the 15° status check. Keep the two cable steps, labeled as field practice. The QR reason "no maker's source" no longer applies to the routine itself.

### 5.3 The depth-of-field method (lesson 3, `depth-of-field-and-sensor-size`)
**Status:** **VERIFIED.** The circle of confusion values and the formula are now sourced, and the table recomputes.

- Zeiss's technical paper calls 0.03 mm "the usual" circle of confusion for 35 mm format (24 x 36 mm), and its worked tables use "z= 0.029 mm D/1500," that is, one fifteen-hundredth of the format diagonal (Nasse, 2010, pp. 7 to 8) [V].
- "The acceptable diameter of the circle of confusion is therefore not a characteristic of the lens but rather the sensor format" (Nasse, 2010, p. 9) [V].
- Same framing, smaller sensor: "reducing the size of the sensor format increases the depth of field, and enlarging the sensor format reduces the depth of field, as long as we always use the same aperture setting" (Nasse, 2010, p. 9) [V].
- Formula: Zeiss gives the hyperfocal distance as approximately focal length squared divided by (f-number times circle of confusion), and the focus distance as the harmonic mean of the near and far limits (Nasse, 2010, pp. 12 to 15) [V]. Near and far limits follow from those two relations [I].
- The sensor diagonals give the course's two values [I, arithmetic on Sony specs]: FX3 35.6 x 23.8 mm (Sony, n.d.-b), diagonal 42.8 mm, D/1500 = 0.029 mm, so 0.03 mm; FX30 "APS-C size (23.3 mm × 15.5 mm)" (Sony, n.d.-h), diagonal 28.0 mm, D/1500 = 0.019 mm, so 0.02 mm. The crop factor 42.8 / 28.0 = 1.53 turns 50mm into 32.7mm, so "33mm for the same framing" holds.
- Recomputed with the standard thin-lens formula at 3 m [I, arithmetic]: 50mm full frame f/1.2: 255 mm; f/2.0: 427 mm; f/2.8: 601 mm; f/4.0: 867 mm; 33mm Super 35 f/2.8 (0.02 mm): 937 mm. Every row of the lesson's table matches.
- Note: Sony's spec page calls the FX30's sensor "APS-C size"; the course's "Super 35" label comes from the Focus Camera page already cited.

**Lesson fix:** cite Nasse (2010) for "0.03 mm is the usual circle of confusion for full frame, about one fifteen-hundredth of the sensor diagonal," and Sony (n.d.-h) for the FX30's sensor size, so 0.02 mm is shown as the same rule applied to the smaller sensor. Keep the word "assumption" (Zeiss also notes the highest sharpness needs a stricter value), but the numbers are no longer unsourced.

### 5.4 Items the session cut

**Focus breathing. VERIFIED.** Sony's FX3 help guide names it and offers a fix: `Breathing Comp.` "Sets whether to automatically compensate for the phenomenon in which the angle of view changes according to the focusing distance during movie recording," available "when the camera's system software (firmware) is Ver.3.00 or later." Notes: "This function is only available when using an automatic compensation compliant lens"; "When [Breathing Comp.] is set to [On], the angle of view and the image quality change slightly"; "Depending on the lens, changes in the angle of view may not be fully compensated for" (Sony, n.d.-i) [V]. Sony's lens-compatibility list could not be read (server error), so no claim about which lenses support it.
**Lesson fix:** lesson 9 or 10 can define breathing in Sony's words (the frame changes size as focus moves), say the FX3 can compensate from firmware 3.00 with a compliant lens at a slight cost in angle of view and image quality, and tell learners to check their lens on Sony's compatibility list. Why it matters live (a visible "zoom" on every autofocus pull) stays [I].

**T-stops versus f-stops. VERIFIED.** DXOMARK, a lens-testing lab: "a portion of the light is lost in the optical system due to residual reflection and absorption"; the T-stop is "the f-number of a lens with 100% perfect transmission, and resulting in the same illumination of the sensor at the image center as the lens to be measured" (DXOMARK, n.d.) [V]. Sigma's cine page: "The T-stop display, which is standard in cine lenses, contributes to high-precision exposures," and the cine line uses "the same optical system" as its still lenses (Sigma, n.d.) [V]. Depth of field follows the f-number, because Zeiss's formulas use the entrance pupil, "the focal length divided by the f-number" (Nasse, 2010, p. 12) [V]; so a T-stop sets exposure, not depth of field [I].
**Lesson fix:** lesson 9 or 11 can explain that a T-stop is the f-number corrected for light lost in the glass, used on cine lenses so exposure matches lens to lens, and that the depth-of-field figures in lesson 3 use f-numbers. This also explains the Sigma 24-35mm "T2.2" already in lesson 11.

**RED Komodo-X weight and price. VERIFIED (maker page, dated).** RED's own store, read October 21, 2026: "KOMODO-X RF Mount" body at $6,995.00, in stock; weight "2.62lbs (without body cap and CFexpress card)," about 1.19 kg [I, conversion]; operating temperature "0°C to 40°C (32°F to 104°F)"; sensor "19.9MP Super 35mm Global Shutter CMOS"; "Tri-Level Genlock Input via 9-Pin EXT"; 12G-SDI "Up to 4096 x 2160 4:2:2 for 60p" (RED Digital Cinema, n.d.-b) [V]. The same store listed a "KOMODO-X Starter Pack" at $8,995.00 and production packs at $11,995.00 (RED Digital Cinema, n.d.-b) [V].
**Lesson fix:** lesson 5, 6 or 12 can give "$6,995 for the body on RED's store on October 21, 2026" and "2.62 lb (about 1.19 kg) without body cap and card, against the FX3's 715 g," dated, and add that its 0 to 40 °C range matches the FX3's. The weight comparison supports the existing point that a global-shutter body costs payload. Lesson 12's QR (dated prices) still applies.

---

## 6. Summary

| Check | Status | What the lesson can do now |
|---|---|---|
| `megalodon-trademark` | Records VERIFIED; title decision STILL OPEN | Owner confirms on uspto.gov and decides; Panorama's class 9 antenna registration is the record to weigh |
| `megalodon-fx3-hdmi-bit-depth` | Bit depth VERIFIED; sampling STILL OPEN | Teach the 10-bit HDMI-only rule and "follows the record setting"; keep a sampling-only hedge |
| `megalodon-gimbal-modes` | Modes VERIFIED; sports practice STILL OPEN | Teach PF, PTF, FPV, Custom, Lock, recenter, Sport Mode from DJI (2024); no claim about which mode operators use |
| `megalodon-sideline-practice` | Rules VERIFIED (NFL, MLB) or REPORTED (NCAA, NBA); spotting REPORTED; spotting standard STILL OPEN | Teach the rule-book zones with citations; quote the two accounts as accounts; keep QR |
| Lesson 6 shutters | VERIFIED, one correction | Cite RED; fix the LED-board line |
| Lesson 14 balance | VERIFIED except cable steps | Cite DJI's sequence and checks |
| Lesson 3 depth of field | VERIFIED | Cite Zeiss and Sony for the circle of confusion |
| Focus breathing, T-stops, Komodo-X | VERIFIED | Optional additions, dated |

## References

BBC Studioworks. (2023). *Risk assessment for safe use of Steadicams* (Version 1.1). Retrieved October 21, 2026, from https://bbcstudioworks.com/wp-content/uploads/2023/08/Risk-Assessment-Steadicams.pdf

Curtis, B. (2019, December 5). *Meet the magician of NFL broadcasts*. The Ringer. https://www.theringer.com/2019/12/5/20996630/fox-broadcasts-don-cornelli-cameraman-joe-buck-troy-aikman

DJI. (2024). *DJI RS 4 / RS 4 Pro user manual* (Version 1.0). Retrieved October 21, 2026, from https://dl.djicdn.com/downloads/DJI_RS_4_Pro/UM/DJI_RS_4_User_Manual__v1.0__EN.pdf

DXOMARK. (n.d.). *Transmission, light transmission* [Glossary entry]. Retrieved October 21, 2026, from https://www.dxomark.com/glossary/transmission-light-transmission

Gliha, L. J., & Freeman, B. (n.d.). *College sideline collisions contributed to one death and other serious injuries*. Scripps News, via News 5 Cleveland. Retrieved October 21, 2026, from https://www.news5cleveland.com/investigations/college-sideline-collisions-contributed-to-one-death-and-other-serious-injuries

Keeley, S. (2020, September 27). *Raiders safety Johnathan Abram's scary collision with MNF television cart much worse than thought*. Awful Announcing. https://awfulannouncing.com/nfl/raiders-safety-johnathan-abrams-scary-collision-with-mnf-television-cart-much-worse-than-thought.html

Las Vegas Aces. (2026). *2026 Las Vegas Aces media access policy & procedures*. Retrieved October 21, 2026, from https://cdn.wnba.com/sites/1611661319/2026/04/2026-LAS-VEGAS-ACES-MEDIA-ACCESS-POLICY-final.pdf

Nasse, H. H. (2010). *Depth of field and bokeh*. Carl Zeiss Camera Lens Division. https://lenspire.zeiss.com/photo/app/uploads/2018/02/cln35_en_web_special_bokeh.pdf

National Collegiate Athletic Association. (2026). *2026 NCAA football rules and interpretations*. Retrieved October 21, 2026, from https://www.amarefs.org/wp-content/uploads/2026/07/RB-Combined-2026-1.pdf (copy hosted by an officials' association)

National Football League. (2026). *2026 official playing rules of the National Football League*. Retrieved October 21, 2026, from https://static.www.nfl.com/image/upload/fl_attachment/league/tqivdkzt9mu6wdgsh1ku.pdf

Office of the Commissioner of Baseball. (2026). *Official baseball rules: 2026 edition*. Retrieved October 21, 2026, from https://mktg.mlbstatic.com/mlb/official-information/2026-official-baseball-rules.pdf

Panorama Antennas. (n.d.). *Megalodon* [Product page]. Retrieved October 21, 2026, from https://www.panorama-antennas.com/site/products/megalodon/

RED Digital Cinema. (n.d.-a). *Global & rolling shutters* [RED 101 article]. Retrieved October 21, 2026, from https://www.reddigitalcinema.com/red-101/global-rolling-shutter

RED Digital Cinema. (n.d.-b). *KOMODO-X RF mount* [Product page]. Retrieved October 21, 2026, from https://www.reddigitalcinema.com/komodo-x_2

SI Wire. (2014, August 26). *Report: NBA to clear space along baselines*. Sports Illustrated. https://www.si.com/nba/2014/08/26/nba-clearing-baseline-space

Sigma. (n.d.). *24-35mm T2.2 FF* [Cine lens page]. Retrieved October 21, 2026, from https://www.sigma-global.com/en/cine-lenses/ff-zoom/24_35_22/

Sony. (n.d.-b). *ILME-FX3 help guide: Specifications*. Retrieved October 21, 2026, from https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000886922.html

Sony. (n.d.-c). *ILME-FX3 help guide: HDMI output settings (movie)*. Retrieved October 21, 2026, from https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000885432.html

Sony. (n.d.-d). *ILME-FX3 help guide: Movie settings (movie)*. Retrieved October 21, 2026, from https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000868278.html

Sony. (n.d.-e). *ILME-FX3 help guide: Outputting RAW movies to an external RAW recorder*. Retrieved October 21, 2026, from https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1002078215.html

Sony. (n.d.-f). *ILME-FX3A help guide: HDMI output settings (movie)*. Retrieved October 21, 2026, from https://helpguide.sony.net/ilc/2510/v1/en/contents/201h_HDMI_output_setting.html

Sony. (n.d.-g). *ILME-FX3A help guide: Movie settings (movie)*. Retrieved October 21, 2026, from https://helpguide.sony.net/ilc/2510/v1/en/contents/0412B_recording_setting.html

Sony. (n.d.-h). *ILME-FX30 help guide: Specifications*. Retrieved October 21, 2026, from https://helpguide.sony.net/ilc/2220/v1/en/contents/TP1000888850.html

Sony. (n.d.-i). *ILME-FX3 help guide: Lens compensation (still image/movie)*. Retrieved October 21, 2026, from https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000882810.html

U.S. Patent and Trademark Office. (n.d.-a). *Trademark search* [Database; word mark searches "megalodon", "megalodon*", "megladon*" and "megaladon*", live and dead records]. Retrieved October 21, 2026, from https://tmsearch.uspto.gov/

U.S. Patent and Trademark Office. (n.d.-b). *MEGALODON, U.S. Serial No. 79413156, U.S. Reg. No. 7,764,736* [Trademark Status and Document Retrieval record]. Retrieved October 21, 2026, from https://tsdr.uspto.gov/statusview/sn79413156

U.S. Patent and Trademark Office. (n.d.-c). *MEGALODON, U.S. Serial No. 86981713, U.S. Reg. No. 5,173,007* [Trademark Status and Document Retrieval record]. Retrieved October 21, 2026, from https://tsdr.uspto.gov/statusview/sn86981713

U.S. Patent and Trademark Office. (n.d.-d). *MEGLADON, U.S. Serial No. 76513525, U.S. Reg. No. 2,814,890* [Trademark Status and Document Retrieval record]. Retrieved October 21, 2026, from https://tsdr.uspto.gov/statusview/sn76513525
