import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Key, AlertTriangle } from 'lucide-react';
import { useAuth } from '../../lib/auth/context';

export default function Security() {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user?.isAdmin) {
      navigate('/login');
    }
  }, [user, navigate]);

  const securitySettings = [
    {
      category: "Authentication",
      settings: [
        {
          title: "Two-Factor Authentication",
          description: "Require 2FA for all admin accounts",
          enabled: true
        },
        {
          title: "Password Policy",
          description: "Minimum 12 characters with special characters",
          enabled: true
        }
      ]
    },
    {
      category: "Access Control",
      settings: [
        {
          title: "IP Whitelisting",
          description: "Restrict admin access to specific IP ranges",
          enabled: false
        },
        {
          title: "Session Timeout",
          description: "Automatically logout after 30 minutes of inactivity",
          enabled: true
        }
      ]
    }
  ];

  const recentActivity = [
    {
      event: "Failed login attempt",
      ip: "192.168.1.1",
      time: "5 minutes ago",
      severity: "high"
    },
    {
      event: "Security settings updated",
      ip: "192.168.1.2",
      time: "1 hour ago",
      severity: "medium"
    },
    {
      event: "New admin user added",
      ip: "192.168.1.3",
      time: "2 hours ago",
      severity: "low"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Security Settings</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage platform security and access controls
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {securitySettings.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">{category.category}</h2>
                <div className="space-y-6">
                  {category.settings.map((setting, settingIndex) => (
                    <div key={settingIndex} className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{setting.title}</h3>
                        <p className="text-sm text-gray-500">{setting.description}</p>
                      </div>
                      <div className="flex items-center">
                        <button
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                            setting.enabled ? 'bg-blue-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${
                              setting.enabled ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`p-1 rounded-full ${
                      activity.severity === 'high' ? 'bg-red-100' :
                      activity.severity === 'medium' ? 'bg-yellow-100' :
                      'bg-green-100'
                    }`}>
                      <AlertTriangle className={`w-4 h-4 ${
                        activity.severity === 'high' ? 'text-red-600' :
                        activity.severity === 'medium' ? 'text-yellow-600' :
                        'text-green-600'
                      }`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.event}</p>
                      <p className="text-xs text-gray-500">
                        {activity.ip} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Security Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Security Score</span>
                  <span className="text-sm font-medium text-green-600">92/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}