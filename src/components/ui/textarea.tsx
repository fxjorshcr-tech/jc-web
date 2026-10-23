import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-[7rem] w-full rounded-md border border-input bg-white/70 px-3 py-2 text-base text-ink transition-colors placeholder:text-ink-soft/60 focus-visible:border-olive-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-500/30 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive md:text-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export { Textarea };
