"use client";

import * as React from "react";
import { format, isValid, parse, startOfToday } from "date-fns";
import { CalendarDays, X } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const ISO = "yyyy-MM-dd";
const DISPLAY = "EEE, d MMM yyyy";

export function parseIsoDate(value?: string | null): Date | undefined {
  if (!value) return undefined;
  const d = parse(value, ISO, new Date());
  return isValid(d) ? d : undefined;
}

export function formatDisplayDate(value?: string | null) {
  const d = parseIsoDate(value);
  return d ? format(d, DISPLAY) : value ?? "";
}

const triggerClass =
  "flex h-11 w-full items-center gap-2.5 rounded-md border border-input bg-white/70 px-3 text-left text-base text-ink transition-colors hover:border-olive-500/60 focus-visible:border-olive-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-500/30 disabled:cursor-not-allowed disabled:opacity-50 data-[invalid=true]:border-destructive data-[state=open]:border-olive-600 data-[state=open]:ring-2 data-[state=open]:ring-olive-500/30 md:text-sm";

interface DatePickerProps {
  id?: string;
  name?: string;
  /** ISO date (yyyy-MM-dd) or empty string. */
  value: string;
  onChange: (iso: string) => void;
  onBlur?: () => void;
  min?: Date;
  invalid?: boolean;
  placeholder?: string;
  className?: string;
}

/** Single-date picker. Stores an ISO string so it drops straight into the existing zod schema. */
export function DatePicker({ id, name, value, onChange, onBlur, min, invalid, placeholder = "Pick a date", className }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const selected = parseIsoDate(value);
  const today = startOfToday();
  const earliest = min ?? today;

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) onBlur?.();
      }}
    >
      <PopoverTrigger asChild>
        <button type="button" id={id} data-invalid={invalid || undefined} aria-haspopup="dialog" className={cn(triggerClass, className)}>
          <CalendarDays className="size-4 shrink-0 text-olive-700" strokeWidth={1.75} />
          <span className={cn("flex-1 truncate", !selected && "text-ink-soft/60")}>{selected ? format(selected, DISPLAY) : placeholder}</span>
          {selected && (
            <span
              role="button"
              tabIndex={-1}
              aria-label="Clear date"
              onClick={(e) => {
                e.stopPropagation();
                onChange("");
              }}
              className="rounded-full p-0.5 text-ink-soft/60 hover:bg-olive-50 hover:text-ink"
            >
              <X className="size-3.5" />
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          selected={selected}
          defaultMonth={selected ?? earliest}
          startMonth={earliest}
          disabled={{ before: earliest }}
          onSelect={(d) => {
            onChange(d ? format(d, ISO) : "");
            if (d) setOpen(false);
          }}
          autoFocus
        />
        <p className="mt-2 border-t border-border/70 pt-2 text-center text-[0.7rem] text-ink-soft">Tap a day to select it</p>
      </PopoverContent>
      {name && <input type="hidden" name={name} value={value} readOnly />}
    </Popover>
  );
}

interface DateRangePickerProps {
  id?: string;
  /** Free-text value kept in the form (e.g. "3 Nov 2026 – 7 Nov 2026"). */
  value: string;
  onChange: (text: string) => void;
  onBlur?: () => void;
  min?: Date;
  invalid?: boolean;
  placeholder?: string;
  className?: string;
}

export function formatDateRange(range?: DateRange) {
  if (!range?.from) return "";
  const from = format(range.from, "d MMM yyyy");
  if (!range.to || range.to.getTime() === range.from.getTime()) return from;
  return `${from} – ${format(range.to, "d MMM yyyy")}`;
}

/** One day or a range. Writes a readable string into the form so the email and database stay human-friendly. */
export function DateRangePicker({ id, value, onChange, onBlur, min, invalid, placeholder = "Pick a day or a range", className }: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [range, setRange] = React.useState<DateRange | undefined>();
  const today = startOfToday();
  const earliest = min ?? today;
  React.useEffect(() => {
    if (!value) setRange(undefined);
  }, [value]);

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) onBlur?.();
      }}
    >
      <PopoverTrigger asChild>
        <button type="button" id={id} data-invalid={invalid || undefined} aria-haspopup="dialog" className={cn(triggerClass, className)}>
          <CalendarDays className="size-4 shrink-0 text-olive-700" strokeWidth={1.75} />
          <span className={cn("flex-1 truncate", !value && "text-ink-soft/60")}>{value || placeholder}</span>
          {value && (
            <span
              role="button"
              tabIndex={-1}
              aria-label="Clear dates"
              onClick={(e) => {
                e.stopPropagation();
                setRange(undefined);
                onChange("");
              }}
              className="rounded-full p-0.5 text-ink-soft/60 hover:bg-olive-50 hover:text-ink"
            >
              <X className="size-3.5" />
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="range"
          selected={range}
          defaultMonth={range?.from ?? earliest}
          startMonth={earliest}
          disabled={{ before: earliest }}
          numberOfMonths={1}
          onSelect={(r) => {
            setRange(r);
            onChange(formatDateRange(r));
          }}
          autoFocus
        />
        <div className="mt-2 flex items-center justify-between gap-3 border-t border-border/70 pt-2">
          <p className="text-[0.7rem] text-ink-soft">{range?.from && !range.to ? "Now tap the last day, or the same day again" : "Tap the first and last day"}</p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-md bg-olive-700 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-olive-800 disabled:opacity-40"
            disabled={!range?.from}
          >
            Done
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
