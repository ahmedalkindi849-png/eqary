import { Building, Landmark, BadgeCheck, Globe } from "lucide-react"

const partnerTypes = [
  {
    icon: Landmark,
    title: "Government Registries",
    description: "Direct integration with Abu Dhabi land department and DARI portal"
  },
  {
    icon: Building,
    title: "Banking Partners",
    description: "Pre-integrated mortgage workflows with leading UAE financial institutions"
  },
  {
    icon: BadgeCheck,
    title: "UAE Pass",
    description: "Official national digital identity verification system"
  },
  {
    icon: Globe,
    title: "International Investors",
    description: "Seamless cross-border transaction support for global buyers"
  }
]

export function Partners() {
  return (
    <section id="partners" className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Ecosystem</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6 text-balance">
            The Partnership Network
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            EQARY connects all stakeholders in the property transaction ecosystem through a single, unified platform.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerTypes.map((partner) => (
            <div 
              key={partner.title} 
              className="p-6 rounded-xl bg-background border border-border text-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <partner.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{partner.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
