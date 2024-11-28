import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Target, Award, ArrowRight } from 'lucide-react';
import ContactForm from '../../../components/ContactForm';

const courses = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "AI Fundamentals",
    description: "Master the core concepts and principles of artificial intelligence.",
    duration: "8 weeks"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Applied Machine Learning",
    description: "Hands-on training in practical ML applications.",
    duration: "10 weeks"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "AI Implementation",
    description: "Learn to integrate AI solutions in real-world scenarios.",
    duration: "12 weeks"
  }
];

const benefits = [
  "Personalized learning path",
  "Industry-specific case studies",
  "Hands-on project experience",
  "Expert mentorship",
  "Networking opportunities",
  "Career guidance"
];

export default function AITraining() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional AI Training Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advance your career with comprehensive AI training designed for professionals.
            Learn from industry experts and gain practical implementation experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                {course.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-500 text-sm mb-2">Duration: {course.duration}</p>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Program Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your AI Journey Today</h2>
          <p className="text-lg mb-8 opacity-90">
            Courses starting from €999, with flexible payment options available.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Enroll Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Download Course Catalog
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Contact Us</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}