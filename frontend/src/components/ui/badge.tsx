import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[8px] px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-[#0A0A0A] text-white",
        success: "bg-[#DCFCE7] text-[#15803D] border border-green-200",
        secondary: "bg-[#F0FDF4] text-[#14532D] border border-green-100",
        outline: "text-[#0A0A0A] border border-white bg-white/60",
        muted: "bg-black/5 text-[#0A0A0A]/70 border border-black/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
