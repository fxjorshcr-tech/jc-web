import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialCard({ testimonial, className, large }: { testimonial: Testimonial; className?: string; large?: boolean }) {
  return (
    <figure className={cn("flex h-full flex-col rounded-xl border border-border/70 bg-card p-6 sm:p-8", className)}>
      <Quote className="size-6 text-teal-500" strokeWidth={1.5} />
      <blockquote className={cn("mt-4 flex-1 font-sans italic leading-relaxed text-ink", large ? "text-xl sm:text-2xl" : "text-lg")}>
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-border/70 pt-4 text-sm">
        <span className="block font-semibold text-ink">{testimonial.name}</span>
        <span className="text-ink-soft">
          {testimonial.location}
          {testimonial.year ? ` · ${testimonial.year}` : ""}
        </span>
      </figcaption>
    </figure>
  );
}
