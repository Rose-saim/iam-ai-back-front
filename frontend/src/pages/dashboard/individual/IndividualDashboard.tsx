import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  BookOpen, Calendar, Award, TrendingUp, Bell, Search,
  Star, Play, Download, Share2, Briefcase, Users, Filter
} from 'lucide-react';

// Import components
import CourseProgress from '../../../components/dashboard/individual/CourseProgress';
import UpcomingEvents from '../../../components/dashboard/individual/UpcomingEvents';
import Certifications from '../../../components/dashboard/individual/Certifications';
import AITrends from '../../../components/dashboard/individual/AITrends';
import RecommendedCourses from '../../../components/dashboard/individual/RecommendedCourses';
import Achievements from '../../../components/dashboard/individual/Achievements';
import SkillsPortfolio from '../../../components/dashboard/individual/SkillsPortfolio';
import CommunityFeed from '../../../components/dashboard/individual/CommunityFeed';
import JobOpportunities from '../../../components/dashboard/individual/JobOpportunities';

export default function IndividualDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    mode: '',
    level: '',
    price: '',
    duration: '',
    language: '',
    availability: ''
  });

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

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, certifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-5 h-5 mr-2" />
              Advanced Filters
            </button>
          </div>

          {showFilters && (
            <div className="bg-white p-4 rounded-lg border">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mode
                  </label>
                  <select
                    value={filters.mode}
                    onChange={(e) => setFilters(prev => ({ ...prev, mode: e.target.value }))}
                    className="w-full border rounded-lg p-2"
                  >
                    <option value="">All Modes</option>
                    <option value="online">Online</option>
                    <option value="inPerson">In Person</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
                {/* Add other filter selects similarly */}
              </div>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Course Progress</h3>
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">75%</p>
            <p className="text-sm text-gray-600">4 of 6 courses completed</p>
          </div>

          {/* Add other stats similarly */}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Courses */}
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

            {/* Skills Portfolio */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">Skills Portfolio</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Export CV
                </button>
              </div>
              <SkillsPortfolio />
            </div>

            {/* Community Feed */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">Community</h2>
                <Link
                  to="/dashboard/community"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
              <CommunityFeed />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Upcoming Events */}
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

            {/* Job Opportunities */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">Job Opportunities</h2>
                <Link
                  to="/dashboard/jobs"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
              <JobOpportunities />
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">Certifications</h2>
                <Link
                  to="/dashboard/certifications"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
              <Certifications />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}