"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Users, Briefcase, Target, ChevronDown } from "lucide-react"

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const services = [
    {
      icon: User,
      title: "1-2-1 Coaching",
      description:
        "Personalized training sessions tailored to your specific needs and goals. Focus on technical skills, tactical awareness, and mental development.",
      features: ["Individual skill assessment", "Customized training plans", "Progress tracking", "Mental coaching"],
      pricing: [
        { label: "Pay as you play", value: "£40/hr + Pitch Hire" },
        { label: "Block Bookings", value: "£180 · 5 x 1hr sessions" },
      ],
    },
    {
      icon: Users,
      title: "Group Sessions",
      description:
        "Small group sessions that combine individual attention with team dynamics. Perfect for building chemistry and competitive spirit.",
      features: ["Small group dynamics", "Team building exercises", "Competitive drills", "Leadership development"],
      pricing: [
        { label: "Pay as you play", value: "£30 ppps + Pitch Hire" },
        { label: "Block Bookings", value: "£130 ppps · 5 x 1hr sessions" },
        { label: "Note", value: "Minimum 3 people" },
      ],
    },
    {
      icon: Briefcase,
      title: "Consultancy",
      description:
        "Professional coaching consultancy for clubs, academies, and organizations looking to enhance their coaching programs.",
      features: ["Program development", "Coach education", "Performance analysis", "Strategic planning"],
      pricing: [
        { label: "Bespoke Proposal", value: "Please get in touch" },
        { label: "Rates start at", value: "£100 per hr" },
      ],
    },
    {
      icon: Target,
      title: "Professional Transition",
      description:
        "Specialized support for players making the transition from amateur to professional football, including lifestyle and career guidance.",
      features: ["Career planning", "Lifestyle coaching", "Professional networking", "Contract guidance"],
      pricing: [
        { label: "Bespoke Proposal", value: "Please get in touch" },
        { label: "Rates start at", value: "£100 per hr" },
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {"Comprehensive coaching services designed to elevate your game and accelerate your football journey."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors group">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-foreground tracking-tight">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent font-semibold tracking-wide uppercase text-sm"
                  >
                    {openIndex === index ? "Hide Prices" : "Learn More"}
                    <ChevronDown
                      className={`ml-2 h-4 w-4 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                    />
                  </Button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      openIndex === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="rounded-lg border border-border bg-background/60 p-5 space-y-3">
                        {service.pricing.map((price, priceIndex) => (
                          <div
                            key={priceIndex}
                            className="flex items-center justify-between gap-4 border-b border-border/50 pb-3 last:border-0 last:pb-0"
                          >
                            <span className="text-sm text-muted-foreground">{price.label}</span>
                            <span className="text-sm font-semibold text-foreground text-right">{price.value}</span>
                          </div>
                        ))}
                        <Button
                          asChild
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide uppercase text-sm mt-2"
                        >
                          <a href="mailto:ltacoaching365@gmail.com">Book Now</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
