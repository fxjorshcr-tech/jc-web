import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { optionalJourneys } from "@/data/tours";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/whatsapp";

/** Journeys without a page of their own: each one opens WhatsApp with its name already written. */
export function OptionalJourneys({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border border-border/70 bg-card p-6 sm:p-10", className)}>
      <p className="eyebrow">Optional journeys</p>
      <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
        More journeys, <em className="font-light">on request</em>
      </h2>
      <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
        Looking for something else? These journeys are arranged on request. Message JC on WhatsApp for details, availability and prices.
      </p>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {optionalJourneys.map((journey) => (
          <li key={journey.name} className="flex flex-col rounded-lg border border-border/70 bg-cream p-5 sm:p-6">
            <h3 className="text-xl leading-snug text-ink">{journey.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{journey.summary}</p>
            <a
              href={whatsappUrl(journey.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5b]"
            >
              <WhatsAppIcon className="size-4" /> Ask on WhatsApp
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
