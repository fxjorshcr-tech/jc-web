import "server-only";
import { Resend } from "resend";
import { site } from "@/data/site";

let cached: Resend | null = null;

function getResend() {
  if (cached) return cached;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("Resend is not configured: set RESEND_API_KEY");
  cached = new Resend(key);
  return cached;
}

/** "a@x.com, b@y.com" -> ["a@x.com", "b@y.com"]. Accepts commas, semicolons or whitespace between addresses. */
function parseAddressList(value: string | undefined) {
  return [...new Set((value ?? "").split(/[,;\s]+/).map((s) => s.trim()).filter(Boolean))];
}

/**
 * The inboxes that receive every request made on the website.
 * BOOKINGS_NOTIFY_EMAIL takes one address or several separated by commas.
 */
export function notifyEmails(): string[] {
  const list = parseAddressList(process.env.BOOKINGS_NOTIFY_EMAIL);
  return list.length ? list : [site.email];
}

/**
 * Where a guest's reply to their confirmation lands. The from address is send-only,
 * so replies go to BOOKINGS_REPLY_TO_EMAIL, or to the notification inboxes when it is unset.
 */
export function replyToEmails(): string[] {
  const list = parseAddressList(process.env.BOOKINGS_REPLY_TO_EMAIL);
  return list.length ? list : notifyEmails();
}

export function fromEmail() {
  return process.env.RESEND_FROM_EMAIL ?? `${site.name} <bookings@jcsjourneys.com>`;
}

export interface Mail {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string | string[];
}

export async function sendMail(mail: Mail) {
  const resend = getResend();
  const payload = {
    from: fromEmail(),
    to: mail.to,
    subject: mail.subject,
    html: mail.html,
    text: mail.text,
    replyTo: mail.replyTo,
  };
  let { error } = await resend.emails.send(payload);
  // Resend allows only a few requests per second: wait a moment and try once more.
  if (error?.name === "rate_limit_exceeded") {
    await new Promise((resolve) => setTimeout(resolve, 1100));
    ({ error } = await resend.emails.send(payload));
  }
  if (error) throw new Error(`Resend error (${error.name}): ${error.message}`);
}

/** The internal copy of a request. Replying to it writes straight to the guest. */
export function sendNotification(mail: Omit<Mail, "to" | "replyTo">, guestEmail: string) {
  return sendMail({ ...mail, to: notifyEmails(), replyTo: guestEmail });
}

/** The guest's own copy. Replying to it reaches the team, not the send-only from address. */
export function sendConfirmation(mail: Omit<Mail, "to" | "replyTo">, guestEmail: string) {
  return sendMail({ ...mail, to: guestEmail, replyTo: replyToEmails() });
}
