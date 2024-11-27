import React from 'react';
import { Settings, Play, AlertCircle, Check } from 'lucide-react';

export default function AITools() {
  const tools = [
    {
      name: "AI Analytics Dashboard",
      description: "Real-time data analysis and visualization",
      status: "Active",
      lastUpdated: "2 hours ago",
      integration: "Complete"
    },
    {
      name: "Process Automation Engine",
      description: "Automated workflow management",
      status: "Setup Required",
      lastUpdated: "1 day ago",
      integration: "Pending"
    },
    {
      name: "Machine Learning Pipeline",
      description: "Model training and deployment",
      status: "Active",
      lastUpdated: "3 hours ago",
      integration: "Complete"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">AI Tools</h1>
          <p className="mt-1 text-sm text-gray-500">
            Configure and manage your AI implementation tools
          </p>
        </div>

        <div className="grid gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">{tool.name}</h2>
                    <p className="text-sm text-gray-500">{tool.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    tool.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {tool.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Integration Status</p>
                        <div className="flex items-center mt-1">
                          {tool.integration === 'Complete' ? (
                            <Check className="w-4 h-4 text-green-500 mr-1" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-yellow-500 mr-1" />
                          )}
                          <span className="text-sm text-gray-600">
                            {tool.integration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Last Updated</p>
                        <p className="text-sm text-gray-600 mt-1">{tool.lastUpdated}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  {tool.status === 'Active' ? (
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      <Play className="w-4 h-4 mr-2" />
                      Launch Tool
                    </button>
                  ) : (
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      <Settings className="w-4 h-4 mr-2" />
                      Complete Setup
                    </button>
                  )}
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    View Documentation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}