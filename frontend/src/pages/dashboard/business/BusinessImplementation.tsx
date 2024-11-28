import React, { useState } from 'react';
import { Clock, Download, Plus, X, CheckCircle, AlertCircle } from 'lucide-react';

interface Phase {
  id: number;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  progress: number;
  startDate: string;
  endDate: string;
  tasks: {
    id: number;
    title: string;
    status: 'completed' | 'in-progress' | 'pending';
    assignee: string;
  }[];
  description: string;
}

export default function BusinessImplementation() {
  const [showAddPhaseModal, setShowAddPhaseModal] = useState(false);
  const [phases] = useState<Phase[]>([
    {
      id: 1,
      title: "Assessment & Planning",
      status: "completed",
      progress: 100,
      startDate: "2024-01-01",
      endDate: "2024-01-31",
      description: "Initial evaluation and strategy development phase",
      tasks: [
        { id: 1, title: "Initial Assessment", status: "completed", assignee: "Sarah Chen" },
        { id: 2, title: "Strategy Development", status: "completed", assignee: "Michael Roberts" },
        { id: 3, title: "Resource Planning", status: "completed", assignee: "John Smith" }
      ]
    },
    {
      id: 2,
      title: "Team Training",
      status: "in-progress",
      progress: 65,
      startDate: "2024-02-01",
      endDate: "2024-03-31",
      description: "Comprehensive team training on AI tools and processes",
      tasks: [
        { id: 4, title: "Basic AI Training", status: "completed", assignee: "Emma Thompson" },
        { id: 5, title: "Advanced Modules", status: "in-progress", assignee: "Sarah Chen" },
        { id: 6, title: "Practical Workshops", status: "pending", assignee: "Michael Roberts" }
      ]
    },
    {
      id: 3,
      title: "Implementation",
      status: "upcoming",
      progress: 0,
      startDate: "2024-04-01",
      endDate: "2024-05-31",
      description: "Deployment and integration of AI solutions",
      tasks: [
        { id: 7, title: "Initial Setup", status: "pending", assignee: "John Smith" },
        { id: 8, title: "System Integration", status: "pending", assignee: "Sarah Chen" },
        { id: 9, title: "Testing & Validation", status: "pending", assignee: "Emma Thompson" }
      ]
    }
  ]);

  const handleExportPlan = () => {
    // Préparer les données pour l'export
    const planData = {
      date: new Date().toLocaleDateString(),
      phases: phases.map(phase => ({
        title: phase.title,
        status: phase.status,
        progress: phase.progress,
        timeline: `${phase.startDate} to ${phase.endDate}`,
        tasks: phase.tasks.map(task => ({
          title: task.title,
          status: task.status,
          assignee: task.assignee
        }))
      }))
    };

    // Créer le contenu CSV
    const csvContent = `
Implementation Plan - ${planData.date}

PHASES
------
${planData.phases.map(phase => `
${phase.title}
Status: ${phase.status}
Progress: ${phase.progress}%
Timeline: ${phase.timeline}

Tasks:
${phase.tasks.map(task => `- ${task.title} (${task.status}) - Assigned to: ${task.assignee}`).join('\n')}
`).join('\n')}
    `.trim();

    // Créer un Blob avec les données
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // Créer un lien de téléchargement
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `implementation_plan_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    
    // Déclencher le téléchargement
    link.click();
    
    // Nettoyer
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Implementation Plan</h1>
            <p className="mt-1 text-sm text-gray-500">
              Track and manage your AI implementation progress
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowAddPhaseModal(true)}
              className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Phase
            </button>
            <button
              onClick={handleExportPlan}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Download className="w-5 h-5 mr-2" />
              Export Plan
            </button>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Overall Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: '65%' }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Phase 2 of 4</span>
            <span>65% Complete</span>
          </div>
        </div>

        {/* Implementation Phases */}
        <div className="space-y-6">
          {phases.map((phase) => (
            <div key={phase.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {phase.status === 'completed' ? (
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    ) : phase.status === 'in-progress' ? (
                      <Clock className="w-6 h-6 text-blue-500 mr-3" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-gray-400 mr-3" />
                    )}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{phase.title}</h3>
                      <p className="text-sm text-gray-500">
                        {phase.startDate} - {phase.endDate}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    phase.status === 'completed' ? 'bg-green-100 text-green-800' :
                    phase.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{phase.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{phase.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        phase.status === 'completed' ? 'bg-green-500' :
                        phase.status === 'in-progress' ? 'bg-blue-500' :
                        'bg-gray-400'
                      }`}
                      style={{ width: `${phase.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  {phase.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          task.status === 'completed' ? 'bg-green-500' :
                          task.status === 'in-progress' ? 'bg-blue-500' :
                          'bg-gray-400'
                        }`} />
                        <span className="text-gray-900">{task.title}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-4">
                          {task.assignee}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          task.status === 'completed' ? 'bg-green-100 text-green-800' :
                          task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Phase Modal */}
      {showAddPhaseModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Add New Phase</h2>
              <button
                onClick={() => setShowAddPhaseModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phase Title
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter phase title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Enter phase description"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddPhaseModal(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Add Phase
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}