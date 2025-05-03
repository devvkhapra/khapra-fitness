"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formState)
    setIsSubmitted(true)
    // Reset form after submission
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="mt-4 text-zinc-400 md:text-xl">Have questions or feedback? We'd love to hear from you.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription className="text-zinc-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-zinc-800 border-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-zinc-800 border-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="bg-zinc-800 border-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px] bg-zinc-800 border-zinc-700"
                  />
                </div>
                <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                  Send Message
                </Button>
                {isSubmitted && (
                  <div className="flex items-center gap-2 text-green-500 mt-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Message sent successfully!</span>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-red-500/10">
                    <Mail className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-zinc-400">info@khaprafitness.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-red-500/10">
                    <Phone className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-zinc-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-red-500/10">
                    <MapPin className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Location</h3>
                    <p className="text-zinc-400">123 Fitness Street, Gym City, GC 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-lg overflow-hidden h-[300px] relative">
              {/* This would be replaced with an actual map in a real application */}
              <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400">Interactive Map Would Be Here</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">What are your operating hours?</h3>
                <p className="text-zinc-400">
                  Our customer support team is available Monday through Friday from 9 AM to 6 PM EST. Our online
                  resources and programs are available 24/7.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">How do I cancel my subscription?</h3>
                <p className="text-zinc-400">
                  You can cancel your subscription at any time through your account settings. If you need assistance,
                  please contact our support team.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">Do you offer refunds?</h3>
                <p className="text-zinc-400">
                  Yes, we offer a 14-day money-back guarantee on all our programs. If you're not satisfied, please
                  contact us for a full refund.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">Can I switch between programs?</h3>
                <p className="text-zinc-400">
                  Yes, you can switch between programs at any time. Your progress will be saved, allowing you to return
                  to previous programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
