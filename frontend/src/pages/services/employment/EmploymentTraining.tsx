import React from 'react';
import { GraduationCap, Target, BarChart2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "AI Fundamentals",
    duration: "12 weeks",
    description: "Master the core concepts of AI and machine learning"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Data Analysis",
    duration: "8 weeks",
    description: "Learn to analyze and interpret complex data sets"
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Industry Applications",
    duration: "10 weeks",
    description: "Apply AI solutions to real-world industry challenges"
  }
];

export default function EmploymentTraining() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Empower Job Seekers with AI-Powered Training Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prepare your workforce for the future with comprehensive AI training programs
            designed to build in-demand skills and accelerate career growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-500 text-sm mb-3">Duration: {program.duration}</p>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Program Highlights</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Industry-Recognized Certification</h3>
                    <p className="text-gray-600">Earn certificates valued by top employers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Practical Projects</h3>
                    <p className="text-gray-600">Work on real-world applications</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <BarChart2 className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Career Support</h3>
                    <p className="text-gray-600">Job placement assistance and career coaching</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8">
              <h2 className="text-2xl font-bold mb-6">Success Metrics</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Job Placement Rate</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Salary Increase</span>
                    <span className="font-semibold">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Course Completion</span>
                    <span className="font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Start Your AI Journey Today</h2>
          <p className="text-lg mb-8 opacity-90">
            Transform your career with our comprehensive AI training programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              View Course Catalog
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Contact for Custom Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}