import * as React from "react";
import { Home, User, Handshake, Coins, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { StatCardData } from "@/types/dashboard";

const ICON_MAP = {
  listing: Home,
  leads: User,
  closed: Handshake,
  revenue: Coins,
};

export interface StatCardProps {
  data: StatCardData;
  className?: string;
}

export function StatCard({ data, className }: StatCardProps) {
  const Icon = ICON_MAP[data.iconType] || Home;

  return (
    <div
      className={cn(
        "flex flex-col  justify-between rounded-3xl border border-gray-200/80 bg-white p-5 shadow-cards transition-all hover:border-[#D4AF37]/50 hover:shadow-md",
        className
      )}
    >
      {/* Top Header: Icon and Label */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50 text-[#D4AF37]">
          <Icon className="h-5 w-5 fill-[#D4AF37]" />
        </div>
        <span className="text-sm font-semibold tracking-tight text-gray-700">
          {data.title}
        </span>
      </div>

      {/* Bottom Content: Numeric Value and Change Badge */}
      <div className="mt-4 flex items-baseline gap-3">
        <span className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          {data.value}
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold select-none",
            data.isPositive
              ? "bg-[#DAFFF7] text-[#48B998]"
              : "bg-[#FEF0F2] text-[#C02547]"
          )}
        >
          {data.change}
          {data.isPositive ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
        </span>
      </div>
    </div>
  );
}

export default StatCard;
