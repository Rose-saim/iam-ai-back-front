import React from 'react';
import { Database, Server, Shield, Globe, Clock, HardDrive } from 'lucide-react';

export default function SystemSettings() {
  const systemStats = [
    {
      title: 'CPU Usage',
      value: '45%',
      icon: <Server className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Memory Usage',
      value: '6.2/8 GB',
      icon: <HardDrive className="w-5 h-5 text-green-600" />
    },
    {
      title: 'Storage',
      value: '234/500 GB',
      icon: <Database className="w-5 h-5 text-purple-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
          <p className="mt-1 text-sm text-gray-500">
            Configure and monitor system performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {systemStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-50 p-2 rounded-lg">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">{stat.title}</h3>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-6">
              <Shield className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold ml-2">Security Settings</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  name: 'SSL Certificate',
                  status: 'Valid',
                  expiry: '2025-02-15'
                },
                {
                  name: 'Firewall',
                  status: 'Active',
                  lastUpdated: '2024-02-10'
                },
                {
                  name: 'Backup Encryption',
                  status: 'Enabled',
                  type: 'AES-256'
                }
              ].map((setting, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{setting.name}</h3>
                    <p className="text-sm text-gray-500">
                      Status: <span className="text-green-600">{setting.status}</span>
                    </p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Configure
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-6">
              <Globe className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold ml-2">Server Configuration</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Server Region
                </label>
                <select className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>US East (N. Virginia)</option>
                  <option>US West (Oregon)</option>
                  <option>Europe (Ireland)</option>
                  <option>Asia Pacific (Tokyo)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cache Settings
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Cache size (MB)"
                    className="border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="TTL (seconds)"
                    className="border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maintenance Window
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <select className="border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>Sunday</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                  </select>
                  <input
                    type="time"
                    className="border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Save Configuration
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-6">
              <Clock className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold ml-2">System Logs</h2>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
              <div className="space-y-2">
                {[
                  '[2024-02-15 10:30:15] System backup completed successfully',
                  '[2024-02-15 10:15:22] Security scan completed - No threats detected',
                  '[2024-02-15 10:00:05] Cache cleared and rebuilt',
                  '[2024-02-15 09:45:18] Server resources optimized'
                ].map((log, index) => (
                  <div key={index} className="text-gray-600">{log}</div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View Full Logs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}