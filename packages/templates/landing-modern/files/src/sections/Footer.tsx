import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Instagram, Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        {/* Top: brand + newsletter */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
                <Sparkles className="size-4" />
              </span>
              <span className="text-lg font-semibold tracking-tight">YcTemplates</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Ready-to-use React + Tailwind + shadcn sections and pages you can drop into any project.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <div className="text-sm font-semibold">Product</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a className="hover:text-foreground" href="#features">Features</a></li>
                <li><a className="hover:text-foreground" href="#pricing">Pricing</a></li>
                <li><a className="hover:text-foreground" href="#templates">Templates</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a className="hover:text-foreground" href="#about">About</a></li>
                <li><a className="hover:text-foreground" href="#contact">Contact</a></li>
                <li><a className="hover:text-foreground" href="#careers">Careers</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold">Resources</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a className="hover:text-foreground" href="#docs">Docs</a></li>
                <li><a className="hover:text-foreground" href="#changelog">Changelog</a></li>
                <li><a className="hover:text-foreground" href="#support">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="max-w-sm">
            <div className="text-sm font-semibold">Stay in the loop</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Sign up for new components, templates, and releases.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                // handle subscribe
              }}
              className="mt-3 flex gap-2"
            >
              <Input type="email" placeholder="you@example.com" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} <span className="font-medium">YcTemplates</span>. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="GitHub" className="hover:text-foreground"><Github className="size-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter className="size-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-foreground"><Instagram className="size-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
