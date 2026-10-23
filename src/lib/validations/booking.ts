import { z } from "zod";
import { tourSlugs } from "@/data/tours";

const optionalText = (max: number) => z.string().trim().max(max, `Keep it under ${max} characters`).optional().or(z.literal(""));

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export const bookingSchema = z.object({
  tourSlug: z.enum(tourSlugs as [string, ...string[]], { message: "Please choose a tour" }),
  preferredDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please choose your preferred date")
    .refine((d) => d >= todayIso(), "Please choose a date from today onwards"),
  name: z.string().trim().min(2, "Please tell us your name").max(120),
  email: z.email("Please enter a valid email address"),
  phone: optionalText(40),
  hotel: optionalText(160),
  adults: z.coerce.number({ message: "How many adults?" }).int().min(1, "At least one adult").max(40, "For groups this large, please email us"),
  children: z.coerce.number({ message: "Enter 0 if none" }).int().min(0, "Enter 0 if none").max(40),
  groupNames: z.string().trim().min(2, "Please list the names of each member of your group").max(2000),
  specialRequests: optionalText(2000),
  /** Honeypot: must stay empty. Hidden from humans. */
  website: z.string().max(0).optional(),
});

export type BookingInput = z.input<typeof bookingSchema>;
export type BookingValues = z.output<typeof bookingSchema>;

export type BookingResult =
  | { ok: true; code: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string[] | undefined> };
