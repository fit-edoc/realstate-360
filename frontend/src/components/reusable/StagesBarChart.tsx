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
        "flex flex-col rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>

      {/* Responsive Bar Chart View */}
      <div className="relative mt-4 flex flex-1 flex-col">
        <div className="flex h-[210px] w-full">
          {/* Y Axis Label & Ticks */}
          <div className="flex flex-col items-center justify-between pr-2 text-[10px] text-gray-400">
            <span className="rotate-[-90deg] translate-y-8 origin-center font-medium text-gray-500 whitespace-nowrap">
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
              <div className="border-b border-gray-100" />
              <div className="border-b border-gray-100" />
              <div className="border-b border-gray-100" />
              <div className="border-b border-gray-100" />
              <div className="border-b border-gray-300" />
            </div>

            {/* Bars Container */}
            <div className="relative z-10 flex h-full items-end justify-around px-2">
              {data.stages.map((item, idx) => {
                // Total height normalized to max 10
                const plazaHeight = (item.angelPlaza / 10) * 100;
                const gardenHeight = (item.angelGarden / 10) * 100;
                const noneHeight = (item.none / 10) * 100;

                return (
                  <div
                    key={idx}
                    className="group relative flex w-6 sm:w-8 flex-col-reverse items-center justify-start overflow-hidden rounded-t-sm transition-transform hover:scale-105"
                  >
                    {/* Bottom segment: Angel Plaza */}
                    <div
                      style={{ height: `${plazaHeight}%` }}
                      className="w-full bg-[#be9927] transition-all"
                      title={`Angel Plaza: ${item.angelPlaza}`}
                    />
                    {/* Middle segment: Angel Garden */}
                    <div
                      style={{ height: `${gardenHeight}%` }}
                      className="w-full bg-[#ecdda9] transition-all"
                      title={`Angel Garden: ${item.angelGarden}`}
                    />
                    {/* Top segment: None */}
                    <div
                      style={{ height: `${noneHeight}%` }}
                      className="w-full bg-[#f6eed3] transition-all"
                      title={`None: ${item.none}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* X Axis Labels */}
        <div className="ml-10 mt-2 flex justify-around border-t border-gray-100 pt-1 text-[9px] text-gray-500">
          {data.stages.map((item, idx) => (
            <span
              key={idx}
              className="w-12 text-center truncate rotate-[-25deg] sm:rotate-0 origin-top-left sm:origin-center"
              title={item.stage}
            >
              {item.stage}
            </span>
          ))}
        </div>
        <div className="mt-2 text-center text-[10px] font-medium text-gray-500">Stage</div>

        {/* Legend */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs">
          {data.legends.map((legend, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: legend.color }}
              />
              <span className="text-gray-600">{legend.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StagesBarChart;
