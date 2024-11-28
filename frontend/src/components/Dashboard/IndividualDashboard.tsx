import React from 'react';
import { Link } from 'react-router-dom';
import { Line, Bar } from 'react-chartjs-2';
import {
  BookOpen, Calendar, Award, TrendingUp, Bell,
  Star, Play, Download, Share2
} from 'lucide-react';

// Import components
import CourseProgress from './individual/CourseProgress';
import UpcomingEvents from './individual/UpcomingEvents';
import Certifications from './individual/Certifications';
import AITrends from './individual/AITrends';
import RecommendedCourses from './individual/RecommendedCourses';
import Achievements from './individual/Achievements';

export default function IndividualDashboard() {
  // Progress data for charts
  const progressData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Learning Progress',
      data: [30, 45, 60, 75, 85, 92],
      borderColor: 'rgb(59, 130, 246)',
      tension: 0.1
    }]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Learning Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">
              Track your progress and continue your AI learning journey
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-500">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Courses Progress</h3>
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">75%</p>
            <p className="text-sm text-gray-600">4 of 6 courses completed</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Upcoming Events</h3>
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm text-gray-600">Events this week</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Certifications</h3>
              <Award className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">2</p>
            <p className="text-sm text-gray-600">Active certifications</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Learning Hours</h3>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">48h</p>
            <p className="text-sm text-gray-600">This month</p>
          </div>
        </div>

        {/* Course Progress & Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Current Courses</h2>
              <Link
                to="/dashboard/courses"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All
              </Link>
            </div>
            <CourseProgress />
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Upcoming Events</h2>
              <Link
                to="/dashboard/events"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All
              </Link>
            </div>
            <UpcomingEvents />
          </div>
        </div>

        {/* Certifications Progress */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">Certifications Progress</h2>
            <Link
              to="/dashboard/certifications"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View All
            </Link>
          </div>
          <Certifications />
        </div>

        {/* AI Trends & Recommended Courses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">AI Industry Trends</h2>
              <Link
                to="/dashboard/trends"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All
              </Link>
            </div>
            <AITrends />
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Recommended for You</h2>
              <Link
                to="/dashboard/recommendations"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All
              </Link>
            </div>
            <RecommendedCourses />
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">Your Achievements</h2>
            <Link
              to="/dashboard/achievements"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View All
            </Link>
          </div>
          <Achievements />
        </div>
      </div>
    </div>
  );
}