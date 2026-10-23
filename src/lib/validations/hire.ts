import { z } from "zod";

const optionalText = (max: number) => z.string().trim().max(max, `Keep it under ${max} characters`).optional().or(z.literal(""));

export const hireSchema = z.object({
  contactName: z.string().trim().min(2, "Please tell us your name or business name").max(160),
  website: optionalText(200),
  email: z.email("Please enter a valid email address"),
  phone: optionalText(40),
  tourDescription: z.string().trim().min(5, "Please describe the tour or location").max(2000),
  tourDates: z.string().trim().min(2, "Please tell us the dates").max(200),
  numberOfPeople: optionalText(40),
  notes: z.string().trim().min(2, "Please add any requests or notes").max(2000),
  /** Honeypot: must stay empty. */
  company: z.string().max(0).optional(),
});

export type HireInput = z.input<typeof hireSchema>;
export type HireValues = z.output<typeof hireSchema>;

export type HireResult = { ok: true } | { ok: false; message: string; fieldErrors?: Record<string, string[] | undefined> };
