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
    <div className={cn("flex flex-col gap-5", className)}>
      {/* Top Card: Deals by Sales People */}
      <div className="flex flex-col rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <h3 className="text-base font-semibold text-gray-900">{salesPeople.title}</h3>

        <div className="mt-4 flex flex-col">
          <div className="flex">
            {/* Y Axis Label */}
            <div className="flex w-6 items-center justify-center text-[10px] text-gray-400">
              <span className="rotate-[-90deg] origin-center font-medium text-gray-500 whitespace-nowrap">
                Deal Owner
              </span>
            </div>

            {/* Horizontal Stacked Bars */}
            <div className="flex flex-1 flex-col gap-3 py-2 pl-2 border-l border-gray-200">
              {salesPeople.records.map((rec, idx) => (
                <div key={idx} className="flex h-5 w-full items-center overflow-hidden rounded-md bg-gray-50">
                  <div
                    style={{ width: `${(rec.angelPlaza / 20) * 100}%` }}
                    className="h-full bg-[#be9927] transition-all"
                    title={`Angel Plaza: ${rec.angelPlaza}`}
                  />
                  <div
                    style={{ width: `${(rec.angelGarden / 20) * 100}%` }}
                    className="h-full bg-[#ecdda9] transition-all"
                    title={`Angel Garden: ${rec.angelGarden}`}
                  />
                  <div
                    style={{ width: `${(rec.none / 20) * 100}%` }}
                    className="h-full bg-[#f6eed3] transition-all"
                    title={`None: ${rec.none}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* X Axis Ticks & Label */}
          <div className="ml-8 mt-1 border-t border-gray-200 pt-1">
            <div className="flex justify-between text-[9px] text-gray-400">
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
            <div className="mt-1 text-center text-[10px] text-gray-500">Record Count</div>
          </div>

          {/* Legend */}
          <div className="mt-3 flex items-center justify-center gap-4 text-xs">
            {salesPeople.legends.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Card: Total Deals Closed Progress */}
      <div className="flex flex-col justify-between rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <h3 className="text-base font-semibold text-gray-900">{dealsClosed.title}</h3>

        {/* Custom Progress Pill */}
        <div className="mt-4 flex h-7 w-full overflow-hidden rounded-md bg-gray-100 p-0.5">
          <div
            style={{ width: `${closedPercent}%` }}
            className="flex items-center justify-end rounded-sm bg-gradient-to-r from-[#be9927] to-[#dfc674] px-2 shadow-xs transition-all"
          />
        </div>

        {/* Counts & Indicators */}
        <div className="mt-3 flex items-center justify-between text-xs font-semibold">
          <div className="flex items-baseline gap-1 text-gray-900">
            <span className="text-lg font-bold">{dealsClosed.closedCount}</span>
            <span className="text-gray-500 font-normal">Closed Deals</span>
          </div>
          <div className="flex items-baseline gap-1 text-gray-900">
            <span className="text-lg font-bold">{dealsClosed.progressCount}</span>
            <span className="text-gray-500 font-normal">On Progress</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesAndDealsGroup;
