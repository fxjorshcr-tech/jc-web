import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, intro, align = "left", className, as = "h2", light }: SectionHeadingProps) {
  const Tag = as;
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className={cn("eyebrow mb-3", light && "!text-olive-300")}>{eyebrow}</p>}
      <Tag className={cn(as === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl", light ? "text-cream" : "text-ink")}>
        {title}
      </Tag>
      {intro && <div className={cn("prose-site mt-5", light && "text-olive-100/85")}>{intro}</div>}
    </div>
  );
}
