"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function MachineLearningDeveloperInternPage() {
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
          <h1 className="text-8xl font-bold text-white mb-4">Machine Learning Developer Intern</h1>
          <p className="text-lg text-gray-300">Location: Remote/In-person</p>
        </div>

        {/* Role Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6">Role</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-gray-200 mb-4">Sample Projects</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Build predictive models for player performance analysis</li>
                <li>Develop clustering algorithms for team strategy optimization</li>
                <li>Create recommendation systems for match tactics</li>
                <li>Implement time-series forecasting for match outcomes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-gray-200 mb-4">You might be a good fit if</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>You have experience with machine learning frameworks (scikit-learn, pandas, numpy)</li>
                <li>You're familiar with statistical analysis and data science</li>
                <li>You enjoy working with large datasets and finding patterns</li>
                <li>You have an interest in sports analytics and statistics</li>
                <li>You're comfortable with Python and data visualization tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What Will You Learn */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6">What will you learn</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Advanced machine learning techniques for sports data</li>
            <li>Building production ML pipelines</li>
            <li>Working with real-time sports analytics</li>
            <li>Feature engineering for sports performance metrics</li>
            <li>Model deployment and monitoring in production</li>
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
