import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Light variant for dark backgrounds. */
  light?: boolean;
  /** Show the full logo (mark + "journeys" wordmark) instead of mark + text. */
  full?: boolean;
}

export function Logo({ className, light = false, full = false }: LogoProps) {
  if (full) {
    return (
      <Link href="/" className={cn("inline-block", className)} aria-label="JC's Journeys – home">
        <Image
          src={light ? "/images/brand/logo-full-light.png" : "/images/brand/logo-full.png"}
          alt="JC's Journeys"
          width={968}
          height={1240}
          className="h-auto w-36"
        />
      </Link>
    );
  }
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)} aria-label="JC's Journeys – home">
      <Image src="/images/brand/logo-mark.png" alt="" width={958} height={959} className="size-11 shrink-0" priority />
      <span className="flex flex-col leading-none">
        <span className={cn("font-serif text-[1.35rem] font-medium tracking-tight", light ? "text-cream" : "text-ink")}>
          JC&rsquo;s Journeys
        </span>
        <span className={cn("mt-1 text-[0.6rem] font-bold uppercase tracking-[0.22em]", light ? "text-olive-300" : "text-teal-600")}>
          Montezuma · Costa Rica
        </span>
      </span>
    </Link>
  );
}
