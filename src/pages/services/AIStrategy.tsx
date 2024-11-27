import React from 'react';
import { Brain, BarChart, Users, Lightbulb } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const benefits = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Strategic Planning',
    description:
      'Develop a comprehensive AI strategy aligned with your business goals',
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: 'ROI Analysis',
    description:
      'Measure and optimize the impact of AI on your business processes',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Stakeholder Alignment',
    description: 'Ensure buy-in and support from all key stakeholders',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Innovation Roadmap',
    description: 'Create a clear path for AI implementation and innovation',
  },
];

export default function AIStrategy() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader
            title="AI Strategy Consulting"
            description="Transform your business with expert guidance on AI implementation and strategy"
          />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">
              Schedule a Strategy Session
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Book Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
