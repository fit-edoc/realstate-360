import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] text-xs font-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#16A34A] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[#0A0A0A] text-white hover:bg-[#0A0A0A]/90 border border-[#0A0A0A]",
        primary: "bg-[#16A34A] text-white hover:bg-[#15803D] border border-[#16A34A]",
        outline: "border border-white/80 bg-white/60 text-[#0A0A0A] hover:bg-white hover:border-white",
        secondary: "bg-[#DCFCE7] text-[#15803D] hover:bg-[#BBF7D0] border border-green-200",
        ghost: "text-[#0A0A0A]/70 hover:bg-white/60 hover:text-[#0A0A0A]",
        navLink: "text-[#0A0A0A]/70 hover:text-[#0A0A0A] hover:bg-white/60 font-normal transition-colors",
        navActive: "bg-[#DCFCE7] text-[#15803D] font-normal transition-colors",
      },
      size: {
        default: "h-8.5 px-3.5 py-1.5",
        sm: "h-7.5 rounded-[8px] px-2.5 text-xs",
        lg: "h-9.5 rounded-[8px] px-5 text-sm",
        nav: "h-8 px-3 py-1.5 text-xs rounded-[8px]",
        icon: "h-8.5 w-8.5 rounded-[8px]",
        iconSm: "h-7.5 w-7.5 rounded-[8px]",
        iconRound: "h-8.5 w-8.5 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
