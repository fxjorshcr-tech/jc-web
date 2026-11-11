import { Droplets } from "lucide-react";
import { Photo, photoExists } from "@/components/photo";
import { cn } from "@/lib/utils";

const BADGE = "badges/travelers-against-plastic.png";

/** The Travelers Against Plastic badge, or a refill icon until the badge file is added to /public/images/badges. */
export function TapBadge({ className, sizes }: { className?: string; sizes: string }) {
  if (photoExists(BADGE)) {
    return (
      <span className={cn("relative block shrink-0 overflow-hidden rounded-md", className)}>
        <Photo src={BADGE} alt="Travelers Against Plastic badge" sizes={sizes} compact />
      </span>
    );
  }
  return (
    <span aria-hidden className={cn("grid shrink-0 place-items-center rounded-md bg-cream/10 text-olive-200", className)}>
      <Droplets className="size-1/2" strokeWidth={1.5} />
    </span>
  );
}
