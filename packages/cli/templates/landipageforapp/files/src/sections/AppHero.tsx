import * as React from "react"
import { SendHorizonal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

// -- tiny replacements for TextEffect & AnimatedGroup (no external libs) --
function TextEffect({
  as = "div",
  children,
  className,
  delay = 0,
  per = "block", // "block" | "line"
}: {
  as?: "div" | "h1" | "p"
  children: React.ReactNode
  className?: string
  delay?: number
  per?: "block" | "line"
}) {
  const base: Variants = {
    hidden: { opacity: 0, y: 12, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", bounce: 0.3, duration: 1.2 },
    },
  }

  const Comp =
    as === "h1" ? motion.h1 :
    as === "p"  ? motion.p  :
                   motion.div

  if (per === "line" && typeof children === "string") {
    const lines = children.split("\n")
    return (
      <Comp className={className}>
        {lines.map((l, i) => (
          <motion.span
            key={i}
            className="block"
            variants={base}
            initial="hidden"
            animate="visible"
            transition={{ delay: delay + i * 0.15 }}
          >
            {l}
          </motion.span>
        ))}
      </Comp>
    )
  }

  return (
    <Comp
      className={className}
      variants={base}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {children}
    </Comp>
  )
}

function AnimatedGroup({
  children,
  className,
  delayChildren = 0.75,
  staggerChildren = 0.05,
}: {
  children: React.ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
}) {
  return (
    <motion.div
      className={className}
      variants={{ visible: { transition: { delayChildren, staggerChildren } } }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  )
}


// Store badges
function AppStoreBadge({ href = "#", label = "Download on the App Store" }: { href?: string; label?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-medium transition hover:bg-muted/50"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M16.365 1.43c0 1.14-.43 2.17-1.16 2.93-.73.77-1.81 1.3-2.9 1.2-.1-1.1.49-2.25 1.17-2.95.78-.84 2.13-1.45 2.89-1.18zM20.84 17.5c-.51 1.18-1.11 2.26-1.88 3.27-.97 1.3-2.09 2.92-3.63 2.96-1.37.03-1.72-.88-3.6-.88-1.88 0-2.26.86-3.6.9-1.53.04-2.7-1.42-3.67-2.72C2.24 18.5.8 14.44 2.58 11.63c.97-1.55 2.7-2.53 4.57-2.56 1.43-.03 2.78.96 3.6.96.81 0 2.48-1.18 4.19-1.01.71.03 2.72.28 4 2.13-.1.06-2.37 1.39-2.1 4.35.25 2.77 2.38 3.62 2.01 4z"
          fill="currentColor"
        />
      </svg>
      {label}
    </a>
  )
}

function PlayStoreBadge({ href = "#", label = "Get it on Google Play" }: { href?: string; label?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-medium transition hover:bg-muted/50"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 2l15 10L3 22V2zm16.5 8.5L21 12l-1.5 1.5V10.5z" fill="currentColor" />
      </svg>
      {label}
    </a>
  )
}

export default function AppHero() {
  return (
    <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <TextEffect as="h1" className="text-balance text-5xl font-medium md:text-6xl">
              Healthier daily routine
            </TextEffect>

            <TextEffect
              as="p"
              per="line"
              delay={0.4}
              className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground"
            >
              Tailwindcss highly customizable components for building modern websites and
              applications that look and feel the way you mean it.
            </TextEffect>

            <AnimatedGroup className="mt-12">
              {/* Store badges (replaces email form) */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <AppStoreBadge href="#" />
                <PlayStoreBadge href="#" />
                <Button variant="ghost" size="sm" className="gap-2">
                  <SendHorizonal className="size-4" /> Preview
                </Button>
              </div>

              {/* phone mock / preview block */}
              <div
                aria-hidden
                className="relative mx-auto mt-32 max-w-2xl text-left [--ring:theme(colors.primary.DEFAULT)]"
              >
                <div className="from-primary/50 dark:from-primary/25 absolute inset-0 -z-10 bg-[radial-gradient(var(--ring)_0%,transparent_55%)] opacity-30" />
                <div className="border-border/50 bg-background absolute inset-0 mx-auto w-80 -translate-x-3 -translate-y-12 rounded-[2rem] border p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:-translate-x-6">
                  <div className="relative h-96 overflow-hidden rounded-[1.5rem] border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] before:opacity-50" />
                </div>

                <div className="mx-auto w-80 translate-x-4 rounded-[2rem] border border-border/50 bg-muted p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] dark:bg-background/50 sm:translate-x-8">
                  <div className="space-y-2 overflow-hidden rounded-[1.5rem] border bg-background p-2 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                    <AppComponent />
                    <div className="rounded-[1rem] bg-muted p-4 pb-16 dark:bg-white/5" />
                  </div>
                </div>

                <div className="absolute inset-0 mix-blend-overlay [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-5" />
              </div>
            </AnimatedGroup>
          </div>
        </div>
      </section>

  
    </main>
  )
}

const AppComponent = () => {
  return (
   <div className="relative space-y-3 rounded-[1rem] bg-white/5 p-4">
  <img
    src="/apphero.png" // rename the downloaded file to match
    alt="Steps progress card"
    className="w-full rounded-[1rem] border"
    loading="lazy"
    decoding="async"
  />
</div>

  )
}
