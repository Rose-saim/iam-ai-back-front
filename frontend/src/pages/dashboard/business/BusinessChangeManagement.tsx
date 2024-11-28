import React from 'react';
import { Users, TrendingUp, AlertCircle } from 'lucide-react';

export default function BusinessChangeManagement() {
  const phases = [
    {
      title: "Awareness",
      progress: 85,
      status: "Completed",
      tasks: [
        { name: "Initial Assessment", completed: true },
        { name: "Communication Plan", completed: true },
        { name: "Stakeholder Analysis", completed: true }
      ]
    },
    {
      title: "Training",
      progress: 60,
      status: "In Progress",
      tasks: [
        { name: "Basic AI Training", completed: true },
        { name: "Tool-specific Training", completed: false },
        { name: "Process Integration", completed: false }
      ]
    },
    {
      title: "Implementation",
      progress: 30,
      status: "In Progress",
      tasks: [
        { name: "Pilot Program", completed: true },
        { name: "Department Rollout", completed: false },
        { name: "System Integration", completed: false }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Change Management</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track and manage organizational change during AI implementation
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Team Readiness</h3>
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">85%</p>
            <p className="text-sm text-gray-600">Overall adoption rate</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Implementation Progress</h3>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-2xl font-bold">60%</p>
            <p className="text-sm text-gray-600">Of planned changes</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">Risk Level</h3>
              <AlertCircle className="w-5 h-5 text-yellow-600" />
            </div>
            <p className="text-2xl font-bold">Low</p>
            <p className="text-sm text-gray-600">2 minor concerns</p>
          </div>
        </div>

        {/* Phase Tracking */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Change Management Phases</h2>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="border-b last:border-b-0 pb-6 last:pb-0">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium text-gray-900">{phase.title}</h3>
                    <p className="text-sm text-gray-500">{phase.status}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {phase.progress}% Complete
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${phase.progress}%` }}
                  ></div>
                </div>

                <div className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <div
                      key={taskIndex}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-gray-700">{task.name}</span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        task.completed
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {task.completed ? 'Completed' : 'Pending'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Management */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Risk Management</h2>
          <div className="space-y-4">
            {[
              {
                risk: "Training Completion Delays",
                impact: "Medium",
                mitigation: "Additional training sessions scheduled"
              },
              {
                risk: "User Adoption Resistance",
                impact: "Low",
                mitigation: "Enhanced communication and support"
              }
            ].map((risk, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{risk.risk}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    risk.impact === 'Low' ? 'bg-green-100 text-green-800' :
                    risk.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {risk.impact} Impact
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Mitigation: {risk.mitigation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}