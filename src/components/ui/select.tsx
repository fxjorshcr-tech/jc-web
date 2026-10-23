import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/** Native select, styled to match the inputs. Keeps the booking form light and reliable on mobile. */
const Select = React.forwardRef<HTMLSelectElement, React.ComponentProps<"select">>(
  ({ className, children, ...props }, ref) => (
    <div className="relative">
      <select
        className={cn(
          "flex h-11 w-full appearance-none rounded-md border border-input bg-white/70 px-3 py-2 pr-10 text-base text-ink transition-colors focus-visible:border-olive-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-500/30 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-ink-soft" />
    </div>
  ),
);
Select.displayName = "Select";

export { Select };
