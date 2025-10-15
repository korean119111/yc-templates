// src/sections/AppFeaturesAlt.tsx
import { Activity, DraftingCompass, Mail, Zap } from "lucide-react"

type Props = {
  title?: string
  blurb?: string
  darkImg?: string
  lightImg?: string
}

export default function AppFeatures({
  title = "Built for scaling teams",
  blurb = "Get support that grows with you—fast responses, deep expertise, and production-grade guidance.",
  darkImg = "/payments.png",
  lightImg = "/appFeat.png",
}: Props) {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          {/* Left column: copy + bullets */}
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-4xl font-semibold lg:text-5xl">{title}</h2>
              <p className="mt-6 text-muted-foreground">{blurb}</p>
            </div>

            <ul className="mt-8 divide-y border-y [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&>li]:py-3">
              <li>
                <Mail className="size-5" />
                Email and web support
              </li>
              <li>
                <Zap className="size-5" />
                Fast response time
              </li>
              <li>
                <Activity className="size-5" />
                Monitoring and analytics
              </li>
              <li>
                <DraftingCompass className="size-5" />
                Architectural review
              </li>
            </ul>
          </div>

          {/* Right column: image frame */}
          <div className="relative rounded-3xl border border-border/50 p-3 lg:col-span-3">
            <div className="relative rounded-2xl bg-gradient-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700">
              {/* swap light/dark images */}
              <img
                src={darkImg}
                alt="product illustration (dark)"
                className="hidden rounded-[15px] dark:block"
                loading="lazy"
                decoding="async"
              />
              <img
                src={lightImg}
                alt="product illustration (light)"
                className="block rounded-[15px] shadow dark:hidden"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
