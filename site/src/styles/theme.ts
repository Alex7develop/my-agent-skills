export const theme = {
  colors: {
    bg: '#0A0A0B',
    bgElevated: '#141416',
    border: '#26262A',
    textPrimary: '#F5F5F4',
    textSecondary: '#8A8A8E',
    accent: '#5EEAD4',
    accentDim: '#2DD4BF',
  },
  fonts: {
    sans: '"Inter", "Geist Sans", system-ui, sans-serif',
    mono: '"JetBrains Mono", "Berkeley Mono", ui-monospace, monospace',
  },
  radii: {
    none: '0',
    sm: '2px',
    md: '4px',
  },
  breakpoints: {
    mobile: '640px',
  },
  maxWidth: '1100px',
} as const;

export type AppTheme = typeof theme;
