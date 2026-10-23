import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Placeholder } from "@/components/placeholder";
import { cn } from "@/lib/utils";

interface PhotoProps {
  /** Path relative to /public/images, e.g. "tours/curu/hero.jpg" */
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  compact?: boolean;
  /** Placeholder label position while the photo is missing. */
  align?: "center" | "top";
}

function exists(src: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "images", src));
  } catch {
    return false;
  }
}

/**
 * Server component. Renders the real photo with next/image once the file exists in /public/images,
 * otherwise a labelled placeholder. The wrapping element must be `relative` with a fixed aspect ratio.
 */
export function Photo({ src, alt, className, sizes = "100vw", priority, compact, align }: PhotoProps) {
  if (exists(src)) {
    return (
      <Image
        src={`/images/${src}`}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", className)}
      />
    );
  }
  return <Placeholder src={src} alt={alt} fill compact={compact} align={align} className={className} />;
}
