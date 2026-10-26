import { Photo } from "@/components/photo";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  orientation?: "landscape" | "portrait" | "square";
}

const ASPECT = { landscape: "aspect-[4/3]", portrait: "aspect-[3/4]", square: "aspect-square" } as const;

/** Masonry-style gallery: each photo keeps its own orientation instead of being cropped to one ratio. */
export function Gallery({ images, className }: { images: GalleryImage[]; className?: string }) {
  return (
    <ul className={cn("columns-2 gap-3 sm:gap-4 md:columns-3 [&>li]:mb-3 sm:[&>li]:mb-4 [&>li]:break-inside-avoid", className)}>
      {images.map((img, i) => (
        <li key={img.src}>
          <figure>
            <div className={cn("relative overflow-hidden rounded-lg", ASPECT[img.orientation ?? "landscape"])}>
              <Photo src={img.src} alt={img.alt} sizes="(min-width: 768px) 33vw, 50vw" compact={i > 0} />
            </div>
            {img.caption && <figcaption className="mt-2 text-xs text-ink-soft">{img.caption}</figcaption>}
          </figure>
        </li>
      ))}
    </ul>
  );
}
