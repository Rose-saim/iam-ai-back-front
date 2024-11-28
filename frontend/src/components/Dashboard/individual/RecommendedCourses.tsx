import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Star, Clock } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Advanced Neural Networks",
    description: "Deep dive into neural network architectures",
    duration: "8 weeks",
    rating: 4.9,
    match: "95%",
    price: 299
  },
  {
    id: 2,
    title: "AI Ethics & Governance",
    description: "Understanding ethical AI implementation",
    duration: "6 weeks",
    rating: 4.8,
    match: "90%",
    price: 249
  }
];

export default function RecommendedCourses() {
  const navigate = useNavigate();

  const handleEnroll = (courseId: number) => {
    navigate(`/dashboard/courses/${courseId}/enroll`);
  };

  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <div key={course.id} className="p-4 border rounded-lg hover:bg-gray-50 transition">
          <Link to={`/dashboard/courses/${course.id}`}>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-gray-900">{course.title}</h3>
                <p className="text-sm text-gray-500">{course.description}</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                {course.match} match
              </span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <span className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </span>
                <span className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  {course.rating}
                </span>
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  handleEnroll(course.id);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Enroll Now
              </button>
            </div>
          </Link>
        </div>
      ))}
      
      <Link 
        to="/dashboard/courses"
        className="block text-center text-blue-600 hover:text-blue-700 mt-4"
      >
        View All Courses
      </Link>
    </div>
  );
}