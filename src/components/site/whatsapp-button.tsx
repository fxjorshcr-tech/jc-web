import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * Floating WhatsApp button, visible on every page. Plain anchor (no JS) so it works before hydration
 * and is crawlable as a contact point.
 */
export function WhatsAppFloating() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp, ${site.whatsapp.display}`}
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 items-center gap-2.5 rounded-full bg-[#25D366] pl-3.5 pr-4 text-sm font-semibold text-white shadow-lg shadow-ink/20 transition-transform hover:scale-[1.03] hover:bg-[#1ebe5b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

/** Inline WhatsApp link with the number, for footers and contact blocks. */
export function WhatsAppLink({ className, message, children }: { className?: string; message?: string; children?: React.ReactNode }) {
  return (
    <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className={className}>
      <WhatsAppIcon /> {children ?? site.whatsapp.display}
    </a>
  );
}
