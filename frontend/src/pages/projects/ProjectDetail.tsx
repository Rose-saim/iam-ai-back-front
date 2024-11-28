import React from 'react';
import { useParams } from 'react-router-dom';
import { FileText, Users, Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();

  // This would typically come from an API
  const project = {
    title: "AI-Powered Customer Service Enhancement",
    status: "In Progress",
    progress: 65,
    startDate: "2024-01-15",
    endDate: "2024-04-15",
    team: [
      {
        name: "Sarah Chen",
        role: "Project Lead",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Michael Roberts",
        role: "AI Engineer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
      }
    ],
    description: "Implementation of AI-driven customer service solutions to enhance response times and customer satisfaction.",
    objectives: [
      "Reduce response time by 50%",
      "Increase customer satisfaction to 95%",
      "Automate 70% of routine inquiries",
      "Implement sentiment analysis"
    ],
    milestones: [
      {
        title: "Requirements Analysis",
        status: "completed",
        date: "2024-01-30"
      },
      {
        title: "System Design",
        status: "completed",
        date: "2024-02-15"
      },
      {
        title: "Implementation",
        status: "in-progress",
        date: "2024-03-30"
      },
      {
        title: "Testing & Deployment",
        status: "pending",
        date: "2024-04-15"
      }
    ],
    metrics: [
      {
        label: "Tasks Completed",
        value: "24/36"
      },
      {
        label: "Time Spent",
        value: "320 hours"
      },
      {
        label: "Budget Used",
        value: "65%"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Project Header */}
          <div className="p-8 border-b">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-gray-500">
                    {project.startDate} - {project.endDate}
                  </span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Edit Project
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  Generate Report
                </button>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {project.metrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">{metric.label}</p>
                  <p className="text-xl font-semibold">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 divide-x divide-gray-200">
            {/* Main Content */}
            <div className="md:col-span-2 p-8">
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Project Description</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Objectives</h2>
                <ul className="space-y-3">
                  {project.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-600">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Milestones</h2>
                <div className="space-y-4">
                  {project.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          milestone.status === 'completed'
                            ? 'bg-green-100 text-green-600'
                            : milestone.status === 'in-progress'
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div className="ml-4">
                          <p className="font-medium">{milestone.title}</p>
                          <p className="text-sm text-gray-500">{milestone.date}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                        milestone.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : milestone.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {milestone.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Project Team</h2>
                <div className="space-y-4">
                  {project.team.map((member, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="ml-3">
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {[
                    {
                      action: "Milestone completed",
                      detail: "System Design phase completed",
                      time: "2 hours ago"
                    },
                    {
                      action: "New task added",
                      detail: "Implementation of chatbot features",
                      time: "1 day ago"
                    },
                    {
                      action: "Progress update",
                      detail: "65% of project completed",
                      time: "2 days ago"
                    }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-gray-500">{activity.detail}</p>
                        <p className="text-xs text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}