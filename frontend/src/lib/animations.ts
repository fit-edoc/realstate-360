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
export const LABEL_BLUR_VARIANTS = {
  initial: { opacity: 0, filter: "blur(8px)", x: -6 },
  animate: { opacity: 1, filter: "blur(0px)", x: 0 },
  exit: { opacity: 0, filter: "blur(4px)", x: -6, transition: { duration: 0.15 } },
};
export const COLLAPSE_TRANSITION = { duration: 0.15 };
export const TOOLTIP_DELAY = 150;
