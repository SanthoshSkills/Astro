import { VEDIC_NAKSHATRAS, WESTERN_ZODIAC, CHINESE_ZODIAC, MAYAN_SIGNS, AstrologicalSign } from "./mock-data";

export function getActiveSign(system: string, dateStr: string, timelineValue: number): AstrologicalSign {
  const date = new Date(dateStr);
  let year = date.getFullYear();
  
  // Fallback for invalid or empty dates (NaN)
  if (isNaN(year)) {
    year = 1950; // default base year
  }
  
  const currentYear = year + Math.floor(timelineValue);
  
  // Helper to ensure index results are always in-bounds and non-negative
  const getSafeIndex = (index: number, length: number): number => {
    if (isNaN(index) || length === 0) return 0;
    const modulo = index % length;
    return modulo < 0 ? modulo + length : modulo;
  };

  switch (system) {
    case "vedic":
      return VEDIC_NAKSHATRAS[getSafeIndex(currentYear, VEDIC_NAKSHATRAS.length)];
    case "western":
      return WESTERN_ZODIAC[getSafeIndex(currentYear, WESTERN_ZODIAC.length)];
    case "chinese":
      return CHINESE_ZODIAC[getSafeIndex(currentYear, CHINESE_ZODIAC.length)];
    case "mayan":
      return MAYAN_SIGNS[getSafeIndex(currentYear, MAYAN_SIGNS.length)];
    default:
      return VEDIC_NAKSHATRAS[0];
  }
}

export function getSystemRotation(system: string): number {
  switch (system) {
    case "vedic": return 0;
    case "western": return 90;
    case "chinese": return 180;
    case "mayan": return 270;
    default: return 0;
  }
}

