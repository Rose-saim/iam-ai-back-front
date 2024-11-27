import React from 'react';
import { BookOpen, Target, Award, ArrowRight } from 'lucide-react';

export default function LearningPath() {
  const pathProgress = {
    currentLevel: "Intermediate",
    completedCourses: 3,
    totalCourses: 5,
    nextMilestone: "Advanced AI Implementation"
  };

  const modules = [
    {
      title: "AI Fundamentals",
      status: "completed",
      courses: [
        { name: "Introduction to AI", completed: true },
        { name: "Machine Learning Basics", completed: true }
      ]
    },
    {
      title: "Intermediate AI",
      status: "in-progress",
      courses: [
        { name: "Neural Networks", completed: true },
        { name: "Deep Learning", completed: false }
      ]
    },
    {
      title: "Advanced AI",
      status: "locked",
      courses: [
        { name: "AI Implementation", completed: false },
        { name: "AI Ethics & Governance", completed: false }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Learning Path</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track your progress and plan your learning journey
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-500">Current Level</p>
              <p className="text-xl font-semibold text-gray-900">{pathProgress.currentLevel}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed Courses</p>
              <p className="text-xl font-semibold text-gray-900">
                {pathProgress.completedCourses}/{pathProgress.totalCourses}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Next Milestone</p>
              <p className="text-xl font-semibold text-gray-900">{pathProgress.nextMilestone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Overall Progress</p>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(pathProgress.completedCourses / pathProgress.totalCourses) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Modules */}
        <div className="space-y-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-sm overflow-hidden ${
                module.status === 'locked' ? 'opacity-50' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      module.status === 'completed' ? 'bg-green-100' :
                      module.status === 'in-progress' ? 'bg-blue-100' :
                      'bg-gray-100'
                    }`}>
                      {module.status === 'completed' ? (
                        <Award className="w-6 h-6 text-green-600" />
                      ) : module.status === 'in-progress' ? (
                        <Target className="w-6 h-6 text-blue-600" />
                      ) : (
                        <BookOpen className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold">{module.title}</h2>
                      <p className="text-sm text-gray-500 capitalize">{module.status.replace('-', ' ')}</p>
                    </div>
                  </div>
                  {module.status !== 'locked' && (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      {module.status === 'completed' ? 'Review' : 'Continue'}
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {module.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded-full ${
                          course.completed ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-400'
                        } flex items-center justify-center mr-3`}>
                          {course.completed && <Check className="w-4 h-4" />}
                        </div>
                        <span className={course.completed ? 'text-gray-900' : 'text-gray-500'}>
                          {course.name}
                        </span>
                      </div>
                      {!course.completed && module.status !== 'locked' && (
                        <button className="text-blue-600 hover:text-blue-700">
                          Start <ArrowRight className="w-4 h-4 inline-block ml-1" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}