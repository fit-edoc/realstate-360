import * as React from "react";
import { ArrowUpRight, Phone } from "lucide-react";
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
        "flex flex-col justify-between rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <div>
        {/* Header with Title and Diagonal Arrow */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          <button
            aria-label="View all leads"
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* Contacts List */}
        <div className="mt-3 flex flex-col divide-y divide-gray-50">
          {data.contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center justify-between py-2.5 transition-colors hover:bg-gray-50/60 px-1 rounded-lg"
            >
              {/* Avatar + Info */}
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200 border border-gray-200/80 shrink-0">
                  <img
                    src={contact.avatar || "/avatars/lead-1.jpg"}
                    alt={contact.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-900">{contact.name}</h4>
                  <p className="text-[10px] text-gray-400 font-normal">{contact.location}</p>
                </div>
              </div>

              {/* Action Phone Icon */}
              <button
                aria-label={`Call ${contact.name}`}
                className="flex h-7 w-7 items-center justify-center rounded-full text-black hover:text-gray-900 bg-gray-100 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeadsContactsList;
