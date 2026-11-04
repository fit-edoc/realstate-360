import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full text-xs font-normal transition-colors file:border-0 file:bg-transparent file:text-xs file:font-normal placeholder:text-[#0A0A0A]/40 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "h-8.5 rounded-[8px] border border-white/80 bg-white/70 px-3 py-1 text-[#0A0A0A] focus-visible:border-[#16A34A] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-[#16A34A]/30",
        search:
          "h-8.5 rounded-[8px] border border-white/80 bg-white/60 pr-8 pl-3 text-[#0A0A0A] placeholder:text-[#0A0A0A]/40 focus-visible:bg-white focus-visible:border-[#16A34A] focus-visible:ring-1 focus-visible:ring-[#16A34A]/30",
        pill:
          "h-8 rounded-[8px] border border-white/80 bg-white/60 text-[#0A0A0A] placeholder:text-[#0A0A0A]/40 hover:bg-white/80 focus-visible:bg-white focus-visible:border-[#16A34A] focus-visible:ring-1 focus-visible:ring-[#16A34A]/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
