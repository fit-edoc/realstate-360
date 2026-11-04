"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  IconSmartHome,
  IconBuildingCommunity,
  IconBuildingSkyscraper,
  IconHome,
  IconUserCheck,
  IconBriefcase,
  IconUsers,
  IconReceipt2,
  IconCalendarEvent,
  IconChartBar,
  IconSettings,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export interface NavItemConfig {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; stroke?: number; className?: string }>;
}

const NAV_ITEMS: NavItemConfig[] = [
  { id: "home", label: "Home", icon: IconSmartHome },
  { id: "developments", label: "Developments", icon: IconBuildingCommunity },
  { id: "buildings", label: "Buildings", icon: IconBuildingSkyscraper },
  { id: "units", label: "Units", icon: IconHome },
  { id: "leads", label: "Leads", icon: IconUserCheck },
  { id: "companies", label: "Companies", icon: IconBriefcase },
  { id: "contacts", label: "Contacts", icon: IconUsers },
  { id: "deals", label: "Deals", icon: IconReceipt2 },
  { id: "activities", label: "Activities", icon: IconCalendarEvent },
  { id: "reports", label: "Reports", icon: IconChartBar },
  { id: "settings", label: "Settings", icon: IconSettings },
];

export interface SidebarProps {
  activeId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export function Sidebar({ activeId = "home", onSelect, className }: SidebarProps) {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
  const currentActive = activeId;
  const shouldReduceMotion = useReducedMotion();

  const handleItemClick = (id: string) => {
    onSelect?.(id);
  };

  return (
    <>
      {/* Dimmed backdrop when expanded on desktop to prevent visual collision */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 z-40 bg-black/5 md:block hidden backdrop-blur-[1px]"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* DESKTOP SIDEBAR: Fixed, Full Height, High Z-Index Rail   */}
      {/* ======================================================== */}
      <motion.aside
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, filter: "blur(12px)", x: -10 }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          x: 0,
          width: isExpanded ? 220 : 64,
        }}
        transition={{
          width: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          filter: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          x: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        }}
        className={cn(
          "hidden md:flex fixed top-0 left-0 bottom-0 z-50 h-screen flex-col justify-between overflow-hidden",
          "bg-white/95 backdrop-blur-md border-r border-white select-none shadow-[1px_0_3px_1px_rgba(0,0,0,0.03)]",
          className
        )}
        aria-label="Main Application Sidebar"
      >
        {/* Top: Logo & Toggle */}
        <div className="flex flex-col">
          {/* Header Bar with 8x8 Pixel Mark */}
          <div className="flex h-16 items-center px-4.5 justify-between">
            <div className="flex items-center gap-3 overflow-hidden">
              {/* 8x8 Pixelated Mark with crisp edges */}
              <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 8 8"
                  shapeRendering="crispEdges"
                  className="shrink-0"
                  aria-label="StateFlow Pixel Mark"
                >
                  <rect x="1" y="1" width="5" height="1" fill="#0A0A0A" />
                  <rect x="1" y="2" width="2" height="1" fill="#0A0A0A" />
                  <rect x="1" y="3" width="6" height="1" fill="#0A0A0A" />
                  <rect x="5" y="4" width="2" height="1" fill="#0A0A0A" />
                  <rect x="2" y="5" width="5" height="1" fill="#0A0A0A" />
                  <rect x="1" y="6" width="3" height="1" fill="#0A0A0A" />
                </svg>
              </div>

              {/* StateFlow Wordmark (only visible when expanded) */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, filter: "blur(6px)", x: -6 }}
                    animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                    exit={{ opacity: 0, filter: "blur(4px)", x: -6, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.2 }}
                    className="text-sm font-normal tracking-tight text-[#0A0A0A] whitespace-nowrap"
                  >
                    StateFlow
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Items List */}
          <nav className="mt-2 flex flex-col gap-1 px-2.5" aria-label="Sidebar Navigation">
            {NAV_ITEMS.map((item, index) => {
              const Icon = item.icon;
              const isActive = currentActive === item.id;

              return (
                <div key={item.id} className="relative group">
                  <button
                    type="button"
                    onClick={() => handleItemClick(item.id)}
                    className={cn(
                      "relative flex h-9.5 w-full items-center rounded-2xl transition-colors cursor-pointer select-none",
                      isExpanded ? "px-3 gap-3" : "justify-center px-0",
                      isActive
                        ? "text-[#ffffff]"
                        : "text-[#0A0A0A]/60 hover:text-[#0A0A0A] hover:bg-white/60"
                    )}
                    aria-current={isActive ? "page" : undefined}
                    aria-label={item.label}
                  >
                    {/* Active Sliding Pill Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-[8px] bg-[#000000] -z-10 shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Tabler Icon with consistent stroke 1.5, size 20 */}
                    <Icon size={20} stroke={1.5} className="shrink-0 text-inherit" />

                    {/* Expandable Label with Blur Stagger */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.span
                          initial={{ opacity: 0, filter: "blur(8px)", x: -6 }}
                          animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                          exit={{
                            opacity: 0,
                            filter: "blur(4px)",
                            x: -6,
                            transition: { duration: 0.15 },
                          }}
                          transition={{
                            duration: 0.25,
                            delay: index * 0.04,
                          }}
                          className="whitespace-nowrap text-xs font-normal tracking-tight text-inherit"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>

                  {/* Tooltip on Icon while Collapsed */}
                  {!isExpanded && (
                    <div
                      role="tooltip"
                      className="absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-[8px] bg-[#0A0A0A] text-white text-xs font-normal whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-[60] border border-white/20 shadow-[0_2px_6px_1px_rgba(0,0,0,0.15)]"
                    >
                      {item.label}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom Rail: Sidebar Toggle Button */}
        <div className="p-2.5 border-t border-white/60">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className={cn(
              "flex h-9.5 w-full items-center rounded-[8px] text-[#0A0A0A]/60 hover:text-[#0A0A0A] hover:bg-white/60 transition-colors cursor-pointer",
              isExpanded ? "px-3 gap-3 justify-start" : "justify-center"
            )}
            aria-label={isExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            {isExpanded ? (
              <>
                <IconLayoutSidebarLeftCollapse size={20} stroke={1.5} className="shrink-0" />
                <span className="text-xs font-normal tracking-tight text-[#0A0A0A]/80">Collapse</span>
              </>
            ) : (
              <IconLayoutSidebarLeftExpand size={20} stroke={1.5} className="shrink-0" />
            )}
          </button>
        </div>
      </motion.aside>

      {/* ======================================================== */}
      {/* MOBILE BOTTOM NAVIGATION BAR: Responsive Fallback        */}
      {/* ======================================================== */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-14 bg-white/95 backdrop-blur-md border-t border-white flex items-center justify-around px-2 shadow-[0_-1px_3px_1px_rgba(0,0,0,0.03)]"
        aria-label="Mobile Navigation"
      >
        {NAV_ITEMS.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive = currentActive === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleItemClick(item.id)}
              className={cn(
                "relative flex h-10 w-10 items-center justify-center rounded-[8px] transition-colors cursor-pointer",
                isActive ? "text-[#15803D]" : "text-[#0A0A0A]/60 hover:text-[#0A0A0A]"
              )}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-active"
                  className="absolute inset-0 rounded-[8px] bg-[#DCFCE7] -z-10 shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon size={20} stroke={1.5} />
            </button>
          );
        })}
      </nav>
    </>
  );
}

export default Sidebar;
