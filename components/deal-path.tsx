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

// Node positions along the path (x in viewBox units, y sampled from the curve)
const nodes = [
  { x: 150, y: 38 },
  { x: 450, y: 62 },
  { x: 750, y: 50 },
  { x: 1050, y: 36 },
]

export function DealPath() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
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

        {/* Wavy journey path */}
        <svg
          viewBox="0 0 1200 100"
          fill="none"
          aria-hidden="true"
          className="w-full h-auto overflow-visible mb-2"
        >
          <path
            d="M0 50 C 75 20, 150 20, 225 50 S 375 85, 450 62 S 600 20, 675 38 S 825 70, 900 50 S 1050 22, 1125 38 S 1180 48, 1200 46"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="text-accent"
            style={{
              strokeDasharray: 1400,
              strokeDashoffset: visible ? 0 : 1400,
              transition: "stroke-dashoffset 2.2s ease-out",
            }}
          />
          {nodes.map((n, i) => (
            <g
              key={i}
              style={{
                opacity: visible ? 1 : 0,
                transition: `opacity .5s ease ${0.4 + i * 0.45}s`,
              }}
            >
              <circle cx={n.x} cy={n.y} r="14" className="fill-accent/15" />
              <circle cx={n.x} cy={n.y} r="6" className="fill-accent" />
            </g>
          ))}
        </svg>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 mt-10">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="flex flex-col items-center text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity .6s ease ${0.5 + i * 0.45}s, transform .6s ease ${0.5 + i * 0.45}s`,
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
          ))}
        </div>
      </div>
    </section>
  )
}
