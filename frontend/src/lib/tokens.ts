/**
 * Design Tokens: StateFlow Green Scale
 */
export const GREEN_SCALE = {
  50: "#F0FDF4",
  100: "#DCFCE7",
  200: "#BBF7D0",
  300: "#86EFAC",
  400: "#4ADE80",
  500: "#22C55E",
  600: "#16A34A",
  700: "#15803D",
  900: "#14532D",
} as const;

export const BRAND_COLORS = {
  black: "#0A0A0A",
  white: "#FFFFFF",
} as const;

export const RADII = {
  card: "12px",
  control: "8px",
} as const;

export const SHADOWS = {
  card: "0 1px 3px 1px rgba(0, 0, 0, 0.03)",
  dropdown: "0 4px 12px 1px rgba(0, 0, 0, 0.05)",
} as const;

export const CHART_PALETTE = [
  GREEN_SCALE[600],
  GREEN_SCALE[500],
  GREEN_SCALE[400],
  GREEN_SCALE[300],
  GREEN_SCALE[200],
] as const;

// commit step 7: style(globals): add soft green radial gradient to page background

// commit step 8: style(globals): remove yellow and gold utility color definitions

// commit step 9: style(globals): enforce global font-weight 400 inheritance on body

export type ChartPaletteColor = typeof CHART_PALETTE[number];

// commit step 13: refactor(layout): bind --font-geist-sans and --font-geist-mono to html

// commit step 19: refactor(typography): replace medium weight classes across button variants

// commit step 26: fix(icons): map closed deals KPI to Tabler IconCircleCheck
