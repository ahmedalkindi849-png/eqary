import { Database, Fingerprint, Percent, Building2, Smartphone, Shield } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Direct-to-Registry Integration",
    description: "Seamless connection to government land registries for real-time verification and instant title transfers."
  },
  {
    icon: Fingerprint,
    title: "UAE Pass Verified Identity",
    description: "Leverage the national digital identity system for secure, instant KYC verification."
  },
  {
    icon: Percent,
    title: "0% Commission Model",
    description: "We disrupt the traditional 2% brokerage fee with a transparent, zero-commission approach."
  },
  {
    icon: Building2,
    title: "Bank Partner Network",
    description: "Pre-integrated mortgage workflows with leading UAE banks for instant financing decisions."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description: "Complete your entire property transaction from your smartphone — anytime, anywhere."
  },
  {
    icon: Shield,
    title: "Zero-Footprint Security",
    description: "Enterprise-grade encryption with no physical document trail. Your data stays secure."
  }
]

export function Solution() {
  return (
    <section id="solution" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">The Solution</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6 text-balance">
            The Digital Bridge
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            EQARY is a proprietary interoperability layer that transforms government registries into a seamless, fully mobile closing experience — without replacing the underlying infrastructure.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
