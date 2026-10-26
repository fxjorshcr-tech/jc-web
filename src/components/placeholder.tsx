import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const TONES = [
  "from-olive-400 via-olive-600 to-teal-700",
  "from-teal-400 via-teal-600 to-olive-800",
  "from-olive-500 via-olive-700 to-moss",
  "from-teal-500 via-olive-600 to-olive-900",
  "from-olive-600 via-teal-700 to-teal-900",
] as const;

function toneFor(key: string) {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return TONES[h % TONES.length];
}

export interface PlaceholderProps {
  /** Expected file path relative to /public/images, e.g. "tours/nocturno/hero.jpg" */
  src: string;
  alt: string;
  className?: string;
  /** When true the placeholder fills its (relatively positioned) parent. */
  fill?: boolean;
  /** Smaller label for thumbnails. */
  compact?: boolean;
  /** Where to put the label. Use "top" when text is overlaid on the lower part of the image (heroes). */
  align?: "center" | "top";
}

/**
 * Visual stand-in for a photo that has not been added yet.
 * Shows the expected file name so the photos can be dropped in later without touching code.
 */
export function Placeholder({ src, alt, className, fill, compact, align = "center" }: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative overflow-hidden bg-gradient-to-br text-cream",
        toneFor(src),
        fill ? "absolute inset-0" : "h-full w-full",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]"
      />
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center gap-2 text-center",
          align === "top" ? "justify-start pt-24 sm:pt-28" : "justify-center",
          compact ? "p-2" : "p-4",
        )}
      >
        <ImageIcon className={cn("opacity-80", compact ? "size-4" : "size-6")} strokeWidth={1.5} />
        <span
          className={cn(
            "max-w-full break-all rounded bg-ink/40 px-2 py-1 font-mono leading-tight backdrop-blur-sm",
            compact ? "text-[0.6rem]" : "text-xs",
          )}
        >
          images/{src}
        </span>
        {!compact && <span className="max-w-xs text-xs leading-snug opacity-80">{alt}</span>}
      </div>
    </div>
  );
}
