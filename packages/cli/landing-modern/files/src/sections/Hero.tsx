import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"

type Props = {
  eyebrow?: string
  line1?: string
  line2?: string
  line3?: string
  subtitle?: string
  screenshotSrc?: string
  brands?: string[]
}

export default function Hero({
 eyebrow="Certified Installers", 
  line1="Smart Security",
  line2="Camera Systems",
  line3="for Home & Business",
  subtitle="Design, supply, and install CCTV, doorbell cams, and NVRs. Pro wiring, remote monitoring, and same-week setup.",
  screenshotSrc="/hero.png",
  brands=["Ring", "Arlo", "Hikvision", "Ubiquiti"]
  

}: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.primary/10),transparent_60%)]" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        {/* Left: copy */}
        <div>
          <div className="mb-4">
            {/* <Badge variant="secondary" className="rounded-full">{eyebrow}</Badge> */}
          </div>

          <h1 className="font-bold tracking-tight text-4xl md:text-6xl">
            <span className="block">{line1}</span>
            <span className="block">{line2}</span>
            <span className="block">{line3}</span>
          </h1>

          <p className="mt-4 max-w-xl text-muted-foreground">{subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" className="gap-2" asChild>
              <a href="#">
                Contact<ArrowRight className="size-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#">
                <Play className="size-4" />
               Location
              </a>
            </Button>
          </div>

          {/* Trusted by */}
          {!!brands.length && (
            <div className="mt-10">
              <p className="mb-3 text-sm text-muted-foreground">Trusted by teams at :</p>
              <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
                {brands.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <span className="font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: tilted app mock / screenshot */}
        <div className="relative">
          <div className="mx-auto w-full max-w-[560px]">
            <div className="relative overflow-hidden rounded-[22px] border bg-card shadow-xl rotate-2">
              {/* top window bar */}
              {/* <div className="flex items-center gap-2 border-b px-4 py-3">
                <div className="size-2.5 rounded-full bg-red-400" />
                <div className="size-2.5 rounded-full bg-yellow-400" />
                <div className="size-2.5 rounded-full bg-green-400" />
                <div className="ml-3 h-5 w-28 rounded bg-muted" />
              </div> */}

              {screenshotSrc ? (
                <img src={screenshotSrc} alt="App screenshot" className="block w-full" />
              ) : (
                // lightweight mock UI when no screenshot provided
                <div className="grid grid-cols-[220px_1fr]">
                  {/* sidebar */}
                  <div className="bg-muted/30 p-4 border-r">
                    <div className="mb-2 h-8 w-28 rounded-md bg-muted" />
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div key={i} className="mb-2 h-4 w-32 rounded bg-muted" />
                    ))}
                    <div className="mt-4 h-4 w-20 rounded bg-muted" />
                    <div className="h-4 w-28 rounded bg-muted mt-1" />
                  </div>
                  {/* content */}
                  <div className="p-6 space-y-4">
                    <div className="h-6 w-48 rounded bg-muted" />
                    <div className="h-4 w-80 rounded bg-muted" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-28 rounded-lg border bg-background" />
                      <div className="h-28 rounded-lg border bg-background" />
                    </div>
                    <div className="h-56 rounded-xl border bg-background" />
                  </div>
                </div>
              )}
            </div>
            {/* ground shadow */}
            <div className="mx-auto mt-6 h-6 w-3/4 rounded-full bg-black/5 blur-md" />
          </div>
        </div>
      </div>
    </section>
  )
}
