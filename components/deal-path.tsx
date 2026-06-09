'use client'

import { useEffect, useRef, useState } from "react"
import { Fingerprint, FilePen, ArrowLeftRight, BadgeCheck } from "lucide-react"

const steps = [
  {
    icon: Fingerprint,
    step: "Step 1",
    title: "Verify",
    description: "Identity confirmed against UAE Pass in seconds — no documents, no office visits.",
  },
  {
    icon: FilePen,
    step: "Step 2",
    title: "Sign",
    description: "Contracts generated and signed in-app with a legally binding UAE Pass e-signature.",
  },
  {
    icon: ArrowLeftRight,
    step: "Step 3",
    title: "Pay",
    description: "Money moves bank to bank through regulated rails. EQARY never holds your funds.",
  },
  {
    icon: BadgeCheck,
    step: "Step 4",
    title: "Registered",
    description: "The deal is filed with the government registry automatically the moment you sign.",
  },
]

// Step node positions — the path passes exactly through these points.
// x matches the horizontal center of each step column (viewBox 0 0 1200 100).
const nodes = [
  { x: 150, y: 38 },
  { x: 450, y: 62 },
  { x: 750, y: 50 },
  { x: 1050, y: 36 },
]

// Smooth curve threaded through every node
const PATH_D =
  "M0 52 C 50 46, 100 38, 150 38 S 390 62, 450 62 S 690 50, 750 50 S 990 36, 1050 36 S 1170 44, 1200 46"

export function DealPath() {
  const sectionRef = useRef<HTMLElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const dotRef = useRef<SVGGElement>(null)
  const [pathLen, setPathLen] = useState(1400)
  const [progress, setProgress] = useState(0)

  // Measure real path length once
  useEffect(() => {
    if (pathRef.current) setPathLen(pathRef.current.getTotalLength())
  }, [])

  // Scroll-driven progress: 0 when section enters viewport, 1 when it leaves
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = sectionRef.current
        const path = pathRef.current
        const dot = dotRef.current
        if (!el || !path || !dot) return
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        // progress through the section: starts when top hits 85% of viewport,
        // completes when the section's middle reaches 35% of viewport
        const start = vh * 0.85
        const end = vh * 0.25
        const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)))
        setProgress(p)
        const pt = path.getPointAtLength(p * path.getTotalLength())
        dot.setAttribute("transform", `translate(${pt.x}, ${pt.y})`)
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">How it works</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6 text-balance">
            How a Deal Closes on EQARY
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            One continuous, verified path from first tap to registered transaction. No agent, no paperwork, no cheque.
          </p>
        </div>

        {/* Journey path threaded through each step, drawn by scroll */}
        <svg viewBox="0 0 1200 100" fill="none" aria-hidden="true" className="w-full h-auto overflow-visible mb-2">
          {/* Faint full track */}
          <path d={PATH_D} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-accent/20" />
          {/* Progress stroke, revealed as you scroll */}
          <path
            ref={pathRef}
            d={PATH_D}
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="text-accent"
            style={{
              strokeDasharray: pathLen,
              strokeDashoffset: pathLen * (1 - progress),
            }}
          />
          {/* Step nodes — light up as the dot passes them */}
          {nodes.map((n, i) => {
            const reached = progress >= (i + 0.5) / nodes.length - 0.08
            return (
              <g key={i} style={{ opacity: reached ? 1 : 0.35, transition: "opacity .4s ease" }}>
                <circle cx={n.x} cy={n.y} r="14" className={reached ? "fill-accent/15" : "fill-accent/5"} />
                <circle cx={n.x} cy={n.y} r="6" className={reached ? "fill-accent" : "fill-accent/40"} />
              </g>
            )
          })}
          {/* Traveling dot */}
          <g ref={dotRef}>
            <circle r="13" className="fill-accent/20">
              <animate attributeName="r" values="11;15;11" dur="1.8s" repeatCount="indefinite" />
            </circle>
            <circle r="7" className="fill-accent" />
            <circle r="3" fill="#fff" />
          </g>
        </svg>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 mt-10">
          {steps.map((s, i) => {
            const reached = progress >= (i + 0.5) / steps.length - 0.08
            return (
              <div
                key={s.title}
                className="flex flex-col items-center text-center"
                style={{
                  opacity: reached ? 1 : 0.45,
                  transform: reached ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity .5s ease, transform .5s ease",
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <s.icon className="h-7 w-7 text-accent" />
                </div>
                <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">{s.step}</span>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty max-w-[260px]">
                  {s.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
