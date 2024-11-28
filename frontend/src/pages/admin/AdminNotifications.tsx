import React from 'react';
import { Bell, AlertCircle, CheckCircle, Info, Settings } from 'lucide-react';

export default function AdminNotifications() {
  const notifications = [
    {
      id: 1,
      type: 'alert',
      title: 'System Update Required',
      message: 'A new security update is available for installation',
      time: '5 minutes ago',
      icon: <AlertCircle className="w-5 h-5 text-red-600" />,
      unread: true
    },
    {
      id: 2,
      type: 'success',
      title: 'Backup Completed',
      message: 'System backup has been successfully completed',
      time: '1 hour ago',
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      unread: true
    },
    {
      id: 3,
      type: 'info',
      title: 'New User Registration',
      message: '5 new users have registered in the last hour',
      time: '2 hours ago',
      icon: <Info className="w-5 h-5 text-blue-600" />,
      unread: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage system notifications and alerts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Recent Notifications</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Mark all as read
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-6 hover:bg-gray-50 transition ${
                      notification.unread ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">{notification.icon}</div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900">
                            {notification.title}
                          </h3>
                          <p className="text-sm text-gray-500">{notification.time}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-6">
                <Bell className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold ml-2">Notification Settings</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'System Alerts',
                    description: 'Critical updates and security notifications'
                  },
                  {
                    title: 'User Activity',
                    description: 'New registrations and user actions'
                  },
                  {
                    title: 'Performance Alerts',
                    description: 'System performance and health updates'
                  }
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{setting.title}</h3>
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-6">
                <Settings className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold ml-2">Email Preferences</h2>
              </div>

              <div className="space-y-4">
                {[
                  'Daily Digest',
                  'Weekly Summary',
                  'Monthly Report'
                ].map((preference, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      defaultChecked={index === 1}
                    />
                    <span className="ml-2 text-gray-700">{preference}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}