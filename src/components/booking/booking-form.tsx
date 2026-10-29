"use client";

import * as React from "react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitBooking } from "@/app/actions/booking";
import { Field, FormMessage } from "@/components/forms/field";
import { Button } from "@/components/ui/button";
import { DatePicker, formatDisplayDate } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { bookingSchema, type BookingInput, type BookingValues } from "@/lib/validations/booking";

interface TourOption {
  slug: string;
  name: string;
}

interface BookingFormProps {
  tours: TourOption[];
  defaultTourSlug: string;
}

export function BookingForm({ tours, defaultTourSlug }: BookingFormProps) {
  const [pending, startTransition] = React.useTransition();
  const [serverError, setServerError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<{ code: string; values: BookingValues } | null>(null);

  const form = useForm<BookingInput, unknown, BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      tourSlug: defaultTourSlug,
      preferredDate: "",
      name: "",
      email: "",
      phone: "",
      hotel: "",
      adults: 2,
      children: 0,
      groupNames: "",
      specialRequests: "",
      website: "",
    },
  });

  const { register, control, handleSubmit, formState, setError, watch } = form;
  const errors = formState.errors;
  const selectedTour = tours.find((t) => t.slug === watch("tourSlug"));

  const onSubmit = handleSubmit((values) => {
    setServerError(null);
    startTransition(async () => {
      const result = await submitBooking(values);
      if (result.ok) {
        setSuccess({ code: result.code, values });
        return;
      }
      setServerError(result.message);
      if (result.fieldErrors) {
        for (const [key, messages] of Object.entries(result.fieldErrors)) {
          if (messages?.[0]) setError(key as keyof BookingInput, { message: messages[0] });
        }
      }
    });
  });

  if (success) {
    return (
      <div className="rounded-xl border border-olive-300 bg-olive-50 p-6 sm:p-10" aria-live="polite">
        <CheckCircle2 className="size-9 text-olive-700" strokeWidth={1.5} />
        <h3 className="mt-4 text-2xl text-ink sm:text-3xl">Thank you, {success.values.name.split(" ")[0]}. We received your request.</h3>
        <p className="mt-3 text-ink-soft">
          We will confirm availability within 24 hours and send a secure payment link to{" "}
          <strong className="text-ink">{success.values.email}</strong>. Nothing is charged until you receive that link.
        </p>
        <div className="mt-6 inline-flex flex-col rounded-lg border border-olive-300 bg-white px-5 py-4">
          <span className="eyebrow">Your booking code</span>
          <span className="mt-1 font-mono text-2xl font-semibold tracking-widest text-ink">{success.code}</span>
        </div>
        <dl className="mt-6 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-ink-soft">Tour</dt>
            <dd className="font-semibold text-ink">{selectedTour?.name ?? success.values.tourSlug}</dd>
          </div>
          <div>
            <dt className="text-ink-soft">Preferred date</dt>
            <dd className="font-semibold text-ink">{formatDisplayDate(success.values.preferredDate)}</dd>
          </div>
          <div>
            <dt className="text-ink-soft">Guests</dt>
            <dd className="font-semibold text-ink">
              {success.values.adults} adult{success.values.adults === 1 ? "" : "s"}
              {success.values.children ? `, ${success.values.children} child${success.values.children === 1 ? "" : "ren"} under 12` : ""}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm text-ink-soft">
          A copy of this confirmation is on its way to your inbox. Questions in the meantime?{" "}
          <a href="mailto:jcsjourneys@gmail.com" className="font-semibold text-olive-800 underline underline-offset-4">
            jcsjourneys@gmail.com
          </a>
        </p>
        <Button asChild variant="outline" className="mt-6">
          <Link href="/tours">Back to all tours</Link>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      {serverError && <FormMessage tone="error">{serverError}</FormMessage>}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="tourSlug" label="Tour" required error={errors.tourSlug?.message}>
          <Select id="tourSlug" aria-invalid={!!errors.tourSlug} {...register("tourSlug")}>
            {tours.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name}
              </option>
            ))}
          </Select>
        </Field>
        <Field id="preferredDate" label="Preferred date" required error={errors.preferredDate?.message} hint="We appreciate 48 hours' notice.">
          <Controller
            control={control}
            name="preferredDate"
            render={({ field }) => (
              <DatePicker id="preferredDate" value={field.value ?? ""} onChange={field.onChange} onBlur={field.onBlur} invalid={!!errors.preferredDate} />
            )}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name?.message}>
          <Input id="name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />
        </Field>
        <Field id="email" label="Email" required error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" inputMode="email" aria-invalid={!!errors.email} {...register("email")} />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="phone" label="Phone" error={errors.phone?.message} hint="Include your country code. WhatsApp is welcome.">
          <Input id="phone" type="tel" autoComplete="tel" inputMode="tel" aria-invalid={!!errors.phone} {...register("phone")} />
        </Field>
        <Field id="hotel" label="Hotel name" error={errors.hotel?.message} hint="Where should we pick you up?">
          <Input id="hotel" autoComplete="organization" aria-invalid={!!errors.hotel} {...register("hotel")} />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="adults" label="Number of adults" required error={errors.adults?.message}>
          <Input id="adults" type="number" min={1} max={40} inputMode="numeric" aria-invalid={!!errors.adults} {...register("adults")} />
        </Field>
        <Field id="children" label="Number of children under 12" required error={errors.children?.message}>
          <Input id="children" type="number" min={0} max={40} inputMode="numeric" aria-invalid={!!errors.children} {...register("children")} />
        </Field>
      </div>

      <Field id="groupNames" label="Names of each member in your group" required error={errors.groupNames?.message} hint="One name per line is perfect.">
        <Textarea id="groupNames" rows={4} aria-invalid={!!errors.groupNames} {...register("groupNames")} />
      </Field>

      <Field
        id="specialRequests"
        label="Special requests or comments"
        error={errors.specialRequests?.message}
        hint="Dietary needs, mobility, children's ages, help with transportation or hotels, or a preferred Let's Get Local version (farm or Cabuya)."
      >
        <Textarea id="specialRequests" rows={4} aria-invalid={!!errors.specialRequests} {...register("specialRequests")} />
      </Field>

      {/* Honeypot: hidden from people, tempting for bots. */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-ink-soft sm:max-w-sm">
          Prices depend on your pickup point, so we send a quote with the confirmation. No payment is taken on this website.
        </p>
        <Button type="submit" size="lg" disabled={pending} className="sm:min-w-56">
          {pending ? (
            <>
              <Loader2 className="animate-spin" /> Sending…
            </>
          ) : (
            "Request a quote"
          )}
        </Button>
      </div>
    </form>
  );
}
