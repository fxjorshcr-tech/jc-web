"use server";

import { z } from "zod";
import { getTour } from "@/data/tours";
import { generateBookingCode } from "@/lib/booking-code";
import { bookingCustomerEmail, bookingNotifyEmail } from "@/lib/emails";
import { notifyEmail, sendMail } from "@/lib/mailer";
import { getSupabaseAdmin, type BookingRow } from "@/lib/supabase-admin";
import { bookingSchema, type BookingResult } from "@/lib/validations/booking";

const GENERIC_ERROR = "We could not send your request right now. Please try again in a moment or email us at jcsjourneys@gmail.com.";

export async function submitBooking(input: unknown): Promise<BookingResult> {
  const parsed = bookingSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, message: "Please review the highlighted fields.", fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }
  const data = parsed.data;

  // Honeypot filled in: pretend success without doing anything.
  if (data.website) return { ok: true, code: generateBookingCode() };

  const tour = getTour(data.tourSlug);
  if (!tour) return { ok: false, message: "Unknown tour. Please choose a tour from the list." };

  let supabase;
  try {
    supabase = getSupabaseAdmin();
  } catch (err) {
    console.error("[booking] configuration error", err);
    return { ok: false, message: GENERIC_ERROR };
  }

  const row: Omit<BookingRow, "code"> = {
    status: "pending",
    tour_slug: tour.slug,
    tour_name: tour.name,
    preferred_date: data.preferredDate,
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    hotel: data.hotel || null,
    adults: data.adults,
    children: data.children,
    group_names: data.groupNames,
    special_requests: data.specialRequests || null,
  };

  // Insert with a server-generated code; retry on the (very unlikely) unique collision.
  let code = "";
  let inserted = false;
  for (let attempt = 0; attempt < 5 && !inserted; attempt++) {
    code = generateBookingCode();
    const { error } = await supabase.from("bookings").insert({ ...row, code });
    if (!error) {
      inserted = true;
    } else if (error.code !== "23505") {
      console.error("[booking] insert failed", error);
      return { ok: false, message: GENERIC_ERROR };
    }
  }
  if (!inserted) return { ok: false, message: GENERIC_ERROR };

  const customer = bookingCustomerEmail(data, tour.name, code);
  const notify = bookingNotifyEmail(data, tour.name, code);
  const results = await Promise.allSettled([
    sendMail({ to: data.email, ...customer }),
    sendMail({ to: notifyEmail(), replyTo: data.email, ...notify }),
  ]);
  results.forEach((r, i) => {
    if (r.status === "rejected") console.error(`[booking] email ${i === 0 ? "customer" : "notify"} failed for ${code}`, r.reason);
  });

  return { ok: true, code };
}
