import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Vision } from "@/components/vision"
import { Solution } from "@/components/solution"
import { Stats } from "@/components/stats"
import { Partners } from "@/components/partners"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Vision />
      <Stats />
      <Solution />
      <Partners />
      <CTA />
      <Footer />
    </main>
  )
}
