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
  Calendar, Star, ArrowRight
} from 'lucide-react';

// Import components
import QuickStats from './business/QuickStats';
import DashboardCharts from './business/DashboardCharts';
import BusinessNotifications from './business/BusinessNotifications';
import BusinessQuickActions from './business/BusinessQuickActions';
import ROICalculator from './business/ROICalculator';
import QuoteGenerator from './business/QuoteGenerator';
import ConsultantsList from './business/ConsultantsList';
import EmployeeProgress from './business/EmployeeProgress';
import ImplementationTimeline from './business/ImplementationTimeline';
import BusinessMetrics from './business/BusinessMetrics';
import NotificationsList from './business/NotificationsList';
import ActiveMissions from './business/ActiveMissions';

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
  // Stats data
  const stats = {
    employees: 45,
    consultants: 8,
    courses: 12,
    missions: 5
  };

  // Chart data
  const missionData = {
    labels: ['Active', 'Completed', 'Pending'],
    datasets: [{
      data: [5, 8, 3],
      backgroundColor: ['#3b82f6', '#22c55e', '#f59e0b']
    }]
  };

  const trainingData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Completion Rate',
      data: [30, 45, 55, 65, 75, 85],
      borderColor: '#3b82f6'
    }]
  };

  const performanceData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Team Performance',
      data: [65, 75, 85, 92],
      backgroundColor: '#3b82f6'
    }]
  };

  // Sample missions for ActiveMissions component
  const missions = [
    {
      id: 1,
      title: "AI Implementation Phase 1",
      consultant: "Sarah Chen",
      progress: 75,
      dueDate: "2024-03-15",
      status: "active"
    },
    {
      id: 2,
      title: "Team Training Program",
      consultant: "Michael Roberts",
      progress: 45,
      dueDate: "2024-03-20",
      status: "pending"
    }
  ];

  // Sample notifications for NotificationsList component
  const notifications = [
    {
      id: 1,
      type: 'mission',
      message: 'New consultant assigned to AI Implementation Phase 1',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'course',
      message: 'Team training completion deadline approaching',
      time: '5 hours ago',
      read: false
    }
  ];

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

        {/* Quick Stats */}
        <QuickStats stats={stats} />

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
          <BusinessQuickActions />
        </div>

        {/* Charts */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Performance Overview</h2>
          <DashboardCharts
            missionData={missionData}
            trainingData={trainingData}
            performanceData={performanceData}
          />
        </div>

        {/* Active Missions & Team Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">Active Missions</h2>
                <Link
                  to="/dashboard/missions"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
              <ActiveMissions missions={missions} />
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">Team Progress</h2>
                <Link
                  to="/dashboard/team"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
              <EmployeeProgress />
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Implementation Progress</h2>
              <Link
                to="/dashboard/implementation"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View Full Plan
              </Link>
            </div>
            <ImplementationTimeline />
          </div>
        </div>

        {/* Business Metrics & Notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">Performance Metrics</h2>
                <Link
                  to="/dashboard/performance"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View Details
                </Link>
              </div>
              <BusinessMetrics />
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">Notifications</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Mark All Read
                </button>
              </div>
              <NotificationsList 
                notifications={notifications}
                onNotificationClick={() => {}}
              />
            </div>
          </div>
        </div>

        {/* ROI Calculator Preview */}
        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Quick ROI Estimation</h2>
              <Link
                to="/dashboard/calculator"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Full Calculator
              </Link>
            </div>
            <ROICalculator />
          </div>
        </div>
      </div>
    </div>
  );
}