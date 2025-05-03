"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dumbbell, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { href: "/", label: "Home" },
    { href: "/exercises", label: "Exercises" },
    { href: "/programs", label: "Programs" },
    { href: "/bmi-calculator", label: "BMI Calculator" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-red-500" />
          <span className="text-xl font-bold">KHAPRA</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-red-500 ${
                pathname === route.href ? "text-red-500" : "text-zinc-400"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden ml-auto">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-zinc-950 p-4">
          <nav className="flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-lg font-medium p-2 rounded-md transition-colors hover:bg-zinc-900 ${
                  pathname === route.href ? "text-red-500" : "text-zinc-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
