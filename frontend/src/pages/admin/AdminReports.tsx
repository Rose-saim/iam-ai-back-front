import React from 'react';
import { BarChart2, TrendingUp, Users, BookOpen, Download, Calendar } from 'lucide-react';

export default function AdminReports() {
  const reports = [
    {
      title: 'User Growth',
      value: '1,234',
      change: '+12.5%',
      icon: <Users className="w-5 h-5 text-blue-600" />,
      chart: 'growth'
    },
    {
      title: 'Course Completion Rate',
      value: '78.3%',
      change: '+5.2%',
      icon: <BookOpen className="w-5 h-5 text-green-600" />,
      chart: 'completion'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+8.7%',
      icon: <TrendingUp className="w-5 h-5 text-purple-600" />,
      chart: 'revenue'
    }
  ];

  const recentReports = [
    {
      name: 'Monthly User Activity Report',
      date: '2024-02-15',
      size: '2.4 MB',
      type: 'PDF'
    },
    {
      name: 'Course Analytics Summary',
      date: '2024-02-10',
      size: '1.8 MB',
      type: 'XLSX'
    },
    {
      name: 'Revenue Analysis Q1 2024',
      date: '2024-02-01',
      size: '3.2 MB',
      type: 'PDF'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">
            View and analyze system performance metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reports.map((report, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-50 p-2 rounded-lg">
                  {report.icon}
                </div>
                <span className="text-sm font-medium text-green-600">{report.change}</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">{report.title}</h3>
              <p className="text-2xl font-semibold">{report.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Reports</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-blue-50 p-2 rounded-lg mr-4">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{report.name}</h3>
                      <p className="text-sm text-gray-500">
                        {report.date} • {report.size} • {report.type}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-blue-50 rounded-lg">
                    <Download className="w-5 h-5 text-blue-600" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Custom Report</h2>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Report Type
                </label>
                <select className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>User Analytics</option>
                  <option>Course Performance</option>
                  <option>Financial Summary</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Generate Report
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}