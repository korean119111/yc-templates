// src/sections/app/WallOfLove.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: "Jonathan Yombo",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.",
  },
  {
    name: "Yves Kalume",
    role: "GDE - Android",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote:
      "With no experience in webdesign I just redesigned my entire website in minutes thanks to Tailus.",
  },
  {
    name: "Yucel Faruksahan",
    role: "Tailkits Creator",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    quote:
      "Great work on tailfolio template. One of the best personal websites I’ve seen so far :)",
  },
  {
    name: "Anonymous author",
    role: "Doing something",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    quote:
      "I’m new to Tailwind. Tailus templates were easy to understand and customize for my use case.",
  },
  {
    name: "Shekinah Tshiokufila",
    role: "Senior Software Engineer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote:
      "Tailus is redefining the standard of web design—easy and efficient for those who love beauty.",
  },
  {
    name: "Oketa Fred",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "I absolutely love Tailus! Beautiful blocks that make great-looking sites a breeze.",
  },
  {
    name: "Zeki",
    role: "Founder of ChatExtend",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "Using TailsUI feels like unlocking a design superpower—simple and versatile.",
  },
  {
    name: "Joseph Kitheka",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    quote:
      "Huge time-saver. Flexible components let me craft unique UX quickly. Game changer.",
  },
  {
    name: "Khatab Wedaa",
    role: "MerakiUI Creator",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    quote:
      "Elegant, clean, responsive Tailwind components—perfect for a fast start.",
  },
  {
    name: "Rodrigo Aguilar",
    role: "TailwindAwesome Creator",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    quote:
      "Well-structured and beautifully designed blocks. Up and running in no time. ❤️",
  },
  {
    name: "Eric Ampire",
    role: "Mobile Engineer • GDE Android",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      "Easy, customizable, responsive templates. Support is great. Highly recommended.",
  },
  {
    name: "Roland Tubonge",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    quote:
      "So well designed that even with little design skill you can do miracles.",
  },
]

function chunk<T>(arr: T[], size: number) {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

const cols = chunk(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Loved by the Community</h2>
          <p className="mt-3 text-muted-foreground">
            What makers and developers say about us.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cols.map((col, colIdx) => (
            <div key={colIdx} className="space-y-3">
              {col.map(({ name, role, quote, image }, i) => {
                const initials = name
                  .split(" ")
                  .map((s) => s[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()
                return (
                  <Card key={i} className="border-1 shadow-none ">
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 p-6">
                      <Avatar className="size-9">
                        <AvatarImage alt={name} src={image} />
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>
                        <span className="block text-sm tracking-wide text-muted-foreground">
                          {role}
                        </span>
                        <blockquote className="mt-3">
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
