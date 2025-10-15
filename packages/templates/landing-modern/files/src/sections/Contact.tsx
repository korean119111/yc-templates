import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Tell us a bit more (min 10 characters)"),
  consent: z.boolean().refine(v => v, "Please accept to be contacted"),
})

type ContactValues = z.infer<typeof ContactSchema>

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const form = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "", consent: false },
  })

  async function onSubmit(values: ContactValues) {
    setSubmitting(true)
    try {
      // await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) })
      await new Promise(r => setTimeout(r, 700)) // demo
      toast.success("Message sent!", { description: "We’ll get back to you shortly." })
      form.reset()
    } catch {
      toast.error("Something went wrong", { description: "Please try again later." })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <span className="inline-block rounded-full border px-3 py-1 text-xs text-muted-foreground">Contact</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Let’s talk</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Questions, wholesale, collaborations, or custom orders — we’d love to hear from you.
          </p>
        </div>

        {/* Single centered form (no right side) */}
        <div className="mt-10 mx-auto max-w-2xl">
          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField name="name" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl><Input placeholder="Jane Doe" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                  <FormField name="email" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl><Input type="email" placeholder="jane@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField name="phone" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone (optional)</FormLabel>
                      <FormControl><Input placeholder="+1 555 555 5555" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                  <FormField name="subject" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl><Input placeholder="Wholesale inquiry" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                </div>

                <FormField name="message" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl><Textarea rows={6} placeholder="Tell us about your request..." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>

                <Separator />

                <FormField
                  name="consent"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex items-start gap-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="leading-none">
                        <FormLabel className="font-normal text-sm text-muted-foreground">
                          I agree to be contacted about my inquiry and understand my data may be processed to respond.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full md:w-auto" disabled={submitting}>
                  {submitting ? "Sending..." : "Send message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
