import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/coach-sideline.jpeg"
          alt="LTA Coaching session with players"
          className="w-full h-full object-cover object-center"
        />
        {/* Lighter overlays so more of the image shows through while keeping text readable */}
        <div className="absolute inset-0 bg-background/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Professional Football Development
          </p>

          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            Elite Football
            <span className="block text-primary drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">Coaching</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            The home of elite football coaching. Specializing in 1-2-1 training and bespoke coaching consultancy for holistic player development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold tracking-wide uppercase"
            >
              <a href="mailto:ltacoaching365@gmail.com">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 px-8 py-6 text-base font-medium tracking-wide uppercase bg-transparent backdrop-blur-sm"
            >
              <a href="#services">
                View Services &amp; Prices
              </a>
            </Button>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>14+ years coaching experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>{"11 years in women's football"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
