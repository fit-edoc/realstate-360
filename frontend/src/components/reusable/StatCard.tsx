"use client";

import * as React from "react";
import {
  IconHome,
  IconUserCheck,
  IconCircleCheck,
  IconReceiptTax,
  IconTrendingUp,
  IconTrendingDown,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { StatCardData } from "@/types/dashboard";

const ICON_MAP: Record<
  StatCardData["iconType"],
  React.ComponentType<{ size?: number; stroke?: number; className?: string }>
> = {
  listing: IconHome,
  leads: IconUserCheck,
  closed: IconCircleCheck,
  revenue: IconReceiptTax,
};

export interface StatCardProps {
  data: StatCardData;
  className?: string;
}

export function StatCard({ data, className }: StatCardProps) {
  const Icon = ICON_MAP[data.iconType] || IconHome;

  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-[12px] border border-white bg-white/80 backdrop-blur-md p-4.5 transition-colors select-none shadow-[0_1px_3px_1px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      {/* Top Header: Icon and Label */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-green-50 text-[#15803D] shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]">
          <Icon size={20} stroke={1.5} className="text-inherit" />
        </div>
        <span className="text-xs font-normal tracking-tight text-[#0A0A0A]/70">
          {data.title}
        </span>
      </div>

      {/* Bottom Content: Geist Mono Numeric Value and Change Badge */}
      <div className="mt-4 flex items-baseline justify-between gap-2">
        <span className="text-2xl lg:text-3xl font-mono font-normal tracking-tighter text-[#0A0A0A]">
          {data.value}
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-[8px] px-2 py-0.5 font-mono text-xs font-normal select-none border shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]",
            data.isPositive
              ? "bg-[#DCFCE7] text-[#15803D] border-green-200"
              : "bg-black/5 text-[#0A0A0A]/70 border-black/10"
          )}
        >
          {data.change}
          {data.isPositive ? (
            <IconTrendingUp size={14} stroke={1.5} />
          ) : (
            <IconTrendingDown size={14} stroke={1.5} />
          )}
        </span>
      </div>
    </div>
  );
}

export default StatCard;
