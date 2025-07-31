"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Award, Users, BookOpen, Lightbulb, Heart, Globe, Zap } from "lucide-react"

export default function WhoWeArePage() {
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
                         hover:before:opacity-100"
              >
                Our Story
              </Link>
              <Link
                href="/who-we-are"
                className="relative px-6 py-2 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                         hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10 hover:scale-105
                         active:bg-white/30 active:scale-95 active:shadow-inner
                         before:absolute before:inset-0 before:rounded-lg before:border before:border-white/30 before:opacity-0 before:transition-opacity before:duration-300
                         hover:before:opacity-100 bg-white/20"
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
                           hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10"
                >
                  Our Story
                </Link>
                <Link
                  href="/who-we-are"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                           hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10 bg-white/20"
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
                  <span className="font-bold">Team</span>
                </h1>
                <p className="text-2xl md:text-3xl font-light text-green-800 tracking-wider uppercase">
                  Players, Engineers, Dreamers
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
                The Perfect Blend of Field Experience and Technical Excellence
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-serif">
                We're not just another tech startup. We're former semi-professional cricketers who became engineers,
                combining deep sports knowledge with cutting-edge technical skills. We understand both the strategic
                complexities of competitive sports and the technical challenges of building scalable AI systems.
              </p>
            </div>

            {/* Founders Section */}
            <section className="mb-20">
              <h3 className="text-3xl font-bold text-green-800 mb-12 text-center">Meet Our Founders</h3>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Muhammad Saad */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-8">
                    <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                      <img src="/saad-photo.png" alt="Muhammad Saad" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-2xl font-bold text-green-900 mb-2">Muhammad Saad</h4>
                    <p className="text-green-700 font-semibold text-lg">Co-Founder & CEO</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start bg-white/50 p-4 rounded-lg">
                      <Award className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Academic Excellence</p>
                        <p className="text-gray-600 text-sm">
                          TAMUQ Mechanical Engineer, Qatar Foundation Excellence Award recipient
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white/50 p-4 rounded-lg">
                      <Users className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Semi-Professional Athlete</p>
                        <p className="text-gray-600 text-sm">
                          Former semi-professional cricketer in Qatar's competitive circuit
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white/50 p-4 rounded-lg">
                      <BookOpen className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Technical Builder</p>
                        <p className="text-gray-600 text-sm">
                          Built and deployed 3 AI web applications, published author
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hamza Ghauri */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-8">
                    <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                      <img src="/hamza-photo.png" alt="Hamza Ghauri" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-2xl font-bold text-green-900 mb-2">Hamza Ghauri</h4>
                    <p className="text-green-700 font-semibold text-lg">Co-Founder & COO</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start bg-white/50 p-4 rounded-lg">
                      <Award className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Engineering Excellence</p>
                        <p className="text-gray-600 text-sm">TAMUQ graduate with honors in Mechanical Engineering</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white/50 p-4 rounded-lg">
                      <Users className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Startup Operations</p>
                        <p className="text-gray-600 text-sm">
                          Former operations manager at AI startup, led GCC market launch
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white/50 p-4 rounded-lg">
                      <Users className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Semi-Professional Athlete</p>
                        <p className="text-gray-600 text-sm">
                          Played cricket semi-professionally in Pakistan and Qatar
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white/50 p-4 rounded-lg">
                      <BookOpen className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Research & Development</p>
                        <p className="text-gray-600 text-sm">
                          ML and computer vision expertise, multiple peer-reviewed publications
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Journey Section */}
            <section className="mb-20">
              <div className="bg-gradient-to-r from-green-900 to-green-800 text-white rounded-2xl p-12">
                <h3 className="text-3xl font-bold mb-8 text-center">Our Journey to Sports Vector</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-green-800" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">The Playing Field</h4>
                    <p className="text-green-100 leading-relaxed">
                      Both founders experienced firsthand the strategic challenges teams face at semi-professional and
                      competitive levels across Qatar and Pakistan.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-green-800" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">The Engineering Lab</h4>
                    <p className="text-green-100 leading-relaxed">
                      Years of technical education and hands-on experience building AI systems gave us the tools to
                      solve complex problems at scale.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-8 h-8 text-green-800" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">The Eureka Moment</h4>
                    <p className="text-green-100 leading-relaxed">
                      Realizing we could bridge the gap between elite sports strategy and accessible technology, Sports
                      Vector was born.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Advisors Section */}
            <section className="mb-20">
              <h3 className="text-3xl font-bold text-green-800 mb-12 text-center">Strategic Advisors</h3>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                We're backed by elite athletes and industry experts who understand both the strategic needs of
                competitive sports and the potential of AI technology.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-green-200 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-10 h-10 text-green-700" />
                  </div>
                  <h4 className="text-xl font-bold text-green-900 mb-2">Rizlan Iqbar</h4>
                  <p className="text-green-700 font-semibold mb-2">Qatar National Cricket Captain</p>
                  <p className="text-green-600 font-medium mb-4">Product Strategy Advisor</p>
                  <p className="text-gray-600 leading-relaxed">
                    Provides insights into the strategic needs of national-level cricket teams and helps shape our
                    product roadmap based on real competitive requirements.
                  </p>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Award className="w-10 h-10 text-green-700" />
                  </div>
                  <h4 className="text-xl font-bold text-green-900 mb-2">Fajr Naveed</h4>
                  <p className="text-green-700 font-semibold mb-2">Pakistan National Player</p>
                  <p className="text-green-600 font-medium mb-4">Product Strategy Advisor</p>
                  <p className="text-gray-600 leading-relaxed">
                    Brings international cricket experience and deep understanding of player psychology to help us build
                    tools that teams actually want to use.
                  </p>
                </div>
              </div>
            </section>

            {/* Company Values Section */}
            <section className="mb-20">
              <h3 className="text-3xl font-bold text-green-800 mb-12 text-center">What Drives Us Every Day</h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-green-700" />
                  </div>
                  <h4 className="text-xl font-bold text-green-900 mb-4">Player-First Mindset</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Having been on the field ourselves, we build every feature with the player and coach experience at
                    the center. We know what works because we've lived it.
                  </p>
                </div>

                <div className="text-center p-8 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-10 h-10 text-green-700" />
                  </div>
                  <h4 className="text-xl font-bold text-green-900 mb-4">Technical Excellence</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our engineering backgrounds ensure we build robust, scalable solutions that can handle the demands
                    of competitive sports at any level.
                  </p>
                </div>

                <div className="text-center p-8 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-10 h-10 text-green-700" />
                  </div>
                  <h4 className="text-xl font-bold text-green-900 mb-4">Global Accessibility</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Elite strategy shouldn't be limited to elite budgets. We're committed to making world-class sports
                    intelligence accessible to teams everywhere.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <div className="text-center bg-green-900 text-white rounded-2xl p-12">
              <h3 className="text-3xl font-bold mb-6">Ready to Join Our Mission?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                We're always looking for passionate people who want to revolutionize sports strategy. Whether you're a
                developer, designer, sports analyst, or just someone who believes in our vision, we'd love to hear from
                you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#careers"
                  className="inline-flex items-center px-8 py-4 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Users className="w-5 h-5 mr-2" />
                  View Open Positions
                </Link>
                <Link
                  href="mailto:info@sportsvector.co"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-900 transition-colors text-lg"
                >
                  Get in Touch
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
