import React from 'react';
import { BarChart2, Download, TrendingUp, Users, Star } from 'lucide-react';
import { Line, Bar } from 'react-chartjs-2';

export default function ExpertReports() {
  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Student Performance',
      data: [65, 75, 85, 80, 90, 95],
      borderColor: 'rgb(59, 130, 246)',
      tension: 0.1
    }]
  };

  const handleExportReport = () => {
    // Create report content
    const reportContent = `
Performance Report - ${new Date().toLocaleDateString()}

METRICS
-------
Total Students: 256
Average Rating: 4.8/5
Course Completion Rate: 92%
Student Satisfaction: 95%

MONTHLY PERFORMANCE
------------------
January: 65%
February: 75%
March: 85%
April: 80%
May: 90%
June: 95%
    `.trim();

    // Create and trigger download
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'performance_report.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
            <p className="mt-1 text-sm text-gray-500">
              View and analyze your performance metrics
            </p>
          </div>
          <button
            onClick={handleExportReport}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Download className="w-5 h-5 mr-2" />
            Export Report
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Total Students</h3>
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">256</p>
            <p className="text-sm text-green-600">+12% this month</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Average Rating</h3>
              <Star className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">4.8/5</p>
            <p className="text-sm text-green-600">+0.2 this month</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Completion Rate</h3>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">92%</p>
            <p className="text-sm text-green-600">+5% this month</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Satisfaction</h3>
              <BarChart2 className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">95%</p>
            <p className="text-sm text-green-600">+3% this month</p>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Performance Trends</h2>
          <div className="h-64">
            <Line
              data={performanceData}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Detailed Reports */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Available Reports</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Student Performance Report",
                description: "Detailed analysis of student progress and achievements",
                type: "PDF"
              },
              {
                title: "Course Analytics",
                description: "Statistics and insights about your courses",
                type: "Excel"
              },
              {
                title: "Financial Summary",
                description: "Overview of earnings and transactions",
                type: "PDF"
              },
              {
                title: "Feedback Analysis",
                description: "Compilation of student feedback and ratings",
                type: "PDF"
              }
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div>
                  <h3 className="font-medium text-gray-900">{report.title}</h3>
                  <p className="text-sm text-gray-500">{report.description}</p>
                </div>
                <button className="flex items-center px-3 py-1 text-blue-600 hover:bg-blue-50 rounded">
                  <Download className="w-4 h-4 mr-1" />
                  {report.type}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}