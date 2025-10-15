import Navbar from "@/sections/Navbar"

import { Separator } from "@/components/ui/separator"
import AppHero from "@/sections/AppHero"
import AppFeatures from "@/sections/AppFeatures"
import AppScreens from "@/sections/AppScreens"
import AppFAQ from "@/sections/AppFAQ"
import Footer from "@/sections/Footer"
import WallOfLoveSection from "@/sections/WallOfLove"

export default function LandingApp() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <Navbar brand="YcTemplates" />
      <AppHero />
      <Separator />
      <AppFeatures />
      <AppScreens
        shots={[
          { src: "/twoshot.png", alt: "Home" },
          { src: "/oneshot.png", alt: "Insights" },
          { src: "/threeshot.png", alt: "Sharing" },
        ]}
      />
      <AppFAQ />
      <WallOfLoveSection />

      <Footer />
    </main>
  )
}
