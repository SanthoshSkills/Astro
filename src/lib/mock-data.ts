export interface AstrologicalSign {
  id: string;
  name: string;
  paths: string[];
  starPoints: [number, number][]; // Relative coordinates [x, y] from center
}

export const VEDIC_NAKSHATRAS: AstrologicalSign[] = [
  { 
    id: "ashwini", 
    name: "Ashwini", 
    paths: ["M-40,-20 L-10,10 L30,-10"], 
    starPoints: [[-40, -20], [-10, 10], [30, -10]] 
  },
  { 
    id: "bharani", 
    name: "Bharani", 
    paths: ["M-30,-40 L0,30 L30,-40 Z"], 
    starPoints: [[-30, -40], [0, 30], [30, -40]] 
  },
  { 
    id: "rohini", 
    name: "Rohini (Hyades)", 
    paths: ["M0,-100 L-40,0 L40,0 L0,-100", "M-40,0 L-80,80", "M40,0 L80,80"], 
    starPoints: [[0, -100], [-40, 0], [40, 0], [-80, 80], [80, 80]] 
  },
  // Adding placeholders for others to ensure type safety
  { id: "krittika", name: "Krittika", paths: [], starPoints: [] },
  { id: "mriga", name: "Mrigashira", paths: [], starPoints: [] },
  { id: "ardra", name: "Ardra", paths: [], starPoints: [] },
  { id: "punar", name: "Punarvasu", paths: [], starPoints: [] },
  { id: "pushya", name: "Pushya", paths: [], starPoints: [] },
  { id: "ashlesha", name: "Ashlesha", paths: [], starPoints: [] },
  { id: "magha", name: "Magha", paths: [], starPoints: [] },
  { id: "p-phalguni", name: "Purva Phalguni", paths: [], starPoints: [] },
  { id: "u-phalguni", name: "Uttara Phalguni", paths: [], starPoints: [] },
  { id: "hasta", name: "Hasta", paths: [], starPoints: [] },
  { id: "chitra", name: "Chitra", paths: [], starPoints: [] },
  { id: "swati", name: "Swati", paths: [], starPoints: [] },
  { id: "vishakha", name: "Vishakha", paths: [], starPoints: [] },
  { id: "anuradha", name: "Anuradha", paths: [], starPoints: [] },
  { id: "jyeshtha", name: "Jyeshtha", paths: [], starPoints: [] },
  { id: "mula", name: "Mula", paths: [], starPoints: [] },
  { id: "p-ashadha", name: "Purva Ashadha", paths: [], starPoints: [] },
  { id: "u-ashadha", name: "Uttara Ashadha", paths: [], starPoints: [] },
  { id: "shravana", name: "Shravana", paths: [], starPoints: [] },
  { id: "dhanishtha", name: "Dhanishtha", paths: [], starPoints: [] },
  { id: "shata", name: "Shatabhisha", paths: [], starPoints: [] },
  { id: "p-bhadra", name: "Purva Bhadrapada", paths: [], starPoints: [] },
  { id: "u-bhadra", name: "Uttara Bhadrapada", paths: [], starPoints: [] },
  { id: "revati", name: "Revati", paths: [], starPoints: [] },
];

export const WESTERN_ZODIAC: AstrologicalSign[] = [
  { 
    id: "aries", 
    name: "Aries", 
    paths: ["M-80,-20 L20,0 L60,40"], 
    starPoints: [[-80, -20], [20, 0], [60, 40]] 
  },
  { 
    id: "taurus", 
    name: "Taurus (Rohini)", 
    paths: ["M0,-50 L-30,30 L30,30 Z", "M-30,30 L-100,100", "M30,30 L100,100"], 
    starPoints: [[0, -50], [-30, 30], [30, 30], [-100, 100], [100, 100]] 
  },
  { id: "gemini", name: "Gemini", paths: [], starPoints: [] },
  { id: "cancer", name: "Cancer", paths: [], starPoints: [] },
  { id: "leo", name: "Leo", paths: [], starPoints: [] },
  { id: "virgo", name: "Virgo", paths: [], starPoints: [] },
  { id: "libra", name: "Libra", paths: [], starPoints: [] },
  { id: "scorpio", name: "Scorpio", paths: [], starPoints: [] },
  { id: "sagittarius", name: "Sagittarius", paths: [], starPoints: [] },
  { id: "capricorn", name: "Capricorn", paths: [], starPoints: [] },
  { id: "aquarius", name: "Aquarius", paths: [], starPoints: [] },
  { id: "pisces", name: "Pisces", paths: [], starPoints: [] },
];

export const CHINESE_ZODIAC: AstrologicalSign[] = [
  { 
    id: "dragon", 
    name: "Year of the Dragon", 
    paths: ["M100,-100 L150,-50 L250,-80 L300,0"], 
    starPoints: [[100, -100], [150, -50], [250, -80], [300, 0]] 
  },
  { id: "rat", name: "Year of the Rat", paths: [], starPoints: [] },
  { id: "ox", name: "Year of the Ox", paths: [], starPoints: [] },
  { id: "tiger", name: "Year of the Tiger", paths: [], starPoints: [] },
  { id: "rabbit", name: "Year of the Rabbit", paths: [], starPoints: [] },
  { id: "snake", name: "Year of the Snake", paths: [], starPoints: [] },
  { id: "horse", name: "Year of the Horse", paths: [], starPoints: [] },
  { id: "goat", name: "Year of the Goat", paths: [], starPoints: [] },
  { id: "monkey", name: "Year of the Monkey", paths: [], starPoints: [] },
  { id: "rooster", name: "Year of the Rooster", paths: [], starPoints: [] },
  { id: "dog", name: "Year of the Dog", paths: [], starPoints: [] },
  { id: "pig", name: "Year of the Pig", paths: [], starPoints: [] },
];

export const MAYAN_SIGNS: AstrologicalSign[] = [
  { 
    id: "imix", 
    name: "Imix (Crocodile)", 
    paths: ["M-50,50 A50,50 0 1,1 50,50 A50,50 0 1,1 -50,50"], 
    starPoints: [[-50, 50], [50, 50]] 
  },
  { id: "ik", name: "Ik (Wind)", paths: [], starPoints: [] },
  { id: "akbal", name: "Ak'bal (Night)", paths: [], starPoints: [] },
  { id: "kan", name: "Kan (Seed)", paths: [], starPoints: [] },
  { id: "chicchan", name: "Chicchan (Serpent)", paths: [], starPoints: [] },
  { id: "cimi", name: "Cimi (Death)", paths: [], starPoints: [] },
  { id: "manik", name: "Manik (Deer)", paths: [], starPoints: [] },
  { id: "lamat", name: "Lamat (Star)", paths: [], starPoints: [] },
  { id: "muluc", name: "Muluc (Water)", paths: [], starPoints: [] },
  { id: "oc", name: "Oc (Dog)", paths: [], starPoints: [] },
  { id: "chuen", name: "Chuen (Monkey)", paths: [], starPoints: [] },
  { id: "eb", name: "Eb (Road)", paths: [], starPoints: [] },
  { id: "ben", name: "Ben (Reed)", paths: [], starPoints: [] },
  { id: "ix", name: "Ix (Jaguar)", paths: [], starPoints: [] },
  { id: "men", name: "Men (Eagle)", paths: [], starPoints: [] },
  { id: "cib", name: "Cib (Warrior)", paths: [], starPoints: [] },
  { id: "caban", name: "Caban (Earth)", paths: [], starPoints: [] },
  { id: "etznab", name: "Etz'nab (Flint)", paths: [], starPoints: [] },
  { id: "cauac", name: "Cauac (Storm)", paths: [], starPoints: [] },
  { id: "ahau", name: "Ahau (Sun)", paths: [], starPoints: [] },
];
