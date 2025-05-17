export const colors = {
  primaryGrey: '#2D2D2D',
  darkGrey: '#1A1A1A',
  primaryGreen: '#00C853',
  accentGreen: '#69F0AE',
  limeGreen: '#AEEA00',
  softWhite: '#E0E0E0',
} as const;

export type ColorTheme = typeof colors; 