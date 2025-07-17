"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Puzzle, FileText, AlertTriangle, Lock } from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-xl border-b border-white/40 shadow-lg shadow-black/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo on the left */}
            <div className="flex items-center">
              <img src="/sports-vector-logo.png" alt="Sports Vector" className="h-10 w-auto" />
            </div>

            {/* Navigation Links - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
              <button
                onClick={() => scrollToSection("mission")}
                className="relative px-6 py-2 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                         hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10 hover:scale-105
                         active:bg-white/30 active:scale-95 active:shadow-inner
                         before:absolute before:inset-0 before:rounded-lg before:border before:border-white/30 before:opacity-0 before:transition-opacity before:duration-300
                         hover:before:opacity-100"
              >
                Mission
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="relative px-6 py-2 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                         hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10 hover:scale-105
                         active:bg-white/30 active:scale-95 active:shadow-inner
                         before:absolute before:inset-0 before:rounded-lg before:border before:border-white/30 before:opacity-0 before:transition-opacity before:duration-300
                         hover:before:opacity-100"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("careers")}
                className="relative px-6 py-2 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                         hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10 hover:scale-105
                         active:bg-white/30 active:scale-95 active:shadow-inner
                         before:absolute before:inset-0 before:rounded-lg before:border before:border-white/30 before:opacity-0 before:transition-opacity before:duration-300
                         hover:before:opacity-100"
              >
                Careers
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Image Section */}
      <div className="relative h-screen">
        <div
          className={`w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-2000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: "url('/hero-image.png')",
          }}
        />

        {/* Overlay text on image */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="bg-white/25 backdrop-blur-xl border-t border-white/30 shadow-2xl shadow-black/10 py-12">
            <div className="max-w-4xl mx-auto px-6">
              <div
                className={`transition-all duration-2000 ease-out delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-5xl md:text-6xl text-green-900 mb-3 tracking-wide">
                  <span className="font-bold">Sports Vector</span>
                </h1>
                <p className="text-2xl md:text-3xl font-light text-green-800 tracking-wider uppercase">
                  Total Strategy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div id="mission" className="bg-white text-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className={`transition-all duration-2000 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-light text-green-800 tracking-wide mb-12">
              Advancing &amp; Making Sports Strategy Accessible with AI
            </h2>

            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-700 font-serif">
              <p>
                Sports Vector is building the future of sports strategy. AI-powered. End to end. Built for every level
                of the game.
              </p>

              <p>
                We're advancing what's possible for professional teams while making elite-level strategy accessible to
                everyone, from school teams and academies to national squads.
              </p>

              <p>
                Our flagship product,{" "}
                <Link
                  href="https://cricketstrategyzer.com"
                  className="text-green-800 underline hover:text-green-600 transition-colors font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cricket Strategyzer
                </Link>
                , connects the full lifecycle of decision-making. From team selection and player roles to live tactics
                and post-match analysis, every phase flows into the next.
              </p>

              <p>
                Pre-match planning drives in-game execution. Match data fuels feedback. Post-game insights sharpen the
                next strategy. Nothing gets left behind.
              </p>

              <p>
                This is more than analytics. It is a complete system that helps teams think faster, act smarter, and
                compete with confidence, no matter their level or budget.
              </p>

              <p>
                We are building fast, testing in the real world, and focusing on what actually helps teams win. No
                fluff. No shortcuts. Just strategy that works.
              </p>

              <p>If that sounds like your kind of mission, come build with us.</p>

              <p className="text-gray-600 mt-12">— Saad and Hamza</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section - Cricket Strategizer */}
      <div id="products" className="bg-green-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="flex justify-center mb-4">
              <img src="/cricket-strategizer-logo.png" alt="Cricket Strategyzer" className="h-32 w-auto" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Pioneer Product: Cricket Strategyzer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From teamsheets to the last over and beyond. Ai-first strategy that learns, adapts, and always keeps your
              team ahead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex items-start">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Puzzle className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-2">Centralized Planning</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Organize all team operations in one integrated platform.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex items-start">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FileText className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-2">Instant Data Insights</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Access clear, actionable analytics when it matters most.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex items-start">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-2">On-Field Clarity</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ensure players receive precise, real-time instructions.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex items-start">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Lock className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-2">Elite Strategy Access</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Leverage pro-level tactics, no matter your team's resources.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="https://cricketstrategyzer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors text-lg"
            >
              Try Cricket Strategyzer
            </Link>
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div id="careers" className="bg-green-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-t border-green-700 pt-16">
            <h2 className="text-4xl font-light text-white mb-12">Careers</h2>

            <div className="space-y-6 text-lg leading-relaxed font-serif text-gray-200 mb-12">
              <p>
                We're continuously looking for high-velocity interns who want to build real things and ship fast. Join
                us if you're curious, ambitious, and ready to help shape the future of AI in sports.
              </p>
            </div>

            {/* Career Listings */}
            <div className="space-y-3 mb-12">
              <div className="flex justify-between items-center py-4 border-b border-green-700">
                <Link
                  href="/jobs/frontend-developer-intern"
                  className="text-white hover:text-gray-300 underline transition-colors text-lg"
                >
                  Frontend Developer Intern
                </Link>
                <span className="text-gray-400">Remote/In-person</span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-green-700">
                <Link
                  href="/jobs/backend-developer-intern"
                  className="text-white hover:text-gray-300 underline transition-colors text-lg"
                >
                  Backend Developer Intern
                </Link>
                <span className="text-gray-400">Remote/In-person</span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-green-700">
                <Link
                  href="/jobs/ai-llm-developer-intern"
                  className="text-white hover:text-gray-300 underline transition-colors text-lg"
                >
                  AI Developer Intern
                </Link>
                <span className="text-gray-400">Remote/In-person</span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-green-700">
                <Link
                  href="/jobs/machine-learning-developer-intern"
                  className="text-white hover:text-gray-300 underline transition-colors text-lg"
                >
                  Machine Learning Developer Intern
                </Link>
                <span className="text-gray-400">Remote/In-person</span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-green-700">
                <Link
                  href="/jobs/computer-vision-developer-intern"
                  className="text-white hover:text-gray-300 underline transition-colors text-lg"
                >
                  Computer Vision Developer Intern
                </Link>
                <span className="text-gray-400">Remote/In-person</span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-green-700">
                <Link
                  href="/jobs/marketing"
                  className="text-white hover:text-gray-300 underline transition-colors text-lg"
                >
                  Marketing Interns
                </Link>
                <span className="text-gray-400">Remote/In-person</span>
              </div>
            </div>

            <p className="text-gray-200 text-lg font-serif">
              Please email your resume and a short note about what excites you to{" "}
              <Link
                href="mailto:hiring@sportsvector.co"
                className="text-white underline hover:text-gray-300 transition-colors font-semibold"
              >
                hiring@sportsvector.co
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-green-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center space-y-6">
            <img src="/sports-vector-logo.png" alt="Sports Vector" className="h-16 w-auto" />
            <div className="flex justify-center space-x-12 text-gray-500">
              <Link
                href="https://cricketstrategyzer.com/blog"
                className="hover:text-green-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </Link>
              <Link
                href="https://www.linkedin.com/company/sports-vector"
                className="hover:text-green-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              <Link href="mailto:hiring@sportsvector.co" className="hover:text-green-600 transition-colors">
                hiring@sportsvector.co
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
