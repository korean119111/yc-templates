import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star } from "lucide-react"

type Testimonial = {
  name: string
  role?: string
  quote: string
  avatar?: string
  rating?: 1 | 2 | 3 | 4 | 5
}

const gridItems: Testimonial[] = [
  { name: "Alex Johnson", role: "Verified Customer", quote: "Fast delivery and the finish is excellent.", avatar: "https://i.pravatar.cc/100?img=14", rating: 5 },
  { name: "Taylor Smith", role: "Repeat Buyer", quote: "Sizing was spot-on. Easy returns policy.", avatar: "https://i.pravatar.cc/100?img=27", rating: 5 },
  { name: "Jordan Lee", role: "Interior Designer", quote: "Clients loved the materials and look.", avatar: "https://i.pravatar.cc/100?img=8", rating: 4 },
  { name: "Morgan Davis", role: "Boutique Partner", quote: "Thoughtful packaging and consistent quality.", avatar: "https://i.pravatar.cc/100?img=45", rating: 5 },
]

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`size-4 ${i < n ? "fill-primary text-primary" : "text-muted-foreground"}`} />
      ))}
    </div>
  )
}

export default function TestimonialsTwoColumn({
  highlight = {
    name: "Kendall Brooks",
    role: "Founder",
    quote: "We source pieces meant to last beyond trends. Materials, finishes, and comfort all matter — and it shows in every order.",
    avatar: "https://i.pravatar.cc/100?img=41",
    rating: 5,
  },
  items = gridItems,
}: {
  highlight?: Testimonial
  items?: Testimonial[]
}) {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2">
        {/* Left: Highlight card */}
        <Card className="h-full border-primary/30">
          <CardHeader className="space-y-4">
            <Quote className="size-6 text-primary" />
            {typeof highlight.rating === "number" && <Stars n={highlight.rating} />}
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-lg md:text-xl leading-relaxed">“{highlight.quote}”</p>
            <div className="mt-6 flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarImage src={highlight.avatar} />
                <AvatarFallback>
                  {highlight.name.split(" ").map(s => s[0]).join("").slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{highlight.name}</div>
                {highlight.role && <div className="text-sm text-muted-foreground">{highlight.role}</div>}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right: Grid of smaller cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((t, i) => (
            <Card key={i} className="h-full">
              <CardContent className="p-6">
                <Stars n={t.rating ?? 5} />
                <p className="mt-3 leading-relaxed text-sm">“{t.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar className="size-9">
                    <AvatarImage src={t.avatar} />
                    <AvatarFallback>
                      {t.name.split(" ").map(s => s[0]).join("").slice(0, 2).toUpperCase()}
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
    </section>
  )
}
