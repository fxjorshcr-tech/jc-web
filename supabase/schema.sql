-- JC's Journeys – booking requests
-- Run this in the Supabase SQL editor (or `supabase db push`).
-- Rows are written only from the Next.js server with the service role key, which bypasses RLS.
-- RLS is enabled with no policies, so the anon/public key can neither read nor write.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- bookings: tour reservation requests from the website
-- ---------------------------------------------------------------------------
create table if not exists public.bookings (
  id                uuid primary key default gen_random_uuid(),
  code              text not null unique,                       -- e.g. JCJ-7K2M9Q (generated on the server)
  status            text not null default 'pending'
                    check (status in ('pending', 'confirmed', 'paid', 'cancelled')),
  tour_slug         text not null,
  tour_name         text not null,
  preferred_date    date not null,
  name              text not null,
  email             text not null,
  phone             text,
  hotel             text,
  adults            integer not null check (adults >= 1),
  children          integer not null default 0 check (children >= 0),
  group_names       text not null,
  special_requests  text,
  -- operational fields you fill in by hand later
  quoted_price_usd  numeric(10, 2),
  payment_link      text,
  internal_notes    text,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

comment on table public.bookings is 'Tour booking requests submitted from jcsjourneys.com. Status moves pending -> confirmed -> paid, or cancelled.';

create index if not exists bookings_created_at_idx on public.bookings (created_at desc);
create index if not exists bookings_status_idx on public.bookings (status);
create index if not exists bookings_preferred_date_idx on public.bookings (preferred_date);
create index if not exists bookings_email_idx on public.bookings (lower(email));

-- ---------------------------------------------------------------------------
-- guide_requests: "Hire a Guide" form submissions
-- ---------------------------------------------------------------------------
create table if not exists public.guide_requests (
  id                uuid primary key default gen_random_uuid(),
  status            text not null default 'new' check (status in ('new', 'replied', 'closed')),
  contact_name      text not null,
  website           text,
  email             text not null,
  phone             text,
  tour_description  text not null,
  tour_dates        text not null,
  number_of_people  text,
  notes             text not null,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

create index if not exists guide_requests_created_at_idx on public.guide_requests (created_at desc);

-- ---------------------------------------------------------------------------
-- updated_at trigger
-- ---------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists bookings_set_updated_at on public.bookings;
create trigger bookings_set_updated_at
  before update on public.bookings
  for each row execute function public.set_updated_at();

drop trigger if exists guide_requests_set_updated_at on public.guide_requests;
create trigger guide_requests_set_updated_at
  before update on public.guide_requests
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Row Level Security: enabled, no policies.
-- Only the service role (used by the server action) can insert/select.
-- ---------------------------------------------------------------------------
alter table public.bookings enable row level security;
alter table public.guide_requests enable row level security;

revoke all on public.bookings from anon, authenticated;
revoke all on public.guide_requests from anon, authenticated;
