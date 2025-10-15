import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

type StoryProps = {
  eyebrow?: string
  title?: string
  paragraph?: string
  imageSrc: string
  imageAlt?: string
  reverse?: boolean // set true to put image on the left
  cta?: { label: string; href?: string }
  className?: string
}

export default function Story({
  eyebrow = "About us",
  title = "Expert security camera installation, done right",
  paragraph = "We design and install CCTV systems tailored to your property. From on-site survey and camera placement to PoE cabling, NVR configuration, and mobile app setup—we deliver clean installs, clear footage, and dependable monitoring.",
  imageSrc,
  imageAlt = "Technician installing a PoE security camera",
  reverse = false,
  cta,
  className,
}: StoryProps) {
  return (
    <section id="about" className={clsx("px-4 py-16 md:py-24", className)}>
      <div
        className={clsx(
          "mx-auto grid w-full max-w-6xl items-center gap-10 md:gap-14",
          reverse ? "md:grid-cols-[1fr_1.1fr]" : "md:grid-cols-[1.1fr_1fr]"
        )}
      >
        {/* Text */}
        <div className={clsx("order-2 md:order-1", reverse && "md:order-2")}>
          {eyebrow && (
            <Badge variant="secondary" className="mb-3">
              {eyebrow}
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {paragraph}
          </p>

          {cta && (
            <div className="mt-6">
              <Button asChild>
                <a href={cta.href ?? "#"}>{cta.label}</a>
              </Button>
            </div>
          )}
        </div>

        {/* Image */}
        <div className={clsx("order-1 md:order-2", reverse && "md:order-1")}>
          <div className="relative overflow-hidden rounded-2xl border bg-card shadow-sm">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="block w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
