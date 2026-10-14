import * as React from "react";
import { cn } from "@/lib/utils";
import { ScheduleItem } from "@/types/dashboard";

export interface ScheduleWidgetProps {
  schedule: ScheduleItem[];
  className?: string;
}

export function ScheduleWidget({ schedule, className }: ScheduleWidgetProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900">My Schedule</h3>
          <span className="text-xs font-medium text-gray-400">
            {schedule.length} Events
          </span>
        </div>

        <div className="flex flex-col gap-3 flex-1">
          {schedule.map((item) => {
            const isGreen = item.colorVariant === "green";
            const isPurple = item.colorVariant === "purple";
            const isGold = item.colorVariant === "gold";

            return (
              <div
                key={item.id}
                className={cn(
                  "pl-3 border-l-[3px] py-2 rounded-lg transition-all hover:translate-x-0.5 hover:bg-gray-50/50",
                  isGreen && "border-emerald-500",
                  isPurple && "border-indigo-400",
                  isGold && "border-[#D4AF37]"
                )}
              >
                <h4 className="text-xs font-semibold text-gray-900">{item.title}</h4>
                <p className="text-[11px] text-gray-400 leading-snug">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Schedule Footer Action */}
      <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs">
        <span className="font-medium text-gray-500">Upcoming Tasks</span>
        <button
          type="button"
          className="text-xs font-semibold text-[#D4AF37] hover:underline"
        >
          View All &rarr;
        </button>
      </div>
    </div>
  );
}

export default ScheduleWidget;
