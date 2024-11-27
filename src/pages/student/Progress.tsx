import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Award, Clock, CheckCircle } from 'lucide-react';
import { useAuth } from '../../lib/auth/context';

export default function Progress() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: 'AI Fundamentals',
      progress: 75,
      modules: 12,
      completedModules: 9,
      lastAccessed: '2024-02-15',
      certificate: false
    },
    {
      id: 2,
      title: 'Machine Learning Basics',
      progress: 100,
      modules: 8,
      completedModules: 8,
      lastAccessed: '2024-02-10',
      certificate: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Progress</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track your learning journey and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">{course.title}</h2>
                  {course.certificate && (
                    <div className="flex items-center text-green-600">
                      <Award className="w-5 h-5 mr-1" />
                      <span className="text-sm">Certificate Earned</span>
                    </div>
                  )}
                </div>

                <div className="mb-4">
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

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">
                      {course.completedModules}/{course.modules} Modules
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">
                      Last accessed {course.lastAccessed}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Continue Learning
                  </button>
                  {course.certificate && (
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                      View Certificate
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Courses Completed', value: '2' },
              { title: 'Total Hours', value: '24' },
              { title: 'Certificates Earned', value: '1' },
              { title: 'Average Score', value: '92%' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}