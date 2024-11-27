import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart2, TrendingUp, Users, Clock, Star } from 'lucide-react';
import { useAuth } from '../../lib/auth/context';

export default function CourseAnalytics() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const metrics = [
    {
      title: "Total Enrollments",
      value: "256",
      change: "+12%",
      icon: <Users className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Average Completion",
      value: "85%",
      change: "+5%",
      icon: <Clock className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Student Satisfaction",
      value: "4.8",
      change: "+0.2",
      icon: <Star className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Engagement Rate",
      value: "78%",
      change: "+8%",
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />
    }
  ];

  const coursePerformance = [
    {
      course: "AI Fundamentals",
      enrollments: 86,
      completion: 92,
      satisfaction: 4.9,
      revenue: "$4,320"
    },
    {
      course: "Machine Learning Mastery",
      enrollments: 64,
      completion: 78,
      satisfaction: 4.7,
      revenue: "$3,180"
    },
    {
      course: "Neural Networks Deep Dive",
      enrollments: 52,
      completion: 85,
      satisfaction: 4.8,
      revenue: "$2,860"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Course Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor course performance and student engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-500">{metric.title}</h3>
                {metric.icon}
              </div>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                <p className="ml-2 text-sm font-medium text-green-600">{metric.change}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Enrollment Trends</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <BarChart2 className="w-12 h-12 text-gray-400" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Completion Rates</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <TrendingUp className="w-12 h-12 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Course Performance</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Enrollments
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Completion Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Satisfaction
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Revenue
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {coursePerformance.map((course, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {course.course}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.enrollments}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.completion}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.satisfaction}/5.0
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.revenue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}