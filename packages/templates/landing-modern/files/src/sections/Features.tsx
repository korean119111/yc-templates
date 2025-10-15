import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, ShieldCheck, Cable, Sparkles } from "lucide-react"

type Feature = { title: string; desc: string; icon: React.ReactNode }

const features: Feature[] = [
  {
    title: "Same-week installation",
    desc: "On-site survey and fast scheduling to get you protected quickly.",
    icon: <Truck className="size-5" />,
  },
  {
    title: "Licensed & insured",
    desc: "Certified installers. Code-compliant placement and mounting.",
    icon: <ShieldCheck className="size-5" />,
  },
  {
    title: "Clean PoE cabling",
    desc: "Neat runs, labeled lines, and tidy racks for reliable networks.",
    icon: <Cable className="size-5" />,
  },
  {
    title: "Remote monitoring setup",
    desc: "NVR configuration, mobile app access, and smart alerts.",
    icon: <Sparkles className="size-5" />,
  },
]

export default function Features() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <Badge variant="secondary">Why choose us</Badge>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Professional security, done right
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          From site survey to handover, we design, install, and configure camera systems that
          fit your property and budget—with clean cabling and clear, reliable footage.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <Card key={f.title} className="h-full transition hover:shadow-sm">
            <CardHeader className="flex-row items-center gap-3">
              <div className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                {f.icon}
              </div>
              <CardTitle>{f.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{f.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
