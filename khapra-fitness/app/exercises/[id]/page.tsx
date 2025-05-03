import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Dumbbell, Target, AlertCircle } from "lucide-react"
import { notFound } from "next/navigation"

interface Exercise {
  id: string
  name: string
  category: string
  description: string
  image: string
  difficulty: string
  equipment: string[]
  muscles: string[]
  instructions: string[]
  tips: string[]
  variations: {
    name: string
    description: string
  }[]
}

// This would typically come from a database or API
const exercises: Exercise[] = [
  {
    id: "bench-press",
    name: "Bench Press",
    category: "chest",
    description:
      "A compound exercise that targets the chest, shoulders, and triceps. The bench press is one of the most effective exercises for building upper body strength and muscle mass.",
    image: "https://images.unsplash.com/photo-1652363722833-509b3aac287b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    difficulty: "Intermediate",
    equipment: ["Barbell", "Bench", "Weight Plates", "Rack"],
    muscles: ["Chest", "Shoulders", "Triceps"],
    instructions: [
      "Lie flat on a bench with your feet on the ground.",
      "Grip the barbell with hands slightly wider than shoulder-width apart.",
      "Unrack the barbell and lower it to your mid-chest.",
      "Press the barbell back up to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
    tips: [
      "Keep your wrists straight and elbows at approximately a 45-degree angle from your body.",
      "Maintain a slight arch in your lower back.",
      "Keep your feet flat on the floor for stability.",
      "Control the weight throughout the entire movement.",
      "Consider using a spotter for heavier weights.",
    ],
    variations: [
      {
        name: "Dumbbell Bench Press",
        description:
          "Using dumbbells instead of a barbell allows for a greater range of motion and can help address muscle imbalances.",
      },
      {
        name: "Incline Bench Press",
        description: "Performed on an inclined bench to target the upper chest more effectively.",
      },
      {
        name: "Decline Bench Press",
        description: "Performed on a declined bench to target the lower chest more effectively.",
      },
    ],
  },
  {
    id: "deadlift",
    name: "Deadlift",
    category: "back",
    description:
      "A compound exercise that targets multiple muscle groups including the back, glutes, hamstrings, and core. The deadlift is considered one of the most effective exercises for building overall strength and power.",
    image: "https://images.unsplash.com/photo-1706029831405-619b27e3260c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    difficulty: "Advanced",
    equipment: ["Barbell", "Weight Plates"],
    muscles: ["Back", "Glutes", "Hamstrings", "Core", "Forearms"],
    instructions: [
      "Stand with feet hip-width apart, with the barbell over your mid-foot.",
      "Bend at the hips and knees to grip the bar with hands shoulder-width apart.",
      "Keep your back straight and chest up.",
      "Drive through your heels to lift the bar, extending your hips and knees.",
      "Stand fully upright, then reverse the movement to return the bar to the ground.",
    ],
    tips: [
      "Keep the bar close to your body throughout the movement.",
      "Engage your core and maintain a neutral spine.",
      "Drive through your heels, not your toes.",
      "Don't round your back – this can lead to injury.",
      "Use a mixed grip (one hand overhand, one underhand) for heavier weights.",
    ],
    variations: [
      {
        name: "Sumo Deadlift",
        description: "A wider stance that places more emphasis on the glutes and inner thighs.",
      },
      {
        name: "Romanian Deadlift",
        description: "Focuses more on the hamstrings and glutes with less knee bend.",
      },
      {
        name: "Trap Bar Deadlift",
        description: "Uses a hexagonal bar that allows for a more neutral grip and upright posture.",
      },
    ],
  },
  {
    id: "squat",
    name: "Squat",
    category: "legs",
    description:
      "A compound exercise that primarily targets the quadriceps, hamstrings, and glutes. The squat is often referred to as the king of all exercises due to its effectiveness in building lower body strength and muscle.",
    image: "https://plus.unsplash.com/premium_photo-1726614172307-15106d1750cd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    difficulty: "Intermediate",
    equipment: ["Barbell", "Squat Rack", "Weight Plates"],
    muscles: ["Quadriceps", "Hamstrings", "Glutes", "Core", "Lower Back"],
    instructions: [
      "Set up in a squat rack with the barbell at upper chest height.",
      "Step under the bar and position it across your upper back (not on your neck).",
      "Unrack the bar and step back, feet shoulder-width apart.",
      "Bend at the knees and hips to lower your body, keeping your chest up.",
      "Lower until your thighs are parallel to the ground or slightly below.",
      "Drive through your heels to return to the starting position.",
    ],
    tips: [
      "Keep your chest up and back straight throughout the movement.",
      "Push your knees outward slightly to prevent them from caving in.",
      "Keep your weight on your heels and mid-foot, not on your toes.",
      "Look straight ahead or slightly upward, not down at the floor.",
      "Breathe in as you lower and exhale as you push up.",
    ],
    variations: [
      {
        name: "Front Squat",
        description: "The barbell is held across the front of the shoulders, placing more emphasis on the quadriceps.",
      },
      {
        name: "Goblet Squat",
        description: "Performed with a dumbbell or kettlebell held at chest level, great for beginners.",
      },
      {
        name: "Bulgarian Split Squat",
        description: "A unilateral variation with the rear foot elevated, targeting each leg individually.",
      },
    ],
  },
]

export default function ExerciseDetailPage({ params }: { params: { id: string } }) {
  const exercise = exercises.find((ex) => ex.id === params.id)

  if (!exercise) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <Link href="/exercises">
            <Button variant="ghost" className="text-zinc-400 hover:text-white p-0">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Exercises
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={exercise.image || "/placeholder.svg"}
                alt={exercise.name}
                width={800}
                height={500}
                className="object-cover w-full"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-zinc-800 text-zinc-200 border-zinc-700">
                {exercise.category.charAt(0).toUpperCase() + exercise.category.slice(1)}
              </Badge>
              <Badge variant="outline" className="bg-zinc-800 text-zinc-200 border-zinc-700">
                {exercise.difficulty}
              </Badge>
              {exercise.muscles.map((muscle) => (
                <Badge key={muscle} variant="outline" className="bg-zinc-800 text-zinc-200 border-zinc-700">
                  {muscle}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{exercise.name}</h1>
              <p className="mt-2 text-zinc-400">{exercise.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Dumbbell className="mr-2 h-5 w-5 text-red-500" /> Equipment Needed
              </h2>
              <ul className="list-disc list-inside text-zinc-400 space-y-1">
                {exercise.equipment.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Target className="mr-2 h-5 w-5 text-red-500" /> Instructions
              </h2>
              <ol className="list-decimal list-inside text-zinc-400 space-y-2">
                {exercise.instructions.map((step, index) => (
                  <li key={index} className="pl-2">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Tips for Proper Form</h2>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <ul className="list-disc list-inside text-zinc-400 space-y-2">
                    {exercise.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Variations</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {exercise.variations.map((variation, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-2">{variation.name}</h3>
                    <p className="text-zinc-400 text-sm">{variation.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/programs">
              <Button className="bg-red-500 hover:bg-red-600">Find Programs with this Exercise</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
