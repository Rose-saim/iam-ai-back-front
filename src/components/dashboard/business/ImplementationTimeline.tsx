import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

const timeline = [
  {
    phase: "Assessment & Planning",
    status: "completed",
    date: "Jan 2024",
    description: "Initial evaluation and strategy development"
  },
  {
    phase: "Team Training",
    status: "in-progress",
    date: "Feb-Mar 2024",
    description: "Staff training on AI tools and processes"
  },
  {
    phase: "Pilot Implementation",
    status: "upcoming",
    date: "Apr 2024",
    description: "Initial deployment and testing"
  },
  {
    phase: "Full Deployment",
    status: "upcoming",
    date: "May 2024",
    description: "Complete system rollout"
  }
];

export default function ImplementationTimeline() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-8 h-full w-0.5 bg-gray-200"></div>
      <div className="space-y-8">
        {timeline.map((item, index) => (
          <div key={index} className="relative flex items-start">
            <div className="absolute left-8 w-0.5 h-full bg-gray-200"></div>
            <div className={`flex items-center justify-center w-16 h-16 rounded-full ${
              item.status === 'completed' ? 'bg-green-100' :
              item.status === 'in-progress' ? 'bg-blue-100' :
              'bg-gray-100'
            }`}>
              {item.status === 'completed' ? (
                <CheckCircle className="w-8 h-8 text-green-600" />
              ) : item.status === 'in-progress' ? (
                <Clock className="w-8 h-8 text-blue-600" />
              ) : (
                <AlertCircle className="w-8 h-8 text-gray-400" />
              )}
            </div>
            <div className="ml-6">
              <div className="flex items-center">
                <h3 className="text-lg font-medium text-gray-900">{item.phase}</h3>
                <span className="ml-4 text-sm text-gray-500">{item.date}</span>
              </div>
              <p className="mt-1 text-gray-600">{item.description}</p>
              {item.status === 'in-progress' && (
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}