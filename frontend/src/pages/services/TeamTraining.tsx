import React from 'react';
import { Users, BookOpen, Target, Award } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const trainingModules = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "AI Fundamentals",
    description: "Core concepts and principles of AI technology"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Practical Applications",
    description: "Real-world use cases and implementation scenarios"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Collaboration",
    description: "Working effectively with AI-powered tools"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Skill Certification",
    description: "Industry-recognized certification program"
  }
];

export default function TeamTraining() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader 
            title="Team Training Programs"
            description="Empower your team with the skills they need to succeed in the AI era"
          />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {trainingModules.map((module, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                <p className="text-gray-600">{module.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Request Training Program</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Team Size
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}