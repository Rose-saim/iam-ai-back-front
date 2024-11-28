import React from 'react';
import { Play, Clock, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "AI Fundamentals",
    progress: 75,
    duration: "2h remaining",
    rating: 4.8,
    nextLesson: "Neural Networks Basics"
  },
  {
    id: 2,
    title: "Machine Learning Essentials",
    progress: 45,
    duration: "4h remaining",
    rating: 4.9,
    nextLesson: "Supervised Learning"
  }
];

export default function CourseProgress() {
  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <div key={course.id} className="p-4 border rounded-lg hover:bg-gray-50 transition">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-gray-900">{course.title}</h3>
              <p className="text-sm text-gray-500">Next: {course.nextLesson}</p>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500 flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {course.duration}
            </span>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <Play className="w-4 h-4 mr-2" />
              Continue
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}