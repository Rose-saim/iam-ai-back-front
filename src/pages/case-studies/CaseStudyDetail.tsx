import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, Target, BarChart, Quote } from 'lucide-react';

export default function CaseStudyDetail() {
  const { id } = useParams();

  // This would typically come from an API
  const caseStudy = {
    title: 'AI-Driven Municipal Services Optimization',
    client: 'City of Springfield',
    industry: 'Public Sector',
    duration: '6 months',
    challenge: `The City of Springfield faced significant challenges in managing municipal services efficiently. 
               Long response times, high operational costs, and citizen dissatisfaction were major concerns 
               that needed to be addressed.`,
    solution: `We implemented a comprehensive AI solution that included:
              - Smart traffic management system
              - AI-powered waste collection optimization
              - Automated citizen service portal
              - Real-time data analytics dashboard`,
    implementation: [
      'Initial assessment and strategy development',
      'Phased implementation approach',
      'Staff training and change management',
      'Continuous monitoring and optimization',
    ],
    results: [
      {
        metric: 'Response Time',
        improvement: '45%',
        description: 'Reduction in service response times',
      },
      {
        metric: 'Cost Savings',
        improvement: '30%',
        description: 'Decrease in operational costs',
      },
      {
        metric: 'Satisfaction',
        improvement: '92%',
        description: 'Citizen satisfaction rate',
      },
    ],
    testimonial: {
      quote:
        'The AI implementation has transformed how we deliver services to our citizens. The results have exceeded our expectations.',
      author: 'Sarah Johnson',
      role: 'Chief Digital Officer',
      organization: 'City of Springfield',
    },
    nextSteps: [
      'Expansion to additional service areas',
      'Integration of advanced AI capabilities',
      'Development of predictive maintenance systems',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/case-studies"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </Link>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-8">
            <div className="mb-8">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {caseStudy.industry}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-gray-600">{caseStudy.client}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-4 rounded-lg">
                <Building2 className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">Client</p>
                <p className="text-sm text-gray-600">{caseStudy.client}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Target className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">Industry</p>
                <p className="text-sm text-gray-600">{caseStudy.industry}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <BarChart className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">Duration</p>
                <p className="text-sm text-gray-600">{caseStudy.duration}</p>
              </div>
            </div>

            <div className="prose max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The Challenge
              </h2>
              <p className="text-gray-600 mb-8">{caseStudy.challenge}</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Solution
              </h2>
              <p className="text-gray-600 mb-4">{caseStudy.solution}</p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Implementation Approach
              </h3>
              <ul className="space-y-2 mb-8">
                {caseStudy.implementation.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                      ✓
                    </span>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Key Results
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {result.improvement}
                    </div>
                    <p className="text-sm text-gray-600">
                      {result.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-12">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <blockquote className="text-lg text-gray-800 mb-4">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="text-sm">
                <p className="font-medium text-gray-900">
                  {caseStudy.testimonial.author}
                </p>
                <p className="text-gray-600">
                  {caseStudy.testimonial.role},{' '}
                  {caseStudy.testimonial.organization}
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Next Steps
              </h2>
              <ul className="space-y-2">
                {caseStudy.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Start Your Success Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
