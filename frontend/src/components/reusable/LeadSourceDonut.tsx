"use client";

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
        "flex flex-col justify-between rounded-3xl border border-white bg-white/80 backdrop-blur-md p-5 select-none shadow-[0_1px_3px_1px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-normal tracking-tight text-[#0A0A0A]">{title}</h3>
        <span className="text-[11px] font-normal text-[#0A0A0A]/50">Sources Breakdown</span>
      </div>

      <div className="relative mt-2 flex flex-1 items-center justify-center min-h-[220px]">
        {/* Responsive Donut SVG Illustration */}
        <svg role="img" aria-label="Donut Chart"
          viewBox="0 0 380 230"
          className="h-full w-full max-w-[400px] overflow-visible"
        >
          <defs>
            <marker
              id="donut-arrow"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="4"
              markerHeight="4"
              orient="auto-start-reverse"
            >
              <path d="M 0 2 L 6 5 L 0 8 z" fill="#15803D" />
            </marker>
          </defs>

          {/* Central Donut Slices */}
          {/* Outer radius 70, inner 39, center at (190, 115) */}
          <g transform="translate(190, 115)">
            {/* Top-Right slice: Inbound Call (37.87%) */}
            <path
              d="M 0,-70 A 70,70 0 0,1 68,16 L 38,9 A 39,39 0 0,0 0,-39 Z"
              fill="#16A34A"
              className="transition-opacity hover:opacity-90 cursor-pointer"
            />
            {/* Bottom-Right slice: Reference (30.6%) */}
            <path
              d="M 68,16 A 70,70 0 0,1 -20,67 L -11,37 A 39,39 0 0,0 38,9 Z"
              fill="#15803D"
              className="transition-opacity hover:opacity-90 cursor-pointer"
            />
            {/* Bottom-Left slice: Facebook (6.78%) */}
            <path
              d="M -20,67 A 70,70 0 0,1 -68,16 L -38,9 A 39,39 0 0,0 -11,37 Z"
              fill="#86EFAC"
              className="transition-opacity hover:opacity-90 cursor-pointer"
            />
            {/* Top-Left slice: Website (24.83%) */}
            <path
              d="M -68,16 A 70,70 0 0,1 0,-70 L 0,-39 A 39,39 0 0,0 -38,9 Z"
              fill="#22C55E"
              className="transition-opacity hover:opacity-90 cursor-pointer"
            />
          </g>

          {/* Curved Callout Arrows & Labels */}
          {/* Top Left: Website */}
          <path
            d="M 100,80 Q 125,60 145,72"
            fill="none"
            stroke="#15803D"
            strokeWidth="1"
            strokeDasharray="2,2"
            markerEnd="url(#donut-arrow)"
          />
          <text x="85" y="80" textAnchor="end" className="fill-[#0A0A0A] text-[10px] font-normal font-sans">
            Website
          </text>
          <text x="85" y="94" textAnchor="end" className="fill-[#0A0A0A]/60 text-[9px] font-normal font-mono">
            10 (24.83%)
          </text>

          {/* Top Right: Inbound Call */}
          <path
            d="M 280,80 Q 255,60 235,72"
            fill="none"
            stroke="#15803D"
            strokeWidth="1"
            strokeDasharray="2,2"
            markerEnd="url(#donut-arrow)"
          />
          <text x="295" y="80" textAnchor="start" className="fill-[#0A0A0A] text-[10px] font-normal font-sans">
            Inbound Call
          </text>
          <text x="295" y="94" textAnchor="start" className="fill-[#0A0A0A]/60 text-[9px] font-normal font-mono">
            9 (37.87%)
          </text>

          {/* Bottom Left: Facebook */}
          <path
            d="M 100,160 Q 120,180 140,172"
            fill="none"
            stroke="#15803D"
            strokeWidth="1"
            strokeDasharray="2,2"
            markerEnd="url(#donut-arrow)"
          />
          <text x="85" y="160" textAnchor="end" className="fill-[#0A0A0A] text-[10px] font-normal font-sans">
            Facebook
          </text>
          <text x="85" y="174" textAnchor="end" className="fill-[#0A0A0A]/60 text-[9px] font-normal font-mono">
            1 (6.78%)
          </text>

          {/* Bottom Right: Reference */}
          <path
            d="M 280,160 Q 255,180 235,172"
            fill="none"
            stroke="#15803D"
            strokeWidth="1"
            strokeDasharray="2,2"
            markerEnd="url(#donut-arrow)"
          />
          <text x="295" y="160" textAnchor="start" className="fill-[#0A0A0A] text-[10px] font-normal font-sans">
            Reference
          </text>
          <text x="295" y="174" textAnchor="start" className="fill-[#0A0A0A]/60 text-[9px] font-normal font-mono">
            1 (30.6%)
          </text>
        </svg>
      </div>

      {/* Footer Legend */}
      <div className="mt-2 pt-2 border-t border-white/60 flex flex-wrap items-center justify-center gap-3 text-[10px]">
        {data.sources.map((item, idx) => (
          <div key={idx} className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-[#0A0A0A]/70 font-normal">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeadSourceDonut;
