import React from 'react';
import { Award, Clock, Download } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "AI Implementation Specialist",
    progress: 75,
    requiredCourses: 4,
    completedCourses: 3,
    estimatedCompletion: "Apr 15, 2024"
  },
  {
    id: 2,
    title: "Machine Learning Expert",
    progress: 45,
    requiredCourses: 5,
    completedCourses: 2,
    estimatedCompletion: "May 20, 2024"
  }
];

export default function Certifications() {
  return (
    <div className="space-y-6">
      {certifications.map((cert) => (
        <div key={cert.id} className="border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Award className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">{cert.title}</h3>
                <p className="text-sm text-gray-500">
                  {cert.completedCourses} of {cert.requiredCourses} courses completed
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-500 flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              Est. completion: {cert.estimatedCompletion}
            </span>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>{cert.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${cert.progress}%` }}
              ></div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
              <Download className="w-4 h-4 mr-2" />
              Download Certificate
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}