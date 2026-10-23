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

export function notifyEmail() {
  return process.env.BOOKINGS_NOTIFY_EMAIL ?? site.email;
}

export function fromEmail() {
  return process.env.RESEND_FROM_EMAIL ?? `${site.name} <bookings@jcsjourneys.com>`;
}

export interface Mail {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

export async function sendMail(mail: Mail) {
  const resend = getResend();
  const { error } = await resend.emails.send({
    from: fromEmail(),
    to: mail.to,
    subject: mail.subject,
    html: mail.html,
    text: mail.text,
    replyTo: mail.replyTo,
  });
  if (error) throw new Error(`Resend error: ${error.message}`);
}
