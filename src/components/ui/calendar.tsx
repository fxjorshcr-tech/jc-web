"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, type DayPickerProps } from "react-day-picker";
import { cn } from "@/lib/utils";

export type CalendarProps = DayPickerProps;

/** react-day-picker v9 styled with the brand palette (no default stylesheet). */
function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      weekStartsOn={1}
      className={cn("select-none p-1 font-sans text-ink", className)}
      classNames={{
        root: "relative",
        months: "relative flex flex-col gap-6 sm:flex-row",
        month: "flex flex-col gap-3",
        month_caption: "flex h-9 items-center justify-center px-9",
        caption_label: "font-serif text-base font-medium tracking-tight text-ink",
        nav: "absolute inset-x-0 top-0 flex h-9 items-center justify-between",
        button_previous:
          "inline-flex size-9 items-center justify-center rounded-md text-ink-soft transition-colors hover:bg-olive-50 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-500/30 disabled:pointer-events-none disabled:opacity-30",
        button_next:
          "inline-flex size-9 items-center justify-center rounded-md text-ink-soft transition-colors hover:bg-olive-50 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-500/30 disabled:pointer-events-none disabled:opacity-30",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "w-10 pb-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-soft/80",
        week: "mt-1 flex w-full",
        day: "relative size-10 p-0 text-center text-sm",
        day_button:
          "inline-flex size-10 items-center justify-center rounded-full font-medium tabular-nums transition-colors hover:bg-olive-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-500/40 aria-selected:hover:bg-olive-700",
        selected: "[&:not(.is-range-middle)>button]:bg-olive-700 [&:not(.is-range-middle)>button]:text-white [&:not(.is-range-middle)>button]:shadow-sm",
        today: "[&>button]:font-bold [&>button]:text-olive-800 [&>button:not(:hover)]:ring-1 [&>button]:ring-inset [&>button]:ring-olive-400",
        outside: "text-ink-soft/40 aria-selected:text-ink-soft/40",
        disabled: "text-ink-soft/30 [&>button]:cursor-not-allowed [&>button]:hover:bg-transparent",
        hidden: "invisible",
        range_start: "rounded-l-full bg-olive-100 [&>button]:bg-olive-700 [&>button]:text-white",
        range_end: "rounded-r-full bg-olive-100 [&>button]:bg-olive-700 [&>button]:text-white",
        range_middle: "is-range-middle bg-olive-100 [&>button]:rounded-none [&>button]:bg-transparent [&>button]:text-olive-900! [&>button]:hover:bg-olive-200",
        chevron: "size-4",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className: c }) =>
          orientation === "left" ? <ChevronLeft className={cn("size-4", c)} /> : <ChevronRight className={cn("size-4", c)} />,
      }}
      {...props}
    />
  );
}

export { Calendar };
