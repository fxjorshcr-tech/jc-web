import { site } from "@/data/site";
import { EMAIL_LOGO_CID } from "@/lib/email-logo";
import type { Tour } from "@/data/tours";
import type { BookingValues } from "@/lib/validations/booking";
import type { HireValues } from "@/lib/validations/hire";

/**
 * Transactional emails. Email clients ignore most CSS, so everything is tables and inline styles:
 * no flexbox, no web fonts, no CSS variables. Colours mirror the site palette in globals.css.
 */
const C = {
  page: "#f1ede2",
  card: "#ffffff",
  cream: "#faf8f2",
  line: "#e7e1d1",
  soft: "#f1ede2",
  ink: "#1f2a24",
  inkSoft: "#4d5a52",
  moss: "#163b33",
  teal: "#176b86",
  tealDark: "#15586f",
  olive: "#27633f",
  oliveSoft: "#eef6f0",
  oliveLine: "#86bd9a",
  gold: "#f2dc7a",
  goldSoft: "#fdf8e1",
  goldLine: "#e9c94f",
  whatsapp: "#128c4b",
} as const;

const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
const MONO = "'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace";

/** Tours that have a banner in /public/images/email/tours/<slug>.jpg (1200x520). */
const EMAIL_BANNERS = new Set(["nocturno-night-journey", "bird-lovers-morning", "curu-nature-escape", "lets-get-local", "finca-el-paraiso-atv"]);

type EmailTour = Pick<Tour, "slug" | "name" | "whatToBring">;
type Row = [label: string, value: string | number | null | undefined];

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** Escaped, with line breaks kept (group names and notes are typed one per line). */
function multiline(s: string) {
  return escapeHtml(s).replace(/\r?\n/g, "<br>");
}

function firstName(name: string) {
  return name.trim().split(/\s+/)[0] || name;
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

function guests(b: Pick<BookingValues, "adults" | "children">) {
  const adults = `${b.adults} adult${b.adults === 1 ? "" : "s"}`;
  return b.children ? `${adults}, ${b.children} child${b.children === 1 ? "" : "ren"} under 12` : adults;
}

/** Digits only, for wa.me and tel: links. Empty when the number is too short to be dialable. */
function phoneDigits(phone: string | null | undefined) {
  const digits = (phone ?? "").replace(/\D/g, "");
  return digits.length >= 8 ? digits : "";
}

function whatsappLink(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// ---------------------------------------------------------------------------
// Building blocks
// ---------------------------------------------------------------------------

function button(label: string, href: string, background: string, color = "#ffffff") {
  return `<table role="presentation" cellpadding="0" cellspacing="0" class="btn" style="display:inline-table;margin:0 8px 10px 0;"><tr>
<td align="center" bgcolor="${background}" style="border-radius:8px;"><a href="${href}" target="_blank" style="display:block;padding:13px 22px;font-family:${FONT};font-size:15px;font-weight:600;line-height:1.2;color:${color};text-decoration:none;border-radius:8px;">${label}</a></td>
</tr></table>`;
}

function outlineButton(label: string, href: string) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" class="btn" style="display:inline-table;margin:0 8px 10px 0;"><tr>
<td align="center" bgcolor="${C.card}" style="border-radius:8px;border:1px solid #c9c2ae;"><a href="${href}" target="_blank" style="display:block;padding:12px 21px;font-family:${FONT};font-size:15px;font-weight:600;line-height:1.2;color:${C.ink};text-decoration:none;border-radius:8px;">${label}</a></td>
</tr></table>`;
}

function eyebrow(text: string, color: string = C.olive) {
  return `<div style="font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:${color};">${escapeHtml(text)}</div>`;
}

function paragraph(html: string) {
  return `<p style="margin:0 0 16px;font-family:${FONT};font-size:16px;line-height:1.6;color:${C.ink};">${html}</p>`;
}

/** Label / value card. Empty values are left out. */
function details(title: string, rows: Row[]) {
  const filled = rows.filter(([, v]) => v !== null && v !== undefined && String(v).trim() !== "");
  if (!filled.length) return "";
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;border:1px solid ${C.line};border-radius:10px;border-collapse:separate;">
<tr><td style="padding:14px 18px 12px;border-bottom:1px solid ${C.line};background:${C.cream};border-radius:10px 10px 0 0;">${eyebrow(title)}</td></tr>
<tr><td style="padding:4px 18px 6px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${filled
  .map(
    ([k, v], i) =>
      `<tr><td valign="top" width="36%" style="padding:11px 12px 11px 0;${i ? `border-top:1px solid ${C.soft};` : ""}font-family:${FONT};font-size:13px;line-height:1.5;color:${C.inkSoft};">${escapeHtml(k)}</td><td valign="top" style="padding:11px 0;${i ? `border-top:1px solid ${C.soft};` : ""}font-family:${FONT};font-size:15px;line-height:1.5;font-weight:600;color:${C.ink};word-break:break-word;">${multiline(String(v))}</td></tr>`,
  )
  .join("\n")}
</table>
</td></tr>
</table>`;
}

function steps(title: string, items: string[]) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
<tr><td style="padding:0 0 10px;">${eyebrow(title)}</td></tr>
${items
  .map(
    (item, i) =>
      `<tr><td style="padding:7px 0;"><table role="presentation" cellpadding="0" cellspacing="0"><tr>
<td valign="top" width="38"><div style="width:26px;height:26px;border-radius:13px;background:${C.oliveSoft};border:1px solid ${C.oliveLine};font-family:${FONT};font-size:13px;font-weight:700;line-height:26px;text-align:center;color:${C.olive};">${i + 1}</div></td>
<td valign="top" style="padding-top:3px;font-family:${FONT};font-size:15px;line-height:1.55;color:${C.ink};">${item}</td>
</tr></table></td></tr>`,
  )
  .join("\n")}
</table>`;
}

function codeBlock(code: string) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;"><tr>
<td align="center" style="padding:18px 16px;background:${C.oliveSoft};border:1px dashed ${C.oliveLine};border-radius:10px;">
${eyebrow("Your booking code")}
<div style="margin-top:6px;font-family:${MONO};font-size:28px;font-weight:700;letter-spacing:0.14em;color:${C.ink};">${escapeHtml(code)}</div>
<div style="margin-top:6px;font-family:${FONT};font-size:13px;color:${C.inkSoft};">Mention it whenever you write to us.</div>
</td></tr></table>`;
}

function note(title: string, html: string) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;"><tr>
<td style="padding:14px 18px;background:${C.goldSoft};border-left:4px solid ${C.goldLine};border-radius:6px;">
${eyebrow(title, "#7a5f0a")}
<div style="margin-top:6px;font-family:${FONT};font-size:15px;line-height:1.55;color:${C.ink};">${html}</div>
</td></tr></table>`;
}

interface LayoutOptions {
  /** Shown in the inbox list next to the subject. */
  preheader: string;
  /** Small label above the headline. */
  kicker: string;
  headline: string;
  subline?: string;
  /** Background of the headline band. */
  tone?: "moss" | "teal";
  /** Absolute URL of a 1200x520 photo shown above the headline. */
  banner?: { src: string; alt: string };
  body: string;
  /** Why the reader got this email. */
  reason: string;
}

function layout({ preheader, kicker, headline, subline, tone = "moss", banner, body, reason }: LayoutOptions) {
  const band = tone === "teal" ? C.tealDark : C.moss;
  const host = site.url.replace(/^https?:\/\//, "");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<title>${escapeHtml(headline)}</title>
<style>
  body{margin:0;padding:0;}
  a{color:${C.teal};}
  @media (max-width:520px){
    .pad{padding-left:20px !important;padding-right:20px !important;}
    .outer{padding:0 !important;}
    .card{border-radius:0 !important;border-left:0 !important;border-right:0 !important;}
    .h1{font-size:26px !important;}
    .btn{display:table !important;width:100% !important;margin-right:0 !important;}
  }
</style>
</head>
<body style="margin:0;padding:0;background:${C.page};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.page};">
<tr><td align="center" class="outer" style="padding:28px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="card" style="max-width:600px;background:${C.card};border:1px solid ${C.line};border-radius:14px;overflow:hidden;">

<tr><td class="pad" style="padding:20px 32px;background:${C.cream};border-bottom:1px solid ${C.line};">
<table role="presentation" cellpadding="0" cellspacing="0"><tr>
<td valign="middle" style="padding-right:12px;"><a href="${site.url}" target="_blank"><img src="cid:${EMAIL_LOGO_CID}" width="44" height="44" alt="JC's Journeys" style="display:block;border:0;"></a></td>
<td valign="middle">
<div style="font-family:${FONT};font-size:20px;font-weight:600;letter-spacing:-0.01em;color:${C.ink};">JC&rsquo;s Journeys</div>
<div style="margin-top:3px;font-family:${FONT};font-size:10px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:${C.teal};">${escapeHtml(site.taglineShort)}</div>
</td>
</tr></table>
</td></tr>

${banner ? `<tr><td style="font-size:0;line-height:0;background:${band};"><img src="${banner.src}" width="600" alt="${escapeHtml(banner.alt)}" style="display:block;width:100%;max-width:600px;height:auto;border:0;"></td></tr>` : ""}

<tr><td class="pad" bgcolor="${band}" style="padding:28px 32px 30px;background:${band};">
${eyebrow(kicker, C.gold)}
<div class="h1" style="margin-top:10px;font-family:${FONT};font-size:30px;font-weight:600;line-height:1.15;letter-spacing:-0.01em;color:#ffffff;">${headline}</div>
${subline ? `<div style="margin-top:10px;font-family:${FONT};font-size:16px;line-height:1.5;color:#d9ebde;">${subline}</div>` : ""}
</td></tr>

<tr><td class="pad" style="padding:30px 32px 10px;">
${body}
</td></tr>

<tr><td class="pad" style="padding:22px 32px 26px;background:${C.cream};border-top:1px solid ${C.line};font-family:${FONT};font-size:12px;line-height:1.7;color:${C.inkSoft};">
<strong style="color:${C.ink};">${escapeHtml(site.name)}</strong> &middot; Southern Nicoya Peninsula, Costa Rica<br>
${escapeHtml(site.guide.shortName)} &middot; ${escapeHtml(site.guide.license)}<br>
<a href="${site.url}" target="_blank" style="color:${C.teal};">${host}</a> &middot; <a href="https://wa.me/${site.whatsapp.number}" target="_blank" style="color:${C.teal};">WhatsApp ${escapeHtml(site.whatsapp.display)}</a> &middot; <a href="${site.social.tripadvisor}" target="_blank" style="color:${C.teal};">Tripadvisor</a>
<div style="margin-top:10px;color:#7b867f;">${escapeHtml(reason)}</div>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

function textRows(rows: Row[]) {
  return rows
    .filter(([, v]) => v !== null && v !== undefined && String(v).trim() !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}

function tourBanner(tour: EmailTour) {
  return EMAIL_BANNERS.has(tour.slug) ? { src: `${site.url}/images/email/tours/${tour.slug}.jpg`, alt: tour.name } : undefined;
}

const signOff = paragraph(`Pura vida,<br><strong>JC &amp; the JC&rsquo;s Journeys team</strong>`);

// ---------------------------------------------------------------------------
// Booking
// ---------------------------------------------------------------------------

export function bookingCustomerEmail(b: BookingValues, tour: EmailTour, code: string) {
  const name = firstName(b.name);
  const rows: Row[] = [
    ["Tour", tour.name],
    ["Preferred date", formatDate(b.preferredDate)],
    ["Guests", guests(b)],
    ["Pickup / hotel", b.hotel || "To be confirmed with you"],
    ["In your group", b.groupNames],
    ["Special requests", b.specialRequests],
  ];
  const next = [
    "We contact you as soon as possible with the <strong>price and payment details</strong>.",
    "We confirm your <strong>hotel pickup and the exact time</strong>.",
    "You meet JC and enjoy the journey.",
  ];
  const bring = tour.whatToBring.map((item) => item.replace(/\*+$/, "").trim()).filter(Boolean);
  const whatsapp = whatsappLink(site.whatsapp.number, `Hi JC, I'm writing about my booking ${code} (${tour.name}).`);

  const html = layout({
    preheader: `Booking ${code} received. We will contact you as soon as possible with the payment details.`,
    kicker: "Booking received",
    headline: `Thank you, ${escapeHtml(name)}.`,
    subline: `Your request for <strong style="color:#ffffff;">${escapeHtml(tour.name)}</strong> is with JC.`,
    banner: tourBanner(tour),
    reason: `You are receiving this email because you booked a tour on ${site.url.replace(/^https?:\/\//, "")}. No payment has been taken.`,
    body: `${paragraph("We have your booking and will contact you as soon as possible with the payment details, and to confirm your hotel and pickup time.")}
${codeBlock(code)}
${details("Your booking", rows)}
${steps("What happens next", next)}
${bring.length ? note("What to bring", escapeHtml(bring.join(" · "))) : ""}
${paragraph("Something to change or a question? Reply to this email or message us on WhatsApp.")}
<div style="margin:0 0 14px;">${button("Message us on WhatsApp", whatsapp, C.whatsapp)}${outlineButton("Email us", `mailto:${site.email}?subject=${encodeURIComponent(`Booking ${code}`)}`)}</div>
${signOff}`,
  });

  const text = `Thank you, ${name}.

We have your booking for ${tour.name} and will contact you as soon as possible with the payment details, and to confirm your hotel and pickup time.

Your booking code: ${code}
Mention it whenever you write to us.

${textRows(rows)}

What happens next
1. We contact you as soon as possible with the price and payment details.
2. We confirm your hotel pickup and the exact time.
3. You meet JC and enjoy the journey.
${bring.length ? `\nWhat to bring: ${bring.join(", ")}\n` : ""}
Something to change or a question? Reply to this email or message us on WhatsApp: ${site.whatsapp.display}

Pura vida,
JC & the JC's Journeys team
${site.url}`;

  return { subject: `Booking received – ${tour.name} (${code})`, html, text };
}

export function bookingNotifyEmail(b: BookingValues, tour: EmailTour, code: string) {
  const name = firstName(b.name);
  const digits = phoneDigits(b.phone);
  const date = formatDate(b.preferredDate);
  const replySubject = encodeURIComponent(`Your booking ${code} – ${tour.name}`);
  const guestRows: Row[] = [
    ["Name", b.name],
    ["Email", b.email],
    ["Phone", b.phone],
    ["Hotel / pickup", b.hotel || "Not given yet"],
  ];
  const bookingRows: Row[] = [
    ["Booking code", code],
    ["Tour", tour.name],
    ["Preferred date", date],
    ["Guests", guests(b)],
    ["Group members", b.groupNames],
  ];

  const html = layout({
    preheader: `${b.name} · ${tour.name} · ${date} · ${guests(b)}`,
    kicker: `New booking · ${code}`,
    headline: escapeHtml(tour.name),
    subline: `${escapeHtml(date)}<br>${escapeHtml(guests(b))} &middot; ${escapeHtml(b.name)}`,
    tone: "teal",
    reason: "Sent automatically by the booking form on the website. Replying to this email writes to the guest.",
    body: `<div style="margin:0 0 18px;">${button(`Reply to ${escapeHtml(name)}`, `mailto:${encodeURIComponent(b.email)}?subject=${replySubject}`, C.teal)}${
      digits ? button("WhatsApp", whatsappLink(digits, `Hi ${name}, this is JC from JC's Journeys about your booking ${code} (${tour.name}).`), C.whatsapp) + outlineButton("Call", `tel:+${digits}`) : ""
    }</div>
${b.specialRequests ? note("Special requests", multiline(b.specialRequests)) : ""}
${details("Guest", guestRows)}
${details("Booking", bookingRows)}
${steps("To do", ["Send the <strong>price and payment details</strong>.", "Confirm the <strong>hotel pickup and exact time</strong>."])}`,
  });

  const text = `New booking ${code}

${tour.name}
${date} · ${guests(b)}

GUEST
${textRows(guestRows)}

BOOKING
${textRows([...bookingRows, ["Special requests", b.specialRequests]])}

To do
1. Send the price and payment details.
2. Confirm the hotel pickup and exact time.

Reply to this email to write to the guest.`;

  return { subject: `New booking ${code} – ${tour.name} – ${b.preferredDate} – ${b.name}`, html, text };
}

// ---------------------------------------------------------------------------
// Hire a guide
// ---------------------------------------------------------------------------

export function hireCustomerEmail(h: HireValues) {
  const rows: Row[] = [
    ["Tour / location", h.tourDescription],
    ["Dates", h.tourDates],
    ["Group size", h.numberOfPeople],
    ["Notes", h.notes],
  ];
  const whatsapp = whatsappLink(site.whatsapp.number, "Hi JC, I sent a request to hire you as a private guide.");

  const html = layout({
    preheader: "We received your request to hire JC as a private guide and will reply as soon as possible.",
    kicker: "Request received",
    headline: `Thank you, ${escapeHtml(firstName(h.contactName))}.`,
    subline: "Your request to hire JC as a private guide is with us.",
    reason: `You are receiving this email because you sent a request on ${site.url.replace(/^https?:\/\//, "")}.`,
    body: `${paragraph("We have the details of your trip and will reply as soon as possible with availability and a list of rates.")}
${details("Your request", rows)}
${paragraph("Need to add something? Reply to this email or message us on WhatsApp.")}
<div style="margin:0 0 14px;">${button("Message us on WhatsApp", whatsapp, C.whatsapp)}</div>
${signOff}`,
  });

  const text = `Thank you, ${firstName(h.contactName)}.

We received your request to hire JC as a private guide and will reply as soon as possible with availability and a list of rates.

${textRows(rows)}

Need to add something? Reply to this email or message us on WhatsApp: ${site.whatsapp.display}

Pura vida,
JC & the JC's Journeys team
${site.url}`;

  return { subject: "We received your guide request", html, text };
}

export function hireNotifyEmail(h: HireValues) {
  const name = firstName(h.contactName);
  const digits = phoneDigits(h.phone);
  const contactRows: Row[] = [
    ["Contact / business", h.contactName],
    ["Email", h.email],
    ["Phone", h.phone],
    ["Website", h.website],
  ];
  const tripRows: Row[] = [
    ["Tour / location", h.tourDescription],
    ["Dates", h.tourDates],
    ["Group size", h.numberOfPeople],
  ];

  const html = layout({
    preheader: `${h.contactName} · ${h.tourDates}`,
    kicker: "New guide request",
    headline: escapeHtml(h.contactName),
    subline: `${escapeHtml(h.tourDates)}${h.numberOfPeople ? ` &middot; ${escapeHtml(h.numberOfPeople)} people` : ""}`,
    tone: "teal",
    reason: "Sent automatically by the Hire a Guide form on the website. Replying to this email writes to the sender.",
    body: `<div style="margin:0 0 18px;">${button("Reply by email", `mailto:${encodeURIComponent(h.email)}?subject=${encodeURIComponent("Your guide request – JC's Journeys")}`, C.teal)}${
      digits ? button("WhatsApp", whatsappLink(digits, `Hi ${name}, this is JC from JC's Journeys about your guide request.`), C.whatsapp) + outlineButton("Call", `tel:+${digits}`) : ""
    }</div>
${note("Special requests / notes", multiline(h.notes))}
${details("Contact", contactRows)}
${details("Trip", tripRows)}
${steps("To do", ["Reply with <strong>availability and rates</strong>."])}`,
  });

  const text = `New guide request

CONTACT
${textRows(contactRows)}

TRIP
${textRows([...tripRows, ["Special requests / notes", h.notes]])}

Reply to this email to write to the sender.`;

  return { subject: `New guide request – ${h.contactName} – ${h.tourDates}`, html, text };
}
