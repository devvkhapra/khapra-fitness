import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gym background" fill className="object-cover" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                About <span className="text-red-500">KHAPRA</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                Our mission is to empower individuals to achieve their fitness goals through expert guidance and
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <Image
              src="/me.png"
              alt="Founder"
              width={600}
              height={600}
              className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-zinc-400">
                Khapra Fitness was created as my live project during my university semester. What started as an academic 
                endeavor has evolved into a comprehensive fitness platform that combines my passion for fitness 
                with practical application of the skills I developed during my studies.
                </p>
                <p className="text-zinc-400">
                The project focuses on creating a dynamic fitness platform that bridges academic learning with practical application. 
                I designed Khapra to offer personalized workout routines, nutritional guidance, and progress tracking 
                tools that adapt to each user's unique fitness journey. Throughout development, I've applied principles of 
                user experience design, responsive web development, and exercise science to create an accessible solution 
                for fitness enthusiasts of all levels.
                </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 bg-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
            <p className="mt-4 text-zinc-400 md:text-xl max-w-[700px] mx-auto">
              The principles that guide everything we do at Khapra Fitness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-red-500/10 mb-4">
                  <Award className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-zinc-400">
                  We strive for excellence in everything we do, from our workout programs to our customer service.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-red-500/10 mb-4">
                  <Users className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-zinc-400">
                  We believe in the power of community to motivate and support individuals on their fitness journey.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-red-500/10 mb-4">
                  <Clock className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Consistency</h3>
                <p className="text-zinc-400">
                  We emphasize the importance of consistency in achieving long-term fitness goals.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-red-500/10 mb-4">
                  <Target className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Results</h3>
                <p className="text-zinc-400">
                  We are committed to helping our clients achieve tangible, sustainable results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-red-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Join the Khapra Community
              </h2>
              <p className="mx-auto max-w-[700px] text-red-100 md:text-xl">
                Start your fitness journey today and experience the Khapra difference.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/programs">
                <Button variant="default" className="bg-white text-red-500 hover:bg-zinc-200">
                  Explore Programs
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="text-white border-white hover:bg-red-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const team = [
  {
    name: "Alex Khapra",
    role: "Founder & Head Trainer",
    bio: "Certified personal trainer with over 10 years of experience in strength training and nutrition.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sarah Johnson",
    role: "Nutrition Specialist",
    bio: "Registered dietitian specializing in sports nutrition and meal planning for optimal performance.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Mike Chen",
    role: "Strength Coach",
    bio: "Former competitive powerlifter with expertise in strength development and injury prevention.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Lisa Rodriguez",
    role: "Yoga & Mobility Coach",
    bio: "Certified yoga instructor focused on improving flexibility and recovery for athletes.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "David Kim",
    role: "HIIT Specialist",
    bio: "Specializes in high-intensity interval training and metabolic conditioning programs.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Emma Wilson",
    role: "Client Success Manager",
    bio: "Dedicated to ensuring clients have the support they need to achieve their fitness goals.",
    image: "/placeholder.svg?height=400&width=400",
  },
]
