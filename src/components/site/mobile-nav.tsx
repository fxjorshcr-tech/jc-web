"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

interface Item {
  href: string;
  label: string;
}

export function MobileNav({ items }: { items: Item[] }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto bg-cream px-5 pb-10 pt-6 sm:px-8">
          <nav aria-label="Mobile" className="flex flex-col divide-y divide-border">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-4 font-serif text-2xl text-ink hover:text-olive-800"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-4">
            <Button asChild size="lg">
              <Link href="/tours">Book a Tour</Link>
            </Button>
            <a href={`mailto:${site.email}`} className="text-center text-sm text-ink-soft underline-offset-4 hover:underline">
              {site.email}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
