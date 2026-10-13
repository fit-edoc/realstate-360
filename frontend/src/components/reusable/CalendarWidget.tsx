import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  // Calendar dates layout for July 2025:
  // July 1, 2025 is a Tuesday (index 2: Sun=0, Mon=1, Tue=2)
  // Weeks representation matching screenshot:
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
        "flex flex-col rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      {/* Month/Year Header with arrows */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold tracking-tight text-gray-900">
          {month} {year}
        </h3>
        <div className="flex items-center gap-1 text-gray-600">
          <button
            aria-label="Previous month"
            className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next month"
            className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 text-center text-xs text-gray-500 font-medium mb-2">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="py-1">
            {day}
          </div>
        ))}
      </div>

      {/* Dates Grid */}
      <div className="grid grid-cols-7 text-center text-xs gap-y-1.5">
        {calendarDays.map((item, idx) => {
          if (!item.day) {
            return <div key={idx} className="h-7 w-7" />;
          }

          const isActive = item.day === activeDay;
          const isHighlighted = highlightedDays?.includes(item.day);

          return (
            <div key={idx} className="flex flex-col items-center justify-center">
              <span
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full text-xs transition-colors",
                  isActive
                    ? "bg-[#D4AF37] font-semibold text-white shadow-xs"
                    : isHighlighted
                    ? "text-emerald-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
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
