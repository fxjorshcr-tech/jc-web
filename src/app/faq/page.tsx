import type { Metadata } from "next";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBand } from "@/components/site/cta-band";
import { Inline } from "@/components/site/inline";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { faq } from "@/data/faq";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about booking, payment, children, meals, getting to Montezuma, drinking water and what makes JC's Journeys tours sustainable.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "FAQ | JC's Journeys", description: "Frequently asked questions about our tours in Montezuma.", url: "/faq" },
};

export default function FaqPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") },
    })),
  };
  return (
    <>
      <JsonLd data={faqLd} />
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Questions, <em className="font-light">answered</em>
          </>
        }
        intro={
          <p>
            Everything we are usually asked before a tour. Anything else? Email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        }
      />
      <section className="container-site grid gap-12 py-16 lg:grid-cols-12 sm:py-24">
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="border-t border-border">
            {faq.map((item) => (
              <AccordionItem key={item.id} value={item.id} id={item.id} className="scroll-mt-28">
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="prose-site">
                    <Inline text={item.answer} />
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <aside className="lg:col-span-3 lg:col-start-10">
          <div className="rounded-xl bg-olive-100 p-6 lg:sticky lg:top-24">
            <p className="eyebrow">Quick links</p>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold text-ink">
              <li>
                <Link href="/tours" className="hover:text-olive-800">
                  See the tours
                </Link>
              </li>
              <li>
                <Link href="/blog/getting-to-montezuma" className="hover:text-olive-800">
                  How to get to Montezuma
                </Link>
              </li>
              <li>
                <Link href="/hire-a-guide" className="hover:text-olive-800">
                  Hire JC as a private guide
                </Link>
              </li>
              <li>
                <Link href="/recommendations" className="hover:text-olive-800">
                  Hotels we recommend
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>
      <div className="pb-4">
        <CtaBand />
      </div>
    </>
  );
}
