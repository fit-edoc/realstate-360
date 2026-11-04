import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative inline-flex shrink-0 overflow-hidden rounded-full border border-white bg-white/70 select-none",
  {
    variants: {
      size: {
        sm: "h-7 w-7 text-[10px]",
        md: "h-8.5 w-8.5 text-xs",
        lg: "h-10 w-10 text-sm",
        xl: "h-12 w-12 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
}

function Avatar({
  className,
  size,
  src,
  alt = "User avatar",
  fallback = "U",
  ...props
}: AvatarProps) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className={cn(avatarVariants({ size }), className)} {...props}>
      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          className="aspect-square h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-normal text-[#0A0A0A]/70 bg-green-50">
          {fallback}
        </div>
      )}
    </div>
  );
}

export { Avatar, avatarVariants };
