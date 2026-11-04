"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ActiveListingItem } from "@/types/dashboard";

export interface ActiveListingTableProps {
  title?: string;
  data: {
    properties: ActiveListingItem[];
  };
  className?: string;
}

export function ActiveListingTable({
  title = "Active Listing",
  data,
  className,
}: ActiveListingTableProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-[12px] border border-white bg-white/80 backdrop-blur-md p-5 select-none",
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-normal tracking-tight text-[#0A0A0A]">{title}</h3>
        <span className="font-mono text-[11px] font-normal text-[#0A0A0A]/50">
          {data.properties.length} Properties
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[580px] text-left text-xs">
          <thead>
            <tr className="border-b border-black/5 text-[11px] text-[#0A0A0A]/50 font-normal">
              <th className="pb-2.5 pl-1 font-normal">Property</th>
              <th className="pb-2.5 font-normal">Type</th>
              <th className="pb-2.5 font-normal">Units</th>
              <th className="pb-2.5 font-normal">Price</th>
              <th className="pb-2.5 font-normal">Active Leads</th>
              <th className="pb-2.5 font-normal">Views</th>
              <th className="pb-2.5 text-center font-normal">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            {data.properties.map((prop) => {
              const isOccupied = prop.status === "Occupied";
              const isAvailable = prop.status === "Available";
              const isSoldOut = prop.status === "Sold Out";

              return (
                <tr key={prop.id} className="transition-colors hover:bg-white/60">
                  {/* Property Image + Title */}
                  <td className="py-3 pl-1">
                    <div className="flex items-center gap-2.5">
                      <div className="relative h-8 w-8 overflow-hidden rounded-[6px] bg-green-50 shrink-0 border border-white">
                        <img
                          src={prop.image || "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=100&q=80"}
                          alt={prop.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="font-normal text-[#0A0A0A] whitespace-nowrap text-xs">
                        {prop.name}
                      </span>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="py-3 text-[#0A0A0A]/70 font-normal">{prop.type}</td>

                  {/* Units */}
                  <td className="py-3 font-mono text-[#0A0A0A]/80 font-normal">{prop.units}</td>

                  {/* Price */}
                  <td className="py-3 font-mono font-normal text-[#0A0A0A]">{prop.price}</td>

                  {/* Active Leads (Avatar Stack) */}
                  <td className="py-3">
                    <div className="flex items-center -space-x-1.5">
                      {(prop.leadAvatars || ["/avatars/lead-1.jpg", "/avatars/lead-2.jpg"]).map((avatarSrc, i) => (
                        <div
                          key={i}
                          className="h-5 w-5 rounded-full border border-white bg-green-50 overflow-hidden"
                        >
                          <img
                            src={avatarSrc}
                            alt="lead avatar"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DCFCE7] text-[9px] font-mono font-normal text-[#15803D] border border-white">
                        +{prop.activeLeadsCount}
                      </div>
                    </div>
                  </td>

                  {/* Views */}
                  <td className="py-3 font-mono text-[#0A0A0A]/70 font-normal">{prop.views}</td>

                  {/* Status Pill */}
                  <td className="py-3 text-center">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-[8px] px-2 py-0.5 text-[10px] font-normal whitespace-nowrap border",
                        isAvailable && "bg-[#DCFCE7] text-[#15803D] border-green-200",
                        isOccupied && "bg-green-50 text-[#14532D] border-green-100",
                        isSoldOut && "bg-black/5 text-[#0A0A0A]/60 border-black/10"
                      )}
                    >
                      {prop.statusText || prop.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActiveListingTable;
