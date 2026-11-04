"use client";

import * as React from "react";
import { IconArrowRight } from "@tabler/icons-react";
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
        "flex flex-col justify-between rounded-[12px] border border-white bg-white/80 backdrop-blur-md p-5 select-none",
        className
      )}
    >
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-normal tracking-tight text-[#0A0A0A]">My Schedule</h3>
          <span className="font-mono text-[11px] font-normal text-[#0A0A0A]/50">
            {schedule.length} Events
          </span>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          {schedule.slice(0, 5).map((item) => {
            const isEmerald = item.colorVariant === "emerald";
            const isForest = item.colorVariant === "forest";

            return (
              <div
                key={item.id}
                className={cn(
                  "pl-2.5 border-l-2 py-1.5 rounded-r-[8px] transition-colors hover:bg-white/60",
                  isEmerald
                    ? "border-[#4ADE80]"
                    : isForest
                    ? "border-[#15803D]"
                    : "border-[#16A34A]"
                )}
              >
                <h4 className="text-xs font-normal text-[#0A0A0A] tracking-tight">{item.title}</h4>
                <p className="text-[10px] text-[#0A0A0A]/50 leading-snug font-normal">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Schedule Footer Action */}
      <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between text-xs">
        <span className="font-normal text-[#0A0A0A]/50 text-[11px]">Upcoming Tasks</span>
        <button
          type="button"
          className="inline-flex items-center gap-1 text-xs font-normal text-[#15803D] hover:text-[#14532D] cursor-pointer"
        >
          View All
          <IconArrowRight size={14} stroke={1.5} />
        </button>
      </div>
    </div>
  );
}

export default ScheduleWidget;
