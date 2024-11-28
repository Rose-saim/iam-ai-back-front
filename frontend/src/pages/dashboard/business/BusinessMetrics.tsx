import React from 'react';
import { BarChart2, TrendingUp, DollarSign, Clock } from 'lucide-react';

export default function BusinessMetrics() {
  const metrics = [
    {
      title: "Implementation Progress",
      value: "85%",
      change: "+12%",
      icon: <BarChart2 className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Efficiency Gain",
      value: "45%",
      change: "+8%",
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Cost Savings",
      value: "$24.5k",
      change: "+15%",
      icon: <DollarSign className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Time Saved",
      value: "128h",
      change: "+20%",
      icon: <Clock className="w-5 h-5 text-blue-600" />
    }
  ];

  const performanceData = [
    {
      area: "Process Automation",
      efficiency: 92,
      impact: "High",
      status: "Optimized"
    },
    {
      area: "Data Analysis",
      efficiency: 78,
      impact: "Medium",
      status: "Improving"
    },
    {
      area: "Customer Service",
      efficiency: 85,
      impact: "High",
      status: "Optimized"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Performance Metrics</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor and analyze your AI implementation impact
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Efficiency Trends</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <TrendingUp className="w-12 h-12 text-gray-400" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Cost Analysis</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <BarChart2 className="w-12 h-12 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Performance by Area</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Area
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Efficiency
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Impact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {performanceData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.area}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${item.efficiency}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{item.efficiency}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.impact}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item.status === 'Optimized'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.status}
                        </span>
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