"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function MarketingPage() {
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
          <h1 className="text-6xl font-bold text-white mb-4">Marketing Interns</h1>
          <p className="text-2xl text-gray-300">Location: Remote/In-person</p>
        </div>

        {/* Role Section */}
        <section className="mb-12">
          <div className="space-y-8 text-gray-300">
            <p>
              We're hiring interns that can create content at scale, grow our brand across LinkedIn, Instagram, TikTok,
              and Twitter, and collaborate with real players and teams. If you've helped grow an account before, love
              experimenting with trends, and know what grabs attention, this is for you.
            </p>
          </div>
        </section>

        {/* Responsibilities Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Create and schedule high-volume content across social platforms</li>
            <li>Produce reels, stories, carousels, and short-form clips to boost reach</li>
            <li>Collaborate with athletes and influencers to amplify the brand</li>
            <li>Research trends, formats, and hooks that resonate with sports audiences</li>
            <li>Help define and build the Sports Vector brand voice</li>
            <li>Track performance, test different content styles, and double down on what works</li>
          </ul>
        </section>

        {/* You Might Be a Fit If Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6">You Might Be a Fit If</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>You've grown a social media account or helped a brand grow from X to Y</li>
            <li>You're familiar with editing tools, caption writing, and platform algorithms</li>
            <li>You understand the difference between viral content and random content</li>
            <li>You have experience managing multiple platforms (LinkedIn, TikTok, Twitter, Instagram)</li>
            <li>You're proactive, self-driven, and love experimenting with new ideas</li>
          </ul>
        </section>

        {/* What You'll Learn */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6">What You'll Learn</h2>
          <div className="space-y-4 text-gray-300 mb-4">
            <p>This internship is a hands-on masterclass in modern content, automation, and brand growth. You will:</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Learn how to build and automate viral content workflows using n8n</li>
            <li>Set up smart posting systems that run on autopilot</li>
            <li>Do structured research on trends, competitors, and audience behavior</li>
            <li>Build your own automation projects for content pipelines</li>
            <li>Understand how to scale a brand from zero to thousands of engaged followers</li>
            <li>Work directly with founders and real athletes on active campaigns</li>
          </ul>
          <div className="mt-4 text-gray-300">
            <p>You won't just manage content—you'll build systems that scale it.</p>
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
