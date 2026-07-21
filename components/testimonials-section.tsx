"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Danielle Carter",
      role: "Former Lionesses & Arsenal Player",
      content:
        "Luke is very thorough with his coaching, constantly communicating and finding solutions. As a player you can see his passion and love for the game and coaching through his drills and energy around the training ground. He always goes above and beyond for the team and is a real asset!",
      rating: 5,
    },
    {
      name: "Deanna Cooper",
      role: "Current Professional",
      content:
        "Luke's technical detail is very good and his use of positive communication throughout the session is very good. He has a variety of sessions and session designs which are enjoyable. Both the squad and I love the individual communication throughout. Luke as a person is very approachable and brings a positive attitude everyday making each session enjoyable.",
      rating: 5,
    },
    {
      name: "Elanor K",
      role: "Player",
      content:
        "Luke helped me find a new position that has suited my playing style best, constantly ensuring I was challenged in sessions. He really helped to push me on as a player and prepare myself to take the next step into senior football, which I have now taken thanks to him. Luke is an amazing coach and an even better person.",
      rating: 5,
    },
    {
      name: "Gabby B",
      role: "Player",
      content:
        "Luke always looks to improve every player that he coaches and shapes them into the best version of themselves both on and off the pitch. His understanding and knowledge of the game is of a high standard and he communicates in a way that has helped me gain confidence. He's not 'just a coach' but a lot more personable and impactful. Thank you.",
      rating: 5,
    },
    {
      name: "Ella A",
      role: "Parent",
      content:
        "Luke coached our daughter for a year as part of an RTC and we can't speak more highly of him. He is a huge advocate of women in football and ensured each girl was pushing to their potential. He was motivational, inspiring and had high expectations. He genuinely cares and is a rare find! Thank you.",
      rating: 5,
    },
    {
      name: "Lu N",
      role: "Player",
      content:
        "Training with Luke has not only improved the technical side of my game but also my ability to make the right decisions in match situations. Every session is competitive as well as thought provoking as he specialises in opposed practices. I would recommend his coaching to anyone looking to elevate their game.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">What Players Say</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {"Hear from the players who have transformed their careers with LTA Coaching 365."}
            </p>
          </div>

          <div className="relative">
            <Card className="bg-background border-border">
              <CardContent className="p-8 md:p-12">
                <div className="flex mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed font-light italic">
                  {`"${testimonials[currentIndex].content}"`}
                </blockquote>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold text-lg">{testimonials[currentIndex].name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
