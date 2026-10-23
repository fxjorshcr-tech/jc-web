import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { MobileNav } from "@/components/site/mobile-nav";
import { nav, secondaryNav } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-cream/90 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
        <Logo className="shrink-0" />
        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-olive-800 xl:text-[0.8rem]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/tours">Book a Tour</Link>
          </Button>
          <MobileNav items={[...nav, ...secondaryNav]} />
        </div>
      </div>
    </header>
  );
}
