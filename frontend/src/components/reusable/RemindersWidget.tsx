"use client";

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
        "flex flex-col rounded-3xl border border-white bg-white/80 backdrop-blur-md p-5 select-none shadow-[0_1px_3px_1px_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-normal tracking-tight text-[#0A0A0A]">Reminders</h3>
        <span className="font-mono text-[11px] font-normal text-[#0A0A0A]/50">
          {reminders.length} Active
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        {reminders.map((rem, idx) => {
          if (idx === 0) {
            // First item: highlighted soft green tint with avatars
            return (
              <div
                key={rem.id}
                className="rounded-[8px] bg-[#DCFCE7]/60 p-3 border border-green-200/80 shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]"
              >
                <h4 className="text-xs font-normal text-[#0A0A0A] tracking-tight">{rem.title}</h4>
                <p className="mt-0.5 text-[11px] text-[#0A0A0A]/60 font-normal">{rem.description}</p>
                {rem.hasAvatars && (
                  <div className="mt-2 flex items-center -space-x-1.5">
                    {(rem.avatars || [
                      "/avatars/lead-1.jpg",
                      "/avatars/lead-2.jpg",
                      "/avatars/lead-3.jpg",
                    ]).map((avatarSrc, i) => (
                      <div
                        key={i}
                        className="h-5 w-5 rounded-full border border-white bg-green-50 overflow-hidden shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]"
                      >
                        <img
                          src={avatarSrc}
                          alt="avatar"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#BBF7D0] text-[9px] font-mono font-normal text-[#14532D] border border-white shadow-[0_1px_2px_1px_rgba(0,0,0,0.02)]">
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
              className="py-1.5 border-b border-black/5 last:border-none"
            >
              <h4 className="text-xs font-normal text-[#0A0A0A] tracking-tight">{rem.title}</h4>
              <p className="mt-0.5 text-[11px] text-[#0A0A0A]/50 leading-relaxed font-normal">
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
