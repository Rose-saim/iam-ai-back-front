import React from 'react';
import { BookOpen, Play, Award, Clock } from 'lucide-react';

export default function MyCourses() {
  const courses = [
    {
      title: "AI Fundamentals",
      progress: 75,
      lastAccessed: "2 hours ago",
      nextLesson: "Neural Networks Basics",
      duration: "2h 30m remaining"
    },
    {
      title: "Machine Learning Essentials",
      progress: 45,
      lastAccessed: "1 day ago",
      nextLesson: "Supervised Learning",
      duration: "4h remaining"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
          <p className="mt-1 text-sm text-gray-500">
            Continue your learning journey
          </p>
        </div>

        <div className="grid gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">{course.title}</h2>
                    <p className="text-sm text-gray-500">Last accessed {course.lastAccessed}</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Next Lesson</p>
                      <p className="text-sm text-gray-500">{course.nextLesson}</p>
                    </div>
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      <Play className="w-4 h-4 mr-2" />
                      Continue
                    </button>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    View Course Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    View Certificate
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