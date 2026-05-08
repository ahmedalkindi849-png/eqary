'use client'

import { useState, useEffect } from "react"
import { X, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface InvestorAccessModalProps {
  isOpen: boolean
  onClose: () => void
}

const INVESTOR_CODE = "6232"

export function InvestorAccessModal({ isOpen, onClose }: InvestorAccessModalProps) {
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const [verifying, setVerifying] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setCode("")
      setError("")
      setVerifying(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setVerifying(true)

    // Small delay to show verifying state
    setTimeout(() => {
      if (code.trim() === INVESTOR_CODE) {
        // Redirect to the roadmap site
        window.location.href = "/roadmap.html"
      } else {
        setError("Invalid access code. Please try again.")
        setVerifying(false)
      }
    }, 400)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="investor-modal-title"
    >
      <div
        className="bg-card text-card-foreground rounded-2xl border border-border shadow-xl max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
            <Lock className="h-5 w-5 text-accent" />
          </div>
        </div>

        <h2 id="investor-modal-title" className="text-2xl font-semibold mb-2 text-center">
          Investor Access
        </h2>
        <p className="text-sm text-muted-foreground mb-6 text-center">
          Enter your access code to view the EQARY investor roadmap.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="investor-code" className="sr-only">
              Access code
            </label>
            <input
              id="investor-code"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter access code"
              required
              autoFocus
              className="w-full px-4 py-3 rounded-lg bg-input border border-border text-center text-lg tracking-widest font-mono text-foreground placeholder:text-muted-foreground placeholder:font-sans placeholder:text-base placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {error && (
            <p className="text-sm text-destructive text-center" role="alert">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={verifying || !code.trim()}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12"
          >
            {verifying ? "Verifying..." : "View Roadmap"}
          </Button>
        </form>
      </div>
    </div>
  )
}
