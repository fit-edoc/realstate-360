"use client";

import * as React from "react";
import {
  IconUserPlus,
  IconCalendarPlus,
  IconFileAnalytics,
  IconSend,
  IconArrowRight,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export interface QuickActionsWidgetProps {
  className?: string;
}

export function QuickActionsWidget({ className }: QuickActionsWidgetProps) {
  const actions = [
    {
      id: "qa-lead",
      label: "New Lead Intake",
      desc: "Assign to sales queue",
      icon: IconUserPlus,
    },
    {
      id: "qa-visit",
      label: "Book Site Visit",
      desc: "Angel Plaza & Gardens",
      icon: IconCalendarPlus,
    },
    {
      id: "qa-report",
      label: "Pipeline Report",
      desc: "Export 22 active deals",
      icon: IconFileAnalytics,
    },
    {
      id: "qa-offer",
      label: "Send Final Offer",
      desc: "Villa & Skyline contracts",
      icon: IconSend,
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-[12px] border border-white bg-white/80 backdrop-blur-md p-5 select-none shadow-[0_1px_3px_1px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-normal tracking-tight text-[#0A0A0A]">Quick Actions</h3>
        <span className="text-[11px] font-normal text-[#15803D]">StateFlow Ops</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
        {actions.map((act) => {
          const Icon = act.icon;
          return (
            <button
              key={act.id}
              type="button"
              className="flex items-center gap-3 p-2.5 rounded-[8px] bg-white/60 hover:bg-white border border-white/80 text-left transition-colors cursor-pointer group shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] bg-green-50 text-[#15803D] group-hover:bg-[#DCFCE7] transition-colors shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]">
                <Icon size={16} stroke={1.5} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-normal text-[#0A0A0A] truncate">{act.label}</div>
                <div className="text-[10px] text-[#0A0A0A]/50 font-normal truncate">{act.desc}</div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between text-xs">
        <span className="font-normal text-[#0A0A0A]/50 text-[11px]">4 Automated Workflows</span>
        <span className="inline-flex items-center gap-1 text-[11px] font-normal text-[#15803D]">
          Ready
          <IconArrowRight size={12} stroke={1.5} />
        </span>
      </div>
    </div>
  );
}

export default QuickActionsWidget;
