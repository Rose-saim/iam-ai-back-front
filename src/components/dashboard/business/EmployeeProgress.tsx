import React from 'react';
import { BookOpen, Award } from 'lucide-react';

const employees = [
  {
    id: 1,
    name: "John Smith",
    role: "Project Manager",
    progress: 85,
    courses: 4,
    certifications: 2
  },
  {
    id: 2,
    name: "Alice Johnson",
    role: "Data Analyst",
    progress: 65,
    courses: 3,
    certifications: 1
  },
  {
    id: 3,
    name: "Robert Wilson",
    role: "Business Analyst",
    progress: 92,
    courses: 5,
    certifications: 3
  }
];

export default function EmployeeProgress() {
  return (
    <div className="space-y-4">
      {employees.map((employee) => (
        <div key={employee.id} className="p-4 border rounded-lg hover:bg-gray-50 transition">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-gray-900">{employee.name}</h3>
              <p className="text-sm text-gray-500">{employee.role}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <BookOpen className="w-4 h-4 mr-1" />
                <span>{employee.courses} courses</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Award className="w-4 h-4 mr-1" />
                <span>{employee.certifications} certs</span>
              </div>
            </div>
          </div>
          
          <div className="mt-2">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Overall Progress</span>
              <span>{employee.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${employee.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}