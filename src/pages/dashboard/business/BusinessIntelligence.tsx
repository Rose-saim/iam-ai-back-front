import React from 'react';
import { TrendingUp, Download, Filter, RefreshCw } from 'lucide-react';
import { Line } from 'react-chartjs-2';

export default function BusinessIntelligence() {
  const marketTrends = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'AI Adoption Rate',
        data: [30, 45, 60, 75, 85, 92],
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.1
      }
    ]
  };

  const insights = [
    {
      title: "AI Implementation Trends",
      description: "75% of companies in your industry are adopting AI for process automation",
      impact: "High",
      action: "Consider accelerating your automation initiatives"
    },
    {
      title: "Market Analysis",
      description: "New AI regulations expected in Q3 2024",
      impact: "Medium",
      action: "Review compliance requirements"
    },
    {
      title: "Industry Update",
      description: "Emerging focus on AI-driven customer service solutions",
      impact: "Medium",
      action: "Evaluate customer service enhancement opportunities"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Market Intelligence</h1>
            <p className="mt-1 text-sm text-gray-500">
              Stay informed about AI trends and opportunities
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <Download className="w-5 h-5 mr-2" />
              Export Report
            </button>
          </div>
        </div>

        {/* Market Trends Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Market Trends</h2>
          <div className="h-64">
            <Line data={marketTrends} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Industry Insights */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Latest Insights</h2>
            <button className="flex items-center text-blue-600 hover:text-blue-700">
              <RefreshCw className="w-5 h-5 mr-2" />
              Refresh
            </button>
          </div>
          <div className="space-y-6">
            {insights.map((insight, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{insight.title}</h3>
                    <p className="text-gray-600">{insight.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    insight.impact === 'High'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {insight.impact} Impact
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-blue-600">Recommended Action:</span>
                  <span className="ml-2 text-gray-600">{insight.action}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Latest Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "2024 AI Implementation Guide",
                type: "PDF Report",
                date: "Mar 1, 2024"
              },
              {
                title: "Industry Best Practices",
                type: "Whitepaper",
                date: "Feb 28, 2024"
              },
              {
                title: "ROI Calculator Template",
                type: "Spreadsheet",
                date: "Feb 25, 2024"
              },
              {
                title: "Compliance Checklist",
                type: "Document",
                date: "Feb 20, 2024"
              }
            ].map((resource, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition cursor-pointer"
              >
                <div>
                  <h3 className="font-medium text-gray-900">{resource.title}</h3>
                  <p className="text-sm text-gray-500">
                    {resource.type} • {resource.date}
                  </p>
                </div>
                <Download className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}