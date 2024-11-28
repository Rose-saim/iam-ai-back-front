import React from 'react';
import { Settings, Workflow, Shield, RefreshCw } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const implementationPhases = [
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Setup & Integration",
    description: "Seamless integration of AI solutions into existing systems"
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Process Optimization",
    description: "Streamline workflows with AI-powered automation"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security & Compliance",
    description: "Ensure data protection and regulatory compliance"
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Continuous Improvement",
    description: "Regular updates and optimization of AI systems"
  }
];

export default function Implementation() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader 
            title="Implementation Support"
            description="Expert guidance for successful AI implementation in your organization"
          />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {implementationPhases.map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {phase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Start Implementation</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>1-3 months</option>
                    <option>3-6 months</option>
                    <option>6+ months</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Begin Implementation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}