import React from 'react';
import { Building2, Users, Shield, ArrowRight } from 'lucide-react';
import AppleHero from '../../../components/AppleHero';
import AppleSection from '../../../components/AppleSection';
import AppleButton from '../../../components/AppleButton';

const solutions = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Smart City Solutions",
    description: "Optimize municipal services with AI-powered systems and analytics."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Citizen Engagement",
    description: "Enhance public service delivery and citizen satisfaction through AI."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Policy Framework",
    description: "Develop and implement ethical AI policies for public services."
  }
];

const caseStudies = [
  {
    title: "City of Innovation",
    results: [
      "30% reduction in operational costs",
      "45% improvement in service delivery time",
      "92% citizen satisfaction rate"
    ]
  },
  {
    title: "Smart Municipality",
    results: [
      "40% increase in resource efficiency",
      "50% reduction in processing time",
      "85% digital service adoption"
    ]
  }
];

export default function B2GLearnMore() {
  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <AppleHero
        title="Innovate Public Services"
        subtitle="Transform government services with cutting-edge AI solutions"
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2940"
        theme="dark"
      />

      <AppleSection
        title="Government Solutions"
        subtitle="Comprehensive AI implementation for public sector organizations"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </AppleSection>

      <AppleSection background="bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-16">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">{study.title}</h3>
                <ul className="space-y-4">
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      <span className="text-gray-600">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AppleSection>

      <AppleSection>
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-6">
            Ready to Transform Public Services?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading public organizations in the AI transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppleButton to="/contact" variant="primary" size="large">
              Schedule Consultation
            </AppleButton>
            <AppleButton to="/register-public-service" variant="secondary" size="large">
              Create Government Account
            </AppleButton>
          </div>
        </div>
      </AppleSection>
    </div>
  );
}