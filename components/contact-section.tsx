import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react"

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">Start Your Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {
                "Ready to take your football to the next level? Get in touch for a consultation and discover how we can help you achieve your goals."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-foreground tracking-tight">Book Your Consultation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input placeholder="Enter your first name" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" className="bg-background border-border" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email" className="bg-background border-border" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Current Level</label>
                  <select className="w-full p-3 bg-background border border-border rounded-md text-foreground">
                    <option>Select your current level</option>
                    <option>Amateur</option>
                    <option>Semi-Professional</option>
                    <option>Academy Player</option>
                    <option>Professional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your goals and what you're looking to achieve..."
                    className="bg-background border-border min-h-[120px]"
                  />
                </div>

                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide uppercase py-6"
                >
                  <a href="mailto:ltacoaching365@gmail.com?subject=Consultation%20Enquiry">Send Message</a>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-foreground">Email</h3>
                  </div>
                  <a
                    href="mailto:ltacoaching365@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ltacoaching365@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-foreground">Location</h3>
                  </div>
                  <p className="text-muted-foreground">Covering all parts of London &amp; Essex</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-foreground">Availability</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                    <p>Saturday: 8:00 AM - 6:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.instagram.com/ltacoaching365"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LTA Coaching 365 on Instagram"
                      className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/ltacoaching365"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LTA Coaching 365 on Facebook"
                      className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://x.com/ltacoaching365"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LTA Coaching 365 on X"
                      className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <XIcon className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">@ltacoaching365 on all socials</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
