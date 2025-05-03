import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Dumbbell, BarChart, ChevronRight } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Workout Programs</h1>
          <p className="mt-4 text-zinc-400 md:text-xl">
            Discover our professionally designed workout programs to help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Card key={program.id} className="overflow-hidden bg-zinc-900 border-zinc-800">
              <div className="aspect-video w-full overflow-hidden relative">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-red-500 hover:bg-red-600 text-white">
                    {program.level}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription className="text-zinc-400">{program.category}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-zinc-400 mb-4 line-clamp-2">{program.description}</p>
                <div className="flex items-center justify-between text-sm text-zinc-500">
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Dumbbell className="mr-1 h-4 w-4" />
                    <span>{program.workoutsPerWeek}x/week</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart className="mr-1 h-4 w-4" />
                    <span>{program.goal}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/programs/${program.id}`} className="w-full">
                  <Button variant="default" className="w-full bg-red-500 hover:bg-red-600">
                    View Program <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const programs = [
  {
    id: "strength-builder",
    title: "Strength Builder",
    category: "Strength Training",
    description:
      "Build muscle and increase strength with this comprehensive program designed for intermediate lifters.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "8 weeks",
    workoutsPerWeek: 4,
    level: "Intermediate",
    goal: "Strength",
  },
  {
    id: "fat-burner",
    title: "Fat Burner",
    category: "Weight Loss",
    description: "High-intensity workouts designed to maximize calorie burn and fat loss while preserving muscle mass.",
    image: "https://plus.unsplash.com/premium_photo-1661920538067-c48451160c72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "6 weeks",
    workoutsPerWeek: 5,
    level: "All Levels",
    goal: "Fat Loss",
  },
  {
    id: "core-crusher",
    title: "Core Crusher",
    category: "Core Training",
    description: "Focus on building a strong, stable core with these targeted exercises for a solid foundation.",
    image: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "4 weeks",
    workoutsPerWeek: 3,
    level: "Beginner",
    goal: "Toning",
  },
  {
    id: "total-body-transformation",
    title: "Total Body Transformation",
    category: "Full Body",
    description: "A comprehensive program targeting all major muscle groups for a complete body transformation.",
    image: "https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
    duration: "12 weeks",
    workoutsPerWeek: 5,
    level: "Advanced",
    goal: "Muscle",
  },
  {
    id: "home-hero",
    title: "Home Hero",
    category: "Home Workout",
    description: "No equipment needed! Build strength and endurance with this home-based workout program.",
    image: "https://plus.unsplash.com/premium_photo-1661284821625-9400498df354?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "6 weeks",
    workoutsPerWeek: 4,
    level: "Beginner",
    goal: "Fitness",
  },
  {
    id: "hiit-extreme",
    title: "HIIT Extreme",
    category: "High Intensity",
    description: "Short, intense workout sessions designed to push your limits and maximize results in minimal time.",
    image: "https://images.unsplash.com/photo-1547919307-1ecb10702e6f?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "4 weeks",
    workoutsPerWeek: 4,
    level: "Advanced",
    goal: "Cardio",
  },
]
