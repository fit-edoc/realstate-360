"use client";

import * as React from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export interface CalendarWidgetProps {
  month?: string;
  year?: string;
  activeDay?: number;
  highlightedDays?: number[];
  className?: string;
}

export function CalendarWidget({
  month = "July",
  year = "2025",
  activeDay = 8,
  highlightedDays = [10, 11, 14],
  className,
}: CalendarWidgetProps) {
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  // Calendar dates layout for July 2025 (starts on Tuesday):
  const calendarDays = [
    { day: null }, { day: null }, { day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 5 },
    { day: 6 }, { day: 7 }, { day: 8 }, { day: 9 }, { day: 10 }, { day: 11 }, { day: 12 },
    { day: 13 }, { day: 14 }, { day: 15 }, { day: 16 }, { day: 17 }, { day: 18 }, { day: 19 },
    { day: 20 }, { day: 21 }, { day: 22 }, { day: 23 }, { day: 24 }, { day: 25 }, { day: 26 },
    { day: 27 }, { day: 28 }, { day: 29 }, { day: 30 }, { day: 31 },
  ];

  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-[12px] border border-white bg-white/80 backdrop-blur-md p-5 select-none",
        className
      )}
    >
      {/* Month/Year Header with Tabler arrows */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-normal tracking-tight text-[#0A0A0A]">
          {month} <span className="font-mono text-[#0A0A0A]/60">{year}</span>
        </h3>
        <div className="flex items-center gap-1 text-[#0A0A0A]/60">
          <button
            type="button"
            aria-label="Previous month"
            className="flex h-6 w-6 items-center justify-center rounded-[8px] hover:bg-white/80 hover:text-[#0A0A0A] transition-colors cursor-pointer"
          >
            <IconChevronLeft size={16} stroke={1.5} />
          </button>
          <button
            type="button"
            aria-label="Next month"
            className="flex h-6 w-6 items-center justify-center rounded-[8px] hover:bg-white/80 hover:text-[#0A0A0A] transition-colors cursor-pointer"
          >
            <IconChevronRight size={16} stroke={1.5} />
          </button>
        </div>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 text-center text-[10px] text-[#0A0A0A]/40 font-normal mb-1">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="py-0.5">
            {day}
          </div>
        ))}
      </div>

      {/* Dates Grid */}
      <div className="grid grid-cols-7 text-center text-xs gap-y-1">
        {calendarDays.map((item, idx) => {
          if (!item.day) {
            return <div key={idx} className="h-6.5 w-6.5" />;
          }

          const isActive = item.day === activeDay;
          const isHighlighted = highlightedDays?.includes(item.day);

          return (
            <div key={idx} className="flex flex-col items-center justify-center">
              <span
                className={cn(
                  "flex h-6.5 w-6.5 items-center justify-center rounded-[8px] text-[11px] font-mono font-normal transition-colors cursor-pointer",
                  isActive
                    ? "bg-[#0A0A0A] text-white"
                    : isHighlighted
                    ? "bg-[#DCFCE7] text-[#15803D] border border-green-200"
                    : "text-[#0A0A0A]/70 hover:bg-white/80 hover:text-[#0A0A0A]"
                )}
              >
                {item.day}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarWidget;
