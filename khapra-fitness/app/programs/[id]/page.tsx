import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Dumbbell, BarChart, Calendar, CheckCircle2 } from "lucide-react"
import { notFound } from "next/navigation"

interface Program {
  id: string
  title: string
  category: string
  description: string
  image: string
  duration: string
  workoutsPerWeek: number
  level: string
  goal: string
  overview: string
  requirements: string[]
  schedule: {
    week: number
    days: {
      day: number
      title: string
      description: string
      exercises: {
        name: string
        sets: number
        reps: string
        rest: string
      }[]
    }[]
  }[]
}

// This would typically come from a database or API
const programs: Program[] = [
  {
    id: "strength-builder",
    title: "Strength Builder",
    category: "Strength Training",
    description:
      "Build muscle and increase strength with this comprehensive program designed for intermediate lifters.",
    image: "/placeholder.svg?height=500&width=800",
    duration: "8 weeks",
    workoutsPerWeek: 4,
    level: "Intermediate",
    goal: "Strength",
    overview:
      "The Strength Builder program is designed to help intermediate lifters increase their overall strength and muscle mass. This 8-week program focuses on compound movements with progressive overload to stimulate muscle growth and strength gains. Each week includes 4 workouts targeting different muscle groups, with built-in recovery days to prevent overtraining.",
    requirements: [
      "Access to a fully equipped gym with barbells, dumbbells, and machines",
      "Previous weightlifting experience (at least 6 months)",
      "Ability to perform basic compound movements with proper form",
      "4 days per week availability for 45-60 minute workouts",
      "Proper nutrition to support muscle growth and recovery",
    ],
    schedule: [
      {
        week: 1,
        days: [
          {
            day: 1,
            title: "Upper Body Push",
            description: "Focus on chest, shoulders, and triceps",
            exercises: [
              { name: "Bench Press", sets: 4, reps: "8-10", rest: "90 sec" },
              { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "60 sec" },
              { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60 sec" },
              { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60 sec" },
            ],
          },
          {
            day: 2,
            title: "Lower Body",
            description: "Focus on quadriceps, hamstrings, and glutes",
            exercises: [
              { name: "Squats", sets: 4, reps: "8-10", rest: "120 sec" },
              { name: "Romanian Deadlifts", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Leg Press", sets: 3, reps: "10-12", rest: "90 sec" },
              { name: "Leg Curls", sets: 3, reps: "12-15", rest: "60 sec" },
              { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" },
            ],
          },
          {
            day: 4,
            title: "Upper Body Pull",
            description: "Focus on back and biceps",
            exercises: [
              { name: "Pull-Ups", sets: 4, reps: "8-10", rest: "90 sec" },
              { name: "Bent Over Rows", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "60 sec" },
              { name: "Bicep Curls", sets: 3, reps: "12-15", rest: "60 sec" },
              { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec" },
            ],
          },
          {
            day: 5,
            title: "Full Body",
            description: "Compound movements targeting multiple muscle groups",
            exercises: [
              { name: "Deadlifts", sets: 4, reps: "6-8", rest: "120 sec" },
              { name: "Push Press", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Dumbbell Rows", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Lunges", sets: 3, reps: "10-12 per leg", rest: "60 sec" },
              { name: "Plank", sets: 3, reps: "30-60 sec", rest: "60 sec" },
            ],
          },
        ],
      },
      {
        week: 2,
        days: [
          {
            day: 1,
            title: "Upper Body Push",
            description: "Progressive overload from Week 1",
            exercises: [
              { name: "Bench Press", sets: 4, reps: "6-8", rest: "120 sec" },
              { name: "Overhead Press", sets: 3, reps: "6-8", rest: "120 sec" },
              { name: "Incline Dumbbell Press", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Tricep Pushdowns", sets: 3, reps: "10-12", rest: "60 sec" },
              { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60 sec" },
            ],
          },
          {
            day: 2,
            title: "Lower Body",
            description: "Progressive overload from Week 1",
            exercises: [
              { name: "Squats", sets: 4, reps: "6-8", rest: "120 sec" },
              { name: "Romanian Deadlifts", sets: 3, reps: "6-8", rest: "120 sec" },
              { name: "Leg Press", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Leg Curls", sets: 3, reps: "10-12", rest: "60 sec" },
              { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" },
            ],
          },
          {
            day: 4,
            title: "Upper Body Pull",
            description: "Progressive overload from Week 1",
            exercises: [
              { name: "Weighted Pull-Ups", sets: 4, reps: "6-8", rest: "120 sec" },
              { name: "Bent Over Rows", sets: 3, reps: "6-8", rest: "120 sec" },
              { name: "Lat Pulldowns", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Bicep Curls", sets: 3, reps: "10-12", rest: "60 sec" },
              { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec" },
            ],
          },
          {
            day: 5,
            title: "Full Body",
            description: "Progressive overload from Week 1",
            exercises: [
              { name: "Deadlifts", sets: 4, reps: "5-6", rest: "150 sec" },
              { name: "Push Press", sets: 3, reps: "6-8", rest: "120 sec" },
              { name: "Dumbbell Rows", sets: 3, reps: "6-8", rest: "120 sec" },
              { name: "Lunges", sets: 3, reps: "8-10 per leg", rest: "90 sec" },
              { name: "Weighted Plank", sets: 3, reps: "30-45 sec", rest: "60 sec" },
            ],
          },
        ],
      },
    ],
  },
  {
    id:"fat-burner",
    title: "Fat Burner",
    category: "Fat Burner",
    description:
      "Build muscle and increase strength with this comprehensive program designed for intermediate lifters.",
    image: "/placeholder.svg?height=500&width=800",
    duration: "8 weeks",
    workoutsPerWeek: 4,
    level: "Intermediate",
    goal: "Strength",
    overview:
      "The Strength Builder program is designed to help intermediate lifters increase their overall strength and muscle mass. This 8-week program focuses on compound movements with progressive overload to stimulate muscle growth and strength gains. Each week includes 4 workouts targeting different muscle groups, with built-in recovery days to prevent overtraining.",
    requirements: [
      "Access to a fully equipped gym with barbells, dumbbells, and machines",
      "Previous weightlifting experience (at least 6 months)",
      "Ability to perform basic compound movements with proper form",
      "4 days per week availability for 45-60 minute workouts",
      "Proper nutrition to support muscle growth and recovery",
    ],
    schedule: [
      {
        week: 1,
        days: [
          {
            day: 1,
            title: "Upper Body Push",
            description: "Focus on chest, shoulders, and triceps",
            exercises: [
              { name: "Bench Press", sets: 4, reps: "8-10", rest: "90 sec" },
              { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "60 sec" },
              { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60 sec" },
              { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60 sec" },
            ],
          },
          {
            day: 2,
            title: "Lower Body",
            description: "Focus on quadriceps, hamstrings, and glutes",
            exercises: [
              { name: "Squats", sets: 4, reps: "8-10", rest: "120 sec" },
              { name: "Romanian Deadlifts", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Leg Press", sets: 3, reps: "10-12", rest: "90 sec" },
              { name: "Leg Curls", sets: 3, reps: "12-15", rest: "60 sec" },
              { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" },
            ],
          },
          {
            day: 4,
            title: "Upper Body Pull",
            description: "Focus on back and biceps",
            exercises: [
              { name: "Pull-Ups", sets: 4, reps: "8-10", rest: "90 sec" },
              { name: "Bent Over Rows", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "60 sec" },
              { name: "Bicep Curls", sets: 3, reps: "12-15", rest: "60 sec" },
              { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec" },
            ],
          },
          {
            day: 5,
            title: "Full Body",
            description: "Compound movements targeting multiple muscle groups",
            exercises: [
              { name: "Deadlifts", sets: 4, reps: "6-8", rest: "120 sec" },
              { name: "Push Press", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Dumbbell Rows", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Lunges", sets: 3, reps: "10-12 per leg", rest: "60 sec" },
              { name: "Plank", sets: 3, reps: "30-60 sec", rest: "60 sec" },
            ],
          },
        ],
      },
      {
        week: 2,
        days: [
          {
            day: 1,
            title: "Upper Body Push",
            description: "Progressive overload from Week 1",
            exercises: [
              { name: "Bench Press", sets: 4, reps: "6-8", rest: "120 sec" },
              { name: "Overhead Press", sets: 3, reps: "6-8", rest: "120 sec" },
              { name: "Incline Dumbbell Press", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Tricep Pushdowns", sets: 3, reps: "10-12", rest: "60 sec" },
              { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60 sec" },
            ],
          },
          {
            day: 2,
            title: "Lower Body",
            description: "Progressive overload from Week 1",
            exercises: [
              { name: "Squats", sets: 4, reps: "6-8", rest: "120 sec" },
              { name: "Romanian Deadlifts", sets: 3, reps: "6-8", rest: "120 sec" },
              { name: "Leg Press", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Leg Curls", sets: 3, reps: "10-12", rest: "60 sec" },
              { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" },
            ],
          },
          {
            day: 4,
            title: "Upper Body Pull",
            description: "Progressive overload from Week 1",
            exercises: [
              { name: "Weighted Pull-Ups", sets: 4, reps: "6-8", rest: "120 sec" },
              { name: "Bent Over Rows", sets: 3, reps: "6-8", rest: "120 sec" },
              { name: "Lat Pulldowns", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Bicep Curls", sets: 3, reps: "10-12", rest: "60 sec" },
              { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec" },
            ],
          },
          {
            day: 5,
            title: "Full Body",
            description: "Progressive overload from Week 1",
            exercises: [
              { name: "Deadlifts", sets: 4, reps: "5-6", rest: "150 sec" },
              { name: "Push Press", sets: 3, reps: "6-8", rest: "120 sec" },
              { name: "Dumbbell Rows", sets: 3, reps: "6-8", rest: "120 sec" },
              { name: "Lunges", sets: 3, reps: "8-10 per leg", rest: "90 sec" },
              { name: "Weighted Plank", sets: 3, reps: "30-45 sec", rest: "60 sec" },
            ],
          },
        ],
      },
    ],
  },
  {
    id:"core-crusher",
    title: "Core Crusher",
    category: "Core Crusher",
    description:
      "Build muscle and increase strength with this comprehensive program designed for intermediate lifters.",
    image: "/placeholder.svg?height=500&width=800",
    duration: "8 weeks",
    workoutsPerWeek: 4,
    level: "Intermediate",
    goal: "Strength",
    overview:
      "The Strength Builder program is designed to help intermediate lifters increase their overall strength and muscle mass. This 8-week program focuses on compound movements with progressive overload to stimulate muscle growth and strength gains. Each week includes 4 workouts targeting different muscle groups, with built-in recovery days to prevent overtraining.",
    requirements: [
      "Access to a fully equipped gym with barbells, dumbbells, and machines",
      "Previous weightlifting experience (at least 6 months)",
      "Ability to perform basic compound movements with proper form",
      "4 days per week availability for 45-60 minute workouts",
      "Proper nutrition to support muscle growth and recovery",
    ],
    schedule: [
      {
        week: 1,
        days: [
          {
            day: 1,
            title: "Upper Body Push",
            description: "Focus on chest, shoulders, and triceps",
            exercises: [
              { name: "Bench Press", sets: 4, reps: "8-10", rest: "90 sec" },
              { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "60 sec" },
              { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60 sec" },
              { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60 sec" },
            ],
          },
          {
            day: 2,
            title: "Lower Body",
            description: "Focus on quadriceps, hamstrings, and glutes",
            exercises: [
              { name: "Squats", sets: 4, reps: "8-10", rest: "120 sec" },
              { name: "Romanian Deadlifts", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Leg Press", sets: 3, reps: "10-12", rest: "90 sec" },
              { name: "Leg Curls", sets: 3, reps: "12-15", rest: "60 sec" },
              { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" },
            ],
          },
          {
            day: 4,
            title: "Upper Body Pull",
            description: "Focus on back and biceps",
            exercises: [
              { name: "Pull-Ups", sets: 4, reps: "8-10", rest: "90 sec" },
              { name: "Bent Over Rows", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "60 sec" },
              { name: "Bicep Curls", sets: 3, reps: "12-15", rest: "60 sec" },
              { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec" },
            ],
          },
          {
            day: 5,
            title: "Full Body",
            description: "Compound movements targeting multiple muscle groups",
            exercises: [
              { name: "Deadlifts", sets: 4, reps: "6-8", rest: "120 sec" },
              { name: "Push Press", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Dumbbell Rows", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Lunges", sets: 3, reps: "10-12 per leg", rest: "60 sec" },
              { name: "Plank", sets: 3, reps: "30-60 sec", rest: "60 sec" },
            ],
          },
        ],
      },
      {
        week: 2,
        days: [
          {
            day: 1,
            title: "Upper Body Push",
            description: "Progressive overload from Week 1",
            exercises: [
              { name: "Bench Press", sets: 4, reps: "6-8", rest: "120 sec" },
              { name: "Overhead Press", sets: 3, reps: "6-8", rest: "120 sec" },
              { name: "Incline Dumbbell Press", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Tricep Pushdowns", sets: 3, reps: "10-12", rest: "60 sec" },
              { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60 sec" },
            ],
          },
          {
            day: 2,
            title: "Lower Body",
            description: "Progressive overload from Week 1",
            exercises: [
              { name: "Squats", sets: 4, reps: "6-8", rest: "120 sec" },
              { name: "Romanian Deadlifts", sets: 3, reps: "6-8", rest: "120 sec" },
              { name: "Leg Press", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Leg Curls", sets: 3, reps: "10-12", rest: "60 sec" },
              { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" },
            ],
          },
          {
            day: 4,
            title: "Upper Body Pull",
            description: "Progressive overload from Week 1",
            exercises: [
              { name: "Weighted Pull-Ups", sets: 4, reps: "6-8", rest: "120 sec" },
              { name: "Bent Over Rows", sets: 3, reps: "6-8", rest: "120 sec" },
              { name: "Lat Pulldowns", sets: 3, reps: "8-10", rest: "90 sec" },
              { name: "Bicep Curls", sets: 3, reps: "10-12", rest: "60 sec" },
              { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec" },
            ],
          },
          {
            day: 5,
            title: "Full Body",
            description: "Progressive overload from Week 1",
            exercises: [
              { name: "Deadlifts", sets: 4, reps: "5-6", rest: "150 sec" },
              { name: "Push Press", sets: 3, reps: "6-8", rest: "120 sec" },
              { name: "Dumbbell Rows", sets: 3, reps: "6-8", rest: "120 sec" },
              { name: "Lunges", sets: 3, reps: "8-10 per leg", rest: "90 sec" },
              { name: "Weighted Plank", sets: 3, reps: "30-45 sec", rest: "60 sec" },
            ],
          },
        ],
      },
    ],
  },
]

export default function ProgramDetailPage({ params }: { params: { id: string } }) {
  const program = programs.find((prog) => prog.id === params.id)

  if (!program) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <Link href="/programs">
            <Button variant="ghost" className="text-zinc-400 hover:text-white p-0">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Programs
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={program.image || "/placeholder.svg"}
                alt={program.title}
                width={800}
                height={500}
                className="object-cover w-full"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-zinc-800 text-zinc-200 border-zinc-700">
                {program.category}
              </Badge>
              <Badge variant="outline" className="bg-zinc-800 text-zinc-200 border-zinc-700">
                {program.level}
              </Badge>
              <Badge variant="outline" className="bg-zinc-800 text-zinc-200 border-zinc-700">
                {program.goal}
              </Badge>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{program.title}</h1>
              <p className="mt-2 text-zinc-400">{program.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-sm text-zinc-400">Duration</p>
                    <p className="font-medium">{program.duration}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4 flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-sm text-zinc-400">Frequency</p>
                    <p className="font-medium">{program.workoutsPerWeek}x per week</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4 flex items-center gap-3">
                  <Dumbbell className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-sm text-zinc-400">Level</p>
                    <p className="font-medium">{program.level}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4 flex items-center gap-3">
                  <BarChart className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-sm text-zinc-400">Goal</p>
                    <p className="font-medium">{program.goal}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button className="w-full bg-red-500 hover:bg-red-600">Start This Program</Button>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Program Overview</h2>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <p className="text-zinc-400">{program.overview}</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Requirements</h2>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <ul className="space-y-2">
                  {program.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-400">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Workout Schedule</h2>
            <Tabs defaultValue="week1">
              <TabsList className="bg-zinc-800 mb-4">
                {program.schedule.map((week) => (
                  <TabsTrigger key={week.week} value={`week${week.week}`}>
                    Week {week.week}
                  </TabsTrigger>
                ))}
              </TabsList>

              {program.schedule.map((week) => (
                <TabsContent key={week.week} value={`week${week.week}`} className="space-y-4">
                  {week.days.map((day) => (
                    <Card key={day.day} className="bg-zinc-900 border-zinc-800">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold flex items-center">
                            Day {day.day}: {day.title}
                          </h3>
                          <p className="text-zinc-400 mt-1">{day.description}</p>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-zinc-800">
                                <th className="text-left py-2 px-2 text-zinc-400">Exercise</th>
                                <th className="text-center py-2 px-2 text-zinc-400">Sets</th>
                                <th className="text-center py-2 px-2 text-zinc-400">Reps</th>
                                <th className="text-center py-2 px-2 text-zinc-400">Rest</th>
                              </tr>
                            </thead>
                            <tbody>
                              {day.exercises.map((exercise, index) => (
                                <tr key={index} className="border-b border-zinc-800">
                                  <td className="py-3 px-2">{exercise.name}</td>
                                  <td className="py-3 px-2 text-center">{exercise.sets}</td>
                                  <td className="py-3 px-2 text-center">{exercise.reps}</td>
                                  <td className="py-3 px-2 text-center">{exercise.rest}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button className="bg-red-500 hover:bg-red-600">Start This Program</Button>
            <Link href="/programs">
              <Button variant="outline" className="border-zinc-700 text-zinc-400 hover:bg-zinc-800">
                Browse Other Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
