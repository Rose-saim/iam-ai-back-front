import React from 'react';
import { BookOpen, Users, Star, Clock } from 'lucide-react';

export default function ExpertCourses() {
  const courses = [
    {
      id: 1,
      title: "Advanced AI & Machine Learning",
      description: "Master the fundamentals and advanced concepts of AI and ML",
      students: 856,
      rating: 4.9,
      reviews: 234,
      duration: "12 weeks",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      title: "Deep Learning Specialization",
      description: "Comprehensive guide to neural networks and deep learning",
      students: 645,
      rating: 4.8,
      reviews: 189,
      duration: "10 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1676277791608-ac54525aa94d?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      title: "Computer Vision with TensorFlow",
      description: "Build real-world computer vision applications",
      students: 423,
      rating: 4.7,
      reviews: 156,
      duration: "8 weeks",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1676277791576-b7f1581e0c76?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and monitor your course offerings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({course.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                    Edit Course
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    View Stats
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="bg-white border-2 border-blue-600 text-blue-600 py-2 px-6 rounded-lg hover:bg-blue-50 transition flex items-center">
            <BookOpen className="w-5 h-5 mr-2" />
            Create New Course
          </button>
        </div>
      </div>
    </div>
  );
}