export interface AstrologicalSign {
  id: string;
  name: string;
  names: { en: string; ml: string; ta: string; hi: string };
  paths: string[];
  starPoints: [number, number][]; // Relative coordinates [x, y] from center
  story: string;
  celestialX: number; // 0 to 1 mapping
  celestialY: number; // 0 to 1 mapping
}

const s = (x: number, y: number) => [x, y] as [number, number];

export const VEDIC_NAKSHATRAS: AstrologicalSign[] = [
  {
    id: "ashwini",
    name: "Ashwini",
    names: { en: "Ashwini", ml: "അശ്വതി", ta: "அசுவினி", hi: "अश्विनी" },
    paths: ["M-20,-30 L0,-50 L20,-30 M-20,-30 L-20,30 L20,30 L20,-30"],
    starPoints: [s(-20, -30), s(0, -50), s(20, -30), s(-20, 30), s(20, 30)],
    story: "Represented by a horse's head; symbolizes speed, energy, healing, and pioneering spirit.",
    celestialX: 0.1,
    celestialY: 0.1
  },
  {
    id: "bharani",
    name: "Bharani",
    names: { en: "Bharani", ml: "ഭരണി", ta: "பரணி", hi: "भरणी" },
    paths: ["M-30,-40 L0,30 L30,-40 Z"],
    starPoints: [s(-30, -40), s(0, 30), s(30, -40)],
    story: "The vessel or womb; represents transformation, discipline, and the power of creative birth.",
    celestialX: 0.2,
    celestialY: 0.2
  },
  {
    id: "krittika",
    name: "Krittika",
    names: { en: "Krittika", ml: "കാർത്തിക", ta: "கார்த்திகை", hi: "कृतिका" },
    paths: ["M-50,0 L-20,-20 L10,10 L40,-10"],
    starPoints: [s(-50, 0), s(-20, -20), s(10, 10), s(40, -10)],
    story: "The cutter or razor; symbolizes purification, sharp intellect, courage, and digestive fire.",
    celestialX: 0.3,
    celestialY: 0.3
  },
  {
    id: "rohini",
    name: "Rohini",
    names: { en: "Rohini", ml: "രോഹിണി", ta: "ரோகிணி", hi: "रोहिणी" },
    paths: ["M0,-100 L-40,0 L40,0 L0,-100"],
    starPoints: [s(0, -100), s(-40, 0), s(40, 0)],
    story: "The red one; represents growth, beauty, sensuality, creation, and agricultural fertility.",
    celestialX: 0.4,
    celestialY: 0.4
  },
  {
    id: "mriga",
    name: "Mrigashira",
    names: { en: "Mrigashira", ml: "മകയിരം", ta: "மிருகசீரிடம்", hi: "मृगशिरा" },
    paths: ["M-40,-30 L0,-50 L40,-30 M0,-50 L0,40"],
    starPoints: [s(-40, -30), s(0, -50), s(40, -30), s(0, 40)],
    story: "The deer's head; represents searching, curiosity, gentle demeanor, and constant travel.",
    celestialX: 0.5,
    celestialY: 0.5
  },
  {
    id: "ardra",
    name: "Ardra",
    names: { en: "Ardra", ml: "തിരുവാതിര", ta: "திருவாதிரை", hi: "आर्द्रा" },
    paths: ["M0,0 L0,-40 M-15,-20 L15,-20"],
    starPoints: [s(0, 0), s(0, -40), s(-15, -20), s(15, -20)],
    story: "The stormy one or teardrop; symbolizes moisture, deep emotional transitions, and destruction for renewal.",
    celestialX: 0.6,
    celestialY: 0.6
  },
  {
    id: "punar",
    name: "Punarvasu",
    names: { en: "Punarvasu", ml: "പുണർതം", ta: "புனர்பூசம்", hi: "पुनर्वसु" },
    paths: ["M-25,-15 L0,-25 L25,-15 L25,15 L0,25 L-25,15 Z"],
    starPoints: [s(-25, -15), s(0, -25), s(25, -15), s(25, 15), s(0, 25), s(-25, 15)],
    story: "Return of light; symbolizes the restoration of safety, renewal of resources, benevolence, and charity.",
    celestialX: 0.7,
    celestialY: 0.7
  },
  {
    id: "pushya",
    name: "Pushya",
    names: { en: "Pushya", ml: "പൂയം", ta: "பூசம்", hi: "पुष्य" },
    paths: ["M0,0 L15,25 L-15,25 Z"],
    starPoints: [s(0, 0), s(15, 25), s(-15, 25)],
    story: "The nourisher; represents auspiciousness, growth, maternal care, spiritual instruction, and expansion.",
    celestialX: 0.8,
    celestialY: 0.8
  },
  {
    id: "ashlesha",
    name: "Ashlesha",
    names: { en: "Ashlesha", ml: "ആയില്യം", ta: "ஆயில்யம்", hi: "अश्लेषा" },
    paths: ["M-30,10 L-10,30 L10,10 L30,-10"],
    starPoints: [s(-30, 10), s(-10, 30), s(10, 10), s(30, -10)],
    story: "The clinger or serpent; symbolizes hidden wisdom, intense research, intuition, and defensive protection.",
    celestialX: 0.9,
    celestialY: 0.9
  },
  {
    id: "magha",
    name: "Magha",
    names: { en: "Magha", ml: "മകം", ta: "மகம்", hi: "मघा" },
    paths: ["M-20,-20 L20,-20 L10,20 L-10,20 Z"],
    starPoints: [s(-20, -20), s(20, -20), s(10, 20), s(-10, 20)],
    story: "The royal chamber or throne; represents ancestral legacy, pride, authority, leadership, and power.",
    celestialX: 0.1,
    celestialY: 0.5
  },
  {
    id: "p-phalguni",
    name: "Purva Phalguni",
    names: { en: "Purva Phalguni", ml: "പൂരം", ta: "பூரம்", hi: "पूर्वाफाल्गुनी" },
    paths: ["M-30,0 L30,0 M0,-30 L0,30"],
    starPoints: [s(-30, 0), s(30, 0), s(0, -30), s(0, 30)],
    story: "The front leg of the cot; represents rest, creative passion, romance, aesthetic appreciation, and pleasure.",
    celestialX: 0.2,
    celestialY: 0.6
  },
  {
    id: "u-phalguni",
    name: "Uttara Phalguni",
    names: { en: "Uttara Phalguni", ml: "ഉത്രം", ta: "உத்திரம்", hi: "उत्तराफाल्गुनी" },
    paths: ["M-30,-30 L30,-30 L0,30 Z"],
    starPoints: [s(-30, -30), s(30, -30), s(0, 30)],
    story: "The back leg of the cot; represents contracts, partnerships, relationships, reliability, and social duty.",
    celestialX: 0.3,
    celestialY: 0.7
  },
  {
    id: "hasta",
    name: "Hasta",
    names: { en: "Hasta", ml: "അത്തം", ta: "அஸ்தம்", hi: "हस्त" },
    paths: ["M-40,0 L0,-40 L40,0 L0,40 Z"],
    starPoints: [s(-40, 0), s(0, -40), s(40, 0), s(0, 40)],
    story: "The hand; symbolizes craftsmanship, dexterity, intellect, humor, and therapeutic healing skills.",
    celestialX: 0.4,
    celestialY: 0.8
  },
  {
    id: "chitra",
    name: "Chitra",
    names: { en: "Chitra", ml: "ചിത്തിര", ta: "சித்திரை", hi: "चित्रा" },
    paths: ["M-50,0 L50,0 M-25,-25 L25,25"],
    starPoints: [s(-50, 0), s(50, 0), s(-25, -25), s(25, 25)],
    story: "The shining jewel; represents artistic creation, beauty, architecture, design, and internal brilliance.",
    celestialX: 0.5,
    celestialY: 0.9
  },
  {
    id: "swati",
    name: "Swati",
    names: { en: "Swati", ml: "ചോതി", ta: "சுவாதி", hi: "स्वाति" },
    paths: ["M-30,-30 L30,30 M30,-30 L-30,30"],
    starPoints: [s(-30, -30), s(30, 30), s(30, -30), s(-30, 30)],
    story: "The sword or young sprout; represents freedom, independence, transit, wind energy, and flexibility.",
    celestialX: 0.6,
    celestialY: 0.8
  },
  {
    id: "vishakha",
    name: "Vishakha",
    names: { en: "Vishakha", ml: "വിശാഖം", ta: "விசாகம்", hi: "विशाखा" },
    paths: ["M-40,10 L0,-40 L40,10 Z M0,-40 L0,40"],
    starPoints: [s(-40, 10), s(0, -40), s(40, 10), s(0, 40)],
    story: "The triumphal arch; represents single-minded determination, competition, goal-oriented drive, and ambition.",
    celestialX: 0.7,
    celestialY: 0.7
  },
  {
    id: "anuradha",
    name: "Anuradha",
    names: { en: "Anuradha", ml: "അനിഴം", ta: "அனுஷம்", hi: "अनुराधा" },
    paths: ["M-30,-20 L0,20 L30,-20 M-30,20 L30,20"],
    starPoints: [s(-30, -20), s(0, 20), s(30, -20), s(-30, 20), s(30, 20)],
    story: "The lotus flower; symbolizes friendship, group efforts, global networking, resilience, and devotion.",
    celestialX: 0.8,
    celestialY: 0.6
  },
  {
    id: "jyeshtha",
    name: "Jyeshtha",
    names: { en: "Jyeshtha", ml: "തൃക്കേട്ട", ta: "கேட்டை", hi: "ज्येष्ठा" },
    paths: ["M-40,40 L0,0 L40,40 M0,0 L0,-50"],
    starPoints: [s(-40, 40), s(0, 0), s(40, 40), s(0, -50)],
    story: "The eldest or circular amulet; symbolizes leadership qualities, seniority, protection of family, and occult mastery.",
    celestialX: 0.9,
    celestialY: 0.5
  },
  {
    id: "mula",
    name: "Mula",
    names: { en: "Mula", ml: "മൂലം", ta: "மூலம்", hi: "मूल" },
    paths: ["M-50,0 L50,0 M0,-50 L0,50"],
    starPoints: [s(-50, 0), s(50, 0), s(0, -50), s(0, 50)],
    story: "The root; represents foundational investigations, deep analysis, research, and digging to find core truths.",
    celestialX: 0.5,
    celestialY: 0.1
  },
  {
    id: "p-ashadha",
    name: "Purva Ashadha",
    names: { en: "Purva Ashadha", ml: "പൂരാടം", ta: "பூராடம்", hi: "पूर्वाषाढ़ा" },
    paths: ["M-20,-20 L20,20 M20,-20 L-20,20"],
    starPoints: [s(-20, -20), s(20, 20), s(20, -20), s(-20, 20)],
    story: "The fan or winnowing basket; represents invincibility, declared patience, purification of intent, and victory.",
    celestialX: 0.6,
    celestialY: 0.2
  },
  {
    id: "u-ashadha",
    name: "Uttara Ashadha",
    names: { en: "Uttara Ashadha", ml: "ഉത്രാടം", ta: "உத்திராடம்", hi: "उत्तराषाढ़ा" },
    paths: ["M-30,-15 L30,-15 L0,30 Z"],
    starPoints: [s(-30, -15), s(30, -15), s(0, 30)],
    story: "The elephant's tusk; represents permanent victory, total commitment, honesty, and alignment with laws.",
    celestialX: 0.7,
    celestialY: 0.3
  },
  {
    id: "shravana",
    name: "Shravana",
    names: { en: "Shravana", ml: "തിരുവോണം", ta: "திருவோணம்", hi: "श्रवण" },
    paths: ["M-40,0 L0,-40 L40,0 Z"],
    starPoints: [s(-40, 0), s(0, -40), s(40, 0)],
    story: "The ear; represents oral transmissions, listening skills, studying, wisdom, and cosmic vibration alignment.",
    celestialX: 0.8,
    celestialY: 0.4
  },
  {
    id: "dhanishtha",
    name: "Dhanishtha",
    names: { en: "Dhanishtha", ml: "അവിട്ടം", ta: "அவிட்டம்", hi: "धनिष्ठा" },
    paths: ["M-30,-30 L30,-30 L30,30 L-30,30 Z"],
    starPoints: [s(-30, -30), s(30, -30), s(30, 30), s(-30, 30)],
    story: "The flute or drum; represents wealth, music, rhythm, social reputation, and unified cosmic frequencies.",
    celestialX: 0.9,
    celestialY: 0.3
  },
  {
    id: "shata",
    name: "Shatabhisha",
    names: { en: "Shatabhisha", ml: "ചതയം", ta: "சதயம்", hi: "शतभिषा" },
    paths: ["M0,-40 A40,40 0 1,1 0,40 A40,40 0 1,1 0,-40"],
    starPoints: [s(0, -40), s(40, 0), s(0, 40), s(-40, 0)],
    story: "One hundred healers; represents healing, medical sciences, secretive investigations, and spiritual ascetics.",
    celestialX: 0.1,
    celestialY: 0.9
  },
  {
    id: "p-bhadra",
    name: "Purva Bhadrapada",
    names: { en: "Purva Bhadrapada", ml: "പൂരൂരുട്ടാതി", ta: "பூரட்டாதி", hi: "पूर्वाभाद्रपद" },
    paths: ["M-20,-30 L20,-30 L20,30 L-20,30 Z"],
    starPoints: [s(-20, -30), s(20, -30), s(20, 30), s(-20, 30)],
    story: "The front leg of the funeral cot; represents occult practices, severe discipline, and mystical perspectives.",
    celestialX: 0.2,
    celestialY: 0.8
  },
  {
    id: "u-bhadra",
    name: "Uttara Bhadrapada",
    names: { en: "Uttara Bhadrapada", ml: "ഉത്രട്ടാതി", ta: "உத்திரட்டாதி", hi: "उत्तराभाद्रपद" },
    paths: ["M-30,-30 L30,-30 L0,30 M0,30 L0,60"],
    starPoints: [s(-30, -30), s(30, -30), s(0, 30), s(0, 60)],
    story: "The back leg of the funeral cot; represents deep meditation, spiritual restraint, stability, and wisdom.",
    celestialX: 0.3,
    celestialY: 0.7
  },
  {
    id: "revati",
    name: "Revati",
    names: { en: "Revati", ml: "രേവതി", ta: "ரேவதி", hi: "रेवती" },
    paths: ["M-40,-20 L0,20 L40,-20 M-40,20 L0,-20 L40,20"],
    starPoints: [s(-40, -20), s(0, 20), s(40, -20), s(-40, 20), s(0, -20), s(40, 20)],
    story: "The drum for keeper of herds; symbolizes wealthy journeys, hospitality, shelter, and protective nourishment.",
    celestialX: 0.4,
    celestialY: 0.6
  }
];

export const WESTERN_ZODIAC: AstrologicalSign[] = [
  {
    id: "aries",
    name: "Aries",
    names: { en: "Aries", ml: "മേടം", ta: "மேஷம்", hi: "मेष" },
    paths: ["M-80,-20 L20,0 L60,40"],
    starPoints: [s(-80, -20), s(20, 0), s(60, 40)],
    story: "The Ram; represents initiative, direct drive, raw pioneering spirit, courage, and fiery energy.",
    celestialX: 0.1,
    celestialY: 0.9
  },
  {
    id: "taurus",
    name: "Taurus",
    names: { en: "Taurus", ml: "ഇടവം", ta: "ரிஷபம்", hi: "वृषभ" },
    paths: ["M0,-50 L-30,30 L30,30 Z", "M-30,30 L-100,100", "M30,30 L100,100"],
    starPoints: [s(0, -50), s(-30, 30), s(30, 30), s(-100, 100), s(100, 100)],
    story: "The Bull; represents structural stability, patience, reliability, sensory pleasures, and determination.",
    celestialX: 0.2,
    celestialY: 0.8
  },
  {
    id: "gemini",
    name: "Gemini",
    names: { en: "Gemini", ml: "മിഥുനം", ta: "மிதுனம்", hi: "मिथुन" },
    paths: ["M-30,-40 L-30,40 M30,-40 L30,40 M-30,-40 L30,-40 M-30,40 L30,40"],
    starPoints: [s(-30, -40), s(-30, 40), s(30, -40), s(30, 40)],
    story: "The Twins; represents dual viewpoints, extreme curiosity, dynamic networking, sharing information, and communication.",
    celestialX: 0.3,
    celestialY: 0.7
  },
  {
    id: "cancer",
    name: "Cancer",
    names: { en: "Cancer", ml: "കർക്കടകം", ta: "கடகம்", hi: "कर्क" },
    paths: ["M0,0 L-30,-30 L0,-60 L30,-30 Z M0,0 L0,40"],
    starPoints: [s(0, 0), s(-30, -30), s(0, -60), s(30, -30), s(0, 40)],
    story: "The Crab; represents deep nurturing instincts, home security, emotional intelligence, and self-protection.",
    celestialX: 0.4,
    celestialY: 0.6
  },
  {
    id: "leo",
    name: "Leo",
    names: { en: "Leo", ml: "ചിങ്ങം", ta: "சிம்மம்", hi: "सिंह" },
    paths: ["M-20,-30 L20,-30 L40,0 L20,30 L-20,30 L-40,0 Z"],
    starPoints: [s(-20, -30), s(20, -30), s(40, 0), s(20, 30), s(-20, 30), s(-40, 0)],
    story: "The Lion; represents proud leadership, heart-centered creative expression, self-assertion, and radiant light.",
    celestialX: 0.5,
    celestialY: 0.5
  },
  {
    id: "virgo",
    name: "Virgo",
    names: { en: "Virgo", ml: "കന്നി", ta: "கன்னி", hi: "कन्या" },
    paths: ["M-40,-40 L-20,0 L20,0 L40,-40 M-20,0 L0,40 L20,0"],
    starPoints: [s(-40, -40), s(-20, 0), s(20, 0), s(40, -40), s(0, 40)],
    story: "The Virgin; represents refined analysis, craftsmanship, practical service, hygiene, and organizational efficiency.",
    celestialX: 0.6,
    celestialY: 0.4
  },
  {
    id: "libra",
    name: "Libra",
    names: { en: "Libra", ml: "തുലാം", ta: "துலாம்", hi: "तुला" },
    paths: ["M-40,20 L40,20 M0,-30 L-20,20 M0,-30 L20,20"],
    starPoints: [s(-40, 20), s(40, 20), s(0, -30), s(-20, 20), s(20, 20)],
    story: "The Scales; represents peace, social balance, diplomacy, objective justice, partnerships, and beauty.",
    celestialX: 0.7,
    celestialY: 0.3
  },
  {
    id: "scorpio",
    name: "Scorpio",
    names: { en: "Scorpio", ml: "വൃശ്ചികം", ta: "விருச்சிகம்", hi: "वृश्चिक" },
    paths: ["M-30,-40 L0,-10 L30,-40 M0,-10 L0,30 L-20,50"],
    starPoints: [s(-30, -40), s(0, -10), s(30, -40), s(0, 30), s(-20, 50)],
    story: "The Scorpion; represents intense investigations, psychological depth, deep transformation, and absolute passion.",
    celestialX: 0.8,
    celestialY: 0.2
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    names: { en: "Sagittarius", ml: "ധനു", ta: "தனுசு", hi: "धनु" },
    paths: ["M-40,40 L20,-20 L40,-40 M20,-20 L10,-40 M20,-20 L40,-10"],
    starPoints: [s(-40, 40), s(20, -20), s(40, -40), s(10, -40), s(40, -10)],
    story: "The Archer; represents exploration, global philosophy, seeking absolute truth, generosity, and optimistic growth.",
    celestialX: 0.9,
    celestialY: 0.1
  },
  {
    id: "capricorn",
    name: "Capricorn",
    names: { en: "Capricorn", ml: "മകരം", ta: "மகரம்", hi: "मकर" },
    paths: ["M-40,-20 L0,30 L40,-20 M-40,-20 L-40,20 L0,30"],
    starPoints: [s(-40, -20), s(0, 30), s(40, -20), s(-40, 20)],
    story: "The Sea-Goat; represents systematic duty, career success, patience, structural rules, and solid discipline.",
    celestialX: 0.5,
    celestialY: 0.9
  },
  {
    id: "aquarius",
    name: "Aquarius",
    names: { en: "Aquarius", ml: "കുംഭം", ta: "கும்பம்", hi: "कुंभ" },
    paths: ["M-40,-20 Q-20,-40 0,-20 T40,-20 M-40,20 Q-20,0 0,20 T40,20"],
    starPoints: [s(-40, -20), s(0, -20), s(40, -20), s(-40, 20), s(0, 20), s(40, 20)],
    story: "The Water Bearer; represents humanitarian ideals, scientific progress, networking, reforms, and group dynamics.",
    celestialX: 0.4,
    celestialY: 0.8
  },
  {
    id: "pisces",
    name: "Pisces",
    names: { en: "Pisces", ml: "മീനം", ta: "மீனம்", hi: "मीन" },
    paths: ["M-30,-30 L30,30 M-30,30 L30,-30 M-30,-30 L-30,30 M30,-30 L30,30"],
    starPoints: [s(-30, -30), s(30, 30), s(-30, 30), s(30, -30)],
    story: "The Fishes; represents emotional integration, creative dreaming, universal empathy, charity, and mystical surrender.",
    celestialX: 0.3,
    celestialY: 0.7
  }
];

export const CHINESE_ZODIAC: AstrologicalSign[] = [
  {
    id: "rat",
    name: "Rat",
    names: { en: "Rat", ml: "എലി", ta: "எலி", hi: "चूहा" },
    paths: ["M-30,40 L0,0 L30,40 M0,0 L0,-40"],
    starPoints: [s(-30, 40), s(0, 0), s(30, 40), s(0, -40)],
    story: "The clever strategist; represents intense resourcefulness, dynamic quick-wittedness, versatility, and kindness.",
    celestialX: 0.9,
    celestialY: 0.9
  },
  {
    id: "ox",
    name: "Ox",
    names: { en: "Ox", ml: "കാള", ta: "காளை", hi: "बैल" },
    paths: ["M-30,-30 L30,-30 L30,30 L-30,30 Z M-30,-30 L-50,-50 M30,-30 L50,-50"],
    starPoints: [s(-30, -30), s(30, -30), s(30, 30), s(-30, 30), s(-50, -50), s(50, -50)],
    story: "The honest builder; represents immense diligence, stability, reliable strength, and silent determination.",
    celestialX: 0.8,
    celestialY: 0.8
  },
  {
    id: "tiger",
    name: "Tiger",
    names: { en: "Tiger", ml: "പുലി", ta: "புலி", hi: "बाघ" },
    paths: ["M-40,-20 L-10,-40 L40,-20 M-10,-40 L-10,40 L-40,20"],
    starPoints: [s(-40, -20), s(-10, -40), s(40, -20), s(-10, 40), s(-40, 20)],
    story: "The brave explorer; represents fiery courage, absolute independence, dynamic leadership, and intense protection.",
    celestialX: 0.7,
    celestialY: 0.7
  },
  {
    id: "rabbit",
    name: "Rabbit",
    names: { en: "Rabbit", ml: "മുയൽ", ta: "முயல்", hi: "खरगोश" },
    paths: ["M-20,-40 L0,-20 L20,-40 M0,-20 L0,30 M-20,30 L20,30"],
    starPoints: [s(-20, -40), s(0, -20), s(20, -40), s(0, 30), s(-20, 30), s(20, 30)],
    story: "The gentle diplomat; represents quiet elegance, swift reflexes, compassionate mercy, and peace-seeking actions.",
    celestialX: 0.6,
    celestialY: 0.6
  },
  {
    id: "dragon",
    name: "Dragon",
    names: { en: "Dragon", ml: "ഡ്രാഗൺ", ta: "டிராகன்", hi: "ड्रैगन" },
    paths: ["M100,-100 L150,-50 L250,-80 L300,0"],
    starPoints: [s(100, -100), s(150, -50), s(250, -80), s(300, 0)],
    story: "The powerful celestial leader; represents radiant charisma, creative ambition, intense strength, and dynamic luck.",
    celestialX: 0.5,
    celestialY: 0.5
  },
  {
    id: "snake",
    name: "Snake",
    names: { en: "Snake", ml: "പാമ്പ്", ta: "பாம்பு", hi: "सांप" },
    paths: ["M-20,-40 Q0,-20 -20,0 T0,40"],
    starPoints: [s(-20, -40), s(0, -20), s(-20, 0), s(0, 40)],
    story: "The wise philosopher; represents deep intellect, dynamic grace, sharp intuition, and calm, calculated strategy.",
    celestialX: 0.4,
    celestialY: 0.4
  },
  {
    id: "horse",
    name: "Horse",
    names: { en: "Horse", ml: "കുതിര", ta: "குதிரை", hi: "घोड़ा" },
    paths: ["M-40,0 L0,-40 L40,0 L0,40 M-40,0 L40,0"],
    starPoints: [s(-40, 0), s(0, -40), s(40, 0), s(0, 40)],
    story: "The free spirit; represents rapid progress, absolute independence, warm enthusiasm, and energetic pursuit of goals.",
    celestialX: 0.3,
    celestialY: 0.3
  },
  {
    id: "goat",
    name: "Goat",
    names: { en: "Goat", ml: "ആട്", ta: "ஆடு", hi: "बकरी" },
    paths: ["M-20,-30 L0,10 L20,-30 M0,10 L0,40"],
    starPoints: [s(-20, -30), s(0, 10), s(20, -30), s(0, 40)],
    story: "The gentle artist; represents refined taste, deep empathy, peaceful behavior, and harmonious creation.",
    celestialX: 0.2,
    celestialY: 0.2
  },
  {
    id: "monkey",
    name: "Monkey",
    names: { en: "Monkey", ml: "കുരങ്ങ്", ta: "குரங்கு", hi: "बंदर" },
    paths: ["M-30,-20 L0,-40 L30,-20 L20,30 L-20,30 Z"],
    starPoints: [s(-30, -20), s(0, -40), s(30, -20), s(20, 30), s(-20, 30)],
    story: "The playful innovator; represents active humor, advanced problem solving, dynamic intellect, and deep curiosity.",
    celestialX: 0.1,
    celestialY: 0.1
  },
  {
    id: "rooster",
    name: "Rooster",
    names: { en: "Rooster", ml: "പൂവൻകോഴി", ta: "சேவல்", hi: "मुर्गा" },
    paths: ["M-30,0 L0,-30 L30,0 L0,30 M0,-30 L0,30"],
    starPoints: [s(-30, 0), s(0, -30), s(30, 0), s(0, 30)],
    story: "The punctual guardian; represents detailed observation, deep courage, structured discipline, and vocal pride.",
    celestialX: 0.5,
    celestialY: 0.8
  },
  {
    id: "dog",
    name: "Dog",
    names: { en: "Dog", ml: "പട്ടി", ta: "நாய்", hi: "कुत्ता" },
    paths: ["M-40,-30 L40,-30 L0,30 Z"],
    starPoints: [s(-40, -30), s(40, -30), s(0, 30)],
    story: "The loyal companion; represents honest service, deep loyalty, justice-loving stance, and protective alerts.",
    celestialX: 0.6,
    celestialY: 0.9
  },
  {
    id: "pig",
    name: "Pig",
    names: { en: "Pig", ml: "പന്നി", ta: "பன்றி", hi: "सूअर" },
    paths: ["M-20,-20 A20,20 0 1,1 20,20 M-20,-20 L20,20"],
    starPoints: [s(-20, -20), s(20, 20)],
    story: "The generous peacekeeper; represents genuine sincerity, simple purity of heart, good fortune, and warm trust.",
    celestialX: 0.7,
    celestialY: 0.8
  }
];

export const MAYAN_SIGNS: AstrologicalSign[] = [
  {
    id: "imix",
    name: "Imix",
    names: { en: "Imix", ml: "ഇമിക്സ്", ta: "இமிக்ஸ்", hi: "इमिक्स" },
    paths: ["M-50,50 L50,50 L0,-30 Z"],
    starPoints: [s(-50, 50), s(50, 50), s(0, -30)],
    story: "The Crocodile; represents primeval creation, source of abundance, active protection, and foundational nourishment.",
    celestialX: 0.1,
    celestialY: 0.8
  },
  {
    id: "ik",
    name: "Ik",
    names: { en: "Ik", ml: "ഇക്", ta: "இக்", hi: "इक" },
    paths: ["M-30,0 L30,0 M0,-30 L0,30"],
    starPoints: [s(-30, 0), s(30, 0), s(0, -30), s(0, 30)],
    story: "The Wind; represents absolute spirit, breath of life, rapid communication, and intellectual transition.",
    celestialX: 0.2,
    celestialY: 0.7
  },
  {
    id: "akbal",
    name: "Ak'bal",
    names: { en: "Ak'bal", ml: "അക്ബാൽ", ta: "அக்பால்", hi: "अकबाल" },
    paths: ["M-30,-30 L30,-30 L30,30 L-30,30 Z"],
    starPoints: [s(-30, -30), s(30, -30), s(30, 30), s(-30, 30)],
    story: "The Night; represents the inner sanctuary of the mind, dream realms, hidden mysteries, and quiet introspection.",
    celestialX: 0.3,
    celestialY: 0.6
  },
  {
    id: "kan",
    name: "Kan",
    names: { en: "Kan", ml: "കാൻ", ta: "கான்", hi: "कान" },
    paths: ["M0,-40 L-30,10 L30,10 Z M-30,10 L-30,40 M30,10 L30,40"],
    starPoints: [s(0, -40), s(-30, 10), s(30, 10), s(-30, 40), s(30, 40)],
    story: "The Seed; represents potential growth, spiritual fertility, dynamic networks, and planting creative intent.",
    celestialX: 0.4,
    celestialY: 0.5
  },
  {
    id: "chicchan",
    name: "Chicchan",
    names: { en: "Chicchan", ml: "ചിക്ചാൻ", ta: "சிக்சான்", hi: "चिकचान" },
    paths: ["M-30,-20 Q0,-40 30,-20 T-30,20 T30,20"],
    starPoints: [s(-30, -20), s(30, -20), s(-30, 20), s(30, 20)],
    story: "The Serpent; represents internal life force, rapid instinct, magical power, and alignment with planetary cycles.",
    celestialX: 0.5,
    celestialY: 0.4
  },
  {
    id: "cimi",
    name: "Cimi",
    names: { en: "Cimi", ml: "സിമി", ta: "சிமி", hi: "सिमी" },
    paths: ["M-20,-30 L20,-30 L0,20 Z M0,20 L0,50"],
    starPoints: [s(-20, -30), s(20, -30), s(0, 20), s(0, 50)],
    story: "The Death/Rebirth; represents deep transition, letting go of the old, ancestral connection, and profound wisdom.",
    celestialX: 0.6,
    celestialY: 0.3
  },
  {
    id: "manik",
    name: "Manik",
    names: { en: "Manik", ml: "മണിക്", ta: "மணிக்", hi: "मणिक" },
    paths: ["M-40,0 L0,-40 L40,0 L0,40 Z M0,-40 L0,40"],
    starPoints: [s(-40, 0), s(0, -40), s(40, 0), s(0, 40)],
    story: "The Deer; represents the gentle hand, peaceful healing, spiritual guidance, and solid connection to nature.",
    celestialX: 0.7,
    celestialY: 0.2
  },
  {
    id: "lamat",
    name: "Lamat",
    names: { en: "Lamat", ml: "ലമത്", ta: "லமத்", hi: "लमत" },
    paths: ["M-30,0 L30,0 M0,-30 L0,30 M-20,-20 L20,20 M20,-20 L-20,20"],
    starPoints: [s(-30, 0), s(30, 0), s(0, -30), s(0, 30), s(-20, -20), s(20, 20), s(20, -20), s(-20, 20)],
    story: "The Star; represents cosmic harmony, radiant beauty, ultimate abundance, and multi-dimensional balance.",
    celestialX: 0.8,
    celestialY: 0.1
  },
  {
    id: "muluc",
    name: "Muluc",
    names: { en: "Muluc", ml: "മുലുക്", ta: "முலுக்", hi: "मुलुक" },
    paths: ["M0,-40 A40,40 0 1,1 0,40 A40,40 0 1,1 0,-40 M0,0 L0,20"],
    starPoints: [s(0, -40), s(40, 0), s(0, 40), s(-40, 0), s(0, 0), s(0, 20)],
    story: "The Water; represents dynamic emotion, flow of consciousness, purification, and spiritual connection.",
    celestialX: 0.9,
    celestialY: 0.2
  },
  {
    id: "oc",
    name: "Oc",
    names: { en: "Oc", ml: "ഒക്", ta: "ஒக்", hi: "ओक" },
    paths: ["M-20,-30 L20,-30 L20,20 L0,40 L-20,20 Z"],
    starPoints: [s(-20, -30), s(20, -30), s(20, 20), s(0, 40), s(-20, 20)],
    story: "The Dog; represents loyalty of the heart, spiritual guidance in darkness, and warm companionship.",
    celestialX: 0.1,
    celestialY: 0.3
  },
  {
    id: "chuen",
    name: "Chuen",
    names: { en: "Chuen", ml: "ചുവാൻ", ta: "சுவென்", hi: "चुएन" },
    paths: ["M-30,-20 L0,-40 L30,-20 M0,-40 L0,40 M-30,40 L30,40"],
    starPoints: [s(-30, -20), s(0, -40), s(30, -20), s(0, 40), s(-30, 40), s(30, 40)],
    story: "The Monkey; represents the divine weaver, artist of time, creative playfulness, and innocent magic.",
    celestialX: 0.2,
    celestialY: 0.4
  },
  {
    id: "eb",
    name: "Eb",
    names: { en: "Eb", ml: "എബ്", ta: "எப்", hi: "एब" },
    paths: ["M-40,0 L40,0 M-20,-30 L-20,30 M20,-30 L20,30"],
    starPoints: [s(-40, 0), s(40, 0), s(-20, -30), s(-20, 30), s(20, -30), s(20, 30)],
    story: "The Road/Human; represents the planetary journey of humankind, wisdom of choices, and dynamic travel.",
    celestialX: 0.3,
    celestialY: 0.5
  },
  {
    id: "ben",
    name: "Ben",
    names: { en: "Ben", ml: "ബെൻ", ta: "பென்", hi: "बेन" },
    paths: ["M-30,-30 L30,-30 M-30,0 L30,0 M-30,30 L30,30 M0,-30 L0,30"],
    starPoints: [s(-30, -30), s(30, -30), s(-30, 0), s(30, 0), s(-30, 30), s(30, 30), s(0, -30), s(0, 30)],
    story: "The Reed; represents dynamic growth, spiritual authority, connection of earth and heaven, and straight resolve.",
    celestialX: 0.4,
    celestialY: 0.6
  },
  {
    id: "ix",
    name: "Ix",
    names: { en: "Ix", ml: "ഇക്സ്", ta: "இக்ஸ்", hi: "इक्स" },
    paths: ["M-30,-30 L30,-30 L30,30 L-30,30 Z M-15,-15 L15,15"],
    starPoints: [s(-30, -30), s(30, -30), s(30, 30), s(-30, 30), s(-15, -15), s(15, 15)],
    story: "The Jaguar; represents shamanic powers, nocturnal wisdom, stealthy execution, and natural feminine strength.",
    celestialX: 0.5,
    celestialY: 0.7
  },
  {
    id: "men",
    name: "Men",
    names: { en: "Men", ml: "മെൻ", ta: "மென்", hi: "मेन" },
    paths: ["M-40,-30 L0,10 L40,-30 M0,10 L0,40 M-40,40 L40,40"],
    starPoints: [s(-40, -30), s(0, 10), s(40, -30), s(0, 40), s(-40, 40), s(40, 40)],
    story: "The Eagle; represents high vision, overview perspective, sharp mental focus, and absolute freedom.",
    celestialX: 0.6,
    celestialY: 0.8
  },
  {
    id: "cib",
    name: "Cib",
    names: { en: "Cib", ml: "സിബ്", ta: "சிப்", hi: "सिब" },
    paths: ["M-30,0 L0,-30 L30,0 L0,30 Z M-15,0 L15,0"],
    starPoints: [s(-30, 0), s(0, -30), s(30, 0), s(0, 30), s(-15, 0), s(15, 0)],
    story: "The Warrior/Staff; represents internal trust, deep wisdom of ancestors, courage in face of truth, and spiritual staff.",
    celestialX: 0.7,
    celestialY: 0.9
  },
  {
    id: "caban",
    name: "Caban",
    names: { en: "Caban", ml: "കബാൻ", ta: "கபான்", hi: "कबान" },
    paths: ["M-40,20 A20,20 0 1,1 0,-20 A20,20 0 1,1 40,20"],
    starPoints: [s(-40, 20), s(0, -20), s(40, 20)],
    story: "The Earth; represents universal movement, organic alignment with planetary cycles, grounding, and synergy.",
    celestialX: 0.8,
    celestialY: 0.8
  },
  {
    id: "etznab",
    name: "Etz'nab",
    names: { en: "Etz'nab", ml: "എറ്റ്സ്നാബ്", ta: "எட்ஸ்னாப்", hi: "एट्सनाब" },
    paths: ["M-30,0 L0,-40 L30,0 L0,40 Z M0,-40 L0,40 M-30,0 L30,0"],
    starPoints: [s(-30, 0), s(0, -40), s(30, 0), s(0, 40)],
    story: "The Flint/Mirror; represents absolute clarity, cutting away illusion, truth reflecting back, and healing surgery.",
    celestialX: 0.9,
    celestialY: 0.7
  },
  {
    id: "cauac",
    name: "Cauac",
    names: { en: "Cauac", ml: "കാവാക്", ta: "காவாக்", hi: "कावाक" },
    paths: ["M-30,-20 L0,20 L30,-20 M0,20 L0,50 M-20,50 L20,50"],
    starPoints: [s(-30, -20), s(0, 20), s(30, -20), s(0, 50), s(-20, 50), s(20, 50)],
    story: "The Storm; represents deep transformation, dynamic electrical energy, clearing air, and massive rejuvenation.",
    celestialX: 0.5,
    celestialY: 0.3
  },
  {
    id: "ahau",
    name: "Ahau",
    names: { en: "Ahau", ml: "അഹാവ്", ta: "அஹாவ்", hi: "अहाव" },
    paths: ["M0,-50 A50,50 0 1,1 0,50 A50,50 0 1,1 0,-50 M-20,0 L20,0"],
    starPoints: [s(0, -50), s(50, 0), s(0, 50), s(-50, 0), s(-20, 0), s(20, 0)],
    story: "The Sun; represents spiritual light, dynamic solar analog, cosmic integration, absolute enlightenment, and focus.",
    celestialX: 0.4,
    celestialY: 0.2
  }
];
