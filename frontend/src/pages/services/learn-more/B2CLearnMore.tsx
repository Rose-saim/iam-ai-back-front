import React from 'react';
import { GraduationCap, Target, Award, ArrowRight } from 'lucide-react';
import AppleHero from '../../../components/AppleHero';
import AppleSection from '../../../components/AppleSection';
import AppleButton from '../../../components/AppleButton';

const benefits = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Personalized Learning",
    description: "Custom learning paths tailored to your goals and experience level."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Practical Skills",
    description: "Hands-on projects and real-world applications of AI technology."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Industry Recognition",
    description: "Earn certificates recognized by leading technology companies."
  }
];

const learningPath = [
  {
    level: "Beginner",
    courses: [
      "AI Fundamentals",
      "Introduction to Machine Learning",
      "Data Analysis Basics"
    ]
  },
  {
    level: "Intermediate",
    courses: [
      "Advanced AI Concepts",
      "Neural Networks",
      "Natural Language Processing"
    ]
  },
  {
    level: "Advanced",
    courses: [
      "AI System Design",
      "Deep Learning Applications",
      "AI Project Management"
    ]
  }
];

export default function B2CLearnMore() {
  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <AppleHero
        title="Advance Your Career"
        subtitle="Master AI skills with personalized learning programs"
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2940"
        theme="dark"
      />

      <AppleSection
        title="Why Choose Our Individual Training"
        subtitle="Comprehensive learning solutions for your AI journey"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </AppleSection>

      <AppleSection background="bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-16">Learning Path</h2>
          <div className="space-y-12">
            {learningPath.map((path, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">{path.level}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {path.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="p-4 bg-gray-50 rounded-xl">
                      <p className="font-medium">{course}</p>
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
            Start Your Learning Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals advancing their careers with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppleButton to="/courses" variant="primary" size="large">
              Browse Courses
            </AppleButton>
            <AppleButton to="/register-individual" variant="secondary" size="large">
              Create Account
            </AppleButton>
          </div>
        </div>
      </AppleSection>
    </div>
  );
}