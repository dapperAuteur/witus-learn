# Cables and Connectors (CREW-00): Power and Craft Facts

**Researched:** October 26, 2026. Every source tagged V below was fetched and read that day.

**Scope.** Outline section 7 (power: connectors, feeders, cords, the law and the licence, GFCI and wet locations) and outline section 9 (craft: coiling, labeling, runs and ramps, testers, fault finding, the kit). Research tier 2. Section 7 is electrical safety: the build may teach what a connector is, what the rules say and when to stop, and never how to tie in, open a panel or build a feeder (brief section 5).

**Tags.** **V** = read in a page or PDF fetched on October 26, 2026 (a search snippet never counts). **I** = inferred from V facts, with the reasoning written out; a lesson may teach it only with the reasoning shown. **A** = assumed; never to be taught.

**How regulations were read.** osha.gov returned 403 (see "Not reachable"). Every 29 CFR paragraph below was read in the official eCFR point-in-time text (Title 29, current to October 22, 2026), fetched through the eCFR's public API. Quotations are short and carry the exact paragraph.

**Paywalled standards.** NFPA 70 (NEC), NEMA WD 6 and UL standards were not read. Nothing below quotes or reconstructs their text. Where a free page names an NEC article, the fact is what that page says.

---

## Section 7. Power

### 7.1 Straight-blade (Edison) and twist-lock: what the NEMA codes mean

| Fact | Tag | Source |
|---|---|---|
| NEMA designations have four identifiers: a blank or the letter L, a voltage number, an amperage number, and P or R | V | Interpower (n.d.), "NEMA Nomenclature" |
| "L" marks a locking device; no letter means a non-locking, straight-blade device | V | Interpower (n.d.) |
| The first number "determines the voltage rating": 5 is 125 V AC grounded, 6 is 250 V AC grounded, 14 is 125/250 V AC single-phase three-pole four-wire, 21 is 120/208 V AC three-phase five-wire four-pole | V | Interpower (n.d.) |
| The number after the voltage code is the amperage rating; P is a plug and R is a receptacle | V | Interpower (n.d.) |
| NEMA 5-15R: 15 A, 125 V AC, 2-pole, 3-wire, self-grounding duplex receptacle | V | Leviton (n.d.-g), product 5252, Technical Information |
| NEMA 5-20R: 20 A, 125 V AC, 2-pole, 3-wire | V | Leviton (n.d.-h), product 5362, Technical Information |
| NEMA L5-20R: 20 A, 125 V, 2P, 3W, locking, grounding | V | Leviton (n.d.-a), product 2310, description line |
| NEMA L5-30R: 30 A, 125 V, 2P, 3W, locking, grounding | V | Leviton (n.d.-b), product 2610, description line |
| NEMA L6-30R: 30 A, 250 V, 2P, 3W, locking, grounding | V | Leviton (n.d.-c), product 2620, description line |
| NEMA L14-30R: 30 A, 125/250 V, 3P, 4W, locking, grounding | V | Leviton (n.d.-d), product 2710, description line |
| NEMA L21-30R and L21-30P: 30 A, 120/208 V three-phase Y, 4P, 5W, locking, grounding | V | Leviton (n.d.-e), product 2810; Leviton (n.d.-f), product 2811 |
| Leviton's locking-device wiring chart lists L5 at 125 V, L6 at 250 V, L14 at 125/250 V grounding and L21 at 120/208 V three-phase Y grounding | V | Leviton (n.d.-i), page 1, "3 Wire" and "4 & 5 Wire Wiring Chart" headers (column order read left to right) |
| Leviton's locking-receptacle instruction sheet opens: "TO AVOID FIRE, SHOCK, OR DEATH, TURN OFF POWER AT CIRCUIT BREAKER OR FUSE AND TEST THAT THE POWER IS OFF BEFORE WIRING!" and "If you are not sure about any part of these instructions, consult an electrician." | V | Leviton (n.d.-i), page 1, WARNINGS |
| Receptacles, cord connectors and plugs "shall be constructed so that no receptacle or cord connector will accept an attachment plug with a different voltage or current rating than that for which the device is intended", except that a 20 A T-slot receptacle may accept a 15 A plug of the same voltage | V | 29 C.F.R. § 1910.305(j)(2)(ii) |
| 15 A and 20 A plugs "shall be installed so that their prongs, blades, or pins are not energized unless inserted into an energized receptacle" | V | 29 C.F.R. § 1910.305(j)(2)(i) |
| Before a plug is connected, "the relationship of the plug and receptacle contacts shall first be checked to ensure that they are of proper mating configurations" | V | 29 C.F.R. § 1910.334(a)(2)(iii) |
| Plugs and receptacles may not be altered "to allow the grounding pole of a plug to be inserted into slots intended for connection to the current-carrying conductors"; adapters that interrupt the grounding connection "may not be used" | V | 29 C.F.R. § 1910.334(a)(3)(ii) and (iii) |
| "Locking-type connectors shall be properly secured after connection." | V | 29 C.F.R. § 1910.334(a)(5)(iii) |
| Why the shapes differ: because OSHA requires that a device not accept a plug of a different voltage or current rating, a different NEMA shape is a physical lock-out of the wrong voltage or current, so forcing or adapting a plug defeats it | I | From § 1910.305(j)(2)(ii) and § 1910.334(a)(3)(ii) |
| The NEMA standard that sets these shapes is ANSI/NEMA WD 6 | A | Seen only in a search snippet; NEMA's page redirected to its store (see "Not reachable"). Do not name the standard's edition |

### 7.2 Stage pin (2P&G)

| Fact | Tag | Source |
|---|---|---|
| Union Connector calls its 2P&G stage pin devices "the standard electrical connector used in theatrical lighting" | V | Union Connector (n.d.-a) |
| "The 20A pin connector devices are rated for 120V." | V | Union Connector (n.d.-a) |
| "The 60A and 100A stage pin devices are available in either a 120V or 240V rating." | V | Union Connector (n.d.-a) |
| 20 A bodies are molded thermoset; 60 A and 100 A bodies are machined electrical-grade phenolic | V | Union Connector (n.d.-a) |
| ANSI E1.24 (2012, reaffirmed 2021), *Dimensional Requirements for Stage Pin Connectors*, gives mating requirements, contact set-backs and marking; electrical reliability and flammability are outside its scope and covered by other standards such as UL 498 | V | Entertainment Services and Technology Association [ESTA] (n.d.), TSP published documents, entry "ANSI E1.24 - 2012 (R2021)" |
| ESTA's standards downloads "are free" (with an end-user licence) | V | ESTA (n.d.), page header text |
| Which pin is ground on 20 A versus 60 A and 100 A stage pin | A | Seen only on a wiki and forum. Not taught until ANSI E1.24 or a maker sheet is read |
| Whether a 20 A stage pin is ever rated above 120 V | A | A forum post claimed a dual rating; the maker page read today says 120 V. Teach 120 V for 20 A, per Union Connector |

### 7.3 Neutrik powerCON (blue in, grey out) and powerCON TRUE1

| Fact | Tag | Source |
|---|---|---|
| powerCON is a "Lockable 3 pole single phase equipment (AC) connector", rated 20 A / 250 V AC | V | Neutrik (n.d.-a), product guide p. 10 |
| powerCON "offers power-in (blue) and power-out (grey) versions with different keying to avoid the possibility of intermating" | V | Neutrik (n.d.-a), p. 10; also Neutrik (n.d.-f) |
| "With the two non-interchangeable types of connectors (A type and B type) it is impossible to produce a short circuit. Mating connectors (combination) are identified by mechanical keyways and by color." | V | Neutrik (n.d.-a), p. 11, "Combination & Keyways" |
| "ATTENTION: The technical data of the powerCON connectors refer to connectors without breaking capacity, meaning connecting devices not to be engaged and disengaged in normal use when live or under load." | V | Neutrik (n.d.-a), p. 11 |
| NAC3FCA (blue, power-in cable connector): "This powerCON is a connector without breaking capacity, i.e. it must not be connected or disconnected under load or live!" | V | Neutrik (n.d.-b) |
| NAC3FCB (grey, power-out cable connector) carries the same statement | V | Neutrik (n.d.-c) |
| NAC3MPA-1 (blue chassis connector, power-in): "without breaking capacity" and "should not be connected or disconnected under load or live" | V | Neutrik (n.d.-g) |
| NAC3FCA, NAC3FCB and NAC3MPA-1 are marked discontinued on Neutrik's pages, with named successors | V | Neutrik (n.d.-b), (n.d.-c), (n.d.-g) |
| The successor NAC3FXXA-W-S (blue, power-in) lists "Circuit Breaking Capability when mated with powerCON XX Series receptacles", IP20, 16 A 250 V AC (EN) and 20 A 127 V AC (cUL) | V | Neutrik (n.d.-f) |
| powerCON TRUE1 (NAC3FX-W): "a locking waterproof 16 A true mains connector" (USA 20 A), 250 V AC, IP65 mated, with breaking capacity; it "can be connected or disconnected under load or live" | V | Neutrik (n.d.-d) |
| powerCON TRUE1 TOP: "True mains connector with breaking capacity (CBC)", "Designed to be engaged and disengaged in normal use when live or under load", 16 A (ENEC, VDE) / 20 A (UL), IP65 mated | V | Neutrik (n.d.-a), p. 4 |
| The TRUE1 cable connector manual says "To be installed by qualified person only." and, for products not on its list, "the suitability and safety must be assessed before commissioning" | V | Neutrik (2025), pages 1 and 5 |
| TRUE1 "must not be cleaned while under load" and only while "not connected to any voltage" | V | Neutrik (2025), section D, Cleaning |
| Whether a TRUE1 connector mates with a classic blue or grey powerCON | A | No Neutrik page read today says. Do not teach either way |
| Teaching rule: a learner reads the exact part's page. A classic powerCON without breaking capacity is never plugged or unplugged live; TRUE1 and some newer parts are rated for it | I | From the five Neutrik pages above, which differ by part |

### 7.4 Cam-type single-pole connectors (Series 16)

| Fact | Tag | Source |
|---|---|---|
| Eaton's Cam-Lok single-pole connectors "are designed to meet NEC code requirements for listed connectors that are of the locking type" and the E-Z series is "rated at 600 Volts up to 400 Amperes continuous" | V | Eaton (2017), IM 1012, p. 1 |
| To mate: "fully engage male to female and rotate 1/3 of a turn clockwise"; to unmate, rotate the male counterclockwise 1/3 turn and pull straight out | V | Eaton (2017), p. 1, OPERATION |
| Eaton recommends visual, electrical and mechanical checks of all components on a regular schedule, "at least once per year" | V | Eaton (2017), p. 1, MAINTENANCE note |
| A Lex 100 A five-wire feeder extension uses five 16 Series cam connectors in black, white, red, blue and green on #2 Type SC banded feeder cable, banded every 2 ft, cULus listed, for theatrical, film and television, concert and live-event markets | V | LEX Innovations (n.d.-b), FBL305W |
| Lex cam adapters come in black, red, blue, white, green, brown, orange and yellow, and a male-to-male adapter is a way of "reversing the gender" on 16 Series female outlets | V | LEX Innovations (n.d.-c), MMM adapter |
| A Lex company switch's cam outlets are "color-coded, (H,H,H,N,G)" for 120/208Y V, and "Reverse Ground and Neutral are also available" | V | LEX Innovations (n.d.-d), CS-100F-C5DS1-BLK |
| Union Connector lists "Reverse Neutral/Ground" as an option on a Series 16 company switch, with "Laser engraved cam identifiers" and a "Cable connection warning label per NEC Art 520" | V | Union Connector (2016), CSC-4020-CSP-3R data sheet |
| Lex's panel warning label: "Plug connection should be in the following order: 1) Equipment grounding conductor connectors, 2) Grounded circuit conductor connectors, and 3) Ungrounded conductor connectors. Disconnection should be in the reverse order" | V | Lex Products (2020), LM-PIP400, p. 6, warning label |
| The same manual names the colors in its steps: ground is green, neutral is white, then "the Phase (hot) connections" | V | Lex Products (2020), pp. 7 to 8, Steps 8 and 11 |
| Lex: "DO NOT ATTEMPT CONNECTION WHILE CIRCUITS ARE LIVE" | V | Lex Products (2020), p. 7, WARNING |
| Lex DANGER label: "Any terminal may be energized when any cable is connected. De-energize cables at the generator prior to connecting or removing any connectors" | V | Lex Products (2020), p. 6 |
| Lex: installation of the panel "should be carried out by qualified personnel in accordance with local electrical codes" | V | Lex Products (2020), p. 5, Installation |
| OSHA: "Cable connectors not of the load-break type, fuses, terminal lugs, and cable splice connections may not be used" for opening or closing circuits under load, "except in an emergency" | V | 29 C.F.R. § 1910.334(b)(1) |
| Union Connector's generator connection box mounts Series 16 cam inlets on a dead-front panel "for safe connection of portable cables by qualified personnel" | V | Union Connector (n.d.-d) |
| Union Connector's SafeCam company switch "activates shunt trip whenever a plug is disconnected from a receptacle", prevents the main breaker "from being closed if there is an exposed receptacle", and "automatically opens the main circuit breaker if a plug is removed under load" | V | Union Connector (n.d.-c) |
| Union Connector describes a company switch as "a specialized distribution panel" used by venues such as theaters and arenas to power portable equipment | V | Union Connector (n.d.-b) |
| The three hots on a 120/208 V five-wire set are the black, red and blue connectors | I | The Lex five-wire set uses black, white, red, blue, green (LEX Innovations, n.d.-b); Lex's manual names green as ground and white as neutral (Lex Products, 2020); a 120/208Y set is H,H,H,N,G (LEX Innovations, n.d.-d). The three colors left are the three hots. No source read today maps black, red and blue to A, B and C, and none says the colors are required by code |
| Why reverse gender exists: if neutral and ground connectors are the opposite gender from the hots, a hot cannot be mated straight into a neutral or ground | I | From "reversing the gender" adapters and "Reverse Neutral/Ground" options (LEX Innovations, n.d.-c, n.d.-d; Union Connector, 2016). The reason is inferred; no maker page read today states it. A turnaround adapter defeats it |
| The gender trap: a reverse-gender system and a same-gender system do not mate without turnarounds, and a turnaround can let a hot reach the wrong socket | I | From the same pages. Teach as a reason to stop and ask, not as a procedure |

### 7.5 Feeder cable and portable cord types

| Fact | Tag | Source |
|---|---|---|
| Type SC is "STAGE & LIGHTING CABLE", 600 V, 105 °C, "UL listed Type SC per NEC Article 520 and 530, indoor and outdoor locations" | V | LEX Innovations (n.d.-a), "Entertainment Cable" |
| Lex lists Type SC for "Portable power and lighting applications in the entertainment industry including motion picture, television", theaters and stages | V | LEX Innovations (n.d.-a) |
| Lex also sells Type W portable power cable (600/2000 V, 90 °C wet or dry) for "industrial, mining and entertainment applications" | V | LEX Innovations (n.d.-a), Type W |
| Southwire's 600 V SOOW cord is "designed for extra hard usage" on equipment, tools, portable lights and power extensions; EPDM insulation, CPE jacket; rated -40 °C to 90 °C; sunlight, water, oil and weather resistant; references UL 62 and NEC Article 400 | V | Southwire (n.d.), SPEC 70000 |
| OSHA lists Types S, SC, SCE, SCT, SE, SEO, SEOO, SJ, SJE, SJEO, SJEOO, SJO, SJT, SJTO, SJTOO, SO, SOO, ST, STO and STOO cords, and Types G, G-GC, PPE and W cables, as types that "shall be durably marked on the surface at intervals not exceeding 610 mm (24 in.) with the type designation, size, and number of conductors" | V | 29 C.F.R. § 1910.305(g)(2)(i) |
| The construction rule's note gives examples of hard-usage cord: hard service (S, ST, SO, STO) and junior hard service (SJ, SJO, SJT, SJTO) | V | 29 C.F.R. § 1926.405(a)(2)(ii)(J), Note |
| Flexible cords and cables "shall be approved for conditions of use and location" | V | 29 C.F.R. § 1910.305(g)(1)(i) |
| What the letters S, O, O and W stand for | A | Southwire's page uses "Type SOOW" without decoding it; distributor blogs differ. Not taught |

### 7.6 Extension cords, and why a daisy chain is wrong

| Fact | Tag | Source |
|---|---|---|
| OSHA's "use of equipment" rule applies to "cord- and plug-connected equipment, including flexible cord sets (extension cords)" | V | 29 C.F.R. § 1910.334(a) |
| "Listed or labeled equipment shall be installed and used in accordance with any instructions included in the listing or labeling." | V | 29 C.F.R. § 1910.303(b)(2) |
| Brookhaven National Laboratory: listed extension cords carry conditions of use near the plug, typically "do not plug one extension cord in to another", do not run through doorways or holes, and do not unplug by pulling the cord | V | Brookhaven National Laboratory (2007), para. 2 |
| Brookhaven, summarizing UL's guidance on power strips (relocatable power taps): they are intended to plug directly into a permanently installed receptacle and "are not intended to be series connected (daisy chained) to other relocatable power taps or to extension cords" | V | Brookhaven National Laboratory (2007), para. 4 |
| A daisy chain breaks the rule because the listing's own instructions forbid it, and § 1910.303(b)(2) requires following those instructions | I | From § 1910.303(b)(2) and Brookhaven (2007). The OSHA interpretation letter that says this was not read (osha.gov 403) |
| CPSC: an extension cord used on a permanent basis is a hazard; "Extension cords are not as safe as permanent house wiring" | V | U.S. Consumer Product Safety Commission [CPSC] (2008), Pub. 513, "Check Electrical Cords" |
| CPSC: if a cord, plug or outlet feels warm it "may be overloaded"; replace an overloaded cord with a higher-capacity one (the checklist gives 16 AWG at 1,375 W and 14 or 12 AWG for heavier loads) | V | CPSC (2008), Pub. 513, same table. Layout is two columns; re-read the PDF page before quoting the numbers |
| CPSC: use cords marked for outdoor use outdoors, and three-prong cords with three-prong products; "Using a 3-prong product with a 2-prong extension cord eliminates the protection" | V | CPSC (2008), Pub. 513, "Check Extension Cords Used Outdoors" |
| CPSC: if a cord is not listed by a nationally recognized testing laboratory (UL, Intertek ETL, CSA), "don't use it" | V | CPSC (n.d.-b), "Safety at Home: Extension Cords" |
| Extension cords on construction sites "shall not be fastened with staples, hung from nails, or suspended by wire"; worn or frayed cords "shall not be used" | V | 29 C.F.R. § 1926.416(e)(1) and (2) |
| Extension cord sets used with portable tools on construction sites "shall be of three-wire type and shall be designed for hard or extra-hard usage" | V | 29 C.F.R. § 1926.405(a)(2)(ii)(J) |
| A feeder is not an extension cord: OSHA defines a feeder as conductors between the service or other supply source and "the final branch-circuit overcurrent device", and a branch circuit as conductors between the final overcurrent device and the outlets | V | 29 C.F.R. § 1910.399, definitions "Feeder" and "Branch circuit" |

### 7.7 The law: OSHA temporary wiring (beyond what *Light on Set* already teaches)

| Fact | Tag | Source |
|---|---|---|
| "Except as specifically modified in this paragraph, all other requirements of this subpart for permanent wiring shall also apply to temporary wiring installations." | V | 29 C.F.R. § 1910.305(a)(2), lead-in |
| "Feeders shall originate in an approved distribution center." | V | 29 C.F.R. § 1910.305(a)(2)(iv)(A) |
| Feeder conductors "shall be run as multiconductor cord or cable assemblies"; single insulated conductors only if installed under (a)(2)(i)(C) (experimental or development work, emergencies) "and if accessible only to qualified persons" | V | 29 C.F.R. § 1910.305(a)(2)(iv)(B) |
| "Branch circuits shall originate in an approved power outlet or panelboard." | V | 29 C.F.R. § 1910.305(a)(2)(v)(A) |
| "No branch-circuit conductor may be laid on the floor." | V | 29 C.F.R. § 1910.305(a)(2)(v)(C) |
| Temporary receptacles "shall be of the grounding type" | V | 29 C.F.R. § 1910.305(a)(2)(vi) |
| "No bare conductors nor earth returns may be used for the wiring of any temporary circuit." | V | 29 C.F.R. § 1910.305(a)(2)(vii) |
| Switches or plug connectors must allow disconnection of all ungrounded conductors of each temporary circuit; multiwire branch circuits need a means to disconnect all ungrounded conductors simultaneously | V | 29 C.F.R. § 1910.305(a)(2)(viii) |
| Cord assemblies "shall be supported in place at intervals that ensure that they will be protected from physical damage" | V | 29 C.F.R. § 1910.305(a)(2)(xi) |
| Construction: temporary lights "shall not be suspended by their electric cords unless cords and lights are designed for this means of suspension" | V | 29 C.F.R. § 1926.405(a)(2)(ii)(F) |
| A "qualified person" is "One who has received training in and has demonstrated skills and knowledge in the construction and operation of electric equipment and installations and the hazards involved"; a person can be qualified for some equipment and "unqualified" for other equipment | V | 29 C.F.R. § 1910.399, "Qualified person" and Note 1 |
| Qualified persons are "those permitted to work on or near exposed energized parts" and must be trained to distinguish exposed live parts, determine their voltage, and know the clearance distances | V | 29 C.F.R. § 1910.332(b)(3) |
| "Only qualified persons may perform testing work on electric circuits or equipment." | V | 29 C.F.R. § 1910.334(c)(1) |
| After a protective device opens a circuit, it "may not be manually reenergized until it has been determined that the equipment and circuit can be safely energized"; repeated manual reclosing "is prohibited" | V | 29 C.F.R. § 1910.334(b)(2) |
| Overcurrent protection "may not be modified, even on a temporary basis" beyond what § 1910.304(e) allows | V | 29 C.F.R. § 1910.334(b)(3) |
| Construction: "In existing installations, no changes in circuit protection shall be made to increase the load in excess of the load rating of the circuit wiring." | V | 29 C.F.R. § 1926.416(c) |
| A single-conductor cam feeder run as temporary wiring sits in a narrow OSHA lane in general industry (only under (a)(2)(i)(C) and only where accessible to qualified persons); how NEC Articles 520, 525, 530 and 590 treat it was not read | I | From § 1910.305(a)(2)(iv)(B). Teach the OSHA wording only; route the rest to the electrician |

### 7.8 NEC Articles 520, 525 and 530 (named only from free NFPA and other pages)

| Fact | Tag | Source |
|---|---|---|
| NFPA's restructure chart lists Article 520 as "Theaters, Audience Areas of Motion Picture and Television Studios, Performance Areas, and Similar Locations" in the 2023 and 2026 editions, proposed to become Article 1904 in 2029 | V | National Fire Protection Association [NFPA] (2026), p. 8, Chapter 19 rows |
| Article 525 is "Carnivals, Circuses, Fairs, and Similar Events" in 2023 and 2026, proposed as 1908 in 2029 | V | NFPA (2026), p. 8 |
| Article 530 is listed as "Motion Picture and Television Studios and Similar Locations" in that chart, proposed as 1910 in 2029 | V | NFPA (2026), p. 8 |
| An NEC Code-Making Panel 15 second revision (submitted October 28, 2021) changed Article 530's title to "Motion Picture and Television Studios and Remote Locations", replacing "the vague term 'similar locations'" | V | NFPA (2021), Second Revision No. 8529, p. 1 |
| The two documents give different titles for Article 530 | I | Compare NFPA (2026) with NFPA (2021). Do not teach either title until the current edition is checked (see open checks) |
| The same chart lists Article 400 "Flexible Cords and Flexible Cables" and Article 590 "Temporary Installations" | V | NFPA (2026), pp. 3 to 4 |
| NFPA's chart says that for free access to the complete current version of NFPA documents, go to nfpa.org/docinfo | V | NFPA (2026), p. 1 |
| CPSC: the NEC "may be adopted into law by states, counties or local jurisdictions for enforcement by inspection authorities and is currently revised every three years" | V | CPSC (n.d.-a), Pub. 099, p. 2 footnote |
| Lex lists Type SC cable as UL listed "per NEC Article 520 and 530" | V | LEX Innovations (n.d.-a) |
| Union Connector company switches carry a "Cable connection warning label per NEC Art 520" | V | Union Connector (2016); Union Connector (n.d.-b) |
| ESTA describes ANSI E1.58 (2017, reaffirmed 2022) as covering "the planning and execution of temporary outdoor portable electrical installations" in line with the intent of NEC Sections 520.10 and 530.6; per ESTA's summary, those sections allow equipment not identified for outdoor use to be used outdoors temporarily only if supervised by qualified personnel while energized and barriered from the public | V (ESTA's words, paraphrased; the NEC text itself was not read) | ESTA (n.d.), entry "ANSI E1.58 - 2017 (R2022)" |
| ESTA's ANSI E1.51 (2024) gives guidance on single-conductor portable power feeder cable for television, film, live performance and events in Canada, "a power distribution technique about which the Canadian Electrical Code is largely silent" | V | ESTA (n.d.), entry "ANSI E1.51 - 2024" |

### 7.9 Who may connect what: the licence

| Fact | Tag | Source |
|---|---|---|
| Minnesota: "Persons other than licensed employees of licensed electrical contractors are only allowed to connect or inter-connect multi-conductor cords and single-conductor cables that are equipped with approved separable multi-pole or single-pole connectors." | V | Minnesota Department of Labor and Industry [MN DLI] (n.d.), p. 2, question 8 |
| Minnesota: licensed employees of licensed electrical contractors "are required to connect or terminate cords and cables that have bare ends, clamps, clips or other types of connections other than approved separable connectors" | V | MN DLI (n.d.), p. 2, question 8 |
| Minnesota: licensed employees of licensed contractors must do "all electrical work on interior or exterior premises wiring systems or any other permanent or fixed electrical infrastructure", even if removed after filming | V | MN DLI (n.d.), p. 2, question 8 |
| Minnesota: portable and vehicle-mounted generators and temporary distribution for filming "are required to be inspected", and "Electrical equipment must not be energized until it has been inspected and approved" | V | MN DLI (n.d.), p. 1, questions 1 and 3 |
| Minnesota adopts the most recent NEC; filming inspections may cover generators, feeders, flexible stage and lighting cables, distribution boxes, and receptacles with GFCI "(if required)" | V | MN DLI (n.d.), p. 3 |
| Oregon issues a Limited Journeyman Stage Electrician (ST) licence through the DCBS Building Codes Division: "Install temporary feeders, branch circuits, and equipment used for the production of shows, exhibits, displays, festivals, conventions, stage, theater, film, or video productions"; "Must be employed by an electrical contractor"; renewal every three years | V | Oregon Secretary of State (2026), licence directory, last updated February 11, 2026 |
| Oregon's rule bars the ST licensee from installing or extending permanent wiring and from installing, maintaining or repairing "service conductors or service equipment" | V (unofficial reproduction) | Or. Admin. R. 918-282-0230 (2005), as reproduced by the Legal Information Institute; confirm on the official Oregon rules site |
| ETCP's Entertainment Electrician exam is for "experienced electricians" and is meant to "validate the competency of the upper third of electricians working in the entertainment industry" | V | Entertainment Technician Certification Program [ETCP] (n.d.-a) |
| A candidate needs 30 points to apply; the exam's content outline includes feeder cables with "single-pole locking connector", "company switch", "temporary tie-in means (e.g., lugs, bus bars, sister lugs)", generators, GFCI protection, the NEC and OSHA | V | ETCP (n.d.-a); ETCP (n.d.-b), items 1.C.5, 3.B.1, 3.B.2, 1.C.2, 1.C.8, 2.A.1, 2.A.3 |
| ETCP's handbook: certification is "the voluntary process by which a nongovernmental organization grants recognition to an individual"; journeyman and master electrician licences earn eligibility points (7 and 10) | V | ESTA (2016), ETCP Candidate Handbook v5.0, PDF p. 5 ("Become ETCP Certified") and PDF p. 9 (eligibility points table) |
| ETCP certification is not an electrical licence and does not by itself let anyone do licensed work | I | The handbook calls it voluntary and nongovernmental (ESTA, 2016), and Minnesota and Oregon tie the work to state licences and contractors (MN DLI, n.d.; Oregon Secretary of State, 2026). No page read today says whether any jurisdiction accepts ETCP in place of a licence |
| Who may connect a company switch in a given venue is set by the state or city licensing rule, the venue and any labor agreement | I | Minnesota and Oregon differ in form (MN DLI, n.d.; Oregon Secretary of State, 2026). Teach "ask the venue and the local authority", not a rule |

### 7.10 GFCI and wet locations

| Fact | Tag | Source |
|---|---|---|
| A GFCI is "A device intended for the protection of personnel that functions to deenergize a circuit or a portion of a circuit within an established period of time when a current to ground exceeds some predetermined value" below what trips the overcurrent device | V | 29 C.F.R. § 1910.399, "Ground-fault circuit-interrupter" |
| CPSC: a GFCI interrupts power when outgoing and returning current differ "by a very small amount (as little as 0.006 amperes)" and is "designed to operate before the electricity can affect your heartbeat" | V | CPSC (n.d.-a), Pub. 099, p. 1 |
| CPSC: a ground fault is "an unintentional electrical path between a power source and a grounded surface" | V | CPSC (n.d.-a), p. 1 |
| CPSC: test every GFCI after installation, at least monthly, after a power failure and per the maker; if the test button does not cut a plugged-in lamp, "Contact a qualified electrician" | V | CPSC (n.d.-a), p. 2, "How to Test" |
| CPSC: portable GFCIs (plug-in units and GFCI extension cords) are for places where installed GFCIs are not practical | V | CPSC (n.d.-a), p. 2, "Portable" |
| Construction sites: the employer uses either GFCIs or an assured equipment grounding conductor program; GFCIs are required on all 120 V, single-phase, 15 A and 20 A receptacle outlets not part of permanent wiring and in use by employees | V | 29 C.F.R. § 1926.404(b)(1)(i) and (ii) |
| The assured program is written, run by designated competent persons, with a visual check before each day's use, continuity and grounding-terminal tests before first use, after repair, after suspected damage ("when a cord set is run over") and at least every 3 months, and recorded "by means of logs, color coding, or other effective means" | V | 29 C.F.R. § 1926.404(b)(1)(iii)(A) to (G) |
| General industry, construction-like activities: all 125 V, single-phase, 15, 20 and 30 A temporary receptacle outlets in use by personnel need GFCI protection; other temporary receptacles also need it, or an assured program where it is not available | V | 29 C.F.R. § 1910.304(b)(3)(ii)(A) to (C) |
| "A cord connector on an extension cord set is considered to be a receptacle outlet if the cord set is used for temporary electric power." | V | 29 C.F.R. § 1910.304(b)(3)(ii)(A), Note 1 |
| A GFCI cord set "connected to the receptacle closest to the source of power" is an acceptable form of protection | V | 29 C.F.R. § 1910.304(b)(3)(ii)(A), Note 2 |
| A "wet location" includes "locations unprotected and exposed to weather"; a "damp location" includes partly protected places "under canopies, marquees, roofed open porches" | V | 29 C.F.R. § 1910.399, "Location" (1) and (3) |
| Equipment and cords in highly conductive or wet work locations "shall be approved for those locations" | V | 29 C.F.R. § 1910.334(a)(4) |
| Wet hands may not plug or unplug energized cords; a wet connection that could conduct to the hand may be handled "only with insulating protective equipment" | V | 29 C.F.R. § 1910.334(a)(5)(i) and (ii) |
| Construction: portable lighting in wet or conductive locations runs at 12 V or less, or 120 V if GFCI-protected | V | 29 C.F.R. § 1926.405(a)(2)(ii)(G) |
| Receptacles in wet locations need weatherproof enclosures: with the plug in, where the load is unattended; with the plug removed, where it is attended | V | 29 C.F.R. § 1910.305(j)(2)(vi) and (vii) |
| ESTA's ANSI E1.19 (2021) is a recommended practice on how to "select, install, use, and maintain ground fault protection devices in the entertainment industry" (Class A GFCIs for personnel) | V | ESTA (n.d.), entry "ANSI E1.19 - 2021" |
| Which OSHA GFCI paragraph governs a given show depends on whether the work is general industry or construction | I | § 1926.404(b)(1) is for construction sites and § 1910.304(b)(3)(ii) for construction-like activities in general industry; *Light on Set* lesson 26 already teaches OSHA's 1997 view that entertainment is generally general industry |

---

## Section 9. Craft

### 9.1 Over-under coiling

| Fact | Tag | Source |
|---|---|---|
| Coiling a cable wrong makes a spiral, so "when you pull it out straight, you will end up with a twisted mess" | V | Tobias (2023) |
| Method: draw back a loop with the thumb toward the connector, then make the next loop with the thumb turned the opposite way, and alternate to the end | V | Tobias (2023) |
| For very long cables, Tobias names the figure-8 as an alternative; to relax a badly coiled cable, lay it flat in the sun, but a surface that is too hot can damage it | V | Tobias (2023) |
| Texas A&M's PerfTech: "Wrap your cable using the over-under method" and "Roll the cable in your fingers to guide its natural twist" | V | Moeller (2014) |
| Coils for cables 25 ft and longer should be "about forearm length"; secure with velcro; if a coil twists, back up and redo it; forcing a cable into shape "can do as much damage as mistreating it did" | V | Moeller (2014) |
| *Knot-Tying & Rope Work* lesson 28 already teaches over-under from Tobias (2023) | V | Catalog, `scripts/data/knots-course.ts`, slug `coiling-cable-over-under` |

### 9.2 Labeling and color codes

| Fact | Tag | Source |
|---|---|---|
| Listed cord types must be "durably marked on the surface at intervals not exceeding 610 mm (24 in.) with the type designation, size, and number of conductors" | V | 29 C.F.R. § 1910.305(g)(2)(i) |
| Grounded and equipment grounding conductors in a cord "shall be distinguishable from other conductors" | V | 29 C.F.R. § 1910.305(g)(2)(i); § 1926.405(g)(2)(i) |
| Assured-program test records may be kept "by means of logs, color coding, or other effective means" | V | 29 C.F.R. § 1926.404(b)(1)(iii)(G); § 1910.304(b)(3)(ii)(C)(6) |
| Neutrik powerCON is "Colour coded for easy identification": blue power-in, grey power-out | V | Neutrik (n.d.-a), p. 10 |
| Neutrik's colored boots use a ten-color code by digit: 0 black, 1 brown, 2 red, 3 orange, 4 yellow, 5 green, 6 blue, 7 violet, 8 grey, 9 white ("10 resistor colors") | V | Neutrik (n.d.-a), p. 19, BSP accessory note |
| Lex banded feeder is "banded every 2ft with heavy duty sealant type heat shrink" | V | LEX Innovations (n.d.-b) |
| Union Connector panels carry "Laser engraved cam identifiers" | V | Union Connector (2016) |
| Label both ends of every cable | A | Seen only in vendor blogs and search snippets today; a maker or standards source (for example a label maker's guide or ANSI/TIA-606, which is paywalled) was not read. Teach as this course's practice, not as a cited rule |

### 9.3 Cable runs, ramps and trip hazards

| Fact | Tag | Source |
|---|---|---|
| Walking-working surfaces must be "kept in a clean, orderly, and sanitary condition" and "maintained free of hazards such as sharp or protruding objects" | V | 29 C.F.R. § 1910.22(a)(1) and (a)(3) |
| A hazard on a walking-working surface must be corrected before use; if it cannot be fixed at once, it "must be guarded to prevent employees from using the walking-working surface until the hazard is corrected" | V | 29 C.F.R. § 1910.22(d)(2) |
| "Exit routes must be free and unobstructed. No materials or equipment may be placed, either permanently or temporarily, within the exit route." | V | 29 C.F.R. § 1910.37(a)(3) |
| Construction: "Working spaces, walkways, and similar locations shall be kept clear of cords so as not to create a hazard to employees." | V | 29 C.F.R. § 1926.416(b)(2) |
| Cords must be protected from damage "by sharp corners, projections, and doorways or other pinch points" (already taught in *Light on Set* 26) | V | 29 C.F.R. § 1910.305(a)(2)(x) |
| Cords "may not be fastened with staples or otherwise hung in such a fashion as could damage the outer jacket or insulation" (already taught in *Light on Set* 26) | V | 29 C.F.R. § 1910.334(a)(1) |
| 2010 ADA Standards: the requirements "apply to temporary and permanent buildings and facilities"; the advisory names stages, platforms and exhibit areas | V | U.S. Access Board (n.d.), § 201.3 and Advisory 201.3 |
| A change in level up to 1/4 in (6.4 mm) may be vertical; 1/4 to 1/2 in (13 mm) must be beveled no steeper than 1:2; more than 1/2 in "shall be ramped" per § 405 or 406 | V | U.S. Access Board (n.d.), §§ 303.2, 303.3, 303.4 |
| Ramp runs: running slope "not steeper than 1:12" | V | U.S. Access Board (n.d.), § 405.2 |
| A cable protector laid across an accessible route is a change in level, so the § 303 limits are the test of whether a wheelchair user can cross it | I | From §§ 201.3 and 303 (U.S. Access Board, n.d.). No Access Board or DOJ page read today addresses cable protectors directly. Vendor "ADA compliant" claims were seen only in snippets and are not evidence |

### 9.4 Cable testers: continuity, opens, shorts, split pairs

| Fact | Tag | Source |
|---|---|---|
| Rolls CT 1 tests 1/4 in TS and TRS, RCA, XLR and MIDI cables "for: opens, shorts, intermittents, and crossed wires" | V | Rolls (2001), owner's manual, Introduction |
| Its LEDs show continuity pin by pin: LED 1 for pin 1 (or ground), LED 2 for pin 2 (or tip), LED 3 for pin 3 (or ring) | V | Rolls (2001), LED descriptions |
| Test method: plug in both ends and "wiggle the cable around at different points"; if an LED "is off, or goes on and off - the cable is bad" | V | Rolls (2001), test instructions |
| Readout: no LEDs means a bad cord or dead battery; one LED means shorted wires; three LEDs means a good TRS or XLR cord | V | Rolls (2001), "TEST INDICATORS" |
| Fluke Networks: an open is when "the DC signal doesn't reach the other end"; a short is when "the signal crosses onto another conductor" | V | Fluke Networks (2018) |
| A reversed pair is a polarity reversal at one end ("tip/ring reversal"); a crossed pair lands on a different pair's position at the other end | V | Fluke Networks (2018) |
| A split pair is when "pin to pin continuity is maintained but the physical pairs are separated"; "a simple DC continuity test will still pass" while "a near end crosstalk test will fail" | V | Fluke Networks (2018) |
| FOA: a split pair passes a DC wiremap; "some wiremappers which use only DC tests do not check crosstalk"; split pairs are usually caused by using punchdown color codes on jacks | V | Fiber Optic Association [FOA] (2021), wiremap page |
| So a continuity tester can pass a network cable that will still fail on a network | I | From Fluke Networks (2018) and FOA (2021) |
| Testing on power circuits is different: "Only qualified persons may perform testing work on electric circuits or equipment", and test instruments must be inspected before use and rated for the circuit | V | 29 C.F.R. § 1910.334(c)(1) to (3) |

### 9.5 Fiber: optical power meters and visual fault locators

| Fact | Tag | Source |
|---|---|---|
| "dB is for measuring loss, dBm is for measuring power" | V | FOA (2020), "Fiber Optic Testing" |
| Multimode is generally tested at 850 nm (optionally 1300 nm) with LED sources; singlemode at 1310 nm (optionally 1550 nm) with laser sources | V | FOA (2020) |
| Setting the "0 dB" reference launch power "is critical to making good loss measurements" | V | FOA (2020) |
| Rule-of-thumb loss estimate: "(0.5 dB X # connectors) + (0.2 dB x # splices) + fiber loss on the total length of cable" | V | FOA (2020) |
| A visual fault locator is a higher-power fiber tracer using a visible laser, "powerful enough for continuity checking or to trace fibers for several kilometers" | V | FOA (2020) |
| FOA advises checking connectors with a power meter before looking into them, and checking "that no power is present in the cable before you look at it in a microscope" | V | FOA (2020) |
| *Arena Transmission* lesson 22 already prices a VFL and a one-click cleaner and sets a fiber lab; lesson 20 to 22 cover fiber handling | V | Catalog, `scripts/data/arena-transmission-course.ts`, lessons 20 to 22 |

### 9.6 The fault-finding order

| Fact | Tag | Source |
|---|---|---|
| FOA's link troubleshooting begins at the receiver: "disconnect the fiber optic cable connector at the receiver, attach the power meter, and measure the power" | V | FOA (2019), "Link Testing" |
| If receiver power is low, measure the transmitter; "If receiver power is low, but transmitter power is high, there is something wrong with the cables" | V | FOA (2019) |
| Transmitter power can be measured with "a known good test jumper"; suspect cables "must be tested at every connection to isolate the bad cable(s) and or connectors" | V | FOA (2019) |
| "If there is any question about the condition of the connectors, clean them before testing." | V | FOA (2019) |
| Network troubleshooting "should always begin with checking power in the link"; then check the transmitter against spec, swap in known-good transceivers, and only then troubleshoot loss in the cable plant | V | FOA (2024), "Network Troubleshooting" |
| Source, cable and receiver are the three places a fault can live; the published fiber method sorts among them by measuring at the receiver first, not by starting at the source | I | From FOA (2019) and FOA (2024). *Arena Transmission* lesson 24 already teaches a source, transport, receiver sort as its own frame, with "cheapest evidence first" |
| Swapping in a known-good cable is the copper equivalent of the known-good test jumper | I | By analogy with FOA (2019). Teach as reasoning, not a quoted rule |

### 9.7 A basic cable kit

| Fact | Tag | Source |
|---|---|---|
| A copper cable tester that shows per-pin continuity for XLR and TRS (example: Rolls CT 1, now discontinued) | V (the product's functions) | Rolls (n.d.); Rolls (2001) |
| A network tester that checks crosstalk, not only DC wiremap, if Cat cable is in the kit | I | From Fluke Networks (2018) and FOA (2021) |
| A fiber kit (cleaner, VFL, patch cords) | V (already in the catalog) | *Arena Transmission* lesson 22 |
| Velcro ties for coils | V | Moeller (2014) |
| Turnaround and gender adapters for cam systems | V (they exist and what they do) | LEX Innovations (n.d.-c) |
| A plug-in GFCI or GFCI cord set where installed protection is not present | V (that they exist and are acceptable under OSHA's note) | CPSC (n.d.-a), p. 2; 29 C.F.R. § 1910.304(b)(3)(ii)(A), Note 2 |
| A complete published crew cable-kit list from a training body or union | A | None found today. Build the kit lesson from the items above and say it is this course's list |

---

## Stop and call an electrician (or the venue's qualified person)

Each point is supported by the source named. The build may turn these into a single checklist lesson.

1. **Any bare end, lug, clamp or clip connection.** In Minnesota only licensed employees of licensed contractors may connect or terminate cords and cables with "bare ends, clamps, clips or other types of connections other than approved separable connectors" (MN DLI, n.d., p. 2, question 8).
2. **Any work on a panel, premises wiring or tie-in.** Minnesota reserves "all electrical work on interior or exterior premises wiring systems" to licensed employees (MN DLI, n.d., question 8); Oregon's stage licence excludes service conductors and service equipment (Or. Admin. R. 918-282-0230, as reproduced by LII); ETCP's exam treats "temporary tie-in means" as electrician content (ETCP, n.d.-b, item 3.B.2).
3. **Connecting a generator or company switch with cam feeders.** Lex: installation "by qualified personnel", "DO NOT ATTEMPT CONNECTION WHILE CIRCUITS ARE LIVE", and de-energize at the generator before connecting or removing any connector (Lex Products, 2020, pp. 5 to 7); Union Connector's generator box is for connection "by qualified personnel" (Union Connector, n.d.-d).
4. **Installing or wiring any receptacle, plug or connector body.** Leviton: "If you are not sure about any part of these instructions, consult an electrician" (Leviton, n.d.-i); Neutrik TRUE1: "To be installed by qualified person only" (Neutrik, 2025).
5. **A tripped breaker or blown fuse.** It may not be reset until someone has determined the circuit can be safely energized, and repeated resetting is prohibited (29 C.F.R. § 1910.334(b)(2)).
6. **Anything that would change overcurrent protection or add load beyond a circuit's rating** (29 C.F.R. § 1910.334(b)(3); § 1926.416(c)).
7. **Testing an electric circuit.** "Only qualified persons may perform testing work on electric circuits or equipment" (29 C.F.R. § 1910.334(c)(1)).
8. **A GFCI that fails its test.** CPSC: "Contact a qualified electrician to correct the wiring and/or replace the defective GFCI" (CPSC, n.d.-a, p. 2).
9. **A damaged cord, plug or connector.** Remove it from service; no one may use it until repaired and tested (29 C.F.R. § 1910.334(a)(2)(ii)).
10. **A wet energized connection.** It may be handled only with insulating protective equipment, which this course does not issue (29 C.F.R. § 1910.334(a)(5)(ii)).
11. **Plugs that do not match.** Check mating configuration first; never alter a plug or use an adapter that breaks the ground (29 C.F.R. § 1910.334(a)(2)(iii), (a)(3)(ii) and (iii)).
12. **A classic powerCON (no breaking capacity) that must come out while loaded.** Neutrik says it "must not be connected or disconnected under load or live" (Neutrik, n.d.-b); the circuit is switched off first by whoever owns it.
13. **Mismatched cam gender or a turnaround in the run.** No source read today gives a crew procedure; the safe reading of the sources above is to stop and ask the person responsible for the distribution (I).

---

## Teach this, not that

| Teach this | Not that | Why |
|---|---|---|
| Cam sequence: ground first, then neutral, then the hots; disconnect in reverse (hots, neutral, ground) | "Neutral first on, last off" | Lex's warning label puts the equipment grounding conductor first and the grounded (neutral) conductor second (Lex Products, 2020, p. 6) |
| Cam connections are made and broken dead, with the source de-energized | That the order makes it safe to connect live | Lex: "DO NOT ATTEMPT CONNECTION WHILE CIRCUITS ARE LIVE" (Lex Products, 2020, p. 7); OSHA bars non-load-break connectors for switching under load (§ 1910.334(b)(1)) |
| "Classic powerCON (no breaking capacity) is never plugged or unplugged live; TRUE1 and some newer parts are rated for it: read the part's page" | "No powerCON may ever be unplugged under load" or "TRUE1 and powerCON are interchangeable" | Neutrik's pages differ by part (Neutrik, n.d.-a, n.d.-b, n.d.-d, n.d.-f); no source read today says TRUE1 mates with classic powerCON |
| 20 A stage pin is rated 120 V (Union Connector); 60 A and 100 A come in 120 V or 240 V | "Stage pin is a 250 V connector" | Union Connector (n.d.-a) |
| Black, red and blue are the hot connectors on a five-wire 120/208 V set by elimination; green is ground and white is neutral | That the code requires black, red and blue in that phase order | Green and white are sourced (Lex Products, 2020); the hot colors are inferred; no source read today assigns them to phases or calls them mandatory |
| The source, cable, receiver sort; in fiber, measure at the receiver first, then the transmitter, then test the cable at every connection | "Always start at the source" as a published rule | FOA (2019) starts at the receiver |
| A continuity tester finds opens, shorts and miswires; only a crosstalk-capable tester finds split pairs | "If the tester lights up, the network cable is good" | Fluke Networks (2018); FOA (2021) |
| Daisy-chaining power strips or cords breaks the product's listing instructions, which OSHA requires following | Quoting an "OSHA daisy-chain rule" | § 1910.303(b)(2) plus the listing (Brookhaven National Laboratory, 2007); the OSHA letter was not read |
| OSHA's construction GFCI rule covers 120 V, single-phase 15 and 20 A temporary receptacles; general industry construction-like work adds 30 A | "OSHA requires a GFCI on every temporary circuit at every show" | § 1926.404(b)(1)(ii); § 1910.304(b)(3)(ii) |
| ETCP Entertainment Electrician is a voluntary, nongovernmental certification for experienced electricians | "ETCP certification lets you tie in" | ESTA (2016); ETCP (n.d.-a); licensing is state or local (MN DLI, n.d.; Oregon Secretary of State, 2026) |
| Minnesota's line (separable connectors yes, bare ends no) as one state's rule | That line as a national rule | MN DLI (n.d.) is Minnesota only; Oregon licenses the work differently |
| Article 530 covers motion picture and television studios | A specific current title for Article 530 | NFPA (2026) and NFPA (2021) disagree on the title |
| A feeder runs from the supply to the final branch-circuit breaker; an extension cord is cord-and-plug equipment | Calling a cam feeder an "extension cord" | § 1910.399 definitions; § 1910.334(a) |

---

## Already taught elsewhere in the catalog (link, do not repeat)

- **`light-on-set` (CREW-03), lesson "26 · Cords, plugs and circuits"** (slug `cords-plugs-and-circuits`). Teaches: OSHA's 1997 letter that entertainment is generally general industry (para. 3); temporary wiring uses and 90-day carnival limit (§ 1910.305(a)(2)(i)); removal on completion ((a)(2)(ii)); protecting cords from pinch points ((a)(2)(x)); where cords may not go (§ 1910.305(g)(1)(iv)) and the temporary-wiring exception ((g)(1)(ii)(L)); construction allows doorway runs with protection (§ 1926.405(a)(2)(ii)(I)) and hard-usage cords for temporary lights ((J)); no splices and strain relief (§ 1910.305(g)(2)(ii), (iii)); no lifting by the cord and no staples (§ 1910.334(a)(1)); inspection before each shift and removal of damaged items ((a)(2)(i), (ii)); no wet hands ((a)(5)(i)); OSHA's 1992 letter on job-made cord sets; no load arithmetic, "ask the venue's electrician". CREW-00 should link here for all of those and add only what section 7.7 lists as new.
- **`light-on-set`, lesson "27 · What the rules forbid, shown through the makeshifts of 1928 and 1929"** (slug `what-the-rules-forbid`). Teaches: § 1910.303(b)(1) and (b)(2) (listed equipment used per its instructions), § 1910.305(a)(2)(ix) (lamp guards), and why homemade fixtures and dimmers are refused. CREW-00's daisy-chain point reuses § 1910.303(b)(2); link to lesson 27 rather than re-explain it.
- **`construction-safety`, lesson "10 · Subpart K: electricity on a jobsite"** (slug `subpart-k-electrical`). Teaches: § 1926.404(b)(1) GFCI versus the assured equipment grounding conductor program in detail, § 1926.416 (cords clear of walkways, no worn cords, no staples) and § 1926.417 lockout tagging. CREW-00 should link for the assured program details.
- **`knot-tying`, lesson "28 · Coiling cable over-under"** (slug `coiling-cable-over-under`). Teaches over-under from Tobias (2023), with steps and common mistakes. CREW-00 section 9 should link and add only Moeller (2014) and the hands-on capstone.
- **`arena-transmission` (CREW-05), lessons "20 · Fiber on the map", "21 · Where to learn fiber, and what certifies it", "22 · A fiber kit and a first lab"** (VFL, cleaner, FOA safety course precaution) and **"24 · Source, transport or receiver?"** (the three-way fault sort, cheapest evidence first). CREW-00 should link, and add the FOA receiver-first measurement order and the copper tester facts.

---

## Not reachable

| URL | Status on October 26, 2026 | What it should have given |
|---|---|---|
| https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.305 (and the 1926.404 and 1926.405 pages) | 403 | OSHA's own copy of the regulations. Read instead in the official eCFR text, current to October 22, 2026 |
| https://www.osha.gov/laws-regs/standardinterpretations/2002-11-18 | 403 | OSHA's November 18, 2002 interpretation on relocatable power taps and daisy chaining (seen only as a snippet; not cited) |
| https://hubbellcdn.com/specsheet/WIRING_Hubbell-PRO%20Spec%20Sheet_Part5.pdf (also Part6, Part7) | 403 | Hubbell spec sheets for L14-30 and L21-30 devices (Leviton pages used instead) |
| https://www.nema.org/Standards/view/Wiring-Devices-Dimensional-Specifications | 301 redirect to a store front page | NEMA's free summary of ANSI/NEMA WD 6, the standard that sets the plug shapes |
| https://www.southwire.com/wire-cable/flexible-cord/soow/p/PCORD11 | 404 | Southwire SOOW overview (SPEC 70000 page used instead) |
| https://stagesupply.co.uk/?p=164697 | 403 | A vendor guide to over-under coiling, failure points and testing |
| https://canford.co.uk/Products/25-003_OPTOGATE-XLR-MULTITESTER-CABLE-AND-PHANTOM-POWER-TESTER | 403 | Product description of an XLR and phantom-power tester |
| https://www.eaton.com/us/en-us/skuPage.E1016-8392K.html | Timed out (60 s) | Eaton's own page linking IM 1012; the IM 1012 PDF was read from a distributor's copy (Hunzicker) instead |

---

## Research checks still open

1. What is the exact current title of NEC Article 530 in the 2026 edition: "...and Similar Locations" (NFPA restructure chart, 2026) or "...and Remote Locations" (CMP-15 second revision, 2021)?
2. Does any maker or code-free official page assign black, red and blue to phases A, B and C on entertainment cam systems, or say whether those colors are required?
3. Does Neutrik state whether powerCON TRUE1 or TRUE1 TOP mates with classic blue and grey powerCON (NAC3FCA, NAC3FCB)?
4. Which stage pin is ground on 20 A versus 60 A and 100 A connectors, per ANSI E1.24 (a free ESTA download behind a licence form) or a maker's sheet?
5. What does OSHA's November 18, 2002 interpretation letter on relocatable power taps actually say (osha.gov returned 403)?
6. Does the Access Board or the Department of Justice say anything directly about portable cable protectors on accessible routes?
7. Does any state or city accept ETCP Entertainment Electrician certification in place of, or as part of, an electrical licence?
8. How do OSHA and the NEC treat single-conductor portable feeder (cam) in US entertainment work, given that § 1910.305(a)(2)(iv)(B) limits single insulated feeder conductors in general industry temporary wiring? (A stage electrician reviewer should answer; ESTA's E1.51 covers Canada only.)
9. What do the letters in SOOW and SC stand for, per a maker or UL's free guide information?
10. Is there a published maker or training-body source for labeling both ends of a cable, and for a crew cable-kit list?
11. Does the Oregon rule text on the official Secretary of State rules site match the Legal Information Institute reproduction of Or. Admin. R. 918-282-0230?
12. Does the CPSC Pub. 513 table read "16 AWG handles 1375 W" when the page is viewed as laid out (the text layer interleaves two columns)?

---

## References

Brookhaven National Laboratory. (2007). *[Fact sheet on extension cords and power strips]* [Fact sheet, created August 17, 2007]. Retrieved October 26, 2026, from https://www.bnl.gov/esh/shsd/pdf/electrical/fact%20sheet%20text%201.pdf

Eaton. (2017). *Cam-Lok single pole connectors E-Z1016 & E-Z1018 series: Installation and maintenance information IM 1012* (Rev. E) [Instruction sheet; distributor-hosted copy]. Retrieved October 26, 2026, from https://default.assets-hunzicker-prod.roccommercecloud.com/assets%2F9af5b16fd6300952702ff91767e7b311/E_Z1016_8006_Installation_Manual.pdf

Entertainment Services and Technology Association. (n.d.). *TSP published documents*. Retrieved October 26, 2026, from https://tsp.esta.org/tsp/documents/published_docs.php

Entertainment Services and Technology Association. (2016). *Entertainment Technician Certification Program candidate handbook: Certified entertainment electrician* (Version 5.0). Retrieved October 26, 2026, from https://etcp.esta.org/certify/documents/electrical/ETCP_Handbook_Electrical.pdf

Entertainment Technician Certification Program. (n.d.-a). *Get certified: Entertainment electrician*. Retrieved October 26, 2026, from https://etcp.esta.org/certify/certify_electrical.html

Entertainment Technician Certification Program. (n.d.-b). *Examination content: Entertainment electrician*. Retrieved October 26, 2026, from https://etcp.esta.org/certify/examination_electrical.html

Fiber Optic Association. (2019). *The FOA reference for fiber optics: Link testing*. Retrieved October 26, 2026, from https://www.thefoa.org/tech/ref/testing/test/linktest.html

Fiber Optic Association. (2020). *The FOA reference for fiber optics: Fiber optic testing*. Retrieved October 26, 2026, from https://www.thefoa.org/tech/ref/basic/test.html

Fiber Optic Association. (2021). *The FOA reference for fiber optics: Testing UTP premises cabling, wiremap*. Retrieved October 26, 2026, from https://www.thefoa.org/tech/ref/premises/wiremap.html

Fiber Optic Association. (2024). *The FOA reference for fiber optics: Network troubleshooting*. Retrieved October 26, 2026, from https://www.thefoa.org/tech/ref/testing/test/network-troubleshooting.html

Fluke Networks. (2018, September 6). *Wire map testing: It's not all about color*. Retrieved October 26, 2026, from https://www.flukenetworks.com/blog/cabling-chronicles/wire-map-testing-it-s-not-all-about-color

Interpower. (n.d.). *NEMA nomenclature*. Retrieved October 26, 2026, from https://interpower.com/ic/designers/designing-for-export/guides-and-charts/nema-nomenclature-guide.html

LEX Innovations. (n.d.-a). *Specification of feeder cables*. Retrieved October 26, 2026, from https://lexproducts.com/technical/specification-feeder-cables

LEX Innovations. (n.d.-b). *100A 5-wire banded cam-type feeder extension (FBL305W)*. Retrieved October 26, 2026, from https://lexproducts.com/powerflex_detail?part=FBL305W-xxx

LEX Innovations. (n.d.-c). *Cam-type adapter, (1) male to (1) male (MMM)*. Retrieved October 26, 2026, from https://lexproducts.com/powerflex_detail?part=MMM-y

LEX Innovations. (n.d.-d). *100A company switch black: Indoor CAM & lug panel (CS-100F-C5DS1-BLK)*. Retrieved October 26, 2026, from https://lexproducts.com/powergate_detail?part=CS-100F-C5DS1-BLK

Lex Products. (2020). *PowerGATE 400A-800A input/output panels user manual* (LM-PIP400). Retrieved October 26, 2026, from https://lexproducts.com/admin/storage/uploads/2020/04/13/5e94bc9f2ab61400A-800A-Input-Output-Panel-Manual-final.pdf

Leviton. (n.d.-a). *20 amp, 125 volt, flush mount locking receptacle, industrial grade (2310)*. Retrieved October 26, 2026, from https://leviton.com/products/2310

Leviton. (n.d.-b). *30 amp, 125 volt, flush mount locking receptacle, industrial grade (2610)*. Retrieved October 26, 2026, from https://leviton.com/products/2610

Leviton. (n.d.-c). *30 amp, 250 volt, flush mount locking receptacle, industrial grade (2620)*. Retrieved October 26, 2026, from https://leviton.com/products/2620

Leviton. (n.d.-d). *30 amp, 125/250 volt, flush mount locking receptacle, industrial grade (2710)*. Retrieved October 26, 2026, from https://leviton.com/products/2710

Leviton. (n.d.-e). *30 amp, 120/208 volt, flush mount locking receptacle, industrial grade (2810)*. Retrieved October 26, 2026, from https://leviton.com/products/2810

Leviton. (n.d.-f). *Locking plug, 30 amp, 120/208 volt, industrial grade, black & white (2811)*. Retrieved October 26, 2026, from https://leviton.com/products/2811

Leviton. (n.d.-g). *15 amp duplex receptacle/outlet, industrial grade, self-grounding (5252)*. Retrieved October 26, 2026, from https://leviton.com/products/5252

Leviton. (n.d.-h). *20 amp single receptacle/outlet, industrial grade, self-grounding (5362)*. Retrieved October 26, 2026, from https://leviton.com/products/5362

Leviton. (n.d.-i). *20A and 30A flush locking receptacle devices* (PK-A3388-10-02-0I) [Instruction sheet]. Retrieved October 26, 2026, from https://leviton.com/content/dam/leviton/commercial-industrial/product_documents/instruction_sheet/PK-A3388-10-02-0H-W.pdf

Limited Journeyman Stage Electrician License, Or. Admin. R. 918-282-0230 (2005). Legal Information Institute reproduction. Retrieved October 26, 2026, from https://www.law.cornell.edu/regulations/oregon/Or-Admin-Code-SS-918-282-0230

Minnesota Department of Labor and Industry. (n.d.). *Filming in Minnesota: Electrical safety requirements* [PDF]. Retrieved October 26, 2026, from https://dli.mn.gov/sites/default/files/pdf/eli_filming.pdf

Moeller, J. (2014, January 28). *Cable wrapping*. PerfTech, Texas A&M University. Retrieved October 26, 2026, from https://perftech.sites.tamu.edu/2014/01/28/cable-wrapping/

National Fire Protection Association. (2021). *Second revision no. 8529-NFPA 70-2021: Change title of Article 530* [NEC Code-Making Panel 15 second revision statements, 2023 edition cycle]. Retrieved October 26, 2026, from https://docinfofiles.nfpa.org/files/AboutTheCodes/70/70_A2022_NEC_P15_SD_SRStatements.pdf

National Fire Protection Association. (2026). *NEC restructure (2023-2029): Proposed organization of the 2029 National Electrical Code* [Chart; the title's dash is rendered here as a hyphen]. Retrieved October 26, 2026, from https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/NEC/NEC-2023-2029-Restructure.pdf?rev=d73eb274f19d4b5ca73f25a26ce3134a

Neutrik. (n.d.-a). *powerCON connectors & circular connectors* [Product guide; file name "PG EN 202210-V25"]. Retrieved October 26, 2026, from https://www.neutrik.com/media/10093/download/Neutrik%20Product%20Guide%20-%2006%20powerCON%20and%20Circular%20Connectors%20PG%20EN%20202210-V25.pdf?v=10

Neutrik. (n.d.-b). *NAC3FCA*. Retrieved October 26, 2026, from https://www.neutrik.com/en/product/nac3fca

Neutrik. (n.d.-c). *NAC3FCB*. Retrieved October 26, 2026, from https://www.neutrik.com/en/product/nac3fcb

Neutrik. (n.d.-d). *NAC3FX-W*. Retrieved October 26, 2026, from https://www.neutrik.com/en/product/nac3fx-w

Neutrik. (n.d.-e). *NAC3FX-W-TOP*. Retrieved October 26, 2026, from https://www.neutrik.com/en/product/nac3fx-w-top

Neutrik. (n.d.-f). *NAC3FXXA-W-S*. Retrieved October 26, 2026, from https://www.neutrik.com/en/product/nac3fxxa-w-s

Neutrik. (n.d.-g). *NAC3MPA-1*. Retrieved October 26, 2026, from https://www.neutrik.com/en/product/nac3mpa-1

Neutrik. (2025). *powerCON TRUE1 cable connector NAC3F-TRUE1-CG & NAC3M-TRUE1-CG: Application & safety instruction* (BDA 728 V2) [Product manual]. Retrieved October 26, 2026, from https://www.neutrik.com/media/20441/download/BDA%20728%20V2%20-%20powerCON%20TRUE1%20Cable%20Connector%20NAC3F-TRUE1-CG%20&%20NAC3M-TRUE1-CG.pdf?v=1

Occupational Safety and Health Standards, 29 C.F.R. § 1910.22 (2026). eCFR text current to October 22, 2026. Retrieved October 26, 2026, from https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.22

Occupational Safety and Health Standards, 29 C.F.R. § 1910.37 (2026). eCFR text current to October 22, 2026. Retrieved October 26, 2026, from https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.37

Occupational Safety and Health Standards, 29 C.F.R. § 1910.303 (2026). eCFR text current to October 22, 2026. Retrieved October 26, 2026, from https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.303

Occupational Safety and Health Standards, 29 C.F.R. § 1910.304 (2026). eCFR text current to October 22, 2026. Retrieved October 26, 2026, from https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.304

Occupational Safety and Health Standards, 29 C.F.R. § 1910.305 (2026). eCFR text current to October 22, 2026. Retrieved October 26, 2026, from https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.305

Occupational Safety and Health Standards, 29 C.F.R. § 1910.332 (2026). eCFR text current to October 22, 2026. Retrieved October 26, 2026, from https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.332

Occupational Safety and Health Standards, 29 C.F.R. § 1910.334 (2026). eCFR text current to October 22, 2026. Retrieved October 26, 2026, from https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.334

Occupational Safety and Health Standards, 29 C.F.R. § 1910.399 (2026). eCFR text current to October 22, 2026. Retrieved October 26, 2026, from https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1910&section=1910.399

Oregon Secretary of State. (2026, February 11). *Limited journeyman stage electrician (ST)* [Oregon license directory entry; issuing agency DCBS Building Codes Division]. Retrieved October 26, 2026, from https://apps.oregon.gov/SOS/LicenseDirectory/LicenseDetail/18

Rolls. (n.d.). *The CT 1 Cable Detective*. Retrieved October 26, 2026, from https://www.rolls.com/product.php?pid=CT1

Rolls. (2001). *CT 1 Cable Detective cable tester owner's manual* [Manual dated 10/01]. Retrieved October 26, 2026, from https://www.rolls.com/doc/manuals/manual_CT1.pdf

Safety and Health Regulations for Construction, 29 C.F.R. § 1926.404 (2026). eCFR text current to October 22, 2026. Retrieved October 26, 2026, from https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1926&section=1926.404

Safety and Health Regulations for Construction, 29 C.F.R. § 1926.405 (2026). eCFR text current to October 22, 2026. Retrieved October 26, 2026, from https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1926&section=1926.405

Safety and Health Regulations for Construction, 29 C.F.R. § 1926.416 (2026). eCFR text current to October 22, 2026. Retrieved October 26, 2026, from https://www.ecfr.gov/api/versioner/v1/full/2026-10-22/title-29.xml?part=1926&section=1926.416

Southwire. (n.d.). *600V ROYAL SOOW cord with black jacket 90°C. MSHA approved* (SPEC 70000). Retrieved October 26, 2026, from https://www.southwire.com/wire-cable/flexible-cord/600v-royal-soow-cord-with-black-jacket-90-c-msha-approved/p/SPEC70000

Tobias, T. K. (2023, July 10). *How to roll your cable*. LEWITT. Retrieved October 26, 2026, from https://www.lewitt-audio.com/blog/how-to-roll-your-cable

Union Connector. (n.d.-a). *Stage pin connectors, pin connectors*. Retrieved October 26, 2026, from https://unionconnector.com/connectors/stage-pin-connectors

Union Connector. (n.d.-b). *Basic company switch with Series 16 Cam-Lok receptacle, 100 amp*. Retrieved October 26, 2026, from https://unionconnector.com/https-unionconnector-com-company-switch/

Union Connector. (n.d.-c). *Basic company switch with Series 16 SafeCam receptacles, 100 amp*. Retrieved October 26, 2026, from https://unionconnector.com/basic-company-switch-with-series-16-safecam-receptacles-100-amp/

Union Connector. (n.d.-d). *Generator connection box: 100 - 400 amp*. Retrieved October 26, 2026, from https://unionconnector.com/generator-connection-box-with-series-16-cam-inlets-100-400-amp/

Union Connector. (2016). *Company switch data sheet CSC-4020-CSP-3R* [Data sheet]. Retrieved October 26, 2026, from https://unionconnector.com/wp-content/uploads/Company_Switch_Data_Sheet_CSC4020CSP3R.pdf

U.S. Access Board. (n.d.). *ADA accessibility standards: 2010 standards for Titles II and III facilities*. Retrieved October 26, 2026, from https://www.access-board.gov/ada/

U.S. Consumer Product Safety Commission. (n.d.-a). *CPSC fact sheet: What is a GFCI?* (Pub. 099). Retrieved October 26, 2026, from https://www.cpsc.gov/s3fs-public/099_0.pdf

U.S. Consumer Product Safety Commission. (n.d.-b). *Safety at home: Extension cords* (NSN-18-062021). Retrieved October 26, 2026, from https://www.cpsc.gov/s3fs-public/ExtensionCords_SaferProducts_NSN-18-062021_0.pdf

U.S. Consumer Product Safety Commission. (2008). *Home electrical safety checklist* (Pub. 513). Retrieved October 26, 2026, from https://www.cpsc.gov/s3fs-public/513.pdf
