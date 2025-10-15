import Hero from "@/sections/Hero"
import Features from "@/sections/Features"
import { Separator } from "@/components/ui/separator"
import Navbar from "@/sections/Navbar"
import Story from "@/sections/Story"
import TestimonialsMarquee from "@/sections/TestimonialsMarquee"
//import TestimonialsTwoColumn from "@/sections/TestimonialsTwoColumn"
import { Toaster } from "sonner"
import Contact from "@/sections/Contact"
import Footer from "@/sections/Footer"

export default function LandingModern() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
        <Navbar
        // brand="YcTemplates"
        // links={[
        //   { label: "Nouveautés", href: "#new" },
        //   { label: "Chaises", href: "#chairs" },
        //   { label: "Contact", href: "#contact" },
        // ]}
        // ctaSecondary={{ label: "Se connecter", href: "#" }}
        // ctaPrimary={{ label: "Commander", href: "#" }}
      />
  <Hero
        // Optional overrides:
        screenshotSrc="/hero.png"
        // line1="Test"
        //line2="Test"
        //line3="for Test"
      />      
      <Separator className="" />

      <Features />
       <Story
        //eyebrow="À propos"
        //title="Design soigné, matériaux durables"
        //paragraph="Nos pièces sont produites en petites séries. Chaque détail compte — du choix des tissus à la visserie — pour un rendu premium et une vraie longévité."
        imageSrc="/ser.png"   // put an image into /public
        //imageAlt="Atelier de la boutique"
        //cta={{ label: "En savoir plus", href: "#about" }}
      />

{/* // Marquee section */}
<TestimonialsMarquee duration={24} />

{/* // OR the two-column section */}
{/* <TestimonialsTwoColumn />     */}

    <Toaster richColors closeButton position="top-right" />
          <Contact />


          <Footer/>


</main>
  )
}
