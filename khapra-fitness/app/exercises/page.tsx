import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"

export default function ExercisesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Exercise Library</h1>
          <p className="mt-4 text-zinc-400 md:text-xl">
            Browse our comprehensive collection of exercises categorized by muscle groups.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 md:grid-cols-7 bg-zinc-800">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="chest">Chest</TabsTrigger>
            <TabsTrigger value="back">Back</TabsTrigger>
            <TabsTrigger value="legs">Legs</TabsTrigger>
            <TabsTrigger value="shoulders">Shoulders</TabsTrigger>
            <TabsTrigger value="arms">Arms</TabsTrigger>
            <TabsTrigger value="core">Core</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {exercises.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="chest" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {exercises
                .filter((exercise) => exercise.category === "chest")
                .map((exercise) => (
                  <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="back" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {exercises
                .filter((exercise) => exercise.category === "back")
                .map((exercise) => (
                  <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="legs" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {exercises
                .filter((exercise) => exercise.category === "legs")
                .map((exercise) => (
                  <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="shoulders" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {exercises
                .filter((exercise) => exercise.category === "shoulders")
                .map((exercise) => (
                  <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="arms" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {exercises
                .filter((exercise) => exercise.category === "arms")
                .map((exercise) => (
                  <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="core" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {exercises
                .filter((exercise) => exercise.category === "core")
                .map((exercise) => (
                  <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <Card className="overflow-hidden bg-zinc-900 border-zinc-800">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={exercise.image || "/placeholder.svg"}
          alt={exercise.name}
          width={400}
          height={225}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-xl">{exercise.name}</CardTitle>
        <CardDescription className="text-zinc-400">
          {exercise.category.charAt(0).toUpperCase() + exercise.category.slice(1)}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-zinc-400 line-clamp-2">{exercise.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/exercises/${exercise.id}`} className="w-full">
          <Button variant="outline" className="w-full border-zinc-700 text-zinc-400 hover:bg-zinc-800">
            View Details <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

interface Exercise {
  id: string
  name: string
  category: string
  description: string
  image: string
  difficulty: string
  equipment: string[]
  muscles: string[]
}

const exercises: Exercise[] = [
  {
    id: "bench-press",
    name: "Bench Press",
    category: "chest",
    description:
      "A compound exercise that targets the chest, shoulders, and triceps. Lie on a bench and press the weight upward.",
    image: "https://images.unsplash.com/photo-1652363722833-509b3aac287b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    difficulty: "Intermediate",
    equipment: ["Barbell", "Bench"],
    muscles: ["Chest", "Shoulders", "Triceps"],
  },
  {
    id: "deadlift",
    name: "Deadlift",
    category: "back",
    description:
      "A compound exercise that targets multiple muscle groups. Lift a loaded barbell off the ground to hip level.",
    image: "https://images.unsplash.com/photo-1706029831405-619b27e3260c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    difficulty: "Advanced",
    equipment: ["Barbell"],
    muscles: ["Back", "Glutes", "Hamstrings", "Core"],
  },
  {
    id: "squat",
    name: "Squat",
    category: "legs",
    description:
      "A compound exercise that primarily targets the quadriceps, hamstrings, and glutes. Lower your body as if sitting in a chair.",
    image: "https://plus.unsplash.com/premium_photo-1726614172307-15106d1750cd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    difficulty: "Intermediate",
    equipment: ["Barbell", "Squat Rack"],
    muscles: ["Quadriceps", "Hamstrings", "Glutes", "Core"],
  },
  {
    id: "shoulder-press",
    name: "Shoulder Press",
    category: "shoulders",
    description:
      "A compound exercise that targets the shoulders and triceps. Press the weight overhead from shoulder level.",
    image: "https://plus.unsplash.com/premium_photo-1663134071963-8d9cb580c3dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    difficulty: "Intermediate",
    equipment: ["Dumbbells", "Barbell"],
    muscles: ["Shoulders", "Triceps"],
  },
  {
    id: "bicep-curl",
    name: "Bicep Curl",
    category: "arms",
    description:
      "An isolation exercise that targets the biceps. Curl the weight from a hanging position to shoulder level.",
    image: "https://plus.unsplash.com/premium_photo-1682435533755-273aec988f08?q=80&w=2045&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    difficulty: "Beginner",
    equipment: ["Dumbbells", "Barbell"],
    muscles: ["Biceps", "Forearms"],
  },
  {
    id: "plank",
    name: "Plank",
    category: "core",
    description:
      "A bodyweight exercise that targets the core muscles. Hold a push-up position with your body in a straight line.",
    image: "https://plus.unsplash.com/premium_photo-1666736569193-6b2a79b6e71a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    difficulty: "Beginner",
    equipment: ["None"],
    muscles: ["Abs", "Lower Back", "Shoulders"],
  },
  {
    id: "pull-up",
    name: "Pull-Up",
    category: "back",
    description:
      "A compound bodyweight exercise that targets the back and biceps. Pull your body up to a bar from a hanging position.",
    image: "/placeholder.svg?height=225&width=400",
    difficulty: "Intermediate",
    equipment: ["Pull-up Bar"],
    muscles: ["Back", "Biceps", "Shoulders"],
  },
  {
    id: "push-up",
    name: "Push-Up",
    category: "chest",
    description:
      "A compound bodyweight exercise that targets the chest, shoulders, and triceps. Lower your body to the ground and push back up.",
    image: "https://plus.unsplash.com/premium_photo-1667511316841-6a775f347479?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    difficulty: "Beginner",
    equipment: ["None"],
    muscles: ["Chest", "Shoulders", "Triceps", "Core"],
  },
  {
    id: "lunges",
    name: "Lunges",
    category: "legs",
    description:
      "A unilateral exercise that targets the quadriceps, hamstrings, and glutes. Step forward and lower your body until both knees are bent at 90 degrees.",
    image: "https://plus.unsplash.com/premium_photo-1661670909452-e6ba7c3a7139?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    difficulty: "Beginner",
    equipment: ["None", "Dumbbells"],
    muscles: ["Quadriceps", "Hamstrings", "Glutes", "Core"],
  },
]
