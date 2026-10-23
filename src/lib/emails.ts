import { site } from "@/data/site";
import type { BookingValues } from "@/lib/validations/booking";
import type { HireValues } from "@/lib/validations/hire";

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function layout(title: string, body: string) {
  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:0;background:#faf8f2;font-family:Helvetica,Arial,sans-serif;color:#1f2a24;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf8f2;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid #ddd8ca;border-radius:8px;">
        <tr><td style="padding:28px 32px 8px;border-bottom:1px solid #e7e1d1;">
          <div style="font-size:22px;font-weight:600;letter-spacing:-0.01em;">JC&rsquo;s Journeys</div>
          <div style="font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#176b86;margin-top:4px;">Montezuma &middot; Costa Rica</div>
        </td></tr>
        <tr><td style="padding:28px 32px;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;">
          ${body}
        </td></tr>
        <tr><td style="padding:20px 32px 28px;border-top:1px solid #e7e1d1;font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#4d5a52;">
          ${site.name} &middot; ${site.tagline}<br>
          <a href="mailto:${site.email}" style="color:#176b86;">${site.email}</a> &middot; <a href="${site.url}" style="color:#176b86;">${site.url.replace(/^https?:\/\//, "")}</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function rows(pairs: [string, string | number | null | undefined][]) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin:16px 0;">
${pairs
  .map(
    ([k, v]) =>
      `<tr><td style="padding:8px 0;border-bottom:1px solid #f1ede2;color:#4d5a52;width:38%;vertical-align:top;">${escapeHtml(k)}</td><td style="padding:8px 0;border-bottom:1px solid #f1ede2;vertical-align:top;white-space:pre-line;">${escapeHtml(String(v ?? "") || "—")}</td></tr>`,
  )
  .join("\n")}
</table>`;
}

function textRows(pairs: [string, string | number | null | undefined][]) {
  return pairs.map(([k, v]) => `${k}: ${String(v ?? "") || "-"}`).join("\n");
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export function bookingCustomerEmail(b: BookingValues, tourName: string, code: string) {
  const details: [string, string | number][] = [
    ["Booking code", code],
    ["Tour", tourName],
    ["Preferred date", formatDate(b.preferredDate)],
    ["Adults", b.adults],
    ["Children under 12", b.children],
    ["Hotel", b.hotel || "—"],
  ];
  const html = layout(
    `We received your request – ${code}`,
    `<p>Dear ${escapeHtml(b.name)},</p>
<p>Thank you for your tour request. We have received it and will confirm availability within 24 hours. Once confirmed, we will send you a secure payment link by email to complete your reservation.</p>
<p>Your booking code is <strong>${code}</strong>. Please mention it in any correspondence.</p>
${rows(details)}
<p>If any detail above is incorrect, or you would like help with transportation, hotels or other tours, simply reply to this email.</p>
<p>Kind regards,<br>JC &amp; the JC&rsquo;s Journeys team</p>`,
  );
  const text = `Dear ${b.name},

Thank you for your tour request. We have received it and will confirm availability within 24 hours. Once confirmed, we will send you a secure payment link by email to complete your reservation.

Your booking code is ${code}. Please mention it in any correspondence.

${textRows(details)}

If any detail above is incorrect, or you would like help with transportation, hotels or other tours, simply reply to this email.

Kind regards,
JC & the JC's Journeys team
${site.email}`;
  return { subject: `We received your tour request – ${code}`, html, text };
}

export function bookingNotifyEmail(b: BookingValues, tourName: string, code: string) {
  const details: [string, string | number | null | undefined][] = [
    ["Booking code", code],
    ["Status", "pending"],
    ["Tour", tourName],
    ["Preferred date", `${formatDate(b.preferredDate)} (${b.preferredDate})`],
    ["Name", b.name],
    ["Email", b.email],
    ["Phone", b.phone],
    ["Hotel", b.hotel],
    ["Adults", b.adults],
    ["Children under 12", b.children],
    ["Group members", b.groupNames],
    ["Special requests", b.specialRequests],
  ];
  const html = layout(
    `New booking request ${code}`,
    `<p>A new booking request arrived from the website.</p>
${rows(details)}
<p>Next step: confirm availability with the guest and send the payment link. Reply to this email to write to the guest directly.</p>`,
  );
  const text = `New booking request from the website.

${textRows(details)}

Next step: confirm availability with the guest and send the payment link.`;
  return { subject: `New booking request ${code} – ${tourName} – ${b.preferredDate}`, html, text };
}

export function hireCustomerEmail(h: HireValues) {
  const html = layout(
    "We received your guide request",
    `<p>Dear ${escapeHtml(h.contactName)},</p>
<p>Thank you for your interest in hiring JC as a private guide. We have received the details of your trip and will reply as soon as possible with availability and a list of rates.</p>
${rows([
  ["Tour description / location", h.tourDescription],
  ["Tour dates", h.tourDates],
  ["Number of people", h.numberOfPeople],
])}
<p>If you need to add anything, simply reply to this email.</p>
<p>Kind regards,<br>JC &amp; the JC&rsquo;s Journeys team</p>`,
  );
  const text = `Dear ${h.contactName},

Thank you for your interest in hiring JC as a private guide. We have received the details of your trip and will reply as soon as possible with availability and a list of rates.

${textRows([
  ["Tour description / location", h.tourDescription],
  ["Tour dates", h.tourDates],
  ["Number of people", h.numberOfPeople],
])}

Kind regards,
JC & the JC's Journeys team
${site.email}`;
  return { subject: "We received your guide request", html, text };
}

export function hireNotifyEmail(h: HireValues) {
  const details: [string, string | null | undefined][] = [
    ["Contact / business name", h.contactName],
    ["Website", h.website],
    ["Email", h.email],
    ["Phone", h.phone],
    ["Tour description / location", h.tourDescription],
    ["Tour dates", h.tourDates],
    ["Number of people", h.numberOfPeople],
    ["Special requests / notes", h.notes],
  ];
  return {
    subject: `New guide request – ${h.contactName} – ${h.tourDates}`,
    html: layout("New guide request", `<p>A new Hire a Guide request arrived from the website.</p>${rows(details)}`),
    text: `New Hire a Guide request from the website.\n\n${textRows(details)}`,
  };
}
