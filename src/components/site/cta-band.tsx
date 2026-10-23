import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function CtaBand({
  title = "Ready to plan your journey?",
  text = "Tell us the tour, your date and the size of your group. We reply within 24 hours with availability and a quote.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-site">
      <div className="relative overflow-hidden rounded-2xl bg-teal-700 px-6 py-14 text-cream sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 size-72 rounded-full bg-gold-400/25 blur-3xl"
        />
        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <p className="eyebrow !text-gold-300">Book a tour</p>
            <h2 className="mt-3 text-3xl text-cream sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-teal-100/90">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <Button asChild size="lg" variant="light">
              <Link href="/tours">Choose a tour</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-cream/40 text-cream hover:border-cream hover:bg-cream/10">
              <a href={`mailto:${site.email}`}>Email us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
