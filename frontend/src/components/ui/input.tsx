import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "h-9 rounded-md border border-gray-200 bg-white px-3 py-1 shadow-2xs focus-visible:ring-2 focus-visible:ring-gray-400",
        search:
          "h-9 rounded-md border border-gray-100 bg-gray-50/90 text-gray-800 placeholder:text-gray-400 focus-visible:bg-white focus-visible:border-gray-300 focus-visible:ring-2 focus-visible:ring-gray-200",
        pill:
          "h-8 rounded-full border border-gray-200/80 bg-gray-100/70 text-gray-800 placeholder:text-gray-400 hover:bg-gray-100 focus-visible:bg-white focus-visible:border-[#D4AF37] focus-visible:ring-2 focus-visible:ring-[#D4AF37]/20",
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
