// src/sections/app/AppScreensAnimated.tsx
import { motion, useReducedMotion } from "framer-motion"

type Shot = { src: string; alt?: string }
type Props = {
  shots?: Shot[]
  speedSec?: number       // full sweep duration
  amplitude?: number      // px to travel left/right
  gap?: string            // gap between cards
}

export default function AppScreensAnimated({
  shots = [],
  speedSec = 10,
  amplitude = 40,
  gap = "1.5rem",
}: Props) {
  if (!shots.length) return null
  const reduce = useReducedMotion()

  // motion settings
  const animate = reduce
    ? {}
    : {
        x: [ -amplitude, amplitude, -amplitude ],
        transition: { duration: speedSec, repeat: Infinity, ease: "easeInOut" as const },
      }

  return (
    <section id="screens" className="px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">Screenshots</h2>
        <p className="mt-3 text-center text-muted-foreground">A glimpse of the experience.</p>

        {/* Row 1 */}
        <div className="mt-10 overflow-hidden">
          <motion.div
            style={{ display: "grid", gridAutoFlow: "column", gap }}
            animate={animate}
          >
            {shots.map((s, i) => (
              <figure key={`row1-${i}`} className="w-[320px] overflow-hidden rounded-2xl border bg-card shadow-sm">
                <img
                  src={s.src}
                  alt={s.alt ?? `App screenshot ${i + 1}`}
                  className="block h-auto w-full object-cover"
                  loading="lazy"
                />
              </figure>
            ))}
          </motion.div>
        </div>

      
      </div>
    </section>
  )
}
