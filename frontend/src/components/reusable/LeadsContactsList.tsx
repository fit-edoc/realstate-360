"use client";

import * as React from "react";
import { IconArrowUpRight, IconPhone } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { LeadContactItem } from "@/types/dashboard";

export interface LeadsContactsListProps {
  title?: string;
  data: {
    contacts: LeadContactItem[];
  };
  className?: string;
}

export function LeadsContactsList({
  title = "Leads Contacts",
  data,
  className,
}: LeadsContactsListProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-[12px] border border-white bg-white/80 backdrop-blur-md p-5 select-none shadow-[0_1px_3px_1px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <div>
        {/* Header with Title and Tabler Arrow */}
        <div className="flex items-center justify-between pb-2.5 border-b border-black/5">
          <h3 className="text-xs font-normal tracking-tight text-[#0A0A0A]">{title}</h3>
          <button
            type="button"
            aria-label="View all leads"
            className="text-[#0A0A0A]/50 hover:text-[#15803D] transition-colors cursor-pointer"
          >
            <IconArrowUpRight size={16} stroke={1.5} />
          </button>
        </div>

        {/* Contacts List */}
        <div className="mt-2.5 flex flex-col divide-y divide-black/5">
          {data.contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center justify-between py-2 transition-colors hover:bg-white/60 px-1 rounded-[8px]"
            >
              {/* Avatar + Info */}
              <div className="flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-full overflow-hidden bg-green-50 border border-white shrink-0 shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]">
                  <img
                    src={contact.avatar || "/avatars/lead-1.jpg"}
                    alt={contact.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-normal text-[#0A0A0A]">{contact.name}</h4>
                  <p className="text-[10px] text-[#0A0A0A]/50 font-normal">{contact.location}</p>
                </div>
              </div>

              {/* Action Phone Icon */}
              <button
                type="button"
                aria-label={`Call ${contact.name}`}
                className="flex h-7 w-7 items-center justify-center rounded-[8px] text-[#15803D] bg-green-50 hover:bg-[#DCFCE7] border border-green-200 transition-colors cursor-pointer shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]"
              >
                <IconPhone size={14} stroke={1.5} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeadsContactsList;
