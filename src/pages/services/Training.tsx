import React from 'react';
import { BookOpen, Users, Target, Award } from 'lucide-react';
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

export default function Training() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader 
            title="AI Training Programs"
            description="Master AI implementation with our comprehensive training courses"
          />

          <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </div>
    </div>
  );
}