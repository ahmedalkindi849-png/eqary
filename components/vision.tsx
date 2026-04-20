export function Vision() {
  return (
    <section id="vision" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">The Vision</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6 text-balance">
              A New Infrastructure for Real Estate
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              We are building the infrastructure that allows a property to be bought, sold, and financed in a single, secure, &quot;Zero-Footprint&quot; digital session.
            </p>
            <p className="text-lg text-muted-foreground text-pretty">
              No paper. No branch visits. No intermediaries.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold mb-4">Our Core Belief</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Real estate is already a digital asset. The market just hasn&apos;t been given the infrastructure to act like one — until now.
            </p>
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                EQARY is not a listings platform. It is a <span className="text-foreground font-medium">settlement layer</span> — the missing digital bridge between buyers, sellers, government registries, and bank partners in Abu Dhabi&apos;s property market.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10">
          <p className="text-center text-lg text-foreground max-w-3xl mx-auto text-pretty">
            Abu Dhabi&apos;s regulatory environment, national strategy, and consumer expectations have converged to create a <span className="font-semibold">once-in-a-decade window</span> for this transformation.
          </p>
        </div>
      </div>
    </section>
  )
}
