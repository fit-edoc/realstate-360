import * as React from "react";
import Image from "next/image";
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
        "flex flex-col rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <h3 className="text-base font-semibold text-gray-900 mb-4">{title}</h3>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] text-left text-xs">
          <thead>
            <tr className="border-b border-gray-100 text-gray-400 font-medium">
              <th className="pb-3 pl-1">Property</th>
              <th className="pb-3">Type</th>
              <th className="pb-3">Units</th>
              <th className="pb-3">Price</th>
              <th className="pb-3">Active Leads</th>
              <th className="pb-3">Views</th>
              <th className="pb-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50/80">
            {data.properties.map((prop) => {
              // Status Pill styling
              const isOccupied = prop.status === "Occupied";
              const isAvailable = prop.status === "Available";
              const isSoldOut = prop.status === "Sold Out";

              return (
                <tr key={prop.id} className="transition-colors hover:bg-gray-50/70">
                  {/* Property Image + Title */}
                  <td className="py-3.5 pl-1">
                    <div className="flex items-center gap-2.5">
                      <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-gray-100 shrink-0 border border-gray-200/70">
                        <img
                          src={prop.image || "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=100&q=80"}
                          alt={prop.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="font-semibold text-gray-900 whitespace-nowrap">
                        {prop.name}
                      </span>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="py-3.5 text-gray-600 font-medium">{prop.type}</td>

                  {/* Units */}
                  <td className="py-3.5 text-gray-700 font-medium">{prop.units}</td>

                  {/* Price */}
                  <td className="py-3.5 text-gray-900 font-semibold">{prop.price}</td>

                  {/* Active Leads (Avatar Stack) */}
                  <td className="py-3.5">
                    <div className="flex items-center -space-x-1.5">
                      {(prop.leadAvatars || ["/avatars/lead-1.jpg", "/avatars/lead-2.jpg"]).map((avatarSrc, i) => (
                        <div
                          key={i}
                          className="h-5 w-5 rounded-full ring-1.5 ring-white bg-slate-200 overflow-hidden"
                        >
                          <img
                            src={avatarSrc}
                            alt="lead avatar"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-[9px] font-bold text-gray-600 ring-1.5 ring-white">
                        +{prop.activeLeadsCount}
                      </div>
                    </div>
                  </td>

                  {/* Views */}
                  <td className="py-3.5 text-gray-600 font-medium">{prop.views}</td>

                  {/* Status Pill */}
                  <td className="py-3.5 text-center">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium whitespace-nowrap",
                        isOccupied && "bg-cyan-50/90 text-cyan-600",
                        isAvailable && "bg-emerald-50 text-emerald-600",
                        isSoldOut && "bg-rose-50 text-rose-500"
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
