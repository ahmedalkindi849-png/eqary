import { DollarSign, Shuffle, ShieldOff } from "lucide-react"

const problems = [
  {
    icon: DollarSign,
    title: "High Costs",
    description: "Residents pay a 2% brokerage fee for a process that is largely manual paperwork — a fee with no technological justification in 2026."
  },
  {
    icon: Shuffle,
    title: "Process Fragmentation",
    description: "Private brokers, DARI portals, government offices, and bank branches — each a separate silo with no unified experience."
  },
  {
    icon: ShieldOff,
    title: "Trust Deficit",
    description: "Manual document handling raises the risk of fraud and data leakage, undermining confidence in high-value transactions."
  }
]

export function Problem() {
  return (
    <section id="problem" className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6 text-balance">
            The Friction Gap Is Costing Everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            The current secondary market journey is fragmented, expensive, and slow — eroding trust and leaving high-value opportunities on the table for both consumers and financial institutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <div 
              key={problem.title} 
              className="p-8 rounded-2xl bg-background border border-border hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <problem.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground text-pretty">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
