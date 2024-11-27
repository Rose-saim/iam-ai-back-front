import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  TrendingUp,
  Users,
  BookOpen,
  DollarSign,
  Download,
} from 'lucide-react';
import { Papa } from 'papaparse';

export default function BusinessMetrics() {
  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Productivity Improvement',
        data: [30, 45, 60, 70, 85, 92],
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.1,
      },
    ],
  };

  const teamData = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: [
          'rgb(34, 197, 94)',
          'rgb(59, 130, 246)',
          'rgb(229, 231, 235)',
        ],
      },
    ],
  };

  const costSavingsData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Cost Savings',
        data: [12000, 19000, 27000, 35000],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
    ],
  };

  const exportReport = () => {
    // Prepare data for CSV export
    const dataToExport = [
      {
        Section: 'Performance Trends',
        Month: 'Jan',
        Value: performanceData.datasets[0].data[0],
      },
      {
        Section: 'Performance Trends',
        Month: 'Feb',
        Value: performanceData.datasets[0].data[1],
      },
      {
        Section: 'Performance Trends',
        Month: 'Mar',
        Value: performanceData.datasets[0].data[2],
      },
      {
        Section: 'Performance Trends',
        Month: 'Apr',
        Value: performanceData.datasets[0].data[3],
      },
      {
        Section: 'Performance Trends',
        Month: 'May',
        Value: performanceData.datasets[0].data[4],
      },
      {
        Section: 'Performance Trends',
        Month: 'Jun',
        Value: performanceData.datasets[0].data[5],
      },
      {
        Section: 'Team Progress',
        Category: 'Completed',
        Value: teamData.datasets[0].data[0],
      },
      {
        Section: 'Team Progress',
        Category: 'In Progress',
        Value: teamData.datasets[0].data[1],
      },
      {
        Section: 'Team Progress',
        Category: 'Not Started',
        Value: teamData.datasets[0].data[2],
      },
      {
        Section: 'Cost Savings',
        Quarter: 'Q1',
        Value: costSavingsData.datasets[0].data[0],
      },
      {
        Section: 'Cost Savings',
        Quarter: 'Q2',
        Value: costSavingsData.datasets[0].data[1],
      },
      {
        Section: 'Cost Savings',
        Quarter: 'Q3',
        Value: costSavingsData.datasets[0].data[2],
      },
      {
        Section: 'Cost Savings',
        Quarter: 'Q4',
        Value: costSavingsData.datasets[0].data[3],
      },
    ];

    // Convert data to CSV using PapaParse
    const csv = Papa.unparse(dataToExport);

    // Create a Blob and trigger download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'business_metrics_report.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Business Metrics</h1>
          <button
            onClick={exportReport}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Download className="w-5 h-5 mr-2" />
            Export Report
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Performance Trends
            </h3>
            <div className="h-64">
              <Line
                data={performanceData}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    },
                  },
                }}
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Team Progress
            </h3>
            <div className="h-64">
              <Doughnut
                data={teamData}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    },
                  },
                }}
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Cost Savings
            </h3>
            <div className="h-64">
              <Bar
                data={costSavingsData}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    },
                  },
                }}
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Key Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, label: 'ROI', value: '+45%' },
                { icon: Users, label: 'Team Adoption', value: '92%' },
                { icon: BookOpen, label: 'Training Progress', value: '78%' },
                { icon: DollarSign, label: 'Cost Reduction', value: '35%' },
              ].map((metric, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <metric.icon className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      {metric.label}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
