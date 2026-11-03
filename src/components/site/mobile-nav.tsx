"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/site/whatsapp-button";
import { site } from "@/data/site";

interface Item {
  href: string;
  label: string;
}

export function MobileNav({ items }: { items: Item[] }) {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The header uses backdrop-filter, which turns it into the containing block for fixed descendants
  // and would shrink the panel to the header's height. Rendering into <body> avoids that.
  const panel =
    open && mounted
      ? createPortal(
          <div id="mobile-menu" className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto bg-cream px-5 pb-10 pt-6 sm:px-8 lg:hidden">
            <nav aria-label="Mobile" className="flex flex-col divide-y divide-border">
              {items.map((item) => (
                <Link key={item.href} href={item.href} className="py-4 font-serif text-2xl text-ink hover:text-olive-800">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <Button asChild size="lg">
                <Link href="/tours">Book a Tour</Link>
              </Button>
              <WhatsAppLink className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1ebe5b]">
                WhatsApp {site.whatsapp.display}
              </WhatsAppLink>
              <a href={`mailto:${site.email}`} className="text-center text-sm text-ink-soft underline-offset-4 hover:underline">
                {site.email}
              </a>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-10 items-center justify-center rounded-md text-ink hover:bg-ink/5"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {panel}
    </div>
  );
}
