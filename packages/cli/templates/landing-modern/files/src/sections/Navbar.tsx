import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Menu, Shield } from "lucide-react"
import clsx from "clsx"

type NavLink = { label: string; href: string }
type CTA = { label: string; href: string }

export default function Navbar({
  brand = "YcTemplates",
  links = [
    { label: "about us", href: "#about" },
    { label: "How we work", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  ctaSecondary = { label: "Get a quote", href: "#contact" },
  ctaPrimary = { label: "Call now", href: "tel:+15554249000" },
}: {
  brand?: string
  links?: NavLink[]
  ctaSecondary?: CTA
  ctaPrimary?: CTA
}) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full backdrop-blur transition-colors",
        scrolled ? "border-b bg-background/80" : "bg-background/60"
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-lg bg-primary/10 text-primary">
            <Shield className="size-4" />
          </span>
          <span className="text-sm font-semibold tracking-tight">{brand}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <a href={ctaSecondary.href}>{ctaSecondary.label}</a>
          </Button>
          <Button asChild>
            <a href={ctaPrimary.href}>{ctaPrimary.label}</a>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="mt-6 flex flex-col gap-4">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="text-sm">
                    {l.label}
                  </a>
                ))}
                <Separator className="my-2" />
                <Button variant="ghost" asChild>
                  <a href={ctaSecondary.href}>{ctaSecondary.label}</a>
                </Button>
                <Button asChild>
                  <a href={ctaPrimary.href}>{ctaPrimary.label}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
