import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-md border border-input bg-white/70 px-3 py-2 text-base text-ink shadow-none transition-colors file:border-0 file:bg-transparent file:text-sm placeholder:text-ink-soft/60 focus-visible:border-olive-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-500/30 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive md:text-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
