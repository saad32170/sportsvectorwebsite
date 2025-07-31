"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function BackendDeveloperInternPage() {
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
          <h1 className="text-6xl font-bold text-white mb-4">Backend Developer Intern</h1>
          <p className="text-2xl text-gray-300">Location: Remote/In-person</p>
        </div>

        {/* Role Section */}
        <section className="mb-12">
          <div className="space-y-8 text-gray-300">
            <p>
              We're looking for a backend engineer who can optimize our systems, improve routing, and build scalable
              infrastructure for new tools. You'll help shape the engine behind our AI strategy platform and work
              closely with frontend and AI teams to turn ideas into reality.
            </p>
          </div>
        </section>

        {/* Responsibilities Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Index and structure new and existing database tables</li>
            <li>Improve API routing and backend performance</li>
            <li>Build and support new features with clean, modular logic</li>
            <li>Maintain and evolve a growing backend codebase</li>
            <li>Work closely with the AI and product teams to bring features to life</li>
            <li>Write clean, testable code and plan for scale</li>
          </ul>
        </section>

        {/* You Might Be a Fit If Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6">You Might Be a Fit If</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>You have experience building backend systems with modern frameworks (Flask, FastAPI, Node.js, etc.)</li>
            <li>You're familiar with relational databases (PostgreSQL preferred) and query optimization</li>
            <li>You've worked with REST APIs or know how to structure one cleanly</li>
            <li>You care about modular, scalable architecture</li>
            <li>You enjoy turning feature ideas into technical plans and shipping them</li>
          </ul>
        </section>

        {/* What You'll Learn */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6">What You'll Learn</h2>
          <div className="space-y-4 text-gray-300 mb-4">
            <p>
              This role is designed to stretch your skills and build real-world experience. Along the way, you will:
            </p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Contribute to a large, evolving backend powering live products</li>
            <li>Learn how to implement and manage modern API architecture</li>
            <li>Explore how MCPs (Model Context Protocol) and scalable systems are applied in practice</li>
            <li>Use real-world AI tools in production environments</li>
            <li>Understand how strategy tech works behind the scenes in live sports</li>
          </ul>
          <div className="mt-4 text-gray-300">
            <p>You'll also get to spearhead features that go live—real users, real impact.</p>
          </div>
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
                href="mailto:hamza@sportsvector.co"
                className="text-white underline hover:text-gray-300 font-semibold"
              >
                hamza@sportsvector.co
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
              <Link href="mailto:hamza@sportsvector.co" className="hover:text-green-600 transition-colors">
                hamza@sportsvector.co
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
