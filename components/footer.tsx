import { Mail, MapPin, Instagram, Facebook } from "lucide-react"

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mb-4 tracking-tight">
              LTA Coaching 365
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {
                "Elite football coaching specializing in holistic player development. Transforming aspiring players into professionals through personalized training and mentorship."
              }
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:ltacoaching365@gmail.com" className="hover:text-primary transition-colors">
                  ltacoaching365@gmail.com
                </a>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Covering all parts of London &amp; Essex</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/ltacoaching365"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LTA Coaching 365 on Instagram"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/ltacoaching365"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LTA Coaching 365 on Facebook"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/ltacoaching365"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LTA Coaching 365 on X"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  1-2-1 Coaching
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Group Sessions
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Consultancy
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Prices
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2025 LTA Coaching 365. All rights reserved. | Football X Culture</p>
        </div>
      </div>
    </footer>
  )
}
