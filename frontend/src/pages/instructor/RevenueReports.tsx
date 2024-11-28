import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, TrendingUp, Calendar, Download, CreditCard } from 'lucide-react';
import { useAuth } from '../../lib/auth/context';

export default function RevenueReports() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const metrics = [
    {
      title: "Total Revenue",
      value: "$12,460",
      change: "+15%",
      period: "This Month"
    },
    {
      title: "Average Course Price",
      value: "$399",
      change: "+5%",
      period: "Per Course"
    },
    {
      title: "Revenue per Student",
      value: "$48.67",
      change: "+8%",
      period: "This Month"
    },
    {
      title: "Pending Payouts",
      value: "$3,240",
      change: "Processing",
      period: "Next Payout"
    }
  ];

  const transactions = [
    {
      id: "TRX001",
      date: "2024-02-15",
      course: "AI Fundamentals",
      amount: "$399",
      status: "Completed"
    },
    {
      id: "TRX002",
      date: "2024-02-14",
      course: "Machine Learning Mastery",
      amount: "$599",
      status: "Completed"
    },
    {
      id: "TRX003",
      date: "2024-02-13",
      course: "Neural Networks Deep Dive",
      amount: "$799",
      status: "Processing"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Revenue Reports</h1>
            <p className="mt-1 text-sm text-gray-500">
              Track your earnings and financial performance
            </p>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <Download className="w-5 h-5 mr-2" />
            Export Report
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-500">{metric.title}</h3>
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                <p className="ml-2 text-sm font-medium text-green-600">{metric.change}</p>
              </div>
              <p className="text-sm text-gray-500 mt-1">{metric.period}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Revenue Trends</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <TrendingUp className="w-12 h-12 text-gray-400" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Revenue by Course</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <DollarSign className="w-12 h-12 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Transactions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {transaction.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.course}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          transaction.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {transaction.status}
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