"use server";

import { z } from "zod";
import { getTour } from "@/data/tours";
import { generateBookingCode } from "@/lib/booking-code";
import { bookingCustomerEmail, bookingNotifyEmail } from "@/lib/emails";
import { sendConfirmation, sendNotification } from "@/lib/mailer";
import { getSupabaseAdmin, type BookingRow } from "@/lib/supabase-admin";
import { bookingSchema, type BookingResult } from "@/lib/validations/booking";

const GENERIC_ERROR = "We could not send your request right now. Please try again in a moment or email us at bookings@jcsjourneys.com.";

export async function submitBooking(input: unknown): Promise<BookingResult> {
  const parsed = bookingSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, message: "Please review the highlighted fields.", fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }
  // Honeypot filled in: pretend success without doing anything.
  if (parsed.data.website) return { ok: true, code: generateBookingCode(), confirmationSent: true };

  const tour = getTour(parsed.data.tourSlug);
  if (!tour) return { ok: false, message: "Unknown tour. Please choose a tour from the list." };

  // The own-transportation rate only exists on some tours.
  const data = { ...parsed.data, transport: tour.pricing.ownTransport ? parsed.data.transport : ("pickup" as const) };

  // Store the request. Email is the source of truth, so a storage problem must not lose the booking.
  const row: Omit<BookingRow, "code"> = {
    status: "pending",
    tour_slug: tour.slug,
    tour_name: tour.name,
    preferred_date: data.preferredDate,
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    hotel: data.hotel || null,
    transport: data.transport,
    adults: data.adults,
    children: data.children,
    group_names: data.groupNames,
    special_requests: data.specialRequests || null,
  };

  // Insert with a server-generated code; retry on the (very unlikely) unique collision.
  let code = generateBookingCode();
  let stored = false;
  try {
    const supabase = getSupabaseAdmin();
    let payload: Partial<typeof row> = row;
    for (let attempt = 0; attempt < 5 && !stored; attempt++) {
      const { error } = await supabase.from("bookings").insert({ ...payload, code });
      if (!error) {
        stored = true;
      } else if (error.code === "23505") {
        code = generateBookingCode();
      } else if (error.code === "PGRST204" && payload.transport) {
        // The `transport` column is not in the database yet (see supabase/schema.sql): store the rest, the emails carry the choice.
        payload = { ...row, transport: undefined };
      } else {
        console.error("[booking] insert failed", error);
        break;
      }
    }
  } catch (err) {
    console.error("[booking] storage unavailable", err);
  }

  // One after the other, our copy first: two requests in the same instant can trip Resend's rate limit.
  const [notification] = await Promise.allSettled([sendNotification(bookingNotifyEmail(data, tour, code), data.email)]);
  const [confirmation] = await Promise.allSettled([sendConfirmation(bookingCustomerEmail(data, tour, code), data.email)]);
  if (notification.status === "rejected") console.error(`[booking] notify email failed for ${code}`, notification.reason);
  if (confirmation.status === "rejected") console.error(`[booking] customer email failed for ${code}`, confirmation.reason);

  // The request has to reach us one way or the other: in the database or in the inbox.
  if (!stored && notification.status === "rejected") return { ok: false, message: GENERIC_ERROR };

  return { ok: true, code, confirmationSent: confirmation.status === "fulfilled" };
}
