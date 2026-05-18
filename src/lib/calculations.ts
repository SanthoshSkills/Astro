import { VEDIC_NAKSHATRAS, WESTERN_ZODIAC, CHINESE_ZODIAC, MAYAN_SIGNS, AstrologicalSign } from "./mock-data";

export function getActiveSign(system: string, dateStr: string, timelineValue: number): AstrologicalSign {
  const date = new Date(dateStr);
  const year = date.getFullYear() + Math.floor(timelineValue);
  
  switch (system) {
    case "vedic":
      // Simplified modulo logic for demonstration
      return VEDIC_NAKSHATRAS[year % VEDIC_NAKSHATRAS.length];
    case "western":
      return WESTERN_ZODIAC[year % WESTERN_ZODIAC.length];
    case "chinese":
      return CHINESE_ZODIAC[year % CHINESE_ZODIAC.length];
    case "mayan":
      return MAYAN_SIGNS[year % MAYAN_SIGNS.length];
    default:
      return VEDIC_NAKSHATRAS[0];
  }
}
