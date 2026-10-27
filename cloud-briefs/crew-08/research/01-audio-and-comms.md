# The Show Crew: Audio and Comms Facts (A1, A2, A3, IFB, Intercom, the Mix)

**Researched:** October 26, 2026.

**Scope.** Outline section 2 of `cloud-briefs/crew-08/00-approved-brief.md`: the audio chair (A1, A2 and A3) and the comms system they run, plus the mix formats, loudness standards, embedded audio, audio-follow-video and RF coordination by name only. Cable and connector craft stays in CREW-00; recording craft stays in CREW-02.

**Tags.** **V** = read on October 26, 2026, in a page or file fetched that day, or in a saved posting whose text was extracted from the employer's public job API that day. **I** = inferred, with the reasoning shown. **A** = assumed; never to be taught as fact. Search-result snippets were used only to find URLs; nothing below rests on a snippet.

**How to read a posting fact.** A job posting is a primary source for what one employer asked on one date. Every pay figure is "as posted" with its date, never a market rate. Quoted text is copied exactly. Where a posting or title used an en or em dash, this pack writes "to" or "[dash]" outside the quotation marks instead of copying the dash, so the file holds no dash characters; the build restores a title's own punctuation from its URL. Minus signs in standards (for example, minus 23 LUFS) are written here with an ASCII hyphen.

**Primary and secondary.** Postings and standards are primary. Makers' pages and manuals are secondary for crew practice (they describe their own products). Sports Video Group (SVG) and TV Technology articles are trade press: secondary, dated, and often one person's practice. Several SVG pieces name crew members; this pack names none of them in its facts, and lessons should not either.

**How the evidence was gathered.** Saved postings (text extracted from the employers' public job APIs on October 26, 2026): NFL Seasonal Part-Time Audio 2; Fox Freelance A2/Audio Assistant; Fox Freelance Audio Operator; Fox Studio Technician/Technical Director; and, for comms checks, the NFL Seasonal Senior Coordinator, Studio Technical Operations. Fetched today: the Workday search APIs of Fox (`fox/Domestic`), Disney (`disney/disneycareer`) and Warner Bros. (`warnerbros/global`) for "A1", "audio", "intercom", "IFB" and "mixer", and five postings they returned; the NFL Greenhouse API (job dates); an aggregator copy of a closed ESPN posting; Clear-Com's Solution Finder (through its public Confluence API) and product pages; RTS and Riedel product pages; Calrec's site and its Audio Primer PDF; SSL, Sony, Ross, AJA, Lawo, Shure and Audinate (getdante.com) pages; ATSC A/85 (2026 and 2013 editions); EBU R 128 (PDF); the eCFR public API for 47 C.F.R. §§ 73.682, 73.8000, 74.801 and 74.832; eight SVG articles; one TV Technology article.

---

## Section 2.1 The A1, A2 and A3 as postings state them

### 2.1.1 Facts

| # | Fact | Tag | Source |
|---|---|---|---|
| 1 | NFL Media's posting is titled "Seasonal Part-Time Audio 2" and opens: "NFL Media Technical Operations is looking for an A2 Audio Mixer." | V | National Football League [NFL] (2026a), opening paragraph |
| 2 | The role "will provide supplemental audio production services by coordinating, mixing, and delivering support audio for live news/sports and key show programming," at the NFL Media Studios in Inglewood, California | V | NFL (2026a), opening paragraph |
| 3 | "Mix live and recorded show format productions with heavy emphasis on remotes and server playback." | V | NFL (2026a), "Responsibilities," item 1 |
| 4 | "Test and verify equipment: Networked audio consoles, intercoms, multiple audio and video servers, EVS Playback audio." | V | NFL (2026a), "Responsibilities," item 2 |
| 5 | "Required experience working with cart playback systems such as Ovation or 360systems. Must work with system templates and Music logging files." | V | NFL (2026a), "Responsibilities," item 3 |
| 6 | "Extensive knowledge and proper setup protocol of communication panels (i.e. Riedel) required." | V | NFL (2026a), "Responsibilities," item 4 |
| 7 | "Work with A1, show director and production teams on the proper audio requirements for each show." | V | NFL (2026a), "Responsibilities," item 5 |
| 8 | "Perform other duties as assigned such as A3 functions." The posting does not say what A3 functions are | V (wording); V (absence noted on reading) | NFL (2026a), "Responsibilities," item 8 |
| 9 | Required: 5 to 10+ years "of experience mixing linear and IP content in a television studio environment, including live and non-live productions" | V | NFL (2026a), "Required Qualifications," item 1 |
| 10 | "Experience mixing with SSL audio boards (specifically S500) preferred." | V | NFL (2026a), "Required Qualifications," item 2 |
| 11 | "Experience in Stereo and 5.1. surround mixing formats required." (the posting's own punctuation) | V | NFL (2026a), "Required Qualifications," item 3 |
| 12 | "Understanding of IP Networked audio devices, specifically AES67 with Dante knowledge or certifications a plus." | V | NFL (2026a), "Required Qualifications," item 4 |
| 13 | Terms: "Seasonal employment up to 7 months"; "Availability to work flexible hours including holidays, nights, and weekends" | V | NFL (2026a), "Terms / Expected Hours of Work" |
| 14 | Salary line: $65.47 at both ends of the range, "USD," with no unit; the NFL's pay text says its ranges are "salaries or hourly rates" and "The NFL expects to hire for this position near the middle of the range" | V | NFL (2026a), "Salary / Pay Range" |
| 15 | The Greenhouse API gives the Audio 2 posting a first-published date of June 26, 2026 and an update date of September 22, 2026 | V | NFL (n.d.), job 5279619008 |
| 16 | $65.47 is most likely an hourly rate: the NFL's own text allows "hourly rates," and a five-figure annual pay is not plausible for a 5 to 10 year mixing role | I | Reasoned from rows 14 and 9 |
| 17 | So at NFL Media the A2 mixes: the posting's title is "A2 Audio Mixer" and its first duty is mixing. A2 does not mean "never mixes" everywhere | I | Rows 1 and 3 |
| 18 | Fox News Media's "Freelance A2/Audio Assistant" (New York; posted October 19, 2026; "Part time"): "You work directly with the FNC/FBN audio engineer and crew for our live and live-to-tape shows at our New York facility" | V | FOX News Media (2026b), "Job Description" |
| 19 | Its duties: "Mic guests as needed for live and as-live production"; "Assist in the maintenance of audio equipment under the direction of the A1"; "Other tasks as directed by the A1 or manager"; "Provide immediate solutions in the event of equipment failure or other audio problems"; "Move and organize furniture and set pieces in the studio prior to and following the shoot." | V | FOX News Media (2026b), "A Snapshot of Your Responsibilities" |
| 20 | Its requirements: "Must have knowledge of RF frequencies and be able to troubleshoot when necessary"; "Need to be familiar with microphone techniques for both field and studio"; "You should have an understanding in the aesthetics of microphone cabling and IFB wiring"; "Knowledge of Yamaha RIO & Calrec Hydra I/O boxes" | V | FOX News Media (2026b), "What You Will Need" |
| 21 | Pay: "$36.00-43.75 per hour" | V | FOX News Media (2026b), pay disclosure |
| 22 | In that posting "the FNC/FBN audio engineer" and "the A1" are most likely the same person: the A2 works "directly with" the audio engineer and maintains gear "under the direction of the A1" | I | Row 18 read with row 19 |
| 23 | Fox News Media's "Freelance Audio Operator" (Washington, D.C.; posted September 22, 2026): "Operate audio board for live newscasts and productions"; "Manage audio within for live & taped broadcasts, including mic sources and IFBs" | V | FOX News Media (2026c), "A Snapshot of Your Responsibilities" |
| 24 | The same posting: "Perform facility checks with A2 and Stage Manager for all mic and IFB positions in the studio before daily production begins, including studio setup" | V | FOX News Media (2026c), "A Snapshot of Your Responsibilities" |
| 25 | It asks for "Proficiency building and execution of effects and shows on the Calrec Sigma, Artemis, and SSL System T consoles"; "Strong knowledge of audio patch bays, Hydra BSP, signal flow, Enco playout system"; and "Ability to work in a control room for at least 2 hours without a break" | V | FOX News Media (2026c), "What You Will Need" |
| 26 | Pay: "$28.00-37.50 per hour" | V | FOX News Media (2026c), pay disclosure |
| 27 | FOX Television Stations' "Studio Technician/Technical Director" at FOX 5 DC (posted October 15, 2026; "Per Diem Part-Time"): "Perform functions including, but not limited to, technical director, audio operator, robotic camera, and/or floor director." | V | FOX Television Stations (2026), "What You'll Do" |
| 28 | That posting: "Candidate will also be required to join the I.A.T.S.E Local 819 union"; "A minimum of 3 years of recent experience"; pay "$31.55-52.64 per hour" | V | FOX Television Stations (2026), "Additional Details," "What You're Bringing," pay disclosure |
| 29 | Fox News Media's "Freelance Studio/Field Technician" (Washington, D.C.; posted October 7, 2026): "Set up and mic guests, including managing IFB needs"; on site "two to three days per week, typically from 4:00 p.m. to 8:30 p.m."; pay "$45.00-55.00 per hour" | V | FOX News Media (2026d), "Job Description," "A Snapshot of Your Responsibilities," pay disclosure |
| 30 | A closed ESPN posting (aggregator copy): "The Audio Operator I will provide audio mixing (A1) and/or audio assist (A2) support for live event , studio productions and pre-recorded material" | V | ESPN (n.d.), opening paragraph |
| 31 | The same posting: "As an audio operator (A1), you must be proficient in mixing and monitoring all audio sources including but not limited to microphones, music, sound effects and natural sound." | V | ESPN (n.d.), opening paragraph |
| 32 | The same posting: "As an audio assist (A2), you must be experienced in the configuration of in-house intercom/PL communications and proficient in dressing talent microphones/IFBs." | V | ESPN (n.d.), opening paragraph |
| 33 | It lists equipment including "audio mixing consoles, outboard equipment, audio & video routing, digital audio delivery servers, microphone & IFBs and their signal flows, mix minus, intercom devices & software, broadcast routers"; minimum "2 years practical Content Production or related experience at the large market or network level in the A1 and/or A2 role" | V | ESPN (n.d.), duties and qualifications |
| 34 | The aggregator marks that ESPN posting "This position has been filled" and "removed by the employer on 3/4/2025"; no pay appears on the copy | V | ESPN (n.d.), page status lines |
| 35 | The posting-level split, then: the A1 mixes and monitors all sources; the A2 sets up comms (intercom, PL) and dresses talent mics and IFBs; at NFL Media an A2 also mixes support audio and server playback | I | Rows 3, 7, 30 to 32 |
| 36 | NFL Media's Senior Coordinator, Studio Technical Operations checks, before production, "signal routing, intercom and IFB functionality, camera and lighting readiness, belt pack frequencies and batteries, and audio levels," and asks for "RTS or Clear-Com intercom and IFB systems" experience | V | NFL (2026b), "Responsibilities" and "Required Qualifications" |
| 37 | That coordinator's salary line reads $35 to $43 "USD" with no unit; full-time, non-exempt, 40 hours per week, "Seasonal position up to 7 months"; first published September 21, 2026 | V | NFL (2026b), "Salary / Pay Range," "Terms"; NFL (n.d.), job 5427937008 |
| 38 | A Warner Bros. careers posting for a Live Events Technical Manager (Atlanta; posted October 21, 2026) lists as preferred: "Technical Director, A1 and/or previous Technical Manager experience" and "In-depth operational experience with routers and intercoms"; duties include "QC Video and Audio signals used for air." No pay is posted | V | Skydance (2026a), "Not Required but preferred experience," "Your Role Accountabilities" |
| 39 | A Remote Operations Center Specialist on the same board (posted October 21, 2026) must "Function as the audio and video liaison between site and PCR (Production Control Room) operations"; preferred: "TD, A1, Engineering or Technical Manager experience"; minimum "4 years of network-level broadcast production experience" | V | Skydance (2026b), "Studios On-Site Event Support," "Qualifications" |
| 40 | Fox News Media's Broadcast Production Engineer (D.C.; posted October 21, 2026) handles "infrastructure systems like routers, intercom, monitoring, KVM, audio suites"; does "gating, compression, equalization of talent microphone audio, and multi-band processing of outbound audio programming using Orban processors"; and sets up "small Dante audio networks." Pay "$44.00-51.25 per hour" | V | FOX News Media (2026a), responsibilities and pay disclosure |
| 41 | Search results on October 26, 2026: Fox's Workday search for "A1" returned one posting (the A2 above); Disney's search for "A1 audio" returned zero; Warner Bros.' search for "A1" returned two, both naming A1 only as preferred experience; the NFL Greenhouse board's audio posting is the Audio 2. No posting titled A1 was found on these four boards | V | Workday search APIs (Fox, Disney, Warner Bros.) and NFL (n.d.), October 26, 2026 |

### 2.1.2 Role table (all as posted; dates are posting or first-publish dates)

| Title | Employer | Setting | Type | Selected requirements | Pay as posted | Date | Tag |
|---|---|---|---|---|---|---|---|
| Seasonal Part-Time Audio 2 ("A2 Audio Mixer") | NFL Media | Studio, Inglewood, CA | Seasonal, part time, up to 7 months | 5 to 10+ years mixing; SSL S500 preferred; stereo and 5.1; Riedel panels; AES67 and Dante a plus | $65.47 both ends, USD, no unit | First published June 26, 2026; updated September 22, 2026 | V |
| Freelance A2/Audio Assistant | FOX News Media | News studio, New York | Freelance, part time | RF troubleshooting; mic technique; IFB wiring; Yamaha RIO and Calrec Hydra I/O | $36.00 to $43.75 per hour | October 19, 2026 | V |
| Freelance Audio Operator | FOX News Media | News bureau, Washington, D.C. | Freelance, part time | Calrec Sigma, Artemis, SSL System T; patch bays; Hydra BSP; Enco | $28.00 to $37.50 per hour | September 22, 2026 | V |
| Studio Technician/Technical Director | FOX Television Stations (FOX 5 DC) | Local news | Per diem part time; IATSE Local 819 | 3 years; may work as TD, audio operator, robotic camera or floor director | $31.55 to $52.64 per hour | October 15, 2026 | V |
| Freelance Studio/Field Technician | FOX News Media | Remote anchor studio, D.C. area | Freelance, part time | Transmission; mic guests and IFB; stage manage as needed | $45.00 to $55.00 per hour | October 7, 2026 | V |
| Audio Operator I (A1 and/or A2) | ESPN (aggregator copy) | Studio and remote, Bristol, CT | Not stated on the copy | 2 years at large-market or network level as A1 or A2 | Not shown | Filled; removed by employer March 4, 2025 | V |
| Seasonal Senior Coordinator, Studio Technical Operations | NFL Media | Studio, Inglewood, CA | Full time, non-exempt, seasonal | Pre-production checks of comms, IFB, belt packs; RTS or Clear-Com | $35 to $43, USD, no unit | First published September 21, 2026 | V |

---

## Section 2.2 How the A1 and A2 split the work, as trade press and one maker interview describe it

| # | Fact | Tag | Source |
|---|---|---|---|
| 42 | A Fox Sports A1, in a Calrec interview published by SVG, describes the ladder in the first person: "I moved through the ranks from an A2, setting things up on the field, to an A1 where I started mixing shows for Fox." He began running "the parabolic microphones on the sideline for NFL games" in high school | V | Sports Video Group [SVG] (2025), first and second answers |
| 43 | The same interview: for the Super Bowl, "upwards of 50 microphones" in the field, locker room and hallway areas; "three talent including two roving talent on the field" | V | SVG (2025), "How many audio channels" answer |
| 44 | SVG reports a crewing firm's view that "the traditional path to the A1 seat is still the only reliable one: from school to A2 to A1, a journey that can take several years" | V | Daley (2024b), paragraph on the crewing firm's field-operations manager |
| 45 | SVG: "Many A2s report that they don't find the extra $200 or so a day worth the pressure that comes with mixing a show." Part 2 repeats it: "maybe an extra $200 or so a day" | V (as reported; not a posting) | Daley (2024b; 2024c) |
| 46 | A veteran A1 quoted in SVG says an A1 "is responsible for both the internal and outside connections to the truck, all the unit's audio monitors, and audio routing and patching," must know formats including Dante, "Hydra and MADI interfacing, and integrating RF systems" | V (one A1's account, as SVG paraphrases it) | Daley (2024c), "A Position Unlike Any Other" |
| 47 | The same article: "depending on the nature of the production, the A1 is also often responsible for intercoms"; the A1 quoted says "Over the years, all things intercom became our domain" and "It means that the A1 has to accommodate the monitoring needs of each person in the production loop on the comms network" | V (one A1's account) | Daley (2024c), "A Position Unlike Any Other" |
| 48 | SVG on A2s: "A2 is a broad term that covers more jobs than just putting out mics" (an ESPN remote operations specialist) | V | Daley (2023), paragraph 1 |
| 49 | SVG: "front-line audio workers are largely self-employed" in U.S. broadcasting | V | Daley (2023), paragraph 5 |
| 50 | An A2 quoted by SVG: networks now "want a person who can do the booth, who can do the field, who can do RF. The days of doing only one thing are gone." | V (one A2's account) | Daley (2023) |
| 51 | SVG: traveling A2s lead "platoons of local A2s"; one A2 estimates the traveling network-level corps "at between 20 and 25 nationally" | V (one person's estimate) | Daley (2023) |
| 52 | SVG: multi-skill A2 work "comes without standardized training"; "A2s look to manufacturers' training to learn new products and skills" | V | Daley (2023) |
| 53 | SVG (2022): ESPN "agreed to supply two A2s as parab operators, replacing two of the four utility personnel previously assigned to four parabs per game"; utility workers "are usually relied on for such tasks as cable management behind cameras and other semi-technical jobs" | V | Daley (2022), paragraph 6 |
| 54 | An ESPN A1 quoted there: "the parab operator is as important to the A1 as the camera operator is to the director" | V (one A1's view) | Daley (2022), paragraph 7 |
| 55 | SVG (2022): "the league has always retained control of and access to the two player microphones on the field"; under the league and players' collective-bargaining agreement, microphones "can be placed on either a guard or the starting and backup center for each game" | V (as reported in 2022) | Daley (2022), paragraphs 1 and 4 |
| 56 | SVG (2022): Fox ran "six parabs this season: four on the sidelines, two in the end zones"; SVG (2024) calls six manned parabs "two more than for most NFL telecasts" | V | Daley (2022), paragraph 4; Daley (2024a) |
| 57 | SVG (2024) lists each network's NFL playoff audio crew by truck as an "A1" and a "submixer"; Fox and ESPN crews also list an "RF Manager" | V | Daley (2024a), paragraphs 1 to 4 |
| 58 | SVG (2018), a network A1 on the NFL mix: the submixer "sends me the game at field level, from the parabolic and goal-post microphones," the league provides player mics, and the A1 mixes "that with the announcers and the crowd"; announcers sit "in the center channel and about 6 dB above the rest of the mix" | V (one mixer's 2018 practice) | Daley (2018), paragraphs 1 and 4 |
| 59 | SVG (2018): the submixer "directs the A2s carrying the parabs to keep them focused on the field rather than the play" | V (2018) | Daley (2018), paragraph 9 |
| 60 | SVG (2013): the league's player-mic signal "is routed via wire to the remote truck mixing the game for broadcast, where the A1 has the NFL's on-field audio on a separate console fader" | V (dated 2013) | Daley (2013), paragraph 2 |
| 61 | SVG (October 23, 2026), World Series crew: the Fox audio team lists an A1, a new "FX submixer," an "audio guarantee" on the truck staff, two A2s, a third person "assisting" on submixing, and a wireless vendor "responsible for wireless audio"; the A1 cites "24 mics on the outfield wall" | V | Daley (2026), "New Faces on the Team" and closing paragraph |
| 62 | The same article: smaller 16-inch parabs let "the A2s handling them" stand in more places, including aisles, "without interfering with fan sightlines" | V | Daley (2026), "Sitting in Klover" |
| 63 | So on a network game, the audio chair is a team: an A1 who mixes and answers for audio and often comms; one or more submixers for effects; A2s who set up, carry parabs, dress talent and run RF; and on big shows an RF manager or wireless vendor. Seats vary by show | I | Rows 42, 46, 47, 53, 57, 58, 61 |
| 64 | Whether every sports truck has a submixer, and what an "audio guarantee" does | A | No source read today defines either |
| 65 | What an A3 does on a sports or studio show | A | The NFL posting names "A3 functions" without defining them (row 8); no other source read today defines A3 |

---

## Section 2.3 Comms: party-line, matrix, panels and IFB

| # | Fact | Tag | Source |
|---|---|---|---|
| 66 | Clear-Com names three basic forms of intercom: "Point to point. This is when we talk privately from one device to another"; "Partyline. A PL is a conference where more than one user can communicate (in a full-duplex fashion) with other users"; and Fixed Groups, where pressing the group button means "every 'member' device will automatically hear the talker" | V | Clear-Com (2020b), list items 1 to 3 |
| 67 | Clear-Com: party lines "are the most common form of intercom and have been around since the beginning of these production intercoms since the 1960's," and "The PLs are broken down into channels, or separate paths, as needed for separation of conversations" | V | Clear-Com (2020b), "Partyline" item |
| 68 | Clear-Com: "Advanced Matrix intercom systems provide a high capacity of point-to-point audio routes to allow the greatest number of communication paths for individuals or groups"; matrix frames "can also be trunked together" | V | Clear-Com (n.d.-b), page introduction |
| 69 | Clear-Com's Encore party-line systems "connect over standard, two-conductor shielded mic cables," and "With full-duplex communication, there is no delay or waiting for any user to release the communication line" | V | Clear-Com (n.d.-c), body text |
| 70 | Clear-Com's party-line page also lists "IFB systems that allow talent coordinators to speak directly to on-air talents" | V | Clear-Com (n.d.-c), product list |
| 71 | Clear-Com's Eclipse HX matrix supports "Analog, Dante, MADI, AES67, SMPTE 2110, and Clear-Com's LQ Series" locally, with user stations including keypanels, wireless beltpacks and virtual clients | V | Clear-Com (n.d.-a), body text |
| 72 | RTS: "RTS is the only two-wire protocol that allows two communication channels to be connected on a single standard microphone cable" (the maker's claim) | V (maker's claim) | RTS (n.d.-b), user stations paragraph |
| 73 | RTS: its ADAM matrix is "available in sizes from 16 to 880 users"; ODIN can "start with 16 ports, extend up to 128 ports, or connect eight units seamlessly for a 1024-port matrix" | V | RTS (n.d.-a), body text |
| 74 | RTS's DBP beltpack "supports both digital partyline and matrix keypanel modes," and RTS accessories include "control panels for IFB levels and assignments" | V | RTS (n.d.-a; n.d.-b) |
| 75 | Riedel: Artist offers "up to 1024 ports in just 2RU," with interface cards "that switch between SMPTE 2110-30 (AES67), MADI, Dante, or Fiber" | V | Riedel Communications (n.d.-a), body text |
| 76 | Riedel's Bolero wireless intercom runs "from 1.9 GHz DECT to 2.4 GHz operation"; in standalone modes it supports "Unlimited point-to-point connections and up to 32 partylines" and 100 beltpacks | V | Riedel Communications (n.d.-b), "Three Ways to Deploy Bolero" |
| 77 | Riedel SmartPanels "unify intercom, audio monitoring, timecode and control workflows into a single, consistent operating multifunctional environment" | V | Riedel Communications (n.d.-c), body text |
| 78 | The NFL Audio 2 posting's "communication panels (i.e. Riedel)" are this kind of keypanel or SmartPanel on a matrix | I | Row 6 read with rows 75 and 77 |
| 79 | Clear-Com defines IFB as "INTERRUPTIBLE FOLD BACK or INTERRUPTIBLE FEED BACK," "an audio workflow used most often in broadcast to send production audio to the on-air talent through a one-way link, most often through an IFB box which has an earpiece for the talent" | V | Clear-Com (2026a), opening |
| 80 | Clear-Com: production staff "can 'interrupt' the program audio by pressing a button to provide cues or directions to the talent. When pressing the IFB button, the program audio will dip or cut entirely so the production staff's voice can be heard clearly." | V | Clear-Com (2026a), opening |
| 81 | Clear-Com's three parts of an IFB: SOURCE ("the audio that the talent (or a speaker) should be listening to"), DESTINATION ("where the IFB feed should go") and RETURN ("the talent's microphone"), which lets a producer or director hear the mic "pre-fade, meaning without the microphone turned up on the audio mixing console" | V | Clear-Com (2026a), "How to Configure an IFB" |
| 82 | Clear-Com: for talent in the field, the source "is going to be a mix-minus feed, which is the program audio MINUS the microphone of the on-air talent who is talking. (Without mix-minus, the talent in the field will hear themself but with a few seconds of delay.)" | V | Clear-Com (2026a), "SOURCE" |
| 83 | On a Clear-Com matrix an operator can monitor an IFB two ways: Destination Listen hears "the same audio as the IFB destination (i.e. mix + interrupt)"; Return Listen hears "the incoming return (i.e. pre-fade talent)" | V | Clear-Com (2026b); Clear-Com (2020a) |
| 84 | Clear-Com calls a powered IFB signal from a two-wire party-line "a wet (powered) IFB signal," and converts it to "a 4wire line level signal" with an interface | V | Clear-Com (2019), "Instructions" |
| 85 | Clear-Com's wired IFB receiver is "A 2-wire IFB talent listen-only beltpack"; "as of 2026 June" it has no wireless IFB receiver and points to third-party in-ear monitor systems | V | Clear-Com (2026c), answer |
| 86 | IFB is not the crew's intercom: it is a one-way program feed to talent that production can interrupt, while intercom is two-way talk among crew (party-line, point to point or group) | I | Rows 66 and 79 to 81 |

---

## Section 2.4 The mix: consoles, formats, loudness, embedded audio and audio-follow-video

### 2.4.1 Consoles and networked audio

| # | Fact | Tag | Source |
|---|---|---|---|
| 87 | Calrec: "Broadcast consoles are not just audio desks, but routers," with routers from "1024 2 on a Brio, up to 8192 2 on an Apollo" (the page's superscript renders as "2") | V | Calrec Audio (n.d.-c), body text |
| 88 | Calrec: its consoles "provide comprehensive delay at three separate points in the signal chain; input, output and path delay" | V | Calrec Audio (n.d.-c), body text |
| 89 | Calrec claims that "in Sports Video Group's annual Gearbase survey, Calrec have come top of the list for audio consoles in HD trucks every single year" | V (maker's claim; the survey itself was not read) | Calrec Audio (n.d.-c), body text |
| 90 | Calrec Artemis: "A third of the touch screen is dedicated for user configurable meters, providing up to 36 x 5.1 meters simultaneously and provides loudness metering"; "a joystick and spill faders are provided for 5.1 workflows" | V | Calrec Audio (n.d.-a), body text |
| 91 | Calrec Hydra2 "connects all Calrec's medium and large proprietary consoles and I/O via a high-speed, modular backbone"; Apollo, Artemis and Summa "rely on Hydra2 for the routing of all audio to and from their DSP" | V | Calrec Audio (n.d.-b), body text |
| 92 | The Fox postings' "Calrec Hydra I/O boxes" and "Hydra BSP" refer to this Calrec networking family | I | Rows 20 and 25 read with row 91 |
| 93 | SSL's S500 fader strips carry status LEDs "covering Dynamics, De-ess mode, Dialogue Automix and Remote AFV or Production Automation control" | V | Solid State Logic [SSL] (n.d.-b), "Fader Tiles" |
| 94 | SSL System T: "Up to three control interfaces can use a single processor core. Multiple processor cores can be used on a single network." | V | SSL (n.d.-a), body text |
| 95 | A Fox Sports A1 described the 2025 Super Bowl setup as "three Calrec Apollo consoles" and "four Calrec Artemis consoles" across trucks, interconnected "via AoIP Gateways, and some via MADI streams" | V (one show, as told in a maker interview) | SVG (2025), "Tell us about your audio setup" |
| 96 | Audinate's Dante Certification has three levels; Level 2 covers "IP networking, QoS, VLANs, IGMP, and redundancy"; Level 3 covers deploying "Dante across subnets" and synchronizing "your network using PTP" | V | Audinate (n.d.), level descriptions |

### 2.4.2 Mix-minus, levels and metering (Calrec Audio Primer, 2018)

| # | Fact | Tag | Source |
|---|---|---|---|
| 97 | "Mix Minus is a system that allows a comprehensive mix to be sent to multiple listeners each receiving the complete mix, minus their own input." | V | Calrec Audio (2018), p. 44 |
| 98 | Why: a reporter on a long-distance link hears delay, and "It can be very difficult to speak while hearing your own voice returned to you with even a slight delay"; and mix-minus breaks feedback loops when foldback plays on loudspeakers | V | Calrec Audio (2018), p. 44 |
| 99 | "The difference between the normal operating level and the maximum is referred to as headroom"; "0dBFS is the maximum level that can be passed" | V | Calrec Audio (2018), p. 13 |
| 100 | "Two common reference levels are -18dBFS=0dBU and -20dBFS=+4dBU. These are used in the UK and the US respectively," though "several other standards are used around the world" | V | Calrec Audio (2018), p. 13 |
| 101 | "PPM meters have a very fast attack time and a very slow decay time," while "VU meters have a much slower attack, but a faster decay"; on program material "a PPM meter will generally display several dB's higher than a VU meter" | V | Calrec Audio (2018), p. 16 |
| 102 | "Its always a good idea to be able to meter and listen to audio from further downstream than the console output to ensure your signal is being delivered as intended." | V | Calrec Audio (2018), p. 16 |
| 103 | A 5.1 signal is "Left (L), Right (R), Center (C), Low Frequency Effects (LFE), Left Surround (Ls) and Right Surround (Rs)"; one fader moves all of them, and spill faders give control of L/R, C, LFE and Ls/Rs | V | Calrec Audio (2018), p. 38 |

### 2.4.3 Loudness standards and the rule

| # | Fact | Tag | Source |
|---|---|---|---|
| 104 | ATSC's current A/85 is "A/85:2026-07," approved 8 July 2026; its scope is TV audio "as presented in both stereo (2.0-channel) and surround (5.1-channel) formats" | V | Advanced Television Systems Committee [ATSC] (n.d.); ATSC (2026b), section 1 |
| 105 | A/85 defines Long-form Content as "Episodic TV programming, movies, news, sporting events, or other non-Short-form Content" | V | ATSC (2026b), section 3, p. 8 |
| 106 | A/85 quick reference: "For delivery or exchange of Content without metadata (and where there is no prior arrangement by the parties regarding Target Loudness), the Target Loudness should be -24 LKFS," with a measurement tolerance "of up to approximately ±2 dB"; maximum true peak -2 dBTP | V | ATSC (2026a), Table M.1 and notes |
| 107 | For long-form content, "It is vital that the average Dialogue Level be measured and reported as the Loudness" | V | ATSC (2026a), note 31 |
| 108 | Live events: "The intent of Loudness measurements made during a live event is to guide the mixer to produce the Content at an average predetermined or Target Loudness"; sliding-window meters show "a prior segment (typically 3 to 10 sec)" and help "when mixing in noisy locations" | V | ATSC (2026b), section 5.2.3, p. 12 |
| 109 | "During production, the Loudness of surround programming should be measured in both its surround mix format and in its stereo (2.0-channel) downmix"; build-up can make the downmix louder "by up to 3 dB," and one fix is "to assign dialogue and lead-singer elements primarily or exclusively to the center channel" | V | ATSC (2026b), section 5.2.7, p. 13 |
| 110 | A/85 defines Low Frequency Effects as "An optional single channel of limited bandwidth (below 120 Hz)" | V | ATSC (2026b), section 3, p. 8 |
| 111 | For streaming only, A/85 recommends "a single Target Loudness between -23 to -27 LKFS" unless the parties agree otherwise | V | ATSC (2026a), Table M.1 text and note 35 |
| 112 | The U.S. rule: "television broadcast stations must comply with the ATSC A/85 RP incorporated by reference ... insofar as it concerns the transmission of commercial advertisements," effective December 13, 2012 | V | 47 C.F.R. § 73.682(e)(1) |
| 113 | The edition the rule incorporates is "ATSC A/85:2013" (March 12, 2013), not the 2026 edition | V | 47 C.F.R. § 73.8000 |
| 114 | A/85:2013 also gives -24 LKFS as the target for content without metadata, with true peak "below -2 dB TP" | V | ATSC (2013), section 6, p. 18 |
| 115 | EBU R 128 (2023): "the Programme Loudness Level shall be normalised to a Target Level of -23.0 LUFS. Where attaining the Target Level is not achievable practically (for example, live programmes), a tolerance of ±1.0 LU is permitted" | V | European Broadcasting Union [EBU] (2023), p. 3, item h |
| 116 | EBU R 128: "the True Peak Level of a programme shall not exceed -1 dBTP"; and "'LUFS' is equivalent to 'LKFS' (which is used in ITU-R BS.1770)" | V | EBU (2023), p. 4, item m; p. 3, note 1 |
| 117 | So a U.S. broadcast mix and a European one aim at different targets (-24 LKFS against -23 LUFS) measured the same way (BS.1770), and the U.S. rule binds commercials, not the game itself | I | Rows 106, 112, 115, 116 |

### 2.4.4 Embedded audio and audio-follow-video

| # | Fact | Tag | Source |
|---|---|---|---|
| 118 | AJA's OG-12G-AM "is a 16-channel AES/EBU audio embedder/disembedder openGear card with support for 12G-SDI input and output up to 4K/UltraHD"; embedding is selectable "on a channel pair basis" | V | AJA Video Systems (n.d.-a), "Overview" |
| 119 | AJA's workflow: the card "disembeds AES audio to the AES I/O for mixing," and "The output of the mixer is then embedded into the SDI stream" | V | AJA Video Systems (n.d.-a), "OG-12G-AM Workflow" |
| 120 | AJA's OG-DANTE-12GAM supports "up to 16-channels of embedded audio support per SDI connection" and bridges "SDI and audio over IP (AoIP) infrastructures" | V | AJA Video Systems (n.d.-b), features |
| 121 | SVG (2022): a Skycam-mounted digital microphone's audio "is embedded as an AES-3 format with that of the camera and can be de-embedded and sent discretely over fiber to the A1 console" | V (2022 report) | Daley (2022), paragraph 9 |
| 122 | Sony defines AFV: "When the [AFV] button is pressed and the AFV function is enabled, the audio linked with a video is output when the program output is switched to that video. When the program output is switched to another video, the audio automatically switches to the muted state." | V | Sony (n.d.), "Configuring AFV" |
| 123 | Ross Acuity's controls include "AFV Hold" (audio "automatically taken on-air with the video source, but are unchanged when the video source is taken off-air") and "AFV Off," after which audio "will not automatically be taken on-air with the video source" | V | Ross Video (n.d.), "Audio Mixer" events |
| 124 | Calrec's primer shows a GPIO application in which a "Signal faded up on vision mixer" leads to "Associated audio sources faded up on Calrec console"; GPIs on Calrec consoles are opto-isolated and GPOs use relays | V | Calrec Audio (2018), p. 46, text and Figure 1 |
| 125 | How sports A1s use AFV on a live game (whether they leave it on, or for which sources) | A | No source read today says |
| 126 | Lawo's KICK "is a unique, patent-pending, automated audio mixing technology" for "major live sports events that use a ball" [dash in original] "soccer, rugby and football"; "Interfaced to popular image analysis and tracking systems," it "automatically prioritizes the microphones closest to the action" | V (maker's description) | Lawo (n.d.), body text |

---

## Section 2.5 RF coordination (name only; CREW-00 lesson 26 owns the RF cable)

| # | Fact | Tag | Source |
|---|---|---|---|
| 127 | 47 C.F.R. § 74.801: a low power auxiliary station is intended "to transmit over distances of approximately 100 meters for uses such as wireless microphones, cue and control communications, and synchronization of TV camera signals" | V | 47 C.F.R. § 74.801 (eCFR, up to date as of October 23, 2026) |
| 128 | § 74.832(a) lists who may hold a low power auxiliary license, including broadcast licensees, "A broadcast network entity," "Television program producers," "Large venue owners or operators" and "Professional sound companies" | V | 47 C.F.R. § 74.832(a) |
| 129 | A large venue owner or a professional sound company is one that "routinely uses 50 or more low power auxiliary station devices" | V | 47 C.F.R. § 74.801 |
| 130 | Shure: intermodulation distortion "occurs when multiple RF signals interact in non-linear transmitter or receiver circuits, generating unwanted frequencies"; managing it "requires careful frequency coordination" | V | Shure (n.d.), summary |
| 131 | Shure: "most manufacturers recommend a minimum margin of 250kHz between any 3rd order IM product and any tuned carrier frequency"; for high channel counts, software "like the Shure Wireless Workbench 6 is a more effective approach" | V | Shure (n.d.), body text |
| 132 | TV Technology (2018): the coordination process is to "connect the analyzer, gather RF data, pull all data into the coordination software, run the analysis, then make any necessary frequency changes to the transmitters," then run it again to double-check | V (dated 2018) | Yeary (2018), Wireless Workbench paragraph |
| 133 | Network sports shows name the role: SVG lists an "RF Manager" on Fox and ESPN playoff crews, and a wireless vendor "responsible for wireless audio" at the 2026 World Series | V | Daley (2024a); Daley (2026) |
| 134 | Who coordinates RF on a smaller show (A1, A2 or a vendor) | A | No source read today says; the Fox News A2 posting asks only for "knowledge of RF frequencies" (row 20) |

---

## Section 2.6 Checks before air that the sources name (for outline section 7)

Assembled only from posting and maker text; no single job does every step (I).

| Check | Who, as the source says | Source |
|---|---|---|
| Test and verify networked consoles, intercoms, servers and EVS playback audio | NFL Media A2 | NFL (2026a) |
| Facility checks "for all mic and IFB positions in the studio before daily production begins" | Fox News audio operator with the A2 and stage manager | FOX News Media (2026c) |
| Pre-production checks of "intercom and IFB functionality," "belt pack frequencies and batteries, and audio levels" | NFL Media senior coordinator | NFL (2026b) |
| Listen to each IFB as the talent hears it (destination) and to the talent's pre-fade mic (return) | Any operator with a matrix panel or Dynam-EC monitor | Clear-Com (2026b; 2020a) |
| Meter and listen downstream of the console output | Console operator | Calrec Audio (2018), p. 16 |
| Measure loudness in 5.1 and in the stereo downmix | The mixer | ATSC (2026b), section 5.2.7 |
| Scan, coordinate, re-run coordination after changes | Whoever coordinates RF | Yeary (2018); Shure (n.d.) |

---

## Teach this, not that

| Teach this | Not that | Why |
|---|---|---|
| "Fox News Media's A2 posting (October 19, 2026)" and "FOX Television Stations' TD posting" | "Fox Sports' A2" or "a Fox sports truck job" | The saved Fox A2, Audio Operator and TD postings are news jobs (FOX News Media; FOX 5 DC). The brief's section 6 calls them "Fox"; lessons must name the unit. No Fox Sports audio posting was found today |
| The NFL Audio 2 is a studio job in Inglewood whose title is "A2 Audio Mixer" | That an A2 never mixes, or that this is a truck job | NFL (2026a) |
| "The posting gives $65.47 USD with no unit; likely hourly" | "NFL A2s earn $65.47 an hour" | Unit not stated (NFL, 2026a) |
| A1 and A2 duties as ESPN's posting wrote them (A1 mixes and monitors all sources; A2 configures intercom/PL and dresses talent mics and IFBs) | That every employer splits the work the same way | NFL Media's A2 mixes; Fox News' A2 also moves furniture and set pieces |
| "A3 functions" appear in one posting, undefined | Any definition of an A3 | No source read today defines it |
| IFB is a one-way program feed to talent that production can interrupt; its source is often a mix-minus | That IFB is the crew intercom | Clear-Com (2026a) |
| The ATSC recommends -24 LKFS for content without metadata; the FCC rule makes A/85 (the 2013 edition) mandatory for commercials | "The law requires every program to be -24 LKFS" | 47 C.F.R. § 73.682(e)(1); § 73.8000 |
| Europe's EBU R 128 targets -23.0 LUFS, with ±1.0 LU allowed for live programmes | That -23 and -24 are the same target | EBU (2023) |
| Reference levels as Calrec states them (-20 dBFS = +4 dBu in the U.S.) | A digital peak target such as "-6 to -3 dBFS" | No source read today states such a peak target; `broadcasting-break-in` lesson 6 states one without a source (see below) |
| One A1's practice ("about 6 dB above the rest," 2018) as one mixer's account | A rule for announcer level | Daley (2018) is one interview, eight years old |
| RF coordination named as a job (RF manager, wireless vendor) and the rule names (Part 74, § 15.236 in CREW-00) | Any frequency, band plan or power figure in CREW-08 | Brief scope; CREW-00 lesson 26 owns the RF details; FCC pages refused |
| Maker statements as the maker's (Calrec's Gearbase claim, RTS's "only two-wire protocol," Lawo's KICK claims) | Those claims as independent fact | Secondary, self-describing sources |
| The A2 to A1 ladder as SVG and one A1 describe it, with the "$200 or so a day" difference as reported | A pay difference as a fact about the market | Trade press, not postings (Daley, 2024b, 2024c) |

## Already taught elsewhere (link, do not repeat)

- `broadcasting-break-in`, lesson `signal-flow-and-audio` ("6 · Signal flow and audio fundamentals"): signal flow as a chain from source to mixer to output; four mic types; troubleshooting along the chain; gain staging. **Flag:** it states "a common target is around -6 to -3 dBFS" and cites only the BLS occupation page. No source read today supports that figure, and CREW-02 (`sound-craft`) deliberately gives no dBFS target. CREW-08 should not repeat it; the build should file a research check against lesson 6.
- `broadcasting-break-in`, lesson `landscape-and-roles`: names "camera and AV operators" and "broadcast, sound, and video technicians" from BLS; it never names A1 or A2. CREW-08 adds the chair names.
- `sound-craft` (CREW-02): lesson `meters-tone-and-gain` (VU meter band from a 1987 Army course, "three primary functions" of a console, the 1000 Hz tone); lesson `placing-a-lav-pointing-a-shotgun`; lesson `who-does-sound-work` (O*NET 27-4014.00 and 27-4011.00, Job Zone, unions list). It has no A1, IFB, intercom or LUFS content (searched today), so CREW-08 does not overlap on comms or loudness.
- `cables-and-connectors` (CREW-00):
  - `balanced-lines-the-xlr-and-phantom-power` (16): balanced lines, XLR pin-out, phantom power.
  - `same-plug-different-signal` (17): Clear-Com party-line on 3-pin XLR (pin 2 at +30 V DC), 200-ohm termination and the 2-wire to 4-wire hybrid, CCU intercom pins, 4-pin and 5-pin headset pin-outs. CREW-08 links here for the party-line wire and teaches only how the system is used.
  - `aes3-word-clock-and-madi` (18): AES3, AES3id, word clock, MADI channel counts.
  - `network-cable-categories-and-poe` (19) and `dante-st-2110-and-the-media-network` (20): Dante switch settings, AES67 and PTP, why media networks are separate. CREW-08 names Dante and AES67 only as the postings ask for them.
  - `dmx-rs-422-tally-and-usb` (25): GPI and tally contact closures, Eclipse GPI input figures, Clear-Com IFB program switching by GPI or panel key.
  - `rf-coax-wireless-mics-and-ifb` (26): 50-ohm RF coax and connectors, 47 C.F.R. § 15.236 (power, bands, channel width), and a short IFB note (Clear-Com PTX-3 fed from a matrix port). CREW-08 links for RF and goes deeper on IFB workflow only.
- `cinema-look-camera-rig` (CREW-04): names the A1 for camera delay (per the brief); link, do not restate.

## Not reachable

| What | Result on October 26, 2026 | Effect |
|---|---|---|
| FCC "Loud Commercials" page (https://www.fcc.gov/media/policy/loud-commercials) | HTTP 403 to a plain request; not retried | The rule text was read in the eCFR instead (§ 73.682(e)); the FCC's consumer guidance was not |
| FCC "Wireless Microphones" page (https://www.fcc.gov/wireless-microphones) | HTTP 403; not retried | No FCC guidance on wireless mics in this pack; CREW-00 recorded the same refusal |
| EBU R 128 publication page (https://tech.ebu.ch/publications/r128) | HTTP 403 | The R 128 PDF at tech.ebu.ch/docs/r/r128.pdf answered and was used |
| eCFR web page for § 74.801 (https://www.ecfr.gov/current/title-47/...) | Redirected to a "Request Access" page at unblock.federalregister.gov; not pursued | The eCFR's public renderer API had already answered for the same sections and was used. A person should confirm that use of the official API is acceptable, or read the sections in a browser |
| Audinate Dante Certification page (https://www.audinate.com/learning/training-certification/dante-certification-program) | HTTP 403; not retried | Audinate's own getdante.com page answered and was used |
| RTS wireless IFB page (https://products.rtsintercoms.com/r/wireless-ifb/) | HTTP 404 (dead link from RTS's own menu) | No RTS IFB product facts |
| Riedel `/en/products-solutions/...` and SSL `/products/system-t` URLs | HTTP 404 (guessed paths, not refusals) | Correct paths found from each site's home page |
| NBCUniversal and Paramount Workday tenants | HTTP 422 (guessed tenant names, not refusals) | No postings from these employers |
| Calrec Audio Primer download link on Calrec's training page | Not linked in the page's HTML | The primer PDF was found at a Calrec URL and read |

No site was retried with a changed user agent, a proxy or a cached copy. Wikipedia appeared in one search result and was not opened.

## Research checks still open

1. **No primary A1 posting.** On October 26, 2026 no posting titled A1 was open on the Fox, Disney (ESPN) or Warner Bros. Workday boards or the NFL Greenhouse board. The best A1 statement is a closed ESPN posting on an aggregator (removed March 4, 2025). SVG (2024b) reports an NFL "audio mixer" listing requiring "five years' experience and a four-year degree"; it was not found today. Recheck the boards before the course ships and in spring 2027.
2. **What is an A3?** Named once (NFL, 2026a), defined nowhere. A practitioner or a posting must define it before a lesson does.
3. **"Audio guarantee," "submixer," "FX submixer," "RF manager":** SVG uses these titles without definitions. The qualified reviewer (an A1) should supply or confirm definitions, or lessons should present them as titles only.
4. **Is the NFL Audio 2's $65.47 hourly?** No unit in the posting.
5. **Fox Sports postings.** All Fox audio postings read today are FOX News Media or FOX Television Stations. Search the Fox board again for a Fox Sports audio role before the course says anything about Fox Sports hiring.
6. **Employer name on the Warner Bros. board.** The two postings say "Storytelling is, and will always be, the heart of what we do at Skydance" and "About Skydance," while the benefits text names "Warner Bros. Discovery." The references use "Skydance"; a person should confirm the employer of record.
7. **The ESPN posting's date.** The aggregator copy shows a trailing timestamp "2/11/2025 4:58:47 PM" and "removed by the employer on 3/4/2025"; whether 2/11/2025 is the publish date is not stated. Cited as n.d.
8. **FCC pages** (loud commercials, wireless microphones) refused plain requests; a person should save them if a lesson needs the FCC's own consumer wording.
9. **eCFR access:** the website showed a bot check while the public API answered. Confirm the API reading stands, or re-read §§ 73.682, 73.8000, 74.801 and 74.832 in a browser.
10. **A/85 editions:** the FCC rule incorporates A/85:2013; ATSC's current edition is A/85:2026-07. Both give -24 LKFS. A reviewer should confirm whether the FCC has proposed updating the incorporated edition.
11. **SDI embedded channel counts as a standard:** only AJA's product pages (16 channels per SDI connection) were read; the SMPTE standard (ST 299) is paywalled. Teach the count as AJA's, not as the standard's, unless a free SMPTE or maker document states it.
12. **Dated trade facts:** the NFL player-mic arrangement (2013, 2022), the separate-fader statement (2013) and the 6 dB announcer level (2018) may have changed. Recheck against a 2026 source before a lesson uses them.
13. **Calrec Audio Primer** is Issue 5, © 2018 (document number 926 134 per its file name). Check whether a later issue exists.
14. **`broadcasting-break-in` lesson 6's "-6 to -3 dBFS"** has no supporting source; file a research check there.
15. **Which CREW-00 lesson covers belt packs** (carried over from CREW-07, check 13): lesson 17 covers headset pin-outs and lesson 26 covers IFB transmitters; confirm before linking "belt pack" duties.
16. **One maker interview as the ladder source:** the first-person A2 to A1 account (SVG, 2025) is a Calrec craft interview; ask the reviewer whether it is sponsored content and whether to cite it.

## References

Advanced Television Systems Committee. (n.d.). *A/85, techniques for establishing and maintaining audio loudness for digital television* [Document page]. Retrieved October 26, 2026, from https://www.atsc.org/atsc-documents/a85-techniques-for-establishing-and-maintaining-audio-loudness-for-digital-television/

Advanced Television Systems Committee. (2013). *ATSC recommended practice: Techniques for establishing and maintaining audio loudness for digital television* (A/85:2013). Retrieved October 26, 2026, from https://www.atsc.org/wp-content/uploads/2021/04/A85-2013.pdf

Advanced Television Systems Committee. (2026a). *Annex M: Loudness and true peak quick reference* (A/85:2026-07). Retrieved October 26, 2026, from https://www.atsc.org/wp-content/uploads/2026/07/A85-2026-07-Annex-M.pdf

Advanced Television Systems Committee. (2026b). *ATSC recommended practice: Techniques for establishing and maintaining audio loudness for digital television* (A/85:2026-07). Retrieved October 26, 2026, from https://www.atsc.org/wp-content/uploads/2026/07/A85-2026-07.pdf

AJA Video Systems. (n.d.-a). *OG-12G-AM: 16-channel AES/EBU audio embedder/disembedder* [Product page]. Retrieved October 26, 2026, from https://www.aja.com/products/og-12g-am

AJA Video Systems. (n.d.-b). *OG-DANTE-12GAM: openGear 12G-SDI/Dante 64-channel embedder/disembedder* [Product page]. Retrieved October 26, 2026, from https://www.aja.com/products/og-dante-12gam

Audinate. (n.d.). *Dante certification program*. Retrieved October 26, 2026, from https://www.getdante.com/resources/training/dante-certification-program/

Calrec Audio. (n.d.-a). *Artemis* [Product page]. Retrieved October 26, 2026, from https://calrec.com/shop/broadcast-audio-consoles/artemis/

Calrec Audio. (n.d.-b). *Hydra2* [Product page]. Retrieved October 26, 2026, from https://calrec.com/shop/audio-networking/hydra2/

Calrec Audio. (n.d.-c). *Outside broadcast (OB)* [Applications page]. Retrieved October 26, 2026, from https://calrec.com/outside-broadcast/

Calrec Audio. (2018). *Calrec audio primer: Basic introduction to Calrec functionality and applications* (Issue 5). Retrieved October 26, 2026, from https://calrec.com/wp-content/uploads/2018/01/Calrec-Audio-Primer-926-134-Iss-5.pdf

Clear-Com. (n.d.-a). *Eclipse HX matrix intercom systems* [Product page]. Retrieved October 26, 2026, from https://www.clearcom.com/Products/Products-By-Name/Eclipse-HX

Clear-Com. (n.d.-b). *Matrix solutions* [Product category page]. Retrieved October 26, 2026, from https://www.clearcom.com/Products/Products-by-Technology/Matrix-Solutions

Clear-Com. (n.d.-c). *Partyline communications* [Product category page]. Retrieved October 26, 2026, from https://www.clearcom.com/Products/Products-by-Technology/Partyline-Communications

Clear-Com. (2019, May 27). *How to dry out an IFB signal into a line level 4wire audio signal*. Clear-Com Solution Finder. Retrieved October 26, 2026, from https://clear-com.atlassian.net/wiki/spaces/SF/pages/175243329

Clear-Com. (2020a, September 24). *Destination listen: How to listen to an IFB's composite output (IFB destination's source and the talent interrupt) on a Eclipse matrix's panel*. Clear-Com Solution Finder. Retrieved October 26, 2026, from https://clear-com.atlassian.net/wiki/spaces/SF/pages/845054010

Clear-Com. (2020b, April 24). *What is the difference between a partylines (PL) and a fixed groups (FG)? And what is a sort group?* Clear-Com Solution Finder. Retrieved October 26, 2026, from https://clear-com.atlassian.net/wiki/spaces/SF/pages/323813421

Clear-Com. (2026a, July 1). *Arcadia: What is IFB and how to make it work*. Clear-Com Solution Finder. Retrieved October 26, 2026, from https://clear-com.atlassian.net/wiki/spaces/SF/pages/4179558403

Clear-Com. (2026b, February 18). *Matrix: MCR / sound operator monitoring of IFBs using DynamEC*. Clear-Com Solution Finder. Retrieved October 26, 2026, from https://clear-com.atlassian.net/wiki/spaces/SF/pages/4401790989

Clear-Com. (2026c, August 19). *Wireless: IFB receiver options (wired and wireless)*. Clear-Com Solution Finder. Retrieved October 26, 2026, from https://clear-com.atlassian.net/wiki/spaces/SF/pages/4790059023

Daley, D. (2013, February 26). *NFL season: On-field audio rises to a new level*. Sports Video Group. Retrieved October 26, 2026, from https://www.sportsvideo.org/2013/02/26/nfl-season-on-field-audio-rises-to-a-new-level/

Daley, D. (2018, September 21). *Inside NBC Sports' all-encompassing audio production for Sunday Night Football*. Sports Video Group. Retrieved October 26, 2026, from https://www.sportsvideo.org/2018/09/21/inside-nbc-sports-all-encompassing-audio-production-for-sunday-night-football/

Daley, D. (2022, October 5). *Small changes make substantial differences in NFL audio*. Sports Video Group. Retrieved October 26, 2026, from https://www.sportsvideo.org/2022/10/05/small-changes-make-substantial-differences-in-nfl-audio/

Daley, D. (2023, December 1). *Broadcast audio's A2s are key in sports production*. Sports Video Group. Retrieved October 26, 2026, from https://www.sportsvideo.org/2023/12/01/broadcast-audios-a2s-are-key-in-sports-production/

Daley, D. (2024a, January 12). *NFL playoffs 2024: Broadcasters to bring out their A(udio) games*. Sports Video Group. Retrieved October 26, 2026, from https://www.sportsvideo.org/2024/01/12/nfl-playoffs-2024-broadcasters-to-bring-out-their-audio-games/

Daley, D. (2024b, September 11). *Tech focus: Training, part 1 [dash] As broadcast sports' A1 cohort ages out, audio looks for solutions*. Sports Video Group. Retrieved October 26, 2026, from https://www.sportsvideo.org/2024/09/11/tech-focus-training-part-1-as-broadcast-sports-a1-cohort-ages-out-audio-looks-for-solutions/

Daley, D. (2024c, September 11). *Tech focus: Training, part 2 [dash] A view from the audio compartment*. Sports Video Group. Retrieved October 26, 2026, from https://www.sportsvideo.org/2024/09/11/tech-focus-training-part-2-a-view-from-the-audio-compartment/

Daley, D. (2026, October 23). *FOX Sports gives Series sound a refresh with new people on the audio team, new parabolics*. Sports Video Group. Retrieved October 26, 2026, from https://www.sportsvideo.org/2026/10/23/fox-sports-gives-series-sound-a-refresh-with-new-people-on-the-audio-team-new-parabolics/

Definitions, 47 C.F.R. § 74.801 (2026). Electronic Code of Federal Regulations, up to date as of October 23, 2026. Retrieved October 26, 2026, from https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-47?part=74&section=74.801

ESPN. (n.d.). *Studio audio operator* [Job posting, filled; aggregator copy]. EntertainmentCareers.Net. Retrieved October 26, 2026, from https://www.entertainmentcareers.net/espn/studio-audio-operator/job/484628

European Broadcasting Union. (2023). *Loudness normalisation and permitted maximum level of audio signals* (EBU R 128-2023). Retrieved October 26, 2026, from https://tech.ebu.ch/docs/r/r128.pdf

FOX News Media. (2026a, October 21). *Broadcast production engineer* [Job posting]. Workday. Retrieved October 26, 2026, from https://fox.wd1.myworkdayjobs.com/Domestic/job/Washington-District-of-Columbia-USA/Broadcast-Production-Engineer_R50025362

FOX News Media. (2026b, October 19). *Freelance A2/audio assistant* [Job posting]. Workday. Retrieved October 26, 2026, from https://fox.wd1.myworkdayjobs.com/Domestic/job/New-York-New-York-USA/Freelance-A2-Audio-Assistant_R50034126

FOX News Media. (2026c, September 22). *Freelance audio operator* [Job posting]. Workday. Retrieved October 26, 2026, from https://fox.wd1.myworkdayjobs.com/Domestic/job/Washington-District-of-Columbia-USA/Freelance-Audio-Operator_R50033869

FOX News Media. (2026d, October 7). *Freelance studio/field technician* [Job posting]. Workday. Retrieved October 26, 2026, from https://fox.wd1.myworkdayjobs.com/Domestic/job/Washington-District-of-Columbia-USA/Freelance-Studio-Field-Technician_R50033683

FOX Television Stations. (2026, October 15). *Studio technician/technical director* [Job posting]. Workday. Retrieved October 26, 2026, from https://fox.wd1.myworkdayjobs.com/Domestic/job/Washington-District-of-Columbia-USA/Studio-Technician-Technical-Director_R50034090-1

Incorporation by reference, 47 C.F.R. § 73.8000 (2026). Electronic Code of Federal Regulations, up to date as of October 23, 2026. Retrieved October 26, 2026, from https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-47?part=73&section=73.8000

Lawo. (n.d.). *KICK: Automated close-ball audio for sports* [Product page]. Retrieved October 26, 2026, from https://lawo.com/products/kick/

Licensing requirements and procedures, 47 C.F.R. § 74.832 (2026). Electronic Code of Federal Regulations, up to date as of October 23, 2026. Retrieved October 26, 2026, from https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-47?part=74&section=74.832

National Football League. (n.d.). *nflcareers job board* [Greenhouse public job board API]. Retrieved October 26, 2026, from https://boards-api.greenhouse.io/v1/boards/nflcareers/jobs

National Football League. (2026a, June 26). *Seasonal part-time audio 2* [Job posting]. Greenhouse. Retrieved October 26, 2026, from https://job-boards.greenhouse.io/nflcareers/jobs/5279619008

National Football League. (2026b, September 21). *Seasonal senior coordinator, studio technical operations* [Job posting]. Greenhouse. Retrieved October 26, 2026, from https://job-boards.greenhouse.io/nflcareers/jobs/5427937008

Riedel Communications. (n.d.-a). *Artist* [Product page]. Retrieved October 26, 2026, from https://www.riedel.net/intercom/artist/

Riedel Communications. (n.d.-b). *Bolero* [Product page]. Retrieved October 26, 2026, from https://www.riedel.net/intercom/bolero/

Riedel Communications. (n.d.-c). *SmartPanels* [Product page]. Retrieved October 26, 2026, from https://www.riedel.net/intercom/smartpanels/

Ross Video. (n.d.). *Audio mixer* [Acuity 15.0 help topic, special custom control events]. Retrieved October 26, 2026, from https://help.rossvideo.com/acuity/Topics/Operation/CustomControls/Special-AMixer.html

RTS. (n.d.-a). *Digital matrix intercom systems* [Product page]. Retrieved October 26, 2026, from https://rtsintercoms.com/products/digital-matrix-intercom-systems/

RTS. (n.d.-b). *Partyline intercom systems* [Product page]. Retrieved October 26, 2026, from https://rtsintercoms.com/products/partyline-intercom-systems/

Shure. (n.d.). *All about wireless: Intermodulation distortion*. Retrieved October 26, 2026, from https://www.shure.com/en-US/insights/all-about-wireless-intermodulation-distortion

Skydance. (2026a, October 21). *Live events technical manager (live sports & entertainment)* [Job posting]. Warner Bros. careers, Workday. Retrieved October 26, 2026, from https://warnerbros.wd5.myworkdayjobs.com/global/job/GA-Atlanta-1050-Techwood-Drive-NW/Live-Events-Technical-Manager--Live-Sports---Entertainment-_R000108693

Skydance. (2026b, October 21). *Remote operations center specialist (live sports & entertainment)* [Job posting]. Warner Bros. careers, Workday. Retrieved October 26, 2026, from https://warnerbros.wd5.myworkdayjobs.com/global/job/GA-Atlanta-1050-Techwood-Drive-NW/Remote-Operations-Center-Specialist_R000108691-1

Solid State Logic. (n.d.-a). *Audio consoles* [System T broadcast product page]. Retrieved October 26, 2026, from https://solidstatelogic.com/broadcast/audio-consoles

Solid State Logic. (n.d.-b). *S500* [Product page]. Retrieved October 26, 2026, from https://solidstatelogic.com/products/s500

Sony. (n.d.). *Configuring AFV (audio follow video)* [M2L-X help guide]. Retrieved October 26, 2026, from https://helpguide.sony.net/pro/m2l-x/v1/en/contents/AFV_settings.html

Sports Video Group. (2025, February 7). *Calrec craft interview with Jamie McCombs, Fox Sports audio consultant / Sr. audio*. Retrieved October 26, 2026, from https://www.sportsvideo.org/2025/02/07/calrec-craft-interview-with-jamie-mccombs-fox-sports-audio-consultant-sr-audio/

Transmission of commercial advertisements by television broadcast station, 47 C.F.R. § 73.682(e) (2026). Electronic Code of Federal Regulations, up to date as of October 23, 2026. Retrieved October 26, 2026, from https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-47?part=73&section=73.682

Yeary, J. (2018, April 2). *The new reality of wireless frequency coordination*. TV Technology. Retrieved October 26, 2026, from https://www.tvtechnology.com/opinions/the-new-reality-of-wireless-frequency-coordination
