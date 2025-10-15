import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

type Testimonial = {
  name: string
  role?: string
  quote: string
  avatar?: string
  rating?: 1 | 2 | 3 | 4 | 5
}

const defaultItems: Testimonial[] = [
  {
    name: "Alex Johnson",
    role: "Homeowner",
    quote: "Clean install and great camera placement. I can view everything from my phone.",
    avatar: "https://i.pravatar.cc/100?img=14",
    rating: 5,
  },
  {
    name: "Taylor Smith",
    role: "Small Business Owner",
    quote: "They wired the PoE runs neatly and configured the NVR fast. Same-week scheduling!",
    avatar: "https://i.pravatar.cc/100?img=27",
    rating: 5,
  },
  {
    name: "Jordan Lee",
    role: "Property Manager",
    quote: "Clear night vision and reliable motion alerts. Tenants feel much safer.",
    avatar: "https://i.pravatar.cc/100?img=8",
    rating: 4,
  },
  {
    name: "Morgan Davis",
    role: "Contractor Partner",
    quote: "Professional team—survey, mounting, and app setup were all spot on.",
    avatar: "https://i.pravatar.cc/100?img=45",
    rating: 5,
  },
  {
    name: "Chris Walker",
    role: "Restaurant Owner",
    quote: "Coverage of entry, kitchen, and lot. Playback is smooth and easy to find clips.",
    avatar: "https://i.pravatar.cc/100?img=22",
    rating: 5,
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`size-4 ${i < n ? "fill-primary text-primary" : "text-muted-foreground"}`} />
      ))}
    </div>
  )
}

export default function TestimonialsMarquee({
  items = defaultItems,
  duration = 28, // seconds
  className = "",
}: {
  items?: Testimonial[]
  duration?: number
  className?: string
}) {
  // duplicate list to create a seamless loop
  const loop = [...items, ...items]
  return (
    <section id="testimonials" className={`px-4 py-16 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">
          What our clients say
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Real installs. Clean cabling, clear footage, and reliable support.
        </p>

        <div className="marquee mt-8">
          <div className="marquee-track" style={{ ["--marquee-duration" as any]: `${duration}s` }}>
            {loop.map((t, idx) => (
              <Card key={idx} className="mx-3 w-[320px] shrink-0">
                <CardContent className="p-6">
                  <Stars n={t.rating ?? 5} />
                  <p className="mt-3 leading-relaxed">“{t.quote}”</p>
                  <div className="mt-6 flex items-center gap-3">
                    <Avatar className="size-9">
                      <AvatarImage src={t.avatar} alt={t.name} />
                      <AvatarFallback>
                        {t.name.split(" ").map(s => s[0]).join("").slice(0,2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <div className="font-medium">{t.name}</div>
                      {t.role && <div className="text-muted-foreground">{t.role}</div>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
