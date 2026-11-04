export type GreenShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 900;
export type BrandColor = "black" | "white";
export interface ThemeTokens {
  green: Record<GreenShade, string>;
  black: string;
  white: string;
}
