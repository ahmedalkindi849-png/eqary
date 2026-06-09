import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DealPath } from "@/components/deal-path"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <DealPath />
      <Partners />
      <Footer />
    </main>
  )
}
