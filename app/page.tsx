"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image Section */}
      <div className="relative h-screen">
        <div
          className={`w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-2000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2021%2C%202025%2C%2005_33_17%20PM-wHckQX9qDguyhVU4nvHSQTQFs5otNk.png')",
          }}
        />
      </div>

      {/* Content Section */}
      <div className="bg-white text-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className={`transition-all duration-2000 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl md:text-6xl text-green-800 mb-4 tracking-wide">
              <span className="font-bold">Game Forge</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-light text-green-700 mb-16 tracking-wide">
              Democratizing Access to AI Strategy for all sports
            </h2>

            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-700 font-serif">
              <p>
                Game Forge is a sports tech startup on a mission to democratize AI-powered strategy for every level of
                sport, starting with cricket. We believe the advanced tools used by professional teams should not be
                limited to those with big budgets or massive staff. Strategy should be accessible to everyone, from
                school teams to national academies.
              </p>

              <p>
                We're building AI products that turn real game data into actionable plans. Our flagship platform,{" "}
                <Link
                  href="https://cricketstrategyzer.com"
                  className="text-green-800 underline hover:text-green-600 transition-colors font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cricket Strategyzer
                </Link>
                , helps grassroots and semi-pro teams prepare, adapt, and outsmart the opposition using tools once
                reserved for the elite.
              </p>

              <p>
                AI now makes it possible to bring strategy, planning, and in-game insights directly to the people who
                need them most. We are focused on giving teams the ability to make better decisions before, during, and
                after every match using real data and intelligent models.
              </p>

              <p>
                We are moving fast, testing boldly, and building products that actually help teams win. We care about
                impact, not hype.
              </p>

              <p>If that sounds like your kind of mission, come build with us.</p>

              <p className="text-gray-600 mt-12">— Saad and Hamza</p>
            </div>
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div className="bg-green-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-t border-green-700 pt-16">
            <h2 className="text-4xl font-light text-white mb-12">Careers</h2>

            <div className="space-y-6 text-lg leading-relaxed font-serif text-gray-200 mb-12">
              <p>
                We're looking for high-velocity interns who want to build real things and ship fast. Join us if you're
                curious, ambitious, and ready to help shape the future of AI in sports.
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
                href="mailto:hiring@gameforge.com"
                className="text-white underline hover:text-gray-300 transition-colors font-semibold"
              >
                hiring@gameforge.com
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-green-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center space-y-6">
            <img src="/logo.png" alt="Game Forge" className="h-16 w-auto" />
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
                href="https://www.linkedin.com/company/game-forge-sports"
                className="hover:text-green-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              <Link href="mailto:hiring@gameforge.com" className="hover:text-green-600 transition-colors">
                hiring@gameforge.com
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
