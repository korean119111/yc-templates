import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AppFAQ() {
  const faqs = [
    { q: "Is there a free version?", a: "Yes. You can start free and upgrade anytime." },
    { q: "Does it work offline?", a: "Core features work offline. Changes sync when you’re back online." },
    { q: "How is my data protected?", a: "We use industry-standard encryption. You control data export and deletion." },
  ]

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">FAQs</h2>
        <p className="mt-3 text-center text-muted-foreground">Everything you need to know.</p>

        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
