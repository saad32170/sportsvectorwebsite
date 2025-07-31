"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Target, Users, Globe, ArrowRight } from "lucide-react"

export default function OurStoryPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-xl border-b border-white/40 shadow-lg shadow-black/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo on the left */}
            <div className="flex items-center">
              <Link href="/">
                <img src="/sports-vector-logo.png" alt="Sports Vector" className="h-10 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation Links - Centered */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4">
              <Link
                href="/our-story"
                className="relative px-6 py-2 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                         hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10 hover:scale-105
                         active:bg-white/30 active:scale-95 active:shadow-inner
                         before:absolute before:inset-0 before:rounded-lg before:border before:border-white/30 before:opacity-0 before:transition-opacity before:duration-300
                         hover:before:opacity-100 bg-white/20"
              >
                Our Story
              </Link>
              <Link
                href="/who-we-are"
                className="relative px-6 py-2 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                         hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10 hover:scale-105
                         active:bg-white/30 active:scale-95 active:shadow-inner
                         before:absolute before:inset-0 before:rounded-lg before:border before:border-white/30 before:opacity-0 before:transition-opacity before:duration-300
                         hover:before:opacity-100"
              >
                Team
              </Link>
              <Link
                href="/what-we-do"
                className="relative px-6 py-2 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                         hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10 hover:scale-105
                         active:bg-white/30 active:scale-95 active:shadow-inner
                         before:absolute before:inset-0 before:rounded-lg before:border before:border-white/30 before:opacity-0 before:transition-opacity before:duration-300
                         hover:before:opacity-100"
              >
                Platform
              </Link>
              <Link
                href="/#careers"
                className="relative px-6 py-2 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                         hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10 hover:scale-105
                         active:bg-white/30 active:scale-95 active:shadow-inner
                         before:absolute before:inset-0 before:rounded-lg before:border before:border-white/30 before:opacity-0 before:transition-opacity before:duration-300
                         hover:before:opacity-100"
              >
                Careers
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2 text-green-900 rounded-lg transition-all duration-300 ease-out
                         hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10
                         active:bg-white/30 active:scale-95"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/40 shadow-lg">
              <div className="px-6 py-4 space-y-2">
                <Link
                  href="/our-story"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                           hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10 bg-white/20"
                >
                  Our Story
                </Link>
                <Link
                  href="/who-we-are"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                           hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10"
                >
                  Team
                </Link>
                <Link
                  href="/what-we-do"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                           hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10"
                >
                  Platform
                </Link>
                <Link
                  href="/#careers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                           hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10"
                >
                  Careers
                </Link>
              </div>
            </div>
          )}
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
                  <span className="font-bold">Our Story</span>
                </h1>
                <p className="text-2xl md:text-3xl font-light text-green-800 tracking-wider uppercase">
                  From Field to Future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`transition-all duration-2000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Introduction */}
            <div className="mb-20 text-center">
              <h2 className="text-3xl md:text-4xl font-light text-green-800 tracking-wide mb-8">
                The Journey That Started on the Cricket Field
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-serif">
                Sports Vector was born from a simple frustration: watching talented teams lose not because they lacked
                skill, but because they lacked the strategic insights that could have changed everything. As former
                semi-professional cricketers turned engineers, we knew there had to be a better way.
              </p>
            </div>

            {/* The Problem Section */}
            <section className="mb-20">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-12">
                <h3 className="text-3xl font-bold text-red-800 mb-8 text-center">The Problem We Lived</h3>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-2xl font-bold text-red-700 mb-6">For Professional Teams</h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          <strong>Fragmented Tools:</strong> Using 5+ different platforms for team management,
                          analytics, and strategy planning
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          <strong>Data Overload:</strong> Drowning in statistics but starving for actionable insights
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          <strong>Communication Gaps:</strong> Strategic decisions getting lost between coaching staff
                          and players
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-red-700 mb-6">For Grassroots Teams</h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          <strong>No Access:</strong> Elite-level strategy tools priced out of reach for most teams
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          <strong>Gut Decisions:</strong> Relying on intuition instead of data-driven strategy
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          <strong>Wasted Potential:</strong> Talented players held back by suboptimal team strategy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Mission and Vision */}
            <section className="mb-20">
              <div className="bg-green-900 text-white rounded-2xl p-12">
                <div className="grid md:grid-cols-2 gap-12 text-center">
                  <div>
                    <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-green-800" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
                    <p className="text-green-100 leading-relaxed">
                      Our vision with Cricket Strategyzer is to build a product that allows teams to alter strategies
                      in-game from multiple inputs such as match scenario, ground insights, historical insights, and
                      individual in-game player data.
                    </p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Globe className="w-8 h-8 text-green-800" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
                    <p className="text-green-100 leading-relaxed">
                      Access for everyone and bring AI strategy in sports for everyone. We believe every team,
                      regardless of budget or location, deserves access to professional-level strategic intelligence.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <div className="text-center bg-green-900 text-white rounded-2xl p-12">
              <h3 className="text-3xl font-bold mb-6">Be Part of the Story</h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                We're just getting started. Whether you're a team looking to gain a competitive edge, a developer who
                wants to build the future of sports, or an investor who believes in democratizing excellence—we want you
                with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://cricketstrategyzer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Try Cricket Strategyzer
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/#careers"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-900 transition-colors text-lg"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Our Team
                </Link>
              </div>
            </div>
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
              <Link href="mailto:info@sportsvector.co" className="hover:text-green-600 transition-colors">
                info@sportsvector.co
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
