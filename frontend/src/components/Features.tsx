import React from 'react';
import { BookOpen, Users, Wrench, Lightbulb, PieChart, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Comprehensive Courses",
    description: "Access a wide range of AI courses tailored to your industry and skill level."
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "AI Toolbox",
    description: "Essential tools and resources for implementing AI solutions in your business."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Network",
    description: "Connect with AI professionals and industry experts for guidance and support."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation Hub",
    description: "Stay updated with the latest AI trends and breakthrough technologies."
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Impact Analytics",
    description: "Measure and track the impact of AI implementation on your business."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Consulting Services",
    description: "Get personalized advice and strategies for your AI transformation journey."
  }
];

export default function Features() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform provides all the tools, resources, and support you need to 
            successfully implement AI in your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}