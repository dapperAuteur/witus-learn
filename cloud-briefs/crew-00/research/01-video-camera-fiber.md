# Cables and Connectors (CREW-00): Video, Camera Cable and Fiber Facts

**Researched:** October 26, 2026. Every source tagged V below was fetched and read that day.

**Scope.** Outline sections 1 to 4 of `cloud-briefs/crew-00/00-approved-brief.md`: why the cable matters, video over copper, camera cables, and fiber. Sections 5 to 9 are researched elsewhere.

**Tags.** **V** = read in a page or PDF fetched on October 26, 2026, at the locator given. **I** = inferred from V facts, with the reasoning written out; a lesson may teach it only with the reasoning shown. **A** = assumed; never to be taught.

**Standards rule.** SMPTE, AES, TIA, IEC and NFPA standards are paywalled. Nothing below quotes or reconstructs their text. Where a standard is named, the fact comes from a free page that states it: SMPTE's own free overview documents (OV 297-0 and OV 2082-0), a maker's spec sheet or manual, or the Fiber Optic Association's (FOA) free reference pages.

**Vendor rule.** Every product named is a worked example of a spec sheet a learner can read, not an endorsement.

---

## 1. Why the cable matters

### 1a. Impedance: 75, 50 and 110 ohms

| Fact | Tag | Source |
|---|---|---|
| Characteristic impedance "is a relationship between the capacitance per unit length and the inductance per unit length," set by the ratio of the inner and outer conductor diameters and the dielectric constant | V | Coaxicom (2015), glossary entry "Impedance" |
| The two main coax impedances are 50 and 75 ohms: 50 ohms is used mainly for data signal applications, 75 ohms for video signal applications | V | Coaxicom (2015), opening paragraphs |
| 50 ohms is a compromise: theoretical minimum attenuation is at 77.5 ohms and maximum power at 30 ohms; their average, 53.75 ohms, was rounded to 50. 75 ohms is close to the minimum-attenuation point | V | Coaxicom (2014), body text |
| 50-ohm coax is typical for GPS antennas, cell towers and base stations (RG58, RG174, RG213 and others with SMA, TNC and N connectors); 75-ohm coax such as RG59 and RG6 carries video, most often with BNC connectors | V | Coaxicom (2015), applications table |
| Belden 1694A is a "75 Ohm SDI Coax, RG-6, 18 AWG" cable | V | Belden (2026a), p. 1, product title and "Product Description" |
| Belden 1800F, a digital microphone (digital audio) pair, has a nominal characteristic impedance of 110 ohms | V | Belden (2025a), p. 1, "Electrical Characteristics: Electricals" |
| Belden 8412, an analog microphone cable for "balanced analog audio," has a nominal characteristic impedance of 67 ohms | V | Belden (2025b), p. 1, "Suitable Applications" and "Electricals" |
| An analog mic cable and a digital audio cable can look alike and carry the same kind of connector yet differ in impedance (67 against 110 ohms in Belden's two examples), so a cable that "fits" is not proof it is the right cable | I | From Belden (2025a) and Belden (2025b). The 1800F sheet says "digital audio," not AES3; a free source tying AES3 to 110 ohms belongs to the section 5 research |

### 1b. What a mismatch does, and the 75 versus 50 ohm BNC trap

| Fact | Tag | Source |
|---|---|---|
| Terminating a coax "using a resistance value not equal to its characteristic impedance creates a reflected wave that returns back down the cable to the sending end," which interferes with the travelling wave and forms a standing wave | V | Canare Electric (n.d.-a), PDF p. 2, "Voltage Standing-wave Ratio (VSWR) and Return Loss" |
| Return loss measures the size of the reflected wave relative to the travelling wave; Canare's conversion table: VSWR 2 = 9.54 dB, 1.5 = 13.98 dB, 1.2 = 20.83 dB, 1.1 = 26.44 dB, 1.05 = 32.26 dB, 1.02 = 40.09 dB, 1.01 = 46.06 dB. So a higher return-loss number means a better match | V | Canare Electric (n.d.-a), PDF p. 2, "Fig. 2 VSWR to Return Loss Conversion Table" |
| VSWR "generally increases with frequency and higher values are not desirable" | V | Coaxicom (2015), glossary entry "VSWR" |
| DDK states its "BNC 50 ohm connector is intermateable with BNC75 (75 ohm) style connector," that its BNC "is capable of mating with 75 ohm cable for frequencies less than 200MHz," and that above 200 MHz its BNC75 series should be used | V | DDK Ltd. (n.d.), features list |
| A reseller page for a discontinued 75-ohm BNC terminator says 75-ohm BNCs use "a reduced dielectric to achieve 75 ohm nominal impedance" and "will mate with 50 Ohm BNC connectors with no damage" | V (reseller text about one product; not general proof) | Markertek (n.d.), "BNC-TP2 Overview" |
| Canare's 75-ohm N connector follows the IEC 169-16 75-ohm shape, and "the 50Ω N and other connectors that do not conform to this specification cannot be connected" | V | Canare Electric (n.d.-a), PDF p. 11, caution under NCJ-BCJR |
| A 50-ohm part placed in a 75-ohm line gives a reflection coefficient of (75 minus 50) divided by (75 plus 50) = 0.2, which is VSWR 1.5 or about 14 dB return loss. Canare's table pairs VSWR 1.5 with 13.98 dB. That is worse than the 15 dB minimum Belden specifies for 1694A even at 4.5 to 6 GHz | I | Standard transmission-line arithmetic (not from a fetched page; reviewer to confirm), checked against Canare Electric (n.d.-a) p. 2 and Belden (2026a) p. 1 |
| So a 50-ohm BNC barrel or jumper in an SDI path "fits" but reflects signal; the higher the SDI rate, the more it matters (DDK draws its own line at 200 MHz) | I | From DDK Ltd. (n.d.) and Canare Electric (n.d.-a) |

### 1c. Shielding, attenuation and length

| Fact | Tag | Source |
|---|---|---|
| The outer conductor shields "to keep interfering signals from getting in and to keep signal from leaking out"; shielding effectiveness is measured in dB, higher is better, and it rises with shield density | V | Coaxicom (2015), "Shielding Effectiveness" |
| Canare names three factors that distinguish video coax: center conductor (solid for low loss, stranded for flexibility), insulation (foamed and highly foamed give lower attenuation but are "weak to external pressure"), and shield (braid with aluminum foil "offers perfect screening" but is "not suitable for repeated bending and mobile applications") | V | Canare Electric (n.d.-d), "Technical Note" |
| Belden 1694A shield: tri-laminate foil (100%) plus 95% tinned copper braid. Belden 4794R (12G): foil plus 95% braid plus a second foil ("Tri-Shield") | V | Belden (2026a), p. 1, "Outer Shield"; Belden (2026b), p. 1, "Outer Shield" |
| Attenuation is loss of power, usually given in dB per length of cable, and "increases as frequency increases" | V | Coaxicom (2015), glossary entry "Attenuation" |
| Belden 1694A nominal attenuation: 0.24 dB/100 ft at 1 MHz; 3.17 at 270 MHz; 5.4 at 750 MHz; 7.8 at 1500 MHz; 11.5 at 3000 MHz; 17.7 at 6000 MHz | V | Belden (2026a), pp. 1 to 2, "Attenuation" table |
| Belden 4794R nominal attenuation: 4.05 dB/100 ft at 750 MHz; 12.47 at 6000 MHz; 19.45 at 12000 MHz | V | Belden (2026b), pp. 1 to 2, "Attenuation" table |
| Canare L-5.5CUHD attenuation is 39.5 dB/100 m at 6 GHz; L-3.3CUHD 68.5; L-8CUHD 28.5 | V | Canare Electric (n.d.-d), specifications table and "75 ohm Coax Cable Nominal Attenuation (dB/100m)" |
| Because loss is quoted per 100 ft or per 100 m, doubling a run doubles its loss in dB. 1694A at 6 GHz is 17.7 dB/100 ft, about 58 dB/100 m, against L-5.5CUHD's 39.5 dB/100 m: the thicker 12G cable loses about a third less | I | Arithmetic on Belden (2026a) and Canare Electric (n.d.-d); 1 m = 3.281 ft |

### 1d. Reading a coax spec sheet

| Fact | Tag | Source |
|---|---|---|
| 1694A "Suitable Applications: Digital Video, 6 Gb/s UHDTV, HD-SDI 1080p." 12G is not in the list | V | Belden (2026a), p. 1, "Product Overview" |
| 4794R "Suitable Applications" include "4K Single-link 12 Gb/s UHDTV" and "8K Quad-link UHDTV" | V | Belden (2026b), p. 1, "Product Overview" |
| 1694A minimum return loss: 23 dB from 5 to 1600 MHz, 21 dB from 1600 to 4500 MHz, 15 dB from 4500 to 6000 MHz. 4794R: the same first two bands, then 15 dB from 4500 to 12000 MHz | V | Belden (2026a), p. 1, "Return Loss"; Belden (2026b), p. 1, "Return Loss" |
| 1694A: 75 ohm nominal impedance, 82% nominal velocity of propagation, 16.2 pF/ft capacitance, installation minimum bend radius 2.75 in (69.9 mm), maximum pull tension 69 lb (31 kg) | V | Belden (2026a), p. 2, "Electricals" and "Mechanical Characteristics" |
| 4794R: 75 ohm, 85% velocity of propagation, 16 AWG solid silvered copper, minimum bend radius 3.2 in (81 mm) | V | Belden (2026b), pp. 1 to 2 |
| 1800F (110-ohm digital audio): 76% velocity of propagation | V | Belden (2025a), p. 1, "Electricals" |
| Velocity of propagation is "the transmission speed of electrical energy in a determined length of cable compared to the speed of light," usually a percentage | V | Coaxicom (2015), glossary entry "Velocity of Propagation (VP)" |
| Propagation delay by insulation type: solid PE 5.0 ns/m, foamed PE 4.2 ns/m, highly foamed PE 3.7 ns/m; "large differences in delay can cause transmission errors if they exceed the receiver delay tolerance" | V | Canare Electric (n.d.-d), "What is Propagation Delay?" table |
| 82% velocity works out to about 4.1 ns per meter (85% to about 3.9 ns/m), in line with Canare's foamed-PE figure | I | 1 divided by (0.82 × 0.2998 m/ns); Belden (2026a); Canare Electric (n.d.-d) |
| The 1694A sheet is revision 0.716, dated May 27, 2026, and was fetched from Belden's own catalog server; the brief's "not reachable" note applied to Belden's product page, which still returns 403 | V | Belden (2026a), p. 2, "History"; see Not reachable |

---

## 2. Video over copper

### 2a. SDI rates and the standards that define them

| Fact | Tag | Source |
|---|---|---|
| SMPTE's free overview of the ST 297 fiber suite lists the SDI signals and rates: ST 259 (143 through 360 Mb/s), ST 344 (540 Mb/s), ST 292-1/2 (1.485 and 1.485/1.001 Gb/s), ST 424 (2.970 and 2.970/1.001 Gb/s), ST 2081-1 (5.940 and 5.940/1.001 Gb/s), ST 2082-1 (11.88 and 11.88/1.001 Gb/s) | V | Society of Motion Picture and Television Engineers [SMPTE] (2017), p. 1, "Documents in the SMPTE 297 Suite" |
| Common names in the Canare table: SD-SDI (ST 259, 270 Mb/s for 525/625 4:3), HD-SDI (ST 292, 1080i, 1.485), 3G-SDI (ST 424, 1080p, 2.97), 12G-SDI (ST 2082-1, 4K UHD, 11.88) | V | Canare Electric (n.d.-d), "Typical Transmission Distance as per SMPTE Standard," header rows |
| ST 2082-1 "defines a bit-serial data structure, electrical signal and coaxial cable interface" for a payload of 11.88 or 11.88/1.001 Gb/s and "also specifies the electrical and physical characteristics of coaxial cables and connectors" | V | SMPTE (2018), p. 2, section 1 |
| The ST 2082 suite maps formats onto "single-link, dual-link and quad-link" 12 Gb/s interfaces; ST 2082-10 carries 2160-line formats on one 12G link | V | SMPTE (2018), p. 1 "Document Overview" and p. 3, section 2 |
| ST 297-1 defines an optical fiber system for the same SDI signals; ST 297-2 carries multiple SDI streams on one fiber using CWDM | V | SMPTE (2017), p. 1 |
| A camera CCU's SDI outputs are 0.8 Vp-p into 75 ohms on BNC: HD-SDI per ST 292-1 at 1.485 or 1.4835 Gb/s, SD-SDI per SMPTE 259M at 270 Mb/s, 12G-SDI per ST 2082-1 | V | Sony Corporation (2017), pp. 35 to 36, "Specifications: Input/output connectors" |
| AJA's FiDO 12G converters auto-detect and reclock 270 Mb/s, 1.483, 1.485, 2.967, 2.970, 5.934, 5.940, 11.868 and 11.880 Gb/s | V | AJA Video Systems (2023), p. 9, FiDO-T-12G "Reclocking" |

### 2b. BNC and its 12G variants

| Fact | Tag | Source |
|---|---|---|
| Canare's BCP-D55UHD BNC is "12G-SDI 4K UHD Capable," "SMPTE ST-2082-1 Compliant," and "Specifically engineered for the Canare 12G-SDI Cables" | V | Canare Corporation of America (n.d.-b), "12G BNC Connectors" |
| Canare's micro BNC (HBCP series) is "Compatible with Amphenol HD-BNCs" and ST 2082-1 compliant | V | Canare Corporation of America (n.d.-b), micro BNC "Key Features" |
| Canare's crimp tables pair each BNC with specific cables, including Belden 1694A for one micro BNC | V | Canare Corporation of America (n.d.-b), connector and crimp-tool tables |
| A BNC must match the cable it is crimped onto, not only the impedance | I | From the cable-specific tables in Canare Corporation of America (n.d.-b) |
| Canare's 12G BNC receptacle and patch products quote return loss by frequency, for example a right-angle micro BNC at 24 dB at 3 GHz, 20 dB at 6 GHz and 13 dB at 12 GHz | V | Canare Corporation of America (n.d.-b), micro right-angle BNC "Key Features" |

### 2c. How far SDI runs on coax

| Fact | Tag | Source |
|---|---|---|
| Canare's "typical transmission distance" table (meters), computed where cable loss reaches SMPTE's typical attenuation at half the clock frequency. L-5CFB: 420 (270 Mb/s), 112 (HD), 114 (3G), 68 (12G). L-4.5CHD: 415, 114, 119, 74. L-5.5CUHD: 566, 150, 157, 101. L-8CUHD: 789, 217, 225, 140. Mobile L-5.5CUHWS: 441, 117, 120, 70 | V | Canare Electric (n.d.-d), "Typical Transmission Distance as per SMPTE Standard" |
| The loss points Canare uses: 30 dB at 135 MHz for 270 Mb/s, 20 dB at 750 MHz for HD-SDI, 30 dB at 1.5 GHz for 3G-SDI, 40 dB at 6 GHz for 12G-SDI | V | Canare Electric (n.d.-d), same table, "Cable Loss @ 1/2 Clock" row |
| Canare's own caveat: "These values are not equivalent to actual transmission distances, which depends on the equalized distance of receiver"; check the receiver maker's equalized distance | V | Canare Electric (n.d.-d), footnotes under the distance table |
| AJA 12GDA cable equalization on Belden 1694A: 12 Gb/s 70 m; 6 Gb/s 120 m; 3 Gb/s 190 m; 1.5 Gb/s 195 m; 270 Mb/s 405 m | V | AJA Video Systems (n.d.), "Specifications: Cable Equalization (Belden 1694A coax)" |
| Semtech's GS12341 equalizer chip: 80 m at 11.88 Gb/s, 100 m at 5.94, 190 m at 2.97, 260 m at 1.485, 450 m at 270 Mb/s, all on Belden 1694A | V | Semtech (n.d.), "Features: Automatic cable equalization" |
| The same cable, 1694A, has three published 12G reaches: about 69 m at the SMPTE 40 dB loss point (40 ÷ 17.7 dB per 100 ft = 226 ft), 70 m behind AJA's 12GDA, 80 m behind Semtech's chip. Reach depends on the receiver | I | Arithmetic on Belden (2026a) with Canare Electric (n.d.-d)'s 40 dB point; AJA Video Systems (n.d.); Semtech (n.d.) |
| Canare publishes three different 12G figures for L-4.5CHD: 74 m (Japan table), 65 m (US 12G solutions page), 143 ft, about 44 m (US "Mastering" page). The US pages give no test conditions | V | Canare Electric (n.d.-d); Canare Corporation of America (n.d.-b), L-CHD "Key Features"; Canare Corporation of America (n.d.-a), L-4.5CHD card |
| Canare US lists maximum transmission distances of 190 ft (L-3.3CUHD), 335 ft (L-5.5CUHD), 469 ft (L-8CUHD) and 233 ft (mobile L-5.5CUHWS), without naming the rate | V | Canare Corporation of America (n.d.-a), cable cards |
| L-5.5CUHD can carry 4K UHD on one link "100 m or longer," "Depending on receiving equipment"; it is "Designed for fixed installation, please avoid repeated bending or external pressure" | V | Canare Electric (n.d.-d), "Key Features and Benefits" and notes |
| AJA's FiDO converters equalize coax inputs and reclock coax and fiber inputs, and carry 12G-SDI "up to 10km" on single-mode fiber | V | AJA Video Systems (2023), p. 4, "Overview" and "Features" |

### 2d. HDMI and DisplayPort: where they stop

| Fact | Tag | Source |
|---|---|---|
| HDMI LA: for Ultra High Speed HDMI Cable, "it is likely that the only way to meet the Ultra High Speed HDMI requirements in cables longer than a few meters is through powered, active HDMI Cables" | V | HDMI Licensing Administrator (n.d.), body text |
| HDMI LA: as speeds rose, "passive cables getting shorter or made thicker"; active optical cables (fiber for the high-speed lanes, copper for the auxiliaries) enable "much longer lengths in a relatively thin cable"; certification testing is required "for each length as electrical parameters can vary" | V | HDMI Licensing Administrator (2021), body text |
| Neither HDMI LA page fetched states a maximum length in meters | V | HDMI Licensing Administrator (n.d.; 2021) |
| VESA's DP54 cable spec supports four-lane UHBR13.5 (54 Gbps) "over a two-meter passive cable" | V | Video Electronics Standards Association [VESA] (2024), body text |
| VESA's DP80LL active cable supports four-lane UHBR20 (80 Gbps) "over an active cable up to three meters in length"; before it, users were "limited to a one-meter cable connection" at UHBR20 | V | VESA (2025), body text and quotation |
| DisplayPort.org's archived FAQ says "DisplayPort is specified and tested to run 15 meters without the need for a booster station" | V (archived page) | VESA (n.d.), "How Far Can I Run A DP Cable?" |
| The 15 m figure predates the UHBR cable classes, so the safe length depends on the data rate: 15 m for older rates per the archive, 2 m passive at UHBR13.5, 1 m passive or 3 m active at UHBR20 | I | Comparing VESA (n.d.), VESA (2024) and VESA (2025) |

### 2e. Reference (genlock), timecode and return video

| Fact | Tag | Source |
|---|---|---|
| A CCU's REFERENCE IN (BNC) "Inputs an HD tri-level reference sync signal or SD reference sync signal (black burst signal) for external sync"; the loop-through output is "automatically connected to a 75 Ω terminator" when unused | V | Sony Corporation (2017), p. 10, "Rear Panel," item i |
| Its reference spec: HD tri-level sync (SMPTE 274M) 0.6 Vp-p, 75 ohm; SD black burst NTSC 0.286 Vp-p or PAL 0.3 Vp-p, 75 ohm; BNC with loop-through | V | Sony Corporation (2017), p. 35, "REFERENCE IN/OUT" |
| Ikegami's CCU-970 genlock input takes HDTV tri-sync 0.6 Vp-p ± 6 dB or SD black burst, each as a "75Ω bridged connection" | V | Ikegami (n.d.-b), "Input Signals: GENLOCK signal" |
| AJA's GEN10 sync generator: six video sync outputs on BNC in two groups, each group set to HD tri-level (19 formats) or SD color black/75% bars; plus one AES-11 output on BNC; all outputs locked to one master time base; 3 ppm accuracy | V | AJA Video Systems (2014), p. 4 "Overview," p. 5 block diagram, p. 10 "Appendix A: Specifications" |
| AJA states its multiple outputs "can synchronize entire systems without requiring a Sync DA" | V | AJA Video Systems (2014), p. 4, "Features" |
| Reference is a 75-ohm BNC signal, and a bridged or loop-through input must be terminated in 75 ohms at the end of the chain (Sony's auto-terminates) | I | From Sony Corporation (2017) p. 10 and Ikegami (n.d.-b); the reviewer should confirm the house rule for manual terminators |
| Blackmagic's URSA Broadcast G2 lists "Reference Inputs: Tri-Sync/Black Burst/Timecode" and a BNC timecode input that the camera detects and locks its internal generator to | V | Blackmagic Design (n.d.-b), "Reference Inputs"; Blackmagic Design (n.d.-a), "Built in Timecode Generator" |
| Blackmagic quotes its timecode clock at "Less than 1 frame drift every 8 hours" | V | Blackmagic Design (n.d.-b), "Timecode Clock" |
| QSC's LTC generator "generates a Linear Timecode (LTC) audio signal, per the SMPTE 12M specification," at 24, 25, 30 or pulldown rates, with a drop-frame mode "to stay in sync with wall clock time" | V | QSC (n.d.), description and properties |
| LTC is an audio-band signal, not a video sync signal, which is why timecode and genlock are separate inputs | I | From QSC (n.d.) and Blackmagic Design (n.d.-b); the timecode-versus-genlock distinction itself is already taught in CREW-04 |
| Return video: a CCU takes return feeds on 75-ohm BNC (Sony: two SDI and two analog VBS returns; Ikegami CCU-970: four 3G/HD-SDI returns, two when its frame synchronizer is on) and sends them up the camera cable | V | Sony Corporation (2017), p. 10 item e and p. 35; Ikegami (n.d.-b), "Features" and "Return signal" |
| Blackmagic: pressing PGM switches the viewfinder "to the program return feed from the switcher," so an operator far from the switcher can watch the show | V | Blackmagic Design (n.d.-a), program return paragraph |

---

## 3. Camera cables

### 3a. What a CCU or base station does

| Fact | Tag | Source |
|---|---|---|
| Sony's HXCU-FB80 CCU "performs signal processing, provides an interface for external equipment, and supplies power to the camera"; with a Remote Control Panel it forms a camera control system | V | Sony Corporation (2017), p. 3, "Overview" |
| Ikegami: the CCU "is connected to the camera using fiber cable to transmit video, audio and control signals, as well as, supplying the power to the camera when hybrid fiber/copper cable is used" | V | Ikegami (n.d.-d), CCU-430 description |
| A CCU's back panel shows its jobs: SDI program and monitor outputs, return video inputs, reference input, prompter feed, intercom (4-wire, Clear-Com or RTS), program sound, tally, and data trunk | V | Ikegami (n.d.-b), "Input Signals" and "Output Signals"; Ikegami (n.d.-a), specifications |
| Blackmagic's Studio Fiber Converter "converts SDI video, audio, and remote camera control connections into a single optical fiber cable," provides 12G-SDI for the camera feed, three HD return feeds, talkback, tally, and "power for your remote cameras" | V | Blackmagic Design (n.d.-b), "Blackmagic Studio Fiber Converter: Description" |

### 3b. Triax

| Fact | Tag | Source |
|---|---|---|
| Ikegami's DTA-55/BST-55 is "a triax transmission system" that lets owners move from SD to HD "while still using their existing triax camera cable infrastructure," a "rugged easy to repair cable/connector type" | V | Ikegami (n.d.-a), description |
| The BST-55 triax base station handles reference, two SDI and two analog returns, intercom, program sound, tally and an RS-422 data trunk, and supplies "Power for camera head: less than 180VA"; maximum cable distance 800 m on Fujikura 8.8 mm triax | V | Ikegami (n.d.-a), specifications |
| Because the triax is the only link between the BST-55 and its camera adaptor, all of those signals and the camera's power share one triax cable | I | From Ikegami (n.d.-a); confirm against a triax manual (Grass Valley's are not reachable) |
| HDK-79EC triax distances: 850 m on 8.8 mm Fujikura; 1,550 m on 14.5 mm Fujikura; 500 m on 9.2 mm Belden 9267; 1,000 m on 13.2 mm Belden 9232. Thicker triax runs farther | V | Ikegami (n.d.-c), p. 5, "Transmission Distance" |
| LEMO's white paper: HDTV can run on "digital grade RG-11/U type 75 ohm triax" under about 1000 m; a repeater extends it to about 2000 m (figures it attributes to Grass Valley LDK 6000 Mk II literature) | V (dated; older camera) | Longhurst and Brooks (2017), PDF p. 2 |
| LEMO's white paper: a broken triax can get a "fast and dirty" repair with a stripper and insulation tape; triax is terminated with copper tooling | V | Longhurst and Brooks (2017), PDF p. 2 |
| Fischer (a triax connector maker) says its 1051 Triax HD Pro+ reaches "up to 1.5 kilometers" in HD without a repeater, is backward compatible with genuine 1051 parts, and can be repaired in about 10 minutes with simple tools | V (maker's own claim) | Richards (2018), pp. 4 to 5 |
| Fischer warns that a fiber connector using a 9-micron single-mode core "such as SMPTE 304" can cause problems in sand, mud or water "without extreme care" | V (maker of the competing technology) | Richards (2018), p. 4 |

### 3c. SMPTE ST 311 hybrid cable and ST 304 connectors

| Fact | Tag | Source |
|---|---|---|
| Canare's LF-2SM9N, sold as SMPTE ST 311 compliant: 2 single-mode 9/125 fibers (low water peak), 4 × 20 AWG power conductors, 2 × 25 AWG control conductors; 9.2 mm OD; minimum bend radius 6 × OD; -40 to +75 °C | V | Canare Electric (n.d.-c), specification table |
| Its fiber is ITU-T G.657.A2, "low bending loss" single-mode | V | Canare Electric (n.d.-c), "Key Features and Benefits" |
| 6 × 9.2 mm is about 55 mm minimum bend radius for that cable; the sheet does not say whether that is during pulling or after installation | I | Arithmetic on Canare Electric (n.d.-c); open check |
| LEMO's 3K.93C SMPTE hybrid insert: "2 FO Type FS, 2 HV + 2 LV" (two fiber, two high-voltage, two low-voltage contacts); cable type "SMPTE 311M or EBU R100"; push-pull locking; rated current 10 A; working voltage 600 V power, 42 V signal | V | LEMO (n.d.), p. 2, "Technical details" |
| Camplex describes the LEMO 3K.93C SMPTE 304M connector as "two singlemode fibers, two power conductors and two low voltage conductors in a single connector," single-mode only | V | Camplex (2019a), "SMPTE Hybrid 304M Connector" |
| LEMO states its 3K.93C meets SMPTE 304M-1998, ARIB BTA S-1005B and EBU R100-1999; typical attenuation 0.1 dB and return loss over 45 dB from its data sheet | V | Longhurst and Brooks (2017), PDF p. 7 |
| Canare's SMPTE (FC) camera cable assemblies are ST 304, ST 311 and ARIB BTA S-1005B compliant, with return loss 45 dB or more and insertion loss 0.5 dB or less at 1.3 µm | V | Canare Electric (n.d.-b), "Key Features and Benefits" |
| Canare's Japanese-style OC hybrid connectors carry "the same combination of SMPTE but different pinouts" and are "non-compatible with SMPTE connectors"; a conversion cable is needed | V | Canare Electric (n.d.-b), "About Camera Cable Assemblies" |
| Blackmagic's camera-side fiber converter has a SMPTE 304 connector (male); its studio-side converter has a female SMPTE 304 connector | V | Blackmagic Design (n.d.-b), "Optical Fiber Input" entries |
| The 600 V figure is LEMO's connector working-voltage rating, not the voltage a CCU actually sends; no fetched source states the power voltage on the copper | I | From LEMO (n.d.); open check before any lesson names a voltage |
| Hybrid cable reach with power from the CCU: Ikegami UHK-430 up to 4 km (13,123 ft); Sony HXC-FB80 with lens and viewfinder 600 m on Sony CCFN hybrid cable, camera adaptor 250 m; Blackmagic "up to 2 km" | V | Ikegami (n.d.-d), CCU-430 description; Sony Corporation (2017), p. 34, "About Transmission Distance"; Blackmagic Design (n.d.-a) |
| Sony: reach on hybrid cable "varies depending on the total power consumption of the connected peripherals" | V | Sony Corporation (2017), p. 34 |
| LEMO: with the camera powered over the hybrid cable, distance "is only limited by the voltage drop in the electrical power part"; with local power, HD can run "well over 20km" of single-mode fiber | V | Longhurst and Brooks (2017), PDF p. 3 |
| Without hybrid copper, single-mode fiber alone carries "all signals (except power)": Sony up to 10 km on general single-mode cable with LC connectors; Ikegami up to 10 km with local camera power | V | Sony Corporation (2017), pp. 5 to 6 and p. 10 item g; Ikegami (n.d.-d) |
| Sony: dust on hybrid or single-mode terminations "may" cause transmission errors; replace the cable's cap when not in use | V | Sony Corporation (2017), p. 10, note under item g |
| LEMO: "Any connector that is filled with water will have problems if it is to handle power"; waterproof end caps are "essential" | V | Longhurst and Brooks (2017), PDF p. 3 |
| Canare's hybrid cleaning note: clean ferrule tips and sides, alignment sleeves and connector shells; plugs with a non-alcohol cleaning stick; shells with cotton gauze; scratches or particles on a ferrule tip "can have a disabling effect" | V | Canare Electric (n.d.-b), "Technical Note" |

### 3d. Tactical fiber

| Fact | Tag | Source |
|---|---|---|
| Camplex Pro-Tac: single-mode tactical fiber on reels with 4, 8 or 12 fanouts, ST or LC connectors, "crush resistant with internal aramid strength members and a polyurethane jacket," for "multiple deployments in outside broadcast"; "Can be used directly on the ground for temporary deployment" | V | Camplex (n.d.-a), description and "Features" |
| Camplex sells converter and reel systems that "Convert and extend 4K HD/3G/6G/12G-SDI, HDMI, 100BaseT Ethernet, and audio signals over tactical fiber" | V | Camplex (n.d.-c), "Signal Extender & Reel Systems" |
| Tactical fiber is fiber only, with no power copper, so the camera end needs local power or a separate feed; this is the practical difference from a SMPTE hybrid cable | I | Camplex (n.d.-a) describes fibers and strength members only; Canare Electric (n.d.-c) lists the hybrid's copper. Confirm with a reviewer |
| An SDI-to-fiber converter pair (for example AJA FiDO, LC or ST single-mode) is the usual way a tactical run carries SDI | I | From AJA Video Systems (2023), p. 4, and Camplex (n.d.-c) |

---

## 4. Fiber

### 4a. Single-mode and multimode

| Fact | Tag | Source |
|---|---|---|
| Single-mode core 9 µm; multimode 62.5 or 50 µm; both have 125 µm cladding. Multimode classes: OM1 (62.5/125), OM2, OM3, OM4 (50/125) | V | Camplex (n.d.-b), "How Does Fiber Optics Work?" |
| Camplex comparison: multimode uses 850 and 1300 nm sources, "Typically under 2km," for data centers, MADI and CCTV; single-mode uses 1310 and 1550 nm lasers, "Typically over 2km," for outside broadcast, ENG and live events | V | Camplex (n.d.-b), comparison chart |
| Do not use a multimode adapter on single-mode fiber or the reverse: "the core diameters/mode fields differ," causing high loss or reflection | V | Camplex (n.d.-d), "Common Pitfalls & FAQ Highlights" |
| FOA's typical fiber attenuation for loss budgets: multimode 3 dB/km at 850 nm and 1 dB/km at 1300 nm; single-mode 0.4 dB/km at 1310 nm and 0.3 dB/km at 1550 nm (with TIA-568 maximums in brackets on the page) | V | Fiber Optic Association [FOA] (n.d.-a), "Step 1. Fiber loss" table |
| SMPTE hybrid camera cable and broadcast fiber converters use single-mode (Canare LF-2SM9N; AJA FiDO 12G; Sony's 10 km link) | V | Canare Electric (n.d.-c); AJA Video Systems (2023), p. 4; Sony Corporation (2017), p. 34 |

### 4b. Jacket and connector color codes (as FOA restates TIA-598)

| Fact | Tag | Source |
|---|---|---|
| FOA's table of TIA-598 jacket colors (non-military): OM1 62.5/125 orange; OM2 50/125 orange; OM3 and OM4 (laser-optimized 50/125) aqua; OM5 lime green; single-mode (OS1, OS1a, OS2) yellow; polarization-maintaining single-mode blue. Military: OM1 slate | V | FOA (n.d.-d), "Cable Jacket Colors" table |
| Other jacket colors are allowed "providing that the print on the outer jacket identifies fiber classifications"; outdoor cables are generally black, with markings printed on | V | FOA (n.d.-d), notes under the table |
| Connector color: 62.5/125 beige; OM2 black; OM3 and OM4 aqua; OM5 lime; single-mode blue; single-mode APC green | V | FOA (n.d.-d), "Connector Color Codes" table |
| If unsure, core size can be checked by looking at the ferrule with an inspection microscope "while illuminating the fiber with a white light" | V | FOA (n.d.-d), text above the connector table |
| Read the jacket print, not just the color: a black outdoor or tactical jacket says nothing about fiber type by itself | I | From FOA (n.d.-d)'s allowance for other colors and black outdoor jackets |

### 4c. LC, SC and ST connectors

| Fact | Tag | Source |
|---|---|---|
| ST: bayonet mount, long cylindrical 2.5 mm ceramic (usually) ferrule; spring-loaded, so make sure it is seated; "If you have high loss, reconnect them" | V | FOA (n.d.-f), "ST" |
| SC: snap-in connector with a 2.5 mm ferrule that "latches with a simple push-pull motion"; also comes in duplex | V | FOA (n.d.-f), "SC" |
| LC: small form factor connector with a 1.25 mm ferrule, "half the size of the SC," "highly favored for singlemode" | V | FOA (n.d.-f), "LC" |
| ST, SC and FC share the 2.5 mm ferrule and can be mated through hybrid adapters | V | FOA (n.d.-f), "Mating Dissimilar Connectors" |
| ST keys its ferrule "and a bayonet lock similar to a BNC shell"; LC is often found on SFP and SFP+ transceivers; Neutrik opticalCON puts duplex LCs in a rugged metal housing with a shutter against dirt | V | Camplex (2019a), connector panels |
| FOA's history: AT&T's ST replaced FC's screw nut "with a bayonet lock like a BNC coax connector"; NTT then introduced the SC | V | FOA (n.d.-c), "NTT FC, AT&T ST, NTT SC" |
| Fiber adapters (couplers) align two ferrules in a ceramic or metal sleeve; ceramic is more precise and durable; Camplex suggests aiming for adapter loss of 0.2 dB or less | V | Camplex (n.d.-d), "What are Fiber Optic Adapters?" and "How to Choose" |

### 4d. PC, UPC and APC polish

| Fact | Tag | Source |
|---|---|---|
| Air-gap connectors typically lost 0.5 dB or more with 20 dB return loss; physical-contact (PC) connectors typically 0.3 dB with 30 to 50 dB return loss; "Super PC or Ultra PC are simply marketing names" for polishing processes | V | FOA (n.d.-c), PC and APC paragraphs |
| APC angles the ferrule end 8 degrees so reflected light "is absorbed in the cladding," for reflection-sensitive single-mode systems such as CATV and high-bit-rate telco links | V | FOA (n.d.-c) |
| Camplex: PC back reflection better than -40 dB, UPC better than -50 dB, APC better than -60 dB; APC generally has higher insertion loss; "Only mate to other angle-polished connectors" | V | Camplex (2019a), "Fiber Optic Connector Polish Types" |
| Green body or boot means single-mode APC; blue means single-mode PC or UPC | V | FOA (n.d.-d), connector table; FOA (n.d.-f), color code note |

### 4e. Inspect before you connect: inspection and cleaning

| Fact | Tag | Source |
|---|---|---|
| "Inspection, cleaning and re-inspection are critical steps for the connector as well as the bulkhead before you make any fiber-optic connection" | V | Camplex (2019b), p. 1 |
| A 1 µm dust particle on a single-mode core "can block up to 1% of the light (a 0.05dB loss)"; a 9 µm speck can completely block the core; a human hair is 50 to 75 µm | V | Camplex (2019b), p. 1 |
| FOA: "Always clean connectors before mating"; inspect after cleaning; keep dust caps on; never use cotton swabs or cloth; use reagent-grade 99% isopropyl alcohol and lint-free pads if wet-cleaning; never use shop compressed air or blow on a connector | V | FOA (n.d.-b), body text |
| LEMO's white paper rule for hybrid camera connectors: "inspect the endface and if it isn't dirty don't touch it"; if dirty, clean it | V | Longhurst and Brooks (2017), PDF p. 5 |
| FOA calls dust caps "protective caps": they may carry dust and mold release, so clean and inspect a connector when its cap comes off | V | FOA (n.d.-h), introduction |
| FOA reports that network operators "claim that 15-50% of all network problems can be traced to dirty connectors" | V (a reported claim, teach it as a claim) | FOA (n.d.-h), introduction |
| Dirty connectors cause "high connector loss, high reflectance" and can contaminate transceivers; dirt mated between two ferrules can scratch them and transfer to the other connector | V | FOA (n.d.-h), introduction |
| Field microscopes run 100X to 400X; good ones filter infrared; "A video microscope is preferable since it offers no danger to the eye" | V | FOA (n.d.-h), "Optical Inspection Of Connectors with Microscopes" |
| Camplex lists IEC 61300-3-35 as the endface inspection standard, with zones A (core) to D (contact) and stricter limits nearest the core | V (Camplex's summary; the standard is paywalled, so teach only the zone idea) | Camplex (2019b), p. 1 |

### 4f. Loss budgets

| Fact | Tag | Source |
|---|---|---|
| The power budget is the loss a link can tolerate, transmitter output minus receiver sensitivity; it may have a minimum as well as a maximum so the receiver is not overloaded | V | FOA (n.d.-a), "Power Budgets And Loss Budgets" |
| The loss budget is the estimated loss of the installed cable plant: fiber loss plus connection loss plus splice loss; it is used in design and compared with test results after installation | V | FOA (n.d.-a), same section and "Analyze Link Loss In The Design Stage" |
| "Connectors have no loss; only connections have loss" (a mated pair) | V | FOA (n.d.-a), note under the link drawing |
| Typical connection loss: multimode 0.2 to 0.5 dB; factory-made single-mode 0.1 to 0.2 dB; field-terminated single-mode as high as 0.5 to 1.0 dB; TIA-568 allows 0.75 dB per connection and 0.3 dB per splice (as FOA states them); single-mode fusion splices typically under 0.05 dB | V | FOA (n.d.-a), "Step 2. Connection Loss" and "Step 3. Splice Loss" |
| FOA's worked 0.2 km multimode example: 0.6 dB fiber (850 nm) + 0.9 dB for three connections + 0.3 dB splice | V | FOA (n.d.-a), Steps 1 to 4 tables |
| AJA FiDO-T-12G optical output: -5 dBm minimum, +0.5 dBm maximum at 1310 nm; FiDO-R-12G sensitivity -10 dBm at 6 and 12 Gb/s, -14 dBm at lower rates; overload -2 dBm | V | AJA Video Systems (2023), p. 9 (FiDO-T-12G) and p. 12 (FiDO-R-12G) |
| That FiDO pair has about a 5 dB power budget at 12G (-5 minus -10). Ten kilometers of single-mode at FOA's typical 0.4 dB/km is 4 dB, plus two connections at 0.1 to 0.2 dB, which fits AJA's "up to 10km" | I | Arithmetic on AJA Video Systems (2023) and FOA (n.d.-a) |
| On a very short link a +0.5 dBm transmitter can exceed the -2 dBm overload point, which is the case FOA describes for adding an attenuator at the receiver | I | From AJA Video Systems (2023) and FOA (n.d.-a); open check whether AJA recommends an attenuator |

### 4g. Bend radius

| Fact | Tag | Source |
|---|---|---|
| FOA's normal recommendation: minimum bend radius 20 × cable diameter under tension during pulling, 10 × after installation; some cables differ (15 ×); "Always check with the manufacturer" | V | FOA (n.d.-e), "Typical Specifications" |
| Radius is not diameter: a 20 × radius rule means a pulley or capstan 40 × the cable diameter; FOA's example, a 13 mm cable needs a 260 mm radius under tension | V | FOA (n.d.-e), "Bend radius example" |
| Damage from bending "may not always be obvious": broken fibers, higher loss from stress, structural damage; damage in installation can void the maker's warranty | V | FOA (n.d.-e), "Bend Radius or Diameter?" |
| Maker specs vary widely: Canare's ST 311 hybrid says 6 × OD; FOA's general rule is 10 × to 20 ×. Teach the maker's number for the cable in hand | I | Canare Electric (n.d.-c) against FOA (n.d.-e) |

### 4h. Laser safety

| Fact | Tag | Source |
|---|---|---|
| FDA hazard classes with the IEC equivalents: I (IEC 1, 1M) "Considered non-hazardous," more hazard with magnifiers or binoculars; II (2, 2M); IIIa (3R); IIIb (3B) "Immediate skin hazard from direct beam and immediate eye hazard when viewed directly"; IV (4) hazard from direct or reflected beam, possible fire hazard | V | U.S. Food and Drug Administration [FDA] (2024), "Laser Hazard Classes" table |
| AJA FiDO converters are "CDRH Compliant Class 1"; AJA's warning: active fiber cables "emit radiation invisible to the human eye. Do not look directly at the end of an active fiber-optic cable or the fiber connector" | V | AJA Video Systems (2023), p. 17 "Laser" and p. 23 warning |
| Sony's CCU ships with its LASER DIODE output OFF for single-mode-only links; the user turns it on in a menu; the setting is unnecessary with hybrid (composite) cable | V | Sony Corporation (2017), p. 12, "Settings when Connecting with Only Single-Mode Optical Fiber Cable" |
| Fiber light is mostly infrared and invisible; "Never look into a fiber end"; test a fiber with a power meter before working on it | V | FOA (n.d.-g), "Eye Safety" and safety rules |
| A microscope "will focus virtually all the light back into the eye"; check power with a meter before inspecting, and use microscopes with IR filters | V | FOA (n.d.-g), "Focusing Light Into The Eye Can Be Dangerous"; FOA (n.d.-h), "Note On Eye Safety" |
| Most communications links are too low in power to harm the eye, but CATV and DWDM links with fiber amplifiers can be "as much as 100 times more" powerful | V | FOA (n.d.-g), "Power In Fiber Optic Networks" and "Safety In High Power OSP Links" |
| Fiber shards are the more common hazard: wear safety glasses with side shields, use a black work mat, put scraps in a sealed container, keep food and drink out of the work area | V | FOA (n.d.-g), "Bare Fiber Safety" and safety rules |
| Class 1 under normal use does not make "look into it" safe: FDA says class I hazard increases with optical aids, and FOA says a microscope concentrates the light | I | FDA (2024) with FOA (n.d.-g) |

---

## Teach this, not that

1. **Not** "1694A is a 12G cable." Belden's sheet lists 6 Gb/s UHDTV and HD-SDI 1080p, not 12G (Belden, 2026a). **Teach:** AJA and Semtech publish 12G reach over 1694A (70 m and 80 m) because their receivers equalize it; check the cable sheet and the receiver sheet together.
2. **Not** one "maximum length" per cable. Canare alone gives L-4.5CHD three 12G figures (74 m, 65 m, about 44 m). **Teach** Canare's own footnote: the receiver's equalization decides the real distance.
3. **Not** "75 and 50 ohm BNCs won't connect," and **not** "it makes no difference." DDK says they intermate, and limits that to below 200 MHz; Canare explains the reflection. **Teach:** it fits, and it reflects.
4. **Not** "N connectors are all the same." Canare says its 75-ohm N cannot mate with a 50-ohm N.
5. **Not** "HDMI is good to X meters." HDMI LA's fetched pages give no number; they say Ultra High Speed cables over "a few meters" are likely active.
6. **Not** "DisplayPort runs 15 m" for current high-rate gear. That is an archived FAQ; VESA's 2024 and 2025 releases give 2 m passive (UHBR13.5), 1 m passive and 3 m active (UHBR20).
7. **Not** the LEMO white paper's "1.458 Gb/s" for SMPTE 292M; it is a transposition. SMPTE's overview gives 1.485 Gb/s.
8. **Not** "SMPTE camera fiber is multimode." ST 311 cable carries two single-mode fibers (Canare LF-2SM9N; LEMO; Camplex).
9. **Not** "all hybrid camera connectors intermate." Canare's Japanese-style OC connectors are non-compatible with SMPTE FC connectors.
10. **Not** "the camera cable carries 600 volts." 600 V is LEMO's contact rating. The real supply voltage is unsourced (open check), and the course must not name one.
11. **Not** "UPC and APC are interchangeable." Camplex: only mate angle-polished to angle-polished. Green means APC.
12. **Not** "invisible means off." Fiber light is infrared; check with a power meter, never look into a fiber end, and never inspect a live fiber through an unfiltered microscope (FOA).
13. **Not** "15 to 50 percent of network problems are dirty connectors" as a measured statistic. FOA reports it as what network operators claim.
14. **Do not quote** these source slips: Coaxicom's "RF ... 3 MHz to 3 GHz" band definition; Camplex's "Less immune to contamination" for multimode; Camplex Pro-Tac's "typical IL -55dB" (a return-loss figure written as insertion loss, most likely).
15. **Cleaning rule conflict:** FOA says always clean before mating; LEMO says inspect first and do not touch a clean endface; Camplex says inspect, clean, re-inspect. **Teach** inspect first, clean if needed, re-inspect, and follow the crew chief's house rule. The reviewer settles which wording the lesson uses.

## Already taught elsewhere in the catalog

**Correction to the brief.** The brief's Connections list puts the three fiber lessons in `sound-craft` (CREW-02). They are in `scripts/data/arena-transmission-course.ts` (CREW-05), section "6 · Fiber and the physical layer." `sound-craft-course.ts` has no fiber content (0 matches for "fiber"); it mentions Dante twice.

| Where | What it already teaches | What CREW-00 should do |
|---|---|---|
| CREW-05 `fiber-on-the-map` (lesson 20) | HSAN's fourth generation rides on more than 68,000 miles of AT&T fiber; fiber conduit from different directions; HSAN2's 10-gig racks (2014); the carrier owns the fiber; cabling and heights appear on postings; a table of what that course does **not** teach: connector types, inspection and cleaning steps, polarity, light levels, loss budgets, laser safety | Teach those missing topics here (section 4 facts above) and link back |
| CREW-05 `where-to-learn-fiber` (lesson 21) | FOA Fiber U course list and times; $10 MiniCourse certificates; CFOT entry paths and its 100-question, 70-to-pass exam; four goals (identify LC, SC and ST 10 of 10; inspect, clean and re-inspect an LC; use a visual fault locator; explain a loss budget) | Link for study paths and certification; CREW-00 supplies the identification and loss-budget content those goals point to |
| CREW-05 `a-fiber-kit-and-first-lab` (lesson 22) | Kit prices (Smart Click LC cleaner $35.94; FIS mini VFL $69.95, as of October 21, 2026); a provisional precaution (finish FOA safety, never look into a fiber end, never point the VFL at anyone); a five-step home lab | Link for the kit and lab; CREW-00's sourced laser-safety facts (FDA, FOA, AJA) can replace that lesson's "not yet sourced" precaution |
| CREW-05 `st-2110-separate-streams` and `one-clock-ptp` | How SDI maps onto ST 2110 parts; 16 embedded audio channels on HD-SDI, 32 on 3G-SDI level A; SDI timing and the gateway alignment point. It leaves genlock out on purpose | CREW-00 teaches the copper reference line (tri-level, black burst on 75-ohm BNC) and links to CREW-05 for PTP |
| CREW-04 `outputs-timecode-and-genlock` (lesson 7) | Camera outputs (FX3 HDMI only; FX6 12G/6G/3G SDI plus BNC timecode; Komodo-X tri-level genlock input); locking BNC; HDMI-to-SDI converter; timecode versus genlock; frame synchronizers (AJA FS-Mini locks to blackburst or tri-level) | Link, do not repeat; CREW-00 adds the cable side (75 ohm, BNC, run lengths) |

## Not reachable

These returned an error to an automated reader on October 26, 2026. No workaround was tried. A person should open each in a browser.

| URL | Result | What it should have given |
|---|---|---|
| https://www.belden.com/products/cable/coax-cable/1694a | 403 | Belden's 1694A product page. (The tech data PDF was read instead from catalog.belden.com.) |
| https://www.belden.com/blog/broadcast/12g-sdi-distance-challenges-to-consider-for-media-av-projects | 403 | Belden's estimated SDI transmission distance chart at 3G, 6G and 12G and its caveats |
| https://lv.mouser.com/datasheet/3/6/1/1694A_techdata.pdf and https://www.mouser.lt/datasheet/3/6/1/1694A_techdata.pdf | Timeout and HTTP/2 stream error | Distributor copy of the 1694A sheet (not needed; Belden's own copy was read) |
| https://barco.com/en/support/knowledge-base/2194-what-is-12gsdi-and-what-cables-can-be-used | 403 | Barco's 12G cable table and its BNC caveat |
| https://www.amphenolrf.com/en-us/resources/faq/can-i-use-50-ohm-connectors-in-a-75-ohm-system/ | 403 | Amphenol RF's answer on mixing 50 and 75 ohm connectors (mating, VSWR, damage) |
| https://www.pasternack.com/blog/coaxial-cable/12-tips-faqs-selecting-right-coaxial-cable/ | Bot check (Incapsula) | Pasternack's 50 versus 75 ohm guidance |
| https://blog.fairviewmicrowave.com/2023/03/09/basics-of-rf-coaxial-cable | TLS error | Fairview's RF coax basics (impedance, VSWR, attenuation) |
| https://www.osha.gov/otm/section-3-health-hazards/chapter-6 | 403 | OSHA Technical Manual laser hazard classes (FDA's page was used instead) |
| https://wwwapps.grassvalley.com/docs/Manuals/cameras/ldk8000/3922-496-31341.v01.b501.pdf | 403 | Grass Valley LDK 8000 manual: power and signals over triax, triax lengths by cable |
| https://wwwapps.grassvalley.com/docs/Manuals/cameras/triaxrepeater/HDTV_Repeater_Users_Guide_v3.pdf | 403 | Grass Valley HDTV triax repeater guide: extended triax distances |
| https://grassvalley.com/products/spg8000a and https://gvcmsumb.grassvalley.com/media/rdhmxiyu/tektronix_spg8000a_ds-pub-3-0586a-en.pdf | 404 and DNS failure | SPG8000A master sync generator: black burst, tri-level and LTC outputs |
| https://www.canford.co.uk/FISCHER-TRIAX-CONNECTORS-1051-Series | 403 | Distributor description of the Fischer 1051 triax connector series |
| https://www.gepco.com/ | DNS failure | Gepco SDI cable run-length tables |
| https://pro.sony/ | 403 | Sony camera system pages (Sony's HXCU-FB80 manual was read on an authorized dealer's site instead) |

## Research checks still open

1. What DC or AC voltage do current CCUs (Sony, Grass Valley, Ikegami, Blackmagic) put on the copper of an ST 311 hybrid cable, and what interlock keeps an unmated connector from being live?
2. Does pushing a 50-ohm BNC plug into a 75-ohm BNC jack damage current 75-ohm jacks, or is that only true of older parts? (Only forum claims were found; Amphenol's FAQ was not reachable.)
3. What connectors terminate triax on current camera systems, and are Fischer 1051 and other triax families intermateable?
4. What triax distances does Grass Valley publish for its current LDX triax systems?
5. What does Belden's own estimated SDI distance chart give for 1694A and 4794R at 3G, 6G and 12G?
6. Does the HDMI specification (not the public pages) set a maximum passive length for any cable category?
7. On current broadcast gear, which connectors carry LTC (BNC, XLR, LEMO), and at what level?
8. Which cleaning rule should the lesson teach as the default: FOA's "always clean before mating" or LEMO's "if it isn't dirty don't touch it"?
9. What laser class do SMPTE fiber camera transmitters carry (Sony, Grass Valley, Ikegami)? The Sony manual pages read do not state one.
10. Does AJA recommend an optical attenuator for very short FiDO links, given the transmitter maximum (+0.5 dBm) is above the receiver overload point (-2 dBm)?
11. Is Canare's "6 x Nom. O.D" minimum bend radius for LF-2SM9N a pulling (dynamic) or installed (static) figure?
12. Is the HDMI LA blog post bylined to a named author (the page shows a name beside the date)? If so, the reference should list that author.
13. Can a reviewer confirm the 75-against-50-ohm arithmetic in section 1b (reflection coefficient 0.2, VSWR 1.5, about 14 dB return loss) before a lesson teaches it?
14. Does any current maker publish a 6G-SDI typical distance for its cables? Canare's table has no ST 2081 column.

## References

AJA Video Systems. (n.d.). *12GDA: 12G-SDI 1x6 distribution amplifier* [Product page]. Retrieved October 26, 2026, from https://www.aja.com/products/12gda

AJA Video Systems. (2014). *GEN10 mini-converter HD/SD sync generator: Installation & operation guide* (Version 1.0r2). https://www.aja.com/support/item-download/90/AJA_manual_GEN10_v1.0r2.pdf (retrieved October 26, 2026)

AJA Video Systems. (2023). *FiDO 12G series SDI/optical fiber mini-converters: Installation and operation guide* (Version 1.4). https://www.aja.com/support/item-download/9429/AJA_FiDO-12G-Series_Manual_v1.4.pdf (retrieved October 26, 2026)

Belden. (2025a). *Product 1800F: Digital microphone cable, 1 pr #24 str BC, 95% TC French braid, PVC jkt, CL2R, flexible* [Technical data sheet, revision 0.523]. https://catalog.belden.com/techdata/EN/1800F_techdata.pdf (retrieved October 26, 2026)

Belden. (2025b). *Product 8412: Microphone cable, 2 C #20 str TC, rayon & 85% TC braid, cotton serve, EPDM jkt* [Technical data sheet, revision 0.523]. https://catalog.belden.com/techdata/EN/8412_techdata.pdf (retrieved October 26, 2026)

Belden. (2026a). *Product 1694A: 75 ohm SDI coax, RG-6, 18 AWG, solid BC, foil + 95% TC braid, PVC jkt, CMR* [Technical data sheet, revision 0.716]. https://catalog.belden.com/techdata/EN/1694A_techdata.pdf (retrieved October 26, 2026)

Belden. (2026b). *Product 4794R: 4K UHD coax for 12G-SDI, 75 ohm, series 7, 16 AWG solid SC, tri-shield, PVC jkt, CMR* [Technical data sheet, revision 0.405]. https://catalog.belden.com/techdata/EN/4794R_techdata.pdf (retrieved October 26, 2026)

Blackmagic Design. (n.d.-a). *Blackmagic URSA Broadcast G2* [Product page]. Retrieved October 26, 2026, from https://www.blackmagicdesign.com/products/blackmagicursabroadcast

Blackmagic Design. (n.d.-b). *URSA Broadcast: Tech specs* [Product specifications]. Retrieved October 26, 2026, from https://www.blackmagicdesign.com/products/blackmagicursabroadcast/techspecs

Camplex. (n.d.-a). *Pro-Tac series: Fiber optic tactical snake on reel* [Product page]. Retrieved October 26, 2026, from https://www.camplex.com/products/product/pro-tac-series

Camplex. (n.d.-b). *Single mode multimode fiber cable explained*. Retrieved October 26, 2026, from https://www.camplex.com/single-mode-and-multimode-fiber-cable

Camplex. (n.d.-c). *Tactical cables* [Product category page]. Retrieved October 26, 2026, from https://www.camplex.com/products/category/tactical

Camplex. (n.d.-d). *Understanding fiber optic adapters: Small components with big impact*. Retrieved October 26, 2026, from https://www.camplex.com/resource-center/understanding-fiber-optic-adapters

Camplex. (2019a). *Identifying fiber connector & polish types* [Data sheet]. https://www.camplex.com/Portals/0/Documents/Data%20Sheets/identifying.pdf (retrieved October 26, 2026)

Camplex. (2019b). *Inspecting & cleaning fiber optic connections* [Data sheet]. https://www.camplex.com/Portals/0/Documents/Data%20Sheets/inspecting.pdf (retrieved October 26, 2026)

Canare Corporation of America. (n.d.-a). *Mastering Canare 12G-SDI*. Retrieved October 26, 2026, from https://www.canare.com/mastering-canare-12g-sdi

Canare Corporation of America. (n.d.-b). *12G SDI/4K solutions*. Retrieved October 26, 2026, from https://www.canare.com/12gsdi4ksolutions

Canare Electric. (n.d.-a). *Connectors* [Catalog 27C, PDF]. Retrieved October 26, 2026, from https://canare.co.jp/en/catalog/docs/27C/Canare27C_Connectors.pdf

Canare Electric. (n.d.-b). *HFO camera cable assemblies (flanged type)* [Product page]. Retrieved October 26, 2026, from https://www.canare.co.jp/en/products/fiber_optic_systems/index.php?tid=1_023

Canare Electric. (n.d.-c). *Hybrid fiber-optic camera cables (SMPTE ST 311)* [Product page]. Retrieved October 26, 2026, from https://www.canare.co.jp/en/products/fiber_optic_systems/index.php?tid=1_045

Canare Electric. (n.d.-d). *Ultra coax* [Product page]. Retrieved October 26, 2026, from https://canare.co.jp/en/products/cables/index.php?tid=4_010_uc

Coaxicom. (2014, August 22). *50 Ω connectors*. https://coaxicom.com/why-50-%CF%89-connectors/ (retrieved October 26, 2026)

Coaxicom. (2015, June 18). *Understanding coaxial cable terms, specifications and applications*. https://coaxicom.com/understanding-coaxial-cable-terms-specifications-and-applications/ (retrieved October 26, 2026)

DDK Ltd. (n.d.). *BNC series* [Product page]. Fujikura. Retrieved October 26, 2026, from https://www.connector.fujikura.com/English/products/coaxial/BNC/index.html

Fiber Optic Association. (n.d.-a). *Calculating fiber optic loss budgets*. Retrieved October 26, 2026, from https://www.thefoa.org/tech/lossbudg.htm

Fiber Optic Association. (n.d.-b). *Cleaning fiber optic connections*. The FOA reference for fiber optics. Retrieved October 26, 2026, from https://www.thefoa.org/tech/ref/termination/cleaning.html

Fiber Optic Association. (n.d.-c). *Connector types and terminology: What's in a name?* The FOA reference for fiber optics. Retrieved October 26, 2026, from https://www.thefoa.org/tech/ref/termination/names.html

Fiber Optic Association. (n.d.-d). *Fiber optic cable and connector color codes*. Retrieved October 26, 2026, from https://www.thefoa.org/tech/ColCodes.htm

Fiber Optic Association. (n.d.-e). *Fiber optic cable bend radius or diameter*. The FOA reference for fiber optics. Retrieved October 26, 2026, from https://www.thefoa.org/tech/ref/install/bend_radius.html

Fiber Optic Association. (n.d.-f). *Fiber optic connector identifier*. Retrieved October 26, 2026, from https://www.thefoa.org/tech/connID.htm

Fiber Optic Association. (n.d.-g). *Fiber optic safety, part 1: Safety in fiber optic installation*. The FOA reference for fiber optics. Retrieved October 26, 2026, from https://www.thefoa.org/tech/ref/safety/safe.html

Fiber Optic Association. (n.d.-h). *Visual inspection and cleaning of connectors*. The FOA reference for fiber optics. Retrieved October 26, 2026, from https://www.thefoa.org/tech/ref/testing/test/scope.html

HDMI Licensing Administrator. (n.d.). *HDMI cable power*. Retrieved October 26, 2026, from https://www.hdmi.org/spec2sub/cablepower

HDMI Licensing Administrator. (2021, May 17). *What is the best HDMI cable for system installations*. https://www.hdmi.org/blog/detail/128 (retrieved October 26, 2026)

Ikegami. (n.d.-a). *BST-55: Digital triax base station* [Product page]. Retrieved October 26, 2026, from https://www.ikegami.com/product/detail/1058/

Ikegami. (n.d.-b). *CCU-970: 3G camera control unit* [Product page]. Retrieved October 26, 2026, from https://www.ikegami.com/product/detail/1060/

Ikegami. (n.d.-c). *HDK-79EC: Multi-format full digital HDTV camera system* [Brochure]. Retrieved October 26, 2026, from https://www.ikegami.com/dl/_en/b46f22daf5b83d18a871992580827815/

Ikegami. (n.d.-d). *UHK-430* [Product page, including the CCU-430]. Retrieved October 26, 2026, from https://www.ikegami.com/product/detail/765/

LEMO. (n.d.). *EDW.3K.93C.YSE: 3K 93C Y SMPTE connector* [Product data sheet]. Retrieved October 26, 2026, from https://www.lemo.com/pdf/EDW.3K.93C.YSE.pdf

Longhurst, P., & Brooks, A. (2017). *Fibre optic hybrid broadcast camera systems* [White paper]. LEMO. https://www.lemo.com/whitepaper/White_Paper-Fibre_20optic_hybrid_broadcast_20camera_systems.pdf (retrieved October 26, 2026)

Markertek. (n.d.). *75 ohm BNC terminator* [Product page, item 2555-3-32]. Retrieved October 26, 2026, from https://www.markertek.com/product/2555-3-32/75-ohm-bnc-terminator

QSC. (n.d.). *SMPTE LTC generator*. Q-SYS Help. Retrieved October 26, 2026, from https://help.qsys.com/Content/Schematic_Library/linear_timecode_encoder.htm

Richards, M. (2018). *HD broadcast: Triax or fiber?* (Edition 1.0) [White paper]. Fischer Connectors. https://fischerconnectors.com/app/uploads/2021/10/Fischer_Connectors_White_Paper_Broadcast_Triax_or_Fiber.pdf (retrieved October 26, 2026)

Semtech. (n.d.). *GS12341* [Product page]. Retrieved October 26, 2026, from https://www.semtech.com/products/broadcast-video/cable-equalizers/gs12341

Society of Motion Picture and Television Engineers. (2017). *SMPTE OV 297-0:2017: Serial digital fiber transmission system and multi-link and multi-channel SDI using CWDM, overview for the 297 document suite*. https://pub.smpte.org/doc/ov297-0/20170106-pub/ov0297-0-2017.pdf (retrieved October 26, 2026)

Society of Motion Picture and Television Engineers. (2018). *SMPTE OV 2082-0:2018: 12G-SDI bit-serial interfaces, overview for the SMPTE ST 2082 document suite*. https://pub.smpte.org/doc/ov2082-0/20180502-pub/ov2082-0-2018.pdf (retrieved October 26, 2026)

Sony Corporation. (2017). *HXCU-FB80 4K/HD camera control unit: Operating instructions* (4-734-405-12(1)). Full Compass Systems. https://www.fullcompass.com/common/files/41829-HXCUFB80LOperatingInstructions.pdf (retrieved October 26, 2026)

U.S. Food and Drug Administration. (2024, November 13). *Laser products and instruments*. https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/laser-products-and-instruments (retrieved October 26, 2026)

Video Electronics Standards Association. (n.d.). *FAQ archive*. DisplayPort.org. Retrieved October 26, 2026, from https://www.displayport.org/faq/faq-archive/

Video Electronics Standards Association. (2024, January 8). *VESA announces DisplayPort updates and extensions for gaming and automotive market at CES* [Press release]. https://vesa.org/press/vesa-announces-displayport-updates-and-extensions-for-gaming-and-automotive-market-at-ces/ (retrieved October 26, 2026)

Video Electronics Standards Association. (2025, January 6). *VESA to update DisplayPort 2.1 with new active cable specification for up to 3X longer DP80 cables* [Press release]. https://vesa.org/press/vesa-to-update-displayport-2-1-with-new-active-cable-specification-for-up-to-3x-longer-dp80-cables/ (retrieved October 26, 2026)
