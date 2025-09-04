"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [footerEmailCopied, setFooterEmailCopied] = useState(false)

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

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("careers@sportsvector.co")
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const copyFooterEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("info@sportsvector.co")
      setFooterEmailCopied(true)
      setTimeout(() => setFooterEmailCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy footer email:", err)
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-xl border-b border-white/40 shadow-lg shadow-black/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo on the left */}
            <div className="flex items-center">
              <img src="/sports-vector-logo.png" alt="Sports Vector" className="h-10 w-auto" />
            </div>

            {/* Desktop Navigation Links - Centered */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4">
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
                <button
                  onClick={() => {
                    scrollToSection("mission")
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-3 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                           hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10"
                >
                  Mission
                </button>
                <button
                  onClick={() => {
                    scrollToSection("products")
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-3 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                           hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10"
                >
                  Products
                </button>
                <button
                  onClick={() => {
                    scrollToSection("careers")
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-3 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                           hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10"
                >
                  Careers
                </button>
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
                <h1 className="text-5xl md:text-6xl text-green-900 mb-3 tracking-wide font-sans">
                  <span className="font-bold">Sports Vector</span>
                </h1>
                <p className="text-2xl md:text-3xl font-light text-green-800 tracking-wider uppercase font-sans">
                  Sports Strategy - Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div id="mission" className="bg-white text-gray-900 leading-4 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className={`transition-all duration-2000 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-light text-green-800 tracking-wide mb-12 font-sans">
              Advancing &amp; Making Sports Strategy Accessible with AI
            </h2>

            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-700 font-sans">
              <p>
                Sports Vector is making elite-level sports strategy accessible to everyone, from school teams and
                academies to national squads. We are building the future of sports strategy. AI-powered. End to end.
                Built for every level of the game.
              </p>

              <p>
                Our pioneer product,{" "}
                <a
                  href="https://www.crictier.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-800 underline transition-colors"
                >
                  Crictier
                </a>
                , connects and executes the full lifecycle of cricket strategy. From team selection and player roles to
                live tactics and post-match analysis, every phase flows into the next.
              </p>

              <p>
                This is more than analytics. It is a complete system that helps teams think faster, act smarter, and
                compete with confidence, irrespective of their level or budget.
              </p>

              <p>No shortcuts. Just strategy that works.</p>

              <p className="text-gray-600 mt-12">— Saad and Hamza</p>
            </div>
          </div>
        </div>
      </div>

      {/* Backed by Section */}
      <div className="bg-white tracking-tighter py-0">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-500 mb-8 tracking-wide uppercase">Backed by</h3>
            <div className="flex items-center justify-center space-x-12 md:space-x-16">
              {/* Google Cloud */}
              <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                <img
                  src="/images/partners/cloud_lockup-669717fc.png"
                  alt="Google Cloud"
                  className="h-12 md:h-16 w-auto transition-all duration-300"
                />
              </div>

              {/* Microsoft Azure */}
              <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                <img
                  src="/images/partners/azure-logo.png"
                  alt="Microsoft Azure"
                  className="h-12 md:h-16 w-auto transition-all duration-300"
                />
              </div>

              {/* Cloudflare */}
              <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                <img
                  src="/images/partners/Cloudflare_Logo.png"
                  alt="Cloudflare"
                  className="h-12 md:h-16 w-auto transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section - Crictier */}
      <div id="products" className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="flex justify-center mb-4">
              <img src="/crictier-logo.png" alt="Crictier" className="h-32 w-auto" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Pioneer Product:{" "}
              <a
                href="https://www.crictier.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-800 underline transition-colors"
              >
                Crictier
              </a>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From teamsheets to the last over and beyond. Ai-first strategy that learns, adapts, and always keeps your
              team ahead.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-3">
              {/* Feature 1 - Centralized Planning */}
              <div className="group relative overflow-hidden rounded-xl p-4 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-60"></div>
                <div className="absolute inset-0 border border-white/50 rounded-xl shadow-lg shadow-green-500/20"></div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                <div className="flex items-center space-x-3 relative z-10">
                  <div className="w-8 h-8 bg-gradient-to-br from-white/60 via-white/40 to-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/60 shadow-inner shadow-white/50">
                    <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">Centralized Planning</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Organize all team operations in one integrated platform with seamless workflow management.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Instant Data Insights */}
              <div className="group relative overflow-hidden rounded-xl p-4 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-60"></div>
                <div className="absolute inset-0 border border-white/50 rounded-xl shadow-lg shadow-green-500/20"></div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                <div className="flex items-center space-x-3 relative z-10">
                  <div className="w-8 h-8 bg-gradient-to-br from-white/60 via-white/40 to-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/60 shadow-inner shadow-white/50">
                    <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">Instant Data Insights</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Access clear, actionable analytics when it matters most with real-time data processing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 - On-Field Clarity */}
              <div className="group relative overflow-hidden rounded-xl p-4 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-60"></div>
                <div className="absolute inset-0 border border-white/50 rounded-xl shadow-lg shadow-green-500/20"></div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                <div className="flex items-center space-x-3 relative z-10">
                  <div className="w-8 h-8 bg-gradient-to-br from-white/60 via-white/40 to-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/60 shadow-inner shadow-white/50">
                    <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">On-Field Clarity</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Ensure players receive precise, real-time instructions with crystal-clear communication tools.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 - Elite Strategy Access */}
              <div className="group relative overflow-hidden rounded-xl p-4 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-60"></div>
                <div className="absolute inset-0 border border-white/50 rounded-xl shadow-lg shadow-green-500/20"></div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                <div className="flex items-center space-x-3 relative z-10">
                  <div className="w-8 h-8 bg-gradient-to-br from-white/60 via-white/40 to-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/60 shadow-inner shadow-white/50">
                    <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">Elite Strategy Access</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Leverage pro-level tactics and advanced strategic frameworks, regardless of your team's resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-8 mt-2">
              <div className="relative mb-8">
                <div
                  className="transform transition-transform duration-700 ease-out hover:scale-105"
                  style={{ transform: "perspective(1000px) rotateY(-15deg) translateZ(-20px)" }}
                >
                  <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                    {/* Screenshot */}
                    <img
                      src="/crictier-screenshot.jpeg"
                      alt="Crictier Batting Order Planner Interface"
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-xl blur-xl -z-10 transform scale-105"></div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="https://crictier.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20 hover:-translate-y-0.5 text-base group"
                >
                  <svg
                    className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Try Crictier
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div id="careers" className="bg-white/95 backdrop-blur-xl py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-white/60 to-green-100/40"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="border-t border-green-200/60 pt-16">
            <h2 className="text-4xl font-light text-green-900 mb-12 font-sans text-center">Join Our Team</h2>

            <div className="space-y-8 text-lg leading-relaxed font-sans text-gray-700 mb-16 text-center max-w-3xl mx-auto">
              <p>
                We're continuously looking for high-velocity interns who want to build real things and ship fast. Join
                us if you're curious, ambitious, and ready to help shape the future of AI in sports.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Frontend Developer */}
              <Link href="/jobs/frontend-developer-intern" className="group">
                <div className="bg-white/70 backdrop-blur-md border border-green-200/60 rounded-xl p-6 h-full transition-all duration-300 hover:bg-white/90 hover:border-green-300/80 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-blue-500/20 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      Frontend
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    Frontend Developer Intern
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Build intuitive, clean user interfaces and design new pages for our planning tools.
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Remote/In-person
                  </div>
                </div>
              </Link>

              {/* Backend Developer */}
              <Link href="/jobs/backend-developer-intern" className="group">
                <div className="bg-white/70 backdrop-blur-md border border-green-200/60 rounded-xl p-6 h-full transition-all duration-300 hover:bg-white/90 hover:border-green-300/80 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-purple-500/20 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      Backend
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    Backend Developer Intern
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Build robust APIs and data infrastructure to power our sports strategy platform.
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Remote/In-person
                  </div>
                </div>
              </Link>

              {/* Machine Learning Developer */}
              <Link href="/jobs/machine-learning-developer-intern" className="group">
                <div className="bg-white/70 backdrop-blur-md border border-green-200/60 rounded-xl p-6 h-full transition-all duration-300 hover:bg-white/90 hover:border-green-300/80 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-orange-500/20 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      AI/ML
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    Machine Learning Intern
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Build predictive models and analytics systems for sports performance insights.
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Remote/In-person
                  </div>
                </div>
              </Link>

              {/* Computer Vision Developer */}
              <Link href="/jobs/computer-vision-developer-intern" className="group">
                <div className="bg-white/70 backdrop-blur-md border border-green-200/60 rounded-xl p-6 h-full transition-all duration-300 hover:bg-white/90 hover:border-green-300/80 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-orange-500/20 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      AI/ML
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    Computer Vision Intern
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Develop vision systems for automated sports analysis and player tracking.
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    In-person
                  </div>
                </div>
              </Link>

              {/* AI Developer */}
              <Link href="/jobs/ai-llm-developer-intern" className="group">
                <div className="bg-white/70 backdrop-blur-md border border-green-200/60 rounded-xl p-6 h-full transition-all duration-300 hover:bg-white/90 hover:border-green-300/80 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-orange-500/20 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      AI/ML
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    LLM Integration Intern
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Develop AI models and integrate LLMs to power intelligent sports strategy features.
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Remote/In-person
                  </div>
                </div>
              </Link>

              {/* Marketing */}
              <Link href="/jobs/marketing" className="group">
                <div className="bg-white/70 backdrop-blur-md border border-green-200/60 rounded-xl p-6 h-full transition-all duration-300 hover:bg-white/90 hover:border-green-300/80 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-pink-500/20 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                      Marketing
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    Marketing Interns
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Help grow our brand and connect with sports teams worldwide through creative campaigns.
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    In-person
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-16 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-light text-gray-900 mb-6 font-sans">Ready to Join Us?</h3>
                <p className="text-lg text-gray-600 mb-8 font-sans leading-relaxed">
                  Send us your resume and tell us what excites you about building the future of sports strategy.
                </p>
                <button
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20 hover:-translate-y-0.5 text-base group"
                >
                  <svg
                    className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {emailCopied ? "Copied!" : "careers@sportsvector.co"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-green-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 items-center">
            {/* LinkedIn - Left aligned */}
            <div className="flex justify-start">
              <Link
                href="https://www.linkedin.com/company/sports-vector"
                className="hover:text-green-600 transition-colors text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </div>

            {/* Logo - Center aligned */}
            <div className="flex justify-center">
              <img src="/sports-vector-logo.png" alt="Sports Vector" className="h-16 w-auto" />
            </div>

            {/* Email - Right aligned */}
            <div className="flex justify-end">
              <button
                onClick={copyFooterEmailToClipboard}
                className="hover:text-green-600 transition-colors cursor-pointer text-gray-500"
              >
                {footerEmailCopied ? "Copied!" : "info@sportsvector.co"}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
