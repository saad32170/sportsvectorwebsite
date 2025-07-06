"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function AILLMDeveloperInternPage() {
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
          <h1 className="text-6xl font-bold text-white mb-4">AI Developer Intern</h1>
          <p className="text-2xl text-gray-300">Location: Remote/In-person</p>
        </div>

        {/* Role Section */}
        <section className="mb-12">
          <div className="space-y-8 text-gray-300">
            <p>
              As an AI Engineer Intern, you'll dive deep into developing, testing, and deploying cutting-edge AI systems
              that directly impact how teams strategize and perform.
            </p>
            <p>
              We're looking for someone who's not afraid to experiment, prototype, and push the limits of what's
              possible with AI in sports.
            </p>
          </div>
        </section>

        {/* Responsibilities Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Build and integrate AI models into different features of the platform</li>
            <li>Fine-tune existing models and optimize performance</li>
            <li>Write and refine prompts using prompt engineering techniques</li>
            <li>Work with tools like LangChain and LangGraph to power intelligent workflows</li>
            <li>Collect, clean, and structure datasets for model training and evaluation</li>
            <li>Run evaluation tests and help with human-in-the-loop systems</li>
            <li>Continuously explore new models, tools, and methods for experimentation</li>
          </ul>
        </section>

        {/* You Might Be a Fit If Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6">You Might Be a Fit If</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>You've already built a project or two using AI (especially a RAG system)</li>
            <li>You have hands-on experience with Python and AI libraries</li>
            <li>You've explored LangChain, LangGraph, or similar orchestration tools</li>
            <li>You're curious, experimental, and not afraid to break things and learn fast</li>
            <li>You enjoy working on real-world problems with real-world users</li>
          </ul>
        </section>

        {/* What You'll Learn */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6">What You'll Learn</h2>
          <div className="space-y-4 text-gray-300 mb-4">
            <p>
              This internship gives you exposure to building production-grade AI systems in a fast-moving startup
              environment. You will:
            </p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Work on live features and ship real AI-powered products</li>
            <li>Learn how to build and test modular AI systems</li>
            <li>Experiment with multiple models and prompt strategies</li>
            <li>Understand how AI can power decision-making in sports tech</li>
            <li>Learn how to write evals, run live experiments, and apply human-in-the-loop workflows</li>
            <li>Collaborate across backend, product, and data teams to bring ideas to life</li>
          </ul>
          <div className="mt-4 text-gray-300">
            <p>It's a chance to level up your AI skills in a real, applied setting.</p>
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
                href="mailto:hiring@sportsvector.co"
                className="text-white underline hover:text-gray-300 font-semibold"
              >
                hiring@sportsvector.co
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
