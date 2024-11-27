import React from 'react';
import { Star, Clock, Users as Group } from 'lucide-react';

const courses = [
  {
    title: "AI for Business Leaders",
    instructor: "Dr. Sarah Chen",
    rating: 4.9,
    students: 1234,
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
    price: "$499"
  },
  {
    title: "Machine Learning Implementation",
    instructor: "Prof. Michael Roberts",
    rating: 4.8,
    students: 892,
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=400",
    price: "$599"
  },
  {
    title: "AI Strategy & Transformation",
    instructor: "Emma Thompson",
    rating: 4.9,
    students: 756,
    duration: "4 weeks",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400",
    price: "$399"
  }
];

export default function FeaturedCourses() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular courses designed to help you master AI implementation
            in your specific industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.instructor}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">{course.rating}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Group className="w-5 h-5 mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-1" />
                    {course.duration}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}