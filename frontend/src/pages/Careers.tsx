import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Code, Brain, ArrowRight } from 'lucide-react';

const positions = [
  {
    id: 1,
    title: "AI Implementation Specialist",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our team to help businesses implement AI solutions effectively."
  },
  {
    id: 2,
    title: "AI Training Expert",
    department: "Education",
    location: "Remote",
    type: "Full-time",
    description: "Create and deliver high-quality AI training programs."
  },
  {
    id: 3,
    title: "AI Solutions Architect",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Design scalable AI solutions for enterprise clients."
  }
];

const benefits = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Remote-First Culture",
    description: "Work from anywhere in the world with our distributed team."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Continuous Learning",
    description: "Access to all our courses and learning resources."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Latest Technology",
    description: "Work with cutting-edge AI tools and technologies."
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Join Our Mission</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Help us transform the future of AI education and implementation.
              We're looking for passionate individuals to join our team.
            </p>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
          <p className="text-gray-600">
            Join our team and help shape the future of AI education
          </p>
        </div>

        <div className="grid gap-6 mb-16">
          {positions.map((position) => (
            <div key={position.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                    <p className="text-gray-500">{position.department}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {position.type}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {position.location}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <Link
                  to={`/careers/${position.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Don't see the right position?
          </h2>
          <p className="text-gray-600 mb-8">
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link
            to="/careers/apply"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Briefcase className="w-5 h-5 mr-2" />
            Send General Application
          </Link>
        </div>
      </div>
    </div>
  );
}