import React from 'react';
import { BookOpen, Star, Clock, ArrowRight } from 'lucide-react';

const recommendations = [
  {
    id: 1,
    title: "Advanced Neural Networks",
    description: "Deep dive into neural network architectures and implementations",
    duration: "8 weeks",
    rating: 4.9,
    match: "95%",
    price: 299,
    instructor: "Dr. Sarah Chen",
    level: "Advanced"
  },
  {
    id: 2,
    title: "AI Ethics & Governance",
    description: "Understanding ethical considerations in AI implementation",
    duration: "6 weeks",
    rating: 4.8,
    match: "90%",
    price: 249,
    instructor: "Prof. Michael Roberts",
    level: "Intermediate"
  }
];

export default function IndividualRecommendations() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Recommended for You</h1>
          <p className="mt-1 text-sm text-gray-500">
            Personalized course recommendations based on your interests and progress
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-gray-900">{course.title}</h2>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {course.match} match
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    {course.rating}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Instructor</p>
                    <p className="font-medium">{course.instructor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Level</p>
                    <p className="font-medium">{course.level}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Enroll Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}