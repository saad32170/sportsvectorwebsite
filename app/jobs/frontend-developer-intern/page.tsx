"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function FrontendDeveloperInternPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-green-900">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Back Link */}
        <Link href="/" className="text-green-300 hover:text-white underline mb-8 inline-block">
          ← Back to Home
        </Link>

        {/* Job Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">Frontend Developer Intern</h1>
          <p className="text-2xl text-gray-300">Location: Remote/In-person</p>
        </div>

        {/* Role Section */}
        <section className="mb-12">
          <div className="space-y-8 text-gray-300">
            <p>
              We're looking for a front-end developer who is passionate about breaking down complexity and building
              intuitive, clean user interfaces. You will work closely with our product team to improve and simplify the
              design of our existing components, as well as design entirely new pages for upcoming planning tools.
            </p>
          </div>
        </section>

        {/* Responsibilities Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Design and implement new pages and flows for the web application</li>
            <li>Improve and simplify existing UI components</li>
            <li>Optimize front-end performance and load speeds</li>
            <li>Collaborate closely with backend developers and designers</li>
            <li>Ensure a consistent, clean visual design and user experience</li>
            <li>Think like a user and make each interaction smooth and self-explanatory</li>
          </ul>
        </section>

        {/* You Might Be a Fit If Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6">You Might Be a Fit If</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>You have a strong portfolio of front-end or UI-focused projects</li>
            <li>You care deeply about simplicity and usability</li>
            <li>You've worked with component-based frameworks (like React, Vue, or similar)</li>
            <li>You're comfortable iterating fast and giving design feedback</li>
            <li>You've built or contributed to design systems before</li>
          </ul>
        </section>

        {/* What You'll Learn */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6">What You'll Learn</h2>
          <div className="space-y-4 text-gray-300 mb-4">
            <p>This is more than just a development role—you'll grow as a builder. Along the way, you will:</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Build and own parts of a real product used by live teams</li>
            <li>Learn how to navigate and contribute to a large, evolving UI codebase</li>
            <li>Design and ship production-ready components at scale</li>
            <li>Explore and integrate AI tools to boost productivity and creativity</li>
            <li>Gain hands-on insight into how sports tech and strategy platforms actually work</li>
          </ul>
        </section>

        {/* About */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6">About</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Sports Vector is an AI startup with a mission to democratize AI strategy for all sports. We believe
              strategy should be a weapon in every team's arsenal — not just those with analysts, budgets, or big data
              labs.
            </p>
            <p>
              Our flagship product, Cricket Strategyzer, helps grassroots and semi-pro teams prepare, adapt, and win
              using tools previously reserved for the elite.
            </p>
          </div>
        </section>

        {/* Apply */}
        <section className="bg-green-800 p-8 rounded-lg">
          <h2 className="text-4xl font-semibold text-white mb-6">Applying</h2>
          <div className="space-y-4 text-gray-200">
            <p>
              To apply, please email your resume and a short note on a project you're proud of to{" "}
              <Link
                href="mailto:careers@sportsvector.co"
                className="text-white underline hover:text-gray-300 font-semibold"
              >
                careers@sportsvector.co
              </Link>
              .
            </p>
            <p>
              If there appears to be a fit, we'll reach out to schedule short technicals. The final step is an onsite in
              our office, where you'll work on a small project, discuss ideas, and meet the team.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-green-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center space-y-6">
            <img src="/logo.png" alt="Sports Vector" className="h-16 w-auto" />
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
              <Link href="mailto:careers@sportsvector.co" className="hover:text-green-600 transition-colors">
                careers@sportsvector.co
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
