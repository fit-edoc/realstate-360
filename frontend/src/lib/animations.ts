/**
 * Motion Animation Variants & Spring Configs
 */
export const SIDEBAR_SPRING = {
  type: "spring",
  stiffness: 300,
  damping: 30,
} as const;
export const SIDEBAR_WIDTHS = { collapsed: 64, expanded: 220 } as const;
export const NAV_ACTIVE_LAYOUT_ID = "nav-active";
