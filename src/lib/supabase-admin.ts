import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the service role key.
 * Never import this from a client component. RLS is enabled on every table and
 * there are no public policies, so this key is the only way rows get written.
 */
let cached: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (cached) return cached;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Supabase is not configured: set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY");
  }
  cached = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}

export interface BookingRow {
  code: string;
  status: "pending" | "confirmed" | "paid" | "cancelled";
  tour_slug: string;
  tour_name: string;
  preferred_date: string;
  name: string;
  email: string;
  phone: string | null;
  hotel: string | null;
  adults: number;
  children: number;
  group_names: string;
  special_requests: string | null;
}

export interface GuideRequestRow {
  contact_name: string;
  website: string | null;
  email: string;
  phone: string | null;
  tour_description: string;
  tour_dates: string;
  number_of_people: string | null;
  notes: string;
}
