import React, { useState } from 'react';
import { Bell, Lock, Globe, Shield, Moon, Sun } from 'lucide-react';

export default function ExpertSettings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const settingsSections = [
    {
      title: 'Notifications',
      icon: <Bell className="w-5 h-5 text-blue-600" />,
      settings: [
        {
          name: 'Email Notifications',
          description: 'Receive updates about missions and courses',
          enabled: notifications
        },
        {
          name: 'Push Notifications',
          description: 'Get instant alerts on your browser',
          enabled: true
        }
      ]
    },
    {
      title: 'Security',
      icon: <Lock className="w-5 h-5 text-blue-600" />,
      settings: [
        {
          name: 'Two-Factor Authentication',
          description: 'Add an extra layer of security',
          enabled: true
        },
        {
          name: 'Login History',
          description: 'Monitor account access',
          enabled: true
        }
      ]
    },
    {
      title: 'Availability',
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      settings: [
        {
          name: 'Available for Missions',
          description: 'Show as available for new projects',
          enabled: true
        },
        {
          name: 'Teaching Hours',
          description: 'Available for training sessions',
          enabled: true
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your account preferences and settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {settingsSections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-6">
                {section.icon}
                <h2 className="text-xl font-semibold ml-2">{section.title}</h2>
              </div>

              <div className="space-y-6">
                {section.settings.map((setting, settingIndex) => (
                  <div key={settingIndex} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{setting.name}</h3>
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={setting.enabled}
                        onChange={() => {
                          if (setting.name === 'Email Notifications') {
                            setNotifications(!notifications);
                          }
                        }}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-6">
              <Shield className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold ml-2">Privacy</h2>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Profile visibility', description: 'Make your profile visible to others' },
                { label: 'Share analytics', description: 'Share anonymous usage data' },
                { label: 'Cookie preferences', description: 'Manage cookie settings' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{item.label}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-6">
              <Moon className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold ml-2">Appearance</h2>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Dark Mode</h3>
                <p className="text-sm text-gray-500">Toggle dark mode theme</p>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                {darkMode ? (
                  <Moon className="w-5 h-5 text-gray-600" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-500" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}