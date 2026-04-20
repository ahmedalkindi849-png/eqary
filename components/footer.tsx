import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              EQARY
            </Link>
            <p className="mt-4 text-primary-foreground/70 max-w-md text-pretty">
              The Digital Closing Bridge for Abu Dhabi Real Estate. Transforming property transactions one secure, zero-footprint closing session at a time.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#vision" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="#solution" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#partners" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70">
            &copy; {new Date().getFullYear()} EQARY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
