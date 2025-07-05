import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Calendar, Play, Star, Shield, Users, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CoachMikeLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-rose-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-50/95 to-orange-50/95 backdrop-blur-sm sticky top-0 z-50 border-b border-orange-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Coach Mike" />
              <AvatarFallback className="bg-blue-600 text-white">CM</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-bold text-xl text-gray-900">Coach Mike</h1>
              <p className="text-sm text-gray-600">Relationship & Healing Coach</p>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Calendar className="w-4 h-4 mr-2" />
            Book Session
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-peach-100 text-orange-800 hover:bg-peach-100">
                  <Heart className="w-3 h-3 mr-1" />
                  You're Not Alone
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Healing is Possible, Even When It Feels Impossible
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  If you're struggling with heartbreak, anxious attachment, or feeling overwhelmed by your emotions, I
                  understand. You're not broken, and there's nothing wrong with you. Let's work together to find your
                  path to healing and healthier relationships.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Session
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 bg-transparent border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch My Story
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">500+ lives changed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">50K+ YouTube subscribers</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Coach Mike"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <Button
                  size="lg"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 text-gray-900 hover:bg-white rounded-full w-16 h-16"
                >
                  <Play className="w-6 h-6 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-16 bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real People, Real Transformations</h2>
            <p className="text-xl text-gray-600">See the journey from pain to healing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Happy couple after healing"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Sarah & Tom</p>
                  <p className="text-sm opacity-90">From anxious attachment to secure love</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Person in healing journey"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Marcus</p>
                  <p className="text-sm opacity-90">Finding peace after heartbreak</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Couple working through challenges"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Lisa & James</p>
                  <p className="text-sm opacity-90">Navigating ADHD together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="py-16 bg-gradient-to-r from-amber-100 via-orange-50 to-peach-100">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Struggles Are Valid, Your Healing Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Safe Space</h3>
              <p className="text-gray-600">
                No judgment, no shame. Just understanding and compassionate guidance through your healing journey.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="font-semibold text-gray-900">You're Not Broken</h3>
              <p className="text-gray-600">
                Your reactions and patterns make sense. We'll work together to understand and transform them.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Proven Methods</h3>
              <p className="text-gray-600">
                Evidence-based approaches that have helped hundreds of people just like you find peace and love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-gradient-to-br from-orange-100 via-amber-50 to-rose-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">I Specialize in What You're Going Through</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're dealing with heartbreak, attachment issues, or neurodivergent challenges, I have the
              experience and tools to help you heal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Heartbreak & Grief",
                description: "Navigate the pain of loss and learn to love yourself again",
                color: "bg-rose-50 border-rose-200",
              },
              {
                title: "Anxious-Avoidant Dynamics",
                description: "Break free from toxic relationship patterns and create secure bonds",
                color: "bg-peach-50 border-peach-200",
              },
              {
                title: "ADHD & Relationships",
                description: "Understand how your neurodivergent brain affects love and connection",
                color: "bg-sage-50 border-sage-200",
              },
              {
                title: "BPD & Emotional Regulation",
                description: "Learn healthy coping strategies and build stable relationships",
                color: "bg-lavender-50 border-lavender-200",
              },
              {
                title: "Personality Disorders",
                description: "Compassionate support for complex mental health challenges",
                color: "bg-amber-50 border-amber-200",
              },
              {
                title: "Self-Worth & Confidence",
                description: "Rebuild your sense of self and learn to set healthy boundaries",
                color: "bg-coral-50 border-coral-200",
              },
            ].map((specialty, index) => (
              <Card key={index} className={`${specialty.color} border-2 hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <CardTitle className="text-lg">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{specialty.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About/Qualifications Section */}
      <section className="py-16 bg-gradient-to-l from-amber-50 via-orange-50 to-peach-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Why I Do This Work</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I've been where you are. I know what it feels like to be overwhelmed by emotions, to feel like you're
                  too much or not enough, to wonder if you'll ever find peace in relationships.
                </p>
                <p>
                  After my own journey through heartbreak and healing, I dedicated my life to helping others find their
                  way back to themselves. I've spent years studying attachment theory, trauma-informed approaches, and
                  neurodivergent-affirming practices.
                </p>
                <p>
                  Through my YouTube channel and one-on-one coaching, I've had the privilege of walking alongside
                  hundreds of people as they transform their pain into power and their wounds into wisdom.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Qualifications & Training:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Certified Life Coach (ICF Accredited)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Trauma-Informed Care Certification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Attachment Theory Specialist
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Neurodivergent-Affirming Practice Training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    5+ Years Coaching Experience
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Coach Mike Professional Photo"
                width={400}
                height={500}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-orange-100 via-amber-100 to-rose-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stories of Healing & Hope</h2>
            <p className="text-xl text-gray-600">Real people, real transformations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                issue: "Anxious Attachment",
                quote:
                  "Mike helped me understand that my anxiety wasn't a flaw - it was my nervous system trying to protect me. Now I'm in the healthiest relationship of my life.",
                rating: 5,
              },
              {
                name: "James K.",
                issue: "ADHD & Relationships",
                quote:
                  "Finally, someone who gets how my ADHD brain works in relationships. Mike's strategies have been life-changing for me and my partner.",
                rating: 5,
              },
              {
                name: "Maria L.",
                issue: "Heartbreak Recovery",
                quote:
                  "I thought I'd never get over my ex. Mike showed me that healing isn't about forgetting - it's about growing. I'm stronger now than ever.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.issue}</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Healing Journey Visual */}
      <section className="py-16 bg-gradient-to-br from-amber-100 via-orange-100 to-peach-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Healing Journey</h2>
            <p className="text-xl text-gray-600">From where you are now to where you want to be</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Person in contemplation - representing the starting point"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Where You Are Now</h3>
                  <p className="text-sm opacity-90">Feeling overwhelmed, stuck, or heartbroken</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Happy person or couple - representing healing"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Where You're Going</h3>
                  <p className="text-sm opacity-90">Confident, peaceful, and in healthy relationships</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 via-orange-100 to-peach-100">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Healing Journey Today</h2>
          <p className="text-xl text-gray-600 mb-8">Watch my free content on YouTube or book a personalized session</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-coral-200 bg-coral-50">
              <CardHeader>
                <Play className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <CardTitle>Free YouTube Content</CardTitle>
                <CardDescription>Weekly videos on healing, relationships, and personal growth</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-coral-300 text-coral-700 hover:bg-coral-100 bg-transparent"
                >
                  Visit My Channel
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 bg-blue-50 border-blue-200">
              <CardHeader>
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <CardTitle>1-on-1 Coaching</CardTitle>
                <CardDescription>Personalized support tailored to your unique situation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Your Session</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">You Deserve Love, Peace, and Healing</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards the life and relationships you've always wanted. I'm here to support you every
            step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your First Session
            </Button>
            <div className="flex items-center space-x-2 text-sm opacity-75">
              <Clock className="w-4 h-4" />
              <span>Usually responds within 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 via-orange-900 to-rose-900 text-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Coach Mike" />
                  <AvatarFallback className="bg-blue-600 text-white text-sm">CM</AvatarFallback>
                </Avatar>
                <span className="font-bold">Coach Mike</span>
              </div>
              <p className="text-gray-400 text-sm">
                Helping people heal from heartbreak and build healthier relationships.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    YouTube Channel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Book Session
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-400 mb-2">Ready to start your healing journey?</p>
              <Button className="bg-blue-600 hover:bg-blue-700">Get In Touch</Button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Coach Mike. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
