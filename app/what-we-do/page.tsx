"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  Target,
  BarChart3,
  Users,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle,
  Brain,
  Calendar,
  Quote,
  Play,
} from "lucide-react"

export default function WhatWeDoPage() {
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
                         hover:before:opacity-100 bg-white/20"
              >
                Platform
              </Link>
              <Link
                href="/#careers"
                className="relative px-6 py-2 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                         hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-md hover:shadow-black/10 hover:scale-105
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
                           hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10"
                >
                  Team
                </Link>
                <Link
                  href="/what-we-do"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-green-900 font-medium text-lg rounded-lg transition-all duration-300 ease-out
                           hover:bg-white/20 hover:backdrop-blur-md hover:shadow-md hover:shadow-black/10 bg-white/20"
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
                  <span className="font-bold">Platform</span>
                </h1>
                <p className="text-2xl md:text-3xl font-light text-green-800 tracking-wider uppercase">
                  AI-Powered Sports Strategy
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
                Building AI-Powered Platforms for Every Sport
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-serif">
                We're building specialized AI-powered sports strategy platforms for different sports. Starting with
                cricket and expanding to hockey, football, and beyond, each platform is tailored to the unique strategic
                requirements and tactical nuances of its respective sport, delivering intelligent insights that
                transform how teams prepare, play, and improve.
              </p>
            </div>

            {/* Platform Vision */}
            <section className="mb-20">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-8">
                    <img src="/cricket-strategizer-logo.png" alt="Cricket Strategyzer" className="h-24 w-auto" />
                  </div>
                  <h3 className="text-3xl font-bold text-green-800 mb-6">Our Ultimate Vision</h3>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
                    This comprehensive platform represents our long-term strategic roadmap for revolutionizing sports
                    intelligence. We are systematically building towards this vision, with our foundational architecture
                    and pre-planning phase now complete. Our go-to-market strategy begins with cricket as our flagship
                    vertical, establishing market validation before horizontal expansion across multiple sports
                    disciplines.
                  </p>
                  <div className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Launching August 2025
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Pre-Match Planning */}
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Calendar className="w-6 h-6 text-green-700" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">Strategic Pre-Planning</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        AI-powered team selection optimization
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Dynamic tactical formation planning
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Opposition analysis and weakness identification
                      </li>
                    </ul>
                  </div>

                  {/* Live Match Intelligence */}
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-green-700" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">Real-Time Intelligence</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Live tactical adjustment recommendations
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Situational strategy optimization
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Performance monitoring and alerts
                      </li>
                    </ul>
                  </div>

                  {/* Post-Match Analysis */}
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <BarChart3 className="w-6 h-6 text-green-700" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">Advanced Analytics</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Comprehensive performance analytics
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Strategic decision impact assessment
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Continuous improvement recommendations
                      </li>
                    </ul>
                  </div>

                  {/* Team Management */}
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-green-700" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">Team Management Suite</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Centralized player profile management
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Training schedule optimization
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Communication and collaboration tools
                      </li>
                    </ul>
                  </div>

                  {/* AI Engine */}
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-green-700" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">AI Strategy Engine</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Machine learning-powered insights
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Predictive modeling and forecasting
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Adaptive learning from team patterns
                      </li>
                    </ul>
                  </div>

                  {/* Cross-Platform Access */}
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Globe className="w-6 h-6 text-green-700" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">Universal Access</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Cross-platform compatibility
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Cloud-based data synchronization
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Offline functionality for remote access
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Demo Section */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-green-800 mb-6">Experience Cricket Strategyzer</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  See our AI-powered cricket strategy platform in action. Explore the interface, test strategic
                  recommendations, and discover how intelligent insights can transform your team's performance.
                </p>
              </div>

              {/* Storylane Interactive Demo Embed */}
              <div
                style={{
                  backgroundColor: "#065f46",
                  padding: "2rem",
                  borderRadius: "1rem",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
                <div
                  className="sl-embed"
                  style={{
                    position: "relative",
                    paddingBottom: "calc(51.96% + 25px)",
                    width: "100%",
                    height: "0",
                    transform: "scale(1)",
                  }}
                >
                  <iframe
                    loading="lazy"
                    className="sl-demo"
                    src="https://app.storylane.io/demo/2ffa5hkmrnc9?embed=inline"
                    name="sl-embed"
                    allow="fullscreen"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "0.5rem",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              <div className="text-center mt-8">
                <Link
                  href="https://cricketstrategyzer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Try the Full Platform
                </Link>
              </div>
            </section>

            {/* Platform Benefits */}
            <section className="mb-20">
              <h3 className="text-3xl font-bold text-green-800 mb-12 text-center">Quantifiable Performance Impact</h3>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h4 className="text-2xl font-bold text-green-800 mb-6">Measurable Efficiency Gains</h4>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Our platform delivers tangible improvements in strategic decision-making speed and tactical
                    complexity management, enabling teams to process and execute sophisticated game plans with
                    unprecedented efficiency.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">Performance Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <span className="font-medium text-gray-700">Workflow Acceleration</span>
                      <span className="text-green-600 font-bold text-xl">5x Faster</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <span className="font-medium text-gray-700">Strategic Combinations</span>
                      <span className="text-green-600 font-bold text-xl">10,000+ Permutations</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="mb-20">
              <h3 className="text-3xl font-bold text-green-800 mb-12 text-center">Industry Validation</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
                  <Quote className="w-8 h-8 text-green-500 mb-4" />
                  <p className="text-gray-700 mb-4 italic">"This is amazing and will revolutionize cricket strategy"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-800">Rizlan Iqbar</p>
                    <p className="text-sm text-gray-600">Qatar Cricket Captain</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
                  <Quote className="w-8 h-8 text-green-500 mb-4" />
                  <p className="text-gray-700 mb-4 italic">"I can see this transforming grassroots cricket"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-800">Ashan Perera</p>
                    <p className="text-sm text-gray-600">Head of Stallions Cricket Academy</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
                  <Quote className="w-8 h-8 text-green-500 mb-4" />
                  <p className="text-gray-700 mb-4 italic">"This is insanely good!"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-800">Yousuf Qureshi</p>
                    <p className="text-sm text-gray-600">Former Captain Texas A&M University at Qatar</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
                  <Quote className="w-8 h-8 text-green-500 mb-4" />
                  <p className="text-gray-700 mb-4 italic">"Wish I had this when I played for my school team"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-800">Fitrus Ali</p>
                    <p className="text-sm text-gray-600">Former Opener at Newton International Academy</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-green-500">
                  <Quote className="w-8 h-8 text-green-500 mb-4" />
                  <p className="text-gray-700 mb-4 italic">"This will help me a lot as an analyst"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-800">Athar Tahir</p>
                    <p className="text-sm text-gray-600">Analyst of Domestic Qatar Team</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Multi-Sport Future */}
            <section className="mb-20">
              <h3 className="text-3xl font-bold text-green-800 mb-12 text-center">Multi-Sport Expansion Roadmap</h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-green-700" />
                  </div>
                  <h4 className="text-xl font-bold text-green-800 mb-4">Cricket</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Our flagship platform delivering comprehensive strategic intelligence for cricket teams at every
                    level, from grassroots to professional.
                  </p>
                  <div className="text-sm text-green-600 font-medium bg-green-200 px-3 py-1 rounded-full inline-block">
                    Launching August 2025
                  </div>
                </div>

                <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-10 h-10 text-gray-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Hockey</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Line combinations, power play strategies, and defensive system optimization for ice and field hockey
                    teams with specialized tactical intelligence.
                  </p>
                  <div className="text-sm text-gray-600 font-medium bg-gray-200 px-3 py-1 rounded-full inline-block">
                    Coming 2027
                  </div>
                </div>

                <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-10 h-10 text-gray-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Football & Beyond</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Formation analysis, player positioning optimization, and tactical evolution tracking for football,
                    plus additional sports platforms.
                  </p>
                  <div className="text-sm text-gray-600 font-medium bg-gray-200 px-3 py-1 rounded-full inline-block">
                    Coming 2028+
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Each sport presents unique strategic challenges and tactical nuances. Our AI architecture is designed
                  to adapt and learn the specific requirements of each discipline while maintaining the same core
                  intelligence framework that drives winning decisions across all sports.
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <div className="text-center bg-green-900 text-white rounded-2xl p-12">
              <h3 className="text-3xl font-bold mb-6">Experience the Future of Sports Strategy</h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Join the strategic revolution that's transforming how teams prepare, play, and improve. Start with
                Cricket Strategyzer launching in August 2025 and be part of our multi-sport expansion journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://cricketstrategyzer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Try Cricket Strategyzer Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="mailto:info@sportsvector.co"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-900 transition-colors text-lg"
                >
                  Schedule a Demo
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
