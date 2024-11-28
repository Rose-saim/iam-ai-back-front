import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Target, Clock, ArrowRight } from 'lucide-react';

export default function StudentDashboard() {
  const stats = [
    {
      title: "Courses in Progress",
      value: "3",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      description: "Active courses"
    },
    {
      title: "Completed Courses",
      value: "5",
      icon: <Award className="w-5 h-5 text-blue-600" />,
      description: "With certification"
    },
    {
      title: "Learning Hours",
      value: "48",
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      description: "This month"
    },
    {
      title: "Overall Progress",
      value: "75%",
      icon: <Target className="w-5 h-5 text-blue-600" />,
      description: "Learning path"
    }
  ];

  const currentCourses = [
    {
      title: "AI Fundamentals",
      progress: 75,
      nextLesson: "Neural Networks Basics",
      dueDate: "Mar 20, 2024"
    },
    {
      title: "Machine Learning Essentials",
      progress: 45,
      nextLesson: "Supervised Learning",
      dueDate: "Mar 25, 2024"
    },
    {
      title: "Deep Learning Applications",
      progress: 30,
      nextLesson: "CNN Architecture",
      dueDate: "Mar 30, 2024"
    }
  ];

  const upcomingDeadlines = [
    {
      title: "Neural Networks Assignment",
      course: "AI Fundamentals",
      dueDate: "Mar 18, 2024",
      type: "Assignment"
    },
    {
      title: "Machine Learning Quiz",
      course: "ML Essentials",
      dueDate: "Mar 22, 2024",
      type: "Quiz"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track your learning progress and manage your courses
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-500">{stat.title}</h3>
                {stat.icon}
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Courses */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">Current Courses</h2>
                <Link
                  to="/student/courses"
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  View All
                </Link>
              </div>
              <div className="space-y-6">
                {currentCourses.map((course, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium text-gray-900">{course.title}</h3>
                        <p className="text-sm text-gray-500">Next: {course.nextLesson}</p>
                      </div>
                      <span className="text-sm text-gray-500">Due: {course.dueDate}</span>
                    </div>
                    <div className="mb-2">
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
                    <div className="flex justify-end">
                      <Link
                        to={`/courses/${index}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700"
                      >
                        Continue Learning
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Deadlines */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Upcoming Deadlines</h2>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{deadline.title}</h3>
                      <p className="text-sm text-gray-500">{deadline.course}</p>
                      <div className="flex items-center mt-2 text-sm">
                        <Clock className="w-4 h-4 text-gray-400 mr-1" />
                        <span className="text-gray-600">Due: {deadline.dueDate}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      deadline.type === 'Assignment'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {deadline.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Quick Links</h2>
              <div className="space-y-3">
                <Link
                  to="/student/courses"
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <BookOpen className="w-5 h-5 text-blue-600 mr-3" />
                  <span>My Courses</span>
                </Link>
                <Link
                  to="/student/certificates"
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <Award className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Certificates</span>
                </Link>
                <Link
                  to="/student/progress"
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <Target className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Learning Progress</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}