// Static geography for the Languages map (mirrors the Commodity Map, for the
// Languages school). Per language: an origin pin, the speaker-region countries to
// fill (ISO 3166-1 numeric — same ids world-atlas uses), and the colonial/diaspora
// destinations to draw spread arcs to. Country-level granularity (like the Commodity
// Map's production regions); a language spoken in only part of a country still fills
// the whole country. `slug` matches the course slug so the page can link each
// language to its actual (tenant-scoped) course.

export interface MapLanguage {
  slug: string;
  name: string;
  color: string;
  /** Origin city/region label + [lng, lat]. */
  origin: { name: string; coords: [number, number] };
  /** Speaker-region countries to fill (ISO numeric). */
  regionCodes: number[];
  /** Colonial/diaspora destinations to draw a spread arc to (ISO numeric). */
  spreadCodes: number[];
  /** How the language spread (shown in the detail panel). */
  spread: string;
}

export const MAP_LANGUAGES: MapLanguage[] = [
  {
    slug: "spanish",
    name: "Spanish",
    color: "#D62828",
    origin: { name: "Castile, Spain", coords: [-3.7, 40.4] },
    regionCodes: [724, 484, 170, 32, 604, 862, 152, 218, 320, 192, 68, 214, 340, 600, 222, 558, 188, 858, 226],
    spreadCodes: [484, 32, 170, 604, 226],
    spread: "Carried from Castile across the Americas and to Equatorial Guinea through Spanish colonization; now the world's second-most-spoken native language.",
  },
  {
    slug: "french",
    name: "French",
    color: "#1D4ED8",
    origin: { name: "Île-de-France", coords: [2.35, 48.85] },
    regionCodes: [250, 56, 756, 124, 180, 384, 686, 120, 466, 562, 854, 204, 324, 768, 450],
    spreadCodes: [180, 384, 686, 124],
    spread: "Spread through colonization across West and Central Africa, Québec, and the Indian Ocean; a major lingua franca of West Africa today.",
  },
  {
    slug: "portuguese",
    name: "Portuguese",
    color: "#047857",
    origin: { name: "Lisbon, Portugal", coords: [-9.14, 38.72] },
    regionCodes: [620, 76, 24, 508, 624],
    spreadCodes: [76, 24, 508],
    spread: "Carried to Brazil and to Angola and Mozambique through Portuguese colonization; Brazil now holds the large majority of speakers.",
  },
  {
    slug: "italian",
    name: "Italian",
    color: "#9333EA",
    origin: { name: "Tuscany / Rome", coords: [12.5, 41.9] },
    regionCodes: [380, 756],
    spreadCodes: [32],
    spread: "Largely concentrated in Italy and Switzerland, with a major emigrant community in Argentina and the Americas (diaspora, not colonization).",
  },
  {
    slug: "ewe",
    name: "Ewe",
    color: "#EA580C",
    origin: { name: "Volta region, Ghana", coords: [0.9, 6.6] },
    regionCodes: [288, 768, 204],
    spreadCodes: [],
    spread: "A Gbe language of the Volta region, spoken across southeastern Ghana, Togo, and Benin.",
  },
  {
    slug: "twi",
    name: "Twi",
    color: "#B45309",
    origin: { name: "Ashanti, Ghana", coords: [-1.6, 6.7] },
    regionCodes: [288],
    spreadCodes: [],
    spread: "A dialect of Akan and the most widely spoken language in Ghana.",
  },
  {
    slug: "igbo",
    name: "Igbo",
    color: "#0E7490",
    origin: { name: "Southeastern Nigeria", coords: [7.4, 6.0] },
    regionCodes: [566, 226],
    spreadCodes: [],
    spread: "A major language of southeastern Nigeria, one of the country's principal languages.",
  },
];
