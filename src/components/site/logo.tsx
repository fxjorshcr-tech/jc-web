import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" className={cn("group inline-flex flex-col leading-none", className)} aria-label="JC's Journeys – home">
      <span className={cn("font-serif text-2xl font-medium tracking-tight", light ? "text-cream" : "text-ink")}>
        JC&rsquo;s <span className="italic font-light">Journeys</span>
      </span>
      <span className={cn("mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em]", light ? "text-olive-200" : "text-olive-700")}>
        Montezuma · Costa Rica
      </span>
    </Link>
  );
}
