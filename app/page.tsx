import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Partners } from "@/components/partners"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Partners />
      <CTA />
      <Footer />
    </main>
  )
}
