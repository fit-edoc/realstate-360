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
        "flex flex-col rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <h3 className="text-base font-semibold text-gray-900 mb-4">My Schedule</h3>

      <div className="flex flex-col gap-3.5 ">
        {schedule.map((item) => {
          const isGreen = item.colorVariant === "green";
          const isPurple = item.colorVariant === "purple";
          const isGold = item.colorVariant === "gold";

          return (
            <div
              key={item.id}
              className={cn(
                "pl-3 border-l-[3px] py-2 rounded-lg transition-all hover:translate-x-0.5",
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
  );
}

export default ScheduleWidget;
