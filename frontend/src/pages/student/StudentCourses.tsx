import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Star, Play } from 'lucide-react';

export default function StudentCourses() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: 'AI Fundamentals',
      instructor: 'Dr. Sarah Chen',
      progress: 75,
      duration: '8 weeks',
      rating: 4.9,
      enrolled: '2024-01-15',
      nextLesson: 'Neural Networks Basics'
    },
    {
      id: 2,
      title: 'Machine Learning Essentials',
      instructor: 'Prof. Michael Roberts',
      progress: 45,
      duration: '10 weeks',
      rating: 4.8,
      enrolled: '2024-02-01',
      nextLesson: 'Supervised Learning'
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
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">{course.title}</h2>
                    <p className="text-sm text-gray-500">
                      Instructor: {course.instructor}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="ml-1 text-gray-600">{course.rating}</span>
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

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="w-5 h-5 mr-2" />
                    <span>Enrolled: {course.enrolled}</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Next Lesson</p>
                      <p className="text-sm text-gray-500">{course.nextLesson}</p>
                    </div>
                    <button
                      onClick={() => navigate(`/courses/${course.id}`)}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Continue
                    </button>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    Course Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    View Resources
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