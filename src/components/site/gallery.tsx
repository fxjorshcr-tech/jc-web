import { Photo } from "@/components/photo";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export function Gallery({ images, className }: { images: GalleryImage[]; className?: string }) {
  return (
    <ul className={cn("grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3", className)}>
      {images.map((img, i) => (
        <li key={img.src} className={cn(i % 5 === 0 && "col-span-2 row-span-2")}>
          <figure>
            <div className={cn("relative overflow-hidden rounded-lg", i % 5 === 0 ? "aspect-square" : "aspect-[4/3]")}>
              <Photo src={img.src} alt={img.alt} sizes="(min-width: 768px) 33vw, 50vw" compact={i % 5 !== 0} />
            </div>
            {img.caption && <figcaption className="mt-2 text-xs text-ink-soft">{img.caption}</figcaption>}
          </figure>
        </li>
      ))}
    </ul>
  );
}
