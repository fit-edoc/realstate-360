"use client";

import * as React from "react";
import {
  IconSearch,
  IconChevronDown,
  IconUser,
  IconSettings,
  IconLogout,
  IconBell,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";

export interface NavbarProps {
  initialActiveId?: string;
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const userMenuRef = React.useRef<HTMLDivElement>(null);

  // Close popup on outside click
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on Escape key
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsUserMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "w-full rounded-[12px] border border-white bg-white/80 backdrop-blur-md px-4 py-3 select-none shadow-[0_1px_3px_1px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <div className="flex w-full items-center justify-between gap-4">
        {/* Left: Section Header & Live System Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-normal tracking-tight text-[#0A0A0A]">
              StateFlow
            </span>
            <span className="text-xs font-normal text-[#0A0A0A]/40">/</span>
            <span className="text-xs font-normal text-[#15803D]">
              Overview
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 rounded-[8px] bg-[#DCFCE7] px-2 py-0.5 border border-green-200 shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-pulse" />
            <span className="text-[11px] font-normal text-[#15803D] tracking-tight">
              Live Sync
            </span>
          </div>
        </div>

        {/* Right Side: Global Search, Notifications & User Account */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Search Box */}
          <div className="relative w-36 sm:w-56 md:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search properties, leads..."
              className="h-8.5 w-full rounded-[8px] border border-white/80 bg-white/60 pr-8 pl-3 text-xs font-normal text-[#0A0A0A] placeholder:text-[#0A0A0A]/40 transition-colors focus:border-[#16A34A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#16A34A]/30 shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-[#0A0A0A]/50">
              <IconSearch size={16} stroke={1.5} />
            </div>
          </div>

          {/* Notifications Button */}
          <button
            type="button"
            aria-label="View Notifications"
            className="relative flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-[8px] text-[#0A0A0A]/70 hover:bg-white/80 hover:text-[#0A0A0A] transition-colors border border-transparent hover:border-white shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]"
          >
            <IconBell size={18} stroke={1.5} />
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
          </button>

          {/* User Profile Avatar with dropdown arrow */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
              aria-label="User account menu"
              aria-expanded={isUserMenuOpen}
              className="flex cursor-pointer items-center gap-2 rounded-[8px] p-1 transition-opacity hover:opacity-90 focus:outline-none"
            >
              <Avatar
                size="sm"
                src="/avatars/user.jpg"
                alt="Account profile avatar"
                fallback="MR"
                className="h-7 w-7 rounded-full border border-white shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]"
              />
              <span className="hidden xl:inline text-xs font-normal text-[#0A0A0A]">
                Michael R.
              </span>
              <IconChevronDown
                size={14}
                stroke={1.5}
                className={cn(
                  "text-[#0A0A0A]/60 transition-transform duration-200",
                  isUserMenuOpen && "rotate-180"
                )}
              />
            </button>

            {/* Profile Menu Dropdown */}
            {isUserMenuOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-56 rounded-[12px]  border border-white bg-white/95 backdrop-blur-md p-1.5 z-auto animate-in fade-in duration-150 shadow-[0_4px_12px_1px_rgba(0,0,0,0.05)]"
              >
                <div className="border-b border-[#0A0A0A]/5 px-3 py-2.5">
                  <p className="text-xs font-normal text-[#0A0A0A]">Michael Roberts</p>
                  <p className="truncate text-[11px] font-normal text-[#0A0A0A]/60 font-mono">
                    m.roberts@realtor360.com
                  </p>
                  <span className="mt-1.5 inline-block rounded-[8px] bg-[#DCFCE7] px-2 py-0.5 text-[10px] font-normal text-[#15803D]">
                    Broker Partner
                  </span>
                </div>
                <div className="py-1">
                  <button
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex w-full items-center gap-2 rounded-[8px] px-3 py-1.5 text-xs font-normal text-[#0A0A0A]/80 hover:bg-green-50 hover:text-[#15803D] transition-colors"
                  >
                    <IconUser size={16} stroke={1.5} className="text-inherit" />
                    My Profile
                  </button>
                  <button
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex w-full items-center gap-2 rounded-[8px] px-3 py-1.5 text-xs font-normal text-[#0A0A0A]/80 hover:bg-green-50 hover:text-[#15803D] transition-colors"
                  >
                    <IconSettings size={16} stroke={1.5} className="text-inherit" />
                    Account Settings
                  </button>
                </div>
                <div className="border-t border-[#0A0A0A]/5 pt-1">
                  <button
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex w-full items-center gap-2 rounded-[8px] px-3 py-1.5 text-xs font-normal text-[#0A0A0A]/70 hover:bg-black/5 hover:text-[#0A0A0A] transition-colors"
                  >
                    <IconLogout size={16} stroke={1.5} />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
