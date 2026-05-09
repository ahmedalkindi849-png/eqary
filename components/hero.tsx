'use client'

import { useState } from "react"
import { ArrowRight, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AccessRequestModal } from "@/components/access-request-modal"
import { InvestorAccessModal } from "@/components/investor-access-modal"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false)

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Launching Soon
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance leading-[1.1] mb-6">
            The Digital Closing Bridge for Abu Dhabi Real Estate
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            We&apos;re unifying the UAE&apos;s fragmented real estate market through secure, paperless transactions and reduced entry costs. We&apos;re putting the power back in the buyer&apos;s and seller&apos;s hands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => setIsModalOpen(true)}
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base"
            >
              Join The Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              onClick={() => setIsInvestorModalOpen(true)}
              size="lg" 
              variant="outline"
              className="px-8 h-12 text-base border-border hover:bg-secondary"
            >
              <Lock className="mr-2 h-4 w-4" />
              For Investors
            </Button>
          </div>
        </div>
      </section>
      <AccessRequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <InvestorAccessModal
        isOpen={isInvestorModalOpen}
        onClose={() => setIsInvestorModalOpen(false)}
      />
    </>
  )
}
