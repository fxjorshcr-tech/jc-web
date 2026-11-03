import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/** Tripadvisor-style bubble rating (five circles filled according to the rating). */
function Bubbles({ rating, className }: { rating: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-hidden>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <span key={i} className="relative inline-block size-[0.85em] rounded-full border-2 border-[#00AA6C] bg-white">
            <span className="absolute inset-0 rounded-full bg-[#00AA6C]" style={{ clipPath: `inset(0 ${100 - fill * 100}% 0 0)` }} />
          </span>
        );
      })}
    </span>
  );
}

interface Props {
  /** `pill`: one line for heroes and sidebars. `card`: larger block with headline. `inline`: text-sized, for captions and footers. */
  variant?: "pill" | "card" | "inline";
  /** Light text for dark backgrounds. */
  light?: boolean;
  className?: string;
}

export function TripadvisorBadge({ variant = "pill", light, className }: Props) {
  const { rating, count, url, platform } = site.reviews;
  const label = `${rating.toFixed(1)} out of 5 on ${platform}, ${count} reviews. Opens in a new tab.`;

  if (variant === "card") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(
          "group flex items-center gap-5 rounded-xl border p-5 transition-colors",
          light ? "border-cream/15 bg-cream/5 hover:bg-cream/10" : "border-border/70 bg-card hover:border-olive-300",
          className,
        )}
      >
        <span className={cn("font-serif text-4xl font-medium leading-none", light ? "text-cream" : "text-ink")}>{rating.toFixed(1)}</span>
        <span className="min-w-0">
          <Bubbles rating={rating} className="text-xl" />
          <span className={cn("mt-1 block text-sm font-semibold", light ? "text-cream" : "text-ink")}>
            {count} traveler reviews on {platform}
          </span>
          <span className={cn("block text-xs", light ? "text-olive-100/75" : "text-ink-soft")}>Rated by guests of our tours · read them all</span>
        </span>
      </a>
    );
  }

  if (variant === "inline") {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className={cn("inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline", className)}>
        <Bubbles rating={rating} className="text-base" />
        <span className={cn("font-semibold", light ? "text-cream" : "text-ink")}>{rating.toFixed(1)}</span>
        <span className={light ? "text-olive-100/80" : "text-ink-soft"}>
          · {count} reviews on {platform}
        </span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors",
        light ? "border-cream/30 bg-ink/30 text-cream backdrop-blur hover:bg-ink/45" : "border-border bg-white text-ink hover:border-olive-300",
        className,
      )}
    >
      <Bubbles rating={rating} className="text-base" />
      <span className="font-semibold">{rating.toFixed(1)}</span>
      <span className={light ? "text-cream/85" : "text-ink-soft"}>
        {count} reviews · {platform}
      </span>
    </a>
  );
}
