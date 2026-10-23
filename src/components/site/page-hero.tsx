import { Photo } from "@/components/photo";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image?: { src: string; alt: string };
  children?: React.ReactNode;
  className?: string;
}

/** Editorial page opener: text on cream, optional photo on the right. */
export function PageHero({ eyebrow, title, intro, image, children, className }: PageHeroProps) {
  return (
    <section className={cn("border-b border-border/70", className)}>
      <div className={cn("container-site grid gap-10 py-14 sm:py-20", image && "lg:grid-cols-12 lg:items-end")}>
        <div className={cn(image ? "lg:col-span-7" : "max-w-3xl")}>
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="text-4xl text-ink sm:text-5xl lg:text-6xl">{title}</h1>
          {intro && <div className="prose-site mt-6 max-w-2xl">{intro}</div>}
          {children && <div className="mt-8">{children}</div>}
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:col-span-5 lg:aspect-[5/4]">
            <Photo src={image.src} alt={image.alt} sizes="(min-width: 1024px) 40vw, 100vw" priority />
          </div>
        )}
      </div>
    </section>
  );
}
