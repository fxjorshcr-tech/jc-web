import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Inline } from "@/components/site/inline";
import type { PostFaq } from "@/data/posts";

/** FAQ block at the end of a post. The matching FAQPage JSON-LD is emitted by the page. */
export function PostFaqSection({ items }: { items: PostFaq[] }) {
  if (items.length === 0) return null;
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-28 border-t border-border/70 pt-10">
      <p className="eyebrow">Questions we get asked</p>
      <h2 id="faq-heading" className="mt-3 text-2xl text-ink sm:text-3xl">
        Frequently asked questions
      </h2>
      <Accordion type="single" collapsible className="mt-6 border-t border-border">
        {items.map((item, i) => (
          <AccordionItem key={item.question} value={`faq-${i}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              <p className="prose-site">
                <Inline text={item.answer} />
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
