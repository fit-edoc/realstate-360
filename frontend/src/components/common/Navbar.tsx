"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, MoreHorizontal, Menu, X, User, Settings, LogOut, FileText, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

const PRIMARY_NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "developments", label: "Developments", href: "/developments" },
  { id: "buildings", label: "Buildings", href: "/buildings" },
  { id: "units", label: "Units", href: "/units" },
  { id: "leads", label: "Leads", href: "/leads" },
  { id: "companies", label: "Companies", href: "/companies" },
  { id: "contacts", label: "Contacts", href: "/contacts" },
  { id: "deals", label: "Deals", href: "/deals" },
  { id: "activities", label: "Activities", href: "/activities" },
  { id: "attorney-firms", label: "Attorney Firms", href: "/attorney-firms" },
  { id: "reports", label: "Reports", href: "/reports" },
];

const MORE_NAV_ITEMS: NavItem[] = [
  { id: "analytics", label: "Market Analytics", href: "/analytics" },
  { id: "documents", label: "Legal Documents", href: "/documents" },
  { id: "contractors", label: "Contractors", href: "/contractors" },
  { id: "system-audit", label: "Audit Logs", href: "/audit" },
];

export interface NavbarProps {
  initialActiveId?: string;
  className?: string;
}

export function Navbar({ initialActiveId = "home", className }: NavbarProps) {
  const [activeItem, setActiveItem] = React.useState<string>(initialActiveId);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = React.useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const moreMenuRef = React.useRef<HTMLDivElement>(null);
  const userMenuRef = React.useRef<HTMLDivElement>(null);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);

  // Close popups on click outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(event.target as Node)
      ) {
        setIsMoreMenuOpen(false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menus on Escape key
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMoreMenuOpen(false);
        setIsUserMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveItem(id);
    setIsMobileMenuOpen(false);
    setIsMoreMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-md transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)]",
        className
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1720px] items-center justify-between px-3 sm:px-4 lg:px-6">
        {/* Left Side: Brand Logo and Title */}
        <div className="flex shrink-0 items-center gap-2.5">
          <Link
            href="/"
            onClick={() => setActiveItem("home")}
            className="group flex items-center gap-2 transition-transform active:scale-98"
            aria-label="REALTOR360 Home"
          >
            {/* Logo from public/icon.png */}
            <div className="relative flex h-8 w-8 items-center justify-center">
              <Image
                src="/icon.png"
                alt="REALTOR360 Logo Icon"
                width={30}
                height={30}
                priority
                className="h-7 w-auto object-contain transition-opacity group-hover:opacity-90"
              />
            </div>
            <span className="font-extrabold tracking-tight text-gray-900 text-lg md:text-xl font-sans uppercase">
              REALTOR<span className="text-gray-950 font-black">360</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-1 overflow-x-auto py-1 text-sm font-medium scrollbar-none"
          aria-label="Main Navigation"
        >
          {PRIMARY_NAV_ITEMS.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={cn(
                  "relative cursor-pointer whitespace-nowrap rounded-md px-3.5 py-1.5 text-[13.5px] transition-all duration-150 select-none",
                  isActive
                    ? "bg-[#D4AF37] font-semibold text-white shadow-xs"
                    : "text-gray-700 hover:bg-gray-100/80 hover:text-gray-950"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </button>
            );
          })}

          {/* More options "..." button */}
          <div className="relative" ref={moreMenuRef}>
            <button
              onClick={() => setIsMoreMenuOpen((prev) => !prev)}
              aria-label="More navigation links"
              aria-expanded={isMoreMenuOpen}
              className={cn(
                "flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900",
                isMoreMenuOpen && "bg-gray-100 text-gray-900"
              )}
            >
              <MoreHorizontal className="h-5 w-5" />
            </button>

            {/* Dropdown for More Items */}
            {isMoreMenuOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white p-1.5 shadow-lg shadow-gray-200/50 animate-in fade-in zoom-in-95 duration-150 z-50"
              >
                <div className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Additional Tools
                </div>
                {MORE_NAV_ITEMS.map((item) => {
                  const isActive = activeItem === item.id;
                  return (
                    <button
                      key={item.id}
                      role="menuitem"
                      onClick={() => handleLinkClick(item.id)}
                      className={cn(
                        "w-full cursor-pointer text-left rounded-md px-3 py-1.5 text-xs font-medium transition-colors select-none",
                        isActive
                          ? "bg-[#D4AF37] text-white"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-950"
                      )}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Right Side: Search and User Avatar Profile */}
        <div className="flex items-center gap-3">
          {/* Search Box with Search Icon on the right */}
          <div className="relative hidden md:block w-26 lg:w-28 xl:w-52">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="h-8.5 w-full rounded-md border border-gray-200/90 bg-gray-50/80 pr-8 pl-3 text-xs text-gray-800 placeholder:text-gray-400 transition-all focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-gray-500">
              <Search className="h-4 w-4" />
            </div>
          </div>

          {/* User Profile Avatar with dropdown arrow */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
              aria-label="User account menu"
              aria-expanded={isUserMenuOpen}
              className="group flex cursor-pointer items-center gap-1.5 rounded-full p-0.5 transition-opacity hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            >
              <Avatar
                size="md"
                src="/avatars/user.jpg"
                alt="Account profile avatar"
                fallback="MR"
                className="ring-1 ring-gray-200"
              />
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 text-gray-500 transition-transform duration-200 group-hover:text-gray-800",
                  isUserMenuOpen && "rotate-180"
                )}
              />
            </button>

            {/* Profile Menu Dropdown */}
            {isUserMenuOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white p-1.5 shadow-xl shadow-gray-300/40 animate-in fade-in zoom-in-95 duration-150 z-50"
              >
                <div className="border-b border-gray-100 px-3 py-2.5">
                  <p className="text-xs font-semibold text-gray-900">Michael Roberts</p>
                  <p className="truncate text-[11px] text-gray-500">m.roberts@realtor360.com</p>
                  <span className="mt-1.5 inline-block rounded-full bg-[#D4AF37]/15 px-2 py-0.5 text-[10px] font-semibold text-[#a88219]">
                    Broker Partner
                  </span>
                </div>
                <div className="py-1">
                  <button
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <User className="h-3.5 w-3.5 text-gray-500" />
                    My Profile
                  </button>
                  <button
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <Settings className="h-3.5 w-3.5 text-gray-500" />
                    Account Settings
                  </button>
                  <button
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <Bell className="h-3.5 w-3.5 text-gray-500" />
                    Notifications
                  </button>
                </div>
                <div className="border-t border-gray-100 pt-1">
                  <button
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex xl:hidden">
            <Button
              variant="ghost"
              size="iconSm"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              className="text-gray-700 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="border-t border-gray-200 bg-white px-4 pt-3 pb-6 shadow-xl xl:hidden animate-in slide-in-from-top-2 duration-200"
        >
          {/* Mobile Search Field */}
          <div className="relative mb-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search properties, leads, contacts..."
              className="h-9 w-full rounded-md border border-gray-200 bg-gray-50 pr-9 pl-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
              <Search className="h-4 w-4" />
            </div>
          </div>

          {/* Navigation Links list in Mobile */}
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
            {PRIMARY_NAV_ITEMS.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={cn(
                    "flex items-center justify-start rounded-md px-3 py-2 text-xs font-medium transition-colors select-none",
                    isActive
                      ? "bg-[#D4AF37] text-white shadow-xs font-semibold"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Additional Links in Mobile */}
          <div className="mt-3 border-t border-gray-100 pt-3">
            <p className="mb-1 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
              More Tools
            </p>
            <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
              {MORE_NAV_ITEMS.map((item) => {
                const isActive = activeItem === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={cn(
                      "flex items-center justify-start rounded-md px-3 py-1.5 text-xs transition-colors",
                      isActive
                        ? "bg-[#D4AF37] text-white font-semibold"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
