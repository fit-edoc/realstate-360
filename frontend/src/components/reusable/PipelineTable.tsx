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
        "flex flex-col justify-between rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] h-full",
        className
      )}
    >
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          <span className="text-xs font-medium text-gray-400">
            {data.rows.length} Developments
          </span>
        </div>

        <div className="mt-4 flex-1 overflow-x-auto">
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
                  <td className="py-3 font-medium text-gray-800">{row.name}</td>
                  <td className="py-3 text-right font-semibold text-gray-900">
                    {row.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Clean Footer Total to cover bottom space */}
      <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs">
        <span className="font-medium text-gray-500">Total Pipeline Deals</span>
        <span className="font-bold text-gray-900 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-200/60">
          {totalCount} Deals
        </span>
      </div>
    </div>
  );
}

export default PipelineTable;
