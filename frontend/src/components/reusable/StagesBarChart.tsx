"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { StageData } from "@/types/dashboard";

export interface StagesBarChartProps {
  title?: string;
  data: {
    stages: StageData[];
    legends: { label: string; color: string }[];
  };
  className?: string;
}

export function StagesBarChart({
  title = "Deals by Stages by Development",
  data,
  className,
}: StagesBarChartProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-3xl border border-white bg-white/80 backdrop-blur-md p-5 select-none shadow-[0_1px_3px_1px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-normal tracking-tight text-[#0A0A0A]">{title}</h3>
        <span className="text-[11px] font-normal text-[#0A0A0A]/50">Stage Analysis</span>
      </div>

      {/* Responsive Bar Chart View */}
      <div className="relative mt-3 flex flex-1 flex-col">
        <div className="flex h-[180px] w-full">
          {/* Y Axis Label & Ticks */}
          <div className="flex flex-col items-center justify-between pr-2 text-[10px] text-[#0A0A0A]/40 font-mono">
            <span className="rotate-[-90deg] translate-y-16 -translate-x-8 origin-center font-normal text-[#0A0A0A]/60 whitespace-nowrap text-[9px] font-sans">
              Record Count
            </span>
            <div className="flex h-full flex-col justify-between py-1 text-right">
              <span>10</span>
              <span>7.5</span>
              <span>5</span>
              <span>2.5</span>
              <span>0</span>
            </div>
          </div>

          {/* Chart Grid and Stacked Bars */}
          <div className="relative flex flex-1 flex-col justify-between">
            {/* Horizontal Gridlines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              <div className="border-b border-[#0A0A0A]/5" />
              <div className="border-b border-[#0A0A0A]/5" />
              <div className="border-b border-[#0A0A0A]/5" />
              <div className="border-b border-[#0A0A0A]/5" />
              <div className="border-b border-[#0A0A0A]/10" />
            </div>

            {/* Bars Container */}
            <div className="relative z-10 flex h-full items-end justify-around px-2">
              {data.stages.map((item, idx) => {
                const plazaHeight = (item.angelPlaza / 10) * 100;
                const gardenHeight = (item.angelGarden / 10) * 100;
                const noneHeight = (item.none / 10) * 100;

                return (
                  <div
                    key={idx}
                    className="group relative flex w-5 sm:w-7 flex-col-reverse items-center justify-start overflow-hidden rounded-t-[4px] transition-transform hover:scale-105 cursor-pointer"
                  >
                    {/* Bottom segment: Angel Plaza (green-600) */}
                    <div
                      style={{ height: `${plazaHeight}%` }}
                      className="w-full bg-[#16A34A] transition-all"
                      title={`Angel Plaza: ${item.angelPlaza}`}
                    />
                    {/* Middle segment: Angel Garden (green-400) */}
                    <div
                      style={{ height: `${gardenHeight}%` }}
                      className="w-full bg-[#4ADE80] transition-all"
                      title={`Angel Garden: ${item.angelGarden}`}
                    />
                    {/* Top segment: None (green-200) */}
                    <div
                      style={{ height: `${noneHeight}%` }}
                      className="w-full bg-[#BBF7D0] transition-all"
                      title={`None: ${item.none}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* X Axis Labels */}
        <div className="ml-8 mt-2 flex justify-around border-t border-[#0A0A0A]/10 pt-1 text-[9px] text-[#0A0A0A]/60">
          {data.stages.map((item, idx) => (
            <span
              key={idx}
              className="w-12 text-center truncate rotate-[-25deg] sm:rotate-0 origin-top-left sm:origin-center font-normal"
              title={item.stage}
            >
              {item.stage}
            </span>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-3 pt-2 border-t border-white/60 flex flex-wrap items-center justify-center gap-4 text-[10px]">
          {data.legends.map((legend, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: legend.color }}
              />
              <span className="text-[#0A0A0A]/70 font-normal">{legend.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StagesBarChart;
