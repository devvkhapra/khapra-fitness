import Link from "next/link"
import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-950 py-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-red-500" />
              <span className="text-xl font-bold">KHAPRA</span>
            </Link>
            <p className="text-sm text-zinc-400">
              Transform your body and mind with our expert fitness programs and guidance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/exercises" className="text-sm text-zinc-400 hover:text-red-500">
                  Exercises
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm text-zinc-400 hover:text-red-500">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/bmi-calculator" className="text-sm text-zinc-400 hover:text-red-500">
                  BMI Calculator
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-zinc-400 hover:text-red-500">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-400 hover:text-red-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-zinc-400 hover:text-red-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-red-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-red-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-red-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-red-500">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
            <p className="mt-4 text-sm text-zinc-400">Subscribe to our newsletter for fitness tips and updates.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-6 text-center">
          <p className="text-xs text-zinc-400">© {new Date().getFullYear()} Khapra Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
