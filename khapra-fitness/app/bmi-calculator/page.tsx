"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function BMICalculator() {
  const [unit, setUnit] = useState("metric")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [feet, setFeet] = useState("")
  const [inches, setInches] = useState("")
  const [pounds, setPounds] = useState("")
  const [bmi, setBmi] = useState<number | null>(null)
  const [bmiCategory, setBmiCategory] = useState("")
  const [error, setError] = useState("")

  const calculateBMI = () => {
    setError("")

    if (unit === "metric") {
      if (!height || !weight) {
        setError("Please enter both height and weight")
        return
      }

      const heightInMeters = Number.parseFloat(height) / 100
      const weightInKg = Number.parseFloat(weight)

      if (isNaN(heightInMeters) || isNaN(weightInKg) || heightInMeters <= 0 || weightInKg <= 0) {
        setError("Please enter valid height and weight values")
        return
      }

      const calculatedBMI = weightInKg / (heightInMeters * heightInMeters)
      setBmi(Number.parseFloat(calculatedBMI.toFixed(1)))
      setBmiCategory(getBMICategory(calculatedBMI))
    } else {
      if (!feet || !pounds) {
        setError("Please enter both height and weight")
        return
      }

      const heightInInches = Number.parseFloat(feet) * 12 + (Number.parseFloat(inches) || 0)
      const weightInPounds = Number.parseFloat(pounds)

      if (isNaN(heightInInches) || isNaN(weightInPounds) || heightInInches <= 0 || weightInPounds <= 0) {
        setError("Please enter valid height and weight values")
        return
      }

      const calculatedBMI = (weightInPounds * 703) / (heightInInches * heightInInches)
      setBmi(Number.parseFloat(calculatedBMI.toFixed(1)))
      setBmiCategory(getBMICategory(calculatedBMI))
    }
  }

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return "Underweight"
    if (bmi < 25) return "Normal weight"
    if (bmi < 30) return "Overweight"
    return "Obesity"
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Underweight":
        return "text-yellow-500"
      case "Normal weight":
        return "text-green-500"
      case "Overweight":
        return "text-orange-500"
      case "Obesity":
        return "text-red-500"
      default:
        return ""
    }
  }

  const resetCalculator = () => {
    setHeight("")
    setWeight("")
    setFeet("")
    setInches("")
    setPounds("")
    setBmi(null)
    setBmiCategory("")
    setError("")
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">BMI Calculator</h1>
          <p className="mt-4 text-zinc-400 md:text-xl">
            Calculate your Body Mass Index (BMI) to check if your weight is healthy for your height.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Calculate Your BMI</CardTitle>
              <CardDescription className="text-zinc-400">
                Enter your details below to calculate your BMI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Unit System</Label>
                  <RadioGroup value={unit} onValueChange={setUnit} className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="metric" id="metric" />
                      <Label htmlFor="metric" className="font-normal">
                        Metric (cm, kg)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="imperial" id="imperial" />
                      <Label htmlFor="imperial" className="font-normal">
                        Imperial (ft, lbs)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {unit === "metric" ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="e.g. 175"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="bg-zinc-800 border-zinc-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="e.g. 70"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="bg-zinc-800 border-zinc-700"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label>Height (ft & in)</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Input
                            type="number"
                            placeholder="Feet"
                            value={feet}
                            onChange={(e) => setFeet(e.target.value)}
                            className="bg-zinc-800 border-zinc-700"
                          />
                        </div>
                        <div>
                          <Input
                            type="number"
                            placeholder="Inches"
                            value={inches}
                            onChange={(e) => setInches(e.target.value)}
                            className="bg-zinc-800 border-zinc-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pounds">Weight (lbs)</Label>
                      <Input
                        id="pounds"
                        type="number"
                        placeholder="e.g. 154"
                        value={pounds}
                        onChange={(e) => setPounds(e.target.value)}
                        className="bg-zinc-800 border-zinc-700"
                      />
                    </div>
                  </>
                )}

                {error && (
                  <Alert variant="destructive" className="bg-red-900/20 border-red-900 text-red-400">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="flex gap-2">
                  <Button onClick={calculateBMI} className="flex-1 bg-red-500 hover:bg-red-600">
                    Calculate
                  </Button>
                  <Button
                    variant="outline"
                    onClick={resetCalculator}
                    className="border-zinc-700 text-zinc-400 hover:bg-zinc-800"
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Your Results</CardTitle>
              <CardDescription className="text-zinc-400">
                Understand what your BMI means for your health
              </CardDescription>
            </CardHeader>
            <CardContent>
              {bmi ? (
                <div className="space-y-6">
                  <div className="flex flex-col items-center justify-center p-6 border rounded-lg border-zinc-800 bg-zinc-800/50">
                    <p className="text-sm text-zinc-400">Your BMI is</p>
                    <p className="text-5xl font-bold my-2">{bmi}</p>
                    <p className={`text-lg font-medium ${getCategoryColor(bmiCategory)}`}>{bmiCategory}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">BMI Categories:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Underweight</span>
                        <span className="text-sm text-yellow-500">Below 18.5</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Normal weight</span>
                        <span className="text-sm text-green-500">18.5 - 24.9</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Overweight</span>
                        <span className="text-sm text-orange-500">25 - 29.9</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Obesity</span>
                        <span className="text-sm text-red-500">30 or higher</span>
                      </div>
                    </div>
                  </div>

                  <Alert className="bg-zinc-800/50 border-zinc-700">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <AlertTitle>Health Tip</AlertTitle>
                    <AlertDescription className="text-zinc-400">
                      BMI is a useful measurement for most people over 18, but it has limitations. It may not be
                      accurate for athletes, pregnant women, or the elderly.
                    </AlertDescription>
                  </Alert>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[300px] text-center p-6">
                  <p className="text-zinc-400">
                    Enter your height and weight to calculate your BMI and see your results here.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Understanding Your BMI</h2>
          <p className="text-zinc-400">
            Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is BMI = kg/m²
            where kg is a person's weight in kilograms and m² is their height in meters squared.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">What BMI Indicates</h3>
              <p className="text-zinc-400">
                BMI can be used to indicate if you are underweight, normal weight, overweight, or obese. However, it
                does not directly measure body fat and doesn't account for factors like muscle mass, bone density, and
                overall body composition.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Next Steps</h3>
              <p className="text-zinc-400">
                If your BMI falls outside the normal range, consider consulting with a healthcare professional. They can
                provide personalized advice and may recommend additional assessments to evaluate your health status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
