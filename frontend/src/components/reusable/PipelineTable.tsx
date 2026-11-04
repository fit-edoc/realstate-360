"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { PipelineItem } from "@/types/dashboard";

export interface PipelineTableProps {
  title?: string;
  data: {
    rows: PipelineItem[];
  };
  className?: string;
}

export function PipelineTable({
  title = "Deals in Pipeline by Development",
  data,
  className,
}: PipelineTableProps) {
  const totalCount = data.rows.reduce((sum, r) => sum + r.count, 0);

  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-[12px] border border-white bg-white/80 backdrop-blur-md p-5 select-none h-full shadow-[0_1px_3px_1px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-normal tracking-tight text-[#0A0A0A]">{title}</h3>
          <span className="font-mono text-[11px] font-normal text-[#0A0A0A]/50">
            {data.rows.length} Developments
          </span>
        </div>

        <div className="mt-3 flex-1 overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-black/5 text-[11px] font-normal text-[#0A0A0A]/50">
                <th className="pb-2.5 font-normal">Development Name</th>
                <th className="pb-2.5 text-right font-normal">Record Count</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {data.rows.map((row, idx) => (
                <tr key={idx} className="transition-colors hover:bg-white/60">
                  <td className="py-2.5 font-normal text-[#0A0A0A]">{row.name}</td>
                  <td className="py-2.5 text-right font-mono font-normal text-[#0A0A0A]">
                    {row.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Clean Footer Total */}
      <div className="mt-3 pt-3 border-t border-black/5 flex items-center justify-between text-xs">
        <span className="font-normal text-[#0A0A0A]/60">Total Pipeline Deals</span>
        <span className="font-mono font-normal text-[#15803D] bg-[#DCFCE7] px-2.5 py-0.5 rounded-[8px] border border-green-200 shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]">
          {totalCount} Deals
        </span>
      </div>
    </div>
  );
}

export default PipelineTable;
