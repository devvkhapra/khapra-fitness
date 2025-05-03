import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dumbbell, Users, Calendar, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gym background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                TRANSFORM YOUR BODY WITH <span className="text-red-500">KHAPRA</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                Achieve your fitness goals with our expert-designed workout programs and nutrition guidance.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/programs">
                <Button variant="default" className="bg-red-500 hover:bg-red-600">
                  Explore Programs
                </Button>
              </Link>
              <Link href="/bmi-calculator">
                <Button variant="outline" className="text-white border-white hover:bg-zinc-800">
                  Calculate BMI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border border-zinc-800 p-6 rounded-lg">
              <div className="p-3 rounded-full bg-red-500/10">
                <Dumbbell className="h-10 w-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Expert Workouts</h3>
              <p className="text-zinc-400 text-center">
                Access over 100+ professionally designed workout routines for all fitness levels.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-zinc-800 p-6 rounded-lg">
              <div className="p-3 rounded-full bg-red-500/10">
                <Users className="h-10 w-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Community Support</h3>
              <p className="text-zinc-400 text-center">
                Join our fitness community and get motivated by like-minded individuals.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-zinc-800 p-6 rounded-lg">
              <div className="p-3 rounded-full bg-red-500/10">
                <Calendar className="h-10 w-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Progress Tracking</h3>
              <p className="text-zinc-400 text-center">
                Track your fitness journey with our easy-to-use tools and analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Workouts */}
      <section className="w-full py-12 md:py-24 bg-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Featured Workouts
              </h2>
              <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
                Discover our most popular workout programs designed to help you reach your goals.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredWorkouts.map((workout, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border border-zinc-800">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={workout.image || "/placeholder.svg"}
                    alt={workout.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-zinc-900">
                  <h3 className="text-xl font-bold text-white">{workout.title}</h3>
                  <p className="text-zinc-400 mt-2">{workout.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-zinc-500">
                      {workout.duration} | {workout.level}
                    </div>
                    <Link href={`/programs/${workout.id}`}>
                      <Button variant="ghost" className="text-red-500 hover:text-red-400 p-0">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/programs">
              <Button variant="outline" className="text-white border-white hover:bg-zinc-800">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-red-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Start Your Fitness Journey?
              </h2>
              <p className="mx-auto max-w-[700px] text-red-100 md:text-xl">
                Take the first step towards a healthier lifestyle with Khapra's personalized fitness solutions.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/bmi-calculator">
                <Button variant="default" className="bg-white text-red-500 hover:bg-zinc-200">
                  Calculate Your BMI
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

const featuredWorkouts = [
  {
    id: "strength-builder",
    title: "Strength Builder",
    description: "Build muscle and increase strength with this comprehensive program.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "8 weeks",
    level: "Intermediate",
  },
  {
    id: "fat-burner",
    title: "Fat Burner",
    description: "High-intensity workouts designed to maximize calorie burn and fat loss.",
    image: "https://plus.unsplash.com/premium_photo-1661920538067-c48451160c72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
    duration: "6 weeks",
    level: "All Levels",
  },
  {
    id: "core-crusher",
    title: "Core Crusher",
    description: "Focus on building a strong, stable core with these targeted exercises.",
    image: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
    duration: "4 weeks",
    level: "Beginner",
  },
]
