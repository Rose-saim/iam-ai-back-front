import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, Settings, BarChart2, Shield } from 'lucide-react';
import { useAuth } from '../../lib/auth/context';
import AdminQuickActions from '../../components/dashboard/AdminQuickActions';

export default function AdminDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user?.isAdmin) {
      navigate('/login');
    }
  }, [user, navigate]);

  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: <Users className="w-5 h-5 text-blue-600" />,
      change: "+12%"
    },
    {
      title: "Active Courses",
      value: "45",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      change: "+5%"
    },
    {
      title: "System Health",
      value: "98%",
      icon: <Settings className="w-5 h-5 text-blue-600" />,
      change: "+1%"
    },
    {
      title: "Security Status",
      value: "Strong",
      icon: <Shield className="w-5 h-5 text-green-600" />,
      change: "Secure"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your platform and monitor key metrics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-500">{stat.title}</h3>
                {stat.icon}
              </div>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p className="ml-2 text-sm font-medium text-green-600">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
          <AdminQuickActions />
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              {
                action: "New user registration",
                time: "5 minutes ago",
                icon: <Users className="w-5 h-5 text-blue-600" />
              },
              {
                action: "Course content updated",
                time: "1 hour ago",
                icon: <BookOpen className="w-5 h-5 text-blue-600" />
              },
              {
                action: "System backup completed",
                time: "2 hours ago",
                icon: <Settings className="w-5 h-5 text-blue-600" />
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-blue-50 p-2 rounded-lg">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}