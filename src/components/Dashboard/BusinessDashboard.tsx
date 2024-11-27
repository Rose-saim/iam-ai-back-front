import React from 'react';
import { Building2, BookOpen, Settings, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BusinessDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Business Dashboard</h1>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Training Progress</h3>
            <BookOpen className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold">75%</p>
          <p className="text-sm text-gray-600">3 of 4 modules completed</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">AI Tools Active</h3>
            <Settings className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold">5</p>
          <p className="text-sm text-gray-600">Out of 8 available</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Team Members</h3>
            <Building2 className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold">12</p>
          <p className="text-sm text-gray-600">Active users</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Implementation Score</h3>
            <LineChart className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold">85</p>
          <p className="text-sm text-gray-600">Out of 100</p>
        </div>
      </div>

      {/* Recommended Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Recommended Actions</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium">Complete Advanced AI Training</p>
                <p className="text-sm text-gray-600">25% remaining in current module</p>
              </div>
            </div>
            <Link
              to="/training"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Continue
            </Link>
          </div>

          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center">
              <Settings className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium">Setup Remaining AI Tools</p>
                <p className="text-sm text-gray-600">3 tools pending setup</p>
              </div>
            </div>
            <Link
              to="/tools"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Setup
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            {
              action: "Completed Machine Learning Basics",
              time: "2 hours ago",
              icon: <BookOpen className="w-5 h-5 text-blue-600" />
            },
            {
              action: "Integrated New Analytics Tool",
              time: "1 day ago",
              icon: <Settings className="w-5 h-5 text-blue-600" />
            },
            {
              action: "Added Team Member",
              time: "2 days ago",
              icon: <Building2 className="w-5 h-5 text-blue-600" />
            }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-lg">
                {activity.icon}
              </div>
              <div className="flex-grow">
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-gray-600">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}