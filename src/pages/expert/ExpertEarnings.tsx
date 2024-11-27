import React from 'react';
import { DollarSign, TrendingUp, Users, BarChart2, Download, Calendar } from 'lucide-react';

export default function ExpertEarnings() {
  const earnings = {
    total: "$45,678",
    thisMonth: "$5,432",
    lastMonth: "$4,876",
    growth: "+11.4%",
    students: 1543,
    courses: 8
  };

  const transactions = [
    {
      id: 1,
      course: "Advanced AI & Machine Learning",
      amount: "$129",
      date: "2024-02-15",
      status: "completed"
    },
    {
      id: 2,
      course: "Deep Learning Specialization",
      amount: "$149",
      date: "2024-02-14",
      status: "completed"
    },
    {
      id: 3,
      course: "Computer Vision with TensorFlow",
      amount: "$99",
      date: "2024-02-13",
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Earnings Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track your revenue and financial metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500">Total Earnings</h3>
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold">{earnings.total}</p>
              <p className="ml-2 text-sm text-green-600">{earnings.growth}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500">This Month</h3>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-semibold">{earnings.thisMonth}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500">Total Students</h3>
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-2xl font-semibold">{earnings.students}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500">Active Courses</h3>
              <BarChart2 className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-2xl font-semibold">{earnings.courses}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Transactions</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                <Download className="w-4 h-4 mr-1" />
                Download Report
              </button>
            </div>

            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-50 p-2 rounded-lg mr-4">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{transaction.course}</h3>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{transaction.amount}</p>
                    <span className="text-sm text-green-600 capitalize">
                      {transaction.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Payout Schedule</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payout Method
                </label>
                <select className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Bank Transfer</option>
                  <option>PayPal</option>
                  <option>Stripe</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payout Frequency
                </label>
                <select className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Monthly</option>
                  <option>Bi-weekly</option>
                  <option>Weekly</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Next Payout Date
                </label>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900">March 1, 2024</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Update Payout Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}