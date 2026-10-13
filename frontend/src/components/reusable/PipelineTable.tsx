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
  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <div>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>

        <div className="mt-5 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-semibold text-gray-500">
                <th className="pb-3 font-medium">Development Name</th>
                <th className="pb-3 text-right font-medium">Record Count</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data.rows.map((row, idx) => (
                <tr key={idx} className="transition-colors hover:bg-gray-50/60">
                  <td className="py-3.5 font-medium text-gray-800">{row.name}</td>
                  <td className="py-3.5 text-right font-semibold text-gray-900">
                    {row.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PipelineTable;
