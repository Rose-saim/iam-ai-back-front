import React from 'react';
import { Link } from 'react-router-dom';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { 
  Building2, Users, BookOpen, TrendingUp, Briefcase, Award, 
  Bell, Settings, Calculator, Brain, DollarSign, Target,
  Calendar, Star
} from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function BusinessDashboard() {
  // KPI Data
  const kpiData = {
    trainingCompletion: 78,
    missionProgress: 65,
    roiImprovement: 45
  };

  // Change Management Data
  const changeManagementData = {
    labels: ['Ready', 'In Progress', 'Resistant'],
    datasets: [{
      data: [60, 30, 10],
      backgroundColor: ['#22c55e', '#3b82f6', '#ef4444'],
    }]
  };

  // Implementation Timeline Data
  const timelineData = [
    { phase: 'Planning', status: 'completed', progress: 100 },
    { phase: 'Training', status: 'in-progress', progress: 65 },
    { phase: 'Implementation', status: 'upcoming', progress: 0 }
  ];

  // Recommended Courses
  const recommendedCourses = [
    {
      title: 'AI Implementation Fundamentals',
      duration: '6 weeks',
      relevance: '95% match'
    },
    {
      title: 'Change Management in AI',
      duration: '4 weeks',
      relevance: '90% match'
    },
    {
      title: 'Data-Driven Decision Making',
      duration: '5 weeks',
      relevance: '85% match'
    }
  ];

  // Payment Summary
  const paymentSummary = {
    total: 15000,
    pending: 3500,
    overdue: 0
  };

  // Team Performance
  const topPerformers = [
    { name: 'Sarah Chen', points: 850, badges: 5 },
    { name: 'Michael Roberts', points: 720, badges: 4 },
    { name: 'Emma Thompson', points: 690, badges: 4 }
  ];

  // ROI Simulation Preview
  const roiPreview = {
    productivityGain: 35,
    costReduction: 25,
    timeOptimization: 40
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Business Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">
              Welcome back! Here's an overview of your AI implementation progress
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-500">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
            </button>
          </div>
        </div>

        {/* KPIs Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-500">Training Completion</h3>
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-bold">{kpiData.trainingCompletion}%</p>
              <p className="ml-2 text-sm text-green-600">+5%</p>
            </div>
            <Link
              to="/dashboard/performance"
              className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium inline-block"
            >
              View Details →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-500">Mission Progress</h3>
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-bold">{kpiData.missionProgress}%</p>
              <p className="ml-2 text-sm text-green-600">+8%</p>
            </div>
            <Link
              to="/dashboard/missions"
              className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium inline-block"
            >
              View Details →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-500">ROI Improvement</h3>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-bold">{kpiData.roiImprovement}%</p>
              <p className="ml-2 text-sm text-green-600">+12%</p>
            </div>
            <Link
              to="/dashboard/calculator"
              className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium inline-block"
            >
              Calculate ROI →
            </Link>
          </div>
        </div>

        {/* ROI Calculator Preview & Change Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">ROI Preview</h2>
              <Link
                to="/dashboard/calculator"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Full Calculator →
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{roiPreview.productivityGain}%</p>
                <p className="text-sm text-gray-500">Productivity</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{roiPreview.costReduction}%</p>
                <p className="text-sm text-gray-500">Cost Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">{roiPreview.timeOptimization}%</p>
                <p className="text-sm text-gray-500">Time Saved</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Change Management</h2>
              <Link
                to="/dashboard/change-management"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Manage Change →
              </Link>
            </div>
            <div className="h-48">
              <Doughnut data={changeManagementData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">Implementation Timeline</h2>
            <Link
              to="/dashboard/implementation"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View Full Plan →
            </Link>
          </div>
          <div className="space-y-4">
            {timelineData.map((phase, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  phase.status === 'completed' ? 'bg-green-100 text-green-600' :
                  phase.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                  'bg-gray-100 text-gray-400'
                }`}>
                  {index + 1}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-900">{phase.phase}</span>
                    <span className="text-sm text-gray-500">{phase.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        phase.status === 'completed' ? 'bg-green-600' :
                        phase.status === 'in-progress' ? 'bg-blue-600' :
                        'bg-gray-400'
                      }`}
                      style={{ width: `${phase.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Courses & Team Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Recommended Courses</h2>
              <Link
                to="/dashboard/courses"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All →
              </Link>
            </div>
            <div className="space-y-4">
              {recommendedCourses.map((course, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-500">{course.duration}</p>
                  </div>
                  <span className="text-sm text-blue-600">{course.relevance}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Top Performers</h2>
              <Link
                to="/dashboard/gamification"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View Leaderboard →
              </Link>
            </div>
            <div className="space-y-4">
              {topPerformers.map((performer, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                      {index + 1}
                    </div>
                    <span className="ml-3 font-medium text-gray-900">{performer.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-4">{performer.points} pts</span>
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-500">{performer.badges}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">Payment Summary</h2>
            <Link
              to="/dashboard/payments"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">${paymentSummary.total}</p>
              <p className="text-sm text-gray-500">Total Paid</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">${paymentSummary.pending}</p>
              <p className="text-sm text-gray-500">Pending</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">${paymentSummary.overdue}</p>
              <p className="text-sm text-gray-500">Overdue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}</content>