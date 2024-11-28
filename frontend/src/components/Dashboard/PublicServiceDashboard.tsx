import React from 'react';
import { Building2, Users, FileText, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PublicServiceDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Public Service Dashboard</h1>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Active Services</h3>
            <Building2 className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold">8</p>
          <p className="text-sm text-gray-600">Municipal services optimized</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Citizen Engagement</h3>
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold">92%</p>
          <p className="text-sm text-gray-600">Satisfaction rate</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Reports Generated</h3>
            <FileText className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold">24</p>
          <p className="text-sm text-gray-600">This month</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Resource Optimization</h3>
            <BarChart className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold">35%</p>
          <p className="text-sm text-gray-600">Cost reduction</p>
        </div>
      </div>

      {/* Case Studies and Reports */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Latest Case Studies</h2>
        <div className="space-y-4">
          {[
            {
              title: "Smart City Implementation Success",
              department: "Municipal Services",
              date: "March 2024"
            },
            {
              title: "AI-Driven Resource Allocation",
              department: "Public Works",
              date: "February 2024"
            },
            {
              title: "Citizen Engagement Platform Results",
              department: "Community Services",
              date: "January 2024"
            }
          ].map((study, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">{study.title}</p>
                <p className="text-sm text-gray-600">{study.department} • {study.date}</p>
              </div>
              <Link
                to={`/case-studies/${index}`}
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
              >
                View Report
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Active Projects */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">Active Projects</h2>
        <div className="space-y-4">
          {[
            {
              name: "Smart Traffic Management",
              progress: 75,
              status: "On Track"
            },
            {
              name: "Waste Collection Optimization",
              progress: 45,
              status: "In Progress"
            },
            {
              name: "Citizen Service Portal",
              progress: 90,
              status: "Near Completion"
            }
          ].map((project, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{project.name}</h3>
                <span className="text-sm text-blue-600">{project.status}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-600">{project.progress}% Complete</span>
                <Link
                  to={`/projects/${index}`}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}