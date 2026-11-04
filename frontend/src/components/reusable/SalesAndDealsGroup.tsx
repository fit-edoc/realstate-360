"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SalesAndDealsGroupProps {
  data: {
    salesPeople: {
      title: string;
      records: { owner: string; angelPlaza: number; angelGarden: number; none: number }[];
      legends: { label: string; color: string }[];
    };
    dealsClosed: {
      title: string;
      closedCount: number;
      progressCount: number;
    };
  };
  className?: string;
}

export function SalesAndDealsGroup({ data, className }: SalesAndDealsGroupProps) {
  const { salesPeople, dealsClosed } = data;
  const totalDeals = dealsClosed.closedCount + dealsClosed.progressCount;
  const closedPercent = Math.round((dealsClosed.closedCount / totalDeals) * 100);

  return (
    <div className={cn("flex flex-col justify-between gap-4 h-full", className)}>
      {/* Top Section: Deals by Sales People */}
      <div className="flex flex-col justify-between flex-1 rounded-[12px] border border-white bg-white/80 backdrop-blur-md p-5 select-none shadow-[0_1px_3px_1px_rgba(0,0,0,0.03)]">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-normal tracking-tight text-[#0A0A0A]">{salesPeople.title}</h3>
          <span className="text-[11px] font-normal text-[#0A0A0A]/50">Reps Performance</span>
        </div>

        <div className="mt-3 flex flex-col">
          <div className="flex">
            {/* Y Axis Label */}
            <div className="flex w-6 items-center justify-center text-[9px] text-[#0A0A0A]/40 font-sans">
              <span className="rotate-[-90deg] origin-center font-normal text-[#0A0A0A]/60 whitespace-nowrap">
                Deal Owner
              </span>
            </div>

            {/* Horizontal Stacked Bars */}
            <div className="flex flex-1 flex-col gap-2.5 py-1 pl-2 border-l border-[#0A0A0A]/10">
              {salesPeople.records.map((rec, idx) => (
                <div key={idx} className="flex h-4.5 w-full items-center overflow-hidden rounded-[4px] bg-[#0A0A0A]/5">
                  <div
                    style={{ width: `${(rec.angelPlaza / 20) * 100}%` }}
                    className="h-full bg-[#16A34A] transition-all cursor-pointer"
                    title={`Angel Plaza: ${rec.angelPlaza}`}
                  />
                  <div
                    style={{ width: `${(rec.angelGarden / 20) * 100}%` }}
                    className="h-full bg-[#4ADE80] transition-all cursor-pointer"
                    title={`Angel Garden: ${rec.angelGarden}`}
                  />
                  <div
                    style={{ width: `${(rec.none / 20) * 100}%` }}
                    className="h-full bg-[#BBF7D0] transition-all cursor-pointer"
                    title={`None: ${rec.none}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* X Axis Ticks & Label */}
          <div className="ml-8 mt-1 border-t border-[#0A0A0A]/10 pt-1">
            <div className="flex justify-between text-[9px] text-[#0A0A0A]/40 font-mono">
              <span>0</span>
              <span>2.5</span>
              <span>5</span>
              <span>7.5</span>
              <span>10</span>
              <span>12.5</span>
              <span>15</span>
              <span>17.5</span>
              <span>20</span>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-2.5 pt-2 border-t border-white/60 flex items-center justify-center gap-4 text-[10px]">
            {salesPeople.legends.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-[#0A0A0A]/70 font-normal">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Total Deals Closed Progress */}
      <div className="flex flex-col justify-between rounded-[12px] border border-white bg-white/80 backdrop-blur-md p-4 select-none shadow-[0_1px_3px_1px_rgba(0,0,0,0.03)]">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-normal tracking-tight text-[#0A0A0A]">{dealsClosed.title}</h3>
          <span className="font-mono text-xs font-normal text-[#15803D]">
            {closedPercent}% Target
          </span>
        </div>

        {/* Progress Pill Bar */}
        <div className="mt-3 flex h-3 w-full overflow-hidden rounded-[8px] bg-black/5 p-0.5">
          <div
            style={{ width: `${closedPercent}%` }}
            className="flex items-center justify-end rounded-[6px] bg-gradient-to-r from-[#16A34A] to-[#4ADE80] transition-all duration-300"
          />
        </div>

        {/* Counts & Indicators */}
        <div className="mt-2.5 flex items-center justify-between text-xs font-normal">
          <div className="flex items-baseline gap-1.5 text-[#0A0A0A]">
            <span className="text-base font-mono font-normal tracking-tight">{dealsClosed.closedCount}</span>
            <span className="text-[11px] text-[#0A0A0A]/60">Closed</span>
          </div>
          <div className="flex items-baseline gap-1.5 text-[#0A0A0A]">
            <span className="text-base font-mono font-normal tracking-tight">{dealsClosed.progressCount}</span>
            <span className="text-[11px] text-[#0A0A0A]/60">In Progress</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesAndDealsGroup;
