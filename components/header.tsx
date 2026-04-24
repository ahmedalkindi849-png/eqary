"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold tracking-tight">EQARY</span>
          </Link>



          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link href="#vision" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Vision
            </Link>
            <Link href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Problem
            </Link>
            <Link href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solution
            </Link>
            <Link href="#partners" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Partners
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" className="justify-start">
                Login
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Request Access
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
