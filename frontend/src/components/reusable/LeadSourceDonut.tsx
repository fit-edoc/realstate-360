import * as React from "react";
import { cn } from "@/lib/utils";
import { DonutSourceData } from "@/types/dashboard";

export interface LeadSourceDonutProps {
  title?: string;
  data: {
    sources: DonutSourceData[];
  };
  className?: string;
}

export function LeadSourceDonut({
  title = "Deals by Lead Source",
  data,
  className,
}: LeadSourceDonutProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>

      <div className="relative mt-4 flex flex-1 items-center justify-center min-h-[260px]">
        {/* Responsive Donut SVG Illustration */}
        <svg
          viewBox="0 0 380 240"
          className="h-full w-full max-w-[420px] overflow-visible"
        >
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="4"
              markerHeight="4"
              orient="auto-start-reverse"
            >
              <path d="M 0 2 L 6 5 L 0 8 z" fill="#6b7280" />
            </marker>
          </defs>

          {/* Central Donut Slices */}
          {/* Outer radius 75, inner 42, center at (190, 115) */}
          <g transform="translate(190, 115)">
            {/* Top-Right slice: Inbound Call */}
            <path
              d="M 0,-70 A 70,70 0 0,1 68,16 L 38,9 A 39,39 0 0,0 0,-39 Z"
              fill="#f6eed3"
              className="transition-all hover:opacity-90"
            />
            {/* Bottom-Right slice: Reference */}
            <path
              d="M 68,16 A 70,70 0 0,1 -20,67 L -11,37 A 39,39 0 0,0 38,9 Z"
              fill="#be9927"
              className="transition-all hover:opacity-90"
            />
            {/* Bottom-Left slice: Facebook */}
            <path
              d="M -20,67 A 70,70 0 0,1 -68,16 L -38,9 A 39,39 0 0,0 -11,37 Z"
              fill="#dfc674"
              className="transition-all hover:opacity-90"
            />
            {/* Top-Left slice: Website */}
            <path
              d="M -68,16 A 70,70 0 0,1 0,-70 L 0,-39 A 39,39 0 0,0 -38,9 Z"
              fill="#ecdda9"
              className="transition-all hover:opacity-90"
            />
          </g>

          {/* Curved Callout Arrows & Labels */}
          {/* Top Left: Website */}
          <path
            d="M 100,85 Q 120,65 145,75"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1.2"
            markerEnd="url(#arrow)"
          />
          <text x="80" y="85" textAnchor="end" className="fill-gray-700 text-[10px] font-medium">
            Website
          </text>
          <text x="80" y="98" textAnchor="end" className="fill-gray-500 text-[9px]">
            10 (24.83%)
          </text>

          {/* Top Right: Inbound Call */}
          <path
            d="M 275,85 Q 260,65 235,75"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1.2"
            markerEnd="url(#arrow)"
          />
          <text x="285" y="85" textAnchor="start" className="fill-gray-700 text-[10px] font-medium">
            Inbound Call
          </text>
          <text x="285" y="98" textAnchor="start" className="fill-gray-500 text-[9px]">
            9 (37.87%)
          </text>

          {/* Bottom Left: Facebook */}
          <path
            d="M 100,165 Q 115,185 140,175"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1.2"
            markerEnd="url(#arrow)"
          />
          <text x="80" y="165" textAnchor="end" className="fill-gray-700 text-[10px] font-medium">
            Facebook
          </text>
          <text x="80" y="178" textAnchor="end" className="fill-gray-500 text-[9px]">
            1 (6.78%)
          </text>

          {/* Bottom Right: Reference */}
          <path
            d="M 275,165 Q 260,185 235,175"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1.2"
            markerEnd="url(#arrow)"
          />
          <text x="285" y="165" textAnchor="start" className="fill-gray-700 text-[10px] font-medium">
            Reference
          </text>
          <text x="285" y="178" textAnchor="start" className="fill-gray-500 text-[9px]">
            1 (30.6%)
          </text>
        </svg>
      </div>
    </div>
  );
}

export default LeadSourceDonut;
