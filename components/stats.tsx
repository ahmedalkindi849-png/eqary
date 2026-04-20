const stats = [
  {
    value: "0%",
    label: "Commission",
    description: "Zero brokerage fees"
  },
  {
    value: "24hrs",
    label: "Closing Time",
    description: "From offer to completion"
  },
  {
    value: "100%",
    label: "Digital",
    description: "No paper, no branch visits"
  },
  {
    value: "1",
    label: "Session",
    description: "Buy, sell, finance in one flow"
  }
]

export function Stats() {
  return (
    <section className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-semibold mb-2">{stat.value}</div>
              <div className="text-lg font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-primary-foreground/70">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
