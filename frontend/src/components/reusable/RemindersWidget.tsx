import * as React from "react";
import { cn } from "@/lib/utils";
import { ReminderItem } from "@/types/dashboard";

export interface RemindersWidgetProps {
  reminders: ReminderItem[];
  className?: string;
}

export function RemindersWidget({ reminders, className }: RemindersWidgetProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <h3 className="text-base font-semibold text-gray-900 mb-3">Reminder</h3>

      <div className="flex flex-col gap-3">
        {reminders.map((rem, idx) => {
          if (idx === 0) {
            // First item: highlighted soft tan/amber background with avatars
            return (
              <div
                key={rem.id}
                className="rounded-2xl bg-[#faf6ed] p-3.5 border border-[#eedfc1]/50"
              >
                <h4 className="text-xs font-semibold text-gray-900">{rem.title}</h4>
                <p className="mt-0.5 text-[11px] text-gray-500">{rem.description}</p>
                {rem.hasAvatars && (
                  <div className="mt-2.5 flex items-center -space-x-1.5">
                    {(rem.avatars || [
                      "/avatars/lead-1.jpg",
                      "/avatars/lead-2.jpg",
                      "/avatars/lead-3.jpg",
                    ]).map((avatarSrc, i) => (
                      <div
                        key={i}
                        className="h-5 w-5 rounded-full ring-1.5 ring-white bg-slate-200 overflow-hidden"
                      >
                        <img
                          src={avatarSrc}
                          alt="avatar"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-200 text-[9px] font-bold text-amber-900 ring-1.5 ring-white">
                      +11
                    </div>
                  </div>
                )}
              </div>
            );
          }

          return (
            <div
              key={rem.id}
              className="py-1.5 border-b border-gray-50 last:border-none"
            >
              <h4 className="text-xs font-semibold text-gray-900">{rem.title}</h4>
              <p className="mt-0.5 text-[11px] text-gray-400 leading-relaxed">
                {rem.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RemindersWidget;
