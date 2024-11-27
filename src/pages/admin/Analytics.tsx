import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart2, TrendingUp, Users, BookOpen, DollarSign } from 'lucide-react';
import { useAuth } from '../../lib/auth/context';

export default function Analytics() {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user?.isAdmin) {
      navigate('/login');
    }
  }, [user, navigate]);

  const metrics = [
    {
      title: "Total Revenue",
      value: "$124,592",
      change: "+12.5%",
      icon: <DollarSign className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Active Users",
      value: "2,847",
      change: "+8.2%",
      icon: <Users className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Course Completion",
      value: "85%",
      change: "+5.1%",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Growth Rate",
      value: "23%",
      change: "+2.4%",
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor platform performance and key metrics
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Revenue Overview</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              {/* Placeholder for revenue chart */}
              <BarChart2 className="w-12 h-12 text-gray-400" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">User Growth</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              {/* Placeholder for user growth chart */}
              <TrendingUp className="w-12 h-12 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}