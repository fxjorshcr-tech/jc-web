"use client";

import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitHireRequest } from "@/app/actions/hire";
import { Field, FormMessage } from "@/components/forms/field";
import { SentDialog } from "@/components/forms/sent-dialog";
import { Button } from "@/components/ui/button";
import { DateRangePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { hireSchema, type HireInput, type HireValues } from "@/lib/validations/hire";

export function HireForm() {
  const [pending, startTransition] = React.useTransition();
  const [serverError, setServerError] = React.useState<string | null>(null);
  const [sent, setSent] = React.useState<{ name: string; email: string; confirmationSent: boolean } | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement>(null);

  // The confirmation is much shorter than the form, so bring it back into view once it replaces it.
  React.useEffect(() => {
    if (sent) panelRef.current?.scrollIntoView({ block: "center" });
  }, [sent]);

  const { register, control, handleSubmit, formState, setError } = useForm<HireInput, unknown, HireValues>({
    resolver: zodResolver(hireSchema),
    defaultValues: {
      contactName: "",
      website: "",
      email: "",
      phone: "",
      tourDescription: "",
      tourDates: "",
      numberOfPeople: "",
      notes: "",
      company: "",
    },
  });
  const errors = formState.errors;

  const onSubmit = handleSubmit((values) => {
    setServerError(null);
    startTransition(async () => {
      const result = await submitHireRequest(values);
      if (result.ok) {
        setSent({ name: values.contactName, email: values.email, confirmationSent: result.confirmationSent });
        setDialogOpen(true);
        return;
      }
      setServerError(result.message);
      if (result.fieldErrors) {
        for (const [key, messages] of Object.entries(result.fieldErrors)) {
          if (messages?.[0]) setError(key as keyof HireInput, { message: messages[0] });
        }
      }
    });
  });

  if (sent) {
    const copyNote = sent.confirmationSent ? (
      <>
        A copy is on its way to <strong className="font-semibold text-ink">{sent.email}</strong>.
      </>
    ) : (
      <>
        We will write to you at <strong className="font-semibold text-ink">{sent.email}</strong>.
      </>
    );
    return (
      <>
        <div ref={panelRef} className="rounded-xl border border-olive-300 bg-olive-50 p-6 sm:p-10" aria-live="polite">
          <CheckCircle2 className="size-9 text-olive-700" strokeWidth={1.5} />
          <h3 className="mt-4 text-2xl text-ink">Thank you. We received your request.</h3>
          <p className="mt-3 text-ink-soft">We will reply as soon as possible with availability and a list of rates. {copyNote}</p>
        </div>
        <SentDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          title="Thank you. Your request is with JC."
          description={<>We will reply as soon as possible with availability and a list of rates. {copyNote}</>}
        />
      </>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      {serverError && <FormMessage tone="error">{serverError}</FormMessage>}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="contactName" label="Contact name and/or business name" required error={errors.contactName?.message}>
          <Input id="contactName" autoComplete="name" aria-invalid={!!errors.contactName} {...register("contactName")} />
        </Field>
        <Field id="website" label="Website" error={errors.website?.message}>
          <Input id="website" type="url" inputMode="url" placeholder="https://" aria-invalid={!!errors.website} {...register("website")} />
        </Field>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="email" label="Email" required error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" inputMode="email" aria-invalid={!!errors.email} {...register("email")} />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" inputMode="tel" aria-invalid={!!errors.phone} {...register("phone")} />
        </Field>
      </div>
      <Field id="tourDescription" label="Tour description / location" required error={errors.tourDescription?.message}>
        <Textarea id="tourDescription" rows={3} aria-invalid={!!errors.tourDescription} {...register("tourDescription")} />
      </Field>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="tourDates" label="Tour dates" required error={errors.tourDates?.message} hint="Pick one day or a range.">
          <Controller
            control={control}
            name="tourDates"
            render={({ field }) => (
              <DateRangePicker id="tourDates" value={field.value ?? ""} onChange={field.onChange} onBlur={field.onBlur} invalid={!!errors.tourDates} />
            )}
          />
        </Field>
        <Field id="numberOfPeople" label="Number of people" error={errors.numberOfPeople?.message}>
          <Input id="numberOfPeople" inputMode="numeric" aria-invalid={!!errors.numberOfPeople} {...register("numberOfPeople")} />
        </Field>
      </div>
      <Field id="notes" label="Special requests / notes" required error={errors.notes?.message}>
        <Textarea id="notes" rows={4} aria-invalid={!!errors.notes} {...register("notes")} />
      </Field>
      <div className="hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>
      <div>
        <Button type="submit" size="lg" disabled={pending} className="sm:min-w-56">
          {pending ? (
            <>
              <Loader2 className="animate-spin" /> Sending…
            </>
          ) : (
            "Send request"
          )}
        </Button>
      </div>
    </form>
  );
}
