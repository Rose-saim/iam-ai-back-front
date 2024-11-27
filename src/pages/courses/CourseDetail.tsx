import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Star, Play, Download, Award, ArrowLeft } from 'lucide-react';

export default function CourseDetail() {
  const { id } = useParams();

  // This would typically come from an API
  const course = {
    title: "AI Fundamentals",
    instructor: "Dr. Sarah Chen",
    rating: 4.9,
    students: 1234,
    duration: "8 weeks",
    price: "$399",
    description: "Master the core concepts and principles of artificial intelligence in this comprehensive course.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2940",
    modules: [
      {
        title: "Introduction to AI",
        lessons: [
          "What is Artificial Intelligence?",
          "History of AI",
          "Types of AI Systems"
        ],
        duration: "2 hours"
      },
      {
        title: "Machine Learning Basics",
        lessons: [
          "Understanding Machine Learning",
          "Supervised vs Unsupervised Learning",
          "Common ML Algorithms"
        ],
        duration: "3 hours"
      }
    ],
    requirements: [
      "Basic programming knowledge",
      "Understanding of mathematics",
      "Computer with internet connection"
    ],
    outcomes: [
      "Understand core AI concepts",
      "Implement basic AI algorithms",
      "Evaluate AI solutions",
      "Deploy AI models"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/courses"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Courses
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h1>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-400 mr-1" />
                    <span className="text-gray-600">{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-gray-400 mr-1" />
                    <span className="text-gray-600">{course.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-8">{course.description}</p>

                <div className="space-y-8">
                  {/* Course Content */}
                  <div>
                    <h2 className="text-xl font-bold mb-4">Course Content</h2>
                    <div className="space-y-4">
                      {course.modules.map((module, index) => (
                        <div key={index} className="border rounded-lg">
                          <div className="p-4 bg-gray-50 flex justify-between items-center">
                            <h3 className="font-medium">{module.title}</h3>
                            <span className="text-sm text-gray-500">{module.duration}</span>
                          </div>
                          <ul className="p-4 space-y-2">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <li key={lessonIndex} className="flex items-center text-gray-600">
                                <Play className="w-4 h-4 mr-2" />
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h2 className="text-xl font-bold mb-4">Requirements</h2>
                    <ul className="space-y-2">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">✓</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learning Outcomes */}
                  <div>
                    <h2 className="text-xl font-bold mb-4">What You'll Learn</h2>
                    <ul className="space-y-2">
                      {course.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">✓</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <div className="text-3xl font-bold text-gray-900 mb-6">
                {course.price}
              </div>

              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Enroll Now
                </button>

                <button className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Syllabus
                </button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-4">This course includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <Play className="w-5 h-5 text-gray-400 mr-2" />
                    24 hours of video content
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Download className="w-5 h-5 text-gray-400 mr-2" />
                    Downloadable resources
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Award className="w-5 h-5 text-gray-400 mr-2" />
                    Certificate of completion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}