"use server";

import { z } from "zod";
import { hireCustomerEmail, hireNotifyEmail } from "@/lib/emails";
import { notifyEmail, sendMail } from "@/lib/mailer";
import { getSupabaseAdmin, type GuideRequestRow } from "@/lib/supabase-admin";
import { hireSchema, type HireResult } from "@/lib/validations/hire";

const GENERIC_ERROR = "We could not send your request right now. Please try again in a moment or email us at jcsjourneys@gmail.com.";

export async function submitHireRequest(input: unknown): Promise<HireResult> {
  const parsed = hireSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, message: "Please review the highlighted fields.", fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }
  const data = parsed.data;
  if (data.company) return { ok: true };

  // Store a copy; a storage problem must not block the email.
  try {
    const row: GuideRequestRow = {
      contact_name: data.contactName,
      website: data.website || null,
      email: data.email,
      phone: data.phone || null,
      tour_description: data.tourDescription,
      tour_dates: data.tourDates,
      number_of_people: data.numberOfPeople || null,
      notes: data.notes,
    };
    const { error } = await getSupabaseAdmin().from("guide_requests").insert(row);
    if (error) console.error("[hire] insert failed", error);
  } catch (err) {
    console.error("[hire] storage unavailable", err);
  }

  try {
    const notify = hireNotifyEmail(data);
    await sendMail({ to: notifyEmail(), replyTo: data.email, ...notify });
  } catch (err) {
    console.error("[hire] notify email failed", err);
    return { ok: false, message: GENERIC_ERROR };
  }

  try {
    await sendMail({ to: data.email, ...hireCustomerEmail(data) });
  } catch (err) {
    console.error("[hire] customer email failed", err);
  }

  return { ok: true };
}
