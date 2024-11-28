import React from 'react';
import { BookOpen, Play, Award, Download } from 'lucide-react';

export default function BusinessTraining() {
  const modules = [
    {
      title: "AI Fundamentals",
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      nextLesson: "Understanding Neural Networks"
    },
    {
      title: "Implementation Strategies",
      progress: 45,
      totalLessons: 10,
      completedLessons: 4,
      nextLesson: "Process Automation"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Training Progress</h1>
          <p className="mt-1 text-sm text-gray-500">
            Continue your AI implementation training
          </p>
        </div>

        <div className="grid gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">{module.title}</h2>
                    <p className="text-sm text-gray-500">
                      {module.completedLessons} of {module.totalLessons} lessons completed
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-500">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{module.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${module.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Next Lesson</p>
                      <p className="text-sm text-gray-500">{module.nextLesson}</p>
                    </div>
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      <Play className="w-4 h-4 mr-2" />
                      Continue
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-semibold text-blue-600">
                      {module.completedLessons}
                    </p>
                    <p className="text-sm text-gray-500">Completed</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-semibold text-blue-600">
                      {module.totalLessons - module.completedLessons}
                    </p>
                    <p className="text-sm text-gray-500">Remaining</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-semibold text-blue-600">
                      {Math.round((module.completedLessons / module.totalLessons) * 100)}%
                    </p>
                    <p className="text-sm text-gray-500">Complete</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}