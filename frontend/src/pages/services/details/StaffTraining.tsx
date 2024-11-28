import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Target, Award } from 'lucide-react';
import AppleHero from '../../../components/AppleHero';
import AppleSection from '../../../components/AppleSection';
import AppleButton from '../../../components/AppleButton';

const features = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Customized Training",
    description: "Tailored programs designed for your team's specific needs and industry requirements."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description: "Foster a collaborative learning environment with group exercises and projects."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Skill Assessment",
    description: "Regular evaluations to track progress and identify areas for improvement."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Certification",
    description: "Industry-recognized certifications upon completion of training modules."
  }
];

const modules = [
  {
    title: "AI Fundamentals",
    duration: "4 weeks",
    topics: [
      "Introduction to AI concepts",
      "Machine learning basics",
      "Data analysis fundamentals",
      "AI ethics and best practices"
    ]
  },
  {
    title: "Advanced Implementation",
    duration: "6 weeks",
    topics: [
      "AI system integration",
      "Process automation",
      "Performance optimization",
      "Real-world applications"
    ]
  },
  {
    title: "Leadership & Management",
    duration: "4 weeks",
    topics: [
      "AI project management",
      "Team coordination",
      "Risk management",
      "Change leadership"
    ]
  }
];

export default function StaffTraining() {
  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <AppleHero
        title="Staff Training Programs"
        subtitle="Empower your team with cutting-edge AI skills and knowledge"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940"
        theme="dark"
      />

      <AppleSection
        title="Program Features"
        subtitle="Comprehensive training solutions for your entire team"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </AppleSection>

      <AppleSection background="bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-16">Training Modules</h2>
          <div className="space-y-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold">{module.title}</h3>
                  <span className="text-blue-600 font-medium">{module.duration}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      <span className="text-gray-600">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppleSection>

      <AppleSection>
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-6">
            Ready to Start Training Your Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading companies that have transformed their workforce with our training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppleButton to="/contact" variant="primary" size="large">
              Schedule a Demo
            </AppleButton>
            <AppleButton to="/register-business" variant="secondary" size="large">
              Create Business Account
            </AppleButton>
          </div>
        </div>
      </AppleSection>
    </div>
  );
}