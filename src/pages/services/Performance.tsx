import React from 'react';
import { BarChart, PieChart, TrendingUp, LineChart } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const metrics = [
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "ROI Analysis",
    description: "Measure the return on AI investments"
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Efficiency Metrics",
    description: "Track operational improvements"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth Analytics",
    description: "Monitor business expansion"
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Performance Tracking",
    description: "Analyze AI system effectiveness"
  }
];

export default function Performance() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader 
            title="Performance Analysis"
            description="Track and optimize your AI implementation results"
          />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {metric.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{metric.title}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Request Analysis Report</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Area
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Operations</option>
                    <option>Customer Service</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Period
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Last Month</option>
                    <option>Last Quarter</option>
                    <option>Last Year</option>
                    <option>Custom Range</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Generate Report
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}