import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Target, Award } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Trophy, label: "Years Experience", value: "14+" },
    { icon: Users, label: "Players Developed", value: "200+" },
    { icon: Target, label: "Success Rate", value: "95%" },
    { icon: Award, label: "Professional Transitions", value: "50+" },
  ]

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">Football X Culture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {
                "We believe that a developed person equals a developed player. Our holistic approach focuses on lifestyle, mindset, sport, and excellence to help players transition into professional football."
              }
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-background border-border">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            <div className="relative overflow-hidden rounded-lg group aspect-[4/3]">
              <img
                src="/coach-tactics-board.jpeg"
                alt="Coach delivering a coaching consultancy session with players"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
              <p className="absolute bottom-4 left-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground tracking-tight">
                Coaching Consultancy
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg group aspect-[4/3]">
              <img
                src="/coach-on-pitch.jpeg"
                alt="Coach working with a player on the pitch"
                className="w-full h-full object-cover object-[center_25%] transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
              <p className="absolute bottom-4 left-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground tracking-tight">
                On The Pitch
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground mb-6 tracking-tight">Our Philosophy</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {
                  "At LTA Coaching 365, we specialize in 1-2-1 training and bespoke coaching consultancy. Our focus extends beyond just football skills to encompass the complete development of each individual."
                }
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {
                  "With over 14 years of coaching experience and 11 years dedicated to the women's game, we pride ourselves on helping players navigate their professional development phases and successfully transition into professional football."
                }
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-foreground">Holistic player development approach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-foreground">Personalized 1-2-1 training programs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-foreground">Professional transition support</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Founder Luke Thomas-Arayo blends coaching and sports science for elite player
                development. With a UEFA A License, FA Youth Award, LMA Diploma, BSc Sport Science,
                and Level 4 S&C, he unites tactical leadership with advanced physical load
                management.
              </p>
            </div>

            <div className="relative">
              {/* Decorative gold accent frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary rounded-tl-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary rounded-br-lg"></div>
              <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                <img
                  src="/coach-portrait.jpeg"
                  alt="LTA Coaching 365 head coach portrait"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground tracking-tight">
                    Founder
                  </p>
                  <p className="text-sm text-primary font-medium tracking-wide uppercase">
                    LTA Coaching 365
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
